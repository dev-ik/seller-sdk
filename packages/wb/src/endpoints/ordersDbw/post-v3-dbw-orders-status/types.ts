// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить статусы сборочных заданий».
 *
 * Метод возвращает статусы сборочных заданий по их ID.
 *
 * `supplierStatus` — статус сборочного задания.
 * Триггер его изменения — действие самого продавца.
 *
 * Возможные значения `supplierStatus`:
 * | Статус | Описание | Как перевести сборочное задание в данный статус |
 * | ------- | --------- | --------------------------------------|
 * | `new` | **Новое сборочное задание** | |
 * | `confirm` | **На сборке** | [Перевести сборочное задание на сборку](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/patchV3DbwOrdersOrderIdConfirm)
 * | `complete` | **В доставке** | [Перевести сборочное задание в доставку](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/postV3DbwOrdersStatusDeliver) |
 * | `receive` | **Получено покупателем**| Переводится курьером
 * | `reject` | **Отказ покупателя при получении**| Переводится курьером
 * | `cancel` | **Отменено продавцом** | [Отменить сборочное задание](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/patchV3DbwOrdersOrderIdCancel)
 * | `cancel_missed_call` | **Отмена по причине недозвона**
 *  | Статус меняется автоматически |
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
 * Отмена доступна покупателю в первый час с момента заказа, если заказ не переведен на сборку
 * - `defect` — отмена заказа по причине брака
 * - `canceled_by_missed_call` — отмена заказа по причине недозвона
 * - `postponed_delivery` — курьерская доставка отложена
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для следующих методов DBW:
 *
 *  получение и обновление списка контактов
 *  получение и удаление идентификаторов маркировки
 *  методы сборочных заданий
 *
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/v3/dbw/orders/status
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-dbw
 */
export type PostV3DbwOrdersStatusInput = {
  /**
   * Тело запроса.
   */
  readonly body?: {
    /**
     * Список ID сборочных заданий
     *
     * Минимальное количество элементов: 1.
     *
     * Максимальное количество элементов: 1000.
     */
    readonly orders: readonly number[];
  };
};
/**
 * Успешный ответ метода «Получить статусы сборочных заданий».
 *
 * 200: Успешно.
 */
export type PostV3DbwOrdersStatusResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly orders?: readonly {
    /**
     * ID сборочного задания
     *
     * Формат: `int64`.
     *
     * Пример: `5632423`.
     */
    readonly id?: number;

    /**
     * Статус сборочного задания, установленный продавцом
     *
     * Пример: `"new"`.
     */
    readonly supplierStatus?: string;

    /**
     * Статус сборочного задания в системе Wildberries
     */
    readonly wbStatus?: string;
  }[];
};
