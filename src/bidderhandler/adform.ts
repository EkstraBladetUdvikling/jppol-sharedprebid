import { encodeEIDs } from '../encodeeids';
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
        eids: encodeEIDs([
          {
            source: 'firstpartyid',
            uids: [
              {
                atype: 1,
                id: (window as any).eb_anon_uuid,
              },
            ],
          },
        ]),
        mid: bannerObject.adformMID,
        rcur: 'USD',
      },
    });
  }

  return adformBids;
};
