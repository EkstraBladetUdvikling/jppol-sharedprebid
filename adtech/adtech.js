'use strict'

;(function (ebAdOps) {
  /**
  adserverInit
  Fetch DAC script and initialize ADTECH DAC (calls setupAdserver)
  */
  (function adserverInit () {
    console.log('prebid', 'adtech', 'setup AdTech - fetch DAC.js')
    var curScript = document.currentScript
    var newScript = document.createElement('script')
    newScript.async = true
    newScript.src = ebAdOps.settings.dacsrc

    newScript.onload = function () {
      console.log('prebid', 'adtech', 'setup adserver')
      setupAdserver()
    }
    curScript.parentNode.insertBefore(newScript, curScript)
  }())

  var adtechParams = {}
  var adtechKv = {}
  var adQueue = []

  /**
  adtechKvAdder
  Handles key-values from criteo to be added correctly to DAC
  */
  function adtechKvAdder (str, obj) {
    var split_str = str.split(';'),
      strLength = split_str.length,
      obj = obj || {}
    for (var i = strLength - 1; i--;) {
      var kv = split_str[i].replace('kv', ''),
        kvsplit = kv.split('='),
        k = kvsplit[0],
        v = kvsplit[1]
      obj[k] = v
    }
    return obj
  }

  /**
  setupAdserver
  Callback function from DAC load
  adds basic adserver information to ADTECH object
  */
  function setupAdserver () {
    // <%-- criteo . key value --%>
    var crtg_content = window.crtg_content
    if (typeof crtg_content !== 'undefined' && crtg_content !== '') {
      adtechKv = adtechKvAdder(crtg_content, adtechKv)
    }

    // <%-- blue kai . key value --%>
    if (typeof bk_results !== 'undefined' && typeof bk_results.campaigns !== 'undefined') {
      adtechKv.bkcmpid = []
      adtechKv.bkuuid = []
      for (var i in bk_results.campaigns) {
        adtechKv.bkcmpid.push(bk_results.campaigns[i].campaign)
        adtechKv.bkuuid.push(bk_results.campaigns[i].bkuuid)
      }
    }

    ADTECH.debugMode = ebAdOps.settings.debug

    // setting up ADTECH pagewide config
    ADTECH.config.page = {
      protocol: 'http',
      server: ebAdOps.settings.tagdomain,
      network: '323.0',
      pageid: 0,
      kv: adtechKv,
      params: adtechParams,
      fif: {
        usefif: false // true
      }
    }
  }

  /**
  handleBanner
  handle specific banner position, after prebid returns data
  */
  function handleBanner (argObj) {
    console.log('prebid', 'adtech', 'handleBanner', argObj)
    var placementKV = {}
    var position = argObj.elementId
    if (position === 'intext_outer') {
      var intextElement = document.getElementById(position)
      // insert banner HTML
      intextElement.innerHTML = argObj.bannerHTML
      // Position update
      position = 'intextbanner'
    }
    /**
    Key Values added to ADTECH call according to their value in USD
    */
    if (typeof argObj.adUnitCode !== 'undefined') {
    // var params = pbjs.getAdserverTargetingForAdUnitCode(adUnitCode)
      var cpmValuesToKV = argObj.cpms // ebAdOps.settings['cpmValues']
      console.log('prebid', 'adtech', 'winningCPM', argObj.winningCPM, 'cpmValues from secParam', cpmValuesToKV)

      if (argObj.sendXHBDeal) {
        placementKV['prebidXHB'] = 1
      } else {
        for (var i = cpmValuesToKV.length; i--;) {
          var floatCPM = parseFloat(cpmValuesToKV[i])
          if (argObj.winningCPM >= floatCPM) {
            placementKV['prebid' + (i + 1)] = 1
          }
        }
      }

      console.log('prebid', 'adtech', 'placementKV: ', placementKV, argObj.winningCPM)
    }
    /**
    ADTECH banner object created - DAC specs
    */
    var bannerObj = {
      adContainerId: position,
      kv: placementKV,
      params: {
        loc: '100',
        alias: argObj.adtechId
      }
    }
    console.log('prebid', 'adtech banner', bannerObj)

    if (typeof ADTECH !== 'undefined') {
      ADTECH.config.placements[argObj.adtechId] = bannerObj

      ADTECH.config.placements[argObj.adtechId].complete = function () {
        ebAdOps.returnedFromAdtech(position, argObj.adUnitCode)
      }

      ADTECH.loadAd(argObj.adtechId)
    } else {
      adQueue.push(bannerObj)
    }
  }
  console.log('prebid', 'adtech', 'add handleBanner to ebAdOps')
  ebAdOps.handleBanner = handleBanner
}(window.ebAdOps = window.ebAdOps || {}))
