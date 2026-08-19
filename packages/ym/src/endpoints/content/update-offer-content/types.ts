// Generated public types for this Yandex Market endpoint.
type ContentApiResponseStatusType = "OK" | "ERROR";
type ContentCategoryId = number;
type ContentOfferContentDTO = {
  readonly offerId: ContentShopSku;
  readonly categoryId: ContentCategoryId;
  readonly parameterValues: readonly ContentParameterValueDTO[];
};
type ContentOfferContentErrorDTO = {
  readonly type: ContentOfferContentErrorType;
  readonly parameterId?: number;
  readonly message: string;
};
type ContentOfferContentErrorType =
  | "OFFER_NOT_FOUND"
  | "UNKNOWN_CATEGORY"
  | "INVALID_CATEGORY"
  | "UNKNOWN_PARAMETER"
  | "UNEXPECTED_BOOLEAN_VALUE"
  | "NUMBER_FORMAT"
  | "INVALID_UNIT_ID"
  | "INVALID_GROUP_ID_LENGTH"
  | "INVALID_GROUP_ID_CHARACTERS";
type ContentParameterValueDTO = {
  readonly parameterId: number;
  readonly unitId?: number;
  readonly valueId?: number;
  readonly value?: string;
};
type ContentShopSku = string;
type ContentUpdateOfferContentRequest = {
  readonly offersContent: readonly ContentOfferContentDTO[];
};
type ContentUpdateOfferContentResponse = {
  readonly status: ContentApiResponseStatusType;
  readonly results?: readonly ContentUpdateOfferContentResultDTO[] | null;
};
type ContentUpdateOfferContentResultDTO = {
  readonly offerId: ContentShopSku;
  readonly errors?: readonly ContentOfferContentErrorDTO[] | null;
  readonly warnings?: readonly ContentOfferContentErrorDTO[] | null;
};

/**
 * Параметры метода «Редактирование категорийных характеристик товара».
 *
 * Редактирует характеристики товара, которые специфичны для категории, к которой он относится.
 *
 * Здесь только то, что относится к конкретной категории
 *
 * Если вам нужно изменить основные параметры товара (название, описание, изображения, видео, производитель, штрихкод), воспользуйтесь запросом [POST v2/businesses/{businessId}/offer-mappings/update](../../reference/business-offer-mappings/updateOfferMappings.md).
 *
 * Чтобы удалить характеристики, которые заданы в параметрах с типом `string`, передайте пустое значение.
 *
 * Данные в каталоге обновляются не мгновенно
 *
 * Это занимает до нескольких минут.
 *
 * POST /v2/businesses/{businessId}/offer-cards/update
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type UpdateOfferContentInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * Идентификатор кабинета.
     *
     * Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).
     *
     * ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)
     *
     * Формат: `int64`.
     *
     * Минимальное значение: 1.
     */
    readonly businessId: number;
  } /**
   * Тело запроса.
   */;
  readonly body: ContentUpdateOfferContentRequest;
};
/**
 * Успешный ответ метода «Редактирование категорийных характеристик товара».
 *
 * 200: Запрос выполнен корректно, данные обработаны.
 *
 * Ответ `200` сам по себе не значит, что переданные значения корректны
 *
 * Обязательно посмотрите детали ответа: `status`, а также перечень ошибок (`results.errors`) и замечаний (`results.warnings`), если они есть.
 *
 * - Если хотя бы по одному товару вернулась ошибка (`results.errors`), поле `status` = `ERROR`. Изменения по всем переданным товарам не будут применены.
 * - Если ошибок нет, но хотя бы по одному товару вернулось замечание (`results.warnings`), поле `status` = `OK`, и изменения будут применены.
 *
 * Если в `status` вернулось `ERROR`, убедитесь, что:
 *
 * * все обязательные характеристики заполнены;
 * * характеристики действительно существуют в указанных категориях;
 * * значения соответствуют характеристикам;
 * * ваши собственные значения имеют нужный тип данных.
 *
 * Найти проблемы помогут поля `errors` и `warnings`.
 */
export type UpdateOfferContentResponse = ContentUpdateOfferContentResponse;
