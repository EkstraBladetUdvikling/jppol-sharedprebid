'use strict';

(function (ebAdOps) {
  var curScript = document.currentScript

  ebAdOps.settings = {}

  // get dynamictags source url from dataset - dynamictags src is used in AdTech setup
  ebAdOps.settings.dacsrc = curScript.dataset['dacsrc']

  // get tagdomain from dataset - tagdomain is used in AdTech setup, it controls where adtech banners are requested from
  ebAdOps.settings.tagdomain = curScript.dataset['tagdomain']

  // get debug parameter value from dataset - it enables Adtech debugging
  ebAdOps.settings.debug = (curScript.dataset['debug'] === 'true')

  // get prebidtimeout
  ebAdOps.settings.prebidtimeout = parseFloat(curScript.dataset['prebidtimeout'])

  // get adform currency choice, will be DKK if (isadformusd === false)
  ebAdOps.settings.isadformusd = (curScript.dataset['isadformusd'] === 'true')

  // set up cpm values
  ebAdOps.settings.cpmValues = curScript.dataset['values'].split(',')

  // DKK values is only ever used with AdForm set up cpm values
  ebAdOps.settings.cpmValuesDKK = curScript.dataset['valuesdkk'].split(',')

  // XHB value is the preset value of XHB campaigns
  ebAdOps.settings.xhbValue = parseFloat(curScript.dataset['xhbvalue'])

  // XHB value is the preset value of XHB campaigns
  ebAdOps.settings.xhbValueDKK = parseFloat(curScript.dataset['xhbvaluedkk'])

  console.log('prebid', 'ebAdOps.settings', ebAdOps.settings, '-- bidTimeout ', ebAdOps.settings.prebidtimeout)
}(window.ebAdOps = window.ebAdOps || {}))
