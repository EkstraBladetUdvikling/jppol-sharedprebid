import { IPrebidOptions } from './AuctionHandler';

declare global {
  interface Window {
    jppol: {
      cache: IPrebidOptions[];
    };
  }
}
