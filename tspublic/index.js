var jppol = (function (exports) {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
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
                sampling: true
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
                                            trackerName: prebidTrackerName
                                        },
                                        provider: 'ga'
                                    }
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

    function BidderHandler(bannerObject) {
        try {
            var ebBidders = [];
            /**
             * ADFORM
             * http://prebid.github.io/dev-docs/bidders.html#adform
             */
            if (typeof bannerObject.adformMID !== 'undefined') {
                console.log('prebid: add adform as bidder');
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
                ebBidders.push({
                    bidder: 'appnexus',
                    params: {
                        placementId: bannerObject.appnexusID
                    }
                });
            }
            /**
             *  CRITEO
             * http://prebid.org/dev-docs/bidders.html#criteo
             */
            if (typeof bannerObject.criteoId !== 'undefined') {
                console.log('prebid: add criteo as bidder');
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
                var sizes = bannerObject.sizes;
                var sizesLength = sizes.length;
                for (var i = sizesLength; i--;) {
                    var sizeJoint = sizes[i].join('x');
                    var PubMaticAdslotName = bannerObject.pubmaticAdSlot + '@' + sizeJoint;
                    ebBidders.push({
                        bidder: 'pubmatic',
                        params: {
                            adSlot: PubMaticAdslotName,
                            publisherId: bannerObject.pubmaticPublisherId
                        }
                    });
                }
            }
            /**
             * Rubicon
             * http://prebid.github.io/dev-docs/bidders.html#rubicon
             */
            if (typeof bannerObject.rubiconZone !== 'undefined') {
                console.log('prebid: add rubicon as bidder');
                ebBidders.push({
                    bidder: 'rubicon',
                    params: {
                        accountId: bannerObject.rubiconAccountId,
                        siteId: bannerObject.rubiconSiteID,
                        zoneId: bannerObject.rubiconZone
                    }
                });
            }
            return ebBidders;
        }
        catch (err) {
            console.error('jppolPrebid BidderHandler', err);
        }
    }
    function AdUnitCreator(bannerContainer) {
        try {
            var adUnits = [];
            console.log('jppolPrebid AdUnitCreator - bannerContainer', bannerContainer);
            for (var _i = 0, bannerContainer_1 = bannerContainer; _i < bannerContainer_1.length; _i++) {
                var banner = bannerContainer_1[_i];
                var bidders = BidderHandler(banner);
                adUnits.push({
                    bids: bidders,
                    code: banner.targetId,
                    sizes: banner.sizes
                });
            }
            return adUnits;
        }
        catch (err) {
            console.error('prebid', 'biddersetup', err);
        }
    }

    var AuctionHandler = /** @class */ (function () {
        function AuctionHandler(options) {
            var prebidDefault = {
                consentAllowAuction: true,
                consentTimeout: 3000000,
                debug: false,
                timeout: 700
            };
            var auctionSettings = __assign(__assign({}, prebidDefault), options);
            this.auction(auctionSettings);
        }
        AuctionHandler.prototype.auction = function (options) {
            try {
                var adUnits_1 = AdUnitCreator(options.banners);
                var pbjs_1 = window.pbjs;
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
                                timeout: options.consentTimeout
                            },
                            debug: options.debug,
                            priceGranularity: 'high',
                            userSync: {
                                enabledBidders: ['pubmatic'],
                                iframeEnabled: true,
                                syncDelay: 6000
                            }
                        });
                        pbjs_1.addAdUnits(adUnits_1);
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
                                            console.log('prebid: bidsBackHandler pbjs.setTargetingForAst() && apntag.loadTags()');
                                        });
                                    });
                                }
                                if (typeof options.adserverCallback !== 'undefined') {
                                    options.adserverCallback(bidResponse);
                                }
                            }
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

    function prebid(options) {
        // EB
        // pubmaticPublisherId: '156010'
        // const rubiconAccountID = 10093;
        // let rubiconSiteID = 20183;
        // switch (device) {
        //   case 'smartphone':
        //     rubiconSiteID = 23382;
        //     break;
        //   case 'tablet':
        //     rubiconSiteID = 43742;
        //     break;
        //   default:
        //     rubiconSiteID = 20183;
        // }
        new AuctionHandler(options);
    }

    exports.prebid = prebid;

    return exports;

}({}));
