var jppol = (function (exports) {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function BidderHandler(bannerObject, keywords) {
        try {
            var ebBidders = [];
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
                var appnexusObj = keywords
                    ? {
                        bidder: 'appnexus',
                        params: {
                            keywords: keywords,
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
                var sizes = bannerObject.sizes;
                var sizesLength = sizes.length;
                for (var i = sizesLength; i--;) {
                    var sizeJoint = sizes[i].join('x');
                    var PubMaticAdslotName = bannerObject.pubmaticAdSlot + '@' + sizeJoint;
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
        }
        catch (err) {
            console.error('jppolPrebid BidderHandler', err);
        }
    }
    function AdUnitCreator(bannerContainer, keywords) {
        try {
            var adUnits = [];
            for (var _i = 0, bannerContainer_1 = bannerContainer; _i < bannerContainer_1.length; _i++) {
                var banner = bannerContainer_1[_i];
                var bidders = BidderHandler(banner, keywords);
                var mediaTypes = banner.video
                    ? {
                        video: {
                            context: 'instream',
                            playerSize: banner.playerSize,
                        },
                    }
                    : {
                        banner: {
                            sizes: banner.sizes,
                        },
                    };
                var adUnit = {
                    bids: bidders,
                    code: banner.targetId,
                    mediaTypes: mediaTypes,
                };
                if (banner.pubstackData) {
                    adUnit.pubstack = banner.pubstackData;
                    console.log('prebid: add pubstack data');
                }
                adUnits.push(adUnit);
            }
            return adUnits;
        }
        catch (err) {
            console.error('prebid', 'biddersetup', err);
        }
    }

    var PREBIDAUCTION = 'prebidAuction';
    var COMPLETED = 'completed';

    var AuctionHandler = /** @class */ (function () {
        function AuctionHandler(options) {
            var prebidDefault = {
                consentAllowAuction: true,
                consentTimeout: 3000000,
                debug: false,
                timeout: 700,
            };
            var auctionSettings = __assign(__assign({}, prebidDefault), options);
            this.auction(auctionSettings);
        }
        AuctionHandler.prototype.auction = function (options) {
            try {
                var pbjs_1 = window.pbjs;
                console.log('prebid: window[PREBIDAUCTION][COMPLETED]', window[PREBIDAUCTION][COMPLETED]);
                // If the auction is completed, remove adunits
                if (window[PREBIDAUCTION][COMPLETED]) {
                    console.log('prebid: If the auction is completed, remove adunits');
                    pbjs_1.removeAdUnit();
                }
                window[PREBIDAUCTION][COMPLETED] = false;
                var adUnits_1 = AdUnitCreator(options.banners, options.keywords);
                pbjs_1.que.push(function () {
                    if (adUnits_1.length > 0) {
                        pbjs_1.setConfig({
                            bidderTimeout: options.timeout,
                            consentManagement: {
                                allowAuctionWithoutConsent: options.consentAllowAuction,
                                cmpApi: 'iab',
                                timeout: options.consentTimeout,
                                rules: [
                                    {
                                        purpose: 'storage',
                                        enforcePurpose: true,
                                        enforceVendor: true,
                                        vendorExceptions: ['pubCommonId'],
                                    },
                                ],
                            },
                            debug: options.debug,
                            priceGranularity: 'high',
                            userSync: {
                                enabledBidders: ['pubmatic'],
                                iframeEnabled: true,
                                syncDelay: 6000,
                                userIds: [{ name: 'pubCommonId' }],
                            },
                        });
                        pbjs_1.addAdUnits(adUnits_1);
                        console.log('prebid: pbjs.adUnits?', pbjs_1.adUnits);
                        pbjs_1.requestBids({
                            bidsBackHandler: function (bidResponse) {
                                console.log('prebid: bidsBackHandler', bidResponse);
                                var apntag = window.apntag;
                                if (typeof apntag !== 'undefined') {
                                    pbjs_1.que.push(function () {
                                        console.log('prebid: bidsBackHandler adding apn to pbjs que');
                                        apntag.anq.push(function () {
                                            pbjs_1.setTargetingForAst();
                                            apntag.loadTags();
                                            window.jppolStillWaitingForPrebid = false;
                                            console.log('__apn we just loaded prebid banners');
                                            console.log('prebid: bidsBackHandler pbjs.setTargetingForAst() && apntag.loadTags()');
                                        });
                                    });
                                }
                                if (typeof options.adserverCallback !== 'undefined') {
                                    options.adserverCallback(bidResponse);
                                }
                                window[PREBIDAUCTION][COMPLETED] = true;
                            },
                        });
                    }
                });
            }
            catch (err) {
                console.error('AuctionHandler auction', err);
            }
        };
        return AuctionHandler;
    }());

    var _a;
    window[PREBIDAUCTION] = window[PREBIDAUCTION] || (_a = {}, _a[COMPLETED] = true, _a);
    // const pubCommonOverwrite = {
    //   getId: () => {
    //     return (window as any).jppolidvalue ?? 'missing';
    //   },
    // };
    // (window as any).PublisherCommonId = {
    //   ...(window as any).PublisherCommonId,
    //   ...pubCommonOverwrite,
    // };
    function prebid(options) {
        window.jppolStillWaitingForPrebid = true;
        new AuctionHandler(options);
    }

    exports.prebid = prebid;

    return exports;

}({}));
