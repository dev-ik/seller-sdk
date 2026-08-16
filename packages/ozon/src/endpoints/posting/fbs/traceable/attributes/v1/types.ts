export interface GetFbsTraceableAttributesRequest {
  /**
   * Номер отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: string;
}
export interface OzonFbsTraceableProductAttributes {
  readonly required_attributes?: readonly string[];
  readonly sku?: number;
}
export interface GetFbsTraceableAttributesResponse {
  readonly products?: readonly OzonFbsTraceableProductAttributes[];
}
