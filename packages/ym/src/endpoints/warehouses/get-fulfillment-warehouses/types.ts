// Generated public types for this Yandex Market endpoint.
type WarehousesApiResponseStatusType = "OK" | "ERROR";
type WarehousesFulfillmentWarehouseDTO = {
  readonly id: number;
  readonly name: string;
  readonly address?: WarehousesWarehouseAddressDTO;
};
type WarehousesFulfillmentWarehousesDTO = {
  readonly warehouses: readonly WarehousesFulfillmentWarehouseDTO[];
};
type WarehousesGetFulfillmentWarehousesResponse = {
  readonly status: WarehousesApiResponseStatusType;
  readonly result?: WarehousesFulfillmentWarehousesDTO;
};
type WarehousesGpsDTO = {
  readonly latitude: number;
  readonly longitude: number;
};
type WarehousesWarehouseAddressDTO = {
  readonly city: string;
  readonly street?: string;
  readonly number?: string;
  readonly building?: string;
  readonly block?: string;
  readonly gps: WarehousesGpsDTO;
};

/**
 * Параметры метода «Идентификаторы фулфилмент-складов Маркета».
 *
 * Возвращает список фулфилмент-складов Маркета с их идентификаторами.
 *
 * GET /v2/warehouses
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetFulfillmentWarehousesInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query?: {
    /**
     * Идентификатор кампании магазина.
     *
     * Указывается, если нужно вернуть все склады Маркета, которые привязаны к определенной кампании магазина.
     *
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
    readonly campaignId?: number;
  };
};
/**
 * Успешный ответ метода «Идентификаторы фулфилмент-складов Маркета».
 *
 * 200: Список складов.
 */
export type GetFulfillmentWarehousesResponse =
  WarehousesGetFulfillmentWarehousesResponse;
