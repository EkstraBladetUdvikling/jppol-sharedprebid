import { AdUnitCreator, IBannerObject } from './BidderHandler';
import { COMPLETED, PREBIDAUCTION } from './variables';

export interface IPrebidOptions {
  adserverCallback?: any;
  auctionCompleted?: boolean;
  banners: IBannerObject[];
  consentAllowAuction?: boolean;
  consentTimeout?: number;
  debug?: boolean;
  keywords?: string[];
  timeout?: number;
}

export class AuctionHandler {
  constructor(options: IPrebidOptions) {
    const prebidDefault = {
      consentAllowAuction: true,
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
      if (window[PREBIDAUCTION][COMPLETED]) {
        console.log('prebid: If the auction is completed, remove adunits');
        pbjs.removeAdUnit();
      }

      window[PREBIDAUCTION][COMPLETED] = false;
      const adUnits = AdUnitCreator(options.banners, options.keywords);

      pbjs.que.push(() => {
        if (adUnits.length > 0) {
          pbjs.setConfig({
            bidderTimeout: options.timeout,
            consentManagement: {
              allowAuctionWithoutConsent: options.consentAllowAuction,
              cmpApi: 'iab',
              timeout: options.consentTimeout,
            },
            debug: options.debug,
            priceGranularity: 'high',
            userSync: {
              enabledBidders: ['pubmatic'],
              iframeEnabled: true,
              syncDelay: 6000,
            },
          });
          pbjs.addAdUnits(adUnits);
          console.log('prebid: pbjs.adUnits?', pbjs.adUnits);
          pbjs.requestBids({
            bidsBackHandler: (bidResponse) => {
              console.log('prebid: bidsBackHandler', bidResponse);
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
