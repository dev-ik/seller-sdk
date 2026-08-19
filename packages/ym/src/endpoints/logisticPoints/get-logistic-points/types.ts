// Generated public types for this Yandex Market endpoint.
type LogisticPointsApiResponseStatusType = "OK" | "ERROR";
type LogisticPointsDayOfWeekType =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";
type LogisticPointsGetLogisticPointsResponse = {
  readonly status: LogisticPointsApiResponseStatusType;
  readonly result?: LogisticPointsGetLogisticsPointsDTO;
};
type LogisticPointsGetLogisticsPointsDTO = {
  readonly logisticPoints: readonly LogisticPointsLogisticPointDTO[];
  readonly paging?: LogisticPointsPackagingForwardScrollingPagerDTO;
};
type LogisticPointsGpsDTO = {
  readonly latitude: number;
  readonly longitude: number;
};
type LogisticPointsLogisticPointAddressDTO = {
  readonly fullAddress: string;
  readonly gps: LogisticPointsGpsDTO;
  readonly regionId: number;
  readonly city?: string;
  readonly street?: string;
  readonly house?: string;
  readonly building?: string;
  readonly block?: string;
  readonly km?: number;
  readonly additional?: string;
};
type LogisticPointsLogisticPointBrandType = "MARKET";
type LogisticPointsLogisticPointDTO = {
  readonly logisticPointId: LogisticPointsLogisticPointId;
  readonly brand: LogisticPointsLogisticPointBrandType;
  readonly address: LogisticPointsLogisticPointAddressDTO;
  readonly workingSchedule: LogisticPointsLogisticPointScheduleDTO;
  readonly deliveryRestrictions: LogisticPointsLogisticPointDeliveryRestrictionDTO;
  readonly features?: readonly LogisticPointsLogisticPointFeatureType[] | null;
  readonly storagePeriod: number;
};
type LogisticPointsLogisticPointDeliveryRestrictionDTO = {
  readonly dimensionsRestrictions: LogisticPointsLogisticPointDimensionRestrictionsDTO;
};
type LogisticPointsLogisticPointDimensionRestrictionsDTO = {
  readonly weight: number;
  readonly height: number;
  readonly width: number;
  readonly length: number;
  readonly dimensionsSum: number;
};
type LogisticPointsLogisticPointFeatureType = "RETURN_ALLOWED";
type LogisticPointsLogisticPointId = number;
type LogisticPointsLogisticPointScheduleDTO = {
  readonly schedule: readonly LogisticPointsScheduleDayDTO[];
  readonly holidays?: readonly string[] | null;
};
type LogisticPointsPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type LogisticPointsScheduleDayDTO = {
  readonly day: LogisticPointsDayOfWeekType;
  readonly startTime: string;
  readonly endTime: string;
};

/**
 * Параметры метода «Получение точек ПВЗ Маркета».
 *
 * Возвращает список пунктов выдачи заказов Маркета.
 *
 * Регулярно запрашивайте эту информацию, чтобы в системе магазина хранить актуальные данные. Например, раз в день.
 *
 * POST /v1/businesses/{businessId}/logistics-points
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetLogisticPointsInput = {
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
     * Значение по умолчанию: `250`.
     *
     * Минимальное значение: 1.
     *
     * Максимальное значение: 500.
     */
    readonly limit?: number;
  };
};
/**
 * Успешный ответ метода «Получение точек ПВЗ Маркета».
 *
 * 200: Информация о пунктах выдачи заказов Маркета.
 */
export type GetLogisticPointsResponse = LogisticPointsGetLogisticPointsResponse;
