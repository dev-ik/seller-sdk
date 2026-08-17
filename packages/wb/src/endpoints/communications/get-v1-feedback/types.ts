// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить отзыв по ID».
 *
 * Метод возвращает данные [отзыва](/openapi/user-communication#tag/feedbacks/operation/getV1Feedbacks) по его ID.
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
 * GET /api/v1/feedback
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/communications
 */
export type GetV1FeedbackInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * ID отзыва
     *
     * Пример: `"G7Y9Y1kBAtKOitoBT_lV"`.
     */
    readonly id: string;
  };
};
/**
 * Успешный ответ метода «Получить отзыв по ID».
 *
 * 200: Успешно.
 */
export type GetV1FeedbackResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data?: {
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
     * Соответствие заявленного размера реальному.
     *
     * Возможные значения:
     * - ` ` - для безразмерных товаров
     * - `ок` - соответствует размеру
     * - `smaller` - маломерит
     * - `bigger` - большемерит
     */
    readonly matchingSize?: string;

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
       *  - `wbRu`— отображается на сайте
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
     * Структура видео
     */
    readonly video?: {
      /**
       * Ссылка на обложку видео
       */
      readonly previewImage?: string;

      /**
       * Ссылка на файл плейлиста видео (доступно по протоколу hls)
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
     * Доступна ли продавцу возможность оставить жалобу на отзыв:
     *  - `true`— да
     *  - `false` — нет
     */
    readonly isAbleSupplierFeedbackValuation?: boolean;

    /**
     * Ключ причины жалобы на отзыв
     */
    readonly supplierFeedbackValuation?: number;

    /**
     * Доступна ли продавцу возможность сообщить о проблеме с товаром (`true` - доступна, `false` - не доступна)
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
