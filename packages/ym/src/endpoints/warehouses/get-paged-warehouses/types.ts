// Generated public types for this Yandex Market endpoint.
type WarehousesApiResponseStatusType = "OK" | "ERROR";
type WarehousesCampaignId = number;
type WarehousesGetPagedWarehousesRequest = {
  readonly components?: readonly WarehousesWarehouseComponentType[] | null;
  readonly campaignIds?: readonly WarehousesCampaignId[] | null;
};
type WarehousesGetPagedWarehousesResponse = {
  readonly status: WarehousesApiResponseStatusType;
  readonly result?: WarehousesPagedWarehousesDTO;
};
type WarehousesGpsDTO = {
  readonly latitude: number;
  readonly longitude: number;
};
type WarehousesPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type WarehousesPagedWarehousesDTO = {
  readonly warehouses: readonly WarehousesWarehouseDetailsDTO[];
  readonly paging?: WarehousesPackagingForwardScrollingPagerDTO;
};
type WarehousesWarehouseAddressDTO = {
  readonly city: string;
  readonly street?: string;
  readonly number?: string;
  readonly building?: string;
  readonly block?: string;
  readonly gps: WarehousesGpsDTO;
};
type WarehousesWarehouseComponentType = "ADDRESS" | "STATUS";
type WarehousesWarehouseDetailsDTO = {
  readonly id: number;
  readonly name: string;
  readonly campaignId: WarehousesCampaignId;
  readonly express: boolean;
  readonly groupInfo?: WarehousesWarehouseGroupInfoDTO;
  readonly address?: WarehousesWarehouseAddressDTO;
  readonly status?: WarehousesWarehouseStatusDTO;
};
type WarehousesWarehouseGroupInfoDTO = {
  readonly name: string;
  readonly id: number;
};
type WarehousesWarehouseStatusDTO = {
  readonly status: WarehousesWarehouseStatusType;
};
type WarehousesWarehouseStatusType = "DISABLED_MANUALLY" | "OTHER";

/**
 * Параметры метода «Список складов».
 *
 * Возвращает список складов и информацию о них.
 *
 * Когда использовать этот метод
 *
 * Метод актуален для кабинетов с группами складов. Если в кабинете нет групп складов, используйте метод [POST v3/businesses/{businessId}/warehouses](../../reference/warehouses/getPartnerWarehouses.md). [Что такое группы складов и зачем они нужны](https://yandex.ru/support/marketplace/assortment/operations/stocks.html#unified-stocks).
 *
 * POST /v2/businesses/{businessId}/warehouses
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetPagedWarehousesInput = {
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
   * Параметры строки запроса.
   */;
  readonly query?: {
    /**
     * Идентификатор страницы c результатами.
     *
     * Если параметр не указан, возвращается первая страница.
     *
     * Передавайте значение выходного параметра `nextPageToken`, полученное при последнем запросе.
     */
    readonly pageToken?: string;

    /**
     * Количество элементов на странице.
     *
     * Формат: `int32`.
     *
     * Значение по умолчанию: `15`.
     *
     * Минимальное значение: 1.
     *
     * Максимальное значение: 30.
     */
    readonly limit?: number;
  } /**
   * Тело запроса.
   */;
  readonly body?: WarehousesGetPagedWarehousesRequest;
};
/**
 * Успешный ответ метода «Список складов».
 *
 * 200: Список складов и их свойства, которые вы запрашивали.
 */
export type GetPagedWarehousesResponse = WarehousesGetPagedWarehousesResponse;
