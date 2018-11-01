import { AuctionHandler, IPrebidOptions } from './AuctionHandler';

export function prebid(options: IPrebidOptions) {
  new AuctionHandler(options);
}
