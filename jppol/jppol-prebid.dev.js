!function(u) {
    var s = window.pbjsChunk;
    window.pbjsChunk = function(e, t, n) {
        for (var r, i, o, a = 0, c = []; a < e.length; a++) i = e[a], d[i] && c.push(d[i][0]), 
        d[i] = 0;
        for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
        for (s && s(e, t, n); c.length; ) c.shift()();
        if (n) for (a = 0; a < n.length; a++) o = f(f.s = n[a]);
        return o;
    };
    var n = {}, d = {
        378: 0
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
    }, f(f.s = 940);
}({
    0: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "internal", function() {
            return k;
        }), n.d(t, "bind", function() {
            return N;
        }), t.getUniqueIdentifierStr = M, t.generateUUID = function e(t) {
            return t ? (t ^ q() >> t / 4).toString(16) : ([ 1e7 ] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e);
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
            return t && 0 < Object.getOwnPropertyNames(t).length ? pe(t).map(function(e) {
                return "".concat(e, "=").concat(encodeURIComponent(t[e]));
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
                if (n) for (var i in n) oe(n, i) && n[i].match(r) && t.push(n[i]);
            } else if ("object" === h(e)) {
                var o = e.length;
                if (0 < o) if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(G(e)); else for (var a = 0; a < o; a++) t.push(G(e[a]));
            }
            return t;
        }, t.parseGPTSingleSizeArray = G, t.parseGPTSingleSizeArrayToRtbSize = function(e) {
            if (W(e)) return {
                w: e[0],
                h: e[1]
            };
        }, t.getWindowTop = L, t.getWindowSelf = F, t.getWindowLocation = z, t.logMessage = V, 
        t.logInfo = H, t.logWarn = K, t.logError = J, t.hasConsoleLogger = function() {
            return _;
        }, t.debugTurnedOn = Q, t.createInvisibleIframe = function() {
            var e = document.createElement("iframe");
            return e.id = M(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", 
            e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", 
            e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", 
            e;
        }, t.getParameterByName = function(e) {
            return Ie(z().search)[e] || "";
        }, t.isA = $, t.isFn = X, t.isStr = Z, t.isArray = ee, t.isNumber = te, t.isPlainObject = ne, 
        t.isBoolean = function(e) {
            return $(e, C);
        }, t.isEmpty = re, t.isEmptyStr = function(e) {
            return Z(e) && (!e || 0 === e.length);
        }, t._each = ie, t.contains = function(e, t) {
            if (re(e)) return !1;
            if (X(e.indexOf)) return -1 !== e.indexOf(t);
            var n = e.length;
            for (;n--; ) if (e[n] === t) return !0;
            return !1;
        }, t._map = function(n, r) {
            if (re(n)) return [];
            if (X(n.map)) return n.map(r);
            var i = [];
            return ie(n, function(e, t) {
                i.push(r(e, t, n));
            }), i;
        }, t.hasOwn = oe, t.insertElement = ae, t.triggerPixel = ce, t.callBurl = function(e) {
            var t = e.source, n = e.burl;
            t === S.S2S.SRC && n && k.triggerPixel(n);
        }, t.insertHtmlIntoIframe = function(e) {
            if (!e) return;
            var t = document.createElement("iframe");
            t.id = M(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", t.marginWidth = "0", 
            t.marginHeight = "0", t.style.display = "none", t.style.height = "0px", t.style.width = "0px", 
            t.scrolling = "no", t.frameBorder = "0", t.allowtransparency = "true", k.insertElement(t, document, "body"), 
            t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close();
        }, t.insertUserSyncIframe = ue, t.createTrackPixelHtml = function(e) {
            if (!e) return "";
            var t = encodeURI(e), n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return n += '<img src="' + t + '"></div>';
        }, t.createTrackPixelIframeHtml = se, t.getValueString = de, t.uniques = fe, t.flatten = le, 
        t.getBidRequest = function(n, e) {
            return n ? (e.some(function(e) {
                var t = c()(e.bids, function(t) {
                    return [ "bidId", "adId", "bid_id" ].some(function(e) {
                        return t[e] === n;
                    });
                });
                return t && (r = t), t;
            }), r) : void 0;
            var r;
        }, t.getKeys = pe, t.getValue = ge, t.getKeyByValue = function(e, t) {
            for (var n in e) if (e.hasOwnProperty(n) && e[n] === t) return n;
        }, t.getBidderCodes = function() {
            return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map(function(e) {
                return e.bids.map(function(e) {
                    return e.bidder;
                }).reduce(le, []);
            }).reduce(le).filter(fe);
        }, t.isGptPubadsDefined = be, n.d(t, "getHighestCpm", function() {
            return ve;
        }), n.d(t, "getOldestHighestCpmBid", function() {
            return ye;
        }), n.d(t, "getLatestHighestCpmBid", function() {
            return he;
        }), t.shuffle = function(e) {
            var t = e.length;
            for (;0 < t; ) {
                var n = Math.floor(Math.random() * t), r = e[--t];
                e[t] = e[n], e[n] = r;
            }
            return e;
        }, t.adUnitsFilter = function(e, t) {
            return s()(e, t && t.adUnitCode);
        }, t.deepClone = Se, t.inIframe = function() {
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
        }, t.replaceClickThrough = function(e, t) {
            if (!e || !t || "string" != typeof t) return;
            return e.replace(/\${CLICKTHROUGH}/g, t);
        }, t.timestamp = function() {
            return new Date().getTime();
        }, t.getPerformanceNow = function() {
            return window.performance && window.performance.now && window.performance.now() || 0;
        }, t.hasDeviceAccess = function() {
            return !1 !== r.b.getConfig("deviceAccess");
        }, t.checkCookieSupport = Ae, t.delayExecution = function(e, t) {
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
                return y(e, v({}, t, n[t]));
            }, {});
        }, t.isValidMediaTypes = function(e) {
            var t = [ "banner", "native", "video" ];
            if (!Object.keys(e).every(function(e) {
                return s()(t, e);
            })) return !1;
            if (e.video && e.video.context) return s()([ "instream", "outstream", "adpod" ], e.video.context);
            return !0;
        }, t.getBidderRequest = function(e, t, n) {
            return c()(e, function(e) {
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
            }).reduce(le, []).filter(function(e) {
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
                return Ee(t, e);
            };
        }, t.isSlotMatchingAdUnitCode = Oe, t.getGptSlotInfoForAdUnitCode = function(e) {
            var t;
            be() && (t = c()(window.googletag.pubads().getSlots(), Oe(e)));
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
            return "object" === h(a) ? c.reduce(function(e, t, n) {
                if ("function" == typeof t) return e;
                var r = t, i = t.match(/^(.+?)\sas\s(.+?)$/i);
                i && (t = i[1], r = i[2]);
                var o = a[t];
                return "function" == typeof c[n + 1] && (o = c[n + 1](o, e)), void 0 !== o && (e[r] = o), 
                e;
            }, {}) : {};
        }, t.transformBidderParamKeywords = function(e) {
            var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords", i = [];
            return ie(e, function(e, t) {
                if (ee(e)) {
                    var n = [];
                    ie(e, function(e) {
                        !(e = de(r + "." + t, e)) && "" !== e || n.push(e);
                    }), e = n;
                } else {
                    if (!Z(e = de(r + "." + t, e))) return;
                    e = [ e ];
                }
                i.push({
                    key: t,
                    value: e
                });
            }), i;
        }, t.convertTypes = function(r, i) {
            return Object.keys(r).forEach(function(e) {
                var t, n;
                i[e] && (X(r[e]) ? i[e] = r[e](i[e]) : i[e] = (t = r[e], n = i[e], "string" === t ? n && n.toString() : "number" === t ? Number(n) : n), 
                isNaN(i[e]) && delete i.key);
            }), i;
        }, t.isArrayOfNums = function(e, t) {
            return ee(e) && (!t || e.length === t) && e.every(Te);
        }, t.fill = function(e, t) {
            for (var n = [], r = 0; r < t; r++) {
                var i = ne(e) ? Se(e) : e;
                n.push(i);
            }
            return n;
        }, t.chunk = function(e, t) {
            for (var n = [], r = 0; r < Math.ceil(e.length / t); r++) {
                var i = r * t, o = i + t;
                n.push(e.slice(i, o));
            }
            return n;
        }, t.getMinValueFromArray = function(e) {
            return Math.min.apply(Math, p(e));
        }, t.getMaxValueFromArray = function(e) {
            return Math.max.apply(Math, p(e));
        }, t.compareOn = function(n) {
            return function(e, t) {
                return e[n] < t[n] ? 1 : e[n] > t[n] ? -1 : 0;
            };
        }, t.parseQS = Ie, t.formatQS = Ce, t.parseUrl = function(e, t) {
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
        }, t.deepEqual = je, t.mergeDeep = we, t.cyrb53Hash = function(e) {
            for (var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, r = function(e, t) {
                if (X(Math.imul)) return Math.imul(e, t);
                var n = (4194303 & e) * (t |= 0);
                return 4290772992 & e && (n += (4290772992 & e) * t | 0), 0 | n;
            }, i = 3735928559 ^ n, o = 1103547991 ^ n, a = 0; a < e.length; a++) t = e.charCodeAt(a), 
            i = r(i ^ t, 2654435761), o = r(o ^ t, 1597334677);
            return i = r(i ^ i >>> 16, 2246822507) ^ r(o ^ o >>> 13, 3266489909), (4294967296 * (2097151 & (o = r(o ^ o >>> 16, 2246822507) ^ r(i ^ i >>> 13, 3266489909))) + (i >>> 0)).toString();
        };
        var r = n(3), i = n(160), o = n.n(i), a = n(10), c = n.n(a), u = n(12), s = n.n(u), d = n(161);
        n.d(t, "deepAccess", function() {
            return d.a;
        });
        var f = n(162);
        function l(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var n = [], r = !0, i = !1, o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    i = !0, o = e;
                } finally {
                    try {
                        r || null == c.return || c.return();
                    } finally {
                        if (i) throw o;
                    }
                }
                return n;
            }(e, t) || g(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function p(e) {
            return function(e) {
                if (Array.isArray(e)) return b(e);
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
            }(e) || g(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function g(e, t) {
            if (e) {
                if ("string" == typeof e) return b(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? b(e, t) : void 0;
            }
        }
        function b(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function v(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function y() {
            return (y = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        function h(e) {
            return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        n.d(t, "deepSetValue", function() {
            return f.a;
        });
        var m, S = n(5), A = "Array", E = "String", O = "Function", T = "Number", I = "Object", C = "Boolean", j = Object.prototype.toString, w = Boolean(window.console), _ = Boolean(w && window.console.log), U = Boolean(w && window.console.info), B = Boolean(w && window.console.warn), x = Boolean(w && window.console.error), R = n(9), k = {
            checkCookieSupport: Ae,
            createTrackPixelIframeHtml: se,
            getWindowSelf: F,
            getWindowTop: L,
            getWindowLocation: z,
            insertUserSyncIframe: ue,
            insertElement: ae,
            isFn: X,
            triggerPixel: ce,
            logError: J,
            logWarn: K,
            logMessage: V,
            logInfo: H,
            parseQS: Ie,
            formatQS: Ce,
            deepEqual: je
        }, D = {}, N = function(e, t) {
            return t;
        }.bind(null, 1, D)() === D ? Function.prototype.bind : function(e) {
            var t = this, n = Array.prototype.slice.call(arguments, 1);
            return function() {
                return t.apply(e, n.concat(Array.prototype.slice.call(arguments)));
            };
        }, P = (m = 0, function() {
            return ++m;
        });
        function M() {
            return P() + Math.random().toString(16).substr(2);
        }
        function q() {
            return window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random();
        }
        function G(e) {
            if (W(e)) return e[0] + "x" + e[1];
        }
        function W(e) {
            return ee(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1]);
        }
        function L() {
            return window.top;
        }
        function F() {
            return window.self;
        }
        function z() {
            return window.location;
        }
        function V() {
            Q() && _ && console.log.apply(console, Y(arguments, "MESSAGE:"));
        }
        function H() {
            Q() && U && console.info.apply(console, Y(arguments, "INFO:"));
        }
        function K() {
            Q() && B && console.warn.apply(console, Y(arguments, "WARNING:"));
        }
        function J() {
            Q() && x && console.error.apply(console, Y(arguments, "ERROR:")), R.emit(S.EVENTS.AUCTION_DEBUG, {
                type: "ERROR",
                arguments: arguments
            });
        }
        function Y(e, t) {
            return e = [].slice.call(e), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"), 
            e.unshift("%cPrebid"), e;
        }
        function Q() {
            return !!r.b.getConfig("debug");
        }
        function $(e, t) {
            return j.call(e) === "[object " + t + "]";
        }
        function X(e) {
            return $(e, O);
        }
        function Z(e) {
            return $(e, E);
        }
        function ee(e) {
            return $(e, A);
        }
        function te(e) {
            return $(e, T);
        }
        function ne(e) {
            return $(e, I);
        }
        function re(e) {
            if (!e) return !0;
            if (ee(e) || Z(e)) return !(0 < e.length);
            for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
            return !0;
        }
        function ie(e, t) {
            if (!re(e)) {
                if (X(e.forEach)) return e.forEach(t, this);
                var n = 0, r = e.length;
                if (0 < r) for (;n < r; n++) t(e[n], n, e); else for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n);
            }
        }
        function oe(e, t) {
            return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t];
        }
        function ae(e, t, n, r) {
            var i;
            t = t || document, i = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
            try {
                if ((i = i.length ? i : t.getElementsByTagName("body")).length) {
                    i = i[0];
                    var o = r ? null : i.firstChild;
                    return i.insertBefore(e, o);
                }
            } catch (e) {}
        }
        function ce(e, t) {
            var n = new Image();
            t && k.isFn(t) && (n.addEventListener("load", t), n.addEventListener("error", t)), 
            n.src = e;
        }
        function ue(e, t) {
            var n = k.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"), r = document.createElement("div");
            r.innerHTML = n;
            var i = r.firstChild;
            t && k.isFn(t) && (i.addEventListener("load", t), i.addEventListener("error", t)), 
            k.insertElement(i, document, "html", !0);
        }
        function se(e) {
            var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            return e ? ((!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]) && (e = encodeURI(e)), 
            t = t && 'sandbox="'.concat(t, '"'), "<iframe ".concat(t, ' id="').concat(M(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : "";
        }
        function de(e, t, n) {
            return null == t ? n : Z(t) ? t : te(t) ? t.toString() : void k.logWarn("Unsuported type for param: " + e + " required type: String");
        }
        function fe(e, t, n) {
            return n.indexOf(e) === t;
        }
        function le(e, t) {
            return e.concat(t);
        }
        function pe(e) {
            return Object.keys(e);
        }
        function ge(e, t) {
            return e[t];
        }
        function be() {
            if (window.googletag && X(window.googletag.pubads) && X(window.googletag.pubads().getSlots)) return !0;
        }
        var ve = me("timeToRespond", function(e, t) {
            return t < e;
        }), ye = me("responseTimestamp", function(e, t) {
            return t < e;
        }), he = me("responseTimestamp", function(e, t) {
            return e < t;
        });
        function me(n, r) {
            return function(e, t) {
                return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e;
            };
        }
        function Se(e) {
            return o()(e);
        }
        function Ae() {
            if (window.navigator.cookieEnabled || document.cookie.length) return !0;
        }
        var Ee = function(e, t) {
            return e.getAdUnitPath() === t || e.getSlotElementId() === t;
        };
        function Oe(t) {
            return function(e) {
                return Ee(e, t);
            };
        }
        function Te(e) {
            return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e;
        }
        function Ie(e) {
            return e ? e.replace(/^\?/, "").split("&").reduce(function(e, t) {
                var n = l(t.split("="), 2), r = n[0], i = n[1];
                return /\[\]$/.test(r) ? (e[r = r.replace("[]", "")] = e[r] || [], e[r].push(i)) : e[r] = i || "", 
                e;
            }, {}) : {};
        }
        function Ce(e) {
            return Object.keys(e).map(function(t) {
                return Array.isArray(e[t]) ? e[t].map(function(e) {
                    return "".concat(t, "[]=").concat(e);
                }).join("&") : "".concat(t, "=").concat(e[t]);
            }).join("&");
        }
        function je(e, t) {
            if (e === t) return !0;
            if ("object" !== h(e) || null === e || "object" !== h(t) || null === t) return !1;
            if (Object.keys(e).length !== Object.keys(t).length) return !1;
            for (var n in e) {
                if (!t.hasOwnProperty(n)) return !1;
                if (!je(e[n], t[n])) return !1;
            }
            return !0;
        }
        function we(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            if (!n.length) return e;
            var i = n.shift();
            if (ne(e) && ne(i)) for (var o in i) ne(i[o]) ? (e[o] || y(e, v({}, o, {})), we(e[o], i[o])) : ee(i[o]) && e[o] ? ee(e[o]) && (e[o] = e[o].concat(i[o])) : y(e, v({}, o, i[o]));
            return we.apply(void 0, [ e ].concat(n));
        }
    },
    1: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "storage", function() {
            return I;
        }), t.registerBidder = function(i) {
            var n = Array.isArray(i.supportedMediaTypes) ? {
                supportedMediaTypes: i.supportedMediaTypes
            } : void 0;
            function o(e) {
                var t = w(e);
                c.default.registerBidAdapter(t, e.code, n);
            }
            o(i), Array.isArray(i.aliases) && i.aliases.forEach(function(e) {
                var t, n, r = e;
                Object(m.isPlainObject)(e) && (r = e.code, t = e.gvlid, n = e.skipPbsAliasing), 
                c.default.aliasRegistry[r] = i.code, o(T({}, i, {
                    code: r,
                    gvlid: t,
                    skipPbsAliasing: n
                }));
            });
        }, t.newBidder = w, n.d(t, "registerSyncInner", function() {
            return _;
        }), t.preloadBidderMappingFile = U, t.getIabSubCategory = function(t, e) {
            var n = c.default.getBidAdapter(t);
            if (n.getSpec().getMappingFileInfo) {
                var r = n.getSpec().getMappingFileInfo(), i = r.localStorageKey ? r.localStorageKey : n.getBidderCode(), o = I.getDataFromLocalStorage(i);
                if (o) {
                    try {
                        o = JSON.parse(o);
                    } catch (e) {
                        Object(m.logError)("Failed to parse ".concat(t, " mapping data stored in local storage"));
                    }
                    return o.mapping[e] ? o.mapping[e] : null;
                }
            }
        }, t.isValid = B;
        var r = n(92), c = n(8), u = n(3), v = n(34), s = n(43), o = n(37), a = n(25), i = n(5), y = n.n(i), d = n(9), h = n.n(d), f = n(12), l = n.n(f), p = n(4), m = n(0), g = n(2), b = n(13), S = n(7);
        function A(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var n = [], r = !0, i = !1, o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    i = !0, o = e;
                } finally {
                    try {
                        r || null == c.return || c.return();
                    } finally {
                        if (i) throw o;
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
        function T() {
            return (T = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        var I = Object(S.a)("bidderFactory"), C = [ "requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency" ], j = 1;
        function w(p) {
            return T(new r.a(p.code), {
                getSpec: function() {
                    return Object.freeze(p);
                },
                registerSyncs: g,
                callBids: function(o, a, e, n, c, r) {
                    var u, s, t, d, i, f;
                    function l() {
                        e(), h.a.emit(y.a.EVENTS.BIDDER_DONE, o), g(s, o.gdprConsent, o.uspConsent);
                    }
                    Array.isArray(o.bids) && (u = {}, s = [], 0 !== (t = o.bids.filter(b)).length ? (d = {}, 
                    t.forEach(function(e) {
                        (d[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode);
                    }), (i = p.buildRequests(t, o)) && 0 !== i.length ? (Array.isArray(i) || (i = [ i ]), 
                    f = Object(m.delayExecution)(r(l), i.length), i.forEach(function(i) {
                        switch (i.method) {
                          case "GET":
                            n("".concat(i.url).concat(function(e) {
                                if (e) return "?".concat("object" === O(e) ? Object(m.parseQueryStringParameters)(e) : e);
                                return "";
                            }(i.data)), {
                                success: r(e),
                                error: t
                            }, void 0, T({
                                method: "GET",
                                withCredentials: !0
                            }, i.options));
                            break;

                          case "POST":
                            n(i.url, {
                                success: r(e),
                                error: t
                            }, "string" == typeof i.data ? i.data : JSON.stringify(i.data), T({
                                method: "POST",
                                contentType: "text/plain",
                                withCredentials: !0
                            }, i.options));
                            break;

                          default:
                            Object(m.logWarn)("Skipping invalid request from ".concat(p.code, ". Request type ").concat(i.type, " must be GET or POST")), 
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
                                n = p.interpretResponse(e, i);
                            } catch (e) {
                                return Object(m.logError)("Bidder ".concat(p.code, " failed to interpret the server's response. Continuing without bids"), null, e), 
                                void f();
                            }
                            function r(e) {
                                var t, n, r, i = d[e.requestId];
                                i ? (e.originalCpm = e.cpm, e.originalCurrency = e.currency, e.meta = e.meta || T({}, e[i.bidder]), 
                                t = T(Object(v.a)(y.a.STATUS.GOOD, i), e), n = i.adUnitCode, r = t, u[n] = !0, B(n, r, [ o ]) && a(n, r)) : Object(m.logWarn)("Bidder ".concat(p.code, " made bid for unknown request ID: ").concat(e.requestId, ". Ignoring."));
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
                _(p, e, t, n);
            }
            function b(e) {
                return !!p.isBidRequestValid(e) || (Object(m.logWarn)("Invalid bid sent to bidder ".concat(p.code, ": ").concat(JSON.stringify(e))), 
                !1);
            }
        }
        var _ = Object(b.b)("async", function(t, e, n, r) {
            var i, o, a = u.b.getConfig("userSync.aliasSyncEnabled");
            !t.getUserSyncs || !a && c.default.aliasRegistry[t.code] || (i = u.b.getConfig("userSync.filterSettings"), 
            (o = t.getUserSyncs({
                iframeEnabled: !(!i || !i.iframe && !i.all),
                pixelEnabled: !(!i || !i.image && !i.all)
            }, e, n, r)) && (Array.isArray(o) || (o = [ o ]), o.forEach(function(e) {
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
                    var t = e.getSpec().getMappingFileInfo(), r = t.refreshInDays ? t.refreshInDays : j, i = t.localStorageKey ? t.localStorageKey : e.getSpec().code, o = I.getDataFromLocalStorage(i);
                    try {
                        (!(o = o ? JSON.parse(o) : void 0) || Object(m.timestamp)() > o.lastUpdated + 24 * r * 60 * 60 * 1e3) && Object(p.a)(t.url, {
                            success: function(e) {
                                try {
                                    e = JSON.parse(e);
                                    var t = {
                                        lastUpdated: Object(m.timestamp)(),
                                        mapping: e.mapping
                                    };
                                    I.setDataInLocalStorage(i, JSON.stringify(t));
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
        function B(e, t, n) {
            function r(e) {
                return "Invalid bid from ".concat(t.bidderCode, ". Ignoring bid: ").concat(e);
            }
            return e ? t ? (i = Object.keys(t), C.every(function(e) {
                return l()(i, e) && !l()([ void 0, null ], t[e]);
            }) ? "native" !== t.mediaType || Object(o.g)(t, n) ? "video" !== t.mediaType || Object(a.d)(t, n) ? !("banner" === t.mediaType && !function(e, t, n) {
                if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10))) return t.width = parseInt(t.width, 10), 
                t.height = parseInt(t.height, 10), 1;
                var r = Object(m.getBidderRequest)(n, t.bidderCode, e), i = r && r.bids && r.bids[0] && r.bids[0].sizes, o = Object(m.parseSizesInput)(i);
                if (1 === o.length) {
                    var a = A(o[0].split("x"), 2), c = a[0], u = a[1];
                    return t.width = parseInt(c, 10), t.height = parseInt(u, 10), 1;
                }
            }(e, t, n)) || (Object(m.logError)(r("Banner bids require a width and height")), 
            !1) : (Object(m.logError)(r("Video bid does not have required vastUrl or renderer property")), 
            !1) : (Object(m.logError)(r("Native bid missing some required properties.")), !1) : (Object(m.logError)(r("Bidder ".concat(t.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), 
            !1)) : (Object(m.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), 
            !1) : (Object(m.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
            var i;
        }
        Object(b.a)("checkAdUnitSetup").before(U);
    },
    10: function(e, t, n) {
        var r = n(98);
        e.exports = r;
    },
    100: function(e, t, n) {
        var r = n(30), i = n(101), o = n(46), a = n(47), c = n(55), u = n(28), s = n(73), d = Object.getOwnPropertyDescriptor;
        t.f = r ? d : function(e, t) {
            if (e = a(e), t = c(t, !0), s) try {
                return d(e, t);
            } catch (e) {}
            if (u(e, t)) return o(!i.f.call(e, t), e[t]);
        };
    },
    101: function(e, t, n) {
        "use strict";
        var r = {}.propertyIsEnumerable, i = Object.getOwnPropertyDescriptor, o = i && !r.call({
            1: 2
        }, 1);
        t.f = o ? function(e) {
            var t = i(this, e);
            return !!t && t.enumerable;
        } : r;
    },
    102: function(e, t, n) {
        function r(e, t) {
            var n = c[a(e)];
            return n == s || n != u && ("function" == typeof t ? i(t) : !!t);
        }
        var i = n(31), o = /#|\.prototype\./, a = r.normalize = function(e) {
            return String(e).replace(o, ".").toLowerCase();
        }, c = r.data = {}, u = r.NATIVE = "N", s = r.POLYFILL = "P";
        e.exports = r;
    },
    103: function(e, t, n) {
        var r = n(27), i = n(104), o = n(21)("species");
        e.exports = function(e, t) {
            var n;
            return i(e) && ("function" == typeof (n = e.constructor) && (n === Array || i(n.prototype)) || r(n) && null === (n = n[o])) && (n = void 0), 
            new (void 0 === n ? Array : n)(0 === t ? 0 : t);
        };
    },
    104: function(e, t, n) {
        var r = n(48);
        e.exports = Array.isArray || function(e) {
            return "Array" == r(e);
        };
    },
    105: function(e, t, n) {
        var r = n(26), i = n(32);
        e.exports = function(t, n) {
            try {
                i(r, t, n);
            } catch (e) {
                r[t] = n;
            }
            return n;
        };
    },
    106: function(e, t, n) {
        var r = n(77);
        e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    107: function(e, t, n) {
        n(108);
        var r = n(52);
        e.exports = r("Array", "includes");
    },
    108: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(78).includes, o = n(51);
        r({
            target: "Array",
            proto: !0,
            forced: !n(60)("indexOf", {
                ACCESSORS: !0,
                1: 0
            })
        }, {
            includes: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0);
            }
        }), o("includes");
    },
    109: function(e, t, n) {
        var r = n(58), i = Math.max, o = Math.min;
        e.exports = function(e, t) {
            var n = r(e);
            return n < 0 ? i(n + t, 0) : o(n, t);
        };
    },
    11: function(e, t, n) {
        "use strict";
        t.a = i, t.c = function(e) {
            return !(!e || !e.url);
        }, t.b = function(e, t) {
            e.render(t);
        };
        var u = n(40), s = n(0), r = n(10), d = n.n(r), f = "outstream";
        function i(e) {
            var t = this, n = e.url, r = e.config, i = e.id, o = e.callback, a = e.loaded, c = e.adUnitCode;
            this.url = n, this.config = r, this.handlers = {}, this.id = i, this.loaded = a, 
            this.cmd = [], this.push = function(e) {
                "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : s.logError("Commands given to Renderer.push must be wrapped in a function");
            }, this.callback = o || function() {
                t.loaded = !0, t.process();
            }, this.render = function() {
                !function(t) {
                    var e = pbjs.adUnits, n = d()(e, function(e) {
                        return e.code === t;
                    });
                    if (!n) return !1;
                    var r = s.deepAccess(n, "renderer"), i = !!(r && r.url && r.render), o = s.deepAccess(n, "mediaTypes.video.renderer"), a = !!(o && o.url && o.render);
                    return !!(i && !0 !== r.backupOnly || a && !0 !== o.backupOnly);
                }(c) ? Object(u.a)(n, f, this.callback) : s.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(c)), 
                this._render ? this._render.apply(this, arguments) : s.logWarn("No render function was provided, please use .setRender on the renderer");
            }.bind(this);
        }
        i.install = function(e) {
            return new i({
                url: e.url,
                config: e.config,
                id: e.id,
                callback: e.callback,
                loaded: e.loaded,
                adUnitCode: e.adUnitCode
            });
        }, i.prototype.getConfig = function() {
            return this.config;
        }, i.prototype.setRender = function(e) {
            this._render = e;
        }, i.prototype.setEventHandlers = function(e) {
            this.handlers = e;
        }, i.prototype.handleVideoEvent = function(e) {
            var t = e.id, n = e.eventName;
            "function" == typeof this.handlers[n] && this.handlers[n](), s.logMessage("Prebid Renderer event for id ".concat(t, " type ").concat(n));
        }, i.prototype.process = function() {
            for (;0 < this.cmd.length; ) try {
                this.cmd.shift().call();
            } catch (e) {
                s.logError("Error processing Renderer command: ", e);
            }
        };
    },
    110: function(e, t, n) {
        n(111), n(128), n(89), n(130);
        var r = n(42);
        e.exports = r.Set;
    },
    111: function(e, t, n) {
        "use strict";
        var r = n(112), i = n(117);
        e.exports = r("Set", function(t) {
            return function(e) {
                return t(this, arguments.length ? e : void 0);
            };
        }, i);
    },
    112: function(e, t, n) {
        "use strict";
        var f = n(14), l = n(26), p = n(80), g = n(31), b = n(32), v = n(17), y = n(83), h = n(27), m = n(64), S = n(33).f, A = n(56).forEach, E = n(30), r = n(54), O = r.set, T = r.getterFor;
        e.exports = function(n, e, t) {
            var r, a, i = -1 !== n.indexOf("Map"), c = -1 !== n.indexOf("Weak"), o = i ? "set" : "add", u = l[n], s = u && u.prototype, d = {};
            return E && "function" == typeof u && (c || s.forEach && !g(function() {
                new u().entries().next();
            })) ? (r = e(function(e, t) {
                O(y(e, r, n), {
                    type: n,
                    collection: new u()
                }), null != t && v(t, e[o], e, i);
            }), a = T(n), A([ "add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries" ], function(i) {
                var o = "add" == i || "set" == i;
                i in s && (!c || "clear" != i) && b(r.prototype, i, function(e, t) {
                    var n = a(this).collection;
                    if (!o && c && !h(e)) return "get" == i && void 0;
                    var r = n[i](0 === e ? 0 : e, t);
                    return o ? this : r;
                });
            }), c || S(r.prototype, "size", {
                configurable: !0,
                get: function() {
                    return a(this).collection.size;
                }
            })) : (r = t.getConstructor(e, n, i, o), p.REQUIRED = !0), m(r, n, !1, !0), d[n] = r, 
            f({
                global: !0,
                forced: !0
            }, d), c || t.setStrong(r, n, i), r;
        };
    },
    113: function(e, t, n) {
        var r = n(31);
        e.exports = !r(function() {
            return Object.isExtensible(Object.preventExtensions({}));
        });
    },
    114: function(e, t, n) {
        "use strict";
        var r = n(63), i = n(62);
        e.exports = r ? {}.toString : function() {
            return "[object " + i(this) + "]";
        };
    },
    115: function(e, t, n) {
        var r = n(26), i = n(116), o = r.WeakMap;
        e.exports = "function" == typeof o && /native code/.test(i(o));
    },
    116: function(e, t, n) {
        var r = n(76), i = Function.toString;
        "function" != typeof r.inspectSource && (r.inspectSource = function(e) {
            return i.call(e);
        }), e.exports = r.inspectSource;
    },
    117: function(e, t, n) {
        "use strict";
        var s = n(33).f, d = n(84), f = n(122), l = n(24), p = n(83), g = n(17), a = n(66), c = n(127), b = n(30), v = n(80).fastKey, r = n(54), y = r.set, h = r.getterFor;
        e.exports = {
            getConstructor: function(e, n, r, i) {
                function o(e, t, n) {
                    var r, i, o = c(e), a = u(e, t);
                    return a ? a.value = n : (o.last = a = {
                        index: i = v(t, !0),
                        key: t,
                        value: n,
                        previous: r = o.last,
                        next: void 0,
                        removed: !1
                    }, o.first || (o.first = a), r && (r.next = a), b ? o.size++ : e.size++, "F" !== i && (o.index[i] = a)), 
                    e;
                }
                var a = e(function(e, t) {
                    p(e, a, n), y(e, {
                        type: n,
                        index: d(null),
                        first: void 0,
                        last: void 0,
                        size: 0
                    }), b || (e.size = 0), null != t && g(t, e[i], e, r);
                }), c = h(n), u = function(e, t) {
                    var n, r = c(e), i = v(t);
                    if ("F" !== i) return r.index[i];
                    for (n = r.first; n; n = n.next) if (n.key == t) return n;
                };
                return f(a.prototype, {
                    clear: function() {
                        for (var e = c(this), t = e.index, n = e.first; n; ) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), 
                        delete t[n.index], n = n.next;
                        e.first = e.last = void 0, b ? e.size = 0 : this.size = 0;
                    },
                    delete: function(e) {
                        var t, n, r = c(this), i = u(this, e);
                        return i && (t = i.next, n = i.previous, delete r.index[i.index], i.removed = !0, 
                        n && (n.next = t), t && (t.previous = n), r.first == i && (r.first = t), r.last == i && (r.last = n), 
                        b ? r.size-- : this.size--), !!i;
                    },
                    forEach: function(e, t) {
                        for (var n, r = c(this), i = l(e, 1 < arguments.length ? t : void 0, 3); n = n ? n.next : r.first; ) for (i(n.value, n.key, this); n && n.removed; ) n = n.previous;
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
                        return o(this, 0 === e ? 0 : e, t);
                    }
                } : {
                    add: function(e) {
                        return o(this, e = 0 === e ? 0 : e, e);
                    }
                }), b && s(a.prototype, "size", {
                    get: function() {
                        return c(this).size;
                    }
                }), a;
            },
            setStrong: function(e, t, n) {
                var r = t + " Iterator", i = h(t), o = h(r);
                a(e, t, function(e, t) {
                    y(this, {
                        type: r,
                        target: e,
                        state: i(e),
                        kind: t,
                        last: void 0
                    });
                }, function() {
                    for (var e = o(this), t = e.kind, n = e.last; n && n.removed; ) n = n.previous;
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
    },
    118: function(e, t, n) {
        var r = n(30), a = n(33), c = n(15), u = n(119);
        e.exports = r ? Object.defineProperties : function(e, t) {
            c(e);
            for (var n, r = u(t), i = r.length, o = 0; o < i; ) a.f(e, n = r[o++], t[n]);
            return e;
        };
    },
    119: function(e, t, n) {
        var r = n(120), i = n(85);
        e.exports = Object.keys || function(e) {
            return r(e, i);
        };
    },
    12: function(e, t, n) {
        var r = n(107);
        e.exports = r;
    },
    120: function(e, t, n) {
        var a = n(28), c = n(47), u = n(78).indexOf, s = n(53);
        e.exports = function(e, t) {
            var n, r = c(e), i = 0, o = [];
            for (n in r) !a(s, n) && a(r, n) && o.push(n);
            for (;t.length > i; ) a(r, n = t[i++]) && (~u(o, n) || o.push(n));
            return o;
        };
    },
    121: function(e, t, n) {
        var r = n(29);
        e.exports = r("document", "documentElement");
    },
    122: function(e, t, n) {
        var i = n(86);
        e.exports = function(e, t, n) {
            for (var r in t) n && n.unsafe && e[r] ? e[r] = t[r] : i(e, r, t[r], n);
            return e;
        };
    },
    123: function(e, t, n) {
        "use strict";
        function i() {
            return this;
        }
        var o = n(87).IteratorPrototype, a = n(84), c = n(46), u = n(64), s = n(38);
        e.exports = function(e, t, n) {
            var r = t + " Iterator";
            return e.prototype = a(o, {
                next: c(1, n)
            }), u(e, r, !1, !0), s[r] = i, e;
        };
    },
    124: function(e, t, n) {
        var r = n(31);
        e.exports = !r(function() {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
        });
    },
    125: function(e, t, n) {
        var i = n(15), o = n(126);
        e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var n, r = !1, e = {};
            try {
                (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []), 
                r = e instanceof Array;
            } catch (e) {}
            return function(e, t) {
                return i(e), o(t), r ? n.call(e, t) : e.__proto__ = t, e;
            };
        }() : void 0);
    },
    126: function(e, t, n) {
        var r = n(27);
        e.exports = function(e) {
            if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
            return e;
        };
    },
    127: function(e, t, n) {
        "use strict";
        var r = n(29), i = n(33), o = n(21), a = n(30), c = o("species");
        e.exports = function(e) {
            var t = r(e), n = i.f;
            a && t && !t[c] && n(t, c, {
                configurable: !0,
                get: function() {
                    return this;
                }
            });
        };
    },
    128: function(e, t) {},
    129: function(e, t, n) {
        function r(c) {
            return function(e, t) {
                var n, r, i = String(s(e)), o = u(t), a = i.length;
                return o < 0 || a <= o ? c ? "" : void 0 : (n = i.charCodeAt(o)) < 55296 || 56319 < n || o + 1 === a || (r = i.charCodeAt(o + 1)) < 56320 || 57343 < r ? c ? i.charAt(o) : n : c ? i.slice(o, o + 2) : r - 56320 + (n - 55296 << 10) + 65536;
            };
        }
        var u = n(58), s = n(49);
        e.exports = {
            codeAt: r(!1),
            charAt: r(!0)
        };
    },
    13: function(e, t, n) {
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
                        if (Array.isArray(e)) return o(e);
                    }(t = e) || function(e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                    }(t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return o(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0;
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
        var r = n(163), i = n.n(r);
        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        var a = i()({
            ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE
        }), c = a.get;
    },
    130: function(e, t, n) {
        n(131);
        var r = n(132), i = n(26), o = n(62), a = n(32), c = n(38), u = n(21)("toStringTag");
        for (var s in r) {
            var d = i[s], f = d && d.prototype;
            f && o(f) !== u && a(f, u, s), c[s] = c.Array;
        }
    },
    131: function(e, t, n) {
        "use strict";
        var r = n(47), i = n(51), o = n(38), a = n(54), c = n(66), u = "Array Iterator", s = a.set, d = a.getterFor(u);
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
        }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries");
    },
    132: function(e, t) {
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
    },
    133: function(e, t, n) {
        n(14)({
            target: "Set",
            stat: !0
        }, {
            from: n(134)
        });
    },
    134: function(e, t, n) {
        "use strict";
        var s = n(18), d = n(24), f = n(17);
        e.exports = function(e, t, n) {
            var r, i, o, a, c = arguments.length, u = 1 < c ? t : void 0;
            return s(this), (r = void 0 !== u) && s(u), null == e ? new this() : (i = [], r ? (o = 0, 
            a = d(u, 2 < c ? n : void 0, 2), f(e, function(e) {
                i.push(a(e, o++));
            })) : f(e, i.push, i), new this(i));
        };
    },
    135: function(e, t, n) {
        n(14)({
            target: "Set",
            stat: !0
        }, {
            of: n(136)
        });
    },
    136: function(e, t, n) {
        "use strict";
        e.exports = function() {
            for (var e = arguments.length, t = new Array(e); e--; ) t[e] = arguments[e];
            return new this(t);
        };
    },
    137: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), o = n(138);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            addAll: function() {
                return o.apply(this, arguments);
            }
        });
    },
    138: function(e, t, n) {
        "use strict";
        var i = n(15), o = n(18);
        e.exports = function() {
            for (var e = i(this), t = o(e.add), n = 0, r = arguments.length; n < r; n++) t.call(e, arguments[n]);
            return e;
        };
    },
    139: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), o = n(140);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            deleteAll: function() {
                return o.apply(this, arguments);
            }
        });
    },
    14: function(e, t, n) {
        "use strict";
        function y(r) {
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
        var h = n(26), m = n(100).f, S = n(102), A = n(42), E = n(24), O = n(32), T = n(28);
        e.exports = function(e, t) {
            var n, r, i, o, a, c, u, s, d = e.target, f = e.global, l = e.stat, p = e.proto, g = f ? h : l ? h[d] : (h[d] || {}).prototype, b = f ? A : A[d] || (A[d] = {}), v = b.prototype;
            for (i in t) n = !S(f ? i : d + (l ? "." : "#") + i, e.forced) && g && T(g, i), 
            a = b[i], n && (c = e.noTargetGet ? (s = m(g, i)) && s.value : g[i]), o = n && c ? c : t[i], 
            n && typeof a == typeof o || (u = e.bind && n ? E(o, h) : e.wrap && n ? y(o) : p && "function" == typeof o ? E(Function.call, o) : o, 
            (e.sham || o && o.sham || a && a.sham) && O(u, "sham", !0), b[i] = u, p && (T(A, r = d + "Prototype") || O(A, r, {}), 
            A[r][i] = o, e.real && v && !v[i] && O(v, i, o)));
        };
    },
    140: function(e, t, n) {
        "use strict";
        var a = n(15), c = n(18);
        e.exports = function() {
            for (var e, t = a(this), n = c(t.delete), r = !0, i = 0, o = arguments.length; i < o; i++) e = n.call(t, arguments[i]), 
            r = r && e;
            return !!r;
        };
    },
    141: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), o = n(15), a = n(24), c = n(36), u = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            every: function(e, t) {
                var n = o(this), r = c(n), i = a(e, 1 < arguments.length ? t : void 0, 3);
                return !u(r, function(e) {
                    if (!i(e, e, n)) return u.stop();
                }, void 0, !1, !0).stopped;
            }
        });
    },
    142: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), o = n(29), a = n(15), c = n(18), u = n(39), s = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            difference: function(e) {
                var t = a(this), n = new (u(t, o("Set")))(t), r = c(n.delete);
                return s(e, function(e) {
                    r.call(n, e);
                }), n;
            }
        });
    },
    143: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), c = n(29), u = n(15), s = n(18), d = n(24), f = n(39), l = n(36), p = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            filter: function(e, t) {
                var n = u(this), r = l(n), i = d(e, 1 < arguments.length ? t : void 0, 3), o = new (f(n, c("Set")))(), a = s(o.add);
                return p(r, function(e) {
                    i(e, e, n) && a.call(o, e);
                }, void 0, !1, !0), o;
            }
        });
    },
    144: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), o = n(15), a = n(24), c = n(36), u = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            find: function(e, t) {
                var n = o(this), r = c(n), i = a(e, 1 < arguments.length ? t : void 0, 3);
                return u(r, function(e) {
                    if (i(e, e, n)) return u.stop(e);
                }, void 0, !1, !0).result;
            }
        });
    },
    145: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), o = n(29), a = n(15), c = n(18), u = n(39), s = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            intersection: function(e) {
                var t = a(this), n = new (u(t, o("Set")))(), r = c(t.has), i = c(n.add);
                return s(e, function(e) {
                    r.call(t, e) && i.call(n, e);
                }), n;
            }
        });
    },
    146: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), o = n(15), a = n(18), c = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            isDisjointFrom: function(e) {
                var t = o(this), n = a(t.has);
                return !c(e, function(e) {
                    if (!0 === n.call(t, e)) return c.stop();
                }).stopped;
            }
        });
    },
    147: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), o = n(29), a = n(15), c = n(18), u = n(90), s = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            isSubsetOf: function(e) {
                var t = u(this), n = a(e), r = n.has;
                return "function" != typeof r && (n = new (o("Set"))(e), r = c(n.has)), !s(t, function(e) {
                    if (!1 === r.call(n, e)) return s.stop();
                }, void 0, !1, !0).stopped;
            }
        });
    },
    148: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), o = n(15), a = n(18), c = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            isSupersetOf: function(e) {
                var t = o(this), n = a(t.has);
                return !c(e, function(e) {
                    if (!1 === n.call(t, e)) return c.stop();
                }).stopped;
            }
        });
    },
    149: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), o = n(15), a = n(36), c = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            join: function(e) {
                var t = o(this), n = a(t), r = void 0 === e ? "," : String(e), i = [];
                return c(n, i.push, i, !1, !0), i.join(r);
            }
        });
    },
    15: function(e, t, n) {
        var r = n(27);
        e.exports = function(e) {
            if (!r(e)) throw TypeError(String(e) + " is not an object");
            return e;
        };
    },
    150: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), c = n(29), u = n(15), s = n(18), d = n(24), f = n(39), l = n(36), p = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            map: function(e, t) {
                var n = u(this), r = l(n), i = d(e, 1 < arguments.length ? t : void 0, 3), o = new (f(n, c("Set")))(), a = s(o.add);
                return p(r, function(e) {
                    a.call(o, i(e, e, n));
                }, void 0, !1, !0), o;
            }
        });
    },
    151: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), a = n(15), c = n(18), u = n(36), s = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            reduce: function(t, e) {
                var n = a(this), r = u(n), i = arguments.length < 2, o = i ? void 0 : e;
                if (c(t), s(r, function(e) {
                    o = i ? (i = !1, e) : t(o, e, e, n);
                }, void 0, !1, !0), i) throw TypeError("Reduce of empty set with no initial value");
                return o;
            }
        });
    },
    152: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), o = n(15), a = n(24), c = n(36), u = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            some: function(e, t) {
                var n = o(this), r = c(n), i = a(e, 1 < arguments.length ? t : void 0, 3);
                return u(r, function(e) {
                    if (i(e, e, n)) return u.stop();
                }, void 0, !1, !0).stopped;
            }
        });
    },
    153: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), o = n(29), a = n(15), c = n(18), u = n(39), s = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            symmetricDifference: function(e) {
                var t = a(this), n = new (u(t, o("Set")))(t), r = c(n.delete), i = c(n.add);
                return s(e, function(e) {
                    r.call(n, e) || i.call(n, e);
                }), n;
            }
        });
    },
    154: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), o = n(29), a = n(15), c = n(18), u = n(39), s = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            union: function(e) {
                var t = a(this), n = new (u(t, o("Set")))(t);
                return s(e, c(n.add), n), n;
            }
        });
    },
    155: function(e, t, n) {
        n(89), n(156);
        var r = n(42);
        e.exports = r.Array.from;
    },
    156: function(e, t, n) {
        var r = n(14), i = n(157);
        r({
            target: "Array",
            stat: !0,
            forced: !n(159)(function(e) {
                Array.from(e);
            })
        }, {
            from: i
        });
    },
    157: function(e, t, n) {
        "use strict";
        var v = n(24), y = n(57), h = n(82), m = n(81), S = n(50), A = n(158), E = n(61);
        e.exports = function(e, t, n) {
            var r, i, o, a, c, u, s = y(e), d = "function" == typeof this ? this : Array, f = arguments.length, l = 1 < f ? t : void 0, p = void 0 !== l, g = E(s), b = 0;
            if (p && (l = v(l, 2 < f ? n : void 0, 2)), null == g || d == Array && m(g)) for (i = new d(r = S(s.length)); b < r; b++) u = p ? l(s[b], b) : s[b], 
            A(i, b, u); else for (c = (a = g.call(s)).next, i = new d(); !(o = c.call(a)).done; b++) u = p ? h(a, l, [ o.value, b ], !0) : o.value, 
            A(i, b, u);
            return i.length = b, i;
        };
    },
    158: function(e, t, n) {
        "use strict";
        var i = n(55), o = n(33), a = n(46);
        e.exports = function(e, t, n) {
            var r = i(t);
            r in e ? o.f(e, r, a(0, n)) : e[r] = n;
        };
    },
    159: function(e, t, n) {
        var i = n(21)("iterator"), o = !1;
        try {
            var r = 0, a = {
                next: function() {
                    return {
                        done: !!r++
                    };
                },
                return: function() {
                    o = !0;
                }
            };
            a[i] = function() {
                return this;
            }, Array.from(a, function() {
                throw 2;
            });
        } catch (e) {}
        e.exports = function(e, t) {
            if (!t && !o) return !1;
            var n = !1;
            try {
                var r = {};
                r[i] = function() {
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
    },
    16: function(e, t) {
        e.exports = !0;
    },
    160: function(e, t) {
        e.exports = function e(t) {
            var n = Array.isArray(t) ? [] : {};
            for (var r in t) {
                var i = t[r];
                n[r] = i && "object" == typeof i ? e(i) : i;
            }
            return n;
        };
    },
    161: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n, r, i) {
            for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++) e = e ? e[t[r]] : i;
            return e === i ? n : e;
        };
    },
    162: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n) {
            t.split && (t = t.split("."));
            for (var r, i = 0, o = t.length, a = e; i < o; ++i) r = a[t[i]], a = a[t[i]] = i === o - 1 ? n : null != r ? r : !~t[i + 1].indexOf(".") && -1 < +t[i + 1] ? [] : {};
        };
    },
    163: function(e, t) {
        h.SYNC = 1, h.ASYNC = 2, h.QUEUE = 4;
        var g = "fun-hooks";
        var n = Object.freeze({
            useProxy: !0,
            ready: 0
        }), b = new WeakMap(), r = "2,1,0" === [ 1 ].reduce(function(e, t, n) {
            return [ e, t, n ];
        }, 2).toString() ? Array.prototype.reduce : function(e, t) {
            var n, r = Object(this), i = r.length >>> 0, o = 0;
            if (t) n = t; else {
                for (;o < i && !(o in r); ) o++;
                n = r[o++];
            }
            for (;o < i; ) o in r && (n = e(n, r[o], o, r)), o++;
            return n;
        };
        function v(e, t) {
            return Array.prototype.slice.call(e, t);
        }
        var y = Object.assign || function(e) {
            return r.call(v(arguments, 1), function(t, n) {
                return n && Object.keys(n).forEach(function(e) {
                    t[e] = n[e];
                }), t;
            }, e);
        };
        function h(u) {
            var s, e = {}, d = [];
            function t(e, t) {
                return "function" == typeof e ? f.call(null, "sync", e, t) : "string" == typeof e && "function" == typeof t ? f.apply(null, arguments) : "object" == typeof e ? function(o, e, a) {
                    var t = !0;
                    void 0 === e && (e = Object.getOwnPropertyNames(o), t = !1);
                    var c = {}, n = [ "constructor" ];
                    for (;(e = e.filter(function(e) {
                        return !("function" != typeof o[e] || -1 !== n.indexOf(e) || e.match(/^_/));
                    })).forEach(function(e) {
                        var t, n = e.split(":"), r = n[0], i = n[1] || "sync";
                        c[r] || (t = o[r], c[r] = o[r] = f(i, t, a ? [ a, r ] : void 0));
                    }), o = Object.getPrototypeOf(o), t && o; ) ;
                    return c;
                }.apply(null, arguments) : void 0;
            }
            function l(o) {
                var a = Array.isArray(o) ? o : o.split(".");
                return r.call(a, function(t, n, e) {
                    var r = t[n], i = !1;
                    return r || (e === a.length - 1 ? (s || d.push(function() {
                        i || console.warn(g + ": referenced '" + o + "' but it was never created");
                    }), t[n] = p(function(e) {
                        t[n] = e, i = !0;
                    })) : t[n] = {});
                }, e);
            }
            function p(r) {
                var o = [], a = [], c = function() {}, e = {
                    before: function(e, t) {
                        return n.call(this, o, "before", e, t);
                    },
                    after: function(e, t) {
                        return n.call(this, a, "after", e, t);
                    },
                    getHooks: function(n) {
                        var e = o.concat(a);
                        "object" == typeof n && (e = e.filter(function(t) {
                            return Object.keys(n).every(function(e) {
                                return t[e] === n[e];
                            });
                        }));
                        try {
                            y(e, {
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
                        this.type = e, (c = n)(o, a), r && r(t);
                    }
                };
                return b.set(e.after, t), e;
                function n(t, e, n, r) {
                    var i = {
                        hook: n,
                        type: e,
                        priority: r || 10,
                        remove: function() {
                            var e = t.indexOf(i);
                            -1 !== e && (t.splice(e, 1), c(o, a));
                        }
                    };
                    return t.push(i), t.sort(function(e, t) {
                        return t.priority - e.priority;
                    }), c(o, a), this;
                }
            }
            function f(f, e, t) {
                var n = e.after && b.get(e.after);
                if (n) {
                    if (n.type !== f) throw g + ": recreated hookable with different type";
                    return e;
                }
                var r, i, o = t ? l(t) : p(), a = {
                    get: function(e, t) {
                        return o[t] || Reflect.get.apply(Reflect, arguments);
                    }
                };
                return s || d.push(c), u.useProxy && "function" == typeof Proxy && Proxy.revocable ? i = new Proxy(e, a) : y(i = function() {
                    return a.apply ? a.apply(e, this, v(arguments)) : e.apply(this, arguments);
                }, o), b.get(i.after).install(f, i, function(e, t) {
                    var s, d = [];
                    r = e.length || t.length ? (e.forEach(n), s = d.push(void 0) - 1, t.forEach(n), 
                    function(n, r, e) {
                        var i, o = 0, a = "async" === f && "function" == typeof e[e.length - 1] && e.pop();
                        function c(e) {
                            "sync" === f ? i = e : a && a.apply(null, arguments);
                        }
                        function u(e) {
                            if (d[o]) {
                                var t = v(arguments);
                                return u.bail = c, t.unshift(u), d[o++].apply(r, t);
                            }
                            "sync" === f ? i = e : a && a.apply(null, arguments);
                        }
                        return d[s] = function() {
                            var e = v(arguments, 1);
                            "async" === f && a && (delete u.bail, e.push(u));
                            var t = n.apply(r, e);
                            "sync" === f && u(t);
                        }, u.apply(null, e), i;
                    }) : void 0;
                    function n(e) {
                        d.push(e.hook);
                    }
                    c();
                }), i;
                function c() {
                    !s && ("sync" !== f || u.ready & h.SYNC) && ("async" !== f || u.ready & h.ASYNC) ? "sync" !== f && u.ready & h.QUEUE ? a.apply = function() {
                        var e = arguments;
                        d.push(function() {
                            i.apply(e[1], e[2]);
                        });
                    } : a.apply = function() {
                        throw g + ": hooked function not ready";
                    } : a.apply = r;
                }
            }
            return (u = y({}, n, u)).ready ? t.ready = function() {
                s = !0, function(e) {
                    for (var t; t = e.shift(); ) t();
                }(d);
            } : s = !0, t.get = l, t;
        }
        e.exports = h;
    },
    17: function(e, t, n) {
        function p(e, t) {
            this.stopped = e, this.result = t;
        }
        var g = n(15), b = n(81), v = n(50), y = n(24), h = n(61), m = n(82);
        (e.exports = function(e, t, n, r, i) {
            var o, a, c, u, s, d, f, l = y(t, n, r ? 2 : 1);
            if (i) o = e; else {
                if ("function" != typeof (a = h(e))) throw TypeError("Target is not iterable");
                if (b(a)) {
                    for (c = 0, u = v(e.length); c < u; c++) if ((s = r ? l(g(f = e[c])[0], f[1]) : l(e[c])) && s instanceof p) return s;
                    return new p(!1);
                }
                o = a.call(e);
            }
            for (d = o.next; !(f = d.call(o)).done; ) if ("object" == typeof (s = m(o, l, f.value, r)) && s && s instanceof p) return s;
            return new p(!1);
        }).stop = function(e) {
            return new p(!0, e);
        };
    },
    18: function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e;
        };
    },
    2: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return r;
        }), n.d(t, "d", function() {
            return i;
        }), n.d(t, "b", function() {
            return o;
        }), n.d(t, "a", function() {
            return a;
        });
        var r = "native", i = "video", o = "banner", a = "adpod";
    },
    20: function(e, t, n) {
        "use strict";
        t.a = function() {
            return window.pbjs;
        }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || [], 
        window._pbjsGlobals = window._pbjsGlobals || [], window._pbjsGlobals.push("pbjs");
    },
    21: function(e, t, n) {
        var r = n(26), i = n(75), o = n(28), a = n(59), c = n(77), u = n(106), s = i("wks"), d = r.Symbol, f = u ? d : d && d.withoutSetter || a;
        e.exports = function(e) {
            return o(s, e) || (c && o(d, e) ? s[e] = d[e] : s[e] = f("Symbol." + e)), s[e];
        };
    },
    22: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r;
        });
        var y = n(0);
        var h, r = (h = window, function() {
            var e, t = [], n = function(e) {
                try {
                    if (!e.location.ancestorOrigins) return;
                    return e.location.ancestorOrigins;
                } catch (e) {}
            }(h), r = !1, i = 0, o = !1, a = !1;
            do {
                var c, u, s = g, d = a, f = void 0, l = !1, p = null, a = !1, g = g ? g.parent : h;
                try {
                    f = g.location.href || null;
                } catch (e) {
                    l = !0;
                }
                if (l) if (d) {
                    var b = s.context;
                    try {
                        u = p = b.sourceUrl, o = !0, g === h.top && (r = !0), b.canonicalUrl && (e = b.canonicalUrl);
                    } catch (e) {}
                } else {
                    Object(y.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");
                    try {
                        var v = s.document.referrer;
                        v && (p = v, g === h.top && (r = !0));
                    } catch (e) {}
                    !p && n && n[i - 1] && (p = n[i - 1]), p && !o && (u = p);
                } else f && (u = p = f, o = !1, g === h.top && (r = !0, (c = function(e) {
                    try {
                        var t = e.querySelector("link[rel='canonical']");
                        if (null !== t) return t.href;
                    } catch (e) {}
                    return null;
                }(g.document)) && (e = c))), g.context && g.context.sourceUrl && (a = !0);
                t.push(p), i++;
            } while (g !== h.top);
            return t.reverse(), {
                referer: u || null,
                reachedTop: r,
                isAmp: o,
                numIframes: i - 1,
                stack: t,
                canonicalUrl: e || null
            };
        });
    },
    222: function(e, t, n) {
        n(223);
        var r = n(52);
        e.exports = r("Array", "findIndex");
    },
    223: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(56).findIndex, o = n(51), a = n(60), c = "findIndex", u = !0, s = a(c);
        c in [] && Array(1)[c](function() {
            u = !1;
        }), r({
            target: "Array",
            proto: !0,
            forced: u || !s
        }, {
            findIndex: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0);
            }
        }), o(c);
    },
    23: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return u;
        });
        var r = n(0), s = n(41), i = n(10), o = n.n(i), a = n(5);
        var d, c, u = (d = [], (c = {}).addWinningBid = function(t) {
            var e = o()(d, function(e) {
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
            var t, n = e.adUnits, r = e.adUnitCodes, i = e.callback, o = e.cbTimeout, a = e.labels, c = e.auctionId, u = Object(s.k)({
                adUnits: n,
                adUnitCodes: r,
                callback: i,
                cbTimeout: o,
                labels: a,
                auctionId: c
            });
            return t = u, d.push(t), u;
        }, c.findBidByAdId = function(t) {
            return o()(d.map(function(e) {
                return e.getBidsReceived();
            }).reduce(r.flatten, []), function(e) {
                return e.adId === t;
            });
        }, c.getStandardBidderAdServerTargeting = function() {
            return Object(s.j)()[a.JSON_MAPPING.ADSERVER_TARGETING];
        }, c.setStatusForBids = function(e, t) {
            var n, r = c.findBidByAdId(e);
            r && (r.status = t), !r || t !== a.BID_STATUS.BID_TARGETING_SET || (n = o()(d, function(e) {
                return e.getAuctionId() === r.auctionId;
            })) && n.setBidTargeting(r);
        }, c.getLastAuctionId = function() {
            return d.length && d[d.length - 1].getAuctionId();
        }, c);
    },
    230: function(e, t, n) {
        "use strict";
        t.a = function() {
            window.addEventListener("message", u, !1);
        };
        var r = n(9), b = n.n(r), v = n(37), i = n(5), o = n.n(i), y = n(0), h = n(23), a = n(10), m = n.n(a), S = n(11), c = n(12), d = n.n(c), A = o.a.EVENTS.BID_WON;
        function u(e) {
            var t, n, r, i, o, a, c, u, s, d = e.message ? "message" : "data", f = {};
            try {
                f = JSON.parse(e[d]);
            } catch (e) {
                return;
            }
            if (f && f.adId) {
                var l, p = m()(h.a.getBidsReceived(), function(e) {
                    return e.adId === f.adId;
                });
                if (p && "Prebid Request" === f.message && (n = e, r = (t = p).adId, i = t.ad, o = t.adUrl, 
                a = t.width, c = t.height, u = t.renderer, s = t.cpm, Object(S.c)(u) ? Object(S.b)(u, t) : r && (E(t), 
                n.source.postMessage(JSON.stringify({
                    message: "Prebid Response",
                    ad: Object(y.replaceAuctionPrice)(i, s),
                    adUrl: Object(y.replaceAuctionPrice)(o, s),
                    adId: r,
                    width: a,
                    height: c
                }), n.origin)), h.a.addWinningBid(p), b.a.emit(A, p)), p && "Prebid Native" === f.message) {
                    if ("assetRequest" === f.action) {
                        var g = Object(v.d)(f, p);
                        return void e.source.postMessage(JSON.stringify(g), e.origin);
                    }
                    if ("allAssetRequest" === f.action ? (l = Object(v.c)(f, p), e.source.postMessage(JSON.stringify(l), e.origin)) : "resizeNativeHeight" === f.action && (p.height = f.height, 
                    p.width = f.width, E(p)), "click" === Object(v.b)(f, p)) return;
                    h.a.addWinningBid(p), b.a.emit(A, p);
                }
            }
        }
        function E(e) {
            var a = e.adId, c = e.adUnitCode, u = e.width, s = e.height;
            [ "div", "iframe" ].forEach(function(e) {
                var t, n, r, i, o = (t = e + ':not([style*="display: none"])', n = function(e, t) {
                    return window.googletag ? function(n) {
                        return m()(window.googletag.pubads().getSlots(), function(t) {
                            return m()(t.getTargetingKeys(), function(e) {
                                return d()(t.getTargeting(e), n);
                            });
                        }).getSlotElementId();
                    }(e) : window.apntag ? function(e) {
                        var t = window.apntag.getTag(e);
                        return t && t.targetId;
                    }(t) : t;
                }(a, c), (r = document.getElementById(n)) && r.querySelector(t));
                o ? ((i = o.style).width = u + "px", i.height = s + "px") : Object(y.logWarn)("Unable to locate matching page element for adUnitCode ".concat(c, ".  Can't resize it to ad's dimensions.  Please review setup."));
            });
        }
    },
    231: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t;
            try {
                e = e || window.sessionStorage, t = JSON.parse(e.getItem(u));
            } catch (e) {}
            t && p(t, !0);
        };
        var r, i, o = n(3), a = n(0), c = n(41), u = "pbjs:debugging";
        function s(e) {
            Object(a.logMessage)("DEBUG: " + e);
        }
        function d(e) {
            Object(a.logWarn)("DEBUG: " + e);
        }
        function f(e) {
            r = function(e, t, n) {
                if (b(this.bidders, n.bidderCode)) return void d("bidder '".concat(n.bidderCode, "' excluded from auction by bidder overrides"));
                Array.isArray(this.bids) && this.bids.forEach(function(e) {
                    g(e, n.bidderCode, t) || v(e, n, "bidder");
                });
                e(t, n);
            }.bind(e), c.c.before(r, 5), i = function(e, t) {
                var r = this, n = t.filter(function(e) {
                    return !b(r.bidders, e.bidderCode) || (d("bidRequest '".concat(e.bidderCode, "' excluded from auction by bidder overrides")), 
                    !1);
                });
                Array.isArray(r.bidRequests) && n.forEach(function(n) {
                    r.bidRequests.forEach(function(t) {
                        n.bids.forEach(function(e) {
                            g(t, n.bidderCode, e.adUnitCode) || v(t, e, "bidRequest");
                        });
                    });
                });
                e(n);
            }.bind(e), c.e.before(i, 5);
        }
        function l() {
            c.c.getHooks({
                hook: r
            }).remove(), c.e.getHooks({
                hook: i
            }).remove();
        }
        function p(e, t) {
            var n = 1 < arguments.length && void 0 !== t && t;
            o.b.setConfig({
                debug: !0
            }), l(), f(e), s("bidder overrides enabled".concat(n ? " from session" : ""));
        }
        function g(e, t, n) {
            return e.bidder && e.bidder !== t || !(!e.adUnitCode || e.adUnitCode === n);
        }
        function b(e, t) {
            return Array.isArray(e) && -1 === e.indexOf(t);
        }
        function v(n, e, r) {
            return Object.keys(n).filter(function(e) {
                return -1 === [ "adUnitCode", "bidder" ].indexOf(e);
            }).reduce(function(e, t) {
                return s("bidder overrides changed '".concat(e.adUnitCode, "/").concat(e.bidderCode, "' ").concat(r, ".").concat(t, " from '").concat(e[t], ".js' to '").concat(n[t], "'")), 
                e[t] = n[t], e;
            }, e);
        }
        function y(e) {
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
        o.b.getConfig("debugging", function(e) {
            return y(e.debugging);
        });
    },
    24: function(e, t, n) {
        var o = n(18);
        e.exports = function(r, i, e) {
            if (o(r), void 0 === i) return r;
            switch (e) {
              case 0:
                return function() {
                    return r.call(i);
                };

              case 1:
                return function(e) {
                    return r.call(i, e);
                };

              case 2:
                return function(e, t) {
                    return r.call(i, e, t);
                };

              case 3:
                return function(e, t, n) {
                    return r.call(i, e, t, n);
                };
            }
            return function() {
                return r.apply(i, arguments);
            };
        };
    },
    25: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return c;
        }), n.d(t, "a", function() {
            return u;
        }), t.d = function(e, t) {
            var n = Object(o.getBidRequest)(e.requestId, t), r = n && Object(o.deepAccess)(n, "mediaTypes.video"), i = r && Object(o.deepAccess)(r, "context");
            return s(e, n, r, i);
        }, n.d(t, "c", function() {
            return s;
        });
        n(8);
        var o = n(0), i = n(3), r = n(12), a = (n.n(r), n(13)), c = "outstream", u = "instream";
        var s = Object(a.b)("sync", function(e, t, n, r) {
            return !t || n && r !== c ? i.b.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), 
            !1) : r !== c || !!(e.renderer || t.renderer || n.renderer);
        }, "checkVideoBidSetup");
    },
    26: function(n, e, t) {
        (function(e) {
            function t(e) {
                return e && e.Math == Math && e;
            }
            n.exports = t("object" == typeof globalThis && globalThis) || t("object" == typeof window && window) || t("object" == typeof self && self) || t("object" == typeof e && e) || Function("return this")();
        }).call(e, t(35));
    },
    27: function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e;
        };
    },
    28: function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t);
        };
    },
    29: function(e, t, n) {
        function r(e) {
            return "function" == typeof e ? e : void 0;
        }
        var i = n(42), o = n(26);
        e.exports = function(e, t) {
            return arguments.length < 2 ? r(i[e]) || r(o[e]) : i[e] && i[e][t] || o[e] && o[e][t];
        };
    },
    3: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return y;
        }), n.d(t, "b", function() {
            return C;
        });
        var r = n(45), i = n(10), a = n.n(i), o = n(12), c = n.n(o), u = n(79), s = n.n(u), d = n(0);
        function f() {
            return (f = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        var l = n(91), p = n(0), g = n(5), b = "TRUE" === p.getParameterByName(g.DEBUG_MODE).toUpperCase(), v = window.location.origin, y = "random", h = {};
        h[y] = !0, h.fixed = !0;
        var m = y, S = {
            LOW: "low",
            MEDIUM: "medium",
            HIGH: "high",
            AUTO: "auto",
            DENSE: "dense",
            CUSTOM: "custom"
        };
        var A, E, O, T, I, C = (T = [], I = null, j(), {
            getCurrentBidder: function() {
                return I;
            },
            getConfig: function() {
                if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                    var e = arguments.length <= 0 ? void 0 : arguments[0];
                    return e ? p.deepAccess(w(), e) : w();
                }
                return function(e, t) {
                    var n = t;
                    if ("string" != typeof e && (n = e, e = "*"), "function" == typeof n) {
                        var r = {
                            topic: e,
                            callback: n
                        };
                        return T.push(r), function() {
                            T.splice(T.indexOf(r), 1);
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
                }), _(r)) : p.logError("setConfig options must be an object");
            },
            setDefaults: function(e) {
                p.isPlainObject(A) ? (f(A, e), f(E, e)) : p.logError("defaults must be an object");
            },
            resetConfig: j,
            runWithBidder: U,
            callbackWithBidder: function(o) {
                return function(i) {
                    return function() {
                        if ("function" == typeof i) {
                            for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            return U(o, (e = p.bind).call.apply(e, [ i, this ].concat(n)));
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
        function j() {
            A = {};
            var n = {
                _debug: b,
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
                _publisherDomain: v,
                get publisherDomain() {
                    return this._publisherDomain;
                },
                set publisherDomain(e) {
                    this._publisherDomain = e;
                },
                _priceGranularity: S.MEDIUM,
                set priceGranularity(e) {
                    o(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : S.MEDIUM : p.isPlainObject(e) && (this._customPriceBucket = e, 
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
                        return o(n[t]) ? "string" == typeof n ? e[t] = i(n[t]) ? n[t] : r._priceGranularity : p.isPlainObject(n) && (e[t] = n[t], 
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
                },
                _auctionOptions: {},
                get auctionOptions() {
                    return this._auctionOptions;
                },
                set auctionOptions(e) {
                    !function(e) {
                        if (!p.isPlainObject(e)) return p.logWarn("Auction Options must be an object"), 
                        !1;
                        for (var t = 0, n = Object.keys(e); t < n.length; t++) {
                            var r = n[t];
                            if ("secondaryBidders" !== r) return p.logWarn("Auction Options given an incorrect param: ".concat(r)), 
                            !1;
                            if ("secondaryBidders" === r) {
                                if (!p.isArray(e[r])) return p.logWarn("Auction Options ".concat(r, " must be of type Array")), 
                                !1;
                                if (!e[r].every(p.isStr)) return p.logWarn("Auction Options ".concat(r, " must be only string")), 
                                !1;
                            }
                        }
                        return !0;
                    }(e) || (this._auctionOptions = e);
                }
            };
            function i(t) {
                return a()(Object.keys(S), function(e) {
                    return t === S[e];
                });
            }
            function o(e) {
                if (e) {
                    if ("string" == typeof e) i(e) || p.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default."); else if (p.isPlainObject(e) && !Object(r.b)(e)) return void p.logError("Invalid custom price value passed to `setPriceGranularity()`");
                    return 1;
                }
                p.logError("Prebid Error: no value passed to `setPriceGranularity()`");
            }
            E && _(Object.keys(E).reduce(function(e, t) {
                return E[t] !== n[t] && (e[t] = n[t] || {}), e;
            }, {})), E = n, O = {};
        }
        function w() {
            if (I && O && p.isPlainObject(O[I])) {
                var n = O[I], e = new s.a(Object.keys(E).concat(Object.keys(n)));
                return l(e).reduce(function(e, t) {
                    return void 0 === n[t] ? e[t] = E[t] : void 0 !== E[t] && p.isPlainObject(n[t]) ? e[t] = Object(d.mergeDeep)({}, E[t], n[t]) : e[t] = n[t], 
                    e;
                }, {});
            }
            return f({}, E);
        }
        function _(i) {
            var t = Object.keys(i);
            T.filter(function(e) {
                return c()(t, e.topic);
            }).forEach(function(e) {
                var t, n, r;
                e.callback((t = {}, n = e.topic, r = i[e.topic], n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, t));
            }), T.filter(function(e) {
                return "*" === e.topic;
            }).forEach(function(e) {
                return e.callback(i);
            });
        }
        function U(e, t) {
            I = e;
            try {
                return t();
            } finally {
                I = null;
            }
        }
    },
    30: function(e, t, n) {
        var r = n(31);
        e.exports = !r(function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7;
                }
            })[1];
        });
    },
    31: function(e, t) {
        e.exports = function(e) {
            try {
                return !!e();
            } catch (e) {
                return !0;
            }
        };
    },
    32: function(e, t, n) {
        var r = n(30), i = n(33), o = n(46);
        e.exports = r ? function(e, t, n) {
            return i.f(e, t, o(1, n));
        } : function(e, t, n) {
            return e[t] = n, e;
        };
    },
    33: function(e, t, n) {
        var r = n(30), i = n(73), o = n(15), a = n(55), c = Object.defineProperty;
        t.f = r ? c : function(e, t, n) {
            if (o(e), t = a(t, !0), o(n), i) try {
                return c(e, t, n);
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
            return "value" in n && (e[t] = n.value), e;
        };
    },
    34: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            return new r(e, t);
        };
        var i = n(0);
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
            }(), this.adId = i.getUniqueIdentifierStr(), this.requestId = t && t.bidId, this.mediaType = "banner", 
            this.source = n, this.getStatusCode = function() {
                return r;
            }, this.getSize = function() {
                return this.width + "x" + this.height;
            };
        }
    },
    35: function(e, t) {
        var n = function() {
            return this;
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this");
        } catch (e) {
            "object" == typeof window && (n = window);
        }
        e.exports = n;
    },
    36: function(e, t, n) {
        var r = n(16), i = n(90);
        e.exports = r ? i : function(e) {
            return Set.prototype.values.call(e);
        };
    },
    360: function(e, t, n) {
        n(361);
        var r = n(52);
        e.exports = r("String", "includes");
    },
    361: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(362), o = n(49);
        r({
            target: "String",
            proto: !0,
            forced: !n(364)("includes")
        }, {
            includes: function(e, t) {
                return !!~String(o(this)).indexOf(i(e), 1 < arguments.length ? t : void 0);
            }
        });
    },
    362: function(e, t, n) {
        var r = n(363);
        e.exports = function(e) {
            if (r(e)) throw TypeError("The method doesn't accept regular expressions");
            return e;
        };
    },
    363: function(e, t, n) {
        var r = n(27), i = n(48), o = n(21)("match");
        e.exports = function(e) {
            var t;
            return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e));
        };
    },
    364: function(e, t, n) {
        var r = n(21)("match");
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
    },
    37: function(e, t, n) {
        "use strict";
        n.d(t, "f", function() {
            return o;
        }), n.d(t, "a", function() {
            return c;
        }), t.h = function(e) {
            if (e && e.type && function(e) {
                return !(!e || !a()(Object.keys(d), e)) || (Object(u.logError)("".concat(e, " nativeParam is not supported")), 
                !1);
            }(e.type)) return d[e.type];
            return e;
        }, t.g = function(t, e) {
            var n = Object(u.getBidRequest)(t.requestId, e);
            if (!n) return !1;
            if (!Object(u.deepAccess)(t, "native.clickUrl")) return !1;
            if (Object(u.deepAccess)(t, "native.image") && (!Object(u.deepAccess)(t, "native.image.height") || !Object(u.deepAccess)(t, "native.image.width"))) return !1;
            if (Object(u.deepAccess)(t, "native.icon") && (!Object(u.deepAccess)(t, "native.icon.height") || !Object(u.deepAccess)(t, "native.icon.width"))) return !1;
            var r = n.nativeParams;
            if (!r) return !0;
            var i = Object.keys(r).filter(function(e) {
                return r[e].required;
            }), o = Object.keys(t.native).filter(function(e) {
                return t.native[e];
            });
            return i.every(function(e) {
                return a()(o, e);
            });
        }, t.b = function(e, t) {
            var n;
            "click" === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers, 
            t.native && t.native.javascriptTrackers && Object(u.insertHtmlIntoIframe)(t.native.javascriptTrackers));
            return (n || []).forEach(u.triggerPixel), e.action;
        }, t.e = function(i, o) {
            var a = {};
            Object(u.deepAccess)(o, "nativeParams.rendererUrl") ? i.native.rendererUrl = f(o.nativeParams.rendererUrl) : Object(u.deepAccess)(o, "nativeParams.adTemplate") && (i.native.adTemplate = f(o.nativeParams.adTemplate));
            var c = !1 !== Object(u.deepAccess)(o, "nativeParams.sendTargetingKeys");
            return Object.keys(i.native).forEach(function(e) {
                var t, n, r;
                "adTemplate" !== e && (t = s.NATIVE_KEYS[e], n = f(i.native[e]), Object(u.deepAccess)(o, "mediaTypes.native.".concat(e, ".sendId")) && (n = "".concat(t, ":").concat(i.adId)), 
                r = Object(u.deepAccess)(o, "nativeParams.".concat(e, ".sendTargetingKeys")), t && n && ("boolean" == typeof r ? r : c) && (a[t] = n));
            }), a;
        }, t.d = function(e, r) {
            var i = {
                message: "assetResponse",
                adId: e.adId,
                assets: []
            };
            r.native.hasOwnProperty("adTemplate") && (i.adTemplate = f(r.native.adTemplate));
            r.native.hasOwnProperty("rendererUrl") && (i.rendererUrl = f(r.native.rendererUrl));
            return e.assets.forEach(function(e) {
                var t = Object(u.getKeyByValue)(s.NATIVE_KEYS, e), n = f(r.native[t]);
                i.assets.push({
                    key: t,
                    value: n
                });
            }), i;
        }, t.c = function(e, r) {
            var i = {
                message: "assetResponse",
                adId: e.adId,
                assets: []
            };
            return Object.keys(r.native).forEach(function(e, t) {
                var n;
                "adTemplate" === e && r.native[e] ? i.adTemplate = f(r.native[e]) : "rendererUrl" === e && r.native[e] ? i.rendererUrl = f(r.native[e]) : r.native[e] && s.NATIVE_KEYS.hasOwnProperty(e) && (n = f(r.native[e]), 
                i.assets.push({
                    key: e,
                    value: n
                }));
            }), i;
        };
        var u = n(0), r = n(12), a = n.n(r);
        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        var s = n(5), o = [], c = Object.keys(s.NATIVE_KEYS).map(function(e) {
            return s.NATIVE_KEYS[e];
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
            return "object" === i(e) && e.url ? e.url : e;
        }
    },
    38: function(e, t) {
        e.exports = {};
    },
    39: function(e, t, n) {
        var i = n(15), o = n(18), a = n(21)("species");
        e.exports = function(e, t) {
            var n, r = i(e).constructor;
            return void 0 === r || null == (n = i(r)[a]) ? t : o(n);
        };
    },
    4: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r;
        }), t.b = i;
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
        var b = n(0), v = 4, r = i();
        function i() {
            var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, d = e.request, f = e.done;
            return function(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                try {
                    var i, o = r.method || (n ? "POST" : "GET"), a = document.createElement("a");
                    a.href = e;
                    var c, u = "object" === g(t) && null !== t ? t : {
                        success: function() {
                            b.logMessage("xhr success");
                        },
                        error: function(e) {
                            b.logError("xhr error", null, e);
                        }
                    };
                    "function" == typeof t && (u.success = t), (i = new window.XMLHttpRequest()).onreadystatechange = function() {
                        var e;
                        i.readyState === v && ("function" == typeof f && f(a.origin), 200 <= (e = i.status) && e < 300 || 304 === e ? u.success(i.responseText, i) : u.error(i.statusText, i));
                    }, l.b.getConfig("disableAjaxTimeout") || (i.ontimeout = function() {
                        b.logError("  xhr timeout after ", i.timeout, "ms");
                    }), "GET" === o && n && (p((c = b.parseUrl(e, r)).search, n), e = b.buildUrl(c)), 
                    i.open(o, e, !0), l.b.getConfig("disableAjaxTimeout") || (i.timeout = s), r.withCredentials && (i.withCredentials = !0), 
                    b._each(r.customHeaders, function(e, t) {
                        i.setRequestHeader(t, e);
                    }), r.preflight && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", r.contentType || "text/plain"), 
                    "function" == typeof d && d(a.origin), "POST" === o && n ? i.send(n) : i.send();
                } catch (e) {
                    b.logError("xhr construction", e);
                }
            };
        }
    },
    40: function(e, t, n) {
        "use strict";
        t.a = function(r, e, t) {
            if (!e || !r) return void o.logError("cannot load external script without url and moduleCode");
            if (!i()(c, e)) return void o.logError("".concat(e, " not whitelisted for loading external JavaScript"));
            if (a[r]) return t && "function" == typeof t && (a[r].loaded ? t() : a[r].callbacks.push(t)), 
            a[r].tag;
            a[r] = {
                loaded: !1,
                tag: null,
                callbacks: []
            }, t && "function" == typeof t && a[r].callbacks.push(t);
            return o.logWarn("module ".concat(e, " is loading external JavaScript")), function(e, t) {
                var n = document.createElement("script");
                n.type = "text/javascript", n.async = !0, (a[r].tag = n).readyState ? n.onreadystatechange = function() {
                    "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, 
                    t());
                } : n.onload = function() {
                    t();
                };
                return n.src = e, o.insertElement(n), n;
            }(r, function() {
                a[r].loaded = !0;
                try {
                    for (var e = 0; e < a[r].callbacks.length; e++) a[r].callbacks[e]();
                } catch (e) {
                    o.logError("Error executing callback", "adloader.js:loadExternalScript", e);
                }
            });
        };
        var r = n(12), i = n.n(r), o = n(0), a = {}, c = [ "criteo", "outstream", "adagio", "browsi" ];
    },
    41: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return L;
        }), n.d(t, "a", function() {
            return F;
        }), t.k = function(e) {
            var t, i, b, v, o = e.adUnits, n = e.adUnitCodes, r = e.callback, a = e.cbTimeout, c = e.labels, u = e.auctionId, y = o, s = c, d = n, h = [], f = [], l = [], p = u || P.generateUUID(), g = r, m = a, S = [], A = new Set();
            function E() {
                return {
                    auctionId: p,
                    timestamp: t,
                    auctionEnd: i,
                    auctionStatus: b,
                    adUnits: y,
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
                e && clearTimeout(v), void 0 === i && (r = [], n && (P.logMessage("Auction ".concat(p, " timedOut")), 
                t = A, (r = h.map(function(e) {
                    return (e.bids || []).filter(function(e) {
                        return !t.has(e.bidder);
                    });
                }).reduce(j.flatten, []).map(function(e) {
                    return {
                        bidId: e.bidId,
                        bidder: e.bidder,
                        adUnitCode: e.adUnitCode,
                        auctionId: e.auctionId
                    };
                })).length && q.emit(G.EVENTS.BID_TIMEOUT, r)), b = F, i = Date.now(), q.emit(G.EVENTS.AUCTION_END, E()), 
                Q(y, function() {
                    try {
                        var e;
                        null != g && (e = f.filter(P.bind.call(j.adUnitsFilter, this, d)).reduce(ee, {}), 
                        g.apply(pbjs, [ e, n, p ]), g = null);
                    } catch (e) {
                        P.logError("Error executing bidsBackHandler", null, e);
                    } finally {
                        r.length && M.callTimedOutBidders(o, r, m);
                        var t = U.b.getConfig("userSync") || {};
                        t.enableOverride || N(t.syncDelay);
                    }
                }));
            }
            function T() {
                P.logInfo("Bids Received for Auction with id: ".concat(p), f), b = F, O(!1, !0);
            }
            function I(e) {
                A.add(e);
            }
            function C(n) {
                var f = this;
                n.forEach(function(e) {
                    var t;
                    t = e, h = h.concat(t);
                });
                var l = {}, e = {
                    bidRequests: n,
                    run: function() {
                        var e, t;
                        e = O.bind(null, !0), t = setTimeout(e, m), v = t, b = L, q.emit(G.EVENTS.AUCTION_INIT, E());
                        var r, i, o, a, c, u, s = (r = T, i = f, o = 0, a = !1, c = new Set(), u = {}, {
                            addBidResponse: function(e, t) {
                                u[t.requestId] = !0, o++;
                                var n = function(e) {
                                    var t = e.adUnitCode, n = e.bid, r = e.bidderRequest, i = e.auctionId, o = r.start, a = D({}, n, {
                                        auctionId: i,
                                        responseTimestamp: Object(j.timestamp)(),
                                        requestTimestamp: o,
                                        cpm: parseFloat(n.cpm) || 0,
                                        bidder: n.bidderCode,
                                        adUnitCode: t
                                    });
                                    a.timeToRespond = a.responseTimestamp - a.requestTimestamp, q.emit(G.EVENTS.BID_ADJUSTMENT, a);
                                    var c = r.bids && B()(r.bids, function(e) {
                                        return e.adUnitCode == t;
                                    }), u = c && c.renderer, s = a.mediaType, d = c && c.mediaTypes && c.mediaTypes[s], f = d && d.renderer, l = null;
                                    !f || !f.url || !0 === f.backupOnly && f.render ? !u || !u.url || !0 === u.backupOnly && n.renderer || (l = u) : l = f, 
                                    l && (a.renderer = _.a.install({
                                        url: l.url
                                    }), a.renderer.setRender(l.render));
                                    var p = Z(n.mediaType, c, U.b.getConfig("mediaTypePriceGranularity")), g = Object(w.a)(a.cpm, "object" === k(p) ? p : U.b.getConfig("customPriceBucket"), U.b.getConfig("currency.granularityMultiplier"));
                                    return a.pbLg = g.low, a.pbMg = g.med, a.pbHg = g.high, a.pbAg = g.auto, a.pbDg = g.dense, 
                                    a.pbCg = g.custom, a;
                                }({
                                    adUnitCode: e,
                                    bid: t,
                                    bidderRequest: this,
                                    auctionId: i.getAuctionId()
                                });
                                "video" === n.mediaType ? function(e, t, n, r) {
                                    var i = !0, o = Object(j.getBidRequest)(t.requestId, [ n ]), a = o && Object(j.deepAccess)(o, "mediaTypes.video"), c = a && Object(j.deepAccess)(a, "context");
                                    U.b.getConfig("cache.url") && c !== R.b && (t.videoCacheKey ? t.vastUrl || (P.logError("videoCacheKey specified but not required vastUrl for video bid"), 
                                    i = !1) : (i = !1, X(e, t, r, o))), i && ($(e, t), r());
                                }(i, n, this, d) : ($(i, n), d());
                            },
                            adapterDone: function() {
                                var t, e = i.getBidRequests(), n = U.b.getConfig("auctionOptions");
                                c.add(this), !n || P.isEmpty(n) || (t = n.secondaryBidders) && !e.every(function(e) {
                                    return x()(t, e.bidderCode);
                                }) && (e = e.filter(function(e) {
                                    return !x()(t, e.bidderCode);
                                })), a = e.every(function(e) {
                                    return c.has(e);
                                }), this.bids.forEach(function(e) {
                                    u[e.bidId] || (i.addNoBid(e), q.emit(G.EVENTS.NO_BID, e));
                                }), a && 0 === o && r();
                            }
                        });
                        function d() {
                            o--, a && 0 === o && r();
                        }
                        M.callBids(y, n, function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            J.apply({
                                dispatch: s.addBidResponse,
                                bidderRequest: this
                            }, t);
                        }, s.adapterDone, {
                            request: function(e, t) {
                                g(V, t), g(l, e), H[e] || (H[e] = {
                                    SRA: !0,
                                    origin: t
                                }), 1 < l[e] && (H[e].SRA = !1);
                            },
                            done: function(e) {
                                V[e]--, K[0] && p(K[0]) && K.shift();
                            }
                        }, m, I);
                    }
                };
                function p(e) {
                    var r = !0, i = U.b.getConfig("maxRequestsPerOrigin") || z;
                    return e.bidRequests.some(function(e) {
                        var t = 1, n = void 0 !== e.src && e.src === G.S2S.SRC ? "s2s" : e.bidderCode;
                        return H[n] && (!1 === H[n].SRA && (t = Math.min(e.bids.length, i)), V[H[n].origin] + t > i && (r = !1)), 
                        !r;
                    }), r && e.run(), r;
                }
                function g(e, t) {
                    void 0 === e[t] ? e[t] = 1 : e[t]++;
                }
                p(e) || (P.logWarn("queueing auction due to limited endpoint capacity"), K.push(e));
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
                    b = W, t = Date.now();
                    var e = M.makeBidRequests(y, t, p, m, s);
                    P.logInfo("Bids Requested for Auction with id: ".concat(p), e), e.length < 1 ? (P.logWarn("No valid bid requests returned for auction"), 
                    T()) : Y.call({
                        dispatch: C,
                        context: this
                    }, e);
                },
                addWinningBid: function(e) {
                    S = S.concat(e), M.callBidWonBidder(e.bidder, e, o);
                },
                setBidTargeting: function(e) {
                    M.callSetTargetingBidder(e.bidder, e);
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
                    return b;
                },
                getAdUnits: function() {
                    return y;
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
            return Y;
        }), t.g = d, t.d = $, n.d(t, "f", function() {
            return X;
        }), n.d(t, "i", function() {
            return f;
        }), n.d(t, "h", function() {
            return l;
        }), t.j = g;
        var j = n(0), w = n(45), a = n(37), o = n(95), _ = n(11), U = n(3), r = n(43), i = n(13), c = n(10), B = n.n(c), u = n(12), x = n.n(u), R = n(25), s = n(2);
        function k(e) {
            return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function D() {
            return (D = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        var N = r.a.syncUsers, P = n(0), M = n(8).default, q = n(9), G = n(5), W = "started", L = "inProgress", F = "completed";
        q.on(G.EVENTS.BID_ADJUSTMENT, function(e) {
            !function(e) {
                var t, n = e.bidderCode, r = e.cpm;
                if (pbjs.bidderSettings && (n && pbjs.bidderSettings[n] && "function" == typeof pbjs.bidderSettings[n].bidCpmAdjustment ? t = pbjs.bidderSettings[n].bidCpmAdjustment : pbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = pbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), 
                t)) try {
                    r = t(e.cpm, D({}, e));
                } catch (e) {
                    P.logError("Error during bid adjustment", "bidmanager.js", e);
                }
                0 <= r && (e.cpm = r);
            }(e);
        });
        var z = 4, V = {}, H = {}, K = [];
        var J = Object(i.b)("async", function(e, t) {
            this.dispatch.call(this.bidderRequest, e, t);
        }, "addBidResponse"), Y = Object(i.b)("sync", function(e) {
            this.dispatch.call(this.context, e);
        }, "addBidderRequests"), Q = Object(i.b)("async", function(e, t) {
            t && t();
        }, "bidsBackCallback");
        function d(e, t) {
            t.timeToRespond > e.getTimeout() + U.b.getConfig("timeoutBuffer") && e.executeCallback(!0);
        }
        function $(e, t) {
            var n = e.getBidRequests(), r = B()(n, function(e) {
                return e.bidderCode === t.bidderCode;
            });
            !function(t, e) {
                var n;
                {
                    var r;
                    t.bidderCode && (0 < t.cpm || t.dealId) && (r = B()(e.bids, function(e) {
                        return e.adUnitCode === t.adUnitCode;
                    }), n = function(e, t, n) {
                        if (!t) return {};
                        var r = {}, i = pbjs.bidderSettings;
                        {
                            var o;
                            i && (o = g(t.mediaType, e, n), b(r, o, t), e && i[e] && i[e][G.JSON_MAPPING.ADSERVER_TARGETING] && (b(r, i[e], t), 
                            t.sendStandardTargeting = i[e].sendStandardTargeting));
                        }
                        t.native && (r = D({}, r, Object(a.e)(t, n)));
                        return r;
                    }(t.bidderCode, t, r));
                }
                t.adserverTargeting = D(t.adserverTargeting || {}, n);
            }(t, r), q.emit(G.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), d(e, t);
        }
        var X = Object(i.b)("async", function(n, r, i, e) {
            Object(o.b)([ r ], function(e, t) {
                e ? (P.logWarn("Failed to save to the video cache: ".concat(e, ". Video bid must be discarded.")), 
                d(n, r)) : "" === t[0].uuid ? (P.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), 
                d(n, r)) : (r.videoCacheKey = t[0].uuid, r.vastUrl || (r.vastUrl = Object(o.a)(r.videoCacheKey)), 
                $(n, r), i());
            }, e);
        }, "callPrebidCache");
        function Z(e, t, n) {
            if (e && n) {
                if (e === s.d) {
                    var r = Object(j.deepAccess)(t, "mediaTypes.".concat(s.d, ".context"), "instream");
                    if (n["".concat(s.d, "-").concat(r)]) return n["".concat(s.d, "-").concat(r)];
                }
                return n[e];
            }
        }
        var f = function(e, t) {
            var n = Z(e, t, U.b.getConfig("mediaTypePriceGranularity"));
            return "string" == typeof e && n ? "string" == typeof n ? n : "custom" : U.b.getConfig("priceGranularity");
        }, l = function(t) {
            return function(e) {
                return t === G.GRANULARITY_OPTIONS.AUTO ? e.pbAg : t === G.GRANULARITY_OPTIONS.DENSE ? e.pbDg : t === G.GRANULARITY_OPTIONS.LOW ? e.pbLg : t === G.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : t === G.GRANULARITY_OPTIONS.HIGH ? e.pbHg : t === G.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0;
            };
        }, p = function() {
            return function(e) {
                return e.meta && e.meta.advertiserDomains && 0 < e.meta.advertiserDomains.length ? e.meta.advertiserDomains[0] : "";
            };
        };
        function g(e, t, n) {
            function r(e, t) {
                return {
                    key: e,
                    val: "function" == typeof t ? function(e) {
                        return t(e);
                    } : function(e) {
                        return Object(j.getValue)(e, t);
                    }
                };
            }
            var i, o, a = G.TARGETING_KEYS, c = f(e, n), u = pbjs.bidderSettings;
            return u[G.JSON_MAPPING.BD_SETTING_STANDARD] || (u[G.JSON_MAPPING.BD_SETTING_STANDARD] = {}), 
            u[G.JSON_MAPPING.BD_SETTING_STANDARD][G.JSON_MAPPING.ADSERVER_TARGETING] || (u[G.JSON_MAPPING.BD_SETTING_STANDARD][G.JSON_MAPPING.ADSERVER_TARGETING] = [ r(a.BIDDER, "bidderCode"), r(a.AD_ID, "adId"), r(a.PRICE_BUCKET, l(c)), r(a.SIZE, "size"), r(a.DEAL, "dealId"), r(a.SOURCE, "source"), r(a.FORMAT, "mediaType"), r(a.ADOMAIN, p()) ]), 
            "video" === e && (i = u[G.JSON_MAPPING.BD_SETTING_STANDARD][G.JSON_MAPPING.ADSERVER_TARGETING], 
            [ a.UUID, a.CACHE_ID ].forEach(function(t) {
                void 0 === B()(i, function(e) {
                    return e.key === t;
                }) && i.push(r(t, "videoCacheKey"));
            }), !U.b.getConfig("cache.url") || t && !1 === P.deepAccess(u, "".concat(t, ".sendStandardTargeting")) || (o = Object(j.parseUrl)(U.b.getConfig("cache.url")), 
            void 0 === B()(i, function(e) {
                return e.key === a.CACHE_HOST;
            }) && i.push(r(a.CACHE_HOST, function(e) {
                return P.deepAccess(e, "adserverTargeting.".concat(a.CACHE_HOST)) ? e.adserverTargeting[a.CACHE_HOST] : o.hostname;
            })))), u[G.JSON_MAPPING.BD_SETTING_STANDARD];
        }
        function b(r, i, o) {
            var e = i[G.JSON_MAPPING.ADSERVER_TARGETING];
            return o.size = o.getSize(), P._each(e, function(e) {
                var t = e.key, n = e.val;
                if (r[t] && P.logWarn("The key: " + t + " is getting ovewritten"), P.isFn(n)) try {
                    n = n(o);
                } catch (e) {
                    P.logError("bidmanager", "ERROR", e);
                }
                (void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && t !== G.TARGETING_KEYS.DEAL || !P.isEmptyStr(n) && null != n ? r[t] = n : P.logInfo("suppressing empty key '" + t + "' from adserver targeting");
            }), r;
        }
        function ee(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = {
                bids: []
            }), e[t.adUnitCode].bids.push(t), e;
        }
    },
    42: function(e, t) {
        e.exports = {};
    },
    43: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return S;
        });
        var a = n(0), r = n(3), i = n(12), o = n.n(i), c = n(7);
        function u(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var n = [], r = !0, i = !1, o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    i = !0, o = e;
                } finally {
                    try {
                        r || null == c.return || c.return();
                    } finally {
                        if (i) throw o;
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
        var l, p, g, b, v, y, h, m = !a.isSafariBrowser() && f.cookiesAreEnabled(), S = (l = {
            config: r.b.getConfig("userSync"),
            browserSupportsCookies: m
        }, p = {}, g = A(), b = new Set(), y = {
            image: !0,
            iframe: !(v = {})
        }, h = l.config, r.b.getConfig("userSync", function(e) {
            var t;
            e.userSync && (t = e.userSync.filterSettings, a.isPlainObject(t) && (t.image || t.all || (e.userSync.filterSettings.image = {
                bidders: "*",
                filter: "include"
            }))), h = d(h, e.userSync);
        }), p.registerSync = function(e, t, n) {
            return b.has(t) ? a.logMessage('already fired syncs for "'.concat(t, '", ignoring registerSync call')) : h.syncEnabled && a.isArray(g[e]) ? t ? 0 !== h.syncsPerBidder && Number(v[t]) >= h.syncsPerBidder ? a.logWarn('Number of user syncs exceeded for "'.concat(t, '"')) : p.canBidderRegisterSync(e, t) ? (g[e].push([ t, n ]), 
            (r = v)[i = t] ? r[i] += 1 : r[i] = 1, void (v = r)) : a.logWarn('Bidder "'.concat(t, '" not permitted to register their "').concat(e, '" userSync pixels.')) : a.logWarn("Bidder is required for registering sync") : a.logWarn('User sync type "'.concat(e, '" not supported'));
            var r, i;
        }, p.syncUsers = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
            if (e) return setTimeout(E, Number(e));
            E();
        }, p.triggerUserSyncs = function() {
            h.enableOverride && p.syncUsers();
        }, p.canBidderRegisterSync = function(e, t) {
            return !h.filterSettings || !T(e, t);
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
                        if (!y.image) return;
                        O(g.image, function(e) {
                            var t = u(e, 2), n = t[0], r = t[1];
                            a.logMessage("Invoking image pixel user sync for bidder: ".concat(n)), a.triggerPixel(r);
                        });
                    }(), function() {
                        if (!y.iframe) return;
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
                t(e), b.add(e[0]);
            });
        }
        function T(e, t) {
            var n = h.filterSettings;
            if (function(e, t) {
                if (e.all && e[t]) return a.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), 
                !1;
                var n = e.all ? e.all : e[t], r = e.all ? "all" : t;
                if (!n) return !1;
                var i = n.filter, o = n.bidders;
                if (i && "include" !== i && "exclude" !== i) return a.logWarn('UserSync "filterSettings.'.concat(r, ".filter\" setting '").concat(i, "' is not a valid option; use either 'include' or 'exclude'.")), 
                !1;
                return !!("*" === o || Array.isArray(o) && 0 < o.length && o.every(function(e) {
                    return a.isStr(e) && "*" !== e;
                })) || (a.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(r, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), 
                !1);
            }(n, e)) {
                y[e] = !0;
                var r = n.all ? n.all : n[e], i = "*" === r.bidders ? [ t ] : r.bidders;
                return {
                    include: function(e, t) {
                        return !o()(e, t);
                    },
                    exclude: function(e, t) {
                        return o()(e, t);
                    }
                }[r.filter || "include"](i, t);
            }
        }
    },
    44: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return l;
        });
        var A = n(0), E = n(3), O = n(37), r = n(23), i = n(93), o = n(2), a = n(12), T = n.n(a), c = n(10), I = n.n(c);
        function C() {
            return (C = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        function j(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function w(e) {
            return function(e) {
                if (Array.isArray(e)) return u(e);
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
            }(e) || function(e, t) {
                if (!e) return;
                if ("string" == typeof e) return u(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t);
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function u(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        var _ = n(0), U = n(5), B = [], x = Object.keys(U.TARGETING_KEYS).map(function(e) {
            return U.TARGETING_KEYS[e];
        }), s = function(e) {
            return e.responseTimestamp + 1e3 * e.ttl + 1e3 > Object(A.timestamp)();
        }, d = function(e) {
            return e && (e.status && !T()([ U.BID_STATUS.RENDERED ], e.status) || !e.status);
        };
        function R(e, r, t) {
            var i = 2 < arguments.length && void 0 !== t ? t : 0, o = [], a = E.b.getConfig("sendBidsControl.dealPrioritization"), c = Object(A.groupBy)(e, "adUnitCode");
            return Object.keys(c).forEach(function(e) {
                var t = [], n = Object(A.groupBy)(c[e], "bidderCode");
                Object.keys(n).forEach(function(e) {
                    return t.push(n[e].reduce(r));
                }), 0 < i ? (t = a ? t.sort(k(!0)) : t.sort(function(e, t) {
                    return t.cpm - e.cpm;
                }), o.push.apply(o, w(t.slice(0, i)))) : o.push.apply(o, w(t));
            }), o;
        }
        function k(e) {
            var n = 0 < arguments.length && void 0 !== e && e;
            return function(e, t) {
                return void 0 !== e.adserverTargeting.hb_deal && void 0 === t.adserverTargeting.hb_deal ? -1 : void 0 === e.adserverTargeting.hb_deal && void 0 !== t.adserverTargeting.hb_deal ? 1 : n ? t.cpm - e.cpm : t.adserverTargeting.hb_pb - e.adserverTargeting.hb_pb;
            };
        }
        var D, N, f, l = (D = r.a, f = {}, (N = {}).setLatestAuctionForAdUnit = function(e, t) {
            f[e] = t;
        }, N.resetPresetTargeting = function(e, t) {
            var n, i;
            Object(A.isGptPubadsDefined)() && (n = M(e), i = D.getAdUnits().filter(function(e) {
                return T()(n, e.code);
            }), window.googletag.pubads().getSlots().forEach(function(n) {
                var r = _.isFn(t) && t(n);
                B.forEach(function(t) {
                    i.forEach(function(e) {
                        (e.code === n.getAdUnitPath() || e.code === n.getSlotElementId() || _.isFn(r) && r(e.code)) && n.setTargeting(t, null);
                    });
                });
            }));
        }, N.resetPresetTargetingAST = function(e) {
            M(e).forEach(function(e) {
                var t, n, r = window.apntag.getTag(e);
                r && r.keywords && (t = Object.keys(r.keywords), n = {}, t.forEach(function(e) {
                    T()(B, e.toLowerCase()) || (n[e] = r.keywords[e]);
                }), window.apntag.modifyTag(e, {
                    keywords: n
                }));
            });
        }, N.getAllTargeting = function(e) {
            var t, n, r, i, o, a, c, u, s, d, f = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : q(), l = M(e), p = (c = l, 
            u = f, s = N.getWinningBids(c, u), d = G(), (s = s.map(function(o) {
                return j({}, o.adUnitCode, Object.keys(o.adserverTargeting).filter(function(e) {
                    return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === d.indexOf(e);
                }).reduce(function(e, t) {
                    var n = [ o.adserverTargeting[t] ], r = j({}, t.substring(0, 20), n);
                    if (t !== U.TARGETING_KEYS.DEAL) return [].concat(w(e), [ r ]);
                    var i = j({}, "".concat(t, "_").concat(o.bidderCode).substring(0, 20), n);
                    return [].concat(w(e), [ r, i ]);
                }, []));
            })).concat((a = l, f.filter(function(e) {
                return T()(a, e.adUnitCode);
            }).map(function(e) {
                return C({}, e);
            }).reduce(W, []).map(L).filter(function(e) {
                return e;
            }))).concat(E.b.getConfig("enableSendAllBids") ? (n = l, r = f, i = x.concat(O.a), 
            o = E.b.getConfig("sendBidsControl.bidLimit"), R(r, A.getHighestCpm, o).map(function(t) {
                if (P(t, n)) return j({}, t.adUnitCode, F(t, i.filter(function(e) {
                    return void 0 !== t.adserverTargeting[e];
                })));
            }).filter(function(e) {
                return e;
            })) : function(e, t) {
                if (!0 !== E.b.getConfig("targetingControls.alwaysIncludeDeals")) return [];
                var n = x.concat(O.a);
                return R(t, A.getHighestCpm).map(function(t) {
                    if (t.dealId && P(t, e)) return j({}, t.adUnitCode, F(t, n.filter(function(e) {
                        return void 0 !== t.adserverTargeting[e];
                    })));
                }).filter(function(e) {
                    return e;
                });
            }(l, f)).concat((t = l, D.getAdUnits().filter(function(e) {
                return T()(t, e.code) && g(e);
            }).map(function(e) {
                return j({}, e.code, (t = g(e), Object.keys(t).map(function(e) {
                    return j({}, e, _.isArray(t[e]) ? t[e] : t[e].split(","));
                })));
                var t;
            }))));
            function g(e) {
                return Object(A.deepAccess)(e, U.JSON_MAPPING.ADSERVER_TARGETING);
            }
            p.map(function(t) {
                Object.keys(t).map(function(e) {
                    t[e].map(function(e) {
                        -1 === B.indexOf(Object.keys(e)[0]) && (B = Object.keys(e).concat(B));
                    });
                });
            });
            var b = Object.keys(C({}, U.DEFAULT_TARGETING_KEYS, U.NATIVE_KEYS)), v = E.b.getConfig("targetingControls.allowTargetingKeys") || b;
            Array.isArray(v) && 0 < v.length && (p = function(e, r) {
                var i = C({}, U.TARGETING_KEYS, U.NATIVE_KEYS), o = Object.keys(i), a = {};
                Object(A.logInfo)("allowTargetingKeys - allowed keys [ ".concat(r.map(function(e) {
                    return i[e];
                }).join(", "), " ]")), e.map(function(e) {
                    var t = Object.keys(e)[0], n = e[t].filter(function(e) {
                        var n = Object.keys(e)[0], t = 0 === o.filter(function(e) {
                            return 0 === n.indexOf(i[e]);
                        }).length || I()(r, function(e) {
                            var t = i[e];
                            return 0 === n.indexOf(t);
                        });
                        return a[n] = !t, t;
                    });
                    e[t] = n;
                });
                var t = Object.keys(a).filter(function(e) {
                    return a[e];
                });
                return Object(A.logInfo)("allowTargetingKeys - removed keys [ ".concat(t.join(", "), " ]")), 
                e.filter(function(e) {
                    return 0 < e[Object.keys(e)[0]].length;
                });
            }(p, v)), p = p.map(function(e) {
                return j({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function(e) {
                    return j({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "));
                }).reduce(function(e, t) {
                    return C(t, e);
                }, {}));
            }).reduce(function(e, t) {
                var n = Object.keys(t)[0];
                return e[n] = C({}, e[n], t[n]), e;
            }, {});
            var y, h, m, S = E.b.getConfig("targetingControls.auctionKeyMaxChars");
            return S && (Object(A.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(S, " characters.  Running checks on auction keys...")), 
            y = p, h = S, m = Object(A.deepClone)(y), p = Object.keys(m).map(function(e) {
                return {
                    adUnitCode: e,
                    adserverTargeting: m[e]
                };
            }).sort(k()).reduce(function(e, t, n, r) {
                var i, o = (i = t.adserverTargeting, Object.keys(i).reduce(function(e, t) {
                    return e + "".concat(t, "%3d").concat(encodeURIComponent(i[t]), "%26");
                }, ""));
                n + 1 === r.length && (o = o.slice(0, -3));
                var a = t.adUnitCode, c = o.length;
                return c <= h ? (h -= c, Object(A.logInfo)("AdUnit '".concat(a, "' auction keys comprised of ").concat(c, " characters.  Deducted from running threshold; new limit is ").concat(h), m[a]), 
                e[a] = m[a]) : Object(A.logWarn)("The following keys for adUnitCode '".concat(a, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(c, ", the current allotted amount was ").concat(h, ".\n"), m[a]), 
                n + 1 === r.length && 0 === Object.keys(e).length && Object(A.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."), 
                e;
            }, {})), l.forEach(function(e) {
                p[e] || (p[e] = {});
            }), p;
        }, N.setTargetingForGPT = function(i, e) {
            window.googletag.pubads().getSlots().forEach(function(r) {
                Object.keys(i).filter((e || Object(A.isAdUnitCodeMatchingSlot))(r)).forEach(function(n) {
                    return Object.keys(i[n]).forEach(function(t) {
                        var e = i[n][t];
                        "string" == typeof e && (e = e.split(",")), (e = 1 < e.length ? [ e ] : e).map(function(e) {
                            return _.logMessage("Attempting to set key value for slot: ".concat(r.getSlotElementId(), " key: ").concat(t, " value: ").concat(e)), 
                            e;
                        }).forEach(function(e) {
                            r.setTargeting(t, e);
                        });
                    });
                });
            });
        }, N.getWinningBids = function(e) {
            var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : q(), t = M(e);
            return n.filter(function(e) {
                return T()(t, e.adUnitCode);
            }).filter(function(e) {
                return 0 < e.cpm;
            }).map(function(e) {
                return e.adUnitCode;
            }).filter(A.uniques).map(function(t) {
                return n.filter(function(e) {
                    return e.adUnitCode === t ? e : null;
                }).reduce(A.getHighestCpm);
            });
        }, N.setTargetingForAst = function(e) {
            var r = N.getAllTargeting(e);
            try {
                N.resetPresetTargetingAST(e);
            } catch (e) {
                _.logError("unable to reset targeting for AST" + e);
            }
            Object.keys(r).forEach(function(n) {
                return Object.keys(r[n]).forEach(function(e) {
                    var t;
                    _.logMessage("Attempting to set targeting for targetId: ".concat(n, " key: ").concat(e, " value: ").concat(r[n][e])), 
                    (_.isStr(r[n][e]) || _.isArray(r[n][e])) && (t = {}, e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e], 
                    window.apntag.setKeywords(n, t, {
                        overrideKeyValue: !0
                    }));
                });
            });
        }, N.isApntagDefined = function() {
            if (window.apntag && _.isFn(window.apntag.setKeywords)) return !0;
        }, N);
        function P(e, t) {
            return e.adserverTargeting && t && (_.isArray(t) && T()(t, e.adUnitCode) || "string" == typeof t && e.adUnitCode === t);
        }
        function M(e) {
            return "string" == typeof e ? [ e ] : _.isArray(e) ? e : D.getAdUnitCodes() || [];
        }
        function q() {
            var e = D.getBidsReceived();
            return E.b.getConfig("useBidCache") || (e = e.filter(function(e) {
                return f[e.adUnitCode] === e.auctionId;
            })), R(e = e.filter(function(e) {
                return Object(A.deepAccess)(e, "video.context") !== o.a;
            }).filter(function(e) {
                return "banner" !== e.mediaType || Object(i.c)([ e.width, e.height ]);
            }).filter(d).filter(s), A.getOldestHighestCpmBid);
        }
        function G() {
            return D.getStandardBidderAdServerTargeting().map(function(e) {
                return e.key;
            }).concat(x).filter(A.uniques);
        }
        function W(r, i, e, t) {
            return Object.keys(i.adserverTargeting).filter(p()).forEach(function(e) {
                var t, n;
                r.length && r.filter((n = e, function(e) {
                    return e.adUnitCode === i.adUnitCode && e.adserverTargeting[n];
                })).forEach((t = e, function(e) {
                    _.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [ e.adserverTargeting[t] ]), 
                    e.adserverTargeting[t] = e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(A.uniques), 
                    delete i.adserverTargeting[t];
                }));
            }), r.push(i), r;
        }
        function p() {
            var t = G().concat(O.a);
            return function(e) {
                return -1 === t.indexOf(e);
            };
        }
        function L(t) {
            return j({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(p()).map(function(e) {
                return j({}, e.substring(0, 20), [ t.adserverTargeting[e] ]);
            }));
        }
        function F(t, e) {
            return e.map(function(e) {
                return j({}, "".concat(e, "_").concat(t.bidderCode).substring(0, 20), [ t.adserverTargeting[e] ]);
            });
        }
    },
    45: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return d;
        }), n.d(t, "b", function() {
            return h;
        });
        var r = n(10), v = n.n(r), i = n(0), y = 2, o = {
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
                low: "" === r ? "" : f(e, o, n),
                med: "" === r ? "" : f(e, a, n),
                high: "" === r ? "" : f(e, c, n),
                auto: "" === r ? "" : f(e, s, n),
                dense: "" === r ? "" : f(e, u, n),
                custom: "" === r ? "" : f(e, t, n)
            };
        }
        function f(n, e, r) {
            var i = "";
            if (!h(e)) return i;
            var t, o, a, c, u, s, d, f, l, p = e.buckets.reduce(function(e, t) {
                return e.max > t.max ? e : t;
            }, {
                max: 0
            }), g = 0, b = v()(e.buckets, function(e) {
                if (n > p.max * r) {
                    var t = e.precision;
                    void 0 === t && (t = y), i = (e.max * r).toFixed(t);
                } else {
                    if (n <= e.max * r && g * r <= n) return e.min = g, e;
                    g = e.max;
                }
            });
            return b && (t = n, a = r, c = void 0 !== (o = b).precision ? o.precision : y, u = o.increment * a, 
            s = o.min * a, d = Math.pow(10, c + 2), f = (t * d - s * d) / (u * d), l = Math.floor(f) * u + s, 
            i = (l = Number(l.toFixed(10))).toFixed(c)), i;
        }
        function h(e) {
            if (i.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
            var t = !0;
            return e.buckets.forEach(function(e) {
                e.max && e.increment || (t = !1);
            }), t;
        }
    },
    46: function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            };
        };
    },
    47: function(e, t, n) {
        var r = n(72), i = n(49);
        e.exports = function(e) {
            return r(i(e));
        };
    },
    48: function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1);
        };
    },
    49: function(e, t) {
        e.exports = function(e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e;
        };
    },
    5: function(e, t) {
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
                AD_RENDER_FAILED: "adRenderFailed",
                TCF2_ENFORCEMENT: "tcf2Enforcement",
                AUCTION_DEBUG: "auctionDebug"
            },
            AD_RENDER_FAILED_REASON: {
                PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocument",
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
                CACHE_HOST: "hb_cache_host",
                ADOMAIN: "hb_adomain"
            },
            DEFAULT_TARGETING_KEYS: {
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
                salePrice: "hb_native_saleprice",
                rendererUrl: "hb_renderer_url",
                adTemplate: "hb_adTemplate"
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
    },
    50: function(e, t, n) {
        var r = n(58), i = Math.min;
        e.exports = function(e) {
            return 0 < e ? i(r(e), 9007199254740991) : 0;
        };
    },
    51: function(e, t) {
        e.exports = function() {};
    },
    517: function(e, t, n) {
        var r = n(518);
        e.exports = r;
    },
    518: function(e, t, n) {
        n(519);
        var r = n(42);
        e.exports = r.Number.isInteger;
    },
    519: function(e, t, n) {
        n(14)({
            target: "Number",
            stat: !0
        }, {
            isInteger: n(520)
        });
    },
    52: function(e, t, n) {
        var r = n(29);
        e.exports = r;
    },
    520: function(e, t, n) {
        var r = n(27), i = Math.floor;
        e.exports = function(e) {
            return !r(e) && isFinite(e) && i(e) === e;
        };
    },
    53: function(e, t) {
        e.exports = {};
    },
    54: function(e, t, n) {
        var r, i, o, a, c, u, s, d, f = n(115), l = n(26), p = n(27), g = n(32), b = n(28), v = n(65), y = n(53), h = l.WeakMap;
        s = f ? (r = new h(), i = r.get, o = r.has, a = r.set, c = function(e, t) {
            return a.call(r, e, t), t;
        }, u = function(e) {
            return i.call(r, e) || {};
        }, function(e) {
            return o.call(r, e);
        }) : (y[d = v("state")] = !0, c = function(e, t) {
            return g(e, d, t), t;
        }, u = function(e) {
            return b(e, d) ? e[d] : {};
        }, function(e) {
            return b(e, d);
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
    },
    55: function(e, t, n) {
        var i = n(27);
        e.exports = function(e, t) {
            if (!i(e)) return e;
            var n, r;
            if (t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
            if ("function" == typeof (n = e.valueOf) && !i(r = n.call(e))) return r;
            if (!t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    56: function(e, t, n) {
        function r(p) {
            var g = 1 == p, b = 2 == p, v = 3 == p, y = 4 == p, h = 6 == p, m = 5 == p || h;
            return function(e, t, n, r) {
                for (var i, o, a = E(e), c = A(a), u = S(t, n, 3), s = O(c.length), d = 0, f = r || T, l = g ? f(e, s) : b ? f(e, 0) : void 0; d < s; d++) if ((m || d in c) && (o = u(i = c[d], d, a), 
                p)) if (g) l[d] = o; else if (o) switch (p) {
                  case 3:
                    return !0;

                  case 5:
                    return i;

                  case 6:
                    return d;

                  case 2:
                    I.call(l, i);
                } else if (y) return !1;
                return h ? -1 : v || y ? y : l;
            };
        }
        var S = n(24), A = n(72), E = n(57), O = n(50), T = n(103), I = [].push;
        e.exports = {
            forEach: r(0),
            map: r(1),
            filter: r(2),
            some: r(3),
            every: r(4),
            find: r(5),
            findIndex: r(6)
        };
    },
    57: function(e, t, n) {
        var r = n(49);
        e.exports = function(e) {
            return Object(r(e));
        };
    },
    58: function(e, t) {
        var n = Math.ceil, r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e);
        };
    },
    59: function(e, t) {
        var n = 0, r = Math.random();
        e.exports = function(e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36);
        };
    },
    60: function(e, t, n) {
        function a(e) {
            throw e;
        }
        var c = n(30), u = n(31), s = n(28), d = Object.defineProperty, f = {};
        e.exports = function(e, t) {
            if (s(f, e)) return f[e];
            var n = [][e], r = !!s(t = t || {}, "ACCESSORS") && t.ACCESSORS, i = s(t, 0) ? t[0] : a, o = s(t, 1) ? t[1] : void 0;
            return f[e] = !!n && !u(function() {
                if (r && !c) return !0;
                var e = {
                    length: -1
                };
                r ? d(e, 1, {
                    enumerable: !0,
                    get: a
                }) : e[1] = 1, n.call(e, i, o);
            });
        };
    },
    61: function(e, t, n) {
        var r = n(62), i = n(38), o = n(21)("iterator");
        e.exports = function(e) {
            if (null != e) return e[o] || e["@@iterator"] || i[r(e)];
        };
    },
    62: function(e, t, n) {
        var r = n(63), i = n(48), o = n(21)("toStringTag"), a = "Arguments" == i(function() {
            return arguments;
        }());
        e.exports = r ? i : function(e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
                try {
                    return e[t];
                } catch (e) {}
            }(t = Object(e), o)) ? n : a ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r;
        };
    },
    63: function(e, t, n) {
        var r = {};
        r[n(21)("toStringTag")] = "z", e.exports = "[object z]" === String(r);
    },
    64: function(e, t, n) {
        var o = n(63), a = n(33).f, c = n(32), u = n(28), s = n(114), d = n(21)("toStringTag");
        e.exports = function(e, t, n, r) {
            var i;
            e && (i = n ? e : e.prototype, u(i, d) || a(i, d, {
                configurable: !0,
                value: t
            }), r && !o && c(i, "toString", s));
        };
    },
    65: function(e, t, n) {
        var r = n(75), i = n(59), o = r("keys");
        e.exports = function(e) {
            return o[e] || (o[e] = i(e));
        };
    },
    66: function(e, t, n) {
        "use strict";
        function y() {
            return this;
        }
        var h = n(14), m = n(123), S = n(88), A = n(125), E = n(64), O = n(32), T = n(86), r = n(21), I = n(16), C = n(38), i = n(87), j = i.IteratorPrototype, w = i.BUGGY_SAFARI_ITERATORS, _ = r("iterator"), U = "values", B = "entries";
        e.exports = function(e, t, n, r, i, o, a) {
            m(n, t, r);
            function c(e) {
                if (e === i && b) return b;
                if (!w && e in p) return p[e];
                switch (e) {
                  case "keys":
                  case U:
                  case B:
                    return function() {
                        return new n(this, e);
                    };
                }
                return function() {
                    return new n(this);
                };
            }
            var u, s, d, f = t + " Iterator", l = !1, p = e.prototype, g = p[_] || p["@@iterator"] || i && p[i], b = !w && g || c(i), v = "Array" == t && p.entries || g;
            if (v && (u = S(v.call(new e())), j !== Object.prototype && u.next && (I || S(u) === j || (A ? A(u, j) : "function" != typeof u[_] && O(u, _, y)), 
            E(u, f, !0, !0), I && (C[f] = y))), i == U && g && g.name !== U && (l = !0, b = function() {
                return g.call(this);
            }), I && !a || p[_] === b || O(p, _, b), C[t] = b, i) if (s = {
                values: c(U),
                keys: o ? b : c("keys"),
                entries: c(B)
            }, a) for (d in s) !w && !l && d in p || T(p, d, s[d]); else h({
                target: t,
                proto: !0,
                forced: w || l
            }, s);
            return s;
        };
    },
    67: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o;
        });
        var r = n(0), c = {};
        function i(e, t, n) {
            var r, i, o, a = (i = n, o = c[r = e] = c[r] || {
                bidders: {}
            }, i ? o.bidders[i] = o.bidders[i] || {} : o);
            return a[t] = (a[t] || 0) + 1, a[t];
        }
        var o = {
            incrementRequestsCounter: function(e) {
                return i(e, "requestsCounter");
            },
            incrementBidderRequestsCounter: function(e, t) {
                return i(e, "requestsCounter", t);
            },
            incrementBidderWinsCounter: function(e, t) {
                return i(e, "winsCounter", t);
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
    },
    69: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "adUnitSetupChecks", function() {
            return H;
        }), n.d(t, "checkAdUnitSetup", function() {
            return K;
        }), t.executeCallbacks = Q;
        var r = n(20), i = n(0), o = n(230), a = n(43), l = n(3), m = n(23), p = n(44), c = n(13), u = n(231), s = n(12), g = n.n(s), b = n(67), S = n(11), d = n(34), f = n(7);
        function v(e) {
            return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function y(e) {
            return function(e) {
                if (Array.isArray(e)) return h(e);
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
            }(e) || function(e, t) {
                if (!e) return;
                if ("string" == typeof e) return h(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t);
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function h(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function A() {
            return (A = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        var E = Object(r.a)(), O = n(5), T = n(0), I = n(8).default, C = n(9), j = a.a.triggerUserSyncs, w = O.EVENTS, _ = w.ADD_AD_UNITS, U = w.BID_WON, B = w.REQUEST_BIDS, x = w.SET_TARGETING, R = w.AD_RENDER_FAILED, k = O.AD_RENDER_FAILED_REASON, D = k.PREVENT_WRITING_ON_MAIN_DOCUMENT, N = k.NO_AD, P = k.EXCEPTION, M = k.CANNOT_FIND_AD, q = k.MISSING_DOC_OR_ADID, G = {
            bidWon: function(e) {
                var t = m.a.getBidsRequested().map(function(e) {
                    return e.bids.map(function(e) {
                        return e.adUnitCode;
                    });
                }).reduce(i.flatten).filter(i.uniques);
                return !!T.contains(t, e) || void T.logError('The "' + e + '" placement is not defined.');
            }
        };
        function W(e, t, n) {
            e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, 
            e.defaultView.frameElement.height = n);
        }
        function L(e, t) {
            var n = [];
            return T.isArray(e) && (t ? e.length === t : 0 < e.length) && (e.every(function(e) {
                return Object(i.isArrayOfNums)(e, 2);
            }) ? n = e : Object(i.isArrayOfNums)(e, 2) && n.push(e)), n;
        }
        function F(e) {
            var t = T.deepClone(e), n = t.mediaTypes.banner, r = L(n.sizes);
            return 0 < r.length ? (n.sizes = r, t.sizes = r) : (T.logError("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."), 
            delete t.mediaTypes.banner), t;
        }
        function z(e) {
            var t, n, r = T.deepClone(e), i = r.mediaTypes.video;
            return i.playerSize && (t = "number" == typeof i.playerSize[0] ? 2 : 1, 0 < (n = L(i.playerSize, t)).length ? (2 == t && T.logInfo("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."), 
            i.playerSize = n, r.sizes = n) : (T.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), 
            delete r.mediaTypes.video.playerSize)), r;
        }
        function V(e) {
            var t = T.deepClone(e), n = t.mediaTypes.native;
            return n.image && n.image.sizes && !Array.isArray(n.image.sizes) && (T.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), 
            delete t.mediaTypes.native.image.sizes), n.image && n.image.aspect_ratios && !Array.isArray(n.image.aspect_ratios) && (T.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), 
            delete t.mediaTypes.native.image.aspect_ratios), n.icon && n.icon.sizes && !Array.isArray(n.icon.sizes) && (T.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), 
            delete t.mediaTypes.native.icon.sizes), t;
        }
        Object(u.a)(), E.bidderSettings = E.bidderSettings || {}, E.libLoaded = !0, E.version = "v4.25.0", 
        T.logInfo("Prebid.js v4.25.0 loaded"), E.adUnits = E.adUnits || [], E.triggerUserSyncs = j;
        var H = {
            validateBannerMediaType: F,
            validateVideoMediaType: z,
            validateNativeMediaType: V,
            validateSizes: L
        }, K = Object(c.b)("sync", function(e) {
            var c = [];
            return e.forEach(function(e) {
                var t, n, r, i, o = e.mediaTypes, a = e.bids;
                a && T.isArray(a) ? o && 0 !== Object.keys(o).length ? (o.banner && (t = F(e)), 
                o.video && (n = z(t || e)), o.native && (r = V(n || t || e)), i = A({}, t, n, r), 
                c.push(i)) : T.logError("Detected adUnit.code '".concat(e.code, "' did not have a 'mediaTypes' object defined.  This is a required field for the auction, so this adUnit has been removed.")) : T.logError("Detected adUnit.code '".concat(e.code, "' did not have 'adUnit.bids' defined or 'adUnit.bids' is not an array. Removing adUnit from auction."));
            }), c;
        }, "checkAdUnitSetup");
        function J(e) {
            var n = m.a[e]().filter(T.bind.call(i.adUnitsFilter, this, m.a.getAdUnitCodes())), r = m.a.getLastAuctionId();
            return n.map(function(e) {
                return e.adUnitCode;
            }).filter(i.uniques).map(function(t) {
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
                return A(e, t);
            }, {});
        }
        function Y(e) {
            var t = e.reason, n = e.message, r = e.bid, i = e.id, o = {
                reason: t,
                message: n
            };
            r && (o.bid = r), i && (o.adId = i), T.logError(n), C.emit(R, o);
        }
        function Q(e, t) {
            function n(e) {
                for (var t; t = e.shift(); ) t();
            }
            n(f.c), n($), e.call(this, t);
        }
        E.getAdserverTargetingForAdUnitCodeStr = function(e) {
            if (T.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), 
            e) {
                var t = E.getAdserverTargetingForAdUnitCode(e);
                return T.transformAdServerTargetingObj(t);
            }
            T.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode");
        }, E.getAdserverTargetingForAdUnitCode = function(e) {
            return E.getAdserverTargeting(e)[e];
        }, E.getAdserverTargeting = function(e) {
            return T.logInfo("Invoking pbjs.getAdserverTargeting", arguments), p.a.getAllTargeting(e);
        }, E.getNoBids = function() {
            return T.logInfo("Invoking pbjs.getNoBids", arguments), J("getNoBids");
        }, E.getNoBidsForAdUnitCode = function(t) {
            return {
                bids: m.a.getNoBids().filter(function(e) {
                    return e.adUnitCode === t;
                })
            };
        }, E.getBidResponses = function() {
            return T.logInfo("Invoking pbjs.getBidResponses", arguments), J("getBidsReceived");
        }, E.getBidResponsesForAdUnitCode = function(t) {
            return {
                bids: m.a.getBidsReceived().filter(function(e) {
                    return e.adUnitCode === t;
                })
            };
        }, E.setTargetingForGPTAsync = function(e, t) {
            var n;
            T.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), Object(i.isGptPubadsDefined)() ? (n = p.a.getAllTargeting(e), 
            p.a.resetPresetTargeting(e, t), p.a.setTargetingForGPT(n, t), Object.keys(n).forEach(function(t) {
                Object.keys(n[t]).forEach(function(e) {
                    "hb_adid" === e && m.a.setStatusForBids(n[t][e], O.BID_STATUS.BID_TARGETING_SET);
                });
            }), C.emit(x, n)) : T.logError("window.googletag is not defined on the page");
        }, E.setTargetingForAst = function(e) {
            T.logInfo("Invoking pbjs.setTargetingForAn", arguments), p.a.isApntagDefined() ? (p.a.setTargetingForAst(e), 
            C.emit(x, p.a.getAllTargeting())) : T.logError("window.apntag is not defined on the page");
        }, E.renderAd = function(e, t, n) {
            if (T.logInfo("Invoking pbjs.renderAd", arguments), T.logMessage("Calling renderAd with adId :" + t), 
            e && t) try {
                var r, i, o, a, c, u, s, d, f, l, p, g, b, v = m.a.findBidByAdId(t);
                v ? (v.ad = T.replaceAuctionPrice(v.ad, v.cpm), v.adUrl = T.replaceAuctionPrice(v.adUrl, v.cpm), 
                n && n.clickThrough && (r = n.clickThrough, v.ad = T.replaceClickThrough(v.ad, r), 
                v.adUrl = T.replaceClickThrough(v.adUrl, r)), m.a.addWinningBid(v), C.emit(U, v), 
                i = v.height, o = v.width, a = v.ad, c = v.mediaType, u = v.adUrl, s = v.renderer, 
                d = document.createComment("Creative ".concat(v.creativeId, " served by ").concat(v.bidder, " Prebid.js Header Bidding")), 
                T.insertElement(d, e, "body"), Object(S.c)(s) ? Object(S.b)(s, v) : e === document && !T.inIframe() || "video" === c ? (f = "Error trying to write ad. Ad render call ad id ".concat(t, " was prevented from writing to the main document."), 
                Y({
                    reason: D,
                    message: f,
                    bid: v,
                    id: t
                })) : a ? (navigator.userAgent && -1 < navigator.userAgent.toLowerCase().indexOf("firefox/") && (l = navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/)[1]) && parseInt(l, 10) < 67 && e.open("text/html", "replace"), 
                e.write(a), e.close(), W(e, o, i), T.callBurl(v)) : u ? ((p = T.createInvisibleIframe()).height = i, 
                p.width = o, p.style.display = "inline", p.style.overflow = "hidden", p.src = u, 
                T.insertElement(p, e, "body"), W(e, o, i), T.callBurl(v)) : (g = "Error trying to write ad. No ad for bid response id: ".concat(t), 
                Y({
                    reason: N,
                    message: g,
                    bid: v,
                    id: t
                }))) : (b = "Error trying to write ad. Cannot find ad by given id : ".concat(t), 
                Y({
                    reason: M,
                    message: b,
                    id: t
                }));
            } catch (e) {
                var y = "Error trying to write ad Id :".concat(t, " to the page:").concat(e.message);
                Y({
                    reason: P,
                    message: y,
                    id: t
                });
            } else {
                var h = "Error trying to write ad Id :".concat(t, " to the page. Missing document or adId");
                Y({
                    reason: q,
                    message: h,
                    id: t
                });
            }
        }, E.removeAdUnit = function(e) {
            T.logInfo("Invoking pbjs.removeAdUnit", arguments), e ? (T.isArray(e) ? e : [ e ]).forEach(function(e) {
                for (var t = E.adUnits.length - 1; 0 <= t; t--) E.adUnits[t].code === e && E.adUnits.splice(t, 1);
            }) : E.adUnits = [];
        }, E.requestBids = Object(c.b)("async", function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.bidsBackHandler, n = e.timeout, r = e.adUnits, i = e.adUnitCodes, o = e.labels, a = e.auctionId;
            C.emit(B);
            var c = n || l.b.getConfig("bidderTimeout"), r = r || E.adUnits;
            T.logInfo("Invoking pbjs.requestBids", arguments);
            var u = [], s = [];
            if (l.b.getConfig("s2sConfig", function(e) {
                e && e.s2sConfig && (u = Array.isArray(e.s2sConfig) ? e.s2sConfig : [ e.s2sConfig ]);
            }), u.forEach(function(e) {
                s.push.apply(s, y(e.bidders));
            }), r = K(r), i && i.length ? r = r.filter(function(e) {
                return g()(i, e.code);
            }) : i = r && r.map(function(e) {
                return e.code;
            }), r.forEach(function(i) {
                var o = Object.keys(i.mediaTypes || {
                    banner: "banner"
                }), e = i.bids.map(function(e) {
                    return e.bidder;
                }), a = I.bidderRegistry, t = s ? e.filter(function(e) {
                    return !g()(s, e);
                }) : e;
                i.transactionId = T.generateUUID(), t.forEach(function(t) {
                    var e = a[t], n = e && e.getSpec && e.getSpec(), r = n && n.supportedMediaTypes || [ "banner" ];
                    o.some(function(e) {
                        return g()(r, e);
                    }) ? b.a.incrementBidderRequestsCounter(i.code, t) : (T.logWarn(T.unsupportedBidderMessage(i, t)), 
                    i.bids = i.bids.filter(function(e) {
                        return e.bidder !== t;
                    }));
                }), b.a.incrementRequestsCounter(i.code);
            }), r && 0 !== r.length) {
                var d = m.a.createAuction({
                    adUnits: r,
                    adUnitCodes: i,
                    callback: t,
                    cbTimeout: c,
                    labels: o,
                    auctionId: a
                }), f = r.length;
                15 < f && T.logInfo("Current auction ".concat(d.getAuctionId(), " contains ").concat(f, " adUnits."), r), 
                i.forEach(function(e) {
                    return p.a.setLatestAuctionForAdUnit(e, d.getAuctionId());
                }), d.callBids();
            } else if (T.logMessage("No adUnits configured. No bids requested."), "function" == typeof t) try {
                t();
            } catch (e) {
                T.logError("Error executing bidsBackHandler", null, e);
            }
        }), E.requestBids.before(Q, 49), E.addAdUnits = function(e) {
            T.logInfo("Invoking pbjs.addAdUnits", arguments), T.isArray(e) ? E.adUnits.push.apply(E.adUnits, e) : "object" === v(e) && E.adUnits.push(e), 
            C.emit(_);
        }, E.onEvent = function(e, t, n) {
            T.logInfo("Invoking pbjs.onEvent", arguments), T.isFn(t) ? !n || G[e].call(null, n) ? C.on(e, t, n) : T.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : T.logError('The event handler provided is not a function and was not set on event "' + e + '".');
        }, E.offEvent = function(e, t, n) {
            T.logInfo("Invoking pbjs.offEvent", arguments), n && !G[e].call(null, n) || C.off(e, t, n);
        }, E.getEvents = function() {
            return T.logInfo("Invoking pbjs.getEvents"), C.getEvents();
        }, E.registerBidAdapter = function(e, t) {
            T.logInfo("Invoking pbjs.registerBidAdapter", arguments);
            try {
                I.registerBidAdapter(e(), t);
            } catch (e) {
                T.logError("Error registering bidder adapter : " + e.message);
            }
        }, E.registerAnalyticsAdapter = function(e) {
            T.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
            try {
                I.registerAnalyticsAdapter(e);
            } catch (e) {
                T.logError("Error registering analytics adapter : " + e.message);
            }
        }, E.createBid = function(e) {
            return T.logInfo("Invoking pbjs.createBid", arguments), Object(d.a)(e);
        };
        var $ = [], X = Object(c.b)("async", function(e) {
            e && !T.isEmpty(e) ? (T.logInfo("Invoking pbjs.enableAnalytics for: ", e), I.enableAnalytics(e)) : T.logError("pbjs.enableAnalytics should be called with option {}");
        }, "enableAnalyticsCb");
        function Z(e) {
            e.forEach(function(e) {
                if (void 0 === e.called) try {
                    e.call(), e.called = !0;
                } catch (e) {
                    T.logError("Error processing command :", "prebid.js", e);
                }
            });
        }
        E.enableAnalytics = function(e) {
            $.push(X.bind(this, e));
        }, E.aliasBidder = function(e, t, n) {
            T.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? I.aliasBidAdapter(e, t, n) : T.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder");
        }, E.getAllWinningBids = function() {
            return m.a.getAllWinningBids();
        }, E.getAllPrebidWinningBids = function() {
            return m.a.getBidsReceived().filter(function(e) {
                return e.status === O.BID_STATUS.BID_TARGETING_SET;
            });
        }, E.getHighestCpmBids = function(e) {
            return p.a.getWinningBids(e);
        }, E.markWinningBidAsUsed = function(t) {
            var e = [];
            t.adUnitCode && t.adId ? e = m.a.getBidsReceived().filter(function(e) {
                return e.adId === t.adId && e.adUnitCode === t.adUnitCode;
            }) : t.adUnitCode ? e = p.a.getWinningBids(t.adUnitCode) : t.adId ? e = m.a.getBidsReceived().filter(function(e) {
                return e.adId === t.adId;
            }) : T.logWarn("Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."), 
            0 < e.length && (e[0].status = O.BID_STATUS.RENDERED);
        }, E.getConfig = l.b.getConfig, E.setConfig = l.b.setConfig, E.setBidderConfig = l.b.setBidderConfig, 
        E.que.push(function() {
            return Object(o.a)();
        }), E.cmd.push = function(e) {
            if ("function" == typeof e) try {
                e.call();
            } catch (e) {
                T.logError("Error processing command :", e.message, e.stack);
            } else T.logError("Commands written into pbjs.cmd.push must be wrapped in a function");
        }, E.que.push = E.cmd.push, E.processQueue = function() {
            c.b.ready(), Z(E.que), Z(E.cmd);
        }, t.default = E;
    },
    7: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return l;
        }), n.d(t, "d", function() {
            return p;
        }), t.a = function(e) {
            return o({
                moduleName: e,
                moduleType: "core"
            });
        }, t.b = function(e, t) {
            return o({
                gvlid: e,
                moduleName: t
            });
        };
        var r = n(13), u = n(0), i = n(12), d = n.n(i), f = [ "core", "prebid-module" ], l = [];
        function o(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : {}, i = t.gvlid, o = t.moduleName, a = t.moduleType;
            function s(n) {
                if (d()(f, a)) {
                    return n({
                        valid: !0
                    });
                }
                var r;
                return p(i, o, {
                    hasEnforcementHook: !1
                }, function(e) {
                    var t;
                    r = e && e.hasEnforcementHook ? n(e) : (t = {
                        hasEnforcementHook: !1,
                        valid: u.hasDeviceAccess()
                    }, n(t));
                }), r;
            }
            var c = function(t) {
                function n(e) {
                    if (e && e.valid) try {
                        return !!window.localStorage;
                    } catch (e) {
                        u.logError("Local storage api disabled");
                    }
                    return !1;
                }
                if (!t || "function" != typeof t) return s(n);
                l.push(function() {
                    var e = s(n);
                    t(e);
                });
            };
            return {
                setCookie: function(i, o, a, c, u, t) {
                    function n(e) {
                        var t, n, r;
                        e && e.valid && (t = u && "" !== u ? " ;domain=".concat(encodeURIComponent(u)) : "", 
                        n = a && "" !== a ? " ;expires=".concat(a) : "", r = null != c && "none" == c.toLowerCase() ? "; Secure" : "", 
                        document.cookie = "".concat(i, "=").concat(encodeURIComponent(o)).concat(n, "; path=/").concat(t).concat(c ? "; SameSite=".concat(c) : "").concat(r));
                    }
                    if (!t || "function" != typeof t) return s(n);
                    l.push(function() {
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
                    l.push(function() {
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
                    l.push(function() {
                        var e = s(n);
                        t(e);
                    });
                },
                cookiesAreEnabled: function(t) {
                    function n(e) {
                        return !(!e || !e.valid) && (!!u.checkCookieSupport() || (window.document.cookie = "prebid.cookieTest", 
                        -1 !== window.document.cookie.indexOf("prebid.cookieTest")));
                    }
                    if (!t || "function" != typeof t) return s(n);
                    l.push(function() {
                        var e = s(n);
                        t(e);
                    });
                },
                setDataInLocalStorage: function(t, n, r) {
                    function i(e) {
                        e && e.valid && c() && window.localStorage.setItem(t, n);
                    }
                    if (!r || "function" != typeof r) return s(i);
                    l.push(function() {
                        var e = s(i);
                        r(e);
                    });
                },
                getDataFromLocalStorage: function(t, n) {
                    function r(e) {
                        return e && e.valid && c() ? window.localStorage.getItem(t) : null;
                    }
                    if (!n || "function" != typeof n) return s(r);
                    l.push(function() {
                        var e = s(r);
                        n(e);
                    });
                },
                removeDataFromLocalStorage: function(t, n) {
                    function r(e) {
                        e && e.valid && c() && window.localStorage.removeItem(t);
                    }
                    if (!n || "function" != typeof n) return s(r);
                    l.push(function() {
                        var e = s(r);
                        n(e);
                    });
                },
                hasLocalStorage: c,
                findSimilarCookies: function(o, t) {
                    function n(e) {
                        if (e && e.valid) {
                            var t = [];
                            if (u.hasDeviceAccess()) for (var n = document.cookie.split(";"); n.length; ) {
                                var r = n.pop(), i = (i = r.indexOf("=")) < 0 ? r.length : i;
                                0 <= decodeURIComponent(r.slice(0, i).replace(/^\s+/, "")).indexOf(o) && t.push(decodeURIComponent(r.slice(i + 1)));
                            }
                            return t;
                        }
                    }
                    if (!t || "function" != typeof t) return s(n);
                    l.push(function() {
                        var e = s(n);
                        t(e);
                    });
                }
            };
        }
        var p = Object(r.b)("async", function(e, t, n, r) {
            r(n);
        }, "validateStorageEnforcement");
    },
    70: function(e, t, n) {
        var r = n(360);
        e.exports = r;
    },
    71: function(e, t, n) {
        "use strict";
        t.a = function(t, n) {
            o.adServers = o.adServers || {}, o.adServers[t] = o.adServers[t] || {}, Object.keys(n).forEach(function(e) {
                o.adServers[t][e] ? Object(i.logWarn)("Attempting to add an already registered function property ".concat(e, " for AdServer ").concat(t, ".")) : o.adServers[t][e] = n[e];
            });
        };
        var r = n(20), i = n(0), o = Object(r.a)();
    },
    72: function(e, t, n) {
        var r = n(31), i = n(48), o = "".split;
        e.exports = r(function() {
            return !Object("z").propertyIsEnumerable(0);
        }) ? function(e) {
            return "String" == i(e) ? o.call(e, "") : Object(e);
        } : Object;
    },
    73: function(e, t, n) {
        var r = n(30), i = n(31), o = n(74);
        e.exports = !r && !i(function() {
            return 7 != Object.defineProperty(o("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    },
    74: function(e, t, n) {
        var r = n(26), i = n(27), o = r.document, a = i(o) && i(o.createElement);
        e.exports = function(e) {
            return a ? o.createElement(e) : {};
        };
    },
    75: function(e, t, n) {
        var r = n(16), i = n(76);
        (e.exports = function(e, t) {
            return i[e] || (i[e] = void 0 !== t ? t : {});
        })("versions", []).push({
            version: "3.6.4",
            mode: r ? "pure" : "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        });
    },
    76: function(e, t, n) {
        var r = n(26), i = n(105), o = "__core-js_shared__", a = r[o] || i(o, {});
        e.exports = a;
    },
    77: function(e, t, n) {
        var r = n(31);
        e.exports = !!Object.getOwnPropertySymbols && !r(function() {
            return !String(Symbol());
        });
    },
    78: function(e, t, n) {
        function r(c) {
            return function(e, t, n) {
                var r, i = u(e), o = s(i.length), a = d(n, o);
                if (c && t != t) {
                    for (;a < o; ) if ((r = i[a++]) != r) return !0;
                } else for (;a < o; a++) if ((c || a in i) && i[a] === t) return c || a || 0;
                return !c && -1;
            };
        }
        var u = n(47), s = n(50), d = n(109);
        e.exports = {
            includes: r(!0),
            indexOf: r(!1)
        };
    },
    79: function(e, t, n) {
        var r = n(110);
        n(133), n(135), n(137), n(139), n(141), n(142), n(143), n(144), n(145), n(146), 
        n(147), n(148), n(149), n(150), n(151), n(152), n(153), n(154), e.exports = r;
    },
    8: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "gdprDataHandler", function() {
            return B;
        }), n.d(t, "uspDataHandler", function() {
            return x;
        }), n.d(t, "clientTestAdapters", function() {
            return R;
        }), n.d(t, "allS2SBidders", function() {
            return k;
        }), t.getAllS2SBidders = D, t.setS2STestingModule = function(e) {
            A = e;
        };
        var h = n(0), p = n(93), g = n(37), l = n(1), y = n(4), a = n(3), r = n(13), i = n(12), m = n.n(i), o = n(10), S = n.n(o), b = n(67), c = n(22);
        function u(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var n = [], r = !0, i = !1, o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    i = !0, o = e;
                } finally {
                    try {
                        r || null == c.return || c.return();
                    } finally {
                        if (i) throw o;
                    }
                }
                return n;
            }(e, t) || d(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function s(e) {
            return function(e) {
                if (Array.isArray(e)) return f(e);
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
            }(e) || d(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function d(e, t) {
            if (e) {
                if ("string" == typeof e) return f(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0;
            }
        }
        function f(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function v() {
            return (v = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        var A, E = n(0), O = n(5), T = n(9), I = {}, C = I.bidderRegistry = {}, j = I.aliasRegistry = {}, w = [];
        a.b.getConfig("s2sConfig", function(e) {
            e && e.s2sConfig && (w = Array.isArray(e.s2sConfig) ? e.s2sConfig : [ e.s2sConfig ]);
        });
        var _ = {};
        var U = Object(r.b)("sync", function(e) {
            var i = e.bidderCode, s = e.auctionId, d = e.bidderRequestId, t = e.adUnits, f = e.labels, l = e.src;
            return t.reduce(function(e, c) {
                var t = Object(p.b)(Object(p.a)(c, f), c.mediaTypes, c.sizes), n = t.active, u = t.mediaTypes, r = t.filterResults;
                return n ? r && E.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" banner sizes from '), r.before, "to ", r.after) : E.logInfo('Size mapping disabled adUnit "'.concat(c.code, '"')), 
                n && e.push(c.bids.filter(function(e) {
                    return e.bidder === i;
                }).reduce(function(e, t) {
                    var n = c.nativeParams || E.deepAccess(c, "mediaTypes.native");
                    n && (t = v({}, t, {
                        nativeParams: Object(g.h)(n)
                    })), t = v({}, t, Object(h.getDefinedParams)(c, [ "fpd", "mediaType", "renderer", "storedAuctionResponse" ]));
                    var r = Object(p.b)(Object(p.a)(t, f), u), i = r.active, o = r.mediaTypes, a = r.filterResults;
                    return i ? a && E.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '" banner sizes from '), a.before, "to ", a.after) : E.logInfo('Size mapping deactivated adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '"')), 
                    E.isValidMediaTypes(o) ? t = v({}, t, {
                        mediaTypes: o
                    }) : E.logError("mediaTypes is not correctly configured for adunit ".concat(c.code)), 
                    i && e.push(v({}, t, {
                        adUnitCode: c.code,
                        transactionId: c.transactionId,
                        sizes: E.deepAccess(o, "banner.sizes") || E.deepAccess(o, "video.playerSize") || [],
                        bidId: t.bid_id || E.getUniqueIdentifierStr(),
                        bidderRequestId: d,
                        auctionId: s,
                        src: l,
                        bidRequestsCount: b.a.getRequestsCounter(c.code),
                        bidderRequestsCount: b.a.getBidderRequestsCounter(c.code, t.bidder),
                        bidderWinsCount: b.a.getBidderWinsCounter(c.code, t.bidder)
                    })), e;
                }, [])), e;
            }, []).reduce(h.flatten, []).filter(function(e) {
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
        }, x = {
            consentData: null,
            setConsentData: function(e) {
                x.consentData = e;
            },
            getConsentData: function() {
                return x.consentData;
            }
        }, R = [], k = [];
        function D() {
            I.s2STestingEnabled = !1, w.forEach(function(e) {
                e && e.enabled && e.bidders && e.bidders.length && k.push.apply(k, s(e.bidders));
            });
        }
        function N(e) {
            return e && e.enabled && e.testing && A;
        }
        function P(t, n, e) {
            try {
                var r = C[t].getSpec();
                r && r[n] && "function" == typeof r[n] && (E.logInfo("Invoking ".concat(t, ".").concat(n)), 
                a.b.runWithBidder(t, h.bind.call(r[n], r, e)));
            } catch (e) {
                E.logWarn("Error calling ".concat(n, " of ").concat(t));
            }
        }
        I.makeBidRequests = Object(r.b)("sync", function(d, f, l, i, p) {
            T.emit(O.EVENTS.BEFORE_REQUEST_BIDS, d);
            var e = Object(h.getBidderCodes)(d);
            a.b.getConfig("bidderSequence") === a.a && (e = Object(h.shuffle)(e));
            var g = Object(c.a)(), b = e, v = [];
            0 === k.length && D(), w.forEach(function(e) {
                e && e.enabled && N(e) && (A.calculateBidSources(e), A.getSourceBidderMap(d, k)[A.CLIENT].forEach(function(e) {
                    m()(R, e) || R.push(e);
                }));
            }), b = e.filter(function(e) {
                return !m()(k, e) || m()(R, e);
            });
            var y = k;
            w.forEach(function(r) {
                var i, o, e, t, n, a, c, u, s;
                r && r.enabled && (s = r, Boolean(N(s) && s.testServerOnly) && (c = d, u = r, Boolean(S()(c, function(e) {
                    return S()(e.bids, function(e) {
                        return (e.bidSource || u.bidderControl && u.bidderControl[e.bidder]) && e.finalSource === A.SERVER;
                    });
                }))) && (E.logWarn("testServerOnly: True.  All client requests will be suppressed."), 
                b.length = 0), e = d, n = (t = r).bidders, (a = E.deepClone(e)).forEach(function(e) {
                    e.bids = e.bids.filter(function(e) {
                        return m()(n, e.bidder) && (!N(t) || e.finalSource !== A.CLIENT);
                    }).map(function(e) {
                        return e.bid_id = E.getUniqueIdentifierStr(), e;
                    });
                }), i = a = a.filter(function(e) {
                    return 0 !== e.bids.length;
                }), o = E.generateUUID(), y.forEach(function(e) {
                    var t = E.getUniqueIdentifierStr(), n = {
                        bidderCode: e,
                        auctionId: l,
                        bidderRequestId: t,
                        tid: o,
                        bids: U({
                            bidderCode: e,
                            auctionId: l,
                            bidderRequestId: t,
                            adUnits: E.deepClone(i),
                            labels: p,
                            src: O.S2S.SRC
                        }),
                        auctionStart: f,
                        timeout: r.timeout,
                        src: O.S2S.SRC,
                        refererInfo: g
                    };
                    0 !== n.bids.length && v.push(n);
                }), i.forEach(function(e) {
                    var t = e.bids.filter(function(t) {
                        return S()(v, function(e) {
                            return S()(e.bids, function(e) {
                                return e.bidId === t.bid_id;
                            });
                        });
                    });
                    e.bids = t;
                }), v.forEach(function(e) {
                    void 0 === e.adUnitsS2SCopy && (e.adUnitsS2SCopy = i.filter(function(e) {
                        return 0 < e.bids.length;
                    }));
                }));
            });
            var t, n, o = (t = d, (n = E.deepClone(t)).forEach(function(e) {
                e.bids = e.bids.filter(function(e) {
                    return !R.length || e.finalSource !== A.SERVER;
                });
            }), n = n.filter(function(e) {
                return 0 !== e.bids.length;
            }));
            return b.forEach(function(e) {
                var t = E.getUniqueIdentifierStr(), n = {
                    bidderCode: e,
                    auctionId: l,
                    bidderRequestId: t,
                    bids: U({
                        bidderCode: e,
                        auctionId: l,
                        bidderRequestId: t,
                        adUnits: E.deepClone(o),
                        labels: p,
                        src: "client"
                    }),
                    auctionStart: f,
                    timeout: i,
                    refererInfo: g
                }, r = C[e];
                r || E.logError("Trying to make a request for bidder that does not exist: ".concat(e)), 
                r && n.bids && 0 !== n.bids.length && v.push(n);
            }), B.getConsentData() && v.forEach(function(e) {
                e.gdprConsent = B.getConsentData();
            }), x.getConsentData() && v.forEach(function(e) {
                e.uspConsent = x.getConsentData();
            }), v;
        }, "makeBidRequests"), I.callBids = function(e, t, d, f, l, p, i) {
            var n, r, g, b, v;
            t.length ? (r = (n = u(t.reduce(function(e, t) {
                return e[Number(void 0 !== t.src && t.src === O.S2S.SRC)].push(t), e;
            }, [ [], [] ]), 2))[0], g = n[1], b = [], g.forEach(function(e) {
                for (var t = -1, n = 0; n < b.length; ++n) if (e.tid === b[n].tid) {
                    t = n;
                    break;
                }
                t <= -1 && b.push(e);
            }), v = 0, w.forEach(function(e) {
                var t, n, r, i, o, a, c, u, s;
                e && b[v] && m()(e.bidders, b[v].bidderCode) && (t = Object(y.b)(p, l ? {
                    request: l.request.bind(null, "s2s"),
                    done: l.done
                } : void 0), n = e.bidders, r = C[e.adapter], i = b[v].tid, o = b[v].adUnitsS2SCopy, 
                a = g.filter(function(e) {
                    return e.tid === i;
                }), r ? (c = {
                    tid: i,
                    ad_units: o,
                    s2sConfig: e
                }).ad_units.length && (u = a.map(function(e) {
                    return e.start = Object(h.timestamp)(), f.bind(e);
                }), s = c.ad_units.reduce(function(e, t) {
                    return e.concat((t.bids || []).reduce(function(e, t) {
                        return e.concat(t.bidder);
                    }, []));
                }, []), E.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(n.filter(function(e) {
                    return m()(s, e);
                }).join(","))), a.forEach(function(e) {
                    T.emit(O.EVENTS.BID_REQUESTED, e);
                }), r.callBids(c, g, function(e, t) {
                    var n = Object(h.getBidderRequest)(g, t.bidderCode, e);
                    n && d.call(n, e, t);
                }, function() {
                    return u.forEach(function(e) {
                        return e();
                    });
                }, t)) : E.logError("missing " + e.adapter), v++);
            }), r.forEach(function(t) {
                t.start = Object(h.timestamp)();
                var e = C[t.bidderCode];
                E.logMessage("CALLING BIDDER ======= ".concat(t.bidderCode)), T.emit(O.EVENTS.BID_REQUESTED, t);
                var n = Object(y.b)(p, l ? {
                    request: l.request.bind(null, t.bidderCode),
                    done: l.done
                } : void 0), r = f.bind(t);
                try {
                    a.b.runWithBidder(t.bidderCode, h.bind.call(e.callBids, e, t, d.bind(t), r, n, i, a.b.callbackWithBidder(t.bidderCode)));
                } catch (e) {
                    E.logError("".concat(t.bidderCode, " Bid Adapter emitted an uncaught error when parsing their bidRequest"), {
                        e: e,
                        bidRequest: t
                    }), r();
                }
            })) : E.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?");
        }, I.videoAdapters = [], I.registerBidAdapter = function(e, t) {
            var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes, r = void 0 === n ? [] : n;
            e && t ? "function" == typeof e.callBids ? (C[t] = e, m()(r, "video") && I.videoAdapters.push(t), 
            m()(r, "native") && g.f.push(t)) : E.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : E.logError("bidAdapter or bidderCode not specified");
        }, I.aliasBidAdapter = function(n, r, e) {
            var t, i;
            if (void 0 === C[r]) {
                var o = C[n];
                if (void 0 === o) {
                    var a = [];
                    w.forEach(function(e) {
                        var t;
                        e.bidders && e.bidders.length && (t = e && e.bidders, e && m()(t, r) ? j[r] = n : a.push(n));
                    }), a.forEach(function(e) {
                        E.logError('bidderCode "' + e + '" is not an existing bidder.', "adapterManager.aliasBidAdapter");
                    });
                } else try {
                    var c, u, s, d, f = (t = n, i = [], m()(I.videoAdapters, t) && i.push("video"), 
                    m()(g.f, t) && i.push("native"), i);
                    o.constructor.prototype != Object.prototype ? (d = new o.constructor()).setBidderCode(r) : (c = o.getSpec(), 
                    u = e && e.gvlid, s = e && e.skipPbsAliasing, d = Object(l.newBidder)(v({}, c, {
                        code: r,
                        gvlid: u,
                        skipPbsAliasing: s
                    })), j[r] = n), I.registerBidAdapter(d, r, {
                        supportedMediaTypes: f
                    });
                } catch (e) {
                    E.logError(n + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter");
                }
            } else E.logMessage('alias name "' + r + '" has been already specified.');
        }, I.registerAnalyticsAdapter = function(e) {
            var t = e.adapter, n = e.code, r = e.gvlid;
            t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, _[n] = {
                adapter: t,
                gvlid: r
            }) : E.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function')) : E.logError("Prebid Error: analyticsAdapter or analyticsCode not specified");
        }, I.enableAnalytics = function(e) {
            E.isArray(e) || (e = [ e ]), E._each(e, function(e) {
                var t = _[e.provider].adapter;
                t ? t.enableAnalytics(e) : E.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider, "."));
            });
        }, I.getBidAdapter = function(e) {
            return C[e];
        }, I.getAnalyticsAdapter = function(e) {
            return _[e];
        }, I.callTimedOutBidders = function(t, n, r) {
            n = n.map(function(e) {
                return e.params = E.getUserConfiguredParams(t, e.adUnitCode, e.bidder), e.timeout = r, 
                e;
            }), n = E.groupBy(n, "bidder"), Object.keys(n).forEach(function(e) {
                P(e, "onTimeout", n[e]);
            });
        }, I.callBidWonBidder = function(e, t, n) {
            t.params = E.getUserConfiguredParams(n, t.adUnitCode, t.bidder), b.a.incrementBidderWinsCounter(t.adUnitCode, t.bidder), 
            P(e, "onBidWon", t);
        }, I.callSetTargetingBidder = function(e, t) {
            P(e, "onSetTargeting", t);
        }, t.default = I;
    },
    80: function(e, t, n) {
        function r(e) {
            c(e, d, {
                value: {
                    objectID: "O" + ++f,
                    weakData: {}
                }
            });
        }
        var i = n(53), o = n(27), a = n(28), c = n(33).f, u = n(59), s = n(113), d = u("meta"), f = 0, l = Object.isExtensible || function() {
            return !0;
        }, p = e.exports = {
            REQUIRED: !1,
            fastKey: function(e, t) {
                if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
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
        i[d] = !0;
    },
    81: function(e, t, n) {
        var r = n(21), i = n(38), o = r("iterator"), a = Array.prototype;
        e.exports = function(e) {
            return void 0 !== e && (i.Array === e || a[o] === e);
        };
    },
    82: function(e, t, n) {
        var o = n(15);
        e.exports = function(t, e, n, r) {
            try {
                return r ? e(o(n)[0], n[1]) : e(n);
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && o(i.call(t)), e;
            }
        };
    },
    83: function(e, t) {
        e.exports = function(e, t, n) {
            if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return e;
        };
    },
    84: function(e, t, n) {
        function r() {}
        function i(e) {
            return "<script>" + e + "</" + g + ">";
        }
        var o, a = n(15), c = n(118), u = n(85), s = n(53), d = n(121), f = n(74), l = n(65), p = "prototype", g = "script", b = l("IE_PROTO"), v = function() {
            try {
                o = document.domain && new ActiveXObject("htmlfile");
            } catch (e) {}
            var e, t;
            v = o ? function(e) {
                e.write(i("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t;
            }(o) : ((t = f("iframe")).style.display = "none", d.appendChild(t), t.src = String("javascript:"), 
            (e = t.contentWindow.document).open(), e.write(i("document.F=Object")), e.close(), 
            e.F);
            for (var n = u.length; n--; ) delete v[p][u[n]];
            return v();
        };
        s[b] = !0, e.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (r[p] = a(e), n = new r(), r[p] = null, n[b] = e) : n = v(), 
            void 0 === t ? n : c(n, t);
        };
    },
    85: function(e, t) {
        e.exports = [ "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf" ];
    },
    86: function(e, t, n) {
        var i = n(32);
        e.exports = function(e, t, n, r) {
            r && r.enumerable ? e[t] = n : i(e, t, n);
        };
    },
    87: function(e, t, n) {
        "use strict";
        var r, i, o, a = n(88), c = n(32), u = n(28), s = n(21), d = n(16), f = s("iterator"), l = !1;
        [].keys && ("next" in (o = [].keys()) ? (i = a(a(o))) !== Object.prototype && (r = i) : l = !0), 
        null == r && (r = {}), d || u(r, f) || c(r, f, function() {
            return this;
        }), e.exports = {
            IteratorPrototype: r,
            BUGGY_SAFARI_ITERATORS: l
        };
    },
    88: function(e, t, n) {
        var r = n(28), i = n(57), o = n(65), a = n(124), c = o("IE_PROTO"), u = Object.prototype;
        e.exports = a ? Object.getPrototypeOf : function(e) {
            return e = i(e), r(e, c) ? e[c] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? u : null;
        };
    },
    89: function(e, t, n) {
        "use strict";
        var i = n(129).charAt, r = n(54), o = n(66), a = "String Iterator", c = r.set, u = r.getterFor(a);
        o(String, "String", function(e) {
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
            } : (e = i(n, r), t.index += e.length, {
                value: e,
                done: !1
            });
        });
    },
    9: function(e, t, n) {
        function r() {
            return (r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        var c, i, u = n(0), o = n(5), a = Array.prototype.slice, s = Array.prototype.push, d = u._map(o.EVENTS, function(e) {
            return e;
        }), f = o.EVENT_ID_PATHS, l = [];
        e.exports = (c = {}, (i = {}).on = function(e, t, n) {
            var r, i;
            i = e, u.contains(d, i) ? (r = c[e] || {
                que: []
            }, n ? (r[n] = r[n] || {
                que: []
            }, r[n].que.push(t)) : r.que.push(t), c[e] = r) : u.logError("Wrong event name : " + e + " Valid event names :" + d);
        }, i.emit = function(e) {
            !function(e, t) {
                u.logMessage("Emitting event for: " + e);
                var n = t[0] || {}, r = n[f[e]], i = c[e] || {
                    que: []
                }, o = u._map(i, function(e, t) {
                    return t;
                }), a = [];
                l.push({
                    eventType: e,
                    args: n,
                    id: r,
                    elapsedTime: u.getPerformanceNow()
                }), r && u.contains(o, r) && s.apply(a, i[r].que), s.apply(a, i.que), u._each(a, function(e) {
                    if (e) try {
                        e.apply(null, t);
                    } catch (e) {
                        u.logError("Error executing handler:", "events.js", e);
                    }
                });
            }(e, a.call(arguments, 1));
        }, i.off = function(e, n, r) {
            var i = c[e];
            u.isEmpty(i) || u.isEmpty(i.que) && u.isEmpty(i[r]) || r && (u.isEmpty(i[r]) || u.isEmpty(i[r].que)) || (r ? u._each(i[r].que, function(e) {
                var t = i[r].que;
                e === n && t.splice(t.indexOf(e), 1);
            }) : u._each(i.que, function(e) {
                var t = i.que;
                e === n && t.splice(t.indexOf(e), 1);
            }), c[e] = i);
        }, i.get = function() {
            return c;
        }, i.getEvents = function() {
            var n = [];
            return u._each(l, function(e) {
                var t = r({}, e);
                n.push(t);
            }), n;
        }, i);
    },
    90: function(e, t, n) {
        var r = n(15), i = n(61);
        e.exports = function(e) {
            var t = i(e);
            if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
            return r(t.call(e));
        };
    },
    91: function(e, t, n) {
        var r = n(155);
        e.exports = r;
    },
    92: function(e, t, n) {
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
    },
    93: function(e, t, n) {
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
            var t = v(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : b);
            return !t.shouldFilter || !!t.sizesSupported[e];
        }, t.b = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.labels, n = void 0 === t ? [] : t, r = e.labelAll, i = void 0 !== r && r, o = e.activeLabels, a = void 0 === o ? [] : o, c = 1 < arguments.length ? arguments[1] : void 0, u = 2 < arguments.length ? arguments[2] : void 0, s = v(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : b);
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
                }) && 0 < Object(p.deepAccess)(c, "banner.sizes.length") && (0 === n.length || !i && (n.some(function(e) {
                    return s.labels[e];
                }) || n.some(function(e) {
                    return g()(a, e);
                })) || i && n.reduce(function(e, t) {
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
        var r = n(3), p = n(0), i = n(12), g = n.n(i);
        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        var b = [];
        function v(e) {
            return e.reduce(function(n, r) {
                if ("object" === o(r) && "string" == typeof r.mediaQuery) {
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
            return t = e.sizeConfig, void (b = t);
            var t;
        });
    },
    94: function(e, t, n) {
        var r = n(222);
        e.exports = r;
    },
    940: function(e, t, n) {
        e.exports = n(69);
    },
    95: function(e, t, n) {
        "use strict";
        t.b = function(e, t, n) {
            var r = {
                puts: e.map(c, n)
            };
            Object(i.a)(o.b.getConfig("cache.url"), function(n) {
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
            return "".concat(o.b.getConfig("cache.url"), "?uuid=").concat(e);
        };
        var i = n(4), o = n(3), a = n(0);
        function c(e) {
            var t, n, r, i = {
                type: "xml",
                value: e.vastXml ? e.vastXml : (t = e.vastUrl, n = e.vastImpUrl, r = n ? "<![CDATA[".concat(n, "]]>") : "", 
                '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(t, "]]></VASTAdTagURI>\n        <Impression>").concat(r, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")),
                ttlseconds: Number(e.ttl)
            };
            return o.b.getConfig("cache.vasttrack") && (i.bidder = e.bidder, i.bidid = e.requestId, 
            a.isPlainObject(this) && this.hasOwnProperty("auctionStart") && (i.timestamp = this.auctionStart)), 
            "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (i.key = e.customCacheKey), 
            i;
        }
    },
    98: function(e, t, n) {
        n(99);
        var r = n(52);
        e.exports = r("Array", "find");
    },
    99: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(56).find, o = n(51), a = n(60), c = "find", u = !0, s = a(c);
        c in [] && Array(1).find(function() {
            u = !1;
        }), r({
            target: "Array",
            proto: !0,
            forced: u || !s
        }, {
            find: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0);
            }
        }), o(c);
    }
});

pbjsChunk([ 368 ], {
    188: function(e, r, n) {
        e.exports = n(189);
    },
    189: function(e, r, n) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), n.d(r, "spec", function() {
            return d;
        });
        var t = n(1), y = n(3), g = n(2), f = n(11), I = n(0), _ = "adform", d = {
            code: _,
            gvlid: 50,
            supportedMediaTypes: [ g.b, g.d ],
            isBidRequestValid: function(e) {
                return !!e.params.mid;
            },
            buildRequests: function(e, r) {
                for (var n, t, d, s, i, o, u, a, p = y.b.getConfig("currency.adServerCurrency"), c = [], g = [ [ "adxDomain", "adx.adform.net" ], [ "fd", 1 ], [ "url", null ], [ "tid", null ], [ "eids", function(e) {
                    if (I.isArray(e) && 0 < e.length) {
                        var r = function(e) {
                            return e.reduce(function(n, e) {
                                var t = e.source;
                                return n[t] = n[t] || {}, e.uids.forEach(function(e) {
                                    var r = e.id + "";
                                    n[t][r] = n[t][r] || [], n[t][r].push(e.atype);
                                }), n;
                            }, {});
                        }(e);
                        return btoa(JSON.stringify(r));
                    }
                }(I.deepAccess(e, "0.userIdAsEids")) ] ], f = JSON.parse(JSON.stringify(e)), h = f[0] && f[0].bidder || _, l = 0, v = f.length; l < v; l++) {
                    for ("net" !== (d = f[l]).params.priceType && "net" !== d.params.pt || (u = "net"), 
                    n = 0, t = g.length; n < t; n++) (i = d[s = g[n][0]] || d.params[s]) && (d[s] = d.params[s] = null, 
                    g[n][1] = i);
                    (o = d.params).transactionId = d.transactionId, o.rcur = o.rcur || p, c.push(function(e) {
                        var r, n = [];
                        for (r in e) e.hasOwnProperty(r) && e[r] && n.push(r, "=", e[r], "&");
                        return encodeURIComponent(btoa(n.join("").slice(0, -1)));
                    }(o));
                }
                c.unshift("https://" + g[0][1] + "/adx/?rp=4"), u = u || "gross", c.push("pt=" + u), 
                c.push("stid=" + e[0].auctionId);
                var b = I.deepAccess(r, "gdprConsent.gdprApplies"), m = I.deepAccess(r, "gdprConsent.consentString");
                for (void 0 !== b && (a = {
                    gdpr: b,
                    gdpr_consent: m
                }, c.push("gdpr=" + (1 & b)), c.push("gdpr_consent=" + m)), r && r.uspConsent && c.push("us_privacy=" + r.uspConsent), 
                l = 1, v = g.length; l < v; l++) s = g[l][0], (i = g[l][1]) && c.push(s + "=" + encodeURIComponent(i));
                return {
                    method: "GET",
                    url: c.join("&"),
                    bids: e,
                    netRevenue: u,
                    bidder: h,
                    gdpr: a
                };
            },
            interpretResponse: function(e, r) {
                for (var n, t, d, s, i = {
                    banner: 1,
                    vast_content: 1,
                    vast_url: 1
                }, o = [], u = r.bids, a = e.body, p = 0; p < a.length; p++) s = "banner" === (t = a[p]).response ? g.b : g.d, 
                d = u[p], i[t.response] && (function(e, r) {
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
                }, d.renderer || s !== g.d || "outstream" !== I.deepAccess(d, "mediaTypes.video.context") || (n.renderer = f.a.install({
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
}, [ 188 ]);

pbjsChunk([ 331 ], {
    278: function(e, r, a) {
        e.exports = a(279);
    },
    279: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), a.d(r, "spec", function() {
            return R;
        });
        var f = a(11), _ = a(0), k = a(3), y = a(1), g = a(2), p = a(23), t = a(10), I = a.n(t), n = a(12), w = a.n(n), v = a(25), i = a(7);
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
                    var a = arguments[r];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
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
                var a = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === a && e.constructor && (a = e.constructor.name);
                if ("Map" === a || "Set" === a) return Array.from(e);
                if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return o(e, r);
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function o(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var a = 0, t = new Array(r); a < r; a++) t[a] = e[a];
            return t;
        }
        var d = "appnexus", x = "https://ib.adnxs.com/ut/v3/prebid", c = [ "id", "minduration", "maxduration", "skippable", "playback_method", "frameworks", "context", "skipoffset" ], C = [ "age", "externalUid", "segments", "gender", "dnt", "language" ], S = [ "geo", "device_id" ], T = [ "enabled", "dongle", "member_id", "debug_timeout" ], u = {
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
            aliases: [ {
                code: "appnexusAst",
                gvlid: 32
            }, {
                code: "brealtime"
            }, {
                code: "emxdigital",
                gvlid: 183
            }, {
                code: "pagescience"
            }, {
                code: "defymedia"
            }, {
                code: "gourmetads"
            }, {
                code: "matomy"
            }, {
                code: "featureforward"
            }, {
                code: "oftmedia"
            }, {
                code: "districtm",
                gvlid: 144
            }, {
                code: "adasta"
            }, {
                code: "beintoo",
                gvlid: 618
            } ],
            supportedMediaTypes: [ g.b, g.d, g.c ],
            isBidRequestValid: function(e) {
                return !!(e.params.placementId || e.params.member && e.params.invCode);
            },
            buildRequests: function(e, r) {
                var t = e.map(N), n = I()(e, M), i = {};
                !0 === k.b.getConfig("coppa") && (i = {
                    coppa: !0
                }), n && Object.keys(n.params.user).filter(function(e) {
                    return w()(C, e);
                }).forEach(function(e) {
                    var r, a = _.convertCamelToUnderscore(e);
                    "segments" === e && _.isArray(n.params.user[e]) ? (r = [], n.params.user[e].forEach(function(e) {
                        _.isNumber(e) ? r.push({
                            id: e
                        }) : _.isPlainObject(e) && r.push(e);
                    }), i[a] = r) : "segments" !== e && (i[a] = n.params.user[e]);
                });
                var a, s = I()(e, B);
                s && s.params && s.params.app && (a = {}, Object.keys(s.params.app).filter(function(e) {
                    return w()(S, e);
                }).forEach(function(e) {
                    return a[e] = s.params.app[e];
                }));
                var o, d = I()(e, D);
                d && d.params && s.params.app && s.params.app.id && (o = {
                    appid: d.params.app.id
                });
                var p = {}, c = {}, u = O.getCookie("apn_prebid_debug") || null;
                if (u) try {
                    p = JSON.parse(u);
                } catch (e) {
                    _.logError("AppNexus Debug Auction Cookie Error:\n\n" + e);
                } else {
                    var l = I()(e, V);
                    l && l.debug && (p = l.debug);
                }
                p && p.enabled && Object.keys(p).filter(function(e) {
                    return w()(T, e);
                }).forEach(function(e) {
                    c[e] = p[e];
                });
                var m, f, y = I()(e, z), g = y ? parseInt(y.params.member, 10) : 0, v = e[0].schain, b = I()(e, W), h = {
                    tags: A(t),
                    user: i,
                    sdk: {
                        source: "pbjs",
                        version: "4.25.0"
                    },
                    schain: v
                };
                return b && (h.iab_support = {
                    omidpn: "Appnexus",
                    omidpv: "4.25.0"
                }), 0 < g && (h.member_id = g), s && (h.device = a), d && (h.app = o), k.b.getConfig("adpod.brandCategoryExclusion") && (h.brand_category_uniqueness = !0), 
                c.enabled && (h.debug = c, _.logInfo("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(c, null, 4))), 
                r && r.gdprConsent && (h.gdpr_consent = {
                    consent_string: r.gdprConsent.consentString,
                    consent_required: r.gdprConsent.gdprApplies
                }), r && r.uspConsent && (h.us_privacy = r.uspConsent), r && r.refererInfo && (m = {
                    rd_ref: encodeURIComponent(r.refererInfo.referer),
                    rd_top: r.refererInfo.reachedTop,
                    rd_ifs: r.refererInfo.numIframes,
                    rd_stk: r.refererInfo.stack.map(function(e) {
                        return encodeURIComponent(e);
                    }).join(",")
                }, h.referrer_detection = m), I()(e, J) && e.filter(J).forEach(function(r) {
                    var e = function(e, r) {
                        var a = r.mediaTypes.video, t = a.durationRangeSec, n = a.requireExactDuration, i = function(e) {
                            var r = e.adPodDurationSec, a = e.durationRangeSec, t = e.requireExactDuration, n = _.getMinValueFromArray(a), i = Math.floor(r / n);
                            return t ? Math.max(i, a.length) : i;
                        }(r.mediaTypes.video), s = _.getMaxValueFromArray(t), o = e.filter(function(e) {
                            return e.uuid === r.bidId;
                        }), d = _.fill.apply(_, A(o).concat([ i ]));
                        {
                            var p, c;
                            n ? (p = Math.ceil(i / t.length), c = _.chunk(d, p), t.forEach(function(r, e) {
                                c[e].map(function(e) {
                                    F(e, "minduration", r), F(e, "maxduration", r);
                                });
                            })) : d.map(function(e) {
                                return F(e, "maxduration", s);
                            });
                        }
                        return d;
                    }(t, r), a = h.tags.filter(function(e) {
                        return e.uuid !== r.bidId;
                    });
                    h.tags = [].concat(A(a), A(e));
                }), e[0].userId && (L(f = [], _.deepAccess(e[0], "userId.criteoId"), "criteo.com", null), 
                L(f, _.deepAccess(e[0], "userId.netId"), "netid.de", null), L(f, _.deepAccess(e[0], "userId.idl_env"), "liveramp.com", null), 
                L(f, _.deepAccess(e[0], "userId.tdid"), "adserver.org", "TDID"), f.length && (h.eids = f)), 
                t[0].publisher_id && (h.publisher_id = t[0].publisher_id), function(e, a) {
                    var t = [], n = {};
                    !function(e) {
                        var r = !0;
                        e && e.gdprConsent && e.gdprConsent.gdprApplies && 2 === e.gdprConsent.apiVersion && (r = !(!0 !== _.deepAccess(e.gdprConsent, "vendorData.purpose.consents.1")));
                        return r;
                    }(a) && (n = {
                        withCredentials: !1
                    });
                    "TRUE" !== _.getParameterByName("apn_test").toUpperCase() && !0 !== k.b.getConfig("apn_test") || (n.customHeaders = {
                        "X-Is-Test": 1
                    });
                    {
                        var i, r;
                        15 < e.tags.length ? (i = _.deepClone(e), _.chunk(e.tags, 15).forEach(function(e) {
                            i.tags = e;
                            var r = JSON.stringify(i);
                            t.push({
                                method: "POST",
                                url: x,
                                data: r,
                                bidderRequest: a,
                                options: n
                            });
                        })) : (r = JSON.stringify(e), t = {
                            method: "POST",
                            url: x,
                            data: r,
                            bidderRequest: a,
                            options: n
                        });
                    }
                    return t;
                }(h, r);
            },
            interpretResponse: function(e, r) {
                var i = this, s = r.bidderRequest;
                e = e.body;
                var a, o = [];
                if (e && !e.error) return e.tags && e.tags.forEach(function(e) {
                    var r, a, t, n = (r = e) && r.ads && r.ads.length && I()(r.ads, function(e) {
                        return e.rtb;
                    });
                    n && 0 !== n.cpm && w()(i.supportedMediaTypes, n.ad_type) && ((a = function(r, e, a) {
                        var t = _.getBidRequest(r.uuid, [ a ]), n = {
                            requestId: r.uuid,
                            cpm: e.cpm,
                            creativeId: e.creative_id,
                            dealId: e.deal_id,
                            currency: "USD",
                            netRevenue: !0,
                            ttl: 300,
                            adUnitCode: t.adUnitCode,
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
                            }), _.deepAccess(t, "mediaTypes.video.context")) {
                              case g.a:
                                var o = Object(y.getIabSubCategory)(t.bidder, e.brand_category_id);
                                n.meta = b({}, n.meta, {
                                    primaryCatId: o
                                });
                                var d = e.deal_priority;
                                n.video = {
                                    context: g.a,
                                    durationSeconds: Math.floor(e.rtb.video.duration_ms / 1e3),
                                    dealTier: d
                                }, n.vastUrl = e.rtb.video.asset_url;
                                break;

                              case v.b:
                                n.adResponse = r, n.adResponse.ad = n.adResponse.ads[0], n.adResponse.ad.video = n.adResponse.ad.rtb.video, 
                                n.vastXml = e.rtb.video.content, e.renderer_url && (i = I()(a.bids, function(e) {
                                    return e.bidId === r.uuid;
                                }), s = _.deepAccess(i, "renderer.options"), n.renderer = function(e, r) {
                                    var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, t = f.a.install({
                                        id: r.renderer_id,
                                        url: r.renderer_url,
                                        config: a,
                                        loaded: !1,
                                        adUnitCode: e
                                    });
                                    try {
                                        t.setRender(H);
                                    } catch (e) {
                                        _.logWarn("Prebid Error calling setRender on renderer", e);
                                    }
                                    return t.setEventHandlers({
                                        impression: function() {
                                            return _.logMessage("AppNexus outstream video impression event");
                                        },
                                        loaded: function() {
                                            return _.logMessage("AppNexus outstream video loaded event");
                                        },
                                        ended: function() {
                                            _.logMessage("AppNexus outstream renderer video event"), document.querySelector("#".concat(e)).style.display = "none";
                                        }
                                    }), t;
                                }(n.adUnitCode, e, s));
                                break;

                              case v.a:
                                n.vastUrl = e.notify_url + "&redir=" + encodeURIComponent(e.rtb.video.asset_url);
                            }
                        } else if (e.rtb[g.c]) {
                            var p = e.rtb[g.c], c = e.viewability.config.replace("src=", "data-src="), u = p.javascript_trackers;
                            null == u ? u = c : _.isStr(u) ? u = [ u, c ] : u.push(c), n[g.c] = {
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
                                javascriptTrackers: u
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
                                var l, m;
                                e.rtb.trackers && (l = e.rtb.trackers[0].impression_urls[0], m = _.createTrackPixelHtml(l), 
                                n.ad += m);
                            } catch (e) {
                                _.logError("Error appending tracking pixel", e);
                            }
                        }
                        return n;
                    }(e, n, s)).mediaType = (t = n.ad_type) === g.d ? g.d : t === g.c ? g.c : g.b, o.push(a));
                }), e.debug && e.debug.debug_info && (a = (a = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info).replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""), 
                _.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"), 
                _.logMessage(a)), o;
                var t = "in response for ".concat(s.bidderCode, " adapter");
                return e && e.error && (t += ": ".concat(e.error)), _.logError(t), o;
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
                    url: "https://acdn.adnxs.com/dmp/async_usersync.html"
                } ];
            },
            transformBidParams: function(a, e) {
                return a = _.convertTypes({
                    member: "string",
                    invCode: "string",
                    placementId: "number",
                    keywords: _.transformBidderParamKeywords,
                    publisherId: "number"
                }, a), e && (a.use_pmt_rule = "boolean" == typeof a.usePaymentRule && a.usePaymentRule, 
                a.usePaymentRule && delete a.usePaymentRule, j(a.keywords) && a.keywords.forEach(P), 
                Object.keys(a).forEach(function(e) {
                    var r = _.convertCamelToUnderscore(e);
                    r !== e && (a[r] = a[e], delete a[e]);
                })), a;
            },
            onBidWon: function(e) {
                e.native && function(e) {
                    var r = function(e) {
                        var r;
                        if (_.isStr(e) && U(e)) r = e; else if (_.isArray(e)) for (var a = 0; a < e.length; a++) {
                            var t = e[a];
                            U(t) && (r = t);
                        }
                        return r;
                    }(e.native.javascriptTrackers);
                    if (r) for (var a = "pbjs_adid=" + e.adId + ";pbjs_auc=" + e.adUnitCode, t = function(e) {
                        var r = e.indexOf('src="') + 5, a = e.indexOf('"', r);
                        return e.substring(r, a);
                    }(r), n = t.replace("dom_id=%native_dom_id%", a), i = document.getElementsByTagName("iframe"), s = !1, o = 0; o < i.length && !s; o++) {
                        var d = i[o];
                        try {
                            var p = d.contentDocument || d.contentWindow.document;
                            if (p) for (var c = p.getElementsByTagName("script"), u = 0; u < c.length && !s; u++) {
                                var l = c[u];
                                l.getAttribute("data-src") == t && (l.setAttribute("src", n), l.setAttribute("data-src", ""), 
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
            var r = e.match(h), a = null != r && 1 <= r.length, t = e.match(E), n = null != t && 1 <= t.length;
            return e.startsWith(m) && n && a;
        }
        function N(a) {
            var e, r, n, i, t = {};
            t.sizes = q(a.sizes), t.primary_size = t.sizes[0], t.ad_types = [], t.uuid = a.bidId, 
            a.params.placementId ? t.id = parseInt(a.params.placementId, 10) : t.code = a.params.invCode, 
            t.allow_smaller_sizes = a.params.allowSmallerSizes || !1, t.use_pmt_rule = a.params.usePaymentRule || !1, 
            t.prebid = !0, t.disable_psa = !0, a.params.reserve && (t.reserve = a.params.reserve), 
            a.params.position && (t.position = {
                above: 1,
                below: 2
            }[a.params.position] || 0), a.params.trafficSourceCode && (t.traffic_source_code = a.params.trafficSourceCode), 
            a.params.privateSizes && (t.private_sizes = q(a.params.privateSizes)), a.params.supplyType && (t.supply_type = a.params.supplyType), 
            a.params.pubClick && (t.pubclick = a.params.pubClick), a.params.extInvCode && (t.ext_inv_code = a.params.extInvCode), 
            a.params.publisherId && (t.publisher_id = parseInt(a.params.publisherId, 10)), a.params.externalImpId && (t.external_imp_id = a.params.externalImpId), 
            _.isEmpty(a.params.keywords) || (0 < (e = _.transformBidderParamKeywords(a.params.keywords)).length && e.forEach(P), 
            t.keywords = e), a.mediaType !== g.c && !_.deepAccess(a, "mediaTypes.".concat(g.c)) || (t.ad_types.push(g.c), 
            0 === t.sizes.length && (t.sizes = q([ 1, 1 ])), a.nativeParams && (n = a.nativeParams, 
            i = {}, Object.keys(n).forEach(function(e) {
                var r, a = l[e] && l[e].serverName || l[e] || e, t = l[e] && l[e].requiredParams;
                i[a] = b({}, t, n[e]), a !== l.image.serverName && a !== l.icon.serverName || !i[a].sizes || (r = i[a].sizes, 
                (_.isArrayOfNums(r) || _.isArray(r) && 0 < r.length && r.every(function(e) {
                    return _.isArrayOfNums(e);
                })) && (i[a].sizes = q(i[a].sizes))), a === l.privacyLink && (i.privacy_supported = !0);
            }), r = i, t[g.c] = {
                layouts: [ r ]
            }));
            var s = _.deepAccess(a, "mediaTypes.".concat(g.d)), o = _.deepAccess(a, "mediaTypes.video.context");
            t.hb_source = s && "adpod" === o ? 7 : 1, a.mediaType !== g.d && !s || t.ad_types.push(g.d), 
            (a.mediaType === g.d || s && "outstream" !== o) && (t.require_asset_url = !0), a.params.video && (t.video = {}, 
            Object.keys(a.params.video).filter(function(e) {
                return w()(c, e);
            }).forEach(function(e) {
                switch (e) {
                  case "context":
                  case "playback_method":
                    var r = a.params.video[e], r = _.isArray(r) ? r[0] : r;
                    t.video[e] = u[e][r];
                    break;

                  case "frameworks":
                    break;

                  default:
                    t.video[e] = a.params.video[e];
                }
            }), a.params.video.frameworks && _.isArray(a.params.video.frameworks) && (t.video_frameworks = a.params.video.frameworks)), 
            a.renderer && (t.video = b({}, t.video, {
                custom_renderer_present: !0
            })), a.params.frameworks && _.isArray(a.params.frameworks) && (t.banner_frameworks = a.params.frameworks);
            var d = I()(p.a.getAdUnits(), function(e) {
                return a.transactionId === e.transactionId;
            });
            return d && d.mediaTypes && d.mediaTypes.banner && t.ad_types.push(g.b), 0 === t.ad_types.length && delete t.ad_types, 
            t;
        }
        function q(e) {
            var r = [], a = {};
            if (_.isArray(e) && 2 === e.length && !_.isArray(e[0])) a.width = parseInt(e[0], 10), 
            a.height = parseInt(e[1], 10), r.push(a); else if ("object" === s(e)) for (var t = 0; t < e.length; t++) {
                var n = e[t];
                (a = {}).width = parseInt(n[0], 10), a.height = parseInt(n[1], 10), r.push(a);
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
            return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === g.a;
        }
        function W(e) {
            var r = !1, a = e.params, t = e.params.video;
            return a.frameworks && _.isArray(a.frameworks) && (r = w()(e.params.frameworks, 6)), 
            !r && t && t.frameworks && _.isArray(t.frameworks) && (r = w()(e.params.video.frameworks, 6)), 
            r;
        }
        function F(e, r, a) {
            _.isEmpty(e.video) && (e.video = {}), e.video[r] = a;
        }
        function H(e) {
            var r, a;
            r = e.adUnitCode, (a = document.getElementById(r).querySelectorAll("div[id^='google_ads']"))[0] && a[0].style.setProperty("display", "none"), 
            function(e) {
                try {
                    var r = document.getElementById(e).querySelectorAll("script[id^='sas_script']");
                    r[0].nextSibling && "iframe" === r[0].nextSibling.localName && r[0].nextSibling.style.setProperty("display", "none");
                } catch (e) {}
            }(e.adUnitCode), e.renderer.push(function() {
                window.ANOutstreamVideo.renderAd({
                    tagId: e.adResponse.tag_id,
                    sizes: [ e.getSize().split("x") ],
                    targetId: e.adUnitCode,
                    uuid: e.adResponse.uuid,
                    adResponse: e.adResponse,
                    rendererOptions: e.renderer.getConfig()
                }, function(e, r, a) {
                    e.renderer.handleVideoEvent({
                        id: r,
                        eventName: a
                    });
                }.bind(null, e));
            });
        }
        function L(e, r, a, t) {
            return r && (t ? e.push({
                source: a,
                id: r,
                rti_partner: t
            }) : e.push({
                source: a,
                id: r
            })), e;
        }
        Object(y.registerBidder)(R);
    }
}, [ 278 ]);

pbjsChunk([ 295 ], {
    358: function(n, t, e) {
        n.exports = e(359);
    },
    359: function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), e.d(t, "allowAuction", function() {
            return w;
        }), e.d(t, "userCMP", function() {
            return d;
        }), e.d(t, "consentTimeout", function() {
            return l;
        }), e.d(t, "gdprScope", function() {
            return g;
        }), e.d(t, "staticConsentData", function() {
            return m;
        }), t.requestBidsHook = h, t.resetConsentData = function() {
            C = void 0, d = void 0, D = 0, a.gdprDataHandler.setConsentData(null);
        }, t.setConsentConfig = _;
        var u = e(0), o = e(3), a = e(8), i = e(12), s = e.n(i), r = e(70), f = e.n(r);
        function c(n) {
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                return typeof n;
            } : function(n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
            })(n);
        }
        function p(n, t, e) {
            return t in n ? Object.defineProperty(n, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[t] = e, n;
        }
        var d, l, g, m, C, v = "iab", b = 1e4, y = !0, w = {
            value: y,
            definedInConfig: !1
        }, D = 0, k = !1, M = {
            iab: function(o, e, s) {
                function n(n, t) {
                    u.logInfo("Received a response from CMP", n), t ? !1 !== n.gdprApplies && "tcloaded" !== n.eventStatus && "useractioncomplete" !== n.eventStatus || o(n, s) : e("CMP unable to register callback function.  Please check CMP setup.", s);
                }
                var t = function() {
                    var t = {};
                    function e() {
                        t.getConsentData && t.getVendorConsents && (u.logInfo("Received all requested responses from CMP", t), 
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
                }(), c = {}, a = function() {
                    for (var n, t, e = window; !n; ) {
                        try {
                            if ("function" == typeof e.__tcfapi || "function" == typeof e.__cmp) {
                                t = "function" == typeof e.__tcfapi ? (D = 2, e.__tcfapi) : (D = 1, e.__cmp), n = e;
                                break;
                            }
                        } catch (n) {}
                        try {
                            if (e.frames.__tcfapiLocator) {
                                D = 2, n = e;
                                break;
                            }
                        } catch (n) {}
                        try {
                            if (e.frames.__cmpLocator) {
                                D = 1, n = e;
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
                u.isFn(r) ? (u.logInfo("Detected CMP API is directly accessible, calling it now..."), 
                1 === D ? (r("getConsentData", null, t.consentDataCallback), r("getVendorConsents", null, t.vendorConsentsCallback)) : 2 === D && r("addEventListener", D, n)) : 1 === D && window.$sf && window.$sf.ext && "function" == typeof window.$sf.ext.cmp ? (u.logInfo("Detected Prebid.js is encased in a SafeFrame and CMP is registered, calling it now..."), 
                d("getConsentData", t.consentDataCallback), d("getVendorConsents", t.vendorConsentsCallback)) : (u.logInfo("Detected CMP is outside the current iframe where Prebid.js is located, calling it now..."), 
                1 === D ? (l("getConsentData", i, t.consentDataCallback), l("getVendorConsents", i, t.vendorConsentsCallback)) : 2 === D && l("addEventListener", i, n));
                function d(o, a) {
                    var n, t = s.adUnits, e = 1, i = 1;
                    Array.isArray(t) && 0 < t.length && (e = (n = u.getAdUnitSizes(t[0]))[0][0], i = n[0][1]), 
                    window.$sf.ext.register(e, i, function(n, t) {
                        var e;
                        "cmpReturn" === n && (e = "getConsentData" === o ? t.vendorConsentData : t.vendorConsents, 
                        a(e));
                    }), window.$sf.ext.cmp(o);
                }
                function l(n, i, t) {
                    var a = 2 === D ? "__tcfapi" : "__cmp", s = Math.random() + "", r = "".concat(a, "Call");
                    function e(n) {
                        var t, e = "".concat(a, "Return"), o = "string" == typeof n.data && f()(n.data, e) ? JSON.parse(n.data) : n.data;
                        o[e] && o[e].callId && (t = o[e], void 0 !== c[t.callId] && c[t.callId](t.returnValue, t.success));
                    }
                    2 === D ? (window[a] = function(n, t, e, o) {
                        var a = p({}, r, {
                            command: n,
                            version: t,
                            parameter: o,
                            callId: s
                        });
                        c[s] = e, i.postMessage(a, "*");
                    }, window.addEventListener("message", e, !1), window[a](n, D, t)) : (window[a] = function(n, t, e) {
                        var o = p({}, r, {
                            command: n,
                            parameter: t,
                            callId: s
                        });
                        c[s] = e, i.postMessage(o, "*");
                    }, window.addEventListener("message", e, !1), window[a](n, void 0, t));
                }
            },
            static: function(n, t, e) {
                n(m, e);
            }
        };
        function h(n, t) {
            var e = {
                context: this,
                args: [ t ],
                nextFn: n,
                adUnits: t.adUnits || pbjs.adUnits,
                bidsBackHandler: t.bidsBackHandler,
                haveExited: !1,
                timer: null
            };
            return C ? (u.logInfo("User consent information already known.  Pulling internally stored information..."), 
            S(null, e)) : s()(Object.keys(M), d) ? (M[d].call(this, A, P, e), void (e.haveExited || (0 === l ? A(void 0, e) : e.timer = setTimeout(function(n) {
                P("CMP workflow exceeded timeout threshold.", n);
            }.bind(null, e), l)))) : (u.logWarn("CMP framework (".concat(d, ") is not a supported framework.  Aborting consentManagement module and resuming auction.")), 
            e.nextFn.apply(e.context, e.args));
        }
        function A(e, n) {
            "static" === d && 2 === (D = e.getConsentData ? 1 : e.getTCData ? 2 : 0) && (e = e.getTCData);
            var t = 1 === D ? function(n) {
                var t = n && n.getConsentData && n.getConsentData.gdprApplies;
                return !("boolean" == typeof t && (!0 !== t || u.isStr(n.getConsentData.consentData) && u.isPlainObject(n.getVendorConsents) && 1 < Object.keys(n.getVendorConsents).length));
            } : 2 === D ? function() {
                var n = e && "boolean" == typeof e.gdprApplies ? e.gdprApplies : g, t = e && e.tcString;
                return !("boolean" == typeof n && (!0 !== n || u.isStr(t)));
            } : null;
            w.definedInConfig && 2 === D ? u.logWarn("'allowAuctionWithoutConsent' ignored for TCF 2") : w.definedInConfig || 1 !== D || u.logInfo("'allowAuctionWithoutConsent' using system default: (".concat(y, ").")), 
            u.isFn(t) ? t(e) ? P("CMP returned unexpected value during lookup process.", n, e) : (clearTimeout(n.timer), 
            I(e), S(null, n)) : P("Unable to derive CMP version to process data.  Consent object does not conform to TCF v1 or v2 specs.", n, e);
        }
        function P(n, t, e) {
            clearTimeout(t.timer), w.value && 1 === D && I(void 0), S(n, t, e);
        }
        function I(n) {
            1 === D ? C = {
                consentString: n ? n.getConsentData.consentData : void 0,
                vendorData: n ? n.getVendorConsents : void 0,
                gdprApplies: n ? n.getConsentData.gdprApplies : g
            } : (C = {
                consentString: n ? n.tcString : void 0,
                vendorData: n || void 0,
                gdprApplies: n && "boolean" == typeof n.gdprApplies ? n.gdprApplies : g
            }, n && n.addtlConsent && u.isStr(n.addtlConsent) && (C.addtlConsent = n.addtlConsent)), 
            C.apiVersion = D, a.gdprDataHandler.setConsentData(C);
        }
        function S(n, t, e) {
            var o, a, i;
            !1 === t.haveExited && (t.haveExited = !0, o = t.context, a = t.args, i = t.nextFn, 
            n ? w.value && 1 === D ? (u.logWarn(n + " 'allowAuctionWithoutConsent' activated.", e), 
            i.apply(o, a)) : (u.logError(n + " Canceling auction as per consentManagement config.", e), 
            "function" == typeof t.bidsBackHandler ? t.bidsBackHandler() : u.logError("Error executing bidsBackHandler")) : i.apply(o, a));
        }
        function _(n) {
            (n = n && (n.gdpr || n.usp ? n.gdpr : n)) && "object" === c(n) ? (u.isStr(n.cmpApi) ? d = n.cmpApi : (d = v, 
            u.logInfo("consentManagement config did not specify cmp.  Using system default setting (".concat(v, ")."))), 
            u.isNumber(n.timeout) ? l = n.timeout : (l = b, u.logInfo("consentManagement config did not specify timeout.  Using system default setting (".concat(b, ")."))), 
            "boolean" == typeof n.allowAuctionWithoutConsent && (w.value = n.allowAuctionWithoutConsent, 
            w.definedInConfig = !0), g = !0 === n.defaultGdprScope, u.logInfo("consentManagement module has been activated..."), 
            "static" === d && (u.isPlainObject(n.consentData) ? (m = n.consentData, l = 0) : u.logError("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), 
            k || pbjs.requestBids.before(h, 50), k = !0) : u.logWarn("consentManagement config not defined, exiting consent manager");
        }
        o.b.getConfig("consentManagement", function(n) {
            return _(n.consentManagement);
        });
    }
}, [ 358 ]);

pbjsChunk([ 1 ], {
    379: function(t, e, r) {
        t.exports = r(380);
    },
    380: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        }), __webpack_require__.d(__webpack_exports__, "ADAPTER_VERSION", function() {
            return ADAPTER_VERSION;
        }), __webpack_require__.d(__webpack_exports__, "PROFILE_ID_PUBLISHERTAG", function() {
            return PROFILE_ID_PUBLISHERTAG;
        }), __webpack_require__.d(__webpack_exports__, "spec", function() {
            return spec;
        }), __webpack_exports__.tryGetCriteoFastBid = tryGetCriteoFastBid;
        var __WEBPACK_IMPORTED_MODULE_0__src_adloader_js__ = __webpack_require__(40), __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__ = __webpack_require__(1), __WEBPACK_IMPORTED_MODULE_2__src_config_js__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__ = __webpack_require__(2), __WEBPACK_IMPORTED_MODULE_4__src_utils_js__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js__ = __webpack_require__(10), __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js__), __WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__ = __webpack_require__(381), __WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__), __WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__ = __webpack_require__(7);
        function _extends() {
            return (_extends = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
                }
                return t;
            }).apply(this, arguments);
        }
        var GVLID = 91, ADAPTER_VERSION = 33, BIDDER_CODE = "criteo", CDB_ENDPOINT = "https://bidder.criteo.com/cdb", PROFILE_ID_INLINE = 207, PROFILE_ID_PUBLISHERTAG = 185, storage = Object(__WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__.b)(GVLID), LOG_PREFIX = "Criteo: ", PUBLISHER_TAG_URL = "https://static.criteo.net/js/ld/publishertag.prebid.js", FAST_BID_PUBKEY_E = 65537, FAST_BID_PUBKEY_N = "ztQYwCE5BU7T9CDM5he6rKoabstXRmkzx54zFPZkWbK530dwtLBDeaWBMxHBUT55CYyboR/EZ4efghPi3CoNGfGWezpjko9P6p2EwGArtHEeS4slhu/SpSIFMjG6fdrpRoNuIAMhq1Z+Pr/+HOd1pThFKeGFr2/NhtAg+TXAzaU=", spec = {
            code: BIDDER_CODE,
            gvlid: GVLID,
            supportedMediaTypes: [ __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.b, __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.d, __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.c ],
            isBidRequestValid: function(t) {
                return !(!t || !t.params || !t.params.zoneId && !t.params.networkId) && !(hasVideoMediaType(t) && !hasValidVideoMediaType(t));
            },
            buildRequests: function(t, e) {
                var r, i, s, a;
                if (_extends(e, {
                    publisherExt: __WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("fpd.context"),
                    userExt: __WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("fpd.user"),
                    ceh: __WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("criteo.ceh")
                }), publisherTagAvailable() || (window.Criteo = window.Criteo || {}, window.Criteo.usePrebidEvents = !1, 
                tryGetCriteoFastBid(), setTimeout(function() {
                    Object(__WEBPACK_IMPORTED_MODULE_0__src_adloader_js__.a)(PUBLISHER_TAG_URL, BIDDER_CODE);
                }, e.timeout)), s = publisherTagAvailable() ? (i = (r = new Criteo.PubTag.Adapters.Prebid(PROFILE_ID_PUBLISHERTAG, ADAPTER_VERSION, t, e, "4.25.0")).buildCdbUrl(), 
                r.buildCdbRequest()) : (i = buildCdbUrl(a = buildContext(t, e)), buildCdbRequest(a, t, e))) return {
                    method: "POST",
                    url: i,
                    data: s,
                    bidRequests: t
                };
            },
            interpretResponse: function(t, s) {
                var e = t.body || t;
                if (publisherTagAvailable()) {
                    var r = Criteo.PubTag.Adapters.Prebid.GetAdapter(s);
                    if (r) return r.interpretResponse(e, s);
                }
                var a = [];
                return e && e.slots && __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.isArray(e.slots) && e.slots.forEach(function(e) {
                    var t = __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js___default()(s.bidRequests, function(t) {
                        return t.adUnitCode === e.impid && (!t.params.zoneId || parseInt(t.params.zoneId) === e.zoneid);
                    }), r = t.bidId, i = {
                        requestId: r,
                        adId: e.bidId || __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.getUniqueIdentifierStr(),
                        cpm: e.cpm,
                        currency: e.currency,
                        netRevenue: !0,
                        ttl: e.ttl || 60,
                        creativeId: r,
                        width: e.width,
                        height: e.height,
                        dealId: e.dealCode
                    };
                    e.native ? t.params.nativeCallback ? i.ad = createNativeAd(r, e.native, t.params.nativeCallback) : (i.native = createPrebidNativeAd(e.native), 
                    i.mediaType = __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.c) : e.video ? (i.vastUrl = e.displayurl, 
                    i.mediaType = __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.d) : i.ad = e.creative, 
                    a.push(i);
                }), a;
            },
            onTimeout: function(t) {
                var e;
                publisherTagAvailable() && Array.isArray(t) && (e = [], t.forEach(function(t) {
                    -1 === e.indexOf(t.auctionId) && (e.push(t.auctionId), Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidTimeout());
                }));
            },
            onBidWon: function(t) {
                publisherTagAvailable() && t && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidWon(t);
            },
            onSetTargeting: function(t) {
                publisherTagAvailable() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleSetTargeting(t);
            }
        };
        function publisherTagAvailable() {
            return "undefined" != typeof Criteo && Criteo.PubTag && Criteo.PubTag.Adapters && Criteo.PubTag.Adapters.Prebid;
        }
        function buildContext(t, e) {
            var r = "";
            e && e.refererInfo && (r = e.refererInfo.referer);
            var i = __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.parseUrl(r).search, s = {
                url: r,
                debug: "1" === i.pbt_debug,
                noLog: "1" === i.pbt_nolog,
                amp: !1
            };
            return t.forEach(function(t) {
                "amp" === t.params.integrationMode && (s.amp = !0);
            }), s;
        }
        function buildCdbUrl(t) {
            var e = CDB_ENDPOINT;
            return e += "?profileId=" + PROFILE_ID_INLINE, e += "&av=" + String(ADAPTER_VERSION), 
            e += "&wv=" + encodeURIComponent("4.25.0"), e += "&cb=" + String(Math.floor(99999999999 * Math.random())), 
            t.amp && (e += "&im=1"), t.debug && (e += "&debug=1"), t.noLog && (e += "&nolog=1"), 
            e;
        }
        function checkNativeSendId(t) {
            return !t.nativeParams || !(t.nativeParams.image && (!0 !== t.nativeParams.image.sendId || !0 === t.nativeParams.image.sendTargetingKeys) || t.nativeParams.icon && (!0 !== t.nativeParams.icon.sendId || !0 === t.nativeParams.icon.sendTargetingKeys) || t.nativeParams.clickUrl && (!0 !== t.nativeParams.clickUrl.sendId || !0 === t.nativeParams.clickUrl.sendTargetingKeys) || t.nativeParams.displayUrl && (!0 !== t.nativeParams.displayUrl.sendId || !0 === t.nativeParams.displayUrl.sendTargetingKeys) || t.nativeParams.privacyLink && (!0 !== t.nativeParams.privacyLink.sendId || !0 === t.nativeParams.privacyLink.sendTargetingKeys) || t.nativeParams.privacyIcon && (!0 !== t.nativeParams.privacyIcon.sendId || !0 === t.nativeParams.privacyIcon.sendTargetingKeys));
        }
        function buildCdbRequest(t, e, r) {
            var i, s = {
                publisher: {
                    url: t.url,
                    ext: r.publisherExt
                },
                slots: e.map(function(t) {
                    i = t.params.networkId || i;
                    var e, r = {
                        impid: t.adUnitCode,
                        transactionid: t.transactionId,
                        auctionId: t.auctionId
                    };
                    return t.params.zoneId && (r.zoneid = t.params.zoneId), t.fpd && t.fpd.context && (r.ext = t.fpd.context), 
                    t.params.ext && (r.ext = _extends({}, r.ext, t.params.ext)), t.params.publisherSubId && (r.publishersubid = t.params.publisherSubId), 
                    t.params.nativeCallback || __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.c)) ? (r.native = !0, 
                    checkNativeSendId(t) || __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logWarn(LOG_PREFIX + "all native assets containing URL should be sent as placeholders with sendId(icon, image, clickUrl, displayUrl, privacyLink, privacyIcon)"), 
                    r.sizes = parseSizes(retrieveBannerSizes(t), parseNativeSize)) : r.sizes = parseSizes(retrieveBannerSizes(t), parseSize), 
                    hasVideoMediaType(t) && ((e = {
                        playersizes: parseSizes(__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, "mediaTypes.video.playerSize"), parseSize),
                        mimes: t.mediaTypes.video.mimes,
                        protocols: t.mediaTypes.video.protocols,
                        maxduration: t.mediaTypes.video.maxduration,
                        api: t.mediaTypes.video.api
                    }).skip = t.params.video.skip, e.placement = t.params.video.placement, e.minduration = t.params.video.minduration, 
                    e.playbackmethod = t.params.video.playbackmethod, e.startdelay = t.params.video.startdelay, 
                    r.video = e), r;
                })
            };
            return i && (s.publisher.networkid = i), s.user = {
                ext: r.userExt
            }, r && r.ceh && (s.user.ceh = r.ceh), r && r.gdprConsent && (s.gdprConsent = {}, 
            void 0 !== r.gdprConsent.gdprApplies && (s.gdprConsent.gdprApplies = !!r.gdprConsent.gdprApplies), 
            s.gdprConsent.version = r.gdprConsent.apiVersion, void 0 !== r.gdprConsent.consentString && (s.gdprConsent.consentData = r.gdprConsent.consentString)), 
            r && r.uspConsent && (s.user.uspIab = r.uspConsent), s;
        }
        function retrieveBannerSizes(t) {
            return __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, "mediaTypes.banner.sizes") || t.sizes;
        }
        function parseSizes(t, e) {
            return Array.isArray(t[0]) ? t.map(function(t) {
                return e(t);
            }) : [ e(t) ];
        }
        function parseSize(t) {
            return t[0] + "x" + t[1];
        }
        function parseNativeSize(t) {
            return void 0 === t[0] && void 0 === t[1] ? "2x2" : t[0] + "x" + t[1];
        }
        function hasVideoMediaType(t) {
            return void 0 !== __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, "params.video") && void 0 !== __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, "mediaTypes.video");
        }
        function hasValidVideoMediaType(e) {
            var r = !0;
            [ "mimes", "playerSize", "maxduration", "protocols", "api" ].forEach(function(t) {
                void 0 === __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(e, "mediaTypes.video." + t) && (r = !1, 
                __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logError("Criteo Bid Adapter: mediaTypes.video." + t + " is required"));
            });
            if ([ "skip", "placement", "playbackmethod" ].forEach(function(t) {
                void 0 === __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(e, "params.video." + t) && (r = !1, 
                __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logError("Criteo Bid Adapter: params.video." + t + " is required"));
            }), r) {
                if ("instream" == e.mediaTypes.video.context && 1 === e.params.video.placement) return 1;
                if ("outstream" == e.mediaTypes.video.context && 1 !== e.params.video.placement) return 1;
            }
        }
        function createPrebidNativeAd(t) {
            return {
                sendTargetingKeys: !1,
                title: t.products[0].title,
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
            };
        }
        function createNativeAd(t, e, r) {
            var i = "criteo_prebid_native_slots";
            return window[i] = window[i] || {}, window[i][t] = {
                callback: r,
                payload: e
            }, '\n<script type="text/javascript">\nfor (var i = 0; i < 10; ++i) {\n var slots = window.parent.'.concat(i, ';\n  if(!slots){continue;}\n  var responseSlot = slots["').concat(t, '"];\n  responseSlot.callback(responseSlot.payload);\n  break;\n}\n<\/script>');
        }
        function tryGetCriteoFastBid() {
            try {
                var fastBidStorageKey = "criteo_fast_bid", hashPrefix = "// Hash: ", fastBidFromStorage = storage.getDataFromLocalStorage(fastBidStorageKey), firstLineEndPosition, firstLine, publisherTagHash, publisherTag;
                null !== fastBidFromStorage && (firstLineEndPosition = fastBidFromStorage.indexOf("\n"), 
                firstLine = fastBidFromStorage.substr(0, firstLineEndPosition).trim(), firstLine.substr(0, hashPrefix.length) !== hashPrefix ? (__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logWarn("No hash found in FastBid"), 
                storage.removeDataFromLocalStorage(fastBidStorageKey)) : (publisherTagHash = firstLine.substr(hashPrefix.length), 
                publisherTag = fastBidFromStorage.substr(firstLineEndPosition + 1), Object(__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__.verify)(publisherTag, publisherTagHash, FAST_BID_PUBKEY_N, FAST_BID_PUBKEY_E) ? (__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logInfo("Using Criteo FastBid"), 
                eval(publisherTag)) : (__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logWarn("Invalid Criteo FastBid found"), 
                storage.removeDataFromLocalStorage(fastBidStorageKey))));
            } catch (t) {}
        }
        Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__.registerBidder)(spec);
    },
    381: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var _ = r(382), n = r(383);
        e.verify = function(t, e, r, i) {
            var s = new _.BigInteger(_.b64toHex(e)), a = new _.BigInteger(_.b64toHex(r)), o = s.modPowInt(i, a);
            return _.removeExtraSymbols(o.toHexString()) === n.Sha256.hash(t);
        };
    },
    382: function(t, e, r) {
        "use strict";
        var i;
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = (T.prototype.toHexString = function() {
            if (this.s < 0) return "-" + this.negate().toHexString();
            var t, e = !1, r = "", i = this.t, s = this.DB - i * this.DB % 4;
            if (0 < i--) for (s < this.DB && 0 < (t = this[i] >> s) && (e = !0, r = c(t)); 0 <= i; ) s < 4 ? (t = (this[i] & (1 << s) - 1) << 4 - s, 
            t |= this[--i] >> (s += this.DB - 4)) : (t = this[i] >> (s -= 4) & 15, s <= 0 && (s += this.DB, 
            --i)), 0 < t && (e = !0), e && (r += c(t));
            return e ? r : "0";
        }, T.prototype.fromHexString = function(t) {
            if (null !== t) {
                this.t = 0, this.s = 0;
                for (var e = t.length, r = !1, i = 0; 0 <= --e; ) {
                    var s = n(t, e);
                    s < 0 ? "-" == t.charAt(e) && (r = !0) : (r = !1, 0 == i ? this[this.t++] = s : i + 4 > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - i) - 1) << i, 
                    this[this.t++] = s >> this.DB - i) : this[this.t - 1] |= s << i, (i += 4) >= this.DB && (i -= this.DB));
                }
                this.clamp(), r && T.ZERO.subTo(this, this);
            }
        }, T.prototype.negate = function() {
            var t = b();
            return T.ZERO.subTo(this, t), t;
        }, T.prototype.abs = function() {
            return this.s < 0 ? this.negate() : this;
        }, T.prototype.mod = function(t) {
            var e = b();
            return this.abs().divRemTo(t, null, e), this.s < 0 && 0 < e.compareTo(T.ZERO) && t.subTo(e, e), 
            e;
        }, T.prototype.copyTo = function(t) {
            for (var e = this.t - 1; 0 <= e; --e) t[e] = this[e];
            t.t = this.t, t.s = this.s;
        }, T.prototype.lShiftTo = function(t, e) {
            for (var r = t % this.DB, i = this.DB - r, s = (1 << i) - 1, a = Math.floor(t / this.DB), o = this.s << r & this.DM, _ = this.t - 1; 0 <= _; --_) e[_ + a + 1] = this[_] >> i | o, 
            o = (this[_] & s) << r;
            for (_ = a - 1; 0 <= _; --_) e[_] = 0;
            e[a] = o, e.t = this.t + a + 1, e.s = this.s, e.clamp();
        }, T.prototype.invDigit = function() {
            if (this.t < 1) return 0;
            var t = this[0];
            if (0 == (1 & t)) return 0;
            var e = 3 & t;
            return 0 < (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) ? this.DV - e : -e;
        }, T.prototype.dlShiftTo = function(t, e) {
            for (var r = this.t - 1; 0 <= r; --r) e[r + t] = this[r];
            for (r = t - 1; 0 <= r; --r) e[r] = 0;
            e.t = this.t + t, e.s = this.s;
        }, T.prototype.squareTo = function(t) {
            for (var e = this.abs(), r = t.t = 2 * e.t; 0 <= --r; ) t[r] = 0;
            for (r = 0; r < e.t - 1; ++r) {
                var i = e.am(r, e[r], t, 2 * r, 0, 1);
                (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, i, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV, 
                t[r + e.t + 1] = 1);
            }
            0 < t.t && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)), t.s = 0, t.clamp();
        }, T.prototype.multiplyTo = function(t, e) {
            var r = this.abs(), i = t.abs(), s = r.t;
            for (e.t = s + i.t; 0 <= --s; ) e[s] = 0;
            for (s = 0; s < i.t; ++s) e[s + r.t] = r.am(0, i[s], e, s, 0, r.t);
            e.s = 0, e.clamp(), this.s != t.s && T.ZERO.subTo(e, e);
        }, T.prototype.divRemTo = function(t, e, r) {
            var i = t.abs();
            if (!(i.t <= 0)) {
                var s = this.abs();
                if (s.t < i.t) return null != e && e.fromHexString("0"), void (null != r && this.copyTo(r));
                null == r && (r = b());
                var a = b(), o = this.s, _ = t.s, n = this.DB - P(i[i.t - 1]);
                0 < n ? (i.lShiftTo(n, a), s.lShiftTo(n, r)) : (i.copyTo(a), s.copyTo(r));
                var p = a.t, c = a[p - 1];
                if (0 != c) {
                    var d = c * (1 << this.F1) + (1 < p ? a[p - 2] >> this.F2 : 0), u = this.FV / d, h = (1 << this.F1) / d, l = 1 << this.F2, f = r.t, v = f - p, m = null == e ? b() : e;
                    for (a.dlShiftTo(v, m), 0 <= r.compareTo(m) && (r[r.t++] = 1, r.subTo(m, r)), T.ONE.dlShiftTo(p, m), 
                    m.subTo(a, a); a.t < p; ) a[a.t++] = 0;
                    for (;0 <= --v; ) {
                        var E = r[--f] == c ? this.DM : Math.floor(r[f] * u + (r[f - 1] + l) * h);
                        if ((r[f] += a.am(0, E, r, v, 0, p)) < E) for (a.dlShiftTo(v, m), r.subTo(m, r); r[f] < --E; ) r.subTo(m, r);
                    }
                    null != e && (r.drShiftTo(p, e), o != _ && T.ZERO.subTo(e, e)), r.t = p, r.clamp(), 
                    0 < n && r.rShiftTo(n, r), o < 0 && T.ZERO.subTo(r, r);
                }
            }
        }, T.prototype.rShiftTo = function(t, e) {
            e.s = this.s;
            var r = Math.floor(t / this.DB);
            if (r >= this.t) e.t = 0; else {
                var i = t % this.DB, s = this.DB - i, a = (1 << i) - 1;
                e[0] = this[r] >> i;
                for (var o = r + 1; o < this.t; ++o) e[o - r - 1] |= (this[o] & a) << s, e[o - r] = this[o] >> i;
                0 < i && (e[this.t - r - 1] |= (this.s & a) << s), e.t = this.t - r, e.clamp();
            }
        }, T.prototype.drShiftTo = function(t, e) {
            for (var r = t; r < this.t; ++r) e[r - t] = this[r];
            e.t = Math.max(this.t - t, 0), e.s = this.s;
        }, T.prototype.subTo = function(t, e) {
            for (var r = 0, i = 0, s = Math.min(t.t, this.t); r < s; ) i += this[r] - t[r], 
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
        }, T.prototype.clamp = function() {
            for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t; ) --this.t;
        }, T.prototype.modPowInt = function(t, e) {
            var r = new (t < 256 || e.isEven() ? d : h)(e);
            return this.exp(t, r);
        }, T.prototype.exp = function(t, e) {
            if (4294967295 < t || t < 1) return T.ONE;
            var r, i = b(), s = b(), a = e.convert(this), o = P(t) - 1;
            for (a.copyTo(i); 0 <= --o; ) e.sqrTo(i, s), 0 < (t & 1 << o) ? e.mulTo(s, a, i) : (r = i, 
            i = s, s = r);
            return e.revert(i);
        }, T.prototype.isEven = function() {
            return 0 == (0 < this.t ? 1 & this[0] : this.s);
        }, T.prototype.compareTo = function(t) {
            var e = this.s - t.s;
            if (0 != e) return e;
            var r = this.t;
            if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;
            for (;0 <= --r; ) if (0 != (e = this[r] - t[r])) return e;
            return 0;
        }, T.prototype.am1 = function(t, e, r, i, s, a) {
            for (;0 <= --a; ) {
                var o = e * this[t++] + r[i] + s;
                s = Math.floor(o / 67108864), r[i++] = 67108863 & o;
            }
            return s;
        }, T.prototype.am2 = function(t, e, r, i, s, a) {
            for (var o = 32767 & e, _ = e >> 15; 0 <= --a; ) {
                var n = 32767 & this[t], p = this[t++] >> 15, c = _ * n + p * o;
                s = ((n = o * n + ((32767 & c) << 15) + r[i] + (1073741823 & s)) >>> 30) + (c >>> 15) + _ * p + (s >>> 30), 
                r[i++] = 1073741823 & n;
            }
            return s;
        }, T.prototype.am3 = function(t, e, r, i, s, a) {
            for (var o = 16383 & e, _ = e >> 14; 0 <= --a; ) {
                var n = 16383 & this[t], p = this[t++] >> 14, c = _ * n + p * o;
                s = ((n = o * n + ((16383 & c) << 14) + r[i] + s) >> 28) + (c >> 14) + _ * p, r[i++] = 268435455 & n;
            }
            return s;
        }, T);
        function T(t) {
            null !== t && this.fromHexString(t);
        }
        function b() {
            return new s(null);
        }
        function P(t) {
            var e, r = 1;
            return 0 != (e = t >>> 16) && (t = e, r += 16), 0 != (e = t >> 8) && (t = e, r += 8), 
            0 != (e = t >> 4) && (t = e, r += 4), 0 != (e = t >> 2) && (t = e, r += 2), 0 != (e = t >> 1) && (t = e, 
            r += 1), r;
        }
        e.BigInteger = s, e.nbi = b, e.nbits = P;
        for (var a = [], o = "0".charCodeAt(0), _ = 0; _ <= 9; ++_) a[o++] = _;
        for (o = "a".charCodeAt(0), _ = 10; _ < 36; ++_) a[o++] = _;
        for (o = "A".charCodeAt(0), _ = 10; _ < 36; ++_) a[o++] = _;
        function n(t, e) {
            var r = a[t.charCodeAt(e)];
            return null == r ? -1 : r;
        }
        e.intAt = n;
        var p = "0123456789abcdefghijklmnopqrstuvwxyz";
        function c(t) {
            return p.charAt(t);
        }
        e.int2char = c;
        e.b64toHex = function(t) {
            for (var e = "", r = 0, i = 0, s = 0; s < t.length && "=" != t.charAt(s); ++s) {
                var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t.charAt(s));
                a < 0 || (r = 0 == r ? (e += c(a >> 2), i = 3 & a, 1) : 1 == r ? (e += c(i << 2 | a >> 4), 
                i = 15 & a, 2) : 2 == r ? (e += c(i), e += c(a >> 2), i = 3 & a, 3) : (e += c(i << 2 | a >> 4), 
                e += c(15 & a), 0));
            }
            return 1 == r && (e += c(i << 2)), e;
        }, e.removeExtraSymbols = function(t) {
            return t.replace(/^1f+00/, "").replace("3031300d060960864801650304020105000420", "");
        };
        var d = (u.prototype.convert = function(t) {
            return t.s < 0 || 0 <= t.compareTo(this.m) ? t.mod(this.m) : t;
        }, u.prototype.revert = function(t) {
            return t;
        }, u.prototype.reduce = function(t) {
            t.divRemTo(this.m, null, t);
        }, u.prototype.mulTo = function(t, e, r) {
            t.multiplyTo(e, r), this.reduce(r);
        }, u.prototype.sqrTo = function(t, e) {
            t.squareTo(e), this.reduce(e);
        }, u);
        function u(t) {
            this.m = t;
        }
        var h = (l.prototype.convert = function(t) {
            var e = b();
            return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && 0 < e.compareTo(s.ZERO) && this.m.subTo(e, e), 
            e;
        }, l.prototype.revert = function(t) {
            var e = b();
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
        function f(t) {
            var e = b();
            return e.fromHexString(t.toString()), e;
        }
        e.nbv = f, s.ZERO = f(0), s.ONE = f(1), i = "Microsoft Internet Explorer" == navigator.appName ? (s.prototype.am = s.prototype.am2, 
        30) : "Netscape" != navigator.appName ? (s.prototype.am = s.prototype.am1, 26) : (s.prototype.am = s.prototype.am3, 
        28), s.prototype.DB = i, s.prototype.DM = (1 << i) - 1, s.prototype.DV = 1 << i;
        s.prototype.FV = Math.pow(2, 52), s.prototype.F1 = 52 - i, s.prototype.F2 = 2 * i - 52;
    },
    383: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = (D.hash = function(t) {
            t = D.utf8Encode(t || "");
            for (var e = [ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ], r = [ 1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225 ], i = (t += String.fromCharCode(128)).length / 4 + 2, s = Math.ceil(i / 16), a = new Array(s), o = 0; o < s; o++) {
                a[o] = new Array(16);
                for (var _ = 0; _ < 16; _++) a[o][_] = t.charCodeAt(64 * o + 4 * _) << 24 | t.charCodeAt(64 * o + 4 * _ + 1) << 16 | t.charCodeAt(64 * o + 4 * _ + 2) << 8 | t.charCodeAt(64 * o + 4 * _ + 3) << 0;
            }
            var n = 8 * (t.length - 1) / Math.pow(2, 32), p = 8 * (t.length - 1) >>> 0;
            for (a[s - 1][14] = Math.floor(n), a[s - 1][15] = p, o = 0; o < s; o++) {
                for (var c = new Array(64), d = 0; d < 16; d++) c[d] = a[o][d];
                for (d = 16; d < 64; d++) c[d] = D.q1(c[d - 2]) + c[d - 7] + D.q0(c[d - 15]) + c[d - 16] >>> 0;
                for (var u = r[0], h = r[1], l = r[2], f = r[3], v = r[4], m = r[5], E = r[6], T = r[7], d = 0; d < 64; d++) {
                    var b = T + D.z1(v) + D.Ch(v, m, E) + e[d] + c[d], P = D.z0(u) + D.Maj(u, h, l);
                    T = E, E = m, m = v, v = f + b >>> 0, f = l, l = h, h = u, u = b + P >>> 0;
                }
                r[0] = r[0] + u >>> 0, r[1] = r[1] + h >>> 0, r[2] = r[2] + l >>> 0, r[3] = r[3] + f >>> 0, 
                r[4] = r[4] + v >>> 0, r[5] = r[5] + m >>> 0, r[6] = r[6] + E >>> 0, r[7] = r[7] + T >>> 0;
            }
            for (var y = new Array(r.length), T = 0; T < r.length; T++) y[T] = ("00000000" + r[T].toString(16)).slice(-8);
            return y.join("");
        }, D.utf8Encode = function(e) {
            try {
                return new TextEncoder().encode(e).reduce(function(t, e) {
                    return t + String.fromCharCode(e);
                }, "");
            } catch (t) {
                return unescape(encodeURIComponent(e));
            }
        }, D.ROTR = function(t, e) {
            return e >>> t | e << 32 - t;
        }, D.z0 = function(t) {
            return D.ROTR(2, t) ^ D.ROTR(13, t) ^ D.ROTR(22, t);
        }, D.z1 = function(t) {
            return D.ROTR(6, t) ^ D.ROTR(11, t) ^ D.ROTR(25, t);
        }, D.q0 = function(t) {
            return D.ROTR(7, t) ^ D.ROTR(18, t) ^ t >>> 3;
        }, D.q1 = function(t) {
            return D.ROTR(17, t) ^ D.ROTR(19, t) ^ t >>> 10;
        }, D.Ch = function(t, e, r) {
            return t & e ^ ~t & r;
        }, D.Maj = function(t, e, r) {
            return t & e ^ t & r ^ e & r;
        }, D);
        function D() {}
        e.Sha256 = i;
    }
}, [ 379 ]);

pbjsChunk([ 259 ], {
    446: function(e, r, n) {
        e.exports = n(447);
    },
    447: function(e, r, n) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), n.d(r, "purpose1Rule", function() {
            return O;
        }), n.d(r, "purpose2Rule", function() {
            return h;
        }), n.d(r, "purpose7Rule", function() {
            return j;
        }), n.d(r, "enforcementRules", function() {
            return C;
        }), n.d(r, "internal", function() {
            return w;
        }), r.getGvlid = B, r.validateRules = V, r.deviceAccessHook = H, r.userSyncHook = R, 
        r.userIdHook = T, r.makeBidRequestsHook = G, r.enableAnalyticsHook = M, r.setEnforcementConfig = U;
        var l = n(0), c = n(3), s = n(8), t = n(10), o = n.n(t), a = n(12), p = n.n(a), i = n(1), u = n(13), d = n(7), f = n(9), g = n.n(f), b = n(5);
        n.n(b);
        function v(r, e) {
            var n, t = Object.keys(r);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(r), e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
            })), t.push.apply(t, n)), t;
        }
        function y(o) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? v(Object(a), !0).forEach(function(e) {
                    var r, n, t;
                    r = o, t = a[n = e], n in r ? Object.defineProperty(r, n, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[n] = t;
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : v(Object(a)).forEach(function(e) {
                    Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e));
                });
            }
            return o;
        }
        function m() {
            return (m = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = arguments[r];
                    for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
                }
                return e;
            }).apply(this, arguments);
        }
        function A(e) {
            return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        var O, h, j, C, D = {
            purpose1: {
                id: 1,
                name: "storage"
            },
            purpose2: {
                id: 2,
                name: "basicAds"
            },
            purpose7: {
                id: 7,
                name: "measurement"
            }
        }, E = [ {
            purpose: "storage",
            enforcePurpose: !0,
            enforceVendor: !0,
            vendorExceptions: []
        }, {
            purpose: "basicAds",
            enforcePurpose: !0,
            enforceVendor: !0,
            vendorExceptions: []
        } ], P = [], k = [], S = [], F = !1, w = {
            getGvlidForBidAdapter: function(e) {
                var r = null;
                {
                    var n;
                    !(e = e || c.b.getCurrentBidder()) || (n = s.default.getBidAdapter(e)) && n.getSpec && (r = n.getSpec().gvlid);
                }
                return r;
            },
            getGvlidForUserIdModule: function(e) {
                return "object" === A(e) ? e.gvlid : null;
            },
            getGvlidForAnalyticsAdapter: function(e) {
                return s.default.getAnalyticsAdapter(e) && (s.default.getAnalyticsAdapter(e).gvlid || null);
            }
        };
        function B(e) {
            var r = null;
            if (e) {
                var n = c.b.getConfig("gvlMapping"), t = "string" == typeof e ? e : e.name;
                if (n && n[t]) return r = n[t];
                r = w.getGvlidForBidAdapter(t) || w.getGvlidForUserIdModule(e) || w.getGvlidForAnalyticsAdapter(t);
            }
            return r;
        }
        function V(r, e, n, t) {
            var o = D[Object.keys(D).filter(function(e) {
                return D[e].name === r.purpose;
            })[0]].id;
            if (p()(r.vendorExceptions || [], n)) return !0;
            var a = l.deepAccess(e, "vendorData.purpose.consents.".concat(o)), i = l.deepAccess(e, "vendorData.vendor.consents.".concat(t)), c = l.deepAccess(e, "vendorData.purpose.legitimateInterests.".concat(o)), s = !1 === r.enforcePurpose || !0 === a, u = !1 === r.enforceVendor || !0 === i;
            return 2 === o ? s && u || !0 === c : s && u;
        }
        function H(e, r, n, t) {
            var o, a, i;
            t = m({}, {
                hasEnforcementHook: !0
            }), Object(l.hasDeviceAccess)() ? (o = s.gdprDataHandler.getConsentData()) && o.gdprApplies && 2 === o.apiVersion ? (r = (a = c.b.getCurrentBidder()) && a != n && s.default.aliasRegistry[a] === n ? B(a) : B(n) || r, 
            V(O, o, i = n || a, r) ? t.valid = !0 : (i && l.logWarn("TCF2 denied device access for ".concat(i)), 
            t.valid = !1, P.push(i))) : t.valid = !0 : (l.logWarn("Device access is disabled by Publisher"), 
            t.valid = !1), e.call(this, r, n, t);
        }
        function R(e) {
            for (var r, n, t = s.gdprDataHandler.getConsentData(), o = arguments.length, a = new Array(1 < o ? o - 1 : 0), i = 1; i < o; i++) a[i - 1] = arguments[i];
            t && t.gdprApplies && 2 === t.apiVersion ? (n = B(r = c.b.getCurrentBidder()), V(O, t, r, n) ? e.call.apply(e, [ this ].concat(a)) : (l.logWarn("User sync not allowed for ".concat(r)), 
            P.push(r))) : e.call.apply(e, [ this ].concat(a));
        }
        function T(e, r, t) {
            var n;
            t && t.gdprApplies && 2 === t.apiVersion ? (n = r.map(function(e) {
                var r = B(e.submodule), n = e.submodule.name;
                if (V(O, t, n, r)) return e;
                l.logWarn("User denied permission to fetch user id for ".concat(n, " User id module")), 
                P.push(n);
            }).filter(function(e) {
                return e;
            }), e.call(this, n, y(y({}, t), {}, {
                hasValidated: !0
            }))) : e.call(this, r, t);
        }
        function G(e, r) {
            for (var o = s.gdprDataHandler.getConsentData(), n = arguments.length, t = new Array(2 < n ? n - 2 : 0), a = 2; a < n; a++) t[a - 2] = arguments[a];
            o && o.gdprApplies && 2 === o.apiVersion && r.forEach(function(e) {
                e.bids = e.bids.filter(function(e) {
                    var r = e.bidder, n = B(r);
                    if (p()(k, r)) return !1;
                    var t = !!V(h, o, r, n);
                    return t || (l.logWarn("TCF2 blocked auction for ".concat(r)), k.push(r)), t;
                });
            }), e.call.apply(e, [ this, r ].concat(t));
        }
        function M(e, r) {
            var o = s.gdprDataHandler.getConsentData();
            o && o.gdprApplies && 2 === o.apiVersion && (l.isArray(r) || (r = [ r ]), r = r.filter(function(e) {
                var r = e.provider, n = B(r), t = !!V(j, o, r, n);
                return t || (S.push(r), l.logWarn("TCF2 blocked analytics adapter ".concat(e.provider))), 
                t;
            })), e.call(this, r);
        }
        g.a.on(b.EVENTS.AUCTION_END, function() {
            function e(n) {
                return n.filter(function(e, r) {
                    return null !== e && n.indexOf(e) === r;
                });
            }
            var r = {
                storageBlocked: e(P),
                biddersBlocked: e(k),
                analyticsBlocked: e(S)
            };
            g.a.emit(b.EVENTS.TCF2_ENFORCEMENT, r);
        });
        var W = function(e) {
            return e.purpose === D.purpose1.name;
        }, I = function(e) {
            return e.purpose === D.purpose2.name;
        }, N = function(e) {
            return e.purpose === D.purpose7.name;
        };
        function U(e) {
            var r = l.deepAccess(e, "gdpr.rules");
            C = r || (l.logWarn("TCF2: enforcing P1 and P2 by default"), E), O = o()(C, W), 
            h = o()(C, I), j = o()(C, N), O = O || E[0], h = h || E[1], O && !F && (F = !0, 
            d.d.before(H, 49), i.registerSyncInner.before(R, 48), Object(u.a)("validateGdprEnforcement").before(T, 47)), 
            h && Object(u.a)("makeBidRequests").before(G), j && Object(u.a)("enableAnalyticsCb").before(M);
        }
        c.b.getConfig("consentManagement", function(e) {
            return U(e.consentManagement);
        });
    }
}, [ 446 ]);

pbjsChunk([ 160 ], {
    684: function(e, r, a) {
        e.exports = a(685);
    },
    685: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), a.d(r, "spec", function() {
            return b;
        });
        var T = a(0), t = a(1), S = a(2), P = a(3), i = a(11);
        function R() {
            return (R = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var a = arguments[r];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                }
                return e;
            }).apply(this, arguments);
        }
        function D(e) {
            return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        var Y = "PubMatic: ", A = "USD", x = void 0, s = "https://pubmatic.bbvms.com/r/".concat("$RENDERER", ".js"), N = {
            kadpageurl: "",
            gender: "",
            yob: "",
            lat: "",
            lon: "",
            wiid: "",
            profId: "",
            verId: ""
        }, n = {
            NUMBER: "number",
            STRING: "string",
            BOOLEAN: "boolean",
            ARRAY: "array",
            OBJECT: "object"
        }, o = {
            mimes: n.ARRAY,
            minduration: n.NUMBER,
            maxduration: n.NUMBER,
            startdelay: n.NUMBER,
            playbackmethod: n.ARRAY,
            api: n.ARRAY,
            protocols: n.ARRAY,
            w: n.NUMBER,
            h: n.NUMBER,
            battr: n.ARRAY,
            linearity: n.NUMBER,
            placement: n.NUMBER,
            minbitrate: n.NUMBER,
            maxbitrate: n.NUMBER
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
        }, u = [ {
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
        } ], d = {
            1: "PMP",
            5: "PREF",
            6: "PMPG"
        }, p = {
            bootstrapPlayer: function(e) {
                var r = {
                    code: e.adUnitCode
                };
                if (e.vastXml ? r.vastXml = e.vastXml : e.vastUrl && (r.vastUrl = e.vastUrl), e.vastXml || e.vastUrl) {
                    for (var a, t = p.getRendererId("pubmatic", e.rendererCode), i = document.getElementById(e.adUnitCode), s = 0; s < window.bluebillywig.renderers.length; s++) if (window.bluebillywig.renderers[s]._id === t) {
                        a = window.bluebillywig.renderers[s];
                        break;
                    }
                    a ? a.bootstrap(r, i) : T.logWarn("".concat(Y, ": Couldn't find a renderer with ").concat(t));
                } else T.logWarn("".concat(Y, ": No vastXml or vastUrl on bid, bailing..."));
            },
            newRenderer: function(e, r) {
                var a = s.replace("$RENDERER", e), t = i.a.install({
                    url: a,
                    loaded: !1,
                    adUnitCode: r
                });
                try {
                    t.setRender(p.outstreamRender);
                } catch (e) {
                    T.logWarn("".concat(Y, ": Error tying to setRender on renderer"), e);
                }
                return t;
            },
            outstreamRender: function(e) {
                e.renderer.push(function() {
                    p.bootstrapPlayer(e);
                });
            },
            getRendererId: function(e, r) {
                return "".concat(e, "-").concat(r);
            }
        }, k = 0, m = !1, g = {}, h = {};
        function C(e, r) {
            if (!T.isStr(r)) return r && T.logWarn(Y + "Ignoring param key: " + e + ", expects string-value, found " + D(r)), 
            x;
            switch (e) {
              case "pmzoneid":
                return r.split(",").slice(0, 50).map(function(e) {
                    return e.trim();
                }).join();

              case "kadfloor":
              case "lat":
              case "lon":
                return parseFloat(r) || x;

              case "yob":
                return parseInt(r) || x;

              default:
                return r;
            }
        }
        function U(e) {
            var r;
            e.params.adUnit = "", e.params.adUnitIndex = "0", e.params.width = 0, e.params.height = 0, 
            e.params.adSlot = (r = e.params.adSlot, T.isStr(r) ? r.replace(/^\s+/g, "").replace(/\s+$/g, "") : "");
            var a = (t = e.params.adSlot).split(":"), t = a[0];
            if (2 == a.length && (e.params.adUnitIndex = a[1]), a = t.split("@"), e.params.adUnit = a[0], 
            1 < a.length) {
                if (2 != (a = a[1].split("x")).length) return void T.logWarn(Y + "AdSlot Error: adSlot not in required format");
                e.params.width = parseInt(a[0], 10), e.params.height = parseInt(a[1], 10);
            } else if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(S.b) && e.mediaTypes.banner.hasOwnProperty("sizes")) {
                for (var i = 0, s = []; i < e.mediaTypes.banner.sizes.length; i++) 2 === e.mediaTypes.banner.sizes[i].length && s.push(e.mediaTypes.banner.sizes[i]);
                e.mediaTypes.banner.sizes = s, 1 <= e.mediaTypes.banner.sizes.length && (e.params.width = e.mediaTypes.banner.sizes[0][0], 
                e.params.height = e.mediaTypes.banner.sizes[0][1], e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1));
            }
        }
        function f(e) {
            var r, a = e.params.video;
            if (a !== x) {
                for (var t in r = {}, o) a.hasOwnProperty(t) && (r[t] = function(e, r, a) {
                    var t, i = "Ignoring param key: " + e + ", expects " + a + ", found " + D(r);
                    switch (a) {
                      case n.BOOLEAN:
                        t = T.isBoolean;
                        break;

                      case n.NUMBER:
                        t = T.isNumber;
                        break;

                      case n.STRING:
                        t = T.isStr;
                        break;

                      case n.ARRAY:
                        t = T.isArray;
                    }
                    return t(r) ? r : (T.logWarn(Y + i), x);
                }(t, a[t], o[t]));
                T.isArray(e.mediaTypes.video.playerSize[0]) ? (r.w = parseInt(e.mediaTypes.video.playerSize[0][0], 10), 
                r.h = parseInt(e.mediaTypes.video.playerSize[0][1], 10)) : T.isNumber(e.mediaTypes.video.playerSize[0]) && (r.w = parseInt(e.mediaTypes.video.playerSize[0], 10), 
                r.h = parseInt(e.mediaTypes.video.playerSize[1], 10)), e.params.video.hasOwnProperty("skippable") && (r.ext = {
                    video_skippable: e.params.video.skippable ? 1 : 0
                });
            } else r = x, T.logWarn(Y + "Error: Video config params missing for adunit: " + e.params.adUnit + " with mediaType set as video. Ignoring video impression in the adunit.");
            return r;
        }
        function z(e) {
            var r, a, t, i, s = {}, n = {}, o = e.hasOwnProperty("sizes") ? e.sizes : [], d = "", p = [], s = {
                id: e.bidId,
                tagid: e.params.adUnit || void 0,
                bidfloor: C("kadfloor", e.params.kadfloor),
                secure: 1,
                ext: {
                    pmZoneId: C("pmzoneid", e.params.pmzoneid)
                },
                bidfloorcur: e.params.currency ? C("currency", e.params.currency) : A
            };
            if (t = s, (i = e).params.deals && (T.isArray(i.params.deals) ? i.params.deals.forEach(function(e) {
                T.isStr(e) && 3 < e.length ? (t.pmp || (t.pmp = {
                    private_auction: 0,
                    deals: []
                }), t.pmp.deals.push({
                    id: e
                })) : T.logWarn(Y + "Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: " + e);
            }) : T.logWarn(Y + "Error: bid.params.deals should be an array of strings.")), e.hasOwnProperty("mediaTypes")) for (d in e.mediaTypes) switch (d) {
              case S.b:
                (r = function(e) {
                    var r, a = e.mediaTypes.banner.sizes, t = [];
                    if (a !== x && T.isArray(a)) {
                        if (r = {}, e.params.width || e.params.height) r.w = e.params.width, r.h = e.params.height; else {
                            if (0 === a.length) return r = x, T.logWarn(Y + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), 
                            r;
                            r.w = parseInt(a[0][0], 10), r.h = parseInt(a[0][1], 10), a = a.splice(1, a.length - 1);
                        }
                        0 < a.length && (t = [], a.forEach(function(e) {
                            1 < e.length && t.push({
                                w: e[0],
                                h: e[1]
                            });
                        }), 0 < t.length && (r.format = t)), r.pos = 0, r.topframe = T.inIframe() ? 0 : 1;
                    } else T.logWarn(Y + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), 
                    r = x;
                    return r;
                }(e)) !== x && (s.banner = r);
                break;

              case S.c:
                n.request = JSON.stringify(function(e) {
                    var r, a, t, i = {
                        assets: []
                    };
                    for (var s in e) {
                        if (e.hasOwnProperty(s)) {
                            var n = {};
                            if (!(i.assets && 0 < i.assets.length && i.assets.hasOwnProperty(s))) switch (s) {
                              case c.TITLE.KEY:
                                e[s].len || e[s].length ? n = {
                                    id: c.TITLE.ID,
                                    required: e[s].required ? 1 : 0,
                                    title: {
                                        len: e[s].len || e[s].length,
                                        ext: e[s].ext
                                    }
                                } : T.logWarn(Y + "Error: Title Length is required for native ad: " + JSON.stringify(e));
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
                                } : T.logWarn(Y + "Error: Image sizes is required for native ad: " + JSON.stringify(e));
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
                                } : T.logWarn(Y + "Error: Icon sizes is required for native ad: " + JSON.stringify(e));
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
                                r = h[s], a = e, t = void 0, t = r.KEY, n = {
                                    id: r.ID,
                                    required: a[t].required ? 1 : 0,
                                    data: {
                                        type: r.TYPE,
                                        len: a[t].len,
                                        ext: a[t].ext
                                    }
                                };
                            }
                        }
                        n && n.id && (i.assets[i.assets.length] = n);
                    }
                    var o = u.length, d = 0;
                    return u.forEach(function(e) {
                        for (var r = i.assets.length, a = 0; a < r; a++) if (e.id == i.assets[a].id) {
                            d++;
                            break;
                        }
                    }), m = o != d, i;
                }(e.nativeParams)), m ? T.logWarn(Y + "Error: Error in Native adunit " + e.params.adUnit + ". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.") : s.native = n;
                break;

              case S.d:
                (a = f(e)) !== x && (s.video = a);
            } else r = {
                pos: 0,
                w: e.params.width,
                h: e.params.height,
                topframe: T.inIframe() ? 0 : 1
            }, T.isArray(o) && 1 < o.length && ((o = o.splice(1, o.length - 1)).forEach(function(e) {
                p.push({
                    w: e[0],
                    h: e[1]
                });
            }), r.format = p), s.banner = r;
            return function(t, i) {
                var s = -1;
                "function" != typeof i.getFloor || P.b.getConfig("pubmatic.disableFloors") || [ S.b, S.d, S.c ].forEach(function(e) {
                    var r, a;
                    t.hasOwnProperty(e) && ("object" !== D(r = i.getFloor({
                        currency: t.bidfloorcur,
                        mediaType: e,
                        size: "*"
                    })) || r.currency !== t.bidfloorcur || isNaN(parseInt(r.floor)) || (a = parseFloat(r.floor), 
                    s = -1 == s ? a : Math.min(a, s)));
                });
                t.bidfloor && (s = Math.max(s, t.bidfloor));
                t.bidfloor = !isNaN(s) && 0 < s ? s : x;
            }(s, e), s.hasOwnProperty(S.b) || s.hasOwnProperty(S.c) || s.hasOwnProperty(S.d) ? s : x;
        }
        T._each(c, function(e) {
            g[e.ID] = e.KEY;
        }), T._each(c, function(e) {
            h[e.KEY] = e;
        });
        var b = {
            code: "pubmatic",
            gvlid: 76,
            supportedMediaTypes: [ S.b, S.d, S.c ],
            isBidRequestValid: function(e) {
                if (e && e.params) {
                    if (!T.isStr(e.params.publisherId)) return T.logWarn(Y + "Error: publisherId is mandatory and cannot be numeric (wrap it in quotes in your config). Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)), 
                    !1;
                    if (e.params.hasOwnProperty("video")) {
                        if (!e.params.video.hasOwnProperty("mimes") || !T.isArray(e.params.video.mimes) || 0 === e.params.video.mimes.length) return T.logWarn(Y + "Error: For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent for ad unit:" + JSON.stringify(e)), 
                        !1;
                        if (!e.hasOwnProperty("mediaTypes") || !e.mediaTypes.hasOwnProperty(S.d)) return T.logError("".concat(Y, ": mediaTypes or mediaTypes.video is not specified. Rejecting bid: "), e), 
                        !1;
                        if (!e.mediaTypes[S.d].hasOwnProperty("context")) return T.logError("".concat(Y, ": no context specified in bid. Rejecting bid: "), e), 
                        !1;
                        if ("outstream" === e.mediaTypes[S.d].context && !T.isStr(e.params.outstreamAU) && !e.hasOwnProperty("renderer") && !e.mediaTypes[S.d].hasOwnProperty("renderer")) return T.logError("".concat(Y, ': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting bid: '), e), 
                        !1;
                    }
                    return !0;
                }
                return !1;
            },
            buildRequests: function(e, r) {
                var a;
                r && r.refererInfo && (a = r.refererInfo);
                var t, i, s, n, o, d, p, c, l, u, m, g, h, f, b, y, v = {
                    pageURL: (t = a) && t.referer ? t.referer : window.location.href,
                    refURL: window.document.referrer
                }, E = (i = v, {
                    id: "" + new Date().getTime(),
                    at: 1,
                    cur: [ A ],
                    imp: [],
                    site: {
                        page: i.pageURL,
                        ref: i.refURL,
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
                    var r;
                    (s = T.deepClone(e)).params.adSlot = s.params.adSlot || "", U(s), s.params.hasOwnProperty("video") || s.hasOwnProperty("mediaTypes") && s.mediaTypes.hasOwnProperty(S.c) || 0 !== s.params.width || 0 !== s.params.height ? (v.pubId = v.pubId || s.params.publisherId, 
                    (v = function(e, r) {
                        var a, t, i;
                        for (a in r.kadpageurl || (r.kadpageurl = r.pageURL), N) N.hasOwnProperty(a) && (t = e[a]) && ("object" === D(i = N[a]) && (t = i.f(t, r)), 
                        T.isStr(t) ? r[a] = t : T.logWarn(Y + "Ignoring param : " + a + " with value : " + N[a] + ", expects string-value, found " + D(t)));
                        return r;
                    }(s.params, v)).transactionId = s.transactionId, "" === I ? I = s.params.currency || x : s.params.hasOwnProperty("currency") && I !== s.params.currency && T.logWarn(Y + "Currency specifier ignored. Only one currency permitted."), 
                    s.params.currency = I, s.params.hasOwnProperty("dctr") && T.isStr(s.params.dctr) && w.push(s.params.dctr), 
                    s.params.hasOwnProperty("bcat") && T.isArray(s.params.bcat) && (O = O.concat(s.params.bcat)), 
                    (r = z(s)) && E.imp.push(r)) : T.logWarn(Y + "Skipping the non-standard adslot: ", s.params.adSlot, JSON.stringify(s));
                }), 0 != E.imp.length) return E.site.publisher.id = v.pubId.trim(), k = v.pubId.trim(), 
                E.ext.wrapper = {}, E.ext.wrapper.profile = parseInt(v.profId) || x, E.ext.wrapper.version = parseInt(v.verId) || x, 
                E.ext.wrapper.wiid = v.wiid || r.auctionId, E.ext.wrapper.wv = "prebid_prebid_4.25.0", 
                E.ext.wrapper.transactionId = v.transactionId, E.ext.wrapper.wp = "pbjs", E.user.gender = v.gender ? v.gender.trim() : x, 
                E.user.geo = {}, E.user.geo.lat = C("lat", v.lat), E.user.geo.lon = C("lon", v.lon), 
                E.user.yob = C("yob", v.yob), E.device.geo = E.user.geo, E.site.page = v.kadpageurl.trim() || E.site.page.trim(), 
                E.site.domain = (n = E.site.page, (o = document.createElement("a")).href = n, o.hostname), 
                "object" === D(P.b.getConfig("content")) && (E.site.content = P.b.getConfig("content")), 
                "object" === D(P.b.getConfig("device")) && (E.device = R(E.device, P.b.getConfig("device"))), 
                T.deepSetValue(E, "source.tid", v.transactionId), -1 !== window.location.href.indexOf("pubmaticTest=true") && (E.test = 1), 
                e[0].schain && T.deepSetValue(E, "source.ext.schain", e[0].schain), r && r.gdprConsent && (T.deepSetValue(E, "user.ext.consent", r.gdprConsent.consentString), 
                T.deepSetValue(E, "regs.ext.gdpr", r.gdprConsent.gdprApplies ? 1 : 0)), r && r.uspConsent && T.deepSetValue(E, "regs.ext.us_privacy", r.uspConsent), 
                !0 === P.b.getConfig("coppa") && T.deepSetValue(E, "regs.coppa", 1), d = E, c = e, 
                m = "", 0 < (p = w).length && (c[0].params.hasOwnProperty("dctr") ? (m = c[0].params.dctr, 
                T.isStr(m) && 0 < m.length ? (u = m.split("|"), m = "", u.forEach(function(e) {
                    m += 0 < e.length ? e.trim() + "|" : "";
                }), l = m.length, "|" === m.substring(l, l - 1) && (m = m.substring(0, l - 1)), 
                d.site.ext = {
                    key_val: m.trim()
                }) : T.logWarn(Y + "Ignoring param : dctr with value : " + m + ", expects string-value, found empty or non-string value"), 
                1 < p.length && T.logWarn(Y + "dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits")) : T.logWarn(Y + "dctr value not found in 1st adunit, ignoring values from subsequent adunits")), 
                g = E, h = e, f = T.deepAccess(h, "0.userIdAsEids"), T.isArray(f) && 0 < f.length && T.deepSetValue(g, "user.eids", f), 
                b = E, 0 < (y = (y = O).filter(function(e) {
                    return "string" == typeof e || (T.logWarn(Y + "bcat: Each category should be a string, ignoring category: " + e), 
                    !1);
                }).map(function(e) {
                    return e.trim();
                }).filter(function(e, r, a) {
                    return 3 < e.length ? a.indexOf(e) === r : void T.logWarn(Y + "bcat: Each category should have a value of a length of more than 3 characters, ignoring category: " + e);
                })).length && (T.logWarn(Y + "bcat: Selected: ", y), b.bcat = y), "object" === D(P.b.getConfig("app")) && (E.app = P.b.getConfig("app"), 
                E.app.publisher = E.site.publisher, E.app.ext = E.site.ext || x, "object" !== D(E.app.content) && (E.app.content = E.site.content || x), 
                delete E.site), {
                    method: "POST",
                    url: "https://hbopenbid.pubmatic.com/translator?source=prebid-client",
                    data: JSON.stringify(E),
                    bidderRequest: r
                };
            },
            interpretResponse: function(e, t) {
                var i = [], s = A, n = JSON.parse(t.data), o = n.site && n.site.ref ? n.site.ref : "";
                try {
                    e.body && e.body.seatbid && T.isArray(e.body.seatbid) && (s = e.body.cur || s, e.body.seatbid.forEach(function(e) {
                        e.bid && T.isArray(e.bid) && e.bid.forEach(function(r) {
                            var a = {
                                requestId: r.impid,
                                cpm: (parseFloat(r.price) || 0).toFixed(2),
                                width: r.w,
                                height: r.h,
                                creativeId: r.crid || r.id,
                                dealId: r.dealid,
                                currency: s,
                                netRevenue: !1,
                                ttl: 300,
                                referrer: o,
                                ad: r.adm,
                                pm_seat: e.seat || null,
                                pm_dspid: r.ext && r.ext.dspid ? r.ext.dspid : null,
                                partnerImpId: r.id || ""
                            };
                            n.imp && 0 < n.imp.length && n.imp.forEach(function(e) {
                                if (r.impid === e.id) switch (!function(r, e) {
                                    var a, t = new RegExp(/VAST\s+version/);
                                    if (0 <= r.indexOf('span class="PubAPIAd"')) e.mediaType = S.b; else if (t.test(r)) e.mediaType = S.d; else try {
                                        (a = JSON.parse(r.replace(/\\/g, ""))) && a.native && (e.mediaType = S.c);
                                    } catch (e) {
                                        T.logWarn(Y + "Error: Cannot parse native reponse for ad response: " + r);
                                    }
                                }(r.adm, a), a.mediaType) {
                                  case S.b:
                                    break;

                                  case S.d:
                                    a.width = r.hasOwnProperty("w") ? r.w : e.video.w, a.height = r.hasOwnProperty("h") ? r.h : e.video.h, 
                                    a.vastXml = r.adm, function(e, r) {
                                        var a, t, i;
                                        if (r.bidderRequest && r.bidderRequest.bids) {
                                            for (var s = 0; s < r.bidderRequest.bids.length; s++) r.bidderRequest.bids[s].bidId === e.requestId && (a = r.bidderRequest.bids[s].params, 
                                            t = r.bidderRequest.bids[s].mediaTypes[S.d].context, i = r.bidderRequest.bids[s].adUnitCode);
                                            t && "outstream" === t && a && a.outstreamAU && i && (e.rendererCode = a.outstreamAU, 
                                            e.renderer = p.newRenderer(e.rendererCode, i));
                                        }
                                    }(a, t);
                                    break;

                                  case S.c:
                                    !function(e, r) {
                                        if (r.native = {}, e.hasOwnProperty("adm")) {
                                            var a = "";
                                            try {
                                                a = JSON.parse(e.adm.replace(/\\/g, ""));
                                            } catch (e) {
                                                return T.logWarn(Y + "Error: Cannot parse native reponse for ad response: " + r.adm);
                                            }
                                            if (a && a.native && a.native.assets && 0 < a.native.assets.length) {
                                                r.mediaType = S.c;
                                                for (var t = 0, i = a.native.assets.length; t < i; t++) switch (a.native.assets[t].id) {
                                                  case c.TITLE.ID:
                                                    r.native.title = a.native.assets[t].title && a.native.assets[t].title.text;
                                                    break;

                                                  case c.IMAGE.ID:
                                                    r.native.image = {
                                                        url: a.native.assets[t].img && a.native.assets[t].img.url,
                                                        height: a.native.assets[t].img && a.native.assets[t].img.h,
                                                        width: a.native.assets[t].img && a.native.assets[t].img.w
                                                    };
                                                    break;

                                                  case c.ICON.ID:
                                                    r.native.icon = {
                                                        url: a.native.assets[t].img && a.native.assets[t].img.url,
                                                        height: a.native.assets[t].img && a.native.assets[t].img.h,
                                                        width: a.native.assets[t].img && a.native.assets[t].img.w
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
                                                    r.native[g[a.native.assets[t].id]] = a.native.assets[t].data && a.native.assets[t].data.value;
                                                }
                                                r.native.clickUrl = a.native.link && a.native.link.url, r.native.clickTrackers = a.native.link && a.native.link.clicktrackers || [], 
                                                r.native.impressionTrackers = a.native.imptrackers || [], r.native.jstracker = a.native.jstracker || [], 
                                                r.width || (r.width = 0), r.height || (r.height = 0);
                                            }
                                        }
                                    }(r, a);
                                }
                            }), r.ext && r.ext.deal_channel && (a.dealChannel = d[r.ext.deal_channel] || null), 
                            a.meta = {}, r.ext && r.ext.dspid && (a.meta.networkId = r.ext.dspid), r.ext && r.ext.advid && (a.meta.buyerId = r.ext.advid), 
                            r.adomain && 0 < r.adomain.length && (a.meta.advertiserDomains = r.adomain, a.meta.clickUrl = r.adomain[0]), 
                            e.ext && e.ext.buyid && (a.adserverTargeting = {
                                hb_buyid_pubmatic: e.ext.buyid
                            }), i.push(a);
                        });
                    }));
                } catch (e) {
                    T.logError(e);
                }
                return i;
            },
            getUserSyncs: function(e, r, a, t) {
                var i = "" + k;
                return a && (i += "&gdpr=" + (a.gdprApplies ? 1 : 0), i += "&gdpr_consent=" + encodeURIComponent(a.consentString || "")), 
                t && (i += "&us_privacy=" + encodeURIComponent(t)), !0 === P.b.getConfig("coppa") && (i += "&coppa=1"), 
                e.iframeEnabled ? [ {
                    type: "iframe",
                    url: "https://ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=" + i
                } ] : [ {
                    type: "image",
                    url: "https://image8.pubmatic.com/AdServer/ImgSync?p=" + i
                } ];
            },
            transformBidParams: function(e) {
                return T.convertTypes({
                    publisherId: "string",
                    adSlot: "string"
                }, e);
            }
        };
        Object(t.registerBidder)(b);
    }
}, [ 684 ]);

pbjs.processQueue();

var jppol = function(exports) {
    "use strict";
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
        k++) r[k] = a[j];
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
    var adformBidder = function(bannerObject, eIdAllowed) {
        if (eIdAllowed === void 0) {
            eIdAllowed = false;
        }
        var adformBids = [];
        if (typeof bannerObject.adformMID !== "undefined") {
            var adformObject = {
                bidder: "adform",
                params: {
                    mid: bannerObject.adformMID,
                    priceType: "net",
                    rcur: "USD"
                }
            };
            if (eIdAllowed) {
                adformObject.params.eids = encodeEIDs([ {
                    source: "firstpartyid",
                    uids: [ {
                        atype: 1,
                        id: window.eb_anon_uuid
                    } ]
                } ]);
            }
            adformBids.push(adformObject);
        }
        return adformBids;
    };
    var appnexusBidder = function(bannerObject, keywords) {
        var appnexusBids = [];
        if (typeof bannerObject.appnexusID !== "undefined") {
            var appnexusObj = {
                bidder: "appnexus",
                params: {
                    placementId: bannerObject.appnexusID
                }
            };
            if (keywords) appnexusObj.params.keywords = keywords;
            appnexusBids.push(appnexusObj);
        }
        return appnexusBids;
    };
    var criteoBidder = function(bannerObject) {
        var criteoBid = [];
        if (typeof bannerObject.criteoId !== "undefined") {
            criteoBid.push({
                bidder: "criteo",
                params: {
                    networkId: 6911
                }
            });
        }
        return criteoBid;
    };
    var BidderHandler = function(bannerObject, keywords, eidsAllowed) {
        try {
            var adformBids = adformBidder(bannerObject, eidsAllowed);
            var appnexusBids = appnexusBidder(bannerObject, keywords);
            var criteoBids = criteoBidder(bannerObject);
            return __spreadArrays(adformBids, appnexusBids, criteoBids);
        } catch (err) {
            console.error("jppolPrebid BidderHandler", err);
        }
    };
    var PREBIDAUCTION = "prebidAuction";
    var COMPLETED = "completed";
    var mimes = [ "video/mp4" ];
    function AdUnitCreator(bannerContainer, keywords, eidsAllowed) {
        try {
            var adUnits = [];
            for (var _i = 0, bannerContainer_1 = bannerContainer; _i < bannerContainer_1.length; _i++) {
                var banner = bannerContainer_1[_i];
                var bidders = BidderHandler(banner, keywords, eidsAllowed);
                var playerSize = [ [ 640, 480 ] ];
                var mediaTypes = banner.video ? {
                    video: {
                        context: "instream",
                        playerSize: playerSize,
                        mimes: mimes,
                        protocols: [ 2, 3, 5, 6 ],
                        api: [ 2 ],
                        maxduration: 30,
                        linearity: 1
                    }
                } : {
                    banner: {
                        sizes: banner.sizes
                    }
                };
                var adUnit = {
                    bids: bidders,
                    code: banner.targetId,
                    mediaTypes: mediaTypes
                };
                adUnits.push(adUnit);
            }
            return adUnits;
        } catch (err) {
            console.error("prebid", "biddersetup", err);
        }
    }
    function deepObjectMerge(obj1, obj2) {
        var returnObj = obj1;
        for (var key in obj2) {
            if (returnObj[key]) {
                if (typeof returnObj[key] === typeof obj2[key]) {
                    if (Array.isArray(obj2[key])) {
                        returnObj[key] = __spreadArrays(returnObj[key], obj2[key]);
                    } else if (Object.prototype.toString.call(obj2[key]) === "[object Object]") {
                        deepObjectMerge(returnObj[key], obj2[key]);
                    }
                } else {
                    returnObj[key] = obj2[key];
                }
            } else {
                returnObj[key] = obj2[key];
            }
        }
        return returnObj;
    }
    var AuctionHandler = function() {
        function AuctionHandler() {
            this.auctionSettings = {
                consentTimeout: 3e6,
                debug: false,
                timeout: 700
            };
            this.auctionInProgress = false;
            this.waitformoreAllowed = true;
            console.log("PREBID AUCTIONHANDLER CONSTRUCTED!");
        }
        AuctionHandler.prototype.add = function(options) {
            var _this = this;
            var _a;
            this.auctionSettings = deepObjectMerge(this.auctionSettings, options);
            this.waitformoreAllowed = (_a = options.allowWait) !== null && _a !== void 0 ? _a : this.waitformoreAllowed;
            if (options.banners) {
                if (!this.waitformore && !this.auctionInProgress) {
                    if (this.waitformoreAllowed) {
                        this.waitformore = setTimeout(function() {
                            _this.auction();
                        }, 250);
                    } else {
                        this.auction();
                    }
                } else if (this.auctionInProgress) {
                    window.ebLog({
                        component: "jppol-prebid",
                        level: "WARNING",
                        message: "Trying to add more banners to prebid auction"
                    });
                }
            }
        };
        AuctionHandler.prototype.auction = function() {
            var _this = this;
            try {
                var pbjs_1 = window.pbjs;
                this.auctionInProgress = true;
                this.waitformore = null;
                var _a = this.auctionSettings, adserverCallback_1 = _a.adserverCallback, banners = _a.banners, consentTimeout_1 = _a.consentTimeout, debug_1 = _a.debug, eidsAllowed = _a.eidsAllowed, keywords = _a.keywords, timeout_1 = _a.timeout;
                if (window[PREBIDAUCTION][COMPLETED] && pbjs_1.adUnits.length) {
                    console.log("prebid: If the auction is completed, remove adunits");
                    pbjs_1.removeAdUnit();
                }
                window[PREBIDAUCTION][COMPLETED] = false;
                var adUnits_1 = AdUnitCreator(banners, keywords, eidsAllowed);
                console.log("prebid: adUnits created?", adUnits_1);
                pbjs_1.que.push(function() {
                    if (adUnits_1.length > 0) {
                        pbjs_1.setConfig({
                            bidderTimeout: timeout_1,
                            cache: {
                                url: "https://prebid.adnxs.com/pbc/v1/cache"
                            },
                            consentManagement: {
                                cmpApi: "iab",
                                timeout: consentTimeout_1
                            },
                            debug: debug_1,
                            gvlMapping: {
                                pubProvidedId: 50
                            },
                            priceGranularity: "high",
                            user: {
                                ext: {
                                    eids: [ {
                                        source: "firstpartyid",
                                        uids: [ {
                                            id: window.eb_anon_uuid,
                                            ext: {
                                                third: window.eb_anon_uuid
                                            }
                                        } ]
                                    } ]
                                }
                            },
                            userSync: {
                                enabledBidders: [ "adform" ],
                                iframeEnabled: true,
                                syncDelay: 6e3,
                                userIds: [ {
                                    name: "pubProvidedId",
                                    params: {
                                        eids: [ {
                                            source: "firstpartyid",
                                            uids: [ {
                                                atype: 1,
                                                id: window.eb_anon_uuid
                                            } ]
                                        } ]
                                    }
                                } ]
                            }
                        });
                        pbjs_1.addAdUnits(adUnits_1);
                        console.log("prebid: pbjs.adUnits?", pbjs_1.adUnits);
                        pbjs_1.requestBids({
                            bidsBackHandler: function(bidResponse) {
                                console.log("prebid: bidsBackHandler", bidResponse);
                                console.log("prebid: bidsBackHandler.getAdserverTargeting", pbjs_1.getAdserverTargeting());
                                var apntag = window.apntag;
                                if (typeof apntag !== "undefined") {
                                    pbjs_1.que.push(function() {
                                        console.log("prebid: bidsBackHandler adding apn to pbjs que");
                                        apntag.anq.push(function() {
                                            pbjs_1.setTargetingForAst();
                                            apntag.loadTags();
                                            window.jppolStillWaitingForPrebid = false;
                                            console.log("__apn we just loaded prebid banners");
                                            console.log("prebid: bidsBackHandler pbjs.setTargetingForAst() && apntag.loadTags()");
                                        });
                                    });
                                }
                                if (typeof adserverCallback_1 !== "undefined") {
                                    adserverCallback_1(bidResponse);
                                }
                                _this.auctionInProgress = false;
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
        return hbParams.join("&");
    }
    if (window["jppol"] && window["jppol"].cache.length) {
        window["jppol"].cache.forEach(function(cacheElement) {
            prebid(cacheElement);
        });
    }
    exports.getPrebidVideoParams = getPrebidVideoParams;
    exports.prebid = prebid;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    return exports;
}({});