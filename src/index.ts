import { AuctionHandler, IPrebidOptions } from './AuctionHandler';
import { COMPLETED, PREBIDAUCTION } from './variables';

import type { IGetAdserverTargetingResponse } from './types';

window[PREBIDAUCTION] = window[PREBIDAUCTION] || { [COMPLETED]: true };

const auctionHandler = new AuctionHandler();

export function prebid(options: IPrebidOptions) {
  if (options.banners && options.banners.length) {
    (window as any).jppolStillWaitingForPrebid = true;
  }

  auctionHandler.add(options);
}

export function getPrebidVideoParams(adUnitCode: string): string {
  const adserverTargeting: IGetAdserverTargetingResponse = (
    window as any
  ).pbjs.getAdserverTargeting(adUnitCode);

  const hbParams = [];

  if (adserverTargeting) {
    const targeting = adserverTargeting[adUnitCode];

    for (const key in targeting) {
      if (targeting[key]) {
        hbParams.push(`${key}=${targeting[key]}`);
      }
    }
  }

  return hbParams.join('&');
}

if (window.jppol && window.jppol.cache && window.jppol.cache.length) {
  window.jppol.cache.forEach((cacheElement) => {
    prebid(cacheElement);
  });
}
