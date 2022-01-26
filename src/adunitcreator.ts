import { BidderHandler } from './bidderhandler';

import { mimes } from './variables';

interface IBanner {
  banner: {
    sizes: number[][];
  };
}

interface IVideo {
  video: {
    context: 'instream' | 'outstream';
    mimes: string[];
    playerSize: number[][];
    protocols: number[];
    api: number[];
    maxduration: number;
    linearity: number;
  };
}

type TMediaTypes = IBanner | IVideo | (IBanner & IVideo);

interface IAdUnit {
  bids: any;
  code: string;
  mediaTypes: TMediaTypes;
}

export function AdUnitCreator(
  bannerContainer: any,
  keywords?: string[],
  eId?: string | false
) {
  try {
    const adUnits = [];

    for (const banner of bannerContainer) {
      const bidders = BidderHandler(banner, keywords, eId);

      const playerSize = [[640, 480]];

      const mediaTypes: TMediaTypes = banner.video
        ? {
            video: {
              context: 'instream',
              playerSize,
              mimes,
              protocols: [2, 3, 5, 6],
              api: [2],
              maxduration: 30,
              linearity: 1,
            },
          }
        : {
            banner: {
              sizes: banner.sizes,
            },
          };

      const adUnit: IAdUnit = {
        bids: bidders,
        code: banner.targetId,
        mediaTypes,
      };

      adUnits.push(adUnit);
    }

    return adUnits;
  } catch (err) {
    console.error('prebid', 'biddersetup', err);
  }
}
