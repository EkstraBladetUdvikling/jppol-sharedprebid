import { AuctionHandler, IPrebidOptions } from './AuctionHandler';
import { IGetAdserverTargetingResponse } from './types';
import { COMPLETED, PREBIDAUCTION } from './variables';

window[PREBIDAUCTION] = window[PREBIDAUCTION] || { [COMPLETED]: true };

export function prebid(options: IPrebidOptions) {
  (window as any).jppolStillWaitingForPrebid = true;

  new AuctionHandler(options);
}

export function getPrebidVideoParams(adUnitCode: string): string {
  const adserverTargeting: IGetAdserverTargetingResponse = (window as any).pbjs.getAdserverTargeting(
    adUnitCode
  );

  const hbParams = [];

  if (adserverTargeting) {
    const targeting = adserverTargeting[adUnitCode];

    for (const key in targeting) {
      if (targeting.hasOwnProperty(key)) {
        hbParams.push(`${key}=${targeting[key]}`);
      }
    }
  }

  return hbParams.join('&');
}
