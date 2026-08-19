// Generated public types for this Yandex Market endpoint.
type OrdersApiResponseStatusType = "OK" | "ERROR";
type OrdersCisDTO = {
  readonly value: string;
  readonly status: OrdersCisStatusType;
  readonly substatus?: OrdersCisSubstatusType;
  readonly crptRequestId?: string;
  readonly crptRequestDateTime?: string;
};
type OrdersCisStatusType =
  | "OK"
  | "FAILED"
  | "IN_PROGRESS"
  | "INVALID"
  | "NOT_ON_VALIDATION";
type OrdersCisSubstatusType =
  | "WRONG_OWNER_INN"
  | "CIS_VALIDATION_ERROR"
  | "CIS_GTIN_NOT_FOUND"
  | "CIS_SERIAL_NUMBER_NOT_FOUND"
  | "INVALID_SYMBOLS_FOUND"
  | "CRYPTO_TAIL_FORMAT_MISMATCH_CIS_TYPE"
  | "INVALID_CRYPTO_TAIL"
  | "INVALID_CRYPTO_KEY"
  | "VERIFICATION_FAILED_IN_EMITTER_COUNTRY"
  | "UNSUPPORTED_AI_FOUND"
  | "CIS_NOT_FOUND_IN_GIS_MT"
  | "NOT_PLACED_ON_MARKET"
  | "NOT_PRINTED_ON_PACKAGE"
  | "EXPIRED_ITEM"
  | "SALE_BLOCKED_BY_OGB"
  | "ITEM_SOLD";
type OrdersGetOrderIdentifiersStatusDTO = {
  readonly items: readonly OrdersOrderItemValidationStatusDTO[];
};
type OrdersGetOrderIdentifiersStatusResponse = {
  readonly status: OrdersApiResponseStatusType;
  readonly result?: OrdersGetOrderIdentifiersStatusDTO;
};
type OrdersOrderItemValidationStatusDTO = {
  readonly id: number;
  readonly uin?: readonly OrdersUinDTO[] | null;
  readonly cis?: readonly OrdersCisDTO[] | null;
};
type OrdersUinDTO = {
  readonly value: string;
  readonly status: OrdersUinStatusType;
  readonly substatus?: OrdersUinSubstatusType;
};
type OrdersUinStatusType =
  | "OK"
  | "IN_PROGRESS"
  | "FAILED"
  | "NOT_ON_VALIDATION";
type OrdersUinSubstatusType =
  | "UIN_MERCHANT_MISMATCH"
  | "UIN_MERCHANT_UNREGISTERED"
  | "UIN_NO_DATA";

/**
 * Параметры метода «Статусы проверки кодов маркировки».
 *
 * Возвращает статусы проверки кодов маркировки в заказе.
 *
 * Заказ, в котором есть ювелирные изделия или товары с обязательной маркировкой в системе [«Честный ЗНАК»](https://честныйзнак.рф/), можно перевести в статус `READY_TO_SHIP`, только когда:
 *
 * 1. В методе [PUT v2/campaigns/{campaignId}/orders/{orderId}/boxes](../../reference/orders/setOrderBoxLayout.md) вы передадите Маркету:
 *
 * * [УИНы](:no-translate[*uin]) по каждому ювелирному изделию в заказе;
 *
 * * коды маркировки в системе :no-translate[«Честный ЗНАК»] по всем товарам в заказе, для которых она обязательна.
 * 2. Все коды маркировки успешно пройдут проверку.
 *
 * POST /v2/campaigns/{campaignId}/orders/{orderId}/identifiers/status
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetOrderIdentifiersStatusInput = {
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
     * Идентификатор заказа.
     *
     * Формат: `int64`.
     */
    readonly orderId: number;
  };
};
/**
 * Успешный ответ метода «Статусы проверки кодов маркировки».
 *
 * 200: Информация по проверке кодов маркировки.
 */
export type GetOrderIdentifiersStatusResponse =
  OrdersGetOrderIdentifiersStatusResponse;
