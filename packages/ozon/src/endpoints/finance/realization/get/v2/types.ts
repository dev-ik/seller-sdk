import type {
  GetRealizationReportRequest,
  OzonRealizationReportHeader,
  OzonRealizationReportRow,
} from "../../shared/types.js";

export type GetRealizationReportV2Request = GetRealizationReportRequest;

export interface OzonRealizationReportRowV2 extends OzonRealizationReportRow {
  readonly rowNumber?: number;
}

export interface GetRealizationReportV2Response {
  readonly result?: {
    readonly header?: OzonRealizationReportHeader;
    readonly rows?: readonly OzonRealizationReportRowV2[];
  };
}
