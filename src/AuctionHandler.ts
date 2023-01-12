import { adunitCreator } from './adunitcreator';
import { BIDDERNAMES, IBannerObject } from './types';
import { COMPLETED, PREBIDAUCTION } from './variables';

export interface IPrebidOptions {
  adserverCallback?: any;
  allowWait?: boolean;
  auctionCompleted?: boolean;
  banners?: IBannerObject[];
  consentTimeout?: number;
  debug?: boolean;
  eids?: string | false;
  keywords?: string[];
  timeout?: number;
}

function deepObjectMerge(obj1, obj2) {
  const returnObj = obj1;

  for (const key in obj2) {
    if (returnObj[key]) {
      if (typeof returnObj[key] === typeof obj2[key]) {
        if (Array.isArray(obj2[key])) {
          returnObj[key] = [...returnObj[key], ...obj2[key]];
        } else if (
          Object.prototype.toString.call(obj2[key]) === '[object Object]'
        ) {
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

export class AuctionHandler {
  private auctionSettings: IPrebidOptions = {
    consentTimeout: 3000000,
    debug: false,
    timeout: 700,
  };
  private auctionInProgress = false;
  private waitformore: any;
  private waitformoreAllowed = true;

  public add(options: IPrebidOptions) {
    this.auctionSettings = deepObjectMerge(this.auctionSettings, options);

    this.waitformoreAllowed = options.allowWait ?? this.waitformoreAllowed;

    if (options.banners) {
      if (!this.waitformore && !this.auctionInProgress) {
        if (this.waitformoreAllowed) {
          this.waitformore = setTimeout(() => {
            this.auction();
          }, 250);
        } else {
          this.auction();
        }
      } else if (this.auctionInProgress) {
        (window as any).ebLog({
          component: 'jppol-prebid',
          level: 'WARNING',
          message: `Trying to add more banners to prebid auction`,
        });
      }
    }
  }

  private auction() {
    try {
      const pbjs = (window as any).pbjs;
      this.auctionInProgress = true;
      this.waitformore = null;
      const {
        adserverCallback,
        banners,
        consentTimeout,
        debug,
        eids,
        keywords,
        timeout,
      } = this.auctionSettings;

      // If the auction is completed, remove adunits
      if (window[PREBIDAUCTION][COMPLETED] && pbjs.adUnits.length) {
        pbjs.removeAdUnit();
      }

      window[PREBIDAUCTION][COMPLETED] = false;
      const adUnits = adunitCreator(banners, keywords, eids);

      pbjs.que.push(() => {
        if (adUnits.length > 0) {
          pbjs.setConfig({
            bidderTimeout: timeout,
            cache: {
              url: 'https://prebid.adnxs.com/pbc/v1/cache',
            },
            consentManagement: {
              cmpApi: 'iab',
              timeout: consentTimeout,
            },
            debug,
            gvlMapping: {
              pubProvidedId: 50,
            },
            priceGranularity: 'high',
            user: {
              ext: {
                eids: [
                  {
                    source: 'jppol.dk',
                    uids: [
                      {
                        ext: {
                          third: eids,
                        },
                        id: eids,
                      },
                    ],
                  },
                ],
              },
            },
            userSync: {
              iframeEnabled: true,
              syncDelay: 6000,
              userIds: [
                {
                  bidders: [BIDDERNAMES.adform, BIDDERNAMES.appnexus],
                  name: 'pubProvidedId',
                  params: {
                    eids: [
                      {
                        source: 'jppol.dk',
                        uids: [
                          {
                            atype: 1,
                            id: eids,
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          });
          pbjs.addAdUnits(adUnits);

          pbjs.requestBids({
            bidsBackHandler: (bidResponse) => {
              const apntag = (window as any).apntag;
              if (typeof apntag !== 'undefined') {
                pbjs.que.push(() => {
                  apntag.anq.push(() => {
                    pbjs.setTargetingForAst();
                    apntag.loadTags();
                    (window as any).jppolStillWaitingForPrebid = false;
                  });
                });
              }
              if (typeof adserverCallback !== 'undefined') {
                adserverCallback(bidResponse);
              }
              this.auctionInProgress = false;
              window[PREBIDAUCTION][COMPLETED] = true;
            },
          });
        }
      });
    } catch (err) {
      console.error('AuctionHandler auction', err);
    }
  }
}
