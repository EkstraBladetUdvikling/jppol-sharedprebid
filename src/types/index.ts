interface ICriteoInput {
  publisherSubId: string;
}

export interface IBannerObject {
  adformMID?: number;
  adtechId?: string;
  appnexusID?: string;
  criteo?: ICriteoInput;
  sizes: number[][];
  targetId: string;
  video?: boolean;
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
    ICriteoAdserverTargeting;
}

export enum BIDDERNAMES {
  adform = 'adf',
  appnexus = 'appnexus',
  criteo = 'criteo',
}
