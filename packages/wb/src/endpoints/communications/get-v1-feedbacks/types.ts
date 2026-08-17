// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Список отзывов».
 *
 * Метод возвращает список отзывов по заданным фильтрам. Вы можете:
 *  - получить данные обработанных и необработанных отзывов
 *  - сортировать отзывы по дате
 *  - настроить пагинацию и количество отзывов в ответе
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
 * GET /api/v1/feedbacks
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/communications
 */
export type GetV1FeedbacksInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * Обработан ли отзыв:
     *  - `true` — да
     *  - `false` — нет
     *
     * Пример: `false`.
     */
    readonly isAnswered: boolean;

    /**
     * Артикул WB
     *
     * Пример: `5870243`.
     */
    readonly nmId?: number;

    /**
     * Количество отзывов (max. 5 000)
     *
     * Пример: `1`.
     */
    readonly take: number;

    /**
     * Количество отзывов для пропуска (max. 199990)
     *
     * Пример: `0`.
     */
    readonly skip: number;

    /**
     * Сортировка отзывов по дате (dateAsc/dateDesc)
     */
    readonly order?: "dateAsc" | "dateDesc";

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
 * Успешный ответ метода «Список отзывов».
 *
 * 200: Успешно.
 */
export type GetV1FeedbacksResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data?: {
    /**
     * Количество необработанных отзывов
     */
    readonly countUnanswered?: number;

    /**
     * Количество обработанных отзывов
     */
    readonly countArchive?: number;

    /** Описание отсутствует в OpenAPI WB. */
    readonly feedbacks?: readonly {
      /**
       * ID отзыва
       */
      readonly id?: string;

      /**
       * Текст отзыва
       */
      readonly text?: string;

      /**
       * Достоинства товара
       */
      readonly pros?: string;

      /**
       * Недостатки товара
       */
      readonly cons?: string;

      /**
       * Оценка товара
       */
      readonly productValuation?: number;

      /**
       * Дата и время создания отзыва
       *
       * Формат: `date-time`.
       */
      readonly createdDate?: string;

      /**
       * Структура ответа
       */
      readonly answer?: {
        /**
         * Текст ответа
         */
        readonly text?: string;

        /**
         * Статус:
         *  - `none` — новый
         *  - `wbRu` — отображается на сайте
         *  - `reviewRequired` — ответ проходит проверку
         *  - `rejected` — ответ отклонён
         */
        readonly state?: string;

        /**
         * Можно ли отредактировать ответ:
         *  - `false` — нет
         *  - `true` — да
         */
        readonly editable?: boolean;
      } | null;

      /**
       * Статус отзыва:
       *  - `none` - не обработан (новый)
       *  - `wbRu` - обработан
       */
      readonly state?: string;

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
        readonly supplierArticle?: string | null;

        /**
         * Имя продавца
         */
        readonly supplierName?: string | null;

        /**
         * Бренд товара
         */
        readonly brandName?: string | null;

        /**
         * Размер товара (`techSize` в КТ)
         */
        readonly size?: string;
      };

      /**
       * Массив структур фотографий
       */
      readonly photoLinks?:
        | readonly {
            /**
             * Адрес фотографии полного размера
             */
            readonly fullSize?: string;

            /**
             * Адрес фотографии маленького размера
             */
            readonly miniSize?: string;
          }[]
        | null;

      /**
       * Структура видео
       */
      readonly video?: {
        /**
         * Ссылка на обложку видео
         */
        readonly previewImage?: string;

        /**
         * Ссылка на файл плейлиста видео (доступно по протоколу HLS)
         */
        readonly link?: string;

        /**
         * Общая продолжительность видео
         */
        readonly durationSec?: number;
      } | null;

      /**
       * Просмотрен ли отзыв
       */
      readonly wasViewed?: boolean;

      /**
       * Имя автора отзыва
       */
      readonly userName?: string;

      /**
       * Статус заказа.
       *
       * Возможные значения:
       * - `buyout` — выкуплен
       * - `rejected` — отказались
       * - `returned` — возврат
       * - `notSpecified` — статус не присвоен
       */
      readonly orderStatus?: string;

      /**
       * Соответствие заявленного размера реальному.
       *
       * Возможные значения:
       * - ` ` — для безразмерных товаров
       * - `ок` — соответствует размеру
       * - `smaller` — маломерит
       * - `bigger` — большемерит
       */
      readonly matchingSize?: string;

      /**
       * Доступна ли продавцу возможность оставить жалобу на отзыв (`true` — доступна, `false` — не доступна)
       */
      readonly isAbleSupplierFeedbackValuation?: boolean;

      /**
       * Ключ причины жалобы на отзыв
       */
      readonly supplierFeedbackValuation?: number;

      /**
       * Доступна ли продавцу возможность сообщить о проблеме с товаром:
       *  - `true` — да
       *  - `false` — нет
       */
      readonly isAbleSupplierProductValuation?: boolean;

      /**
       * Ключ проблемы с товаром
       */
      readonly supplierProductValuation?: number;

      /**
       * Опция возврата товара:
       *  - `true` — доступна
       *  - `false` — недоступна
       */
      readonly isAbleReturnProductOrders?: boolean;

      /**
       * Дата и время, когда на запрос возврата был получен ответ со статус-кодом 200.
       */
      readonly returnProductOrdersDate?: string | null;

      /**
       * Список тегов покупателя
       */
      readonly bables?: readonly string[] | null;

      /**
       * Штрихкод единицы товара
       */
      readonly lastOrderShkId?: number;

      /**
       * Дата покупки
       */
      readonly lastOrderCreatedAt?: string;

      /**
       * Цвет товара
       */
      readonly color?: string;

      /**
       * ID предмета
       */
      readonly subjectId?: number;

      /**
       * Название предмета
       */
      readonly subjectName?: string;

      /**
       * ID начального отзыва (`null`, если этот отзыв начальный)
       */
      readonly parentFeedbackId?: string | null;

      /**
       * ID дополненного отзыва (`null`, если этот отзыв дополненный)
       */
      readonly childFeedbackId?: string | null;
    }[];
  };

  /**
   * Есть ли ошибка
   */
  readonly error?: boolean;

  /**
   * Описание ошибки
   */
  readonly errorText?: string;

  /**
   * Дополнительные ошибки
   */
  readonly additionalErrors?: readonly string[] | null;
};
