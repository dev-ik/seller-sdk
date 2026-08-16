export type OzonFbpAcceptanceActError =
  | "ERROR_REASON_UNSPECIFIED"
  | "INVALID_COMPANY"
  | "FILE_NOT_FOUND"
  | "GENERATE_TIMEOUT_REACHED"
  | "GENERATION_ERROR";
export type OzonFbpAcceptanceActStatus =
  | "STATUS_UNSPECIFIED"
  | "NOT_EXIST"
  | "PROCESSING"
  | "EXIST"
  | "ERROR";

export interface GetFbpAcceptanceActV1Request {
  /**
   * Идентификатор акта приёмки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly file_uuid: string;
}

export interface GetFbpAcceptanceActV1Response {
  readonly cdn_url?: string;
  readonly error?: OzonFbpAcceptanceActError;
  readonly status?: OzonFbpAcceptanceActStatus;
}
