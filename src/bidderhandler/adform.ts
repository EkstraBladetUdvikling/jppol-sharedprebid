import { IBannerObject } from '../types';

export const adformBidder = (bannerObject: IBannerObject) => {
  const adformBids = [];

  /**
   * ADFORM
   * http://prebid.github.io/dev-docs/bidders.html#adform
   */
  if (typeof bannerObject.adformMID !== 'undefined') {
    adformBids.push({
      bidder: 'adform',
      params: {
        mid: bannerObject.adformMID,
        rcur: 'USD',
      },
    });
  }

  return adformBids;
};
