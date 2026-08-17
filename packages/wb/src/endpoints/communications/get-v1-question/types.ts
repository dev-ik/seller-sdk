// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить вопрос по ID».
 *
 * Метод возвращает данные [вопроса](/openapi/user-communication#tag/questions/operation/getV1Questions) по его ID. Далее вы можете [работать с этим вопросом](/openapi/user-communication#tag/questions/operation/patchV1Questions).
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
 * GET /api/v1/question
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/communications
 */
export type GetV1QuestionInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * ID вопроса
     *
     * Пример: `"ljAVapEBL38RyMdRln61"`.
     */
    readonly id: string;
  };
};
/**
 * Успешный ответ метода «Получить вопрос по ID».
 *
 * 200: Успешно.
 */
export type GetV1QuestionResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data?: {
    /**
     * ID вопроса
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
     *  - `none` - вопрос отклонён продавцом (такой вопрос не отображается на портале покупателей)
     *  - `wbRu` - ответ предоставлен, вопрос отображается на сайте покупателей
     *  - `suppliersPortalSynch` - новый вопрос
     */
    readonly state?: string;

    /**
     * Ответ
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
     * Item information
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
   *
   * Пример: `null`.
   */
  readonly additionalErrors?: readonly string[] | null;
};
