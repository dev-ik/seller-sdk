/** Покупатель заказа. Не логируйте реальные значения этих полей. */
export interface OzonOrderBuyer {
  /**
   * Имя.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly first_name: string;

  /**
   * Фамилия.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly last_name: string;

  /**
   * Отчество.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly middle_name?: string;

  /**
   * Номер телефона.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly phone: string;
}

/** Получатель заказа. Не логируйте реальные значения этих полей. */
export interface OzonOrderRecipient {
  /**
   * Имя.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly recipient_first_name: string;

  /**
   * Фамилия.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly recipient_last_name: string;

  /**
   * Отчество.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly recipient_middle_name?: string;

  /**
   * Номер телефона.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly recipient_phone: string;
}

export interface OzonOrderCourierCoordinates {
  /**
   * Широта.
   *
   * Формат: `double`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly latitude: number;

  /**
   * Долгота.
   *
   * Формат: `double`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly longitude: number;
}

/** Параметры курьерской доставки. */
export interface OzonOrderCourierDelivery {
  /**
   * Квартира.
   *
   * Максимальная длина: `50`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly apartment?: string;

  /**
   * Город.
   *
   * Максимальная длина: `500`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly city: string;

  /**
   * Комментарий.
   *
   * Максимальная длина: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly comment?: string;

  /**
   * Координаты точки выдачи.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly coordinates: OzonOrderCourierCoordinates;

  /**
   * Страна.
   *
   * Максимальная длина: `50`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly country: string;

  /**
   * Подъезд.
   *
   * Максимальная длина: `10`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly entrance?: string;

  /**
   * Этаж.
   *
   * Максимальная длина: `10`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly floor?: string;

  /**
   * Номер дома.
   *
   * Максимальная длина: `50`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly house_number: string;

  /**
   * Код домофона.
   *
   * Максимальная длина: `50`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly intercom?: string;

  /**
   * Регион.
   *
   * Максимальная длина: `500`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly region?: string;

  /**
   * Улица.
   *
   * Максимальная длина: `500`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly street?: string;

  /**
   * Индекс.
   *
   * Максимальная длина: `10`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly zip_code?: string;
}

/** Параметры доставки в пункт выдачи. */
export interface OzonOrderPickupDelivery {
  /**
   * Идентификатор точки выдачи на карте.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly map_point_id: number;
}

/** Взаимоисключающие варианты доставки заказа. */
export type OzonOrderDelivery =
  | {
      /**
       * Информация о доставке курьером.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly courier: OzonOrderCourierDelivery;
      readonly pick_up?: never;
    }
  | {
      readonly courier?: never;

      /**
       * Информация о самовывозе.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly pick_up: OzonOrderPickupDelivery;
    };

export type OzonOrderDeliverySchema = "MIX" | "FBO" | "FBS";
export type OzonOrderDeliveryType = "COURIER" | "PVZ" | "POSTAMAT";

export interface OzonOrderDeliveryDateRange {
  /**
   * Время начала интервала.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly from: string;

  /**
   * Время конца интервала.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly to: string;
}

export interface OzonOrderDeliveryPrice {
  /**
   * Код валюты.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly currency_code?: string;

  /**
   * Часть стоимости в копейках.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly nanos?: number;

  /**
   * Часть стоимости в рублях.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly units?: number;
}

export interface OzonOrderSplitDeliveryMethod {
  /**
   * Идентификатор способа доставки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivery_method_id: number;

  /**
   * Тип доставки: - `COURIER` — курьером; - `PVZ` — в пункт выдачи заказов; - `POSTAMAT` — в
   * постамат.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivery_type: OzonOrderDeliveryType;

  /**
   * Интервал времени, в течение которого заказ может быть доставлен до точки выдачи.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly logistic_date_range: OzonOrderDeliveryDateRange;

  /**
   * Цена доставки. Чтобы отобразить покупателю бесплатную доставку, не передавайте объект.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly price?: OzonOrderDeliveryPrice;

  /**
   * Идентификатор таймслота.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly timeslot_id: number;
}

export interface OzonOrderItemPrice {
  /**
   * Код валюты.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly currency_code: string;

  /**
   * Часть стоимости в копейках.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly nanos?: number;

  /**
   * Часть стоимости в рублях.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly units: number;
}

export interface OzonOrderSplitItem {
  /**
   * Идентификатор товара в системе продавца — артикул.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly offer_id?: string;

  /**
   * Цена товара.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly price: OzonOrderItemPrice;

  /**
   * Количество товара.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly quantity: number;

  /**
   * Идентификатор товара в системе Ozon — SKU.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sku: number;
}

export interface OzonOrderSplit {
  /**
   * Метод доставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivery_method: OzonOrderSplitDeliveryMethod;

  /**
   * Товары в отправлении.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly items: readonly OzonOrderSplitItem[];

  /**
   * Идентификатор склада.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;
}

/** Параметры создания заказа. */
export interface CreateOrderRequest {
  /**
   * Информация о покупателе.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly buyer: OzonOrderBuyer;

  /**
   * Информация о доставке.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivery: OzonOrderDelivery;

  /**
   * Схема доставки: - `MIX` — на выбор Ozon; - `FBO` — FBO; - `FBS` — FBS.
   *
   * Пример: `MIX`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivery_schema: OzonOrderDeliverySchema;

  /**
   * Информация о получателе.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly recipient: OzonOrderRecipient;

  /**
   * Информация об отправлениях в заказе.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly splits: readonly OzonOrderSplit[];
}

/** Результат создания заказа. */
export interface CreateOrderResponse {
  readonly order_number?: string;
  readonly postings?: readonly string[];
}
