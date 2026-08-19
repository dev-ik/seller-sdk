// Generated public types for this Yandex Market endpoint.
type WarehousesApiResponseStatusType = "OK" | "ERROR";
type WarehousesCampaignId = number;
type WarehousesGetWarehousesResponse = {
  readonly status: WarehousesApiResponseStatusType;
  readonly result?: WarehousesWarehousesDTO;
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
type WarehousesWarehouseDTO = {
  readonly id: number;
  readonly name: string;
  readonly campaignId: WarehousesCampaignId;
  readonly express: boolean;
  readonly address?: WarehousesWarehouseAddressDTO;
};
type WarehousesWarehouseGroupDTO = {
  readonly name: string;
  readonly mainWarehouse: WarehousesWarehouseDTO;
  readonly warehouses: readonly WarehousesWarehouseDTO[];
};
type WarehousesWarehousesDTO = {
  readonly warehouses: readonly WarehousesWarehouseDTO[];
  readonly warehouseGroups: readonly WarehousesWarehouseGroupDTO[];
};

/**
 * Параметры метода «Список складов и групп складов».
 *
 * Возвращает список складов и, если склады объединены, список групп складов. [Что такое группы складов и зачем они нужны](https://yandex.ru/support/marketplace/assortment/operations/stocks.html#unified-stocks)
 *
 * Среди прочего запрос позволяет определить идентификатор, который нужно использовать при передаче остатков для группы складов.
 *
 * GET /v2/businesses/{businessId}/warehouses
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetWarehousesInput = {
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
  };
};
/**
 * Успешный ответ метода «Список складов и групп складов».
 *
 * 200: Список складов и групп складов.
 */
export type GetWarehousesResponse = WarehousesGetWarehousesResponse;
