!function(u) {
    var s = window.pbjsChunk;
    window.pbjsChunk = function(e, t, n) {
        for (var r, o, i, a = 0, c = []; a < e.length; a++) o = e[a], d[o] && c.push(d[o][0]), 
        d[o] = 0;
        for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
        for (s && s(e, t, n); c.length; ) c.shift()();
        if (n) for (a = 0; a < n.length; a++) i = f(f.s = n[a]);
        return i;
    };
    var n = {}, d = {
        315: 0
    };
    function f(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return u[e].call(t.exports, t, t.exports, f), t.l = !0, t.exports;
    }
    f.m = u, f.c = n, f.d = function(e, t, n) {
        f.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        });
    }, f.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return f.d(t, "a", t), t;
    }, f.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, f.p = "", f.oe = function(e) {
        throw console.error(e), e;
    }, f(f.s = 835);
}([ function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.d(t, "internal", function() {
        return k;
    }), n.d(t, "bind", function() {
        return N;
    }), t.getUniqueIdentifierStr = q, t.generateUUID = function e(t) {
        return t ? (t ^ G() >> t / 4).toString(16) : ([ 1e7 ] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e);
    }, t.getBidIdParameter = function(e, t) {
        if (t && t[e]) return t[e];
        return "";
    }, t.tryAppendQueryString = function(e, t, n) {
        if (n) return e + t + "=" + encodeURIComponent(n) + "&";
        return e;
    }, t.parseQueryStringParameters = function(e) {
        var t = "";
        for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
        return t = t.replace(/&$/, "");
    }, t.transformAdServerTargetingObj = function(t) {
        return t && 0 < Object.getOwnPropertyNames(t).length ? ge(t).map(function(e) {
            return "".concat(e, "=").concat(encodeURIComponent(ye(t, e)));
        }).join("&") : "";
    }, t.getAdUnitSizes = function(e) {
        if (!e) return;
        var t = [];
        {
            var n;
            e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes) ? (n = e.mediaTypes.banner.sizes, 
            Array.isArray(n[0]) ? t = n : t.push(n)) : Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes));
        }
        return t;
    }, t.parseSizesInput = function(e) {
        var t = [];
        if ("string" == typeof e) {
            var n = e.split(","), r = /^(\d)+x(\d)+$/i;
            if (n) for (var o in n) ae(n, o) && n[o].match(r) && t.push(n[o]);
        } else if ("object" === S(e)) {
            var i = e.length;
            if (0 < i) if (2 === i && "number" == typeof e[0] && "number" == typeof e[1]) t.push(F(e)); else for (var a = 0; a < i; a++) t.push(F(e[a]));
        }
        return t;
    }, t.parseGPTSingleSizeArray = F, t.parseGPTSingleSizeArrayToRtbSize = function(e) {
        if (W(e)) return {
            w: e[0],
            h: e[1]
        };
    }, t.getWindowTop = L, t.getWindowSelf = z, t.getWindowLocation = V, t.logMessage = H, 
    t.logInfo = J, t.logWarn = K, t.logError = $, t.hasConsoleLogger = function() {
        return _;
    }, t.debugTurnedOn = Q, t.createInvisibleIframe = function() {
        var e = document.createElement("iframe");
        return e.id = q(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", 
        e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", 
        e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", 
        e;
    }, t.getParameterByName = function(e) {
        return je(V().search)[e] || "";
    }, t.isA = X, t.isFn = Z, t.isStr = ee, t.isArray = te, t.isNumber = ne, t.isPlainObject = re, 
    t.isBoolean = function(e) {
        return X(e, C);
    }, t.isEmpty = oe, t.isEmptyStr = function(e) {
        return ee(e) && (!e || 0 === e.length);
    }, t._each = ie, t.contains = function(e, t) {
        if (oe(e)) return !1;
        if (Z(e.indexOf)) return -1 !== e.indexOf(t);
        var n = e.length;
        for (;n--; ) if (e[n] === t) return !0;
        return !1;
    }, t._map = function(n, r) {
        if (oe(n)) return [];
        if (Z(n.map)) return n.map(r);
        var o = [];
        return ie(n, function(e, t) {
            o.push(r(e, t, n));
        }), o;
    }, t.hasOwn = ae, t.insertElement = ce, t.triggerPixel = ue, t.callBurl = function(e) {
        var t = e.source, n = e.burl;
        t === E.S2S.SRC && n && k.triggerPixel(n);
    }, t.insertHtmlIntoIframe = function(e) {
        if (!e) return;
        var t = document.createElement("iframe");
        t.id = q(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", t.marginWidth = "0", 
        t.marginHeight = "0", t.style.display = "none", t.style.height = "0px", t.style.width = "0px", 
        t.scrolling = "no", t.frameBorder = "0", t.allowtransparency = "true", k.insertElement(t, document, "body"), 
        t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close();
    }, t.insertUserSyncIframe = se, t.createTrackPixelHtml = function(e) {
        if (!e) return "";
        var t = encodeURI(e), n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
        return n += '<img src="' + t + '"></div>';
    }, t.createTrackPixelIframeHtml = de, t.getValueString = fe, t.uniques = le, t.flatten = pe, 
    t.getBidRequest = function(n, e) {
        return n ? (e.some(function(e) {
            var t = s()(e.bids, function(t) {
                return [ "bidId", "adId", "bid_id" ].some(function(e) {
                    return t[e] === n;
                });
            });
            return t && (r = t), t;
        }), r) : void 0;
        var r;
    }, t.getKeys = ge, t.getValue = ye, t.getKeyByValue = function(e, t) {
        for (var n in e) if (e.hasOwnProperty(n) && e[n] === t) return n;
    }, t.getBidderCodes = function() {
        return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map(function(e) {
            return e.bids.map(function(e) {
                return e.bidder;
            }).reduce(pe, []);
        }).reduce(pe).filter(le);
    }, t.isGptPubadsDefined = be, n.d(t, "getHighestCpm", function() {
        return ve;
    }), n.d(t, "getOldestHighestCpmBid", function() {
        return he;
    }), n.d(t, "getLatestHighestCpmBid", function() {
        return me;
    }), t.shuffle = function(e) {
        var t = e.length;
        for (;0 < t; ) {
            var n = Math.floor(Math.random() * t), r = e[--t];
            e[t] = e[n], e[n] = r;
        }
        return e;
    }, t.adUnitsFilter = function(e, t) {
        return f()(e, t && t.adUnitCode);
    }, t.deepClone = Ae, t.inIframe = function() {
        try {
            return k.getWindowSelf() !== k.getWindowTop();
        } catch (e) {
            return !0;
        }
    }, t.isSafariBrowser = function() {
        return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent);
    }, t.replaceAuctionPrice = function(e, t) {
        if (!e) return;
        return e.replace(/\$\{AUCTION_PRICE\}/g, t);
    }, t.timestamp = function() {
        return new Date().getTime();
    }, t.hasDeviceAccess = function() {
        return !1 !== r.b.getConfig("deviceAccess");
    }, t.checkCookieSupport = Ee, t.delayExecution = function(e, t) {
        if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));
        var n = 0;
        return function() {
            ++n === t && e.apply(this, arguments);
        };
    }, t.groupBy = function(e, n) {
        return e.reduce(function(e, t) {
            return (e[t[n]] = e[t[n]] || []).push(t), e;
        }, {});
    }, t.getDefinedParams = function(n, e) {
        return e.filter(function(e) {
            return n[e];
        }).reduce(function(e, t) {
            return m(e, h({}, t, n[t]));
        }, {});
    }, t.isValidMediaTypes = function(e) {
        var t = [ "banner", "native", "video" ];
        if (!Object.keys(e).every(function(e) {
            return f()(t, e);
        })) return !1;
        if (e.video && e.video.context) return f()([ "instream", "outstream", "adpod" ], e.video.context);
        return !0;
    }, t.getBidderRequest = function(e, t, n) {
        return s()(e, function(e) {
            return 0 < e.bids.filter(function(e) {
                return e.bidder === t && e.adUnitCode === n;
            }).length;
        }) || {
            start: null,
            auctionId: null
        };
    }, t.getUserConfiguredParams = function(e, t, n) {
        return e.filter(function(e) {
            return e.code === t;
        }).map(function(e) {
            return e.bids;
        }).reduce(pe, []).filter(function(e) {
            return e.bidder === n;
        }).map(function(e) {
            return e.params || {};
        });
    }, t.getOrigin = function() {
        return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
    }, t.getDNT = function() {
        return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack;
    }, t.isAdUnitCodeMatchingSlot = function(t) {
        return function(e) {
            return Oe(t, e);
        };
    }, t.isSlotMatchingAdUnitCode = Ie, t.getGptSlotInfoForAdUnitCode = function(e) {
        var t;
        be() && (t = s()(window.googletag.pubads().getSlots(), Ie(e)));
        if (t) return {
            gptSlot: t.getAdUnitPath(),
            divId: t.getSlotElementId()
        };
        return {};
    }, t.unsupportedBidderMessage = function(e, t) {
        var n = Object.keys(e.mediaTypes || {
            banner: "banner"
        }).join(", ");
        return "\n    ".concat(e.code, " is a ").concat(n, " ad unit\n    containing bidders that don't support ").concat(n, ": ").concat(t, ".\n    This bidder won't fetch demand.\n  ");
    }, t.isInteger = Te, t.convertCamelToUnderscore = function(e) {
        return e.replace(/(?:^|\.?)([A-Z])/g, function(e, t) {
            return "_" + t.toLowerCase();
        }).replace(/^_/, "");
    }, t.cleanObj = function(n) {
        return Object.keys(n).reduce(function(e, t) {
            return void 0 !== n[t] && (e[t] = n[t]), e;
        }, {});
    }, t.pick = function(a, c) {
        return "object" === S(a) ? c.reduce(function(e, t, n) {
            if ("function" == typeof t) return e;
            var r = t, o = t.match(/^(.+?)\sas\s(.+?)$/i);
            o && (t = o[1], r = o[2]);
            var i = a[t];
            return "function" == typeof c[n + 1] && (i = c[n + 1](i, e)), void 0 !== i && (e[r] = i), 
            e;
        }, {}) : {};
    }, t.transformBidderParamKeywords = function(e) {
        var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords", o = [];
        return ie(e, function(e, t) {
            if (te(e)) {
                var n = [];
                ie(e, function(e) {
                    !(e = fe(r + "." + t, e)) && "" !== e || n.push(e);
                }), e = n;
            } else {
                if (!ee(e = fe(r + "." + t, e))) return;
                e = [ e ];
            }
            o.push({
                key: t,
                value: e
            });
        }), o;
    }, t.convertTypes = function(r, o) {
        return Object.keys(r).forEach(function(e) {
            var t, n;
            o[e] && (Z(r[e]) ? o[e] = r[e](o[e]) : o[e] = (t = r[e], n = o[e], "string" === t ? n && n.toString() : "number" === t ? Number(n) : n), 
            isNaN(o[e]) && delete o.key);
        }), o;
    }, t.isArrayOfNums = function(e, t) {
        return te(e) && (!t || e.length === t) && e.every(Te);
    }, t.fill = function(e, t) {
        for (var n = [], r = 0; r < t; r++) {
            var o = re(e) ? Ae(e) : e;
            n.push(o);
        }
        return n;
    }, t.chunk = function(e, t) {
        for (var n = [], r = 0; r < Math.ceil(e.length / t); r++) {
            var o = r * t, i = o + t;
            n.push(e.slice(o, i));
        }
        return n;
    }, t.getMinValueFromArray = function(e) {
        return Math.min.apply(Math, y(e));
    }, t.getMaxValueFromArray = function(e) {
        return Math.max.apply(Math, y(e));
    }, t.compareOn = function(n) {
        return function(e, t) {
            return e[n] < t[n] ? 1 : e[n] > t[n] ? -1 : 0;
        };
    }, t.parseQS = je, t.formatQS = we, t.parseUrl = function(e, t) {
        var n = document.createElement("a");
        t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
        var r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
        return {
            href: n.href,
            protocol: (n.protocol || "").replace(/:$/, ""),
            hostname: n.hostname,
            port: +n.port,
            pathname: n.pathname.replace(/^(?!\/)/, "/"),
            search: r ? n.search : k.parseQS(n.search || ""),
            hash: (n.hash || "").replace(/^#/, ""),
            host: n.host || window.location.host
        };
    }, t.buildUrl = function(e) {
        return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(k.formatQS(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "");
    }, t.deepEqual = Ce, t.mergeDeep = xe;
    var r = n(3), o = n(167), i = n.n(o), a = n(168), c = n.n(a), u = n(11), s = n.n(u), d = n(12), f = n.n(d), l = n(182);
    n.d(t, "deepAccess", function() {
        return l.a;
    });
    var p = n(183);
    function g(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e;
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), 
                !t || n.length !== t); r = !0) ;
            } catch (e) {
                o = !0, i = e;
            } finally {
                try {
                    r || null == c.return || c.return();
                } finally {
                    if (o) throw i;
                }
            }
            return n;
        }(e, t) || b(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function y(e) {
        return function(e) {
            if (Array.isArray(e)) return v(e);
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
        }(e) || b(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function b(e, t) {
        if (e) {
            if ("string" == typeof e) return v(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(e, t) : void 0;
        }
    }
    function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    function m() {
        return (m = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
    }
    function S(e) {
        return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
    }
    n.d(t, "deepSetValue", function() {
        return p.a;
    });
    var A, E = n(5), O = "Array", I = "String", T = "Function", j = "Number", w = "Object", C = "Boolean", x = Object.prototype.toString, U = Boolean(window.console), _ = Boolean(U && window.console.log), B = Boolean(U && window.console.info), R = Boolean(U && window.console.warn), P = Boolean(U && window.console.error), k = {
        checkCookieSupport: Ee,
        createTrackPixelIframeHtml: de,
        getWindowSelf: z,
        getWindowTop: L,
        getWindowLocation: V,
        insertUserSyncIframe: se,
        insertElement: ce,
        isFn: Z,
        triggerPixel: ue,
        logError: $,
        logWarn: K,
        logMessage: H,
        logInfo: J,
        parseQS: je,
        formatQS: we,
        deepEqual: Ce
    }, D = {}, N = function(e, t) {
        return t;
    }.bind(null, 1, D)() === D ? Function.prototype.bind : function(e) {
        var t = this, n = Array.prototype.slice.call(arguments, 1);
        return function() {
            return t.apply(e, n.concat(Array.prototype.slice.call(arguments)));
        };
    }, M = (A = 0, function() {
        return ++A;
    });
    function q() {
        return M() + Math.random().toString(16).substr(2);
    }
    function G() {
        return window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random();
    }
    function F(e) {
        if (W(e)) return e[0] + "x" + e[1];
    }
    function W(e) {
        return te(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1]);
    }
    function L() {
        return window.top;
    }
    function z() {
        return window.self;
    }
    function V() {
        return window.location;
    }
    function H() {
        Q() && _ && console.log.apply(console, Y(arguments, "MESSAGE:"));
    }
    function J() {
        Q() && B && console.info.apply(console, Y(arguments, "INFO:"));
    }
    function K() {
        Q() && R && console.warn.apply(console, Y(arguments, "WARNING:"));
    }
    function $() {
        Q() && P && console.error.apply(console, Y(arguments, "ERROR:"));
    }
    function Y(e, t) {
        return e = [].slice.call(e), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"), 
        e.unshift("%cPrebid"), e;
    }
    function Q() {
        return !!r.b.getConfig("debug");
    }
    function X(e, t) {
        return x.call(e) === "[object " + t + "]";
    }
    function Z(e) {
        return X(e, T);
    }
    function ee(e) {
        return X(e, I);
    }
    function te(e) {
        return X(e, O);
    }
    function ne(e) {
        return X(e, j);
    }
    function re(e) {
        return X(e, w);
    }
    function oe(e) {
        if (!e) return !0;
        if (te(e) || ee(e)) return !(0 < e.length);
        for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
        return !0;
    }
    function ie(e, t) {
        if (!oe(e)) {
            if (Z(e.forEach)) return e.forEach(t, this);
            var n = 0, r = e.length;
            if (0 < r) for (;n < r; n++) t(e[n], n, e); else for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n);
        }
    }
    function ae(e, t) {
        return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t];
    }
    function ce(e, t, n, r) {
        var o;
        t = t || document, o = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
        try {
            if ((o = o.length ? o : t.getElementsByTagName("body")).length) {
                o = o[0];
                var i = r ? null : o.firstChild;
                return o.insertBefore(e, i);
            }
        } catch (e) {}
    }
    function ue(e, t) {
        var n = new Image();
        t && k.isFn(t) && (n.addEventListener("load", t), n.addEventListener("error", t)), 
        n.src = e;
    }
    function se(e, t) {
        var n = k.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"), r = document.createElement("div");
        r.innerHTML = n;
        var o = r.firstChild;
        t && k.isFn(t) && (o.addEventListener("load", t), o.addEventListener("error", t)), 
        k.insertElement(o, document, "html", !0);
    }
    function de(e) {
        var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
        return e ? ((!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]) && (e = encodeURI(e)), 
        t = t && 'sandbox="'.concat(t, '"'), "<iframe ".concat(t, ' id="').concat(q(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : "";
    }
    function fe(e, t, n) {
        return null == t ? n : ee(t) ? t : ne(t) ? t.toString() : void k.logWarn("Unsuported type for param: " + e + " required type: String");
    }
    function le(e, t, n) {
        return n.indexOf(e) === t;
    }
    function pe(e, t) {
        return e.concat(t);
    }
    function ge(e) {
        return Object.keys(e);
    }
    function ye(e, t) {
        return e[t];
    }
    function be() {
        if (window.googletag && Z(window.googletag.pubads) && Z(window.googletag.pubads().getSlots)) return !0;
    }
    var ve = Se("timeToRespond", function(e, t) {
        return t < e;
    }), he = Se("responseTimestamp", function(e, t) {
        return t < e;
    }), me = Se("responseTimestamp", function(e, t) {
        return e < t;
    });
    function Se(n, r) {
        return function(e, t) {
            return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e;
        };
    }
    function Ae(e) {
        return i()(e);
    }
    function Ee() {
        if (window.navigator.cookieEnabled || document.cookie.length) return !0;
    }
    var Oe = function(e, t) {
        return e.getAdUnitPath() === t || e.getSlotElementId() === t;
    };
    function Ie(t) {
        return function(e) {
            return Oe(e, t);
        };
    }
    function Te(e) {
        return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e;
    }
    function je(e) {
        return e ? e.replace(/^\?/, "").split("&").reduce(function(e, t) {
            var n = g(t.split("="), 2), r = n[0], o = n[1];
            return /\[\]$/.test(r) ? (e[r = r.replace("[]", "")] = e[r] || [], e[r].push(o)) : e[r] = o || "", 
            e;
        }, {}) : {};
    }
    function we(e) {
        return Object.keys(e).map(function(t) {
            return Array.isArray(e[t]) ? e[t].map(function(e) {
                return "".concat(t, "[]=").concat(e);
            }).join("&") : "".concat(t, "=").concat(e[t]);
        }).join("&");
    }
    function Ce(e, t) {
        return c()(e, t);
    }
    function xe(e) {
        for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        if (!n.length) return e;
        var o = n.shift();
        if (re(e) && re(o)) for (var i in o) re(o[i]) ? (e[i] || m(e, h({}, i, {})), xe(e[i], o[i])) : te(o[i]) && e[i] ? te(e[i]) && (e[i] = e[i].concat(o[i])) : m(e, h({}, i, o[i]));
        return xe.apply(void 0, [ e ].concat(n));
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.d(t, "storage", function() {
        return T;
    }), t.registerBidder = function(t) {
        var n = Array.isArray(t.supportedMediaTypes) ? {
            supportedMediaTypes: t.supportedMediaTypes
        } : void 0;
        function r(e) {
            var t = C(e);
            c.default.registerBidAdapter(t, e.code, n);
        }
        r(t), Array.isArray(t.aliases) && t.aliases.forEach(function(e) {
            c.default.aliasRegistry[e] = t.code, r(I({}, t, {
                code: e
            }));
        });
    }, t.newBidder = C, n.d(t, "registerSyncInner", function() {
        return x;
    }), t.preloadBidderMappingFile = U, t.getIabSubCategory = function(t, e) {
        var n = c.default.getBidAdapter(t);
        if (n.getSpec().getMappingFileInfo) {
            var r = n.getSpec().getMappingFileInfo(), o = r.localStorageKey ? r.localStorageKey : n.getBidderCode(), i = T.getDataFromLocalStorage(o);
            if (i) {
                try {
                    i = JSON.parse(i);
                } catch (e) {
                    Object(m.logError)("Failed to parse ".concat(t, " mapping data stored in local storage"));
                }
                return i.mapping[e] ? i.mapping[e] : null;
            }
        }
    }, t.isValid = _;
    var r = n(100), c = n(7), u = n(3), b = n(32), s = n(44), i = n(35), a = n(38), o = n(5), v = n.n(o), d = n(8), h = n.n(d), f = n(12), l = n.n(f), p = n(4), m = n(0), g = n(2), y = n(13), S = n(9);
    function A(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e;
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), 
                !t || n.length !== t); r = !0) ;
            } catch (e) {
                o = !0, i = e;
            } finally {
                try {
                    r || null == c.return || c.return();
                } finally {
                    if (o) throw i;
                }
            }
            return n;
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return E(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t);
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function E(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    function O(e) {
        return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
    }
    function I() {
        return (I = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
    }
    var T = Object(S.a)("bidderFactory"), j = [ "requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency" ], w = 1;
    function C(p) {
        return I(new r.a(p.code), {
            getSpec: function() {
                return Object.freeze(p);
            },
            registerSyncs: g,
            callBids: function(i, a, e, n, c, r) {
                var u, s, t, d, o, f;
                function l() {
                    e(), h.a.emit(v.a.EVENTS.BIDDER_DONE, i), g(s, i.gdprConsent, i.uspConsent);
                }
                Array.isArray(i.bids) && (u = {}, s = [], 0 !== (t = i.bids.filter(y)).length ? (d = {}, 
                t.forEach(function(e) {
                    (d[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode);
                }), (o = p.buildRequests(t, i)) && 0 !== o.length ? (Array.isArray(o) || (o = [ o ]), 
                f = Object(m.delayExecution)(r(l), o.length), o.forEach(function(o) {
                    switch (o.method) {
                      case "GET":
                        n("".concat(o.url).concat(function(e) {
                            if (e) return "?".concat("object" === O(e) ? Object(m.parseQueryStringParameters)(e) : e);
                            return "";
                        }(o.data)), {
                            success: r(e),
                            error: t
                        }, void 0, I({
                            method: "GET",
                            withCredentials: !0
                        }, o.options));
                        break;

                      case "POST":
                        n(o.url, {
                            success: r(e),
                            error: t
                        }, "string" == typeof o.data ? o.data : JSON.stringify(o.data), I({
                            method: "POST",
                            contentType: "text/plain",
                            withCredentials: !0
                        }, o.options));
                        break;

                      default:
                        Object(m.logWarn)("Skipping invalid request from ".concat(p.code, ". Request type ").concat(o.type, " must be GET or POST")), 
                        f();
                    }
                    function e(e, t) {
                        c(p.code);
                        try {
                            e = JSON.parse(e);
                        } catch (e) {}
                        var n;
                        e = {
                            body: e,
                            headers: {
                                get: t.getResponseHeader.bind(t)
                            }
                        }, s.push(e);
                        try {
                            n = p.interpretResponse(e, o);
                        } catch (e) {
                            return Object(m.logError)("Bidder ".concat(p.code, " failed to interpret the server's response. Continuing without bids"), null, e), 
                            void f();
                        }
                        function r(e) {
                            var t, n, r, o = d[e.requestId];
                            o ? (e.originalCpm = e.cpm, e.originalCurrency = e.currency, t = I(Object(b.a)(v.a.STATUS.GOOD, o), e), 
                            n = o.adUnitCode, r = t, u[n] = !0, _(n, r, [ i ]) && a(n, r)) : Object(m.logWarn)("Bidder ".concat(p.code, " made bid for unknown request ID: ").concat(e.requestId, ". Ignoring."));
                        }
                        n && (Object(m.isArray)(n) ? n.forEach(r) : r(n)), f(n);
                    }
                    function t(e) {
                        c(p.code), Object(m.logError)("Server call for ".concat(p.code, " failed: ").concat(e, ". Continuing without bids.")), 
                        f();
                    }
                })) : l()) : l());
            }
        });
        function g(e, t, n) {
            x(p, e, t, n);
        }
        function y(e) {
            return !!p.isBidRequestValid(e) || (Object(m.logWarn)("Invalid bid sent to bidder ".concat(p.code, ": ").concat(JSON.stringify(e))), 
            !1);
        }
    }
    var x = Object(y.b)("async", function(t, e, n, r) {
        var o, i, a = u.b.getConfig("userSync.aliasSyncEnabled");
        !t.getUserSyncs || !a && c.default.aliasRegistry[t.code] || (o = u.b.getConfig("userSync.filterSettings"), 
        (i = t.getUserSyncs({
            iframeEnabled: !(!o || !o.iframe && !o.all),
            pixelEnabled: !(!o || !o.image && !o.all)
        }, e, n, r)) && (Array.isArray(i) || (i = [ i ]), i.forEach(function(e) {
            s.a.registerSync(e.type, t.code, e.url);
        })));
    }, "registerSyncs");
    function U(e, t) {
        if (!u.b.getConfig("adpod.brandCategoryExclusion")) return e.call(this, t);
        t.filter(function(e) {
            return Object(m.deepAccess)(e, "mediaTypes.video.context") === g.a;
        }).map(function(e) {
            return e.bids.map(function(e) {
                return e.bidder;
            });
        }).reduce(m.flatten, []).filter(m.uniques).forEach(function(n) {
            var e = c.default.getBidAdapter(n);
            if (e.getSpec().getMappingFileInfo) {
                var t = e.getSpec().getMappingFileInfo(), r = t.refreshInDays ? t.refreshInDays : w, o = t.localStorageKey ? t.localStorageKey : e.getSpec().code, i = T.getDataFromLocalStorage(o);
                try {
                    (!(i = i ? JSON.parse(i) : void 0) || Object(m.timestamp)() > i.lastUpdated + 24 * r * 60 * 60 * 1e3) && Object(p.a)(t.url, {
                        success: function(e) {
                            try {
                                e = JSON.parse(e);
                                var t = {
                                    lastUpdated: Object(m.timestamp)(),
                                    mapping: e.mapping
                                };
                                T.setDataInLocalStorage(o, JSON.stringify(t));
                            } catch (e) {
                                Object(m.logError)("Failed to parse ".concat(n, " bidder translation mapping file"));
                            }
                        },
                        error: function() {
                            Object(m.logError)("Failed to load ".concat(n, " bidder translation file"));
                        }
                    });
                } catch (e) {
                    Object(m.logError)("Failed to parse ".concat(n, " bidder translation mapping file"));
                }
            }
        }), e.call(this, t);
    }
    function _(e, t, n) {
        function r(e) {
            return "Invalid bid from ".concat(t.bidderCode, ". Ignoring bid: ").concat(e);
        }
        return e ? t ? (o = Object.keys(t), j.every(function(e) {
            return l()(o, e) && !l()([ void 0, null ], t[e]);
        }) ? "native" !== t.mediaType || Object(i.f)(t, n) ? "video" !== t.mediaType || Object(a.d)(t, n) ? !("banner" === t.mediaType && !function(e, t, n) {
            if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10))) return t.width = parseInt(t.width, 10), 
            t.height = parseInt(t.height, 10), 1;
            var r = Object(m.getBidderRequest)(n, t.bidderCode, e), o = r && r.bids && r.bids[0] && r.bids[0].sizes, i = Object(m.parseSizesInput)(o);
            if (1 === i.length) {
                var a = A(i[0].split("x"), 2), c = a[0], u = a[1];
                return t.width = parseInt(c, 10), t.height = parseInt(u, 10), 1;
            }
        }(e, t, n)) || (Object(m.logError)(r("Banner bids require a width and height")), 
        !1) : (Object(m.logError)(r("Video bid does not have required vastUrl or renderer property")), 
        !1) : (Object(m.logError)(r("Native bid missing some required properties.")), !1) : (Object(m.logError)(r("Bidder ".concat(t.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), 
        !1)) : (Object(m.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), 
        !1) : (Object(m.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
        var o;
    }
    Object(y.a)("checkAdUnitSetup").before(U);
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
        return r;
    }), n.d(t, "d", function() {
        return o;
    }), n.d(t, "b", function() {
        return i;
    }), n.d(t, "a", function() {
        return a;
    });
    var r = "native", o = "video", i = "banner", a = "adpod";
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return v;
    }), n.d(t, "b", function() {
        return j;
    });
    var r = n(46), o = n(11), a = n.n(o), i = n(12), c = n.n(i), u = n(80), s = n.n(u), d = n(0);
    function f() {
        return (f = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
    }
    var l = n(92), p = n(0), g = n(5), y = "TRUE" === p.getParameterByName(g.DEBUG_MODE).toUpperCase(), b = window.location.origin, v = "random", h = {};
    h[v] = !0, h.fixed = !0;
    var m = v, S = {
        LOW: "low",
        MEDIUM: "medium",
        HIGH: "high",
        AUTO: "auto",
        DENSE: "dense",
        CUSTOM: "custom"
    };
    var A, E, O, I, T, j = (I = [], T = null, w(), {
        getCurrentBidder: function() {
            return T;
        },
        getConfig: function() {
            if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                var e = arguments.length <= 0 ? void 0 : arguments[0];
                return e ? p.deepAccess(C(), e) : C();
            }
            return function(e, t) {
                var n = t;
                if ("string" != typeof e && (n = e, e = "*"), "function" == typeof n) {
                    var r = {
                        topic: e,
                        callback: n
                    };
                    return I.push(r), function() {
                        I.splice(I.indexOf(r), 1);
                    };
                }
                p.logError("listener must be a function");
            }.apply(void 0, arguments);
        },
        setConfig: function(n) {
            var e, r;
            p.isPlainObject(n) ? (e = Object.keys(n), r = {}, e.forEach(function(e) {
                var t = n[e];
                p.isPlainObject(A[e]) && p.isPlainObject(t) && (t = f({}, A[e], t)), r[e] = E[e] = t;
            }), x(r)) : p.logError("setConfig options must be an object");
        },
        setDefaults: function(e) {
            p.isPlainObject(A) ? (f(A, e), f(E, e)) : p.logError("defaults must be an object");
        },
        resetConfig: w,
        runWithBidder: U,
        callbackWithBidder: function(i) {
            return function(o) {
                return function() {
                    if ("function" == typeof o) {
                        for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return U(i, (e = p.bind).call.apply(e, [ o, this ].concat(n)));
                    }
                    p.logWarn("config.callbackWithBidder callback is not a function");
                };
            };
        },
        setBidderConfig: function(r) {
            try {
                !function(e) {
                    if (!p.isPlainObject(e)) throw "setBidderConfig bidder options must be an object";
                    if (!Array.isArray(e.bidders) || !e.bidders.length) throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                    if (!p.isPlainObject(e.config)) throw "setBidderConfig bidder options must contain a config object";
                }(r), r.bidders.forEach(function(n) {
                    O[n] || (O[n] = {}), Object.keys(r.config).forEach(function(e) {
                        var t = r.config[e];
                        p.isPlainObject(t) ? O[n][e] = f({}, O[n][e] || {}, t) : O[n][e] = t;
                    });
                });
            } catch (e) {
                p.logError(e);
            }
        },
        getBidderConfig: function() {
            return O;
        }
    });
    function w() {
        A = {};
        var n = {
            _debug: y,
            get debug() {
                return this._debug;
            },
            set debug(e) {
                this._debug = e;
            },
            _bidderTimeout: 3e3,
            get bidderTimeout() {
                return this._bidderTimeout;
            },
            set bidderTimeout(e) {
                this._bidderTimeout = e;
            },
            _publisherDomain: b,
            get publisherDomain() {
                return this._publisherDomain;
            },
            set publisherDomain(e) {
                this._publisherDomain = e;
            },
            _priceGranularity: S.MEDIUM,
            set priceGranularity(e) {
                i(e) && ("string" == typeof e ? this._priceGranularity = o(e) ? e : S.MEDIUM : p.isPlainObject(e) && (this._customPriceBucket = e, 
                this._priceGranularity = S.CUSTOM, p.logMessage("Using custom price granularity")));
            },
            get priceGranularity() {
                return this._priceGranularity;
            },
            _customPriceBucket: {},
            get customPriceBucket() {
                return this._customPriceBucket;
            },
            _mediaTypePriceGranularity: {},
            get mediaTypePriceGranularity() {
                return this._mediaTypePriceGranularity;
            },
            set mediaTypePriceGranularity(n) {
                var r = this;
                this._mediaTypePriceGranularity = Object.keys(n).reduce(function(e, t) {
                    return i(n[t]) ? "string" == typeof n ? e[t] = o(n[t]) ? n[t] : r._priceGranularity : p.isPlainObject(n) && (e[t] = n[t], 
                    p.logMessage("Using custom price granularity for ".concat(t))) : p.logWarn("Invalid price granularity for media type: ".concat(t)), 
                    e;
                }, {});
            },
            _sendAllBids: !0,
            get enableSendAllBids() {
                return this._sendAllBids;
            },
            set enableSendAllBids(e) {
                this._sendAllBids = e;
            },
            _useBidCache: !1,
            get useBidCache() {
                return this._useBidCache;
            },
            set useBidCache(e) {
                this._useBidCache = e;
            },
            _deviceAccess: !0,
            get deviceAccess() {
                return this._deviceAccess;
            },
            set deviceAccess(e) {
                this._deviceAccess = e;
            },
            _bidderSequence: m,
            get bidderSequence() {
                return this._bidderSequence;
            },
            set bidderSequence(e) {
                h[e] ? this._bidderSequence = e : p.logWarn("Invalid order: ".concat(e, ". Bidder Sequence was not set."));
            },
            _timeoutBuffer: 400,
            get timeoutBuffer() {
                return this._timeoutBuffer;
            },
            set timeoutBuffer(e) {
                this._timeoutBuffer = e;
            },
            _disableAjaxTimeout: !1,
            get disableAjaxTimeout() {
                return this._disableAjaxTimeout;
            },
            set disableAjaxTimeout(e) {
                this._disableAjaxTimeout = e;
            }
        };
        function o(t) {
            return a()(Object.keys(S), function(e) {
                return t === S[e];
            });
        }
        function i(e) {
            if (e) {
                if ("string" == typeof e) o(e) || p.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default."); else if (p.isPlainObject(e) && !Object(r.b)(e)) return void p.logError("Invalid custom price value passed to `setPriceGranularity()`");
                return 1;
            }
            p.logError("Prebid Error: no value passed to `setPriceGranularity()`");
        }
        E && x(Object.keys(E).reduce(function(e, t) {
            return E[t] !== n[t] && (e[t] = n[t] || {}), e;
        }, {})), E = n, O = {};
    }
    function C() {
        if (T && O && p.isPlainObject(O[T])) {
            var n = O[T], e = new s.a(Object.keys(E).concat(Object.keys(n)));
            return l(e).reduce(function(e, t) {
                return void 0 === n[t] ? e[t] = E[t] : void 0 !== E[t] && p.isPlainObject(n[t]) ? e[t] = Object(d.mergeDeep)({}, E[t], n[t]) : e[t] = n[t], 
                e;
            }, {});
        }
        return f({}, E);
    }
    function x(o) {
        var t = Object.keys(o);
        I.filter(function(e) {
            return c()(t, e.topic);
        }).forEach(function(e) {
            var t, n, r;
            e.callback((t = {}, n = e.topic, r = o[e.topic], n in t ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r, t));
        }), I.filter(function(e) {
            return "*" === e.topic;
        }).forEach(function(e) {
            return e.callback(o);
        });
    }
    function U(e, t) {
        T = e;
        try {
            return t();
        } finally {
            T = null;
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r;
    }), t.b = o;
    var l = n(3);
    function p() {
        return (p = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
    }
    function g(e) {
        return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
    }
    var y = n(0), b = 4, r = o();
    function o() {
        var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, d = e.request, f = e.done;
        return function(e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
            try {
                var o, i = r.method || (n ? "POST" : "GET"), a = document.createElement("a");
                a.href = e;
                var c, u = "object" === g(t) && null !== t ? t : {
                    success: function() {
                        y.logMessage("xhr success");
                    },
                    error: function(e) {
                        y.logError("xhr error", null, e);
                    }
                };
                "function" == typeof t && (u.success = t), (o = new window.XMLHttpRequest()).onreadystatechange = function() {
                    var e;
                    o.readyState === b && ("function" == typeof f && f(a.origin), 200 <= (e = o.status) && e < 300 || 304 === e ? u.success(o.responseText, o) : u.error(o.statusText, o));
                }, l.b.getConfig("disableAjaxTimeout") || (o.ontimeout = function() {
                    y.logError("  xhr timeout after ", o.timeout, "ms");
                }), "GET" === i && n && (p((c = y.parseUrl(e, r)).search, n), e = y.buildUrl(c)), 
                o.open(i, e, !0), l.b.getConfig("disableAjaxTimeout") || (o.timeout = s), r.withCredentials && (o.withCredentials = !0), 
                y._each(r.customHeaders, function(e, t) {
                    o.setRequestHeader(t, e);
                }), r.preflight && o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.setRequestHeader("Content-Type", r.contentType || "text/plain"), 
                "function" == typeof d && d(a.origin), "POST" === i && n ? o.send(n) : o.send();
            } catch (e) {
                y.logError("xhr construction", e);
            }
        };
    }
}, function(e, t) {
    e.exports = {
        JSON_MAPPING: {
            PL_CODE: "code",
            PL_SIZE: "sizes",
            PL_BIDS: "bids",
            BD_BIDDER: "bidder",
            BD_ID: "paramsd",
            BD_PL_ID: "placementId",
            ADSERVER_TARGETING: "adserverTargeting",
            BD_SETTING_STANDARD: "standard"
        },
        DEBUG_MODE: "pbjs_debug",
        STATUS: {
            GOOD: 1,
            NO_BID: 2
        },
        CB: {
            TYPE: {
                ALL_BIDS_BACK: "allRequestedBidsBack",
                AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                BID_WON: "bidWon",
                REQUEST_BIDS: "requestBids"
            }
        },
        EVENTS: {
            AUCTION_INIT: "auctionInit",
            AUCTION_END: "auctionEnd",
            BID_ADJUSTMENT: "bidAdjustment",
            BID_TIMEOUT: "bidTimeout",
            BID_REQUESTED: "bidRequested",
            BID_RESPONSE: "bidResponse",
            NO_BID: "noBid",
            BID_WON: "bidWon",
            BIDDER_DONE: "bidderDone",
            SET_TARGETING: "setTargeting",
            BEFORE_REQUEST_BIDS: "beforeRequestBids",
            REQUEST_BIDS: "requestBids",
            ADD_AD_UNITS: "addAdUnits",
            AD_RENDER_FAILED: "adRenderFailed"
        },
        AD_RENDER_FAILED_REASON: {
            PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocuemnt",
            NO_AD: "noAd",
            EXCEPTION: "exception",
            CANNOT_FIND_AD: "cannotFindAd",
            MISSING_DOC_OR_ADID: "missingDocOrAdid"
        },
        EVENT_ID_PATHS: {
            bidWon: "adUnitCode"
        },
        GRANULARITY_OPTIONS: {
            LOW: "low",
            MEDIUM: "medium",
            HIGH: "high",
            AUTO: "auto",
            DENSE: "dense",
            CUSTOM: "custom"
        },
        TARGETING_KEYS: {
            BIDDER: "hb_bidder",
            AD_ID: "hb_adid",
            PRICE_BUCKET: "hb_pb",
            SIZE: "hb_size",
            DEAL: "hb_deal",
            SOURCE: "hb_source",
            FORMAT: "hb_format",
            UUID: "hb_uuid",
            CACHE_ID: "hb_cache_id",
            CACHE_HOST: "hb_cache_host"
        },
        NATIVE_KEYS: {
            title: "hb_native_title",
            body: "hb_native_body",
            body2: "hb_native_body2",
            privacyLink: "hb_native_privacy",
            privacyIcon: "hb_native_privicon",
            sponsoredBy: "hb_native_brand",
            image: "hb_native_image",
            icon: "hb_native_icon",
            clickUrl: "hb_native_linkurl",
            displayUrl: "hb_native_displayurl",
            cta: "hb_native_cta",
            rating: "hb_native_rating",
            address: "hb_native_address",
            downloads: "hb_native_downloads",
            likes: "hb_native_likes",
            phone: "hb_native_phone",
            price: "hb_native_price",
            salePrice: "hb_native_saleprice"
        },
        S2S: {
            SRC: "s2s",
            DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
            SYNCED_BIDDERS_KEY: "pbjsSyncs"
        },
        BID_STATUS: {
            BID_TARGETING_SET: "targetingSet",
            RENDERED: "rendered",
            BID_REJECTED: "bidRejected"
        }
    };
}, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.d(t, "gdprDataHandler", function() {
        return B;
    }), n.d(t, "uspDataHandler", function() {
        return R;
    }), t.setS2STestingModule = function(e) {
        T = e;
    };
    var S = n(0), p = n(101), g = n(35), d = n(1), h = n(4), A = n(3), r = n(13), o = n(12), E = n.n(o), i = n(11), O = n.n(i), y = n(69), I = n(30);
    function m(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e;
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), 
                !t || n.length !== t); r = !0) ;
            } catch (e) {
                o = !0, i = e;
            } finally {
                try {
                    r || null == c.return || c.return();
                } finally {
                    if (o) throw i;
                }
            }
            return n;
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return a(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t);
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    function b() {
        return (b = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
    }
    var T, j = n(0), w = n(5), C = n(8), f = {}, x = f.bidderRegistry = {}, l = f.aliasRegistry = {}, U = {};
    A.b.getConfig("s2sConfig", function(e) {
        U = e.s2sConfig;
    });
    var c = {};
    var _ = Object(r.b)("sync", function(e) {
        var o = e.bidderCode, s = e.auctionId, d = e.bidderRequestId, t = e.adUnits, f = e.labels, l = e.src;
        return t.reduce(function(e, c) {
            var t = Object(p.b)(Object(p.a)(c, f), c.mediaTypes, c.sizes), n = t.active, u = t.mediaTypes, r = t.filterResults;
            return n ? r && j.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" banner sizes from '), r.before, "to ", r.after) : j.logInfo('Size mapping disabled adUnit "'.concat(c.code, '"')), 
            n && e.push(c.bids.filter(function(e) {
                return e.bidder === o;
            }).reduce(function(e, t) {
                var n = c.nativeParams || j.deepAccess(c, "mediaTypes.native");
                n && (t = b({}, t, {
                    nativeParams: Object(g.g)(n)
                })), t = b({}, t, Object(S.getDefinedParams)(c, [ "fpd", "mediaType", "renderer", "storedAuctionResponse" ]));
                var r = Object(p.b)(Object(p.a)(t, f), u), o = r.active, i = r.mediaTypes, a = r.filterResults;
                return o ? a && j.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '" banner sizes from '), a.before, "to ", a.after) : j.logInfo('Size mapping deactivated adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '"')), 
                j.isValidMediaTypes(i) ? t = b({}, t, {
                    mediaTypes: i
                }) : j.logError("mediaTypes is not correctly configured for adunit ".concat(c.code)), 
                o && e.push(b({}, t, {
                    adUnitCode: c.code,
                    transactionId: c.transactionId,
                    sizes: j.deepAccess(i, "banner.sizes") || j.deepAccess(i, "video.playerSize") || [],
                    bidId: t.bid_id || j.getUniqueIdentifierStr(),
                    bidderRequestId: d,
                    auctionId: s,
                    src: l,
                    bidRequestsCount: y.a.getRequestsCounter(c.code),
                    bidderRequestsCount: y.a.getBidderRequestsCounter(c.code, t.bidder),
                    bidderWinsCount: y.a.getBidderWinsCounter(c.code, t.bidder)
                })), e;
            }, [])), e;
        }, []).reduce(S.flatten, []).filter(function(e) {
            return "" !== e;
        });
    }, "getBids");
    var B = {
        consentData: null,
        setConsentData: function(e) {
            B.consentData = e;
        },
        getConsentData: function() {
            return B.consentData;
        }
    }, R = {
        consentData: null,
        setConsentData: function(e) {
            R.consentData = e;
        },
        getConsentData: function() {
            return R.consentData;
        }
    };
    function P() {
        return U && U.enabled && U.testing && T;
    }
    function u(t, n, e) {
        try {
            var r = x[t].getSpec();
            r && r[n] && "function" == typeof r[n] && (j.logInfo("Invoking ".concat(t, ".").concat(n)), 
            A.b.runWithBidder(t, S.bind.call(r[n], r, e)));
        } catch (e) {
            j.logWarn("Error calling ".concat(n, " of ").concat(t));
        }
    }
    f.makeBidRequests = Object(r.b)("sync", function(e, o, i, a, c) {
        C.emit(w.EVENTS.BEFORE_REQUEST_BIDS, e);
        var u = [], t = Object(S.getBidderCodes)(e);
        A.b.getConfig("bidderSequence") === A.a && (t = Object(S.shuffle)(t));
        var n, r, s, d, f, l, p, g = Object(I.b)(), y = t, b = [];
        U.enabled && (P() && (b = T.getSourceBidderMap(e)[T.CLIENT]), n = U.bidders, y = t.filter(function(e) {
            return !E()(n, e) || E()(b, e);
        }), Boolean(P() && U.testServerOnly) && (p = e, Boolean(O()(p, function(e) {
            return O()(e.bids, function(e) {
                return (e.bidSource || U.bidderControl && U.bidderControl[e.bidder]) && e.finalSource === T.SERVER;
            });
        }))) && (y.length = 0), d = e, f = U.bidders, (l = j.deepClone(d)).forEach(function(e) {
            e.bids = e.bids.filter(function(e) {
                return E()(f, e.bidder) && (!P() || e.finalSource !== T.CLIENT);
            }).map(function(e) {
                return e.bid_id = j.getUniqueIdentifierStr(), e;
            });
        }), r = l = l.filter(function(e) {
            return 0 !== e.bids.length;
        }), s = j.generateUUID(), n.forEach(function(e) {
            var t = j.getUniqueIdentifierStr(), n = {
                bidderCode: e,
                auctionId: i,
                bidderRequestId: t,
                tid: s,
                bids: _({
                    bidderCode: e,
                    auctionId: i,
                    bidderRequestId: t,
                    adUnits: j.deepClone(r),
                    labels: c,
                    src: w.S2S.SRC
                }),
                auctionStart: o,
                timeout: U.timeout,
                src: w.S2S.SRC,
                refererInfo: g
            };
            0 !== n.bids.length && u.push(n);
        }), r.forEach(function(e) {
            var t = e.bids.filter(function(t) {
                return O()(u, function(e) {
                    return O()(e.bids, function(e) {
                        return e.bidId === t.bid_id;
                    });
                });
            });
            e.bids = t;
        }), u.forEach(function(e) {
            e.adUnitsS2SCopy = r.filter(function(e) {
                return 0 < e.bids.length;
            });
        }));
        var v, h, m = (v = e, (h = j.deepClone(v)).forEach(function(e) {
            e.bids = e.bids.filter(function(e) {
                return !P() || e.finalSource !== T.SERVER;
            });
        }), h = h.filter(function(e) {
            return 0 !== e.bids.length;
        }));
        return y.forEach(function(e) {
            var t = j.getUniqueIdentifierStr(), n = {
                bidderCode: e,
                auctionId: i,
                bidderRequestId: t,
                bids: _({
                    bidderCode: e,
                    auctionId: i,
                    bidderRequestId: t,
                    adUnits: j.deepClone(m),
                    labels: c,
                    src: "client"
                }),
                auctionStart: o,
                timeout: a,
                refererInfo: g
            }, r = x[e];
            r || j.logError("Trying to make a request for bidder that does not exist: ".concat(e)), 
            r && n.bids && 0 !== n.bids.length && u.push(n);
        }), B.getConsentData() && u.forEach(function(e) {
            e.gdprConsent = B.getConsentData();
        }), R.getConsentData() && u.forEach(function(e) {
            e.uspConsent = R.getConsentData();
        }), u;
    }, "makeBidRequests"), f.callBids = function(e, t, o, i, a, c, u) {
        var n, r, s, d, f, l, p, g, y, b, v;
        t.length ? (r = (n = m(t.reduce(function(e, t) {
            return e[Number(void 0 !== t.src && t.src === w.S2S.SRC)].push(t), e;
        }, [ [], [] ]), 2))[0], (s = n[1]).length && (d = Object(h.b)(c, a ? {
            request: a.request.bind(null, "s2s"),
            done: a.done
        } : void 0), f = U.bidders, l = x[U.adapter], p = s[0].tid, g = s[0].adUnitsS2SCopy, 
        l ? (y = {
            tid: p,
            ad_units: g
        }).ad_units.length && (b = s.map(function(e) {
            return e.start = Object(S.timestamp)(), i.bind(e);
        }), v = y.ad_units.reduce(function(e, t) {
            return e.concat((t.bids || []).reduce(function(e, t) {
                return e.concat(t.bidder);
            }, []));
        }, []), j.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(f.filter(function(e) {
            return E()(v, e);
        }).join(","))), s.forEach(function(e) {
            C.emit(w.EVENTS.BID_REQUESTED, e);
        }), l.callBids(y, s, function(e, t) {
            var n = Object(S.getBidderRequest)(s, t.bidderCode, e);
            n && o.call(n, e, t);
        }, function() {
            return b.forEach(function(e) {
                return e();
            });
        }, d)) : j.logError("missing " + U.adapter)), r.forEach(function(t) {
            t.start = Object(S.timestamp)();
            var e = x[t.bidderCode];
            j.logMessage("CALLING BIDDER ======= ".concat(t.bidderCode)), C.emit(w.EVENTS.BID_REQUESTED, t);
            var n = Object(h.b)(c, a ? {
                request: a.request.bind(null, t.bidderCode),
                done: a.done
            } : void 0), r = i.bind(t);
            try {
                A.b.runWithBidder(t.bidderCode, S.bind.call(e.callBids, e, t, o.bind(t), r, n, u, A.b.callbackWithBidder(t.bidderCode)));
            } catch (e) {
                j.logError("".concat(t.bidderCode, " Bid Adapter emitted an uncaught error when parsing their bidRequest"), {
                    e: e,
                    bidRequest: t
                }), r();
            }
        })) : j.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?");
    }, f.videoAdapters = [], f.registerBidAdapter = function(e, t) {
        var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes, r = void 0 === n ? [] : n;
        e && t ? "function" == typeof e.callBids ? (x[t] = e, E()(r, "video") && f.videoAdapters.push(t), 
        E()(r, "native") && g.e.push(t)) : j.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : j.logError("bidAdaptor or bidderCode not specified");
    }, f.aliasBidAdapter = function(t, e) {
        var n, r;
        if (void 0 === x[e]) {
            var o = x[t];
            if (void 0 === o) {
                var i = A.b.getConfig("s2sConfig"), a = i && i.bidders;
                a && E()(a, e) ? l[e] = t : j.logError('bidderCode "' + t + '" is not an existing bidder.', "adapterManager.aliasBidAdapter");
            } else try {
                var c, u, s = (n = t, r = [], E()(f.videoAdapters, n) && r.push("video"), E()(g.e, n) && r.push("native"), 
                r);
                o.constructor.prototype != Object.prototype ? (u = new o.constructor()).setBidderCode(e) : (c = o.getSpec(), 
                u = Object(d.newBidder)(b({}, c, {
                    code: e
                })), l[e] = t), f.registerBidAdapter(u, e, {
                    supportedMediaTypes: s
                });
            } catch (e) {
                j.logError(t + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter");
            }
        } else j.logMessage('alias name "' + e + '" has been already specified.');
    }, f.registerAnalyticsAdapter = function(e) {
        var t = e.adapter, n = e.code;
        t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, c[n] = t) : j.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function')) : j.logError("Prebid Error: analyticsAdapter or analyticsCode not specified");
    }, f.enableAnalytics = function(e) {
        j.isArray(e) || (e = [ e ]), j._each(e, function(e) {
            var t = c[e.provider];
            t ? t.enableAnalytics(e) : j.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider, "."));
        });
    }, f.getBidAdapter = function(e) {
        return x[e];
    }, f.callTimedOutBidders = function(t, n, r) {
        n = n.map(function(e) {
            return e.params = j.getUserConfiguredParams(t, e.adUnitCode, e.bidder), e.timeout = r, 
            e;
        }), n = j.groupBy(n, "bidder"), Object.keys(n).forEach(function(e) {
            u(e, "onTimeout", n[e]);
        });
    }, f.callBidWonBidder = function(e, t, n) {
        t.params = j.getUserConfiguredParams(n, t.adUnitCode, t.bidder), y.a.incrementBidderWinsCounter(t.adUnitCode, t.bidder), 
        u(e, "onBidWon", t);
    }, f.callSetTargetingBidder = function(e, t) {
        u(e, "onSetTargeting", t);
    }, t.default = f;
}, function(e, t, n) {
    function r() {
        return (r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
    }
    var c, o, u = n(0), i = n(5), a = Array.prototype.slice, s = Array.prototype.push, d = u._map(i.EVENTS, function(e) {
        return e;
    }), f = i.EVENT_ID_PATHS, l = [];
    e.exports = (c = {}, (o = {}).on = function(e, t, n) {
        var r, o;
        o = e, u.contains(d, o) ? (r = c[e] || {
            que: []
        }, n ? (r[n] = r[n] || {
            que: []
        }, r[n].que.push(t)) : r.que.push(t), c[e] = r) : u.logError("Wrong event name : " + e + " Valid event names :" + d);
    }, o.emit = function(e) {
        !function(e, t) {
            u.logMessage("Emitting event for: " + e);
            var n = t[0] || {}, r = n[f[e]], o = c[e] || {
                que: []
            }, i = u._map(o, function(e, t) {
                return t;
            }), a = [];
            l.push({
                eventType: e,
                args: n,
                id: r
            }), r && u.contains(i, r) && s.apply(a, o[r].que), s.apply(a, o.que), u._each(a, function(e) {
                if (e) try {
                    e.apply(null, t);
                } catch (e) {
                    u.logError("Error executing handler:", "events.js", e);
                }
            });
        }(e, a.call(arguments, 1));
    }, o.off = function(e, n, r) {
        var o = c[e];
        u.isEmpty(o) || u.isEmpty(o.que) && u.isEmpty(o[r]) || r && (u.isEmpty(o[r]) || u.isEmpty(o[r].que)) || (r ? u._each(o[r].que, function(e) {
            var t = o[r].que;
            e === n && t.splice(t.indexOf(e), 1);
        }) : u._each(o.que, function(e) {
            var t = o.que;
            e === n && t.splice(t.indexOf(e), 1);
        }), c[e] = o);
    }, o.get = function() {
        return c;
    }, o.getEvents = function() {
        var n = [];
        return u._each(l, function(e) {
            var t = r({}, e);
            n.push(t);
        }), n;
    }, o);
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
        return f;
    }), n.d(t, "d", function() {
        return l;
    }), t.a = function(e) {
        return i({
            moduleName: e,
            moduleType: "core"
        });
    }, t.b = function(e, t) {
        return i({
            gvlid: e,
            moduleName: t
        });
    };
    var r = n(13), c = n(0), o = n(12), u = n.n(o), d = [ "core", "prebid-module" ], f = [];
    function i(e) {
        var t = 0 < arguments.length && void 0 !== e ? e : {}, o = t.gvlid, i = t.moduleName, a = t.moduleType;
        function s(n) {
            if (u()(d, a)) {
                return n({
                    valid: !0
                });
            }
            var r;
            return l(o, i, {
                hasEnforcementHook: !1
            }, function(e) {
                var t;
                r = e && e.hasEnforcementHook ? n(e) : (t = {
                    hasEnforcementHook: !1,
                    valid: c.hasDeviceAccess()
                }, n(t));
            }), r;
        }
        return {
            setCookie: function(o, i, a, c, u, t) {
                function n(e) {
                    var t, n, r;
                    e && e.valid && (t = u && "" !== u ? " ;domain=".concat(encodeURIComponent(u)) : "", 
                    n = a && "" !== a ? " ;expires=".concat(a) : "", r = null != c && "none" == c.toLowerCase() ? "; Secure" : "", 
                    document.cookie = "".concat(o, "=").concat(encodeURIComponent(i)).concat(n, "; path=/").concat(t).concat(c ? "; SameSite=".concat(c) : "").concat(r));
                }
                if (!t || "function" != typeof t) return s(n);
                f.push(function() {
                    var e = s(n);
                    t(e);
                });
            },
            getCookie: function(n, t) {
                function r(e) {
                    if (e && e.valid) {
                        var t = window.document.cookie.match("(^|;)\\s*" + n + "\\s*=\\s*([^;]*)\\s*(;|$)");
                        return t ? decodeURIComponent(t[2]) : null;
                    }
                    return null;
                }
                if (!t || "function" != typeof t) return s(r);
                f.push(function() {
                    var e = s(r);
                    t(e);
                });
            },
            localStorageIsEnabled: function(t) {
                function n(e) {
                    if (e && e.valid) try {
                        return localStorage.setItem("prebid.cookieTest", "1"), "1" === localStorage.getItem("prebid.cookieTest");
                    } catch (e) {}
                    return !1;
                }
                if (!t || "function" != typeof t) return s(n);
                f.push(function() {
                    var e = s(n);
                    t(e);
                });
            },
            cookiesAreEnabled: function(t) {
                function n(e) {
                    return !(!e || !e.valid) && (!!c.checkCookieSupport() || (window.document.cookie = "prebid.cookieTest", 
                    -1 !== window.document.cookie.indexOf("prebid.cookieTest")));
                }
                if (!t || "function" != typeof t) return s(n);
                f.push(function() {
                    var e = s(n);
                    t(e);
                });
            },
            setDataInLocalStorage: function(t, n, r) {
                function o(e) {
                    e && e.valid && window.localStorage.setItem(t, n);
                }
                if (!r || "function" != typeof r) return s(o);
                f.push(function() {
                    var e = s(o);
                    r(e);
                });
            },
            getDataFromLocalStorage: function(t, n) {
                function r(e) {
                    return e && e.valid ? window.localStorage.getItem(t) : null;
                }
                if (!n || "function" != typeof n) return s(r);
                f.push(function() {
                    var e = s(r);
                    n(e);
                });
            },
            removeDataFromLocalStorage: function(t, n) {
                function r(e) {
                    e && e.valid && window.localStorage.removeItem(t);
                }
                if (!n || "function" != typeof n) return s(r);
                f.push(function() {
                    var e = s(r);
                    n(e);
                });
            },
            hasLocalStorage: function(t) {
                function n(e) {
                    if (e && e.valid) try {
                        return !!window.localStorage;
                    } catch (e) {
                        c.logError("Local storage api disabled");
                    }
                    return !1;
                }
                if (!t || "function" != typeof t) return s(n);
                f.push(function() {
                    var e = s(n);
                    t(e);
                });
            },
            findSimilarCookies: function(i, t) {
                function n(e) {
                    if (e && e.valid) {
                        var t = [];
                        if (c.hasDeviceAccess()) for (var n = document.cookie.split(";"); n.length; ) {
                            var r = n.pop(), o = (o = r.indexOf("=")) < 0 ? r.length : o;
                            0 <= decodeURIComponent(r.slice(0, o).replace(/^\s+/, "")).indexOf(i) && t.push(decodeURIComponent(r.slice(o + 1)));
                        }
                        return t;
                    }
                }
                if (!t || "function" != typeof t) return s(n);
                f.push(function() {
                    var e = s(n);
                    t(e);
                });
            }
        };
    }
    var l = Object(r.b)("async", function(e, t, n, r) {
        r(n);
    }, "validateStorageEnforcement");
}, function(e, t, n) {
    "use strict";
    t.a = o, t.c = function(e) {
        return !(!e || !e.url);
    }, t.b = function(e, t) {
        e.render(t);
    };
    var u = n(39), s = n(0), r = n(11), d = n.n(r), f = "outstream";
    function o(e) {
        var t = this, r = e.url, n = e.config, o = e.id, i = e.callback, a = e.loaded, c = e.adUnitCode;
        this.url = r, this.config = n, this.handlers = {}, this.id = o, this.loaded = a, 
        this.cmd = [], this.push = function(e) {
            "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : s.logError("Commands given to Renderer.push must be wrapped in a function");
        }, this.callback = i || function() {
            t.loaded = !0, t.process();
        }, this.render = function() {
            var t, e, n;
            t = c, e = pbjs.adUnits, (n = d()(e, function(e) {
                return e.code === t;
            })) && n.renderer && n.renderer.url && n.renderer.render ? s.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(c)) : Object(u.a)(r, f, this.callback), 
            this._render ? this._render.apply(this, arguments) : s.logWarn("No render function was provided, please use .setRender on the renderer");
        }.bind(this);
    }
    o.install = function(e) {
        return new o({
            url: e.url,
            config: e.config,
            id: e.id,
            callback: e.callback,
            loaded: e.loaded,
            adUnitCode: e.adUnitCode
        });
    }, o.prototype.getConfig = function() {
        return this.config;
    }, o.prototype.setRender = function(e) {
        this._render = e;
    }, o.prototype.setEventHandlers = function(e) {
        this.handlers = e;
    }, o.prototype.handleVideoEvent = function(e) {
        var t = e.id, n = e.eventName;
        "function" == typeof this.handlers[n] && this.handlers[n](), s.logMessage("Prebid Renderer event for id ".concat(t, " type ").concat(n));
    }, o.prototype.process = function() {
        for (;0 < this.cmd.length; ) try {
            this.cmd.shift().call();
        } catch (e) {
            s.logError("Error processing Renderer command: ", e);
        }
    };
}, function(e, t, n) {
    var r = n(105);
    e.exports = r;
}, function(e, t, n) {
    var r = n(114);
    e.exports = r;
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return a;
    }), n.d(t, "a", function() {
        return c;
    }), t.d = function(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 15;
        0 === e.getHooks({
            hook: t
        }).length && e.before(t, n);
    }, t.c = function(e, n) {
        a("async", function(e) {
            e.forEach(function(e) {
                return n.apply(void 0, function(e) {
                    if (Array.isArray(e)) return i(e);
                }(t = e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                }(t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return i(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }());
                var t;
            });
        }, e)([]);
    }, t.e = function(e) {
        for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        c(e).before(function(e, t) {
            t.push(n), e(t);
        });
    };
    var r = n(184), o = n.n(r);
    function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    var a = o()({
        ready: o.a.SYNC | o.a.ASYNC | o.a.QUEUE
    }), c = a.get;
}, function(e, t, n) {
    "use strict";
    function v(r) {
        function e(e, t, n) {
            if (this instanceof r) {
                switch (arguments.length) {
                  case 0:
                    return new r();

                  case 1:
                    return new r(e);

                  case 2:
                    return new r(e, t);
                }
                return new r(e, t, n);
            }
            return r.apply(this, arguments);
        }
        return e.prototype = r.prototype, e;
    }
    var h = n(22), m = n(107).f, S = n(109), A = n(42), E = n(21), O = n(29), I = n(24);
    e.exports = function(e, t) {
        var n, r, o, i, a, c, u, s, d = e.target, f = e.global, l = e.stat, p = e.proto, g = f ? h : l ? h[d] : (h[d] || {}).prototype, y = f ? A : A[d] || (A[d] = {}), b = y.prototype;
        for (o in t) n = !S(f ? o : d + (l ? "." : "#") + o, e.forced) && g && I(g, o), 
        a = y[o], n && (c = e.noTargetGet ? (s = m(g, o)) && s.value : g[o]), i = n && c ? c : t[o], 
        n && typeof a == typeof i || (u = e.bind && n ? E(i, h) : e.wrap && n ? v(i) : p && "function" == typeof i ? E(Function.call, i) : i, 
        (e.sham || i && i.sham || a && a.sham) && O(u, "sham", !0), y[o] = u, p && (I(A, r = d + "Prototype") || O(A, r, {}), 
        A[r][o] = i, e.real && b && !b[o] && O(b, o, i)));
    };
}, function(e, t, n) {
    var r = n(23);
    e.exports = function(e) {
        if (!r(e)) throw TypeError(String(e) + " is not an object");
        return e;
    };
}, function(e, t) {
    e.exports = !0;
}, function(e, t, n) {
    function p(e, t) {
        this.stopped = e, this.result = t;
    }
    var g = n(15), y = n(82), b = n(51), v = n(21), h = n(62), m = n(83);
    (e.exports = function(e, t, n, r, o) {
        var i, a, c, u, s, d, f, l = v(t, n, r ? 2 : 1);
        if (o) i = e; else {
            if ("function" != typeof (a = h(e))) throw TypeError("Target is not iterable");
            if (y(a)) {
                for (c = 0, u = b(e.length); c < u; c++) if ((s = r ? l(g(f = e[c])[0], f[1]) : l(e[c])) && s instanceof p) return s;
                return new p(!1);
            }
            i = a.call(e);
        }
        for (d = i.next; !(f = d.call(i)).done; ) if ("object" == typeof (s = m(i, l, f.value, r)) && s && s instanceof p) return s;
        return new p(!1);
    }).stop = function(e) {
        return new p(!0, e);
    };
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
        return e;
    };
}, function(e, t, n) {
    var r = n(22), o = n(76), i = n(24), a = n(60), c = n(78), u = n(113), s = o("wks"), d = r.Symbol, f = u ? d : d && d.withoutSetter || a;
    e.exports = function(e) {
        return i(s, e) || (c && i(d, e) ? s[e] = d[e] : s[e] = f("Symbol." + e)), s[e];
    };
}, function(e, t, n) {
    "use strict";
    t.a = function() {
        return window.pbjs;
    }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || [], 
    window._pbjsGlobals = window._pbjsGlobals || [], window._pbjsGlobals.push("pbjs");
}, function(e, t, n) {
    var i = n(18);
    e.exports = function(r, o, e) {
        if (i(r), void 0 === o) return r;
        switch (e) {
          case 0:
            return function() {
                return r.call(o);
            };

          case 1:
            return function(e) {
                return r.call(o, e);
            };

          case 2:
            return function(e, t) {
                return r.call(o, e, t);
            };

          case 3:
            return function(e, t, n) {
                return r.call(o, e, t, n);
            };
        }
        return function() {
            return r.apply(o, arguments);
        };
    };
}, function(n, e, t) {
    (function(e) {
        function t(e) {
            return e && e.Math == Math && e;
        }
        n.exports = t("object" == typeof globalThis && globalThis) || t("object" == typeof window && window) || t("object" == typeof self && self) || t("object" == typeof e && e) || Function("return this")();
    }).call(e, t(33));
}, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e;
    };
}, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t);
    };
}, function(e, t, n) {
    function r(e) {
        return "function" == typeof e ? e : void 0;
    }
    var o = n(42), i = n(22);
    e.exports = function(e, t) {
        return arguments.length < 2 ? r(o[e]) || r(i[e]) : o[e] && o[e][t] || i[e] && i[e][t];
    };
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return u;
    });
    var r = n(0), s = n(40), o = n(11), i = n.n(o), a = n(5);
    var d, c, u = (d = [], (c = {}).addWinningBid = function(t) {
        var e = i()(d, function(e) {
            return e.getAuctionId() === t.auctionId;
        });
        e ? (t.status = a.BID_STATUS.RENDERED, e.addWinningBid(t)) : Object(r.logWarn)("Auction not found when adding winning bid");
    }, c.getAllWinningBids = function() {
        return d.map(function(e) {
            return e.getWinningBids();
        }).reduce(r.flatten, []);
    }, c.getBidsRequested = function() {
        return d.map(function(e) {
            return e.getBidRequests();
        }).reduce(r.flatten, []);
    }, c.getNoBids = function() {
        return d.map(function(e) {
            return e.getNoBids();
        }).reduce(r.flatten, []);
    }, c.getBidsReceived = function() {
        return d.map(function(e) {
            if (e.getAuctionStatus() === s.a) return e.getBidsReceived();
        }).reduce(r.flatten, []).filter(function(e) {
            return e;
        });
    }, c.getAdUnits = function() {
        return d.map(function(e) {
            return e.getAdUnits();
        }).reduce(r.flatten, []);
    }, c.getAdUnitCodes = function() {
        return d.map(function(e) {
            return e.getAdUnitCodes();
        }).reduce(r.flatten, []).filter(r.uniques);
    }, c.createAuction = function(e) {
        var t, n = e.adUnits, r = e.adUnitCodes, o = e.callback, i = e.cbTimeout, a = e.labels, c = e.auctionId, u = Object(s.k)({
            adUnits: n,
            adUnitCodes: r,
            callback: o,
            cbTimeout: i,
            labels: a,
            auctionId: c
        });
        return t = u, d.push(t), u;
    }, c.findBidByAdId = function(t) {
        return i()(d.map(function(e) {
            return e.getBidsReceived();
        }).reduce(r.flatten, []), function(e) {
            return e.adId === t;
        });
    }, c.getStandardBidderAdServerTargeting = function() {
        return Object(s.j)()[a.JSON_MAPPING.ADSERVER_TARGETING];
    }, c.setStatusForBids = function(e, t) {
        var n, r = c.findBidByAdId(e);
        r && (r.status = t), !r || t !== a.BID_STATUS.BID_TARGETING_SET || (n = i()(d, function(e) {
            return e.getAuctionId() === r.auctionId;
        })) && n.setBidTargeting(r);
    }, c.getLastAuctionId = function() {
        return d.length && d[d.length - 1].getAuctionId();
    }, c);
}, function(e, t, n) {
    var r = n(28);
    e.exports = !r(function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7;
            }
        })[1];
    });
}, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e();
        } catch (e) {
            return !0;
        }
    };
}, function(e, t, n) {
    var r = n(27), o = n(31), i = n(47);
    e.exports = r ? function(e, t, n) {
        return o.f(e, t, i(1, n));
    } : function(e, t, n) {
        return e[t] = n, e;
    };
}, function(e, t, n) {
    "use strict";
    t.a = r, n.d(t, "b", function() {
        return o;
    });
    var a = n(0);
    function c() {
        return (c = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
    }
    function r(o) {
        function i() {
            var e = function() {
                var t, n = [];
                do {
                    try {
                        t = t ? t.parent : o;
                        try {
                            var e = t == o.top, r = {
                                referrer: t.document.referrer || null,
                                location: t.location.href || null,
                                isTop: e
                            };
                            e && (r = c(r, {
                                canonicalUrl: function(e) {
                                    try {
                                        var t = e.querySelector("link[rel='canonical']");
                                        if (null !== t) return t.href;
                                    } catch (e) {}
                                    return null;
                                }(t.document)
                            })), n.push(r);
                        } catch (e) {
                            n.push({
                                referrer: null,
                                location: null,
                                isTop: t == o.top
                            }), Object(a.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");
                        }
                    } catch (e) {
                        return n.push({
                            referrer: null,
                            location: null,
                            isTop: !1
                        }), n;
                    }
                } while (t != o.top);
                return n;
            }(), t = function() {
                try {
                    if (!o.location.ancestorOrigins) return;
                    return o.location.ancestorOrigins;
                } catch (e) {}
            }();
            if (t) for (var n = 0, r = t.length; n < r; n++) e[n].ancestor = t[n];
            return e;
        }
        return function() {
            try {
                var e, t = i(), n = t.length - 1, r = null !== t[n].location || 0 < n && null !== t[n - 1].referrer, o = function(e) {
                    for (var t = [], n = null, r = null, o = null, i = null, a = null, c = null, u = e.length - 1; 0 <= u; u--) {
                        try {
                            r = e[u].location;
                        } catch (e) {}
                        if (r) t.push(r), c = c || r; else if (0 !== u) {
                            o = e[u - 1];
                            try {
                                i = o.referrer, a = o.ancestor;
                            } catch (e) {}
                            i ? (t.push(i), c = c || i) : a ? (t.push(a), c = c || a) : t.push(n);
                        } else t.push(n);
                    }
                    return {
                        stack: t,
                        detectedRefererUrl: c
                    };
                }(t);
                return t[t.length - 1].canonicalUrl && (e = t[t.length - 1].canonicalUrl), {
                    referer: o.detectedRefererUrl,
                    reachedTop: r,
                    numIframes: n,
                    stack: o.stack,
                    canonicalUrl: e
                };
            } catch (e) {}
        };
    }
    var o = r(window);
}, function(e, t, n) {
    var r = n(27), o = n(74), i = n(15), a = n(56), c = Object.defineProperty;
    t.f = r ? c : function(e, t, n) {
        if (i(e), t = a(t, !0), i(n), o) try {
            return c(e, t, n);
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
        return "value" in n && (e[t] = n.value), e;
    };
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        return new r(e, t);
    };
    var o = n(0);
    function r(e, t) {
        var n = t && t.src || "client", r = e || 0;
        this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0, this.statusMessage = function() {
            switch (r) {
              case 0:
                return "Pending";

              case 1:
                return "Bid available";

              case 2:
                return "Bid returned empty or error response";

              case 3:
                return "Bid timed out";
            }
        }(), this.adId = o.getUniqueIdentifierStr(), this.requestId = t && t.bidId, this.mediaType = "banner", 
        this.source = n, this.getStatusCode = function() {
            return r;
        }, this.getSize = function() {
            return this.width + "x" + this.height;
        };
    }
}, function(e, t) {
    var n = function() {
        return this;
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
        "object" == typeof window && (n = window);
    }
    e.exports = n;
}, function(e, t, n) {
    var r = n(16), o = n(91);
    e.exports = r ? o : function(e) {
        return Set.prototype.values.call(e);
    };
}, function(e, t, n) {
    "use strict";
    n.d(t, "e", function() {
        return i;
    }), n.d(t, "a", function() {
        return s;
    }), t.g = function(e) {
        if (e && e.type && function(e) {
            return !(!e || !c()(Object.keys(d), e)) || (Object(a.logError)("".concat(e, " nativeParam is not supported")), 
            !1);
        }(e.type)) return d[e.type];
        return e;
    }, t.f = function(t, e) {
        var n = Object(a.getBidRequest)(t.requestId, e);
        if (!n) return !1;
        if (!Object(a.deepAccess)(t, "native.clickUrl")) return !1;
        if (Object(a.deepAccess)(t, "native.image") && (!Object(a.deepAccess)(t, "native.image.height") || !Object(a.deepAccess)(t, "native.image.width"))) return !1;
        if (Object(a.deepAccess)(t, "native.icon") && (!Object(a.deepAccess)(t, "native.icon.height") || !Object(a.deepAccess)(t, "native.icon.width"))) return !1;
        var r = n.nativeParams;
        if (!r) return !0;
        var o = Object.keys(r).filter(function(e) {
            return r[e].required;
        }), i = Object.keys(t.native).filter(function(e) {
            return t.native[e];
        });
        return o.every(function(e) {
            return c()(i, e);
        });
    }, t.b = function(e, t) {
        var n;
        "click" === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers, 
        t.native && t.native.javascriptTrackers && Object(a.insertHtmlIntoIframe)(t.native.javascriptTrackers));
        return (n || []).forEach(a.triggerPixel), e.action;
    }, t.d = function(r, o) {
        var i = {};
        return Object.keys(r.native).forEach(function(e) {
            var t = u.NATIVE_KEYS[e], n = f(r.native[e]);
            Object(a.deepAccess)(o, "mediaTypes.native.".concat(e, ".sendId")) && (n = "".concat(t, ":").concat(r.adId)), 
            t && n && (i[t] = n);
        }), i;
    }, t.c = function(e, r) {
        var o = {
            message: "assetResponse",
            adId: e.adId,
            assets: []
        };
        return e.assets.forEach(function(e) {
            var t = Object(a.getKeyByValue)(u.NATIVE_KEYS, e), n = f(r.native[t]);
            o.assets.push({
                key: t,
                value: n
            });
        }), o;
    };
    var a = n(0), r = n(12), c = n.n(r);
    function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
    }
    var u = n(5), i = [], s = Object.keys(u.NATIVE_KEYS).map(function(e) {
        return u.NATIVE_KEYS[e];
    }), d = {
        image: {
            image: {
                required: !0
            },
            title: {
                required: !0
            },
            sponsoredBy: {
                required: !0
            },
            clickUrl: {
                required: !0
            },
            body: {
                required: !1
            },
            icon: {
                required: !1
            }
        }
    };
    function f(e) {
        return "object" === o(e) && e.url ? e.url : e;
    }
}, function(e, t) {
    e.exports = {};
}, function(e, t, n) {
    var o = n(15), i = n(18), a = n(19)("species");
    e.exports = function(e, t) {
        var n, r = o(e).constructor;
        return void 0 === r || null == (n = o(r)[a]) ? t : i(n);
    };
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return c;
    }), n.d(t, "a", function() {
        return u;
    }), t.d = function(e, t) {
        var n = Object(i.getBidRequest)(e.requestId, t), r = n && Object(i.deepAccess)(n, "mediaTypes.video"), o = r && Object(i.deepAccess)(r, "context");
        return s(e, n, r, o);
    }, n.d(t, "c", function() {
        return s;
    });
    n(7);
    var i = n(0), o = n(3), r = n(12), a = (n.n(r), n(13)), c = "outstream", u = "instream";
    var s = Object(a.b)("sync", function(e, t, n, r) {
        return !t || n && r !== c ? o.b.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(i.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), 
        !1) : r !== c || !(!e.renderer && !t.renderer);
    }, "checkVideoBidSetup");
}, function(e, t, n) {
    "use strict";
    t.a = function(r, e, t) {
        if (!e || !r) return void i.logError("cannot load external script without url and moduleCode");
        if (!o()(c, e)) return void i.logError("".concat(e, " not whitelisted for loading external JavaScript"));
        if (a[r]) return t && "function" == typeof t && (a[r].loaded ? t() : a[r].callbacks.push(t)), 
        a[r].tag;
        a[r] = {
            loaded: !1,
            tag: null,
            callbacks: []
        }, t && "function" == typeof t && a[r].callbacks.push(t);
        return i.logWarn("module ".concat(e, " is loading external JavaScript")), function(e, t) {
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0, (a[r].tag = n).readyState ? n.onreadystatechange = function() {
                "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, 
                t());
            } : n.onload = function() {
                t();
            };
            return n.src = e, i.insertElement(n), n;
        }(r, function() {
            a[r].loaded = !0;
            try {
                for (var e = 0; e < a[r].callbacks.length; e++) a[r].callbacks[e]();
            } catch (e) {
                i.logError("Error executing callback", "adloader.js:loadExternalScript", e);
            }
        });
    };
    var r = n(12), o = n.n(r), i = n(0), a = {}, c = [ "criteo", "outstream", "adagio", "browsi" ];
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return F;
    }), n.d(t, "a", function() {
        return W;
    }), t.k = function(e) {
        var t, o, y, b, i = e.adUnits, n = e.adUnitCodes, r = e.callback, a = e.cbTimeout, c = e.labels, u = e.auctionId, v = i, s = c, d = n, h = [], f = [], l = [], p = u || D.generateUUID(), g = r, m = a, S = [], A = new Set();
        function E() {
            return {
                auctionId: p,
                timestamp: t,
                auctionEnd: o,
                auctionStatus: y,
                adUnits: v,
                adUnitCodes: d,
                labels: s,
                bidderRequests: h,
                noBids: l,
                bidsReceived: f,
                winningBids: S,
                timeout: m
            };
        }
        function O(n, e) {
            var r, t;
            e && clearTimeout(b), void 0 === o && (r = [], n && (D.logMessage("Auction ".concat(p, " timedOut")), 
            t = A, (r = h.map(function(e) {
                return (e.bids || []).filter(function(e) {
                    return !t.has(e.bidder);
                });
            }).reduce(w.flatten, []).map(function(e) {
                return {
                    bidId: e.bidId,
                    bidder: e.bidder,
                    adUnitCode: e.adUnitCode,
                    auctionId: e.auctionId
                };
            })).length && M.emit(q.EVENTS.BID_TIMEOUT, r)), y = W, o = Date.now(), M.emit(q.EVENTS.AUCTION_END, E()), 
            $(v, function() {
                try {
                    var e;
                    null != g && (e = f.filter(D.bind.call(w.adUnitsFilter, this, d)).reduce(Z, {}), 
                    g.apply(pbjs, [ e, n, p ]), g = null);
                } catch (e) {
                    D.logError("Error executing bidsBackHandler", null, e);
                } finally {
                    r.length && N.callTimedOutBidders(i, r, m);
                    var t = U.b.getConfig("userSync") || {};
                    t.enableOverride || k(t.syncDelay);
                }
            }));
        }
        function I() {
            D.logInfo("Bids Received for Auction with id: ".concat(p), f), y = W, O(!1, !0);
        }
        function T(e) {
            A.add(e);
        }
        function j(d) {
            var f = this;
            d.forEach(function(e) {
                var t;
                t = e, h = h.concat(t);
            });
            var l = {}, e = {
                bidRequests: d,
                run: function() {
                    var e, t;
                    e = O.bind(null, !0), t = setTimeout(e, m), b = t, y = F, M.emit(q.EVENTS.AUCTION_INIT, E());
                    var n, r, o, i, a, c, u = (n = I, r = f, o = 0, i = !1, a = new Set(), c = {}, {
                        addBidResponse: function(e, t) {
                            c[t.requestId] = !0, o++;
                            var n = function(e) {
                                var t = e.adUnitCode, n = e.bid, r = e.bidderRequest, o = e.auctionId, i = r.start, a = P({}, n, {
                                    auctionId: o,
                                    responseTimestamp: Object(w.timestamp)(),
                                    requestTimestamp: i,
                                    cpm: parseFloat(n.cpm) || 0,
                                    bidder: n.bidderCode,
                                    adUnitCode: t
                                });
                                a.timeToRespond = a.responseTimestamp - a.requestTimestamp, M.emit(q.EVENTS.BID_ADJUSTMENT, a);
                                var c = r.bids && _()(r.bids, function(e) {
                                    return e.adUnitCode == t;
                                }), u = c && c.renderer;
                                u && u.url && (a.renderer = x.a.install({
                                    url: u.url
                                }), a.renderer.setRender(u.render));
                                var s = X(n.mediaType, c, U.b.getConfig("mediaTypePriceGranularity")), d = Object(C.a)(a.cpm, "object" === R(s) ? s : U.b.getConfig("customPriceBucket"), U.b.getConfig("currency.granularityMultiplier"));
                                return a.pbLg = d.low, a.pbMg = d.med, a.pbHg = d.high, a.pbAg = d.auto, a.pbDg = d.dense, 
                                a.pbCg = d.custom, a;
                            }({
                                adUnitCode: e,
                                bid: t,
                                bidderRequest: this,
                                auctionId: r.getAuctionId()
                            });
                            "video" === n.mediaType ? function(e, t, n, r) {
                                var o = !0, i = Object(w.getBidRequest)(t.requestId, [ n ]), a = i && Object(w.deepAccess)(i, "mediaTypes.video"), c = a && Object(w.deepAccess)(a, "context");
                                U.b.getConfig("cache.url") && c !== B.b && (t.videoCacheKey ? t.vastUrl || (D.logError("videoCacheKey specified but not required vastUrl for video bid"), 
                                o = !1) : (o = !1, Q(e, t, r, i))), o && (Y(e, t), r());
                            }(r, n, this, s) : (Y(r, n), s());
                        },
                        adapterDone: function() {
                            a.add(this), i = r.getBidRequests().every(function(e) {
                                return a.has(e);
                            }), this.bids.forEach(function(e) {
                                c[e.bidId] || (r.addNoBid(e), M.emit(q.EVENTS.NO_BID, e));
                            }), i && 0 === o && n();
                        }
                    });
                    function s() {
                        o--, i && 0 === o && n();
                    }
                    N.callBids(v, d, function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        J.apply({
                            dispatch: u.addBidResponse,
                            bidderRequest: this
                        }, t);
                    }, u.adapterDone, {
                        request: function(e, t) {
                            g(z, t), g(l, e), V[e] || (V[e] = {
                                SRA: !0,
                                origin: t
                            }), 1 < l[e] && (V[e].SRA = !1);
                        },
                        done: function(e) {
                            z[e]--, H[0] && p(H[0]) && H.shift();
                        }
                    }, m, T);
                }
            };
            function p(e) {
                var r = !0, o = U.b.getConfig("maxRequestsPerOrigin") || L;
                return e.bidRequests.some(function(e) {
                    var t = 1, n = void 0 !== e.src && e.src === q.S2S.SRC ? "s2s" : e.bidderCode;
                    return V[n] && (!1 === V[n].SRA && (t = Math.min(e.bids.length, o)), z[V[n].origin] + t > o && (r = !1)), 
                    !r;
                }), r && e.run(), r;
            }
            function g(e, t) {
                void 0 === e[t] ? e[t] = 1 : e[t]++;
            }
            p(e) || (D.logWarn("queueing auction due to limited endpoint capacity"), H.push(e));
        }
        return {
            addBidReceived: function(e) {
                f = f.concat(e);
            },
            addNoBid: function(e) {
                l = l.concat(e);
            },
            executeCallback: O,
            callBids: function() {
                y = G, t = Date.now();
                var e = N.makeBidRequests(v, t, p, m, s);
                D.logInfo("Bids Requested for Auction with id: ".concat(p), e), e.length < 1 ? (D.logWarn("No valid bid requests returned for auction"), 
                I()) : K.call({
                    dispatch: j,
                    context: this
                }, e);
            },
            addWinningBid: function(e) {
                S = S.concat(e), N.callBidWonBidder(e.bidder, e, i);
            },
            setBidTargeting: function(e) {
                N.callSetTargetingBidder(e.bidder, e);
            },
            getWinningBids: function() {
                return S;
            },
            getTimeout: function() {
                return m;
            },
            getAuctionId: function() {
                return p;
            },
            getAuctionStatus: function() {
                return y;
            },
            getAdUnits: function() {
                return v;
            },
            getAdUnitCodes: function() {
                return d;
            },
            getBidRequests: function() {
                return h;
            },
            getBidsReceived: function() {
                return f;
            },
            getNoBids: function() {
                return l;
            }
        };
    }, n.d(t, "c", function() {
        return J;
    }), n.d(t, "e", function() {
        return K;
    }), t.g = s, t.d = Y, n.d(t, "f", function() {
        return Q;
    }), n.d(t, "i", function() {
        return d;
    }), n.d(t, "h", function() {
        return f;
    }), t.j = l;
    var w = n(0), C = n(46), a = n(35), i = n(102), x = n(10), U = n(3), r = n(44), o = n(13), c = n(11), _ = n.n(c), B = n(38), u = n(2);
    function R(e) {
        return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
    }
    function P() {
        return (P = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
    }
    var k = r.a.syncUsers, D = n(0), N = n(7).default, M = n(8), q = n(5), G = "started", F = "inProgress", W = "completed";
    M.on(q.EVENTS.BID_ADJUSTMENT, function(e) {
        !function(e) {
            var t, n = e.bidderCode, r = e.cpm;
            if (pbjs.bidderSettings && (n && pbjs.bidderSettings[n] && "function" == typeof pbjs.bidderSettings[n].bidCpmAdjustment ? t = pbjs.bidderSettings[n].bidCpmAdjustment : pbjs.bidderSettings[q.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[q.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = pbjs.bidderSettings[q.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), 
            t)) try {
                r = t(e.cpm, P({}, e));
            } catch (e) {
                D.logError("Error during bid adjustment", "bidmanager.js", e);
            }
            0 <= r && (e.cpm = r);
        }(e);
    });
    var L = 4, z = {}, V = {}, H = [];
    var J = Object(o.b)("async", function(e, t) {
        this.dispatch.call(this.bidderRequest, e, t);
    }, "addBidResponse"), K = Object(o.b)("sync", function(e) {
        this.dispatch.call(this.context, e);
    }, "addBidderRequests"), $ = Object(o.b)("async", function(e, t) {
        t && t();
    }, "bidsBackCallback");
    function s(e, t) {
        t.timeToRespond > e.getTimeout() + U.b.getConfig("timeoutBuffer") && e.executeCallback(!0);
    }
    function Y(e, t) {
        var n = e.getBidRequests(), r = _()(n, function(e) {
            return e.bidderCode === t.bidderCode;
        });
        !function(t, e) {
            var n;
            {
                var r;
                t.bidderCode && (0 < t.cpm || t.dealId) && (r = _()(e.bids, function(e) {
                    return e.adUnitCode === t.adUnitCode;
                }), n = function(e, t, n) {
                    if (!t) return {};
                    var r = {}, o = pbjs.bidderSettings;
                    {
                        var i;
                        o && (i = l(t.mediaType, e, n), p(r, i, t), e && o[e] && o[e][q.JSON_MAPPING.ADSERVER_TARGETING] && (p(r, o[e], t), 
                        t.sendStandardTargeting = o[e].sendStandardTargeting));
                    }
                    t.native && (r = P({}, r, Object(a.d)(t, n)));
                    return r;
                }(t.bidderCode, t, r));
            }
            t.adserverTargeting = P(t.adserverTargeting || {}, n);
        }(t, r), M.emit(q.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), s(e, t);
    }
    var Q = Object(o.b)("async", function(n, r, o, e) {
        Object(i.b)([ r ], function(e, t) {
            e ? (D.logWarn("Failed to save to the video cache: ".concat(e, ". Video bid must be discarded.")), 
            s(n, r)) : "" === t[0].uuid ? (D.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), 
            s(n, r)) : (r.videoCacheKey = t[0].uuid, r.vastUrl || (r.vastUrl = Object(i.a)(r.videoCacheKey)), 
            Y(n, r), o());
        }, e);
    }, "callPrebidCache");
    function X(e, t, n) {
        if (e && n) {
            if (e === u.d) {
                var r = Object(w.deepAccess)(t, "mediaTypes.".concat(u.d, ".context"), "instream");
                if (n["".concat(u.d, "-").concat(r)]) return n["".concat(u.d, "-").concat(r)];
            }
            return n[e];
        }
    }
    var d = function(e, t) {
        var n = X(e, t, U.b.getConfig("mediaTypePriceGranularity"));
        return "string" == typeof e && n ? "string" == typeof n ? n : "custom" : U.b.getConfig("priceGranularity");
    }, f = function(t) {
        return function(e) {
            return t === q.GRANULARITY_OPTIONS.AUTO ? e.pbAg : t === q.GRANULARITY_OPTIONS.DENSE ? e.pbDg : t === q.GRANULARITY_OPTIONS.LOW ? e.pbLg : t === q.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : t === q.GRANULARITY_OPTIONS.HIGH ? e.pbHg : t === q.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0;
        };
    };
    function l(e, t, n) {
        function r(e, t) {
            return {
                key: e,
                val: "function" == typeof t ? function(e) {
                    return t(e);
                } : function(e) {
                    return Object(w.getValue)(e, t);
                }
            };
        }
        var o, i, a = q.TARGETING_KEYS, c = d(e, n), u = pbjs.bidderSettings;
        return u[q.JSON_MAPPING.BD_SETTING_STANDARD] || (u[q.JSON_MAPPING.BD_SETTING_STANDARD] = {}), 
        u[q.JSON_MAPPING.BD_SETTING_STANDARD][q.JSON_MAPPING.ADSERVER_TARGETING] || (u[q.JSON_MAPPING.BD_SETTING_STANDARD][q.JSON_MAPPING.ADSERVER_TARGETING] = [ r(a.BIDDER, "bidderCode"), r(a.AD_ID, "adId"), r(a.PRICE_BUCKET, f(c)), r(a.SIZE, "size"), r(a.DEAL, "dealId"), r(a.SOURCE, "source"), r(a.FORMAT, "mediaType") ]), 
        "video" === e && (o = u[q.JSON_MAPPING.BD_SETTING_STANDARD][q.JSON_MAPPING.ADSERVER_TARGETING], 
        [ a.UUID, a.CACHE_ID ].forEach(function(t) {
            void 0 === _()(o, function(e) {
                return e.key === t;
            }) && o.push(r(t, "videoCacheKey"));
        }), !U.b.getConfig("cache.url") || t && !1 === D.deepAccess(u, "".concat(t, ".sendStandardTargeting")) || (i = Object(w.parseUrl)(U.b.getConfig("cache.url")), 
        void 0 === _()(o, function(e) {
            return e.key === a.CACHE_HOST;
        }) && o.push(r(a.CACHE_HOST, function(e) {
            return D.deepAccess(e, "adserverTargeting.".concat(a.CACHE_HOST)) ? e.adserverTargeting[a.CACHE_HOST] : i.hostname;
        })))), u[q.JSON_MAPPING.BD_SETTING_STANDARD];
    }
    function p(r, o, i) {
        var e = o[q.JSON_MAPPING.ADSERVER_TARGETING];
        return i.size = i.getSize(), D._each(e, function(e) {
            var t = e.key, n = e.val;
            if (r[t] && D.logWarn("The key: " + t + " is getting ovewritten"), D.isFn(n)) try {
                n = n(i);
            } catch (e) {
                D.logError("bidmanager", "ERROR", e);
            }
            (void 0 === o.suppressEmptyKeys || !0 !== o.suppressEmptyKeys) && t !== q.TARGETING_KEYS.DEAL || !D.isEmptyStr(n) && null != n ? r[t] = n : D.logInfo("suppressing empty key '" + t + "' from adserver targeting");
        }), r;
    }
    function Z(e, t) {
        return e[t.adUnitCode] || (e[t.adUnitCode] = {
            bids: []
        }), e[t.adUnitCode].bids.push(t), e;
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return p;
    });
    var v = n(0), h = n(3), m = n(35), r = n(26), o = n(101), i = n(2), a = n(12), S = n.n(a);
    function A() {
        return (A = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
    }
    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    function O(e) {
        return function(e) {
            if (Array.isArray(e)) return c(e);
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
        }(e) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return c(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t);
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    var u = n(0), I = n(5), T = [], j = Object.keys(I.TARGETING_KEYS).map(function(e) {
        return I.TARGETING_KEYS[e];
    }), s = function(e) {
        return e.responseTimestamp + 1e3 * e.ttl + 1e3 > Object(v.timestamp)();
    }, d = function(e) {
        return e && (e.status && !S()([ I.BID_STATUS.RENDERED ], e.status) || !e.status);
    };
    function w(e, r, t) {
        var o = 2 < arguments.length && void 0 !== t ? t : 0, i = [], a = h.b.getConfig("sendBidsControl.dealPrioritization"), c = Object(v.groupBy)(e, "adUnitCode");
        return Object.keys(c).forEach(function(e) {
            var t = [], n = Object(v.groupBy)(c[e], "bidderCode");
            Object.keys(n).forEach(function(e) {
                return t.push(n[e].reduce(r));
            }), 0 < o ? (t = a ? t(C(!0)) : t.sort(function(e, t) {
                return t.cpm - e.cpm;
            }), i.push.apply(i, O(t.slice(0, o)))) : i.push.apply(i, O(t));
        }), i;
    }
    function C(e) {
        var n = 0 < arguments.length && void 0 !== e && e;
        return function(e, t) {
            return void 0 !== e.adUnitTargeting.hb_deal && void 0 === t.adUnitTargeting.hb_deal ? -1 : void 0 === e.adUnitTargeting.hb_deal && void 0 !== t.adUnitTargeting.hb_deal ? 1 : n ? t.cpm - e.cpm : t.adUnitTargeting.hb_pb - e.adUnitTargeting.hb_pb;
        };
    }
    var f, x, l, p = (f = r.a, l = {}, (x = {}).setLatestAuctionForAdUnit = function(e, t) {
        l[e] = t;
    }, x.resetPresetTargeting = function(e, t) {
        var n, o;
        Object(v.isGptPubadsDefined)() && (n = _(e), o = f.getAdUnits().filter(function(e) {
            return S()(n, e.code);
        }), window.googletag.pubads().getSlots().forEach(function(n) {
            var r = u.isFn(t) && t(n);
            T.forEach(function(t) {
                o.forEach(function(e) {
                    (e.code === n.getAdUnitPath() || e.code === n.getSlotElementId() || u.isFn(r) && r(e.code)) && n.setTargeting(t, null);
                });
            });
        }));
    }, x.resetPresetTargetingAST = function(e) {
        _(e).forEach(function(e) {
            var t, n, r = window.apntag.getTag(e);
            r && r.keywords && (t = Object.keys(r.keywords), n = {}, t.forEach(function(e) {
                S()(T, e.toLowerCase()) || (n[e] = r.keywords[e]);
            }), window.apntag.modifyTag(e, {
                keywords: n
            }));
        });
    }, x.getAllTargeting = function(e) {
        var n, t, r, o, i, a, c, u, s, d = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : B(), f = _(e), l = (a = f, 
        c = d, u = x.getWinningBids(a, c), s = R(), (u = u.map(function(i) {
            return E({}, i.adUnitCode, Object.keys(i.adserverTargeting).filter(function(e) {
                return void 0 === i.sendStandardTargeting || i.sendStandardTargeting || -1 === s.indexOf(e);
            }).reduce(function(e, t) {
                var n = [ i.adserverTargeting[t] ], r = E({}, t.substring(0, 20), n);
                if (t !== I.TARGETING_KEYS.DEAL) return [].concat(O(e), [ r ]);
                var o = E({}, "".concat(t, "_").concat(i.bidderCode).substring(0, 20), n);
                return [].concat(O(e), [ r, o ]);
            }, []));
        })).concat((i = f, d.filter(function(e) {
            return S()(i, e.adUnitCode);
        }).map(function(e) {
            return A({}, e);
        }).reduce(P, []).map(k).filter(function(e) {
            return e;
        }))).concat(h.b.getConfig("enableSendAllBids") ? (n = f, t = d, r = j.concat(m.a), 
        o = h.b.getConfig("sendBidsControl.bidLimit"), w(t, v.getHighestCpm, o).map(function(t) {
            if (U(t, n)) return E({}, t.adUnitCode, D(t, r.filter(function(e) {
                return void 0 !== t.adserverTargeting[e];
            })));
        }).filter(function(e) {
            return e;
        })) : function(e, t) {
            if (!0 !== h.b.getConfig("targetingControls.alwaysIncludeDeals")) return [];
            var n = j.concat(m.a);
            return w(t, v.getHighestCpm).map(function(t) {
                if (t.dealId && U(t, e)) return E({}, t.adUnitCode, D(t, n.filter(function(e) {
                    return void 0 !== t.adserverTargeting[e];
                })));
            }).filter(function(e) {
                return e;
            });
        }(f, d)));
        l.map(function(t) {
            Object.keys(t).map(function(e) {
                t[e].map(function(e) {
                    -1 === T.indexOf(Object.keys(e)[0]) && (T = Object.keys(e).concat(T));
                });
            });
        }), l = l.map(function(e) {
            return E({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function(e) {
                return E({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "));
            }).reduce(function(e, t) {
                return A(t, e);
            }, {}));
        }).reduce(function(e, t) {
            var n = Object.keys(t)[0];
            return e[n] = A({}, e[n], t[n]), e;
        }, {});
        var p, g, y, b = h.b.getConfig("targetingControls.auctionKeyMaxChars");
        return b && (Object(v.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(b, " characters.  Running checks on auction keys...")), 
        p = l, g = b, y = Object(v.deepClone)(p), l = Object.keys(y).map(function(e) {
            return {
                adUnitCode: e,
                adUnitTargeting: y[e]
            };
        }).sort(C()).reduce(function(e, t, n, r) {
            var o, i = (o = t.adUnitTargeting, Object.keys(o).reduce(function(e, t) {
                return e + "".concat(t, "%3d").concat(encodeURIComponent(o[t]), "%26");
            }, ""));
            n + 1 === r.length && (i = i.slice(0, -3));
            var a = t.adUnitCode, c = i.length;
            return c <= g ? (g -= c, Object(v.logInfo)("AdUnit '".concat(a, "' auction keys comprised of ").concat(c, " characters.  Deducted from running threshold; new limit is ").concat(g), y[a]), 
            e[a] = y[a]) : Object(v.logWarn)("The following keys for adUnitCode '".concat(a, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(c, ", the current allotted amount was ").concat(g, ".\n"), y[a]), 
            n + 1 === r.length && 0 === Object.keys(e).length && Object(v.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."), 
            e;
        }, {})), f.forEach(function(e) {
            l[e] || (l[e] = {});
        }), l;
    }, x.setTargetingForGPT = function(o, e) {
        window.googletag.pubads().getSlots().forEach(function(r) {
            Object.keys(o).filter((e || Object(v.isAdUnitCodeMatchingSlot))(r)).forEach(function(n) {
                return Object.keys(o[n]).forEach(function(t) {
                    var e = o[n][t].split(",");
                    (e = 1 < e.length ? [ e ] : e).map(function(e) {
                        return u.logMessage("Attempting to set key value for slot: ".concat(r.getSlotElementId(), " key: ").concat(t, " value: ").concat(e)), 
                        e;
                    }).forEach(function(e) {
                        r.setTargeting(t, e);
                    });
                });
            });
        });
    }, x.getWinningBids = function(e) {
        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : B(), t = _(e);
        return n.filter(function(e) {
            return S()(t, e.adUnitCode);
        }).filter(function(e) {
            return 0 < e.cpm;
        }).map(function(e) {
            return e.adUnitCode;
        }).filter(v.uniques).map(function(t) {
            return n.filter(function(e) {
                return e.adUnitCode === t ? e : null;
            }).reduce(v.getHighestCpm);
        });
    }, x.setTargetingForAst = function(e) {
        var r = x.getAllTargeting(e);
        try {
            x.resetPresetTargetingAST(e);
        } catch (e) {
            u.logError("unable to reset targeting for AST" + e);
        }
        Object.keys(r).forEach(function(n) {
            return Object.keys(r[n]).forEach(function(e) {
                var t;
                u.logMessage("Attempting to set targeting for targetId: ".concat(n, " key: ").concat(e, " value: ").concat(r[n][e])), 
                (u.isStr(r[n][e]) || u.isArray(r[n][e])) && (t = {}, e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e], 
                window.apntag.setKeywords(n, t, {
                    overrideKeyValue: !0
                }));
            });
        });
    }, x.isApntagDefined = function() {
        if (window.apntag && u.isFn(window.apntag.setKeywords)) return !0;
    }, x);
    function U(e, t) {
        return e.adserverTargeting && t && (u.isArray(t) && S()(t, e.adUnitCode) || "string" == typeof t && e.adUnitCode === t);
    }
    function _(e) {
        return "string" == typeof e ? [ e ] : u.isArray(e) ? e : f.getAdUnitCodes() || [];
    }
    function B() {
        var e = f.getBidsReceived();
        return h.b.getConfig("useBidCache") || (e = e.filter(function(e) {
            return l[e.adUnitCode] === e.auctionId;
        })), w(e = e.filter(function(e) {
            return Object(v.deepAccess)(e, "video.context") !== i.a;
        }).filter(function(e) {
            return "banner" !== e.mediaType || Object(o.c)([ e.width, e.height ]);
        }).filter(d).filter(s), v.getOldestHighestCpmBid);
    }
    function R() {
        return f.getStandardBidderAdServerTargeting().map(function(e) {
            return e.key;
        }).concat(j).filter(v.uniques);
    }
    function P(r, o, e, t) {
        return Object.keys(o.adserverTargeting).filter(g()).forEach(function(e) {
            var t, n;
            r.length && r.filter((n = e, function(e) {
                return e.adUnitCode === o.adUnitCode && e.adserverTargeting[n];
            })).forEach((t = e, function(e) {
                u.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [ e.adserverTargeting[t] ]), 
                e.adserverTargeting[t] = e.adserverTargeting[t].concat(o.adserverTargeting[t]).filter(v.uniques), 
                delete o.adserverTargeting[t];
            }));
        }), r.push(o), r;
    }
    function g() {
        var t = R().concat(m.a);
        return function(e) {
            return -1 === t.indexOf(e);
        };
    }
    function k(t) {
        return E({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(g()).map(function(e) {
            return E({}, e.substring(0, 20), [ t.adserverTargeting[e] ]);
        }));
    }
    function D(t, e) {
        return e.map(function(e) {
            return E({}, "".concat(e, "_").concat(t.bidderCode).substring(0, 20), [ t.adserverTargeting[e] ]);
        });
    }
}, function(e, t) {
    e.exports = {};
}, function(e, t, n) {
    "use strict";
    function i(e, t, n, r) {
        var o;
        t in e && ("function" != typeof (o = r) || "[object Function]" !== u.call(o) || !r()) || (f ? d(e, t, {
            configurable: !0,
            enumerable: !1,
            value: n,
            writable: !0
        }) : e[t] = n);
    }
    function r(e, t) {
        var n = 2 < arguments.length ? arguments[2] : {}, r = a(t);
        c && (r = s.call(r, Object.getOwnPropertySymbols(t)));
        for (var o = 0; o < r.length; o += 1) i(e, r[o], t[r[o]], n[r[o]]);
    }
    var a = n(93), c = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"), u = Object.prototype.toString, s = Array.prototype.concat, d = Object.defineProperty, f = d && function() {
        var e = {};
        try {
            for (var t in d(e, "x", {
                enumerable: !1,
                value: e
            }), e) return !1;
            return e.x === e;
        } catch (e) {
            return !1;
        }
    }();
    r.supportsDescriptors = !!f, e.exports = r;
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return S;
    });
    var a = n(0), r = n(3), o = n(12), i = n.n(o), c = n(9);
    function u(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e;
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), 
                !t || n.length !== t); r = !0) ;
            } catch (e) {
                o = !0, i = e;
            } finally {
                try {
                    r || null == c.return || c.return();
                } finally {
                    if (o) throw i;
                }
            }
            return n;
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return s(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    function d() {
        return (d = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
    }
    r.b.setDefaults({
        userSync: a.deepClone({
            syncEnabled: !0,
            filterSettings: {
                image: {
                    bidders: "*",
                    filter: "include"
                }
            },
            syncsPerBidder: 5,
            syncDelay: 3e3,
            auctionDelay: 0
        })
    });
    var f = Object(c.a)("usersync");
    var l, p, g, y, b, v, h, m = !a.isSafariBrowser() && f.cookiesAreEnabled(), S = (l = {
        config: r.b.getConfig("userSync"),
        browserSupportsCookies: m
    }, p = {}, g = A(), y = new Set(), v = {
        image: !0,
        iframe: !(b = {})
    }, h = l.config, r.b.getConfig("userSync", function(e) {
        var t;
        e.userSync && (t = e.userSync.filterSettings, a.isPlainObject(t) && (t.image || t.all || (e.userSync.filterSettings.image = {
            bidders: "*",
            filter: "include"
        }))), h = d(h, e.userSync);
    }), p.registerSync = function(e, t, n) {
        return y.has(t) ? a.logMessage('already fired syncs for "'.concat(t, '", ignoring registerSync call')) : h.syncEnabled && a.isArray(g[e]) ? t ? 0 !== h.syncsPerBidder && Number(b[t]) >= h.syncsPerBidder ? a.logWarn('Number of user syncs exceeded for "'.concat(t, '"')) : p.canBidderRegisterSync(e, t) ? (g[e].push([ t, n ]), 
        (r = b)[o = t] ? r[o] += 1 : r[o] = 1, void (b = r)) : a.logWarn('Bidder "'.concat(t, '" not permitted to register their "').concat(e, '" userSync pixels.')) : a.logWarn("Bidder is required for registering sync") : a.logWarn('User sync type "'.concat(e, '" not supported'));
        var r, o;
    }, p.syncUsers = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
        if (e) return setTimeout(E, Number(e));
        E();
    }, p.triggerUserSyncs = function() {
        h.enableOverride && p.syncUsers();
    }, p.canBidderRegisterSync = function(e, t) {
        return !h.filterSettings || !I(e, t);
    }, p);
    function A() {
        return {
            image: [],
            iframe: []
        };
    }
    function E() {
        if (h.syncEnabled && l.browserSupportsCookies) {
            try {
                !function() {
                    if (!v.image) return;
                    O(g.image, function(e) {
                        var t = u(e, 2), n = t[0], r = t[1];
                        a.logMessage("Invoking image pixel user sync for bidder: ".concat(n)), a.triggerPixel(r);
                    });
                }(), function() {
                    if (!v.iframe) return;
                    O(g.iframe, function(e) {
                        var t = u(e, 2), n = t[0], r = t[1];
                        a.logMessage("Invoking iframe user sync for bidder: ".concat(n)), a.insertUserSyncIframe(r);
                    });
                }();
            } catch (e) {
                return a.logError("Error firing user syncs", e);
            }
            g = A();
        }
    }
    function O(e, t) {
        a.shuffle(e).forEach(function(e) {
            t(e), y.add(e[0]);
        });
    }
    function I(e, t) {
        var n = h.filterSettings;
        if (function(e, t) {
            if (e.all && e[t]) return a.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), 
            !1;
            var n = e.all ? e.all : e[t], r = e.all ? "all" : t;
            if (!n) return !1;
            var o = n.filter, i = n.bidders;
            if (o && "include" !== o && "exclude" !== o) return a.logWarn('UserSync "filterSettings.'.concat(r, ".filter\" setting '").concat(o, "' is not a valid option; use either 'include' or 'exclude'.")), 
            !1;
            return !!("*" === i || Array.isArray(i) && 0 < i.length && i.every(function(e) {
                return a.isStr(e) && "*" !== e;
            })) || (a.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(r, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), 
            !1);
        }(n, e)) {
            v[e] = !0;
            var r = n.all ? n.all : n[e], o = "*" === r.bidders ? [ t ] : r.bidders;
            return {
                include: function(e, t) {
                    return !i()(e, t);
                },
                exclude: function(e, t) {
                    return i()(e, t);
                }
            }[r.filter || "include"](o, t);
        }
    }
}, , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return d;
    }), n.d(t, "b", function() {
        return h;
    });
    var r = n(11), b = n.n(r), o = n(0), v = 2, i = {
        buckets: [ {
            max: 5,
            increment: .5
        } ]
    }, a = {
        buckets: [ {
            max: 20,
            increment: .1
        } ]
    }, c = {
        buckets: [ {
            max: 20,
            increment: .01
        } ]
    }, u = {
        buckets: [ {
            max: 3,
            increment: .01
        }, {
            max: 8,
            increment: .05
        }, {
            max: 20,
            increment: .5
        } ]
    }, s = {
        buckets: [ {
            max: 5,
            increment: .05
        }, {
            max: 10,
            increment: .1
        }, {
            max: 20,
            increment: .5
        } ]
    };
    function d(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1, r = parseFloat(e);
        return isNaN(r) && (r = ""), {
            low: "" === r ? "" : f(e, i, n),
            med: "" === r ? "" : f(e, a, n),
            high: "" === r ? "" : f(e, c, n),
            auto: "" === r ? "" : f(e, s, n),
            dense: "" === r ? "" : f(e, u, n),
            custom: "" === r ? "" : f(e, t, n)
        };
    }
    function f(n, e, r) {
        var o = "";
        if (!h(e)) return o;
        var t, i, a, c, u, s, d, f, l, p = e.buckets.reduce(function(e, t) {
            return e.max > t.max ? e : t;
        }, {
            max: 0
        }), g = 0, y = b()(e.buckets, function(e) {
            if (n > p.max * r) {
                var t = e.precision;
                void 0 === t && (t = v), o = (e.max * r).toFixed(t);
            } else {
                if (n <= e.max * r && g * r <= n) return e.min = g, e;
                g = e.max;
            }
        });
        return y && (t = n, a = r, c = void 0 !== (i = y).precision ? i.precision : v, u = i.increment * a, 
        s = i.min * a, d = Math.pow(10, c + 2), f = (t * d - s * d) / (u * d), l = Math.floor(f) * u + s, 
        o = (l = Number(l.toFixed(10))).toFixed(c)), o;
    }
    function h(e) {
        if (o.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
        var t = !0;
        return e.buckets.forEach(function(e) {
            e.max && e.increment || (t = !1);
        }), t;
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        };
    };
}, function(e, t, n) {
    var r = n(73), o = n(50);
    e.exports = function(e) {
        return r(o(e));
    };
}, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1);
    };
}, function(e, t) {
    e.exports = function(e) {
        if (null == e) throw TypeError("Can't call method on " + e);
        return e;
    };
}, function(e, t, n) {
    var r = n(59), o = Math.min;
    e.exports = function(e) {
        return 0 < e ? o(r(e), 9007199254740991) : 0;
    };
}, function(e, t) {
    e.exports = function() {};
}, function(e, t, n) {
    var r = n(25);
    e.exports = r;
}, function(e, t) {
    e.exports = {};
}, function(e, t, n) {
    var r, o, i, a, c, u, s, d, f = n(122), l = n(22), p = n(23), g = n(29), y = n(24), b = n(66), v = n(54), h = l.WeakMap;
    s = f ? (r = new h(), o = r.get, i = r.has, a = r.set, c = function(e, t) {
        return a.call(r, e, t), t;
    }, u = function(e) {
        return o.call(r, e) || {};
    }, function(e) {
        return i.call(r, e);
    }) : (v[d = b("state")] = !0, c = function(e, t) {
        return g(e, d, t), t;
    }, u = function(e) {
        return y(e, d) ? e[d] : {};
    }, function(e) {
        return y(e, d);
    }), e.exports = {
        set: c,
        get: u,
        has: s,
        enforce: function(e) {
            return s(e) ? u(e) : c(e, {});
        },
        getterFor: function(n) {
            return function(e) {
                var t;
                if (!p(e) || (t = u(e)).type !== n) throw TypeError("Incompatible receiver, " + n + " required");
                return t;
            };
        }
    };
}, function(e, t, n) {
    var o = n(23);
    e.exports = function(e, t) {
        if (!o(e)) return e;
        var n, r;
        if (t && "function" == typeof (n = e.toString) && !o(r = n.call(e))) return r;
        if ("function" == typeof (n = e.valueOf) && !o(r = n.call(e))) return r;
        if (!t && "function" == typeof (n = e.toString) && !o(r = n.call(e))) return r;
        throw TypeError("Can't convert object to primitive value");
    };
}, function(e, t, n) {
    function r(p) {
        var g = 1 == p, y = 2 == p, b = 3 == p, v = 4 == p, h = 6 == p, m = 5 == p || h;
        return function(e, t, n, r) {
            for (var o, i, a = E(e), c = A(a), u = S(t, n, 3), s = O(c.length), d = 0, f = r || I, l = g ? f(e, s) : y ? f(e, 0) : void 0; d < s; d++) if ((m || d in c) && (i = u(o = c[d], d, a), 
            p)) if (g) l[d] = i; else if (i) switch (p) {
              case 3:
                return !0;

              case 5:
                return o;

              case 6:
                return d;

              case 2:
                T.call(l, o);
            } else if (v) return !1;
            return h ? -1 : b || v ? v : l;
        };
    }
    var S = n(21), A = n(73), E = n(58), O = n(51), I = n(110), T = [].push;
    e.exports = {
        forEach: r(0),
        map: r(1),
        filter: r(2),
        some: r(3),
        every: r(4),
        find: r(5),
        findIndex: r(6)
    };
}, function(e, t, n) {
    var r = n(50);
    e.exports = function(e) {
        return Object(r(e));
    };
}, function(e, t) {
    var n = Math.ceil, r = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e);
    };
}, function(e, t) {
    var n = 0, r = Math.random();
    e.exports = function(e) {
        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36);
    };
}, function(e, t, n) {
    function a(e) {
        throw e;
    }
    var c = n(27), u = n(28), s = n(24), d = Object.defineProperty, f = {};
    e.exports = function(e, t) {
        if (s(f, e)) return f[e];
        var n = [][e], r = !!s(t = t || {}, "ACCESSORS") && t.ACCESSORS, o = s(t, 0) ? t[0] : a, i = s(t, 1) ? t[1] : void 0;
        return f[e] = !!n && !u(function() {
            if (r && !c) return !0;
            var e = {
                length: -1
            };
            r ? d(e, 1, {
                enumerable: !0,
                get: a
            }) : e[1] = 1, n.call(e, o, i);
        });
    };
}, function(e, t, n) {
    var r = n(63), o = n(36), i = n(19)("iterator");
    e.exports = function(e) {
        if (null != e) return e[i] || e["@@iterator"] || o[r(e)];
    };
}, function(e, t, n) {
    var r = n(64), o = n(49), i = n(19)("toStringTag"), a = "Arguments" == o(function() {
        return arguments;
    }());
    e.exports = r ? o : function(e) {
        var t, n, r;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
            try {
                return e[t];
            } catch (e) {}
        }(t = Object(e), i)) ? n : a ? o(t) : "Object" == (r = o(t)) && "function" == typeof t.callee ? "Arguments" : r;
    };
}, function(e, t, n) {
    var r = {};
    r[n(19)("toStringTag")] = "z", e.exports = "[object z]" === String(r);
}, function(e, t, n) {
    var i = n(64), a = n(31).f, c = n(29), u = n(24), s = n(121), d = n(19)("toStringTag");
    e.exports = function(e, t, n, r) {
        var o;
        e && (o = n ? e : e.prototype, u(o, d) || a(o, d, {
            configurable: !0,
            value: t
        }), r && !i && c(o, "toString", s));
    };
}, function(e, t, n) {
    var r = n(76), o = n(60), i = r("keys");
    e.exports = function(e) {
        return i[e] || (i[e] = o(e));
    };
}, function(e, t, n) {
    "use strict";
    function v() {
        return this;
    }
    var h = n(14), m = n(130), S = n(89), A = n(132), E = n(65), O = n(29), I = n(87), r = n(19), T = n(16), j = n(36), o = n(88), w = o.IteratorPrototype, C = o.BUGGY_SAFARI_ITERATORS, x = r("iterator"), U = "values", _ = "entries";
    e.exports = function(e, t, n, r, o, i, a) {
        m(n, t, r);
        function c(e) {
            if (e === o && y) return y;
            if (!C && e in p) return p[e];
            switch (e) {
              case "keys":
              case U:
              case _:
                return function() {
                    return new n(this, e);
                };
            }
            return function() {
                return new n(this);
            };
        }
        var u, s, d, f = t + " Iterator", l = !1, p = e.prototype, g = p[x] || p["@@iterator"] || o && p[o], y = !C && g || c(o), b = "Array" == t && p.entries || g;
        if (b && (u = S(b.call(new e())), w !== Object.prototype && u.next && (T || S(u) === w || (A ? A(u, w) : "function" != typeof u[x] && O(u, x, v)), 
        E(u, f, !0, !0), T && (j[f] = v))), o == U && g && g.name !== U && (l = !0, y = function() {
            return g.call(this);
        }), T && !a || p[x] === y || O(p, x, y), j[t] = y, o) if (s = {
            values: c(U),
            keys: i ? y : c("keys"),
            entries: c(_)
        }, a) for (d in s) !C && !l && d in p || I(p, d, s[d]); else h({
            target: t,
            proto: !0,
            forced: C || l
        }, s);
        return s;
    };
}, function(e, t, n) {
    "use strict";
    var r = n(172);
    e.exports = Function.prototype.bind || r;
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return i;
    });
    var r = n(0), c = {};
    function o(e, t, n) {
        var r, o, i, a = (o = n, i = c[r = e] = c[r] || {
            bidders: {}
        }, o ? i.bidders[o] = i.bidders[o] || {} : i);
        return a[t] = (a[t] || 0) + 1, a[t];
    }
    var i = {
        incrementRequestsCounter: function(e) {
            return o(e, "requestsCounter");
        },
        incrementBidderRequestsCounter: function(e, t) {
            return o(e, "requestsCounter", t);
        },
        incrementBidderWinsCounter: function(e, t) {
            return o(e, "winsCounter", t);
        },
        getRequestsCounter: function(e) {
            return Object(r.deepAccess)(c, "".concat(e, ".requestsCounter")) || 0;
        },
        getBidderRequestsCounter: function(e, t) {
            return Object(r.deepAccess)(c, "".concat(e, ".bidders.").concat(t, ".requestsCounter")) || 0;
        },
        getBidderWinsCounter: function(e, t) {
            return Object(r.deepAccess)(c, "".concat(e, ".bidders.").concat(t, ".winsCounter")) || 0;
        }
    };
}, function(e, t, n) {
    var r = n(238);
    e.exports = r;
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.d(t, "adUnitSetupChecks", function() {
        return z;
    }), n.d(t, "checkAdUnitSetup", function() {
        return V;
    }), t.executeStorageCallbacks = K;
    var r = n(20), o = n(0), i = n(246), a = n(44), d = n(3), v = n(26), f = n(41), c = n(13), u = n(247), s = n(12), l = n.n(s), p = n(69), h = n(10), g = n(32), y = n(9);
    function b(e) {
        return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
    }
    function m() {
        return (m = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
    }
    var S = Object(r.a)(), A = n(5), E = n(0), O = n(7).default, I = n(8), T = a.a.triggerUserSyncs, j = A.EVENTS, w = j.ADD_AD_UNITS, C = j.BID_WON, x = j.REQUEST_BIDS, U = j.SET_TARGETING, _ = j.AD_RENDER_FAILED, B = A.AD_RENDER_FAILED_REASON, R = B.PREVENT_WRITING_ON_MAIN_DOCUMENT, P = B.NO_AD, k = B.EXCEPTION, D = B.CANNOT_FIND_AD, N = B.MISSING_DOC_OR_ADID, M = {
        bidWon: function(e) {
            var t = v.a.getBidsRequested().map(function(e) {
                return e.bids.map(function(e) {
                    return e.adUnitCode;
                });
            }).reduce(o.flatten).filter(o.uniques);
            return !!E.contains(t, e) || void E.logError('The "' + e + '" placement is not defined.');
        }
    };
    function q(e, t, n) {
        e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, 
        e.defaultView.frameElement.height = n);
    }
    function G(e, t) {
        var n = [];
        return E.isArray(e) && (t ? e.length === t : 0 < e.length) && (e.every(function(e) {
            return Object(o.isArrayOfNums)(e, 2);
        }) ? n = e : Object(o.isArrayOfNums)(e, 2) && n.push(e)), n;
    }
    function F(e) {
        var t = e.mediaTypes.banner, n = G(t.sizes);
        0 < n.length ? (t.sizes = n, e.sizes = n) : (E.logError("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."), 
        delete e.mediaTypes.banner);
    }
    function W(e) {
        var t = e.mediaTypes.video, n = "number" == typeof t.playerSize[0] ? 2 : 1, r = G(t.playerSize, n);
        0 < r.length ? (2 == n && E.logInfo("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."), 
        t.playerSize = r, e.sizes = r) : (E.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), 
        delete e.mediaTypes.video.playerSize);
    }
    function L(e) {
        var t = e.mediaTypes.native;
        t.image && t.image.sizes && !Array.isArray(t.image.sizes) && (E.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), 
        delete e.mediaTypes.native.image.sizes), t.image && t.image.aspect_ratios && !Array.isArray(t.image.aspect_ratios) && (E.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), 
        delete e.mediaTypes.native.image.aspect_ratios), t.icon && t.icon.sizes && !Array.isArray(t.icon.sizes) && (E.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), 
        delete e.mediaTypes.native.icon.sizes);
    }
    Object(u.a)(), S.bidderSettings = S.bidderSettings || {}, S.libLoaded = !0, S.version = "v3.24.0", 
    E.logInfo("Prebid.js v3.24.0 loaded"), S.adUnits = S.adUnits || [], S.triggerUserSyncs = T;
    var z = {
        validateBannerMediaType: F,
        validateVideoMediaType: W,
        validateNativeMediaType: L,
        validateSizes: G
    }, V = Object(c.b)("sync", function(e) {
        return e.filter(function(e) {
            var t = e.mediaTypes;
            return t && 0 !== Object.keys(t).length ? (t.banner && F(e), t.video && t.video.playerSize && W(e), 
            t.native && L(e), !0) : (E.logError("Detected adUnit.code '".concat(e.code, "' did not have a 'mediaTypes' object defined.  This is a required field for the auction, so this adUnit has been removed.")), 
            !1);
        });
    }, "checkAdUnitSetup");
    function H(e) {
        var n = v.a[e]().filter(E.bind.call(o.adUnitsFilter, this, v.a.getAdUnitCodes())), r = v.a.getLastAuctionId();
        return n.map(function(e) {
            return e.adUnitCode;
        }).filter(o.uniques).map(function(t) {
            return n.filter(function(e) {
                return e.auctionId === r && e.adUnitCode === t;
            });
        }).filter(function(e) {
            return e && e[0] && e[0].adUnitCode;
        }).map(function(e) {
            return t = {}, n = e[0].adUnitCode, r = {
                bids: e
            }, n in t ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r, t;
            var t, n, r;
        }).reduce(function(e, t) {
            return m(e, t);
        }, {});
    }
    function J(e) {
        var t = e.reason, n = e.message, r = e.bid, o = e.id, i = {
            reason: t,
            message: n
        };
        r && (i.bid = r), o && (i.adId = o), E.logError(n), I.emit(_, i);
    }
    function K(e, t) {
        !function(e) {
            var t;
            for (;t = e.shift(); ) t();
        }(y.c), e.call(this, t);
    }
    function $(e) {
        e.forEach(function(e) {
            if (void 0 === e.called) try {
                e.call(), e.called = !0;
            } catch (e) {
                E.logError("Error processing command :", "prebid.js", e);
            }
        });
    }
    S.getAdserverTargetingForAdUnitCodeStr = function(e) {
        if (E.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), 
        e) {
            var t = S.getAdserverTargetingForAdUnitCode(e);
            return E.transformAdServerTargetingObj(t);
        }
        E.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode");
    }, S.getAdserverTargetingForAdUnitCode = function(e) {
        return S.getAdserverTargeting(e)[e];
    }, S.getAdserverTargeting = function(e) {
        return E.logInfo("Invoking pbjs.getAdserverTargeting", arguments), f.a.getAllTargeting(e);
    }, S.getNoBids = function() {
        return E.logInfo("Invoking pbjs.getNoBids", arguments), H("getNoBids");
    }, S.getBidResponses = function() {
        return E.logInfo("Invoking pbjs.getBidResponses", arguments), H("getBidsReceived");
    }, S.getBidResponsesForAdUnitCode = function(t) {
        return {
            bids: v.a.getBidsReceived().filter(function(e) {
                return e.adUnitCode === t;
            })
        };
    }, S.setTargetingForGPTAsync = function(e, t) {
        var n;
        E.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), Object(o.isGptPubadsDefined)() ? (n = f.a.getAllTargeting(e), 
        f.a.resetPresetTargeting(e, t), f.a.setTargetingForGPT(n, t), Object.keys(n).forEach(function(t) {
            Object.keys(n[t]).forEach(function(e) {
                "hb_adid" === e && v.a.setStatusForBids(n[t][e], A.BID_STATUS.BID_TARGETING_SET);
            });
        }), I.emit(U, n)) : E.logError("window.googletag is not defined on the page");
    }, S.setTargetingForAst = function(e) {
        E.logInfo("Invoking pbjs.setTargetingForAn", arguments), f.a.isApntagDefined() ? (f.a.setTargetingForAst(e), 
        I.emit(U, f.a.getAllTargeting())) : E.logError("window.apntag is not defined on the page");
    }, S.renderAd = function(e, t) {
        if (E.logInfo("Invoking pbjs.renderAd", arguments), E.logMessage("Calling renderAd with adId :" + t), 
        e && t) try {
            var n, r, o, i, a, c, u, s, d, f, l, p, g = v.a.findBidByAdId(t);
            g ? (g.ad = E.replaceAuctionPrice(g.ad, g.cpm), g.adUrl = E.replaceAuctionPrice(g.adUrl, g.cpm), 
            v.a.addWinningBid(g), I.emit(C, g), n = g.height, r = g.width, o = g.ad, i = g.mediaType, 
            a = g.adUrl, c = g.renderer, u = document.createComment("Creative ".concat(g.creativeId, " served by ").concat(g.bidder, " Prebid.js Header Bidding")), 
            E.insertElement(u, e, "body"), Object(h.c)(c) ? Object(h.b)(c, g) : e === document && !E.inIframe() || "video" === i ? (s = "Error trying to write ad. Ad render call ad id ".concat(t, " was prevented from writing to the main document."), 
            J({
                reason: R,
                message: s,
                bid: g,
                id: t
            })) : o ? (navigator.userAgent && -1 < navigator.userAgent.toLowerCase().indexOf("firefox/") && ((d = navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/)[1]) && parseInt(d, 10) < 67 && e.open("text/html", "replace")), 
            e.write(o), e.close(), q(e, r, n), E.callBurl(g)) : a ? ((f = E.createInvisibleIframe()).height = n, 
            f.width = r, f.style.display = "inline", f.style.overflow = "hidden", f.src = a, 
            E.insertElement(f, e, "body"), q(e, r, n), E.callBurl(g)) : (l = "Error trying to write ad. No ad for bid response id: ".concat(t), 
            J({
                reason: P,
                message: l,
                bid: g,
                id: t
            }))) : (p = "Error trying to write ad. Cannot find ad by given id : ".concat(t), 
            J({
                reason: D,
                message: p,
                id: t
            }));
        } catch (e) {
            var y = "Error trying to write ad Id :".concat(t, " to the page:").concat(e.message);
            J({
                reason: k,
                message: y,
                id: t
            });
        } else {
            var b = "Error trying to write ad Id :".concat(t, " to the page. Missing document or adId");
            J({
                reason: N,
                message: b,
                id: t
            });
        }
    }, S.removeAdUnit = function(e) {
        E.logInfo("Invoking pbjs.removeAdUnit", arguments), e ? (E.isArray(e) ? e : [ e ]).forEach(function(e) {
            for (var t = S.adUnits.length - 1; 0 <= t; t--) S.adUnits[t].code === e && S.adUnits.splice(t, 1);
        }) : S.adUnits = [];
    }, S.requestBids = Object(c.b)("async", function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.bidsBackHandler, n = e.timeout, r = e.adUnits, o = e.adUnitCodes, i = e.labels, a = e.auctionId;
        I.emit(x);
        var c = n || d.b.getConfig("bidderTimeout"), r = r || S.adUnits;
        if (E.logInfo("Invoking pbjs.requestBids", arguments), o && o.length ? r = r.filter(function(e) {
            return l()(o, e.code);
        }) : o = r && r.map(function(e) {
            return e.code;
        }), (r = V(r)).forEach(function(o) {
            var i = Object.keys(o.mediaTypes || {
                banner: "banner"
            }), e = o.bids.map(function(e) {
                return e.bidder;
            }), a = O.bidderRegistry, t = d.b.getConfig("s2sConfig"), n = t && t.bidders, r = n ? e.filter(function(e) {
                return !l()(n, e);
            }) : e;
            o.transactionId = E.generateUUID(), r.forEach(function(t) {
                var e = a[t], n = e && e.getSpec && e.getSpec(), r = n && n.supportedMediaTypes || [ "banner" ];
                i.some(function(e) {
                    return l()(r, e);
                }) ? p.a.incrementBidderRequestsCounter(o.code, t) : (E.logWarn(E.unsupportedBidderMessage(o, t)), 
                o.bids = o.bids.filter(function(e) {
                    return e.bidder !== t;
                }));
            }), p.a.incrementRequestsCounter(o.code);
        }), r && 0 !== r.length) {
            var u = v.a.createAuction({
                adUnits: r,
                adUnitCodes: o,
                callback: t,
                cbTimeout: c,
                labels: i,
                auctionId: a
            }), s = r.length;
            15 < s && E.logInfo("Current auction ".concat(u.getAuctionId(), " contains ").concat(s, " adUnits."), r), 
            o.forEach(function(e) {
                return f.a.setLatestAuctionForAdUnit(e, u.getAuctionId());
            }), u.callBids();
        } else if (E.logMessage("No adUnits configured. No bids requested."), "function" == typeof t) try {
            t();
        } catch (e) {
            E.logError("Error executing bidsBackHandler", null, e);
        }
    }), S.requestBids.before(K, 49), S.addAdUnits = function(e) {
        E.logInfo("Invoking pbjs.addAdUnits", arguments), E.isArray(e) ? S.adUnits.push.apply(S.adUnits, e) : "object" === b(e) && S.adUnits.push(e), 
        I.emit(w);
    }, S.onEvent = function(e, t, n) {
        E.logInfo("Invoking pbjs.onEvent", arguments), E.isFn(t) ? !n || M[e].call(null, n) ? I.on(e, t, n) : E.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : E.logError('The event handler provided is not a function and was not set on event "' + e + '".');
    }, S.offEvent = function(e, t, n) {
        E.logInfo("Invoking pbjs.offEvent", arguments), n && !M[e].call(null, n) || I.off(e, t, n);
    }, S.registerBidAdapter = function(e, t) {
        E.logInfo("Invoking pbjs.registerBidAdapter", arguments);
        try {
            O.registerBidAdapter(e(), t);
        } catch (e) {
            E.logError("Error registering bidder adapter : " + e.message);
        }
    }, S.registerAnalyticsAdapter = function(e) {
        E.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
        try {
            O.registerAnalyticsAdapter(e);
        } catch (e) {
            E.logError("Error registering analytics adapter : " + e.message);
        }
    }, S.createBid = function(e) {
        return E.logInfo("Invoking pbjs.createBid", arguments), Object(g.a)(e);
    }, S.enableAnalytics = function(e) {
        e && !E.isEmpty(e) ? (E.logInfo("Invoking pbjs.enableAnalytics for: ", e), O.enableAnalytics(e)) : E.logError("pbjs.enableAnalytics should be called with option {}");
    }, S.aliasBidder = function(e, t) {
        E.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? O.aliasBidAdapter(e, t) : E.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder");
    }, S.getAllWinningBids = function() {
        return v.a.getAllWinningBids();
    }, S.getAllPrebidWinningBids = function() {
        return v.a.getBidsReceived().filter(function(e) {
            return e.status === A.BID_STATUS.BID_TARGETING_SET;
        });
    }, S.getHighestCpmBids = function(e) {
        return f.a.getWinningBids(e);
    }, S.markWinningBidAsUsed = function(t) {
        var e = [];
        t.adUnitCode && t.adId ? e = v.a.getBidsReceived().filter(function(e) {
            return e.adId === t.adId && e.adUnitCode === t.adUnitCode;
        }) : t.adUnitCode ? e = f.a.getWinningBids(t.adUnitCode) : t.adId ? e = v.a.getBidsReceived().filter(function(e) {
            return e.adId === t.adId;
        }) : E.logWarn("Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."), 
        0 < e.length && (e[0].status = A.BID_STATUS.RENDERED);
    }, S.getConfig = d.b.getConfig, S.setConfig = d.b.setConfig, S.setBidderConfig = d.b.setBidderConfig, 
    S.que.push(function() {
        return Object(i.a)();
    }), S.cmd.push = function(e) {
        if ("function" == typeof e) try {
            e.call();
        } catch (e) {
            E.logError("Error processing command :", e.message, e.stack);
        } else E.logError("Commands written into pbjs.cmd.push must be wrapped in a function");
    }, S.que.push = S.cmd.push, S.processQueue = function() {
        c.b.ready(), $(S.que), $(S.cmd);
    }, t.default = S;
}, function(e, t, n) {
    "use strict";
    t.a = function(t, n) {
        i.adServers = i.adServers || {}, i.adServers[t] = i.adServers[t] || {}, Object.keys(n).forEach(function(e) {
            i.adServers[t][e] ? Object(o.logWarn)("Attempting to add an already registered function property ".concat(e, " for AdServer ").concat(t, ".")) : i.adServers[t][e] = n[e];
        });
    };
    var r = n(20), o = n(0), i = Object(r.a)();
}, function(e, t, n) {
    var r = n(28), o = n(49), i = "".split;
    e.exports = r(function() {
        return !Object("z").propertyIsEnumerable(0);
    }) ? function(e) {
        return "String" == o(e) ? i.call(e, "") : Object(e);
    } : Object;
}, function(e, t, n) {
    var r = n(27), o = n(28), i = n(75);
    e.exports = !r && !o(function() {
        return 7 != Object.defineProperty(i("div"), "a", {
            get: function() {
                return 7;
            }
        }).a;
    });
}, function(e, t, n) {
    var r = n(22), o = n(23), i = r.document, a = o(i) && o(i.createElement);
    e.exports = function(e) {
        return a ? i.createElement(e) : {};
    };
}, function(e, t, n) {
    var r = n(16), o = n(77);
    (e.exports = function(e, t) {
        return o[e] || (o[e] = void 0 !== t ? t : {});
    })("versions", []).push({
        version: "3.6.4",
        mode: r ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    });
}, function(e, t, n) {
    var r = n(22), o = n(112), i = "__core-js_shared__", a = r[i] || o(i, {});
    e.exports = a;
}, function(e, t, n) {
    var r = n(28);
    e.exports = !!Object.getOwnPropertySymbols && !r(function() {
        return !String(Symbol());
    });
}, function(e, t, n) {
    function r(c) {
        return function(e, t, n) {
            var r, o = u(e), i = s(o.length), a = d(n, i);
            if (c && t != t) {
                for (;a < i; ) if ((r = o[a++]) != r) return !0;
            } else for (;a < i; a++) if ((c || a in o) && o[a] === t) return c || a || 0;
            return !c && -1;
        };
    }
    var u = n(48), s = n(51), d = n(116);
    e.exports = {
        includes: r(!0),
        indexOf: r(!1)
    };
}, function(e, t, n) {
    var r = n(117);
    n(140), n(142), n(144), n(146), n(148), n(149), n(150), n(151), n(152), n(153), 
    n(154), n(155), n(156), n(157), n(158), n(159), n(160), n(161), e.exports = r;
}, function(e, t, n) {
    function r(e) {
        c(e, d, {
            value: {
                objectID: "O" + ++f,
                weakData: {}
            }
        });
    }
    var o = n(54), i = n(23), a = n(24), c = n(31).f, u = n(60), s = n(120), d = u("meta"), f = 0, l = Object.isExtensible || function() {
        return !0;
    }, p = e.exports = {
        REQUIRED: !1,
        fastKey: function(e, t) {
            if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!a(e, d)) {
                if (!l(e)) return "F";
                if (!t) return "E";
                r(e);
            }
            return e[d].objectID;
        },
        getWeakData: function(e, t) {
            if (!a(e, d)) {
                if (!l(e)) return !0;
                if (!t) return !1;
                r(e);
            }
            return e[d].weakData;
        },
        onFreeze: function(e) {
            return s && p.REQUIRED && l(e) && !a(e, d) && r(e), e;
        }
    };
    o[d] = !0;
}, function(e, t, n) {
    var r = n(19), o = n(36), i = r("iterator"), a = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (o.Array === e || a[i] === e);
    };
}, function(e, t, n) {
    var i = n(15);
    e.exports = function(t, e, n, r) {
        try {
            return r ? e(i(n)[0], n[1]) : e(n);
        } catch (e) {
            var o = t.return;
            throw void 0 !== o && i(o.call(t)), e;
        }
    };
}, function(e, t) {
    e.exports = function(e, t, n) {
        if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        return e;
    };
}, function(e, t, n) {
    function r() {}
    function o(e) {
        return "<script>" + e + "</" + g + ">";
    }
    var i, a = n(15), c = n(125), u = n(86), s = n(54), d = n(128), f = n(75), l = n(66), p = "prototype", g = "script", y = l("IE_PROTO"), b = function() {
        try {
            i = document.domain && new ActiveXObject("htmlfile");
        } catch (e) {}
        var e, t;
        b = i ? function(e) {
            e.write(o("")), e.close();
            var t = e.parentWindow.Object;
            return e = null, t;
        }(i) : ((t = f("iframe")).style.display = "none", d.appendChild(t), t.src = String("javascript:"), 
        (e = t.contentWindow.document).open(), e.write(o("document.F=Object")), e.close(), 
        e.F);
        for (var n = u.length; n--; ) delete b[p][u[n]];
        return b();
    };
    s[y] = !0, e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (r[p] = a(e), n = new r(), r[p] = null, n[y] = e) : n = b(), 
        void 0 === t ? n : c(n, t);
    };
}, function(e, t) {
    e.exports = [ "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf" ];
}, function(e, t, n) {
    var o = n(29);
    e.exports = function(e, t, n, r) {
        r && r.enumerable ? e[t] = n : o(e, t, n);
    };
}, function(e, t, n) {
    "use strict";
    var r, o, i, a = n(89), c = n(29), u = n(24), s = n(19), d = n(16), f = s("iterator"), l = !1;
    [].keys && ("next" in (i = [].keys()) ? (o = a(a(i))) !== Object.prototype && (r = o) : l = !0), 
    null == r && (r = {}), d || u(r, f) || c(r, f, function() {
        return this;
    }), e.exports = {
        IteratorPrototype: r,
        BUGGY_SAFARI_ITERATORS: l
    };
}, function(e, t, n) {
    var r = n(24), o = n(58), i = n(66), a = n(131), c = i("IE_PROTO"), u = Object.prototype;
    e.exports = a ? Object.getPrototypeOf : function(e) {
        return e = o(e), r(e, c) ? e[c] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? u : null;
    };
}, function(e, t, n) {
    "use strict";
    var o = n(136).charAt, r = n(55), i = n(67), a = "String Iterator", c = r.set, u = r.getterFor(a);
    i(String, "String", function(e) {
        c(this, {
            type: a,
            string: String(e),
            index: 0
        });
    }, function() {
        var e, t = u(this), n = t.string, r = t.index;
        return r >= n.length ? {
            value: void 0,
            done: !0
        } : (e = o(n, r), t.index += e.length, {
            value: e,
            done: !1
        });
    });
}, function(e, t, n) {
    var r = n(15), o = n(62);
    e.exports = function(e) {
        var t = o(e);
        if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
        return r(t.call(e));
    };
}, function(e, t, n) {
    var r = n(162);
    e.exports = r;
}, function(e, t, n) {
    "use strict";
    var r = Array.prototype.slice, o = n(94), i = Object.keys, a = i ? function(e) {
        return i(e);
    } : n(169), c = Object.keys;
    a.shim = function() {
        return Object.keys ? function() {
            var e = Object.keys(arguments);
            return e && e.length === arguments.length;
        }(1, 2) || (Object.keys = function(e) {
            return o(e) ? c(r.call(e)) : c(e);
        }) : Object.keys = a, Object.keys || a;
    }, e.exports = a;
}, function(e, t, n) {
    "use strict";
    var r = Object.prototype.toString;
    e.exports = function(e) {
        var t = r.call(e);
        return "[object Arguments]" === t || "[object Array]" !== t && null !== e && "object" == typeof e && "number" == typeof e.length && 0 <= e.length && "[object Function]" === r.call(e.callee);
    };
}, function(e, t, n) {
    "use strict";
    var r = n(68), o = n(173)("%Function%"), i = o.apply, a = o.call;
    e.exports = function() {
        return r.apply(a, arguments);
    }, e.exports.apply = function() {
        return r.apply(i, arguments);
    };
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e != e;
    }
    e.exports = function(e, t) {
        return 0 === e && 0 === t ? 1 / e == 1 / t : e === t || !(!r(e) || !r(t));
    };
}, function(e, t, n) {
    "use strict";
    var r = n(96);
    e.exports = function() {
        return "function" == typeof Object.is ? Object.is : r;
    };
}, function(e, t, n) {
    "use strict";
    var r = Object, o = TypeError;
    e.exports = function() {
        if (null != this && this !== r(this)) throw new o("RegExp.prototype.flags getter called on non-object");
        var e = "";
        return this.global && (e += "g"), this.ignoreCase && (e += "i"), this.multiline && (e += "m"), 
        this.dotAll && (e += "s"), this.unicode && (e += "u"), this.sticky && (e += "y"), 
        e;
    };
}, function(e, t, n) {
    "use strict";
    var r = n(98), o = n(43).supportsDescriptors, i = Object.getOwnPropertyDescriptor, a = TypeError;
    e.exports = function() {
        if (!o) throw new a("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
        if ("gim" === /a/gim.flags) {
            var e = i(RegExp.prototype, "flags");
            if (e && "function" == typeof e.get && "boolean" == typeof /a/.dotAll) return e.get;
        }
        return r;
    };
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        var t = e;
        return {
            callBids: function() {},
            setBidderCode: function(e) {
                t = e;
            },
            getBidderCode: function() {
                return t;
            }
        };
    };
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        if (e.labelAll) return {
            labelAll: !0,
            labels: e.labelAll,
            activeLabels: t
        };
        return {
            labelAll: !1,
            labels: e.labelAny,
            activeLabels: t
        };
    }, t.c = function(e) {
        var t = b(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : y);
        return !t.shouldFilter || !!t.sizesSupported[e];
    }, t.b = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.labels, n = void 0 === t ? [] : t, r = e.labelAll, o = void 0 !== r && r, i = e.activeLabels, a = void 0 === i ? [] : i, c = 1 < arguments.length ? arguments[1] : void 0, u = 2 < arguments.length ? arguments[2] : void 0, s = b(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : y);
        c = Object(p.isPlainObject)(c) ? Object(p.deepClone)(c) : u ? {
            banner: {
                sizes: u
            }
        } : {};
        var d = Object(p.deepAccess)(c, "banner.sizes");
        s.shouldFilter && d && (c.banner.sizes = d.filter(function(e) {
            return s.sizesSupported[e];
        }));
        var f = Object.keys(c), l = {
            active: f.every(function(e) {
                return "banner" !== e;
            }) || f.some(function(e) {
                return "banner" === e;
            }) && 0 < Object(p.deepAccess)(c, "banner.sizes.length") && (0 === n.length || !o && (n.some(function(e) {
                return s.labels[e];
            }) || n.some(function(e) {
                return g()(a, e);
            })) || o && n.reduce(function(e, t) {
                return e ? s.labels[t] || g()(a, t) : e;
            }, !0)),
            mediaTypes: c
        };
        d && d.length !== c.banner.sizes.length && (l.filterResults = {
            before: d,
            after: c.banner.sizes
        });
        return l;
    };
    var r = n(3), p = n(0), o = n(12), g = n.n(o);
    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
    }
    var y = [];
    function b(e) {
        return e.reduce(function(n, r) {
            if ("object" === i(r) && "string" == typeof r.mediaQuery) {
                var t = !1;
                if ("" === r.mediaQuery) t = !0; else try {
                    t = Object(p.getWindowTop)().matchMedia(r.mediaQuery).matches;
                } catch (e) {
                    Object(p.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"), 
                    t = matchMedia(r.mediaQuery).matches;
                }
                t && (Array.isArray(r.sizesSupported) && (n.shouldFilter = !0), [ "labels", "sizesSupported" ].forEach(function(t) {
                    return (r[t] || []).forEach(function(e) {
                        return n[t][e] = !0;
                    });
                }));
            } else Object(p.logWarn)('sizeConfig rule missing required property "mediaQuery"');
            return n;
        }, {
            labels: {},
            sizesSupported: {},
            shouldFilter: !1
        });
    }
    r.b.getConfig("sizeConfig", function(e) {
        return t = e.sizeConfig, void (y = t);
        var t;
    });
}, function(e, t, n) {
    "use strict";
    t.b = function(e, t, n) {
        var r = {
            puts: e.map(c, n)
        };
        Object(o.a)(i.b.getConfig("cache.url"), function(n) {
            return {
                success: function(e) {
                    var t;
                    try {
                        t = JSON.parse(e).responses;
                    } catch (e) {
                        return void n(e, []);
                    }
                    t ? n(null, t) : n(new Error("The cache server didn't respond with a responses property."), []);
                },
                error: function(e, t) {
                    n(new Error("Error storing video ad in the cache: ".concat(e, ": ").concat(JSON.stringify(t))), []);
                }
            };
        }(t), JSON.stringify(r), {
            contentType: "text/plain",
            withCredentials: !0
        });
    }, t.a = function(e) {
        return "".concat(i.b.getConfig("cache.url"), "?uuid=").concat(e);
    };
    var o = n(4), i = n(3), a = n(0);
    function c(e) {
        var t, n, r, o = {
            type: "xml",
            value: e.vastXml ? e.vastXml : (t = e.vastUrl, n = e.vastImpUrl, r = n ? "<![CDATA[".concat(n, "]]>") : "", 
            '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(t, "]]></VASTAdTagURI>\n        <Impression>").concat(r, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")),
            ttlseconds: Number(e.ttl)
        };
        return i.b.getConfig("cache.vasttrack") && (o.bidder = e.bidder, o.bidid = e.requestId, 
        a.isPlainObject(this) && this.hasOwnProperty("auctionStart") && (o.timestamp = this.auctionStart)), 
        "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (o.key = e.customCacheKey), 
        o;
    }
}, , , function(e, t, n) {
    n(106);
    var r = n(53);
    e.exports = r("Array", "find");
}, function(e, t, n) {
    "use strict";
    var r = n(14), o = n(57).find, i = n(52), a = n(61), c = "find", u = !0, s = a(c);
    c in [] && Array(1)[c](function() {
        u = !1;
    }), r({
        target: "Array",
        proto: !0,
        forced: u || !s
    }, {
        find: function(e, t) {
            return o(this, e, 1 < arguments.length ? t : void 0);
        }
    }), i(c);
}, function(e, t, n) {
    var r = n(27), o = n(108), i = n(47), a = n(48), c = n(56), u = n(24), s = n(74), d = Object.getOwnPropertyDescriptor;
    t.f = r ? d : function(e, t) {
        if (e = a(e), t = c(t, !0), s) try {
            return d(e, t);
        } catch (e) {}
        if (u(e, t)) return i(!o.f.call(e, t), e[t]);
    };
}, function(e, t, n) {
    "use strict";
    var r = {}.propertyIsEnumerable, o = Object.getOwnPropertyDescriptor, i = o && !r.call({
        1: 2
    }, 1);
    t.f = i ? function(e) {
        var t = o(this, e);
        return !!t && t.enumerable;
    } : r;
}, function(e, t, n) {
    function r(e, t) {
        var n = c[a(e)];
        return n == s || n != u && ("function" == typeof t ? o(t) : !!t);
    }
    var o = n(28), i = /#|\.prototype\./, a = r.normalize = function(e) {
        return String(e).replace(i, ".").toLowerCase();
    }, c = r.data = {}, u = r.NATIVE = "N", s = r.POLYFILL = "P";
    e.exports = r;
}, function(e, t, n) {
    var r = n(23), o = n(111), i = n(19)("species");
    e.exports = function(e, t) {
        var n;
        return o(e) && ("function" == typeof (n = e.constructor) && (n === Array || o(n.prototype)) || r(n) && null === (n = n[i])) && (n = void 0), 
        new (void 0 === n ? Array : n)(0 === t ? 0 : t);
    };
}, function(e, t, n) {
    var r = n(49);
    e.exports = Array.isArray || function(e) {
        return "Array" == r(e);
    };
}, function(e, t, n) {
    var r = n(22), o = n(29);
    e.exports = function(t, n) {
        try {
            o(r, t, n);
        } catch (e) {
            r[t] = n;
        }
        return n;
    };
}, function(e, t, n) {
    var r = n(78);
    e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
}, function(e, t, n) {
    n(115);
    var r = n(53);
    e.exports = r("Array", "includes");
}, function(e, t, n) {
    "use strict";
    var r = n(14), o = n(79).includes, i = n(52);
    r({
        target: "Array",
        proto: !0,
        forced: !n(61)("indexOf", {
            ACCESSORS: !0,
            1: 0
        })
    }, {
        includes: function(e, t) {
            return o(this, e, 1 < arguments.length ? t : void 0);
        }
    }), i("includes");
}, function(e, t, n) {
    var r = n(59), o = Math.max, i = Math.min;
    e.exports = function(e, t) {
        var n = r(e);
        return n < 0 ? o(n + t, 0) : i(n, t);
    };
}, function(e, t, n) {
    n(118), n(135), n(90), n(137);
    var r = n(42);
    e.exports = r.Set;
}, function(e, t, n) {
    "use strict";
    var r = n(119), o = n(124);
    e.exports = r("Set", function(t) {
        return function(e) {
            return t(this, arguments.length ? e : void 0);
        };
    }, o);
}, function(e, t, n) {
    "use strict";
    var f = n(14), l = n(22), p = n(81), g = n(28), y = n(29), b = n(17), v = n(84), h = n(23), m = n(65), S = n(31).f, A = n(57).forEach, E = n(27), r = n(55), O = r.set, I = r.getterFor;
    e.exports = function(n, e, t) {
        var r, a, o = -1 !== n.indexOf("Map"), c = -1 !== n.indexOf("Weak"), i = o ? "set" : "add", u = l[n], s = u && u.prototype, d = {};
        return E && "function" == typeof u && (c || s.forEach && !g(function() {
            new u().entries().next();
        })) ? (r = e(function(e, t) {
            O(v(e, r, n), {
                type: n,
                collection: new u()
            }), null != t && b(t, e[i], e, o);
        }), a = I(n), A([ "add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries" ], function(o) {
            var i = "add" == o || "set" == o;
            o in s && (!c || "clear" != o) && y(r.prototype, o, function(e, t) {
                var n = a(this).collection;
                if (!i && c && !h(e)) return "get" == o && void 0;
                var r = n[o](0 === e ? 0 : e, t);
                return i ? this : r;
            });
        }), c || S(r.prototype, "size", {
            configurable: !0,
            get: function() {
                return a(this).collection.size;
            }
        })) : (r = t.getConstructor(e, n, o, i), p.REQUIRED = !0), m(r, n, !1, !0), d[n] = r, 
        f({
            global: !0,
            forced: !0
        }, d), c || t.setStrong(r, n, o), r;
    };
}, function(e, t, n) {
    var r = n(28);
    e.exports = !r(function() {
        return Object.isExtensible(Object.preventExtensions({}));
    });
}, function(e, t, n) {
    "use strict";
    var r = n(64), o = n(63);
    e.exports = r ? {}.toString : function() {
        return "[object " + o(this) + "]";
    };
}, function(e, t, n) {
    var r = n(22), o = n(123), i = r.WeakMap;
    e.exports = "function" == typeof i && /native code/.test(o(i));
}, function(e, t, n) {
    var r = n(77), o = Function.toString;
    "function" != typeof r.inspectSource && (r.inspectSource = function(e) {
        return o.call(e);
    }), e.exports = r.inspectSource;
}, function(e, t, n) {
    "use strict";
    var s = n(31).f, d = n(85), f = n(129), l = n(21), p = n(84), g = n(17), a = n(67), c = n(134), y = n(27), b = n(81).fastKey, r = n(55), v = r.set, h = r.getterFor;
    e.exports = {
        getConstructor: function(e, n, r, o) {
            function i(e, t, n) {
                var r, o, i = c(e), a = u(e, t);
                return a ? a.value = n : (i.last = a = {
                    index: o = b(t, !0),
                    key: t,
                    value: n,
                    previous: r = i.last,
                    next: void 0,
                    removed: !1
                }, i.first || (i.first = a), r && (r.next = a), y ? i.size++ : e.size++, "F" !== o && (i.index[o] = a)), 
                e;
            }
            var a = e(function(e, t) {
                p(e, a, n), v(e, {
                    type: n,
                    index: d(null),
                    first: void 0,
                    last: void 0,
                    size: 0
                }), y || (e.size = 0), null != t && g(t, e[o], e, r);
            }), c = h(n), u = function(e, t) {
                var n, r = c(e), o = b(t);
                if ("F" !== o) return r.index[o];
                for (n = r.first; n; n = n.next) if (n.key == t) return n;
            };
            return f(a.prototype, {
                clear: function() {
                    for (var e = c(this), t = e.index, n = e.first; n; ) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), 
                    delete t[n.index], n = n.next;
                    e.first = e.last = void 0, y ? e.size = 0 : this.size = 0;
                },
                delete: function(e) {
                    var t, n, r = c(this), o = u(this, e);
                    return o && (t = o.next, n = o.previous, delete r.index[o.index], o.removed = !0, 
                    n && (n.next = t), t && (t.previous = n), r.first == o && (r.first = t), r.last == o && (r.last = n), 
                    y ? r.size-- : this.size--), !!o;
                },
                forEach: function(e, t) {
                    for (var n, r = c(this), o = l(e, 1 < arguments.length ? t : void 0, 3); n = n ? n.next : r.first; ) for (o(n.value, n.key, this); n && n.removed; ) n = n.previous;
                },
                has: function(e) {
                    return !!u(this, e);
                }
            }), f(a.prototype, r ? {
                get: function(e) {
                    var t = u(this, e);
                    return t && t.value;
                },
                set: function(e, t) {
                    return i(this, 0 === e ? 0 : e, t);
                }
            } : {
                add: function(e) {
                    return i(this, e = 0 === e ? 0 : e, e);
                }
            }), y && s(a.prototype, "size", {
                get: function() {
                    return c(this).size;
                }
            }), a;
        },
        setStrong: function(e, t, n) {
            var r = t + " Iterator", o = h(t), i = h(r);
            a(e, t, function(e, t) {
                v(this, {
                    type: r,
                    target: e,
                    state: o(e),
                    kind: t,
                    last: void 0
                });
            }, function() {
                for (var e = i(this), t = e.kind, n = e.last; n && n.removed; ) n = n.previous;
                return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? {
                    value: n.key,
                    done: !1
                } : "values" == t ? {
                    value: n.value,
                    done: !1
                } : {
                    value: [ n.key, n.value ],
                    done: !1
                } : {
                    value: e.target = void 0,
                    done: !0
                };
            }, n ? "entries" : "values", !n, !0), c(t);
        }
    };
}, function(e, t, n) {
    var r = n(27), a = n(31), c = n(15), u = n(126);
    e.exports = r ? Object.defineProperties : function(e, t) {
        c(e);
        for (var n, r = u(t), o = r.length, i = 0; i < o; ) a.f(e, n = r[i++], t[n]);
        return e;
    };
}, function(e, t, n) {
    var r = n(127), o = n(86);
    e.exports = Object.keys || function(e) {
        return r(e, o);
    };
}, function(e, t, n) {
    var a = n(24), c = n(48), u = n(79).indexOf, s = n(54);
    e.exports = function(e, t) {
        var n, r = c(e), o = 0, i = [];
        for (n in r) !a(s, n) && a(r, n) && i.push(n);
        for (;t.length > o; ) a(r, n = t[o++]) && (~u(i, n) || i.push(n));
        return i;
    };
}, function(e, t, n) {
    var r = n(25);
    e.exports = r("document", "documentElement");
}, function(e, t, n) {
    var o = n(87);
    e.exports = function(e, t, n) {
        for (var r in t) n && n.unsafe && e[r] ? e[r] = t[r] : o(e, r, t[r], n);
        return e;
    };
}, function(e, t, n) {
    "use strict";
    function o() {
        return this;
    }
    var i = n(88).IteratorPrototype, a = n(85), c = n(47), u = n(65), s = n(36);
    e.exports = function(e, t, n) {
        var r = t + " Iterator";
        return e.prototype = a(i, {
            next: c(1, n)
        }), u(e, r, !1, !0), s[r] = o, e;
    };
}, function(e, t, n) {
    var r = n(28);
    e.exports = !r(function() {
        function e() {}
        return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
    });
}, function(e, t, n) {
    var o = n(15), i = n(133);
    e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var n, r = !1, e = {};
        try {
            (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []), 
            r = e instanceof Array;
        } catch (e) {}
        return function(e, t) {
            return o(e), i(t), r ? n.call(e, t) : e.__proto__ = t, e;
        };
    }() : void 0);
}, function(e, t, n) {
    var r = n(23);
    e.exports = function(e) {
        if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
        return e;
    };
}, function(e, t, n) {
    "use strict";
    var r = n(25), o = n(31), i = n(19), a = n(27), c = i("species");
    e.exports = function(e) {
        var t = r(e), n = o.f;
        a && t && !t[c] && n(t, c, {
            configurable: !0,
            get: function() {
                return this;
            }
        });
    };
}, function(e, t) {}, function(e, t, n) {
    function r(c) {
        return function(e, t) {
            var n, r, o = String(s(e)), i = u(t), a = o.length;
            return i < 0 || a <= i ? c ? "" : void 0 : (n = o.charCodeAt(i)) < 55296 || 56319 < n || i + 1 === a || (r = o.charCodeAt(i + 1)) < 56320 || 57343 < r ? c ? o.charAt(i) : n : c ? o.slice(i, i + 2) : r - 56320 + (n - 55296 << 10) + 65536;
        };
    }
    var u = n(59), s = n(50);
    e.exports = {
        codeAt: r(!1),
        charAt: r(!0)
    };
}, function(e, t, n) {
    n(138);
    var r = n(139), o = n(22), i = n(63), a = n(29), c = n(36), u = n(19)("toStringTag");
    for (var s in r) {
        var d = o[s], f = d && d.prototype;
        f && i(f) !== u && a(f, u, s), c[s] = c.Array;
    }
}, function(e, t, n) {
    "use strict";
    var r = n(48), o = n(52), i = n(36), a = n(55), c = n(67), u = "Array Iterator", s = a.set, d = a.getterFor(u);
    e.exports = c(Array, "Array", function(e, t) {
        s(this, {
            type: u,
            target: r(e),
            index: 0,
            kind: t
        });
    }, function() {
        var e = d(this), t = e.target, n = e.kind, r = e.index++;
        return !t || r >= t.length ? {
            value: e.target = void 0,
            done: !0
        } : "keys" == n ? {
            value: r,
            done: !1
        } : "values" == n ? {
            value: t[r],
            done: !1
        } : {
            value: [ r, t[r] ],
            done: !1
        };
    }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries");
}, function(e, t) {
    e.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    };
}, function(e, t, n) {
    n(14)({
        target: "Set",
        stat: !0
    }, {
        from: n(141)
    });
}, function(e, t, n) {
    "use strict";
    var s = n(18), d = n(21), f = n(17);
    e.exports = function(e, t, n) {
        var r, o, i, a, c = arguments.length, u = 1 < c ? t : void 0;
        return s(this), (r = void 0 !== u) && s(u), null == e ? new this() : (o = [], r ? (i = 0, 
        a = d(u, 2 < c ? n : void 0, 2), f(e, function(e) {
            o.push(a(e, i++));
        })) : f(e, o.push, o), new this(o));
    };
}, function(e, t, n) {
    n(14)({
        target: "Set",
        stat: !0
    }, {
        of: n(143)
    });
}, function(e, t, n) {
    "use strict";
    e.exports = function() {
        for (var e = arguments.length, t = new Array(e); e--; ) t[e] = arguments[e];
        return new this(t);
    };
}, function(e, t, n) {
    "use strict";
    var r = n(14), o = n(16), i = n(145);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        addAll: function() {
            return i.apply(this, arguments);
        }
    });
}, function(e, t, n) {
    "use strict";
    var o = n(15), i = n(18);
    e.exports = function() {
        for (var e = o(this), t = i(e.add), n = 0, r = arguments.length; n < r; n++) t.call(e, arguments[n]);
        return e;
    };
}, function(e, t, n) {
    "use strict";
    var r = n(14), o = n(16), i = n(147);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        deleteAll: function() {
            return i.apply(this, arguments);
        }
    });
}, function(e, t, n) {
    "use strict";
    var a = n(15), c = n(18);
    e.exports = function() {
        for (var e, t = a(this), n = c(t.delete), r = !0, o = 0, i = arguments.length; o < i; o++) e = n.call(t, arguments[o]), 
        r = r && e;
        return !!r;
    };
}, function(e, t, n) {
    "use strict";
    var r = n(14), o = n(16), i = n(15), a = n(21), c = n(34), u = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        every: function(e, t) {
            var n = i(this), r = c(n), o = a(e, 1 < arguments.length ? t : void 0, 3);
            return !u(r, function(e) {
                if (!o(e, e, n)) return u.stop();
            }, void 0, !1, !0).stopped;
        }
    });
}, function(e, t, n) {
    "use strict";
    var r = n(14), o = n(16), i = n(25), a = n(15), c = n(18), u = n(37), s = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        difference: function(e) {
            var t = a(this), n = new (u(t, i("Set")))(t), r = c(n.delete);
            return s(e, function(e) {
                r.call(n, e);
            }), n;
        }
    });
}, function(e, t, n) {
    "use strict";
    var r = n(14), o = n(16), c = n(25), u = n(15), s = n(18), d = n(21), f = n(37), l = n(34), p = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        filter: function(e, t) {
            var n = u(this), r = l(n), o = d(e, 1 < arguments.length ? t : void 0, 3), i = new (f(n, c("Set")))(), a = s(i.add);
            return p(r, function(e) {
                o(e, e, n) && a.call(i, e);
            }, void 0, !1, !0), i;
        }
    });
}, function(e, t, n) {
    "use strict";
    var r = n(14), o = n(16), i = n(15), a = n(21), c = n(34), u = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        find: function(e, t) {
            var n = i(this), r = c(n), o = a(e, 1 < arguments.length ? t : void 0, 3);
            return u(r, function(e) {
                if (o(e, e, n)) return u.stop(e);
            }, void 0, !1, !0).result;
        }
    });
}, function(e, t, n) {
    "use strict";
    var r = n(14), o = n(16), i = n(25), a = n(15), c = n(18), u = n(37), s = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        intersection: function(e) {
            var t = a(this), n = new (u(t, i("Set")))(), r = c(t.has), o = c(n.add);
            return s(e, function(e) {
                r.call(t, e) && o.call(n, e);
            }), n;
        }
    });
}, function(e, t, n) {
    "use strict";
    var r = n(14), o = n(16), i = n(15), a = n(18), c = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        isDisjointFrom: function(e) {
            var t = i(this), n = a(t.has);
            return !c(e, function(e) {
                if (!0 === n.call(t, e)) return c.stop();
            }).stopped;
        }
    });
}, function(e, t, n) {
    "use strict";
    var r = n(14), o = n(16), i = n(25), a = n(15), c = n(18), u = n(91), s = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        isSubsetOf: function(e) {
            var t = u(this), n = a(e), r = n.has;
            return "function" != typeof r && (n = new (i("Set"))(e), r = c(n.has)), !s(t, function(e) {
                if (!1 === r.call(n, e)) return s.stop();
            }, void 0, !1, !0).stopped;
        }
    });
}, function(e, t, n) {
    "use strict";
    var r = n(14), o = n(16), i = n(15), a = n(18), c = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        isSupersetOf: function(e) {
            var t = i(this), n = a(t.has);
            return !c(e, function(e) {
                if (!1 === n.call(t, e)) return c.stop();
            }).stopped;
        }
    });
}, function(e, t, n) {
    "use strict";
    var r = n(14), o = n(16), i = n(15), a = n(34), c = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        join: function(e) {
            var t = i(this), n = a(t), r = void 0 === e ? "," : String(e), o = [];
            return c(n, o.push, o, !1, !0), o.join(r);
        }
    });
}, function(e, t, n) {
    "use strict";
    var r = n(14), o = n(16), c = n(25), u = n(15), s = n(18), d = n(21), f = n(37), l = n(34), p = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        map: function(e, t) {
            var n = u(this), r = l(n), o = d(e, 1 < arguments.length ? t : void 0, 3), i = new (f(n, c("Set")))(), a = s(i.add);
            return p(r, function(e) {
                a.call(i, o(e, e, n));
            }, void 0, !1, !0), i;
        }
    });
}, function(e, t, n) {
    "use strict";
    var r = n(14), o = n(16), a = n(15), c = n(18), u = n(34), s = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        reduce: function(t, e) {
            var n = a(this), r = u(n), o = arguments.length < 2, i = o ? void 0 : e;
            if (c(t), s(r, function(e) {
                i = o ? (o = !1, e) : t(i, e, e, n);
            }, void 0, !1, !0), o) throw TypeError("Reduce of empty set with no initial value");
            return i;
        }
    });
}, function(e, t, n) {
    "use strict";
    var r = n(14), o = n(16), i = n(15), a = n(21), c = n(34), u = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        some: function(e, t) {
            var n = i(this), r = c(n), o = a(e, 1 < arguments.length ? t : void 0, 3);
            return u(r, function(e) {
                if (o(e, e, n)) return u.stop();
            }, void 0, !1, !0).stopped;
        }
    });
}, function(e, t, n) {
    "use strict";
    var r = n(14), o = n(16), i = n(25), a = n(15), c = n(18), u = n(37), s = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        symmetricDifference: function(e) {
            var t = a(this), n = new (u(t, i("Set")))(t), r = c(n.delete), o = c(n.add);
            return s(e, function(e) {
                r.call(n, e) || o.call(n, e);
            }), n;
        }
    });
}, function(e, t, n) {
    "use strict";
    var r = n(14), o = n(16), i = n(25), a = n(15), c = n(18), u = n(37), s = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        union: function(e) {
            var t = a(this), n = new (u(t, i("Set")))(t);
            return s(e, c(n.add), n), n;
        }
    });
}, function(e, t, n) {
    n(90), n(163);
    var r = n(42);
    e.exports = r.Array.from;
}, function(e, t, n) {
    var r = n(14), o = n(164);
    r({
        target: "Array",
        stat: !0,
        forced: !n(166)(function(e) {
            Array.from(e);
        })
    }, {
        from: o
    });
}, function(e, t, n) {
    "use strict";
    var b = n(21), v = n(58), h = n(83), m = n(82), S = n(51), A = n(165), E = n(62);
    e.exports = function(e, t, n) {
        var r, o, i, a, c, u, s = v(e), d = "function" == typeof this ? this : Array, f = arguments.length, l = 1 < f ? t : void 0, p = void 0 !== l, g = E(s), y = 0;
        if (p && (l = b(l, 2 < f ? n : void 0, 2)), null == g || d == Array && m(g)) for (o = new d(r = S(s.length)); y < r; y++) u = p ? l(s[y], y) : s[y], 
        A(o, y, u); else for (c = (a = g.call(s)).next, o = new d(); !(i = c.call(a)).done; y++) u = p ? h(a, l, [ i.value, y ], !0) : i.value, 
        A(o, y, u);
        return o.length = y, o;
    };
}, function(e, t, n) {
    "use strict";
    var o = n(56), i = n(31), a = n(47);
    e.exports = function(e, t, n) {
        var r = o(t);
        r in e ? i.f(e, r, a(0, n)) : e[r] = n;
    };
}, function(e, t, n) {
    var o = n(19)("iterator"), i = !1;
    try {
        var r = 0, a = {
            next: function() {
                return {
                    done: !!r++
                };
            },
            return: function() {
                i = !0;
            }
        };
        a[o] = function() {
            return this;
        }, Array.from(a, function() {
            throw 2;
        });
    } catch (e) {}
    e.exports = function(e, t) {
        if (!t && !i) return !1;
        var n = !1;
        try {
            var r = {};
            r[o] = function() {
                return {
                    next: function() {
                        return {
                            done: n = !0
                        };
                    }
                };
            }, e(r);
        } catch (e) {}
        return n;
    };
}, function(e, t) {
    e.exports = function e(t) {
        var n = Array.isArray(t) ? [] : {};
        for (var r in t) {
            var o = t[r];
            n[r] = o && "object" == typeof o ? e(o) : o;
        }
        return n;
    };
}, function(e, t, n) {
    var f = n(93), l = n(170), o = n(171), p = n(177), g = n(179), y = n(181), b = Date.prototype.getTime;
    function v(e, t, n) {
        var r = n || {};
        return !(r.strict ? !o(e, t) : e !== t) || (!e || !t || "object" != typeof e && "object" != typeof t ? r.strict ? o(e, t) : e == t : function(e, t, n) {
            var r, o;
            if (typeof e != typeof t) return !1;
            if (h(e) || h(t)) return !1;
            if (e.prototype !== t.prototype) return !1;
            if (l(e) !== l(t)) return !1;
            var i = p(e), a = p(t);
            if (i !== a) return !1;
            if (i || a) return e.source === t.source && g(e) === g(t);
            if (y(e) && y(t)) return b.call(e) === b.call(t);
            var c = m(e), u = m(t);
            if (c !== u) return !1;
            if (c || u) {
                if (e.length !== t.length) return !1;
                for (r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
                return !0;
            }
            if (typeof e != typeof t) return !1;
            try {
                var s = f(e), d = f(t);
            } catch (e) {
                return !1;
            }
            if (s.length !== d.length) return !1;
            for (s.sort(), d.sort(), r = s.length - 1; 0 <= r; r--) if (s[r] != d[r]) return !1;
            for (r = s.length - 1; 0 <= r; r--) if (o = s[r], !v(e[o], t[o], n)) return !1;
            return !0;
        }(e, t, r));
    }
    function h(e) {
        return null == e;
    }
    function m(e) {
        return !(!e || "object" != typeof e || "number" != typeof e.length) && ("function" == typeof e.copy && "function" == typeof e.slice && !(0 < e.length && "number" != typeof e[0]));
    }
    e.exports = v;
}, function(e, t, n) {
    "use strict";
    var l, p, g, r, y, b, v, h, o, m, i;
    Object.keys || (l = Object.prototype.hasOwnProperty, p = Object.prototype.toString, 
    g = n(94), r = Object.prototype.propertyIsEnumerable, y = !r.call({
        toString: null
    }, "toString"), b = r.call(function() {}, "prototype"), v = [ "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor" ], 
    h = function(e) {
        var t = e.constructor;
        return t && t.prototype === e;
    }, o = {
        $applicationCache: !0,
        $console: !0,
        $external: !0,
        $frame: !0,
        $frameElement: !0,
        $frames: !0,
        $innerHeight: !0,
        $innerWidth: !0,
        $onmozfullscreenchange: !0,
        $onmozfullscreenerror: !0,
        $outerHeight: !0,
        $outerWidth: !0,
        $pageXOffset: !0,
        $pageYOffset: !0,
        $parent: !0,
        $scrollLeft: !0,
        $scrollTop: !0,
        $scrollX: !0,
        $scrollY: !0,
        $self: !0,
        $webkitIndexedDB: !0,
        $webkitStorageInfo: !0,
        $window: !0
    }, m = function() {
        if ("undefined" == typeof window) return !1;
        for (var e in window) try {
            if (!o["$" + e] && l.call(window, e) && null !== window[e] && "object" == typeof window[e]) try {
                h(window[e]);
            } catch (e) {
                return !0;
            }
        } catch (e) {
            return !0;
        }
        return !1;
    }(), i = function(e) {
        var t = null !== e && "object" == typeof e, n = "[object Function]" === p.call(e), r = g(e), o = t && "[object String]" === p.call(e), i = [];
        if (!t && !n && !r) throw new TypeError("Object.keys called on a non-object");
        var a = b && n;
        if (o && 0 < e.length && !l.call(e, 0)) for (var c = 0; c < e.length; ++c) i.push(String(c));
        if (r && 0 < e.length) for (var u = 0; u < e.length; ++u) i.push(String(u)); else for (var s in e) a && "prototype" === s || !l.call(e, s) || i.push(String(s));
        if (y) for (var d = function(e) {
            if ("undefined" == typeof window || !m) return h(e);
            try {
                return h(e);
            } catch (e) {
                return !1;
            }
        }(e), f = 0; f < v.length; ++f) d && "constructor" === v[f] || !l.call(e, v[f]) || i.push(v[f]);
        return i;
    }), e.exports = i;
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return !(i && e && "object" == typeof e && Symbol.toStringTag in e) && "[object Arguments]" === a.call(e);
    }
    function o(e) {
        return !!r(e) || null !== e && "object" == typeof e && "number" == typeof e.length && 0 <= e.length && "[object Array]" !== a.call(e) && "[object Function]" === a.call(e.callee);
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag, a = Object.prototype.toString, c = function() {
        return r(arguments);
    }();
    r.isLegacyArguments = o, e.exports = c ? r : o;
}, function(e, t, n) {
    "use strict";
    var r = n(43), o = n(95), i = n(96), a = n(97), c = n(176), u = o(a(), Object);
    r(u, {
        getPolyfill: a,
        implementation: i,
        shim: c
    }), e.exports = u;
}, function(e, t, n) {
    "use strict";
    var u = Array.prototype.slice, s = Object.prototype.toString;
    e.exports = function(t) {
        var n = this;
        if ("function" != typeof n || "[object Function]" !== s.call(n)) throw new TypeError("Function.prototype.bind called on incompatible " + n);
        for (var r, e, o = u.call(arguments, 1), i = Math.max(0, n.length - o.length), a = [], c = 0; c < i; c++) a.push("$" + c);
        return r = Function("binder", "return function (" + a.join(",") + "){ return binder.apply(this,arguments); }")(function() {
            if (this instanceof r) {
                var e = n.apply(this, o.concat(u.call(arguments)));
                return Object(e) === e ? e : this;
            }
            return n.apply(t, o.concat(u.call(arguments)));
        }), n.prototype && ((e = function() {}).prototype = n.prototype, r.prototype = new e(), 
        e.prototype = null), r;
    };
}, function(e, t, n) {
    "use strict";
    var r, c = TypeError, u = Object.getOwnPropertyDescriptor;
    if (u) try {
        u({}, "");
    } catch (e) {
        u = null;
    }
    function o() {
        throw new c();
    }
    var i = u ? function() {
        try {
            return o;
        } catch (e) {
            try {
                return u(arguments, "callee").get;
            } catch (e) {
                return o;
            }
        }
    }() : o, a = n(174)(), s = Object.getPrototypeOf || function(e) {
        return e.__proto__;
    }, d = r, f = "undefined" == typeof Uint8Array ? r : s(Uint8Array), l = {
        "%Array%": Array,
        "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? r : ArrayBuffer,
        "%ArrayBufferPrototype%": "undefined" == typeof ArrayBuffer ? r : ArrayBuffer.prototype,
        "%ArrayIteratorPrototype%": a ? s([][Symbol.iterator]()) : r,
        "%ArrayPrototype%": Array.prototype,
        "%ArrayProto_entries%": Array.prototype.entries,
        "%ArrayProto_forEach%": Array.prototype.forEach,
        "%ArrayProto_keys%": Array.prototype.keys,
        "%ArrayProto_values%": Array.prototype.values,
        "%AsyncFromSyncIteratorPrototype%": r,
        "%AsyncFunction%": void 0,
        "%AsyncFunctionPrototype%": r,
        "%AsyncGenerator%": r,
        "%AsyncGeneratorFunction%": void 0,
        "%AsyncGeneratorPrototype%": r,
        "%AsyncIteratorPrototype%": d && a && Symbol.asyncIterator ? d[Symbol.asyncIterator]() : r,
        "%Atomics%": "undefined" == typeof Atomics ? r : Atomics,
        "%Boolean%": Boolean,
        "%BooleanPrototype%": Boolean.prototype,
        "%DataView%": "undefined" == typeof DataView ? r : DataView,
        "%DataViewPrototype%": "undefined" == typeof DataView ? r : DataView.prototype,
        "%Date%": Date,
        "%DatePrototype%": Date.prototype,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%ErrorPrototype%": Error.prototype,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%EvalErrorPrototype%": EvalError.prototype,
        "%Float32Array%": "undefined" == typeof Float32Array ? r : Float32Array,
        "%Float32ArrayPrototype%": "undefined" == typeof Float32Array ? r : Float32Array.prototype,
        "%Float64Array%": "undefined" == typeof Float64Array ? r : Float64Array,
        "%Float64ArrayPrototype%": "undefined" == typeof Float64Array ? r : Float64Array.prototype,
        "%Function%": Function,
        "%FunctionPrototype%": Function.prototype,
        "%Generator%": r,
        "%GeneratorFunction%": void 0,
        "%GeneratorPrototype%": r,
        "%Int8Array%": "undefined" == typeof Int8Array ? r : Int8Array,
        "%Int8ArrayPrototype%": "undefined" == typeof Int8Array ? r : Int8Array.prototype,
        "%Int16Array%": "undefined" == typeof Int16Array ? r : Int16Array,
        "%Int16ArrayPrototype%": "undefined" == typeof Int16Array ? r : Int8Array.prototype,
        "%Int32Array%": "undefined" == typeof Int32Array ? r : Int32Array,
        "%Int32ArrayPrototype%": "undefined" == typeof Int32Array ? r : Int32Array.prototype,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": a ? s(s([][Symbol.iterator]())) : r,
        "%JSON%": "object" == typeof JSON ? JSON : r,
        "%JSONParse%": "object" == typeof JSON ? JSON.parse : r,
        "%Map%": "undefined" == typeof Map ? r : Map,
        "%MapIteratorPrototype%": "undefined" != typeof Map && a ? s(new Map()[Symbol.iterator]()) : r,
        "%MapPrototype%": "undefined" == typeof Map ? r : Map.prototype,
        "%Math%": Math,
        "%Number%": Number,
        "%NumberPrototype%": Number.prototype,
        "%Object%": Object,
        "%ObjectPrototype%": Object.prototype,
        "%ObjProto_toString%": Object.prototype.toString,
        "%ObjProto_valueOf%": Object.prototype.valueOf,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": "undefined" == typeof Promise ? r : Promise,
        "%PromisePrototype%": "undefined" == typeof Promise ? r : Promise.prototype,
        "%PromiseProto_then%": "undefined" == typeof Promise ? r : Promise.prototype.then,
        "%Promise_all%": "undefined" == typeof Promise ? r : Promise.all,
        "%Promise_reject%": "undefined" == typeof Promise ? r : Promise.reject,
        "%Promise_resolve%": "undefined" == typeof Promise ? r : Promise.resolve,
        "%Proxy%": "undefined" == typeof Proxy ? r : Proxy,
        "%RangeError%": RangeError,
        "%RangeErrorPrototype%": RangeError.prototype,
        "%ReferenceError%": ReferenceError,
        "%ReferenceErrorPrototype%": ReferenceError.prototype,
        "%Reflect%": "undefined" == typeof Reflect ? r : Reflect,
        "%RegExp%": RegExp,
        "%RegExpPrototype%": RegExp.prototype,
        "%Set%": "undefined" == typeof Set ? r : Set,
        "%SetIteratorPrototype%": "undefined" != typeof Set && a ? s(new Set()[Symbol.iterator]()) : r,
        "%SetPrototype%": "undefined" == typeof Set ? r : Set.prototype,
        "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
        "%SharedArrayBufferPrototype%": "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer.prototype,
        "%String%": String,
        "%StringIteratorPrototype%": a ? s(""[Symbol.iterator]()) : r,
        "%StringPrototype%": String.prototype,
        "%Symbol%": a ? Symbol : r,
        "%SymbolPrototype%": a ? Symbol.prototype : r,
        "%SyntaxError%": SyntaxError,
        "%SyntaxErrorPrototype%": SyntaxError.prototype,
        "%ThrowTypeError%": i,
        "%TypedArray%": f,
        "%TypedArrayPrototype%": f ? f.prototype : r,
        "%TypeError%": c,
        "%TypeErrorPrototype%": c.prototype,
        "%Uint8Array%": "undefined" == typeof Uint8Array ? r : Uint8Array,
        "%Uint8ArrayPrototype%": "undefined" == typeof Uint8Array ? r : Uint8Array.prototype,
        "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
        "%Uint8ClampedArrayPrototype%": "undefined" == typeof Uint8ClampedArray ? r : Uint8ClampedArray.prototype,
        "%Uint16Array%": "undefined" == typeof Uint16Array ? r : Uint16Array,
        "%Uint16ArrayPrototype%": "undefined" == typeof Uint16Array ? r : Uint16Array.prototype,
        "%Uint32Array%": "undefined" == typeof Uint32Array ? r : Uint32Array,
        "%Uint32ArrayPrototype%": "undefined" == typeof Uint32Array ? r : Uint32Array.prototype,
        "%URIError%": URIError,
        "%URIErrorPrototype%": URIError.prototype,
        "%WeakMap%": "undefined" == typeof WeakMap ? r : WeakMap,
        "%WeakMapPrototype%": "undefined" == typeof WeakMap ? r : WeakMap.prototype,
        "%WeakSet%": "undefined" == typeof WeakSet ? r : WeakSet,
        "%WeakSetPrototype%": "undefined" == typeof WeakSet ? r : WeakSet.prototype
    }, p = n(68).call(Function.call, String.prototype.replace), g = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, y = /\\(\\)?/g;
    e.exports = function(e, t) {
        if ("string" != typeof e || 0 === e.length) throw new TypeError("intrinsic name must be a non-empty string");
        if (1 < arguments.length && "boolean" != typeof t) throw new TypeError('"allowMissing" argument must be a boolean');
        for (var o, n = (o = [], p(e, g, function(e, t, n, r) {
            o[o.length] = n ? p(r, y, "$1") : t || e;
        }), o), r = function(e, t) {
            if (!(e in l)) throw new SyntaxError("intrinsic " + e + " does not exist!");
            if (void 0 === l[e] && !t) throw new c("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return l[e];
        }("%" + (0 < n.length ? n[0] : "") + "%", t), i = 1; i < n.length; i += 1) if (null != r) if (u && i + 1 >= n.length) {
            var a = u(r, n[i]);
            if (!(t || n[i] in r)) throw new c("base intrinsic for " + e + " exists, but the property is not available.");
            r = a ? a.get || a.value : r[n[i]];
        } else r = r[n[i]];
        return r;
    };
}, function(r, e, o) {
    "use strict";
    (function(e) {
        var t = e.Symbol, n = o(175);
        r.exports = function() {
            return "function" == typeof t && ("function" == typeof Symbol && ("symbol" == typeof t("foo") && ("symbol" == typeof Symbol("bar") && n())));
        };
    }).call(e, o(33));
}, function(e, t, n) {
    "use strict";
    e.exports = function() {
        if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
        if ("symbol" == typeof Symbol.iterator) return !0;
        var e = {}, t = Symbol("test"), n = Object(t);
        if ("string" == typeof t) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(t)) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(n)) return !1;
        for (t in e[t] = 42, e) return !1;
        if ("function" == typeof Object.keys && 0 !== Object.keys(e).length) return !1;
        if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length) return !1;
        var r = Object.getOwnPropertySymbols(e);
        if (1 !== r.length || r[0] !== t) return !1;
        if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
        if ("function" == typeof Object.getOwnPropertyDescriptor) {
            var o = Object.getOwnPropertyDescriptor(e, t);
            if (42 !== o.value || !0 !== o.enumerable) return !1;
        }
        return !0;
    };
}, function(e, t, n) {
    "use strict";
    var r = n(97), o = n(43);
    e.exports = function() {
        var e = r();
        return o(Object, {
            is: e
        }, {
            is: function() {
                return Object.is !== e;
            }
        }), e;
    };
}, function(e, t, n) {
    "use strict";
    var r = n(178), o = RegExp.prototype.exec, i = Object.getOwnPropertyDescriptor, a = Object.prototype.toString, c = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    e.exports = function(e) {
        if (!e || "object" != typeof e) return !1;
        if (!c) return "[object RegExp]" === a.call(e);
        var t = i(e, "lastIndex");
        return !(!t || !r(t, "value")) && function(e) {
            try {
                var t = e.lastIndex;
                return e.lastIndex = 0, o.call(e), !0;
            } catch (e) {
                return !1;
            } finally {
                e.lastIndex = t;
            }
        }(e);
    };
}, function(e, t, n) {
    "use strict";
    var r = n(68);
    e.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
}, function(e, t, n) {
    "use strict";
    var r = n(43), o = n(95), i = n(98), a = n(99), c = n(180), u = o(i);
    r(u, {
        getPolyfill: a,
        implementation: i,
        shim: c
    }), e.exports = u;
}, function(e, t, n) {
    "use strict";
    var r = n(43).supportsDescriptors, o = n(99), i = Object.getOwnPropertyDescriptor, a = Object.defineProperty, c = TypeError, u = Object.getPrototypeOf, s = /a/;
    e.exports = function() {
        if (!r || !u) throw new c("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
        var e = o(), t = u(s), n = i(t, "flags");
        return n && n.get === e || a(t, "flags", {
            configurable: !0,
            enumerable: !1,
            get: e
        }), e;
    };
}, function(e, t, n) {
    "use strict";
    var r = Date.prototype.getDay, o = Object.prototype.toString, i = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    e.exports = function(e) {
        return "object" == typeof e && null !== e && (i ? function(e) {
            try {
                return r.call(e), !0;
            } catch (e) {
                return !1;
            }
        }(e) : "[object Date]" === o.call(e));
    };
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t, n, r, o) {
        for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++) e = e ? e[t[r]] : o;
        return e === o ? n : e;
    };
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t, n) {
        t.split && (t = t.split("."));
        for (var r, o = 0, i = t.length, a = e; o < i; ++o) r = a[t[o]], a = a[t[o]] = o === i - 1 ? n : null != r ? r : !~t[o + 1].indexOf(".") && -1 < +t[o + 1] ? [] : {};
    };
}, function(e, t) {
    h.SYNC = 1, h.ASYNC = 2, h.QUEUE = 4;
    var g = "fun-hooks";
    var n = Object.freeze({
        useProxy: !0,
        ready: 0
    }), y = new WeakMap(), r = "2,1,0" === [ 1 ].reduce(function(e, t, n) {
        return [ e, t, n ];
    }, 2).toString() ? Array.prototype.reduce : function(e, t) {
        var n, r = Object(this), o = r.length >>> 0, i = 0;
        if (t) n = t; else {
            for (;i < o && !(i in r); ) i++;
            n = r[i++];
        }
        for (;i < o; ) i in r && (n = e(n, r[i], i, r)), i++;
        return n;
    };
    function b(e, t) {
        return Array.prototype.slice.call(e, t);
    }
    var v = Object.assign || function(e) {
        return r.call(b(arguments, 1), function(t, n) {
            return n && Object.keys(n).forEach(function(e) {
                t[e] = n[e];
            }), t;
        }, e);
    };
    function h(u) {
        var s, e = {}, d = [];
        function t(e, t) {
            return "function" == typeof e ? f.call(null, "sync", e, t) : "string" == typeof e && "function" == typeof t ? f.apply(null, arguments) : "object" == typeof e ? function(i, e, a) {
                var t = !0;
                void 0 === e && (e = Object.getOwnPropertyNames(i), t = !1);
                var c = {}, n = [ "constructor" ];
                for (;(e = e.filter(function(e) {
                    return !("function" != typeof i[e] || -1 !== n.indexOf(e) || e.match(/^_/));
                })).forEach(function(e) {
                    var t, n = e.split(":"), r = n[0], o = n[1] || "sync";
                    c[r] || (t = i[r], c[r] = i[r] = f(o, t, a ? [ a, r ] : void 0));
                }), i = Object.getPrototypeOf(i), t && i; ) ;
                return c;
            }.apply(null, arguments) : void 0;
        }
        function l(i) {
            var a = Array.isArray(i) ? i : i.split(".");
            return r.call(a, function(t, n, e) {
                var r = t[n], o = !1;
                return r || (e === a.length - 1 ? (s || d.push(function() {
                    o || console.warn(g + ": referenced '" + i + "' but it was never created");
                }), t[n] = p(function(e) {
                    t[n] = e, o = !0;
                })) : t[n] = {});
            }, e);
        }
        function p(r) {
            var i = [], a = [], c = function() {}, e = {
                before: function(e, t) {
                    return n.call(this, i, "before", e, t);
                },
                after: function(e, t) {
                    return n.call(this, a, "after", e, t);
                },
                getHooks: function(n) {
                    var e = i.concat(a);
                    "object" == typeof n && (e = e.filter(function(t) {
                        return Object.keys(n).every(function(e) {
                            return t[e] === n[e];
                        });
                    }));
                    try {
                        v(e, {
                            remove: function() {
                                return e.forEach(function(e) {
                                    e.remove();
                                }), this;
                            }
                        });
                    } catch (e) {
                        console.error("error adding `remove` to array, did you modify Array.prototype?");
                    }
                    return e;
                },
                removeAll: function() {
                    return this.getHooks().remove();
                }
            }, t = {
                install: function(e, t, n) {
                    this.type = e, (c = n)(i, a), r && r(t);
                }
            };
            return y.set(e.after, t), e;
            function n(t, e, n, r) {
                var o = {
                    hook: n,
                    type: e,
                    priority: r || 10,
                    remove: function() {
                        var e = t.indexOf(o);
                        -1 !== e && (t.splice(e, 1), c(i, a));
                    }
                };
                return t.push(o), t.sort(function(e, t) {
                    return t.priority - e.priority;
                }), c(i, a), this;
            }
        }
        function f(f, e, t) {
            var n = e.after && y.get(e.after);
            if (n) {
                if (n.type !== f) throw g + ": recreated hookable with different type";
                return e;
            }
            var r, o, i = t ? l(t) : p(), a = {
                get: function(e, t) {
                    return i[t] || Reflect.get.apply(Reflect, arguments);
                }
            };
            return s || d.push(c), u.useProxy && "function" == typeof Proxy && Proxy.revocable ? o = new Proxy(e, a) : v(o = function() {
                return a.apply ? a.apply(e, this, b(arguments)) : e.apply(this, arguments);
            }, i), y.get(o.after).install(f, o, function(e, t) {
                var s, d = [];
                r = e.length || t.length ? (e.forEach(n), s = d.push(void 0) - 1, t.forEach(n), 
                function(n, r, e) {
                    var o, i = 0, a = "async" === f && "function" == typeof e[e.length - 1] && e.pop();
                    function c(e) {
                        "sync" === f ? o = e : a && a.apply(null, arguments);
                    }
                    function u(e) {
                        if (d[i]) {
                            var t = b(arguments);
                            return u.bail = c, t.unshift(u), d[i++].apply(r, t);
                        }
                        "sync" === f ? o = e : a && a.apply(null, arguments);
                    }
                    return d[s] = function() {
                        var e = b(arguments, 1);
                        "async" === f && a && (delete u.bail, e.push(u));
                        var t = n.apply(r, e);
                        "sync" === f && u(t);
                    }, u.apply(null, e), o;
                }) : void 0;
                function n(e) {
                    d.push(e.hook);
                }
                c();
            }), o;
            function c() {
                !s && ("sync" !== f || u.ready & h.SYNC) && ("async" !== f || u.ready & h.ASYNC) ? "sync" !== f && u.ready & h.QUEUE ? a.apply = function() {
                    var e = arguments;
                    d.push(function() {
                        o.apply(e[1], e[2]);
                    });
                } : a.apply = function() {
                    throw g + ": hooked function not ready";
                } : a.apply = r;
            }
        }
        return (u = v({}, n, u)).ready ? t.ready = function() {
            s = !0, function(e) {
                for (var t; t = e.shift(); ) t();
            }(d);
        } : s = !0, t.get = l, t;
    }
    e.exports = h;
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    n(239);
    var r = n(53);
    e.exports = r("Array", "findIndex");
}, function(e, t, n) {
    "use strict";
    var r = n(14), o = n(57).findIndex, i = n(52), a = n(61), c = "findIndex", u = !0, s = a(c);
    c in [] && Array(1)[c](function() {
        u = !1;
    }), r({
        target: "Array",
        proto: !0,
        forced: u || !s
    }, {
        findIndex: function(e, t) {
            return o(this, e, 1 < arguments.length ? t : void 0);
        }
    }), i(c);
}, , , , , , , function(e, t, n) {
    "use strict";
    t.a = function() {
        window.addEventListener("message", c, !1);
    };
    var r = n(8), g = n.n(r), y = n(35), o = n(5), b = (n.n(o), n(0)), v = n(26), i = n(11), h = n.n(i), m = n(10), a = n(12), S = n.n(a), A = o.EVENTS.BID_WON;
    function c(e) {
        var t, n, r, o, i, a, c, u, s, d = e.message ? "message" : "data", f = {};
        try {
            f = JSON.parse(e[d]);
        } catch (e) {
            return;
        }
        if (f && f.adId) {
            var l = h()(v.a.getBidsReceived(), function(e) {
                return e.adId === f.adId;
            });
            if (l && "Prebid Request" === f.message && (n = e, r = (t = l).adId, o = t.ad, i = t.adUrl, 
            a = t.width, c = t.height, u = t.renderer, s = t.cpm, Object(m.c)(u) ? Object(m.b)(u, t) : r && (function(e) {
                var i = e.adId, a = e.adUnitCode, r = e.width, o = e.height;
                function c(e) {
                    var t, n, r = (t = i, n = a, window.googletag ? function(n) {
                        return h()(window.googletag.pubads().getSlots(), function(t) {
                            return h()(t.getTargetingKeys(), function(e) {
                                return S()(t.getTargeting(e), n);
                            });
                        }).getSlotElementId();
                    }(t) : window.apntag ? function(e) {
                        var t = window.apntag.getTag(e);
                        return t && t.targetId;
                    }(n) : n), o = document.getElementById(r);
                    return o && o.querySelector(e);
                }
                [ "div", "iframe" ].forEach(function(e) {
                    var t, n = c(e + ':not([style*="display: none"])');
                    n ? ((t = n.style).width = r + "px", t.height = o + "px") : Object(b.logWarn)("Unable to locate matching page element for adUnitCode ".concat(a, ".  Can't resize it to ad's dimensions.  Please review setup."));
                });
            }(t), n.source.postMessage(JSON.stringify({
                message: "Prebid Response",
                ad: Object(b.replaceAuctionPrice)(o, s),
                adUrl: Object(b.replaceAuctionPrice)(i, s),
                adId: r,
                width: a,
                height: c
            }), n.origin)), v.a.addWinningBid(l), g.a.emit(A, l)), l && "Prebid Native" === f.message) {
                if ("assetRequest" === f.action) {
                    var p = Object(y.c)(f, l);
                    return void e.source.postMessage(JSON.stringify(p), e.origin);
                }
                if ("click" === Object(y.b)(f, l)) return;
                v.a.addWinningBid(l), g.a.emit(A, l);
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        var t;
        try {
            e = e || window.sessionStorage, t = JSON.parse(e.getItem(u));
        } catch (e) {}
        t && p(t, !0);
    };
    var r, o, i = n(3), a = n(0), c = n(40), u = "pbjs:debugging";
    function s(e) {
        Object(a.logMessage)("DEBUG: " + e);
    }
    function d(e) {
        Object(a.logWarn)("DEBUG: " + e);
    }
    function f(e) {
        r = function(e, t, n) {
            if (y(this.bidders, n.bidderCode)) return void d("bidder '".concat(n.bidderCode, "' excluded from auction by bidder overrides"));
            Array.isArray(this.bids) && this.bids.forEach(function(e) {
                g(e, n.bidderCode, t) || b(e, n, "bidder");
            });
            e(t, n);
        }.bind(e), c.c.before(r, 5), o = function(e, t) {
            var r = this, n = t.filter(function(e) {
                return !y(r.bidders, e.bidderCode) || (d("bidRequest '".concat(e.bidderCode, "' excluded from auction by bidder overrides")), 
                !1);
            });
            Array.isArray(r.bidRequests) && n.forEach(function(n) {
                r.bidRequests.forEach(function(t) {
                    n.bids.forEach(function(e) {
                        g(t, n.bidderCode, e.adUnitCode) || b(t, e, "bidRequest");
                    });
                });
            });
            e(n);
        }.bind(e), c.e.before(o, 5);
    }
    function l() {
        c.c.getHooks({
            hook: r
        }).remove(), c.e.getHooks({
            hook: o
        }).remove();
    }
    function p(e, t) {
        var n = 1 < arguments.length && void 0 !== t && t;
        i.b.setConfig({
            debug: !0
        }), l(), f(e), s("bidder overrides enabled".concat(n ? " from session" : ""));
    }
    function g(e, t, n) {
        return e.bidder && e.bidder !== t || !(!e.adUnitCode || e.adUnitCode === n);
    }
    function y(e, t) {
        return Array.isArray(e) && -1 === e.indexOf(t);
    }
    function b(n, e, r) {
        return Object.keys(n).filter(function(e) {
            return -1 === [ "adUnitCode", "bidder" ].indexOf(e);
        }).reduce(function(e, t) {
            return s("bidder overrides changed '".concat(e.adUnitCode, "/").concat(e.bidderCode, "' ").concat(r, ".").concat(t, " from '").concat(e[t], ".js' to '").concat(n[t], "'")), 
            e[t] = n[t], e;
        }, e);
    }
    function v(e) {
        if (e.enabled) {
            try {
                window.sessionStorage.setItem(u, JSON.stringify(e));
            } catch (e) {}
            p(e);
        } else {
            l(), s("bidder overrides disabled");
            try {
                window.sessionStorage.removeItem(u);
            } catch (e) {}
        }
    }
    i.b.getConfig("debugging", function(e) {
        return v(e.debugging);
    });
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    var r = n(359);
    e.exports = r;
}, function(e, t, n) {
    n(360);
    var r = n(53);
    e.exports = r("String", "includes");
}, function(e, t, n) {
    "use strict";
    var r = n(14), o = n(361), i = n(50);
    r({
        target: "String",
        proto: !0,
        forced: !n(363)("includes")
    }, {
        includes: function(e, t) {
            return !!~String(i(this)).indexOf(o(e), 1 < arguments.length ? t : void 0);
        }
    });
}, function(e, t, n) {
    var r = n(362);
    e.exports = function(e) {
        if (r(e)) throw TypeError("The method doesn't accept regular expressions");
        return e;
    };
}, function(e, t, n) {
    var r = n(23), o = n(49), i = n(19)("match");
    e.exports = function(e) {
        var t;
        return r(e) && (void 0 !== (t = e[i]) ? !!t : "RegExp" == o(e));
    };
}, function(e, t, n) {
    var r = n(19)("match");
    e.exports = function(t) {
        var n = /./;
        try {
            "/./"[t](n);
        } catch (e) {
            try {
                return n[r] = !1, "/./"[t](n);
            } catch (e) {}
        }
        return !1;
    };
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    var r = n(484);
    e.exports = r;
}, function(e, t, n) {
    n(485);
    var r = n(42);
    e.exports = r.Number.isInteger;
}, function(e, t, n) {
    n(14)({
        target: "Number",
        stat: !0
    }, {
        isInteger: n(486)
    });
}, function(e, t, n) {
    var r = n(23), o = Math.floor;
    e.exports = function(e) {
        return !r(e) && isFinite(e) && o(e) === e;
    };
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    e.exports = n(71);
} ]);

pbjsChunk([ 307 ], {
    206: function(e, r, n) {
        e.exports = n(207);
    },
    207: function(e, r, n) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), n.d(r, "spec", function() {
            return d;
        });
        var t = n(1), _ = n(3), g = n(2), h = n(10), I = n(0), y = "adform", d = {
            code: y,
            gvlid: 50,
            supportedMediaTypes: [ g.b, g.d ],
            isBidRequestValid: function(e) {
                return !!e.params.mid;
            },
            buildRequests: function(e, r) {
                for (var n, t, d, s, i, o, p, a, u = _.b.getConfig("currency.adServerCurrency"), c = [], g = [ [ "adxDomain", "adx.adform.net" ], [ "fd", 1 ], [ "url", null ], [ "tid", null ] ], h = JSON.parse(JSON.stringify(e)), l = h[0] && h[0].bidder || y, f = 0, b = h.length; f < b; f++) {
                    for ("net" !== (d = h[f]).params.priceType && "net" !== d.params.pt || (p = "net"), 
                    n = 0, t = g.length; n < t; n++) (i = d[s = g[n][0]] || d.params[s]) && (d[s] = d.params[s] = null, 
                    g[n][1] = i);
                    (o = d.params).transactionId = d.transactionId, o.rcur = o.rcur || u, c.push(function(e) {
                        var r, n = [];
                        for (r in e) e.hasOwnProperty(r) && e[r] && n.push(r, "=", e[r], "&");
                        return encodeURIComponent(btoa(n.join("").slice(0, -1)));
                    }(o));
                }
                c.unshift("https://" + g[0][1] + "/adx/?rp=4"), p = p || "gross", c.push("pt=" + p), 
                c.push("stid=" + e[0].auctionId);
                var v = I.deepAccess(r, "gdprConsent.gdprApplies"), m = I.deepAccess(r, "gdprConsent.consentString");
                for (void 0 !== v && (a = {
                    gdpr: v,
                    gdpr_consent: m
                }, c.push("gdpr=" + (1 & v)), c.push("gdpr_consent=" + m)), r && r.uspConsent && c.push("us_privacy=" + r.uspConsent), 
                f = 1, b = g.length; f < b; f++) s = g[f][0], (i = g[f][1]) && c.push(s + "=" + encodeURIComponent(i));
                return {
                    method: "GET",
                    url: c.join("&"),
                    bids: e,
                    netRevenue: p,
                    bidder: l,
                    gdpr: a
                };
            },
            interpretResponse: function(e, r) {
                for (var n, t, d, s, i = {
                    banner: 1,
                    vast_content: 1,
                    vast_url: 1
                }, o = [], p = r.bids, a = e.body, u = 0; u < a.length; u++) s = "banner" === (t = a[u]).response ? g.b : g.d, 
                d = p[u], i[t.response] && (function(e, r) {
                    for (var n = 0, t = r.length; n < t; n++) if (e.width == r[n][0] && e.height == r[n][1]) return !0;
                    return !1;
                }(t, I.getAdUnitSizes(d)) || s === g.d) && (n = {
                    requestId: d.bidId,
                    cpm: t.win_bid,
                    width: t.width,
                    height: t.height,
                    creativeId: d.bidId,
                    dealId: t.deal_id,
                    currency: t.win_cur,
                    netRevenue: "gross" !== r.netRevenue,
                    ttl: 360,
                    ad: t.banner,
                    bidderCode: r.bidder,
                    transactionId: d.transactionId,
                    vastUrl: t.vast_url,
                    vastXml: t.vast_content,
                    mediaType: s
                }, d.renderer || s !== g.d || "outstream" !== I.deepAccess(d, "mediaTypes.video.context") || (n.renderer = h.a.install({
                    id: d.bidId,
                    url: "https://s2.adform.net/banners/scripts/video/outstream/render.js"
                }), n.renderer.setRender(c)), r.gdpr && (n.gdpr = r.gdpr.gdpr, n.gdpr_consent = r.gdpr.gdpr_consent), 
                o.push(n));
                return o;
                function c(e) {
                    e.renderer.push(function() {
                        window.Adform.renderOutstream(e);
                    });
                }
            }
        };
        Object(t.registerBidder)(d);
    }
}, [ 206 ]);

pbjsChunk([ 275 ], {
    286: function(e, r, t) {
        e.exports = t(287);
    },
    287: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "spec", function() {
            return R;
        });
        var f = t(10), _ = t(0), k = t(3), y = t(1), v = t(2), p = t(26), a = t(11), I = t.n(a), n = t(12), x = t.n(n), g = t(38), i = t(9);
        function s(e) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function b() {
            return (b = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                }
                return e;
            }).apply(this, arguments);
        }
        function A(e) {
            return function(e) {
                if (Array.isArray(e)) return o(e);
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
            }(e) || function(e, r) {
                if (!e) return;
                if ("string" == typeof e) return o(e, r);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === t && e.constructor && (t = e.constructor.name);
                if ("Map" === t || "Set" === t) return Array.from(e);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return o(e, r);
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function o(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var t = 0, a = new Array(r); t < r; t++) a[t] = e[t];
            return a;
        }
        var d = "appnexus", C = "https://ib.adnxs.com/ut/v3/prebid", u = [ "id", "minduration", "maxduration", "skippable", "playback_method", "frameworks", "context", "skipoffset" ], w = [ "age", "externalUid", "segments", "gender", "dnt", "language" ], S = [ "geo", "device_id" ], T = [ "enabled", "dongle", "member_id", "debug_timeout" ], c = {
            playback_method: {
                unknown: 0,
                auto_play_sound_on: 1,
                auto_play_sound_off: 2,
                click_to_play: 3,
                mouse_over: 4,
                auto_play_sound_unknown: 5
            },
            context: {
                unknown: 0,
                pre_roll: 1,
                mid_roll: 2,
                post_roll: 3,
                outstream: 4,
                "in-banner": 5
            }
        }, l = {
            body: "description",
            body2: "desc2",
            cta: "ctatext",
            image: {
                serverName: "main_image",
                requiredParams: {
                    required: !0
                }
            },
            icon: {
                serverName: "icon",
                requiredParams: {
                    required: !0
                }
            },
            sponsoredBy: "sponsored_by",
            privacyLink: "privacy_link",
            salePrice: "saleprice",
            displayUrl: "displayurl"
        }, m = "<script", h = /\/\/cdn\.adnxs\.com\/v/, E = "trk.js", O = Object(i.b)(32, d), R = {
            code: d,
            gvlid: 32,
            aliases: [ "appnexusAst", "brealtime", "emxdigital", "pagescience", "defymedia", "gourmetads", "matomy", "featureforward", "oftmedia", "districtm", "adasta", "beintoo" ],
            supportedMediaTypes: [ v.b, v.d, v.c ],
            isBidRequestValid: function(e) {
                return !!(e.params.placementId || e.params.member && e.params.invCode);
            },
            buildRequests: function(e, r) {
                var a = e.map(N), t = I()(e, M), n = {};
                !0 === k.b.getConfig("coppa") && (n = {
                    coppa: !0
                }), t && Object.keys(t.params.user).filter(function(e) {
                    return x()(w, e);
                }).forEach(function(e) {
                    var r = _.convertCamelToUnderscore(e);
                    n[r] = t.params.user[e];
                });
                var i, s = I()(e, B);
                s && s.params && s.params.app && (i = {}, Object.keys(s.params.app).filter(function(e) {
                    return x()(S, e);
                }).forEach(function(e) {
                    return i[e] = s.params.app[e];
                }));
                var o, d = I()(e, D);
                d && d.params && s.params.app && s.params.app.id && (o = {
                    appid: d.params.app.id
                });
                var p = {}, u = {}, c = O.getCookie("apn_prebid_debug") || null;
                if (c) try {
                    p = JSON.parse(c);
                } catch (e) {
                    _.logError("AppNexus Debug Auction Cookie Error:\n\n" + e);
                } else {
                    var l = I()(e, V);
                    l && l.debug && (p = l.debug);
                }
                p && p.enabled && Object.keys(p).filter(function(e) {
                    return x()(T, e);
                }).forEach(function(e) {
                    u[e] = p[e];
                });
                var m, f = I()(e, z), y = f ? parseInt(f.params.member, 10) : 0, v = e[0].schain, g = {
                    tags: A(a),
                    user: n,
                    sdk: {
                        source: "pbjs",
                        version: "3.24.0"
                    },
                    schain: v
                };
                0 < y && (g.member_id = y), s && (g.device = i), d && (g.app = o), k.b.getConfig("adpod.brandCategoryExclusion") && (g.brand_category_uniqueness = !0), 
                u.enabled && (g.debug = u, _.logInfo("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(u, null, 4))), 
                r && r.gdprConsent && (g.gdpr_consent = {
                    consent_string: r.gdprConsent.consentString,
                    consent_required: r.gdprConsent.gdprApplies
                }), r && r.uspConsent && (g.us_privacy = r.uspConsent), r && r.refererInfo && (m = {
                    rd_ref: encodeURIComponent(r.refererInfo.referer),
                    rd_top: r.refererInfo.reachedTop,
                    rd_ifs: r.refererInfo.numIframes,
                    rd_stk: r.refererInfo.stack.map(function(e) {
                        return encodeURIComponent(e);
                    }).join(",")
                }, g.referrer_detection = m), I()(e, J) && e.filter(J).forEach(function(r) {
                    var e = function(e, r) {
                        var t = r.mediaTypes.video, a = t.durationRangeSec, n = t.requireExactDuration, i = function(e) {
                            var r = e.adPodDurationSec, t = e.durationRangeSec, a = e.requireExactDuration, n = _.getMinValueFromArray(t), i = Math.floor(r / n);
                            return a ? Math.max(i, t.length) : i;
                        }(r.mediaTypes.video), s = _.getMaxValueFromArray(a), o = e.filter(function(e) {
                            return e.uuid === r.bidId;
                        }), d = _.fill.apply(_, A(o).concat([ i ]));
                        {
                            var p, u;
                            n ? (p = Math.ceil(i / a.length), u = _.chunk(d, p), a.forEach(function(r, e) {
                                u[e].map(function(e) {
                                    W(e, "minduration", r), W(e, "maxduration", r);
                                });
                            })) : d.map(function(e) {
                                return W(e, "maxduration", s);
                            });
                        }
                        return d;
                    }(a, r), t = g.tags.filter(function(e) {
                        return e.uuid !== r.bidId;
                    });
                    g.tags = [].concat(A(t), A(e));
                });
                var b, h = _.deepAccess(e[0], "userId.criteoId");
                return h && ((b = []).push({
                    provider: "criteo",
                    user_id: h
                }), g.tpuids = b), a[0].publisher_id && (g.publisher_id = a[0].publisher_id), function(e, t) {
                    var a = [], n = {};
                    !function(e) {
                        var r = !0;
                        e && e.gdprConsent && e.gdprConsent.gdprApplies && 2 === e.gdprConsent.apiVersion && (r = !(!0 !== _.deepAccess(e.gdprConsent, "vendorData.purpose.consents.1")));
                        return r;
                    }(t) && (n = {
                        withCredentials: !1
                    });
                    {
                        var i, r;
                        15 < e.tags.length ? (i = _.deepClone(e), _.chunk(e.tags, 15).forEach(function(e) {
                            i.tags = e;
                            var r = JSON.stringify(i);
                            a.push({
                                method: "POST",
                                url: C,
                                data: r,
                                bidderRequest: t,
                                options: n
                            });
                        })) : (r = JSON.stringify(e), a = {
                            method: "POST",
                            url: C,
                            data: r,
                            bidderRequest: t,
                            options: n
                        });
                    }
                    return a;
                }(g, r);
            },
            interpretResponse: function(e, r) {
                var i = this, s = r.bidderRequest;
                e = e.body;
                var t, o = [];
                if (e && !e.error) return e.tags && e.tags.forEach(function(e) {
                    var r, t, a, n = (r = e) && r.ads && r.ads.length && I()(r.ads, function(e) {
                        return e.rtb;
                    });
                    n && 0 !== n.cpm && x()(i.supportedMediaTypes, n.ad_type) && ((t = function(r, e, t) {
                        var a = _.getBidRequest(r.uuid, [ t ]), n = {
                            requestId: r.uuid,
                            cpm: e.cpm,
                            creativeId: e.creative_id,
                            dealId: e.deal_id,
                            currency: "USD",
                            netRevenue: !0,
                            ttl: 300,
                            adUnitCode: a.adUnitCode,
                            appnexus: {
                                buyerMemberId: e.buyer_member_id,
                                dealPriority: e.deal_priority,
                                dealCode: e.deal_code
                            }
                        };
                        e.advertiser_id && (n.meta = b({}, n.meta, {
                            advertiserId: e.advertiser_id
                        }));
                        if (e.rtb.video) {
                            var i, s;
                            switch (b(n, {
                                width: e.rtb.video.player_width,
                                height: e.rtb.video.player_height,
                                vastImpUrl: e.notify_url,
                                ttl: 3600
                            }), _.deepAccess(a, "mediaTypes.video.context")) {
                              case v.a:
                                var o = Object(y.getIabSubCategory)(a.bidder, e.brand_category_id);
                                n.meta = b({}, n.meta, {
                                    primaryCatId: o
                                });
                                var d = e.deal_priority;
                                n.video = {
                                    context: v.a,
                                    durationSeconds: Math.floor(e.rtb.video.duration_ms / 1e3),
                                    dealTier: d
                                }, n.vastUrl = e.rtb.video.asset_url;
                                break;

                              case g.b:
                                n.adResponse = r, n.adResponse.ad = n.adResponse.ads[0], n.adResponse.ad.video = n.adResponse.ad.rtb.video, 
                                n.vastXml = e.rtb.video.content, e.renderer_url && (i = I()(t.bids, function(e) {
                                    return e.bidId === r.uuid;
                                }), s = _.deepAccess(i, "renderer.options"), n.renderer = function(e, r) {
                                    var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, a = f.a.install({
                                        id: r.renderer_id,
                                        url: r.renderer_url,
                                        config: t,
                                        loaded: !1,
                                        adUnitCode: e
                                    });
                                    try {
                                        a.setRender(F);
                                    } catch (e) {
                                        _.logWarn("Prebid Error calling setRender on renderer", e);
                                    }
                                    return a.setEventHandlers({
                                        impression: function() {
                                            return _.logMessage("AppNexus outstream video impression event");
                                        },
                                        loaded: function() {
                                            return _.logMessage("AppNexus outstream video loaded event");
                                        },
                                        ended: function() {
                                            _.logMessage("AppNexus outstream renderer video event"), document.querySelector("#".concat(e)).style.display = "none";
                                        }
                                    }), a;
                                }(n.adUnitCode, e, s));
                                break;

                              case g.a:
                                n.vastUrl = e.notify_url + "&redir=" + encodeURIComponent(e.rtb.video.asset_url);
                            }
                        } else if (e.rtb[v.c]) {
                            var p = e.rtb[v.c], u = e.viewability.config.replace("src=", "data-src="), c = p.javascript_trackers;
                            null == c ? c = u : _.isStr(c) ? c = [ c, u ] : c.push(u), n[v.c] = {
                                title: p.title,
                                body: p.desc,
                                body2: p.desc2,
                                cta: p.ctatext,
                                rating: p.rating,
                                sponsoredBy: p.sponsored,
                                privacyLink: p.privacy_link,
                                address: p.address,
                                downloads: p.downloads,
                                likes: p.likes,
                                phone: p.phone,
                                price: p.price,
                                salePrice: p.saleprice,
                                clickUrl: p.link.url,
                                displayUrl: p.displayurl,
                                clickTrackers: p.link.click_trackers,
                                impressionTrackers: p.impression_trackers,
                                javascriptTrackers: c
                            }, p.main_img && (n.native.image = {
                                url: p.main_img.url,
                                height: p.main_img.height,
                                width: p.main_img.width
                            }), p.icon && (n.native.icon = {
                                url: p.icon.url,
                                height: p.icon.height,
                                width: p.icon.width
                            });
                        } else {
                            b(n, {
                                width: e.rtb.banner.width,
                                height: e.rtb.banner.height,
                                ad: e.rtb.banner.content
                            });
                            try {
                                var l = e.rtb.trackers[0].impression_urls[0], m = _.createTrackPixelHtml(l);
                                n.ad += m;
                            } catch (e) {
                                _.logError("Error appending tracking pixel", e);
                            }
                        }
                        return n;
                    }(e, n, s)).mediaType = (a = n.ad_type) === v.d ? v.d : a === v.c ? v.c : v.b, o.push(t));
                }), e.debug && e.debug.debug_info && (t = (t = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info).replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""), 
                _.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"), 
                _.logMessage(t)), o;
                var a = "in response for ".concat(s.bidderCode, " adapter");
                return e && e.error && (a += ": ".concat(e.error)), _.logError(a), o;
            },
            getMappingFileInfo: function() {
                return {
                    url: "https://acdn.adnxs.com/prebid/appnexus-mapping/mappings.json",
                    refreshInDays: 2
                };
            },
            getUserSyncs: function(e) {
                if (e.iframeEnabled) return [ {
                    type: "iframe",
                    url: "https://acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html"
                } ];
            },
            transformBidParams: function(t, e) {
                return t = _.convertTypes({
                    member: "string",
                    invCode: "string",
                    placementId: "number",
                    keywords: _.transformBidderParamKeywords,
                    publisherId: "number"
                }, t), e && (t.use_pmt_rule = "boolean" == typeof t.usePaymentRule && t.usePaymentRule, 
                t.usePaymentRule && delete t.usePaymentRule, j(t.keywords) && t.keywords.forEach(P), 
                Object.keys(t).forEach(function(e) {
                    var r = _.convertCamelToUnderscore(e);
                    r !== e && (t[r] = t[e], delete t[e]);
                })), t;
            },
            onBidWon: function(e) {
                e.native && function(e) {
                    var r = function(e) {
                        var r;
                        if (_.isStr(e) && U(e)) r = e; else if (_.isArray(e)) for (var t = 0; t < e.length; t++) {
                            var a = e[t];
                            U(a) && (r = a);
                        }
                        return r;
                    }(e.native.javascriptTrackers);
                    if (r) for (var t = "pbjs_adid=" + e.adId + ";pbjs_auc=" + e.adUnitCode, a = function(e) {
                        var r = e.indexOf('src="') + 5, t = e.indexOf('"', r);
                        return e.substring(r, t);
                    }(r), n = a.replace("dom_id=%native_dom_id%", t), i = document.getElementsByTagName("iframe"), s = !1, o = 0; o < i.length && !s; o++) {
                        var d = i[o];
                        try {
                            var p = d.contentDocument || d.contentWindow.document;
                            if (p) for (var u = p.getElementsByTagName("script"), c = 0; c < u.length && !s; c++) {
                                var l = u[c];
                                l.getAttribute("data-src") == a && (l.setAttribute("src", n), l.setAttribute("data-src", ""), 
                                l.removeAttribute && l.removeAttribute("data-src"), s = !0);
                            }
                        } catch (e) {
                            if (!(e instanceof DOMException && "SecurityError" === e.name)) throw e;
                        }
                    }
                }(e);
            }
        };
        function j(e) {
            return _.isArray(e) && 0 < e.length;
        }
        function P(e) {
            j(e.value) && "" === e.value[0] && delete e.value;
        }
        function U(e) {
            var r = e.match(h), t = null != r && 1 <= r.length, a = e.match(E), n = null != a && 1 <= a.length;
            return e.startsWith(m) && n && t;
        }
        function N(t) {
            var e, r, n, i, a = {};
            a.sizes = q(t.sizes), a.primary_size = a.sizes[0], a.ad_types = [], a.uuid = t.bidId, 
            t.params.placementId ? a.id = parseInt(t.params.placementId, 10) : a.code = t.params.invCode, 
            a.allow_smaller_sizes = t.params.allowSmallerSizes || !1, a.use_pmt_rule = t.params.usePaymentRule || !1, 
            a.prebid = !0, a.disable_psa = !0, t.params.reserve && (a.reserve = t.params.reserve), 
            t.params.position && (a.position = {
                above: 1,
                below: 2
            }[t.params.position] || 0), t.params.trafficSourceCode && (a.traffic_source_code = t.params.trafficSourceCode), 
            t.params.privateSizes && (a.private_sizes = q(t.params.privateSizes)), t.params.supplyType && (a.supply_type = t.params.supplyType), 
            t.params.pubClick && (a.pubclick = t.params.pubClick), t.params.extInvCode && (a.ext_inv_code = t.params.extInvCode), 
            t.params.publisherId && (a.publisher_id = parseInt(t.params.publisherId, 10)), t.params.externalImpId && (a.external_imp_id = t.params.externalImpId), 
            _.isEmpty(t.params.keywords) || (0 < (e = _.transformBidderParamKeywords(t.params.keywords)).length && e.forEach(P), 
            a.keywords = e), t.mediaType !== v.c && !_.deepAccess(t, "mediaTypes.".concat(v.c)) || (a.ad_types.push(v.c), 
            0 === a.sizes.length && (a.sizes = q([ 1, 1 ])), t.nativeParams && (n = t.nativeParams, 
            i = {}, Object.keys(n).forEach(function(e) {
                var r, t = l[e] && l[e].serverName || l[e] || e, a = l[e] && l[e].requiredParams;
                i[t] = b({}, a, n[e]), t !== l.image.serverName && t !== l.icon.serverName || !i[t].sizes || (r = i[t].sizes, 
                (_.isArrayOfNums(r) || _.isArray(r) && 0 < r.length && r.every(function(e) {
                    return _.isArrayOfNums(e);
                })) && (i[t].sizes = q(i[t].sizes))), t === l.privacyLink && (i.privacy_supported = !0);
            }), r = i, a[v.c] = {
                layouts: [ r ]
            }));
            var s = _.deepAccess(t, "mediaTypes.".concat(v.d)), o = _.deepAccess(t, "mediaTypes.video.context");
            a.hb_source = s && "adpod" === o ? 7 : 1, t.mediaType !== v.d && !s || a.ad_types.push(v.d), 
            (t.mediaType === v.d || s && "outstream" !== o) && (a.require_asset_url = !0), t.params.video && (a.video = {}, 
            Object.keys(t.params.video).filter(function(e) {
                return x()(u, e);
            }).forEach(function(e) {
                switch (e) {
                  case "context":
                  case "playback_method":
                    var r = t.params.video[e], r = _.isArray(r) ? r[0] : r;
                    a.video[e] = c[e][r];
                    break;

                  default:
                    a.video[e] = t.params.video[e];
                }
            })), t.renderer && (a.video = b({}, a.video, {
                custom_renderer_present: !0
            }));
            var d = I()(p.a.getAdUnits(), function(e) {
                return t.transactionId === e.transactionId;
            });
            return d && d.mediaTypes && d.mediaTypes.banner && a.ad_types.push(v.b), 0 === a.ad_types.length && delete a.ad_types, 
            a;
        }
        function q(e) {
            var r = [], t = {};
            if (_.isArray(e) && 2 === e.length && !_.isArray(e[0])) t.width = parseInt(e[0], 10), 
            t.height = parseInt(e[1], 10), r.push(t); else if ("object" === s(e)) for (var a = 0; a < e.length; a++) {
                var n = e[a];
                (t = {}).width = parseInt(n[0], 10), t.height = parseInt(n[1], 10), r.push(t);
            }
            return r;
        }
        function M(e) {
            return !!e.params.user;
        }
        function z(e) {
            return !!parseInt(e.params.member, 10);
        }
        function B(e) {
            if (e.params) return !!e.params.app;
        }
        function D(e) {
            return e.params && e.params.app ? !!e.params.app.id : !!e.params.app;
        }
        function V(e) {
            return !!e.debug;
        }
        function J(e) {
            return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === v.a;
        }
        function W(e, r, t) {
            _.isEmpty(e.video) && (e.video = {}), e.video[r] = t;
        }
        function F(e) {
            var r, t;
            r = e.adUnitCode, (t = document.getElementById(r).querySelectorAll("div[id^='google_ads']"))[0] && t[0].style.setProperty("display", "none"), 
            e.renderer.push(function() {
                window.ANOutstreamVideo.renderAd({
                    tagId: e.adResponse.tag_id,
                    sizes: [ e.getSize().split("x") ],
                    targetId: e.adUnitCode,
                    uuid: e.adResponse.uuid,
                    adResponse: e.adResponse,
                    rendererOptions: e.renderer.getConfig()
                }, function(e, r, t) {
                    e.renderer.handleVideoEvent({
                        id: r,
                        eventName: t
                    });
                }.bind(null, e));
            });
        }
        Object(y.registerBidder)(R);
    }
}, [ 286 ]);

pbjsChunk([ 242 ], {
    356: function(n, t, e) {
        n.exports = e(357);
    },
    357: function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), e.d(t, "userCMP", function() {
            return l;
        }), e.d(t, "consentTimeout", function() {
            return u;
        }), e.d(t, "allowAuction", function() {
            return p;
        }), e.d(t, "gdprScope", function() {
            return g;
        }), e.d(t, "staticConsentData", function() {
            return m;
        }), t.requestBidsHook = M, t.resetConsentData = function() {
            C = void 0, l = void 0, w = 0, a.gdprDataHandler.setConsentData(null);
        }, t.setConsentConfig = _;
        var d = e(0), o = e(3), a = e(7), i = e(12), s = e.n(i), r = e(358), f = e.n(r);
        function c(n) {
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                return typeof n;
            } : function(n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
            })(n);
        }
        var l, u, p, g, m, C, b = "iab", v = 1e4, y = !0, w = 0, D = !1, k = {
            iab: function(o, e, s) {
                function n(n, t) {
                    d.logInfo("Received a response from CMP", n), t ? ("tcloaded" === n.eventStatus || "useractioncomplete" === n.eventStatus || "cmpuishown" === n.eventStatus && n.tcString && !0 === n.purposeOneTreatment) && o(n, s) : e("CMP unable to register callback function.  Please check CMP setup.", s);
                }
                var t = function() {
                    var t = {};
                    function e() {
                        t.getConsentData && t.getVendorConsents && (d.logInfo("Received all requested responses from CMP", t), 
                        o(t, s));
                    }
                    return {
                        consentDataCallback: function(n) {
                            t.getConsentData = n, e();
                        },
                        vendorConsentsCallback: function(n) {
                            t.getVendorConsents = n, e();
                        }
                    };
                }(), u = {}, a = function() {
                    for (var n, t, e = window; !n; ) {
                        try {
                            if ("function" == typeof e.__tcfapi || "function" == typeof e.__cmp) {
                                t = "function" == typeof e.__tcfapi ? (w = 2, e.__tcfapi) : (w = 1, e.__cmp), n = e;
                                break;
                            }
                        } catch (n) {}
                        try {
                            if (e.frames.__tcfapiLocator) {
                                w = 2, n = e;
                                break;
                            }
                        } catch (n) {}
                        try {
                            if (e.frames.__cmpLocator) {
                                w = 1, n = e;
                                break;
                            }
                        } catch (n) {}
                        if (e === window.top) break;
                        e = e.parent;
                    }
                    return {
                        cmpFrame: n,
                        cmpFunction: t
                    };
                }(), i = a.cmpFrame, r = a.cmpFunction;
                if (!i) return e("CMP not found.", s);
                d.isFn(r) ? (d.logInfo("Detected CMP API is directly accessible, calling it now..."), 
                1 === w ? (r("getConsentData", null, t.consentDataCallback), r("getVendorConsents", null, t.vendorConsentsCallback)) : 2 === w && r("addEventListener", w, n)) : 1 === w && window.$sf && window.$sf.ext && "function" == typeof window.$sf.ext.cmp ? (d.logInfo("Detected Prebid.js is encased in a SafeFrame and CMP is registered, calling it now..."), 
                c("getConsentData", t.consentDataCallback), c("getVendorConsents", t.vendorConsentsCallback)) : (d.logInfo("Detected CMP is outside the current iframe where Prebid.js is located, calling it now..."), 
                1 === w ? (l("getConsentData", i, t.consentDataCallback), l("getVendorConsents", i, t.vendorConsentsCallback)) : 2 === w && l("addEventListener", i, n));
                function c(o, a) {
                    var n, t = s.adUnits, e = 1, i = 1;
                    Array.isArray(t) && 0 < t.length && (e = (n = d.getAdUnitSizes(t[0]))[0][0], i = n[0][1]), 
                    window.$sf.ext.register(e, i, function(n, t) {
                        var e;
                        "cmpReturn" === n && (e = "getConsentData" === o ? t.vendorConsentData : t.vendorConsents, 
                        a(e));
                    }), window.$sf.ext.cmp(o);
                }
                function l(n, l, t) {
                    var d = 2 === w ? "__tcfapi" : "__cmp";
                    window[d] = function(n, t, e) {
                        var o, a, i, s = Math.random() + "", r = "".concat(d, "Call"), c = (i = {
                            command: n,
                            parameter: t,
                            callId: s
                        }, (a = r) in (o = {}) ? Object.defineProperty(o, a, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : o[a] = i, o);
                        1 !== w && (c[r].version = w), u[s] = e, l.postMessage(c, "*");
                    }, window.addEventListener("message", function(n) {
                        var t = "".concat(d, "Return"), e = "string" == typeof n.data && f()(n.data, t) ? JSON.parse(n.data) : n.data;
                        {
                            var o;
                            e[t] && e[t].callId && (o = e[t], void 0 !== u[o.callId] && u[o.callId](o.returnValue, o.success));
                        }
                    }, !1), window[d](n, null, t);
                }
            },
            static: function(n, t, e) {
                n(m, e);
            }
        };
        function M(n, t) {
            var e = {
                context: this,
                args: [ t ],
                nextFn: n,
                adUnits: t.adUnits || pbjs.adUnits,
                bidsBackHandler: t.bidsBackHandler,
                haveExited: !1,
                timer: null
            };
            return C ? (d.logInfo("User consent information already known.  Pulling internally stored information..."), 
            A(null, e)) : s()(Object.keys(k), l) ? (k[l].call(this, h, P, e), void (e.haveExited || (0 === u ? h(void 0, e) : e.timer = setTimeout(function(n) {
                P("CMP workflow exceeded timeout threshold.", n);
            }.bind(null, e), u)))) : (d.logWarn("CMP framework (".concat(l, ") is not a supported framework.  Aborting consentManagement module and resuming auction.")), 
            e.nextFn.apply(e.context, e.args));
        }
        function h(e, n) {
            "static" === l && 2 === (w = e.getConsentData ? 1 : e.getTCData ? 2 : 0) && (e = e.getTCData);
            var t = 1 === w ? function(n) {
                var t = n && n.getConsentData && n.getConsentData.gdprApplies;
                return !("boolean" == typeof t && (!0 !== t || d.isStr(n.getConsentData.consentData) && d.isPlainObject(n.getVendorConsents) && 1 < Object.keys(n.getVendorConsents).length));
            } : 2 === w ? function() {
                var n = e && "boolean" == typeof e.gdprApplies ? e.gdprApplies : g, t = e && e.tcString;
                return !("boolean" == typeof n && (!0 !== n || d.isStr(t)));
            } : null;
            d.isFn(t) ? t(e) ? P("CMP returned unexpected value during lookup process.", n, e) : (clearTimeout(n.timer), 
            S(e), A(null, n)) : P("Unable to derive CMP version to process data.  Consent object does not conform to TCF v1 or v2 specs.", n, e);
        }
        function P(n, t, e) {
            clearTimeout(t.timer), p && S(void 0), A(n, t, e);
        }
        function S(n) {
            (C = 1 === w ? {
                consentString: n ? n.getConsentData.consentData : void 0,
                vendorData: n ? n.getVendorConsents : void 0,
                gdprApplies: n ? n.getConsentData.gdprApplies : g
            } : {
                consentString: n ? n.tcString : void 0,
                vendorData: n || void 0,
                gdprApplies: n && "boolean" == typeof n.gdprApplies ? n.gdprApplies : g
            }).apiVersion = w, a.gdprDataHandler.setConsentData(C);
        }
        function A(n, t, e) {
            var o, a, i;
            !1 === t.haveExited && (t.haveExited = !0, o = t.context, a = t.args, i = t.nextFn, 
            n ? p ? (d.logWarn(n + " Resuming auction without consent data as per consentManagement config.", e), 
            i.apply(o, a)) : (d.logError(n + " Canceling auction as per consentManagement config.", e), 
            "function" == typeof t.bidsBackHandler ? t.bidsBackHandler() : d.logError("Error executing bidsBackHandler")) : i.apply(o, a));
        }
        function _(n) {
            (n = n.gdpr || n.usp ? n.gdpr : n) && "object" === c(n) ? (d.isStr(n.cmpApi) ? l = n.cmpApi : (l = b, 
            d.logInfo("consentManagement config did not specify cmp.  Using system default setting (".concat(b, ")."))), 
            d.isNumber(n.timeout) ? u = n.timeout : (u = v, d.logInfo("consentManagement config did not specify timeout.  Using system default setting (".concat(v, ")."))), 
            "boolean" == typeof n.allowAuctionWithoutConsent ? p = n.allowAuctionWithoutConsent : (p = y, 
            d.logInfo("consentManagement config did not specify allowAuctionWithoutConsent.  Using system default setting (".concat(y, ")."))), 
            g = !0 === n.defaultGdprScope, d.logInfo("consentManagement module has been activated..."), 
            "static" === l && (d.isPlainObject(n.consentData) ? (m = n.consentData, u = 0) : d.logError("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), 
            D || pbjs.requestBids.before(M, 50), D = !0) : d.logWarn("consentManagement config not defined, exiting consent manager");
        }
        o.b.getConfig("consentManagement", function(n) {
            return _(n.consentManagement);
        });
    }
}, [ 356 ]);

pbjsChunk([ 0 ], {
    378: function(t, e, r) {
        t.exports = r(379);
    },
    379: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), r.d(e, "ADAPTER_VERSION", function() {
            return c;
        }), r.d(e, "PROFILE_ID_PUBLISHERTAG", function() {
            return v;
        }), r.d(e, "spec", function() {
            return s;
        }), e.tryGetCriteoFastBid = x;
        var a = r(39), i = r(1), d = r(3), h = r(2), f = r(0), o = r(11), l = r.n(o), p = r(380), n = (r.n(p), 
        r(9));
        function u() {
            return (u = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
                }
                return t;
            }).apply(this, arguments);
        }
        var c = 31, m = "criteo", v = 185, y = Object(n.b)(91), b = 65537, g = "ztQYwCE5BU7T9CDM5he6rKoabstXRmkzx54zFPZkWbK530dwtLBDeaWBMxHBUT55CYyboR/EZ4efghPi3CoNGfGWezpjko9P6p2EwGArtHEeS4slhu/SpSIFMjG6fdrpRoNuIAMhq1Z+Pr/+HOd1pThFKeGFr2/NhtAg+TXAzaU=", s = {
            code: m,
            gvlid: 91,
            supportedMediaTypes: [ h.b, h.d, h.c ],
            isBidRequestValid: function(t) {
                return !(!t || !t.params || !t.params.zoneId && !t.params.networkId) && !(R(t) && !function(e) {
                    var r = !0;
                    if ([ "mimes", "playerSize", "maxduration", "protocols", "api" ].forEach(function(t) {
                        void 0 === f.deepAccess(e, "mediaTypes.video." + t) && (r = !1, f.logError("Criteo Bid Adapter: mediaTypes.video." + t + " is required"));
                    }), [ "skip", "placement", "playbackmethod" ].forEach(function(t) {
                        void 0 === f.deepAccess(e, "params.video." + t) && (r = !1, f.logError("Criteo Bid Adapter: params.video." + t + " is required"));
                    }), r) {
                        if ("instream" == e.mediaTypes.video.context && 1 === e.params.video.placement) return !0;
                        if ("outstream" == e.mediaTypes.video.context && 1 !== e.params.video.placement) return !0;
                    }
                    return !1;
                }(t));
            },
            buildRequests: function(t, e) {
                var r, i, o, n, s;
                if (u(e, {
                    publisherExt: d.b.getConfig("fpd.context"),
                    userExt: d.b.getConfig("fpd.user"),
                    ceh: d.b.getConfig("criteo.ceh")
                }), T() || (window.Criteo = window.Criteo || {}, window.Criteo.usePrebidEvents = !1, 
                x(), setTimeout(function() {
                    Object(a.a)("https://static.criteo.net/js/ld/publishertag.prebid.js", m);
                }, e.timeout)), s = T() ? (r = new Criteo.PubTag.Adapters.Prebid(v, c, t, e, "3.24.0"), 
                i = d.b.getConfig("enableSendAllBids"), r.setEnableSendAllBids && "function" == typeof r.setEnableSendAllBids && "boolean" == typeof i && r.setEnableSendAllBids(i), 
                n = r.buildCdbUrl(), r.buildCdbRequest()) : (n = function(t) {
                    var e = "https://bidder.criteo.com/cdb";
                    e += "?profileId=207", e += "&av=" + String(c), e += "&wv=" + encodeURIComponent("3.24.0"), 
                    e += "&cb=" + String(Math.floor(99999999999 * Math.random())), t.amp && (e += "&im=1");
                    t.debug && (e += "&debug=1");
                    t.noLog && (e += "&nolog=1");
                    return e;
                }(o = function(t, e) {
                    var r = "";
                    e && e.refererInfo && (r = e.refererInfo.referer);
                    var i = f.parseUrl(r).search, o = {
                        url: r,
                        debug: "1" === i.pbt_debug,
                        noLog: "1" === i.pbt_nolog,
                        amp: !1
                    };
                    return t.forEach(function(t) {
                        "amp" === t.params.integrationMode && (o.amp = !0);
                    }), o;
                }(t, e)), function(t, e, r) {
                    var o, i = {
                        publisher: {
                            url: t.url,
                            ext: r.publisherExt
                        },
                        slots: e.map(function(t) {
                            o = t.params.networkId || o;
                            var e, r, i = {
                                impid: t.adUnitCode,
                                transactionid: t.transactionId,
                                auctionId: t.auctionId
                            };
                            return t.params.zoneId && (i.zoneid = t.params.zoneId), t.fpd && t.fpd.context && (i.ext = t.fpd.context), 
                            t.params.ext && (i.ext = u({}, i.ext, t.params.ext)), t.params.publisherSubId && (i.publishersubid = t.params.publisherSubId), 
                            t.params.nativeCallback || f.deepAccess(t, "mediaTypes.".concat(h.c)) ? (i.native = !0, 
                            (e = t).nativeParams && (e.nativeParams.image && !0 !== e.nativeParams.image.sendId || e.nativeParams.icon && !0 !== e.nativeParams.icon.sendId || e.nativeParams.clickUrl && !0 !== e.nativeParams.clickUrl.sendId || e.nativeParams.displayUrl && !0 !== e.nativeParams.displayUrl.sendId || e.nativeParams.privacyLink && !0 !== e.nativeParams.privacyLink.sendId || e.nativeParams.privacyIcon && !0 !== e.nativeParams.privacyIcon.sendId) && f.logWarn("Criteo: all native assets containing URL should be sent as placeholders with sendId(icon, image, clickUrl, displayUrl, privacyLink, privacyIcon)"), 
                            i.sizes = A(C(t), I)) : i.sizes = A(C(t), S), R(t) && ((r = {
                                playersizes: A(f.deepAccess(t, "mediaTypes.video.playerSize"), S),
                                mimes: t.mediaTypes.video.mimes,
                                protocols: t.mediaTypes.video.protocols,
                                maxduration: t.mediaTypes.video.maxduration,
                                api: t.mediaTypes.video.api
                            }).skip = t.params.video.skip, r.placement = t.params.video.placement, r.minduration = t.params.video.minduration, 
                            r.playbackmethod = t.params.video.playbackmethod, r.startdelay = t.params.video.startdelay, 
                            i.video = r), i;
                        })
                    };
                    o && (i.publisher.networkid = o);
                    i.user = {
                        ext: r.userExt
                    }, r && r.ceh && (i.user.ceh = r.ceh);
                    r && r.gdprConsent && (i.gdprConsent = {}, void 0 !== r.gdprConsent.gdprApplies && (i.gdprConsent.gdprApplies = !!r.gdprConsent.gdprApplies), 
                    i.gdprConsent.version = r.gdprConsent.apiVersion, void 0 !== r.gdprConsent.consentString && (i.gdprConsent.consentData = r.gdprConsent.consentString));
                    r && r.uspConsent && (i.user.uspIab = r.uspConsent);
                    return i;
                }(o, t, e))) return {
                    method: "POST",
                    url: n,
                    data: s,
                    bidRequests: t
                };
            },
            interpretResponse: function(t, u) {
                var e = t.body || t;
                if (T()) {
                    var r = Criteo.PubTag.Adapters.Prebid.GetAdapter(u);
                    if (r) return r.interpretResponse(e, u);
                }
                var c = [];
                return e && e.slots && f.isArray(e.slots) && e.slots.forEach(function(e) {
                    var t, r, i, o, n, s = l()(u.bidRequests, function(t) {
                        return t.adUnitCode === e.impid && (!t.params.zoneId || parseInt(t.params.zoneId) === e.zoneid);
                    }), a = s.bidId, p = {
                        requestId: a,
                        adId: e.bidId || f.getUniqueIdentifierStr(),
                        cpm: e.cpm,
                        currency: e.currency,
                        netRevenue: !0,
                        ttl: e.ttl || 60,
                        creativeId: a,
                        width: e.width,
                        height: e.height,
                        dealId: e.dealCode
                    };
                    if (e.native) if (s.params.nativeCallback) p.ad = (r = a, i = e.native, o = s.params.nativeCallback, 
                    n = "criteo_prebid_native_slots", window[n] = window[n] || {}, window[n][r] = {
                        callback: o,
                        payload: i
                    }, '\n<script type="text/javascript">\nfor (var i = 0; i < 10; ++i) {\n var slots = window.parent.'.concat(n, ';\n  if(!slots){continue;}\n  var responseSlot = slots["').concat(r, '"];\n  responseSlot.callback(responseSlot.payload);\n  break;\n}\n<\/script>')); else {
                        if (!0 === d.b.getConfig("enableSendAllBids")) return;
                        p.native = {
                            title: (t = e.native).products[0].title,
                            body: t.products[0].description,
                            sponsoredBy: t.advertiser.description,
                            icon: t.advertiser.logo,
                            image: t.products[0].image,
                            clickUrl: t.products[0].click_url,
                            privacyLink: t.privacy.optout_click_url,
                            privacyIcon: t.privacy.optout_image_url,
                            cta: t.products[0].call_to_action,
                            price: t.products[0].price,
                            impressionTrackers: t.impression_pixels.map(function(t) {
                                return t.url;
                            })
                        }, p.mediaType = h.c;
                    } else e.video ? (p.vastUrl = e.displayurl, p.mediaType = h.d) : p.ad = e.creative;
                    c.push(p);
                }), c;
            },
            onTimeout: function(t) {
                T() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidTimeout();
            },
            onBidWon: function(t) {
                T() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidWon(t);
            },
            onSetTargeting: function(t) {
                T() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleSetTargeting(t);
            }
        };
        function T() {
            return "undefined" != typeof Criteo && Criteo.PubTag && Criteo.PubTag.Adapters && Criteo.PubTag.Adapters.Prebid;
        }
        function C(t) {
            return f.deepAccess(t, "mediaTypes.banner.sizes") || t.sizes;
        }
        function A(t, e) {
            return Array.isArray(t[0]) ? t.map(function(t) {
                return e(t);
            }) : [ e(t) ];
        }
        function S(t) {
            return t[0] + "x" + t[1];
        }
        function I(t) {
            return void 0 === t[0] && void 0 === t[1] ? "2x2" : t[0] + "x" + t[1];
        }
        function R(t) {
            return void 0 !== f.deepAccess(t, "params.video") && void 0 !== f.deepAccess(t, "mediaTypes.video");
        }
        function x() {
            try {
                var t, e, r, i, o, n = "criteo_fast_bid", s = "// Hash: ", a = y.getDataFromLocalStorage(n);
                null !== a && (t = a.indexOf("\n"), (e = a.substr(0, t).trim()).substr(0, s.length) !== s ? (f.logWarn("No hash found in FastBid"), 
                y.removeDataFromLocalStorage(n)) : (r = e.substr(s.length), i = a.substr(t + 1), 
                Object(p.verify)(i, r, g, b) ? (f.logInfo("Using Criteo FastBid"), (o = document.createElement("script")).type = "text/javascript", 
                o.text = i, f.insertElement(o)) : (f.logWarn("Invalid Criteo FastBid found"), y.removeDataFromLocalStorage(n))));
            } catch (t) {}
        }
        Object(i.registerBidder)(s);
    },
    380: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(381), p = r(382);
        e.verify = function(t, e, r, i) {
            var o = new a.BigInteger(a.b64toHex(e)), n = new a.BigInteger(a.b64toHex(r)), s = o.modPowInt(i, n);
            return a.removeExtraSymbols(s.toHexString()) === p.Sha256.hash(t);
        };
    },
    381: function(t, e, r) {
        "use strict";
        var i;
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = (g.prototype.toHexString = function() {
            if (this.s < 0) return "-" + this.negate().toHexString();
            var t, e = !1, r = "", i = this.t, o = this.DB - i * this.DB % 4;
            if (0 < i--) for (o < this.DB && 0 < (t = this[i] >> o) && (e = !0, r = c(t)); 0 <= i; ) o < 4 ? (t = (this[i] & (1 << o) - 1) << 4 - o, 
            t |= this[--i] >> (o += this.DB - 4)) : (t = this[i] >> (o -= 4) & 15, o <= 0 && (o += this.DB, 
            --i)), 0 < t && (e = !0), e && (r += c(t));
            return e ? r : "0";
        }, g.prototype.fromHexString = function(t) {
            if (null !== t) {
                this.t = 0, this.s = 0;
                for (var e = t.length, r = !1, i = 0; 0 <= --e; ) {
                    var o = p(t, e);
                    o < 0 ? "-" == t.charAt(e) && (r = !0) : (r = !1, 0 == i ? this[this.t++] = o : i + 4 > this.DB ? (this[this.t - 1] |= (o & (1 << this.DB - i) - 1) << i, 
                    this[this.t++] = o >> this.DB - i) : this[this.t - 1] |= o << i, (i += 4) >= this.DB && (i -= this.DB));
                }
                this.clamp(), r && g.ZERO.subTo(this, this);
            }
        }, g.prototype.negate = function() {
            var t = T();
            return g.ZERO.subTo(this, t), t;
        }, g.prototype.abs = function() {
            return this.s < 0 ? this.negate() : this;
        }, g.prototype.mod = function(t) {
            var e = T();
            return this.abs().divRemTo(t, null, e), this.s < 0 && 0 < e.compareTo(g.ZERO) && t.subTo(e, e), 
            e;
        }, g.prototype.copyTo = function(t) {
            for (var e = this.t - 1; 0 <= e; --e) t[e] = this[e];
            t.t = this.t, t.s = this.s;
        }, g.prototype.lShiftTo = function(t, e) {
            for (var r = t % this.DB, i = this.DB - r, o = (1 << i) - 1, n = Math.floor(t / this.DB), s = this.s << r & this.DM, a = this.t - 1; 0 <= a; --a) e[a + n + 1] = this[a] >> i | s, 
            s = (this[a] & o) << r;
            for (a = n - 1; 0 <= a; --a) e[a] = 0;
            e[n] = s, e.t = this.t + n + 1, e.s = this.s, e.clamp();
        }, g.prototype.invDigit = function() {
            if (this.t < 1) return 0;
            var t = this[0];
            if (0 == (1 & t)) return 0;
            var e = 3 & t;
            return 0 < (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) ? this.DV - e : -e;
        }, g.prototype.dlShiftTo = function(t, e) {
            for (var r = this.t - 1; 0 <= r; --r) e[r + t] = this[r];
            for (r = t - 1; 0 <= r; --r) e[r] = 0;
            e.t = this.t + t, e.s = this.s;
        }, g.prototype.squareTo = function(t) {
            for (var e = this.abs(), r = t.t = 2 * e.t; 0 <= --r; ) t[r] = 0;
            for (r = 0; r < e.t - 1; ++r) {
                var i = e.am(r, e[r], t, 2 * r, 0, 1);
                (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, i, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV, 
                t[r + e.t + 1] = 1);
            }
            0 < t.t && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)), t.s = 0, t.clamp();
        }, g.prototype.multiplyTo = function(t, e) {
            var r = this.abs(), i = t.abs(), o = r.t;
            for (e.t = o + i.t; 0 <= --o; ) e[o] = 0;
            for (o = 0; o < i.t; ++o) e[o + r.t] = r.am(0, i[o], e, o, 0, r.t);
            e.s = 0, e.clamp(), this.s != t.s && g.ZERO.subTo(e, e);
        }, g.prototype.divRemTo = function(t, e, r) {
            var i = t.abs();
            if (!(i.t <= 0)) {
                var o = this.abs();
                if (o.t < i.t) return null != e && e.fromHexString("0"), void (null != r && this.copyTo(r));
                null == r && (r = T());
                var n = T(), s = this.s, a = t.s, p = this.DB - C(i[i.t - 1]);
                0 < p ? (i.lShiftTo(p, n), o.lShiftTo(p, r)) : (i.copyTo(n), o.copyTo(r));
                var u = n.t, c = n[u - 1];
                if (0 != c) {
                    var d = c * (1 << this.F1) + (1 < u ? n[u - 2] >> this.F2 : 0), h = this.FV / d, f = (1 << this.F1) / d, l = 1 << this.F2, m = r.t, v = m - u, y = null == e ? T() : e;
                    for (n.dlShiftTo(v, y), 0 <= r.compareTo(y) && (r[r.t++] = 1, r.subTo(y, r)), g.ONE.dlShiftTo(u, y), 
                    y.subTo(n, n); n.t < u; ) n[n.t++] = 0;
                    for (;0 <= --v; ) {
                        var b = r[--m] == c ? this.DM : Math.floor(r[m] * h + (r[m - 1] + l) * f);
                        if ((r[m] += n.am(0, b, r, v, 0, u)) < b) for (n.dlShiftTo(v, y), r.subTo(y, r); r[m] < --b; ) r.subTo(y, r);
                    }
                    null != e && (r.drShiftTo(u, e), s != a && g.ZERO.subTo(e, e)), r.t = u, r.clamp(), 
                    0 < p && r.rShiftTo(p, r), s < 0 && g.ZERO.subTo(r, r);
                }
            }
        }, g.prototype.rShiftTo = function(t, e) {
            e.s = this.s;
            var r = Math.floor(t / this.DB);
            if (r >= this.t) e.t = 0; else {
                var i = t % this.DB, o = this.DB - i, n = (1 << i) - 1;
                e[0] = this[r] >> i;
                for (var s = r + 1; s < this.t; ++s) e[s - r - 1] |= (this[s] & n) << o, e[s - r] = this[s] >> i;
                0 < i && (e[this.t - r - 1] |= (this.s & n) << o), e.t = this.t - r, e.clamp();
            }
        }, g.prototype.drShiftTo = function(t, e) {
            for (var r = t; r < this.t; ++r) e[r - t] = this[r];
            e.t = Math.max(this.t - t, 0), e.s = this.s;
        }, g.prototype.subTo = function(t, e) {
            for (var r = 0, i = 0, o = Math.min(t.t, this.t); r < o; ) i += this[r] - t[r], 
            e[r++] = i & this.DM, i >>= this.DB;
            if (t.t < this.t) {
                for (i -= t.s; r < this.t; ) i += this[r], e[r++] = i & this.DM, i >>= this.DB;
                i += this.s;
            } else {
                for (i += this.s; r < t.t; ) i -= t[r], e[r++] = i & this.DM, i >>= this.DB;
                i -= t.s;
            }
            e.s = i < 0 ? -1 : 0, i < -1 ? e[r++] = this.DV + i : 0 < i && (e[r++] = i), e.t = r, 
            e.clamp();
        }, g.prototype.clamp = function() {
            for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t; ) --this.t;
        }, g.prototype.modPowInt = function(t, e) {
            var r = new (t < 256 || e.isEven() ? d : f)(e);
            return this.exp(t, r);
        }, g.prototype.exp = function(t, e) {
            if (4294967295 < t || t < 1) return g.ONE;
            var r, i = T(), o = T(), n = e.convert(this), s = C(t) - 1;
            for (n.copyTo(i); 0 <= --s; ) e.sqrTo(i, o), 0 < (t & 1 << s) ? e.mulTo(o, n, i) : (r = i, 
            i = o, o = r);
            return e.revert(i);
        }, g.prototype.isEven = function() {
            return 0 == (0 < this.t ? 1 & this[0] : this.s);
        }, g.prototype.compareTo = function(t) {
            var e = this.s - t.s;
            if (0 != e) return e;
            var r = this.t;
            if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;
            for (;0 <= --r; ) if (0 != (e = this[r] - t[r])) return e;
            return 0;
        }, g.prototype.am1 = function(t, e, r, i, o, n) {
            for (;0 <= --n; ) {
                var s = e * this[t++] + r[i] + o;
                o = Math.floor(s / 67108864), r[i++] = 67108863 & s;
            }
            return o;
        }, g.prototype.am2 = function(t, e, r, i, o, n) {
            for (var s = 32767 & e, a = e >> 15; 0 <= --n; ) {
                var p = 32767 & this[t], u = this[t++] >> 15, c = a * p + u * s;
                o = ((p = s * p + ((32767 & c) << 15) + r[i] + (1073741823 & o)) >>> 30) + (c >>> 15) + a * u + (o >>> 30), 
                r[i++] = 1073741823 & p;
            }
            return o;
        }, g.prototype.am3 = function(t, e, r, i, o, n) {
            for (var s = 16383 & e, a = e >> 14; 0 <= --n; ) {
                var p = 16383 & this[t], u = this[t++] >> 14, c = a * p + u * s;
                o = ((p = s * p + ((16383 & c) << 14) + r[i] + o) >> 28) + (c >> 14) + a * u, r[i++] = 268435455 & p;
            }
            return o;
        }, g);
        function g(t) {
            null !== t && this.fromHexString(t);
        }
        function T() {
            return new o(null);
        }
        function C(t) {
            var e, r = 1;
            return 0 != (e = t >>> 16) && (t = e, r += 16), 0 != (e = t >> 8) && (t = e, r += 8), 
            0 != (e = t >> 4) && (t = e, r += 4), 0 != (e = t >> 2) && (t = e, r += 2), 0 != (e = t >> 1) && (t = e, 
            r += 1), r;
        }
        e.BigInteger = o, e.nbi = T, e.nbits = C;
        for (var n = [], s = "0".charCodeAt(0), a = 0; a <= 9; ++a) n[s++] = a;
        for (s = "a".charCodeAt(0), a = 10; a < 36; ++a) n[s++] = a;
        for (s = "A".charCodeAt(0), a = 10; a < 36; ++a) n[s++] = a;
        function p(t, e) {
            var r = n[t.charCodeAt(e)];
            return null == r ? -1 : r;
        }
        e.intAt = p;
        var u = "0123456789abcdefghijklmnopqrstuvwxyz";
        function c(t) {
            return u.charAt(t);
        }
        e.int2char = c;
        e.b64toHex = function(t) {
            for (var e = "", r = 0, i = 0, o = 0; o < t.length && "=" != t.charAt(o); ++o) {
                var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t.charAt(o));
                n < 0 || (r = 0 == r ? (e += c(n >> 2), i = 3 & n, 1) : 1 == r ? (e += c(i << 2 | n >> 4), 
                i = 15 & n, 2) : 2 == r ? (e += c(i), e += c(n >> 2), i = 3 & n, 3) : (e += c(i << 2 | n >> 4), 
                e += c(15 & n), 0));
            }
            return 1 == r && (e += c(i << 2)), e;
        }, e.removeExtraSymbols = function(t) {
            return t.replace(/^1f+00/, "").replace("3031300d060960864801650304020105000420", "");
        };
        var d = (h.prototype.convert = function(t) {
            return t.s < 0 || 0 <= t.compareTo(this.m) ? t.mod(this.m) : t;
        }, h.prototype.revert = function(t) {
            return t;
        }, h.prototype.reduce = function(t) {
            t.divRemTo(this.m, null, t);
        }, h.prototype.mulTo = function(t, e, r) {
            t.multiplyTo(e, r), this.reduce(r);
        }, h.prototype.sqrTo = function(t, e) {
            t.squareTo(e), this.reduce(e);
        }, h);
        function h(t) {
            this.m = t;
        }
        var f = (l.prototype.convert = function(t) {
            var e = T();
            return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && 0 < e.compareTo(o.ZERO) && this.m.subTo(e, e), 
            e;
        }, l.prototype.revert = function(t) {
            var e = T();
            return t.copyTo(e), this.reduce(e), e;
        }, l.prototype.reduce = function(t) {
            for (;t.t <= this.mt2; ) t[t.t++] = 0;
            for (var e = 0; e < this.m.t; ++e) {
                var r = 32767 & t[e], i = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                for (t[r = e + this.m.t] += this.m.am(0, i, t, e, 0, this.m.t); t[r] >= t.DV; ) t[r] -= t.DV, 
                t[++r]++;
            }
            t.clamp(), t.drShiftTo(this.m.t, t), 0 <= t.compareTo(this.m) && t.subTo(this.m, t);
        }, l.prototype.mulTo = function(t, e, r) {
            t.multiplyTo(e, r), this.reduce(r);
        }, l.prototype.sqrTo = function(t, e) {
            t.squareTo(e), this.reduce(e);
        }, l);
        function l(t) {
            this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, 
            this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t;
        }
        function m(t) {
            var e = T();
            return e.fromHexString(t.toString()), e;
        }
        e.nbv = m, o.ZERO = m(0), o.ONE = m(1), i = "Microsoft Internet Explorer" == navigator.appName ? (o.prototype.am = o.prototype.am2, 
        30) : "Netscape" != navigator.appName ? (o.prototype.am = o.prototype.am1, 26) : (o.prototype.am = o.prototype.am3, 
        28), o.prototype.DB = i, o.prototype.DM = (1 << i) - 1, o.prototype.DV = 1 << i;
        o.prototype.FV = Math.pow(2, 52), o.prototype.F1 = 52 - i, o.prototype.F2 = 2 * i - 52;
    },
    382: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = (S.hash = function(t) {
            t = S.utf8Encode(t || "");
            for (var e = [ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ], r = [ 1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225 ], i = (t += String.fromCharCode(128)).length / 4 + 2, o = Math.ceil(i / 16), n = new Array(o), s = 0; s < o; s++) {
                n[s] = new Array(16);
                for (var a = 0; a < 16; a++) n[s][a] = t.charCodeAt(64 * s + 4 * a) << 24 | t.charCodeAt(64 * s + 4 * a + 1) << 16 | t.charCodeAt(64 * s + 4 * a + 2) << 8 | t.charCodeAt(64 * s + 4 * a + 3) << 0;
            }
            var p = 8 * (t.length - 1) / Math.pow(2, 32), u = 8 * (t.length - 1) >>> 0;
            for (n[o - 1][14] = Math.floor(p), n[o - 1][15] = u, s = 0; s < o; s++) {
                for (var c = new Array(64), d = 0; d < 16; d++) c[d] = n[s][d];
                for (d = 16; d < 64; d++) c[d] = S.q1(c[d - 2]) + c[d - 7] + S.q0(c[d - 15]) + c[d - 16] >>> 0;
                for (var h = r[0], f = r[1], l = r[2], m = r[3], v = r[4], y = r[5], b = r[6], g = r[7], d = 0; d < 64; d++) {
                    var T = g + S.z1(v) + S.Ch(v, y, b) + e[d] + c[d], C = S.z0(h) + S.Maj(h, f, l);
                    g = b, b = y, y = v, v = m + T >>> 0, m = l, l = f, f = h, h = T + C >>> 0;
                }
                r[0] = r[0] + h >>> 0, r[1] = r[1] + f >>> 0, r[2] = r[2] + l >>> 0, r[3] = r[3] + m >>> 0, 
                r[4] = r[4] + v >>> 0, r[5] = r[5] + y >>> 0, r[6] = r[6] + b >>> 0, r[7] = r[7] + g >>> 0;
            }
            for (var A = new Array(r.length), g = 0; g < r.length; g++) A[g] = ("00000000" + r[g].toString(16)).slice(-8);
            return A.join("");
        }, S.utf8Encode = function(e) {
            try {
                return new TextEncoder().encode(e).reduce(function(t, e) {
                    return t + String.fromCharCode(e);
                }, "");
            } catch (t) {
                return unescape(encodeURIComponent(e));
            }
        }, S.ROTR = function(t, e) {
            return e >>> t | e << 32 - t;
        }, S.z0 = function(t) {
            return S.ROTR(2, t) ^ S.ROTR(13, t) ^ S.ROTR(22, t);
        }, S.z1 = function(t) {
            return S.ROTR(6, t) ^ S.ROTR(11, t) ^ S.ROTR(25, t);
        }, S.q0 = function(t) {
            return S.ROTR(7, t) ^ S.ROTR(18, t) ^ t >>> 3;
        }, S.q1 = function(t) {
            return S.ROTR(17, t) ^ S.ROTR(19, t) ^ t >>> 10;
        }, S.Ch = function(t, e, r) {
            return t & e ^ ~t & r;
        }, S.Maj = function(t, e, r) {
            return t & e ^ t & r ^ e & r;
        }, S);
        function S() {}
        e.Sha256 = i;
    }
}, [ 378 ]);

pbjsChunk([ 132 ], {
    623: function(e, a, r) {
        e.exports = r(624);
    },
    624: function(e, a, r) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), r.d(a, "spec", function() {
            return n;
        });
        var T = r(0), i = r(1), S = r(2), Y = r(3);
        function D() {
            return (D = Object.assign || function(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var r = arguments[a];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                }
                return e;
            }).apply(this, arguments);
        }
        function P(e) {
            return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        var A = "PubMatic: ", R = "USD", x = void 0, N = {
            kadpageurl: "",
            gender: "",
            yob: "",
            lat: "",
            lon: "",
            wiid: "",
            profId: "",
            verId: ""
        }, s = {
            NUMBER: "number",
            STRING: "string",
            BOOLEAN: "boolean",
            ARRAY: "array",
            OBJECT: "object"
        }, t = {
            mimes: s.ARRAY,
            minduration: s.NUMBER,
            maxduration: s.NUMBER,
            startdelay: s.NUMBER,
            playbackmethod: s.ARRAY,
            api: s.ARRAY,
            protocols: s.ARRAY,
            w: s.NUMBER,
            h: s.NUMBER,
            battr: s.ARRAY,
            linearity: s.NUMBER,
            placement: s.NUMBER,
            minbitrate: s.NUMBER,
            maxbitrate: s.NUMBER
        }, c = {
            TITLE: {
                ID: 1,
                KEY: "title",
                TYPE: 0
            },
            IMAGE: {
                ID: 2,
                KEY: "image",
                TYPE: 0
            },
            ICON: {
                ID: 3,
                KEY: "icon",
                TYPE: 0
            },
            SPONSOREDBY: {
                ID: 4,
                KEY: "sponsoredBy",
                TYPE: 1
            },
            BODY: {
                ID: 5,
                KEY: "body",
                TYPE: 2
            },
            CLICKURL: {
                ID: 6,
                KEY: "clickUrl",
                TYPE: 0
            },
            VIDEO: {
                ID: 7,
                KEY: "video",
                TYPE: 0
            },
            EXT: {
                ID: 8,
                KEY: "ext",
                TYPE: 0
            },
            DATA: {
                ID: 9,
                KEY: "data",
                TYPE: 0
            },
            LOGO: {
                ID: 10,
                KEY: "logo",
                TYPE: 0
            },
            SPONSORED: {
                ID: 11,
                KEY: "sponsored",
                TYPE: 1
            },
            DESC: {
                ID: 12,
                KEY: "data",
                TYPE: 2
            },
            RATING: {
                ID: 13,
                KEY: "rating",
                TYPE: 3
            },
            LIKES: {
                ID: 14,
                KEY: "likes",
                TYPE: 4
            },
            DOWNLOADS: {
                ID: 15,
                KEY: "downloads",
                TYPE: 5
            },
            PRICE: {
                ID: 16,
                KEY: "price",
                TYPE: 6
            },
            SALEPRICE: {
                ID: 17,
                KEY: "saleprice",
                TYPE: 7
            },
            PHONE: {
                ID: 18,
                KEY: "phone",
                TYPE: 8
            },
            ADDRESS: {
                ID: 19,
                KEY: "address",
                TYPE: 9
            },
            DESC2: {
                ID: 20,
                KEY: "desc2",
                TYPE: 10
            },
            DISPLAYURL: {
                ID: 21,
                KEY: "displayurl",
                TYPE: 11
            },
            CTA: {
                ID: 22,
                KEY: "cta",
                TYPE: 12
            }
        }, l = {
            ICON: 1,
            LOGO: 2,
            IMAGE: 3
        }, m = [ {
            id: c.SPONSOREDBY.ID,
            required: !0,
            data: {
                type: 1
            }
        }, {
            id: c.TITLE.ID,
            required: !0
        }, {
            id: c.IMAGE.ID,
            required: !0
        } ], o = {
            1: "PMP",
            5: "PREF",
            6: "PMPG"
        }, k = 0, u = !1, d = {}, g = {};
        function z(e, a) {
            if (!T.isStr(a)) return a && T.logWarn(A + "Ignoring param key: " + e + ", expects string-value, found " + P(a)), 
            x;
            switch (e) {
              case "pmzoneid":
                return a.split(",").slice(0, 50).map(function(e) {
                    return e.trim();
                }).join();

              case "kadfloor":
              case "lat":
              case "lon":
                return parseFloat(a) || x;

              case "yob":
                return parseInt(a) || x;

              default:
                return a;
            }
        }
        function K(e) {
            var a;
            e.params.adUnit = "", e.params.adUnitIndex = "0", e.params.width = 0, e.params.height = 0, 
            e.params.adSlot = (a = e.params.adSlot, T.isStr(a) ? a.replace(/^\s+/g, "").replace(/\s+$/g, "") : "");
            var r = (i = e.params.adSlot).split(":"), i = r[0];
            if (2 == r.length && (e.params.adUnitIndex = r[1]), r = i.split("@"), e.params.adUnit = r[0], 
            1 < r.length) {
                if (2 != (r = r[1].split("x")).length) return void T.logWarn(A + "AdSlot Error: adSlot not in required format");
                e.params.width = parseInt(r[0], 10), e.params.height = parseInt(r[1], 10);
            } else if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(S.b) && e.mediaTypes.banner.hasOwnProperty("sizes")) {
                for (var t = 0, s = []; t < e.mediaTypes.banner.sizes.length; t++) 2 === e.mediaTypes.banner.sizes[t].length && s.push(e.mediaTypes.banner.sizes[t]);
                e.mediaTypes.banner.sizes = s, 1 <= e.mediaTypes.banner.sizes.length && (e.params.width = e.mediaTypes.banner.sizes[0][0], 
                e.params.height = e.mediaTypes.banner.sizes[0][1], e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1));
            }
        }
        function h(e) {
            var a, r = e.params.video;
            if (r !== x) {
                for (var i in a = {}, t) r.hasOwnProperty(i) && (a[i] = function(e, a, r) {
                    var i, t = "Ignoring param key: " + e + ", expects " + r + ", found " + P(a);
                    switch (r) {
                      case s.BOOLEAN:
                        i = T.isBoolean;
                        break;

                      case s.NUMBER:
                        i = T.isNumber;
                        break;

                      case s.STRING:
                        i = T.isStr;
                        break;

                      case s.ARRAY:
                        i = T.isArray;
                    }
                    return i(a) ? a : (T.logWarn(A + t), x);
                }(i, r[i], t[i]));
                T.isArray(e.mediaTypes.video.playerSize[0]) ? (a.w = parseInt(e.mediaTypes.video.playerSize[0][0], 10), 
                a.h = parseInt(e.mediaTypes.video.playerSize[0][1], 10)) : T.isNumber(e.mediaTypes.video.playerSize[0]) && (a.w = parseInt(e.mediaTypes.video.playerSize[0], 10), 
                a.h = parseInt(e.mediaTypes.video.playerSize[1], 10)), e.params.video.hasOwnProperty("skippable") && (a.ext = {
                    video_skippable: e.params.video.skippable ? 1 : 0
                });
            } else a = x, T.logWarn(A + "Error: Video config params missing for adunit: " + e.params.adUnit + " with mediaType set as video. Ignoring video impression in the adunit.");
            return a;
        }
        function C(e) {
            var a, r, i, t, s = {}, n = {}, o = e.hasOwnProperty("sizes") ? e.sizes : [], d = "", p = [], s = {
                id: e.bidId,
                tagid: e.params.adUnit || void 0,
                bidfloor: z("kadfloor", e.params.kadfloor),
                secure: 1,
                ext: {
                    pmZoneId: z("pmzoneid", e.params.pmzoneid)
                },
                bidfloorcur: e.params.currency ? z("currency", e.params.currency) : R
            };
            if (i = s, (t = e).params.deals && (T.isArray(t.params.deals) ? t.params.deals.forEach(function(e) {
                T.isStr(e) && 3 < e.length ? (i.pmp || (i.pmp = {
                    private_auction: 0,
                    deals: []
                }), i.pmp.deals.push({
                    id: e
                })) : T.logWarn(A + "Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: " + e);
            }) : T.logWarn(A + "Error: bid.params.deals should be an array of strings.")), e.hasOwnProperty("mediaTypes")) for (d in e.mediaTypes) switch (d) {
              case S.b:
                (a = function(e) {
                    var a, r = e.mediaTypes.banner.sizes, i = [];
                    if (r !== x && T.isArray(r)) {
                        if (a = {}, e.params.width || e.params.height) a.w = e.params.width, a.h = e.params.height; else {
                            if (0 === r.length) return a = x, T.logWarn(A + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), 
                            a;
                            a.w = parseInt(r[0][0], 10), a.h = parseInt(r[0][1], 10), r = r.splice(1, r.length - 1);
                        }
                        0 < r.length && (i = [], r.forEach(function(e) {
                            1 < e.length && i.push({
                                w: e[0],
                                h: e[1]
                            });
                        }), 0 < i.length && (a.format = i)), a.pos = 0, a.topframe = T.inIframe() ? 0 : 1;
                    } else T.logWarn(A + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), 
                    a = x;
                    return a;
                }(e)) !== x && (s.banner = a);
                break;

              case S.c:
                n.request = JSON.stringify(function(e) {
                    var a, r, i, t = {
                        assets: []
                    };
                    for (var s in e) {
                        if (e.hasOwnProperty(s)) {
                            var n = {};
                            if (!(t.assets && 0 < t.assets.length && t.assets.hasOwnProperty(s))) switch (s) {
                              case c.TITLE.KEY:
                                e[s].len || e[s].length ? n = {
                                    id: c.TITLE.ID,
                                    required: e[s].required ? 1 : 0,
                                    title: {
                                        len: e[s].len || e[s].length,
                                        ext: e[s].ext
                                    }
                                } : T.logWarn(A + "Error: Title Length is required for native ad: " + JSON.stringify(e));
                                break;

                              case c.IMAGE.KEY:
                                e[s].sizes && 0 < e[s].sizes.length ? n = {
                                    id: c.IMAGE.ID,
                                    required: e[s].required ? 1 : 0,
                                    img: {
                                        type: l.IMAGE,
                                        w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : x),
                                        h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : x),
                                        wmin: e[s].wmin || e[s].minimumWidth || (e[s].minsizes ? e[s].minsizes[0] : x),
                                        hmin: e[s].hmin || e[s].minimumHeight || (e[s].minsizes ? e[s].minsizes[1] : x),
                                        mimes: e[s].mimes,
                                        ext: e[s].ext
                                    }
                                } : T.logWarn(A + "Error: Image sizes is required for native ad: " + JSON.stringify(e));
                                break;

                              case c.ICON.KEY:
                                e[s].sizes && 0 < e[s].sizes.length ? n = {
                                    id: c.ICON.ID,
                                    required: e[s].required ? 1 : 0,
                                    img: {
                                        type: l.ICON,
                                        w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : x),
                                        h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : x)
                                    }
                                } : T.logWarn(A + "Error: Icon sizes is required for native ad: " + JSON.stringify(e));
                                break;

                              case c.VIDEO.KEY:
                                n = {
                                    id: c.VIDEO.ID,
                                    required: e[s].required ? 1 : 0,
                                    video: {
                                        minduration: e[s].minduration,
                                        maxduration: e[s].maxduration,
                                        protocols: e[s].protocols,
                                        mimes: e[s].mimes,
                                        ext: e[s].ext
                                    }
                                };
                                break;

                              case c.EXT.KEY:
                                n = {
                                    id: c.EXT.ID,
                                    required: e[s].required ? 1 : 0
                                };
                                break;

                              case c.LOGO.KEY:
                                n = {
                                    id: c.LOGO.ID,
                                    required: e[s].required ? 1 : 0,
                                    img: {
                                        type: l.LOGO,
                                        w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : x),
                                        h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : x)
                                    }
                                };
                                break;

                              case c.SPONSOREDBY.KEY:
                              case c.BODY.KEY:
                              case c.RATING.KEY:
                              case c.LIKES.KEY:
                              case c.DOWNLOADS.KEY:
                              case c.PRICE.KEY:
                              case c.SALEPRICE.KEY:
                              case c.PHONE.KEY:
                              case c.ADDRESS.KEY:
                              case c.DESC2.KEY:
                              case c.DISPLAYURL.KEY:
                              case c.CTA.KEY:
                                a = g[s], r = e, i = a.KEY, n = {
                                    id: a.ID,
                                    required: r[i].required ? 1 : 0,
                                    data: {
                                        type: a.TYPE,
                                        len: r[i].len,
                                        ext: r[i].ext
                                    }
                                };
                            }
                        }
                        n && n.id && (t.assets[t.assets.length] = n);
                    }
                    var o = m.length, d = 0;
                    return m.forEach(function(e) {
                        for (var a = t.assets.length, r = 0; r < a; r++) if (e.id == t.assets[r].id) {
                            d++;
                            break;
                        }
                    }), u = o != d, t;
                }(e.nativeParams)), u ? T.logWarn(A + "Error: Error in Native adunit " + e.params.adUnit + ". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.") : s.native = n;
                break;

              case S.d:
                (r = h(e)) !== x && (s.video = r);
            } else a = {
                pos: 0,
                w: e.params.width,
                h: e.params.height,
                topframe: T.inIframe() ? 0 : 1
            }, T.isArray(o) && 1 < o.length && ((o = o.splice(1, o.length - 1)).forEach(function(e) {
                p.push({
                    w: e[0],
                    h: e[1]
                });
            }), a.format = p), s.banner = a;
            return function(i, t) {
                var s = -1;
                "function" != typeof t.getFloor || Y.b.getConfig("pubmatic.disableFloors") || [ S.b, S.d, S.c ].forEach(function(e) {
                    var a, r;
                    i.hasOwnProperty(e) && ("object" !== P(a = t.getFloor({
                        currency: i.bidfloorcur,
                        mediaType: e,
                        size: "*"
                    })) || a.currency !== i.bidfloorcur || isNaN(parseInt(a.floor)) || (r = parseFloat(a.floor), 
                    s = -1 == s ? r : Math.min(r, s)));
                });
                i.bidfloor && (s = Math.max(s, i.bidfloor));
                i.bidfloor = !isNaN(s) && 0 < s ? s : x;
            }(s, e), s.hasOwnProperty(S.b) || s.hasOwnProperty(S.c) || s.hasOwnProperty(S.d) ? s : x;
        }
        T._each(c, function(e) {
            d[e.ID] = e.KEY;
        }), T._each(c, function(e) {
            g[e.KEY] = e;
        });
        var n = {
            code: "pubmatic",
            gvlid: 76,
            supportedMediaTypes: [ S.b, S.d, S.c ],
            isBidRequestValid: function(e) {
                return !(!e || !e.params) && (T.isStr(e.params.publisherId) ? !!(!e.params.hasOwnProperty("video") || e.params.video.hasOwnProperty("mimes") && T.isArray(e.params.video.mimes) && 0 !== e.params.video.mimes.length) || (T.logWarn(A + "Error: For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent for ad unit:" + JSON.stringify(e)), 
                !1) : (T.logWarn(A + "Error: publisherId is mandatory and cannot be numeric. Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)), 
                !1));
            },
            buildRequests: function(e, a) {
                var r;
                a && a.refererInfo && (r = a.refererInfo);
                var i, t, s, n, o, d, p, c, l, m, u, g, h, f, y, b, E = {
                    pageURL: (i = r) && i.referer ? i.referer : window.location.href,
                    refURL: window.document.referrer
                }, v = (t = E, {
                    id: "" + new Date().getTime(),
                    at: 1,
                    cur: [ R ],
                    imp: [],
                    site: {
                        page: t.pageURL,
                        ref: t.refURL,
                        publisher: {}
                    },
                    device: {
                        ua: navigator.userAgent,
                        js: 1,
                        dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                        h: screen.height,
                        w: screen.width,
                        language: navigator.language
                    },
                    user: {},
                    ext: {}
                }), I = "", w = [], O = [];
                if (e.forEach(function(e) {
                    var a;
                    (s = T.deepClone(e)).params.adSlot = s.params.adSlot || "", K(s), s.params.hasOwnProperty("video") || s.hasOwnProperty("mediaTypes") && s.mediaTypes.hasOwnProperty(S.c) || 0 !== s.params.width || 0 !== s.params.height ? (E.pubId = E.pubId || s.params.publisherId, 
                    (E = function(e, a) {
                        var r, i, t;
                        for (r in a.kadpageurl || (a.kadpageurl = a.pageURL), N) N.hasOwnProperty(r) && (i = e[r]) && ("object" === P(t = N[r]) && (i = t.f(i, a)), 
                        T.isStr(i) ? a[r] = i : T.logWarn(A + "Ignoring param : " + r + " with value : " + N[r] + ", expects string-value, found " + P(i)));
                        return a;
                    }(s.params, E)).transactionId = s.transactionId, "" === I ? I = s.params.currency || x : s.params.hasOwnProperty("currency") && I !== s.params.currency && T.logWarn(A + "Currency specifier ignored. Only one currency permitted."), 
                    s.params.currency = I, s.params.hasOwnProperty("dctr") && T.isStr(s.params.dctr) && w.push(s.params.dctr), 
                    s.params.hasOwnProperty("bcat") && T.isArray(s.params.bcat) && (O = O.concat(s.params.bcat)), 
                    (a = C(s)) && v.imp.push(a)) : T.logWarn(A + "Skipping the non-standard adslot: ", s.params.adSlot, JSON.stringify(s));
                }), 0 != v.imp.length) return v.site.publisher.id = E.pubId.trim(), k = E.pubId.trim(), 
                v.ext.wrapper = {}, v.ext.wrapper.profile = parseInt(E.profId) || x, v.ext.wrapper.version = parseInt(E.verId) || x, 
                v.ext.wrapper.wiid = E.wiid || x, v.ext.wrapper.wv = "prebid_prebid_3.24.0", v.ext.wrapper.transactionId = E.transactionId, 
                v.ext.wrapper.wp = "pbjs", v.user.gender = E.gender ? E.gender.trim() : x, v.user.geo = {}, 
                v.user.geo.lat = z("lat", E.lat), v.user.geo.lon = z("lon", E.lon), v.user.yob = z("yob", E.yob), 
                v.device.geo = v.user.geo, v.site.page = E.kadpageurl.trim() || v.site.page.trim(), 
                v.site.domain = (n = v.site.page, (o = document.createElement("a")).href = n, o.hostname), 
                "object" === P(Y.b.getConfig("device")) && (v.device = D(v.device, Y.b.getConfig("device"))), 
                T.deepSetValue(v, "source.tid", E.transactionId), -1 !== window.location.href.indexOf("pubmaticTest=true") && (v.test = 1), 
                e[0].schain && T.deepSetValue(v, "source.ext.schain", e[0].schain), a && a.gdprConsent && (T.deepSetValue(v, "user.ext.consent", a.gdprConsent.consentString), 
                T.deepSetValue(v, "regs.ext.gdpr", a.gdprConsent.gdprApplies ? 1 : 0)), a && a.uspConsent && T.deepSetValue(v, "regs.ext.us_privacy", a.uspConsent), 
                !0 === Y.b.getConfig("coppa") && T.deepSetValue(v, "regs.coppa", 1), d = v, c = e, 
                u = "", 0 < (p = w).length && (c[0].params.hasOwnProperty("dctr") ? (u = c[0].params.dctr, 
                T.isStr(u) && 0 < u.length ? (m = u.split("|"), u = "", m.forEach(function(e) {
                    u += 0 < e.length ? e.trim() + "|" : "";
                }), l = u.length, "|" === u.substring(l, l - 1) && (u = u.substring(0, l - 1)), 
                d.site.ext = {
                    key_val: u.trim()
                }) : T.logWarn(A + "Ignoring param : dctr with value : " + u + ", expects string-value, found empty or non-string value"), 
                1 < p.length && T.logWarn(A + "dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits")) : T.logWarn(A + "dctr value not found in 1st adunit, ignoring values from subsequent adunits")), 
                g = v, h = e, f = T.deepAccess(h, "0.userIdAsEids"), T.isArray(f) && 0 < f.length && T.deepSetValue(g, "user.eids", f), 
                y = v, 0 < (b = (b = O).filter(function(e) {
                    return "string" == typeof e || (T.logWarn(A + "bcat: Each category should be a string, ignoring category: " + e), 
                    !1);
                }).map(function(e) {
                    return e.trim();
                }).filter(function(e, a, r) {
                    return 3 < e.length ? r.indexOf(e) === a : void T.logWarn(A + "bcat: Each category should have a value of a length of more than 3 characters, ignoring category: " + e);
                })).length && (T.logWarn(A + "bcat: Selected: ", b), y.bcat = b), "object" === P(Y.b.getConfig("app")) && (v.app = Y.b.getConfig("app"), 
                v.app.publisher = v.site.publisher, v.app.ext = v.site.ext || x, delete v.site), 
                {
                    method: "POST",
                    url: "https://hbopenbid.pubmatic.com/translator?source=prebid-client",
                    data: JSON.stringify(v)
                };
            },
            interpretResponse: function(e, a) {
                var i = [], t = R, s = JSON.parse(a.data), n = s.site && s.site.ref ? s.site.ref : "";
                try {
                    e.body && e.body.seatbid && T.isArray(e.body.seatbid) && (t = e.body.cur || t, e.body.seatbid.forEach(function(e) {
                        e.bid && T.isArray(e.bid) && e.bid.forEach(function(a) {
                            var r = {
                                requestId: a.impid,
                                cpm: (parseFloat(a.price) || 0).toFixed(2),
                                width: a.w,
                                height: a.h,
                                creativeId: a.crid || a.id,
                                dealId: a.dealid,
                                currency: t,
                                netRevenue: !1,
                                ttl: 300,
                                referrer: n,
                                ad: a.adm,
                                pm_seat: e.seat || null,
                                pm_dspid: a.ext && a.ext.dspid ? a.ext.dspid : null
                            };
                            s.imp && 0 < s.imp.length && s.imp.forEach(function(e) {
                                if (a.impid === e.id) switch (!function(a, e) {
                                    var r = "", i = new RegExp(/VAST\s+version/);
                                    if (0 <= a.indexOf('span class="PubAPIAd"')) e.mediaType = S.b; else if (i.test(a)) e.mediaType = S.d; else try {
                                        (r = JSON.parse(a.replace(/\\/g, ""))) && r.native && (e.mediaType = S.c);
                                    } catch (e) {
                                        T.logWarn(A + "Error: Cannot parse native reponse for ad response: " + a);
                                    }
                                }(a.adm, r), r.mediaType) {
                                  case S.b:
                                    break;

                                  case S.d:
                                    r.width = a.hasOwnProperty("w") ? a.w : e.video.w, r.height = a.hasOwnProperty("h") ? a.h : e.video.h, 
                                    r.vastXml = a.adm;
                                    break;

                                  case S.c:
                                    !function(e, a) {
                                        if (a.native = {}, e.hasOwnProperty("adm")) {
                                            var r = "";
                                            try {
                                                r = JSON.parse(e.adm.replace(/\\/g, ""));
                                            } catch (e) {
                                                return T.logWarn(A + "Error: Cannot parse native reponse for ad response: " + a.adm);
                                            }
                                            if (r && r.native && r.native.assets && 0 < r.native.assets.length) {
                                                a.mediaType = S.c;
                                                for (var i = 0, t = r.native.assets.length; i < t; i++) switch (r.native.assets[i].id) {
                                                  case c.TITLE.ID:
                                                    a.native.title = r.native.assets[i].title && r.native.assets[i].title.text;
                                                    break;

                                                  case c.IMAGE.ID:
                                                    a.native.image = {
                                                        url: r.native.assets[i].img && r.native.assets[i].img.url,
                                                        height: r.native.assets[i].img && r.native.assets[i].img.h,
                                                        width: r.native.assets[i].img && r.native.assets[i].img.w
                                                    };
                                                    break;

                                                  case c.ICON.ID:
                                                    a.native.icon = {
                                                        url: r.native.assets[i].img && r.native.assets[i].img.url,
                                                        height: r.native.assets[i].img && r.native.assets[i].img.h,
                                                        width: r.native.assets[i].img && r.native.assets[i].img.w
                                                    };
                                                    break;

                                                  case c.SPONSOREDBY.ID:
                                                  case c.BODY.ID:
                                                  case c.LIKES.ID:
                                                  case c.DOWNLOADS.ID:
                                                  case c.PRICE:
                                                  case c.SALEPRICE.ID:
                                                  case c.PHONE.ID:
                                                  case c.ADDRESS.ID:
                                                  case c.DESC2.ID:
                                                  case c.CTA.ID:
                                                  case c.RATING.ID:
                                                  case c.DISPLAYURL.ID:
                                                    a.native[d[r.native.assets[i].id]] = r.native.assets[i].data && r.native.assets[i].data.value;
                                                }
                                                a.native.clickUrl = r.native.link && r.native.link.url, a.native.clickTrackers = r.native.link && r.native.link.clicktrackers || [], 
                                                a.native.impressionTrackers = r.native.imptrackers || [], a.native.jstracker = r.native.jstracker || [], 
                                                a.width || (a.width = 0), a.height || (a.height = 0);
                                            }
                                        }
                                    }(a, r);
                                }
                            }), a.ext && a.ext.deal_channel && (r.dealChannel = o[a.ext.deal_channel] || null), 
                            r.meta = {}, a.ext && a.ext.dspid && (r.meta.networkId = a.ext.dspid), a.ext && a.ext.advid && (r.meta.buyerId = a.ext.advid), 
                            a.adomain && 0 < a.adomain.length && (r.meta.clickUrl = a.adomain[0]), e.ext && e.ext.buyid && (r.adserverTargeting = {
                                hb_buyid_pubmatic: e.ext.buyid
                            }), i.push(r);
                        });
                    }));
                } catch (e) {
                    T.logError(e);
                }
                return i;
            },
            getUserSyncs: function(e, a, r, i) {
                var t = "" + k;
                return r && (t += "&gdpr=" + (r.gdprApplies ? 1 : 0), t += "&gdpr_consent=" + encodeURIComponent(r.consentString || "")), 
                i && (t += "&us_privacy=" + encodeURIComponent(i)), !0 === Y.b.getConfig("coppa") && (t += "&coppa=1"), 
                e.iframeEnabled ? [ {
                    type: "iframe",
                    url: "https://ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=" + t
                } ] : [ {
                    type: "image",
                    url: "https://image8.pubmatic.com/AdServer/ImgSync?p=" + t
                } ];
            },
            transformBidParams: function(e) {
                return T.convertTypes({
                    publisherId: "string",
                    adSlot: "string"
                }, e);
            }
        };
        Object(i.registerBidder)(n);
    }
}, [ 623 ]);

pbjsChunk([ 112 ], {
    677: function(e, r, t) {
        e.exports = t(678);
    },
    678: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "FASTLANE_ENDPOINT", function() {
            return o;
        }), t.d(r, "VIDEO_ENDPOINT", function() {
            return l;
        }), t.d(r, "SYNC_ENDPOINT", function() {
            return a;
        }), t.d(r, "spec", function() {
            return h;
        }), r.hasVideoMediaType = c, r.masSizeOrdering = S, r.determineRubiconVideoSizeId = C, 
        r.getPriceGranularity = j, r.hasValidVideoParams = k, r.hasValidSupplyChainParams = T, 
        r.encodeParam = w, r.resetUserSync = function() {
            R = !1;
        };
        var g = t(0), i = t(1), b = t(3), u = t(2);
        function v(e, r) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, r) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var t = [], i = !0, n = !1, o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (t.push(a.value), 
                    !r || t.length !== r); i = !0) ;
                } catch (e) {
                    n = !0, o = e;
                } finally {
                    try {
                        i || null == s.return || s.return();
                    } finally {
                        if (n) throw o;
                    }
                }
                return t;
            }(e, r) || function(e, r) {
                if (!e) return;
                if ("string" == typeof e) return n(e, r);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === t && e.constructor && (t = e.constructor.name);
                if ("Map" === t || "Set" === t) return Array.from(e);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return n(e, r);
            }(e, r) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function n(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var t = 0, i = new Array(r); t < r; t++) i[t] = e[t];
            return i;
        }
        function y() {
            return (y = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                }
                return e;
            }).apply(this, arguments);
        }
        function p(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t, e;
        }
        function x(e) {
            return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        var o = "https://fastlane.rubiconproject.com/a/api/fastlane.json", l = "https://prebid-server.rubiconproject.com/openrtb2/auction", a = "https://eus.rubiconproject.com/usync.html", d = {
            FASTLANE: {
                id: "dt.id",
                keyv: "dt.keyv",
                pref: "dt.pref"
            },
            PREBID_SERVER: {
                id: "id",
                keyv: "keyv"
            }
        }, f = {
            1: "468x60",
            2: "728x90",
            5: "120x90",
            8: "120x600",
            9: "160x600",
            10: "300x600",
            13: "200x200",
            14: "250x250",
            15: "300x250",
            16: "336x280",
            17: "240x400",
            19: "300x100",
            31: "980x120",
            32: "250x360",
            33: "180x500",
            35: "980x150",
            37: "468x400",
            38: "930x180",
            39: "750x100",
            40: "750x200",
            41: "750x300",
            42: "2x4",
            43: "320x50",
            44: "300x50",
            48: "300x300",
            53: "1024x768",
            54: "300x1050",
            55: "970x90",
            57: "970x250",
            58: "1000x90",
            59: "320x80",
            60: "320x150",
            61: "1000x1000",
            64: "580x500",
            65: "640x480",
            66: "930x600",
            67: "320x480",
            68: "1800x1000",
            72: "320x320",
            73: "320x160",
            78: "980x240",
            79: "980x300",
            80: "980x400",
            83: "480x300",
            85: "300x120",
            90: "548x150",
            94: "970x310",
            95: "970x100",
            96: "970x210",
            101: "480x320",
            102: "768x1024",
            103: "480x280",
            105: "250x800",
            108: "320x240",
            113: "1000x300",
            117: "320x100",
            125: "800x250",
            126: "200x600",
            144: "980x600",
            145: "980x150",
            152: "1000x250",
            156: "640x320",
            159: "320x250",
            179: "250x600",
            195: "600x300",
            198: "640x360",
            199: "640x200",
            213: "1030x590",
            214: "980x360",
            221: "1x1",
            229: "320x180",
            230: "2000x1400",
            232: "580x400",
            234: "6x6",
            251: "2x2",
            256: "480x820",
            257: "400x600",
            258: "500x200",
            259: "998x200",
            264: "970x1000",
            265: "1920x1080",
            274: "1800x200",
            278: "320x500",
            282: "320x400",
            288: "640x380"
        };
        g._each(f, function(e, r) {
            return f[e] = r;
        });
        var h = {
            code: "rubicon",
            gvlid: 52,
            supportedMediaTypes: [ u.b, u.d ],
            isBidRequestValid: function(e) {
                if ("object" !== x(e.params)) return !1;
                for (var r = 0, t = [ "accountId", "siteId", "zoneId" ]; r < t.length; r++) if (e.params[t[r]] = parseInt(e.params[t[r]]), 
                isNaN(e.params[t[r]])) return g.logError("Rubicon: wrong format of accountId or siteId or zoneId."), 
                !1;
                var i = m(e, !0);
                return !!i && ("video" !== i || k(e));
            },
            buildRequests: function(e, u) {
                var n, r = e.filter(function(e) {
                    return "video" === m(e);
                }).map(function(e) {
                    e.startTime = new Date().getTime();
                    var r, t, i = {
                        id: e.transactionId,
                        test: b.b.getConfig("debug") ? 1 : 0,
                        cur: [ "USD" ],
                        source: {
                            tid: e.transactionId
                        },
                        tmax: b.b.getConfig("TTL") || 1e3,
                        imp: [ {
                            exp: 300,
                            id: e.adUnitCode,
                            secure: 1,
                            ext: p({}, e.bidder, e.params),
                            video: g.deepAccess(e, "mediaTypes.video") || {}
                        } ],
                        ext: {
                            prebid: {
                                cache: {
                                    vastxml: {
                                        returnCreative: !1
                                    }
                                },
                                targeting: {
                                    includewinners: !0,
                                    includebidderkeys: !1,
                                    pricegranularity: j(b.b)
                                },
                                bidders: {
                                    rubicon: {
                                        integration: b.b.getConfig("rubicon.int_type") || "pbjs"
                                    }
                                }
                            }
                        }
                    };
                    "rubicon" !== e.bidder && (i.ext.prebid.aliases = p({}, e.bidder, "rubicon")), t = "function" != typeof e.getFloor || b.b.getConfig("rubicon.disableFloors") ? parseFloat(g.deepAccess(e, "params.floor")) : "object" !== x(r = e.getFloor({
                        currency: "USD",
                        mediaType: "video",
                        size: A(e, "video")
                    })) || "USD" !== r.currency || isNaN(parseInt(r.floor)) ? void 0 : parseFloat(r.floor), 
                    isNaN(t) || (i.imp[0].bidfloor = t), i.imp[0].ext[e.bidder].video.size_id = C(e), 
                    function(r, t, e) {
                        if (!r) return;
                        "object" === x(b.b.getConfig("app")) ? r.app = b.b.getConfig("app") : r.site = {
                            page: I(t, e)
                        };
                        "object" === x(b.b.getConfig("device")) && (r.device = b.b.getConfig("device"));
                        t.params.video.language && [ "site", "device" ].forEach(function(e) {
                            r[e] && (r[e].content = y({
                                language: t.params.video.language
                            }, r[e].content));
                        });
                    }(i, e, u), function(e, r) {
                        "object" === x(e.imp[0].video) && void 0 === e.imp[0].video.skip && (e.imp[0].video.skip = r.params.video.skip);
                        "object" === x(e.imp[0].video) && void 0 === e.imp[0].video.skipafter && (e.imp[0].video.skipafter = r.params.video.skipdelay);
                        "object" === x(e.imp[0].video) && void 0 === e.imp[0].video.pos && ("atf" === r.params.position ? e.imp[0].video.pos = 1 : "btf" === r.params.position && (e.imp[0].video.pos = 3));
                        var t = A(r, "video");
                        e.imp[0].video.w = t[0], e.imp[0].video.h = t[1];
                    }(i, e);
                    var n, o = _(e, "PREBID_SERVER");
                    o && g.deepSetValue(i, "user.ext.digitrust", o), u.gdprConsent && ("boolean" == typeof u.gdprConsent.gdprApplies && (n = u.gdprConsent.gdprApplies ? 1 : 0), 
                    g.deepSetValue(i, "regs.ext.gdpr", n), g.deepSetValue(i, "user.ext.consent", u.gdprConsent.consentString)), 
                    u.uspConsent && g.deepSetValue(i, "regs.ext.us_privacy", u.uspConsent), e.userId && "object" === x(e.userId) && (e.userId.tdid || e.userId.pubcid || e.userId.lipb || e.userId.idl_env) && (g.deepSetValue(i, "user.ext.eids", []), 
                    e.userId.tdid && i.user.ext.eids.push({
                        source: "adserver.org",
                        uids: [ {
                            id: e.userId.tdid,
                            ext: {
                                rtiPartner: "TDID"
                            }
                        } ]
                    }), e.userId.pubcid && i.user.ext.eids.push({
                        source: "pubcommon",
                        uids: [ {
                            id: e.userId.pubcid
                        } ]
                    }), e.userId.lipb && e.userId.lipb.lipbid && (i.user.ext.eids.push({
                        source: "liveintent.com",
                        uids: [ {
                            id: e.userId.lipb.lipbid
                        } ]
                    }), i.user.ext.tpid = {
                        source: "liveintent.com",
                        uid: e.userId.lipb.lipbid
                    }, Array.isArray(e.userId.lipb.segments) && e.userId.lipb.segments.length && g.deepSetValue(i, "rp.target.LIseg", e.userId.lipb.segments)), 
                    e.userId.idl_env && i.user.ext.eids.push({
                        source: "liveramp.com",
                        uids: [ {
                            id: e.userId.idl_env
                        } ]
                    })), !0 === b.b.getConfig("coppa") && g.deepSetValue(i, "regs.coppa", 1), e.schain && T(e.schain) && g.deepSetValue(i, "source.ext.schain", e.schain);
                    var a, s = y({}, e.params.inventory, b.b.getConfig("fpd.context")), d = y({}, e.params.visitor, b.b.getConfig("fpd.user"));
                    g.isEmpty(s) && g.isEmpty(d) || (a = {
                        bidders: [ u.bidderCode ],
                        config: {
                            fpd: {}
                        }
                    }, g.isEmpty(s) || (a.config.fpd.site = s), g.isEmpty(d) || (a.config.fpd.user = d), 
                    g.deepSetValue(i, "ext.prebid.bidderconfig.0", a));
                    var c = g.deepAccess(e, "fpd.context.pbAdSlot");
                    return "string" == typeof c && c && g.deepSetValue(i.imp[0].ext, "context.data.adslot", c), 
                    e.storedAuctionResponse && g.deepSetValue(i.imp[0], "ext.prebid.storedauctionresponse.id", e.storedAuctionResponse.toString()), 
                    g.deepSetValue(i.imp[0], "ext.prebid.auctiontimestamp", u.auctionStart), {
                        method: "POST",
                        url: l,
                        data: i,
                        bidRequest: e
                    };
                });
                return !0 !== b.b.getConfig("rubicon.singleRequest") ? r.concat(e.filter(function(e) {
                    return "banner" === m(e);
                }).map(function(e) {
                    var i = h.createSlotParams(e, u);
                    return {
                        method: "GET",
                        url: o,
                        data: h.getOrderedParams(i).reduce(function(e, r) {
                            var t = i[r];
                            return g.isStr(t) && "" !== t || g.isNumber(t) ? "".concat(e).concat(w(r, t), "&") : e;
                        }, "") + "slots=1&rand=".concat(Math.random()),
                        bidRequest: e
                    };
                })) : (n = e.filter(function(e) {
                    return "banner" === m(e);
                }).reduce(function(e, r) {
                    return (e[r.params.siteId] = e[r.params.siteId] || []).push(r), e;
                }, {}), r.concat(Object.keys(n).reduce(function(r, e) {
                    var t, i;
                    return t = n[e], i = 10, t.map(function(e, r) {
                        return r % i == 0 ? t.slice(r, r + i) : null;
                    }).filter(function(e) {
                        return e;
                    }).forEach(function(e) {
                        var i = h.combineSlotUrlParams(e.map(function(e) {
                            return h.createSlotParams(e, u);
                        }));
                        r.push({
                            method: "GET",
                            url: o,
                            data: h.getOrderedParams(i).reduce(function(e, r) {
                                var t = i[r];
                                return g.isStr(t) && "" !== t || g.isNumber(t) ? "".concat(e).concat(w(r, t), "&") : e;
                            }, "") + "slots=".concat(e.length, "&rand=").concat(Math.random()),
                            bidRequest: e
                        });
                    }), r;
                }, [])));
            },
            getOrderedParams: function(e) {
                var r = /^tg_v/, t = /^tg_i/, i = [ "account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "us_privacy", "rp_schain", "tpid_tdid", "tpid_liveintent.com", "tg_v.LIseg", "dt.id", "dt.keyv", "dt.pref", "rf", "p_geo.latitude", "p_geo.longitude", "kw" ].concat(Object.keys(e).filter(function(e) {
                    return r.test(e);
                })).concat(Object.keys(e).filter(function(e) {
                    return t.test(e);
                })).concat([ "tk_flint", "x_source.tid", "x_source.pchain", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key" ]);
                return i.concat(Object.keys(e).filter(function(e) {
                    return -1 === i.indexOf(e);
                }));
            },
            combineSlotUrlParams: function(n) {
                if (1 === n.length) return n[0];
                var i = n.reduce(function(r, t, i) {
                    return Object.keys(t).forEach(function(e) {
                        r.hasOwnProperty(e) || (r[e] = new Array(n.length)), r[e].splice(i, 1, t[e]);
                    }), r;
                }, {}), o = new RegExp("^([^;]*)(;\\1)+$");
                return Object.keys(i).forEach(function(e) {
                    var r = i[e].join(";"), t = r.match(o);
                    i[e] = t ? t[1] : r;
                }), i;
            },
            createSlotParams: function(e, r) {
                e.startTime = new Date().getTime();
                var t, i = e.params, n = A(e, "banner"), o = v(i.latLong || [], 2), a = o[0], s = o[1], d = b.b.getConfig("rubicon.int_type"), c = {
                    account_id: i.accountId,
                    site_id: i.siteId,
                    zone_id: i.zoneId,
                    size_id: n[0],
                    alt_size_ids: n.slice(1).join(",") || void 0,
                    rp_floor: .01 < (i.floor = parseFloat(i.floor)) ? i.floor : .01,
                    rp_secure: "1",
                    tk_flint: "".concat(d || "pbjs_lite", "_v3.24.0"),
                    "x_source.tid": e.transactionId,
                    "x_source.pchain": i.pchain,
                    p_screen_res: [ window.screen.width, window.screen.height ].join("x"),
                    tk_user_key: i.userId,
                    "p_geo.latitude": isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
                    "p_geo.longitude": isNaN(parseFloat(s)) ? void 0 : parseFloat(s).toFixed(4),
                    "tg_fl.eid": e.code,
                    rf: I(e, r)
                };
                "function" != typeof e.getFloor || b.b.getConfig("rubicon.disableFloors") || (t = e.getFloor({
                    currency: "USD",
                    mediaType: "banner",
                    size: "*"
                }), c.rp_hard_floor = "object" !== x(t) || "USD" !== t.currency || isNaN(parseInt(t.floor)) ? void 0 : t.floor), 
                c.p_pos = "atf" === i.position || "btf" === i.position ? i.position : "", e.userId && (e.userId.tdid && (c.tpid_tdid = e.userId.tdid), 
                e.userId.lipb && e.userId.lipb.lipbid && (c["tpid_liveintent.com"] = e.userId.lipb.lipbid, 
                Array.isArray(e.userId.lipb.segments) && e.userId.lipb.segments.length && (c["tg_v.LIseg"] = e.userId.lipb.segments.join(","))), 
                e.userId.idl_env && (c["tpid_liveramp.com"] = e.userId.idl_env)), r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (c.gdpr = Number(r.gdprConsent.gdprApplies)), 
                c.gdpr_consent = r.gdprConsent.consentString), r.uspConsent && (c.us_privacy = encodeURIComponent(r.uspConsent));
                var u = y({}, i.visitor, b.b.getConfig("fpd.user"));
                Object.keys(u).forEach(function(e) {
                    null != u[e] && "keywords" !== e && (c["tg_v.".concat(e)] = "object" !== x(u[e]) || Array.isArray(u[e]) ? u[e].toString() : JSON.stringify(u[e]));
                });
                var p = y({}, i.inventory, b.b.getConfig("fpd.context"));
                Object.keys(p).forEach(function(e) {
                    null != p[e] && "keywords" !== e && (c["tg_i.".concat(e)] = "object" !== x(p[e]) || Array.isArray(p[e]) ? p[e].toString() : JSON.stringify(p[e]));
                });
                var l = (i.keywords || []).concat(g.deepAccess(b.b.getConfig("fpd.user"), "keywords") || [], g.deepAccess(b.b.getConfig("fpd.context"), "keywords") || []);
                c.kw = Array.isArray(l) && l.length ? l.join(",") : "";
                var f = g.deepAccess(e, "fpd.context.pbAdSlot");
                "string" == typeof f && f && (c["tg_i.dfp_ad_unit_code"] = f.replace(/^\/+/, ""));
                var m = _(e, "FASTLANE");
                return y(c, m), !0 === b.b.getConfig("coppa") && (c.coppa = 1), e.schain && T(e.schain) && (c.rp_schain = h.serializeSupplyChain(e.schain)), 
                c;
            },
            serializeSupplyChain: function(e) {
                if (!T(e)) return "";
                var r = e.ver, t = e.complete, i = e.nodes;
                return "".concat(r, ",").concat(t, "!").concat(h.serializeSupplyChainNodes(i));
            },
            serializeSupplyChainNodes: function(e) {
                var t = [ "asi", "sid", "hp", "rid", "name", "domain" ];
                return e.map(function(r) {
                    return t.map(function(e) {
                        return encodeURIComponent(r[e] || "");
                    }).join(",");
                }).join("!");
            },
            interpretResponse: function(d, e) {
                var c = e.bidRequest;
                if (!(d = d.body) || "object" !== x(d)) return [];
                if (d.seatbid) {
                    var r = g.deepAccess(d, "ext.errors.rubicon");
                    Array.isArray(r) && 0 < r.length && g.logWarn("Rubicon: Error in video response");
                    var o = [];
                    return d.seatbid.forEach(function(n) {
                        (n.bid || []).forEach(function(e) {
                            var r = {
                                requestId: c.bidId,
                                currency: d.cur || "USD",
                                creativeId: e.crid,
                                cpm: e.price || 0,
                                bidderCode: n.seat,
                                ttl: 300,
                                netRevenue: !1 !== b.b.getConfig("rubicon.netRevenue"),
                                width: e.w || g.deepAccess(c, "mediaTypes.video.w") || g.deepAccess(c, "params.video.playerWidth"),
                                height: e.h || g.deepAccess(c, "mediaTypes.video.h") || g.deepAccess(c, "params.video.playerHeight")
                            };
                            e.id && (r.seatBidId = e.id), e.dealid && (r.dealId = e.dealid);
                            var t, i = g.deepAccess(d, "ext.responsetimemillis.rubicon");
                            c && i && (c.serverResponseTimeMs = i), g.deepAccess(e, "ext.prebid.type") === u.d ? (r.mediaType = u.d, 
                            (t = g.deepAccess(e, "ext.prebid.targeting")) && "object" === x(t) && (r.adserverTargeting = t), 
                            e.ext.prebid.cache && "object" === x(e.ext.prebid.cache.vastXml) && e.ext.prebid.cache.vastXml.cacheId && e.ext.prebid.cache.vastXml.url ? (r.videoCacheKey = e.ext.prebid.cache.vastXml.cacheId, 
                            r.vastUrl = e.ext.prebid.cache.vastXml.url) : t && t.hb_uuid && t.hb_cache_host && t.hb_cache_path && (r.videoCacheKey = t.hb_uuid, 
                            r.vastUrl = "https://".concat(t.hb_cache_host).concat(t.hb_cache_path, "?uuid=").concat(t.hb_uuid)), 
                            e.adm && (r.vastXml = e.adm), e.nurl && (r.vastUrl = e.nurl), !r.vastUrl && e.nurl && (r.vastUrl = e.nurl)) : g.logWarn("Rubicon: video response received non-video media type"), 
                            o.push(r);
                        });
                    }), o;
                }
                var t = d.ads;
                return "object" !== x(c) || Array.isArray(c) || "video" !== m(c) || "object" !== x(t) || (t = t[c.adUnitCode]), 
                !Array.isArray(t) || t.length < 1 ? [] : t.reduce(function(e, r, t) {
                    if ("ok" !== r.status) return e;
                    var i, n, o, a, s = Array.isArray(c) ? c[t] : c;
                    return s && "object" === x(s) ? (i = {
                        requestId: s.bidId,
                        currency: "USD",
                        creativeId: r.creative_id || "".concat(r.network || "", "-").concat(r.advertiser || ""),
                        cpm: r.cpm || 0,
                        dealId: r.deal,
                        ttl: 300,
                        netRevenue: !1 !== b.b.getConfig("rubicon.netRevenue"),
                        rubicon: {
                            advertiserId: r.advertiser,
                            networkId: r.network
                        },
                        meta: {
                            advertiserId: r.advertiser,
                            networkId: r.network
                        }
                    }, r.creative_type && (i.mediaType = r.creative_type), r.creative_type === u.d ? (i.width = s.params.video.playerWidth, 
                    i.height = s.params.video.playerHeight, i.vastUrl = r.creative_depot_url, i.impression_id = r.impression_id, 
                    i.videoCacheKey = r.impression_id) : (i.ad = (o = r.script, a = r.impression_id, 
                    "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(a, "'>\n<script type='text/javascript'>").concat(o, "<\/script>\n</div>\n</body>\n</html>")), 
                    n = v(f[r.size_id].split("x").map(function(e) {
                        return Number(e);
                    }), 2), i.width = n[0], i.height = n[1]), i.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce(function(e, r) {
                        return e[r.key] = r.values[0], e;
                    }, {
                        rpfl_elemid: s.adUnitCode
                    }), e.push(i)) : g.logError("Rubicon: bidRequest undefined at index position:".concat(t), c, d), 
                    e;
                }, []).sort(function(e, r) {
                    return (r.cpm || 0) - (e.cpm || 0);
                });
            },
            getUserSyncs: function(e, r, t, i) {
                if (!R && e.iframeEnabled) {
                    var n = "";
                    return t && "string" == typeof t.consentString && ("boolean" == typeof t.gdprApplies ? n += "?gdpr=".concat(Number(t.gdprApplies), "&gdpr_consent=").concat(t.consentString) : n += "?gdpr_consent=".concat(t.consentString)), 
                    i && (n += "".concat(n ? "&" : "?", "us_privacy=").concat(encodeURIComponent(i))), 
                    R = !0, {
                        type: "iframe",
                        url: a + n
                    };
                }
            },
            transformBidParams: function(e) {
                return g.convertTypes({
                    accountId: "number",
                    siteId: "number",
                    zoneId: "number"
                }, e);
            }
        };
        function _(e, r) {
            var t, i = 0 < arguments.length && void 0 !== e ? e : {}, n = 1 < arguments.length ? r : void 0;
            if (!n || !d[n]) return null;
            var o = d[n];
            var a = function() {
                var e = g.deepAccess(i, "userId.digitrustid.data");
                if (e) return e;
                var r = window.DigiTrust && (b.b.getConfig("digiTrustId") || window.DigiTrust.getUser({
                    member: "T9QSFKPDN9"
                }));
                return r && r.success && r.identity || null;
            }();
            if (!a || a.privacy && a.privacy.optout) return null;
            var s = (p(t = {}, o.id, a.id), p(t, o.keyv, a.keyv), t);
            return o.pref && (s[o.pref] = 0), s;
        }
        function I(e, r) {
            var t = b.b.getConfig("pageUrl"), t = e.params.referrer ? e.params.referrer : t || r.refererInfo.referer;
            return e.params.secure ? t.replace(/^http:/i, "https:") : t;
        }
        function A(e, r) {
            var t = e.params;
            if ("video" === r) {
                var i = [];
                return t.video && t.video.playerWidth && t.video.playerHeight ? i = [ t.video.playerWidth, t.video.playerHeight ] : Array.isArray(g.deepAccess(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? i = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (i = e.sizes[0]), 
                i;
            }
            var n = [];
            return Array.isArray(t.sizes) ? n = t.sizes : void 0 !== g.deepAccess(e, "mediaTypes.banner.sizes") ? n = s(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && 0 < e.sizes.length ? n = s(e.sizes) : g.logWarn("Rubicon: no sizes are setup or found"), 
            S(n);
        }
        function s(e) {
            return g.parseSizesInput(e).reduce(function(e, r) {
                var t = parseInt(f[r], 10);
                return t && e.push(t), e;
            }, []);
        }
        function c(e) {
            return "object" === x(g.deepAccess(e, "params.video")) && void 0 !== g.deepAccess(e, "mediaTypes.".concat(u.d));
        }
        function m(e, r) {
            var t = 1 < arguments.length && void 0 !== r && r;
            return c(e) ? -1 === [ "outstream", "instream" ].indexOf(g.deepAccess(e, "mediaTypes.".concat(u.d, ".context"))) ? void (t && g.logError("Rubicon: mediaTypes.video.context must be outstream or instream")) : A(e, "video").length < 2 ? void (t && g.logError("Rubicon: could not determine the playerSize of the video")) : (t && g.logMessage("Rubicon: making video request for adUnit", e.adUnitCode), 
            "video") : 0 === A(e, "banner").length ? void (t && g.logError("Rubicon: could not determine the sizes for banner request")) : (t && g.logMessage("Rubicon: making banner request for adUnit", e.adUnitCode), 
            "banner");
        }
        function S(e) {
            var n = [ 15, 2, 9 ];
            return e.sort(function(e, r) {
                var t = n.indexOf(e), i = n.indexOf(r);
                return -1 < t || -1 < i ? -1 === t ? 1 : -1 === i ? -1 : t - i : e - r;
            });
        }
        function C(e) {
            var r = parseInt(g.deepAccess(e, "params.video.size_id"));
            return isNaN(r) ? "outstream" === g.deepAccess(e, "mediaTypes.".concat(u.d, ".context")) ? 203 : 201 : r;
        }
        function j(e) {
            return {
                ranges: {
                    low: [ {
                        max: 5,
                        increment: .5
                    } ],
                    medium: [ {
                        max: 20,
                        increment: .1
                    } ],
                    high: [ {
                        max: 20,
                        increment: .01
                    } ],
                    auto: [ {
                        max: 5,
                        increment: .05
                    }, {
                        min: 5,
                        max: 10,
                        increment: .1
                    }, {
                        min: 10,
                        max: 20,
                        increment: .5
                    } ],
                    dense: [ {
                        max: 3,
                        increment: .01
                    }, {
                        min: 3,
                        max: 8,
                        increment: .05
                    }, {
                        min: 8,
                        max: 20,
                        increment: .5
                    } ],
                    custom: e.getConfig("customPriceBucket") && e.getConfig("customPriceBucket").buckets
                }[e.getConfig("priceGranularity")]
            };
        }
        function k(r) {
            var t = !0, e = Object.prototype.toString.call([]), i = Object.prototype.toString.call(0), n = {
                mimes: e,
                protocols: e,
                maxduration: i,
                linearity: i,
                api: e
            };
            return Object.keys(n).forEach(function(e) {
                Object.prototype.toString.call(g.deepAccess(r, "mediaTypes.video." + e)) !== n[e] && (t = !1, 
                g.logError("Rubicon: mediaTypes.video." + e + " is required and must be of type: " + n[e]));
            }), t;
        }
        function T(e) {
            var r = !1, t = [ "asi", "sid", "hp" ];
            return e.nodes && ((r = e.nodes.reduce(function(e, r) {
                return e ? t.every(function(e) {
                    return r[e];
                }) : e;
            }, !0)) || g.logError("Rubicon: required schain params missing")), r;
        }
        function w(e, r) {
            return "rp_schain" === e ? "rp_schain=".concat(r) : "".concat(e, "=").concat(encodeURIComponent(r));
        }
        var R = !1;
        Object(i.registerBidder)(h);
    }
}, [ 677 ]);

pbjs.processQueue();

var jppol = function(exports) {
    "use strict";
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
    var PrebidAnalytics = function() {
        function PrebidAnalytics(trackingOptions) {
            this.reCheckCount = 0;
            var trackingDefaults = {
                distribution: false,
                sampling: true
            };
            var options = __assign(__assign({}, trackingDefaults), trackingOptions);
            this.initializeTracking(options);
        }
        PrebidAnalytics.prototype.initializeTracking = function(options) {
            var _this = this;
            try {
                console.log("prebid: PrebidAnalytics arguments: trackingSampling " + options.sampling + " | trackingDistribution " + options.distribution);
                var win = window;
                var ga_1 = win.ga;
                var pbjs_1 = win.pbjs;
                this.reCheckInterval = setInterval(function() {
                    _this.reCheckCount++;
                    var prebidTrackerName = "";
                    clearInterval(_this.reCheckInterval);
                    if (typeof ga_1 !== "undefined" && typeof ga_1.getAll !== "undefined") {
                        var trackers = ga_1.getAll();
                        console.log("prebid: PrebidAnalytics: custom ga " + ga_1.getAll());
                        for (var _i = 0, trackers_1 = trackers; _i < trackers_1.length; _i++) {
                            var tracker = trackers_1[_i];
                            var trackerName = tracker.get("name") === "" ? "(unnamed)" : tracker.get("name");
                            if (tracker.get("trackingId") === options.id) {
                                prebidTrackerName = trackerName;
                            }
                        }
                        console.log("prebid: PrebidAnalytics custom ga, ready for tracking " + prebidTrackerName);
                        if (prebidTrackerName !== "") {
                            console.log("prebid: PrebidAnalytics custom ga, ready for tracking");
                            pbjs_1.que.push(function() {
                                var sampling = options.sampling ? .05 : 1;
                                var analyticsObject = [ {
                                    options: {
                                        enableDistribution: options.distribution,
                                        sampling: sampling,
                                        trackerName: prebidTrackerName
                                    },
                                    provider: "ga"
                                } ];
                                pbjs_1.enableAnalytics(analyticsObject);
                            });
                        }
                    } else if (_this.reCheckCount === 10) {
                        clearInterval(_this.reCheckInterval);
                        throw new Error("Prebid Analytics Checked 10 times with no luck");
                    }
                }, 300);
            } catch (err) {
                console.error("PrebidAnalytics " + err);
            }
        };
        return PrebidAnalytics;
    }();
    function BidderHandler(bannerObject) {
        try {
            var ebBidders = [];
            if (typeof bannerObject.adformMID !== "undefined") {
                ebBidders.push({
                    bidder: "adform",
                    params: {
                        mid: bannerObject.adformMID,
                        rcur: "USD"
                    }
                });
            }
            if (typeof bannerObject.appnexusID !== "undefined") {
                ebBidders.push({
                    bidder: "appnexus",
                    params: {
                        placementId: bannerObject.appnexusID
                    }
                });
            }
            if (typeof bannerObject.criteoId !== "undefined") {
                ebBidders.push({
                    bidder: "criteo",
                    params: {
                        zoneId: bannerObject.criteoId
                    }
                });
            }
            if (typeof bannerObject.pubmaticAdSlot !== "undefined") {
                var sizes = bannerObject.sizes;
                var sizesLength = sizes.length;
                for (var i = sizesLength; i--; ) {
                    var sizeJoint = sizes[i].join("x");
                    var PubMaticAdslotName = bannerObject.pubmaticAdSlot + "@" + sizeJoint;
                    ebBidders.push({
                        bidder: "pubmatic",
                        params: {
                            adSlot: PubMaticAdslotName,
                            publisherId: bannerObject.pubmaticPublisherId
                        }
                    });
                }
            }
            if (typeof bannerObject.rubiconZone !== "undefined") {
                ebBidders.push({
                    bidder: "rubicon",
                    params: {
                        accountId: bannerObject.rubiconAccountId,
                        siteId: bannerObject.rubiconSiteID,
                        zoneId: bannerObject.rubiconZone
                    }
                });
            }
            return ebBidders;
        } catch (err) {
            console.error("jppolPrebid BidderHandler", err);
        }
    }
    function AdUnitCreator(bannerContainer) {
        try {
            var adUnits = [];
            for (var _i = 0, bannerContainer_1 = bannerContainer; _i < bannerContainer_1.length; _i++) {
                var banner = bannerContainer_1[_i];
                var bidders = BidderHandler(banner);
                var adUnit = {
                    bids: bidders,
                    code: banner.targetId,
                    mediaTypes: {
                        banner: {
                            sizes: banner.sizes
                        }
                    }
                };
                if (banner.pubstackData) {
                    adUnit.pubstack = banner.pubstackData;
                    console.log("prebid: add pubstack data");
                }
                adUnits.push(adUnit);
            }
            return adUnits;
        } catch (err) {
            console.error("prebid", "biddersetup", err);
        }
    }
    var PREBIDAUCTION = "prebidAuction";
    var COMPLETED = "completed";
    var AuctionHandler = function() {
        function AuctionHandler(options) {
            var prebidDefault = {
                consentAllowAuction: true,
                consentTimeout: 3e6,
                debug: false,
                timeout: 700
            };
            var auctionSettings = __assign(__assign({}, prebidDefault), options);
            this.auction(auctionSettings);
        }
        AuctionHandler.prototype.auction = function(options) {
            try {
                var pbjs_1 = window.pbjs;
                console.log("prebid: window[PREBIDAUCTION][COMPLETED]", window[PREBIDAUCTION][COMPLETED]);
                if (window[PREBIDAUCTION][COMPLETED]) {
                    console.log("prebid: If the auction is completed, remove adunits");
                    pbjs_1.removeAdUnit();
                }
                window[PREBIDAUCTION][COMPLETED] = false;
                var adUnits_1 = AdUnitCreator(options.banners);
                if (options.tracking) {
                    new PrebidAnalytics(options.tracking);
                }
                pbjs_1.que.push(function() {
                    if (adUnits_1.length > 0) {
                        pbjs_1.setConfig({
                            bidderTimeout: options.timeout,
                            consentManagement: {
                                allowAuctionWithoutConsent: options.consentAllowAuction,
                                cmpApi: "iab",
                                timeout: options.consentTimeout
                            },
                            debug: options.debug,
                            priceGranularity: "high",
                            userSync: {
                                enabledBidders: [ "pubmatic" ],
                                iframeEnabled: true,
                                syncDelay: 6e3
                            }
                        });
                        pbjs_1.addAdUnits(adUnits_1);
                        console.log("prebid: pbjs.adUnits?", pbjs_1.adUnits);
                        pbjs_1.requestBids({
                            bidsBackHandler: function(bidResponse) {
                                console.log("prebid: bidsBackHandler", bidResponse);
                                var apntag = window.apntag;
                                if (typeof apntag !== "undefined") {
                                    pbjs_1.que.push(function() {
                                        console.log("prebid: bidsBackHandler adding apn to pbjs que");
                                        apntag.anq.push(function() {
                                            pbjs_1.setTargetingForAst();
                                            apntag.loadTags();
                                            console.log("prebid: bidsBackHandler pbjs.setTargetingForAst() && apntag.loadTags()");
                                        });
                                    });
                                }
                                if (typeof options.adserverCallback !== "undefined") {
                                    options.adserverCallback(bidResponse);
                                }
                                window[PREBIDAUCTION][COMPLETED] = true;
                            }
                        });
                    }
                });
            } catch (err) {
                console.error("AuctionHandler auction", err);
            }
        };
        return AuctionHandler;
    }();
    var _a;
    window[PREBIDAUCTION] = window[PREBIDAUCTION] || (_a = {}, _a[COMPLETED] = true, 
    _a);
    function prebid(options) {
        new AuctionHandler(options);
    }
    exports.prebid = prebid;
    return exports;
}({});