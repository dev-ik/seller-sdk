export interface ImportProductsBySkuRequest {
  /** До 1000 товаров в одном запросе. */
  readonly items: readonly OzonProductImportBySkuItem[];
}

export interface OzonProductImportBySkuItem {
  /**
   * Валюта ваших цен. Переданное значение должно совпадать с валютой, которая установлена в
   * настройках личного кабинета. По умолчанию передаётся `RUB` — российский рубль. Например, если у
   * вас установлена валюта взаиморасчётов юань, передавайте значение `CNY`, иначе вернётся ошибка.
   * Возможные значения: - `RUB` — российский рубль, - `BYN` — белорусский рубль, - `KZT` — тенге, -
   * `EUR` — евро, - `USD` — доллар США, - `CNY` — юань.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly currency_code?: string;

  /**
   * Название товара. До 500 символов.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly name?: string;

  /**
   * Идентификатор товара в системе продавца — артикул. Максимальная длина строки — 50 символов.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly offer_id?: string;

  /**
   * Цена до скидок (будет зачеркнута на карточке товара). Указывается в рублях. Разделитель дробной
   * части — точка, до двух знаков после точки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly old_price?: string;

  /**
   * Цена товара с учётом скидок, отображается на карточке товара. Если на товар нет скидок, укажите
   * значение `old_price` в этом параметре.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly price?: string;

  /**
   * Идентификатор товара в системе Ozon — SKU.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sku: number;

  /**
   * Ставка НДС для товара: - `0` — не облагается НДС, - `0.05` — 5%, - `0.07` — 7%, - `0.1` — 10%, -
   * `0.2` — 20%, - `0.22` — 22%. Передавайте значение ставки, актуальное на данный момент.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly vat?: string;
}

export interface OzonProductImportBySkuResult {
  readonly task_id?: number;
  readonly unmatched_sku_list?: readonly number[];
}

export interface ImportProductsBySkuResponse {
  readonly result?: OzonProductImportBySkuResult;
}
