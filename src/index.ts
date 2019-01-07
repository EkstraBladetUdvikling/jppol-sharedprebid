import { AuctionHandler, IPrebidOptions } from './AuctionHandler';

export function prebid(options: IPrebidOptions) {
  // EB
  // pubmaticPublisherId: '156010'

  // const rubiconAccountID = 10093;
  // let rubiconSiteID = 20183;
  // switch (device) {
  //   case 'smartphone':
  //     rubiconSiteID = 23382;
  //     break;
  //   case 'tablet':
  //     rubiconSiteID = 43742;
  //     break;
  //   default:
  //     rubiconSiteID = 20183;
  // }

  new AuctionHandler(options);
}
