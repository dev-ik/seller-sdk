// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Установить рекомендации для товаров».
 *
 * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
 *  Персональному токену,
 *  Сервисному токену
 *
 * Метод обновляет, добавляет или удаляет [рекомендации](https://seller.wildberries.ru/recommendations-v3) для товаров.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 100 запросов | 600 мс | 5 запросов |
 *
 * POST /api/content/v1/recommendations/set
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type PostV1RecommendationsSetInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Список рекомендаций для товаров
     *
     * Минимальное количество элементов: 1.
     *
     * Максимальное количество элементов: 5000.
     */
    readonly recList: readonly {
      /**
       * Артикул WB
       *
       * Пример: `5870243`.
       *
       * Значение по умолчанию: `0`.
       */
      readonly nmId?: number;

      /**
       * Рекомендуемые товары.
       *
       * Укажите `recomNm` товаров, чтобы добавить их в рекомендации к указанному `nmId`.
       *
       * При отправке пустого массива `[]` все текущие рекомендации для указанного `nmId` будут удалены.
       *
       * Минимальное количество элементов: 0.
       *
       * Максимальное количество элементов: 20.
       */
      readonly recommendations?: readonly {
        /**
         * Артикул WB рекомендуемого товара
         *
         * Пример: `5870244`.
         *
         * Значение по умолчанию: `0`.
         */
        readonly recomNm?: number;

        /**
         * Позиция товара в списке рекомендаций.
         *
         *  Допустимые значения:
         *  - `1`–`20` — фиксированная позиция:
         *  - при создании или замене (`replace: true`) задаёт порядок отображения
         *  - при добавлении (`replace: false`) вставляет товар на указанную позицию, существующие сдвигаются
         *  - `0` — автоматическая сортировка товаров:
         *  - при создании или замене (`replace: true`) — в порядке расположения товаров в массиве `recommendations`
         *  - при добавлении (`replace: false`) — в конец списка существующих рекомендаций, сохраняя порядок из массива `recommendations`
         *
         * Пример: `1`.
         *
         * Значение по умолчанию: `20`.
         *
         * Минимальное значение: 0.
         *
         * Максимальное значение: 20.
         */
        readonly sort?: number;
      }[];
    }[];

    /**
     * Действие в запросе:
     *  - `false` — добавить новые рекомендации к существующим
     *  - `true` — заменить существующие рекомендации новыми
     *
     * Пример: `true`.
     *
     * Значение по умолчанию: `false`.
     */
    readonly replace?: boolean;
  };
};
/**
 * Успешный ответ метода «Установить рекомендации для товаров».
 *
 * 200: Успешно.
 *
 * 208: Уже отправлено.
 */
export type PostV1RecommendationsSetResponse =
  | {
      /**
       * Есть ли ошибки:
       *  - `false` — ошибок нет. Запрос полностью успешен
       *  - `true` — ошибки есть
       *
       * Пример: `true`.
       */
      readonly isError: boolean;

      /**
       * Ошибки. При `"isError":true`
       */
      readonly errors?: readonly {
        /**
         * Значение параметра `nmId`
         *
         * Пример: `"5870243"`.
         */
        readonly mainNm: string;

        /**
         * Значение параметра `recomNm`
         *
         * Пример: `"5870244"`.
         */
        readonly recomNm: string;

        /**
         * Сообщение об ошибке
         *
         * Пример: `"The item has no photo"`.
         */
        readonly message: string;
      }[];
    }
  | {
      /**
       * ID запроса
       *
       * Пример: `"a03341a9-7b2c-41fd-9902-12a2705f0d24"`.
       */
      readonly requestId: string;

      /**
       * ID внутреннего сервиса WB
       *
       * Пример: `"recoms"`.
       */
      readonly origin: string;

      /**
       * Заголовок ответа
       *
       * Пример: `"Already Reported"`.
       */
      readonly title: string;

      /**
       * Детали ответа
       *
       * Пример: `"Recommendations already set"`.
       */
      readonly detail: string;
    };
