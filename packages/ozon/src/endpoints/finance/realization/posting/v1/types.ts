import type {
  GetRealizationReportRequest,
  OzonRealizationReportHeader,
  OzonRealizationReportRow,
} from "../../shared/types.js";

export type GetRealizationPostingReportV1Request = GetRealizationReportRequest;

export interface OzonRealizationPostingReportRowV1
  extends OzonRealizationReportRow {
  readonly legal_entity_document?: {
    readonly number?: string;
    readonly sale_date?: string;
  };
  readonly order?: {
    readonly created_date?: string;
    readonly posting_number?: string;
  };
  readonly row_number?: number;
}

export interface GetRealizationPostingReportV1Response {
  readonly header?: OzonRealizationReportHeader;
  readonly rows?: readonly OzonRealizationPostingReportRowV1[];
}
