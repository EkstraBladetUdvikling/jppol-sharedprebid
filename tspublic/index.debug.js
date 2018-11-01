var jppol = function(e) {
    "use strict";
    var n = function() {
        return (n = Object.assign || function(e) {
            for (var i, n = 1, t = arguments.length; n < t; n++) for (var r in i = arguments[n]) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
            return e;
        }).apply(this, arguments);
    }, t = function() {
        function e(e, i) {
            void 0 === e && (e = !0), void 0 === i && (i = !1), this.reCheckCount = 0, this.initializeTracking(e, i);
        }
        return e.prototype.initializeTracking = function(a, o) {
            var c = this;
            void 0 === a && (a = !0), void 0 === o && (o = !1);
            try {
                var u = window, s = u.pbjs;
                this.reCheckInterval = setInterval(function() {
                    c.reCheckCount++;
                    var i = "";
                    if (clearInterval(c.reCheckInterval), void 0 !== u.ga && void 0 !== u.ga.getAll) {
                        for (var e = 0, n = u.ga.getAll(); e < n.length; e++) {
                            var t = n[e], r = "" === t.get("name") ? "(unnamed)" : t.get("name");
                            "UA-2135460-1" !== t.get("trackingId") && "UA-2135460-47" !== t.get("trackingId") || (i = r);
                        }
                        "" !== i && s.que.push(function() {
                            var e = [ {
                                options: {
                                    enableDistribution: o,
                                    sampling: a ? .05 : 1,
                                    trackerName: i
                                },
                                provider: "ga"
                            } ];
                            s.enableAnalytics(e);
                        });
                    } else if (10 === c.reCheckCount) throw clearInterval(c.reCheckInterval), new Error("Prebid Analytics Checked 10 times with no luck");
                }, 500);
            } catch (e) {}
        }, e;
    }();
    function a(e, i) {
        var n = [];
        if (void 0 !== e.adformMID) {
            var t = {
                bidder: "adform",
                params: {
                    mid: e.adformMID,
                    rcur: "USD"
                }
            };
            n.push(t);
        }
        if (void 0 !== e.appnexusID) {
            var r = {
                bidder: "appnexus",
                params: {
                    placementId: e.appnexusID
                }
            };
            n.push(r);
        }
        if (void 0 !== e.criteoId && n.push({
            bidder: "criteo",
            params: {
                zoneId: e.criteoId
            }
        }), void 0 !== e.pubmaticAdSlot) for (var a = e.sizes, o = a.length; o--; ) {
            var c = a[o].join("x"), u = e.pubmaticAdSlot + "@" + c;
            n.push({
                bidder: "pubmatic",
                params: {
                    adSlot: u,
                    publisherId: "156010"
                }
            });
        }
        if (void 0 !== e.rubiconZone && void 0 !== e.rubiconSizes) {
            var s = 20183;
            switch (i) {
              case "smartphone":
                s = 23382;
                break;

              case "tablet":
                s = 43742;
                break;

              default:
                s = 20183;
            }
            n.push({
                bidder: "rubicon",
                params: {
                    accountId: 10093,
                    siteId: s,
                    zoneId: e.rubiconZone
                }
            });
        }
        return n;
    }
    var i = function() {
        function e(e) {
            var i = n({}, {
                debug: !1,
                timeout: 700,
                tracking: !1
            }, e);
            this.auction(i);
        }
        return e.prototype.auction = function(i) {
            var e = function(e, i) {
                try {
                    var n = [];
                    for (var t in e) if (e.hasOwnProperty(t)) {
                        var r = void 0 !== e[t].sizes ? a(e[t], i) : [];
                        n.push({
                            bids: r,
                            code: t,
                            sizes: e[t].sizes
                        });
                    }
                    return n;
                } catch (e) {}
            }(i.banners, i.device), n = window.pbjs;
            i.tracking && new t(i.trackingSampling, i.trackingDistribution), n.que.push(function() {
                0 < e.length && (n.setConfig({
                    bidderTimeout: i.timeout,
                    consentManagement: {
                        allowAuctionWithoutConsent: i.consentAllowAuction,
                        cmpApi: "iab",
                        timeout: i.consentTimeout
                    },
                    debug: i.debug,
                    priceGranularity: "high",
                    userSync: {
                        enabledBidders: [ "pubmatic" ],
                        iframeEnabled: !0,
                        syncDelay: 6e3
                    }
                }), n.addAdUnits(e), n.requestBids({
                    bidsBackHandler: function(e) {
                        i.adserverCallback(e);
                    }
                }));
            });
        }, e;
    }();
    return e.prebid = function(e) {
        new i(e);
    }, e;
}({});
