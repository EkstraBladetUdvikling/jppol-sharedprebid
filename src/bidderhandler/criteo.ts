import { IBannerObject } from '../types';

interface ICriteoSettings {
  bidder: string;
  params: {
    networkId: number;
  };
}

export const criteoBidder = (
  bannerObject: IBannerObject
): ICriteoSettings[] => {
  const criteoBid: ICriteoSettings[] = [];

  /**
   *  CRITEO
   * http://prebid.org/dev-docs/bidders.html#criteo
   */
  if (typeof bannerObject.criteoId !== 'undefined') {
    criteoBid.push({
      bidder: 'criteo',
      params: {
        networkId: 6911,
      },
    });
  }

  return criteoBid;
};
