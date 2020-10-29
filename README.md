# JPPol Shared Prebid

JPPol specific implementation of [prebid.js](https://prebid.org)

Developed to ease the upgrade procedure and maintenance of prebid handling across JPPol titles.

## Table Of Content

- [Getting Started](#getting-started)
  - [Dependencies](#dependencies)
  - [Usage](#usage)
  - [Options](#options)
    - [adserverCallback](#adservercallback)
    - [banners](#banners)
    - [consentAllowAuction](#consentallowauction)
    - [consentTimeout](#consenttimeout)
    - [debug](#debug)
    - [timeout](#timeout)
    - [tracking](#tracking)
      - [tracking.distribution](#trackingdistribution)
      - [tracking.id](#trackingid)
      - [tracking.sampling](#trackingsampling)
  - [Examples](#examples)
- [Contributing](#contributing)
  - [Updating prebid.js version](#updating-prebidjs-version)
  - [Build](#build)
  - [Test](#test)
- [License](#license)

## Getting Started

### Dependencies

This module requires [Node.JS and NPM](https://www.npmjs.com/get-npm) for installation. Add the module and install dependencies using NPM:

```sh
npm i name-here
```

### Usage

It is assumed that AppNexus is implemented and that prebid should be integrated with AppNexus.

Use directly in page.

```html
<script src="https://ebimg.dk/ux/data/prebid/jppol-prebid.min.js"></script>
<script>
  /**
   * Typescript interfaces involved in prebidOptions
    interface ITrackingOptions {
      distribution?: boolean;
      id: string;
      sampling?: boolean;
    }
    interface IBannerObject {
      adformMID?: number;
      adtechId?: string;
      appnexusID?: string;
      criteoId?: number;
      pubmaticAdSlot?: string;
      pubmaticPublisherId?: string;
      sizes: number[][];
      targetId: string;
    }
    interface IPrebidOptions {
      adserverCallback?: any;
      banners: IBannerObject[];
      consentAllowAuction?: boolean;
      consentTimeout?: number;
      debug?: boolean;
      timeout?: number;
      tracking?: ITrackingOptions;
    }
  */
  // Define AppNexus tags somewhere before here
  var prebidOptions = {
    adserverCallback: () => {},
    banners: [
      {
        adformMID: 999,
        adtechId: "string",
        appnexusID: "string",
        criteoId: 999,
        pubmaticAdSlot: "string",
        pubmaticPublisherId: "string",
        sizes: [[930, 180]],
        targetId: "",
      },
    ],
    consentAllowAuction: false,
    consentTimeout: 300000,
    debug: false,
    timeout: 700,
    tracking: {
      distribution: false,
      id: "string",
      sampling: true,
    },
  };
  jppol.prebid(prebidOptions);
</script>
```

For debugging and development purposes use

```html
<script src="https://ebimg.dk/ux/data/prebid/jppol-prebid.dev.js"></script>
```

If it is imported into own project, beware that prebid.js is a dependency.

```js
import { AuctionHandler } from "AuctionHandler";
```

### Options

Description of the possible options for the module.

### adserverCallback

|               |          |
| ------------- | -------- |
| Default value | null     |
| Requirement   | Optional |
| Type          | function |

This is an additional callback function; by default, we will try to initiate AppNexus banner calls.

### banners

|               |          |
| ------------- | -------- |
| Default value | null     |
| Requirement   | Required |
| Type          | Array    |

Array of all banners to be added as adUnits to prebid auctions.

### consentAllowAuction

|               |          |
| ------------- | -------- |
| Default value | true     |
| Requirement   | Optional |
| Type          | boolean  |

This is dependent on a IAB verified CMP being installed on the site.

### consentTimeout

|               |          |
| ------------- | -------- |
| Default value | 3000000  |
| Requirement   | Optional |
| Type          | number   |

This is irrelevant if consentAllowAuction is false.
It defines the amount of time prebid waits for the user to have given consent through the CMP

### debug

|               |          |
| ------------- | -------- |
| Default value | false    |
| Requirement   | Optional |
| Type          | boolean  |

Defines whether prebid should emit debugging log statements

### timeout

|               |          |
| ------------- | -------- |
| Default value | 700      |
| Requirement   | Optional |
| Type          | number   |

Bid timeout, defines the maximum amount of time allowed for the bidders to return with a result of their auctions

### tracking

|               |          |
| ------------- | -------- |
| Default value | false    |
| Requirement   | Optional |
| Type          | boolean  |

When set to true, we will try to fetch the google analytics [tracking.id](#tracking.id) from the page and then use the built in prebid analytics module to handle tracking

### tracking.distribution

|               |          |
| ------------- | -------- |
| Default value | false    |
| Requirement   | Optional |
| Type          | boolean  |

### tracking.id

|               |          |
| ------------- | -------- |
| Default value | empty    |
| Requirement   | Required |
| Type          | string   |

Google Analytics ID to use for tracking.

### tracking.sampling

|               |          |
| ------------- | -------- |
| Default value | true     |
| Requirement   | Optional |
| Type          | boolean  |

Per default only 5% of auctions is tracked.

When sampling is set to false, 100% of prebid auctions will be tracked - this should only be used for initial setup or debugging.

### Examples

Links to examples

## Contributing

If you want to contribute to a project and make it better, your help is very welcome.

```shell
git fork git@github.com:EkstraBladetUdvikling/jppol-sharedprebid
```

### Updating prebid.js version

```node
npm run prebid-update
```

This will update the version of prebid.js and build a new prebid.js file. This won't create a new JPPol ready version. That is handled separately.

[prebid](http://prebid.org/)

### Build

Run build to output ES5 CommonJS-module for use with package manager (index.js).

```node
npm run build
```

### Test

Optional

## License

Copyright © 2018, Ekstra Bladet

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
