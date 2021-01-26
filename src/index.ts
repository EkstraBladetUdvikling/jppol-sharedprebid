import { AuctionHandler, IPrebidOptions } from './AuctionHandler';
import { IGetAdserverTargetingResponse } from './types';
import { COMPLETED, PREBIDAUCTION } from './variables';

declare global {
  interface Window {
    apntag: any;
    ebJS: {
      options: {
        isEBDocReady: boolean;
      };
    };
    ebPrebid: any;
    jppol: any;

    jppolStillWaitingForPrebid: boolean;
  }
}

window[PREBIDAUCTION] = window[PREBIDAUCTION] || { [COMPLETED]: true };

let realizedHandler = null;

export function prebid(options: IPrebidOptions) {
  if (!realizedHandler) {
    console.log('prebid: created handler');
    realizedHandler = new AuctionHandler(options);
  } else {
    console.log(
      'prebid: add? jppolStillWaitingForPrebid',
      window.jppolStillWaitingForPrebid
    );
    realizedHandler.add(options);
  }
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

console.log('prebid: ebPrebid', window.ebPrebid);

(() => {
  const existing = window.ebPrebid;
  console.log('prebid: ebPrebid existing', existing);

  window.ebPrebid = {
    existing,
    handle(incoming) {
      console.log('prebid: handling ... ', incoming);
      if (incoming.type === 'setup') {
        prebid(incoming);
        this.realized = true;
      } else if (!this.realized) {
        this.existing.push(incoming);
      } else if (this.realized) {
        prebid(incoming);
      }
    },
    push(incoming) {
      this.handle(incoming);
    },
    realized: false,
  };

  window.ebPrebid.handle(existing);
})();
