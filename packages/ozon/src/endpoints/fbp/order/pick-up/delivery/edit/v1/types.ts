import type { OzonFbpOrderMutationResponse } from "../../../../shared/v1/types.js";

export interface EditFbpPickupOrderDeliveryV1Request {
  /**
   * Детали отправителя.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly pickup_details: {
    /**
     * ФИО отправителя.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly sender_name: string;

    /**
     * Номер телефона отправителя.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly sender_phone: string;
  };

  /**
   * Идентификатор актуальной версии черновика.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly row_version: number;

  /**
   * Идентификатор поставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: string;
}

export type EditFbpPickupOrderDeliveryV1Response = OzonFbpOrderMutationResponse;
