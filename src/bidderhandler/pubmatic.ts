import { mimes } from '../variables';
import { IBannerObject } from '../types';

interface IPubmaticVideoSettings {
  mimes: string[];
  skippable?: boolean;
  minduration?: number;
  maxduration?: number;
  startdelay?: number;
  playbackmethod?: number[];
  api?: number[];
  protocols?: number[];
  battr?: number[];
  linearity?: number;
  placement?: number;
  minbitrate?: number;
  maxbitrate?: number;
}

interface IPubmaticSettings {
  bidder: string;
  params: {
    adSlot: string;
    publisherId: string;
    video?: IPubmaticVideoSettings;
  };
}

export const pubmaticBidder = (
  bannerObject: IBannerObject
): IPubmaticSettings[] => {
  const pubmaticBids: IPubmaticSettings[] = [];

  /**
   * PubMatic
   * http://prebid.github.io/dev-docs/bidders.html#pubmatic
   */
  if (typeof bannerObject.pubmaticAdSlot !== 'undefined') {
    if (bannerObject.video) {
      const adSlot = `${bannerObject.pubmaticAdSlot}@300x250`;
      pubmaticBids.push({
        bidder: 'pubmatic',
        params: {
          adSlot,
          publisherId: bannerObject.pubmaticPublisherId,
          video: {
            mimes,
          },
        },
      });
    } else {
      const sizes = bannerObject.sizes;
      const sizesLength = sizes.length;
      for (let i = sizesLength; i--; ) {
        const sizeJoint = sizes[i].join('x');

        const PubMaticAdslotName =
          bannerObject.pubmaticAdSlot + '@' + sizeJoint;
        pubmaticBids.push({
          bidder: 'pubmatic',
          params: {
            adSlot: PubMaticAdslotName,
            publisherId: bannerObject.pubmaticPublisherId,
          },
        });
      }
    }
  }

  return pubmaticBids;
};
