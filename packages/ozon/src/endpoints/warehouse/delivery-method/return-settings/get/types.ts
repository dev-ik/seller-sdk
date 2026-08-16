export interface GetDeliveryMethodReturnSettingsRequest {
  /**
   * Идентификатор способа доставки. Получите значение параметра методом
   * [/v2/delivery-method/list](#operation/WarehouseAPI_DeliveryMethodListV2).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivery_method_id: number;
}

export interface OzonDeliveryMethodReturnSettings {
  readonly courier_details?: { readonly contact_days?: number };
  readonly post_office_zipcode?: string;
  readonly transport_company_details?: {
    readonly transport_company_names?: readonly string[];
    readonly zipcode?: string;
  };
}

export interface GetDeliveryMethodReturnSettingsResponse {
  readonly settings?: OzonDeliveryMethodReturnSettings;
}
