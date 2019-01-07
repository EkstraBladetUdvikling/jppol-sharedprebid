'use strict';

((jppolAdOps, pbjs) => {
  pbjs.que = pbjs.que || [];

  const ebBidReturns = {};

  interface PrebidOptions {
    banners: object;
    consentAllowAuction: boolean;
    consentTimeout: number;
    debug: boolean;
    device: string;
    timeout: number;
    tracking: boolean;
    trackingDistribution: boolean;
    trackingSampling: boolean;
  }

  /**
   * Helper: mergeObject
   * The values in the overwriteObject will always trump the values in baseObject
   */
  function mergeObject(baseObject, overwriteObject) {
    try {
      let returnObj = overwriteObject;
      if (typeof overwriteObject === 'undefined') {
        returnObj = baseObject;
      } else {
        for (const d in baseObject) {
          if (baseObject.hasOwnProperty(d)) {
            if (typeof returnObj[d] === 'undefined') {
              returnObj[d] = baseObject[d];
            }
          }
        }
      }
      return returnObj;
    } catch (err) {
      console.error('prebid: prebid-desktop.js', 'mergeObj ', err);
    }
  }

  /**
   * Helper: initializeTracking
   * creating google analytics object to add the tracking to
   */
  let reRunCount = 0;
  function initializeTracking(
    trackingSampling = true,
    trackingDistribution = false
  ) {
    try {
      console.log(
        'custom GA what is up?',
        trackingSampling,
        trackingDistribution
      );
      reRunCount++;

      let prebidTrackerName = '';
      if (
        typeof (window as any).ga !== 'undefined' &&
        typeof (window as any).ga.getAll !== 'undefined'
      ) {
        const trackers = (window as any).ga.getAll();
        console.log('custom ga', (window as any).ga.getAll());
        for (const tracker of trackers) {
          const trackerName =
            tracker.get('name') === '' ? '(unnamed)' : tracker.get('name');
          if (
            tracker.get('trackingId') === 'UA-2135460-1' ||
            tracker.get('trackingId') === 'UA-2135460-47'
          ) {
            prebidTrackerName = trackerName;
          }
        }
        console.log('custom ga, ready for tracking', prebidTrackerName);
        if (prebidTrackerName !== '') {
          console.log('custom ga, ready for tracking');
          pbjs.que.push(() => {
            // Sampling set to 5%
            const sampling = trackingSampling ? 0.05 : 1;
            const analyticsObject = [
              {
                options: {
                  enableDistribution: trackingDistribution,
                  sampling,
                  trackerName: prebidTrackerName
                },
                provider: 'ga'
              }
            ];

            pbjs.enableAnalytics(analyticsObject);
          });
        }
      } else if (reRunCount < 10) {
        setTimeout(() => initializeTracking(trackingSampling), 500);
      } else {
        throw new Error('checked 10 times');
      }
    } catch (err) {
      console.error('initializeTracking', err);
    }
  }

  /**
   * Add banners to prebid
   */
  function addBannersToPrebid(obj: PrebidOptions) {
    const banners = obj.banners;
    const device = obj.device;
    const bidTimeout = obj.timeout;
    const tracking = obj.tracking;
    const trackingDistribution = obj.trackingDistribution;
    const trackingSampling = obj.trackingSampling;

    if (tracking) {
      initializeTracking(trackingSampling, trackingDistribution);
    }
    pbjs.que.push(() => {
      const adUnits = jppolAdOps.biddersetup(banners, device);

      jppolAdOps.prebidCache = {
        status: 'undone'
      };

      if (adUnits.length > 0) {
        pbjs.setConfig({
          bidderTimeout: bidTimeout,
          consentManagement: {
            allowAuctionWithoutConsent: obj.consentAllowAuction,
            cmpApi: 'iab',
            timeout: obj.consentTimeout
          },
          debug: obj.debug,
          priceGranularity: 'high',
          userSync: {
            enabledBidders: ['pubmatic'],
            iframeEnabled: true,
            syncDelay: 6000
          }
        });
        pbjs.addAdUnits(adUnits);

        pbjs.requestBids({
          bidsBackHandler: bidResponse => {
            console.log('prebid bidResponse', bidResponse);
            let emptyResponse = {};
            if (
              typeof bidResponse !== 'undefined' &&
              Object.keys(bidResponse).length !== 0
            ) {
              for (const key in bidResponse) {
                if (bidResponse.hasOwnProperty(key)) {
                  const bidsReturned = bidResponse[key].bids;
                  const adUnitCode = bidsReturned[0].adUnitCode;
                  const adPlacement = banners[adUnitCode] || '';
                  const params =
                    pbjs.getAdserverTargetingForAdUnitCode(adUnitCode) || {};

                  ebBidReturns[adUnitCode] = params;
                  jppolAdOps.prebidCache[adUnitCode] =
                    jppolAdOps.prebidCache[adUnitCode] || {};
                  jppolAdOps.prebidCache[adUnitCode].params = params;

                  const placementKV = params || {};
                  placementKV.is_prebid = 1;
                  /**
                   * Set winning bid key value
                   * cpm is multiplied 100 and decimals removed, to ensure ADTECH understands the value
                   */
                  const winningCPM = parseFloat(params.hb_pb) || 0;
                  if (winningCPM > 0) {
                    const prebidKV = Math.round(winningCPM * 100);
                    placementKV.prebid = prebidKV;
                  }

                  /**
                   * Set XHB deal key value
                   */
                  const xhbDeal = params.hb_xhb_deal === '99999999';
                  if (xhbDeal) {
                    placementKV.prebidXHB = 1;
                  }
                  console.log('bidResponse adUnitCode', adUnitCode);
                  jppolAdOps.prebidCache[adUnitCode].adUnit = adUnitCode;
                  jppolAdOps.prebidCache[adUnitCode].placement = adPlacement;
                  jppolAdOps.prebidCache[adUnitCode].placementKV = placementKV;
                  jppolAdOps.prebidCache.status = 'partial';
                  console.log(
                    'after auction',
                    jppolAdOps.prebidCache[adUnitCode]
                  );
                  if (
                    typeof jppolAdOps.prebidCache[adUnitCode].waiting !==
                    'undefined'
                  ) {
                    jppolAdOps.handleFinalBanner(
                      jppolAdOps.prebidCache[adUnitCode].finalBannerObejct,
                      true
                    );
                  } else {
                    console.log('what the what is happenign', adUnitCode);
                  }
                }
              }
            } else if (
              typeof bidResponse !== 'undefined' &&
              Object.keys(bidResponse).length === 0
            ) {
              emptyResponse = { is_prebid: 0 };
            }

            if (Object.keys(bidResponse).length !== adUnits.length) {
              for (const adUnit of adUnits) {
                const adUnitCode = adUnit.code;
                if (
                  typeof bidResponse[adUnitCode] === 'undefined' &&
                  typeof jppolAdOps.prebidCache[adUnitCode] !== 'undefined'
                ) {
                  jppolAdOps.prebidCache[adUnitCode].placementKV =
                    emptyResponse !== {} ? emptyResponse : '';
                  jppolAdOps.handleFinalBanner(
                    jppolAdOps.prebidCache[adUnitCode].finalBannerObejct,
                    true
                  );
                }
              }
            }
            jppolAdOps.prebidCache.status = 'done';
          },
          timeout: bidTimeout
        });
      }
    });
  }

  function renderPrebidAd(posID, prebidType, container) {
    try {
      if (
        container !== null &&
        typeof jppolAdOps.prebidCache[posID] !== 'undefined'
      ) {
        const params = jppolAdOps.prebidCache[posID].params;

        const size =
          prebidType.indexOf('xhb') === -1 &&
          typeof params.hb_size !== 'undefined'
            ? params.hb_size.split('x')
            : params.hb_xhb_size.split('x');
        const paramName =
          prebidType.indexOf('xhb') === -1 ? 'hb_adid' : 'hb_xhb_adid';
        const newIframe = document.createElement('iframe');

        const heightStyle = 'height:' + size[1] + 'px;';
        const styleStr =
          'border:0;margin:0 auto;' + 'width:' + size[0] + 'px;' + heightStyle;
        const innerContainer = container.children[0] || container;
        newIframe.setAttribute('style', styleStr);
        newIframe.setAttribute('scrolling', 'no');
        while (innerContainer.firstChild) {
          innerContainer.removeChild(innerContainer.firstChild);
        }
        innerContainer.setAttribute('style', heightStyle);
        innerContainer.appendChild(newIframe);
        innerContainer.classList.add('gotPrebidded');
        container.classList.add('has-content');
        const iframeDoc = newIframe.contentWindow.document;

        // and then we render
        iframeDoc.body.setAttribute('style', 'margin:0;padding:0;');
        pbjs.renderAd(iframeDoc, params[paramName]);
        newIframe.addEventListener(
          'load',
          () => {
            iframeDoc.body.setAttribute('style', 'margin:0;padding:0;');
          },
          false
        );
      }
    } catch (err) {
      console.error('sfPrebid', 'renderPrebidAd', err);
    }
  }

  /**
   * Initialize Prebid
   */
  function setupPrebid(options: PrebidOptions) {
    const prebidDefault = {
      debug: false,
      timeout: 700,
      tracking: false
    };

    jppolAdOps.prebidSettings = mergeObject(prebidDefault, options);

    addBannersToPrebid(jppolAdOps.prebidSettings);
  }

  jppolAdOps.addBannersToPrebid = addBannersToPrebid;
  jppolAdOps.renderPrebidAd = renderPrebidAd;
  jppolAdOps.setupPrebid = setupPrebid;
})(
  ((window as any).jppolAdOps = (window as any).jppolAdOps || {}),
  ((window as any).pbjs = (window as any).pbjs || {})
);
