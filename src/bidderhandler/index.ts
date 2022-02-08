import { adformBidder } from './adform';
import { appnexusBidder } from './appnexus';
import { criteoBidder } from './criteo';

import { IBannerObject } from '../types';

export const BidderHandler = (
  bannerObject: IBannerObject,
  keywords?: string[],
  eId?: string | false
) => {
  try {
    const adformBids = adformBidder(bannerObject, eId);

    const appnexusBids = appnexusBidder(bannerObject, keywords);

    const criteoBids = criteoBidder(bannerObject);

    return [...adformBids, ...appnexusBids, ...criteoBids];
  } catch (err) {
    console.error('jppolPrebid BidderHandler', err);
  }
};
