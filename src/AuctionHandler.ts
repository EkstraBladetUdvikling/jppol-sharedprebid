import { ITrackingOptions, PrebidAnalytics } from './Analytics';
import { AdUnitCreator, IBannerObject } from './BidderHandler';

export interface IPrebidOptions {
  adserverCallback?: any;
  banners: IBannerObject[];
  consentAllowAuction?: boolean;
  consentTimeout?: number;
  debug?: boolean;
  timeout?: number;
  tracking?: ITrackingOptions;
}

export class AuctionHandler {
  constructor(options: IPrebidOptions) {
    const prebidDefault = {
      consentAllowAuction: true,
      consentTimeout: 3000000,
      debug: false,
      timeout: 700
    };
    const auctionSettings = { ...prebidDefault, ...options };
    this.auction(auctionSettings);
  }

  private auction(options: IPrebidOptions) {
    const adUnits = AdUnitCreator(options.banners);
    const pbjs = (window as any).pbjs;

    if (options.tracking) {
      new PrebidAnalytics(options.tracking);
    }
    pbjs.que.push(() => {
      if (adUnits.length > 0) {
        pbjs.setConfig({
          bidderTimeout: options.timeout,
          consentManagement: {
            allowAuctionWithoutConsent: options.consentAllowAuction,
            cmpApi: 'iab',
            timeout: options.consentTimeout
          },
          debug: options.debug,
          priceGranularity: 'high',
          userSync: {
            enabledBidders: ['pubmatic'],
            iframeEnabled: true,
            syncDelay: 6000
          }
        });
        pbjs.addAdUnits(adUnits);

        pbjs.requestBids({
          bidsBackHandler: bidResponse => {
            console.log('bidsBackHandler', bidResponse);
            const apntag = (window as any).apntag;
            if (typeof apntag !== 'undefined') {
              pbjs.que.push(() => {
                console.log('bidsBackHandler adding apn to pbjs que');
                apntag.anq.push(() => {
                  pbjs.setTargetingForAst();
                  apntag.loadTags();
                  console.log(
                    'bidsBackHandler pbjs.setTargetingForAst() && apntag.loadTags()'
                  );
                });
              });
            }
            if (typeof options.adserverCallback !== 'undefined') {
              options.adserverCallback(bidResponse);
            }
          }
        });
      }
    });
  }
}
