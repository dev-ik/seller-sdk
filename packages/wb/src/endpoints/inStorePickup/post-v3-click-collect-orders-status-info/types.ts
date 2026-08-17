// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить статусы сборочных заданий».
 *
 * Метод возвращает статусы [сборочных заданий](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders) по их ID.
 *
 * `supplierStatus` — статус сборочного задания. Триггер его изменения - действие самого продавца.
 *
 * Возможные значения `supplierStatus`:
 * | Статус | Описание | Как перевести сборочное задание в данный статус |
 * | ------- | --------- | --------------------------------------|
 * | `new` | **Новое сборочное задание** |
 * | `confirm` | **На сборке** | [Перевести сборочное задание на сборку](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusConfirm)
 * | `prepare` | **Готов к выдаче** | [Сообщить, что сборочное задание готово к выдаче](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusPrepare)
 * | `receive` | **Получено покупателем** | [Сообщить, что заказ принят покупателем](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusReceive)
 * | `reject` | **Отказ покупателя при получении** | [Сообщить, что покупатель отказался от заказа](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusReject)
 * | `cancel` | **Отменено продавцом** | [Отменить сборочное задание](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusCancel)
 * | `cancel_shelf_life` | **Отмена по истечении срока хранения** | Переводится автоматически по возникновению события
 *
 * `wbStatus` — статус системы Wildberries.
 *
 * Возможные значения `wbStatus`:
 * - `waiting` - сборочное задание в работе
 * - `sold` - заказ получен покупателем
 * - `canceled` - отмена сборочного задания
 * - `canceled_by_client` - покупатель отменил заказ при получении
 * - `declined_by_client` - покупатель отменил заказ в первый чаc
 *
 *  Отмена доступна покупателю в первый час с момента заказа, если заказ не переведён на сборку
 * - `defect` - отмена заказа по причине брака
 * - `ready_for_pickup` - заказ готов к выдаче
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 сек | 1 запрос | 1 сек | 10 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/marketplace/v3/click-collect/orders/status/info
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/in-store-pickup
 */
export type PostV3ClickCollectOrdersStatusInfoInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Список ID сборочных заданий
     *
     * Пример: `[123456,234567,345678]`.
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
export type PostV3ClickCollectOrdersStatusInfoResponse = {
  /**
   * Информация о статусах
   */
  readonly orders?: readonly {
    /**
     * Информация об ошибке
     */
    readonly errors?: readonly {
      /**
       * Код ошибки
       *
       * Пример: `404`.
       */
      readonly code: number;

      /**
       * - `NotFound` — сборочное задание не найдено
       *
       * Пример: `"NotFound"`.
       */
      readonly detail: string;
    }[];

    /**
     * ID сборочного задания
     */
    readonly orderId: number;

    /**
     * Статус сборочного задания, установленный продавцом
     */
    readonly supplierStatus?: string;

    /**
     * Статус сборочного задания в системе Wildberries
     */
    readonly wbStatus?: string;
  }[];
};
