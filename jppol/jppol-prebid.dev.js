!function(e) {
    var t = window.pbjsChunk;
    window.pbjsChunk = function(n, o, a) {
        for (var c, u, s, d = 0, f = []; d < n.length; d++) u = n[d], r[u] && f.push(r[u][0]), 
        r[u] = 0;
        for (c in o) Object.prototype.hasOwnProperty.call(o, c) && (e[c] = o[c]);
        for (t && t(n, o, a); f.length; ) f.shift()();
        if (a) for (d = 0; d < a.length; d++) s = i(i.s = a[d]);
        return s;
    };
    var n = {}, r = {
        392: 0
    };
    function i(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
    }
    i.m = e, i.c = n, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        });
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return i.d(t, "a", t), t;
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, i.p = "", i.oe = function(e) {
        throw console.error(e), e;
    }, i(i.s = 974);
}({
    0: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "internal", function() {
            return C;
        }), t.getPrebidInternal = function() {
            return R;
        }, n.d(t, "bind", function() {
            return B;
        }), t.getUniqueIdentifierStr = D, t.generateUUID = function e(t) {
            return t ? (t ^ (window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()) >> t / 4).toString(16) : ([ 1e7 ] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e);
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
        }, t.transformAdServerTargetingObj = function(e) {
            return e && Object.getOwnPropertyNames(e).length > 0 ? se(e).map(function(t) {
                return "".concat(t, "=").concat(encodeURIComponent(de(e, t)));
            }).join("&") : "";
        }, t.getAdUnitSizes = function(e) {
            if (!e) return;
            var t = [];
            if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
                var n = e.mediaTypes.banner.sizes;
                Array.isArray(n[0]) ? t = n : t.push(n);
            } else Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes));
            return t;
        }, t.parseSizesInput = function(e) {
            var t = [];
            if ("string" == typeof e) {
                var n = e.split(","), r = /^(\d)+x(\d)+$/i;
                if (n) for (var i in n) ee(n, i) && n[i].match(r) && t.push(n[i]);
            } else if ("object" === m(e)) {
                var o = e.length;
                if (o > 0) if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(k(e)); else for (var a = 0; a < o; a++) t.push(k(e[a]));
            }
            return t;
        }, t.parseGPTSingleSizeArray = k, t.parseGPTSingleSizeArrayToRtbSize = function(e) {
            if (N(e)) return {
                w: e[0],
                h: e[1]
            };
        }, t.getWindowTop = P, t.getWindowSelf = q, t.getWindowLocation = M, t.logMessage = G, 
        t.logInfo = L, t.logWarn = W, t.logError = F, t.hasConsoleLogger = function() {
            return E;
        }, t.debugTurnedOn = V, t.createInvisibleIframe = function() {
            var e = document.createElement("iframe");
            return e.id = D(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", 
            e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", 
            e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", 
            e;
        }, t.getParameterByName = function(e) {
            return je(M().search)[e] || "";
        }, t.isA = H, t.isFn = K, t.isStr = J, t.isArray = Y, t.isNumber = Q, t.isPlainObject = $, 
        t.isBoolean = function(e) {
            return H(e, "Boolean");
        }, t.isEmpty = X, t.isEmptyStr = function(e) {
            return J(e) && (!e || 0 === e.length);
        }, t._each = Z, t.contains = function(e, t) {
            if (X(e)) return !1;
            if (K(e.indexOf)) return -1 !== e.indexOf(t);
            var n = e.length;
            for (;n--; ) if (e[n] === t) return !0;
            return !1;
        }, t._map = function(e, t) {
            if (X(e)) return [];
            if (K(e.map)) return e.map(t);
            var n = [];
            return Z(e, function(r, i) {
                n.push(t(r, i, e));
            }), n;
        }, t.hasOwn = ee, t.insertElement = te, t.waitForElementToLoad = ne, t.triggerPixel = re, 
        t.callBurl = function(e) {
            var t = e.source, n = e.burl;
            t === O.S2S.SRC && n && C.triggerPixel(n);
        }, t.insertHtmlIntoIframe = function(e) {
            if (!e) return;
            var t = document.createElement("iframe");
            t.id = D(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", 
            t.marginWidth = "0", t.marginHeight = "0", t.style.display = "none", 
            t.style.height = "0px", t.style.width = "0px", t.scrolling = "no", t.frameBorder = "0", 
            t.allowtransparency = "true", C.insertElement(t, document, "body"), 
            t.contentWindow.document.open(), t.contentWindow.document.write(e), 
            t.contentWindow.document.close();
        }, t.insertUserSyncIframe = ie, t.createTrackPixelHtml = function(e) {
            if (!e) return "";
            var t = encodeURI(e), n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return n += '<img src="' + t + '"></div>';
        }, t.createTrackPixelIframeHtml = oe, t.getValueString = ae, t.uniques = ce, 
        t.flatten = ue, t.getBidRequest = function(e, t) {
            if (!e) return;
            var n;
            return t.some(function(t) {
                var r = u()(t.bids, function(t) {
                    return [ "bidId", "adId", "bid_id" ].some(function(n) {
                        return t[n] === e;
                    });
                });
                return r && (n = r), r;
            }), n;
        }, t.getKeys = se, t.getValue = de, t.getKeyByValue = function(e, t) {
            for (var n in e) if (e.hasOwnProperty(n) && e[n] === t) return n;
        }, t.getBidderCodes = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits;
            return e.map(function(e) {
                return e.bids.map(function(e) {
                    return e.bidder;
                }).reduce(ue, []);
            }).reduce(ue).filter(ce);
        }, t.isGptPubadsDefined = fe, t.isApnGetTagDefined = function() {
            if (window.apntag && K(window.apntag.getTag)) return !0;
        }, n.d(t, "getHighestCpm", function() {
            return le;
        }), n.d(t, "getOldestHighestCpmBid", function() {
            return pe;
        }), n.d(t, "getLatestHighestCpmBid", function() {
            return ge;
        }), t.shuffle = function(e) {
            var t = e.length;
            for (;t > 0; ) {
                var n = Math.floor(Math.random() * t);
                t--;
                var r = e[t];
                e[t] = e[n], e[n] = r;
            }
            return e;
        }, t.adUnitsFilter = function(e, t) {
            return d()(e, t && t.adUnitCode);
        }, t.deepClone = ve, t.inIframe = function() {
            try {
                return C.getWindowSelf() !== C.getWindowTop();
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
        }, t.checkCookieSupport = ye, t.delayExecution = function(e, t) {
            if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));
            var n = 0;
            return function() {
                ++n === t && e.apply(this, arguments);
            };
        }, t.groupBy = function(e, t) {
            return e.reduce(function(e, n) {
                return (e[n[t]] = e[n[t]] || []).push(n), e;
            }, {});
        }, t.getDefinedParams = function(e, t) {
            return t.filter(function(t) {
                return e[t];
            }).reduce(function(t, n) {
                return h(t, y({}, n, e[n]));
            }, {});
        }, t.isValidMediaTypes = function(e) {
            var t = [ "banner", "native", "video" ];
            if (!Object.keys(e).every(function(e) {
                return d()(t, e);
            })) return !1;
            if (e.video && e.video.context) return d()([ "instream", "outstream", "adpod" ], e.video.context);
            return !0;
        }, t.getBidderRequest = function(e, t, n) {
            return u()(e, function(e) {
                return e.bids.filter(function(e) {
                    return e.bidder === t && e.adUnitCode === n;
                }).length > 0;
            }) || {
                start: null,
                auctionId: null
            };
        }, t.getUserConfiguredParams = function(e, t, n) {
            return e.filter(function(e) {
                return e.code === t;
            }).map(function(e) {
                return e.bids;
            }).reduce(ue, []).filter(function(e) {
                return e.bidder === n;
            }).map(function(e) {
                return e.params || {};
            });
        }, t.getOrigin = function() {
            return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
        }, t.getDNT = function() {
            return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack;
        }, t.isAdUnitCodeMatchingSlot = function(e) {
            return function(t) {
                return he(e, t);
            };
        }, t.isSlotMatchingAdUnitCode = me, t.getGptSlotInfoForAdUnitCode = function(e) {
            var t;
            fe() && (t = u()(window.googletag.pubads().getSlots(), me(e)));
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
        }, t.isInteger = Oe, t.convertCamelToUnderscore = function(e) {
            return e.replace(/(?:^|\.?)([A-Z])/g, function(e, t) {
                return "_" + t.toLowerCase();
            }).replace(/^_/, "");
        }, t.cleanObj = function(e) {
            return Object.keys(e).reduce(function(t, n) {
                return void 0 !== e[n] && (t[n] = e[n]), t;
            }, {});
        }, t.pick = function(e, t) {
            if ("object" !== m(e)) return {};
            return t.reduce(function(n, r, i) {
                if ("function" == typeof r) return n;
                var o = r, a = r.match(/^(.+?)\sas\s(.+?)$/i);
                a && (r = a[1], o = a[2]);
                var c = e[r];
                return "function" == typeof t[i + 1] && (c = t[i + 1](c, n)), void 0 !== c && (n[o] = c), 
                n;
            }, {});
        }, t.transformBidderParamKeywords = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "keywords", n = [];
            return Z(e, function(e, r) {
                if (Y(e)) {
                    var i = [];
                    Z(e, function(e) {
                        ((e = ae(t + "." + r, e)) || "" === e) && i.push(e);
                    }), e = i;
                } else {
                    if (!J(e = ae(t + "." + r, e))) return;
                    e = [ e ];
                }
                n.push({
                    key: r,
                    value: e
                });
            }), n;
        }, t.convertTypes = function(e, t) {
            return Object.keys(e).forEach(function(n) {
                var r, i;
                t[n] && (K(e[n]) ? t[n] = e[n](t[n]) : t[n] = (r = e[n], i = t[n], 
                "string" === r ? i && i.toString() : "number" === r ? Number(i) : i), 
                isNaN(t[n]) && delete t.key);
            }), t;
        }, t.isArrayOfNums = function(e, t) {
            return Y(e) && (!t || e.length === t) && e.every(function(e) {
                return Oe(e);
            });
        }, t.fill = function(e, t) {
            for (var n = [], r = 0; r < t; r++) {
                var i = $(e) ? ve(e) : e;
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
            return Math.min.apply(Math, g(e));
        }, t.getMaxValueFromArray = function(e) {
            return Math.max.apply(Math, g(e));
        }, t.compareOn = function(e) {
            return function(t, n) {
                return t[e] < n[e] ? 1 : t[e] > n[e] ? -1 : 0;
            };
        }, t.parseQS = je, t.formatQS = Se, t.parseUrl = function(e, t) {
            var n = document.createElement("a");
            t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
            var r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
            return {
                href: n.href,
                protocol: (n.protocol || "").replace(/:$/, ""),
                hostname: n.hostname,
                port: +n.port,
                pathname: n.pathname.replace(/^(?!\/)/, "/"),
                search: r ? n.search : C.parseQS(n.search || ""),
                hash: (n.hash || "").replace(/^#/, ""),
                host: n.host || window.location.host
            };
        }, t.buildUrl = function(e) {
            return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(C.formatQS(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "");
        }, t.deepEqual = Ee, t.mergeDeep = function e(t) {
            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
            if (!r.length) return t;
            var o = r.shift();
            if ($(t) && $(o)) {
                var a = function(n) {
                    $(o[n]) ? (t[n] || h(t, y({}, n, {})), e(t[n], o[n])) : Y(o[n]) && t[n] ? Y(t[n]) && o[n].forEach(function(e) {
                        for (var r = 1, i = 0; i < t[n].length; i++) if (Ee(t[n][i], e)) {
                            r = 0;
                            break;
                        }
                        r && t[n].push(e);
                    }) : h(t, y({}, n, o[n]));
                };
                for (var c in o) a(c);
            }
            return e.apply(void 0, [ t ].concat(r));
        }, t.cyrb53Hash = function(e) {
            for (var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r = function(e, t) {
                if (K(Math.imul)) return Math.imul(e, t);
                var n = (4194303 & e) * (t |= 0);
                return 4290772992 & e && (n += (4290772992 & e) * t | 0), 0 | n;
            }, i = 3735928559 ^ n, o = 1103547991 ^ n, a = 0; a < e.length; a++) t = e.charCodeAt(a), 
            i = r(i ^ t, 2654435761), o = r(o ^ t, 1597334677);
            return i = r(i ^ i >>> 16, 2246822507) ^ r(o ^ o >>> 13, 3266489909), 
            (4294967296 * (2097151 & (o = r(o ^ o >>> 16, 2246822507) ^ r(i ^ i >>> 13, 3266489909))) + (i >>> 0)).toString();
        }, t.isAllowZeroCpmBidsEnabled = function(e) {
            var t = Object(i.a)().bidderSettings;
            return t[e] && !0 === t[e].allowZeroCpmBids || t.standard && !0 === t.standard.allowZeroCpmBids;
        };
        var r = n(3), i = n(14), o = n(167), a = n.n(o), c = n(11), u = n.n(c), s = n(12), d = n.n(s), f = n(168);
        n.d(t, "deepAccess", function() {
            return f.a;
        });
        var l = n(169);
        function p(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == n) return;
                var r, i, o = [], a = !0, c = !1;
                try {
                    for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), 
                    !t || o.length !== t); a = !0);
                } catch (e) {
                    c = !0, i = e;
                } finally {
                    try {
                        a || null == n.return || n.return();
                    } finally {
                        if (c) throw i;
                    }
                }
                return o;
            }(e, t) || b(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function g(e) {
            return function(e) {
                if (Array.isArray(e)) return v(e);
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
            }(e) || b(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function b(e, t) {
            if (e) {
                if ("string" == typeof e) return v(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), 
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(e, t) : void 0;
            }
        }
        function v(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function y(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function h() {
            return (h = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        function m(e) {
            return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        n.d(t, "deepSetValue", function() {
            return l.a;
        });
        var O = n(5), j = Object.prototype.toString, S = Boolean(window.console), E = Boolean(S && window.console.log), A = Boolean(S && window.console.info), T = Boolean(S && window.console.warn), I = Boolean(S && window.console.error), w = n(10), C = {
            checkCookieSupport: ye,
            createTrackPixelIframeHtml: oe,
            getWindowSelf: q,
            getWindowTop: P,
            getWindowLocation: M,
            insertUserSyncIframe: ie,
            insertElement: te,
            isFn: K,
            triggerPixel: re,
            logError: F,
            logWarn: W,
            logMessage: G,
            logInfo: L,
            parseQS: je,
            formatQS: Se,
            deepEqual: Ee
        }, R = {};
        var _, U = {}, B = function(e, t) {
            return t;
        }.bind(null, 1, U)() === U ? Function.prototype.bind : function(e) {
            var t = this, n = Array.prototype.slice.call(arguments, 1);
            return function() {
                return t.apply(e, n.concat(Array.prototype.slice.call(arguments)));
            };
        }, x = (_ = 0, function() {
            return ++_;
        });
        function D() {
            return x() + Math.random().toString(16).substr(2);
        }
        function k(e) {
            if (N(e)) return e[0] + "x" + e[1];
        }
        function N(e) {
            return Y(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1]);
        }
        function P() {
            return window.top;
        }
        function q() {
            return window.self;
        }
        function M() {
            return window.location;
        }
        function G() {
            V() && E && console.log.apply(console, z(arguments, "MESSAGE:"));
        }
        function L() {
            V() && A && console.info.apply(console, z(arguments, "INFO:"));
        }
        function W() {
            V() && T && console.warn.apply(console, z(arguments, "WARNING:")), w.emit(O.EVENTS.AUCTION_DEBUG, {
                type: "WARNING",
                arguments: arguments
            });
        }
        function F() {
            V() && I && console.error.apply(console, z(arguments, "ERROR:")), w.emit(O.EVENTS.AUCTION_DEBUG, {
                type: "ERROR",
                arguments: arguments
            });
        }
        function z(e, t) {
            e = [].slice.call(e);
            var n = r.b.getCurrentBidder();
            return t && e.unshift(t), n && e.unshift(i("#aaa")), e.unshift(i("#3b88c3")), 
            e.unshift("%cPrebid" + (n ? "%c".concat(n) : "")), e;
            function i(e) {
                return "display: inline-block; color: #fff; background: ".concat(e, "; padding: 1px 4px; border-radius: 3px;");
            }
        }
        function V() {
            return !!r.b.getConfig("debug");
        }
        function H(e, t) {
            return j.call(e) === "[object " + t + "]";
        }
        function K(e) {
            return H(e, "Function");
        }
        function J(e) {
            return H(e, "String");
        }
        function Y(e) {
            return H(e, "Array");
        }
        function Q(e) {
            return H(e, "Number");
        }
        function $(e) {
            return H(e, "Object");
        }
        function X(e) {
            if (!e) return !0;
            if (Y(e) || J(e)) return !(e.length > 0);
            for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
            return !0;
        }
        function Z(e, t) {
            if (!X(e)) {
                if (K(e.forEach)) return e.forEach(t, this);
                var n = 0, r = e.length;
                if (r > 0) for (;n < r; n++) t(e[n], n, e); else for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n);
            }
        }
        function ee(e, t) {
            return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t];
        }
        function te(e, t, n, r) {
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
        function ne(e, t) {
            var n = null;
            return new Promise(function(r) {
                var i = function t() {
                    e.removeEventListener("load", t), e.removeEventListener("error", t), 
                    null != n && window.clearTimeout(n), r();
                };
                e.addEventListener("load", i), e.addEventListener("error", i), null != t && (n = window.setTimeout(i, t));
            });
        }
        function re(e, t, n) {
            var r = new Image();
            t && C.isFn(t) && ne(r, n).then(t), r.src = e;
        }
        function ie(e, t, n) {
            var r = C.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"), i = document.createElement("div");
            i.innerHTML = r;
            var o = i.firstChild;
            t && C.isFn(t) && ne(o, n).then(t), C.insertElement(o, document, "html", !0);
        }
        function oe(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            return e ? (t && (e = encodeURI(e)), n && (n = 'sandbox="'.concat(n, '"')), 
            "<iframe ".concat(n, ' id="').concat(D(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : "";
        }
        function ae(e, t, n) {
            return null == t ? n : J(t) ? t : Q(t) ? t.toString() : void C.logWarn("Unsuported type for param: " + e + " required type: String");
        }
        function ce(e, t, n) {
            return n.indexOf(e) === t;
        }
        function ue(e, t) {
            return e.concat(t);
        }
        function se(e) {
            return Object.keys(e);
        }
        function de(e, t) {
            return e[t];
        }
        function fe() {
            if (window.googletag && K(window.googletag.pubads) && K(window.googletag.pubads().getSlots)) return !0;
        }
        var le = be("timeToRespond", function(e, t) {
            return e > t;
        }), pe = be("responseTimestamp", function(e, t) {
            return e > t;
        }), ge = be("responseTimestamp", function(e, t) {
            return e < t;
        });
        function be(e, t) {
            return function(n, r) {
                return n.cpm === r.cpm ? t(n[e], r[e]) ? r : n : n.cpm < r.cpm ? r : n;
            };
        }
        function ve(e) {
            return a()(e);
        }
        function ye() {
            if (window.navigator.cookieEnabled || document.cookie.length) return !0;
        }
        var he = function(e, t) {
            return e.getAdUnitPath() === t || e.getSlotElementId() === t;
        };
        function me(e) {
            return function(t) {
                return he(t, e);
            };
        }
        function Oe(e) {
            return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e;
        }
        function je(e) {
            return e ? e.replace(/^\?/, "").split("&").reduce(function(e, t) {
                var n = p(t.split("="), 2), r = n[0], i = n[1];
                return /\[\]$/.test(r) ? (e[r = r.replace("[]", "")] = e[r] || [], 
                e[r].push(i)) : e[r] = i || "", e;
            }, {}) : {};
        }
        function Se(e) {
            return Object.keys(e).map(function(t) {
                return Array.isArray(e[t]) ? e[t].map(function(e) {
                    return "".concat(t, "[]=").concat(e);
                }).join("&") : "".concat(t, "=").concat(e[t]);
            }).join("&");
        }
        function Ee(e, t) {
            if (e === t) return !0;
            if ("object" === m(e) && null !== e && "object" === m(t) && null !== t) {
                if (Object.keys(e).length !== Object.keys(t).length) return !1;
                for (var n in e) {
                    if (!t.hasOwnProperty(n)) return !1;
                    if (!Ee(e[n], t[n])) return !1;
                }
                return !0;
            }
            return !1;
        }
    },
    1: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "storage", function() {
            return T;
        }), t.registerBidder = function(e) {
            var t = Array.isArray(e.supportedMediaTypes) ? {
                supportedMediaTypes: e.supportedMediaTypes
            } : void 0;
            function n(e) {
                var n = w(e);
                i.default.registerBidAdapter(n, e.code, t);
            }
            n(e), Array.isArray(e.aliases) && e.aliases.forEach(function(t) {
                var r, o, a = t;
                Object(y.isPlainObject)(t) && (a = t.code, r = t.gvlid, o = t.skipPbsAliasing), 
                i.default.aliasRegistry[a] = e.code, n(A({}, e, {
                    code: a,
                    gvlid: r,
                    skipPbsAliasing: o
                }));
            });
        }, t.newBidder = w, n.d(t, "registerSyncInner", function() {
            return C;
        }), t.preloadBidderMappingFile = R, t.getIabSubCategory = function(e, t) {
            var n = i.default.getBidAdapter(e);
            if (n.getSpec().getMappingFileInfo) {
                var r = n.getSpec().getMappingFileInfo(), o = r.localStorageKey ? r.localStorageKey : n.getBidderCode(), a = T.getDataFromLocalStorage(o);
                if (a) {
                    try {
                        a = JSON.parse(a);
                    } catch (t) {
                        Object(y.logError)("Failed to parse ".concat(e, " mapping data stored in local storage"));
                    }
                    return a.mapping[t] ? a.mapping[t] : null;
                }
            }
        }, t.isValid = _;
        var r = n(82), i = n(8), o = n(3), a = n(43), c = n(60), u = n(39), s = n(20), d = n(5), f = n.n(d), l = n(10), p = n.n(l), g = n(12), b = n.n(g), v = n(4), y = n(0), h = n(2), m = n(9), O = n(7);
        function j(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == n) return;
                var r, i, o = [], a = !0, c = !1;
                try {
                    for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), 
                    !t || o.length !== t); a = !0);
                } catch (e) {
                    c = !0, i = e;
                } finally {
                    try {
                        a || null == n.return || n.return();
                    } finally {
                        if (c) throw i;
                    }
                }
                return o;
            }(e, t) || function(e, t) {
                if (!e) return;
                if ("string" == typeof e) return S(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t);
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function S(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function E(e) {
            return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
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
        var T = Object(O.a)("bidderFactory"), I = [ "requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency" ];
        function w(e) {
            return A(new r.a(e.code), {
                getSpec: function() {
                    return Object.freeze(e);
                },
                registerSyncs: t,
                callBids: function(r, c, u, s, d, l) {
                    if (Array.isArray(r.bids)) {
                        var g = {}, b = [], v = r.bids.filter(n);
                        if (0 !== v.length) {
                            var h = {};
                            v.forEach(function(e) {
                                h[e.bidId] = e, e.adUnitCode || (e.adUnitCode = e.placementCode);
                            });
                            var m = e.buildRequests(v, r);
                            if (m && 0 !== m.length) {
                                Array.isArray(m) || (m = [ m ]);
                                var O = Object(y.delayExecution)(l(j), m.length);
                                m.forEach(function(e) {
                                    return p.a.emit(f.a.EVENTS.BEFORE_BIDDER_HTTP, r);
                                }), m.forEach(function(t) {
                                    switch (t.method) {
                                      case "GET":
                                        s("".concat(t.url).concat(function(e) {
                                            if (e) return "?".concat("object" === E(e) ? Object(y.parseQueryStringParameters)(e) : e);
                                            return "";
                                        }(t.data)), {
                                            success: l(n),
                                            error: o
                                        }, void 0, A({
                                            method: "GET",
                                            withCredentials: !0
                                        }, t.options));
                                        break;

                                      case "POST":
                                        s(t.url, {
                                            success: l(n),
                                            error: o
                                        }, "string" == typeof t.data ? t.data : JSON.stringify(t.data), A({
                                            method: "POST",
                                            contentType: "text/plain",
                                            withCredentials: !0
                                        }, t.options));
                                        break;

                                      default:
                                        Object(y.logWarn)("Skipping invalid request from ".concat(e.code, ". Request type ").concat(t.type, " must be GET or POST")), 
                                        O();
                                    }
                                    function n(n, i) {
                                        d(e.code);
                                        try {
                                            n = JSON.parse(n);
                                        } catch (e) {}
                                        var o;
                                        n = {
                                            body: n,
                                            headers: {
                                                get: i.getResponseHeader.bind(i)
                                            }
                                        }, b.push(n);
                                        try {
                                            o = e.interpretResponse(n, t);
                                        } catch (t) {
                                            return Object(y.logError)("Bidder ".concat(e.code, " failed to interpret the server's response. Continuing without bids"), null, t), 
                                            void O();
                                        }
                                        function u(t) {
                                            var n = h[t.requestId];
                                            if (n) {
                                                t.originalCpm = t.cpm, t.originalCurrency = t.currency, 
                                                t.meta = t.meta || A({}, t[n.bidder]);
                                                var i = A(Object(a.a)(f.a.STATUS.GOOD, n), t);
                                                !function(e, t) {
                                                    g[e] = !0, _(e, t, [ r ]) && c(e, t);
                                                }(n.adUnitCode, i);
                                            } else Object(y.logWarn)("Bidder ".concat(e.code, " made bid for unknown request ID: ").concat(t.requestId, ". Ignoring."));
                                        }
                                        o && (Object(y.isArray)(o) ? o.forEach(u) : u(o)), 
                                        O(o);
                                    }
                                    function o(t, n) {
                                        d(e.code), i.default.callBidderError(e.code, n, r), 
                                        p.a.emit(f.a.EVENTS.BIDDER_ERROR, {
                                            error: n,
                                            bidderRequest: r
                                        }), Object(y.logError)("Server call for ".concat(e.code, " failed: ").concat(t, " ").concat(n.status, ". Continuing without bids.")), 
                                        O();
                                    }
                                });
                            } else j();
                        } else j();
                    }
                    function j() {
                        u(), o.b.runWithBidder(e.code, function() {
                            p.a.emit(f.a.EVENTS.BIDDER_DONE, r), t(b, r.gdprConsent, r.uspConsent);
                        });
                    }
                }
            });
            function t(t, n, r) {
                C(e, t, n, r);
            }
            function n(t) {
                return !!e.isBidRequestValid(t) || (Object(y.logWarn)("Invalid bid sent to bidder ".concat(e.code, ": ").concat(JSON.stringify(t))), 
                !1);
            }
        }
        var C = Object(m.b)("async", function(e, t, n, r) {
            var a = o.b.getConfig("userSync.aliasSyncEnabled");
            if (e.getUserSyncs && (a || !i.default.aliasRegistry[e.code])) {
                var u = o.b.getConfig("userSync.filterSettings"), s = e.getUserSyncs({
                    iframeEnabled: !(!u || !u.iframe && !u.all),
                    pixelEnabled: !(!u || !u.image && !u.all)
                }, t, n, r);
                s && (Array.isArray(s) || (s = [ s ]), s.forEach(function(t) {
                    c.a.registerSync(t.type, e.code, t.url);
                }));
            }
        }, "registerSyncs");
        function R(e, t) {
            if (!o.b.getConfig("adpod.brandCategoryExclusion")) return e.call(this, t);
            t.filter(function(e) {
                return Object(y.deepAccess)(e, "mediaTypes.video.context") === h.a;
            }).map(function(e) {
                return e.bids.map(function(e) {
                    return e.bidder;
                });
            }).reduce(y.flatten, []).filter(y.uniques).forEach(function(e) {
                var t = i.default.getBidAdapter(e);
                if (t.getSpec().getMappingFileInfo) {
                    var n = t.getSpec().getMappingFileInfo(), r = n.refreshInDays ? n.refreshInDays : 1, o = n.localStorageKey ? n.localStorageKey : t.getSpec().code, a = T.getDataFromLocalStorage(o);
                    try {
                        (!(a = a ? JSON.parse(a) : void 0) || Object(y.timestamp)() > a.lastUpdated + 24 * r * 60 * 60 * 1e3) && Object(v.a)(n.url, {
                            success: function(t) {
                                try {
                                    t = JSON.parse(t);
                                    var n = {
                                        lastUpdated: Object(y.timestamp)(),
                                        mapping: t.mapping
                                    };
                                    T.setDataInLocalStorage(o, JSON.stringify(n));
                                } catch (t) {
                                    Object(y.logError)("Failed to parse ".concat(e, " bidder translation mapping file"));
                                }
                            },
                            error: function() {
                                Object(y.logError)("Failed to load ".concat(e, " bidder translation file"));
                            }
                        });
                    } catch (t) {
                        Object(y.logError)("Failed to parse ".concat(e, " bidder translation mapping file"));
                    }
                }
            }), e.call(this, t);
        }
        function _(e, t, n) {
            function r(e) {
                return "Invalid bid from ".concat(t.bidderCode, ". Ignoring bid: ").concat(e);
            }
            return e ? t ? (i = Object.keys(t), I.every(function(e) {
                return b()(i, e) && !b()([ void 0, null ], t[e]);
            }) ? "native" !== t.mediaType || Object(u.g)(t, n) ? "video" !== t.mediaType || Object(s.d)(t, n) ? !("banner" === t.mediaType && !function(e, t, n) {
                if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10))) return t.width = parseInt(t.width, 10), 
                t.height = parseInt(t.height, 10), !0;
                var r = Object(y.getBidderRequest)(n, t.bidderCode, e), i = r && r.bids && r.bids[0] && r.bids[0].sizes, o = Object(y.parseSizesInput)(i);
                if (1 === o.length) {
                    var a = j(o[0].split("x"), 2), c = a[0], u = a[1];
                    return t.width = parseInt(c, 10), t.height = parseInt(u, 10), 
                    !0;
                }
                return !1;
            }(e, t, n)) || (Object(y.logError)(r("Banner bids require a width and height")), 
            !1) : (Object(y.logError)(r("Video bid does not have required vastUrl or renderer property")), 
            !1) : (Object(y.logError)(r("Native bid missing some required properties.")), 
            !1) : (Object(y.logError)(r("Bidder ".concat(t.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), 
            !1)) : (Object(y.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), 
            !1) : (Object(y.logWarn)("No adUnitCode was supplied to addBidResponse."), 
            !1);
            var i;
        }
        Object(m.a)("checkAdUnitSetup").before(R);
    },
    10: function(e, t, n) {
        function r() {
            return (r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        var i = n(0), o = n(5), a = Array.prototype.slice, c = Array.prototype.push, u = i._map(o.EVENTS, function(e) {
            return e;
        }), s = o.EVENT_ID_PATHS, d = [];
        e.exports = function() {
            var e = {}, t = {};
            function n(t, n) {
                i.logMessage("Emitting event for: " + t);
                var r = n[0] || {}, o = r[s[t]], a = e[t] || {
                    que: []
                }, u = i._map(a, function(e, t) {
                    return t;
                }), f = [];
                d.push({
                    eventType: t,
                    args: r,
                    id: o,
                    elapsedTime: i.getPerformanceNow()
                }), o && i.contains(u, o) && c.apply(f, a[o].que), c.apply(f, a.que), 
                i._each(f, function(e) {
                    if (e) try {
                        e.apply(null, n);
                    } catch (e) {
                        i.logError("Error executing handler:", "events.js", e);
                    }
                });
            }
            return t.on = function(t, n, r) {
                if (function(e) {
                    return i.contains(u, e);
                }(t)) {
                    var o = e[t] || {
                        que: []
                    };
                    r ? (o[r] = o[r] || {
                        que: []
                    }, o[r].que.push(n)) : o.que.push(n), e[t] = o;
                } else i.logError("Wrong event name : " + t + " Valid event names :" + u);
            }, t.emit = function(e) {
                var t = a.call(arguments, 1);
                n(e, t);
            }, t.off = function(t, n, r) {
                var o = e[t];
                i.isEmpty(o) || i.isEmpty(o.que) && i.isEmpty(o[r]) || r && (i.isEmpty(o[r]) || i.isEmpty(o[r].que)) || (r ? i._each(o[r].que, function(e) {
                    var t = o[r].que;
                    e === n && t.splice(t.indexOf(e), 1);
                }) : i._each(o.que, function(e) {
                    var t = o.que;
                    e === n && t.splice(t.indexOf(e), 1);
                }), e[t] = o);
            }, t.get = function() {
                return e;
            }, t.getEvents = function() {
                var e = [];
                return i._each(d, function(t) {
                    var n = r({}, t);
                    e.push(n);
                }), e;
            }, t;
        }();
    },
    100: function(e, t, n) {
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
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u, n = s(t);
            if (!n.shouldFilter) return !0;
            return !!n.sizesSupported[e];
        }, t.b = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.labels, n = void 0 === t ? [] : t, r = e.labelAll, o = void 0 !== r && r, c = e.activeLabels, d = void 0 === c ? [] : c, f = arguments.length > 1 ? arguments[1] : void 0, l = arguments.length > 2 ? arguments[2] : void 0, p = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u, g = s(p);
            f = Object(i.isPlainObject)(f) ? Object(i.deepClone)(f) : l ? {
                banner: {
                    sizes: l
                }
            } : {};
            var b = Object(i.deepAccess)(f, "banner.sizes");
            g.shouldFilter && b && (f.banner.sizes = b.filter(function(e) {
                return g.sizesSupported[e];
            }));
            var v = Object.keys(f), y = {
                active: v.every(function(e) {
                    return "banner" !== e;
                }) || v.some(function(e) {
                    return "banner" === e;
                }) && Object(i.deepAccess)(f, "banner.sizes.length") > 0 && (0 === n.length || !o && (n.some(function(e) {
                    return g.labels[e];
                }) || n.some(function(e) {
                    return a()(d, e);
                })) || o && n.reduce(function(e, t) {
                    return e ? g.labels[t] || a()(d, t) : e;
                }, !0)),
                mediaTypes: f
            };
            b && b.length !== f.banner.sizes.length && (y.filterResults = {
                before: b,
                after: f.banner.sizes
            });
            return y;
        };
        var r = n(3), i = n(0), o = n(12), a = n.n(o);
        function c(e) {
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        var u = [];
        function s(e) {
            return e.reduce(function(e, t) {
                if ("object" === c(t) && "string" == typeof t.mediaQuery && t.mediaQuery.length > 0) {
                    var n = !1;
                    try {
                        n = Object(i.getWindowTop)().matchMedia(t.mediaQuery).matches;
                    } catch (e) {
                        Object(i.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"), 
                        n = matchMedia(t.mediaQuery).matches;
                    }
                    n && (Array.isArray(t.sizesSupported) && (e.shouldFilter = !0), 
                    [ "labels", "sizesSupported" ].forEach(function(n) {
                        return (t[n] || []).forEach(function(t) {
                            return e[n][t] = !0;
                        });
                    }));
                } else Object(i.logWarn)('sizeConfig rule missing required property "mediaQuery"');
                return e;
            }, {
                labels: {},
                sizesSupported: {},
                shouldFilter: !1
            });
        }
        r.b.getConfig("sizeConfig", function(e) {
            return function(e) {
                u = e;
            }(e.sizeConfig);
        });
    },
    101: function(e, t, n) {
        "use strict";
        t.b = function(e, t, n) {
            var o = {
                puts: e.map(a, n)
            };
            Object(r.a)(i.b.getConfig("cache.url"), function(e) {
                return {
                    success: function(t) {
                        var n;
                        try {
                            n = JSON.parse(t).responses;
                        } catch (t) {
                            return void e(t, []);
                        }
                        n ? e(null, n) : e(new Error("The cache server didn't respond with a responses property."), []);
                    },
                    error: function(t, n) {
                        e(new Error("Error storing video ad in the cache: ".concat(t, ": ").concat(JSON.stringify(n))), []);
                    }
                };
            }(t), JSON.stringify(o), {
                contentType: "text/plain",
                withCredentials: !0
            });
        }, t.a = function(e) {
            return "".concat(i.b.getConfig("cache.url"), "?uuid=").concat(e);
        };
        var r = n(4), i = n(3), o = n(0);
        function a(e) {
            var t, n, r, a = {
                type: "xml",
                value: e.vastXml ? e.vastXml : (t = e.vastUrl, n = e.vastImpUrl, 
                r = n ? "<![CDATA[".concat(n, "]]>") : "", '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(t, "]]></VASTAdTagURI>\n        <Impression>").concat(r, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")),
                ttlseconds: Number(e.ttl)
            };
            return i.b.getConfig("cache.vasttrack") && (a.bidder = e.bidder, a.bidid = e.requestId, 
            a.aid = e.auctionId, Object(o.isPlainObject)(this) && this.hasOwnProperty("auctionStart") && (a.timestamp = this.auctionStart)), 
            "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (a.key = e.customCacheKey), 
            a;
        }
    },
    105: function(e, t, n) {
        n(106);
        var r = n(55);
        e.exports = r("Array", "find");
    },
    106: function(e, t, n) {
        "use strict";
        var r = n(16), i = n(63).find, o = n(54), a = "find", c = !0;
        a in [] && Array(1).find(function() {
            c = !1;
        }), r({
            target: "Array",
            proto: !0,
            forced: c
        }, {
            find: function(e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
            }
        }), o(a);
    },
    107: function(e, t, n) {
        var r = n(33), i = n(108), o = n(44), a = n(49), c = n(62), u = n(31), s = n(84), d = Object.getOwnPropertyDescriptor;
        t.f = r ? d : function(e, t) {
            if (e = a(e), t = c(t, !0), s) try {
                return d(e, t);
            } catch (e) {}
            if (u(e, t)) return o(!i.f.call(e, t), e[t]);
        };
    },
    108: function(e, t, n) {
        "use strict";
        var r = {}.propertyIsEnumerable, i = Object.getOwnPropertyDescriptor, o = i && !r.call({
            1: 2
        }, 1);
        t.f = o ? function(e) {
            var t = i(this, e);
            return !!t && t.enumerable;
        } : r;
    },
    109: function(e, t, n) {
        var r = n(29), i = /#|\.prototype\./, o = function(e, t) {
            var n = c[a(e)];
            return n == s || n != u && ("function" == typeof t ? r(t) : !!t);
        }, a = o.normalize = function(e) {
            return String(e).replace(i, ".").toLowerCase();
        }, c = o.data = {}, u = o.NATIVE = "N", s = o.POLYFILL = "P";
        e.exports = o;
    },
    11: function(e, t, n) {
        var r = n(105);
        e.exports = r;
    },
    110: function(e, t, n) {
        var r = n(30), i = n(111), o = n(23)("species");
        e.exports = function(e, t) {
            var n;
            return i(e) && ("function" != typeof (n = e.constructor) || n !== Array && !i(n.prototype) ? r(n) && null === (n = n[o]) && (n = void 0) : n = void 0), 
            new (void 0 === n ? Array : n)(0 === t ? 0 : t);
        };
    },
    111: function(e, t, n) {
        var r = n(50);
        e.exports = Array.isArray || function(e) {
            return "Array" == r(e);
        };
    },
    112: function(e, t, n) {
        var r = n(27), i = n(32);
        e.exports = function(e, t) {
            try {
                i(r, e, t);
            } catch (n) {
                r[e] = t;
            }
            return t;
        };
    },
    113: function(e, t, n) {
        var r, i, o = n(27), a = n(114), c = o.process, u = c && c.versions, s = u && u.v8;
        s ? i = (r = s.split("."))[0] < 4 ? 1 : r[0] + r[1] : a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (i = r[1]), 
        e.exports = i && +i;
    },
    114: function(e, t, n) {
        var r = n(26);
        e.exports = r("navigator", "userAgent") || "";
    },
    115: function(e, t, n) {
        var r = n(87);
        e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    116: function(e, t, n) {
        n(117);
        var r = n(55);
        e.exports = r("Array", "includes");
    },
    117: function(e, t, n) {
        "use strict";
        var r = n(16), i = n(88).includes, o = n(54);
        r({
            target: "Array",
            proto: !0
        }, {
            includes: function(e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
            }
        }), o("includes");
    },
    118: function(e, t, n) {
        var r = n(64), i = Math.max, o = Math.min;
        e.exports = function(e, t) {
            var n = r(e);
            return n < 0 ? i(n + t, 0) : o(n, t);
        };
    },
    119: function(e, t, n) {
        n(120), n(135), n(98), n(137);
        var r = n(45);
        e.exports = r.Set;
    },
    12: function(e, t, n) {
        var r = n(116);
        e.exports = r;
    },
    120: function(e, t, n) {
        "use strict";
        var r = n(121), i = n(126);
        e.exports = r("Set", function(e) {
            return function() {
                return e(this, arguments.length ? arguments[0] : void 0);
            };
        }, i);
    },
    121: function(e, t, n) {
        "use strict";
        var r = n(16), i = n(27), o = n(90), a = n(29), c = n(32), u = n(21), s = n(68), d = n(30), f = n(59), l = n(34).f, p = n(63).forEach, g = n(33), b = n(46), v = b.set, y = b.getterFor;
        e.exports = function(e, t, n) {
            var b, h = -1 !== e.indexOf("Map"), m = -1 !== e.indexOf("Weak"), O = h ? "set" : "add", j = i[e], S = j && j.prototype, E = {};
            if (g && "function" == typeof j && (m || S.forEach && !a(function() {
                new j().entries().next();
            }))) {
                b = t(function(t, n) {
                    v(s(t, b, e), {
                        type: e,
                        collection: new j()
                    }), null != n && u(n, t[O], {
                        that: t,
                        AS_ENTRIES: h
                    });
                });
                var A = y(e);
                p([ "add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries" ], function(e) {
                    var t = "add" == e || "set" == e;
                    !(e in S) || m && "clear" == e || c(b.prototype, e, function(n, r) {
                        var i = A(this).collection;
                        if (!t && m && !d(n)) return "get" == e && void 0;
                        var o = i[e](0 === n ? 0 : n, r);
                        return t ? this : o;
                    });
                }), m || l(b.prototype, "size", {
                    configurable: !0,
                    get: function() {
                        return A(this).collection.size;
                    }
                });
            } else b = n.getConstructor(t, e, h, O), o.REQUIRED = !0;
            return f(b, e, !1, !0), E[e] = b, r({
                global: !0,
                forced: !0
            }, E), m || n.setStrong(b, e, h), b;
        };
    },
    122: function(e, t, n) {
        var r = n(29);
        e.exports = !r(function() {
            return Object.isExtensible(Object.preventExtensions({}));
        });
    },
    123: function(e, t, n) {
        "use strict";
        var r = n(67), i = n(58);
        e.exports = r ? {}.toString : function() {
            return "[object " + i(this) + "]";
        };
    },
    124: function(e, t, n) {
        var r = n(27), i = n(125), o = r.WeakMap;
        e.exports = "function" == typeof o && /native code/.test(i(o));
    },
    125: function(e, t, n) {
        var r = n(65), i = Function.toString;
        "function" != typeof r.inspectSource && (r.inspectSource = function(e) {
            return i.call(e);
        }), e.exports = r.inspectSource;
    },
    126: function(e, t, n) {
        "use strict";
        var r = n(34).f, i = n(70), o = n(94), a = n(25), c = n(68), u = n(21), s = n(72), d = n(134), f = n(33), l = n(90).fastKey, p = n(46), g = p.set, b = p.getterFor;
        e.exports = {
            getConstructor: function(e, t, n, s) {
                var d = e(function(e, r) {
                    c(e, d, t), g(e, {
                        type: t,
                        index: i(null),
                        first: void 0,
                        last: void 0,
                        size: 0
                    }), f || (e.size = 0), null != r && u(r, e[s], {
                        that: e,
                        AS_ENTRIES: n
                    });
                }), p = b(t), v = function(e, t, n) {
                    var r, i, o = p(e), a = y(e, t);
                    return a ? a.value = n : (o.last = a = {
                        index: i = l(t, !0),
                        key: t,
                        value: n,
                        previous: r = o.last,
                        next: void 0,
                        removed: !1
                    }, o.first || (o.first = a), r && (r.next = a), f ? o.size++ : e.size++, 
                    "F" !== i && (o.index[i] = a)), e;
                }, y = function(e, t) {
                    var n, r = p(e), i = l(t);
                    if ("F" !== i) return r.index[i];
                    for (n = r.first; n; n = n.next) if (n.key == t) return n;
                };
                return o(d.prototype, {
                    clear: function() {
                        for (var e = p(this), t = e.index, n = e.first; n; ) n.removed = !0, 
                        n.previous && (n.previous = n.previous.next = void 0), delete t[n.index], 
                        n = n.next;
                        e.first = e.last = void 0, f ? e.size = 0 : this.size = 0;
                    },
                    delete: function(e) {
                        var t = this, n = p(t), r = y(t, e);
                        if (r) {
                            var i = r.next, o = r.previous;
                            delete n.index[r.index], r.removed = !0, o && (o.next = i), 
                            i && (i.previous = o), n.first == r && (n.first = i), 
                            n.last == r && (n.last = o), f ? n.size-- : t.size--;
                        }
                        return !!r;
                    },
                    forEach: function(e) {
                        for (var t, n = p(this), r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.next : n.first; ) for (r(t.value, t.key, this); t && t.removed; ) t = t.previous;
                    },
                    has: function(e) {
                        return !!y(this, e);
                    }
                }), o(d.prototype, n ? {
                    get: function(e) {
                        var t = y(this, e);
                        return t && t.value;
                    },
                    set: function(e, t) {
                        return v(this, 0 === e ? 0 : e, t);
                    }
                } : {
                    add: function(e) {
                        return v(this, e = 0 === e ? 0 : e, e);
                    }
                }), f && r(d.prototype, "size", {
                    get: function() {
                        return p(this).size;
                    }
                }), d;
            },
            setStrong: function(e, t, n) {
                var r = t + " Iterator", i = b(t), o = b(r);
                s(e, t, function(e, t) {
                    g(this, {
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
                    } : (e.target = void 0, {
                        value: void 0,
                        done: !0
                    });
                }, n ? "entries" : "values", !n, !0), d(t);
            }
        };
    },
    127: function(e, t, n) {
        var r = n(33), i = n(34), o = n(17), a = n(128);
        e.exports = r ? Object.defineProperties : function(e, t) {
            o(e);
            for (var n, r = a(t), c = r.length, u = 0; c > u; ) i.f(e, n = r[u++], t[n]);
            return e;
        };
    },
    128: function(e, t, n) {
        var r = n(129), i = n(93);
        e.exports = Object.keys || function(e) {
            return r(e, i);
        };
    },
    129: function(e, t, n) {
        var r = n(31), i = n(49), o = n(88).indexOf, a = n(56);
        e.exports = function(e, t) {
            var n, c = i(e), u = 0, s = [];
            for (n in c) !r(a, n) && r(c, n) && s.push(n);
            for (;t.length > u; ) r(c, n = t[u++]) && (~o(s, n) || s.push(n));
            return s;
        };
    },
    13: function(e, t, n) {
        "use strict";
        t.a = u, t.c = function(e) {
            return !(!e || !e.url);
        }, t.b = function(e, t) {
            e.render(t);
        };
        var r = n(35), i = n(0), o = n(11), a = n.n(o), c = "outstream";
        function u(e) {
            var t = this, n = e.url, o = e.config, a = e.id, u = e.callback, d = e.loaded, f = e.adUnitCode;
            this.url = n, this.config = o, this.handlers = {}, this.id = a, this.loaded = d, 
            this.cmd = [], this.push = function(e) {
                "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : Object(i.logError)("Commands given to Renderer.push must be wrapped in a function");
            }, this.callback = u || function() {
                t.loaded = !0, t.process();
            }, this.render = function() {
                var e = this, t = arguments, o = function() {
                    e._render ? e._render.apply(e, t) : Object(i.logWarn)("No render function was provided, please use .setRender on the renderer");
                };
                s(f) ? (Object(i.logWarn)("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(f)), 
                o()) : (this.cmd.unshift(o), Object(r.a)(n, c, this.callback));
            }.bind(this);
        }
        function s(e) {
            var t = pbjs.adUnits, n = a()(t, function(t) {
                return t.code === e;
            });
            if (!n) return !1;
            var r = Object(i.deepAccess)(n, "renderer"), o = !!(r && r.url && r.render), c = Object(i.deepAccess)(n, "mediaTypes.video.renderer"), u = !!(c && c.url && c.render);
            return !!(o && !0 !== r.backupOnly || u && !0 !== c.backupOnly);
        }
        u.install = function(e) {
            return new u({
                url: e.url,
                config: e.config,
                id: e.id,
                callback: e.callback,
                loaded: e.loaded,
                adUnitCode: e.adUnitCode
            });
        }, u.prototype.getConfig = function() {
            return this.config;
        }, u.prototype.setRender = function(e) {
            this._render = e;
        }, u.prototype.setEventHandlers = function(e) {
            this.handlers = e;
        }, u.prototype.handleVideoEvent = function(e) {
            var t = e.id, n = e.eventName;
            "function" == typeof this.handlers[n] && this.handlers[n](), Object(i.logMessage)("Prebid Renderer event for id ".concat(t, " type ").concat(n));
        }, u.prototype.process = function() {
            for (;this.cmd.length > 0; ) try {
                this.cmd.shift().call();
            } catch (e) {
                Object(i.logError)("Error processing Renderer command: ", e);
            }
        };
    },
    130: function(e, t, n) {
        var r = n(26);
        e.exports = r("document", "documentElement");
    },
    131: function(e, t, n) {
        var r = n(29);
        e.exports = !r(function() {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
        });
    },
    132: function(e, t, n) {
        var r = n(17), i = n(133);
        e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var e, t = !1, n = {};
            try {
                (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), 
                t = n instanceof Array;
            } catch (e) {}
            return function(n, o) {
                return r(n), i(o), t ? e.call(n, o) : n.__proto__ = o, n;
            };
        }() : void 0);
    },
    133: function(e, t, n) {
        var r = n(30);
        e.exports = function(e) {
            if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
            return e;
        };
    },
    134: function(e, t, n) {
        "use strict";
        var r = n(26), i = n(34), o = n(23), a = n(33), c = o("species");
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
    135: function(e, t) {},
    136: function(e, t, n) {
        var r = n(64), i = n(51), o = function(e) {
            return function(t, n) {
                var o, a, c = String(i(t)), u = r(n), s = c.length;
                return u < 0 || u >= s ? e ? "" : void 0 : (o = c.charCodeAt(u)) < 55296 || o > 56319 || u + 1 === s || (a = c.charCodeAt(u + 1)) < 56320 || a > 57343 ? e ? c.charAt(u) : o : e ? c.slice(u, u + 2) : a - 56320 + (o - 55296 << 10) + 65536;
            };
        };
        e.exports = {
            codeAt: o(!1),
            charAt: o(!0)
        };
    },
    137: function(e, t, n) {
        n(99);
        var r = n(138), i = n(27), o = n(58), a = n(32), c = n(41), u = n(23)("toStringTag");
        for (var s in r) {
            var d = i[s], f = d && d.prototype;
            f && o(f) !== u && a(f, u, s), c[s] = c.Array;
        }
    },
    138: function(e, t) {
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
    139: function(e, t, n) {
        n(16)({
            target: "Set",
            stat: !0
        }, {
            from: n(140)
        });
    },
    14: function(e, t, n) {
        "use strict";
        t.a = function() {
            return window.pbjs;
        }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], 
        window.pbjs.que = window.pbjs.que || [], window._pbjsGlobals = window._pbjsGlobals || [], 
        window._pbjsGlobals.push("pbjs");
    },
    140: function(e, t, n) {
        "use strict";
        var r = n(24), i = n(25), o = n(21);
        e.exports = function(e) {
            var t, n, a, c, u = arguments.length, s = u > 1 ? arguments[1] : void 0;
            return r(this), (t = void 0 !== s) && r(s), null == e ? new this() : (n = [], 
            t ? (a = 0, c = i(s, u > 2 ? arguments[2] : void 0, 2), o(e, function(e) {
                n.push(c(e, a++));
            })) : o(e, n.push, {
                that: n
            }), new this(n));
        };
    },
    141: function(e, t, n) {
        n(16)({
            target: "Set",
            stat: !0
        }, {
            of: n(142)
        });
    },
    142: function(e, t, n) {
        "use strict";
        e.exports = function() {
            for (var e = arguments.length, t = new Array(e); e--; ) t[e] = arguments[e];
            return new this(t);
        };
    },
    143: function(e, t, n) {
        "use strict";
        var r = n(16), i = n(18), o = n(144);
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
    144: function(e, t, n) {
        "use strict";
        var r = n(17), i = n(24);
        e.exports = function() {
            for (var e = r(this), t = i(e.add), n = 0, o = arguments.length; n < o; n++) t.call(e, arguments[n]);
            return e;
        };
    },
    145: function(e, t, n) {
        "use strict";
        var r = n(16), i = n(18), o = n(146);
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
    146: function(e, t, n) {
        "use strict";
        var r = n(17), i = n(24);
        e.exports = function() {
            for (var e, t = r(this), n = i(t.delete), o = !0, a = 0, c = arguments.length; a < c; a++) e = n.call(t, arguments[a]), 
            o = o && e;
            return !!o;
        };
    },
    147: function(e, t, n) {
        "use strict";
        var r = n(16), i = n(18), o = n(17), a = n(25), c = n(38), u = n(21);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            every: function(e) {
                var t = o(this), n = c(t), r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3);
                return !u(n, function(e, n) {
                    if (!r(e, e, t)) return n();
                }, {
                    IS_ITERATOR: !0,
                    INTERRUPTED: !0
                }).stopped;
            }
        });
    },
    148: function(e, t, n) {
        "use strict";
        var r = n(16), i = n(18), o = n(26), a = n(17), c = n(24), u = n(42), s = n(21);
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
    149: function(e, t, n) {
        "use strict";
        var r = n(16), i = n(18), o = n(26), a = n(17), c = n(24), u = n(25), s = n(42), d = n(38), f = n(21);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            filter: function(e) {
                var t = a(this), n = d(t), r = u(e, arguments.length > 1 ? arguments[1] : void 0, 3), i = new (s(t, o("Set")))(), l = c(i.add);
                return f(n, function(e) {
                    r(e, e, t) && l.call(i, e);
                }, {
                    IS_ITERATOR: !0
                }), i;
            }
        });
    },
    150: function(e, t, n) {
        "use strict";
        var r = n(16), i = n(18), o = n(17), a = n(25), c = n(38), u = n(21);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            find: function(e) {
                var t = o(this), n = c(t), r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3);
                return u(n, function(e, n) {
                    if (r(e, e, t)) return n(e);
                }, {
                    IS_ITERATOR: !0,
                    INTERRUPTED: !0
                }).result;
            }
        });
    },
    151: function(e, t, n) {
        "use strict";
        var r = n(16), i = n(18), o = n(26), a = n(17), c = n(24), u = n(42), s = n(21);
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
    152: function(e, t, n) {
        "use strict";
        var r = n(16), i = n(18), o = n(17), a = n(24), c = n(21);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            isDisjointFrom: function(e) {
                var t = o(this), n = a(t.has);
                return !c(e, function(e, r) {
                    if (!0 === n.call(t, e)) return r();
                }, {
                    INTERRUPTED: !0
                }).stopped;
            }
        });
    },
    153: function(e, t, n) {
        "use strict";
        var r = n(16), i = n(18), o = n(26), a = n(17), c = n(24), u = n(73), s = n(21);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            isSubsetOf: function(e) {
                var t = u(this), n = a(e), r = n.has;
                return "function" != typeof r && (n = new (o("Set"))(e), r = c(n.has)), 
                !s(t, function(e, t) {
                    if (!1 === r.call(n, e)) return t();
                }, {
                    IS_ITERATOR: !0,
                    INTERRUPTED: !0
                }).stopped;
            }
        });
    },
    154: function(e, t, n) {
        "use strict";
        var r = n(16), i = n(18), o = n(17), a = n(24), c = n(21);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            isSupersetOf: function(e) {
                var t = o(this), n = a(t.has);
                return !c(e, function(e, r) {
                    if (!1 === n.call(t, e)) return r();
                }, {
                    INTERRUPTED: !0
                }).stopped;
            }
        });
    },
    155: function(e, t, n) {
        "use strict";
        var r = n(16), i = n(18), o = n(17), a = n(38), c = n(21);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            join: function(e) {
                var t = o(this), n = a(t), r = void 0 === e ? "," : String(e), i = [];
                return c(n, i.push, {
                    that: i,
                    IS_ITERATOR: !0
                }), i.join(r);
            }
        });
    },
    156: function(e, t, n) {
        "use strict";
        var r = n(16), i = n(18), o = n(26), a = n(17), c = n(24), u = n(25), s = n(42), d = n(38), f = n(21);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            map: function(e) {
                var t = a(this), n = d(t), r = u(e, arguments.length > 1 ? arguments[1] : void 0, 3), i = new (s(t, o("Set")))(), l = c(i.add);
                return f(n, function(e) {
                    l.call(i, r(e, e, t));
                }, {
                    IS_ITERATOR: !0
                }), i;
            }
        });
    },
    157: function(e, t, n) {
        "use strict";
        var r = n(16), i = n(18), o = n(17), a = n(24), c = n(38), u = n(21);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            reduce: function(e) {
                var t = o(this), n = c(t), r = arguments.length < 2, i = r ? void 0 : arguments[1];
                if (a(e), u(n, function(n) {
                    r ? (r = !1, i = n) : i = e(i, n, n, t);
                }, {
                    IS_ITERATOR: !0
                }), r) throw TypeError("Reduce of empty set with no initial value");
                return i;
            }
        });
    },
    158: function(e, t, n) {
        "use strict";
        var r = n(16), i = n(18), o = n(17), a = n(25), c = n(38), u = n(21);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            some: function(e) {
                var t = o(this), n = c(t), r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3);
                return u(n, function(e, n) {
                    if (r(e, e, t)) return n();
                }, {
                    IS_ITERATOR: !0,
                    INTERRUPTED: !0
                }).stopped;
            }
        });
    },
    159: function(e, t, n) {
        "use strict";
        var r = n(16), i = n(18), o = n(26), a = n(17), c = n(24), u = n(42), s = n(21);
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
    16: function(e, t, n) {
        "use strict";
        var r = n(27), i = n(107).f, o = n(109), a = n(45), c = n(25), u = n(32), s = n(31), d = function(e) {
            var t = function(t, n, r) {
                if (this instanceof e) {
                    switch (arguments.length) {
                      case 0:
                        return new e();

                      case 1:
                        return new e(t);

                      case 2:
                        return new e(t, n);
                    }
                    return new e(t, n, r);
                }
                return e.apply(this, arguments);
            };
            return t.prototype = e.prototype, t;
        };
        e.exports = function(e, t) {
            var n, f, l, p, g, b, v, y, h = e.target, m = e.global, O = e.stat, j = e.proto, S = m ? r : O ? r[h] : (r[h] || {}).prototype, E = m ? a : a[h] || (a[h] = {}), A = E.prototype;
            for (l in t) n = !o(m ? l : h + (O ? "." : "#") + l, e.forced) && S && s(S, l), 
            g = E[l], n && (b = e.noTargetGet ? (y = i(S, l)) && y.value : S[l]), 
            p = n && b ? b : t[l], n && typeof g == typeof p || (v = e.bind && n ? c(p, r) : e.wrap && n ? d(p) : j && "function" == typeof p ? c(Function.call, p) : p, 
            (e.sham || p && p.sham || g && g.sham) && u(v, "sham", !0), E[l] = v, 
            j && (s(a, f = h + "Prototype") || u(a, f, {}), a[f][l] = p, e.real && A && !A[l] && u(A, l, p)));
        };
    },
    160: function(e, t, n) {
        "use strict";
        var r = n(16), i = n(18), o = n(26), a = n(17), c = n(24), u = n(42), s = n(21);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            union: function(e) {
                var t = a(this), n = new (u(t, o("Set")))(t);
                return s(e, c(n.add), {
                    that: n
                }), n;
            }
        });
    },
    161: function(e, t, n) {
        n(98), n(162);
        var r = n(45);
        e.exports = r.Array.from;
    },
    162: function(e, t, n) {
        var r = n(16), i = n(163);
        r({
            target: "Array",
            stat: !0,
            forced: !n(166)(function(e) {
                Array.from(e);
            })
        }, {
            from: i
        });
    },
    163: function(e, t, n) {
        "use strict";
        var r = n(25), i = n(52), o = n(164), a = n(91), c = n(53), u = n(165), s = n(57);
        e.exports = function(e) {
            var t, n, d, f, l, p, g = i(e), b = "function" == typeof this ? this : Array, v = arguments.length, y = v > 1 ? arguments[1] : void 0, h = void 0 !== y, m = s(g), O = 0;
            if (h && (y = r(y, v > 2 ? arguments[2] : void 0, 2)), null == m || b == Array && a(m)) for (n = new b(t = c(g.length)); t > O; O++) p = h ? y(g[O], O) : g[O], 
            u(n, O, p); else for (l = (f = m.call(g)).next, n = new b(); !(d = l.call(f)).done; O++) p = h ? o(f, y, [ d.value, O ], !0) : d.value, 
            u(n, O, p);
            return n.length = O, n;
        };
    },
    164: function(e, t, n) {
        var r = n(17), i = n(92);
        e.exports = function(e, t, n, o) {
            try {
                return o ? t(r(n)[0], n[1]) : t(n);
            } catch (t) {
                throw i(e), t;
            }
        };
    },
    165: function(e, t, n) {
        "use strict";
        var r = n(62), i = n(34), o = n(44);
        e.exports = function(e, t, n) {
            var a = r(t);
            a in e ? i.f(e, a, o(0, n)) : e[a] = n;
        };
    },
    166: function(e, t, n) {
        var r = n(23)("iterator"), i = !1;
        try {
            var o = 0, a = {
                next: function() {
                    return {
                        done: !!o++
                    };
                },
                return: function() {
                    i = !0;
                }
            };
            a[r] = function() {
                return this;
            }, Array.from(a, function() {
                throw 2;
            });
        } catch (e) {}
        e.exports = function(e, t) {
            if (!t && !i) return !1;
            var n = !1;
            try {
                var o = {};
                o[r] = function() {
                    return {
                        next: function() {
                            return {
                                done: n = !0
                            };
                        }
                    };
                }, e(o);
            } catch (e) {}
            return n;
        };
    },
    167: function(e, t) {
        e.exports = function e(t) {
            var n = Array.isArray(t) ? [] : {};
            for (var r in t) {
                var i = t[r];
                n[r] = i && "object" == typeof i ? e(i) : i;
            }
            return n;
        };
    },
    168: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n, r, i) {
            for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++) e = e ? e[t[r]] : i;
            return e === i ? n : e;
        };
    },
    169: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n) {
            t.split && (t = t.split("."));
            for (var r, i = 0, o = t.length, a = e; i < o; ++i) r = a[t[i]], a = a[t[i]] = i === o - 1 ? n : null != r ? r : !~t[i + 1].indexOf(".") && +t[i + 1] > -1 ? [] : {};
        };
    },
    17: function(e, t, n) {
        var r = n(30);
        e.exports = function(e) {
            if (!r(e)) throw TypeError(String(e) + " is not an object");
            return e;
        };
    },
    170: function(e, t) {
        c.SYNC = 1, c.ASYNC = 2, c.QUEUE = 4;
        var n = Object.freeze({
            useProxy: !0,
            ready: 0
        }), r = new WeakMap(), i = "2,1,0" === [ 1 ].reduce(function(e, t, n) {
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
        function o(e, t) {
            return Array.prototype.slice.call(e, t);
        }
        var a = Object.assign || function(e) {
            return i.call(o(arguments, 1), function(e, t) {
                return t && Object.keys(t).forEach(function(n) {
                    e[n] = t[n];
                }), e;
            }, e);
        };
        function c(e) {
            var t, u = {}, s = [];
            function d(e, t) {
                return "function" == typeof e ? g.call(null, "sync", e, t) : "string" == typeof e && "function" == typeof t ? g.apply(null, arguments) : "object" == typeof e ? f.apply(null, arguments) : void 0;
            }
            function f(e, t, n) {
                var r = !0;
                void 0 === t && (t = Object.getOwnPropertyNames(e), r = !1);
                var i = {}, o = [ "constructor" ];
                do {
                    (t = t.filter(function(t) {
                        return !("function" != typeof e[t] || -1 !== o.indexOf(t) || t.match(/^_/));
                    })).forEach(function(t) {
                        var r = t.split(":"), o = r[0], a = r[1] || "sync";
                        if (!i[o]) {
                            var c = e[o];
                            i[o] = e[o] = g(a, c, n ? [ n, o ] : void 0);
                        }
                    }), e = Object.getPrototypeOf(e);
                } while (r && e);
                return i;
            }
            function l(e) {
                var n = Array.isArray(e) ? e : e.split(".");
                return i.call(n, function(r, i, o) {
                    var a = r[i], c = !1;
                    return a || (o === n.length - 1 ? (t || s.push(function() {
                        c || console.warn("fun-hooks: referenced '" + e + "' but it was never created");
                    }), r[i] = p(function(e) {
                        r[i] = e, c = !0;
                    })) : r[i] = {});
                }, u);
            }
            function p(e) {
                var t = [], n = [], i = function() {}, o = {
                    before: function(e, n) {
                        return u.call(this, t, "before", e, n);
                    },
                    after: function(e, t) {
                        return u.call(this, n, "after", e, t);
                    },
                    getHooks: function(e) {
                        var r = t.concat(n);
                        "object" == typeof e && (r = r.filter(function(t) {
                            return Object.keys(e).every(function(n) {
                                return t[n] === e[n];
                            });
                        }));
                        try {
                            a(r, {
                                remove: function() {
                                    return r.forEach(function(e) {
                                        e.remove();
                                    }), this;
                                }
                            });
                        } catch (e) {
                            console.error("error adding `remove` to array, did you modify Array.prototype?");
                        }
                        return r;
                    },
                    removeAll: function() {
                        return this.getHooks().remove();
                    }
                }, c = {
                    install: function(r, o, a) {
                        this.type = r, i = a, a(t, n), e && e(o);
                    }
                };
                return r.set(o.after, c), o;
                function u(e, r, o, a) {
                    var c = {
                        hook: o,
                        type: r,
                        priority: a || 10,
                        remove: function() {
                            var r = e.indexOf(c);
                            -1 !== r && (e.splice(r, 1), i(t, n));
                        }
                    };
                    return e.push(c), e.sort(function(e, t) {
                        return t.priority - e.priority;
                    }), i(t, n), this;
                }
            }
            function g(n, i, u) {
                var d = i.after && r.get(i.after);
                if (d) {
                    if (d.type !== n) throw "fun-hooks: recreated hookable with different type";
                    return i;
                }
                var f, g, b = u ? l(u) : p(), v = {
                    get: function(e, t) {
                        return b[t] || Reflect.get.apply(Reflect, arguments);
                    }
                };
                return t || s.push(y), e.useProxy && "function" == typeof Proxy && Proxy.revocable ? g = new Proxy(i, v) : a(g = function() {
                    return v.apply ? v.apply(i, this, o(arguments)) : i.apply(this, arguments);
                }, b), r.get(g.after).install(n, g, function(e, t) {
                    var r, i = [];
                    e.length || t.length ? (e.forEach(a), r = i.push(void 0) - 1, 
                    t.forEach(a), f = function(e, t, a) {
                        var c, u = 0, s = "async" === n && "function" == typeof a[a.length - 1] && a.pop();
                        function d(e) {
                            "sync" === n ? c = e : s && s.apply(null, arguments);
                        }
                        function f(e) {
                            if (i[u]) {
                                var r = o(arguments);
                                return f.bail = d, r.unshift(f), i[u++].apply(t, r);
                            }
                            "sync" === n ? c = e : s && s.apply(null, arguments);
                        }
                        return i[r] = function() {
                            var r = o(arguments, 1);
                            "async" === n && s && (delete f.bail, r.push(f));
                            var i = e.apply(t, r);
                            "sync" === n && f(i);
                        }, f.apply(null, a), c;
                    }) : f = void 0;
                    function a(e) {
                        i.push(e.hook);
                    }
                    y();
                }), g;
                function y() {
                    !t && ("sync" !== n || e.ready & c.SYNC) && ("async" !== n || e.ready & c.ASYNC) ? "sync" !== n && e.ready & c.QUEUE ? v.apply = function() {
                        var e = arguments;
                        s.push(function() {
                            g.apply(e[1], e[2]);
                        });
                    } : v.apply = function() {
                        throw "fun-hooks: hooked function not ready";
                    } : v.apply = f;
                }
            }
            return (e = a({}, n, e)).ready ? d.ready = function() {
                t = !0, function(e) {
                    for (var t; t = e.shift(); ) t();
                }(s);
            } : t = !0, d.get = l, d;
        }
        e.exports = c;
    },
    18: function(e, t) {
        e.exports = !0;
    },
    19: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o;
        });
        var r = n(3), i = n(0);
        var o = function(e) {
            function t(e) {
                var t = r.b.getConfig("pageUrl");
                if (t) return t;
                try {
                    var n = e.querySelector("link[rel='canonical']");
                    if (null !== n) return n.href;
                } catch (e) {}
                return null;
            }
            return function() {
                var n, o, a, c = [], u = function(e) {
                    try {
                        if (!e.location.ancestorOrigins) return;
                        return e.location.ancestorOrigins;
                    } catch (e) {}
                }(e), s = r.b.getConfig("maxNestedIframes"), d = !1, f = 0, l = !1, p = !1;
                do {
                    var g = n, b = p, v = void 0, y = !1, h = null;
                    p = !1, n = n ? n.parent : e;
                    try {
                        v = n.location.href || null;
                    } catch (e) {
                        y = !0;
                    }
                    if (y) if (b) {
                        var m = g.context;
                        try {
                            o = h = m.sourceUrl, l = !0, n === e.top && (d = !0), 
                            m.canonicalUrl && (a = m.canonicalUrl);
                        } catch (e) {}
                    } else {
                        Object(i.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");
                        try {
                            var O = g.document.referrer;
                            O && (h = O, n === e.top && (d = !0));
                        } catch (e) {}
                        !h && u && u[f - 1] && (h = u[f - 1]), h && !l && (o = h);
                    } else {
                        if (v && (o = h = v, l = !1, n === e.top)) {
                            d = !0;
                            var j = t(n.document);
                            j && (a = j);
                        }
                        n.context && n.context.sourceUrl && (p = !0);
                    }
                    c.push(h), f++;
                } while (n !== e.top && f < s);
                return c.reverse(), {
                    referer: o || null,
                    reachedTop: d,
                    isAmp: l,
                    numIframes: f - 1,
                    stack: c,
                    canonicalUrl: a || null
                };
            };
        }(window);
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
        n.d(t, "b", function() {
            return c;
        }), n.d(t, "a", function() {
            return u;
        }), t.d = function(e, t) {
            var n = Object(r.getBidRequest)(e.requestId, t), i = n && Object(r.deepAccess)(n, "mediaTypes.video"), o = i && Object(r.deepAccess)(i, "context");
            return s(e, n, i, o);
        }, n.d(t, "c", function() {
            return s;
        });
        n(8);
        var r = n(0), i = n(3), o = n(12), a = (n.n(o), n(9)), c = "outstream", u = "instream";
        var s = Object(a.b)("sync", function(e, t, n, o) {
            return !t || n && o !== c ? i.b.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(r.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), 
            !1) : o !== c || !!(e.renderer || t.renderer || n.renderer);
        }, "checkVideoBidSetup");
    },
    21: function(e, t, n) {
        var r = n(17), i = n(91), o = n(53), a = n(25), c = n(57), u = n(92), s = function(e, t) {
            this.stopped = e, this.result = t;
        };
        e.exports = function(e, t, n) {
            var d, f, l, p, g, b, v, y = n && n.that, h = !(!n || !n.AS_ENTRIES), m = !(!n || !n.IS_ITERATOR), O = !(!n || !n.INTERRUPTED), j = a(t, y, 1 + h + O), S = function(e) {
                return d && u(d), new s(!0, e);
            }, E = function(e) {
                return h ? (r(e), O ? j(e[0], e[1], S) : j(e[0], e[1])) : O ? j(e, S) : j(e);
            };
            if (m) d = e; else {
                if ("function" != typeof (f = c(e))) throw TypeError("Target is not iterable");
                if (i(f)) {
                    for (l = 0, p = o(e.length); p > l; l++) if ((g = E(e[l])) && g instanceof s) return g;
                    return new s(!1);
                }
                d = f.call(e);
            }
            for (b = d.next; !(v = b.call(d)).done; ) {
                try {
                    g = E(v.value);
                } catch (e) {
                    throw u(d), e;
                }
                if ("object" == typeof g && g && g instanceof s) return g;
            }
            return new s(!1);
        };
    },
    22: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return u;
        });
        var r = n(0), i = n(28), o = n(11), a = n.n(o), c = n(5);
        var u = function() {
            var e = [], t = {};
            return t.addWinningBid = function(t) {
                var n = a()(e, function(e) {
                    return e.getAuctionId() === t.auctionId;
                });
                n ? (t.status = c.BID_STATUS.RENDERED, n.addWinningBid(t)) : Object(r.logWarn)("Auction not found when adding winning bid");
            }, t.getAllWinningBids = function() {
                return e.map(function(e) {
                    return e.getWinningBids();
                }).reduce(r.flatten, []);
            }, t.getBidsRequested = function() {
                return e.map(function(e) {
                    return e.getBidRequests();
                }).reduce(r.flatten, []);
            }, t.getNoBids = function() {
                return e.map(function(e) {
                    return e.getNoBids();
                }).reduce(r.flatten, []);
            }, t.getBidsReceived = function() {
                return e.map(function(e) {
                    if (e.getAuctionStatus() === i.a) return e.getBidsReceived();
                }).reduce(r.flatten, []).filter(function(e) {
                    return e;
                });
            }, t.getAllBidsForAdUnitCode = function(t) {
                return e.map(function(e) {
                    return e.getBidsReceived();
                }).reduce(r.flatten, []).filter(function(e) {
                    return e && e.adUnitCode === t;
                });
            }, t.getAdUnits = function() {
                return e.map(function(e) {
                    return e.getAdUnits();
                }).reduce(r.flatten, []);
            }, t.getAdUnitCodes = function() {
                return e.map(function(e) {
                    return e.getAdUnitCodes();
                }).reduce(r.flatten, []).filter(r.uniques);
            }, t.createAuction = function(t) {
                var n = t.adUnits, r = t.adUnitCodes, o = t.callback, a = t.cbTimeout, c = t.labels, u = t.auctionId, s = Object(i.k)({
                    adUnits: n,
                    adUnitCodes: r,
                    callback: o,
                    cbTimeout: a,
                    labels: c,
                    auctionId: u
                });
                return function(t) {
                    e.push(t);
                }(s), s;
            }, t.findBidByAdId = function(t) {
                return a()(e.map(function(e) {
                    return e.getBidsReceived();
                }).reduce(r.flatten, []), function(e) {
                    return e.adId === t;
                });
            }, t.getStandardBidderAdServerTargeting = function() {
                return Object(i.j)()[c.JSON_MAPPING.ADSERVER_TARGETING];
            }, t.setStatusForBids = function(n, r) {
                var i = t.findBidByAdId(n);
                if (i && (i.status = r), i && r === c.BID_STATUS.BID_TARGETING_SET) {
                    var o = a()(e, function(e) {
                        return e.getAuctionId() === i.auctionId;
                    });
                    o && o.setBidTargeting(i);
                }
            }, t.getLastAuctionId = function() {
                return e.length && e[e.length - 1].getAuctionId();
            }, t.clearAllAuctions = function() {
                e.length = 0;
            }, t;
        }();
    },
    220: function(e, t, n) {
        n(221);
        var r = n(55);
        e.exports = r("Array", "findIndex");
    },
    221: function(e, t, n) {
        "use strict";
        var r = n(16), i = n(63).findIndex, o = n(54), a = "findIndex", c = !0;
        a in [] && Array(1).findIndex(function() {
            c = !1;
        }), r({
            target: "Array",
            proto: !0,
            forced: c
        }, {
            findIndex: function(e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
            }
        }), o(a);
    },
    23: function(e, t, n) {
        var r = n(27), i = n(86), o = n(31), a = n(66), c = n(87), u = n(115), s = i("wks"), d = r.Symbol, f = u ? d : d && d.withoutSetter || a;
        e.exports = function(e) {
            return o(s, e) && (c || "string" == typeof s[e]) || (c && o(d, e) ? s[e] = d[e] : s[e] = f("Symbol." + e)), 
            s[e];
        };
    },
    230: function(e, t, n) {
        "use strict";
        t.a = function() {
            window.addEventListener("message", h, !1);
        };
        var r = n(10), i = n.n(r), o = n(39), a = n(5), c = n.n(a), u = n(0), s = n(22), d = n(11), f = n.n(d), l = n(13), p = n(12), g = n.n(p), b = n(3), v = c.a.EVENTS.BID_WON, y = c.a.EVENTS.STALE_RENDER;
        function h(e) {
            var t = e.message ? "message" : "data", n = {};
            try {
                n = JSON.parse(e[t]);
            } catch (e) {
                return;
            }
            if (n && n.adId) {
                var r = f()(s.a.getBidsReceived(), function(e) {
                    return e.adId === n.adId;
                });
                if (r && "Prebid Request" === n.message) {
                    if (r.status === c.a.BID_STATUS.RENDERED && (Object(u.logWarn)("Ad id ".concat(r.adId, " has been rendered before")), 
                    i.a.emit(y, r), Object(u.deepAccess)(b.b.getConfig("auctionOptions"), "suppressStaleRender"))) return;
                    !function(e, t) {
                        var n = e.adId, r = e.ad, i = e.adUrl, o = e.width, a = e.height, c = e.renderer, s = e.cpm;
                        Object(l.c)(c) ? Object(l.b)(c, e) : n && (m(e), t.source.postMessage(JSON.stringify({
                            message: "Prebid Response",
                            ad: Object(u.replaceAuctionPrice)(r, s),
                            adUrl: Object(u.replaceAuctionPrice)(i, s),
                            adId: n,
                            width: o,
                            height: a
                        }), t.origin));
                    }(r, e), s.a.addWinningBid(r), i.a.emit(v, r);
                }
                if (r && "Prebid Native" === n.message) if ("assetRequest" === n.action) {
                    var a = Object(o.d)(n, r);
                    e.source.postMessage(JSON.stringify(a), e.origin);
                } else if ("allAssetRequest" === n.action) {
                    var d = Object(o.c)(n, r);
                    e.source.postMessage(JSON.stringify(d), e.origin);
                } else if ("resizeNativeHeight" === n.action) r.height = n.height, 
                r.width = n.width, m(r); else {
                    if ("click" === Object(o.b)(n, r)) return;
                    s.a.addWinningBid(r), i.a.emit(v, r);
                }
            }
        }
        function m(e) {
            var t = e.adId, n = e.adUnitCode, r = e.width, i = e.height;
            [ "div", "iframe" ].forEach(function(e) {
                var o = function(e) {
                    var r = function(e, t) {
                        return Object(u.isGptPubadsDefined)() ? function(e) {
                            return f()(window.googletag.pubads().getSlots(), function(t) {
                                return f()(t.getTargetingKeys(), function(n) {
                                    return g()(t.getTargeting(n), e);
                                });
                            }).getSlotElementId();
                        }(e) : Object(u.isApnGetTagDefined)() ? function(e) {
                            var t = window.apntag.getTag(e);
                            return t && t.targetId;
                        }(t) : t;
                    }(t, n), i = document.getElementById(r);
                    return i && i.querySelector(e);
                }(e + ':not([style*="display: none"])');
                if (o) {
                    var a = o.style;
                    a.width = r + "px", a.height = i + "px";
                } else Object(u.logWarn)("Unable to locate matching page element for adUnitCode ".concat(n, ".  Can't resize it to ad's dimensions.  Please review setup."));
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
        var r, i, o = n(3), a = n(0), c = n(28), u = "pbjs:debugging";
        function s(e) {
            Object(a.logMessage)("DEBUG: " + e);
        }
        function d(e) {
            Object(a.logWarn)("DEBUG: " + e);
        }
        function f(e) {
            r = y.bind(e), c.c.before(r, 5), i = h.bind(e), c.e.before(i, 5);
        }
        function l() {
            c.c.getHooks({
                hook: r
            }).remove(), c.e.getHooks({
                hook: i
            }).remove();
        }
        function p(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            o.b.setConfig({
                debug: !0
            }), l(), f(e), s("bidder overrides enabled".concat(t ? " from session" : ""));
        }
        function g(e, t, n) {
            return !(!e.bidder || e.bidder === t) || !(!e.adUnitCode || e.adUnitCode === n);
        }
        function b(e, t) {
            return Array.isArray(e) && -1 === e.indexOf(t);
        }
        function v(e, t, n) {
            return Object.keys(e).filter(function(e) {
                return -1 === [ "adUnitCode", "bidder" ].indexOf(e);
            }).reduce(function(t, r) {
                return s("bidder overrides changed '".concat(t.adUnitCode, "/").concat(t.bidderCode, "' ").concat(n, ".").concat(r, " from '").concat(t[r], ".js' to '").concat(e[r], "'")), 
                t[r] = e[r], t;
            }, t);
        }
        function y(e, t, n) {
            var r = this;
            b(r.bidders, n.bidderCode) ? d("bidder '".concat(n.bidderCode, "' excluded from auction by bidder overrides")) : (Array.isArray(r.bids) && r.bids.forEach(function(e) {
                g(e, n.bidderCode, t) || v(e, n, "bidder");
            }), e(t, n));
        }
        function h(e, t) {
            var n = this, r = t.filter(function(e) {
                return !b(n.bidders, e.bidderCode) || (d("bidRequest '".concat(e.bidderCode, "' excluded from auction by bidder overrides")), 
                !1);
            });
            Array.isArray(n.bidRequests) && r.forEach(function(e) {
                n.bidRequests.forEach(function(t) {
                    e.bids.forEach(function(n) {
                        g(t, e.bidderCode, n.adUnitCode) || v(t, n, "bidRequest");
                    });
                });
            }), e(r);
        }
        function m(e) {
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
            return m(e.debugging);
        });
    },
    24: function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e;
        };
    },
    25: function(e, t, n) {
        var r = n(24);
        e.exports = function(e, t, n) {
            if (r(e), void 0 === t) return e;
            switch (n) {
              case 0:
                return function() {
                    return e.call(t);
                };

              case 1:
                return function(n) {
                    return e.call(t, n);
                };

              case 2:
                return function(n, r) {
                    return e.call(t, n, r);
                };

              case 3:
                return function(n, r, i) {
                    return e.call(t, n, r, i);
                };
            }
            return function() {
                return e.apply(t, arguments);
            };
        };
    },
    26: function(e, t, n) {
        var r = n(45), i = n(27), o = function(e) {
            return "function" == typeof e ? e : void 0;
        };
        e.exports = function(e, t) {
            return arguments.length < 2 ? o(r[e]) || o(i[e]) : r[e] && r[e][t] || i[e] && i[e][t];
        };
    },
    27: function(e, t, n) {
        (function(t) {
            var n = function(e) {
                return e && e.Math == Math && e;
            };
            e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || function() {
                return this;
            }() || Function("return this")();
        }).call(t, n(37));
    },
    28: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return E;
        }), n.d(t, "a", function() {
            return A;
        }), t.k = function(e) {
            var t, n, o, a, s = e.adUnits, d = e.adUnitCodes, f = e.callback, p = e.cbTimeout, v = e.labels, U = e.auctionId, k = s, N = v, P = d, q = [], G = [], L = [], W = U || Object(r.generateUUID)(), F = f, z = p, V = [], H = new Set();
            function K() {
                return {
                    auctionId: W,
                    timestamp: t,
                    auctionEnd: n,
                    auctionStatus: o,
                    adUnits: k,
                    adUnitCodes: P,
                    labels: N,
                    bidderRequests: q,
                    noBids: L,
                    bidsReceived: G,
                    winningBids: V,
                    timeout: z
                };
            }
            function J(e, t) {
                if (t && clearTimeout(a), void 0 === n) {
                    var i = [];
                    e && (Object(r.logMessage)("Auction ".concat(W, " timedOut")), 
                    c = H, (i = q.map(function(e) {
                        return (e.bids || []).filter(function(e) {
                            return !c.has(e.bidder);
                        });
                    }).reduce(r.flatten, []).map(function(e) {
                        return {
                            bidId: e.bidId,
                            bidder: e.bidder,
                            adUnitCode: e.adUnitCode,
                            auctionId: e.auctionId
                        };
                    })).length && j.emit(S.EVENTS.BID_TIMEOUT, i)), o = A, n = Date.now(), 
                    j.emit(S.EVENTS.AUCTION_END, K()), _(k, function() {
                        try {
                            if (null != F) {
                                var t = P, n = G.filter(r.bind.call(r.adUnitsFilter, this, t)).reduce(M, {});
                                F.apply(pbjs, [ n, e, W ]), F = null;
                            }
                        } catch (e) {
                            Object(r.logError)("Error executing bidsBackHandler", null, e);
                        } finally {
                            i.length && O.callTimedOutBidders(s, i, z);
                            var o = u.b.getConfig("userSync") || {};
                            o.enableOverride || m(o.syncDelay);
                        }
                    });
                }
                var c;
            }
            function Y() {
                u.b.resetBidder(), Object(r.logInfo)("Bids Received for Auction with id: ".concat(W), G), 
                o = A, J(!1, !0);
            }
            function Q(e) {
                H.add(e);
            }
            function $(e) {
                var t = this;
                e.forEach(function(e) {
                    var t;
                    t = e, q = q.concat(t);
                });
                var n = {}, s = {
                    bidRequests: e,
                    run: function() {
                        var s, p;
                        s = J.bind(null, !0), p = setTimeout(s, z), a = p, o = E, 
                        j.emit(S.EVENTS.AUCTION_INIT, K());
                        var v = function(e, t) {
                            var n = 0, o = !1, a = new Set(), s = {};
                            function d() {
                                n--, o && 0 === n && e();
                            }
                            function f(e, o) {
                                var a = this;
                                s[o.requestId] = !0, n++;
                                var f = function(e) {
                                    var t = e.adUnitCode, n = e.bid, o = e.bidderRequest, a = e.auctionId, s = o.start, d = h({}, n, {
                                        auctionId: a,
                                        responseTimestamp: Object(r.timestamp)(),
                                        requestTimestamp: s,
                                        cpm: parseFloat(n.cpm) || 0,
                                        bidder: n.bidderCode,
                                        adUnitCode: t
                                    });
                                    d.timeToRespond = d.responseTimestamp - d.requestTimestamp, 
                                    j.emit(S.EVENTS.BID_ADJUSTMENT, d);
                                    var f = o.bids && l()(o.bids, function(e) {
                                        return e.adUnitCode == t && e.bidId == d.requestId;
                                    }), p = f && f.renderer, g = d.mediaType, b = f && f.mediaTypes && f.mediaTypes[g], v = b && b.renderer, m = null;
                                    v && v.url && v.render && (!0 !== v.backupOnly || !n.renderer) ? m = v : p && p.url && p.render && (!0 !== p.backupOnly || !n.renderer) && (m = p);
                                    m && (d.renderer = c.a.install({
                                        url: m.url
                                    }), d.renderer.setRender(m.render));
                                    var O = D(n.mediaType, f, u.b.getConfig("mediaTypePriceGranularity")), E = Object(i.a)(d.cpm, "object" === y(O) ? O : u.b.getConfig("customPriceBucket"), u.b.getConfig("currency.granularityMultiplier"));
                                    return d.pbLg = E.low, d.pbMg = E.med, d.pbHg = E.high, 
                                    d.pbAg = E.auto, d.pbDg = E.dense, d.pbCg = E.custom, 
                                    d;
                                }({
                                    adUnitCode: e,
                                    bid: o,
                                    bidderRequest: a,
                                    auctionId: t.getAuctionId()
                                });
                                "video" === f.mediaType ? function(e, t, n, i) {
                                    var o = !0, a = Object(r.getBidRequest)(t.originalRequestId || t.requestId, [ n ]), c = a && Object(r.deepAccess)(a, "mediaTypes.video"), s = c && Object(r.deepAccess)(c, "context");
                                    u.b.getConfig("cache.url") && s !== b.b && (!t.videoCacheKey || u.b.getConfig("cache.ignoreBidderCacheKey") ? (o = !1, 
                                    x(e, t, i, a)) : t.vastUrl || (Object(r.logError)("videoCacheKey specified but not required vastUrl for video bid"), 
                                    o = !1));
                                    o && (B(e, t), i());
                                }(t, f, a, d) : (B(t, f), d());
                            }
                            function p() {
                                var i = this, c = t.getBidRequests(), d = u.b.getConfig("auctionOptions");
                                if (a.add(i), d && !Object(r.isEmpty)(d)) {
                                    var f = d.secondaryBidders;
                                    f && !c.every(function(e) {
                                        return g()(f, e.bidderCode);
                                    }) && (c = c.filter(function(e) {
                                        return !g()(f, e.bidderCode);
                                    }));
                                }
                                o = c.every(function(e) {
                                    return a.has(e);
                                }), i.bids.forEach(function(e) {
                                    s[e.bidId] || (t.addNoBid(e), j.emit(S.EVENTS.NO_BID, e));
                                }), o && 0 === n && e();
                            }
                            return {
                                addBidResponse: f,
                                adapterDone: p
                            };
                        }(Y, t);
                        O.callBids(k, e, function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            C.apply({
                                dispatch: v.addBidResponse,
                                bidderRequest: this
                            }, t);
                        }, v.adapterDone, {
                            request: function(e, t) {
                                f(T, t), f(n, e), I[e] || (I[e] = {
                                    SRA: !0,
                                    origin: t
                                }), n[e] > 1 && (I[e].SRA = !1);
                            },
                            done: function(e) {
                                T[e]--, w[0] && d(w[0]) && w.shift();
                            }
                        }, z, Q);
                    }
                };
                function d(e) {
                    var t = !0, n = u.b.getConfig("maxRequestsPerOrigin") || 4;
                    return e.bidRequests.some(function(e) {
                        var r = 1, i = void 0 !== e.src && e.src === S.S2S.SRC ? "s2s" : e.bidderCode;
                        return I[i] && (!1 === I[i].SRA && (r = Math.min(e.bids.length, n)), 
                        T[I[i].origin] + r > n && (t = !1)), !t;
                    }), t && e.run(), t;
                }
                function f(e, t) {
                    void 0 === e[t] ? e[t] = 1 : e[t]++;
                }
                d(s) || (Object(r.logWarn)("queueing auction due to limited endpoint capacity"), 
                w.push(s));
            }
            return {
                addBidReceived: function(e) {
                    G = G.concat(e);
                },
                addNoBid: function(e) {
                    L = L.concat(e);
                },
                executeCallback: J,
                callBids: function() {
                    o = "started", t = Date.now();
                    var e = O.makeBidRequests(k, t, W, z, N);
                    Object(r.logInfo)("Bids Requested for Auction with id: ".concat(W), e), 
                    e.length < 1 ? (Object(r.logWarn)("No valid bid requests returned for auction"), 
                    Y()) : R.call({
                        dispatch: $,
                        context: this
                    }, e);
                },
                addWinningBid: function(e) {
                    V = V.concat(e), O.callBidWonBidder(e.bidder, e, s);
                },
                setBidTargeting: function(e) {
                    O.callSetTargetingBidder(e.bidder, e);
                },
                getWinningBids: function() {
                    return V;
                },
                getTimeout: function() {
                    return z;
                },
                getAuctionId: function() {
                    return W;
                },
                getAuctionStatus: function() {
                    return o;
                },
                getAdUnits: function() {
                    return k;
                },
                getAdUnitCodes: function() {
                    return P;
                },
                getBidRequests: function() {
                    return q;
                },
                getBidsReceived: function() {
                    return G;
                },
                getNoBids: function() {
                    return L;
                }
            };
        }, n.d(t, "c", function() {
            return C;
        }), n.d(t, "e", function() {
            return R;
        }), t.g = U, t.d = B, n.d(t, "f", function() {
            return x;
        }), n.d(t, "i", function() {
            return k;
        }), n.d(t, "h", function() {
            return N;
        }), t.j = P;
        var r = n(0), i = n(48), o = n(39), a = n(101), c = n(13), u = n(3), s = n(60), d = n(9), f = n(11), l = n.n(f), p = n(12), g = n.n(p), b = n(20), v = n(2);
        function y(e) {
            return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function h() {
            return (h = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        var m = s.a.syncUsers, O = n(8).default, j = n(10), S = n(5), E = "inProgress", A = "completed";
        j.on(S.EVENTS.BID_ADJUSTMENT, function(e) {
            !function(e) {
                var t, n = e.bidderCode, i = e.cpm;
                if (pbjs.bidderSettings && (n && pbjs.bidderSettings[n] && "function" == typeof pbjs.bidderSettings[n].bidCpmAdjustment ? t = pbjs.bidderSettings[n].bidCpmAdjustment : pbjs.bidderSettings[S.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[S.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = pbjs.bidderSettings[S.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), 
                t)) try {
                    i = t(e.cpm, h({}, e));
                } catch (e) {
                    Object(r.logError)("Error during bid adjustment", "bidmanager.js", e);
                }
                i >= 0 && (e.cpm = i);
            }(e);
        });
        var T = {}, I = {}, w = [];
        var C = Object(d.b)("async", function(e, t) {
            this.dispatch.call(this.bidderRequest, e, t);
        }, "addBidResponse"), R = Object(d.b)("sync", function(e) {
            this.dispatch.call(this.context, e);
        }, "addBidderRequests"), _ = Object(d.b)("async", function(e, t) {
            t && t();
        }, "bidsBackCallback");
        function U(e, t) {
            t.timeToRespond > e.getTimeout() + u.b.getConfig("timeoutBuffer") && e.executeCallback(!0);
        }
        function B(e, t) {
            var n = e.getBidRequests(), i = l()(n, function(e) {
                return e.bidderCode === t.bidderCode;
            });
            !function(e, t) {
                var n, i = Object(r.isAllowZeroCpmBidsEnabled)(e.bidderCode) ? e.cpm >= 0 : e.cpm > 0;
                if (e.bidderCode && (i || e.dealId)) {
                    var a = l()(t.bids, function(t) {
                        return t.adUnitCode === e.adUnitCode && t.bidId === e.requestId;
                    });
                    n = function(e, t, n) {
                        if (!t) return {};
                        var r = {}, i = pbjs.bidderSettings;
                        if (i) {
                            q(r, P(t.mediaType, e), t, n), e && i[e] && i[e][S.JSON_MAPPING.ADSERVER_TARGETING] && (q(r, i[e], t, n), 
                            t.sendStandardTargeting = i[e].sendStandardTargeting);
                        }
                        t.native && (r = h({}, r, Object(o.e)(t, n)));
                        return r;
                    }(e.bidderCode, e, a);
                }
                e.adserverTargeting = h(e.adserverTargeting || {}, n);
            }(t, i), j.emit(S.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), U(e, t);
        }
        var x = Object(d.b)("async", function(e, t, n, i) {
            Object(a.b)([ t ], function(i, o) {
                i ? (Object(r.logWarn)("Failed to save to the video cache: ".concat(i, ". Video bid must be discarded.")), 
                U(e, t)) : "" === o[0].uuid ? (Object(r.logWarn)("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), 
                U(e, t)) : (t.videoCacheKey = o[0].uuid, t.vastUrl || (t.vastUrl = Object(a.a)(t.videoCacheKey)), 
                B(e, t), n());
            }, i);
        }, "callPrebidCache");
        function D(e, t, n) {
            if (e && n) {
                if (e === v.d) {
                    var i = Object(r.deepAccess)(t, "mediaTypes.".concat(v.d, ".context"), "instream");
                    if (n["".concat(v.d, "-").concat(i)]) return n["".concat(v.d, "-").concat(i)];
                }
                return n[e];
            }
        }
        var k = function(e, t) {
            var n = D(e, t, u.b.getConfig("mediaTypePriceGranularity"));
            return "string" == typeof e && n ? "string" == typeof n ? n : "custom" : u.b.getConfig("priceGranularity");
        }, N = function(e) {
            return function(t, n) {
                return (e = e || k(t.mediaType, n)) === S.GRANULARITY_OPTIONS.AUTO ? t.pbAg : e === S.GRANULARITY_OPTIONS.DENSE ? t.pbDg : e === S.GRANULARITY_OPTIONS.LOW ? t.pbLg : e === S.GRANULARITY_OPTIONS.MEDIUM ? t.pbMg : e === S.GRANULARITY_OPTIONS.HIGH ? t.pbHg : e === S.GRANULARITY_OPTIONS.CUSTOM ? t.pbCg : void 0;
            };
        };
        function P(e, t) {
            function n(e, t) {
                return {
                    key: e,
                    val: "function" == typeof t ? function(e, n) {
                        return t(e, n);
                    } : function(e) {
                        return Object(r.getValue)(e, t);
                    }
                };
            }
            var i = S.TARGETING_KEYS, o = pbjs.bidderSettings;
            if (o[S.JSON_MAPPING.BD_SETTING_STANDARD] || (o[S.JSON_MAPPING.BD_SETTING_STANDARD] = {}), 
            o[S.JSON_MAPPING.BD_SETTING_STANDARD][S.JSON_MAPPING.ADSERVER_TARGETING] || (o[S.JSON_MAPPING.BD_SETTING_STANDARD][S.JSON_MAPPING.ADSERVER_TARGETING] = [ n(i.BIDDER, "bidderCode"), n(i.AD_ID, "adId"), n(i.PRICE_BUCKET, N()), n(i.SIZE, "size"), n(i.DEAL, "dealId"), n(i.SOURCE, "source"), n(i.FORMAT, "mediaType"), n(i.ADOMAIN, function(e) {
                return e.meta && e.meta.advertiserDomains && e.meta.advertiserDomains.length > 0 ? e.meta.advertiserDomains[0] : "";
            }) ]), "video" === e) {
                var a = o[S.JSON_MAPPING.BD_SETTING_STANDARD][S.JSON_MAPPING.ADSERVER_TARGETING];
                if ([ i.UUID, i.CACHE_ID ].forEach(function(e) {
                    void 0 === l()(a, function(t) {
                        return t.key === e;
                    }) && a.push(n(e, "videoCacheKey"));
                }), u.b.getConfig("cache.url") && (!t || !1 !== Object(r.deepAccess)(o, "".concat(t, ".sendStandardTargeting")))) {
                    var c = Object(r.parseUrl)(u.b.getConfig("cache.url"));
                    void 0 === l()(a, function(e) {
                        return e.key === i.CACHE_HOST;
                    }) && a.push(n(i.CACHE_HOST, function(e) {
                        return Object(r.deepAccess)(e, "adserverTargeting.".concat(i.CACHE_HOST)) ? e.adserverTargeting[i.CACHE_HOST] : c.hostname;
                    }));
                }
            }
            return o[S.JSON_MAPPING.BD_SETTING_STANDARD];
        }
        function q(e, t, n, i) {
            var o = t[S.JSON_MAPPING.ADSERVER_TARGETING];
            return n.size = n.getSize(), Object(r._each)(o, function(o) {
                var a = o.key, c = o.val;
                if (e[a] && Object(r.logWarn)("The key: " + a + " is being overwritten"), 
                Object(r.isFn)(c)) try {
                    c = c(n, i);
                } catch (e) {
                    Object(r.logError)("bidmanager", "ERROR", e);
                }
                (void 0 === t.suppressEmptyKeys || !0 !== t.suppressEmptyKeys) && a !== S.TARGETING_KEYS.DEAL || !Object(r.isEmptyStr)(c) && null != c ? e[a] = c : Object(r.logInfo)("suppressing empty key '" + a + "' from adserver targeting");
            }), e;
        }
        function M(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = {
                bids: []
            }), e[t.adUnitCode].bids.push(t), e;
        }
    },
    29: function(e, t) {
        e.exports = function(e) {
            try {
                return !!e();
            } catch (e) {
                return !0;
            }
        };
    },
    3: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return j;
        }), n.d(t, "b", function() {
            return T;
        });
        var r = n(48), i = n(11), o = n.n(i), a = n(12), c = n.n(a), u = n(89), s = n.n(u), d = n(0), f = [ "fpd" ];
        function l(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function p(e, t) {
            if (null == e) return {};
            var n, r, i = function(e, t) {
                if (null == e) return {};
                var n, r, i = {}, o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i;
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        }
        function g(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function b(e) {
            return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
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
        var y = n(74), h = n(5), m = "TRUE" === Object(d.getParameterByName)(h.DEBUG_MODE).toUpperCase(), O = window.location.origin, j = "random", S = {};
        S[j] = !0, S.fixed = !0;
        var E = j, A = {
            LOW: "low",
            MEDIUM: "medium",
            HIGH: "high",
            AUTO: "auto",
            DENSE: "dense",
            CUSTOM: "custom"
        };
        var T = function() {
            var e, t, n, i = [], a = null;
            function u() {
                e = {};
                var i = {
                    _debug: m,
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
                    _publisherDomain: O,
                    get publisherDomain() {
                        return this._publisherDomain;
                    },
                    set publisherDomain(e) {
                        this._publisherDomain = e;
                    },
                    _priceGranularity: A.MEDIUM,
                    set priceGranularity(e) {
                        c(e) && ("string" == typeof e ? this._priceGranularity = a(e) ? e : A.MEDIUM : Object(d.isPlainObject)(e) && (this._customPriceBucket = e, 
                        this._priceGranularity = A.CUSTOM, Object(d.logMessage)("Using custom price granularity")));
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
                    set mediaTypePriceGranularity(e) {
                        var t = this;
                        this._mediaTypePriceGranularity = Object.keys(e).reduce(function(n, r) {
                            return c(e[r]) ? "string" == typeof e ? n[r] = a(e[r]) ? e[r] : t._priceGranularity : Object(d.isPlainObject)(e) && (n[r] = e[r], 
                            Object(d.logMessage)("Using custom price granularity for ".concat(r))) : Object(d.logWarn)("Invalid price granularity for media type: ".concat(r)), 
                            n;
                        }, {});
                    },
                    _sendAllBids: true,
                    get enableSendAllBids() {
                        return this._sendAllBids;
                    },
                    set enableSendAllBids(e) {
                        this._sendAllBids = e;
                    },
                    _useBidCache: false,
                    get useBidCache() {
                        return this._useBidCache;
                    },
                    set useBidCache(e) {
                        this._useBidCache = e;
                    },
                    _deviceAccess: true,
                    get deviceAccess() {
                        return this._deviceAccess;
                    },
                    set deviceAccess(e) {
                        this._deviceAccess = e;
                    },
                    _bidderSequence: E,
                    get bidderSequence() {
                        return this._bidderSequence;
                    },
                    set bidderSequence(e) {
                        S[e] ? this._bidderSequence = e : Object(d.logWarn)("Invalid order: ".concat(e, ". Bidder Sequence was not set."));
                    },
                    _timeoutBuffer: 400,
                    get timeoutBuffer() {
                        return this._timeoutBuffer;
                    },
                    set timeoutBuffer(e) {
                        this._timeoutBuffer = e;
                    },
                    _disableAjaxTimeout: false,
                    get disableAjaxTimeout() {
                        return this._disableAjaxTimeout;
                    },
                    set disableAjaxTimeout(e) {
                        this._disableAjaxTimeout = e;
                    },
                    _maxNestedIframes: 10,
                    get maxNestedIframes() {
                        return this._maxNestedIframes;
                    },
                    set maxNestedIframes(e) {
                        this._maxNestedIframes = e;
                    },
                    _auctionOptions: {},
                    get auctionOptions() {
                        return this._auctionOptions;
                    },
                    set auctionOptions(e) {
                        (function(e) {
                            if (!Object(d.isPlainObject)(e)) return Object(d.logWarn)("Auction Options must be an object"), 
                            !1;
                            for (var t = 0, n = Object.keys(e); t < n.length; t++) {
                                var r = n[t];
                                if ("secondaryBidders" !== r && "suppressStaleRender" !== r) return Object(d.logWarn)("Auction Options given an incorrect param: ".concat(r)), 
                                !1;
                                if ("secondaryBidders" === r) {
                                    if (!Object(d.isArray)(e[r])) return Object(d.logWarn)("Auction Options ".concat(r, " must be of type Array")), 
                                    !1;
                                    if (!e[r].every(d.isStr)) return Object(d.logWarn)("Auction Options ".concat(r, " must be only string")), 
                                    !1;
                                } else if ("suppressStaleRender" === r && !Object(d.isBoolean)(e[r])) return Object(d.logWarn)("Auction Options ".concat(r, " must be of type boolean")), 
                                !1;
                            }
                            return !0;
                        })(e) && (this._auctionOptions = e);
                    }
                };
                function a(e) {
                    return o()(Object.keys(A), function(t) {
                        return e === A[t];
                    });
                }
                function c(e) {
                    if (!e) return Object(d.logError)("Prebid Error: no value passed to `setPriceGranularity()`"), 
                    !1;
                    if ("string" == typeof e) a(e) || Object(d.logWarn)("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default."); else if (Object(d.isPlainObject)(e) && !Object(r.b)(e)) return Object(d.logError)("Invalid custom price value passed to `setPriceGranularity()`"), 
                    !1;
                    return !0;
                }
                t && C(Object.keys(t).reduce(function(e, n) {
                    return t[n] !== i[n] && (e[n] = i[n] || {}), e;
                }, {})), t = i, n = {};
            }
            function h() {
                if (a && n && Object(d.isPlainObject)(n[a])) {
                    var e = n[a], r = new s.a(Object.keys(t).concat(Object.keys(e)));
                    return y(r).reduce(function(n, r) {
                        return void 0 === e[r] ? n[r] = t[r] : void 0 === t[r] ? n[r] = e[r] : Object(d.isPlainObject)(e[r]) ? n[r] = Object(d.mergeDeep)({}, t[r], e[r]) : n[r] = e[r], 
                        n;
                    }, {});
                }
                return v({}, t);
            }
            function j(e) {
                var t = {};
                return Object.keys(e).forEach(function(n) {
                    var r = "context" === n ? "site" : n;
                    t[r] = "site" === r || "user" === r ? Object.keys(e[n]).reduce(function(t, r) {
                        return "data" === r ? Object(d.mergeDeep)(t, {
                            ext: {
                                data: e[n][r]
                            }
                        }) : Object(d.mergeDeep)(t, g({}, r, e[n][r])), t;
                    }, {}) : e[n];
                }), t;
            }
            function T(e) {
                var t = {};
                return Object.keys(e).filter(function(e) {
                    return "context" === e;
                }).forEach(function(n) {
                    Object.keys(e[n]).forEach(function(r) {
                        "data" === r ? Object(d.mergeDeep)(t, {
                            ext: {
                                data: e[n][r]
                            }
                        }) : "object" !== b(e[n][r]) || Array.isArray(e[n][r]) ? Object(d.mergeDeep)(t, {
                            ext: {
                                data: g({}, r.toLowerCase(), e[n][r])
                            }
                        }) : Object.keys(e[n][r]).forEach(function(i) {
                            Object(d.mergeDeep)(t, {
                                ext: {
                                    data: g({}, r.toLowerCase(), g({}, i.toLowerCase(), e[n][r][i]))
                                }
                            });
                        });
                    });
                }), t;
            }
            function I(n) {
                if (Object(d.isPlainObject)(n)) {
                    var r = Object.keys(n), i = {};
                    r.forEach(function(r) {
                        var o = "fpd" === r ? "ortb2" : r, a = "fpd" === r ? j(n[r]) : n[r];
                        Object(d.isPlainObject)(e[o]) && Object(d.isPlainObject)(a) && (a = v({}, e[o], a)), 
                        i[o] = t[o] = a;
                    }), C(i);
                } else Object(d.logError)("setConfig options must be an object");
            }
            function w(e, t) {
                var n = t;
                if ("string" != typeof e && (n = e, e = "*"), "function" == typeof n) {
                    var r = {
                        topic: e,
                        callback: n
                    };
                    return i.push(r), function() {
                        i.splice(i.indexOf(r), 1);
                    };
                }
                Object(d.logError)("listener must be a function");
            }
            function C(e) {
                var t = Object.keys(e);
                i.filter(function(e) {
                    return c()(t, e.topic);
                }).forEach(function(t) {
                    t.callback(g({}, t.topic, e[t.topic]));
                }), i.filter(function(e) {
                    return "*" === e.topic;
                }).forEach(function(t) {
                    return t.callback(e);
                });
            }
            function R(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                try {
                    r(e), e.bidders.forEach(function(r) {
                        n[r] || (n[r] = {}), Object.keys(e.config).forEach(function(i) {
                            var o = "fpd" === i ? "ortb2" : i, a = "fpd" === i ? j(e.config[i]) : e.config[i];
                            if (Object(d.isPlainObject)(a)) {
                                var c = t ? d.mergeDeep : Object.assign;
                                n[r][o] = c({}, n[r][o] || {}, a);
                            } else n[r][o] = a;
                        });
                    });
                } catch (e) {
                    Object(d.logError)(e);
                }
                function r(e) {
                    if (!Object(d.isPlainObject)(e)) throw "setBidderConfig bidder options must be an object";
                    if (!Array.isArray(e.bidders) || !e.bidders.length) throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                    if (!Object(d.isPlainObject)(e.config)) throw "setBidderConfig bidder options must contain a config object";
                }
            }
            function _(e, t) {
                a = e;
                try {
                    return t();
                } finally {
                    U();
                }
            }
            function U() {
                a = null;
            }
            return u(), {
                getCurrentBidder: function() {
                    return a;
                },
                resetBidder: U,
                getConfig: function() {
                    if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                        var e = arguments.length <= 0 ? void 0 : arguments[0];
                        return e ? Object(d.deepAccess)(h(), e) : h();
                    }
                    return w.apply(void 0, arguments);
                },
                readConfig: function() {
                    if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                        var e = arguments.length <= 0 ? void 0 : arguments[0], t = Object(d.deepClone)(h());
                        return e ? Object(d.deepAccess)(t, e) : t;
                    }
                    return w.apply(void 0, arguments);
                },
                setConfig: I,
                mergeConfig: function(e) {
                    if (Object(d.isPlainObject)(e)) {
                        var t = Object.keys(e).reduce(function(t, n) {
                            var r = h()[n] || {};
                            return t[n] = Object(d.mergeDeep)(r, e[n]), t;
                        }, {});
                        return I(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? l(Object(n), !0).forEach(function(t) {
                                    g(e, t, n[t]);
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                });
                            }
                            return e;
                        }({}, t)), t;
                    }
                    Object(d.logError)("mergeConfig input must be an object");
                },
                setDefaults: function(n) {
                    Object(d.isPlainObject)(e) ? (v(e, n), v(t, n)) : Object(d.logError)("defaults must be an object");
                },
                resetConfig: u,
                runWithBidder: _,
                callbackWithBidder: function(e) {
                    return function(t) {
                        return function() {
                            if ("function" == typeof t) {
                                for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                return _(e, d.bind.call.apply(d.bind, [ t, this ].concat(r)));
                            }
                            Object(d.logWarn)("config.callbackWithBidder callback is not a function");
                        };
                    };
                },
                setBidderConfig: R,
                getBidderConfig: function() {
                    return n;
                },
                mergeBidderConfig: function(e) {
                    return R(e, !0);
                },
                convertAdUnitFpd: function(e) {
                    var t = [];
                    return e.forEach(function(e) {
                        e.fpd ? (e.ortb2Imp ? Object(d.mergeDeep)(e.ortb2Imp, T(e.fpd)) : e.ortb2Imp = T(e.fpd), 
                        t.push(function(e) {
                            e.fpd;
                            return p(e, f);
                        }(e))) : t.push(e);
                    }), t;
                },
                getLegacyFpd: function(e) {
                    if ("object" === b(e)) {
                        var t = {};
                        return Object.keys(e).forEach(function(n) {
                            var r = "site" === n ? "context" : n;
                            t[r] = "context" === r || "user" === r ? Object.keys(e[n]).filter(function(e) {
                                return "data" !== e;
                            }).reduce(function(t, r) {
                                return "ext" === r ? Object(d.mergeDeep)(t, e[n][r]) : Object(d.mergeDeep)(t, g({}, r, e[n][r])), 
                                t;
                            }, {}) : e[n];
                        }), t;
                    }
                },
                getLegacyImpFpd: function(e) {
                    if ("object" === b(e)) {
                        var t = {};
                        return Object(d.deepAccess)(e, "ext.data") && Object.keys(e.ext.data).forEach(function(n) {
                            "pbadslot" === n ? Object(d.mergeDeep)(t, {
                                context: {
                                    pbAdSlot: e.ext.data[n]
                                }
                            }) : "adserver" === n ? Object(d.mergeDeep)(t, {
                                context: {
                                    adServer: e.ext.data[n]
                                }
                            }) : Object(d.mergeDeep)(t, {
                                context: {
                                    data: g({}, n, e.ext.data[n])
                                }
                            });
                        }), t;
                    }
                }
            };
        }();
    },
    30: function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e;
        };
    },
    31: function(e, t, n) {
        var r = n(52), i = {}.hasOwnProperty;
        e.exports = Object.hasOwn || function(e, t) {
            return i.call(r(e), t);
        };
    },
    32: function(e, t, n) {
        var r = n(33), i = n(34), o = n(44);
        e.exports = r ? function(e, t, n) {
            return i.f(e, t, o(1, n));
        } : function(e, t, n) {
            return e[t] = n, e;
        };
    },
    33: function(e, t, n) {
        var r = n(29);
        e.exports = !r(function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7;
                }
            })[1];
        });
    },
    34: function(e, t, n) {
        var r = n(33), i = n(84), o = n(17), a = n(62), c = Object.defineProperty;
        t.f = r ? c : function(e, t, n) {
            if (o(e), t = a(t, !0), o(n), i) try {
                return c(e, t, n);
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
            return "value" in n && (e[t] = n.value), e;
        };
    },
    35: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n) {
            if (!t || !e) return void Object(o.logError)("cannot load external script without url and moduleCode");
            if (!i()(c, t)) return void Object(o.logError)("".concat(t, " not whitelisted for loading external JavaScript"));
            if (a[e]) return n && "function" == typeof n && (a[e].loaded ? n() : a[e].callbacks.push(n)), 
            a[e].tag;
            a[e] = {
                loaded: !1,
                tag: null,
                callbacks: []
            }, n && "function" == typeof n && a[e].callbacks.push(n);
            return Object(o.logWarn)("module ".concat(t, " is loading external JavaScript")), 
            function(t, n) {
                var r = document.createElement("script");
                r.type = "text/javascript", r.async = !0, a[e].tag = r, r.readyState ? r.onreadystatechange = function() {
                    "loaded" !== r.readyState && "complete" !== r.readyState || (r.onreadystatechange = null, 
                    n());
                } : r.onload = function() {
                    n();
                };
                return r.src = t, Object(o.insertElement)(r), r;
            }(e, function() {
                a[e].loaded = !0;
                try {
                    for (var t = 0; t < a[e].callbacks.length; t++) a[e].callbacks[t]();
                } catch (e) {
                    Object(o.logError)("Error executing callback", "adloader.js:loadExternalScript", e);
                }
            });
        };
        var r = n(12), i = n.n(r), o = n(0), a = {}, c = [ "adloox", "criteo", "outstream", "adagio", "browsi" ];
    },
    37: function(e, t) {
        var n;
        n = function() {
            return this;
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this");
        } catch (e) {
            "object" == typeof window && (n = window);
        }
        e.exports = n;
    },
    38: function(e, t, n) {
        var r = n(18), i = n(73);
        e.exports = r ? i : function(e) {
            return Set.prototype.values.call(e);
        };
    },
    381: function(e, t, n) {
        n(382);
        var r = n(55);
        e.exports = r("String", "includes");
    },
    382: function(e, t, n) {
        "use strict";
        var r = n(16), i = n(383), o = n(51);
        r({
            target: "String",
            proto: !0,
            forced: !n(385)("includes")
        }, {
            includes: function(e) {
                return !!~String(o(this)).indexOf(i(e), arguments.length > 1 ? arguments[1] : void 0);
            }
        });
    },
    383: function(e, t, n) {
        var r = n(384);
        e.exports = function(e) {
            if (r(e)) throw TypeError("The method doesn't accept regular expressions");
            return e;
        };
    },
    384: function(e, t, n) {
        var r = n(30), i = n(50), o = n(23)("match");
        e.exports = function(e) {
            var t;
            return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e));
        };
    },
    385: function(e, t, n) {
        var r = n(23)("match");
        e.exports = function(e) {
            var t = /./;
            try {
                "/./"[e](t);
            } catch (n) {
                try {
                    return t[r] = !1, "/./"[e](t);
                } catch (e) {}
            }
            return !1;
        };
    },
    39: function(e, t, n) {
        "use strict";
        n.d(t, "f", function() {
            return f;
        }), n.d(t, "a", function() {
            return l;
        }), t.h = function(e) {
            if (e && e.type && function(e) {
                if (!e || !o()(Object.keys(p), e)) return Object(r.logError)("".concat(e, " nativeParam is not supported")), 
                !1;
                return !0;
            }(e.type)) return p[e.type];
            return e;
        }, t.g = function(e, t) {
            var n = Object(r.getBidRequest)(e.requestId, t);
            if (!n) return !1;
            if (!Object(r.deepAccess)(e, "native.clickUrl")) return !1;
            var i = n.nativeParams;
            if (!i) return !0;
            var a = Object.keys(i).filter(function(e) {
                return i[e].required;
            }), c = Object.keys(e.native).filter(function(t) {
                return e.native[t];
            });
            return a.every(function(e) {
                return o()(c, e);
            });
        }, t.b = function(e, t) {
            var n;
            "click" === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers, 
            t.native && t.native.javascriptTrackers && Object(r.insertHtmlIntoIframe)(t.native.javascriptTrackers));
            return (n || []).forEach(r.triggerPixel), e.action;
        }, t.e = function(e, t) {
            var n = {};
            Object(r.deepAccess)(t, "nativeParams.rendererUrl") ? e.native.rendererUrl = g(t.nativeParams.rendererUrl) : Object(r.deepAccess)(t, "nativeParams.adTemplate") && (e.native.adTemplate = g(t.nativeParams.adTemplate));
            var i = !1 !== Object(r.deepAccess)(t, "nativeParams.sendTargetingKeys"), o = function(e) {
                var t = {};
                Object(r.deepAccess)(e, "nativeParams.ext") && Object.keys(e.nativeParams.ext).forEach(function(e) {
                    t[e] = "hb_native_".concat(e);
                });
                return u(u({}, d.NATIVE_KEYS), t);
            }(t), a = u(u({}, e.native), e.native.ext);
            return delete a.ext, Object.keys(a).forEach(function(a) {
                var c = o[a], u = g(e.native[a]) || g(Object(r.deepAccess)(e, "native.ext.".concat(a)));
                if ("adTemplate" !== a && c && u) {
                    var s = Object(r.deepAccess)(t, "nativeParams.".concat(a, ".sendId"));
                    if ("boolean" != typeof s && (s = Object(r.deepAccess)(t, "nativeParams.ext.".concat(a, ".sendId"))), 
                    s) u = "".concat(c, ":").concat(e.adId);
                    var d = Object(r.deepAccess)(t, "nativeParams.".concat(a, ".sendTargetingKeys"));
                    "boolean" != typeof d && (d = Object(r.deepAccess)(t, "nativeParams.ext.".concat(a, ".sendTargetingKeys"))), 
                    ("boolean" == typeof d ? d : i) && (n[c] = u);
                }
            }), n;
        }, t.d = function(e, t) {
            var n = {
                message: "assetResponse",
                adId: e.adId,
                assets: []
            };
            t.native.hasOwnProperty("adTemplate") && (n.adTemplate = g(t.native.adTemplate));
            t.native.hasOwnProperty("rendererUrl") && (n.rendererUrl = g(t.native.rendererUrl));
            return e.assets.forEach(function(e) {
                var i = Object(r.getKeyByValue)(d.NATIVE_KEYS, e), o = g(t.native[i]);
                n.assets.push({
                    key: i,
                    value: o
                });
            }), n;
        }, t.c = function(e, t) {
            var n = {
                message: "assetResponse",
                adId: e.adId,
                assets: []
            };
            return Object.keys(t.native).forEach(function(e, r) {
                if ("adTemplate" === e && t.native[e]) n.adTemplate = g(t.native[e]); else if ("rendererUrl" === e && t.native[e]) n.rendererUrl = g(t.native[e]); else if ("ext" === e) Object.keys(t.native[e]).forEach(function(r) {
                    if (t.native[e][r]) {
                        var i = g(t.native[e][r]);
                        n.assets.push({
                            key: r,
                            value: i
                        });
                    }
                }); else if (t.native[e] && d.NATIVE_KEYS.hasOwnProperty(e)) {
                    var i = g(t.native[e]);
                    n.assets.push({
                        key: e,
                        value: i
                    });
                }
            }), n;
        };
        var r = n(0), i = n(12), o = n.n(i);
        function a(e) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function c(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? c(Object(n), !0).forEach(function(t) {
                    s(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function s(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var d = n(5), f = [], l = Object.keys(d.NATIVE_KEYS).map(function(e) {
            return d.NATIVE_KEYS[e];
        }), p = {
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
        function g(e) {
            return "object" === a(e) && e.url ? e.url : e;
        }
    },
    4: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return c;
        }), t.b = u;
        var r = n(3), i = n(0);
        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        function a(e) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        var c = u();
        function u() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.request, c = t.done;
            return function(t, u, s) {
                var d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                try {
                    var f, l = d.method || (s ? "POST" : "GET"), p = document.createElement("a");
                    p.href = t;
                    var g = "object" === a(u) && null !== u ? u : {
                        success: function() {
                            Object(i.logMessage)("xhr success");
                        },
                        error: function(e) {
                            Object(i.logError)("xhr error", null, e);
                        }
                    };
                    if ("function" == typeof u && (g.success = u), (f = new window.XMLHttpRequest()).onreadystatechange = function() {
                        if (4 === f.readyState) {
                            "function" == typeof c && c(p.origin);
                            var e = f.status;
                            e >= 200 && e < 300 || 304 === e ? g.success(f.responseText, f) : g.error(f.statusText, f);
                        }
                    }, r.b.getConfig("disableAjaxTimeout") || (f.ontimeout = function() {
                        Object(i.logError)("  xhr timeout after ", f.timeout, "ms");
                    }), "GET" === l && s) {
                        var b = Object(i.parseUrl)(t, d);
                        o(b.search, s), t = Object(i.buildUrl)(b);
                    }
                    f.open(l, t, !0), r.b.getConfig("disableAjaxTimeout") || (f.timeout = e), 
                    d.withCredentials && (f.withCredentials = !0), Object(i._each)(d.customHeaders, function(e, t) {
                        f.setRequestHeader(t, e);
                    }), d.preflight && f.setRequestHeader("X-Requested-With", "XMLHttpRequest"), 
                    f.setRequestHeader("Content-Type", d.contentType || "text/plain"), 
                    "function" == typeof n && n(p.origin), "POST" === l && s ? f.send(s) : f.send();
                } catch (e) {
                    Object(i.logError)("xhr construction", e), "object" === a(u) && null !== u && u.error(e);
                }
            };
        }
    },
    40: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return A;
        }), n.d(t, "b", function() {
            return T;
        }), t.c = I, n.d(t, "d", function() {
            return w;
        });
        var r = n(0), i = n(3), o = n(39), a = n(22), c = n(100), u = n(2), s = n(9), d = n(12), f = n.n(d), l = n(11), p = n.n(l);
        function g() {
            return (g = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        function b(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function v(e) {
            return function(e) {
                if (Array.isArray(e)) return y(e);
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
            }(e) || function(e, t) {
                if (!e) return;
                if ("string" == typeof e) return y(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t);
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function y(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        var h = n(5), m = [], O = "targetingControls.allowTargetingKeys", j = "targetingControls.addTargetingKeys", S = 'Only one of "'.concat(O, '" or "').concat(j, '" can be set'), E = Object.keys(h.TARGETING_KEYS).map(function(e) {
            return h.TARGETING_KEYS[e];
        }), A = {
            isBidNotExpired: function(e) {
                return e.responseTimestamp + 1e3 * e.ttl - 1e3 > Object(r.timestamp)();
            },
            isUnusedBid: function(e) {
                return e && (e.status && !f()([ h.BID_STATUS.RENDERED ], e.status) || !e.status);
            }
        }, T = Object(s.b)("sync", function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!o) {
                var a = [], c = i.b.getConfig("sendBidsControl.dealPrioritization"), u = Object(r.groupBy)(e, "adUnitCode");
                return Object.keys(u).forEach(function(e) {
                    var i = [], o = Object(r.groupBy)(u[e], "bidderCode");
                    Object.keys(o).forEach(function(e) {
                        return i.push(o[e].reduce(t));
                    }), n > 0 ? (i = c ? i.sort(I(!0)) : i.sort(function(e, t) {
                        return t.cpm - e.cpm;
                    }), a.push.apply(a, v(i.slice(0, n)))) : a.push.apply(a, v(i));
                }), a;
            }
            return e;
        });
        function I() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return function(t, n) {
                return void 0 !== t.adserverTargeting.hb_deal && void 0 === n.adserverTargeting.hb_deal ? -1 : void 0 === t.adserverTargeting.hb_deal && void 0 !== n.adserverTargeting.hb_deal ? 1 : e ? n.cpm - t.cpm : n.adserverTargeting.hb_pb - t.adserverTargeting.hb_pb;
            };
        }
        var w = function(e) {
            var t = {}, n = {};
            function a(e, t) {
                return e.adserverTargeting && t && (Object(r.isArray)(t) && f()(t, e.adUnitCode) || "string" == typeof t && e.adUnitCode === t);
            }
            function s(e, t) {
                if (!0 === i.b.getConfig("targetingControls.alwaysIncludeDeals")) {
                    var n = E.concat(o.a);
                    return T(t, r.getHighestCpm).map(function(t) {
                        if (t.dealId && a(t, e)) return b({}, t.adUnitCode, N(t, n.filter(function(e) {
                            return void 0 !== t.adserverTargeting[e];
                        })));
                    }).filter(function(e) {
                        return e;
                    });
                }
                return [];
            }
            function d(e, t) {
                var n = g({}, h.TARGETING_KEYS, h.NATIVE_KEYS), i = Object.keys(n), o = {};
                Object(r.logInfo)("allowTargetingKeys - allowed keys [ ".concat(t.map(function(e) {
                    return n[e];
                }).join(", "), " ]")), e.map(function(e) {
                    var r = Object.keys(e)[0], a = e[r].filter(function(e) {
                        var r = Object.keys(e)[0], a = 0 === i.filter(function(e) {
                            return 0 === r.indexOf(n[e]);
                        }).length || p()(t, function(e) {
                            var t = n[e];
                            return 0 === r.indexOf(t);
                        });
                        return o[r] = !a, a;
                    });
                    e[r] = a;
                });
                var a = Object.keys(o).filter(function(e) {
                    return o[e];
                });
                return Object(r.logInfo)("allowTargetingKeys - removed keys [ ".concat(a.join(", "), " ]")), 
                e.filter(function(e) {
                    return e[Object.keys(e)[0]].length > 0;
                });
            }
            function l(e, t) {
                var n = Object(r.deepClone)(e);
                return Object.keys(n).map(function(e) {
                    return {
                        adUnitCode: e,
                        adserverTargeting: n[e]
                    };
                }).sort(I()).reduce(function(e, i, o, a) {
                    var c, u = (c = i.adserverTargeting, Object.keys(c).reduce(function(e, t) {
                        return e + "".concat(t, "%3d").concat(encodeURIComponent(c[t]), "%26");
                    }, ""));
                    o + 1 === a.length && (u = u.slice(0, -3));
                    var s = i.adUnitCode, d = u.length;
                    return d <= t ? (t -= d, Object(r.logInfo)("AdUnit '".concat(s, "' auction keys comprised of ").concat(d, " characters.  Deducted from running threshold; new limit is ").concat(t), n[s]), 
                    e[s] = n[s]) : Object(r.logWarn)("The following keys for adUnitCode '".concat(s, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(d, ", the current allotted amount was ").concat(t, ".\n"), n[s]), 
                    o + 1 === a.length && 0 === Object.keys(e).length && Object(r.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."), 
                    e;
                }, {});
            }
            function y(e) {
                return e.map(function(e) {
                    return b({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function(e) {
                        return b({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(","));
                    }).reduce(function(e, t) {
                        return g(t, e);
                    }, {}));
                }).reduce(function(e, t) {
                    var n = Object.keys(t)[0];
                    return e[n] = g({}, e[n], t[n]), e;
                }, {});
            }
            function w(t) {
                return "string" == typeof t ? [ t ] : Object(r.isArray)(t) ? t : e.getAdUnitCodes() || [];
            }
            function C() {
                var t = e.getBidsReceived();
                return i.b.getConfig("useBidCache") || (t = t.filter(function(e) {
                    return n[e.adUnitCode] === e.auctionId;
                })), t = t.filter(function(e) {
                    return Object(r.deepAccess)(e, "video.context") !== u.a;
                }).filter(function(e) {
                    return "banner" !== e.mediaType || Object(c.c)([ e.width, e.height ]);
                }).filter(A.isUnusedBid).filter(A.isBidNotExpired), T(t, r.getOldestHighestCpmBid);
            }
            function R(e, n) {
                var r = t.getWinningBids(e, n), i = _();
                return r = r.map(function(e) {
                    return b({}, e.adUnitCode, Object.keys(e.adserverTargeting).filter(function(t) {
                        return void 0 === e.sendStandardTargeting || e.sendStandardTargeting || -1 === i.indexOf(t);
                    }).reduce(function(t, n) {
                        var r = [ e.adserverTargeting[n] ], i = b({}, n.substring(0, 20), r);
                        if (n === h.TARGETING_KEYS.DEAL) {
                            var o = b({}, "".concat(n, "_").concat(e.bidderCode).substring(0, 20), r);
                            return [].concat(v(t), [ i, o ]);
                        }
                        return [].concat(v(t), [ i ]);
                    }, []));
                });
            }
            function _() {
                return e.getStandardBidderAdServerTargeting().map(function(e) {
                    return e.key;
                }).concat(E).filter(r.uniques);
            }
            function U(e, t, n, i) {
                return Object.keys(t.adserverTargeting).filter(B()).forEach(function(n) {
                    e.length && e.filter(function(e) {
                        return function(n) {
                            return n.adUnitCode === t.adUnitCode && n.adserverTargeting[e];
                        };
                    }(n)).forEach(function(e) {
                        return function(n) {
                            Object(r.isArray)(n.adserverTargeting[e]) || (n.adserverTargeting[e] = [ n.adserverTargeting[e] ]), 
                            n.adserverTargeting[e] = n.adserverTargeting[e].concat(t.adserverTargeting[e]).filter(r.uniques), 
                            delete t.adserverTargeting[e];
                        };
                    }(n));
                }), e.push(t), e;
            }
            function B() {
                var e = _().concat(o.a);
                return function(t) {
                    return -1 === e.indexOf(t);
                };
            }
            function x(e) {
                return b({}, e.adUnitCode, Object.keys(e.adserverTargeting).filter(B()).map(function(t) {
                    return b({}, t.substring(0, 20), [ e.adserverTargeting[t] ]);
                }));
            }
            function D(e, t) {
                return t.filter(function(t) {
                    return f()(e, t.adUnitCode);
                }).map(function(e) {
                    return g({}, e);
                }).reduce(U, []).map(x).filter(function(e) {
                    return e;
                });
            }
            function k(e, t) {
                var n = E.concat(o.a), c = i.b.getConfig("sendBidsControl.bidLimit"), u = T(t, r.getHighestCpm, c), s = i.b.getConfig("targetingControls.allowSendAllBidsTargetingKeys"), d = s ? s.map(function(e) {
                    return h.TARGETING_KEYS[e];
                }) : n;
                return u.map(function(t) {
                    if (a(t, e)) return b({}, t.adUnitCode, N(t, n.filter(function(e) {
                        return void 0 !== t.adserverTargeting[e] && -1 !== d.indexOf(e);
                    })));
                }).filter(function(e) {
                    return e;
                });
            }
            function N(e, t) {
                return t.map(function(t) {
                    return b({}, "".concat(t, "_").concat(e.bidderCode).substring(0, 20), [ e.adserverTargeting[t] ]);
                });
            }
            function P(t) {
                function n(e) {
                    return Object(r.deepAccess)(e, h.JSON_MAPPING.ADSERVER_TARGETING);
                }
                return e.getAdUnits().filter(function(e) {
                    return f()(t, e.code) && n(e);
                }).map(function(e) {
                    return b({}, e.code, function(e) {
                        var t = n(e);
                        return Object.keys(t).map(function(e) {
                            return Object(r.isStr)(t[e]) && (t[e] = t[e].split(",").map(function(e) {
                                return e.trim();
                            })), Object(r.isArray)(t[e]) || (t[e] = [ t[e] ]), b({}, e, t[e]);
                        });
                    }(e));
                });
            }
            return t.setLatestAuctionForAdUnit = function(e, t) {
                n[e] = t;
            }, t.resetPresetTargeting = function(t, n) {
                if (Object(r.isGptPubadsDefined)()) {
                    var i = w(t), o = e.getAdUnits().filter(function(e) {
                        return f()(i, e.code);
                    }), a = m.reduce(function(e, t) {
                        return e[t] = null, e;
                    }, {});
                    window.googletag.pubads().getSlots().forEach(function(e) {
                        var t = Object(r.isFn)(n) && n(e);
                        o.forEach(function(n) {
                            (n.code === e.getAdUnitPath() || n.code === e.getSlotElementId() || Object(r.isFn)(t) && t(n.code)) && e.updateTargetingFromMap(a);
                        });
                    });
                }
            }, t.resetPresetTargetingAST = function(e) {
                w(e).forEach(function(e) {
                    var t = window.apntag.getTag(e);
                    if (t && t.keywords) {
                        var n = Object.keys(t.keywords), r = {};
                        n.forEach(function(e) {
                            f()(m, e.toLowerCase()) || (r[e] = t.keywords[e]);
                        }), window.apntag.modifyTag(e, {
                            keywords: r
                        });
                    }
                });
            }, t.getAllTargeting = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C(), n = w(e), o = R(n, t).concat(D(n, t)).concat(i.b.getConfig("enableSendAllBids") ? k(n, t) : s(n, t)).concat(P(n));
                o.map(function(e) {
                    Object.keys(e).map(function(t) {
                        e[t].map(function(e) {
                            -1 === m.indexOf(Object.keys(e)[0]) && (m = Object.keys(e).concat(m));
                        });
                    });
                });
                var a = Object.keys(g({}, h.DEFAULT_TARGETING_KEYS, h.NATIVE_KEYS)), c = i.b.getConfig(O), u = i.b.getConfig(j);
                if (null != u && null != c) throw new Error(S);
                c = null != u ? a.concat(u) : c || a, Array.isArray(c) && c.length > 0 && (o = d(o, c)), 
                o = y(o);
                var f = i.b.getConfig("targetingControls.auctionKeyMaxChars");
                return f && (Object(r.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(f, " characters.  Running checks on auction keys...")), 
                o = l(o, f)), n.forEach(function(e) {
                    o[e] || (o[e] = {});
                }), o;
            }, i.b.getConfig("targetingControls", function(e) {
                null != Object(r.deepAccess)(e, O) && null != Object(r.deepAccess)(e, j) && Object(r.logError)(S);
            }), t.setTargetingForGPT = function(e, t) {
                window.googletag.pubads().getSlots().forEach(function(n) {
                    Object.keys(e).filter(t ? t(n) : Object(r.isAdUnitCodeMatchingSlot)(n)).forEach(function(t) {
                        Object.keys(e[t]).forEach(function(n) {
                            var r = e[t][n];
                            "string" == typeof r && -1 !== r.indexOf(",") && (r = r.split(",")), 
                            e[t][n] = r;
                        }), Object(r.logMessage)("Attempting to set targeting-map for slot: ".concat(n.getSlotElementId(), " with targeting-map:"), e[t]), 
                        n.updateTargetingFromMap(e[t]);
                    });
                });
            }, t.getWinningBids = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C(), n = w(e);
                return t.filter(function(e) {
                    return f()(n, e.adUnitCode);
                }).filter(function(e) {
                    return Object(r.isAllowZeroCpmBidsEnabled)(e.bidderCode) ? e.cpm >= 0 : e.cpm > 0;
                }).map(function(e) {
                    return e.adUnitCode;
                }).filter(r.uniques).map(function(e) {
                    return t.filter(function(t) {
                        return t.adUnitCode === e ? t : null;
                    }).reduce(r.getHighestCpm);
                });
            }, t.setTargetingForAst = function(e) {
                var n = t.getAllTargeting(e);
                try {
                    t.resetPresetTargetingAST(e);
                } catch (e) {
                    Object(r.logError)("unable to reset targeting for AST" + e);
                }
                Object.keys(n).forEach(function(e) {
                    return Object.keys(n[e]).forEach(function(t) {
                        if (Object(r.logMessage)("Attempting to set targeting for targetId: ".concat(e, " key: ").concat(t, " value: ").concat(n[e][t])), 
                        Object(r.isStr)(n[e][t]) || Object(r.isArray)(n[e][t])) {
                            var i = {};
                            t.search(/pt[0-9]/) < 0 ? i[t.toUpperCase()] = n[e][t] : i[t] = n[e][t], 
                            window.apntag.setKeywords(e, i, {
                                overrideKeyValue: !0
                            });
                        }
                    });
                });
            }, t.isApntagDefined = function() {
                if (window.apntag && Object(r.isFn)(window.apntag.setKeywords)) return !0;
            }, t;
        }(a.a);
    },
    41: function(e, t) {
        e.exports = {};
    },
    42: function(e, t, n) {
        var r = n(17), i = n(24), o = n(23)("species");
        e.exports = function(e, t) {
            var n, a = r(e).constructor;
            return void 0 === a || null == (n = r(a)[o]) ? t : i(n);
        };
    },
    43: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            return new i(e, t);
        };
        var r = n(0);
        function i(e, t) {
            var n = t && t.src || "client", i = e || 0;
            this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0, 
            this.statusMessage = function() {
                switch (i) {
                  case 0:
                    return "Pending";

                  case 1:
                    return "Bid available";

                  case 2:
                    return "Bid returned empty or error response";

                  case 3:
                    return "Bid timed out";
                }
            }(), this.adId = Object(r.getUniqueIdentifierStr)(), this.requestId = t && t.bidId, 
            this.mediaType = "banner", this.source = n, this.getStatusCode = function() {
                return i;
            }, this.getSize = function() {
                return this.width + "x" + this.height;
            };
        }
    },
    44: function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            };
        };
    },
    45: function(e, t) {
        e.exports = {};
    },
    458: function(e, t, n) {
        n(459);
        var r = n(45);
        e.exports = r.URLSearchParams;
    },
    459: function(e, t, n) {
        "use strict";
        n(99);
        var r = n(16), i = n(26), o = n(460), a = n(71), c = n(94), u = n(59), s = n(95), d = n(46), f = n(68), l = n(31), p = n(25), g = n(58), b = n(17), v = n(30), y = n(70), h = n(44), m = n(73), O = n(57), j = n(23), S = i("fetch"), E = i("Headers"), A = j("iterator"), T = "URLSearchParams", I = "URLSearchParamsIterator", w = d.set, C = d.getterFor(T), R = d.getterFor(I), _ = /\+/g, U = Array(4), B = function(e) {
            return U[e - 1] || (U[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"));
        }, x = function(e) {
            try {
                return decodeURIComponent(e);
            } catch (t) {
                return e;
            }
        }, D = function(e) {
            var t = e.replace(_, " "), n = 4;
            try {
                return decodeURIComponent(t);
            } catch (e) {
                for (;n; ) t = t.replace(B(n--), x);
                return t;
            }
        }, k = /[!'()~]|%20/g, N = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+"
        }, P = function(e) {
            return N[e];
        }, q = function(e) {
            return encodeURIComponent(e).replace(k, P);
        }, M = function(e, t) {
            if (t) for (var n, r, i = t.split("&"), o = 0; o < i.length; ) (n = i[o++]).length && (r = n.split("="), 
            e.push({
                key: D(r.shift()),
                value: D(r.join("="))
            }));
        }, G = function(e) {
            this.entries.length = 0, M(this.entries, e);
        }, L = function(e, t) {
            if (e < t) throw TypeError("Not enough arguments");
        }, W = s(function(e, t) {
            w(this, {
                type: I,
                iterator: m(C(e).entries),
                kind: t
            });
        }, "Iterator", function() {
            var e = R(this), t = e.kind, n = e.iterator.next(), r = n.value;
            return n.done || (n.value = "keys" === t ? r.key : "values" === t ? r.value : [ r.key, r.value ]), 
            n;
        }), F = function() {
            f(this, F, T);
            var e, t, n, r, i, o, a, c, u, s = arguments.length > 0 ? arguments[0] : void 0, d = this, p = [];
            if (w(d, {
                type: T,
                entries: p,
                updateURL: function() {},
                updateSearchParams: G
            }), void 0 !== s) if (v(s)) if ("function" == typeof (e = O(s))) for (n = (t = e.call(s)).next; !(r = n.call(t)).done; ) {
                if ((a = (o = (i = m(b(r.value))).next).call(i)).done || (c = o.call(i)).done || !o.call(i).done) throw TypeError("Expected sequence with length 2");
                p.push({
                    key: a.value + "",
                    value: c.value + ""
                });
            } else for (u in s) l(s, u) && p.push({
                key: u,
                value: s[u] + ""
            }); else M(p, "string" == typeof s ? "?" === s.charAt(0) ? s.slice(1) : s : s + "");
        }, z = F.prototype;
        c(z, {
            append: function(e, t) {
                L(arguments.length, 2);
                var n = C(this);
                n.entries.push({
                    key: e + "",
                    value: t + ""
                }), n.updateURL();
            },
            delete: function(e) {
                L(arguments.length, 1);
                for (var t = C(this), n = t.entries, r = e + "", i = 0; i < n.length; ) n[i].key === r ? n.splice(i, 1) : i++;
                t.updateURL();
            },
            get: function(e) {
                L(arguments.length, 1);
                for (var t = C(this).entries, n = e + "", r = 0; r < t.length; r++) if (t[r].key === n) return t[r].value;
                return null;
            },
            getAll: function(e) {
                L(arguments.length, 1);
                for (var t = C(this).entries, n = e + "", r = [], i = 0; i < t.length; i++) t[i].key === n && r.push(t[i].value);
                return r;
            },
            has: function(e) {
                L(arguments.length, 1);
                for (var t = C(this).entries, n = e + "", r = 0; r < t.length; ) if (t[r++].key === n) return !0;
                return !1;
            },
            set: function(e, t) {
                L(arguments.length, 1);
                for (var n, r = C(this), i = r.entries, o = !1, a = e + "", c = t + "", u = 0; u < i.length; u++) (n = i[u]).key === a && (o ? i.splice(u--, 1) : (o = !0, 
                n.value = c));
                o || i.push({
                    key: a,
                    value: c
                }), r.updateURL();
            },
            sort: function() {
                var e, t, n, r = C(this), i = r.entries, o = i.slice();
                for (i.length = 0, n = 0; n < o.length; n++) {
                    for (e = o[n], t = 0; t < n; t++) if (i[t].key > e.key) {
                        i.splice(t, 0, e);
                        break;
                    }
                    t === n && i.push(e);
                }
                r.updateURL();
            },
            forEach: function(e) {
                for (var t, n = C(this).entries, r = p(e, arguments.length > 1 ? arguments[1] : void 0, 3), i = 0; i < n.length; ) r((t = n[i++]).value, t.key, this);
            },
            keys: function() {
                return new W(this, "keys");
            },
            values: function() {
                return new W(this, "values");
            },
            entries: function() {
                return new W(this, "entries");
            }
        }, {
            enumerable: !0
        }), a(z, A, z.entries), a(z, "toString", function() {
            for (var e, t = C(this).entries, n = [], r = 0; r < t.length; ) e = t[r++], 
            n.push(q(e.key) + "=" + q(e.value));
            return n.join("&");
        }, {
            enumerable: !0
        }), u(F, T), r({
            global: !0,
            forced: !o
        }, {
            URLSearchParams: F
        }), o || "function" != typeof S || "function" != typeof E || r({
            global: !0,
            enumerable: !0,
            forced: !0
        }, {
            fetch: function(e) {
                var t, n, r, i = [ e ];
                return arguments.length > 1 && (v(t = arguments[1]) && (n = t.body, 
                g(n) === T && ((r = t.headers ? new E(t.headers) : new E()).has("content-type") || r.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), 
                t = y(t, {
                    body: h(0, String(n)),
                    headers: h(0, r)
                }))), i.push(t)), S.apply(this, i);
            }
        }), e.exports = {
            URLSearchParams: F,
            getState: C
        };
    },
    46: function(e, t, n) {
        var r, i, o, a = n(124), c = n(27), u = n(30), s = n(32), d = n(31), f = n(65), l = n(69), p = n(56), g = "Object already initialized", b = c.WeakMap;
        if (a || f.state) {
            var v = f.state || (f.state = new b()), y = v.get, h = v.has, m = v.set;
            r = function(e, t) {
                if (h.call(v, e)) throw new TypeError(g);
                return t.facade = e, m.call(v, e, t), t;
            }, i = function(e) {
                return y.call(v, e) || {};
            }, o = function(e) {
                return h.call(v, e);
            };
        } else {
            var O = l("state");
            p[O] = !0, r = function(e, t) {
                if (d(e, O)) throw new TypeError(g);
                return t.facade = e, s(e, O, t), t;
            }, i = function(e) {
                return d(e, O) ? e[O] : {};
            }, o = function(e) {
                return d(e, O);
            };
        }
        e.exports = {
            set: r,
            get: i,
            has: o,
            enforce: function(e) {
                return o(e) ? i(e) : r(e, {});
            },
            getterFor: function(e) {
                return function(t) {
                    var n;
                    if (!u(t) || (n = i(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                    return n;
                };
            }
        };
    },
    460: function(e, t, n) {
        var r = n(29), i = n(23), o = n(18), a = i("iterator");
        e.exports = !r(function() {
            var e = new URL("b?a=1&b=2&c=3", "http://a"), t = e.searchParams, n = "";
            return e.pathname = "c%20d", t.forEach(function(e, r) {
                t.delete("b"), n += r + e;
            }), o && !e.toJSON || !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[a] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host;
        });
    },
    48: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return f;
        }), n.d(t, "b", function() {
            return p;
        });
        var r = n(11), i = n.n(r), o = n(0), a = {
            buckets: [ {
                max: 5,
                increment: .5
            } ]
        }, c = {
            buckets: [ {
                max: 20,
                increment: .1
            } ]
        }, u = {
            buckets: [ {
                max: 20,
                increment: .01
            } ]
        }, s = {
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
        }, d = {
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
        function f(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, r = parseFloat(e);
            return isNaN(r) && (r = ""), {
                low: "" === r ? "" : l(e, a, n),
                med: "" === r ? "" : l(e, c, n),
                high: "" === r ? "" : l(e, u, n),
                auto: "" === r ? "" : l(e, d, n),
                dense: "" === r ? "" : l(e, s, n),
                custom: "" === r ? "" : l(e, t, n)
            };
        }
        function l(e, t, n) {
            var r = "";
            if (!p(t)) return r;
            var o = t.buckets.reduce(function(e, t) {
                return e.max > t.max ? e : t;
            }, {
                max: 0
            }), a = 0, c = i()(t.buckets, function(t) {
                if (e > o.max * n) {
                    var i = t.precision;
                    void 0 === i && (i = 2), r = (t.max * n).toFixed(i);
                } else {
                    if (e <= t.max * n && e >= a * n) return t.min = a, t;
                    a = t.max;
                }
            });
            return c && (r = function(e, t, n) {
                var r = void 0 !== t.precision ? t.precision : 2, i = t.increment * n, o = t.min * n, a = Math.pow(10, r + 2), c = (e * a - o * a) / (i * a), u = Math.floor(c) * i + o;
                return (u = Number(u.toFixed(10))).toFixed(r);
            }(e, c, n)), r;
        }
        function p(e) {
            if (Object(o.isEmpty)(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
            var t = !0;
            return e.buckets.forEach(function(e) {
                e.max && e.increment || (t = !1);
            }), t;
        }
    },
    49: function(e, t, n) {
        var r = n(83), i = n(51);
        e.exports = function(e) {
            return r(i(e));
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
                BIDDER_ERROR: "bidderError",
                SET_TARGETING: "setTargeting",
                BEFORE_REQUEST_BIDS: "beforeRequestBids",
                BEFORE_BIDDER_HTTP: "beforeBidderHttp",
                REQUEST_BIDS: "requestBids",
                ADD_AD_UNITS: "addAdUnits",
                AD_RENDER_FAILED: "adRenderFailed",
                AD_RENDER_SUCCEEDED: "adRenderSucceeded",
                TCF2_ENFORCEMENT: "tcf2Enforcement",
                AUCTION_DEBUG: "auctionDebug",
                BID_VIEWABLE: "bidViewable",
                STALE_RENDER: "staleRender"
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
                FORMAT: "hb_format",
                UUID: "hb_uuid",
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
    50: function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1);
        };
    },
    51: function(e, t) {
        e.exports = function(e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e;
        };
    },
    52: function(e, t, n) {
        var r = n(51);
        e.exports = function(e) {
            return Object(r(e));
        };
    },
    53: function(e, t, n) {
        var r = n(64), i = Math.min;
        e.exports = function(e) {
            return e > 0 ? i(r(e), 9007199254740991) : 0;
        };
    },
    54: function(e, t) {
        e.exports = function() {};
    },
    55: function(e, t, n) {
        var r = n(26);
        e.exports = r;
    },
    56: function(e, t) {
        e.exports = {};
    },
    57: function(e, t, n) {
        var r = n(58), i = n(41), o = n(23)("iterator");
        e.exports = function(e) {
            if (null != e) return e[o] || e["@@iterator"] || i[r(e)];
        };
    },
    58: function(e, t, n) {
        var r = n(67), i = n(50), o = n(23)("toStringTag"), a = "Arguments" == i(function() {
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
    59: function(e, t, n) {
        var r = n(67), i = n(34).f, o = n(32), a = n(31), c = n(123), u = n(23)("toStringTag");
        e.exports = function(e, t, n, s) {
            if (e) {
                var d = n ? e : e.prototype;
                a(d, u) || i(d, u, {
                    configurable: !0,
                    value: t
                }), s && !r && o(d, "toString", c);
            }
        };
    },
    60: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return p;
        });
        var r = n(0), i = n(3), o = n(12), a = n.n(o), c = n(7);
        function u(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == n) return;
                var r, i, o = [], a = !0, c = !1;
                try {
                    for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), 
                    !t || o.length !== t); a = !0);
                } catch (e) {
                    c = !0, i = e;
                } finally {
                    try {
                        a || null == n.return || n.return();
                    } finally {
                        if (c) throw i;
                    }
                }
                return o;
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
        i.b.setDefaults({
            userSync: Object(r.deepClone)({
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
        var l = !Object(r.isSafariBrowser)() && f.cookiesAreEnabled(), p = function(e) {
            var t = {}, n = {
                image: [],
                iframe: []
            }, o = new Set(), c = {}, s = {
                image: !0,
                iframe: !1
            }, f = e.config;
            function l() {
                if (f.syncEnabled && e.browserSupportsCookies) {
                    try {
                        !function() {
                            if (!s.iframe) return;
                            p(n.iframe, function(e) {
                                var t = u(e, 2), i = t[0], o = t[1];
                                Object(r.logMessage)("Invoking iframe user sync for bidder: ".concat(i)), 
                                Object(r.insertUserSyncIframe)(o), function(e, t) {
                                    e.image = e.image.filter(function(e) {
                                        return e[0] !== t;
                                    });
                                }(n, i);
                            });
                        }(), function() {
                            if (!s.image) return;
                            p(n.image, function(e) {
                                var t = u(e, 2), n = t[0], i = t[1];
                                Object(r.logMessage)("Invoking image pixel user sync for bidder: ".concat(n)), 
                                Object(r.triggerPixel)(i);
                            });
                        }();
                    } catch (e) {
                        return Object(r.logError)("Error firing user syncs", e);
                    }
                    n = {
                        image: [],
                        iframe: []
                    };
                }
            }
            function p(e, t) {
                Object(r.shuffle)(e).forEach(function(e) {
                    t(e), o.add(e[0]);
                });
            }
            function g(e, t) {
                var n = f.filterSettings;
                if (function(e, t) {
                    if (e.all && e[t]) return Object(r.logWarn)('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), 
                    !1;
                    var n = e.all ? e.all : e[t], i = e.all ? "all" : t;
                    if (!n) return !1;
                    var o = n.filter, a = n.bidders;
                    if (o && "include" !== o && "exclude" !== o) return Object(r.logWarn)('UserSync "filterSettings.'.concat(i, ".filter\" setting '").concat(o, "' is not a valid option; use either 'include' or 'exclude'.")), 
                    !1;
                    if ("*" !== a && !(Array.isArray(a) && a.length > 0 && a.every(function(e) {
                        return Object(r.isStr)(e) && "*" !== e;
                    }))) return Object(r.logWarn)('Detected an invalid setup in userSync "filterSettings.'.concat(i, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), 
                    !1;
                    return !0;
                }(n, e)) {
                    s[e] = !0;
                    var i = n.all ? n.all : n[e], o = "*" === i.bidders ? [ t ] : i.bidders;
                    return {
                        include: function(e, t) {
                            return !a()(e, t);
                        },
                        exclude: function(e, t) {
                            return a()(e, t);
                        }
                    }[i.filter || "include"](o, t);
                }
                return !s[e];
            }
            return i.b.getConfig("userSync", function(e) {
                if (e.userSync) {
                    var t = e.userSync.filterSettings;
                    Object(r.isPlainObject)(t) && (t.image || t.all || (e.userSync.filterSettings.image = {
                        bidders: "*",
                        filter: "include"
                    }));
                }
                f = d(f, e.userSync);
            }), t.registerSync = function(e, i, a) {
                return o.has(i) ? Object(r.logMessage)('already fired syncs for "'.concat(i, '", ignoring registerSync call')) : f.syncEnabled && Object(r.isArray)(n[e]) ? i ? 0 !== f.syncsPerBidder && Number(c[i]) >= f.syncsPerBidder ? Object(r.logWarn)('Number of user syncs exceeded for "'.concat(i, '"')) : t.canBidderRegisterSync(e, i) ? (n[e].push([ i, a ]), 
                void (c = function(e, t) {
                    return e[t] ? e[t] += 1 : e[t] = 1, e;
                }(c, i))) : Object(r.logWarn)('Bidder "'.concat(i, '" not permitted to register their "').concat(e, '" userSync pixels.')) : Object(r.logWarn)("Bidder is required for registering sync") : Object(r.logWarn)('User sync type "'.concat(e, '" not supported'));
            }, t.syncUsers = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                if (e) return setTimeout(l, Number(e));
                l();
            }, t.triggerUserSyncs = function() {
                f.enableOverride && t.syncUsers();
            }, t.canBidderRegisterSync = function(e, t) {
                return !f.filterSettings || !g(e, t);
            }, t;
        }({
            config: i.b.getConfig("userSync"),
            browserSupportsCookies: l
        });
    },
    61: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            o.adServers = o.adServers || {}, o.adServers[e] = o.adServers[e] || {}, 
            Object.keys(t).forEach(function(n) {
                o.adServers[e][n] ? Object(i.logWarn)("Attempting to add an already registered function property ".concat(n, " for AdServer ").concat(e, ".")) : o.adServers[e][n] = t[n];
            });
        };
        var r = n(14), i = n(0), o = Object(r.a)();
    },
    62: function(e, t, n) {
        var r = n(30);
        e.exports = function(e, t) {
            if (!r(e)) return e;
            var n, i;
            if (t && "function" == typeof (n = e.toString) && !r(i = n.call(e))) return i;
            if ("function" == typeof (n = e.valueOf) && !r(i = n.call(e))) return i;
            if (!t && "function" == typeof (n = e.toString) && !r(i = n.call(e))) return i;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    63: function(e, t, n) {
        var r = n(25), i = n(83), o = n(52), a = n(53), c = n(110), u = [].push, s = function(e) {
            var t = 1 == e, n = 2 == e, s = 3 == e, d = 4 == e, f = 6 == e, l = 7 == e, p = 5 == e || f;
            return function(g, b, v, y) {
                for (var h, m, O = o(g), j = i(O), S = r(b, v, 3), E = a(j.length), A = 0, T = y || c, I = t ? T(g, E) : n || l ? T(g, 0) : void 0; E > A; A++) if ((p || A in j) && (m = S(h = j[A], A, O), 
                e)) if (t) I[A] = m; else if (m) switch (e) {
                  case 3:
                    return !0;

                  case 5:
                    return h;

                  case 6:
                    return A;

                  case 2:
                    u.call(I, h);
                } else switch (e) {
                  case 4:
                    return !1;

                  case 7:
                    u.call(I, h);
                }
                return f ? -1 : s || d ? d : I;
            };
        };
        e.exports = {
            forEach: s(0),
            map: s(1),
            filter: s(2),
            some: s(3),
            every: s(4),
            find: s(5),
            findIndex: s(6),
            filterOut: s(7)
        };
    },
    64: function(e, t) {
        var n = Math.ceil, r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e);
        };
    },
    65: function(e, t, n) {
        var r = n(27), i = n(112), o = "__core-js_shared__", a = r[o] || i(o, {});
        e.exports = a;
    },
    66: function(e, t) {
        var n = 0, r = Math.random();
        e.exports = function(e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36);
        };
    },
    67: function(e, t, n) {
        var r = {};
        r[n(23)("toStringTag")] = "z", e.exports = "[object z]" === String(r);
    },
    68: function(e, t) {
        e.exports = function(e, t, n) {
            if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return e;
        };
    },
    69: function(e, t, n) {
        var r = n(86), i = n(66), o = r("keys");
        e.exports = function(e) {
            return o[e] || (o[e] = i(e));
        };
    },
    7: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return u;
        }), n.d(t, "d", function() {
            return d;
        }), t.a = function(e) {
            return s({
                moduleName: e,
                moduleType: "core"
            });
        }, t.b = function(e, t) {
            return s({
                gvlid: e,
                moduleName: t
            });
        };
        var r = n(9), i = n(0), o = n(12), a = n.n(o), c = [ "core", "prebid-module" ], u = [];
        function s() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.gvlid, n = e.moduleName, r = e.moduleType;
            function o(e) {
                if (a()(c, r)) {
                    return e({
                        valid: !0
                    });
                }
                var o;
                return d(t, n, {
                    hasEnforcementHook: !1
                }, function(t) {
                    if (t && t.hasEnforcementHook) o = e(t); else {
                        var n = {
                            hasEnforcementHook: !1,
                            valid: Object(i.hasDeviceAccess)()
                        };
                        o = e(n);
                    }
                }), o;
            }
            var s = function(e, t, n, r, i, a) {
                var c = function(o) {
                    if (o && o.valid) {
                        var a = i && "" !== i ? " ;domain=".concat(encodeURIComponent(i)) : "", c = n && "" !== n ? " ;expires=".concat(n) : "", u = null != r && "none" == r.toLowerCase() ? "; Secure" : "";
                        document.cookie = "".concat(e, "=").concat(encodeURIComponent(t)).concat(c, "; path=/").concat(a).concat(r ? "; SameSite=".concat(r) : "").concat(u);
                    }
                };
                if (!a || "function" != typeof a) return o(c);
                u.push(function() {
                    var e = o(c);
                    a(e);
                });
            }, f = function(e, t) {
                var n = function(t) {
                    if (t && t.valid) {
                        var n = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
                        return n ? decodeURIComponent(n[2]) : null;
                    }
                    return null;
                };
                if (!t || "function" != typeof t) return o(n);
                u.push(function() {
                    var e = o(n);
                    t(e);
                });
            }, l = function(e) {
                var t = function(e) {
                    if (e && e.valid) try {
                        return localStorage.setItem("prebid.cookieTest", "1"), "1" === localStorage.getItem("prebid.cookieTest");
                    } catch (e) {} finally {
                        try {
                            localStorage.removeItem("prebid.cookieTest");
                        } catch (e) {}
                    }
                    return !1;
                };
                if (!e || "function" != typeof e) return o(t);
                u.push(function() {
                    var n = o(t);
                    e(n);
                });
            }, p = function(e) {
                var t = function(e) {
                    return !(!e || !e.valid) && (!!Object(i.checkCookieSupport)() || (window.document.cookie = "prebid.cookieTest", 
                    -1 !== window.document.cookie.indexOf("prebid.cookieTest")));
                };
                if (!e || "function" != typeof e) return o(t);
                u.push(function() {
                    var n = o(t);
                    e(n);
                });
            }, g = function(e, t, n) {
                var r = function(n) {
                    n && n.valid && y() && window.localStorage.setItem(e, t);
                };
                if (!n || "function" != typeof n) return o(r);
                u.push(function() {
                    var e = o(r);
                    n(e);
                });
            }, b = function(e, t) {
                var n = function(t) {
                    return t && t.valid && y() ? window.localStorage.getItem(e) : null;
                };
                if (!t || "function" != typeof t) return o(n);
                u.push(function() {
                    var e = o(n);
                    t(e);
                });
            }, v = function(e, t) {
                var n = function(t) {
                    t && t.valid && y() && window.localStorage.removeItem(e);
                };
                if (!t || "function" != typeof t) return o(n);
                u.push(function() {
                    var e = o(n);
                    t(e);
                });
            }, y = function(e) {
                var t = function(e) {
                    if (e && e.valid) try {
                        return !!window.localStorage;
                    } catch (e) {
                        Object(i.logError)("Local storage api disabled");
                    }
                    return !1;
                };
                if (!e || "function" != typeof e) return o(t);
                u.push(function() {
                    var n = o(t);
                    e(n);
                });
            }, h = function(e, t) {
                var n = function(t) {
                    if (t && t.valid) {
                        var n = [];
                        if (Object(i.hasDeviceAccess)()) for (var r = document.cookie.split(";"); r.length; ) {
                            var o = r.pop(), a = o.indexOf("=");
                            a = a < 0 ? o.length : a, decodeURIComponent(o.slice(0, a).replace(/^\s+/, "")).indexOf(e) >= 0 && n.push(decodeURIComponent(o.slice(a + 1)));
                        }
                        return n;
                    }
                };
                if (!t || "function" != typeof t) return o(n);
                u.push(function() {
                    var e = o(n);
                    t(e);
                });
            };
            return {
                setCookie: s,
                getCookie: f,
                localStorageIsEnabled: l,
                cookiesAreEnabled: p,
                setDataInLocalStorage: g,
                getDataFromLocalStorage: b,
                removeDataFromLocalStorage: v,
                hasLocalStorage: y,
                findSimilarCookies: h
            };
        }
        var d = Object(r.b)("async", function(e, t, n, r) {
            r(n);
        }, "validateStorageEnforcement");
    },
    70: function(e, t, n) {
        var r, i = n(17), o = n(127), a = n(93), c = n(56), u = n(130), s = n(85), d = n(69), f = d("IE_PROTO"), l = function() {}, p = function(e) {
            return "<script>" + e + "</" + "script>";
        }, g = function() {
            try {
                r = document.domain && new ActiveXObject("htmlfile");
            } catch (e) {}
            var e, t;
            g = r ? function(e) {
                e.write(p("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t;
            }(r) : ((t = s("iframe")).style.display = "none", u.appendChild(t), 
            t.src = String("javascript:"), (e = t.contentWindow.document).open(), 
            e.write(p("document.F=Object")), e.close(), e.F);
            for (var n = a.length; n--; ) delete g.prototype[a[n]];
            return g();
        };
        c[f] = !0, e.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (l.prototype = i(e), n = new l(), l.prototype = null, 
            n[f] = e) : n = g(), void 0 === t ? n : o(n, t);
        };
    },
    71: function(e, t, n) {
        var r = n(32);
        e.exports = function(e, t, n, i) {
            i && i.enumerable ? e[t] = n : r(e, t, n);
        };
    },
    72: function(e, t, n) {
        "use strict";
        var r = n(16), i = n(95), o = n(97), a = n(132), c = n(59), u = n(32), s = n(71), d = n(23), f = n(18), l = n(41), p = n(96), g = p.IteratorPrototype, b = p.BUGGY_SAFARI_ITERATORS, v = d("iterator"), y = "keys", h = "values", m = "entries", O = function() {
            return this;
        };
        e.exports = function(e, t, n, d, p, j, S) {
            i(n, t, d);
            var E, A, T, I = function(e) {
                if (e === p && U) return U;
                if (!b && e in R) return R[e];
                switch (e) {
                  case y:
                  case h:
                  case m:
                    return function() {
                        return new n(this, e);
                    };
                }
                return function() {
                    return new n(this);
                };
            }, w = t + " Iterator", C = !1, R = e.prototype, _ = R[v] || R["@@iterator"] || p && R[p], U = !b && _ || I(p), B = "Array" == t && R.entries || _;
            if (B && (E = o(B.call(new e())), g !== Object.prototype && E.next && (f || o(E) === g || (a ? a(E, g) : "function" != typeof E[v] && u(E, v, O)), 
            c(E, w, !0, !0), f && (l[w] = O))), p == h && _ && _.name !== h && (C = !0, 
            U = function() {
                return _.call(this);
            }), f && !S || R[v] === U || u(R, v, U), l[t] = U, p) if (A = {
                values: I(h),
                keys: j ? U : I(y),
                entries: I(m)
            }, S) for (T in A) (b || C || !(T in R)) && s(R, T, A[T]); else r({
                target: t,
                proto: !0,
                forced: b || C
            }, A);
            return A;
        };
    },
    73: function(e, t, n) {
        var r = n(17), i = n(57);
        e.exports = function(e) {
            var t = i(e);
            if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
            return r(t.call(e));
        };
    },
    74: function(e, t, n) {
        var r = n(161);
        e.exports = r;
    },
    75: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a;
        });
        var r = n(0), i = {};
        function o(e, t, n) {
            var r = function(e, t) {
                var n = i[e] = i[e] || {
                    bidders: {}
                };
                return t ? n.bidders[t] = n.bidders[t] || {} : n;
            }(e, n);
            return r[t] = (r[t] || 0) + 1, r[t];
        }
        var a = {
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
                return Object(r.deepAccess)(i, "".concat(e, ".requestsCounter")) || 0;
            },
            getBidderRequestsCounter: function(e, t) {
                return Object(r.deepAccess)(i, "".concat(e, ".bidders.").concat(t, ".requestsCounter")) || 0;
            },
            getBidderWinsCounter: function(e, t) {
                return Object(r.deepAccess)(i, "".concat(e, ".bidders.").concat(t, ".winsCounter")) || 0;
            }
        };
    },
    79: function(e, t, n) {
        var r = n(220);
        e.exports = r;
    },
    8: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "gdprDataHandler", function() {
            return x;
        }), n.d(t, "uspDataHandler", function() {
            return D;
        }), n.d(t, "coppaDataHandler", function() {
            return k;
        }), n.d(t, "clientTestAdapters", function() {
            return N;
        }), n.d(t, "allS2SBidders", function() {
            return P;
        }), t.getAllS2SBidders = q, t.setS2STestingModule = function(e) {
            A = e;
        };
        var r = n(0), i = n(100), o = n(39), a = n(1), c = n(4), u = n(3), s = n(9), d = n(12), f = n.n(d), l = n(11), p = n.n(l), g = n(75), b = n(19);
        function v(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function y(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? v(Object(n), !0).forEach(function(t) {
                    h(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function h(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function m(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == n) return;
                var r, i, o = [], a = !0, c = !1;
                try {
                    for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), 
                    !t || o.length !== t); a = !0);
                } catch (e) {
                    c = !0, i = e;
                } finally {
                    try {
                        a || null == n.return || n.return();
                    } finally {
                        if (c) throw i;
                    }
                }
                return o;
            }(e, t) || j(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function O(e) {
            return function(e) {
                if (Array.isArray(e)) return S(e);
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
            }(e) || j(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function j(e, t) {
            if (e) {
                if ("string" == typeof e) return S(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), 
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? S(e, t) : void 0;
            }
        }
        function S(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function E() {
            return (E = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        var A, T = n(5), I = n(10), w = {}, C = w.bidderRegistry = {}, R = w.aliasRegistry = {}, _ = [];
        u.b.getConfig("s2sConfig", function(e) {
            e && e.s2sConfig && (_ = Object(r.isArray)(e.s2sConfig) ? e.s2sConfig : [ e.s2sConfig ]);
        });
        var U = {};
        var B = Object(s.b)("sync", function(e) {
            var t = e.bidderCode, n = e.auctionId, a = e.bidderRequestId, c = e.adUnits, u = e.labels, s = e.src;
            return c.reduce(function(e, c) {
                var d = Object(i.b)(Object(i.a)(c, u), c.mediaTypes, c.sizes), f = d.active, l = d.mediaTypes, p = d.filterResults;
                return f ? p && Object(r.logInfo)('Size mapping filtered adUnit "'.concat(c.code, '" banner sizes from '), p.before, "to ", p.after) : Object(r.logInfo)('Size mapping disabled adUnit "'.concat(c.code, '"')), 
                f && e.push(c.bids.filter(function(e) {
                    return e.bidder === t;
                }).reduce(function(e, t) {
                    var d = c.nativeParams || Object(r.deepAccess)(c, "mediaTypes.native");
                    d && (t = E({}, t, {
                        nativeParams: Object(o.h)(d)
                    })), t = E({}, t, Object(r.getDefinedParams)(c, [ "ortb2Imp", "mediaType", "renderer", "storedAuctionResponse" ]));
                    var f = Object(i.b)(Object(i.a)(t, u), l), p = f.active, b = f.mediaTypes, v = f.filterResults;
                    return p ? v && Object(r.logInfo)('Size mapping filtered adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '" banner sizes from '), v.before, "to ", v.after) : Object(r.logInfo)('Size mapping deactivated adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '"')), 
                    Object(r.isValidMediaTypes)(b) ? t = E({}, t, {
                        mediaTypes: b
                    }) : Object(r.logError)("mediaTypes is not correctly configured for adunit ".concat(c.code)), 
                    p && e.push(E({}, t, {
                        adUnitCode: c.code,
                        transactionId: c.transactionId,
                        sizes: Object(r.deepAccess)(b, "banner.sizes") || Object(r.deepAccess)(b, "video.playerSize") || [],
                        bidId: t.bid_id || Object(r.getUniqueIdentifierStr)(),
                        bidderRequestId: a,
                        auctionId: n,
                        src: s,
                        bidRequestsCount: g.a.getRequestsCounter(c.code),
                        bidderRequestsCount: g.a.getBidderRequestsCounter(c.code, t.bidder),
                        bidderWinsCount: g.a.getBidderWinsCounter(c.code, t.bidder)
                    })), e;
                }, [])), e;
            }, []).reduce(r.flatten, []).filter(function(e) {
                return "" !== e;
            });
        }, "getBids");
        var x = {
            consentData: null,
            setConsentData: function(e) {
                x.consentData = e;
            },
            getConsentData: function() {
                return x.consentData;
            }
        }, D = {
            consentData: null,
            setConsentData: function(e) {
                D.consentData = e;
            },
            getConsentData: function() {
                return D.consentData;
            }
        }, k = {
            getCoppa: function() {
                return !!u.b.getConfig("coppa");
            }
        }, N = [], P = [];
        function q() {
            w.s2STestingEnabled = !1, _.forEach(function(e) {
                e && e.enabled && e.bidders && e.bidders.length && P.push.apply(P, O(e.bidders));
            });
        }
        function M(e) {
            return e && e.enabled && e.testing && A;
        }
        function G(e, t, n) {
            try {
                var i = C[e].getSpec();
                i && i[t] && "function" == typeof i[t] && (Object(r.logInfo)("Invoking ".concat(e, ".").concat(t)), 
                u.b.runWithBidder(e, r.bind.call(i[t], i, n)));
            } catch (n) {
                Object(r.logWarn)("Error calling ".concat(t, " of ").concat(e));
            }
        }
        w.makeBidRequests = Object(s.b)("sync", function(e, t, n, i, o) {
            I.emit(T.EVENTS.BEFORE_REQUEST_BIDS, e);
            var a = Object(r.getBidderCodes)(e);
            u.b.getConfig("bidderSequence") === u.a && (a = Object(r.shuffle)(a));
            var c = Object(b.a)(), s = a, d = [];
            0 === P.length && q(), _.forEach(function(t) {
                t && t.enabled && (M(t) && (A.calculateBidSources(t), A.getSourceBidderMap(e, P)[A.CLIENT].forEach(function(e) {
                    f()(N, e) || N.push(e);
                })));
            }), s = a.filter(function(e) {
                return !f()(P, e) || f()(N, e);
            });
            var l = P;
            _.forEach(function(i) {
                if (i && i.enabled) {
                    (function(e) {
                        return Boolean(M(e) && e.testServerOnly);
                    })(i) && function(e, t) {
                        return Boolean(p()(e, function(e) {
                            return p()(e.bids, function(e) {
                                return (e.bidSource || t.bidderControl && t.bidderControl[e.bidder]) && e.finalSource === A.SERVER;
                            });
                        }));
                    }(e, i) && (Object(r.logWarn)("testServerOnly: True.  All client requests will be suppressed."), 
                    s.length = 0);
                    var a = function(e, t) {
                        var n = t.bidders, i = Object(r.deepClone)(e);
                        return i.forEach(function(e) {
                            e.bids = e.bids.filter(function(e) {
                                return f()(n, e.bidder) && (!M(t) || e.finalSource !== A.CLIENT);
                            }).map(function(e) {
                                return e.bid_id = Object(r.getUniqueIdentifierStr)(), 
                                e;
                            });
                        }), i.filter(function(e) {
                            return 0 !== e.bids.length;
                        });
                    }(e, i), u = Object(r.generateUUID)();
                    l.forEach(function(e) {
                        var s = Object(r.getUniqueIdentifierStr)(), f = {
                            bidderCode: e,
                            auctionId: n,
                            bidderRequestId: s,
                            uniquePbsTid: u,
                            bids: B({
                                bidderCode: e,
                                auctionId: n,
                                bidderRequestId: s,
                                adUnits: Object(r.deepClone)(a),
                                labels: o,
                                src: T.S2S.SRC
                            }),
                            auctionStart: t,
                            timeout: i.timeout,
                            src: T.S2S.SRC,
                            refererInfo: c
                        };
                        0 !== f.bids.length && d.push(f);
                    }), a.forEach(function(e) {
                        var t = e.bids.filter(function(e) {
                            return p()(d, function(t) {
                                return p()(t.bids, function(t) {
                                    return t.bidId === e.bid_id;
                                });
                            });
                        });
                        e.bids = t;
                    }), d.forEach(function(e) {
                        void 0 === e.adUnitsS2SCopy && (e.adUnitsS2SCopy = a.filter(function(e) {
                            return e.bids.length > 0;
                        }));
                    });
                }
            });
            var g = function(e) {
                var t = Object(r.deepClone)(e);
                return t.forEach(function(e) {
                    e.bids = e.bids.filter(function(e) {
                        return !N.length || e.finalSource !== A.SERVER;
                    });
                }), t.filter(function(e) {
                    return 0 !== e.bids.length;
                });
            }(e);
            return s.forEach(function(e) {
                var a = Object(r.getUniqueIdentifierStr)(), u = {
                    bidderCode: e,
                    auctionId: n,
                    bidderRequestId: a,
                    bids: B({
                        bidderCode: e,
                        auctionId: n,
                        bidderRequestId: a,
                        adUnits: Object(r.deepClone)(g),
                        labels: o,
                        src: "client"
                    }),
                    auctionStart: t,
                    timeout: i,
                    refererInfo: c
                }, s = C[e];
                s || Object(r.logError)("Trying to make a request for bidder that does not exist: ".concat(e)), 
                s && u.bids && 0 !== u.bids.length && d.push(u);
            }), x.getConsentData() && d.forEach(function(e) {
                e.gdprConsent = x.getConsentData();
            }), D.getConsentData() && d.forEach(function(e) {
                e.uspConsent = D.getConsentData();
            }), d;
        }, "makeBidRequests"), w.callBids = function(e, t, n, i, o, a, s) {
            if (t.length) {
                var d = m(t.reduce(function(e, t) {
                    return e[Number(void 0 !== t.src && t.src === T.S2S.SRC)].push(t), 
                    e;
                }, [ [], [] ]), 2), l = d[0], p = d[1], g = [];
                p.forEach(function(e) {
                    for (var t = -1, n = 0; n < g.length; ++n) if (e.uniquePbsTid === g[n].uniquePbsTid) {
                        t = n;
                        break;
                    }
                    t <= -1 && g.push(e);
                });
                var b = 0, v = Object(r.generateUUID)();
                _.forEach(function(e) {
                    if (e && g[b] && f()(e.bidders, g[b].bidderCode)) {
                        var t = Object(c.b)(a, o ? {
                            request: o.request.bind(null, "s2s"),
                            done: o.done
                        } : void 0), u = e.bidders, s = C[e.adapter], d = g[b].uniquePbsTid, l = g[b].adUnitsS2SCopy, h = p.filter(function(e) {
                            return e.uniquePbsTid === d;
                        });
                        if (s) {
                            var m = {
                                tid: v,
                                ad_units: l,
                                s2sConfig: e
                            };
                            if (m.ad_units.length) {
                                var O = h.map(function(e) {
                                    return e.start = Object(r.timestamp)(), i.bind(e);
                                }), j = m.ad_units.reduce(function(e, t) {
                                    return e.concat((t.bids || []).reduce(function(e, t) {
                                        return e.concat(t.bidder);
                                    }, []));
                                }, []);
                                Object(r.logMessage)("CALLING S2S HEADER BIDDERS ==== ".concat(u.filter(function(e) {
                                    return f()(j, e);
                                }).join(","))), h.forEach(function(e) {
                                    I.emit(T.EVENTS.BID_REQUESTED, y(y({}, e), {}, {
                                        tid: v
                                    }));
                                }), s.callBids(m, p, function(e, t) {
                                    var i = Object(r.getBidderRequest)(p, t.bidderCode, e);
                                    i && n.call(i, e, t);
                                }, function() {
                                    return O.forEach(function(e) {
                                        return e();
                                    });
                                }, t);
                            }
                        } else Object(r.logError)("missing " + e.adapter);
                        b++;
                    }
                }), l.forEach(function(e) {
                    e.start = Object(r.timestamp)();
                    var t = C[e.bidderCode];
                    u.b.runWithBidder(e.bidderCode, function() {
                        Object(r.logMessage)("CALLING BIDDER"), I.emit(T.EVENTS.BID_REQUESTED, e);
                    });
                    var d = Object(c.b)(a, o ? {
                        request: o.request.bind(null, e.bidderCode),
                        done: o.done
                    } : void 0), f = i.bind(e);
                    try {
                        u.b.runWithBidder(e.bidderCode, r.bind.call(t.callBids, t, e, n.bind(e), f, d, s, u.b.callbackWithBidder(e.bidderCode)));
                    } catch (t) {
                        Object(r.logError)("".concat(e.bidderCode, " Bid Adapter emitted an uncaught error when parsing their bidRequest"), {
                            e: t,
                            bidRequest: e
                        }), f();
                    }
                });
            } else Object(r.logWarn)("callBids executed with no bidRequests.  Were they filtered by labels or sizing?");
        }, w.videoAdapters = [], w.registerBidAdapter = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = n.supportedMediaTypes, a = void 0 === i ? [] : i;
            e && t ? "function" == typeof e.callBids ? (C[t] = e, f()(a, "video") && w.videoAdapters.push(t), 
            f()(a, "native") && o.f.push(t)) : Object(r.logError)("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : Object(r.logError)("bidAdapter or bidderCode not specified");
        }, w.aliasBidAdapter = function(e, t, n) {
            if (void 0 === C[t]) {
                var i = C[e];
                if (void 0 === i) {
                    var c = [];
                    _.forEach(function(n) {
                        if (n.bidders && n.bidders.length) {
                            var r = n && n.bidders;
                            n && f()(r, t) ? R[t] = e : c.push(e);
                        }
                    }), c.forEach(function(e) {
                        Object(r.logError)('bidderCode "' + e + '" is not an existing bidder.', "adapterManager.aliasBidAdapter");
                    });
                } else try {
                    var u, s = function(e) {
                        var t = [];
                        return f()(w.videoAdapters, e) && t.push("video"), f()(o.f, e) && t.push("native"), 
                        t;
                    }(e);
                    if (i.constructor.prototype != Object.prototype) (u = new i.constructor()).setBidderCode(t); else {
                        var d = i.getSpec(), l = n && n.gvlid, p = n && n.skipPbsAliasing;
                        u = Object(a.newBidder)(E({}, d, {
                            code: t,
                            gvlid: l,
                            skipPbsAliasing: p
                        })), R[t] = e;
                    }
                    w.registerBidAdapter(u, t, {
                        supportedMediaTypes: s
                    });
                } catch (t) {
                    Object(r.logError)(e + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter");
                }
            } else Object(r.logMessage)('alias name "' + t + '" has been already specified.');
        }, w.registerAnalyticsAdapter = function(e) {
            var t = e.adapter, n = e.code, i = e.gvlid;
            t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, U[n] = {
                adapter: t,
                gvlid: i
            }) : Object(r.logError)('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function')) : Object(r.logError)("Prebid Error: analyticsAdapter or analyticsCode not specified");
        }, w.enableAnalytics = function(e) {
            Object(r.isArray)(e) || (e = [ e ]), Object(r._each)(e, function(e) {
                var t = U[e.provider].adapter;
                t ? t.enableAnalytics(e) : Object(r.logError)("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider, "."));
            });
        }, w.getBidAdapter = function(e) {
            return C[e];
        }, w.getAnalyticsAdapter = function(e) {
            return U[e];
        }, w.callTimedOutBidders = function(e, t, n) {
            t = t.map(function(t) {
                return t.params = Object(r.getUserConfiguredParams)(e, t.adUnitCode, t.bidder), 
                t.timeout = n, t;
            }), t = Object(r.groupBy)(t, "bidder"), Object.keys(t).forEach(function(e) {
                G(e, "onTimeout", t[e]);
            });
        }, w.callBidWonBidder = function(e, t, n) {
            t.params = Object(r.getUserConfiguredParams)(n, t.adUnitCode, t.bidder), 
            g.a.incrementBidderWinsCounter(t.adUnitCode, t.bidder), G(e, "onBidWon", t);
        }, w.callSetTargetingBidder = function(e, t) {
            G(e, "onSetTargeting", t);
        }, w.callBidViewableBidder = function(e, t) {
            G(e, "onBidViewable", t);
        }, w.callBidderError = function(e, t, n) {
            G(e, "onBidderError", {
                error: t,
                bidderRequest: n
            });
        }, t.default = w;
    },
    80: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "adUnitSetupChecks", function() {
            return K;
        }), n.d(t, "checkAdUnitSetup", function() {
            return J;
        }), t.executeCallbacks = Z;
        var r = n(14), i = n(0), o = n(230), a = n(60), c = n(3), u = n(22), s = n(40), d = n(9), f = n(231), l = n(12), p = n.n(l), g = n(75), b = n(13), v = n(43), y = n(7);
        function h(e) {
            return function(e) {
                if (Array.isArray(e)) return m(e);
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
            }(e) || function(e, t) {
                if (!e) return;
                if ("string" == typeof e) return m(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t);
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function m(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function O() {
            return (O = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        var j = Object(r.a)(), S = n(5), E = n(8).default, A = n(10), T = a.a.triggerUserSyncs, I = S.EVENTS, w = I.ADD_AD_UNITS, C = I.BID_WON, R = I.REQUEST_BIDS, _ = I.SET_TARGETING, U = I.AD_RENDER_FAILED, B = I.AD_RENDER_SUCCEEDED, x = I.STALE_RENDER, D = S.AD_RENDER_FAILED_REASON, k = D.PREVENT_WRITING_ON_MAIN_DOCUMENT, N = D.NO_AD, P = D.EXCEPTION, q = D.CANNOT_FIND_AD, M = D.MISSING_DOC_OR_ADID, G = {
            bidWon: function(e) {
                var t = u.a.getBidsRequested().map(function(e) {
                    return e.bids.map(function(e) {
                        return e.adUnitCode;
                    });
                }).reduce(i.flatten).filter(i.uniques);
                if (!Object(i.contains)(t, e)) return void Object(i.logError)('The "' + e + '" placement is not defined.');
                return !0;
            }
        };
        function L(e, t, n) {
            e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, 
            e.defaultView.frameElement.height = n);
        }
        function W(e, t) {
            var n = [];
            return Object(i.isArray)(e) && (t ? e.length === t : e.length > 0) && (e.every(function(e) {
                return Object(i.isArrayOfNums)(e, 2);
            }) ? n = e : Object(i.isArrayOfNums)(e, 2) && n.push(e)), n;
        }
        function F(e) {
            var t = Object(i.deepClone)(e), n = t.mediaTypes.banner, r = W(n.sizes);
            return r.length > 0 ? (n.sizes = r, t.sizes = r) : (Object(i.logError)("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."), 
            delete t.mediaTypes.banner), t;
        }
        function z(e) {
            var t = Object(i.deepClone)(e), n = t.mediaTypes.video;
            if (n.playerSize) {
                var r = "number" == typeof n.playerSize[0] ? 2 : 1, o = W(n.playerSize, r);
                o.length > 0 ? (2 === r && Object(i.logInfo)("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."), 
                n.playerSize = o, t.sizes = o) : (Object(i.logError)("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), 
                delete t.mediaTypes.video.playerSize);
            }
            return t;
        }
        function V(e) {
            var t = Object(i.deepClone)(e), n = t.mediaTypes.native;
            return n.image && n.image.sizes && !Array.isArray(n.image.sizes) && (Object(i.logError)("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), 
            delete t.mediaTypes.native.image.sizes), n.image && n.image.aspect_ratios && !Array.isArray(n.image.aspect_ratios) && (Object(i.logError)("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), 
            delete t.mediaTypes.native.image.aspect_ratios), n.icon && n.icon.sizes && !Array.isArray(n.icon.sizes) && (Object(i.logError)("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), 
            delete t.mediaTypes.native.icon.sizes), t;
        }
        function H(e, t) {
            var n = Object(i.deepAccess)(e, "mediaTypes.".concat(t, ".pos"));
            if (!n || !Object(i.isNumber)(n) || !isFinite(n)) {
                var r = "Value of property 'pos' on ad unit ".concat(e.code, " should be of type: Number");
                Object(i.logWarn)(r), A.emit(S.EVENTS.AUCTION_DEBUG, {
                    type: "WARNING",
                    arguments: r
                }), delete e.mediaTypes[t].pos;
            }
            return e;
        }
        Object(f.a)(), j.bidderSettings = j.bidderSettings || {}, j.libLoaded = !0, 
        j.version = "v6.6.0", Object(i.logInfo)("Prebid.js v6.6.0 loaded"), j.installedModules = j.installedModules || [], 
        j.adUnits = j.adUnits || [], j.triggerUserSyncs = T;
        var K = {
            validateBannerMediaType: F,
            validateVideoMediaType: z,
            validateNativeMediaType: V,
            validateSizes: W
        }, J = Object(d.b)("sync", function(e) {
            var t = [];
            return e.forEach(function(e) {
                var n, r, o, a = e.mediaTypes, c = e.bids;
                if (c && Object(i.isArray)(c)) if (a && 0 !== Object.keys(a).length) {
                    a.banner && (n = F(e), a.banner.hasOwnProperty("pos") && (n = H(n, "banner"))), 
                    a.video && (r = z(n || e), a.video.hasOwnProperty("pos") && (r = H(r, "video"))), 
                    a.native && (o = V(r || (n || e)));
                    var u = O({}, n, r, o);
                    t.push(u);
                } else Object(i.logError)("Detected adUnit.code '".concat(e.code, "' did not have a 'mediaTypes' object defined.  This is a required field for the auction, so this adUnit has been removed.")); else Object(i.logError)("Detected adUnit.code '".concat(e.code, "' did not have 'adUnit.bids' defined or 'adUnit.bids' is not an array. Removing adUnit from auction."));
            }), t;
        }, "checkAdUnitSetup");
        function Y(e) {
            var t = u.a[e]().filter(i.bind.call(i.adUnitsFilter, this, u.a.getAdUnitCodes())), n = u.a.getLastAuctionId();
            return t.map(function(e) {
                return e.adUnitCode;
            }).filter(i.uniques).map(function(e) {
                return t.filter(function(t) {
                    return t.auctionId === n && t.adUnitCode === e;
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
                return O(e, t);
            }, {});
        }
        function Q(e) {
            var t = e.reason, n = e.message, r = e.bid, o = e.id, a = {
                reason: t,
                message: n
            };
            r && (a.bid = r), o && (a.adId = o), Object(i.logError)(n), A.emit(U, a);
        }
        function $(e) {
            var t = e.doc, n = e.bid, r = e.id, i = {
                doc: t
            };
            n && (i.bid = n), r && (i.adId = r), A.emit(B, i);
        }
        function X(e, t, n) {
            var r = t.querySelector(n);
            e.parentNode && e.parentNode === r || Object(i.insertElement)(e, t, n);
        }
        function Z(e, t) {
            function n(e) {
                for (var t; t = e.shift(); ) t();
            }
            n(y.c), n(ee), e.call(this, t);
        }
        j.getAdserverTargetingForAdUnitCodeStr = function(e) {
            if (Object(i.logInfo)("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), 
            e) {
                var t = j.getAdserverTargetingForAdUnitCode(e);
                return Object(i.transformAdServerTargetingObj)(t);
            }
            Object(i.logMessage)("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode");
        }, j.getHighestUnusedBidResponseForAdUnitCode = function(e) {
            if (e) {
                var t = u.a.getAllBidsForAdUnitCode(e).filter(s.a.isUnusedBid).filter(s.a.isBidNotExpired);
                return t.length ? t.reduce(i.getHighestCpm) : {};
            }
            Object(i.logMessage)("Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode");
        }, j.getAdserverTargetingForAdUnitCode = function(e) {
            return j.getAdserverTargeting(e)[e];
        }, j.getAdserverTargeting = function(e) {
            return Object(i.logInfo)("Invoking pbjs.getAdserverTargeting", arguments), 
            s.d.getAllTargeting(e);
        }, j.getNoBids = function() {
            return Object(i.logInfo)("Invoking pbjs.getNoBids", arguments), Y("getNoBids");
        }, j.getNoBidsForAdUnitCode = function(e) {
            return {
                bids: u.a.getNoBids().filter(function(t) {
                    return t.adUnitCode === e;
                })
            };
        }, j.getBidResponses = function() {
            return Object(i.logInfo)("Invoking pbjs.getBidResponses", arguments), 
            Y("getBidsReceived");
        }, j.getBidResponsesForAdUnitCode = function(e) {
            return {
                bids: u.a.getBidsReceived().filter(function(t) {
                    return t.adUnitCode === e;
                })
            };
        }, j.setTargetingForGPTAsync = function(e, t) {
            if (Object(i.logInfo)("Invoking pbjs.setTargetingForGPTAsync", arguments), 
            Object(i.isGptPubadsDefined)()) {
                var n = s.d.getAllTargeting(e);
                s.d.resetPresetTargeting(e, t), s.d.setTargetingForGPT(n, t), Object.keys(n).forEach(function(e) {
                    Object.keys(n[e]).forEach(function(t) {
                        "hb_adid" === t && u.a.setStatusForBids(n[e][t], S.BID_STATUS.BID_TARGETING_SET);
                    });
                }), A.emit(_, n);
            } else Object(i.logError)("window.googletag is not defined on the page");
        }, j.setTargetingForAst = function(e) {
            Object(i.logInfo)("Invoking pbjs.setTargetingForAn", arguments), s.d.isApntagDefined() ? (s.d.setTargetingForAst(e), 
            A.emit(_, s.d.getAllTargeting())) : Object(i.logError)("window.apntag is not defined on the page");
        }, j.renderAd = Object(d.b)("async", function(e, t, n) {
            if (Object(i.logInfo)("Invoking pbjs.renderAd", arguments), Object(i.logMessage)("Calling renderAd with adId :" + t), 
            e && t) try {
                var r = u.a.findBidByAdId(t);
                if (r) {
                    var o = !0;
                    if (r && r.status === S.BID_STATUS.RENDERED && (Object(i.logWarn)("Ad id ".concat(r.adId, " has been rendered before")), 
                    A.emit(x, r), Object(i.deepAccess)(c.b.getConfig("auctionOptions"), "suppressStaleRender") && (o = !1)), 
                    o) {
                        if (r.ad = Object(i.replaceAuctionPrice)(r.ad, r.cpm), r.adUrl = Object(i.replaceAuctionPrice)(r.adUrl, r.cpm), 
                        n && n.clickThrough) {
                            var a = n.clickThrough;
                            r.ad = Object(i.replaceClickThrough)(r.ad, a), r.adUrl = Object(i.replaceClickThrough)(r.adUrl, a);
                        }
                        u.a.addWinningBid(r), A.emit(C, r);
                        var s = r.height, d = r.width, f = r.ad, l = r.mediaType, p = r.adUrl, g = r.renderer, v = document.createComment("Creative ".concat(r.creativeId, " served by ").concat(r.bidder, " Prebid.js Header Bidding"));
                        if (Object(i.insertElement)(v, e, "html"), Object(b.c)(g)) Object(b.b)(g, r), 
                        X(v, e, "html"), $({
                            doc: e,
                            bid: r,
                            id: t
                        }); else if (e === document && !Object(i.inIframe)() || "video" === l) {
                            var y = "Error trying to write ad. Ad render call ad id ".concat(t, " was prevented from writing to the main document.");
                            Q({
                                reason: k,
                                message: y,
                                bid: r,
                                id: t
                            });
                        } else if (f) {
                            if (navigator.userAgent && navigator.userAgent.toLowerCase().indexOf("firefox/") > -1) {
                                var h = /firefox\/([\d\.]+)/, m = navigator.userAgent.toLowerCase().match(h)[1];
                                m && parseInt(m, 10) < 67 && e.open("text/html", "replace");
                            }
                            e.write(f), e.close(), L(e, d, s), X(v, e, "html"), 
                            Object(i.callBurl)(r), $({
                                doc: e,
                                bid: r,
                                id: t
                            });
                        } else if (p) {
                            var O = Object(i.createInvisibleIframe)();
                            O.height = s, O.width = d, O.style.display = "inline", 
                            O.style.overflow = "hidden", O.src = p, Object(i.insertElement)(O, e, "body"), 
                            L(e, d, s), X(v, e, "html"), Object(i.callBurl)(r), 
                            $({
                                doc: e,
                                bid: r,
                                id: t
                            });
                        } else {
                            var j = "Error trying to write ad. No ad for bid response id: ".concat(t);
                            Q({
                                reason: N,
                                message: j,
                                bid: r,
                                id: t
                            });
                        }
                    }
                } else {
                    var E = "Error trying to write ad. Cannot find ad by given id : ".concat(t);
                    Q({
                        reason: q,
                        message: E,
                        id: t
                    });
                }
            } catch (e) {
                var T = "Error trying to write ad Id :".concat(t, " to the page:").concat(e.message);
                Q({
                    reason: P,
                    message: T,
                    id: t
                });
            } else {
                var I = "Error trying to write ad Id :".concat(t, " to the page. Missing document or adId");
                Q({
                    reason: M,
                    message: I,
                    id: t
                });
            }
        }), j.removeAdUnit = function(e) {
            (Object(i.logInfo)("Invoking pbjs.removeAdUnit", arguments), e) ? (Object(i.isArray)(e) ? e : [ e ]).forEach(function(e) {
                for (var t = j.adUnits.length - 1; t >= 0; t--) j.adUnits[t].code === e && j.adUnits.splice(t, 1);
            }) : j.adUnits = [];
        }, j.requestBids = Object(d.b)("async", function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.bidsBackHandler, n = e.timeout, r = e.adUnits, o = e.adUnitCodes, a = e.labels, d = e.auctionId;
            A.emit(R);
            var f = n || c.b.getConfig("bidderTimeout");
            r = r && c.b.convertAdUnitFpd(Object(i.isArray)(r) ? r : [ r ]) || j.adUnits, 
            Object(i.logInfo)("Invoking pbjs.requestBids", arguments);
            var l = [], b = [];
            if (c.b.getConfig("s2sConfig", function(e) {
                e && e.s2sConfig && (l = Array.isArray(e.s2sConfig) ? e.s2sConfig : [ e.s2sConfig ]);
            }), l.forEach(function(e) {
                b.push.apply(b, h(e.bidders));
            }), r = J(r), o && o.length ? r = r.filter(function(e) {
                return p()(o, e.code);
            }) : o = r && r.map(function(e) {
                return e.code;
            }), r.forEach(function(e) {
                var t = Object.keys(e.mediaTypes || {
                    banner: "banner"
                }), n = e.bids.map(function(e) {
                    return e.bidder;
                }), r = E.bidderRegistry, o = b ? n.filter(function(e) {
                    return !p()(b, e);
                }) : n;
                e.transactionId = Object(i.generateUUID)(), o.forEach(function(n) {
                    var o = r[n], a = o && o.getSpec && o.getSpec(), c = a && a.supportedMediaTypes || [ "banner" ];
                    t.some(function(e) {
                        return p()(c, e);
                    }) ? g.a.incrementBidderRequestsCounter(e.code, n) : (Object(i.logWarn)(Object(i.unsupportedBidderMessage)(e, n)), 
                    e.bids = e.bids.filter(function(e) {
                        return e.bidder !== n;
                    }));
                }), g.a.incrementRequestsCounter(e.code);
            }), r && 0 !== r.length) {
                var v = u.a.createAuction({
                    adUnits: r,
                    adUnitCodes: o,
                    callback: t,
                    cbTimeout: f,
                    labels: a,
                    auctionId: d
                }), y = r.length;
                y > 15 && Object(i.logInfo)("Current auction ".concat(v.getAuctionId(), " contains ").concat(y, " adUnits."), r), 
                o.forEach(function(e) {
                    return s.d.setLatestAuctionForAdUnit(e, v.getAuctionId());
                }), v.callBids();
            } else if (Object(i.logMessage)("No adUnits configured. No bids requested."), 
            "function" == typeof t) try {
                t();
            } catch (e) {
                Object(i.logError)("Error executing bidsBackHandler", null, e);
            }
        }), j.requestBids.before(Z, 49), j.addAdUnits = function(e) {
            Object(i.logInfo)("Invoking pbjs.addAdUnits", arguments), j.adUnits.push.apply(j.adUnits, c.b.convertAdUnitFpd(Object(i.isArray)(e) ? e : [ e ])), 
            A.emit(w);
        }, j.onEvent = function(e, t, n) {
            Object(i.logInfo)("Invoking pbjs.onEvent", arguments), Object(i.isFn)(t) ? !n || G[e].call(null, n) ? A.on(e, t, n) : Object(i.logError)('The id provided is not valid for event "' + e + '" and no handler was set.') : Object(i.logError)('The event handler provided is not a function and was not set on event "' + e + '".');
        }, j.offEvent = function(e, t, n) {
            Object(i.logInfo)("Invoking pbjs.offEvent", arguments), n && !G[e].call(null, n) || A.off(e, t, n);
        }, j.getEvents = function() {
            return Object(i.logInfo)("Invoking pbjs.getEvents"), A.getEvents();
        }, j.registerBidAdapter = function(e, t) {
            Object(i.logInfo)("Invoking pbjs.registerBidAdapter", arguments);
            try {
                E.registerBidAdapter(e(), t);
            } catch (e) {
                Object(i.logError)("Error registering bidder adapter : " + e.message);
            }
        }, j.registerAnalyticsAdapter = function(e) {
            Object(i.logInfo)("Invoking pbjs.registerAnalyticsAdapter", arguments);
            try {
                E.registerAnalyticsAdapter(e);
            } catch (e) {
                Object(i.logError)("Error registering analytics adapter : " + e.message);
            }
        }, j.createBid = function(e) {
            return Object(i.logInfo)("Invoking pbjs.createBid", arguments), Object(v.a)(e);
        };
        var ee = [], te = Object(d.b)("async", function(e) {
            e && !Object(i.isEmpty)(e) ? (Object(i.logInfo)("Invoking pbjs.enableAnalytics for: ", e), 
            E.enableAnalytics(e)) : Object(i.logError)("pbjs.enableAnalytics should be called with option {}");
        }, "enableAnalyticsCb");
        function ne(e) {
            e.forEach(function(e) {
                if (void 0 === e.called) try {
                    e.call(), e.called = !0;
                } catch (e) {
                    Object(i.logError)("Error processing command :", "prebid.js", e);
                }
            });
        }
        j.enableAnalytics = function(e) {
            ee.push(te.bind(this, e));
        }, j.aliasBidder = function(e, t, n) {
            Object(i.logInfo)("Invoking pbjs.aliasBidder", arguments), e && t ? E.aliasBidAdapter(e, t, n) : Object(i.logError)("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder");
        }, j.getAllWinningBids = function() {
            return u.a.getAllWinningBids();
        }, j.getAllPrebidWinningBids = function() {
            return u.a.getBidsReceived().filter(function(e) {
                return e.status === S.BID_STATUS.BID_TARGETING_SET;
            });
        }, j.getHighestCpmBids = function(e) {
            return s.d.getWinningBids(e);
        }, j.markWinningBidAsUsed = function(e) {
            var t = [];
            e.adUnitCode && e.adId ? t = u.a.getBidsReceived().filter(function(t) {
                return t.adId === e.adId && t.adUnitCode === e.adUnitCode;
            }) : e.adUnitCode ? t = s.d.getWinningBids(e.adUnitCode) : e.adId ? t = u.a.getBidsReceived().filter(function(t) {
                return t.adId === e.adId;
            }) : Object(i.logWarn)("Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."), 
            t.length > 0 && (t[0].status = S.BID_STATUS.RENDERED);
        }, j.getConfig = c.b.getConfig, j.readConfig = c.b.readConfig, j.mergeConfig = c.b.mergeConfig, 
        j.mergeBidderConfig = c.b.mergeBidderConfig, j.setConfig = c.b.setConfig, 
        j.setBidderConfig = c.b.setBidderConfig, j.que.push(function() {
            return Object(o.a)();
        }), j.cmd.push = function(e) {
            if ("function" == typeof e) try {
                e.call();
            } catch (e) {
                Object(i.logError)("Error processing command :", e.message, e.stack);
            } else Object(i.logError)("Commands written into pbjs.cmd.push must be wrapped in a function");
        }, j.que.push = j.cmd.push, j.processQueue = function() {
            d.b.ready(), ne(j.que), ne(j.cmd);
        }, t.default = j;
    },
    81: function(e, t, n) {
        var r = n(381);
        e.exports = r;
    },
    82: function(e, t, n) {
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
    83: function(e, t, n) {
        var r = n(29), i = n(50), o = "".split;
        e.exports = r(function() {
            return !Object("z").propertyIsEnumerable(0);
        }) ? function(e) {
            return "String" == i(e) ? o.call(e, "") : Object(e);
        } : Object;
    },
    84: function(e, t, n) {
        var r = n(33), i = n(29), o = n(85);
        e.exports = !r && !i(function() {
            return 7 != Object.defineProperty(o("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    },
    85: function(e, t, n) {
        var r = n(27), i = n(30), o = r.document, a = i(o) && i(o.createElement);
        e.exports = function(e) {
            return a ? o.createElement(e) : {};
        };
    },
    86: function(e, t, n) {
        var r = n(18), i = n(65);
        (e.exports = function(e, t) {
            return i[e] || (i[e] = void 0 !== t ? t : {});
        })("versions", []).push({
            version: "3.15.1",
            mode: r ? "pure" : "global",
            copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
        });
    },
    87: function(e, t, n) {
        var r = n(113), i = n(29);
        e.exports = !!Object.getOwnPropertySymbols && !i(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && r && r < 41;
        });
    },
    88: function(e, t, n) {
        var r = n(49), i = n(53), o = n(118), a = function(e) {
            return function(t, n, a) {
                var c, u = r(t), s = i(u.length), d = o(a, s);
                if (e && n != n) {
                    for (;s > d; ) if ((c = u[d++]) != c) return !0;
                } else for (;s > d; d++) if ((e || d in u) && u[d] === n) return e || d || 0;
                return !e && -1;
            };
        };
        e.exports = {
            includes: a(!0),
            indexOf: a(!1)
        };
    },
    89: function(e, t, n) {
        var r = n(119);
        n(139), n(141), n(143), n(145), n(147), n(148), n(149), n(150), n(151), 
        n(152), n(153), n(154), n(155), n(156), n(157), n(158), n(159), n(160), 
        e.exports = r;
    },
    9: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return c;
        }), n.d(t, "a", function() {
            return u;
        }), t.d = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15, r = e.getHooks({
                hook: t
            });
            0 === r.length && e.before(t, n);
        }, t.c = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = n.postInstallAllowed, i = void 0 !== r && r;
            c("async", function(n) {
                n.forEach(function(e) {
                    return t.apply(void 0, o(e));
                }), i && (s[e] = t);
            }, e)([]);
        }, t.e = function(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            var i = s[e];
            if (i) return i.apply(void 0, n);
            u(e).before(function(e, t) {
                t.push(n), e(t);
            });
        };
        var r = n(170), i = n.n(r);
        function o(e) {
            return function(e) {
                if (Array.isArray(e)) return a(e);
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
            }(e) || function(e, t) {
                if (!e) return;
                if ("string" == typeof e) return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t);
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        var c = i()({
            ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE
        }), u = c.get;
        var s = {};
    },
    90: function(e, t, n) {
        var r = n(56), i = n(30), o = n(31), a = n(34).f, c = n(66), u = n(122), s = c("meta"), d = 0, f = Object.isExtensible || function() {
            return !0;
        }, l = function(e) {
            a(e, s, {
                value: {
                    objectID: "O" + ++d,
                    weakData: {}
                }
            });
        }, p = e.exports = {
            REQUIRED: !1,
            fastKey: function(e, t) {
                if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!o(e, s)) {
                    if (!f(e)) return "F";
                    if (!t) return "E";
                    l(e);
                }
                return e[s].objectID;
            },
            getWeakData: function(e, t) {
                if (!o(e, s)) {
                    if (!f(e)) return !0;
                    if (!t) return !1;
                    l(e);
                }
                return e[s].weakData;
            },
            onFreeze: function(e) {
                return u && p.REQUIRED && f(e) && !o(e, s) && l(e), e;
            }
        };
        r[s] = !0;
    },
    91: function(e, t, n) {
        var r = n(23), i = n(41), o = r("iterator"), a = Array.prototype;
        e.exports = function(e) {
            return void 0 !== e && (i.Array === e || a[o] === e);
        };
    },
    92: function(e, t, n) {
        var r = n(17);
        e.exports = function(e) {
            var t = e.return;
            if (void 0 !== t) return r(t.call(e)).value;
        };
    },
    93: function(e, t) {
        e.exports = [ "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf" ];
    },
    94: function(e, t, n) {
        var r = n(71);
        e.exports = function(e, t, n) {
            for (var i in t) n && n.unsafe && e[i] ? e[i] = t[i] : r(e, i, t[i], n);
            return e;
        };
    },
    95: function(e, t, n) {
        "use strict";
        var r = n(96).IteratorPrototype, i = n(70), o = n(44), a = n(59), c = n(41), u = function() {
            return this;
        };
        e.exports = function(e, t, n) {
            var s = t + " Iterator";
            return e.prototype = i(r, {
                next: o(1, n)
            }), a(e, s, !1, !0), c[s] = u, e;
        };
    },
    96: function(e, t, n) {
        "use strict";
        var r, i, o, a = n(29), c = n(97), u = n(32), s = n(31), d = n(23), f = n(18), l = d("iterator"), p = !1;
        [].keys && ("next" in (o = [].keys()) ? (i = c(c(o))) !== Object.prototype && (r = i) : p = !0);
        var g = null == r || a(function() {
            var e = {};
            return r[l].call(e) !== e;
        });
        g && (r = {}), f && !g || s(r, l) || u(r, l, function() {
            return this;
        }), e.exports = {
            IteratorPrototype: r,
            BUGGY_SAFARI_ITERATORS: p
        };
    },
    97: function(e, t, n) {
        var r = n(31), i = n(52), o = n(69), a = n(131), c = o("IE_PROTO"), u = Object.prototype;
        e.exports = a ? Object.getPrototypeOf : function(e) {
            return e = i(e), r(e, c) ? e[c] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? u : null;
        };
    },
    974: function(e, t, n) {
        e.exports = n(80);
    },
    98: function(e, t, n) {
        "use strict";
        var r = n(136).charAt, i = n(46), o = n(72), a = "String Iterator", c = i.set, u = i.getterFor(a);
        o(String, "String", function(e) {
            c(this, {
                type: a,
                string: String(e),
                index: 0
            });
        }, function() {
            var e, t = u(this), n = t.string, i = t.index;
            return i >= n.length ? {
                value: void 0,
                done: !0
            } : (e = r(n, i), t.index += e.length, {
                value: e,
                done: !1
            });
        });
    },
    99: function(e, t, n) {
        "use strict";
        var r = n(49), i = n(54), o = n(41), a = n(46), c = n(72), u = "Array Iterator", s = a.set, d = a.getterFor(u);
        e.exports = c(Array, "Array", function(e, t) {
            s(this, {
                type: u,
                target: r(e),
                index: 0,
                kind: t
            });
        }, function() {
            var e = d(this), t = e.target, n = e.kind, r = e.index++;
            return !t || r >= t.length ? (e.target = void 0, {
                value: void 0,
                done: !0
            }) : "keys" == n ? {
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
    }
});

pbjsChunk([ 385 ], {
    187: function(e, t, r) {
        e.exports = r(188);
    },
    188: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r.d(t, "spec", function() {
            return b;
        });
        var n = r(1), i = r(2), a = r(0), o = r(3), d = r(13);
        function s(e) {
            return function(e) {
                if (Array.isArray(e)) return p(e);
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
            }(e) || u(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function c(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == r) return;
                var n, i, a = [], o = !0, d = !1;
                try {
                    for (r = r.call(e); !(o = (n = r.next()).done) && (a.push(n.value), 
                    !t || a.length !== t); o = !0);
                } catch (e) {
                    d = !0, i = e;
                } finally {
                    try {
                        o || null == r.return || r.return();
                    } finally {
                        if (d) throw i;
                    }
                }
                return a;
            }(e, t) || u(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function u(e, t) {
            if (e) {
                if ("string" == typeof e) return p(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), 
                "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? p(e, t) : void 0;
            }
        }
        function p(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n;
        }
        function l(e) {
            return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        var m = o.b.getConfig, f = {
            0: "title",
            2: "icon",
            3: "image",
            5: "sponsoredBy",
            4: "body",
            1: "cta"
        }, y = {
            title: {
                id: 0,
                name: "title"
            },
            icon: {
                id: 2,
                type: 1,
                name: "img"
            },
            image: {
                id: 3,
                type: 3,
                name: "img"
            },
            sponsoredBy: {
                id: 5,
                name: "data",
                type: 1
            },
            body: {
                id: 4,
                name: "data",
                type: 2
            },
            cta: {
                id: 1,
                type: 12,
                name: "data"
            }
        }, b = {
            code: "adf",
            aliases: [ {
                code: "adformOpenRTB",
                gvlid: 50
            }, {
                code: "adform",
                gvlid: 50
            } ],
            gvlid: 50,
            supportedMediaTypes: [ i.c, i.b, i.d ],
            isBidRequestValid: function(e) {
                var t = e.params || {}, r = t.mid, n = t.inv, i = t.mname;
                return !!(r || n && i);
            },
            buildRequests: function(e, t) {
                var r, n, i = m("ortb2") || {}, o = i.user;
                "object" === l(m("app")) ? (r = m("app") || {}, i.app && Object(a.mergeDeep)(r, i.app)) : (n = m("site") || {}, 
                i.site && Object(a.mergeDeep)(n, i.site), n.page || (n.page = t.refererInfo.referer));
                var d = m("device") || {};
                d.w = d.w || window.innerWidth, d.h = d.h || window.innerHeight, 
                d.ua = d.ua || navigator.userAgent;
                var s = v(e, "params.adxDomain") || "adx.adform.net", u = v(e, "params.pt") || v(e, "params.priceType") || "net", p = e[0].transactionId, f = v(e, "params.test"), b = m("currency.adServerCurrency"), h = b && [ b ], j = v(e, "userIdAsEids"), w = v(e, "schain"), S = e.map(function(e, t) {
                    e.netRevenue = u;
                    var r = e.getFloor ? e.getFloor({
                        currency: b || "USD"
                    }) : {}, n = r.floor, i = r.currency, o = e.params, d = {
                        id: t + 1,
                        tagid: o.mid,
                        bidfloor: n,
                        bidfloorcur: i,
                        ext: {
                            bidder: {
                                inv: o.inv,
                                mname: o.mname
                            }
                        }
                    }, s = Object(a._map)(e.nativeParams, function(e, t) {
                        var r = y[t], n = {
                            required: 1 & e.required
                        };
                        if (r) {
                            var i, a, o, d;
                            n.id = r.id;
                            var s = e.aspect_ratios;
                            if (s && s[0] && (i = (s = s[0]).min_width || 0, a = s.ratio_height * i / s.ratio_width | 0), 
                            e.sizes) {
                                var c = g(e.sizes);
                                o = c[0], d = c[1];
                            }
                            return n[r.name] = {
                                len: e.len,
                                type: r.type,
                                wmin: i,
                                hmin: a,
                                w: o,
                                h: d
                            }, n;
                        }
                    }).filter(Boolean);
                    s.length && (d.native = {
                        request: {
                            assets: s
                        }
                    });
                    var p = Object(a.deepAccess)(e, "mediaTypes.banner");
                    if (p && p.sizes) {
                        var l = Object(a.parseSizesInput)(p.sizes).map(function(e) {
                            var t = c(e.split("x"), 2), r = t[0], n = t[1];
                            return {
                                w: parseInt(r, 10),
                                h: parseInt(n, 10)
                            };
                        });
                        d.banner = {
                            format: l
                        };
                    }
                    var m = Object(a.deepAccess)(e, "mediaTypes.video");
                    return m && (d.video = m), d;
                }), O = {
                    id: t.auctionId,
                    site: n,
                    app: r,
                    user: o,
                    device: d,
                    source: {
                        tid: p,
                        fd: 1
                    },
                    ext: {
                        pt: u
                    },
                    cur: h,
                    imp: S
                };
                return f && (O.is_debug = !!f, O.test = 1), void 0 !== Object(a.deepAccess)(t, "gdprConsent.gdprApplies") && (Object(a.deepSetValue)(O, "user.ext.consent", t.gdprConsent.consentString), 
                Object(a.deepSetValue)(O, "regs.ext.gdpr", 1 & t.gdprConsent.gdprApplies)), 
                t.uspConsent && Object(a.deepSetValue)(O, "regs.ext.us_privacy", t.uspConsent), 
                j && Object(a.deepSetValue)(O, "user.ext.eids", j), w && Object(a.deepSetValue)(O, "source.ext.schain", w), 
                {
                    method: "POST",
                    url: "https://" + s + "/adx/openrtb",
                    data: JSON.stringify(O),
                    options: {
                        contentType: "application/json"
                    },
                    bids: e
                };
            },
            interpretResponse: function(e, t) {
                var r = t.bids;
                if (e.body) {
                    var n = e.body, o = n.seatbid, s = n.cur, c = g(o.map(function(e) {
                        return e.bid;
                    })).reduce(function(e, t) {
                        return e[t.impid - 1] = t, e;
                    }, []);
                    return r.map(function(e, t) {
                        var r = c[t];
                        if (r) {
                            var n = Object(a.deepAccess)(r, "ext.prebid.type"), o = {
                                requestId: e.bidId,
                                cpm: r.price,
                                creativeId: r.crid,
                                ttl: 360,
                                netRevenue: "net" === e.netRevenue,
                                currency: s,
                                mediaType: n,
                                width: r.w,
                                height: r.h,
                                dealId: r.dealid,
                                meta: {
                                    mediaType: n,
                                    advertiserDomains: r.adomain
                                }
                            };
                            return r.native ? o.native = function(e) {
                                var t = e.native, r = t.assets, n = t.link, i = t.imptrackers, a = t.jstracker, o = {
                                    clickUrl: n.url,
                                    clickTrackers: n.clicktrackers || void 0,
                                    impressionTrackers: i || void 0,
                                    javascriptTrackers: a ? [ a ] : void 0
                                };
                                return r.forEach(function(e) {
                                    var t = f[e.id], r = t && e[y[t].name];
                                    r && (o[t] = r.text || r.value || {
                                        url: r.url,
                                        width: r.w,
                                        height: r.h
                                    });
                                }), o;
                            }(r) : o[n === i.d ? "vastXml" : "ad"] = r.adm, e.renderer || n !== i.d || "outstream" !== Object(a.deepAccess)(e, "mediaTypes.video.context") || (o.renderer = d.a.install({
                                id: e.bidId,
                                url: "https://s2.adform.net/banners/scripts/video/outstream/render.js",
                                adUnitCode: e.adUnitCode
                            }), o.renderer.setRender(h)), o;
                        }
                    }).filter(Boolean);
                }
            }
        };
        function v(e, t) {
            for (var r, n = 0; n < e.length; n++) if (r = Object(a.deepAccess)(e[n], t)) return r;
        }
        function g(e) {
            var t;
            return (t = []).concat.apply(t, s(e));
        }
        function h(e) {
            e.renderer.push(function() {
                window.Adform.renderOutstream(e);
            });
        }
        Object(n.registerBidder)(b), window.pbjs.installedModules.push("adfBidAdapter");
    }
}, [ 187 ]);

pbjsChunk([ 345 ], {
    290: function(e, r, t) {
        e.exports = t(291);
    },
    291: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "spec", function() {
            return E;
        });
        var a = t(0), n = t(13), i = t(3), s = t(1), o = t(2), d = t(22), c = t(11), p = t.n(c), u = t(12), l = t.n(u), m = t(20), f = t(7);
        function b(e) {
            return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function v() {
            return (v = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                }
                return e;
            }).apply(this, arguments);
        }
        function y(e) {
            return function(e) {
                if (Array.isArray(e)) return g(e);
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
            }(e) || function(e, r) {
                if (!e) return;
                if ("string" == typeof e) return g(e, r);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === t && e.constructor && (t = e.constructor.name);
                if ("Map" === t || "Set" === t) return Array.from(e);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return g(e, r);
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function g(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var t = 0, a = new Array(r); t < r; t++) a[t] = e[t];
            return a;
        }
        var h = "appnexus", _ = "https://ib.adnxs.com/ut/v3/prebid", k = "https://ib.adnxs-simple.com/ut/v3/prebid", O = [ "id", "minduration", "maxduration", "skippable", "playback_method", "frameworks", "context", "skipoffset" ], j = [ "minduration", "maxduration", "skip", "skipafter", "playbackmethod", "api" ], I = [ "age", "externalUid", "segments", "gender", "dnt", "language" ], A = [ "geo", "device_id" ], w = [ "enabled", "dongle", "member_id", "debug_timeout" ], x = {
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
        }, C = {
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
        }, S = /\/\/cdn\.adnxs\.com\/v|\/\/cdn\.adnxs\-simple\.com\/v/, T = Object(f.b)(32, h), E = {
            code: h,
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
            supportedMediaTypes: [ o.b, o.d, o.c ],
            isBidRequestValid: function(e) {
                return !!(e.params.placementId || e.params.member && e.params.invCode);
            },
            buildRequests: function(e, r) {
                var t = e.map(q), n = p()(e, z), s = {};
                !0 === i.b.getConfig("coppa") && (s = {
                    coppa: !0
                }), n && Object.keys(n.params.user).filter(function(e) {
                    return l()(I, e);
                }).forEach(function(e) {
                    var r = Object(a.convertCamelToUnderscore)(e);
                    if ("segments" === e && Object(a.isArray)(n.params.user[e])) {
                        var t = [];
                        n.params.user[e].forEach(function(e) {
                            Object(a.isNumber)(e) ? t.push({
                                id: e
                            }) : Object(a.isPlainObject)(e) && t.push(e);
                        }), s[r] = t;
                    } else "segments" !== e && (s[r] = n.params.user[e]);
                });
                var o, d = p()(e, B);
                d && d.params && d.params.app && (o = {}, Object.keys(d.params.app).filter(function(e) {
                    return l()(A, e);
                }).forEach(function(e) {
                    return o[e] = d.params.app[e];
                }));
                var c, u = p()(e, F);
                u && u.params && d.params.app && d.params.app.id && (c = {
                    appid: u.params.app.id
                });
                var m = {}, f = {}, b = T.getCookie("apn_prebid_debug") || null;
                if (b) try {
                    m = JSON.parse(b);
                } catch (e) {
                    Object(a.logError)("AppNexus Debug Auction Cookie Error:\n\n" + e);
                } else {
                    var v = p()(e, V);
                    v && v.debug && (m = v.debug);
                }
                m && m.enabled && Object.keys(m).filter(function(e) {
                    return l()(w, e);
                }).forEach(function(e) {
                    f[e] = m[e];
                });
                var g = p()(e, D), h = g ? parseInt(g.params.member, 10) : 0, O = e[0].schain, j = p()(e, W), x = {
                    tags: y(t),
                    user: s,
                    sdk: {
                        source: "pbjs",
                        version: "6.6.0"
                    },
                    schain: O
                };
                if (j && (x.iab_support = {
                    omidpn: "Appnexus",
                    omidpv: "6.6.0"
                }), h > 0 && (x.member_id = h), d && (x.device = o), u && (x.app = c), 
                i.b.getConfig("adpod.brandCategoryExclusion") && (x.brand_category_uniqueness = !0), 
                f.enabled && (x.debug = f, Object(a.logInfo)("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(f, null, 4))), 
                r && r.gdprConsent && (x.gdpr_consent = {
                    consent_string: r.gdprConsent.consentString,
                    consent_required: r.gdprConsent.gdprApplies
                }, r.gdprConsent.addtlConsent && -1 !== r.gdprConsent.addtlConsent.indexOf("~"))) {
                    var C = r.gdprConsent.addtlConsent, S = C.substring(C.indexOf("~") + 1);
                    x.gdpr_consent.addtl_consent = S.split(".").map(function(e) {
                        return parseInt(e, 10);
                    });
                }
                if (r && r.uspConsent && (x.us_privacy = r.uspConsent), r && r.refererInfo) {
                    var E = {
                        rd_ref: encodeURIComponent(r.refererInfo.referer),
                        rd_top: r.refererInfo.reachedTop,
                        rd_ifs: r.refererInfo.numIframes,
                        rd_stk: r.refererInfo.stack.map(function(e) {
                            return encodeURIComponent(e);
                        }).join(",")
                    };
                    x.referrer_detection = E;
                }
                if (p()(e, J) && e.filter(J).forEach(function(e) {
                    var r = function(e, r) {
                        var t = r.mediaTypes.video, n = t.durationRangeSec, i = t.requireExactDuration, s = function(e) {
                            var r = e.adPodDurationSec, t = e.durationRangeSec, n = e.requireExactDuration, i = Object(a.getMinValueFromArray)(t), s = Math.floor(r / i);
                            return n ? Math.max(s, t.length) : s;
                        }(r.mediaTypes.video), o = Object(a.getMaxValueFromArray)(n), d = e.filter(function(e) {
                            return e.uuid === r.bidId;
                        }), c = a.fill.apply(void 0, y(d).concat([ s ]));
                        if (i) {
                            var p = Math.ceil(s / n.length), u = Object(a.chunk)(c, p);
                            n.forEach(function(e, r) {
                                u[r].map(function(r) {
                                    H(r, "minduration", e), H(r, "maxduration", e);
                                });
                            });
                        } else c.map(function(e) {
                            return H(e, "maxduration", o);
                        });
                        return c;
                    }(t, e), n = x.tags.filter(function(r) {
                        return r.uuid !== e.bidId;
                    });
                    x.tags = [].concat(y(n), y(r));
                }), e[0].userId) {
                    var R = [];
                    K(R, Object(a.deepAccess)(e[0], "userId.flocId.id"), "chrome.com", null), 
                    K(R, Object(a.deepAccess)(e[0], "userId.criteoId"), "criteo.com", null), 
                    K(R, Object(a.deepAccess)(e[0], "userId.netId"), "netid.de", null), 
                    K(R, Object(a.deepAccess)(e[0], "userId.idl_env"), "liveramp.com", null), 
                    K(R, Object(a.deepAccess)(e[0], "userId.tdid"), "adserver.org", "TDID"), 
                    K(R, Object(a.deepAccess)(e[0], "userId.uid2.id"), "uidapi.com", "UID2"), 
                    R.length && (x.eids = R);
                }
                return t[0].publisher_id && (x.publisher_id = t[0].publisher_id), 
                function(e, r) {
                    var t = [], n = {
                        withCredentials: !0
                    }, s = _;
                    N(r) || (s = k);
                    "TRUE" !== Object(a.getParameterByName)("apn_test").toUpperCase() && !0 !== i.b.getConfig("apn_test") || (n.customHeaders = {
                        "X-Is-Test": 1
                    });
                    if (e.tags.length > 15) {
                        var o = Object(a.deepClone)(e);
                        Object(a.chunk)(e.tags, 15).forEach(function(e) {
                            o.tags = e;
                            var a = JSON.stringify(o);
                            t.push({
                                method: "POST",
                                url: s,
                                data: a,
                                bidderRequest: r,
                                options: n
                            });
                        });
                    } else {
                        var d = JSON.stringify(e);
                        t = {
                            method: "POST",
                            url: s,
                            data: d,
                            bidderRequest: r,
                            options: n
                        };
                    }
                    return t;
                }(x, r);
            },
            interpretResponse: function(e, r) {
                var t = this, i = r.bidderRequest;
                e = e.body;
                var d = [];
                if (!e || e.error) {
                    var c = "in response for ".concat(i.bidderCode, " adapter");
                    return e && e.error && (c += ": ".concat(e.error)), Object(a.logError)(c), 
                    d;
                }
                if (e.tags && e.tags.forEach(function(e) {
                    var r, c = (r = e) && r.ads && r.ads.length && p()(r.ads, function(e) {
                        return e.rtb;
                    });
                    if (c && ((Object(a.isAllowZeroCpmBidsEnabled)(i.bidderCode) ? c.cpm >= 0 : c.cpm > 0) && l()(t.supportedMediaTypes, c.ad_type))) {
                        var u = function(e, r, t) {
                            var i = Object(a.getBidRequest)(e.uuid, [ t ]), d = {
                                requestId: e.uuid,
                                cpm: r.cpm,
                                creativeId: r.creative_id,
                                dealId: r.deal_id,
                                currency: "USD",
                                netRevenue: !0,
                                ttl: 300,
                                adUnitCode: i.adUnitCode,
                                appnexus: {
                                    buyerMemberId: r.buyer_member_id,
                                    dealPriority: r.deal_priority,
                                    dealCode: r.deal_code
                                }
                            };
                            r.adomain && (d.meta = v({}, d.meta, {
                                advertiserDomains: []
                            }));
                            r.advertiser_id && (d.meta = v({}, d.meta, {
                                advertiserId: r.advertiser_id
                            }));
                            function c(e) {
                                return {
                                    ver: "1.0",
                                    complete: 0,
                                    nodes: [ {
                                        bsid: e.buyer_member_id.toString()
                                    } ]
                                };
                            }
                            r.buyer_member_id && (d.meta = v({}, d.meta, {
                                dchain: c(r)
                            }));
                            r.brand_id && (d.meta = v({}, d.meta, {
                                brandId: r.brand_id
                            }));
                            if (r.rtb.video) {
                                switch (v(d, {
                                    width: r.rtb.video.player_width,
                                    height: r.rtb.video.player_height,
                                    vastImpUrl: r.notify_url,
                                    ttl: 3600
                                }), Object(a.deepAccess)(i, "mediaTypes.video.context")) {
                                  case o.a:
                                    var u = Object(s.getIabSubCategory)(i.bidder, r.brand_category_id);
                                    d.meta = v({}, d.meta, {
                                        primaryCatId: u
                                    });
                                    var l = r.deal_priority;
                                    d.video = {
                                        context: o.a,
                                        durationSeconds: Math.floor(r.rtb.video.duration_ms / 1e3),
                                        dealTier: l
                                    }, d.vastUrl = r.rtb.video.asset_url;
                                    break;

                                  case m.b:
                                    if (d.adResponse = e, d.adResponse.ad = d.adResponse.ads[0], 
                                    d.adResponse.ad.video = d.adResponse.ad.rtb.video, 
                                    d.vastXml = r.rtb.video.content, r.renderer_url) {
                                        var f = p()(t.bids, function(r) {
                                            return r.bidId === e.uuid;
                                        }), b = Object(a.deepAccess)(f, "renderer.options");
                                        d.renderer = function(e, r) {
                                            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = n.a.install({
                                                id: r.renderer_id,
                                                url: r.renderer_url,
                                                config: t,
                                                loaded: !1,
                                                adUnitCode: e
                                            });
                                            try {
                                                i.setRender(L);
                                            } catch (e) {
                                                Object(a.logWarn)("Prebid Error calling setRender on renderer", e);
                                            }
                                            return i.setEventHandlers({
                                                impression: function() {
                                                    return Object(a.logMessage)("AppNexus outstream video impression event");
                                                },
                                                loaded: function() {
                                                    return Object(a.logMessage)("AppNexus outstream video loaded event");
                                                },
                                                ended: function() {
                                                    Object(a.logMessage)("AppNexus outstream renderer video event"), 
                                                    document.querySelector("#".concat(e)).style.display = "none";
                                                }
                                            }), i;
                                        }(d.adUnitCode, r, b);
                                    }
                                    break;

                                  case m.a:
                                    d.vastUrl = r.notify_url + "&redir=" + encodeURIComponent(r.rtb.video.asset_url);
                                }
                            } else if (r.rtb[o.c]) {
                                var y = r.rtb[o.c], g = r.viewability.config.replace("src=", "data-src="), h = y.javascript_trackers;
                                null == h ? h = g : Object(a.isStr)(h) ? h = [ h, g ] : h.push(g), 
                                d[o.c] = {
                                    title: y.title,
                                    body: y.desc,
                                    body2: y.desc2,
                                    cta: y.ctatext,
                                    rating: y.rating,
                                    sponsoredBy: y.sponsored,
                                    privacyLink: y.privacy_link,
                                    address: y.address,
                                    downloads: y.downloads,
                                    likes: y.likes,
                                    phone: y.phone,
                                    price: y.price,
                                    salePrice: y.saleprice,
                                    clickUrl: y.link.url,
                                    displayUrl: y.displayurl,
                                    clickTrackers: y.link.click_trackers,
                                    impressionTrackers: y.impression_trackers,
                                    javascriptTrackers: h
                                }, y.main_img && (d.native.image = {
                                    url: y.main_img.url,
                                    height: y.main_img.height,
                                    width: y.main_img.width
                                }), y.icon && (d.native.icon = {
                                    url: y.icon.url,
                                    height: y.icon.height,
                                    width: y.icon.width
                                });
                            } else {
                                v(d, {
                                    width: r.rtb.banner.width,
                                    height: r.rtb.banner.height,
                                    ad: r.rtb.banner.content
                                });
                                try {
                                    if (r.rtb.trackers) for (var _ = 0; _ < r.rtb.trackers[0].impression_urls.length; _++) {
                                        var k = r.rtb.trackers[0].impression_urls[_], O = Object(a.createTrackPixelHtml)(k);
                                        d.ad += O;
                                    }
                                } catch (e) {
                                    Object(a.logError)("Error appending tracking pixel", e);
                                }
                            }
                            return d;
                        }(e, c, i);
                        u.mediaType = function(e) {
                            var r = e.ad_type;
                            return r === o.d ? o.d : r === o.c ? o.c : o.b;
                        }(c), d.push(u);
                    }
                }), e.debug && e.debug.debug_info) {
                    var u = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info;
                    u = u.replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""), 
                    Object(a.logMessage)("https://console.appnexus.com/docs/understanding-the-debug-auction"), 
                    Object(a.logMessage)(u);
                }
                return d;
            },
            getMappingFileInfo: function() {
                return {
                    url: "https://acdn.adnxs-simple.com/prebid/appnexus-mapping/mappings.json",
                    refreshInDays: 2
                };
            },
            getUserSyncs: function(e, r, t) {
                if (e.iframeEnabled && N({
                    gdprConsent: t
                })) return [ {
                    type: "iframe",
                    url: "https://acdn.adnxs.com/dmp/async_usersync.html"
                } ];
            },
            transformBidParams: function(e, r) {
                return e = Object(a.convertTypes)({
                    member: "string",
                    invCode: "string",
                    placementId: "number",
                    keywords: a.transformBidderParamKeywords,
                    publisherId: "number"
                }, e), r && (e.use_pmt_rule = "boolean" == typeof e.usePaymentRule && e.usePaymentRule, 
                e.usePaymentRule && delete e.usePaymentRule, R(e.keywords) && e.keywords.forEach(P), 
                Object.keys(e).forEach(function(r) {
                    var t = Object(a.convertCamelToUnderscore)(r);
                    t !== r && (e[t] = e[r], delete e[r]);
                })), e;
            },
            onBidWon: function(e) {
                e.native && function(e) {
                    var r = function(e) {
                        var r;
                        if (Object(a.isStr)(e) && U(e)) r = e; else if (Object(a.isArray)(e)) for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            U(n) && (r = n);
                        }
                        return r;
                    }(e.native.javascriptTrackers);
                    if (r) for (var t = "pbjs_adid=" + e.adId + ";pbjs_auc=" + e.adUnitCode, n = function(e) {
                        var r = e.indexOf('src="') + 5, t = e.indexOf('"', r);
                        return e.substring(r, t);
                    }(r), i = n.replace("dom_id=%native_dom_id%", t), s = document.getElementsByTagName("iframe"), o = !1, d = 0; d < s.length && !o; d++) {
                        var c = s[d];
                        try {
                            var p = c.contentDocument || c.contentWindow.document;
                            if (p) for (var u = p.getElementsByTagName("script"), l = 0; l < u.length && !o; l++) {
                                var m = u[l];
                                m.getAttribute("data-src") == n && (m.setAttribute("src", i), 
                                m.setAttribute("data-src", ""), m.removeAttribute && m.removeAttribute("data-src"), 
                                o = !0);
                            }
                        } catch (e) {
                            if (!(e instanceof DOMException && "SecurityError" === e.name)) throw e;
                        }
                    }
                }(e);
            }
        };
        function R(e) {
            return !!(Object(a.isArray)(e) && e.length > 0);
        }
        function P(e) {
            R(e.value) && "" === e.value[0] && delete e.value;
        }
        function U(e) {
            var r = e.match(S), t = null != r && r.length >= 1, a = e.match("trk.js"), n = null != a && a.length >= 1;
            return e.startsWith("<script") && n && t;
        }
        function N(e) {
            var r = !0;
            return e && e.gdprConsent && e.gdprConsent.gdprApplies && 2 === e.gdprConsent.apiVersion && (r = !(!0 !== Object(a.deepAccess)(e.gdprConsent, "vendorData.purpose.consents.1"))), 
            r;
        }
        function q(e) {
            var r = {};
            r.sizes = M(e.sizes), r.primary_size = r.sizes[0], r.ad_types = [], 
            r.uuid = e.bidId, e.params.placementId ? r.id = parseInt(e.params.placementId, 10) : r.code = e.params.invCode, 
            r.allow_smaller_sizes = e.params.allowSmallerSizes || !1, r.use_pmt_rule = e.params.usePaymentRule || !1, 
            r.prebid = !0, r.disable_psa = !0;
            var t = function(e) {
                if (!Object(a.isFn)(e.getFloor)) return e.params.reserve ? e.params.reserve : null;
                var r = e.getFloor({
                    currency: "USD",
                    mediaType: "*",
                    size: "*"
                });
                if (Object(a.isPlainObject)(r) && !isNaN(r.floor) && "USD" === r.currency) return r.floor;
                return null;
            }(e);
            if (t && (r.reserve = t), e.params.position && (r.position = {
                above: 1,
                below: 2
            }[e.params.position] || 0), e.params.trafficSourceCode && (r.traffic_source_code = e.params.trafficSourceCode), 
            e.params.privateSizes && (r.private_sizes = M(e.params.privateSizes)), 
            e.params.supplyType && (r.supply_type = e.params.supplyType), e.params.pubClick && (r.pubclick = e.params.pubClick), 
            e.params.extInvCode && (r.ext_inv_code = e.params.extInvCode), e.params.publisherId && (r.publisher_id = parseInt(e.params.publisherId, 10)), 
            e.params.externalImpId && (r.external_imp_id = e.params.externalImpId), 
            !Object(a.isEmpty)(e.params.keywords)) {
                var n = Object(a.transformBidderParamKeywords)(e.params.keywords);
                n.length > 0 && n.forEach(P), r.keywords = n;
            }
            var i, s, c = Object(a.deepAccess)(e, "ortb2Imp.ext.data.pbadslot");
            if (c && (r.gpid = c), (e.mediaType === o.c || Object(a.deepAccess)(e, "mediaTypes.".concat(o.c))) && (r.ad_types.push(o.c), 
            0 === r.sizes.length && (r.sizes = M([ 1, 1 ])), e.nativeParams)) {
                var u = (i = e.nativeParams, s = {}, Object.keys(i).forEach(function(e) {
                    var r = C[e] && C[e].serverName || C[e] || e, t = C[e] && C[e].requiredParams;
                    if (s[r] = v({}, t, i[e]), (r === C.image.serverName || r === C.icon.serverName) && s[r].sizes) {
                        var n = s[r].sizes;
                        (Object(a.isArrayOfNums)(n) || Object(a.isArray)(n) && n.length > 0 && n.every(function(e) {
                            return Object(a.isArrayOfNums)(e);
                        })) && (s[r].sizes = M(s[r].sizes));
                    }
                    r === C.privacyLink && (s.privacy_supported = !0);
                }), s);
                r[o.c] = {
                    layouts: [ u ]
                };
            }
            var m = Object(a.deepAccess)(e, "mediaTypes.".concat(o.d)), f = Object(a.deepAccess)(e, "mediaTypes.video.context");
            r.hb_source = m && "adpod" === f ? 7 : 1, (e.mediaType === o.d || m) && r.ad_types.push(o.d), 
            (e.mediaType === o.d || m && "outstream" !== f) && (r.require_asset_url = !0), 
            e.params.video && (r.video = {}, Object.keys(e.params.video).filter(function(e) {
                return l()(O, e);
            }).forEach(function(t) {
                switch (t) {
                  case "context":
                  case "playback_method":
                    var n = e.params.video[t];
                    n = Object(a.isArray)(n) ? n[0] : n, r.video[t] = x[t][n];
                    break;

                  case "frameworks":
                    break;

                  default:
                    r.video[t] = e.params.video[t];
                }
            }), e.params.video.frameworks && Object(a.isArray)(e.params.video.frameworks) && (r.video_frameworks = e.params.video.frameworks)), 
            m && (r.video = r.video || {}, Object.keys(m).filter(function(e) {
                return l()(j, e);
            }).forEach(function(e) {
                switch (e) {
                  case "minduration":
                  case "maxduration":
                    "number" != typeof r.video[e] && (r.video[e] = m[e]);
                    break;

                  case "skip":
                    "boolean" != typeof r.video.skippable && (r.video.skippable = 1 === m[e]);
                    break;

                  case "skipafter":
                    "number" != typeof r.video.skipoffset && (r.video.skippoffset = m[e]);
                    break;

                  case "playbackmethod":
                    if ("number" != typeof r.video.playback_method) {
                        var t = m[e];
                        (t = Object(a.isArray)(t) ? t[0] : t) >= 1 && t <= 4 && (r.video.playback_method = t);
                    }
                    break;

                  case "api":
                    if (!r.video_frameworks && Object(a.isArray)(m[e])) {
                        var n = m[e].map(function(e) {
                            var r = 4 === e ? 5 : 5 === e ? 4 : e;
                            if (r >= 1 && r <= 5) return r;
                        }).filter(function(e) {
                            return e;
                        });
                        r.video_frameworks = n;
                    }
                }
            })), e.renderer && (r.video = v({}, r.video, {
                custom_renderer_present: !0
            })), e.params.frameworks && Object(a.isArray)(e.params.frameworks) && (r.banner_frameworks = e.params.frameworks);
            var b = p()(d.a.getAdUnits(), function(r) {
                return e.transactionId === r.transactionId;
            });
            return b && b.mediaTypes && b.mediaTypes.banner && r.ad_types.push(o.b), 
            0 === r.ad_types.length && delete r.ad_types, r;
        }
        function M(e) {
            var r = [], t = {};
            if (Object(a.isArray)(e) && 2 === e.length && !Object(a.isArray)(e[0])) t.width = parseInt(e[0], 10), 
            t.height = parseInt(e[1], 10), r.push(t); else if ("object" === b(e)) for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (t = {}).width = parseInt(i[0], 10), t.height = parseInt(i[1], 10), 
                r.push(t);
            }
            return r;
        }
        function z(e) {
            return !!e.params.user;
        }
        function D(e) {
            return !!parseInt(e.params.member, 10);
        }
        function B(e) {
            if (e.params) return !!e.params.app;
        }
        function F(e) {
            return e.params && e.params.app ? !!e.params.app.id : !!e.params.app;
        }
        function V(e) {
            return !!e.debug;
        }
        function J(e) {
            return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === o.a;
        }
        function W(e) {
            var r = !1, t = e.params, n = e.params.video;
            return t.frameworks && Object(a.isArray)(t.frameworks) && (r = l()(e.params.frameworks, 6)), 
            !r && n && n.frameworks && Object(a.isArray)(n.frameworks) && (r = l()(e.params.video.frameworks, 6)), 
            r;
        }
        function H(e, r, t) {
            Object(a.isEmpty)(e.video) && (e.video = {}), e.video[r] = t;
        }
        function L(e) {
            var r, t;
            r = e.adUnitCode, (t = document.getElementById(r).querySelectorAll("div[id^='google_ads']"))[0] && t[0].style.setProperty("display", "none"), 
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
                }, $.bind(null, e));
            });
        }
        function $(e, r, t) {
            e.renderer.handleVideoEvent({
                id: r,
                eventName: t
            });
        }
        function K(e, r, t, a) {
            return r && (a ? e.push({
                source: t,
                id: r,
                rti_partner: a
            }) : e.push({
                source: t,
                id: r
            })), e;
        }
        Object(s.registerBidder)(E), window.pbjs.installedModules.push("appnexusBidAdapter");
    }
}, [ 290 ]);

pbjsChunk([ 308 ], {
    379: function(n, t, e) {
        n.exports = e(380);
    },
    380: function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), e.d(t, "allowAuction", function() {
            return C;
        }), e.d(t, "userCMP", function() {
            return f;
        }), e.d(t, "consentTimeout", function() {
            return p;
        }), e.d(t, "gdprScope", function() {
            return g;
        }), e.d(t, "staticConsentData", function() {
            return b;
        }), t.requestBidsHook = j, t.resetConsentData = function() {
            m = void 0, f = void 0, v = 0, i.gdprDataHandler.setConsentData(null);
        }, t.setConsentConfig = A;
        var o = e(0), a = e(3), i = e(8), c = e(12), r = e.n(c), s = e(81), d = e.n(s);
        function l(n) {
            return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                return typeof n;
            } : function(n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
            })(n);
        }
        function u(n, t, e) {
            return t in n ? Object.defineProperty(n, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[t] = e, n;
        }
        var f, p, g, b, m, C = {
            value: true,
            definedInConfig: !1
        }, v = 0, w = !1, y = {
            iab: function(n, t, e) {
                function a(a, i) {
                    Object(o.logInfo)("Received a response from CMP", a), i ? !1 !== a.gdprApplies && "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus || n(a, e) : t("CMP unable to register callback function.  Please check CMP setup.", e);
                }
                var i = function() {
                    var t = {};
                    function a() {
                        t.getConsentData && t.getVendorConsents && (Object(o.logInfo)("Received all requested responses from CMP", t), 
                        n(t, e));
                    }
                    return {
                        consentDataCallback: function(n) {
                            t.getConsentData = n, a();
                        },
                        vendorConsentsCallback: function(n) {
                            t.getVendorConsents = n, a();
                        }
                    };
                }(), c = {}, r = function() {
                    for (var n, t, e = window; !n; ) {
                        try {
                            if ("function" == typeof e.__tcfapi || "function" == typeof e.__cmp) {
                                "function" == typeof e.__tcfapi ? (v = 2, t = e.__tcfapi) : (v = 1, 
                                t = e.__cmp), n = e;
                                break;
                            }
                        } catch (n) {}
                        try {
                            if (e.frames.__tcfapiLocator) {
                                v = 2, n = e;
                                break;
                            }
                        } catch (n) {}
                        try {
                            if (e.frames.__cmpLocator) {
                                v = 1, n = e;
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
                }(), s = r.cmpFrame, l = r.cmpFunction;
                if (!s) return t("CMP not found.", e);
                Object(o.isFn)(l) ? (Object(o.logInfo)("Detected CMP API is directly accessible, calling it now..."), 
                1 === v ? (l("getConsentData", null, i.consentDataCallback), l("getVendorConsents", null, i.vendorConsentsCallback)) : 2 === v && l("addEventListener", v, a)) : 1 === v && window.$sf && window.$sf.ext && "function" == typeof window.$sf.ext.cmp ? (Object(o.logInfo)("Detected Prebid.js is encased in a SafeFrame and CMP is registered, calling it now..."), 
                f("getConsentData", i.consentDataCallback), f("getVendorConsents", i.vendorConsentsCallback)) : (Object(o.logInfo)("Detected CMP is outside the current iframe where Prebid.js is located, calling it now..."), 
                1 === v ? (p("getConsentData", s, i.consentDataCallback), p("getVendorConsents", s, i.vendorConsentsCallback)) : 2 === v && p("addEventListener", s, a));
                function f(n, t) {
                    var a = e.adUnits, i = 1, c = 1;
                    if (Array.isArray(a) && a.length > 0) {
                        var r = Object(o.getAdUnitSizes)(a[0]);
                        i = r[0][0], c = r[0][1];
                    }
                    window.$sf.ext.register(i, c, function(e, o) {
                        if ("cmpReturn" === e) {
                            var a = "getConsentData" === n ? o.vendorConsentData : o.vendorConsents;
                            t(a);
                        }
                    }), window.$sf.ext.cmp(n);
                }
                function p(n, t, e) {
                    var o = 2 === v ? "__tcfapi" : "__cmp", a = "".concat(o, "Call");
                    function i(n) {
                        var t = "".concat(o, "Return"), e = "string" == typeof n.data && d()(n.data, t) ? JSON.parse(n.data) : n.data;
                        if (e[t] && e[t].callId) {
                            var a = e[t];
                            void 0 !== c[a.callId] && c[a.callId](a.returnValue, a.success);
                        }
                    }
                    2 === v ? (window[o] = function(n, e, o, i) {
                        var r = Math.random() + "", s = u({}, a, {
                            command: n,
                            version: e,
                            parameter: i,
                            callId: r
                        });
                        c[r] = o, t.postMessage(s, "*");
                    }, window.addEventListener("message", i, !1), window[o](n, v, e)) : (window[o] = function(n, e, o) {
                        var i = Math.random() + "", r = u({}, a, {
                            command: n,
                            parameter: e,
                            callId: i
                        });
                        c[i] = o, t.postMessage(r, "*");
                    }, window.addEventListener("message", i, !1), window[o](n, void 0, e));
                }
            },
            static: function(n, t, e) {
                n(b, e);
            }
        };
        function j(n, t) {
            var e = {
                context: this,
                args: [ t ],
                nextFn: n,
                adUnits: t.adUnits || pbjs.adUnits,
                bidsBackHandler: t.bidsBackHandler,
                haveExited: !1,
                timer: null
            };
            return m ? (Object(o.logInfo)("User consent information already known.  Pulling internally stored information..."), 
            h(null, e)) : r()(Object.keys(y), f) ? (y[f].call(this, D, M, e), void (e.haveExited || (0 === p ? D(void 0, e) : e.timer = setTimeout(O.bind(null, e), p)))) : (Object(o.logWarn)("CMP framework (".concat(f, ") is not a supported framework.  Aborting consentManagement module and resuming auction.")), 
            e.nextFn.apply(e.context, e.args));
        }
        function D(n, t) {
            "static" === f && 2 === (v = n.getConsentData ? 1 : n.getTCData ? 2 : 0) && (n = n.getTCData);
            var e = 1 === v ? function(n) {
                var t = n && n.getConsentData && n.getConsentData.gdprApplies;
                return !("boolean" == typeof t && (!0 !== t || Object(o.isStr)(n.getConsentData.consentData) && Object(o.isPlainObject)(n.getVendorConsents) && Object.keys(n.getVendorConsents).length > 1));
            } : 2 === v ? function() {
                var t = n && "boolean" == typeof n.gdprApplies ? n.gdprApplies : g, e = n && n.tcString;
                return !("boolean" == typeof t && (!0 !== t || Object(o.isStr)(e)));
            } : null;
            C.definedInConfig && 2 === v ? Object(o.logWarn)("'allowAuctionWithoutConsent' ignored for TCF 2") : C.definedInConfig || 1 !== v || Object(o.logInfo)("'allowAuctionWithoutConsent' using system default: (".concat(true, ").")), 
            Object(o.isFn)(e) ? e(n) ? M("CMP returned unexpected value during lookup process.", t, n) : (clearTimeout(t.timer), 
            k(n), h(null, t)) : M("Unable to derive CMP version to process data.  Consent object does not conform to TCF v1 or v2 specs.", t, n);
        }
        function O(n) {
            2 === v ? (Object(o.logWarn)("No response from CMP, continuing auction..."), 
            k(void 0), h(null, n)) : M("CMP workflow exceeded timeout threshold.", n);
        }
        function M(n, t, e) {
            clearTimeout(t.timer), C.value && 1 === v && k(void 0), h(n, t, e);
        }
        function k(n) {
            1 === v ? m = {
                consentString: n ? n.getConsentData.consentData : void 0,
                vendorData: n ? n.getVendorConsents : void 0,
                gdprApplies: n ? n.getConsentData.gdprApplies : g
            } : (m = {
                consentString: n ? n.tcString : void 0,
                vendorData: n || void 0,
                gdprApplies: n && "boolean" == typeof n.gdprApplies ? n.gdprApplies : g
            }, n && n.addtlConsent && Object(o.isStr)(n.addtlConsent) && (m.addtlConsent = n.addtlConsent)), 
            m.apiVersion = v, i.gdprDataHandler.setConsentData(m);
        }
        function h(n, t, e) {
            if (!1 === t.haveExited) {
                t.haveExited = !0;
                var a = t.context, i = t.args, c = t.nextFn;
                n ? C.value && 1 === v ? (Object(o.logWarn)(n + " 'allowAuctionWithoutConsent' activated.", e), 
                c.apply(a, i)) : (Object(o.logError)(n + " Canceling auction as per consentManagement config.", e), 
                "function" == typeof t.bidsBackHandler ? t.bidsBackHandler() : Object(o.logError)("Error executing bidsBackHandler")) : c.apply(a, i);
            }
        }
        function A(n) {
            (n = n && (n.gdpr || n.usp ? n.gdpr : n)) && "object" === l(n) ? (Object(o.isStr)(n.cmpApi) ? f = n.cmpApi : (f = "iab", 
            Object(o.logInfo)("consentManagement config did not specify cmp.  Using system default setting (".concat("iab", ")."))), 
            Object(o.isNumber)(n.timeout) ? p = n.timeout : (p = 1e4, Object(o.logInfo)("consentManagement config did not specify timeout.  Using system default setting (".concat(1e4, ")."))), 
            "boolean" == typeof n.allowAuctionWithoutConsent && (C.value = n.allowAuctionWithoutConsent, 
            C.definedInConfig = !0), g = !0 === n.defaultGdprScope, Object(o.logInfo)("consentManagement module has been activated..."), 
            "static" === f && (Object(o.isPlainObject)(n.consentData) ? (b = n.consentData, 
            p = 0) : Object(o.logError)("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), 
            w || pbjs.requestBids.before(j, 50), w = !0) : Object(o.logWarn)("consentManagement config not defined, exiting consent manager");
        }
        a.b.getConfig("consentManagement", function(n) {
            return A(n.consentManagement);
        }), window.pbjs.installedModules.push("consentManagement");
    }
}, [ 379 ]);

pbjsChunk([ 2 ], {
    398: function(t, e, r) {
        t.exports = r(399);
    },
    399: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        }), __webpack_require__.d(__webpack_exports__, "ADAPTER_VERSION", function() {
            return ADAPTER_VERSION;
        }), __webpack_require__.d(__webpack_exports__, "PROFILE_ID_PUBLISHERTAG", function() {
            return PROFILE_ID_PUBLISHERTAG;
        }), __webpack_require__.d(__webpack_exports__, "FAST_BID_VERSION_CURRENT", function() {
            return FAST_BID_VERSION_CURRENT;
        }), __webpack_require__.d(__webpack_exports__, "spec", function() {
            return spec;
        }), __webpack_exports__.canFastBid = canFastBid, __webpack_exports__.getFastBidUrl = getFastBidUrl, 
        __webpack_exports__.tryGetCriteoFastBid = tryGetCriteoFastBid;
        var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__src_adloader_js__ = __webpack_require__(35), __WEBPACK_IMPORTED_MODULE_2__src_adapters_bidderFactory_js__ = __webpack_require__(1), __WEBPACK_IMPORTED_MODULE_3__src_config_js__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__ = __webpack_require__(2), __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js__ = __webpack_require__(11), __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js__), __WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__ = __webpack_require__(76), __WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__), __WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__ = __webpack_require__(7);
        function _extends() {
            return (_extends = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
                }
                return t;
            }).apply(this, arguments);
        }
        var GVLID = 91, ADAPTER_VERSION = 34, BIDDER_CODE = "criteo", CDB_ENDPOINT = "https://bidder.criteo.com/cdb", PROFILE_ID_INLINE = 207, PROFILE_ID_PUBLISHERTAG = 185, storage = Object(__WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__.b)(GVLID), LOG_PREFIX = "Criteo: ", FAST_BID_VERSION_PLACEHOLDER = "%FAST_BID_VERSION%", FAST_BID_VERSION_CURRENT = 117, FAST_BID_VERSION_LATEST = "latest", FAST_BID_VERSION_NONE = "none", PUBLISHER_TAG_URL_TEMPLATE = "https://static.criteo.net/js/ld/publishertag.prebid" + FAST_BID_VERSION_PLACEHOLDER + ".js", FAST_BID_PUBKEY_E = 65537, FAST_BID_PUBKEY_N = "ztQYwCE5BU7T9CDM5he6rKoabstXRmkzx54zFPZkWbK530dwtLBDeaWBMxHBUT55CYyboR/EZ4efghPi3CoNGfGWezpjko9P6p2EwGArtHEeS4slhu/SpSIFMjG6fdrpRoNuIAMhq1Z+Pr/+HOd1pThFKeGFr2/NhtAg+TXAzaU=", spec = {
            code: BIDDER_CODE,
            gvlid: GVLID,
            supportedMediaTypes: [ __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__.b, __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__.d, __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__.c ],
            isBidRequestValid: function(t) {
                return !(!t || !t.params || !t.params.zoneId && !t.params.networkId) && !(hasVideoMediaType(t) && !hasValidVideoMediaType(t));
            },
            buildRequests: function(t, e) {
                var r, i, s = __WEBPACK_IMPORTED_MODULE_3__src_config_js__.b.getLegacyFpd(__WEBPACK_IMPORTED_MODULE_3__src_config_js__.b.getConfig("ortb2")) || {};
                _extends(e, {
                    publisherExt: s.context,
                    userExt: s.user,
                    ceh: __WEBPACK_IMPORTED_MODULE_3__src_config_js__.b.getConfig("criteo.ceh")
                });
                var a = __WEBPACK_IMPORTED_MODULE_3__src_config_js__.b.getConfig("criteo.fastBidVersion"), _ = canFastBid(a);
                if (!publisherTagAvailable() && _) {
                    window.Criteo = window.Criteo || {}, window.Criteo.usePrebidEvents = !1, 
                    tryGetCriteoFastBid();
                    var o = getFastBidUrl(a);
                    setTimeout(function() {
                        Object(__WEBPACK_IMPORTED_MODULE_1__src_adloader_js__.a)(o, BIDDER_CODE);
                    }, e.timeout);
                }
                if (publisherTagAvailable()) {
                    var n = new Criteo.PubTag.Adapters.Prebid(PROFILE_ID_PUBLISHERTAG, ADAPTER_VERSION, t, e, "6.6.0");
                    r = n.buildCdbUrl(), i = n.buildCdbRequest();
                } else {
                    var c = buildContext(t, e);
                    r = buildCdbUrl(c), i = buildCdbRequest(c, t, e);
                }
                if (i) return {
                    method: "POST",
                    url: r,
                    data: i,
                    bidRequests: t
                };
            },
            interpretResponse: function(t, e) {
                var r = t.body || t;
                if (publisherTagAvailable()) {
                    var i = Criteo.PubTag.Adapters.Prebid.GetAdapter(e);
                    if (i) return i.interpretResponse(r, e);
                }
                var s = [];
                return r && r.slots && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.isArray)(r.slots) && r.slots.forEach(function(t) {
                    var r = __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js___default()(e.bidRequests, function(e) {
                        return e.adUnitCode === t.impid && (!e.params.zoneId || parseInt(e.params.zoneId) === t.zoneid);
                    }), i = r.bidId, a = {
                        requestId: i,
                        adId: t.bidId || Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.getUniqueIdentifierStr)(),
                        cpm: t.cpm,
                        currency: t.currency,
                        netRevenue: !0,
                        ttl: t.ttl || 60,
                        creativeId: t.creativecode,
                        width: t.width,
                        height: t.height,
                        dealId: t.dealCode
                    };
                    t.adomain && (a.meta = _extends({}, a.meta, {
                        advertiserDomains: t.adomain
                    })), t.native ? r.params.nativeCallback ? a.ad = createNativeAd(i, t.native, r.params.nativeCallback) : (a.native = createPrebidNativeAd(t.native), 
                    a.mediaType = __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__.c) : t.video ? (a.vastUrl = t.displayurl, 
                    a.mediaType = __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__.d) : a.ad = t.creative, 
                    s.push(a);
                }), s;
            },
            onTimeout: function(t) {
                if (publisherTagAvailable() && Array.isArray(t)) {
                    var e = [];
                    t.forEach(function(t) {
                        -1 === e.indexOf(t.auctionId) && (e.push(t.auctionId), Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidTimeout());
                    });
                }
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
            var i = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.parseUrl)(r).search, s = {
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
            e += "&wv=" + encodeURIComponent("6.6.0"), e += "&cb=" + String(Math.floor(99999999999 * Math.random())), 
            t.amp && (e += "&im=1"), t.debug && (e += "&debug=1"), t.noLog && (e += "&nolog=1"), 
            e;
        }
        function checkNativeSendId(t) {
            return !(t.nativeParams && (t.nativeParams.image && (!0 !== t.nativeParams.image.sendId || !0 === t.nativeParams.image.sendTargetingKeys) || t.nativeParams.icon && (!0 !== t.nativeParams.icon.sendId || !0 === t.nativeParams.icon.sendTargetingKeys) || t.nativeParams.clickUrl && (!0 !== t.nativeParams.clickUrl.sendId || !0 === t.nativeParams.clickUrl.sendTargetingKeys) || t.nativeParams.displayUrl && (!0 !== t.nativeParams.displayUrl.sendId || !0 === t.nativeParams.displayUrl.sendTargetingKeys) || t.nativeParams.privacyLink && (!0 !== t.nativeParams.privacyLink.sendId || !0 === t.nativeParams.privacyLink.sendTargetingKeys) || t.nativeParams.privacyIcon && (!0 !== t.nativeParams.privacyIcon.sendId || !0 === t.nativeParams.privacyIcon.sendTargetingKeys)));
        }
        function buildCdbRequest(t, e, r) {
            var i, s = {
                publisher: {
                    url: t.url,
                    ext: r.publisherExt
                },
                slots: e.map(function(t) {
                    i = t.params.networkId || i;
                    var e = {
                        impid: t.adUnitCode,
                        transactionid: t.transactionId,
                        auctionId: t.auctionId
                    };
                    if (t.params.zoneId && (e.zoneid = t.params.zoneId), Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.deepAccess)(t, "ortb2Imp.ext") && (e.ext = t.ortb2Imp.ext), 
                    t.params.ext && (e.ext = _extends({}, e.ext, t.params.ext)), 
                    t.params.publisherSubId && (e.publishersubid = t.params.publisherSubId), 
                    t.params.nativeCallback || Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.deepAccess)(t, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__.c)) ? (e.native = !0, 
                    checkNativeSendId(t) || Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.logWarn)(LOG_PREFIX + "all native assets containing URL should be sent as placeholders with sendId(icon, image, clickUrl, displayUrl, privacyLink, privacyIcon)"), 
                    e.sizes = parseSizes(retrieveBannerSizes(t), parseNativeSize)) : e.sizes = parseSizes(retrieveBannerSizes(t), parseSize), 
                    hasVideoMediaType(t)) {
                        var r = {
                            playersizes: parseSizes(Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.deepAccess)(t, "mediaTypes.video.playerSize"), parseSize),
                            mimes: t.mediaTypes.video.mimes,
                            protocols: t.mediaTypes.video.protocols,
                            maxduration: t.mediaTypes.video.maxduration,
                            api: t.mediaTypes.video.api,
                            skip: t.mediaTypes.video.skip,
                            placement: t.mediaTypes.video.placement,
                            minduration: t.mediaTypes.video.minduration,
                            playbackmethod: t.mediaTypes.video.playbackmethod,
                            startdelay: t.mediaTypes.video.startdelay
                        }, s = t.params.video;
                        void 0 !== s && (r.skip = r.skip || s.skip || 0, r.placement = r.placement || s.placement, 
                        r.minduration = r.minduration || s.minduration, r.playbackmethod = r.playbackmethod || s.playbackmethod, 
                        r.startdelay = r.startdelay || s.startdelay || 0), e.video = r;
                    }
                    return e;
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
            return Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.deepAccess)(t, "mediaTypes.banner.sizes") || t.sizes;
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
            return void 0 !== Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.deepAccess)(t, "mediaTypes.video");
        }
        function hasValidVideoMediaType(t) {
            var e = !0;
            if ([ "mimes", "playerSize", "maxduration", "protocols", "api", "skip", "placement", "playbackmethod" ].forEach(function(r) {
                void 0 === Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.deepAccess)(t, "mediaTypes.video." + r) && void 0 === Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.deepAccess)(t, "params.video." + r) && (e = !1, 
                Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.logError)("Criteo Bid Adapter: mediaTypes.video." + r + " is required"));
            }), e) {
                var r = t.mediaTypes.video.placement || t.params.video.placement;
                if ("instream" == t.mediaTypes.video.context && 1 === r) return !0;
                if ("outstream" == t.mediaTypes.video.context && 1 !== r) return !0;
            }
            return !1;
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
        function canFastBid(t) {
            return t !== FAST_BID_VERSION_NONE;
        }
        function getFastBidUrl(t) {
            var e;
            if (t === FAST_BID_VERSION_LATEST) e = ""; else if (t) {
                String(t).split(".")[0] < 102 && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.logWarn)("Specifying a Fastbid version which is not supporting version selection."), 
                e = "." + t;
            } else e = "." + FAST_BID_VERSION_CURRENT;
            return PUBLISHER_TAG_URL_TEMPLATE.replace(FAST_BID_VERSION_PLACEHOLDER, e);
        }
        function tryGetCriteoFastBid() {
            try {
                var fastBidStorageKey = "criteo_fast_bid", hashPrefix = "// Hash: ", fastBidFromStorage = storage.getDataFromLocalStorage(fastBidStorageKey);
                if (null !== fastBidFromStorage) {
                    var firstLineEndPosition = fastBidFromStorage.indexOf("\n"), firstLine = fastBidFromStorage.substr(0, firstLineEndPosition).trim();
                    if (firstLine.substr(0, hashPrefix.length) !== hashPrefix) Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.logWarn)("No hash found in FastBid"), 
                    storage.removeDataFromLocalStorage(fastBidStorageKey); else {
                        var publisherTagHash = firstLine.substr(hashPrefix.length), publisherTag = fastBidFromStorage.substr(firstLineEndPosition + 1);
                        Object(__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__.verify)(publisherTag, publisherTagHash, FAST_BID_PUBKEY_N, FAST_BID_PUBKEY_E) ? (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.logInfo)("Using Criteo FastBid"), 
                        eval(publisherTag)) : (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.logWarn)("Invalid Criteo FastBid found"), 
                        storage.removeDataFromLocalStorage(fastBidStorageKey));
                    }
                }
            } catch (t) {}
        }
        Object(__WEBPACK_IMPORTED_MODULE_2__src_adapters_bidderFactory_js__.registerBidder)(spec), 
        window.pbjs.installedModules.push("criteoBidAdapter");
    },
    76: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = r(77), s = r(78);
        e.verify = function(t, e, r, a) {
            var _ = new i.BigInteger(i.b64toHex(e)), o = new i.BigInteger(i.b64toHex(r)), n = _.modPowInt(a, o);
            return i.removeExtraSymbols(n.toHexString()) === s.Sha256.hash(t);
        };
    },
    77: function(t, e, r) {
        "use strict";
        var i;
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = function() {
            function t(t) {
                null !== t && this.fromHexString(t);
            }
            return t.prototype.toHexString = function() {
                if (this.s < 0) return "-" + this.negate().toHexString();
                var t, e = !1, r = "", i = this.t, s = this.DB - i * this.DB % 4;
                if (i-- > 0) for (s < this.DB && (t = this[i] >> s) > 0 && (e = !0, 
                r = d(t)); i >= 0; ) s < 4 ? (t = (this[i] & (1 << s) - 1) << 4 - s, 
                t |= this[--i] >> (s += this.DB - 4)) : (t = this[i] >> (s -= 4) & 15, 
                s <= 0 && (s += this.DB, --i)), t > 0 && (e = !0), e && (r += d(t));
                return e ? r : "0";
            }, t.prototype.fromHexString = function(e) {
                if (null !== e) {
                    this.t = 0, this.s = 0;
                    for (var r = e.length, i = !1, s = 0; --r >= 0; ) {
                        var a = p(e, r);
                        a < 0 ? "-" == e.charAt(r) && (i = !0) : (i = !1, 0 == s ? this[this.t++] = a : s + 4 > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - s) - 1) << s, 
                        this[this.t++] = a >> this.DB - s) : this[this.t - 1] |= a << s, 
                        (s += 4) >= this.DB && (s -= this.DB));
                    }
                    0, this.clamp(), i && t.ZERO.subTo(this, this);
                }
            }, t.prototype.negate = function() {
                var e = a();
                return t.ZERO.subTo(this, e), e;
            }, t.prototype.abs = function() {
                return this.s < 0 ? this.negate() : this;
            }, t.prototype.mod = function(e) {
                var r = a();
                return this.abs().divRemTo(e, null, r), this.s < 0 && r.compareTo(t.ZERO) > 0 && e.subTo(r, r), 
                r;
            }, t.prototype.copyTo = function(t) {
                for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
                t.t = this.t, t.s = this.s;
            }, t.prototype.lShiftTo = function(t, e) {
                for (var r = t % this.DB, i = this.DB - r, s = (1 << i) - 1, a = Math.floor(t / this.DB), _ = this.s << r & this.DM, o = this.t - 1; o >= 0; --o) e[o + a + 1] = this[o] >> i | _, 
                _ = (this[o] & s) << r;
                for (o = a - 1; o >= 0; --o) e[o] = 0;
                e[a] = _, e.t = this.t + a + 1, e.s = this.s, e.clamp();
            }, t.prototype.invDigit = function() {
                if (this.t < 1) return 0;
                var t = this[0];
                if (0 == (1 & t)) return 0;
                var e = 3 & t;
                return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e;
            }, t.prototype.dlShiftTo = function(t, e) {
                var r;
                for (r = this.t - 1; r >= 0; --r) e[r + t] = this[r];
                for (r = t - 1; r >= 0; --r) e[r] = 0;
                e.t = this.t + t, e.s = this.s;
            }, t.prototype.squareTo = function(t) {
                for (var e = this.abs(), r = t.t = 2 * e.t; --r >= 0; ) t[r] = 0;
                for (r = 0; r < e.t - 1; ++r) {
                    var i = e.am(r, e[r], t, 2 * r, 0, 1);
                    (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, i, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV, 
                    t[r + e.t + 1] = 1);
                }
                t.t > 0 && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)), t.s = 0, 
                t.clamp();
            }, t.prototype.multiplyTo = function(e, r) {
                var i = this.abs(), s = e.abs(), a = i.t;
                for (r.t = a + s.t; --a >= 0; ) r[a] = 0;
                for (a = 0; a < s.t; ++a) r[a + i.t] = i.am(0, s[a], r, a, 0, i.t);
                r.s = 0, r.clamp(), this.s != e.s && t.ZERO.subTo(r, r);
            }, t.prototype.divRemTo = function(e, r, i) {
                var s = e.abs();
                if (!(s.t <= 0)) {
                    var o = this.abs();
                    if (o.t < s.t) return null != r && r.fromHexString("0"), void (null != i && this.copyTo(i));
                    null == i && (i = a());
                    var n = a(), c = this.s, p = e.s, d = this.DB - _(s[s.t - 1]);
                    d > 0 ? (s.lShiftTo(d, n), o.lShiftTo(d, i)) : (s.copyTo(n), 
                    o.copyTo(i));
                    var u = n.t, l = n[u - 1];
                    if (0 != l) {
                        var h = l * (1 << this.F1) + (u > 1 ? n[u - 2] >> this.F2 : 0), f = this.FV / h, E = (1 << this.F1) / h, v = 1 << this.F2, m = i.t, T = m - u, b = null == r ? a() : r;
                        for (n.dlShiftTo(T, b), i.compareTo(b) >= 0 && (i[i.t++] = 1, 
                        i.subTo(b, i)), t.ONE.dlShiftTo(u, b), b.subTo(n, n); n.t < u; ) n[n.t++] = 0;
                        for (;--T >= 0; ) {
                            var D = i[--m] == l ? this.DM : Math.floor(i[m] * f + (i[m - 1] + v) * E);
                            if ((i[m] += n.am(0, D, i, T, 0, u)) < D) for (n.dlShiftTo(T, b), 
                            i.subTo(b, i); i[m] < --D; ) i.subTo(b, i);
                        }
                        null != r && (i.drShiftTo(u, r), c != p && t.ZERO.subTo(r, r)), 
                        i.t = u, i.clamp(), d > 0 && i.rShiftTo(d, i), c < 0 && t.ZERO.subTo(i, i);
                    }
                }
            }, t.prototype.rShiftTo = function(t, e) {
                e.s = this.s;
                var r = Math.floor(t / this.DB);
                if (r >= this.t) e.t = 0; else {
                    var i = t % this.DB, s = this.DB - i, a = (1 << i) - 1;
                    e[0] = this[r] >> i;
                    for (var _ = r + 1; _ < this.t; ++_) e[_ - r - 1] |= (this[_] & a) << s, 
                    e[_ - r] = this[_] >> i;
                    i > 0 && (e[this.t - r - 1] |= (this.s & a) << s), e.t = this.t - r, 
                    e.clamp();
                }
            }, t.prototype.drShiftTo = function(t, e) {
                for (var r = t; r < this.t; ++r) e[r - t] = this[r];
                e.t = Math.max(this.t - t, 0), e.s = this.s;
            }, t.prototype.subTo = function(t, e) {
                for (var r = 0, i = 0, s = Math.min(t.t, this.t); r < s; ) i += this[r] - t[r], 
                e[r++] = i & this.DM, i >>= this.DB;
                if (t.t < this.t) {
                    for (i -= t.s; r < this.t; ) i += this[r], e[r++] = i & this.DM, 
                    i >>= this.DB;
                    i += this.s;
                } else {
                    for (i += this.s; r < t.t; ) i -= t[r], e[r++] = i & this.DM, 
                    i >>= this.DB;
                    i -= t.s;
                }
                e.s = i < 0 ? -1 : 0, i < -1 ? e[r++] = this.DV + i : i > 0 && (e[r++] = i), 
                e.t = r, e.clamp();
            }, t.prototype.clamp = function() {
                for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; ) --this.t;
            }, t.prototype.modPowInt = function(t, e) {
                var r;
                return r = t < 256 || e.isEven() ? new u(e) : new l(e), this.exp(t, r);
            }, t.prototype.exp = function(e, r) {
                if (e > 4294967295 || e < 1) return t.ONE;
                var i = a(), s = a(), o = r.convert(this), n = _(e) - 1;
                for (o.copyTo(i); --n >= 0; ) if (r.sqrTo(i, s), (e & 1 << n) > 0) r.mulTo(s, o, i); else {
                    var c = i;
                    i = s, s = c;
                }
                return r.revert(i);
            }, t.prototype.isEven = function() {
                return 0 == (this.t > 0 ? 1 & this[0] : this.s);
            }, t.prototype.compareTo = function(t) {
                var e = this.s - t.s;
                if (0 != e) return e;
                var r = this.t;
                if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;
                for (;--r >= 0; ) if (0 != (e = this[r] - t[r])) return e;
                return 0;
            }, t.prototype.am1 = function(t, e, r, i, s, a) {
                for (;--a >= 0; ) {
                    var _ = e * this[t++] + r[i] + s;
                    s = Math.floor(_ / 67108864), r[i++] = 67108863 & _;
                }
                return s;
            }, t.prototype.am2 = function(t, e, r, i, s, a) {
                for (var _ = 32767 & e, o = e >> 15; --a >= 0; ) {
                    var n = 32767 & this[t], c = this[t++] >> 15, p = o * n + c * _;
                    s = ((n = _ * n + ((32767 & p) << 15) + r[i] + (1073741823 & s)) >>> 30) + (p >>> 15) + o * c + (s >>> 30), 
                    r[i++] = 1073741823 & n;
                }
                return s;
            }, t.prototype.am3 = function(t, e, r, i, s, a) {
                for (var _ = 16383 & e, o = e >> 14; --a >= 0; ) {
                    var n = 16383 & this[t], c = this[t++] >> 14, p = o * n + c * _;
                    s = ((n = _ * n + ((16383 & p) << 14) + r[i] + s) >> 28) + (p >> 14) + o * c, 
                    r[i++] = 268435455 & n;
                }
                return s;
            }, t;
        }();
        function a() {
            return new s(null);
        }
        function _(t) {
            var e, r = 1;
            return 0 != (e = t >>> 16) && (t = e, r += 16), 0 != (e = t >> 8) && (t = e, 
            r += 8), 0 != (e = t >> 4) && (t = e, r += 4), 0 != (e = t >> 2) && (t = e, 
            r += 2), 0 != (e = t >> 1) && (t = e, r += 1), r;
        }
        e.BigInteger = s, e.nbi = a, e.nbits = _;
        var o, n, c = [];
        for (o = "0".charCodeAt(0), n = 0; n <= 9; ++n) c[o++] = n;
        for (o = "a".charCodeAt(0), n = 10; n < 36; ++n) c[o++] = n;
        for (o = "A".charCodeAt(0), n = 10; n < 36; ++n) c[o++] = n;
        function p(t, e) {
            var r = c[t.charCodeAt(e)];
            return null == r ? -1 : r;
        }
        e.intAt = p;
        function d(t) {
            return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t);
        }
        e.int2char = d;
        e.b64toHex = function(t) {
            var e, r = "", i = 0, s = 0;
            for (e = 0; e < t.length && "=" != t.charAt(e); ++e) {
                var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t.charAt(e));
                a < 0 || (0 == i ? (r += d(a >> 2), s = 3 & a, i = 1) : 1 == i ? (r += d(s << 2 | a >> 4), 
                s = 15 & a, i = 2) : 2 == i ? (r += d(s), r += d(a >> 2), s = 3 & a, 
                i = 3) : (r += d(s << 2 | a >> 4), r += d(15 & a), i = 0));
            }
            return 1 == i && (r += d(s << 2)), r;
        }, e.removeExtraSymbols = function(t) {
            return t.replace(/^1f+00/, "").replace("3031300d060960864801650304020105000420", "");
        };
        var u = function() {
            function t(t) {
                this.m = t;
            }
            return t.prototype.convert = function(t) {
                return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
            }, t.prototype.revert = function(t) {
                return t;
            }, t.prototype.reduce = function(t) {
                t.divRemTo(this.m, null, t);
            }, t.prototype.mulTo = function(t, e, r) {
                t.multiplyTo(e, r), this.reduce(r);
            }, t.prototype.sqrTo = function(t, e) {
                t.squareTo(e), this.reduce(e);
            }, t;
        }(), l = function() {
            function t(t) {
                this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, 
                this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t;
            }
            return t.prototype.convert = function(t) {
                var e = a();
                return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), 
                t.s < 0 && e.compareTo(s.ZERO) > 0 && this.m.subTo(e, e), e;
            }, t.prototype.revert = function(t) {
                var e = a();
                return t.copyTo(e), this.reduce(e), e;
            }, t.prototype.reduce = function(t) {
                for (;t.t <= this.mt2; ) t[t.t++] = 0;
                for (var e = 0; e < this.m.t; ++e) {
                    var r = 32767 & t[e], i = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                    for (t[r = e + this.m.t] += this.m.am(0, i, t, e, 0, this.m.t); t[r] >= t.DV; ) t[r] -= t.DV, 
                    t[++r]++;
                }
                t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t);
            }, t.prototype.mulTo = function(t, e, r) {
                t.multiplyTo(e, r), this.reduce(r);
            }, t.prototype.sqrTo = function(t, e) {
                t.squareTo(e), this.reduce(e);
            }, t;
        }();
        function h(t) {
            var e = a();
            return e.fromHexString(t.toString()), e;
        }
        e.nbv = h, s.ZERO = h(0), s.ONE = h(1), "Microsoft Internet Explorer" == navigator.appName ? (s.prototype.am = s.prototype.am2, 
        i = 30) : "Netscape" != navigator.appName ? (s.prototype.am = s.prototype.am1, 
        i = 26) : (s.prototype.am = s.prototype.am3, i = 28), s.prototype.DB = i, 
        s.prototype.DM = (1 << i) - 1, s.prototype.DV = 1 << i;
        s.prototype.FV = Math.pow(2, 52), s.prototype.F1 = 52 - i, s.prototype.F2 = 2 * i - 52;
    },
    78: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
            function t() {}
            return t.hash = function(e) {
                e = t.utf8Encode(e || "");
                for (var r = [ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ], i = [ 1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225 ], s = (e += String.fromCharCode(128)).length / 4 + 2, a = Math.ceil(s / 16), _ = new Array(a), o = 0; o < a; o++) {
                    _[o] = new Array(16);
                    for (var n = 0; n < 16; n++) _[o][n] = e.charCodeAt(64 * o + 4 * n) << 24 | e.charCodeAt(64 * o + 4 * n + 1) << 16 | e.charCodeAt(64 * o + 4 * n + 2) << 8 | e.charCodeAt(64 * o + 4 * n + 3) << 0;
                }
                var c = 8 * (e.length - 1) / Math.pow(2, 32), p = 8 * (e.length - 1) >>> 0;
                _[a - 1][14] = Math.floor(c), _[a - 1][15] = p;
                for (o = 0; o < a; o++) {
                    for (var d = new Array(64), u = 0; u < 16; u++) d[u] = _[o][u];
                    for (u = 16; u < 64; u++) d[u] = t.q1(d[u - 2]) + d[u - 7] + t.q0(d[u - 15]) + d[u - 16] >>> 0;
                    var l = i[0], h = i[1], f = i[2], E = i[3], v = i[4], m = i[5], T = i[6], b = i[7];
                    for (u = 0; u < 64; u++) {
                        var D = b + t.z1(v) + t.Ch(v, m, T) + r[u] + d[u], y = t.z0(l) + t.Maj(l, h, f);
                        b = T, T = m, m = v, v = E + D >>> 0, E = f, f = h, h = l, 
                        l = D + y >>> 0;
                    }
                    i[0] = i[0] + l >>> 0, i[1] = i[1] + h >>> 0, i[2] = i[2] + f >>> 0, 
                    i[3] = i[3] + E >>> 0, i[4] = i[4] + v >>> 0, i[5] = i[5] + m >>> 0, 
                    i[6] = i[6] + T >>> 0, i[7] = i[7] + b >>> 0;
                }
                var O = new Array(i.length);
                for (b = 0; b < i.length; b++) O[b] = ("00000000" + i[b].toString(16)).slice(-8);
                return O.join("");
            }, t.utf8Encode = function(t) {
                try {
                    return new TextEncoder().encode(t).reduce(function(t, e) {
                        return t + String.fromCharCode(e);
                    }, "");
                } catch (e) {
                    return unescape(encodeURIComponent(t));
                }
            }, t.ROTR = function(t, e) {
                return e >>> t | e << 32 - t;
            }, t.z0 = function(e) {
                return t.ROTR(2, e) ^ t.ROTR(13, e) ^ t.ROTR(22, e);
            }, t.z1 = function(e) {
                return t.ROTR(6, e) ^ t.ROTR(11, e) ^ t.ROTR(25, e);
            }, t.q0 = function(e) {
                return t.ROTR(7, e) ^ t.ROTR(18, e) ^ e >>> 3;
            }, t.q1 = function(e) {
                return t.ROTR(17, e) ^ t.ROTR(19, e) ^ e >>> 10;
            }, t.Ch = function(t, e, r) {
                return t & e ^ ~t & r;
            }, t.Maj = function(t, e, r) {
                return t & e ^ t & r ^ e & r;
            }, t;
        }();
        e.Sha256 = i;
    }
}, [ 398 ]);

pbjsChunk([ 283 ], {
    438: function(e, t, n) {
        e.exports = n(439);
    },
    439: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "coreStorage", function() {
            return u;
        }), t.findRootDomain = m, t.initSubmodule = w, n.d(t, "enrichmentsSubmodule", function() {
            return s;
        });
        var i = n(0), o = n(9), c = n(19), r = n(7), d = {}, a = window === window.top ? window : window.top, u = Object(r.a)("enrichmentFpd");
        function m() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.hostname;
            if (!u.cookiesAreEnabled()) return e;
            var t, n, o = e.split(".");
            if (2 == o.length) return e;
            var c = -2, r = "_rdc".concat(Date.now()), d = "writeable";
            do {
                t = o.slice(c).join(".");
                var a = new Date(Object(i.timestamp)() + 1e4).toUTCString();
                u.setCookie(r, d, a, "Lax", t, void 0);
                var m = u.getCookie(r, void 0);
                m === d ? (n = !1, u.setCookie(r, "", "Thu, 01 Jan 1970 00:00:01 GMT", void 0, t, void 0)) : (c += -1, 
                n = Math.abs(c) <= o.length);
            } while (n);
            return t;
        }
        function l() {
            var e;
            return Object(c.a)().referer && Object(i.mergeDeep)(d, {
                site: {
                    ref: Object(c.a)().referer
                }
            }), Object(c.a)().canonicalUrl && Object(i.mergeDeep)(d, {
                site: {
                    page: Object(c.a)().canonicalUrl
                }
            }), (e = function(e) {
                if (e && "string" == typeof e && 0 !== e.length) {
                    var t = e.match(/^(?:https?:\/\/)?(?:www\.)?(.*?(?=(\?|\#|\/|$)))/i);
                    return t && t[1];
                }
            }(Object(c.a)().canonicalUrl)) && (Object(i.mergeDeep)(d, {
                site: {
                    domain: e
                }
            }), Object(i.mergeDeep)(d, {
                site: {
                    publisher: {
                        domain: m(e)
                    }
                }
            })), function() {
                var e, t;
                try {
                    e = a.innerWidth || a.document.documentElement.clientWidth || a.document.body.clientWidth, 
                    t = a.innerHeight || a.document.documentElement.clientHeight || a.document.body.clientHeight;
                } catch (n) {
                    e = window.innerWidth || window.document.documentElement.clientWidth || window.document.body.clientWidth, 
                    t = window.innerHeight || window.document.documentElement.clientHeight || window.document.body.clientHeight;
                }
                Object(i.mergeDeep)(d, {
                    device: {
                        w: e,
                        h: t
                    }
                });
            }(), function() {
                var e;
                try {
                    e = a.document.querySelector("meta[name='keywords']");
                } catch (t) {
                    e = window.document.querySelector("meta[name='keywords']");
                }
                e && e.content && Object(i.mergeDeep)(d, {
                    site: {
                        keywords: e.content.replace(/\s/g, "")
                    }
                });
            }(), d;
        }
        function w(e, t) {
            return d = {}, e.skipEnrichments ? t : Object(i.mergeDeep)(l(), t);
        }
        var s = {
            name: "enrichments",
            queue: 2,
            init: w
        };
        Object(o.e)("firstPartyData", s), window.pbjs.installedModules.push("enrichmentFpdModule");
    }
}, [ 438 ]);

pbjsChunk([ 275 ], {
    461: function(e, t, o) {
        e.exports = o(462);
    },
    462: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.registerSubmodules = f, t.init = c;
        var n = o(3), i = o(9), u = o(14), r = o(28), s = [];
        function f(e) {
            s.push(e);
        }
        function c() {
            var e = n.b.getConfig("firstPartyData") || {}, t = n.b.getConfig("ortb2") || {};
            s.sort(function(e, t) {
                return (e.queue || 1) - (t.queue || 1);
            }).forEach(function(o) {
                t = o.init(e, t);
            }), n.b.setConfig({
                ortb2: t
            });
        }
        function a(e, t) {
            c(), e.call(this, t), r.e.getHooks({
                hook: a
            }).remove();
        }
        function b() {
            Object(i.a)("addBidderRequests").before(a);
        }
        Object(i.c)("firstPartyData", f), b(), Object(u.a)().refreshFpd = b, window.pbjs.installedModules.push("fpdModule");
    }
}, [ 461 ]);

pbjsChunk([ 270 ], {
    471: function(e, r, t) {
        e.exports = t(472);
    },
    472: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "purpose1Rule", function() {
            return A;
        }), t.d(r, "purpose2Rule", function() {
            return C;
        }), t.d(r, "purpose7Rule", function() {
            return D;
        }), t.d(r, "enforcementRules", function() {
            return E;
        }), t.d(r, "internal", function() {
            return V;
        }), r.getGvlid = H, r.validateRules = R, r.deviceAccessHook = T, r.userSyncHook = G, 
        r.userIdHook = M, r.makeBidRequestsHook = W, r.enableAnalyticsHook = I, 
        r.setEnforcementConfig = _;
        var n = t(0), o = t(3), a = t(8), c = t(11), i = t.n(c), s = t(12), l = t.n(s), u = t(1), p = t(9), d = t(7), f = t(10), b = t.n(f), g = t(5), v = t.n(g);
        function y(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r && (n = n.filter(function(r) {
                    return Object.getOwnPropertyDescriptor(e, r).enumerable;
                })), t.push.apply(t, n);
            }
            return t;
        }
        function O(e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {};
                r % 2 ? y(Object(t), !0).forEach(function(r) {
                    m(e, r, t[r]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
            }
            return e;
        }
        function m(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t, e;
        }
        function h() {
            return (h = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }
                return e;
            }).apply(this, arguments);
        }
        function j(e) {
            return (j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        var A, C, D, E, P = {
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
        }, k = [ {
            purpose: "storage",
            enforcePurpose: !0,
            enforceVendor: !0,
            vendorExceptions: []
        }, {
            purpose: "basicAds",
            enforcePurpose: !0,
            enforceVendor: !0,
            vendorExceptions: []
        } ], w = [], S = [], F = [], B = !1, V = {
            getGvlidForBidAdapter: function(e) {
                var r = null;
                if (e = e || o.b.getCurrentBidder()) {
                    var t = a.default.getBidAdapter(e);
                    t && t.getSpec && (r = t.getSpec().gvlid);
                }
                return r;
            },
            getGvlidForUserIdModule: function(e) {
                return "object" === j(e) ? e.gvlid : null;
            },
            getGvlidForAnalyticsAdapter: function(e) {
                return a.default.getAnalyticsAdapter(e) && (a.default.getAnalyticsAdapter(e).gvlid || null);
            }
        };
        function H(e) {
            var r = null;
            if (e) {
                var t = o.b.getConfig("gvlMapping"), n = "string" == typeof e ? e : e.name;
                if (t && t[n]) return r = t[n];
                r = V.getGvlidForBidAdapter(n) || V.getGvlidForUserIdModule(e) || V.getGvlidForAnalyticsAdapter(n);
            }
            return r;
        }
        function R(e, r, t, o) {
            var a = P[Object.keys(P).filter(function(r) {
                return P[r].name === e.purpose;
            })[0]].id;
            if (l()(e.vendorExceptions || [], t)) return !0;
            var c = Object(n.deepAccess)(r, "vendorData.purpose.consents.".concat(a)), i = Object(n.deepAccess)(r, "vendorData.vendor.consents.".concat(o)), s = Object(n.deepAccess)(r, "vendorData.purpose.legitimateInterests.".concat(a)), u = !1 === e.enforcePurpose || !0 === c, p = !1 === e.enforceVendor || !0 === i;
            return 2 === a ? u && p || !0 === s : u && p;
        }
        function T(e, r, t, c) {
            if (c = h({}, {
                hasEnforcementHook: !0
            }), Object(n.hasDeviceAccess)()) {
                var i = a.gdprDataHandler.getConsentData();
                if (i && i.gdprApplies) if (2 === i.apiVersion) {
                    var s = o.b.getCurrentBidder();
                    r = s && s != t && a.default.aliasRegistry[s] === t ? H(s) : H(t) || r;
                    var l = t || s;
                    R(A, i, l, r) ? (c.valid = !0, e.call(this, r, t, c)) : (l && Object(n.logWarn)("TCF2 denied device access for ".concat(l)), 
                    c.valid = !1, w.push(l), e.call(this, r, t, c));
                } else c.valid = !0, e.call(this, r, t, c); else c.valid = !0, e.call(this, r, t, c);
            } else Object(n.logWarn)("Device access is disabled by Publisher"), 
            c.valid = !1, e.call(this, r, t, c);
        }
        function G(e) {
            for (var r = a.gdprDataHandler.getConsentData(), t = arguments.length, c = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) c[i - 1] = arguments[i];
            if (r && r.gdprApplies) if (2 === r.apiVersion) {
                var s = o.b.getCurrentBidder(), l = H(s), u = R(A, r, s, l);
                u ? e.call.apply(e, [ this ].concat(c)) : (Object(n.logWarn)("User sync not allowed for ".concat(s)), 
                w.push(s));
            } else e.call.apply(e, [ this ].concat(c)); else e.call.apply(e, [ this ].concat(c));
        }
        function M(e, r, t) {
            if (t && t.gdprApplies) if (2 === t.apiVersion) {
                var o = r.map(function(e) {
                    var r = H(e.submodule), o = e.submodule.name;
                    if (R(A, t, o, r)) return e;
                    Object(n.logWarn)("User denied permission to fetch user id for ".concat(o, " User id module")), 
                    w.push(o);
                }).filter(function(e) {
                    return e;
                });
                e.call(this, o, O(O({}, t), {}, {
                    hasValidated: !0
                }));
            } else e.call(this, r, t); else e.call(this, r, t);
        }
        function W(e, r) {
            for (var t = a.gdprDataHandler.getConsentData(), o = arguments.length, c = new Array(o > 2 ? o - 2 : 0), i = 2; i < o; i++) c[i - 2] = arguments[i];
            t && t.gdprApplies && 2 === t.apiVersion ? (r.forEach(function(e) {
                e.bids = e.bids.filter(function(e) {
                    var r = e.bidder, o = H(r);
                    if (l()(S, r)) return !1;
                    var a = !!R(C, t, r, o);
                    return a || (Object(n.logWarn)("TCF2 blocked auction for ".concat(r)), 
                    S.push(r)), a;
                });
            }), e.call.apply(e, [ this, r ].concat(c))) : e.call.apply(e, [ this, r ].concat(c));
        }
        function I(e, r) {
            var t = a.gdprDataHandler.getConsentData();
            t && t.gdprApplies && 2 === t.apiVersion ? (Object(n.isArray)(r) || (r = [ r ]), 
            r = r.filter(function(e) {
                var r = e.provider, o = H(r), a = !!R(D, t, r, o);
                return a || (F.push(r), Object(n.logWarn)("TCF2 blocked analytics adapter ".concat(e.provider))), 
                a;
            }), e.call(this, r)) : e.call(this, r);
        }
        b.a.on(v.a.EVENTS.AUCTION_END, function() {
            var e = function(e) {
                return e.filter(function(r, t) {
                    return null !== r && e.indexOf(r) === t;
                });
            }, r = {
                storageBlocked: e(w),
                biddersBlocked: e(S),
                analyticsBlocked: e(F)
            };
            b.a.emit(v.a.EVENTS.TCF2_ENFORCEMENT, r);
        });
        var N = function(e) {
            return e.purpose === P.purpose1.name;
        }, U = function(e) {
            return e.purpose === P.purpose2.name;
        }, x = function(e) {
            return e.purpose === P.purpose7.name;
        };
        function _(e) {
            var r = Object(n.deepAccess)(e, "gdpr.rules");
            r ? E = r : (Object(n.logWarn)("TCF2: enforcing P1 and P2 by default"), 
            E = k), A = i()(E, N), C = i()(E, U), D = i()(E, x), A || (A = k[0]), 
            C || (C = k[1]), A && !B && (B = !0, d.d.before(T, 49), u.registerSyncInner.before(G, 48), 
            Object(p.a)("validateGdprEnforcement").before(M, 47)), C && Object(p.a)("makeBidRequests").before(W), 
            D && Object(p.a)("enableAnalyticsCb").before(I);
        }
        o.b.getConfig("consentManagement", function(e) {
            return _(e.consentManagement);
        }), window.pbjs.installedModules.push("gdprEnforcement");
    }
}, [ 471 ]);

pbjsChunk([ 259 ], {
    493: function(t, e, o) {
        t.exports = o(494);
    },
    494: function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), o.d(e, "_currentConfig", function() {
            return i;
        }), o.d(e, "appendGptSlots", function() {
            return p;
        }), o.d(e, "appendPbAdSlot", function() {
            return l;
        }), o.d(e, "makeBidRequestsHook", function() {
            return g;
        });
        var n = o(0), r = o(3), a = o(9), d = o(11), c = o.n(d), u = this, i = {}, s = !1, p = function(t) {
            var e = i.customGptSlotMatching;
            if (Object(n.isGptPubadsDefined)()) {
                var o = t.reduce(function(t, e) {
                    return t[e.code] = e, t;
                }, {});
                window.googletag.pubads().getSlots().forEach(function(t) {
                    var r = c()(Object.keys(o), e ? e(t) : Object(n.isAdUnitCodeMatchingSlot)(t));
                    if (r) {
                        var a = o[r];
                        a.ortb2Imp = a.ortb2Imp || {}, a.ortb2Imp.ext = a.ortb2Imp.ext || {}, 
                        a.ortb2Imp.ext.data = a.ortb2Imp.ext.data || {};
                        var d = a.ortb2Imp.ext.data;
                        d.adserver = d.adserver || {}, d.adserver.name = "gam", 
                        d.adserver.adslot = f(t.getAdUnitPath());
                    }
                });
            }
        }, f = function(t) {
            return (r.b.getConfig("gptPreAuction") || {}).mcmEnabled ? t.replace(/(^\/\d*),\d*\//, "$1/") : t;
        }, b = function(t, e) {
            var o = t.ortb2Imp.ext.data;
            if (o.pbadslot) return o.pbadslot;
            if (Object(n.isGptPubadsDefined)()) {
                var r = window.googletag.pubads().getSlots().filter(function(t) {
                    return t.getAdUnitPath() === e;
                });
                if (0 !== r.length) return 1 === r.length ? e : "".concat(e, "#").concat(t.code);
            }
        }, l = function(t) {
            var e = t.ortb2Imp.ext.data, o = i.customPbAdSlot;
            if (!e.pbadslot) if (o) e.pbadslot = o(t.code, Object(n.deepAccess)(e, "adserver.adslot")); else {
                try {
                    var r = document.getElementById(t.code);
                    if (r.dataset.adslotid) return void (e.pbadslot = r.dataset.adslotid);
                } catch (t) {}
                if (!Object(n.deepAccess)(e, "adserver.adslot")) return e.pbadslot = t.code, 
                !0;
                e.pbadslot = e.adserver.adslot;
            }
        }, g = function(t, e) {
            p(e);
            var o = i, r = o.useDefaultPreAuction, a = o.customPreAuction;
            e.forEach(function(t) {
                t.ortb2Imp = t.ortb2Imp || {}, t.ortb2Imp.ext = t.ortb2Imp.ext || {}, 
                t.ortb2Imp.ext.data = t.ortb2Imp.ext.data || {};
                var e = t.ortb2Imp.ext;
                if (a || r) {
                    var o, d = Object(n.deepAccess)(e, "data.adserver.adslot");
                    a ? o = a(t, d) : r && (o = b(t, d)), o && (e.gpid = e.data.pbadslot = o);
                } else {
                    var c = l(t);
                    e.gpid || c || (e.gpid = e.data.pbadslot);
                }
            });
            for (var d = arguments.length, c = new Array(d > 2 ? d - 2 : 0), s = 2; s < d; s++) c[s - 2] = arguments[s];
            return t.call.apply(t, [ u, e ].concat(c));
        }, m = function(t) {
            (i = Object(n.pick)(t, [ "enabled", function(t) {
                return !1 !== t;
            }, "customGptSlotMatching", function(t) {
                return "function" == typeof t && t;
            }, "customPbAdSlot", function(t) {
                return "function" == typeof t && t;
            }, "customPreAuction", function(t) {
                return "function" == typeof t && t;
            }, "useDefaultPreAuction", function(t) {
                return !0 === t;
            } ])).enabled ? s || (Object(a.a)("makeBidRequests").before(g), s = !0) : (Object(n.logInfo)("".concat("GPT Pre-Auction", ": Turning off module")), 
            i = {}, Object(a.a)("makeBidRequests").getHooks({
                hook: g
            }).remove(), s = !1);
        };
        r.b.getConfig("gptPreAuction", function(t) {
            return m(t.gptPreAuction);
        }), m({}), window.pbjs.installedModules.push("gptPreAuction");
    }
}, [ 493 ]);

pbjsChunk([ 166 ], {
    723: function(e, d, n) {
        e.exports = n(724);
    },
    724: function(e, d, n) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }), n.d(d, "pubProvidedIdSubmodule", function() {
            return t;
        });
        var o = n(9), i = n(0), t = {
            name: "pubProvidedId",
            decode: function(e) {
                var d = e ? {
                    pubProvidedId: e
                } : void 0;
                return Object(i.logInfo)("PubProvidedId: Decoded value " + JSON.stringify(d)), 
                d;
            },
            getId: function(e) {
                var d = e && e.params || {}, n = [];
                return Object(i.isArray)(d.eids) && (n = n.concat(d.eids)), "function" == typeof d.eidsFunction && (n = n.concat(d.eidsFunction())), 
                {
                    id: n
                };
            }
        };
        Object(o.e)("userId", t), window.pbjs.installedModules.push("pubProvidedIdSystem");
    }
}, [ 723 ]);

pbjsChunk([ 163 ], {
    731: function(e, r, t) {
        e.exports = t(732);
    },
    732: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.checkVideoPlacement = _, t.d(r, "spec", function() {
            return X;
        });
        var a = t(0), i = t(1), n = t(2), s = t(3), o = t(13);
        function d() {
            return (d = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                }
                return e;
            }).apply(this, arguments);
        }
        function c(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                r && (a = a.filter(function(r) {
                    return Object.getOwnPropertyDescriptor(e, r).enumerable;
                })), t.push.apply(t, a);
            }
            return t;
        }
        function p(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t, e;
        }
        function u(e) {
            return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        var l = "pubmatic", m = "PubMatic: ", b = "USD", g = void 0, f = "https://pubmatic.bbvms.com/r/".concat("$RENDERER", ".js"), h = {
            kadpageurl: "",
            gender: "",
            yob: "",
            lat: "",
            lon: "",
            wiid: "",
            profId: "",
            verId: ""
        }, y = "number", v = "string", O = "boolean", E = "array", I = {
            mimes: E,
            minduration: y,
            maxduration: y,
            startdelay: y,
            playbackmethod: E,
            api: E,
            protocols: E,
            w: y,
            h: y,
            battr: E,
            linearity: y,
            placement: y,
            minbitrate: y,
            maxbitrate: y,
            skip: y
        }, w = {
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
        }, j = 1, P = 2, T = 3, S = [ {
            id: w.SPONSOREDBY.ID,
            required: !0,
            data: {
                type: 1
            }
        }, {
            id: w.TITLE.ID,
            required: !0
        }, {
            id: w.IMAGE.ID,
            required: !0
        } ], D = {
            1: "PMP",
            5: "PREF",
            6: "PMPG"
        }, x = 1, Y = 2, k = {
            bootstrapPlayer: function(e) {
                var r = {
                    code: e.adUnitCode
                };
                if (e.vastXml ? r.vastXml = e.vastXml : e.vastUrl && (r.vastUrl = e.vastUrl), 
                e.vastXml || e.vastUrl) {
                    for (var t, i = k.getRendererId("pubmatic", e.rendererCode), n = document.getElementById(e.adUnitCode), s = 0; s < window.bluebillywig.renderers.length; s++) if (window.bluebillywig.renderers[s]._id === i) {
                        t = window.bluebillywig.renderers[s];
                        break;
                    }
                    t ? t.bootstrap(r, n) : Object(a.logWarn)("".concat(m, ": Couldn't find a renderer with ").concat(i));
                } else Object(a.logWarn)("".concat(m, ": No vastXml or vastUrl on bid, bailing..."));
            },
            newRenderer: function(e, r) {
                var t = f.replace("$RENDERER", e), i = o.a.install({
                    url: t,
                    loaded: !1,
                    adUnitCode: r
                });
                try {
                    i.setRender(k.outstreamRender);
                } catch (e) {
                    Object(a.logWarn)("".concat(m, ": Error tying to setRender on renderer"), e);
                }
                return i;
            },
            outstreamRender: function(e) {
                e.renderer.push(function() {
                    k.bootstrapPlayer(e);
                });
            },
            getRendererId: function(e, r) {
                return "".concat(e, "-").concat(r);
            }
        }, R = [ n.b, n.d, n.c ], A = 0, C = !1, z = {}, K = {};
        function N(e, r) {
            if (!Object(a.isStr)(r)) return r && Object(a.logWarn)("PubMatic: Ignoring param key: " + e + ", expects string-value, found " + u(r)), 
            g;
            switch (e) {
              case "pmzoneid":
                return r.split(",").slice(0, 50).map(function(e) {
                    return e.trim();
                }).join();

              case "kadfloor":
              case "lat":
              case "lon":
                return parseFloat(r) || g;

              case "yob":
                return parseInt(r) || g;

              default:
                return r;
            }
        }
        function M(e) {
            var r;
            e.params.adUnit = "", e.params.adUnitIndex = "0", e.params.width = 0, 
            e.params.height = 0, e.params.adSlot = (r = e.params.adSlot, Object(a.isStr)(r) ? r.replace(/^\s+/g, "").replace(/\s+$/g, "") : (r && Object(a.logWarn)("pubmatic: adSlot must be a string. Ignoring adSlot"), 
            ""));
            var t = e.params.adSlot, i = t.split(":");
            if (t = i[0], 2 == i.length && (e.params.adUnitIndex = i[1]), i = t.split("@"), 
            e.params.adUnit = i[0], i.length > 1) {
                if (2 != (i = i[1].split("x")).length) return void Object(a.logWarn)("PubMatic: AdSlot Error: adSlot not in required format");
                e.params.width = parseInt(i[0], 10), e.params.height = parseInt(i[1], 10);
            } else if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(n.b) && e.mediaTypes.banner.hasOwnProperty("sizes")) {
                for (var s = 0, o = []; s < e.mediaTypes.banner.sizes.length; s++) 2 === e.mediaTypes.banner.sizes[s].length && o.push(e.mediaTypes.banner.sizes[s]);
                e.mediaTypes.banner.sizes = o, e.mediaTypes.banner.sizes.length >= 1 && (e.params.width = e.mediaTypes.banner.sizes[0][0], 
                e.params.height = e.mediaTypes.banner.sizes[0][1], e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1));
            }
        }
        function U(e, r, t) {
            var i, n = "Ignoring param key: " + e + ", expects " + t + ", found " + u(r);
            switch (t) {
              case O:
                i = a.isBoolean;
                break;

              case y:
                i = a.isNumber;
                break;

              case v:
                i = a.isStr;
                break;

              case E:
                i = a.isArray;
            }
            return i(r) ? r : (Object(a.logWarn)(m + n), g);
        }
        function q(e, r) {
            var t = e.KEY;
            return {
                id: e.ID,
                required: r[t].required ? 1 : 0,
                data: {
                    type: e.TYPE,
                    len: r[t].len,
                    ext: r[t].ext
                }
            };
        }
        function L(e) {
            var r = {
                assets: []
            };
            for (var t in e) {
                if (e.hasOwnProperty(t)) {
                    var i = {};
                    if (!(r.assets && r.assets.length > 0 && r.assets.hasOwnProperty(t))) switch (t) {
                      case w.TITLE.KEY:
                        e[t].len || e[t].length ? i = {
                            id: w.TITLE.ID,
                            required: e[t].required ? 1 : 0,
                            title: {
                                len: e[t].len || e[t].length,
                                ext: e[t].ext
                            }
                        } : Object(a.logWarn)("PubMatic: Error: Title Length is required for native ad: " + JSON.stringify(e));
                        break;

                      case w.IMAGE.KEY:
                        e[t].sizes && e[t].sizes.length > 0 ? i = {
                            id: w.IMAGE.ID,
                            required: e[t].required ? 1 : 0,
                            img: {
                                type: T,
                                w: e[t].w || e[t].width || (e[t].sizes ? e[t].sizes[0] : g),
                                h: e[t].h || e[t].height || (e[t].sizes ? e[t].sizes[1] : g),
                                wmin: e[t].wmin || e[t].minimumWidth || (e[t].minsizes ? e[t].minsizes[0] : g),
                                hmin: e[t].hmin || e[t].minimumHeight || (e[t].minsizes ? e[t].minsizes[1] : g),
                                mimes: e[t].mimes,
                                ext: e[t].ext
                            }
                        } : Object(a.logWarn)("PubMatic: Error: Image sizes is required for native ad: " + JSON.stringify(e));
                        break;

                      case w.ICON.KEY:
                        e[t].sizes && e[t].sizes.length > 0 ? i = {
                            id: w.ICON.ID,
                            required: e[t].required ? 1 : 0,
                            img: {
                                type: j,
                                w: e[t].w || e[t].width || (e[t].sizes ? e[t].sizes[0] : g),
                                h: e[t].h || e[t].height || (e[t].sizes ? e[t].sizes[1] : g)
                            }
                        } : Object(a.logWarn)("PubMatic: Error: Icon sizes is required for native ad: " + JSON.stringify(e));
                        break;

                      case w.VIDEO.KEY:
                        i = {
                            id: w.VIDEO.ID,
                            required: e[t].required ? 1 : 0,
                            video: {
                                minduration: e[t].minduration,
                                maxduration: e[t].maxduration,
                                protocols: e[t].protocols,
                                mimes: e[t].mimes,
                                ext: e[t].ext
                            }
                        };
                        break;

                      case w.EXT.KEY:
                        i = {
                            id: w.EXT.ID,
                            required: e[t].required ? 1 : 0
                        };
                        break;

                      case w.LOGO.KEY:
                        i = {
                            id: w.LOGO.ID,
                            required: e[t].required ? 1 : 0,
                            img: {
                                type: P,
                                w: e[t].w || e[t].width || (e[t].sizes ? e[t].sizes[0] : g),
                                h: e[t].h || e[t].height || (e[t].sizes ? e[t].sizes[1] : g)
                            }
                        };
                        break;

                      case w.SPONSOREDBY.KEY:
                      case w.BODY.KEY:
                      case w.RATING.KEY:
                      case w.LIKES.KEY:
                      case w.DOWNLOADS.KEY:
                      case w.PRICE.KEY:
                      case w.SALEPRICE.KEY:
                      case w.PHONE.KEY:
                      case w.ADDRESS.KEY:
                      case w.DESC2.KEY:
                      case w.DISPLAYURL.KEY:
                      case w.CTA.KEY:
                        i = q(K[t], e);
                    }
                }
                i && i.id && (r.assets[r.assets.length] = i);
            }
            var n = S.length, s = 0;
            return S.forEach(function(e) {
                for (var t = r.assets.length, a = 0; a < t; a++) if (e.id == r.assets[a].id) {
                    s++;
                    break;
                }
            }), C = n != s, r;
        }
        function W(e) {
            var r, t = e.mediaTypes.banner.sizes, i = [];
            if (t !== g && Object(a.isArray)(t)) {
                if (r = {}, e.params.width || e.params.height) r.w = e.params.width, 
                r.h = e.params.height; else {
                    if (0 === t.length) return r = g, Object(a.logWarn)("PubMatic: Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), 
                    r;
                    r.w = parseInt(t[0][0], 10), r.h = parseInt(t[0][1], 10), t = t.splice(1, t.length - 1);
                }
                t.length > 0 && (i = [], t.forEach(function(e) {
                    e.length > 1 && i.push({
                        w: e[0],
                        h: e[1]
                    });
                }), i.length > 0 && (r.format = i)), r.pos = 0, r.topframe = Object(a.inIframe)() ? 0 : 1;
            } else Object(a.logWarn)("PubMatic: Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), 
            r = g;
            return r;
        }
        function _(e, r) {
            Object(a.deepAccess)(e, "placement") || Object(a.logWarn)("Video.Placement param missing for " + r);
        }
        function V(e) {
            var r, t = Object(a.mergeDeep)(Object(a.deepAccess)(e.mediaTypes, "video"), e.params.video);
            if (t !== g) {
                for (var i in r = {}, _(t, e.adUnitCode), I) t.hasOwnProperty(i) && (r[i] = U(i, t[i], I[i]));
                Object(a.isArray)(e.mediaTypes.video.playerSize[0]) ? (r.w = parseInt(e.mediaTypes.video.playerSize[0][0], 10), 
                r.h = parseInt(e.mediaTypes.video.playerSize[0][1], 10)) : Object(a.isNumber)(e.mediaTypes.video.playerSize[0]) && (r.w = parseInt(e.mediaTypes.video.playerSize[0], 10), 
                r.h = parseInt(e.mediaTypes.video.playerSize[1], 10));
            } else r = g, Object(a.logWarn)("PubMatic: Error: Video config params missing for adunit: " + e.params.adUnit + " with mediaType set as video. Ignoring video impression in the adunit.");
            return r;
        }
        function B(e, r, t) {
            var a = r.rtd && r.rtd.jwplayer && r.rtd.jwplayer.targeting || void 0, i = "";
            if (void 0 !== a && "" !== a && a.hasOwnProperty("segments")) {
                var n, s = a.segments.length;
                i += "jw-id=" + a.content.id;
                for (var o = 0; o < s; o++) i += "|jw-" + a.segments[o] + "=1";
                t ? void 0 === e.dctr || 0 == e.dctr.length ? e.dctr = i : e.dctr += "|" + i : (n = e.ext) && void 0 === n.key_val ? n.key_val = i : n.key_val += "|" + i;
            }
        }
        function G(e, r) {
            var t, i, o = {}, d = {}, l = e.hasOwnProperty("sizes") ? e.sizes : [], f = "", h = [];
            if (function(e, r) {
                r.params.deals && (Object(a.isArray)(r.params.deals) ? r.params.deals.forEach(function(r) {
                    Object(a.isStr)(r) && r.length > 3 ? (e.pmp || (e.pmp = {
                        private_auction: 0,
                        deals: []
                    }), e.pmp.deals.push({
                        id: r
                    })) : Object(a.logWarn)("PubMatic: Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: " + r);
                }) : Object(a.logWarn)("PubMatic: Error: bid.params.deals should be an array of strings."));
            }(o = {
                id: e.bidId,
                tagid: e.params.adUnit || void 0,
                bidfloor: N("kadfloor", e.params.kadfloor),
                secure: 1,
                ext: {
                    pmZoneId: N("pmzoneid", e.params.pmzoneid)
                },
                bidfloorcur: e.params.currency ? N("currency", e.params.currency) : b
            }, e), function(e, r) {
                var t, i = "";
                if (r.params.dctr) if (i = r.params.dctr, Object(a.isStr)(i) && i.length > 0) {
                    var n = i.split("|");
                    i = "", n.forEach(function(e) {
                        i += e.length > 0 ? e.trim() + "|" : "";
                    }), t = i.length, "|" === i.substring(t, t - 1) && (i = i.substring(0, t - 1)), 
                    e.ext.key_val = i.trim();
                } else Object(a.logWarn)("PubMatic: Ignoring param : dctr with value : " + i + ", expects string-value, found empty or non-string value");
            }(o, e), B(o, e), e.hasOwnProperty("mediaTypes")) for (f in e.mediaTypes) switch (f) {
              case n.b:
                (t = W(e)) !== g && (o.banner = t);
                break;

              case n.c:
                d.request = JSON.stringify(L(e.nativeParams)), C ? Object(a.logWarn)("PubMatic: Error: Error in Native adunit " + e.params.adUnit + ". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.") : o.native = d;
                break;

              case n.d:
                (i = V(e)) !== g && (o.video = i);
            } else t = {
                pos: 0,
                w: e.params.width,
                h: e.params.height,
                topframe: Object(a.inIframe)() ? 0 : 1
            }, Object(a.isArray)(l) && l.length > 1 && ((l = l.splice(1, l.length - 1)).forEach(function(e) {
                h.push({
                    w: e[0],
                    h: e[1]
                });
            }), t.format = h), o.banner = t;
            return function(e, r) {
                var t = function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {};
                        r % 2 ? c(Object(t), !0).forEach(function(r) {
                            p(e, r, t[r]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(r) {
                            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                        });
                    }
                    return e;
                }({}, Object(a.deepAccess)(r, "ortb2Imp.ext.data"));
                Object.keys(t).forEach(function(r) {
                    "pbadslot" === r ? "string" == typeof t[r] && t[r] && Object(a.deepSetValue)(e, "ext.data.pbadslot", t[r]) : "adserver" === r ? [ "name", "adslot" ].forEach(function(r) {
                        var i = Object(a.deepAccess)(t, "adserver.".concat(r));
                        "string" == typeof i && i && (Object(a.deepSetValue)(e, "ext.data.adserver.".concat(r.toLowerCase()), i), 
                        "adslot" === r && Object(a.deepSetValue)(e, "ext.dfp_ad_unit_code", i));
                    }) : Object(a.deepSetValue)(e, "ext.data.".concat(r), t[r]);
                });
            }(o, e), function(e, r) {
                var t = -1;
                "function" != typeof r.getFloor || s.b.getConfig("pubmatic.disableFloors") || [ n.b, n.d, n.c ].forEach(function(i) {
                    if (e.hasOwnProperty(i)) {
                        var n = [];
                        "banner" === i && (e[i].w && e[i].h && n.push([ e[i].w, e[i].h ]), 
                        Object(a.isArray)(e[i].format) && e[i].format.forEach(function(e) {
                            return n.push([ e.w, e.h ]);
                        })), 0 === n.length && n.push("*"), n.forEach(function(n) {
                            var s = r.getFloor({
                                currency: e.bidfloorcur,
                                mediaType: i,
                                size: n
                            });
                            if (Object(a.logInfo)(m, "floor from floor module returned for mediatype:", i, " and size:", n, " is: currency", s.currency, "floor", s.floor), 
                            "object" === u(s) && s.currency === e.bidfloorcur && !isNaN(parseInt(s.floor))) {
                                var o = parseFloat(s.floor);
                                Object(a.logInfo)(m, "floor from floor module:", o, "previous floor value", t, "Min:", Math.min(o, t)), 
                                t = -1 === t ? o : Math.min(o, t), Object(a.logInfo)(m, "new floor value:", t);
                            }
                        });
                    }
                });
                e.bidfloor && (Object(a.logInfo)(m, "floor from floor module:", t, "impObj.bidfloor", e.bidfloor, "Max:", Math.max(t, e.bidfloor)), 
                t = Math.max(t, e.bidfloor));
                e.bidfloor = !isNaN(t) && t > 0 ? t : g, Object(a.logInfo)(m, "new impObj.bidfloor value:", e.bidfloor);
            }(o, e), o.hasOwnProperty(n.b) || o.hasOwnProperty(n.c) || o.hasOwnProperty(n.d) ? o : g;
        }
        function F(e, r) {
            var t = null, i = Object(a.deepAccess)(e, "0.userId.flocId");
            if (i && i.id) switch (r) {
              case Y:
                t = {
                    id: "FLOC",
                    name: "FLOC",
                    ext: {
                        ver: i.version
                    },
                    segment: [ {
                        id: i.id,
                        name: "chrome.com",
                        value: i.id.toString()
                    } ]
                };
                break;

              case x:
              default:
                t = {
                    source: "chrome.com",
                    uids: [ {
                        atype: 1,
                        id: i.id,
                        ext: {
                            ver: i.version
                        }
                    } ]
                };
            }
            return t;
        }
        function J(e) {
            return !0 === Object(a.isArray)(e) && e.length > 0;
        }
        Object(a._each)(w, function(e) {
            z[e.ID] = e.KEY;
        }), Object(a._each)(w, function(e) {
            K[e.KEY] = e;
        });
        var X = {
            code: l,
            gvlid: 76,
            supportedMediaTypes: [ n.b, n.d, n.c ],
            aliases: [ {
                code: "groupm",
                gvlid: 98
            } ],
            isBidRequestValid: function(e) {
                if (e && e.params) {
                    if (!Object(a.isStr)(e.params.publisherId)) return Object(a.logWarn)("PubMatic: Error: publisherId is mandatory and cannot be numeric (wrap it in quotes in your config). Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)), 
                    !1;
                    if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(n.d)) {
                        var r = Object(a.deepAccess)(e.mediaTypes, "video.mimes"), t = Object(a.deepAccess)(e, "params.video.mimes");
                        if (!1 === J(r) && !1 === J(t)) return Object(a.logWarn)("PubMatic: Error: For video ads, bid.mediaTypes.video.mimes OR bid.params.video.mimes should be present and must be a non-empty array. Call to OpenBid will not be sent for ad unit:" + JSON.stringify(e)), 
                        !1;
                        if (!e.mediaTypes[n.d].hasOwnProperty("context")) return Object(a.logError)("".concat(m, ": no context specified in bid. Rejecting bid: "), e), 
                        !1;
                        if ("outstream" === e.mediaTypes[n.d].context && !Object(a.isStr)(e.params.outstreamAU) && !e.hasOwnProperty("renderer") && !e.mediaTypes[n.d].hasOwnProperty("renderer")) return e.mediaTypes.hasOwnProperty(n.b) || e.mediaTypes.hasOwnProperty(n.c) ? (delete e.mediaTypes[n.d], 
                        Object(a.logWarn)("".concat(m, ': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting mediatype Video of bid: '), e), 
                        !0) : (Object(a.logError)("".concat(m, ': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting bid: '), e), 
                        !1);
                    }
                    return !0;
                }
                return !1;
            },
            buildRequests: function(e, r) {
                var t;
                r && r.refererInfo && (t = r.refererInfo);
                var i, o = function(e) {
                    return {
                        pageURL: e && e.referer ? e.referer : window.location.href,
                        refURL: window.document.referrer
                    };
                }(t), c = function(e) {
                    return {
                        id: "" + new Date().getTime(),
                        at: 1,
                        cur: [ b ],
                        imp: [],
                        site: {
                            page: e.pageURL,
                            ref: e.refURL,
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
                    };
                }(o), p = "", l = [], m = [];
                if (e.forEach(function(e) {
                    if ((i = Object(a.deepClone)(e)).params.adSlot = i.params.adSlot || "", 
                    M(i), i.params.hasOwnProperty("video")); else if (!(i.hasOwnProperty("mediaTypes") && i.mediaTypes.hasOwnProperty(n.c) || 0 !== i.params.width || 0 !== i.params.height)) return void Object(a.logWarn)("PubMatic: Skipping the non-standard adslot: ", i.params.adSlot, JSON.stringify(i));
                    o.pubId = o.pubId || i.params.publisherId, (o = function(e, r) {
                        var t, i, n;
                        for (t in r.kadpageurl || (r.kadpageurl = r.pageURL), h) h.hasOwnProperty(t) && (i = e[t]) && ("object" === u(n = h[t]) && (i = n.f(i, r)), 
                        Object(a.isStr)(i) ? r[t] = i : Object(a.logWarn)("PubMatic: Ignoring param : " + t + " with value : " + h[t] + ", expects string-value, found " + u(i)));
                        return r;
                    }(i.params, o)).transactionId = i.transactionId, "" === p ? p = i.params.currency || g : i.params.hasOwnProperty("currency") && p !== i.params.currency && Object(a.logWarn)("PubMatic: Currency specifier ignored. Only one currency permitted."), 
                    i.params.currency = p, i.params.hasOwnProperty("dctr") && Object(a.isStr)(i.params.dctr) && l.push(i.params.dctr), 
                    i.params.hasOwnProperty("bcat") && Object(a.isArray)(i.params.bcat) && (m = m.concat(i.params.bcat));
                    var r = G(i);
                    r && c.imp.push(r);
                }), 0 != c.imp.length) {
                    var f, y;
                    c.site.publisher.id = o.pubId.trim(), A = o.pubId.trim(), c.ext.wrapper = {}, 
                    c.ext.wrapper.profile = parseInt(o.profId) || g, c.ext.wrapper.version = parseInt(o.verId) || g, 
                    c.ext.wrapper.wiid = o.wiid || r.auctionId, c.ext.wrapper.wv = "prebid_prebid_6.6.0", 
                    c.ext.wrapper.transactionId = o.transactionId, c.ext.wrapper.wp = "pbjs", 
                    c.user.gender = o.gender ? o.gender.trim() : g, c.user.geo = {}, 
                    c.user.geo.lat = N("lat", o.lat), c.user.geo.lon = N("lon", o.lon), 
                    c.user.yob = N("yob", o.yob), c.device.geo = c.user.geo, c.site.page = o.kadpageurl.trim() || c.site.page.trim(), 
                    c.site.domain = (f = c.site.page, (y = document.createElement("a")).href = f, 
                    y.hostname), "object" === u(s.b.getConfig("content")) && (c.site.content = s.b.getConfig("content")), 
                    "object" === u(s.b.getConfig("device")) && (c.device = d(c.device, s.b.getConfig("device"))), 
                    Object(a.deepSetValue)(c, "source.tid", o.transactionId), -1 !== window.location.href.indexOf("pubmaticTest=true") && (c.test = 1), 
                    e[0].schain && Object(a.deepSetValue)(c, "source.ext.schain", e[0].schain), 
                    r && r.gdprConsent && (Object(a.deepSetValue)(c, "user.ext.consent", r.gdprConsent.consentString), 
                    Object(a.deepSetValue)(c, "regs.ext.gdpr", r.gdprConsent.gdprApplies ? 1 : 0)), 
                    r && r.uspConsent && Object(a.deepSetValue)(c, "regs.ext.us_privacy", r.uspConsent), 
                    !0 === s.b.getConfig("coppa") && Object(a.deepSetValue)(c, "regs.coppa", 1), 
                    function(e, r) {
                        var t = Object(a.deepAccess)(r, "0.userIdAsEids"), i = F(r, x);
                        i && (t || (t = []), t.push(i)), Object(a.isArray)(t) && t.length > 0 && Object(a.deepSetValue)(e, "user.eids", t);
                    }(c, e), function(e, r) {
                        (r = r.filter(function(e) {
                            return "string" == typeof e || (Object(a.logWarn)("PubMatic: bcat: Each category should be a string, ignoring category: " + e), 
                            !1);
                        }).map(function(e) {
                            return e.trim();
                        }).filter(function(e, r, t) {
                            if (e.length > 3) return t.indexOf(e) === r;
                            Object(a.logWarn)("PubMatic: bcat: Each category should have a value of a length of more than 3 characters, ignoring category: " + e);
                        })).length > 0 && (Object(a.logWarn)("PubMatic: bcat: Selected: ", r), 
                        e.bcat = r);
                    }(c, m), function(e, r) {
                        var t = F(r, Y);
                        t && (e.user || (e.user = {}), e.user.data || (e.user.data = []), 
                        e.user.data.push(t));
                    }(c, e);
                    var v = s.b.getConfig("ortb2") || {};
                    return v.site && Object(a.mergeDeep)(c, {
                        site: v.site
                    }), v.user && Object(a.mergeDeep)(c, {
                        user: v.user
                    }), "object" === u(s.b.getConfig("app")) && (c.app = s.b.getConfig("app"), 
                    c.app.publisher = c.site.publisher, c.app.ext = c.site.ext || g, 
                    "object" !== u(c.app.content) && (c.app.content = c.site.content || g), 
                    delete c.site), {
                        method: "POST",
                        url: "https://hbopenbid.pubmatic.com/translator?source=prebid-client",
                        data: JSON.stringify(c),
                        bidderRequest: r
                    };
                }
            },
            interpretResponse: function(e, r) {
                var t = [], i = b, s = JSON.parse(r.data), o = s.site && s.site.ref ? s.site.ref : "";
                try {
                    e.body && e.body.seatbid && Object(a.isArray)(e.body.seatbid) && (i = e.body.cur || i, 
                    e.body.seatbid.forEach(function(e) {
                        e.bid && Object(a.isArray)(e.bid) && e.bid.forEach(function(d) {
                            var c = {
                                requestId: d.impid,
                                cpm: (parseFloat(d.price) || 0).toFixed(2),
                                width: d.w,
                                height: d.h,
                                creativeId: d.crid || d.id,
                                dealId: d.dealid,
                                currency: i,
                                netRevenue: true,
                                ttl: 300,
                                referrer: o,
                                ad: d.adm,
                                pm_seat: e.seat || null,
                                pm_dspid: d.ext && d.ext.dspid ? d.ext.dspid : null,
                                partnerImpId: d.id || ""
                            };
                            s.imp && s.imp.length > 0 && s.imp.forEach(function(e) {
                                if (d.impid === e.id) switch (function(e, r) {
                                    if (e.ext && null != e.ext.bidtype) r.mediaType = R[e.ext.bidtype]; else {
                                        Object(a.logInfo)("PubMatic: bid.ext.bidtype does not exist, checking alternatively for mediaType");
                                        var t = e.adm, i = "", s = new RegExp(/VAST\s+version/);
                                        if (t.indexOf('span class="PubAPIAd"') >= 0) r.mediaType = n.b; else if (s.test(t)) r.mediaType = n.d; else try {
                                            (i = JSON.parse(t.replace(/\\/g, ""))) && i.native && (r.mediaType = n.c);
                                        } catch (e) {
                                            Object(a.logWarn)("PubMatic: Error: Cannot parse native reponse for ad response: " + t);
                                        }
                                    }
                                }(d, c), c.mediaType) {
                                  case n.b:
                                    break;

                                  case n.d:
                                    c.width = d.hasOwnProperty("w") ? d.w : e.video.w, 
                                    c.height = d.hasOwnProperty("h") ? d.h : e.video.h, 
                                    c.vastXml = d.adm, function(e, r) {
                                        var t, a, i;
                                        if (r.bidderRequest && r.bidderRequest.bids) {
                                            for (var s = 0; s < r.bidderRequest.bids.length; s++) r.bidderRequest.bids[s].bidId === e.requestId && (t = r.bidderRequest.bids[s].params, 
                                            a = r.bidderRequest.bids[s].mediaTypes[n.d].context, 
                                            i = r.bidderRequest.bids[s].adUnitCode);
                                            a && "outstream" === a && t && t.outstreamAU && i && (e.rendererCode = t.outstreamAU, 
                                            e.renderer = k.newRenderer(e.rendererCode, i));
                                        }
                                    }(c, r);
                                    break;

                                  case n.c:
                                    !function(e, r) {
                                        if (r.native = {}, e.hasOwnProperty("adm")) {
                                            var t = "";
                                            try {
                                                t = JSON.parse(e.adm.replace(/\\/g, ""));
                                            } catch (e) {
                                                return void Object(a.logWarn)("PubMatic: Error: Cannot parse native reponse for ad response: " + r.adm);
                                            }
                                            if (t && t.native && t.native.assets && t.native.assets.length > 0) {
                                                r.mediaType = n.c;
                                                for (var i = 0, s = t.native.assets.length; i < s; i++) switch (t.native.assets[i].id) {
                                                  case w.TITLE.ID:
                                                    r.native.title = t.native.assets[i].title && t.native.assets[i].title.text;
                                                    break;

                                                  case w.IMAGE.ID:
                                                    r.native.image = {
                                                        url: t.native.assets[i].img && t.native.assets[i].img.url,
                                                        height: t.native.assets[i].img && t.native.assets[i].img.h,
                                                        width: t.native.assets[i].img && t.native.assets[i].img.w
                                                    };
                                                    break;

                                                  case w.ICON.ID:
                                                    r.native.icon = {
                                                        url: t.native.assets[i].img && t.native.assets[i].img.url,
                                                        height: t.native.assets[i].img && t.native.assets[i].img.h,
                                                        width: t.native.assets[i].img && t.native.assets[i].img.w
                                                    };
                                                    break;

                                                  case w.SPONSOREDBY.ID:
                                                  case w.BODY.ID:
                                                  case w.LIKES.ID:
                                                  case w.DOWNLOADS.ID:
                                                  case w.PRICE:
                                                  case w.SALEPRICE.ID:
                                                  case w.PHONE.ID:
                                                  case w.ADDRESS.ID:
                                                  case w.DESC2.ID:
                                                  case w.CTA.ID:
                                                  case w.RATING.ID:
                                                  case w.DISPLAYURL.ID:
                                                    r.native[z[t.native.assets[i].id]] = t.native.assets[i].data && t.native.assets[i].data.value;
                                                }
                                                r.native.clickUrl = t.native.link && t.native.link.url, 
                                                r.native.clickTrackers = t.native.link && t.native.link.clicktrackers || [], 
                                                r.native.impressionTrackers = t.native.imptrackers || [], 
                                                r.native.jstracker = t.native.jstracker || [], 
                                                r.width || (r.width = 0), r.height || (r.height = 0);
                                            }
                                        }
                                    }(d, c);
                                }
                            }), d.ext && d.ext.deal_channel && (c.dealChannel = D[d.ext.deal_channel] || null), 
                            c.meta = {}, d.ext && d.ext.dspid && (c.meta.networkId = d.ext.dspid), 
                            d.ext && d.ext.advid && (c.meta.buyerId = d.ext.advid), 
                            d.adomain && d.adomain.length > 0 && (c.meta.advertiserDomains = d.adomain, 
                            c.meta.clickUrl = d.adomain[0]), e.ext && e.ext.buyid && (c.adserverTargeting = {
                                hb_buyid_pubmatic: e.ext.buyid
                            }), t.push(c);
                        });
                    }));
                } catch (e) {
                    Object(a.logError)(e);
                }
                return t;
            },
            getUserSyncs: function(e, r, t, a) {
                var i = "" + A;
                return t && (i += "&gdpr=" + (t.gdprApplies ? 1 : 0), i += "&gdpr_consent=" + encodeURIComponent(t.consentString || "")), 
                a && (i += "&us_privacy=" + encodeURIComponent(a)), !0 === s.b.getConfig("coppa") && (i += "&coppa=1"), 
                e.iframeEnabled ? [ {
                    type: "iframe",
                    url: "https://ads.pubmatic.com/AdServer/js/user_sync.html?kdntuid=1&p=" + i
                } ] : [ {
                    type: "image",
                    url: "https://image8.pubmatic.com/AdServer/ImgSync?p=" + i
                } ];
            },
            transformBidParams: function(e, r, t, i) {
                return B(e, t.bids[0], !0), Object(a.convertTypes)({
                    publisherId: "string",
                    adSlot: "string"
                }, e);
            }
        };
        Object(i.registerBidder)(X), window.pbjs.installedModules.push("pubmaticBidAdapter");
    }
}, [ 731 ]);

pbjsChunk([ 136 ], {
    807: function(o, e, t) {
        o.exports = t(808);
    },
    808: function(o, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), t.d(e, "storage", function() {
            return c;
        }), t.d(e, "sharedIdSystemSubmodule", function() {
            return g;
        });
        var n = t(0), r = t(9), i = t(8), a = t(7);
        function d(o) {
            return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
                return typeof o;
            } : function(o) {
                return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
            })(o);
        }
        var c = Object(a.b)(887, "pubCommonId"), u = "cookie", l = "html5", f = "_pubcid_optout", s = "PublisherCommonId";
        function m(o, e) {
            if (e === u) return c.getCookie(o);
            if (e === l && c.hasLocalStorage()) {
                var t = c.getDataFromLocalStorage("".concat(o, "_exp"));
                if (!t) return c.getDataFromLocalStorage(o);
                if (new Date(t).getTime() - Date.now() > 0) return c.getDataFromLocalStorage(o);
            }
        }
        function b(o, e) {
            return function(t) {
                "function" == typeof e && e(), t(o);
            };
        }
        function p(o) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            if (o) {
                var t = Object(n.parseUrl)(o);
                t.search.id = encodeURIComponent("pubcid:" + e);
                var r = Object(n.buildUrl)(t);
                return function() {
                    Object(n.triggerPixel)(r);
                };
            }
        }
        function v() {
            return !!(c.cookiesAreEnabled() && m(f, u) || c.hasLocalStorage() && m(f, l));
        }
        var g = {
            name: "sharedId",
            aliasName: "pubCommonId",
            gvlid: 887,
            decode: function(o, e) {
                if (!v()) return Object(n.logInfo)(" Decoded value PubCommonId " + o), 
                {
                    pubcid: o
                };
                Object(n.logInfo)("PubCommonId decode: Has opted-out");
            },
            getId: function() {
                var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments.length > 2 ? arguments[2] : void 0;
                if (v()) Object(n.logInfo)("PubCommonId: Has opted-out"); else {
                    var t = i.coppaDataHandler.getCoppa();
                    if (!t) {
                        var r = o.params, a = (r = void 0 === r ? {} : r).create, c = void 0 === a || a, u = r.pixelUrl, l = e;
                        if (!l) {
                            try {
                                "object" === d(window[s]) && (l = window[s].getId());
                            } catch (o) {}
                            l || (l = c && Object(n.hasDeviceAccess)() ? Object(n.generateUUID)() : void 0);
                        }
                        var f = p(u, l);
                        return {
                            id: l,
                            callback: b(l, f)
                        };
                    }
                    Object(n.logInfo)("PubCommonId: IDs not provided for coppa requests, exiting PubCommonId");
                }
            },
            extendId: function() {
                var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments.length > 2 ? arguments[2] : void 0;
                if (v()) return Object(n.logInfo)("PubCommonId: Has opted-out"), 
                {
                    id: void 0
                };
                var t = i.coppaDataHandler.getCoppa();
                if (t) Object(n.logInfo)("PubCommonId: IDs not provided for coppa requests, exiting PubCommonId"); else {
                    var r = o.params, a = (r = void 0 === r ? {} : r).extend, d = void 0 !== a && a, c = r.pixelUrl;
                    if (d) {
                        if (c) {
                            var u = p(c, e);
                            return {
                                callback: u
                            };
                        }
                        return {
                            id: e
                        };
                    }
                }
            },
            domainOverride: function() {
                for (var o, e, t = document.domain.split("."), n = "_gd".concat(Date.now()), r = 0; r < t.length; r++) {
                    var i = t.slice(r).join(".");
                    if (c.setCookie(n, "1", void 0, void 0, i), e = c.getCookie(n), 
                    c.setCookie(n, "", "Thu, 01 Jan 1970 00:00:01 GMT", void 0, i), 
                    "1" !== e) return o;
                    o = i;
                }
            }
        };
        Object(r.e)("userId", g), window.pbjs.installedModules.push("sharedIdSystem");
    }
}, [ 807 ]);

pbjsChunk([ 12 ], {
    15: function(e, t, n) {
        "use strict";
        t.b = function(e) {
            var t = [];
            for (var n in e) if (e.hasOwnProperty(n)) if ("pubProvidedId" === n) t = t.concat(e.pubProvidedId); else {
                var o = a(e[n], n);
                o && t.push(o);
            }
            return t;
        }, t.a = function(e) {
            var t = [];
            return e.filter(function(e) {
                return Object(o.isPlainObject)(e.idObj) && Object.keys(e.idObj).length;
            }).forEach(function(e) {
                Object.keys(e.idObj).forEach(function(n) {
                    Object(o.deepAccess)(e, "config.bidders") && Array.isArray(e.config.bidders) && Object(o.deepAccess)(r, n + ".source") && t.push({
                        source: r[n].source,
                        bidders: e.config.bidders
                    });
                });
            }), t;
        };
        var o = n(0), r = {
            intentIqId: {
                source: "intentiq.com",
                atype: 1
            },
            naveggId: {
                source: "navegg.com",
                atype: 1
            },
            pubcid: {
                source: "pubcid.org",
                atype: 1
            },
            tdid: {
                source: "adserver.org",
                atype: 1,
                getUidExt: function() {
                    return {
                        rtiPartner: "TDID"
                    };
                }
            },
            id5id: {
                getValue: function(e) {
                    return e.uid;
                },
                source: "id5-sync.com",
                atype: 1,
                getUidExt: function(e) {
                    if (e.ext) return e.ext;
                }
            },
            parrableId: {
                source: "parrable.com",
                atype: 1,
                getValue: function(e) {
                    return e.eid ? e.eid : e.ccpaOptout ? "" : null;
                },
                getUidExt: function(e) {
                    var t = Object(o.pick)(e, [ "ibaOptout", "ccpaOptout" ]);
                    if (Object.keys(t).length) return t;
                }
            },
            idl_env: {
                source: "liveramp.com",
                atype: 3
            },
            lipb: {
                getValue: function(e) {
                    return e.lipbid;
                },
                source: "liveintent.com",
                atype: 3,
                getEidExt: function(e) {
                    if (Array.isArray(e.segments) && e.segments.length) return {
                        segments: e.segments
                    };
                }
            },
            britepoolid: {
                source: "britepool.com",
                atype: 3
            },
            dmdId: {
                source: "hcn.health",
                atype: 3
            },
            lotamePanoramaId: {
                source: "crwdcntrl.net",
                atype: 1
            },
            criteoId: {
                source: "criteo.com",
                atype: 1
            },
            merkleId: {
                source: "merkleinc.com",
                atype: 3,
                getValue: function(e) {
                    return e.id;
                },
                getUidExt: function(e) {
                    return e && e.keyID ? {
                        keyID: e.keyID
                    } : void 0;
                }
            },
            netId: {
                source: "netid.de",
                atype: 1
            },
            IDP: {
                source: "zeotap.com",
                atype: 1
            },
            haloId: {
                source: "audigent.com",
                atype: 1
            },
            quantcastId: {
                source: "quantcast.com",
                atype: 1
            },
            nextrollId: {
                source: "nextroll.com",
                atype: 1
            },
            idx: {
                source: "idx.lat",
                atype: 1
            },
            connectid: {
                source: "verizonmedia.com",
                atype: 3
            },
            fabrickId: {
                source: "neustar.biz",
                atype: 1
            },
            mwOpenLinkId: {
                source: "mediawallahscript.com",
                atype: 1
            },
            tapadId: {
                source: "tapad.com",
                atype: 1
            },
            novatiq: {
                getValue: function(e) {
                    return e.snowflake;
                },
                source: "novatiq.com",
                atype: 1
            },
            uid2: {
                source: "uidapi.com",
                atype: 3,
                getValue: function(e) {
                    return e.id;
                }
            },
            dapId: {
                source: "akamai.com",
                atype: 1
            },
            deepintentId: {
                source: "deepintent.com",
                atype: 3
            },
            admixerId: {
                source: "admixer.net",
                atype: 3
            },
            adtelligentId: {
                source: "adtelligent.com",
                atype: 3
            },
            amxId: {
                source: "amxrtb.com",
                atype: 1
            },
            publinkId: {
                source: "epsilon.com",
                atype: 3
            },
            kpuid: {
                source: "kpuid.com",
                atype: 3
            },
            imuid: {
                source: "intimatemerger.com",
                atype: 1
            },
            connectId: {
                source: "yahoo.com",
                atype: 3
            },
            qid: {
                source: "adquery.io",
                atype: 1
            }
        };
        function a(e, t) {
            var n = r[t];
            if (n && e) {
                var a = {};
                a.source = n.source;
                var i = Object(o.isFn)(n.getValue) ? n.getValue(e) : e;
                if (Object(o.isStr)(i)) {
                    var c = {
                        id: i,
                        atype: n.atype
                    };
                    if (Object(o.isFn)(n.getUidExt)) {
                        var u = n.getUidExt(e);
                        u && (c.ext = u);
                    }
                    if (a.uids = [ c ], Object(o.isFn)(n.getEidExt)) {
                        var s = n.getEidExt(e);
                        s && (a.ext = s);
                    }
                    return a;
                }
            }
            return null;
        }
    },
    905: function(e, t, n) {
        e.exports = n(906);
    },
    906: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "PBJS_USER_ID_OPTOUT_NAME", function() {
            return C;
        }), n.d(t, "coreStorage", function() {
            return P;
        }), n.d(t, "syncDelay", function() {
            return I;
        }), n.d(t, "auctionDelay", function() {
            return k;
        }), t.setSubmoduleRegistry = function(e) {
            L = e;
        }, t.setStoredValue = N, t.setStoredConsentData = R, t.findRootDomain = H, 
        t.requestBidsHook = K, n.d(t, "validateGdprEnforcement", function() {
            return Z;
        }), t.attachIdSystem = oe, t.init = re;
        var o = n(11), r = n.n(o), a = n(3), i = n(10), c = n.n(i), u = n(14), s = n(8), d = n(5), l = n.n(d), f = n(9), g = n(15), b = n(7), p = n(0), m = n(12), y = n.n(m);
        function O(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return v(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t);
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var o = 0, r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return o >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[o++]
                            };
                        },
                        e: function(e) {
                            throw e;
                        },
                        f: r
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var a, i = !0, c = !1;
            return {
                s: function() {
                    n = n.call(e);
                },
                n: function() {
                    var e = n.next();
                    return i = e.done, e;
                },
                e: function(e) {
                    c = !0, a = e;
                },
                f: function() {
                    try {
                        i || null == n.return || n.return();
                    } finally {
                        if (c) throw a;
                    }
                }
            };
        }
        function v(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
            return o;
        }
        var j, h, I, k, w, D = "User ID", S = "cookie", E = "html5", x = "_pbjs_userid_consent_data", A = 30, C = "_pbjs_id_optout", P = Object(b.a)("userid"), U = [], _ = !1, T = [], V = [], L = [];
        function N(e, t) {
            var n = e.config.storage, o = "function" == typeof e.submodule.domainOverride ? e.submodule.domainOverride() : null;
            try {
                var r = Object(p.isPlainObject)(t) ? JSON.stringify(t) : t, a = new Date(Date.now() + 864e5 * n.expires).toUTCString();
                n.type === S ? (P.setCookie(n.name, r, a, "Lax", o), "number" == typeof n.refreshInSeconds && P.setCookie("".concat(n.name, "_last"), new Date().toUTCString(), a, "Lax", o)) : n.type === E && (P.setDataInLocalStorage("".concat(n.name, "_exp"), a), 
                P.setDataInLocalStorage(n.name, encodeURIComponent(r)), "number" == typeof n.refreshInSeconds && P.setDataInLocalStorage("".concat(n.name, "_last"), new Date().toUTCString()));
            } catch (e) {
                Object(p.logError)(e);
            }
        }
        function q(e) {
            var t = Object(p.getPrebidInternal)().setEidPermissions;
            "function" == typeof t && Object(p.isArray)(e) && t(Object(g.a)(e));
        }
        function F(e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, o = n ? "".concat(e.name, "_").concat(n) : e.name;
            try {
                if (e.type === S) t = P.getCookie(o); else if (e.type === E) {
                    var r = P.getDataFromLocalStorage("".concat(e.name, "_exp"));
                    "" === r ? t = P.getDataFromLocalStorage(o) : r && new Date(r).getTime() - Date.now() > 0 && (t = decodeURIComponent(P.getDataFromLocalStorage(o)));
                }
                "string" == typeof t && "{" === t.trim().charAt(0) && (t = JSON.parse(t));
            } catch (e) {
                Object(p.logError)(e);
            }
            return t;
        }
        function M(e) {
            var t = {
                consentString: "",
                gdprApplies: !1,
                apiVersion: 0
            };
            return e && (t.consentString = e.consentString, t.gdprApplies = e.gdprApplies, 
            t.apiVersion = e.apiVersion), Object(p.cyrb53Hash)(JSON.stringify(t));
        }
        function R(e) {
            try {
                var t = new Date(Date.now() + 864e5 * A).toUTCString();
                P.setCookie(x, M(e), t, "Lax");
            } catch (e) {
                Object(p.logError)(e);
            }
        }
        function G() {
            try {
                return P.getCookie(x);
            } catch (e) {
                Object(p.logError)(e);
            }
        }
        function J(e) {
            if (e && "boolean" == typeof e.gdprApplies && e.gdprApplies) {
                if (!e.consentString) return !1;
                if (1 === e.apiVersion && !1 === Object(p.deepAccess)(e, "vendorData.purposeConsents.1")) return !1;
                if (2 === e.apiVersion && !1 === Object(p.deepAccess)(e, "vendorData.purpose.consents.1")) return !1;
            }
            return !0;
        }
        function H() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.hostname;
            if (!P.cookiesAreEnabled()) return e;
            var t, n, o = e.split(".");
            if (2 == o.length) return e;
            var r = -2, a = "_rdc".concat(Date.now()), i = "writeable";
            do {
                t = o.slice(r).join(".");
                var c = new Date(Object(p.timestamp)() + 1e4).toUTCString();
                P.setCookie(a, i, c, "Lax", t, void 0);
                var u = P.getCookie(a, void 0);
                u === i ? (n = !1, P.setCookie(a, "", "Thu, 01 Jan 1970 00:00:01 GMT", void 0, t, void 0)) : (r += -1, 
                n = Math.abs(r) <= o.length);
            } while (n);
            return t;
        }
        function W(e, t) {
            var n = function() {};
            t && (n = Object(p.delayExecution)(function() {
                clearTimeout(h), t();
            }, e.length)), e.forEach(function(e) {
                e.callback(function(t) {
                    t ? (e.config.storage && N(e, t), e.idObj = e.submodule.decode(t, e.config)) : Object(p.logInfo)("".concat(D, ": ").concat(e.submodule.name, " - request id responded with an empty value")), 
                    n();
                }), e.callback = void 0;
            });
        }
        function z(e) {
            return Array.isArray(e) && e.length ? e.filter(function(e) {
                return Object(p.isPlainObject)(e.idObj) && Object.keys(e.idObj).length;
            }).reduce(function(e, t) {
                return Object.keys(t.idObj).forEach(function(n) {
                    e[n] = t.idObj[n];
                }), e;
            }, {}) : {};
        }
        function B(e, t) {
            [ e ].some(function(e) {
                return !Array.isArray(e) || !e.length;
            }) || e.forEach(function(e) {
                e.bids && Object(p.isArray)(e.bids) && e.bids.forEach(function(e) {
                    var n = function(e, t) {
                        return Array.isArray(e) && e.length && t ? e.filter(function(e) {
                            return !e.config.bidders || !Object(p.isArray)(e.config.bidders) || y()(e.config.bidders, t);
                        }).filter(function(e) {
                            return Object(p.isPlainObject)(e.idObj) && Object.keys(e.idObj).length;
                        }).reduce(function(e, t) {
                            return Object.keys(t.idObj).forEach(function(n) {
                                e[n] = t.idObj[n];
                            }), e;
                        }, {}) : {};
                    }(t, e.bidder);
                    Object.keys(n).length && (e.userId = n, e.userIdAsEids = Object(g.b)(n));
                });
            });
        }
        function $(e) {
            var t = !1;
            if (void 0 === j && (j = function(e, t) {
                var n = Z(e, t), o = n.userIdModules;
                if (!n.hasValidated && !J(t)) return Object(p.logWarn)("".concat(D, " - gdpr permission not valid for local storage or cookies, exit module")), 
                [];
                var r = G();
                return R(t), o.reduce(function(e, n) {
                    return ee(n, t, r, !1), e.push(n), e;
                }, []);
            }(T, s.gdprDataHandler.getConsentData())).length) {
                q(j);
                var n = j.filter(function(e) {
                    return Object(p.isFn)(e.callback);
                });
                if (n.length) if (e && k > 0) {
                    t = !0;
                    var o = !1, r = function() {
                        o || (o = !0, e());
                    };
                    Object(p.logInfo)("".concat(D, " - auction delayed by ").concat(k, " at most to fetch ids")), 
                    h = setTimeout(r, k), W(n, r);
                } else c.a.on(l.a.EVENTS.AUCTION_END, function e() {
                    c.a.off(l.a.EVENTS.AUCTION_END, e), I > 0 ? setTimeout(function() {
                        W(n);
                    }, I) : W(n);
                });
            }
            e && !t && e();
        }
        function K(e, t) {
            $(function() {
                B(t.adUnits || Object(u.a)().adUnits, j);
                var n = w && (X() || []).find(function(e) {
                    return e.source === w;
                });
                if (n && "string" == typeof Object(p.deepAccess)(n, "uids.0.id")) {
                    var o = n.uids[0].id.replace(/[\W_]/g, "");
                    o.length >= 32 && o.length <= 150 ? Object(p.isGptPubadsDefined)() ? window.googletag.pubads().setPublisherProvidedId(o) : (window.googletag = window.googletag || {}, 
                    window.googletag.cmd = window.googletag.cmd || [], window.googletag.cmd.push(function() {
                        window.googletag.pubads().setPublisherProvidedId(o);
                    })) : Object(p.logWarn)("User ID - Googletag Publisher Provided ID for ".concat(w, " is not between 32 and 150 characters - ").concat(o));
                }
                e.call(this, t);
            });
        }
        function Q() {
            return $(), z(j);
        }
        function X() {
            return $(), Object(g.b)(z(j));
        }
        function Y(e, t) {
            var n = e ? e.submoduleNames : null;
            n || (n = []), $(function() {
                var e = s.gdprDataHandler.getConsentData(), o = Z(T, e), r = o.userIdModules;
                if (o.hasValidated || J(e)) {
                    var a = G();
                    R(e);
                    var i, c = [], u = O(r);
                    try {
                        for (u.s(); !(i = u.n()).done; ) {
                            var d = i.value;
                            n.length > 0 && -1 === n.indexOf(d.submodule.name) || (Object(p.logInfo)("".concat(D, " - refreshing ").concat(d.submodule.name)), 
                            ee(d, e, a, !0), te(d), j.length && q(j), Object(p.isFn)(d.callback) && c.push(d));
                        }
                    } catch (e) {
                        u.e(e);
                    } finally {
                        u.f();
                    }
                    c.length > 0 && W(c), t && t();
                } else Object(p.logWarn)("".concat(D, " - gdpr permission not valid for local storage or cookies, exit module"));
            });
        }
        var Z = Object(f.b)("sync", function(e, t) {
            return {
                userIdModules: e,
                hasValidated: t && t.hasValidated
            };
        }, "validateGdprEnforcement");
        function ee(e, t, n, o) {
            if (e.config.storage) {
                var r, a = F(e.config.storage), i = !1;
                if ("number" == typeof e.config.storage.refreshInSeconds) {
                    var c = new Date(F(e.config.storage, "last"));
                    i = c && Date.now() - c.getTime() > 1e3 * e.config.storage.refreshInSeconds;
                }
                !a || i || o || !function(e, t) {
                    return null != e && e === M(t);
                }(n, t) ? r = e.submodule.getId(e.config, t, a) : "function" == typeof e.submodule.extendId && (r = e.submodule.extendId(e.config, t, a)), 
                Object(p.isPlainObject)(r) && (r.id && (N(e, r.id), a = r.id), "function" == typeof r.callback && (e.callback = r.callback)), 
                a && (e.idObj = e.submodule.decode(a, e.config));
            } else if (e.config.value) e.idObj = e.config.value; else {
                var u = e.submodule.getId(e.config, t, void 0);
                Object(p.isPlainObject)(u) && ("function" == typeof u.callback && (e.callback = u.callback), 
                u.id && (e.idObj = e.submodule.decode(u.id, e.config)));
            }
        }
        function te(e) {
            for (var t = !1, n = 0; n < j.length; n++) if (e.config.name.toLowerCase() === j[n].config.name.toLowerCase()) {
                t = !0, j[n] = e;
                break;
            }
            t || j.push(e);
        }
        function ne() {
            var e = function(e, t, n) {
                return Array.isArray(e) ? e.reduce(function(e, t) {
                    return !t || Object(p.isEmptyStr)(t.name) || (!t.storage || Object(p.isEmptyStr)(t.storage.type) || Object(p.isEmptyStr)(t.storage.name) || -1 === n.indexOf(t.storage.type) ? Object(p.isPlainObject)(t.value) ? e.push(t) : t.storage || t.value || e.push(t) : e.push(t)), 
                    e;
                }, []) : [];
            }(V, 0, U);
            if (e.length) {
                var t = L.filter(function(e) {
                    return !r()(T, function(t) {
                        return t.name === e.name;
                    });
                });
                T = t.map(function(t) {
                    var n = r()(e, function(e) {
                        return e.name && (e.name.toLowerCase() === t.name.toLowerCase() || t.aliasName && e.name.toLowerCase() === t.aliasName.toLowerCase());
                    });
                    return n && t.name !== n.name && (n.name = t.name), t.findRootDomain = H, 
                    n ? {
                        submodule: t,
                        config: n,
                        callback: void 0,
                        idObj: void 0
                    } : null;
                }).filter(function(e) {
                    return null !== e;
                }), !_ && T.length && (Object(u.a)().requestBids.before(K, 40), 
                Object(p.logInfo)("".concat(D, " - usersync config updated for ").concat(T.length, " submodules: "), T.map(function(e) {
                    return e.submodule.name;
                })), _ = !0);
            }
        }
        function oe(e) {
            r()(L, function(t) {
                return t.name === e.name;
            }) || (L.push(e), ne());
        }
        function re(e) {
            w = void 0, T = [], V = [], _ = !1, j = void 0, -1 !== (U = [ P.localStorageIsEnabled() ? E : null, P.cookiesAreEnabled() ? S : null ].filter(function(e) {
                return null !== e;
            })).indexOf(S) && P.getCookie(C) ? Object(p.logInfo)("".concat(D, " - opt-out cookie found, exit module")) : -1 !== U.indexOf(E) && P.getDataFromLocalStorage(C) ? Object(p.logInfo)("".concat(D, " - opt-out localStorage found, exit module")) : (e.getConfig("userSync", function(e) {
                var t = e.userSync;
                w = t.ppid, t && t.userIds && (V = t.userIds, I = Object(p.isNumber)(t.syncDelay) ? t.syncDelay : 500, 
                k = Object(p.isNumber)(t.auctionDelay) ? t.auctionDelay : 0, ne());
            }), Object(u.a)().getUserIds = Q, Object(u.a)().getUserIdsAsEids = X, 
            Object(u.a)().refreshUserIds = Y);
        }
        re(a.b), Object(f.c)("userId", oe), window.pbjs.installedModules.push("userId");
    }
}, [ 905 ]);

pbjs.processQueue();

var jppol = function(exports) {
    "use strict";
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
    (function(BIDDERNAMES) {
        BIDDERNAMES["adform"] = "adf";
        BIDDERNAMES["appnexus"] = "appnexus";
        BIDDERNAMES["criteo"] = "criteo";
    })(BIDDERNAMES || (BIDDERNAMES = {}));
    var adformBidder = function(bannerObject, eId) {
        if (eId === void 0) {
            eId = false;
        }
        var adformBids = [];
        if (typeof bannerObject.adformMID !== "undefined") {
            var adformObject = {
                bidder: BIDDERNAMES.adform,
                params: {
                    mid: bannerObject.adformMID,
                    priceType: "net",
                    rcur: "USD"
                }
            };
            if (eId) {
                adformObject.params.eids = encodeEIDs([ {
                    source: "jppol.dk’",
                    uids: [ {
                        atype: 1,
                        id: eId
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
                bidder: BIDDERNAMES.appnexus,
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
        if (typeof bannerObject.criteo !== "undefined") {
            var publisherSubId = bannerObject.criteo.publisherSubId;
            criteoBid.push({
                bidder: BIDDERNAMES.criteo,
                params: {
                    networkId: 6911,
                    publisherSubId: publisherSubId
                }
            });
        }
        return criteoBid;
    };
    var BidderHandler = function(bannerObject, keywords, eId) {
        try {
            var adformBids = adformBidder(bannerObject, eId);
            var appnexusBids = appnexusBidder(bannerObject, keywords);
            var criteoBids = criteoBidder(bannerObject);
            return __spreadArray(__spreadArray(__spreadArray([], adformBids, true), appnexusBids, true), criteoBids, true);
        } catch (err) {
            console.error("jppolPrebid BidderHandler", err);
        }
    };
    var PREBIDAUCTION = "prebidAuction";
    var COMPLETED = "completed";
    var mimes = [ "video/mp4" ];
    function adunitCreator(bannerContainer, keywords, eId) {
        try {
            var adUnits = [];
            for (var _i = 0, bannerContainer_1 = bannerContainer; _i < bannerContainer_1.length; _i++) {
                var banner = bannerContainer_1[_i];
                var bidders = BidderHandler(banner, keywords, eId);
                var playerSize = [ [ 640, 480 ] ];
                var mediaTypes = banner.video ? {
                    video: {
                        api: [ 2 ],
                        context: "instream",
                        linearity: 1,
                        maxduration: 30,
                        mimes: mimes,
                        playerSize: playerSize,
                        protocols: [ 2, 3, 5, 6 ]
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
                        returnObj[key] = __spreadArray(__spreadArray([], returnObj[key], true), obj2[key], true);
                    } else if (Object.prototype.toString.call(obj2[key]) === "[object Object]") {
                        deepObjectMerge(returnObj[key], obj2[key]);
                    } else {
                        returnObj[key] = obj2[key];
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
                var _a = this.auctionSettings, adserverCallback_1 = _a.adserverCallback, banners = _a.banners, consentTimeout_1 = _a.consentTimeout, debug_1 = _a.debug, eids_1 = _a.eids, keywords = _a.keywords, timeout_1 = _a.timeout;
                if (window[PREBIDAUCTION][COMPLETED] && pbjs_1.adUnits.length) {
                    pbjs_1.removeAdUnit();
                }
                window[PREBIDAUCTION][COMPLETED] = false;
                var adUnits_1 = adunitCreator(banners, keywords, eids_1);
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
                                        source: "jppol.dk’",
                                        uids: [ {
                                            ext: {
                                                third: eids_1
                                            },
                                            id: eids_1
                                        } ]
                                    } ]
                                }
                            },
                            userSync: {
                                iframeEnabled: true,
                                syncDelay: 6e3,
                                userIds: [ {
                                    bidders: [ BIDDERNAMES.adform, BIDDERNAMES.appnexus ],
                                    name: "pubProvidedId",
                                    params: {
                                        eids: [ {
                                            source: "jppol.dk’",
                                            uids: [ {
                                                atype: 1,
                                                id: eids_1
                                            } ]
                                        } ]
                                    }
                                } ]
                            }
                        });
                        pbjs_1.addAdUnits(adUnits_1);
                        pbjs_1.requestBids({
                            bidsBackHandler: function(bidResponse) {
                                var apntag = window.apntag;
                                if (typeof apntag !== "undefined") {
                                    pbjs_1.que.push(function() {
                                        apntag.anq.push(function() {
                                            pbjs_1.setTargetingForAst();
                                            apntag.loadTags();
                                            window.jppolStillWaitingForPrebid = false;
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
        return hbParams.join("&");
    }
    if (window.jppol && window.jppol.cache && window.jppol.cache.length) {
        window.jppol.cache.forEach(function(cacheElement) {
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