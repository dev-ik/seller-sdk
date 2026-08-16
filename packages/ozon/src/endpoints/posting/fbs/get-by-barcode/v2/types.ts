import type { OzonFbsBarcodes } from "../../shared/common/types.js";

export interface GetFbsPostingByBarcodeV2Request {
  /**
   * Штрихкод отправления. Можно получить с помощью методов:
   * [/v3/posting/fbs/get](#operation/PostingAPI_GetFbsPostingV3),
   * [/v3/posting/fbs/list](#operation/PostingAPI_GetFbsPostingListV3) и
   * [/v3/posting/fbs/unfulfilled/list](#operation/PostingAPI_GetFbsPostingUnfulfilledList) в массиве
   * `barcodes`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly barcode: string;
}
export interface OzonFbsPostingProductV2 {
  readonly name?: string;
  readonly offer_id?: string;
  readonly price?: string;
  readonly quantity?: number;
  readonly sku?: number;
}
export interface OzonFbsPostingV2 {
  readonly barcodes?: OzonFbsBarcodes;
  readonly cancel_reason_id?: number;
  readonly created_at?: string;
  readonly in_process_at?: string;
  readonly order_id?: number;
  readonly order_number?: string;
  readonly posting_number?: string;
  readonly products?: readonly OzonFbsPostingProductV2[];
  readonly shipment_date?: string;
  readonly status?: string;
}
export interface GetFbsPostingByBarcodeV2Response {
  readonly result?: OzonFbsPostingV2;
}
