// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Информация о медиакампании».
 *
 * Метод возвращает информацию о кампании [WB Медиа](https://cmp.wildberries.ru/cmpf/list). Вместо карточек товаров в медиакампаниях продвигаются рекламные баннеры продавца на сайте и в приложении WB.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 сек | 10 запросов | 100 мс | 10 запросов |
 * | Сервисный | 1 сек | 10 запросов | 100 мс | 10 запросов |
 * | Базовый с секретом | 1 сек | 10 запросов | 100 мс | 10 запросов |
 * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
 *
 * GET /adv/v1/advert
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type GetV1AdvertInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * ID медиакампании
     *
     * Пример: `23569`.
     */
    readonly id: number;
  };
};
/**
 * Успешный ответ метода «Информация о медиакампании».
 *
 * 200: Успешно.
 *
 * 204: Медиакампания не найдена.
 */
export type GetV1AdvertResponse =
  | {
      /**
       * ID медиакампании
       */
      readonly advertId?: number;

      /**
       * Название медиакампании
       */
      readonly name?: string;

      /**
       * Название бренда
       */
      readonly brand?: string;

      /**
       * Тип медиакампании:
       * - `1` — размещение по дням
       * - `2` — размещение по просмотрам
       */
      readonly type?: number;

      /**
       * Статус медиакампании:
       *  - `1` — черновик
       *  - `2` — модерация
       *  - `3` — отклонена (с возможностью вернуть на модерацию)
       *  - `4` — готова к запуску
       *  - `5` — запланирована
       *  - `6` — на показах
       *  - `7` — завершена
       *  - `8` — отменена
       *  - `9` — приостановлена продавцом
       *  - `10` — пауза по дневному лимиту
       *  - `11` — пауза
       */
      readonly status?: number;

      /**
       * Время создания медиакампании
       *
       * Формат: `date-time`.
       */
      readonly createTime?: string;

      /** Описание отсутствует в OpenAPI WB. */
      readonly extended?: {
        /**
         * Комментарий модератора
         */
        readonly reason?: string | null;

        /**
         * Затраты
         */
        readonly expenses?: number;

        /**
         * Дата и время начала показа медиакампании
         *
         * Формат: `date-time`.
         */
        readonly from?: string;

        /**
         * Дата и время окончания показа медиакампании
         *
         * Формат: `date-time`.
         */
        readonly to?: string;

        /**
         * Дата и время изменения кампании
         *
         * Формат: `date-time`.
         */
        readonly updated_at?: string;

        /**
         * Стоимость размещения по дням для типа `1`
         */
        readonly price?: number;

        /**
         * Остаток бюджета для типа `2`
         */
        readonly budget?: number;

        /**
         * Источник списания:
         *  - `1` — баланс
         *  - `2` — счёт
         */
        readonly operation?: number;

        /**
         * ID контракта, для продавцов на контракте
         */
        readonly contract_id?: number;
      };

      /**
       * Информация о баннере.
       *
       * Наличие в ответе тех или иных полей зависит от конфигурации медиакампании.
       */
      readonly items?: readonly {
        /**
         * ID баннера
         */
        readonly id?: number;

        /**
         * Бренд
         */
        readonly name?: string;

        /**
         * Статус (такой же как у медиакампании)
         */
        readonly status?: number;

        /**
         * Позиция на странице размещения
         */
        readonly place?: number;

        /**
         * Бюджет
         */
        readonly budget?: number;

        /**
         * Дневной лимит (для баннеров по показам)
         */
        readonly daily_limit?: number;

        /**
         * Название категории размещения
         */
        readonly category_name?: string;

        /**
         * Ставка
         */
        readonly cpm?: number;

        /**
         * URL страницы, на которую попадает пользователь при клике по баннеру
         */
        readonly url?: string;

        /**
         * Тип продвижения:
         * - `1` — баннер
         * - `2` — всплывающее меню
         * - `3` — почтовая рассылка
         * - `4` — социальные сети
         * - `5` — push-уведомления в мобильном приложении
         */
        readonly advert_type?: number;

        /**
         * Дата создания баннера
         *
         * Формат: `date-time`.
         */
        readonly created_at?: string;

        /**
         * Дата и время обновления баннера
         *
         * Формат: `date-time`.
         */
        readonly updated_at?: string;

        /**
         * Дата начала работы баннера
         *
         * Формат: `date-time`.
         */
        readonly date_from?: string;

        /**
         * Дата завершения работы баннера
         *
         * Формат: `date-time`.
         */
        readonly date_to?: string;

        /**
         * Подборка артикулов WB
         */
        readonly nms?: readonly number[];

        /**
         * Текст под плашкой баннера
         */
        readonly bottomText1?: string;

        /**
         * 2-я строка с текстом под плашкой баннера
         */
        readonly bottomText2?: string;

        /**
         * Текст push-уведомления или рассылки
         */
        readonly message?: string;

        /**
         * Дополнительные настройки.
         *
         * Формат почтовой рассылки:
         * - `1` — общий
         * - `2` — частичный
         * - `3` — уникальный
         *
         * Социальная сеть:
         * - `1` — VK
         * - `2` — OK (Одноклассники)
         */
        readonly additionalSettings?: number;

        /**
         * Кол-во получателей push-уведомлений
         */
        readonly receiversCount?: number;

        /**
         * ID родительской категории товара
         */
        readonly subject_id?: number;

        /**
         * Название родительской категории товара
         */
        readonly subject_name?: string;

        /**
         * Название акции
         */
        readonly action_name?: string;

        /**
         * Часы показа
         */
        readonly show_hours?: readonly {
          /**
           * Начало показа
           */
          readonly From?: number;

          /**
           * Конец показа
           */
          readonly To?: number;
        }[];

        /**
         * Уникальный ID медиакампании для работы с ОРД
         */
        readonly Erid?: string;
      }[];
    }
  | undefined;
