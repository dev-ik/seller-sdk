// Generated public types for this Yandex Market endpoint.
type WarehousesApiAvailabilityStatusType =
  | "AVAILABLE"
  | "DISABLED_BY_INACTIVITY"
  | "DISABLED_BY_NO_ACTIVE_CONTRACT"
  | "MANUALLY_DISABLED"
  | "DISABLED_BY_NO_PLACEMENT_TYPE";
type WarehousesApiResponseStatusType = "OK" | "ERROR";
type WarehousesGetPartnerWarehousesRequest = {
  readonly warehouseIds?: readonly number[] | null;
  readonly components?:
    | readonly WarehousesPartnerWarehouseComponentType[]
    | null;
};
type WarehousesGetPartnerWarehousesResponse = {
  readonly status: WarehousesApiResponseStatusType;
  readonly result?: WarehousesPartnerWarehousesDTO;
};
type WarehousesGpsDTO = {
  readonly latitude: number;
  readonly longitude: number;
};
type WarehousesPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type WarehousesPartnerWarehouseComponentType = "ADDRESS";
type WarehousesPartnerWarehouseDTO = {
  readonly id: number;
  readonly name: string;
  readonly models: readonly WarehousesPartnerWarehouseModelDTO[];
  readonly address?: WarehousesWarehouseAddressDTO;
};
type WarehousesPartnerWarehouseModelDTO = {
  readonly placementType: WarehousesWarehouseProgramType;
  readonly apiAvailability: WarehousesApiAvailabilityStatusType;
};
type WarehousesPartnerWarehousesDTO = {
  readonly warehouses: readonly WarehousesPartnerWarehouseDTO[];
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
type WarehousesWarehouseProgramType = "FBS" | "DBS" | "EXPRESS";

/**
 * Параметры метода «Список складов».
 *
 * Возвращает список складов кабинета и информацию о них.
 *
 * Для каждого склада возвращается список моделей работы (FBS, DBS, Экспресс) и доступность API для каждой модели.
 *
 * Метод подходит, только если в кабинете нет групп складов
 *
 * Метод возвращает только отдельные склады и не возвращает группы складов. Если в кабинете есть группы складов, используйте метод [POST v2/businesses/{businessId}/warehouses](../../reference/warehouses/getPagedWarehouses.md). [Что такое группы складов и зачем они нужны](https://yandex.ru/support/marketplace/assortment/operations/stocks.html#unified-stocks).
 *
 * POST /v3/businesses/{businessId}/warehouses
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetPartnerWarehousesInput = {
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
  readonly body?: WarehousesGetPartnerWarehousesRequest;
};
/**
 * Успешный ответ метода «Список складов».
 *
 * 200: Список складов и их свойства, которые вы запрашивали.
 */
export type GetPartnerWarehousesResponse =
  WarehousesGetPartnerWarehousesResponse;
