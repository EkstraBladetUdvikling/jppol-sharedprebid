'use strict';
(jppolAdOps => {
  /**
   * # getRubiconSize
   * Get current bannersize from rubicon sizemap
   * TODO: NB! the sizemap should be updated if prebid Rubicon adapter is changed
   */
  function getRubiconSize(pbSize: string) {
    const sizeMap = {
      1: '468x60',
      2: '728x90',
      8: '120x600',
      9: '160x600',
      10: '300x600',
      14: '250x250',
      15: '300x250',
      16: '336x280',
      19: '300x100',
      31: '980x120',
      32: '250x360',
      33: '180x500',
      35: '980x150',
      37: '468x400',
      38: '930x180',
      43: '320x50',
      44: '300x50',
      48: '300x300',
      54: '300x1050',
      55: '970x90',
      57: '970x250',
      58: '1000x90',
      59: '320x80',
      60: '320x150',
      61: '1000x1000',
      65: '640x480',
      67: '320x480',
      68: '1800x1000',
      72: '320x320',
      73: '320x160',
      78: '980x240',
      79: '980x300',
      80: '980x400',
      83: '480x300',
      94: '970x310',
      96: '970x210',
      101: '480x320',
      102: '768x1024',
      103: '480x280',
      113: '1000x300',
      117: '320x100',
      125: '800x250',
      126: '200x600'
    };

    for (const key in sizeMap) {
      if (sizeMap[key] === pbSize) {
        return key;
      }
    }
  }

  /**
   * # getBidders
   * create bidder data to send to prebid
   */

  interface BannerObject {
    adformMID: number;
    adtechId: string;
    appnexusID: string;
    criteoId: number;
    destID: string;
    elementId: string;
    placementKV: object;
    pubmaticAdSlot: string;
    pubmaticAdSlotArr: string[];
    rubiconSizes: string[];
    rubiconZone: number;
    sizes: any[];
  }

  function getBidders(bannerObj: BannerObject, device: string) {
    const ebBidders = [];

    const sizes = bannerObj.sizes;
    const sizesLength = sizes.length;
    for (let i = 0; i < sizesLength; i++) {
      const sizeJoint = sizes[i].join('x');

      if (typeof bannerObj.pubmaticAdSlot !== 'undefined') {
        bannerObj.pubmaticAdSlotArr = bannerObj.pubmaticAdSlotArr || [];
        bannerObj.pubmaticAdSlotArr.push(
          bannerObj.pubmaticAdSlot + '@' + sizeJoint
        );
      }

      if (typeof bannerObj.rubiconZone !== 'undefined') {
        bannerObj.rubiconSizes = bannerObj.rubiconSizes || [];
        const rubiconSize = getRubiconSize(sizeJoint);
        if (typeof rubiconSize !== 'undefined') {
          bannerObj.rubiconSizes.push(rubiconSize);
        }
      }
    }

    /**
     * ADFORM
     * http://prebid.github.io/dev-docs/bidders.html#adform
     */
    if (typeof bannerObj.adformMID !== 'undefined') {
      const adformObj = {
        bidder: 'adform',
        params: {
          mid: bannerObj.adformMID,
          rcur: 'USD'
        }
      };

      ebBidders.push(adformObj);
    }

    /**
     * AppNexus
     * http://prebid.org/dev-docs/bidders.html#appnexus
     */
    if (typeof bannerObj.appnexusID !== 'undefined') {
      const appnexusObj = {
        bidder: 'appnexus',
        params: {
          placementId: bannerObj.appnexusID
        }
      };

      console.log('appnexusObj', appnexusObj);
      ebBidders.push(appnexusObj);
    }

    /**
     *  CRITEO
     * http://prebid.org/dev-docs/bidders.html#criteo
     */
    if (typeof bannerObj.criteoId !== 'undefined') {
      ebBidders.push({
        bidder: 'criteo',
        params: {
          zoneId: bannerObj.criteoId
        }
      });
    }

    /**
     * PubMatic
     * http://prebid.github.io/dev-docs/bidders.html#pubmatic
     */
    if (
      typeof bannerObj.pubmaticAdSlot !== 'undefined' &&
      typeof bannerObj.pubmaticAdSlotArr !== 'undefined'
    ) {
      for (let i = sizesLength; i--; ) {
        const PubMaticAdslotName = bannerObj.pubmaticAdSlotArr[i];
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
     * Smartpone
     * ad size - rubicon size id
     * 300x250 = 15
     * 320x50 = 43
     * 320x80 = 59
     * 320x320 = 72
     * 320x160 = 73
     */
    if (
      typeof bannerObj.rubiconZone !== 'undefined' &&
      typeof bannerObj.rubiconSizes !== 'undefined'
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
          sizes: bannerObj.rubiconSizes,
          zoneId: bannerObj.rubiconZone
        }
      });
    }

    return ebBidders;
  }

  function biddersetup(prebidCache: object, device: string) {
    try {
      const adUnits = [];
      for (const key in prebidCache) {
        if (prebidCache.hasOwnProperty(key)) {
          const bidders =
            typeof prebidCache[key].sizes !== 'undefined'
              ? getBidders(prebidCache[key], device)
              : [];
          adUnits.push({
            bids: bidders,
            code: key,
            sizes: prebidCache[key].sizes
          });
        }
      }

      return adUnits;
    } catch (err) {
      console.error('prebid', 'biddersetup', err);
    }
  }

  jppolAdOps.biddersetup = biddersetup;
})(((window as any).jppolAdOps = (window as any).jppolAdOps || {}));
