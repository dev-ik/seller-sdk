export interface SetRfbsReturnActionV1Request {
  /**
   * Комментарий продавца. Обязателен для `id: -1` и `id: -10`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly comment?: string;

  /**
   * Сумма компенсации. Обязательна для `id: 1020`.
   *
   * Формат: `double`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly compensation_amount?: number;

  /**
   * Идентификатор действия. Получите доступные действия `returns.available_actions` методом
   * [/v2/returns/rfbs/get](#operation/RFBSReturnsAPI_ReturnsRfbsGetV2).
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly id?: number;

  /**
   * Идентификатор причины отмены. Обязателен для `id: -1` и `id: -10`. Получите возможные причины
   * отмены `returns.rejection_reason` методом
   * [/v2/returns/rfbs/get](#operation/RFBSReturnsAPI_ReturnsRfbsGetV2).
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly rejection_reason_id?: number;

  /**
   * Сумма, возмещаемая покупателю за пересылку товара. Отрицательные значения приравниваются к `0`.
   *
   * Формат: `double`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly return_for_back_way?: number;

  /**
   * Идентификатор заявки на возврат.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly return_id: number;
}
export type SetRfbsReturnActionV1Response = void;
