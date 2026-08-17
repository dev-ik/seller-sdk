// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Статистика медиакампаний».
 *
 * Метод формирует статистику кампаний сервиса [WB Медиа](https://cmp.wildberries.ru/cmpf/statistics). Статистику можно группировать по датам и/или интервалам.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 сек | 10 запросов | 100 мс | 10 запросов |
 * | Сервисный | 1 сек | 10 запросов | 100 мс | 10 запросов |
 * | Базовый с секретом | 1 сек | 10 запросов | 100 мс | 10 запросов |
 * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
 *
 * POST /adv/v1/stats
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type PostV1StatsInput = {
  /**
   * Тело запроса.
   *
   * Минимальное количество элементов: 1.
   *
   * Максимальное количество элементов: 100.
   */
  readonly body: readonly (
    | {
        /**
         * ID кампании
         */
        readonly id: number;

        /**
         * Даты, за которые нужно получить информацию
         */
        readonly dates: readonly string[];
      }
    | {
        /**
         * ID кампании
         */
        readonly id: number;

        /**
         * Временной диапазон, за который необходимо выдать данные
         */
        readonly interval: {
          /**
           * Начало запрашиваемого периода
           *
           * Формат: `date`.
           */
          readonly begin?: string;

          /**
           * Конец запрашиваемого периода
           *
           * Формат: `date`.
           */
          readonly end?: string;
        };
      }
    | {
        /**
         * ID кампании
         */
        readonly id: number;
      }
  )[];
};
/**
 * Успешный ответ метода «Статистика медиакампаний».
 *
 * 200: Успешно.
 */
export type PostV1StatsResponse = readonly (
  | {
      /**
       * Период
       */
      readonly interval: {
        /**
         * Начало периода
         *
         * Формат: `date`.
         */
        readonly begin?: string;

        /**
         * Конец периода
         *
         * Формат: `date`.
         */
        readonly end?: string;
      };

      /**
       * Блок статистики
       */
      readonly stats?: readonly {
        /**
         * ID баннера
         */
        readonly item_id?: number;

        /**
         * Бренд
         */
        readonly item_name?: string;

        /**
         * Название категории
         */
        readonly category_name?: string;

        /**
         * Тип медиакампании:
         *  - `1` — размещение по дням
         *  - `2` — размещение по просмотрам
         */
        readonly advert_type?: number;

        /**
         * Место на странице
         */
        readonly place?: number;

        /**
         * Количество просмотров
         */
        readonly views?: number;

        /**
         * Количество кликов
         */
        readonly clicks?: number;

        /**
         * CR(conversion rate) — это отношение количества заказов к общему количеству посещений медиакампании
         */
        readonly cr?: number;

        /**
         * CTR (click-through rate) — показатель кликабельности, отношение числа кликов к количеству показов в рамках медиакампании
         */
        readonly ctr?: number;

        /**
         * Время начала размещения
         *
         * Формат: `date-time`.
         */
        readonly date_from?: string;

        /**
         * Время завершения размещения
         *
         * Формат: `date-time`.
         */
        readonly date_to?: string;

        /**
         * Родительская категория предмета
         */
        readonly subject_name?: string;

        /**
         * Количество добавлений товаров в корзину
         */
        readonly atbs?: number;

        /**
         * Количество заказов
         */
        readonly orders?: number;

        /**
         * Стоимость размещения
         */
        readonly price?: number;

        /**
         * (cost per click) — цена клика по продвигаемому товару
         */
        readonly cpc?: number;

        /**
         * Статус медиакампании
         */
        readonly status?: number;

        /** Описание отсутствует в OpenAPI WB. */
        readonly daily_stats?: readonly {
          /**
           * Дата
           *
           * Формат: `date-time`.
           */
          readonly date?: string;

          /**
           * Статистика по платформам
           */
          readonly app_type_stats?: readonly {
            /**
             * Тип платформы:
             * - `1` — сайт
             * - `32` — Android
             * - `64` — IOS
             */
            readonly app_type?: number;

            /** Описание отсутствует в OpenAPI WB. */
            readonly stats?: readonly {
              /**
               * Количество просмотров
               */
              readonly views?: number;

              /**
               * Количество кликов
               */
              readonly clicks?: number;

              /**
               * Количество добавлений товаров в корзину
               */
              readonly atbs?: number;

              /**
               * CTR (click-through rate) — показатель кликабельности, отношение числа кликов к количеству показов в рамках медиакампании
               */
              readonly ctr?: number;
            }[];
          }[];
        }[];

        /**
         * Стоимость размещения баннера
         */
        readonly expenses?: number;

        /**
         * Отношение количества добавлений в корзину к количеству кликов
         */
        readonly cr1?: number;

        /**
         * Отношение количества заказов к количеству добавлений в корзину
         */
        readonly cr2?: number;
      }[];
    }
  | {
      /**
       * Даты, за которые нужно получить информацию
       */
      readonly dates: readonly string[];

      /**
       * Блок статистики
       */
      readonly stats?: readonly {
        /**
         * ID баннера
         */
        readonly item_id?: number;

        /**
         * Бренд
         */
        readonly item_name?: string;

        /**
         * Название категории
         */
        readonly category_name?: string;

        /**
         * Тип медиакампании:
         *  - `1` — размещение по дням
         *  - `2` — размещение по просмотрам
         */
        readonly advert_type?: number;

        /**
         * Место на странице
         */
        readonly place?: number;

        /**
         * Количество просмотров
         */
        readonly views?: number;

        /**
         * Количество кликов
         */
        readonly clicks?: number;

        /**
         * CR(conversion rate) — это отношение количества заказов к общему количеству посещений медиакампании
         */
        readonly cr?: number;

        /**
         * CTR (click-through rate) — показатель кликабельности, отношение числа кликов к количеству показов в рамках медиакампании
         */
        readonly ctr?: number;

        /**
         * Время начала размещения
         *
         * Формат: `date-time`.
         */
        readonly date_from?: string;

        /**
         * Время завершения размещения
         *
         * Формат: `date-time`.
         */
        readonly date_to?: string;

        /**
         * Родительская категория предмета
         */
        readonly subject_name?: string;

        /**
         * Количество добавлений товаров в корзину
         */
        readonly atbs?: number;

        /**
         * Количество заказов
         */
        readonly orders?: number;

        /**
         * Стоимость размещения
         */
        readonly price?: number;

        /**
         * (cost per click) — цена клика по продвигаемому товару
         */
        readonly cpc?: number;

        /**
         * Статус медиакампании
         */
        readonly status?: number;

        /** Описание отсутствует в OpenAPI WB. */
        readonly daily_stats?: readonly {
          /**
           * Дата
           *
           * Формат: `date-time`.
           */
          readonly date?: string;

          /**
           * Статистика по платформам
           */
          readonly app_type_stats?: readonly {
            /**
             * Тип платформы:
             * - `1` — сайт
             * - `32` — Android
             * - `64` — IOS
             */
            readonly app_type?: number;

            /** Описание отсутствует в OpenAPI WB. */
            readonly stats?: readonly {
              /**
               * Количество просмотров
               */
              readonly views?: number;

              /**
               * Количество кликов
               */
              readonly clicks?: number;

              /**
               * Количество добавлений товаров в корзину
               */
              readonly atbs?: number;

              /**
               * Количество заказов
               */
              readonly orders?: number;

              /**
               * CR(conversion rate) — отношение количества заказов к общему количеству посещений медиакампании
               */
              readonly cr?: number;

              /**
               * CTR (click-through rate) — показатель кликабельности, отношение числа кликов к количеству показов в рамках медиакампании
               */
              readonly ctr?: number;
            }[];
          }[];
        }[];

        /**
         * Стоимость размещения баннера
         */
        readonly expenses?: number;

        /**
         * Отношение количества добавлений в корзину к количеству кликов
         */
        readonly cr1?: number;

        /**
         * Отношение количества заказов к количеству добавлений в корзину
         */
        readonly cr2?: number;
      }[];
    }
  | {
      /**
       * Блок статистики
       */
      readonly stats?: readonly {
        /**
         * ID баннера
         */
        readonly item_id?: number;

        /**
         * Бренд
         */
        readonly item_name?: string;

        /**
         * Название категории
         */
        readonly category_name?: string;

        /**
         * Тип медиакампании:
         *  - `1` — размещение по дням
         *  - `2` — размещение по просмотрам
         */
        readonly advert_type?: number;

        /**
         * Место на странице
         */
        readonly place?: number;

        /**
         * Количество просмотров
         */
        readonly views?: number;

        /**
         * Количество кликов
         */
        readonly clicks?: number;

        /**
         * CR(conversion rate) — это отношение количества заказов к общему количеству посещений медиакампании
         */
        readonly cr?: number;

        /**
         * CTR (click-through rate) — показатель кликабельности, отношение числа кликов к количеству показов в рамках медиакампании
         */
        readonly ctr?: number;

        /**
         * Время начала размещения
         *
         * Формат: `date-time`.
         */
        readonly date_from?: string;

        /**
         * Время завершения размещения
         *
         * Формат: `date-time`.
         */
        readonly date_to?: string;

        /**
         * Родительская категория предмета
         */
        readonly subject_name?: string;

        /**
         * Количество добавлений товаров в корзину
         */
        readonly atbs?: number;

        /**
         * Количество заказов
         */
        readonly orders?: number;

        /**
         * Стоимость размещения
         */
        readonly price?: number;

        /**
         * (cost per click) — цена клика по продвигаемому товару
         */
        readonly cpc?: number;

        /**
         * Статус медиакампании
         */
        readonly status?: number;

        /** Описание отсутствует в OpenAPI WB. */
        readonly daily_stats?: readonly {
          /**
           * Дата
           *
           * Формат: `date-time`.
           */
          readonly date?: string;

          /**
           * Статистика по платформам
           */
          readonly app_type_stats?: readonly {
            /**
             * Тип платформы:
             * - `1` — сайт
             * - `32` — Android
             * - `64` — IOS
             */
            readonly app_type?: number;

            /** Описание отсутствует в OpenAPI WB. */
            readonly stats?: readonly {
              /**
               * Количество просмотров
               */
              readonly views?: number;

              /**
               * Количество кликов
               */
              readonly clicks?: number;

              /**
               * Количество добавлений товаров в корзину
               */
              readonly atbs?: number;

              /**
               * CTR (click-through rate) — показатель кликабельности, отношение числа кликов к количеству показов в рамках медиакампании
               */
              readonly ctr?: number;
            }[];
          }[];
        }[];

        /**
         * Стоимость размещения баннера
         */
        readonly expenses?: number;

        /**
         * Отношение количества добавлений в корзину к количеству кликов
         */
        readonly cr1?: number;

        /**
         * Отношение количества заказов к количеству добавлений в корзину
         */
        readonly cr2?: number;
      }[];
    }
  | {
      /**
       * ID кампании
       *
       * Формат: `int64`.
       *
       * Пример: `111`.
       */
      readonly advert_id?: number;

      /**
       * Описание ошибки
       *
       * Пример: `"кампания не найдена"`.
       */
      readonly error?: string;
    }
)[];
