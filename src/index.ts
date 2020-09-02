import { AuctionHandler, IPrebidOptions } from './AuctionHandler';
import { COMPLETED, PREBIDAUCTION } from './variables';

window[PREBIDAUCTION] = window[PREBIDAUCTION] || { [COMPLETED]: true };

const pubCommonOverwrite = {
  getId: () => {
    return (window as any).jppolidvalue ?? 'missing';
  },
};

(window as any).PublisherCommonId = {
  ...(window as any).PublisherCommonId,
  ...pubCommonOverwrite,
};

export function prebid(options: IPrebidOptions) {
  (window as any).jppolStillWaitingForPrebid = true;

  new AuctionHandler(options);
}
