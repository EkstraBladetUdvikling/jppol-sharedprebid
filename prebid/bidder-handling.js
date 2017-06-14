'use strict'

;(function (ebAdOps, ebPlacementCache) {
  /**
  * # getRubiconSize
  * Get current bannersize from rubicon sizemap
  * TODO: NB! the sizemap should be updated if prebid Rubicon adapter is changed
  **/
  function getRubiconSize (pbSize) {
    var sizeMap = {
      1: '468x60',
      2: '728x90',
      8: '120x600',
      9: '160x600',
      10: '300x600',
      15: '300x250',
      16: '336x280',
      19: '300x100',
      43: '320x50',
      44: '300x50',
      48: '300x300',
      54: '300x1050',
      55: '970x90',
      57: '970x250',
      58: '1000x90',
      59: '320x80',
      61: '1000x1000',
      65: '640x480',
      67: '320x480',
      68: '1800x1000',
      72: '320x320',
      73: '320x160',
      83: '480x300',
      94: '970x310',
      96: '970x210',
      101: '480x320',
      102: '768x1024',
      113: '1000x300',
      117: '320x100',
      125: '800x250',
      126: '200x600'
    }

    for (var key in sizeMap) {
      if (sizeMap[key] === pbSize) {
        return key
      }
    }
  }

  /**
  * # getBidders
  * create bidder data to send to prebid
  **/
  function getBidders (obj) {
    var ebBidders = []

    var sizes = obj.sizes
    var sizesLength = sizes.length
    for (var i = 0; i < sizesLength; i++) {
      var sizeJoint = sizes[i].join('x')

      if (typeof obj.pubmaticAdSlot !== 'undefined') {
        obj.pubmaticAdSlotArr = obj.pubmaticAdSlotArr || []
        obj.pubmaticAdSlotArr.push(obj.pubmaticAdSlot + '@' + sizeJoint)
      }

      if (typeof obj.rubiconZone !== 'undefined') {
        obj.rubiconSizes = obj.rubiconSizes || []
        obj.rubiconSizes.push(getRubiconSize(sizeJoint))
      }
    }
    console.log('prebid - getBidders object', obj)

    /**
    ADFORM
    http://prebid.github.io/dev-docs/bidders.html#adform
    */
    if (typeof obj.adformMID !== 'undefined') {
      console.log('prebid', 'add adform bidder with mid:', obj.adformMID, ' and USD? ', ebAdOps.settings.isadformusd)
      var adformObj = {
        bidder: 'adform',
        params: {
          mid: obj.adformMID
        }
      }
      // If section.parameters['banner.prebid.adform.usd'] is true, set adform currency to USD
      if (ebAdOps.settings.isadformusd === true) {
        adformObj.params.rcur = 'USD'
      }
      ebBidders.push(adformObj)
    }

    /**
    Rubicon
    http://prebid.github.io/dev-docs/bidders.html#rubicon

    Smartpone
    ad size - rubicon size id
    300x250 = 15
    320x50 = 43
    320x80 = 59
    320x320 = 72
    320x160 = 73
    */
    if (typeof obj.rubiconZone !== 'undefined' && typeof obj.rubiconSizes !== 'undefined') {
      console.log('prebid', 'add rubicon bidder with zoneId:', obj.rubiconZone, ' and sizes ', obj.rubiconSizes)
      ebBidders.push({
        bidder: 'rubicon',
        params: {
          accountId: 10093,
          siteId: 23382,
          zoneId: obj.rubiconZone,
          sizes: obj.rubiconSizes
        }
      })
    }

    /**
    PubMatic
    http://prebid.github.io/dev-docs/bidders.html#pubmatic
    */
    if (typeof obj.pubmaticAdSlot !== 'undefined' && typeof obj.pubmaticAdSlotArr !== 'undefined') {
      console.log('prebid', 'add pubmatic bidder with adSlot name:', obj.pubmaticAdSlot, ' and number of adslots ', obj.pubmaticAdSlotArr.length)
      for (var i = sizesLength; i--;) {
        var PubMaticAdslotName = obj.pubmaticAdSlotArr[i]
        ebBidders.push({
          bidder: 'pubmatic',
          params: {
            publisherId: 156010,
            adSlot: PubMaticAdslotName
          }
        })
      }
    }

    /**
    Xaxis
    http://prebid.org/dev-docs/bidders.html#xhb
    */
    if (typeof obj.xaxis !== 'undefined') {
      console.log('prebid', 'add pubmatic bidder with adSlot name:', obj.xaxis)
      ebBidders.push({
        bidder: 'xhb',
        params: {
          placementId: obj.xaxis
        }
      })
    }

    return ebBidders
  }

  function biddersetup () {
    var adUnits = []
    console.log('prebid', 'biddersetup')
    for (var key in ebPlacementCache) {
      var element = document.getElementById(ebPlacementCache[key].elementId)
      console.log('prebid', 'biddersetup', element)
      if (element !== null && typeof ebPlacementCache[key].sizes !== 'undefined') {
        adUnits.push({
          code: ebPlacementCache[key].elementId,
          sizes: ebPlacementCache[key].sizes,
          bids: getBidders(ebPlacementCache[key])
        })
      }
    }
    console.log('prebid', 'adUnits from biddersetup', adUnits)

    return adUnits
  }

  ebAdOps.biddersetup = biddersetup
}(window.ebAdOps = window.ebAdOps || {}, window.ebPlacementCache = window.ebPlacementCache || {}))
