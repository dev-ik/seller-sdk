// Generated public types for this Yandex Market endpoint.
type WarehousesApiResponseStatusType = "OK" | "ERROR";
type WarehousesUpdateWarehouseModelStatusRequest = {
  readonly partnerWarehouseId: number;
  readonly model: WarehousesWarehouseProgramType;
  readonly enabled: boolean;
};
type WarehousesUpdateWarehouseModelStatusResponse = {
  readonly status: WarehousesApiResponseStatusType;
  readonly result?: WarehousesWarehouseModelStatusDTO;
};
type WarehousesWarehouseModelStatusDTO = {
  readonly status: WarehousesWarehouseModelStatusType;
};
type WarehousesWarehouseModelStatusType = "DISABLED_MANUALLY" | "OTHER";
type WarehousesWarehouseProgramType = "FBS" | "DBS" | "EXPRESS";

/**
 * Параметры метода «Включение/выключение модели работы склада».
 *
 * Отключает или включает модель работы (FBS, DBS или Экспресс) для указанного склада.
 *
 * После отключения модели товары, которые работают по ней на данном складе, скрываются через 15 минут. После включения они возвращаются на витрину через 15 минут, а если модель была выключена 30 дней или дольше — через 4 часа.
 *
 * POST /v3/businesses/{businessId}/warehouse/models/status
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type UpdateWarehouseModelStatusInput = {
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
  readonly body: WarehousesUpdateWarehouseModelStatusRequest;
};
/**
 * Успешный ответ метода «Включение/выключение модели работы склада».
 *
 * 200: Новый статус модели работы склада.
 */
export type UpdateWarehouseModelStatusResponse =
  WarehousesUpdateWarehouseModelStatusResponse;
