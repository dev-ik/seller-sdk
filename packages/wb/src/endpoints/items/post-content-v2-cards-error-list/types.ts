// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Список несозданных карточек товаров с ошибками».
 *
 * Метод возвращает список карточек товаров ([черновиков](https://seller.wildberries.ru/new-goods/error-cards)), при создании или редактировании которых произошли ошибки, с описанием этих ошибок.
 *
 * Данные в ответе возвращаются пакетами `batch`. Один пакет содержит:
 *  - все ошибки по одному массиву `variants` одного запроса при [создании](/openapi/work-with-products#tag/listingItems/paths/~1content~1v2~1cards~1upload/post) карточек товаров
 *  - все ошибки одного запроса при [создании с присоединением](/openapi/work-with-products#tag/listingItems/paths/~1content~1v2~1cards~1upload~1add/post) или [редактировании](/openapi/work-with-products#tag/listings/paths/~1content~1v2~1cards~1update/post) карточек товаров
 *
 * Чтобы получить более 100 пакетов, используйте пагинацию:
 *  1. Сделайте первый запрос:
 *
 *
 *  {
 *  "cursor": {
 *  "limit": 100
 *  },
 *  "order": {
 *  "ascending": true
 *  }
 *  }
 *  2. Скопируйте `"updatedAt":"***","batchUUID":"***" `из `cursor` ответа и вставьте в `cursor` запроса.
 *  3. Повторите запрос.
 *  4. Повторяйте пункты 2 и 3, пока не получите в ответе `"next":false`. Это будет означать, что вы получили все пакеты.
 *
 *  Чтобы удалить карточку товара из списка, сделайте ещё один запрос на создание, создание с присоединением или редактирование карточки товара с исправленными ошибками
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов:
 *
 *  получения лимитов карточек товаров (/openapi/work-with-products#tag/listingItems/paths/~1content~1v2~1cards~1limits/get)
 *  получения несозданных карточек товаров с ошибками (/openapi/work-with-products#tag/listings/paths/~1content~1v2~1cards~1error~1list/post)
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 10 запросов | 6 сек | 5 запросов |
 *
 * POST /content/v2/cards/error/list
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type PostContentV2CardsErrorListInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query?: {
    /**
     * Язык названий предметов:
     *  - `ru` — русский
     *  - `en` — английский
     *  - `zh` — китайский
     *
     * Не используется в песочнице
     *
     * Пример: `"en"`.
     */
    readonly locale?: string;
  } /**
   * Тело запроса.
   */;
  readonly body: {
    /** Описание отсутствует в OpenAPI WB. */
    readonly cursor?: {
      /**
       * Количество пакетов в ответе
       *
       * Формат: `int`.
       *
       * Значение по умолчанию: `100`.
       *
       * Максимальное значение: 100.
       */
      readonly limit?: number;

      /**
       * Дата и время формирования последнего пакета в ответе на предыдущий запрос
       *
       * Формат: `date-time`.
       */
      readonly updatedAt?: string;

      /**
       * ID последнего пакета в ответе на предыдущий запрос
       *
       * Формат: `UUID`.
       */
      readonly batchUUID?: string;
    };

    /** Описание отсутствует в OpenAPI WB. */
    readonly order?: {
      /**
       * - `false` — сортировка по убыванию
       * - `true` — сортировка по возрастанию
       *
       * Значение по умолчанию: `true`.
       */
      readonly ascending?: boolean;
    };
  };
};
/**
 * Успешный ответ метода «Список несозданных карточек товаров с ошибками».
 *
 * 200: Успешно.
 */
export type PostContentV2CardsErrorListResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data: {
    /**
     * Пакеты данных
     */
    readonly items: readonly {
      /**
       * ID пакета
       *
       * Формат: `UUID`.
       */
      readonly batchUUID: string;

      /**
       * Предметы. Разбивка по `vendorCodes`
       */
      readonly subjects: Readonly<
        Record<
          string,
          {
            /**
             * ID предмета
             *
             * Формат: `uint64`.
             */
            readonly id: number;

            /**
             * Название предмета
             */
            readonly name: string;
          }
        >
      >;

      /**
       * Бренды. Разбивка по `vendorCodes`
       */
      readonly brands: Readonly<
        Record<
          string,
          {
            /**
             * ID бренда
             *
             * Формат: `uint64`.
             */
            readonly id?: number;

            /**
             * Бренд
             */
            readonly name?: string;
          }
        >
      >;

      /**
       * Артикулы продавца
       */
      readonly vendorCodes: readonly string[];

      /**
       * Ошибки. Разбивка по `vendorCodes`
       */
      readonly errors: Readonly<Record<string, readonly string[]>>;

      /**
       * Дата и время создания или редактирования пакета
       *
       * Формат: `date-time`.
       */
      readonly updatedAt: string;
    }[];

    /** Описание отсутствует в OpenAPI WB. */
    readonly cursor: {
      /**
       * Есть ли ещё черновики:
       *  - `false` — нет
       *  - `true` — да
       */
      readonly next: boolean;

      /**
       * Дата и время формирования последнего пакета в ответе
       *
       * Формат: `date-time`.
       */
      readonly updatedAt: string;

      /**
       * ID последнего пакета в ответе
       *
       * Формат: `UUID`.
       */
      readonly batchUUID: string;
    };
  };

  /**
   * Флаг ошибки
   */
  readonly error: boolean;

  /**
   * Описание ошибки
   */
  readonly errorText: string;

  /**
   * Дополнительные ошибки
   */
  readonly additionalErrors: Readonly<Record<string, never>> | null;
};
