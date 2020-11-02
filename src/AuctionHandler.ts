import { AdUnitCreator } from './adunitcreator';
import { IBannerObject } from './types';
import { COMPLETED, PREBIDAUCTION } from './variables';

export interface IPrebidOptions {
  adserverCallback?: any;
  auctionCompleted?: boolean;
  banners: IBannerObject[];
  consentTimeout?: number;
  debug?: boolean;
  keywords?: string[];
  timeout?: number;
}

export class AuctionHandler {
  constructor(options: IPrebidOptions) {
    const prebidDefault = {
      consentTimeout: 3000000,
      debug: false,
      timeout: 700,
    };
    const auctionSettings = { ...prebidDefault, ...options };
    this.auction(auctionSettings);
  }

  private auction(options: IPrebidOptions) {
    try {
      const pbjs = (window as any).pbjs;

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
      const adUnits = AdUnitCreator(options.banners, options.keywords);
      console.log('prebid: adUnits created?', adUnits);
      pbjs.que.push(() => {
        if (adUnits.length > 0) {
          pbjs.setConfig({
            bidderTimeout: options.timeout,
            cache: {
              url: 'https://prebid.adnxs.com/pbc/v1/cache',
            },
            consentManagement: {
              cmpApi: 'iab',
              timeout: options.consentTimeout,
            },
            debug: options.debug,
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
                            id: (window as any).eb_anon_uuid,
                            atype: 1,
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          });
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
                  console.log('prebid: bidsBackHandler adding apn to pbjs que');
                  apntag.anq.push(() => {
                    pbjs.setTargetingForAst();
                    apntag.loadTags();
                    (window as any).jppolStillWaitingForPrebid = false;
                    console.log('__apn we just loaded prebid banners');
                    console.log(
                      'prebid: bidsBackHandler pbjs.setTargetingForAst() && apntag.loadTags()'
                    );
                  });
                });
              }
              if (typeof options.adserverCallback !== 'undefined') {
                options.adserverCallback(bidResponse);
              }
              window[PREBIDAUCTION][COMPLETED] = true;
            },
          });
        }
      });
    } catch (err) {
      console.error('AuctionHandler auction', err);
    }
  }
}
