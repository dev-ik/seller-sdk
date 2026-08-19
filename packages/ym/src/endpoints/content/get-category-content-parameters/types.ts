// Generated public types for this Yandex Market endpoint.
type ContentApiResponseStatusType = "OK" | "ERROR";
type ContentCategoryContentParametersDTO = {
  readonly categoryId: ContentCategoryId;
  readonly parameters?: readonly ContentCategoryParameterDTO[] | null;
};
type ContentCategoryId = number;
type ContentCategoryParameterDTO = {
  readonly id: number;
  readonly name?: string;
  readonly type: ContentParameterType;
  readonly unit?: ContentCategoryParameterUnitDTO;
  readonly description?: string;
  readonly recommendationTypes?:
    | readonly ContentOfferCardRecommendationType[]
    | null;
  readonly required: boolean;
  readonly filtering: boolean;
  readonly distinctive: boolean;
  readonly multivalue: boolean;
  readonly allowCustomValues: boolean;
  readonly values?: readonly ContentParameterValueOptionDTO[] | null;
  readonly constraints?: ContentParameterValueConstraintsDTO;
  readonly valueRestrictions?: readonly ContentValueRestrictionDTO[] | null;
};
type ContentCategoryParameterUnitDTO = {
  readonly defaultUnitId: number;
  readonly units: readonly ContentUnitDTO[];
};
type ContentGetCategoryContentParametersResponse = {
  readonly status: ContentApiResponseStatusType;
  readonly result?: ContentCategoryContentParametersDTO;
};
type ContentOfferCardRecommendationType =
  | "HAS_VIDEO"
  | "RECOGNIZED_VENDOR"
  | "MAIN"
  | "ADDITIONAL"
  | "DISTINCTIVE"
  | "FILTERABLE"
  | "PICTURE_COUNT"
  | "HAS_DESCRIPTION"
  | "HAS_BARCODE"
  | "FIRST_PICTURE_SIZE"
  | "TITLE_LENGTH"
  | "DESCRIPTION_LENGTH"
  | "AVERAGE_PICTURE_SIZE"
  | "FIRST_VIDEO_SIZE"
  | "FIRST_VIDEO_LENGTH"
  | "AVERAGE_VIDEO_SIZE"
  | "VIDEO_COUNT";
type ContentOptionValuesLimitedDTO = {
  readonly limitingOptionValueId: number;
  readonly optionValueIds: readonly number[];
};
type ContentParameterType = "TEXT" | "ENUM" | "BOOLEAN" | "NUMERIC";
type ContentParameterValueConstraintsDTO = {
  readonly minValue?: number;
  readonly maxValue?: number;
  readonly maxLength?: number;
};
type ContentParameterValueOptionDTO = {
  readonly id: number;
  readonly value: string;
  readonly description?: string;
};
type ContentUnitDTO = {
  readonly id: number;
  readonly name: string;
  readonly fullName: string;
};
type ContentValueRestrictionDTO = {
  readonly limitingParameterId: number;
  readonly limitedValues: readonly ContentOptionValuesLimitedDTO[];
};

/**
 * Параметры метода «Списки характеристик товаров по категориям».
 *
 * Возвращает список характеристик с допустимыми значениями для заданной [листовой категории](*list-category).
 *
 * Поля в ответе определяют правила передачи характеристики в методах:
 * - [POST v2/businesses/{businessId}/offer-mappings/update](../../reference/business-offer-mappings/updateOfferMappings.md)
 * - [POST v2/businesses/{businessId}/offer-cards/update](../../reference/content/updateOfferContent.md)
 *
 * POST /v2/category/{categoryId}/parameters
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetCategoryContentParametersInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * Идентификатор категории на Маркете.
     *
     * Чтобы узнать идентификатор категории, к которой относится интересующий вас товар, воспользуйтесь запросом [POST v2/categories/tree](../../reference/categories/getCategoriesTree.md).
     *
     * Формат: `int64`.
     *
     * Минимальное значение: 0.
     */
    readonly categoryId: number;
  } /**
   * Параметры строки запроса.
   */;
  readonly query?: {
    /**
     * Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).
     *
     * Передайте параметр, чтобы получить характеристики, которые являются особенностями варианта товара в данном кабинете.
     *
     * Формат: `int64`.
     *
     * Минимальное значение: 1.
     */
    readonly businessId?: number;
  };
};
/**
 * Успешный ответ метода «Списки характеристик товаров по категориям».
 *
 * 200: Список характеристик товаров из заданной категории.
 */
export type GetCategoryContentParametersResponse =
  ContentGetCategoryContentParametersResponse;
