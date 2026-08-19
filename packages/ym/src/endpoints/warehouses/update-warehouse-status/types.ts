// Generated public types for this Yandex Market endpoint.
type WarehousesApiResponseStatusType = "OK" | "ERROR";
type WarehousesUpdateWarehouseStatusRequest = { readonly enabled: boolean };
type WarehousesUpdateWarehouseStatusResponse = {
  readonly status: WarehousesApiResponseStatusType;
  readonly result?: WarehousesWarehouseStatusDTO;
};
type WarehousesWarehouseStatusDTO = {
  readonly status: WarehousesWarehouseStatusType;
};
type WarehousesWarehouseStatusType = "DISABLED_MANUALLY" | "OTHER";

/**
 * Параметры метода «Изменение статуса склада».
 *
 * Отключает или включает склад.
 *
 * После отключения склада товары, которые находятся на нем, скрываются через 15 минут. После включения они возвращаются на витрину через 15 минут, а если склад был выключен 30 дней или дольше — через 4 часа.
 *
 * POST /v2/campaigns/{campaignId}/warehouse/status
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type UpdateWarehouseStatusInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.
     *
     * Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:
     *
     * * блок **Идентификатор кампании**;
     * * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.
     *
     * ⚠️ Не путайте его с:
     * - идентификатором магазина, который отображается в личном кабинете продавца;
     * - рекламными кампаниями.
     *
     * Формат: `int64`.
     *
     * Минимальное значение: 1.
     */
    readonly campaignId: number;
  } /**
   * Тело запроса.
   */;
  readonly body: WarehousesUpdateWarehouseStatusRequest;
};
/**
 * Успешный ответ метода «Изменение статуса склада».
 *
 * 200: Новый статус склада.
 */
export type UpdateWarehouseStatusResponse =
  WarehousesUpdateWarehouseStatusResponse;
