// Generated public types for this Yandex Market endpoint.
type BusinessOfferMappingsApiResponseStatusType = "OK" | "ERROR";
type BusinessOfferMappingsGenerateOfferBarcodesRequest = {
  readonly offerIds: readonly BusinessOfferMappingsShopSku[];
  readonly skipIfExists?: boolean;
};
type BusinessOfferMappingsGenerateOfferBarcodesResponse = {
  readonly status: BusinessOfferMappingsApiResponseStatusType;
  readonly result?: BusinessOfferMappingsGenerateOfferBarcodesResultDTO;
};
type BusinessOfferMappingsGenerateOfferBarcodesResultDTO = {
  readonly unprocessedOfferIds: readonly BusinessOfferMappingsShopSku[];
};
type BusinessOfferMappingsShopSku = string;

/**
 * Параметры метода «Генерация штрихкодов».
 *
 * Генерирует штрихкоды и присваивает их указанным товарам.
 *
 * Если у товара на упаковке уже есть штрихкод производителя, передайте его в параметре `barcodes` в методе [POST v2/businesses/{businessId}/offer-mappings/update](../../reference/business-offer-mappings/updateOfferMappings.md). Генерировать новый не нужно.
 *
 * POST /v1/businesses/{businessId}/offer-mappings/barcodes/generate
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GenerateOfferBarcodesInput = {
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
  readonly body: BusinessOfferMappingsGenerateOfferBarcodesRequest;
};
/**
 * Успешный ответ метода «Генерация штрихкодов».
 *
 * 200: Пустой ответ, если генерация успешно завершилась для всех переданных товаров.
 *
 * Или список товаров, для которых не удалось сгенерировать штрихкоды.
 */
export type GenerateOfferBarcodesResponse =
  BusinessOfferMappingsGenerateOfferBarcodesResponse;
