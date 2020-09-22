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

/**
 * prebid targeting responses
 */
interface IAdformAdserverTargeting {
  hb_adid_adform?: string;
  hb_bidder_adform?: string;
  hb_deal_adform?: string;
  hb_format_adform?: string;
  hb_pb_adform?: string;
  hb_size_adform?: string;
  hb_source_adform?: string;
}

interface IAppnexusAdserverTargeting {
  hb_adid_appnexus?: string;
  hb_bidder_appnexus?: string;
  hb_deal_appnexus?: string;
  hb_format_appnexus?: string;
  hb_pb_appnexus?: string;
  hb_size_appnexus?: string;
  hb_source_appnexus?: string;
}

interface ICriteoAdserverTargeting {
  hb_adid_criteo?: string;
  hb_bidder_criteo?: string;
  hb_deal_criteo?: string;
  hb_format_criteo?: string;
  hb_pb_criteo?: string;
  hb_size_criteo?: string;
  hb_source_criteo?: string;
}

interface IPubmaticAdserverTargeting {
  hb_adid_pubmatic?: string;
  hb_bidder_pubmatic?: string;
  hb_deal_pubmatic?: string;
  hb_format_pubmatic?: string;
  hb_pb_pubmatic?: string;
  hb_size_pubmatic?: string;
  hb_source_pubmatic?: string;
}

interface IRubiconAdserverTargeting {
  hb_adid_rubicon?: string;
  hb_bidder_rubicon?: string;
  hb_deal_rubicon?: string;
  hb_format_rubicon?: string;
  hb_pb_rubicon?: string;
  hb_size_rubicon?: string;
  hb_source_rubicon?: string;
}

interface IAdserverTargeting {
  hb_adid: string;
  hb_bidder: string;
  hb_deal: string;
  hb_format: string;
  hb_pb: string;
  hb_size: string;
  hb_source: string;
}

export interface IGetAdserverTargetingResponse {
  [id: string]: IAdserverTargeting &
    IAdformAdserverTargeting &
    IAppnexusAdserverTargeting &
    ICriteoAdserverTargeting &
    IPubmaticAdserverTargeting &
    IRubiconAdserverTargeting;
}
