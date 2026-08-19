// Generated public types for this Yandex Market endpoint.
type ShipmentsApiResponseStatusType = "OK" | "ERROR";
type ShipmentsDeliveryServiceDTO = {
  readonly id?: number;
  readonly name?: string;
};
type ShipmentsPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type ShipmentsPalletsCountDTO = {
  readonly planned?: number;
  readonly fact?: number;
};
type ShipmentsPartnerShipmentWarehouseDTO = {
  readonly id: number;
  readonly name?: string;
  readonly address?: string;
};
type ShipmentsSearchShipmentsRequest = {
  readonly dateFrom: string;
  readonly dateTo: string;
  readonly statuses?: readonly ShipmentsShipmentStatusType[] | null;
  readonly orderIds?: readonly number[] | null;
  readonly cancelledOrders?: boolean;
};
type ShipmentsSearchShipmentsResponse = {
  readonly status: ShipmentsApiResponseStatusType;
  readonly result?: ShipmentsSearchShipmentsResponseDTO;
};
type ShipmentsSearchShipmentsResponseDTO = {
  readonly shipments: readonly ShipmentsShipmentInfoDTO[];
  readonly paging?: ShipmentsPackagingForwardScrollingPagerDTO;
};
type ShipmentsShipmentInfoDTO = {
  readonly id: number;
  readonly planIntervalFrom: string;
  readonly planIntervalTo: string;
  readonly shipmentType?: ShipmentsShipmentType;
  readonly warehouse?: ShipmentsPartnerShipmentWarehouseDTO;
  readonly warehouseTo?: ShipmentsPartnerShipmentWarehouseDTO;
  readonly externalId?: string;
  readonly deliveryService?: ShipmentsDeliveryServiceDTO;
  readonly palletsCount?: ShipmentsPalletsCountDTO;
  readonly orderIds: readonly number[];
  readonly draftCount: number;
  readonly plannedCount: number;
  readonly factCount: number;
  readonly signature: ShipmentsSignatureDTO;
  readonly status?: ShipmentsShipmentStatusType;
  readonly statusDescription?: string;
  readonly statusUpdateTime?: string;
};
type ShipmentsShipmentStatusType =
  | "OUTBOUND_CREATED"
  | "OUTBOUND_READY_FOR_CONFIRMATION"
  | "OUTBOUND_CONFIRMED"
  | "OUTBOUND_SIGNED"
  | "FINISHED"
  | "ACCEPTED"
  | "ACCEPTED_WITH_DISCREPANCIES"
  | "ERROR";
type ShipmentsShipmentType = "IMPORT" | "WITHDRAW";
type ShipmentsSignatureDTO = { readonly signed: boolean };

/**
 * Параметры метода «Получение информации о нескольких отгрузках».
 *
 * Возвращает информацию об отгрузках по заданным параметрам:
 *
 * * дате;
 * * статусу;
 * * идентификаторам заказов.
 *
 * Результаты возвращаются постранично.
 *
 * PUT /v2/campaigns/{campaignId}/first-mile/shipments
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type SearchShipmentsInput = {
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
  readonly body: ShipmentsSearchShipmentsRequest;
};
/**
 * Успешный ответ метода «Получение информации о нескольких отгрузках».
 *
 * 200: Найденные отгрузки.
 */
export type SearchShipmentsResponse = ShipmentsSearchShipmentsResponse;
