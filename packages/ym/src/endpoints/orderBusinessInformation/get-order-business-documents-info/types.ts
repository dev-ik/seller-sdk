// Generated public types for this Yandex Market endpoint.
type OrderBusinessInformationApiResponseStatusType = "OK" | "ERROR";
type OrderBusinessInformationDocumentDTO = {
  readonly status?: OrderBusinessInformationOrderDocumentStatusType;
  readonly number?: string;
  readonly date?: string;
};
type OrderBusinessInformationGetBusinessDocumentsInfoResponse = {
  readonly status: OrderBusinessInformationApiResponseStatusType;
  readonly result?: OrderBusinessInformationOrderBusinessDocumentsDTO;
};
type OrderBusinessInformationOrderBusinessDocumentsDTO = {
  readonly upd?: OrderBusinessInformationDocumentDTO;
  readonly ukd?: OrderBusinessInformationDocumentDTO;
  readonly torgTwelve?: OrderBusinessInformationDocumentDTO;
  readonly sf?: OrderBusinessInformationDocumentDTO;
  readonly ksf?: OrderBusinessInformationDocumentDTO;
};
type OrderBusinessInformationOrderDocumentStatusType = "READY" | "NOT_READY";

/**
 * Параметры метода «Информация о документах».
 *
 * Возвращает информацию о документах по идентификатору заказа.
 *
 * Получить данные можно после того, как заказ перейдет в статус `DELIVERED`.
 *
 * POST /v2/campaigns/{campaignId}/orders/{orderId}/documents
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetOrderBusinessDocumentsInfoInput = {
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
 * Успешный ответ метода «Информация о документах».
 *
 * 200: Информация о документах.
 */
export type GetOrderBusinessDocumentsInfoResponse =
  OrderBusinessInformationGetBusinessDocumentsInfoResponse;
