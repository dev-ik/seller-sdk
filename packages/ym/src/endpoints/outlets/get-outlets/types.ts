// Generated public types for this Yandex Market endpoint.
type OutletsDayOfWeekType =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";
type OutletsFullOutletDTO = {
  readonly name: string;
  readonly type: OutletsOutletType;
  readonly coords?: string;
  readonly isMain?: boolean;
  readonly shopOutletCode?: string;
  readonly visibility?: OutletsOutletVisibilityType;
  readonly address: OutletsOutletAddressDTO;
  readonly phones: readonly string[];
  readonly workingSchedule: OutletsOutletWorkingScheduleDTO;
  readonly deliveryRules?: readonly OutletsOutletDeliveryRuleDTO[] | null;
  readonly storagePeriod?: number;
  readonly id?: number;
  readonly status?: OutletsOutletStatusType;
  readonly region?: OutletsRegionDTO;
  readonly shopOutletId?: string;
  readonly workingTime?: string;
  readonly moderationReason?: string;
};
type OutletsGetOutletsResponse = {
  readonly outlets: readonly OutletsFullOutletDTO[];
  readonly paging?: OutletsPackagingForwardScrollingPagerDTO;
};
type OutletsOutletAddressDTO = {
  readonly regionId: number;
  readonly street?: string;
  readonly number?: string;
  readonly building?: string;
  readonly estate?: string;
  readonly block?: string;
  readonly additional?: string;
  readonly km?: number;
  readonly city?: string;
};
type OutletsOutletDeliveryRuleDTO = {
  readonly minDeliveryDays?: number;
  readonly maxDeliveryDays?: number;
  readonly deliveryServiceId?: number;
  readonly orderBefore?: number;
  readonly priceFreePickup?: number;
  readonly unspecifiedDeliveryInterval?: boolean;
};
type OutletsOutletStatusType =
  | "AT_MODERATION"
  | "FAILED"
  | "MODERATED"
  | "NONMODERATED"
  | "UNKNOWN";
type OutletsOutletType = "DEPOT" | "MIXED" | "RETAIL" | "NOT_DEFINED";
type OutletsOutletVisibilityType = "HIDDEN" | "VISIBLE" | "UNKNOWN";
type OutletsOutletWorkingScheduleDTO = {
  readonly workInHoliday?: boolean;
  readonly scheduleItems: readonly OutletsOutletWorkingScheduleItemDTO[];
};
type OutletsOutletWorkingScheduleItemDTO = {
  readonly startDay: OutletsDayOfWeekType;
  readonly endDay: OutletsDayOfWeekType;
  readonly startTime: string;
  readonly endTime: string;
};
type OutletsPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type OutletsRegionDTO = {
  readonly id: number;
  readonly name: string;
  readonly type: OutletsRegionType;
  readonly parent?: OutletsRegionDTO;
};
type OutletsRegionType =
  | "OTHER"
  | "CONTINENT"
  | "REGION"
  | "COUNTRY"
  | "COUNTRY_DISTRICT"
  | "REPUBLIC"
  | "CITY"
  | "VILLAGE"
  | "CITY_DISTRICT"
  | "SUBWAY_STATION"
  | "REPUBLIC_AREA";

/**
 * Параметры метода «Информация о нескольких точках продаж».
 *
 * Возвращает список точек продаж магазина.
 *
 * GET /v2/campaigns/{campaignId}/outlets
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetOutletsInput = {
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
     * Значение по умолчанию: `25`.
     *
     * Минимальное значение: 1.
     *
     * Максимальное значение: 50.
     */
    readonly limit?: number;

    /**
     * Идентификатор региона.
     * Если задать идентификатор родительского региона любого уровня, в выходных данных будут отображены точки продаж всех дочерних регионов.
     * Идентификатор региона можно получить c помощью метода [GET v2/regions](../../reference/regions/searchRegionsByName.md).
     *
     * Формат: `int64`.
     */
    readonly region_id?: number;

    /**
     * Идентификатор точки продаж, присвоенный магазином.
     */
    readonly shop_outlet_code?: string;

    /**
     * Параметр устарел и будет отключен 19.10.2026.
     *
     * Вместо него используйте `region_id`.
     *
     * Формат: `int64`.
     */
    readonly regionId?: number;
  };
};
/**
 * Успешный ответ метода «Информация о нескольких точках продаж».
 *
 * 200: Информация о точках продаж.
 */
export type GetOutletsResponse = OutletsGetOutletsResponse;
