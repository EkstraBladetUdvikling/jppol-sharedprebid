import { IBannerObject } from '../types';

interface IAppnexusSettings {
  bidder: string;
  params: {
    placementId: string;
    keywords?: string[];
  };
}

export const appnexusBidder = (
  bannerObject: IBannerObject,
  keywords?: string[]
): IAppnexusSettings[] => {
  const appnexusBids: IAppnexusSettings[] = [];

  /**
   * AppNexus
   * http://prebid.org/dev-docs/bidders.html#appnexus
   */
  if (typeof bannerObject.appnexusID !== 'undefined') {
    const appnexusObj: IAppnexusSettings = {
      bidder: 'appnexus',
      params: {
        placementId: bannerObject.appnexusID,
      },
    };

    if (keywords) appnexusObj.params.keywords = keywords;

    appnexusBids.push(appnexusObj);
  }

  return appnexusBids;
};
