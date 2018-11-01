import { IBannerObject } from './AuctionHandler';

function BidderHandler(bannerObject: IBannerObject, device: string) {
  const ebBidders = [];

  /**
   * ADFORM
   * http://prebid.github.io/dev-docs/bidders.html#adform
   */
  if (typeof bannerObject.adformMID !== 'undefined') {
    const adformObj = {
      bidder: 'adform',
      params: {
        mid: bannerObject.adformMID,
        rcur: 'USD'
      }
    };

    ebBidders.push(adformObj);
  }

  /**
   * AppNexus
   * http://prebid.org/dev-docs/bidders.html#appnexus
   */
  if (typeof bannerObject.appnexusID !== 'undefined') {
    const appnexusObj = {
      bidder: 'appnexus',
      params: {
        placementId: bannerObject.appnexusID
      }
    };

    console.log('appnexusObj', appnexusObj);
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
        zoneId: bannerObject.criteoId
      }
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

      const PubMaticAdslotName = bannerObject.pubmaticAdSlot + '@' + sizeJoint;
      ebBidders.push({
        bidder: 'pubmatic',
        params: {
          adSlot: PubMaticAdslotName,
          publisherId: '156010'
        }
      });
    }
  }

  /**
   * Rubicon
   * http://prebid.github.io/dev-docs/bidders.html#rubicon
   */
  if (
    typeof bannerObject.rubiconZone !== 'undefined' &&
    typeof bannerObject.rubiconSizes !== 'undefined'
  ) {
    let rubiconSiteID = 20183;
    switch (device) {
      case 'smartphone':
        rubiconSiteID = 23382;
        break;
      case 'tablet':
        rubiconSiteID = 43742;
        break;
      default:
        rubiconSiteID = 20183;
    }

    ebBidders.push({
      bidder: 'rubicon',
      params: {
        accountId: 10093,
        siteId: rubiconSiteID,
        zoneId: bannerObject.rubiconZone
      }
    });
  }

  return ebBidders;
}

export function AdUnitCreator(bannerContainer: any, device: string) {
  try {
    const adUnits = [];
    for (const key in bannerContainer) {
      if (bannerContainer.hasOwnProperty(key)) {
        const bidders =
          typeof bannerContainer[key].sizes !== 'undefined'
            ? BidderHandler(bannerContainer[key], device)
            : [];
        adUnits.push({
          bids: bidders,
          code: key,
          sizes: bannerContainer[key].sizes
        });
      }
    }

    return adUnits;
  } catch (err) {
    console.error('prebid', 'biddersetup', err);
  }
}
