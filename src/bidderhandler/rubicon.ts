import { IBannerObject } from '../types';

interface IRubiconSettings {
  bidder: string;
  params: {
    accountId: number;
    siteId: number;
    zoneId: number;
    video?: {
      language: string;
    };
  };
}

export const rubiconBidder = (
  bannerObject: IBannerObject
): IRubiconSettings[] => {
  const rubiconBids: IRubiconSettings[] = [];

  /**
   * Rubicon
   * http://prebid.github.io/dev-docs/bidders.html#rubicon
   */
  if (typeof bannerObject.rubiconZone !== 'undefined') {
    const siteId =
      bannerObject.video && bannerObject.videoSettings.rubiconSiteID
        ? bannerObject.videoSettings.rubiconSiteID
        : bannerObject.rubiconSiteID;

    const rubiconObject: IRubiconSettings = {
      bidder: 'rubicon',
      params: {
        accountId: bannerObject.rubiconAccountId,
        siteId,
        zoneId: bannerObject.rubiconZone,
      },
    };

    if (bannerObject.video) {
      rubiconObject.params.video = { language: 'da' };
    }

    rubiconBids.push(rubiconObject);
  }

  return rubiconBids;
};
