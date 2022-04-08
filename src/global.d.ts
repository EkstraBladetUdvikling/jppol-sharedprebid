import { IPrebidOptions } from './auctionhandler';

declare global {
  interface Window {
    jppol: {
      cache: IPrebidOptions[];
    };
  }
}
