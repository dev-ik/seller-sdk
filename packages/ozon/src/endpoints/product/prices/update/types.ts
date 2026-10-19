export type OzonProductPriceToggle = "UNKNOWN" | "ENABLED" | "DISABLED";

interface OzonProductPriceUpdateBase {
  /**
   * Объявленная стоимость товара. [Подробнее об объявленной стоимости товара в Базе знаний
   * продавца](https://seller-edu.ozon.ru/libra/ceny-i-akcii/rabota-s-cenami/price-control#объявленная-стоимость)
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly declared_price?: string;
  /**
   * Атрибут для включения и выключения автоматического применения к товару доступных акций Ozon: -
   * `ENABLED` — включить; - `DISABLED` — выключить; - `UNKNOWN` — ничего не менять, передаётся по
   * умолчанию. Например, если ранее вы включили автодобавление и не хотите выключать его,
   * передавайте `UNKNOWN`. Если вы передаёте `ENABLED` в этом параметре, установите значение
   * минимальной цены в параметре `min_price`. Цена не опустится ниже минимальной.
   *
   * Пример: `UNKNOWN`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly auto_action_enabled?: OzonProductPriceToggle;

  /**
   * Атрибут для включения и выключения автодобавления товара в акции: - `ENABLED` — включить; -
   * `DISABLED` — выключить; - `UNKNOWN` — ничего не менять, передаётся по умолчанию. Например, если
   * ранее вы включили автодобавление товара в акции и не хотите выключать его, передавайте
   * `UNKNOWN`.
   *
   * Пример: `UNKNOWN`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly auto_add_to_ozon_actions_list_enabled?: OzonProductPriceToggle;

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
   * Управление участием в акции «Эластичный бустинг»: - `true` — автоматически добавляет товар в
   * акцию или увеличивает в ней скидку и бустинг, если значение из параметра `price` соответствует
   * условиям акции; - `false` — изменение значения параметра `price` не влияет на участие в акции.
   * Если ничего не передать, изменений в статусе участия не будет.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly manage_elastic_boosting_through_price?: boolean;

  /**
   * Нижний порог предельной цены товара. Действует при автоприменении акций, автодобавлении товара в
   * акции и в стратегиях ценообразования. Покупатели не видят это значение.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly min_price?: string;

  /**
   * `true`, чтобы Ozon учитывал ограничения для акций и стратегий при автодобавлении товара в акции.
   * Если ничего не передать, изменений в статусе учёта цены не будет.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly min_price_for_auto_actions_enabled?: boolean;

  /**
   * Себестоимость товара.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly net_price?: string;
  /** Значение `0` сбрасывает зачёркнутую цену. */
  readonly old_price?: string;

  /**
   * Предельная цена товара без акций. Выше этого значения цену для покупателя не поднимем.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly price?: string;

  /**
   * Автоприменение стратегий цены: - `ENABLED` — включить. Установите значение ограничения для акций
   * и стратегий в параметре `min_price`. - `DISABLED` — выключить. Удалим товар из стратегии. -
   * `UNKNOWN` — не менять. Если ранее вы включили автоприменение стратегий цены и не хотите
   * выключать его, передайте `UNKNOWN`.
   *
   * Пример: `UNKNOWN`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly price_strategy_enabled?: OzonProductPriceToggle;

  /**
   * Используйте параметр, если у обычного и эконом-товара совпадает артикул — `offer_id = quant_id`.
   * Чтобы обновить цену: - обычного товара — передайте значение `1`; - эконом-товара — передайте
   * размер его кванта. Если у обычного и эконом-товара разные артикулы, не передавайте параметр.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly quant_size?: number;

  /**
   * Ставка НДС для товара: - `0` — не облагается НДС, - `0.05` — 5%, - `0.07` — 7%, - `0.1` — 10%, -
   * `0.2` — 20%, - `0.22` — 22%. Передавайте значение ставки, актуальное на данный момент.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly vat?: string;
}

/** Изменение цены товара, идентифицированного артикулом или product_id. */
export type OzonProductPriceUpdate = OzonProductPriceUpdateBase &
  (
    | {
        /**
         * Идентификатор товара в системе продавца — артикул.
         *
         * <!-- seller-sdk:ozon-openapi -->
         */
        readonly offer_id: string;
        readonly product_id?: never;
      }
    | {
        readonly offer_id?: never;

        /**
         * Идентификатор товара в системе Ozon — `product_id`.
         *
         * Формат: `int64`.
         *
         * <!-- seller-sdk:ozon-openapi -->
         */
        readonly product_id: number;
      }
  );

export interface UpdateProductPricesRequest {
  /** Информация о ценах максимум 1000 товаров. */
  readonly prices: readonly OzonProductPriceUpdate[];
}

export interface OzonProductPriceUpdateError {
  readonly code?: string;
  readonly message?: string;
}

export interface OzonProductPriceUpdateResult {
  readonly errors?: readonly OzonProductPriceUpdateError[];
  readonly offer_id?: string;
  readonly product_id?: number;
  readonly updated?: boolean;
}

export interface UpdateProductPricesResponse {
  readonly result?: readonly OzonProductPriceUpdateResult[];
}
