// Generated public types for this Yandex Market endpoint.
type ShipmentsApiResponseStatusType = "OK" | "ERROR";
type ShipmentsDeliveryServiceDTO = {
  readonly id?: number;
  readonly name?: string;
};
type ShipmentsGetShipmentResponse = {
  readonly status: ShipmentsApiResponseStatusType;
  readonly result?: ShipmentsShipmentDTO;
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
type ShipmentsShipmentActionType =
  | "CONFIRM"
  | "DOWNLOAD_ACT"
  | "DOWNLOAD_INBOUND_ACT"
  | "DOWNLOAD_DISCREPANCY_ACT"
  | "DOWNLOAD_TRANSPORTATION_WAYBILL"
  | "CHANGE_PALLETS_COUNT";
type ShipmentsShipmentDTO = {
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
  readonly currentStatus?: ShipmentsShipmentStatusChangeDTO;
  readonly availableActions: readonly ShipmentsShipmentActionType[];
};
type ShipmentsShipmentStatusChangeDTO = {
  readonly status?: ShipmentsShipmentStatusType;
  readonly description?: string;
  readonly updateTime?: string;
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
 * Параметры метода «Получение информации об одной отгрузке».
 *
 * Возвращает информацию об отгрузке по ее идентификатору.
 *
 * GET /v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetShipmentInput = {
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
     * Идентификатор отгрузки.
     *
     * Формат: `int64`.
     *
     * Минимальное значение: 1.
     */
    readonly shipmentId: number;
  } /**
   * Параметры строки запроса.
   */;
  readonly query?: {
    /**
     * Возвращать ли отмененные заказы.
     *
     * Значение по умолчанию: `true`. Если возвращать отмененные заказы не нужно, передайте значение `false`.
     *
     * Значение по умолчанию: `true`.
     */
    readonly cancelledOrders?: boolean;
  };
};
/**
 * Успешный ответ метода «Получение информации об одной отгрузке».
 *
 * 200: Найденная отгрузка.
 */
export type GetShipmentResponse = ShipmentsGetShipmentResponse;
