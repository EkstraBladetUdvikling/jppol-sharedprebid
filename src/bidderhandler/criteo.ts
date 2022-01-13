import { BIDDERNAMES, IBannerObject } from '../types';

interface ICriteoSettings {
  bidder: string;
  params: {
    networkId: number;
    publisherSubId: string;
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
  if (typeof bannerObject.criteo !== 'undefined') {
    const { publisherSubId } = bannerObject.criteo;
    criteoBid.push({
      bidder: BIDDERNAMES.criteo,
      params: {
        networkId: 6911,
        publisherSubId,
      },
    });
  }

  return criteoBid;
};
