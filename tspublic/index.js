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

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    var adformBidder = function (bannerObject) {
        var adformBids = [];
        /**
         * ADFORM
         * http://prebid.github.io/dev-docs/bidders.html#adform
         */
        if (typeof bannerObject.adformMID !== 'undefined') {
            adformBids.push({
                bidder: 'adform',
                params: {
                    mid: bannerObject.adformMID,
                    rcur: 'USD',
                },
            });
        }
        return adformBids;
    };

    var appnexusBidder = function (bannerObject, keywords) {
        var appnexusBids = [];
        /**
         * AppNexus
         * http://prebid.org/dev-docs/bidders.html#appnexus
         */
        if (typeof bannerObject.appnexusID !== 'undefined') {
            var appnexusObj = {
                bidder: 'appnexus',
                params: {
                    placementId: bannerObject.appnexusID,
                },
            };
            if (keywords)
                appnexusObj.params.keywords = keywords;
            appnexusBids.push(appnexusObj);
        }
        return appnexusBids;
    };

    var criteoBidder = function (bannerObject) {
        var criteoBid = [];
        /**
         *  CRITEO
         * http://prebid.org/dev-docs/bidders.html#criteo
         */
        if (typeof bannerObject.criteoId !== 'undefined') {
            criteoBid.push({
                bidder: 'criteo',
                params: {
                    networkId: 6911,
                },
            });
        }
        return criteoBid;
    };

    var PREBIDAUCTION = 'prebidAuction';
    var COMPLETED = 'completed';
    var mimes = ['video/mp4'];

    var pubmaticBidder = function (bannerObject) {
        var pubmaticBids = [];
        /**
         * PubMatic
         * http://prebid.github.io/dev-docs/bidders.html#pubmatic
         */
        if (typeof bannerObject.pubmaticAdSlot !== 'undefined') {
            if (bannerObject.video) {
                var adSlot = bannerObject.pubmaticAdSlot + "@300x250";
                pubmaticBids.push({
                    bidder: 'pubmatic',
                    params: {
                        adSlot: adSlot,
                        publisherId: bannerObject.pubmaticPublisherId,
                        video: {
                            mimes: mimes,
                        },
                    },
                });
            }
            else {
                var sizes = bannerObject.sizes;
                var sizesLength = sizes.length;
                for (var i = sizesLength; i--;) {
                    var sizeJoint = sizes[i].join('x');
                    var PubMaticAdslotName = bannerObject.pubmaticAdSlot + '@' + sizeJoint;
                    pubmaticBids.push({
                        bidder: 'pubmatic',
                        params: {
                            adSlot: PubMaticAdslotName,
                            publisherId: bannerObject.pubmaticPublisherId,
                        },
                    });
                }
            }
        }
        return pubmaticBids;
    };

    var BidderHandler = function (bannerObject, keywords) {
        try {
            var adformBids = adformBidder(bannerObject);
            var appnexusBids = appnexusBidder(bannerObject, keywords);
            var criteoBids = criteoBidder(bannerObject);
            var pubmaticBids = pubmaticBidder(bannerObject);
            return __spreadArrays(adformBids, appnexusBids, criteoBids, pubmaticBids);
        }
        catch (err) {
            console.error('jppolPrebid BidderHandler', err);
        }
    };

    function AdUnitCreator(bannerContainer, keywords) {
        try {
            var adUnits = [];
            for (var _i = 0, bannerContainer_1 = bannerContainer; _i < bannerContainer_1.length; _i++) {
                var banner = bannerContainer_1[_i];
                var bidders = BidderHandler(banner, keywords);
                var playerSize = [[640, 480]];
                var mediaTypes = banner.video
                    ? {
                        video: {
                            context: 'instream',
                            playerSize: playerSize,
                            mimes: mimes,
                            protocols: [2, 3, 5, 6],
                            api: [2],
                            maxduration: 30,
                            linearity: 1,
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

    var AuctionHandler = /** @class */ (function () {
        function AuctionHandler(options) {
            var prebidDefault = {
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
                if (window[PREBIDAUCTION][COMPLETED] && pbjs_1.adUnits.length) {
                    console.log('prebid: If the auction is completed, remove adunits');
                    pbjs_1.removeAdUnit();
                }
                window[PREBIDAUCTION][COMPLETED] = false;
                var adUnits_1 = AdUnitCreator(options.banners, options.keywords);
                console.log('prebid: adUnits created?', adUnits_1);
                pbjs_1.que.push(function () {
                    if (adUnits_1.length > 0) {
                        pbjs_1.setConfig({
                            bidderTimeout: options.timeout,
                            cache: {
                                url: 'https://prebid.adnxs.com/pbc/v1/cache',
                            },
                            consentManagement: {
                                cmpApi: 'iab',
                                timeout: options.consentTimeout,
                            },
                            debug: options.debug,
                            priceGranularity: 'high',
                        });
                        pbjs_1.addAdUnits(adUnits_1);
                        console.log('prebid: pbjs.adUnits?', pbjs_1.adUnits);
                        pbjs_1.requestBids({
                            bidsBackHandler: function (bidResponse) {
                                console.log('prebid: bidsBackHandler', bidResponse);
                                console.log('prebid: bidsBackHandler.getAdserverTargeting', pbjs_1.getAdserverTargeting());
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
    function getPrebidVideoParams(adUnitCode) {
        var adserverTargeting = window.pbjs.getAdserverTargeting(adUnitCode);
        var hbParams = [];
        if (adserverTargeting) {
            var targeting = adserverTargeting[adUnitCode];
            for (var key in targeting) {
                if (targeting.hasOwnProperty(key)) {
                    hbParams.push(key + "=" + targeting[key]);
                }
            }
        }
        return hbParams.join('&');
    }

    exports.getPrebidVideoParams = getPrebidVideoParams;
    exports.prebid = prebid;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
