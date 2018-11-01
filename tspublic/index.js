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
        function PrebidAnalytics(trackingSampling, trackingDistribution) {
            if (trackingSampling === void 0) { trackingSampling = true; }
            if (trackingDistribution === void 0) { trackingDistribution = false; }
            this.reCheckCount = 0;
            this.initializeTracking(trackingSampling, trackingDistribution);
        }
        PrebidAnalytics.prototype.initializeTracking = function (trackingSampling, trackingDistribution) {
            var _this = this;
            if (trackingSampling === void 0) { trackingSampling = true; }
            if (trackingDistribution === void 0) { trackingDistribution = false; }
            try {
                console.log("PrebidAnalytics arguments: trackingSampling " + trackingSampling + " | trackingDistribution " + trackingDistribution);
                var win_1 = window;
                var pbjs_1 = win_1.pbjs;
                this.reCheckInterval = setInterval(function () {
                    _this.reCheckCount++;
                    var prebidTrackerName = '';
                    clearInterval(_this.reCheckInterval);
                    if (typeof win_1.ga !== 'undefined' &&
                        typeof win_1.ga.getAll !== 'undefined') {
                        var trackers = win_1.ga.getAll();
                        console.log("PrebidAnalytics: custom ga " + win_1.ga.getAll());
                        for (var _i = 0, trackers_1 = trackers; _i < trackers_1.length; _i++) {
                            var tracker = trackers_1[_i];
                            var trackerName = tracker.get('name') === '' ? '(unnamed)' : tracker.get('name');
                            if (tracker.get('trackingId') === 'UA-2135460-1' ||
                                tracker.get('trackingId') === 'UA-2135460-47') {
                                prebidTrackerName = trackerName;
                            }
                        }
                        console.log("PrebidAnalytics custom ga, ready for tracking " + prebidTrackerName);
                        if (prebidTrackerName !== '') {
                            console.log('PrebidAnalytics custom ga, ready for tracking');
                            pbjs_1.que.push(function () {
                                // Sampling set to 5%
                                var sampling = trackingSampling ? 0.05 : 1;
                                var analyticsObject = [
                                    {
                                        options: {
                                            enableDistribution: trackingDistribution,
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
                }, 500);
            }
            catch (err) {
                console.error("PrebidAnalytics " + err);
            }
        };
        return PrebidAnalytics;
    }());
    // function initializeTracking(
    //   trackingSampling = true,
    //   trackingDistribution = false
    // ) {
    //   try {
    //     console.log(
    //       "custom GA what is up?",
    //       trackingSampling,
    //       trackingDistribution
    //     );
    //     reRunCount++;
    //     let prebidTrackerName = "";
    //     if (
    //       typeof (window as any).ga !== "undefined" &&
    //       typeof (window as any).ga.getAll !== "undefined"
    //     ) {
    //       const trackers = (window as any).ga.getAll();
    //       console.log("custom ga", (window as any).ga.getAll());
    //       for (const tracker of trackers) {
    //         const trackerName =
    //           tracker.get("name") === "" ? "(unnamed)" : tracker.get("name");
    //         if (
    //           tracker.get("trackingId") === "UA-2135460-1" ||
    //           tracker.get("trackingId") === "UA-2135460-47"
    //         ) {
    //           prebidTrackerName = trackerName;
    //         }
    //       }
    //       console.log("custom ga, ready for tracking", prebidTrackerName);
    //       if (prebidTrackerName !== "") {
    //         console.log("custom ga, ready for tracking");
    //         pbjs.que.push(() => {
    //           // Sampling set to 5%
    //           const sampling = trackingSampling ? 0.05 : 1;
    //           const analyticsObject = [
    //             {
    //               options: {
    //                 enableDistribution: trackingDistribution,
    //                 sampling,
    //                 trackerName: prebidTrackerName
    //               },
    //               provider: "ga"
    //             }
    //           ];
    //           pbjs.enableAnalytics(analyticsObject);
    //         });
    //       }
    //     } else if (reRunCount < 10) {
    //       setTimeout(() => initializeTracking(trackingSampling), 500);
    //     } else {
    //       throw new Error("checked 10 times");
    //     }
    //   } catch (err) {
    //     console.error("initializeTracking", err);
    //   }
    // }

    function BidderHandler(bannerObject, device) {
        var ebBidders = [];
        /**
         * ADFORM
         * http://prebid.github.io/dev-docs/bidders.html#adform
         */
        if (typeof bannerObject.adformMID !== 'undefined') {
            var adformObj = {
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
            var appnexusObj = {
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
            var sizes = bannerObject.sizes;
            var sizesLength = sizes.length;
            for (var i = sizesLength; i--;) {
                var sizeJoint = sizes[i].join('x');
                var PubMaticAdslotName = bannerObject.pubmaticAdSlot + '@' + sizeJoint;
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
        if (typeof bannerObject.rubiconZone !== 'undefined' &&
            typeof bannerObject.rubiconSizes !== 'undefined') {
            var rubiconSiteID = 20183;
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
    function AdUnitCreator(bannerContainer, device) {
        try {
            var adUnits = [];
            for (var key in bannerContainer) {
                if (bannerContainer.hasOwnProperty(key)) {
                    var bidders = typeof bannerContainer[key].sizes !== 'undefined'
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
        }
        catch (err) {
            console.error('prebid', 'biddersetup', err);
        }
    }

    var AuctionHandler = /** @class */ (function () {
        function AuctionHandler(options) {
            var prebidDefault = {
                debug: false,
                timeout: 700,
                tracking: false
            };
            var auctionSettings = __assign({}, prebidDefault, options);
            this.auction(auctionSettings);
        }
        AuctionHandler.prototype.auction = function (options) {
            var adUnits = AdUnitCreator(options.banners, options.device);
            var pbjs = window.pbjs;
            if (options.tracking) {
                new PrebidAnalytics(options.trackingSampling, options.trackingDistribution);
            }
            pbjs.que.push(function () {
                if (adUnits.length > 0) {
                    pbjs.setConfig({
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
                    pbjs.addAdUnits(adUnits);
                    pbjs.requestBids({
                        bidsBackHandler: function (bidResponse) {
                            options.adserverCallback(bidResponse);
                        }
                    });
                }
            });
        };
        return AuctionHandler;
    }());

    function prebid(options) {
        new AuctionHandler(options);
    }

    exports.prebid = prebid;

    return exports;

}({}));
