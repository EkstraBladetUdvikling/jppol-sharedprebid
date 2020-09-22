export interface IBannerObject {
  adformMID?: number;
  adtechId?: string;
  appnexusID?: string;
  criteoId?: number;
  pubmaticAdSlot?: string;
  pubmaticPublisherId?: string;
  rubiconAccountId?: number;
  rubiconSiteID?: number;
  rubiconSizes?: number[];
  rubiconZone?: number;
  sizes: number[][];
  targetId: string;
  video?: boolean;
  videoSettings?: {
    rubiconSiteID?: number;
  };
}
