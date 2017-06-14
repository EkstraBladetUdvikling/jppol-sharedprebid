'use strict'

;(function (ebAdOps, ebpc, pbjs) {
  pbjs.que = pbjs.que || []

  console.log('prebid', 'cpmValues', ebAdOps.settings.cpmValues)
  console.log('prebid', 'cpmValuesDKK', ebAdOps.settings.cpmValuesDKK)

  var ebBidReturns = {}
  var bidTimeout = ebAdOps.settings.prebidtimeout || 650
  console.log('prebid bidTimeout in prebid', bidTimeout)
  ebAdOps.ebPlacementMap = ebAdOps.ebPlacementMap || {}

  pbjs.que.push(function () {
    // var adUnits = getEBAdUnits()
    var adUnits = ebAdOps.biddersetup(ebpc)
    console.log('prebid adUnits in prebid', adUnits)
    pbjs.addAdUnits(adUnits)

    // pbjs.setPriceGranularity('dense')
    pbjs.setBidderSequence('random')

    pbjs.requestBids({
      timeout: bidTimeout,
      bidsBackHandler: function (bidResponse) {
        console.log('prebid', 'bidResponse', bidResponse)
        if (typeof bidResponse !== 'undefined' && Object.keys(bidResponse).length !== 0) {
          for (var key in bidResponse) {
            console.log('prebid', 'key in bidResponse', bidResponse[key])
            var bidsReturned = bidResponse[key].bids
            var adUnitCode = bidsReturned[0].adUnitCode
            console.log('prebid', 'bidResponse adUnitCode', adUnitCode)
            var adPlacement = ebpc[adUnitCode] || ''
            console.log('prebid', 'bidResponse adPlacement', adPlacement, ' - ebAdOps.settings - ', ebAdOps.settings)
            var askAdtech = (adPlacement !== '') ? true : false
            console.log('prebid', 'bidResponse getting params from pbjs for adUnitCode', adUnitCode, 'askAdtech', askAdtech)

            var params = pbjs.getAdserverTargetingForAdUnitCode(adUnitCode) || {}

            console.log('prebid', 'bidResponse setting params from pbjs to ebBidReturns', params, adUnitCode)

            ebBidReturns[adUnitCode] = params
            var winningCPM = params['hb_pb'] || 0
            if (typeof winningCPM === 'string') {
              winningCPM = parseFloat(winningCPM)
            }

            console.log('prebid', 'bidsReturned', bidsReturned)
            // console.log('prebid','getHighestCpmBids', pbjs.getHighestCpmBids(adUnitCode))

            // if Adform is the winner of the auction, figure out if we need to use DKK or USD as currency
            var cpms = (params['hb_bidder'] === 'adform' && ebAdOps.settings.isadformusd === false) ? ebAdOps.settings['cpmValuesDKK'] : ebAdOps.settings['cpmValues']
            var xhbValue = (params['hb_bidder'] === 'adform' && ebAdOps.settings.isadformusd === false) ? ebAdOps.settings['xhbValueDKK'] : ebAdOps.settings['xhbValue']
            var xhbDeal = (params['hb_xhb_deal'] === '99999999')
            //
            var minimumCPM = parseFloat(cpms[cpms.length - 1])
            console.log('prebid', 'Is winning cpm ', winningCPM, 'from', params['hb_bidder'], 'higher than or equal to our minimum cpm', minimumCPM, (winningCPM >= minimumCPM))
            console.log('prebid', 'should', adUnitCode, 'askAdtech', askAdtech, 'with winningCPM:', winningCPM, 'from', bidsReturned.length, 'bids')
            if (askAdtech) {
              console.log('prebid', 'askAdtech', adPlacement)
              var sendXHBDeal = false
              if (xhbDeal && xhbValue > winningCPM) {
                sendXHBDeal = true
                ebBidReturns[adUnitCode].renderXHB = true
              }
              ebAdOps.handleBanner({
                'adUnitCode': adUnitCode,
                'elementId': adPlacement.elementId,
                'adtechId': adPlacement.adtechId,
                'bannerHTML': adPlacement.bannerHTML || '',
                'winningCPM': winningCPM,
                'cpms': cpms,
                'sendXHBDeal': sendXHBDeal,
                'xhbValue': xhbValue
              })
            } else if (winningCPM >= minimumCPM) {
              console.log('prebid', 'winningCPM', winningCPM, ' then render ', adUnitCode)
              renderPrebidAd({
                adUnitCode: adUnitCode,
                adId: adUnitCode,
                askAdtech: false
              })
              afterRender(adUnitCode)
            }
          }
        } else {
          console.log('prebid', 'w0rd', ebpc, adUnitCode, adPlacement, winningCPM, cpms)
          for (var key in ebpc) {
            ebAdOps.handleBanner({
              'elementId': ebpc[key].elementId,
              'adtechId': ebpc[key].adtechId,
              'bannerHTML': ebpc[key].bannerHTML || ''
            })
          }
        }
      }
    })
  })

  function renderPrebidAd (obj) {
    try {
      console.log('prebid', 'renderPrebidAd argument object', obj)
      var adUnitCode = obj.adUnitCode
      var adId = obj.adId
      var renderXHB = obj.renderXHB
      var askAdtech = !!(obj.askAdtech)

      console.log('prebid', 'renderPrebidAd with adUnitCode', adUnitCode, 'and adId', adId)
      var container = document.getElementById(adId)
      if (container !== null) {
        var newIframe = document.createElement('iframe')
        var shouldRenderPrebid = false
        var shouldRenderXHB = false
        console.log('prebid', 'renderPrebidAd askAdtech', askAdtech)
        // if we have been through adtech we reuse the friendly iframe they delivered, otherwise we create one
        if (askAdtech === false) {
          shouldRenderPrebid = true
        } else {
          var iframe = container.querySelector('iframe')
          console.log('prebid', 'we did ask adtech, so we have an iframe:', iframe)
          if (iframe === null) {
            shouldRenderPrebid = (container.querySelector('.prebidPlaceholder') !== null)
            shouldRenderXHB = (renderXHB && container.querySelector('.prebidPlaceholder_xhb') !== null)
          } else {
            shouldRenderPrebid = (container.querySelector('.prebidPlaceholder') !== null) || (iframe !== null && iframe.contentWindow.document.body.querySelector('.prebidPlaceholder') !== null)
            shouldRenderXHB = (renderXHB && (container.querySelector('.prebidPlaceholder_xhb') !== null) || (iframe !== null && iframe.contentWindow.document.body.querySelector('.prebidPlaceholder_xhb') !== null))
          }
        }
        console.log('prebid', 'askAdtech iframe ', iframe)
        console.log('prebid', 'shouldRenderPrebid ', shouldRenderPrebid)
        console.log('prebid', 'shouldRenderXHB ', shouldRenderXHB)

        if (shouldRenderPrebid || shouldRenderXHB) {
          var params = pbjs.getAdserverTargetingForAdUnitCode(adUnitCode)
          console.log('prebid', adUnitCode, 'params when ready to render', params)
          if ((typeof params['hb_adid'] !== 'undefined' && shouldRenderPrebid) || (typeof params['hb_xhb_adid'] !== 'undefined' && shouldRenderXHB)) {
            var height = 320
            var width = 320
            var styleStr = 'border:0;margin:0 auto;'
            if (typeof params['hb_size'] !== 'undefined' && (typeof params['hb_adid'] !== 'undefined' && shouldRenderPrebid)) {
              var iframeDimensions = params['hb_size'].split('x')
              width = iframeDimensions[0]
              height = iframeDimensions[1]
              styleStr += 'height:' + height + 'px;' + 'width:' + width + 'px;'
            } else if (typeof params['hb_xhb_adid'] !== 'undefined' && shouldRenderXHB) {
              styleStr += 'min-height: 160px; max-height: 320px;' + 'width:' + width + 'px;'
            }

            newIframe.setAttribute('style', styleStr)
            newIframe.setAttribute('scrolling', 'no')

            // when we haven't been through Adtech we need to add iframe to the page
            container.innerHTML = ''
            container.appendChild(newIframe)

            var iframeDoc = newIframe.contentWindow.document

            // and then we render
            var paramName = 'hb_adid'
            if (shouldRenderXHB) {
              var paramName = 'hb_xhb_adid'
            }
            console.log('prebid', 'now we render? (params)', params, paramName)
            pbjs.renderAd(iframeDoc, params[paramName])

            /***/
            newIframe.addEventListener('load', function () {
              iframeDoc.body.setAttribute('style', 'margin:0;padding:0;')
            })
            /***/
          }
        }
      }
    } catch (err) {
      console.error('renderPrebidAd', err)
    }
  }

  function afterRender (adId) {
    var parentContainer = document.getElementById('wrapper_' + adId)
    parentContainer.className += ' has-content'
  }

  function returnedFromAdtech (adId, adUnitCode) {
    var bidReturn = ebBidReturns[adUnitCode]
    console.log('prebid', 'returnedFromAdtech', adId, adUnitCode, bidReturn)
    //
    var container = document.getElementById(adId)
    var iframe = container.querySelector('iframe')
    console.log('prebid', 'iframe', iframe)
    var shouldRenderPrebid = (iframe !== null && iframe.contentWindow.document.body.querySelector('.prebidPlaceholder') !== null) || (container.querySelector('.prebidPlaceholder') !== null)
    var shouldRenderXHB = (iframe !== null && iframe.contentWindow.document.body.querySelector('.prebidPlaceholder_xhb') !== null) || (container.querySelector('.prebidPlaceholder_xhb') !== null)

    console.log('prebid', 'shouldRenderPrebid', shouldRenderPrebid)
    console.log('prebid', 'bidReturn', bidReturn)
    // bidReturn will be undefined if cpm = 0
    if ((shouldRenderPrebid || shouldRenderXHB) && bidReturn !== undefined) {
      // var adUnitCode = adId
      console.log('prebid', 'adUnitCode to renderPrebidAd', adUnitCode)
      renderPrebidAd({
        adUnitCode: adUnitCode,
        adId: adId,
        renderXHB: bidReturn.renderXHB,
        askAdtech: true
      })
    } else {
      console.log('prebid', 'empty bidReturn')
    }

    afterRender(adId)
  }

  ebAdOps.returnedFromAdtech = returnedFromAdtech
  ebAdOps.ebBidReturns = ebBidReturns
}(window.ebAdOps = window.ebAdOps || {}, window.ebPlacementCache = window.ebPlacementCache || {}, window.pbjs = window.pbjs || {}))
