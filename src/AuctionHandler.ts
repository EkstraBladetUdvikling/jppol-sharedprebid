import { AdUnitCreator } from './adunitcreator';
import { IBannerObject } from './types';
import { COMPLETED, PREBIDAUCTION } from './variables';

export interface IPrebidOptions {
  adserverCallback?: any;
  auctionCompleted?: boolean;
  banners?: IBannerObject[];
  consentTimeout?: number;
  debug?: boolean;
  eidsAllowed?: boolean;
  keywords?: string[];
  timeout?: number;
}

export class AuctionHandler {
  private auctionSettings;
  private auctionTimeout = null;
  private banners = [];

  constructor(options: IPrebidOptions) {
    const prebidDefault = {
      consentTimeout: 3000000,
      debug: false,
      timeout: 700,
    };
    this.auctionSettings = { ...prebidDefault, ...options };
    if (options.banners) {
      this.add(options);
    }
  }

  public add(options: IPrebidOptions) {
    this.auctionSettings = { ...this.auctionSettings, options };
    console.log('prebid: add auctionSettings', this.auctionSettings);
    this.banners.push(...options.banners);
    this.startAuction();
  }

  private auction(banners: IBannerObject[]) {
    try {
      window.jppolStillWaitingForPrebid = true;
      const pbjs = (window as any).pbjs;

      const {
        adserverCallback,
        consentTimeout,
        debug,
        eidsAllowed,
        keywords,
        timeout: bidderTimeout,
      } = this.auctionSettings;

      console.log(
        'prebid: window[PREBIDAUCTION][COMPLETED]',
        window[PREBIDAUCTION][COMPLETED]
      );

      // If the auction is completed, remove adunits
      if (window[PREBIDAUCTION][COMPLETED] && pbjs.adUnits.length) {
        console.log('prebid: If the auction is completed, remove adunits');
        pbjs.removeAdUnit();
      }

      window[PREBIDAUCTION][COMPLETED] = false;
      const adUnits = AdUnitCreator(banners, keywords, eidsAllowed);
      console.log('prebid: adUnits created?', adUnits);
      pbjs.que.push(() => {
        if (adUnits.length > 0) {
          const pbjsConfig = {
            bidderTimeout,
            cache: {
              url: 'https://prebid.adnxs.com/pbc/v1/cache',
            },
            consentManagement: {
              cmpApi: 'iab',
              timeout: consentTimeout,
            },
            debug,
            gvlMapping: {
              pubProvidedId: 50,
            },
            priceGranularity: 'high',
            userSync: {
              enabledBidders: ['adform'],
              iframeEnabled: true,
              syncDelay: 6000,
              userIds: [
                {
                  name: 'pubProvidedId',
                  params: {
                    eids: [
                      {
                        source: 'firstpartyid',
                        uids: [
                          {
                            atype: 1,
                            id: (window as any).eb_anon_uuid,
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          };
          pbjs.setConfig(pbjsConfig);
          pbjs.addAdUnits(adUnits);
          console.log('prebid: pbjs.adUnits?', pbjs.adUnits);
          pbjs.requestBids({
            bidsBackHandler: (bidResponse) => {
              console.log('prebid: bidsBackHandler', bidResponse);
              console.log(
                'prebid: bidsBackHandler.getAdserverTargeting',
                pbjs.getAdserverTargeting()
              );
              const apntag = (window as any).apntag;
              if (typeof apntag !== 'undefined') {
                pbjs.que.push(() => {
                  apntag.anq.push(() => {
                    pbjs.setTargetingForAst();
                    apntag.loadTags();
                    console.log(
                      'prebid: bidsBackHandler pbjs.setTargetingForAst() && apntag.loadTags()'
                    );
                  });
                });
              }
              if (typeof adserverCallback !== 'undefined') {
                adserverCallback(bidResponse);
              }
              this.reset();
            },
          });
        }
      });
    } catch (err) {
      console.error('prebid: AuctionHandler auction', err);
    }
  }

  private reset() {
    window[PREBIDAUCTION][COMPLETED] = true;
    window.jppolStillWaitingForPrebid = false;
    this.auctionTimeout = null;
    if (this.banners.length) {
      this.startAuction();
    }
  }

  private startAuction() {
    if (!this.auctionTimeout) {
      this.auctionTimeout = setTimeout(() => {
        const currentBanners = [...this.banners];
        this.banners.length = 0;
        console.log('Run prebid now!!! this.banners', this.banners);
        console.log('Run prebid now!!! currentBanners', currentBanners);

        this.auction(currentBanners);
      }, 500);
    }
  }
}
