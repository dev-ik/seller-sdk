export interface ImportProductsRequest {
  /** От одного до 100 товаров. */
  readonly items: readonly OzonProductImportItem[];
}

export interface OzonProductImportAttributeValue {
  /**
   * Идентификатор справочника.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly dictionary_value_id?: number;

  /**
   * Значение из справочника.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly value?: string;
}

export interface OzonProductImportAttribute {
  /**
   * Идентификатор характеристики, которая поддерживает вложенные свойства. Например, у
   * характеристики «Процессор» есть вложенные характеристики «Производитель», «L2 Cache» и другие. У
   * каждой из вложенных характеристик может быть несколько вариантов значений.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly complex_id?: number;

  /**
   * Идентификатор характеристики.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly id?: number;

  /**
   * Массив вложенных значений характеристики.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly values?: readonly OzonProductImportAttributeValue[];
}

export interface OzonProductImportComplexAttribute {
  /**
   * Параметр `attributes` запроса Ozon.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly attributes?: readonly OzonProductImportAttribute[];
}

export interface OzonProductImportPdf {
  /**
   * Индекс документа в хранилище, который задаёт порядок.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly index?: number;

  /**
   * Название файла.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly name?: string;

  /**
   * Адрес файла.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly src_url?: string;
}

export type OzonProductImportPromotionOperation =
  | "UNKNOWN"
  | "ENABLE"
  | "DISABLE";

export type OzonProductImportPromotionType = "REVIEWS_PROMO";

export interface OzonProductImportPromotion {
  /**
   * Атрибут для действий с акцией: - `ENABLE` — включить, - `DISABLE` — выключить, - `UNKNOWN` —
   * ничего не менять, передаётся по умолчанию.
   *
   * Пример: `UNKNOWN`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly operation?: OzonProductImportPromotionOperation;

  /**
   * Тип акции: - `REVIEWS_PROMO` — акция «Ускоренный сбор отзывов».
   *
   * Пример: `REVIEWS_PROMO`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly type?: OzonProductImportPromotionType;
}

export type OzonProductImportServiceType =
  | "IS_CODE_SERVICE"
  | "IS_NO_CODE_SERVICE";

export interface OzonProductImportItem {
  /**
   * Массив с характеристиками товара. Характеристики отличаются для разных категорий — их можно
   * посмотреть в [Базе знаний продавца](https://seller-edu.ozon.ru/) или через API.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly attributes?: readonly OzonProductImportAttribute[];

  /**
   * Штрихкод товара.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly barcode?: string;

  /**
   * Маркетинговый цвет. Формат: адрес ссылки на изображение в общедоступном облачном хранилище.
   * Формат изображения по ссылке — JPG.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly color_image?: string;

  /**
   * Массив характеристик, у которых есть вложенные атрибуты.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly complex_attributes?: readonly OzonProductImportComplexAttribute[];

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
  /** Глубина упаковки; должна быть больше нуля. */
  readonly depth: number;

  /**
   * Идентификатор категории. Можно получить с помощью метода
   * [/v1/description-category/tree](#operation/DescriptionCategoryAPI_GetTree). Чтобы изменить
   * категорию, используйте параметр `new_description_category_id`.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly description_category_id: number;
  /** Единица габаритов, например `mm`, `cm` или `in`. */
  readonly dimension_unit: string;

  /**
   * Геоограничения — при необходимости заполните параметр в личном кабинете при создании или
   * редактировании товара. Необязательный параметр.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly geo_names?: readonly string[];
  /** Высота упаковки; должна быть больше нуля. */
  readonly height: number;

  /**
   * Массив изображений. До 30 штук. Изображения показываются на сайте в таком же порядке, как в
   * массиве. Если не передать значение `primary_image`, первое изображение в массиве будет главным
   * для товара. Если вы передали значение `primary_image`, передайте до 29 изображений. Если
   * параметр `primary_image` пустой, передайте до 30 изображений. Формат: адрес ссылки на
   * изображение в общедоступном облачном хранилище. Формат изображения по ссылке — JPG или PNG.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly images?: readonly string[];

  /**
   * Название товара. До 500 символов. [Правила для названия
   * товара](https://seller-edu.ozon.ru/work-with-goods/trebovaniya-k-kartochkam-tovarov/product-information/nazvanie-tovara)
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly name?: string;

  /**
   * Новый идентификатор категории. Укажите его, если нужно изменить текущую категорию товара.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly new_description_category_id?: number;

  /**
   * Идентификатор товара в системе продавца — артикул. Максимальная длина строки — 50 символов.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly offer_id: string;

  /**
   * Цена до скидок (будет зачёркнута на карточке товара). Указывается в рублях. Разделитель дробной
   * части — точка, до двух знаков после точки. Если вы раньше передавали `old_price`, то при
   * обновлении `price` также обновите `old_price`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly old_price?: string;

  /**
   * Список PDF-файлов.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly pdf_list?: readonly OzonProductImportPdf[];

  /**
   * Цена товара с учётом скидок, отображается на карточке товара. Если на товар нет скидок, укажите
   * значение `old_price` в этом параметре.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly price: string;

  /**
   * Ссылка на главное изображение товара.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly primary_image?: string;

  /**
   * Акции.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly promotions?: readonly OzonProductImportPromotion[];

  /**
   * Параметр `service_type` запроса Ozon.
   *
   * Пример: `IS_CODE_SERVICE`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly service_type?: OzonProductImportServiceType;

  /**
   * Идентификатор типа товара. Значения можно получить из такого же параметра `type_id` в ответе
   * метода [/v1/description-category/tree](#operation/DescriptionCategoryAPI_GetTree). При
   * заполнении этого параметра можно не указывать в `attibutes ` атрибут с параметром `id:8229`,
   * `type_id` будет использоваться в приоритете.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly type_id: number;

  /**
   * Ставка НДС для товара: - `0` — не облагается НДС, - `0.05` — 5%, - `0.07` — 7%, - `0.1` — 10%, -
   * `0.2` — 20%, - `0.22` — 22%. Передавайте значение ставки, актуальное на данный момент.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly vat?: string;
  /** Вес упаковки; должен быть больше нуля. */
  readonly weight: number;
  /** Единица веса, например `g`, `kg` или `lb`. */
  readonly weight_unit: string;
  /** Ширина упаковки; должна быть больше нуля. */
  readonly width: number;
}

export interface OzonProductImportResult {
  readonly task_id?: number;
}

export interface ImportProductsResponse {
  readonly result?: OzonProductImportResult;
}
