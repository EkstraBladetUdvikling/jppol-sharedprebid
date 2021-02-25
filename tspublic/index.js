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

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
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

    var adformBidder = function (bannerObject, eIdAllowed) {
        if (eIdAllowed === void 0) { eIdAllowed = false; }
        var adformBids = [];
        /**
         * ADFORM
         * http://prebid.github.io/dev-docs/bidders.html#adform
         */
        if (typeof bannerObject.adformMID !== 'undefined') {
            var adformObject = {
                bidder: 'adform',
                params: {
                    mid: bannerObject.adformMID,
                    priceType: 'net',
                    rcur: 'USD',
                },
            };
            if (eIdAllowed) {
                adformObject.params.eids = encodeEIDs([
                    {
                        source: 'firstpartyid',
                        uids: [
                            {
                                atype: 1,
                                id: window.eb_anon_uuid,
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

    var BidderHandler = function (bannerObject, keywords, eidsAllowed) {
        try {
            var adformBids = adformBidder(bannerObject, eidsAllowed);
            var appnexusBids = appnexusBidder(bannerObject, keywords);
            var criteoBids = criteoBidder(bannerObject);
            return __spreadArrays(adformBids, appnexusBids, criteoBids);
        }
        catch (err) {
            console.error('jppolPrebid BidderHandler', err);
        }
    };

    var PREBIDAUCTION = 'prebidAuction';
    var COMPLETED = 'completed';
    var mimes = ['video/mp4'];

    function AdUnitCreator(bannerContainer, keywords, eidsAllowed) {
        try {
            var adUnits = [];
            for (var _i = 0, bannerContainer_1 = bannerContainer; _i < bannerContainer_1.length; _i++) {
                var banner = bannerContainer_1[_i];
                var bidders = BidderHandler(banner, keywords, eidsAllowed);
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
                        returnObj[key] = __spreadArrays(returnObj[key], obj2[key]);
                    }
                    else if (Object.prototype.toString.call(obj2[key]) === '[object Object]') {
                        deepObjectMerge(returnObj[key], obj2[key]);
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
            console.log('PREBID AUCTIONHANDLER CONSTRUCTED!');
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
                var _a = this.auctionSettings, adserverCallback_1 = _a.adserverCallback, banners = _a.banners, consentTimeout_1 = _a.consentTimeout, debug_1 = _a.debug, eidsAllowed = _a.eidsAllowed, keywords = _a.keywords, timeout_1 = _a.timeout;
                // If the auction is completed, remove adunits
                if (window[PREBIDAUCTION][COMPLETED] && pbjs_1.adUnits.length) {
                    console.log('prebid: If the auction is completed, remove adunits');
                    pbjs_1.removeAdUnit();
                }
                window[PREBIDAUCTION][COMPLETED] = false;
                var adUnits_1 = AdUnitCreator(banners, keywords, eidsAllowed);
                console.log('prebid: adUnits created?', adUnits_1);
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
                                            source: 'firstpartyid',
                                            uids: [
                                                {
                                                    id: window.eb_anon_uuid,
                                                    ext: {
                                                        third: window.eb_anon_uuid,
                                                    },
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                            userSync: {
                                enabledBidders: ['adform'],
                                iframeEnabled: true,
                                syncDelay: 6000,
                                userIds: [
                                    {
                                        name: 'pubProvidedId',
                                        params: {
                                            eids: [
                                                {
                                                    source: 'firstpartyid',
                                                    uids: [
                                                        {
                                                            atype: 1,
                                                            id: window.eb_anon_uuid,
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
        window.jppolStillWaitingForPrebid = true;
        auctionHandler.add(options);
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
    if (window['jppol'] && window['jppol'].cache.length) {
        window['jppol'].cache.forEach(function (cacheElement) {
            prebid(cacheElement);
        });
    }

    exports.getPrebidVideoParams = getPrebidVideoParams;
    exports.prebid = prebid;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
