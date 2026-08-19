// Generated public types for this Yandex Market endpoint.
type OrdersApiResponseStatusType = "OK" | "ERROR";
type OrdersParcelBoxDTO = {
  readonly id?: number;
  readonly fulfilmentId?: string;
};
type OrdersParcelBoxRequestDTO = { readonly fulfilmentId?: string };
type OrdersSetOrderShipmentBoxesRequest = {
  readonly boxes: readonly OrdersParcelBoxRequestDTO[];
};
type OrdersSetOrderShipmentBoxesResponse = {
  readonly status: OrdersApiResponseStatusType;
  readonly result?: OrdersShipmentBoxesDTO;
};
type OrdersShipmentBoxesDTO = { readonly boxes: readonly OrdersParcelBoxDTO[] };

/**
 * Параметры метода «Передача количества грузовых мест в заказе».
 *
 * Отгружаемый Маркету заказ может не влезть в одну коробку или упаковку — в этом случае получается, что он занимает несколько грузовых мест.
 *
 * Количество грузовых мест нужно обязательно передавать Маркету, если оно не равно 1. Это делается перед переводом его в статус **Готов к отгрузке**. Подробно о том, что в какой момент нужно передавать, рассказано в [пошаговой инструкции](../../step-by-step/fbs.md).
 *
 * Метод устроен немного нестандартно: количество задается длиной массива пустых объектов.
 *
 * Раньше метод требовал передачи большего количества данных. Запросы, оформленные по старому образцу, работают, но лучше делать по-новому.
 *
 * Как было раньше
 *
 * Структура тела PUT-запроса:
 *
 * ```text translate=no
 * {
 * "boxes":
 * [
 * {
 * "fulfilmentId": "{string}",
 * "weight": {int64},
 * "width": {int64},
 * "height": {int64},
 * "depth": {int64},
 * "items":
 * [
 * {
 * "id": {int64},
 * "count": {int32}
 * },
 * ...
 * ]
 * },
 * ...
 * ]
 * }
 * ```
 * | **Параметр** | **Тип** | **Значение** |
 * | ----------- | ----------- | ----------- |
 * | `boxes` | | Список грузовых мест. |
 *
 * **Параметры, вложенные в `boxes`**
 * | **Параметр** | **Тип** | **Значение** |
 * | ----------- | ----------- | ----------- |
 * | `fulfilmentId` | :no-translate[String] | Идентификатор грузового места в системе магазина. Сформируйте идентификатор по шаблону: `номер заказа на Маркете-номер грузового места`. Например, `7206821‑1, 7206821‑2` и т. д. |
 * | `weight` | :no-translate[Int64] | Масса брутто грузового места (суммарная масса упаковки и содержимого) в граммах. |
 * | `width` | :no-translate[Int64] | Ширина грузового места в сантиметрах. |
 * | `height` | :no-translate[Int64] | Высота грузового места в сантиметрах. |
 * | `depth` | :no-translate[Int64] | Глубина грузового места в сантиметрах. |
 * | `items` | :no-translate[Int64] | Список товаров в грузовом месте. |
 *
 * **Параметры, вложенные в `items`**
 * | **Параметр** | **Тип** | **Значение** |
 * | ----------- | ----------- | ----------- |
 * | `id` | :no-translate[Int64] | Идентификатор товара в рамках заказа. |
 * | `count` | :no-translate[Int32] | Количество единиц товара в грузовом месте. |
 *
 * PUT /v2/campaigns/{campaignId}/orders/{orderId}/delivery/shipments/{shipmentId}/boxes
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type SetOrderShipmentBoxesInput = {
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

    /**
     * { % note warning "Параметр больше не используется" % }
     *
     * Передайте любое число, чтобы получился корректный URL.
     *
     * { % endnote % }
     *
     * Идентификатор грузового места.
     *
     * Формат: `int64`.
     */
    readonly shipmentId: number;
  } /**
   * Тело запроса.
   */;
  readonly body: OrdersSetOrderShipmentBoxesRequest;
};
/**
 * Успешный ответ метода «Передача количества грузовых мест в заказе».
 *
 * 200: Имеет значение только тип ответа. Если ответ `ОК`, количество грузомест записано.
 */
export type SetOrderShipmentBoxesResponse = OrdersSetOrderShipmentBoxesResponse;
