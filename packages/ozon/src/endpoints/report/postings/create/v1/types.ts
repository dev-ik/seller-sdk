import type {
  OzonCreateReportResponse,
  OzonReportLanguage,
} from "../../../shared/types.js";
export interface CreatePostingsReportV1Request {
  /**
   * Фильтр.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter: {
    /**
     * Идентификатор причины отмены.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly cancel_reason_id?: readonly number[];

    /**
     * Идентификатор способа доставки. Получите методом
     * [/v1/delivery-method/list](#operation/WarehouseAPI_DeliveryMethodList).
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly delivery_method_id?: readonly number[];

    /**
     * Схема работы — FBO или FBS. За один запрос вы можете передать только одно значение: * `fbo` —
     * чтобы получить отчёт по схеме FBO, * `fbs` — чтобы получить отчёт по схеме FBS.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly delivery_schema?: readonly string[];

    /**
     * Экспресс-доставка: - `true` — только отправления с доставкой Ozon Express; - `false` — только
     * отправления без доставки Ozon Express. Если ничего не передать, вернутся все отправления.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly is_express?: boolean;

    /**
     * Идентификатор товара в системе продавца — артикул.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly offer_id?: string;

    /**
     * Время, когда заказ попал в обработку.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly processed_at_from: string;

    /**
     * Время, когда заказ появился в личном кабинете.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly processed_at_to: string;

    /**
     * Идентификатор товара в системе Ozon — SKU.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly sku?: readonly number[];

    /**
     * Текст статуса.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly status_alias?: readonly string[];

    /**
     * Числовой статус.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly statuses?: readonly number[];

    /**
     * Название товара.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly title?: string;

    /**
     * Идентификатор склада.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly warehouse_id?: readonly number[];
  };

  /**
   * Язык ответа: - `RU` — русский, - `EN` — английский.
   *
   * Пример: `DEFAULT`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly language?: OzonReportLanguage;

  /**
   * Дополнительные поля, которые нужно добавить в ответ.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly with?: {
    /**
     * `true`, чтобы добавить в ответ дополнительную информацию.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly additional_data?: boolean;

    /**
     * `true`, чтобы добавить в ответ аналитику. Передайте значение `filter.delivery_schema = fbs`,
     * иначе вернётся ошибка.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly analytics_data?: boolean;

    /**
     * `true`, чтобы добавить в ответ информацию о покупателе.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly customer_data?: boolean;

    /**
     * `true`, чтобы добавить в ответ информацию о ювелирных изделиях.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly jewelry_codes?: boolean;
  };
}
export type CreatePostingsReportV1Response = OzonCreateReportResponse;
