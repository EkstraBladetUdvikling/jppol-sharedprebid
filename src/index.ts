import { AuctionHandler, IPrebidOptions } from './AuctionHandler';
import { COMPLETED, PREBIDAUCTION } from './variables';

window[PREBIDAUCTION] = window[PREBIDAUCTION] || { [COMPLETED]: true };

(window as any).PublisherCommonId = {
  getId: () => {
    return (window as any).jppolidvalue ?? 'missing';
  },
};

export function prebid(options: IPrebidOptions) {
  (window as any).jppolStillWaitingForPrebid = true;

  new AuctionHandler(options);
}
