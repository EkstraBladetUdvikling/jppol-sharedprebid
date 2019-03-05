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
  outstream?: boolean;
  outstreamSize?: number[];
  sizes: number[][];
  targetId: string;
}

function BidderHandler(bannerObject: IBannerObject) {
  try {
    const ebBidders = [];

    /**
     * ADFORM
     * http://prebid.github.io/dev-docs/bidders.html#adform
     */
    if (typeof bannerObject.adformMID !== 'undefined') {
      console.log('prebid: add adform as bidder');

      // no outstream video support?

      ebBidders.push({
        bidder: 'adform',
        params: {
          mid: bannerObject.adformMID,
          rcur: 'USD'
        }
      });
    }

    /**
     * AppNexus
     * http://prebid.org/dev-docs/bidders.html#appnexus
     */
    if (typeof bannerObject.appnexusID !== 'undefined') {
      console.log('prebid: add appnexus as bidder');

      // outstream video
      if (bannerObject.outstream) {
        ebBidders.push({
          bidder: 'appnexus',
          params: {
            placementId: bannerObject.appnexusID,
            video: {
              playback_method: ['click_to_play'],
              skippable: true
              // startdelay: 0 // Pre-roll: 0 (default); Mid-roll: -1 ; Post-roll: -2.
            }
          }
        });
      } else {
        // default
        ebBidders.push({
          bidder: 'appnexus',
          params: {
            placementId: bannerObject.appnexusID
          }
        });
      }
    }

    /**
     *  CRITEO
     * http://prebid.org/dev-docs/bidders.html#criteo
     */
    if (typeof bannerObject.criteoId !== 'undefined') {
      console.log('prebid: add criteo as bidder');

      // no outstream video support?

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
      console.log('prebid: add pubmatic as bidder');
      const sizes = bannerObject.sizes;
      const sizesLength = sizes.length;
      for (let i = sizesLength; i--; ) {
        const sizeJoint = sizes[i].join('x');

        const PubMaticAdslotName =
          bannerObject.pubmaticAdSlot + '@' + sizeJoint;

        // outstream video
        if (bannerObject.outstream) {
          ebBidders.push({
            bidder: 'pubmatic',
            params: {
              adSlot: PubMaticAdslotName,
              publisherId: bannerObject.pubmaticPublisherId,
              video: {
                mimes: ['video/mp4'],
                playbackmethod: 3, // click to play
                skippable: true
              }
            }
          });
        } else {
          // default
          ebBidders.push({
            bidder: 'pubmatic',
            params: {
              adSlot: PubMaticAdslotName,
              publisherId: bannerObject.pubmaticPublisherId
            }
          });
        }
      }
    }

    /**
     * Rubicon
     * http://prebid.github.io/dev-docs/bidders.html#rubicon
     */
    if (typeof bannerObject.rubiconZone !== 'undefined') {
      console.log('prebid: add rubicon as bidder');

      // outstream video
      if (bannerObject.outstream) {
        ebBidders.push({
          bidder: 'rubicon',
          params: {
            accountId: bannerObject.rubiconAccountId,
            siteId: bannerObject.rubiconSiteID,
            video: {
              language: 'da' // Highly recommended for successful monetization for pre-, mid-, and post-roll video ads
            },
            zoneId: bannerObject.rubiconZone
          }
        });
      } else {
        // default
        ebBidders.push({
          bidder: 'rubicon',
          params: {
            accountId: bannerObject.rubiconAccountId,
            siteId: bannerObject.rubiconSiteID,
            zoneId: bannerObject.rubiconZone
          }
        });
      }
    }

    return ebBidders;
  } catch (err) {
    console.error('jppolPrebid BidderHandler', err);
  }
}

export function AdUnitCreator(bannerContainer: any) {
  try {
    const adUnits = [];
    console.log('jppolPrebid AdUnitCreator - bannerContainer', bannerContainer);

    for (const banner of bannerContainer) {
      const bidders = BidderHandler(banner);

      // outstream video
      if (banner.outstream) {
        adUnits.push({
          bids: bidders,
          code: banner.targetId,
          mediaTypes: {
            video: {
              context: 'outstream',
              playerSize: banner.outstreamSize
            }
          },
          sizes: banner.sizes
        });
      } else {
        // default
        adUnits.push({
          bids: bidders,
          code: banner.targetId,
          sizes: banner.sizes
        });
      }
    }

    return adUnits;
  } catch (err) {
    console.error('prebid', 'biddersetup', err);
  }
}
