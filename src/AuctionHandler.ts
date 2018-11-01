import { PrebidAnalytics } from './Analytics';
import { AdUnitCreator } from './BidderHandler';

export interface IBannerObject {
  adformMID: number;
  adtechId: string;
  appnexusID: string;
  criteoId: number;
  pubmaticAdSlot: string;
  rubiconSizes: string[];
  rubiconZone: number;
  sizes: any[];
}

export interface IPrebidOptions {
  adserverCallback: any;
  banners: IBannerObject;
  consentAllowAuction: boolean;
  consentTimeout: number;
  debug: boolean;
  device: string;
  timeout: number;
  tracking: boolean;
  trackingDistribution: boolean;
  trackingSampling: boolean;
}

export class AuctionHandler {
  constructor(options: IPrebidOptions) {
    const prebidDefault = {
      debug: false,
      timeout: 700,
      tracking: false
    };
    const auctionSettings = { ...prebidDefault, ...options };
    this.auction(auctionSettings);
  }

  private auction(options: IPrebidOptions) {
    const adUnits = AdUnitCreator(options.banners, options.device);
    const pbjs = (window as any).pbjs;
    if (options.tracking) {
      new PrebidAnalytics(
        options.trackingSampling,
        options.trackingDistribution
      );
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
            options.adserverCallback(bidResponse);
          }
        });
      }
    });
  }
}
