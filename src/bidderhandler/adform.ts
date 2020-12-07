import { encodeEIDs } from '../encodeeids';
import { IBannerObject } from '../types';

interface IAdformObject {
  bidder: 'adform';
  params: {
    eids?: any;
    mid: number;
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
      bidder: 'adform',
      params: {
        mid: bannerObject.adformMID,
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
