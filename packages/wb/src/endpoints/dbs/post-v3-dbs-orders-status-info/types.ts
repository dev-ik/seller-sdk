// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить статусы сборочных заданий».
 *
 * Метод возвращает статусы [сборочных заданий](/openapi/orders-dbs#tag/dbsAssemblyOrders) по их ID.
 *
 * `supplierStatus` — статус сборочного задания. Триггер его изменения — действие самого продавца.
 *
 * Возможные значения `supplierStatus`:
 * | Статус | Описание | Как перевести сборочное задание в данный статус |
 * | ------- | --------- | --------------------------------------|
 * | `new` | **Новое сборочное задание** | |
 * | `confirm` | **На сборке** | [Перевести сборочное задание на сборку](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusConfirm)
 * | `deliver` | **В доставке** | [Перевести сборочное задание в доставку](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusDeliver)
 * | `receive` | **Получено покупателем** | [Сообщить, что заказ принят покупателем](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusReceive)
 *
 * | `reject` | **Отказ покупателя при получении** | [Сообщить, что покупатель отказался от заказа](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusReject)
 * | `cancel` | **Отменено продавцом** | [Отменить сборочное задание](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusCancel)
 * | `cancel_missed_call` | **Отмена по причине недозвона** | Статус меняется автоматически |
 *
 * `wbStatus` — статус системы Wildberries.
 *
 * Возможные значения `wbStatus`:
 * - `waiting` — сборочное задание в работе
 * - `sold` — заказ получен покупателем
 * - `canceled` — отмена сборочного задания
 * - `canceled_by_client` — покупатель отменил заказ при получении
 * - `declined_by_client` — покупатель отменил заказ в первый чаc
 *
 *  Отмена доступна покупателю в первый час с момента заказа, если заказ не переведен на сборку
 * - `defect` — отмена заказа по причине брака
 * - `ready_for_pickup` — заказ прибыл на ПВЗ
 * - `canceled_by_missed_call` — отмена по причине недозвона
 *
 * Лимит запросов (/docs/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий DBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/marketplace/v3/dbs/orders/status/info
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/dbs
 */
export type PostV3DbsOrdersStatusInfoInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Список ID сборочных заданий
     *
     * Пример: `[123456,234567]`.
     *
     * Максимальное количество элементов: 1000.
     */
    readonly ordersIds: readonly number[];
  };
};
/**
 * Успешный ответ метода «Получить статусы сборочных заданий».
 *
 * 200: Успешно.
 */
export type PostV3DbsOrdersStatusInfoResponse = {
  /**
   * Информация о статусах
   */
  readonly orders?: readonly {
    /**
     * Информация об ошибке
     */
    readonly errors?: readonly {
      /**
       * Код ошибки:
       *  - `404`
       *  - `409`
       *  - `400`
       *
       * Пример: `404`.
       */
      readonly code?: number;

      /**
       * - `NotFound` — сборочное задание не найдено
       * - `StatusMismatch` — операция невозможна для этого статуса сборочного задания
       * - `ImeiIsNotFilled` — не заполнен IMEI
       * - `OrderNotB2B` — операция доступна только для сборочных заданий с признаком B2B-продажи `"isB2b":true`
       * - `InvalidOriginCountryCode` — некорректный код страны происхождения товара
       *
       * Пример: `"NotFound"`.
       */
      readonly detail?: string;
    }[];

    /**
     * ID сборочного задания
     *
     * Пример: `123456`.
     */
    readonly orderId?: number;

    /**
     * Статус сборочного задания, установленный продавцом
     *
     * Пример: `"deliver"`.
     */
    readonly supplierStatus?: string;

    /**
     * Статус сборочного задания в системе Wildberries
     *
     * Пример: `"waiting"`.
     */
    readonly wbStatus?: string;
  }[];
};
