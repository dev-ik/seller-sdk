// Generated public types for this Yandex Market endpoint.
type SupplyRequestsApiResponseStatusType = "OK" | "ERROR";
type SupplyRequestsGetSupplyRequestDocumentsDTO = {
  readonly documents: readonly SupplyRequestsSupplyRequestDocumentDTO[];
};
type SupplyRequestsGetSupplyRequestDocumentsRequest = {
  readonly requestId: SupplyRequestsSupplyRequestId;
};
type SupplyRequestsGetSupplyRequestDocumentsResponse = {
  readonly status: SupplyRequestsApiResponseStatusType;
  readonly result?: SupplyRequestsGetSupplyRequestDocumentsDTO;
};
type SupplyRequestsSupplyRequestDocumentDTO = {
  readonly type: SupplyRequestsSupplyRequestDocumentType;
  readonly url: SupplyRequestsUrl;
  readonly createdAt: string;
};
type SupplyRequestsSupplyRequestDocumentType =
  | "SUPPLY"
  | "ADDITIONAL_SUPPLY"
  | "VIRTUAL_DISTRIBUTION_CENTER_SUPPLY"
  | "TRANSFER"
  | "INBOUND_UTD"
  | "OUTBOUND_UTD"
  | "ADDITIONAL_SUPPLY_ACCEPTABLE_GOODS"
  | "ADDITIONAL_SUPPLY_UNACCEPTABLE_GOODS"
  | "VALIDATION_ERRORS"
  | "WITHDRAW"
  | "ACT_OF_WITHDRAW"
  | "ANOMALY_CONTAINERS_WITHDRAW_ACT"
  | "ACT_OF_WITHDRAW_FROM_STORAGE"
  | "ACT_OF_RECEPTION_TRANSFER"
  | "ACT_OF_DISCREPANCY"
  | "SECONDARY_RECEPTION_ACT"
  | "CARGO_UNITS"
  | "IDENTIFIERS"
  | "CIS_FACT"
  | "ITEMS_WITH_CISES"
  | "REPORT_OF_WITHDRAW_WITH_CISES"
  | "SECONDARY_ACCEPTANCE_CISES"
  | "RNPT_FACT";
type SupplyRequestsSupplyRequestId = number;
type SupplyRequestsUrl = string;

/**
 * Параметры метода «Получение документов по заявке на поставку, вывоз или утилизацию».
 *
 * Возвращает документы по заявке.
 *
 * POST /v2/campaigns/{campaignId}/supply-requests/documents
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetSupplyRequestDocumentsInput = {
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
  readonly body: SupplyRequestsGetSupplyRequestDocumentsRequest;
};
/**
 * Успешный ответ метода «Получение документов по заявке на поставку, вывоз или утилизацию».
 *
 * 200: Список документов и ссылки на них.
 */
export type GetSupplyRequestDocumentsResponse =
  SupplyRequestsGetSupplyRequestDocumentsResponse;
