// Generated public types for this Yandex Market endpoint.
type OrdersApiResponseStatusType = "OK" | "ERROR";
type OrdersBriefOrderItemDTO = {
  readonly id?: number;
  readonly vat?: OrdersOrderVatType;
  readonly count?: number;
  readonly price?: number;
  readonly offerName?: string;
  readonly offerId?: OrdersShopSku;
  readonly instances?: readonly OrdersOrderItemInstanceDTO[] | null;
};
type OrdersBriefOrderItemInstanceDTO = {
  readonly cis?: OrdersCis;
  readonly uin?: string;
  readonly rnpt?: string;
  readonly gtd?: string;
  readonly countryCode?: OrdersCountryCode;
};
type OrdersCis = string;
type OrdersCountryCode = string;
type OrdersOrderItemInstanceDTO = {
  readonly cis?: string;
  readonly cisFull?: string;
  readonly uin?: string;
  readonly rnpt?: string;
  readonly gtd?: string;
  readonly countryCode?: OrdersCountryCode;
};
type OrdersOrderItemInstanceModificationDTO = {
  readonly id: number;
  readonly instances: readonly OrdersBriefOrderItemInstanceDTO[];
};
type OrdersOrderItemsModificationResultDTO = {
  readonly items: readonly OrdersBriefOrderItemDTO[];
};
type OrdersOrderVatType =
  | "NO_VAT"
  | "VAT_0"
  | "VAT_10"
  | "VAT_10_110"
  | "VAT_20"
  | "VAT_20_120"
  | "VAT_18"
  | "VAT_18_118"
  | "VAT_12"
  | "VAT_05"
  | "VAT_07"
  | "VAT_22"
  | "UNKNOWN_VALUE";
type OrdersProvideOrderItemIdentifiersRequest = {
  readonly items: readonly OrdersOrderItemInstanceModificationDTO[];
};
type OrdersProvideOrderItemIdentifiersResponse = {
  readonly status: OrdersApiResponseStatusType;
  readonly result?: OrdersOrderItemsModificationResultDTO;
};
type OrdersShopSku = string;

/**
 * Параметры метода «Передача кодов маркировки единиц товара».
 *
 * Если вы работаете по модели FBS
 *
 * Используйте метод [PUT v2/campaigns/{campaignId}/orders/{orderId}/boxes](../../reference/orders/setOrderBoxLayout.md).
 *
 * Передает Маркету коды маркировки для единиц товара в указанном заказе. Подробнее о работе с маркируемыми товарами читайте в [Справке продавца на Маркете](https://yandex.ru/support/marketplace/orders/cz.html).
 *
 * Маркировка товаров в системе [«Честный ЗНАК»](https://честныйзнак.рф/) **необязательна** для заказов от физических лиц, но **обязательна** для заказов от бизнеса.
 *
 * Для модели DBS коды маркировки в системе [«Честный ЗНАК»](https://честныйзнак.рф/) не проверяются в ГИС МТ — проверка выполняется только для моделей FBS и Экспресс.
 *
 * Принимаются коды следующих типов:
 *
 * * Коды в системе [«Честный ЗНАК»](https://честныйзнак.рф/) или [«ASL BELGISI»](https://aslbelgisi.uz) (для продавцов :no-translate[Market Yandex Go]).
 * * УИН для ювелирных изделий.
 * * РНПТ и ГТД для импортных прослеживаемых товаров.
 *
 * Для каждой позиции в заказе, требующей маркировки, нужно передать список кодов — по одному для каждой единицы товара. Например, если в заказе две пары тапочек и одна пара туфель, получится список из двух кодов для первой позиции и список из одного кода для второй.
 *
 * PUT /v2/campaigns/{campaignId}/orders/{orderId}/identifiers
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type ProvideOrderItemIdentifiersInput = {
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
  } /**
   * Тело запроса.
   */;
  readonly body: OrdersProvideOrderItemIdentifiersRequest;
};
/**
 * Успешный ответ метода «Передача кодов маркировки единиц товара».
 *
 * 200: Ответ `200` обозначает, что коды успешно записались. Ответ содержит краткие сведения о промаркированных товарах.
 */
export type ProvideOrderItemIdentifiersResponse =
  OrdersProvideOrderItemIdentifiersResponse;
