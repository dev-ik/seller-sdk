// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить статусы сборочных заданий».
 *
 * Метод возвращает статусы [сборочных заданий](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders/get) по их ID.
 *
 * `supplierStatus` — статус сборочного задания. Триггер его изменения — действие самого продавца.
 *
 * Возможные значения `supplierStatus`:
 *
 * | Статус | Описание | Как перевести сборочное задание в данный статус |
 * |-------|----------------------|--------------------------------------|
 * | `new` | **Новое сборочное задание** | |
 * | `confirm` | **На сборке** |[Добавить сборочное задание к поставке](/openapi/orders-fbs#tag/Postavki-FBS/paths/~1api~1marketplace~1v3~1supplies~1%7BsupplyId%7D~1orders/patch)
 * | `complete` | **В доставке** | [Передать поставку в доставку](/openapi/orders-fbs#tag/Postavki-FBS/paths/~1api~1v3~1supplies~1%7BsupplyId%7D~1deliver/patch) |
 * | `cancel` | **Отменено продавцом** | [Отменить сборочное задание](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1%7BorderId%7D~1cancel/patch)|
 * | `cancel_carrier` | **Отменено перевозчиком**
 * Только для трансграничных поставок | Переводится перевозчиком |
 *
 * `wbStatus` — статус системы Wildberries.
 *
 * Возможные значения `wbStatus`:
 * - `waiting` — сборочное задание в работе
 * - `sorted` — сборочное задание отсортировано
 * - `sold` — заказ получен покупателем
 * - `canceled` — отмена сборочного задания
 * - `canceled_by_client` — покупатель отменил заказ при получении
 * - `declined_by_client` — покупатель отменил заказ. Отмена доступна покупателю в первый час с момента заказа, если заказ не переведён на сборку
 * - `defect` — отмена заказа по причине брака
 * - `ready_for_pickup` — заказ прибыл на пункт выдачи заказов (ПВЗ)
 * - `accepted_by_carrier` — продавец передал заказ в службу доставки в своей стране
 * - `sent_to_carrier` — заказ отправлен на склад службы доставки в стране продавца
 * - `canceled_by_carrier` — заказ отменён перевозчиком. Только для трансграничных поставок
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/v3/orders/status
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type PostApiV3OrdersStatusInput = {
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
export type PostApiV3OrdersStatusResponse = {
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
     * Доступна ли [отмена](./orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1%7BorderId%7D~1cancel/patch) сборочного задания:
     * - `false` — недоступна
     * - `true` — доступна
     *
     * Пример: `false`.
     */
    readonly isCancellable?: boolean;

    /**
     * Статус сборочного задания, установленный продавцом
     *
     * Пример: `"new"`.
     */
    readonly supplierStatus?: "new" | "confirm" | "complete" | "cancel";

    /**
     * Статус сборочного задания в системе Wildberries
     */
    readonly wbStatus?:
      | "waiting"
      | "sorted"
      | "sold"
      | "canceled"
      | "canceled_by_client"
      | "declined_by_client"
      | "defect"
      | "ready_for_pickup"
      | "postponed_delivery"
      | "accepted_by_carrier"
      | "sent_to_carrier";
  }[];
};
