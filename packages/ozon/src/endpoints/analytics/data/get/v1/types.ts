export type OzonAnalyticsDimension =
  | "unknownDimension"
  | "sku"
  | "spu"
  | "day"
  | "week"
  | "month"
  | "year"
  | "category1"
  | "category2"
  | "brand"
  | "modelID"
  | "descriptionType";

export interface OzonAnalyticsFilter {
  /**
   * Параметр сортировки. Можно передать любой атрибут из параметров `dimension` и `metric`, кроме
   * атрибута `brand`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly key?: string;

  /**
   * Операция сравнения: - `EQ` — равно, - `GT` — больше, - `GTE` — больше или равно, - `LT` —
   * меньше, - `LTE` — меньше или равно.
   *
   * Пример: `EQ`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly op?: string;

  /**
   * Значение для сравнения.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly value?: string;
}

export interface OzonAnalyticsSorting {
  /**
   * Метрика, по которой будет отсортирован результат запроса.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly key?: string;

  /**
   * Вид сортировки: - `ASC` — по возрастанию, - `DESC` — по убыванию.
   *
   * Пример: `ASC`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly order?: string;
}

export interface GetAnalyticsDataV1Request {
  /**
   * Дата, с которой будут данные в отчёте. Если у вас нет Premium-подписки, укажите дату в пределах
   * последних трёх месяцев.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date_from: string;

  /**
   * Дата, по которую будут данные в отчёте.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date_to: string;

  /**
   * Группировка данных в отчёте. Способы группировки, доступные всем продавцам: - `unknownDimension`
   * — неизвестное измерение; - `sku` — идентификатор товара; - `spu` — идентификатор товара —
   * объединённая карточка; - `day` — день; - `week` — неделя; - `month` — месяц. Способы
   * группировки, доступные только продавцам с подпиской [Premium
   * Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus): - `year`
   * — год; - `category1` — категория первого уровня; - `category2` — категория второго уровня; -
   * `brand` — бренд; - `modelID` — модель; - `descriptionType` — тип товара.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly dimension: readonly OzonAnalyticsDimension[];

  /**
   * Фильтры.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filters?: readonly OzonAnalyticsFilter[];

  /**
   * Количество значений в ответе: - максимум — 1000, - минимум — 1.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;

  /**
   * Укажите до 14 метрик. Если их будет больше, вы получите ошибку с кодом `InvalidArgument`. Список
   * метриĸ, по ĸоторым будет сформирован отчёт. Метрики, доступные всем продавцам: - `revenue` —
   * заказано на сумму, - `ordered_units` — заказано товаров. Метрики, доступные только продавцам с
   * подпиской [Premium
   * Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus): -
   * `unknown_metric` — неизвестная метрика. - `hits_view_search` — показы в поиске и в категории. -
   * `hits_view_pdp` — показы на карточке товара. - `hits_view` — всего показов. -
   * `hits_tocart_search` — в корзину из поиска или категории. - `hits_tocart_pdp` — в корзину из
   * карточки товара. - `hits_tocart` —…
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly metrics: readonly string[];

  /**
   * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ
   * начнётся с 11-го найденного элемента.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly offset?: number;

  /**
   * Настройки сортировки отчёта.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sort?: readonly OzonAnalyticsSorting[];
}

export interface OzonAnalyticsDataDimension {
  readonly id?: string;
  readonly name?: string;
}

export interface OzonAnalyticsDataRow {
  readonly dimensions?: readonly OzonAnalyticsDataDimension[];
  readonly metrics?: readonly number[];
}

export interface GetAnalyticsDataV1Response {
  readonly result?: {
    readonly data?: readonly OzonAnalyticsDataRow[];
    readonly totals?: readonly number[];
  };
  readonly timestamp?: string;
}
