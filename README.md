# JPPol shared prebid

## Setup

```shell
npm install
```

http://prebid.org/dev-docs/examples/use-prebid-with-appnexus-ad-server.html

### nodejs (and npm)

[node.js and npm](https://nodejs.org/)

## Updating prebid.js

From assets

* run npm uninstall prebid.js --save [ONLY NEEDED IF PREBID VERSION SHOULD BE UPDATED]
* run npm install prebid.js --save [ONLY NEEDED IF PREBID VERSION SHOULD BE UPDATED]
* navigate to ./node_modules/prebid.js/
* run npm install
* run gulp build --adapters ../../eb-prebid-adapters.json
* navigate to [./node_modules/prebid.js/]build/dist
* copy prebid.js to ./prebid
* run 'npm run headerbidding'

[prebid](http://prebid.org/)
