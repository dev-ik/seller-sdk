// Generated public types for this Yandex Market endpoint.
type ReturnsApiResponseStatusType = "OK" | "ERROR";
type ReturnsCreateReturnDTO = {
  readonly externalReturnId: string;
  readonly orderId: number;
  readonly items: readonly ReturnsCreateReturnItemDTO[];
  readonly customer: ReturnsCustomerDTO;
  readonly returnOption: ReturnsCreateReturnOptionDTO;
};
type ReturnsCreateReturnItemDTO = {
  readonly offerId: ReturnsShopSku;
  readonly count: number;
  readonly reasonType: ReturnsExternalReturnDecisionReasonType;
  readonly subreasonType: ReturnsExternalReturnDecisionSubreasonType;
  readonly comment?: string;
  readonly pictures?: readonly string[] | null;
};
type ReturnsCreateReturnOptionDTO = {
  readonly pickupReturn: ReturnsOrderPickupReturnDTO;
};
type ReturnsCreateReturnRequest = {
  readonly newReturn: ReturnsCreateReturnDTO;
};
type ReturnsCreateReturnResponse = {
  readonly status: ReturnsApiResponseStatusType;
  readonly result?: ReturnsCreatedReturnDTO;
};
type ReturnsCreatedReturnDTO = { readonly id: number };
type ReturnsCustomerDTO = {
  readonly firstName: string;
  readonly lastName: string;
  readonly middleName?: string;
  readonly phone: string;
};
type ReturnsExternalReturnDecisionReasonType =
  | "BAD_QUALITY"
  | "DOES_NOT_FIT"
  | "WRONG_ITEM";
type ReturnsExternalReturnDecisionSubreasonType =
  | "USER_DID_NOT_LIKE"
  | "USER_CHANGED_MIND"
  | "DELIVERED_TOO_LONG"
  | "BAD_PACKAGE"
  | "DAMAGED"
  | "NOT_WORKING"
  | "INCOMPLETENESS"
  | "WRONG_ITEM"
  | "WRONG_COLOR"
  | "DID_NOT_MATCH_DESCRIPTION";
type ReturnsLogisticPointId = number;
type ReturnsOrderPickupReturnDTO = {
  readonly logisticPointId: ReturnsLogisticPointId;
};
type ReturnsShopSku = string;

/**
 * Параметры метода «Создание возврата».
 *
 * Создает новый возврат.
 *
 * Это можно сделать только для заказа в статусе `DELIVERED`.
 *
 * Перед вызовом метода
 *
 * Проверьте, подходят ли пункты выдачи для возврата указанных товаров, — [POST v1/campaigns/{campaignId}/return-delivery-options](../../reference/delivery-options/getReturnDeliveryOptions.md).
 *
 * POST /v1/campaigns/{campaignId}/returns/create
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type CreateReturnInput = {
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
   * Тело запроса.
   */;
  readonly body: ReturnsCreateReturnRequest;
};
/**
 * Успешный ответ метода «Создание возврата».
 *
 * 200: Информация о cозданном возврате.
 */
export type CreateReturnResponse = ReturnsCreateReturnResponse;
