// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Список вопросов».
 *
 * Метод возвращает список вопросов по заданным фильтрам. Вы можете:
 *  - получить данные отвеченных и неотвеченных вопросов
 *  - сортировать вопросы по дате
 *  - настроить пагинацию и количество вопросов в ответе
 *
 *  Можно получить максимум 10 000 вопросов в одном ответе
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Вопросы и отзывы:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
 * | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
 * | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
 * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
 *
 * GET /api/v1/questions
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/communications
 */
export type GetV1QuestionsInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * Есть ли ответ на вопрос:
     *  - `true` — да
     *  - `false` — нет
     */
    readonly isAnswered: boolean;

    /**
     * Артикул WB
     */
    readonly nmId?: number;

    /**
     * Количество запрашиваемых вопросов (максимально допустимое значение для параметра - 10 000,
     * при этом сумма значений параметров `take` и `skip` не должна превышать 10 000)
     */
    readonly take: number;

    /**
     * Количество вопросов для пропуска (максимально допустимое значение для параметра - 10 000,
     * при этом сумма значений параметров `take` и `skip` не должна превышать 10 000)
     */
    readonly skip: number;

    /**
     * Сортировка вопросов по дате (`dateAsc`/`dateDesc`)
     */
    readonly order?: string;

    /**
     * Дата начала периода в формате Unix timestamp
     *
     * Пример: `1688465092`.
     */
    readonly dateFrom?: number;

    /**
     * Дата конца периода в формате Unix timestamp
     *
     * Пример: `1688465092`.
     */
    readonly dateTo?: number;
  };
};
/**
 * Успешный ответ метода «Список вопросов».
 *
 * 200: Успешно.
 */
export type GetV1QuestionsResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data?: {
    /**
     * Количество неотвеченных вопросов
     */
    readonly countUnanswered?: number;

    /**
     * Количество отвеченных вопросов
     */
    readonly countArchive?: number;

    /**
     * Вопросы
     */
    readonly questions?: readonly {
      /**
       * id вопроса
       */
      readonly id?: string;

      /**
       * Текст вопроса
       */
      readonly text?: string;

      /**
       * Дата и время создания вопроса
       *
       * Формат: `date-time`.
       */
      readonly createdDate?: string;

      /**
       * Статус вопроса:
       *  - `none` — вопрос отклонён продавцом (такой вопрос не отображается на портале покупателей)
       *  - `wbRu` — ответ предоставлен, вопрос отображается на сайте покупателей
       *  - `suppliersPortalSynch` - новый вопрос
       */
      readonly state?: string;

      /**
       * Структура ответа
       */
      readonly answer?: {
        /**
         * Текст ответа
         */
        readonly text?: string;

        /**
         * Можно ли отредактировать ответ (`false` - нельзя, `true` - можно)
         */
        readonly editable?: boolean;

        /**
         * Дата и время создания ответа
         *
         * Формат: `date-time`.
         */
        readonly createDate?: string;
      } | null;

      /**
       * Информация о товаре
       */
      readonly productDetails?: {
        /**
         * Артикул WB
         */
        readonly nmId?: number;

        /**
         * ID для [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров
         */
        readonly imtId?: number;

        /**
         * Название товара
         */
        readonly productName?: string;

        /**
         * Артикул продавца
         */
        readonly supplierArticle?: string;

        /**
         * Имя продавца
         */
        readonly supplierName?: string;

        /**
         * Название бренда
         */
        readonly brandName?: string;
      };

      /**
       * Просмотрен ли вопрос
       */
      readonly wasViewed?: boolean;

      /**
       * Признак подозрительного вопроса.
       *
       * Если `true`, то вопрос опубликован, но на портале продавцов вы увидите баннер **Сообщение подозрительное**
       */
      readonly isWarned?: boolean;
    }[];
  };

  /**
   * Есть ли ошибка
   *
   * Пример: `false`.
   */
  readonly error?: boolean;

  /**
   * Описание ошибки
   *
   * Пример: `""`.
   */
  readonly errorText?: string;

  /**
   * Дополнительные ошибки
   */
  readonly additionalErrors?: readonly string[] | null;
};
