export interface IBannerObject {
  adformMID?: number;
  adtechId?: string;
  appnexusID?: string;
  criteoId?: number;
  pubmaticAdSlot?: string;
  pubmaticPublisherId?: string;
  rubiconAccountId?: number;
  rubiconSiteID?: number;
  rubiconSizes?: number[];
  rubiconZone?: number;
  sizes: number[][];
  targetId: string;
}

function BidderHandler(bannerObject: IBannerObject, keywords?: string[]) {
  try {
    const ebBidders = [];

    /**
     * ADFORM
     * http://prebid.github.io/dev-docs/bidders.html#adform
     */
    if (typeof bannerObject.adformMID !== 'undefined') {
      ebBidders.push({
        bidder: 'adform',
        params: {
          mid: bannerObject.adformMID,
          rcur: 'USD',
        },
      });
    }

    /**
     * AppNexus
     * http://prebid.org/dev-docs/bidders.html#appnexus
     */
    if (typeof bannerObject.appnexusID !== 'undefined') {
      const appnexusObj = keywords
        ? {
            bidder: 'appnexus',
            params: {
              keywords,
              placementId: bannerObject.appnexusID,
            },
          }
        : {
            bidder: 'appnexus',
            params: {
              placementId: bannerObject.appnexusID,
            },
          };
      ebBidders.push(appnexusObj);
    }

    /**
     *  CRITEO
     * http://prebid.org/dev-docs/bidders.html#criteo
     */
    if (typeof bannerObject.criteoId !== 'undefined') {
      ebBidders.push({
        bidder: 'criteo',
        params: {
          zoneId: bannerObject.criteoId,
        },
      });
    }

    /**
     * PubMatic
     * http://prebid.github.io/dev-docs/bidders.html#pubmatic
     */
    if (typeof bannerObject.pubmaticAdSlot !== 'undefined') {
      const sizes = bannerObject.sizes;
      const sizesLength = sizes.length;
      for (let i = sizesLength; i--; ) {
        const sizeJoint = sizes[i].join('x');

        const PubMaticAdslotName =
          bannerObject.pubmaticAdSlot + '@' + sizeJoint;
        ebBidders.push({
          bidder: 'pubmatic',
          params: {
            adSlot: PubMaticAdslotName,
            publisherId: bannerObject.pubmaticPublisherId,
          },
        });
      }
    }

    /**
     * Rubicon
     * http://prebid.github.io/dev-docs/bidders.html#rubicon
     */
    if (typeof bannerObject.rubiconZone !== 'undefined') {
      ebBidders.push({
        bidder: 'rubicon',
        params: {
          accountId: bannerObject.rubiconAccountId,
          siteId: bannerObject.rubiconSiteID,
          zoneId: bannerObject.rubiconZone,
        },
      });
    }

    return ebBidders;
  } catch (err) {
    console.error('jppolPrebid BidderHandler', err);
  }
}

export function AdUnitCreator(bannerContainer: any, keywords?: string[]) {
  try {
    const adUnits = [];

    for (const banner of bannerContainer) {
      const bidders = BidderHandler(banner, keywords);
      const adUnit: {
        bids: any;
        code: string;
        mediaTypes: {
          banner: {
            sizes: number[][];
          };
        };
        pubstack?: {
          adUnitName: string;
          adUnitPath: string;
        };
      } = {
        bids: bidders,
        code: banner.targetId,
        mediaTypes: {
          banner: {
            sizes: banner.sizes,
          },
        },
      };
      if (banner.pubstackData) {
        adUnit.pubstack = banner.pubstackData;
        console.log('prebid: add pubstack data');
      }
      adUnits.push(adUnit);
    }

    return adUnits;
  } catch (err) {
    console.error('prebid', 'biddersetup', err);
  }
}
