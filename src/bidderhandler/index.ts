import { adformBidder } from './adform';
import { appnexusBidder } from './appnexus';
import { criteoBidder } from './criteo';
import { pubmaticBidder } from './pubmatic';

import { IBannerObject } from '../types';

export const BidderHandler = (
  bannerObject: IBannerObject,
  keywords?: string[]
) => {
  try {
    const adformBids = adformBidder(bannerObject);

    const appnexusBids = appnexusBidder(bannerObject, keywords);

    const criteoBids = criteoBidder(bannerObject);

    const pubmaticBids = pubmaticBidder(bannerObject);

    return [...adformBids, ...appnexusBids, ...criteoBids, ...pubmaticBids];
  } catch (err) {
    console.error('jppolPrebid BidderHandler', err);
  }
};
