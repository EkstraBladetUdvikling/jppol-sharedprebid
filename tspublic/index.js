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

    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    }

    function encodeEIDs(eids) {
        var result = {};
        for (var i = 0; i < eids.length; i++) {
            var eid = eids[i];
            var source = String(eid.source);
            var uids = eid.uids;
            result[source] = result[source] || {};
            for (var j = 0; j < uids.length; j++) {
                var uid = uids[j];
                var id = String(uid.id);
                result[source][id] = result[source][id] || [];
                result[source][id].push(parseInt(uid.atype, 10));
            }
        }
        return btoa(JSON.stringify(result));
    }

    var BIDDERNAMES;
    (function (BIDDERNAMES) {
        BIDDERNAMES["adform"] = "adf";
        BIDDERNAMES["appnexus"] = "appnexus";
        BIDDERNAMES["criteo"] = "criteo";
    })(BIDDERNAMES || (BIDDERNAMES = {}));

    var adformBidder = function (bannerObject, eId) {
        if (eId === void 0) { eId = false; }
        var adformBids = [];
        /**
         * ADFORM
         * http://prebid.github.io/dev-docs/bidders.html#adform
         */
        if (typeof bannerObject.adformMID !== 'undefined') {
            var adformObject = {
                bidder: BIDDERNAMES.adform,
                params: {
                    mid: bannerObject.adformMID,
                    priceType: 'net',
                    rcur: 'USD',
                },
            };
            if (eId) {
                adformObject.params.eids = encodeEIDs([
                    {
                        source: 'jppol.dk’',
                        uids: [
                            {
                                atype: 1,
                                id: eId,
                            },
                        ],
                    },
                ]);
            }
            adformBids.push(adformObject);
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
                bidder: BIDDERNAMES.appnexus,
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
        if (typeof bannerObject.criteo !== 'undefined') {
            var publisherSubId = bannerObject.criteo.publisherSubId;
            criteoBid.push({
                bidder: BIDDERNAMES.criteo,
                params: {
                    networkId: 6911,
                    publisherSubId: publisherSubId,
                },
            });
        }
        return criteoBid;
    };

    var BidderHandler = function (bannerObject, keywords, eId) {
        try {
            var adformBids = adformBidder(bannerObject, eId);
            var appnexusBids = appnexusBidder(bannerObject, keywords);
            var criteoBids = criteoBidder(bannerObject);
            return __spreadArray(__spreadArray(__spreadArray([], adformBids, true), appnexusBids, true), criteoBids, true);
        }
        catch (err) {
            console.error('jppolPrebid BidderHandler', err);
        }
    };

    var PREBIDAUCTION = 'prebidAuction';
    var COMPLETED = 'completed';
    var mimes = ['video/mp4'];

    function adunitCreator(bannerContainer, keywords, eId) {
        try {
            var adUnits = [];
            for (var _i = 0, bannerContainer_1 = bannerContainer; _i < bannerContainer_1.length; _i++) {
                var banner = bannerContainer_1[_i];
                var bidders = BidderHandler(banner, keywords, eId);
                var playerSize = [[640, 480]];
                var mediaTypes = banner.video
                    ? {
                        video: {
                            api: [2],
                            context: 'instream',
                            linearity: 1,
                            maxduration: 30,
                            mimes: mimes,
                            playerSize: playerSize,
                            protocols: [2, 3, 5, 6],
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
                adUnits.push(adUnit);
            }
            return adUnits;
        }
        catch (err) {
            console.error('prebid', 'biddersetup', err);
        }
    }

    function deepObjectMerge(obj1, obj2) {
        var returnObj = obj1;
        for (var key in obj2) {
            if (returnObj[key]) {
                if (typeof returnObj[key] === typeof obj2[key]) {
                    if (Array.isArray(obj2[key])) {
                        returnObj[key] = __spreadArray(__spreadArray([], returnObj[key], true), obj2[key], true);
                    }
                    else if (Object.prototype.toString.call(obj2[key]) === '[object Object]') {
                        deepObjectMerge(returnObj[key], obj2[key]);
                    }
                    else {
                        returnObj[key] = obj2[key];
                    }
                }
                else {
                    returnObj[key] = obj2[key];
                }
            }
            else {
                returnObj[key] = obj2[key];
            }
        }
        return returnObj;
    }
    var AuctionHandler = /** @class */ (function () {
        function AuctionHandler() {
            this.auctionSettings = {
                consentTimeout: 3000000,
                debug: false,
                timeout: 700,
            };
            this.auctionInProgress = false;
            this.waitformoreAllowed = true;
        }
        AuctionHandler.prototype.add = function (options) {
            var _this = this;
            var _a;
            this.auctionSettings = deepObjectMerge(this.auctionSettings, options);
            this.waitformoreAllowed = (_a = options.allowWait) !== null && _a !== void 0 ? _a : this.waitformoreAllowed;
            if (options.banners) {
                if (!this.waitformore && !this.auctionInProgress) {
                    if (this.waitformoreAllowed) {
                        this.waitformore = setTimeout(function () {
                            _this.auction();
                        }, 250);
                    }
                    else {
                        this.auction();
                    }
                }
                else if (this.auctionInProgress) {
                    window.ebLog({
                        component: 'jppol-prebid',
                        level: 'WARNING',
                        message: "Trying to add more banners to prebid auction",
                    });
                }
            }
        };
        AuctionHandler.prototype.auction = function () {
            var _this = this;
            try {
                var pbjs_1 = window.pbjs;
                this.auctionInProgress = true;
                this.waitformore = null;
                var _a = this.auctionSettings, adserverCallback_1 = _a.adserverCallback, banners = _a.banners, consentTimeout_1 = _a.consentTimeout, debug_1 = _a.debug, eids_1 = _a.eids, keywords = _a.keywords, timeout_1 = _a.timeout;
                // If the auction is completed, remove adunits
                if (window[PREBIDAUCTION][COMPLETED] && pbjs_1.adUnits.length) {
                    pbjs_1.removeAdUnit();
                }
                window[PREBIDAUCTION][COMPLETED] = false;
                var adUnits_1 = adunitCreator(banners, keywords, eids_1);
                pbjs_1.que.push(function () {
                    if (adUnits_1.length > 0) {
                        pbjs_1.setConfig({
                            bidderTimeout: timeout_1,
                            cache: {
                                url: 'https://prebid.adnxs.com/pbc/v1/cache',
                            },
                            consentManagement: {
                                cmpApi: 'iab',
                                timeout: consentTimeout_1,
                            },
                            debug: debug_1,
                            gvlMapping: {
                                pubProvidedId: 50,
                            },
                            priceGranularity: 'high',
                            user: {
                                ext: {
                                    eids: [
                                        {
                                            source: 'jppol.dk’',
                                            uids: [
                                                {
                                                    ext: {
                                                        third: eids_1,
                                                    },
                                                    id: eids_1,
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                            userSync: {
                                iframeEnabled: true,
                                syncDelay: 6000,
                                userIds: [
                                    {
                                        bidders: [BIDDERNAMES.adform, BIDDERNAMES.appnexus],
                                        name: 'pubProvidedId',
                                        params: {
                                            eids: [
                                                {
                                                    source: 'jppol.dk’',
                                                    uids: [
                                                        {
                                                            atype: 1,
                                                            id: eids_1,
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    },
                                ],
                            },
                        });
                        pbjs_1.addAdUnits(adUnits_1);
                        pbjs_1.requestBids({
                            bidsBackHandler: function (bidResponse) {
                                var apntag = window.apntag;
                                if (typeof apntag !== 'undefined') {
                                    pbjs_1.que.push(function () {
                                        apntag.anq.push(function () {
                                            pbjs_1.setTargetingForAst();
                                            apntag.loadTags();
                                            window.jppolStillWaitingForPrebid = false;
                                        });
                                    });
                                }
                                if (typeof adserverCallback_1 !== 'undefined') {
                                    adserverCallback_1(bidResponse);
                                }
                                _this.auctionInProgress = false;
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
    var auctionHandler = new AuctionHandler();
    function prebid(options) {
        if (options.banners && options.banners.length) {
            window.jppolStillWaitingForPrebid = true;
        }
        auctionHandler.add(options);
    }
    function getPrebidVideoParams(adUnitCode) {
        var adserverTargeting = window.pbjs.getAdserverTargeting(adUnitCode);
        var hbParams = [];
        if (adserverTargeting) {
            var targeting = adserverTargeting[adUnitCode];
            for (var key in targeting) {
                if (targeting[key]) {
                    hbParams.push("".concat(key, "=").concat(targeting[key]));
                }
            }
        }
        return hbParams.join('&');
    }
    if (window.jppol && window.jppol.cache && window.jppol.cache.length) {
        window.jppol.cache.forEach(function (cacheElement) {
            prebid(cacheElement);
        });
    }

    exports.getPrebidVideoParams = getPrebidVideoParams;
    exports.prebid = prebid;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
