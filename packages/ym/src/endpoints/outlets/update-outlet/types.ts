// Generated public types for this Yandex Market endpoint.
type OutletsApiResponseStatusType = "OK" | "ERROR";
type OutletsChangeOutletRequest = {
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
};
type OutletsDayOfWeekType =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";
type OutletsEmptyApiResponse = {
  readonly status: OutletsApiResponseStatusType;
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

/**
 * Параметры метода «Изменение информации о точке продаж».
 *
 * Изменяет информацию о точке продаж магазина на Маркете.
 *
 * PUT /v2/campaigns/{campaignId}/outlets/{outletId}
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type UpdateOutletInput = {
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

    /**
     * Идентификатор точки продаж.
     *
     * Формат: `int64`.
     *
     * Минимальное значение: 1.
     */
    readonly outletId: number;
  } /**
   * Тело запроса.
   */;
  readonly body: OutletsChangeOutletRequest;
};
/**
 * Успешный ответ метода «Изменение информации о точке продаж».
 *
 * 200: Пустой ответ.
 */
export type UpdateOutletResponse = OutletsEmptyApiResponse;
