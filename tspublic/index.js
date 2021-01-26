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
            var _a;
            this.auctionTimeout = null;
            this.banners = [];
            var prebidDefault = {
                consentTimeout: 3000000,
                debug: false,
                timeout: 700,
            };
            this.auctionSettings = __assign(__assign({}, prebidDefault), options);
            if (options.banners) {
                (_a = this.banners).push.apply(_a, options.banners);
            }
        }
        AuctionHandler.prototype.add = function (options) {
            var _a;
            this.auctionSettings = __assign(__assign({}, this.auctionSettings), { options: options });
            console.log(this.auctionSettings);
            (_a = this.banners).push.apply(_a, options.banners);
            this.startAuction();
        };
        AuctionHandler.prototype.auction = function (banners) {
            var _this = this;
            try {
                window.jppolStillWaitingForPrebid = true;
                var pbjs_1 = window.pbjs;
                var _a = this.auctionSettings, adserverCallback_1 = _a.adserverCallback, consentTimeout_1 = _a.consentTimeout, debug_1 = _a.debug, eidsAllowed = _a.eidsAllowed, keywords = _a.keywords, bidderTimeout_1 = _a.timeout;
                console.log('prebid: window[PREBIDAUCTION][COMPLETED]', window[PREBIDAUCTION][COMPLETED]);
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
                        var pbjsConfig = {
                            bidderTimeout: bidderTimeout_1,
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
                        };
                        pbjs_1.setConfig(pbjsConfig);
                        pbjs_1.addAdUnits(adUnits_1);
                        console.log('prebid: pbjs.adUnits?', pbjs_1.adUnits);
                        pbjs_1.requestBids({
                            bidsBackHandler: function (bidResponse) {
                                console.log('prebid: bidsBackHandler', bidResponse);
                                console.log('prebid: bidsBackHandler.getAdserverTargeting', pbjs_1.getAdserverTargeting());
                                var apntag = window.apntag;
                                if (typeof apntag !== 'undefined') {
                                    pbjs_1.que.push(function () {
                                        apntag.anq.push(function () {
                                            pbjs_1.setTargetingForAst();
                                            apntag.loadTags();
                                            console.log('prebid: bidsBackHandler pbjs.setTargetingForAst() && apntag.loadTags()');
                                        });
                                    });
                                }
                                if (typeof adserverCallback_1 !== 'undefined') {
                                    adserverCallback_1(bidResponse);
                                }
                                _this.reset();
                            },
                        });
                    }
                });
            }
            catch (err) {
                console.error('AuctionHandler auction', err);
            }
        };
        AuctionHandler.prototype.reset = function () {
            window[PREBIDAUCTION][COMPLETED] = true;
            window.jppolStillWaitingForPrebid = false;
            this.auctionTimeout = null;
            if (this.banners.length) {
                this.startAuction();
            }
        };
        AuctionHandler.prototype.startAuction = function () {
            var _this = this;
            if (!this.auctionTimeout) {
                this.auctionTimeout = setTimeout(function () {
                    var currentBanners = __spreadArrays(_this.banners);
                    _this.banners.length = 0;
                    console.log('Run prebid now!!! this.banners', _this.banners);
                    console.log('Run prebid now!!! currentBanners', currentBanners);
                    _this.auction(currentBanners);
                }, 500);
            }
        };
        return AuctionHandler;
    }());

    var _a;
    window[PREBIDAUCTION] = window[PREBIDAUCTION] || (_a = {}, _a[COMPLETED] = true, _a);
    var realizedHandler = null;
    function prebid(options) {
        if (!realizedHandler) {
            console.log('prebid: created handler');
            realizedHandler = new AuctionHandler(options);
        }
        else {
            console.log('prebid: add? jppolStillWaitingForPrebid', window.jppolStillWaitingForPrebid);
            realizedHandler.add(options);
        }
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
    console.log('prebid: ebPrebid', window.ebPrebid);
    (function () {
        var existing = window.ebPrebid;
        console.log('prebid: ebPrebid existing', existing);
        window.ebPrebid = {
            existing: existing,
            handle: function (incoming) {
                console.log('prebid: handling ... ', incoming);
                if (incoming.type === 'setup') {
                    prebid(incoming);
                    this.realized = true;
                }
                else if (!this.realized) {
                    this.existing.push(incoming);
                }
                else if (this.realized) {
                    prebid(incoming);
                }
            },
            push: function (incoming) {
                this.handle(incoming);
            },
            realized: false,
        };
        window.ebPrebid.handle(existing);
    })();

    exports.getPrebidVideoParams = getPrebidVideoParams;
    exports.prebid = prebid;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
