import { encodeEIDs } from '../encodeeids';
import { BIDDERNAMES, IBannerObject } from '../types';

interface IAdformObject {
  bidder: BIDDERNAMES.adform;
  params: {
    eids?: any;
    mid: number;
    priceType: string;
    rcur: string;
  };
}

export const adformBidder = (
  bannerObject: IBannerObject,
  eId: string | false = false
) => {
  const adformBids = [];

  /**
   * ADFORM
   * http://prebid.github.io/dev-docs/bidders.html#adform
   */
  if (typeof bannerObject.adformMID !== 'undefined') {
    const adformObject: IAdformObject = {
      bidder: BIDDERNAMES.adform,
      params: {
        mid: bannerObject.adformMID,
        priceType: 'net',
        rcur: 'USD',
      },
    };

    if (eId) {
      adformObject.params.eids = encodeEIDs([
        {
          source: 'jppol.dk',
          uids: [
            {
              atype: 1,
              id: eId,
            },
          ],
        },
      ]);
    }

    adformBids.push(adformObject);
  }

  return adformBids;
};
