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

    /**
     * Helper: initializeTracking
     * creating google analytics object to add the tracking to
     */
    var PrebidAnalytics = /** @class */ (function () {
        function PrebidAnalytics(trackingOptions) {
            this.reCheckCount = 0;
            var trackingDefaults = {
                distribution: false,
                sampling: true,
            };
            var options = __assign(__assign({}, trackingDefaults), trackingOptions);
            this.initializeTracking(options);
        }
        PrebidAnalytics.prototype.initializeTracking = function (options) {
            var _this = this;
            try {
                console.log("prebid: PrebidAnalytics arguments: trackingSampling " + options.sampling + " | trackingDistribution " + options.distribution);
                var win = window;
                var ga_1 = win.ga;
                var pbjs_1 = win.pbjs;
                this.reCheckInterval = setInterval(function () {
                    _this.reCheckCount++;
                    var prebidTrackerName = '';
                    clearInterval(_this.reCheckInterval);
                    if (typeof ga_1 !== 'undefined' && typeof ga_1.getAll !== 'undefined') {
                        var trackers = ga_1.getAll();
                        console.log("prebid: PrebidAnalytics: custom ga " + ga_1.getAll());
                        for (var _i = 0, trackers_1 = trackers; _i < trackers_1.length; _i++) {
                            var tracker = trackers_1[_i];
                            var trackerName = tracker.get('name') === '' ? '(unnamed)' : tracker.get('name');
                            if (tracker.get('trackingId') === options.id) {
                                prebidTrackerName = trackerName;
                            }
                        }
                        console.log("prebid: PrebidAnalytics custom ga, ready for tracking " + prebidTrackerName);
                        if (prebidTrackerName !== '') {
                            console.log('prebid: PrebidAnalytics custom ga, ready for tracking');
                            pbjs_1.que.push(function () {
                                // Sampling set to 5%
                                var sampling = options.sampling ? 0.05 : 1;
                                var analyticsObject = [
                                    {
                                        options: {
                                            enableDistribution: options.distribution,
                                            sampling: sampling,
                                            trackerName: prebidTrackerName,
                                        },
                                        provider: 'ga',
                                    },
                                ];
                                pbjs_1.enableAnalytics(analyticsObject);
                            });
                        }
                    }
                    else if (_this.reCheckCount === 10) {
                        clearInterval(_this.reCheckInterval);
                        throw new Error('Prebid Analytics Checked 10 times with no luck');
                    }
                }, 300);
            }
            catch (err) {
                console.error("PrebidAnalytics " + err);
            }
        };
        return PrebidAnalytics;
    }());

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
                var adUnit = {
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
                if (options.tracking) {
                    new PrebidAnalytics(options.tracking);
                }
                pbjs_1.que.push(function () {
                    if (adUnits_1.length > 0) {
                        pbjs_1.setConfig({
                            bidderTimeout: options.timeout,
                            consentManagement: {
                                allowAuctionWithoutConsent: options.consentAllowAuction,
                                cmpApi: 'iab',
                                timeout: options.consentTimeout,
                            },
                            debug: options.debug,
                            priceGranularity: 'high',
                            userSync: {
                                enabledBidders: ['pubmatic'],
                                iframeEnabled: true,
                                syncDelay: 6000,
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
    function prebid(options) {
        window.jppolStillWaitingForPrebid = true;
        new AuctionHandler(options);
    }

    exports.prebid = prebid;

    return exports;

}({}));
