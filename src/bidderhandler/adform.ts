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
  eIdAllowed = false
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

    if (eIdAllowed) {
      adformObject.params.eids = encodeEIDs([
        {
          source: 'firstpartyid',
          uids: [
            {
              atype: 1,
              id: (window as any).eb_anon_uuid,
            },
          ],
        },
      ]);
    }

    adformBids.push(adformObject);
  }

  return adformBids;
};
