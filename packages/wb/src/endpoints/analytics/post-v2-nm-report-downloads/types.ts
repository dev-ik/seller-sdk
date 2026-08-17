// Generated public types for this Wildberries endpoint.
import type { WbJsonValue } from "../../../schema.js";

/**
 * Параметры метода «Создать отчёт».
 *
 * Метод создаёт задание на генерацию отчёта с расширенной аналитикой продавца.
 *
 * Вы можете создать CSV-версии отчётов по [воронке продаж](/openapi/analytics#tag/salesFunnel) или [параметрам поиска](/openapi/analytics#tag/searchQueriesForYourItems) с группировкой по:
 *  * артикулам WB
 *  * предметам, брендам и ярлыкам
 *
 * В отчётах по воронке продаж можно группировать данные по дням, неделям или месяцам.
 *
 * Также можете создать CSV-версии отчётов по [текстам поисковых запросов](/openapi/analytics#tag/searchQueriesForYourItems/operation/postV2SearchReportProductSearchTexts) и [остаткам](/openapi/analytics#tag/stocksReport).
 *
 * Каждый новый отчёт должен иметь уникальный ID.
 *
 *  Не используйте одинаковые ID для разных отчётов — это может привести к ошибкам при генерации
 *
 * Набор параметров запроса в объекте `params` зависит от типа отчёта. Чтобы получить описание параметров, выберите тип отчёта в раскрывающемся списке в описании параметра `reportType`.
 *
 * Параметры `includeSubstitutedSKUs` и `includeSearchTexts` не могут одновременно иметь значение `false`.
 *
 * Если не удалось [получить отчёт](/openapi/analytics#tag/sellerAnalyticsCsv/operation/getV2NmReportDownloadsFileDownloadId), можно создать [повторное задание на генерацию](/openapi/analytics#tag/sellerAnalyticsCsv/operation/postV2NmReportDownloadsRetry). Также можно [получить список и проверить статусы](/openapi/analytics#tag/sellerAnalyticsCsv/operation/getV2NmReportDownloads) отчётов.
 *
 *  Отчёты по остаткам (https://seller.wildberries.ru/content-analytics/history-remains) — типы STOCK_HISTORY_REPORT_CSV и STOCK_HISTORY_DAILY_CSV — можно создать без подписки Джем (https://seller.wildberries.ru/monetization/jam)
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
 * | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
 * | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
 * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
 *
 * POST /api/v2/nm-report/downloads
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/analytics
 */
export type PostV2NmReportDownloadsInput = {
  /**
   * Тело запроса.
   */
  readonly body?:
    | {
        /**
         * ID отчёта в UUID-формате. Генерируется продавцом самостоятельно
         *
         * Формат: `uuid`.
         */
        readonly id: string;

        /**
         * Тип отчёта `DETAIL_HISTORY_REPORT` — Воронка продаж. По артикулам WB
         */
        readonly reportType: string;

        /**
         * Название отчёта. Если не указано, сформируется автоматически
         */
        readonly userReportName?: string;

        /**
         * Параметры отчёта
         */
        readonly params: {
          /**
           * Артикулы WB, по которым составить отчёт. Оставьте пустым, чтобы получить отчёт обо всех товарах
           *
           * Минимальное количество элементов: 0.
           *
           * Максимальное количество элементов: 1000.
           */
          readonly nmIDs?: readonly number[];

          /**
           * Список ID предметов для фильтрации
           *
           * Пример: `[64,334]`.
           */
          readonly subjectIds?: readonly number[];

          /**
           * Список брендов для фильтрации
           *
           * Пример: `["nike","adidas"]`.
           */
          readonly brandNames?: readonly string[];

          /**
           * Список ID ярлыков для фильтрации
           *
           * Пример: `[32,53]`.
           */
          readonly tagIds?: readonly number[];

          /**
           * Начало периода
           *
           * Формат: `date`.
           */
          readonly startDate: string;

          /**
           * Конец периода
           *
           * Формат: `date`.
           */
          readonly endDate: string;

          /**
           * Временная зона по формату [IANA](https://nodatime.org/TimeZones)
           *
           * Пример: `"Europe/Moscow"`.
           *
           * Значение по умолчанию: `"Europe/Moscow"`.
           */
          readonly timezone?: string;

          /**
           * Как сгруппировать данные (по умолчанию по дням):
           *
           *  * `day` — по дням
           *  * `week` — по неделям
           *  * `month` — по месяцам
           */
          readonly aggregationLevel?: "day" | "week" | "month";

          /**
           * Скрыть удалённые товары
           */
          readonly skipDeletedNm?: boolean;
        };
      }
    | {
        /**
         * ID отчёта в UUID-формате. Генерируется продавцом самостоятельно
         *
         * Формат: `uuid`.
         */
        readonly id: string;

        /**
         * Тип отчёта `GROUPED_HISTORY_REPORT` — Воронка продаж. По предметам, брендам и ярлыкам
         */
        readonly reportType: string;

        /**
         * Название отчёта. Если не указано, сформируется автоматически
         */
        readonly userReportName?: string;

        /**
         * Параметры отчёта
         */
        readonly params: {
          /**
           * Список ID предметов для фильтрации
           *
           * Пример: `[64,334]`.
           */
          readonly subjectIds?: readonly number[];

          /**
           * Список брендов для фильтрации
           *
           * Пример: `["nike","adidas"]`.
           */
          readonly brandNames?: readonly string[];

          /**
           * Список ID ярлыков для фильтрации
           *
           * Пример: `[32,53]`.
           */
          readonly tagIds?: readonly number[];

          /**
           * Начало периода
           *
           * Формат: `date`.
           */
          readonly startDate: string;

          /**
           * Конец периода
           *
           * Формат: `date`.
           */
          readonly endDate: string;

          /**
           * Временная зона по формату [IANA](https://nodatime.org/TimeZones)
           *
           * Пример: `"Europe/Moscow"`.
           *
           * Значение по умолчанию: `"Europe/Moscow"`.
           */
          readonly timezone?: string;

          /**
           * Как сгруппировать данные (по умолчанию по дням):
           *
           *  * `day` — по дням
           *  * `week` — по неделям
           *  * `month` — по месяцам
           */
          readonly aggregationLevel?: string;

          /**
           * Скрыть удалённые товары
           */
          readonly skipDeletedNm?: boolean;
        };
      }
    | {
        /**
         * ID отчёта в UUID-формате. Генерируется продавцом самостоятельно
         *
         * Формат: `uuid`.
         */
        readonly id: string;

        /**
         * Тип отчёта `SEARCH_QUERIES_PREMIUM_REPORT_GROUP` — Отчёт по параметрам поиска. По предметам, брендам и ярлыкам
         */
        readonly reportType: string;

        /**
         * Название отчёта. Если не указано, сформируется автоматически
         */
        readonly userReportName?: string;

        /**
         * Параметры отчёта
         */
        readonly params: {
          /** Описание отсутствует в OpenAPI WB. */
          readonly currentPeriod: {
            /**
             * Дата начала периода. Не позднее `end`. Не ранее 365 суток от сегодня
             *
             * Формат: `date`.
             *
             * Пример: `"2024-02-10"`.
             */
            readonly start: string;

            /**
             * Дата окончания периода. Не ранее 365 суток от сегодня
             *
             * Формат: `date`.
             *
             * Пример: `"2024-02-10"`.
             */
            readonly end: string;
          };

          /** Описание отсутствует в OpenAPI WB. */
          readonly pastPeriod?: {
            /**
             * Дата начала периода. Не позднее `end`. Не ранее 365 суток от сегодня
             *
             * Формат: `date`.
             *
             * Пример: `"2024-02-08"`.
             */
            readonly start: string;

            /**
             * Дата окончания периода. Не позднее даты перед датой начала `currentPeriod`. Не ранее 365 суток от сегодня
             *
             * Формат: `date`.
             *
             * Пример: `"2024-02-08"`.
             */
            readonly end: string;
          };

          /**
           * Артикулы WB, по которым составить отчёт. Оставьте пустым, чтобы получить отчёт обо всех товарах
           *
           * Минимальное количество элементов: 0.
           *
           * Максимальное количество элементов: 1000.
           */
          readonly nmIds?: readonly number[];

          /**
           * Список ID предметов для фильтрации. Оставьте пустым, чтобы получить отчёт по всем предметам
           *
           * Пример: `[64,334]`.
           */
          readonly subjectIds: readonly number[];

          /**
           * Список брендов для фильтрации
           *
           * Пример: `["nike","adidas"]`.
           */
          readonly brandNames?: readonly string[];

          /**
           * Список ID ярлыков для фильтрации
           *
           * Пример: `[32,53]`.
           */
          readonly tagIds?: readonly number[];

          /** Описание отсутствует в OpenAPI WB. */
          readonly orderBy: {
            /**
             * Поле для сортировки:
             *  - `avgPosition` — по средней позиции
             *  - `addToCart` — по добавлениям в корзину
             *  - `openCard` — по открытию карточки (переход на страницу товара)
             *  - `orders` — по количеству заказов
             *  - `cartToOrder` — по конверсии в заказ из поиска
             *  - `openToCart` — по конверсии в корзину из поиска
             *  - `visibility` — по видимости товара
             *
             * Пример: `"avgPosition"`.
             */
            readonly field:
              | "avgPosition"
              | "openCard"
              | "addToCart"
              | "openToCart"
              | "orders"
              | "cartToOrder"
              | "visibility";

            /**
             * Порядок сортировки:
             *  - `asc` — по возрастанию
             *  - `desc` — по убыванию
             *
             * Пример: `"asc"`.
             */
            readonly mode: "asc" | "desc";
          };

          /** Описание отсутствует в OpenAPI WB. */
          readonly positionCluster:
            | "all"
            | "firstHundred"
            | "secondHundred"
            | "below";

          /**
           * Показать данные по прямым запросам с [подменным артикулом](https://seller.wildberries.ru/help-center/article/A-524)
           *
           * Пример: `true`.
           *
           * Значение по умолчанию: `true`.
           */
          readonly includeSubstitutedSKUs?: boolean;

          /**
           * Показать данные по поисковым запросам без учёта подменного артикула
           *
           * Пример: `false`.
           *
           * Значение по умолчанию: `true`.
           */
          readonly includeSearchTexts?: boolean;
        };
      }
    | {
        /**
         * ID отчёта в UUID-формате. Генерируется продавцом самостоятельно
         *
         * Формат: `uuid`.
         */
        readonly id: string;

        /**
         * Тип отчёта `SEARCH_QUERIES_PREMIUM_REPORT_PRODUCT` — Отчёт по параметрам поиска. По артикулам WB
         */
        readonly reportType: string;

        /**
         * Название отчёта. Если не указано, сформируется автоматически
         */
        readonly userReportName?: string;

        /**
         * Параметры отчёта
         */
        readonly params: {
          /** Описание отсутствует в OpenAPI WB. */
          readonly currentPeriod: {
            /**
             * Дата начала периода. Не позднее `end`. Не ранее 365 суток от сегодня
             *
             * Формат: `date`.
             *
             * Пример: `"2024-02-10"`.
             */
            readonly start: string;

            /**
             * Дата окончания периода. Не ранее 365 суток от сегодня
             *
             * Формат: `date`.
             *
             * Пример: `"2024-02-10"`.
             */
            readonly end: string;
          };

          /** Описание отсутствует в OpenAPI WB. */
          readonly pastPeriod?: {
            /**
             * Дата начала периода. Не позднее `end`. Не ранее 365 суток от сегодня
             *
             * Формат: `date`.
             *
             * Пример: `"2024-02-08"`.
             */
            readonly start: string;

            /**
             * Дата окончания периода. Не позднее даты перед датой начала `currentPeriod`. Не ранее 365 суток от сегодня
             *
             * Формат: `date`.
             *
             * Пример: `"2024-02-08"`.
             */
            readonly end: string;
          };

          /**
           * ID предмета. Используйте значение `0`, чтобы получить отчёт по всем предметам
           *
           * Формат: `int32`.
           *
           * Пример: `132`.
           */
          readonly subjectId?: number;

          /**
           * Бренд
           *
           * Пример: `"Abikas"`.
           */
          readonly brandName?: string;

          /**
           * ID ярлыка. Чтобы получить отчёт по всем ярлыкам, укажите значение 0
           *
           * Формат: `int64`.
           *
           * Пример: `3`.
           */
          readonly tagId?: number;

          /**
           * Артикулы WB, по которым составить отчёт. Оставьте пустым, чтобы получить отчёт обо всех товарах
           *
           * Минимальное количество элементов: 0.
           *
           * Максимальное количество элементов: 1000.
           */
          readonly nmIds?: readonly number[];

          /** Описание отсутствует в OpenAPI WB. */
          readonly positionCluster:
            | "all"
            | "firstHundred"
            | "secondHundred"
            | "below";

          /** Описание отсутствует в OpenAPI WB. */
          readonly orderBy: {
            /**
             * Поле для сортировки:
             *  - `openCard` — Перешли в карточку
             *  - `addToCart` — Положили в корзину
             *  - `orderCount` — Заказали товаров, шт
             *  - `orderSum` — Заказали на сумму
             *  - `buyoutCount` — Выкупили товаров, шт
             *  - `buyoutSum` — Выкупили на сумму
             *  - `cancelCount` — Отменили и вернули товаров, шт
             *  - `cancelSum` — Отменили и вернули на сумму
             *  - `avgPrice` — Средняя цена
             *  - `stockMpQty` — Остатки на складах продавца, шт
             *  - `stockWbQty` — Остатки на складах WB, шт
             *  - `shareOrderPercent` — Доля в выручке
             *  - `addToWishlist` — Добавили в **Отложенные**
             *  - `timeToReady` — Среднее время доставки
             *  - `localizationPercent` — Локальные заказы в рамках одного региона
             *  - `wbClub.orderCount` — Заказали товаров с WB Клубом, шт
             *  - `wbClub.orderSum` — Заказали с WB Клубом на сумму
             *  - `wbClub.buyoutSum` — Выкупили товаров с WB Клубом, шт
             *  - `wbClub.buyoutCount` — Процент выкупа с WB Клубом
             *  - `wbClub.cancelSum` — Отменили и вернули товаров с WB Клубом на сумму
             *  - `wbClub.avgPrice` — Средняя цена с WB Клубом
             *  - `wbClub.buyoutPercent` — Процент выкупа с WB Клубом
             *  - `wbClub.avgOrderCountPerDay` — Среднее количество заказов в день с WB Клубом, шт
             *  - `wbClub.cancelCount` — Отменили и вернули товаров с WB Клубом, шт
             *
             * Пример: `"openCard"`.
             *
             * Значение по умолчанию: `"openCard"`.
             */
            readonly field:
              | "openCard"
              | "addToCart"
              | "orderCount"
              | "orderSum"
              | "buyoutCount"
              | "buyoutSum"
              | "cancelCount"
              | "cancelSum"
              | "avgPrice"
              | "stockMpQty"
              | "stockWbQty"
              | "shareOrderPercent"
              | "addToWishlist"
              | "timeToReady"
              | "localizationPercent"
              | "wbClub.orderCount"
              | "wbClub.orderSum"
              | "wbClub.buyoutSum"
              | "wbClub.cancelSum"
              | "wbClub.buyoutCount"
              | "wbClub.avgPrice"
              | "wbClub.buyoutPercent"
              | "wbClub.avgOrderCountPerDay"
              | "wbClub.cancelCount";

            /**
             * Порядок сортировки:
             *  - `asc` — по возрастанию
             *  - `desc` — по убыванию
             *
             * Значение по умолчанию: `"desc"`.
             */
            readonly mode: "asc" | "desc";
          };

          /**
           * Показать данные по прямым запросам с [подменным артикулом](https://seller.wildberries.ru/help-center/article/A-524)
           *
           * Пример: `true`.
           *
           * Значение по умолчанию: `true`.
           */
          readonly includeSubstitutedSKUs?: boolean;

          /**
           * Показать данные по поисковым запросам без учёта подменного артикула
           *
           * Пример: `false`.
           *
           * Значение по умолчанию: `true`.
           */
          readonly includeSearchTexts?: boolean;
        };
      }
    | {
        /**
         * ID отчёта в UUID-формате. Генерируется продавцом самостоятельно
         *
         * Формат: `uuid`.
         */
        readonly id: string;

        /**
         * Тип отчёта `SEARCH_QUERIES_PREMIUM_REPORT_TEXT` — Отчёт по текстам поисковых запросов
         */
        readonly reportType: string;

        /**
         * Название отчёта. Если не указано, сформируется автоматически
         */
        readonly userReportName?: string;

        /**
         * Параметры отчёта
         */
        readonly params: {
          /** Описание отсутствует в OpenAPI WB. */
          readonly currentPeriod: {
            /**
             * Дата начала периода. Не позднее `end`. Не ранее 365 суток от сегодня
             *
             * Формат: `date`.
             *
             * Пример: `"2024-02-10"`.
             */
            readonly start: string;

            /**
             * Дата окончания периода. Не ранее 365 суток от сегодня
             *
             * Формат: `date`.
             *
             * Пример: `"2024-02-10"`.
             */
            readonly end: string;
          };

          /** Описание отсутствует в OpenAPI WB. */
          readonly pastPeriod?: {
            /**
             * Дата начала периода. Не позднее `end`. Не ранее 365 суток от сегодня
             *
             * Формат: `date`.
             *
             * Пример: `"2024-02-08"`.
             */
            readonly start: string;

            /**
             * Дата окончания периода. Не позднее даты перед датой начала `currentPeriod`. Не ранее 365 суток от сегодня
             *
             * Формат: `date`.
             *
             * Пример: `"2024-02-08"`.
             */
            readonly end: string;
          };

          /**
           * Артикулы WB, по которым составить отчёт. Оставьте пустым, чтобы получить отчёт по всем товарам
           *
           * Минимальное количество элементов: 0.
           *
           * Максимальное количество элементов: 1000.
           */
          readonly nmIds?: readonly WbJsonValue[];

          /**
           * Список ID предметов для фильтрации
           *
           * Пример: `[64,334]`.
           */
          readonly subjectIds?: readonly number[];

          /**
           * Список брендов для фильтрации
           *
           * Пример: `["nike","adidas"]`.
           */
          readonly brandNames?: readonly string[];

          /**
           * Список ID ярлыков для фильтрации
           *
           * Пример: `[32,53]`.
           */
          readonly tagIds?: readonly number[];

          /**
           * Фильтрация по поисковым запросам, по которым больше всего:
           *  - `openCard` — перешли в карточку
           *  - `addToCart` — добавили в корзину
           *  - `openToCart` — конверсия в корзину
           *  - `orders` — заказали товаров
           *  - `cartToOrder` — конверсия в заказ
           *
           * Пример: `"openToCart"`.
           */
          readonly topOrderBy:
            | "openCard"
            | "addToCart"
            | "openToCart"
            | "orders"
            | "cartToOrder";

          /** Описание отсутствует в OpenAPI WB. */
          readonly orderBy: {
            /**
             * Поле для сортировки:
             *  - `avgPosition` — по средней позиции
             *  - `addToCart` — по добавлениям в корзину
             *  - `openCard` — по открытию карточки (переход на страницу товара)
             *  - `orders` — по количеству заказов
             *  - `cartToOrder` — по конверсии в заказ из поиска
             *  - `openToCart` — по конверсии в корзину из поиска
             *  - `visibility` — по видимости товара
             *
             * Пример: `"avgPosition"`.
             */
            readonly field:
              | "avgPosition"
              | "openCard"
              | "addToCart"
              | "openToCart"
              | "orders"
              | "cartToOrder"
              | "visibility";

            /**
             * Порядок сортировки:
             *  - `asc` — по возрастанию
             *  - `desc` — по убыванию
             *
             * Пример: `"asc"`.
             */
            readonly mode: "asc" | "desc";
          };

          /**
           * Показать данные по прямым запросам с [подменным артикулом](https://seller.wildberries.ru/help-center/article/A-524)
           *
           * Пример: `true`.
           *
           * Значение по умолчанию: `true`.
           */
          readonly includeSubstitutedSKUs?: boolean;

          /**
           * Показать данные по поисковым запросам без учёта подменного артикула
           *
           * Пример: `false`.
           *
           * Значение по умолчанию: `true`.
           */
          readonly includeSearchTexts?: boolean;

          /** Описание отсутствует в OpenAPI WB. */
          readonly limit: number;
        };
      }
    | {
        /**
         * ID отчёта в UUID-формате. Генерируется продавцом самостоятельно
         *
         * Формат: `uuid`.
         */
        readonly id: string;

        /**
         * Тип отчёта `STOCK_HISTORY_REPORT_CSV` — Отчёт по статистике остатков
         */
        readonly reportType: string;

        /**
         * Название отчёта. Если не указано, сформируется автоматически
         */
        readonly userReportName?: string;

        /**
         * Общие фильтры по отчёту
         */
        readonly params: {
          /**
           * Список артикулов WB для фильтрации
           *
           * Пример: `[111222333,444555666]`.
           */
          readonly nmIDs?: readonly number[];

          /**
           * Список ID предметов для фильтрации
           *
           * Пример: `[123,456]`.
           */
          readonly subjectIDs?: readonly number[];

          /**
           * Список брендов для фильтрации
           *
           * Пример: `["Эрк","Дент"]`.
           */
          readonly brandNames?: readonly string[];

          /**
           * Список ID ярлыков для фильтрации
           *
           * Пример: `[3,4,5]`.
           */
          readonly tagIDs?: readonly number[];

          /** Описание отсутствует в OpenAPI WB. */
          readonly currentPeriod: {
            /**
             * Дата начала периода. Не позднее `end`. Не ранее 3 месяцев от текущей даты
             *
             * Формат: `date`.
             *
             * Пример: `"2024-02-10"`.
             */
            readonly start: string;

            /**
             * Дата окончания периода. Не ранее 3 месяцев от текущей даты
             *
             * Формат: `date`.
             *
             * Пример: `"2024-02-10"`.
             */
            readonly end: string;
          };

          /** Описание отсутствует в OpenAPI WB. */
          readonly stockType: "" | "wb" | "mp";

          /**
           * Скрыть удалённые товары
           *
           * Пример: `true`.
           */
          readonly skipDeletedNm: boolean;

          /** Описание отсутствует в OpenAPI WB. */
          readonly availabilityFilters: readonly (
            | "deficient"
            | "actual"
            | "balanced"
            | "nonActual"
            | "nonLiquid"
            | "invalidData"
          )[];

          /** Описание отсутствует в OpenAPI WB. */
          readonly orderBy: {
            /** Описание отсутствует в OpenAPI WB. */
            readonly field:
              | "ordersCount"
              | "ordersSum"
              | "avgOrders"
              | "buyoutCount"
              | "buyoutSum"
              | "buyoutPercent"
              | "stockCount"
              | "stockSum"
              | "saleRate"
              | "avgStockTurnover"
              | "toClientCount"
              | "fromClientCount"
              | "minPrice"
              | "maxPrice"
              | "officeMissingTime"
              | "lostOrdersCount"
              | "lostOrdersSum"
              | "lostBuyoutsCount"
              | "lostBuyoutsSum";

            /** Описание отсутствует в OpenAPI WB. */
            readonly mode: "asc" | "desc";
          };
        };
      }
    | {
        /**
         * ID отчёта в UUID-формате. Генерируется продавцом самостоятельно
         *
         * Формат: `uuid`.
         */
        readonly id: string;

        /**
         * Тип отчёта `STOCK_HISTORY_DAILY_CSV` — Отчёт по истории остатков
         */
        readonly reportType: string;

        /**
         * Название отчёта. Если не указано, сформируется автоматически
         */
        readonly userReportName?: string;

        /**
         * Параметры отчёта
         */
        readonly params: {
          /**
           * Список артикулов WB для фильтрации
           *
           * Пример: `[111222333,444555666]`.
           */
          readonly nmIds?: readonly number[];

          /**
           * Список ID предметов для фильтрации
           *
           * Пример: `[123,456]`.
           */
          readonly subjectIds?: readonly number[];

          /**
           * Список брендов для фильтрации
           *
           * Пример: `["Эрк","Дент"]`.
           */
          readonly brandNames?: readonly string[];

          /**
           * Список ID ярлыков для фильтрации
           *
           * Пример: `[3,4,5]`.
           */
          readonly tagIds?: readonly number[];

          /** Описание отсутствует в OpenAPI WB. */
          readonly currentPeriod: {
            /**
             * Дата начала периода. Не позднее `end`. Не ранее 3 месяцев от текущей даты
             *
             * Формат: `date`.
             *
             * Пример: `"2024-02-10"`.
             */
            readonly start: string;

            /**
             * Дата окончания периода. Не ранее 3 месяцев от текущей даты
             *
             * Формат: `date`.
             *
             * Пример: `"2024-02-10"`.
             */
            readonly end: string;
          };

          /** Описание отсутствует в OpenAPI WB. */
          readonly stockType: "" | "wb" | "mp";

          /**
           * Скрыть удалённые товары
           *
           * Пример: `true`.
           */
          readonly skipDeletedNm: boolean;
        };
      };
};
/**
 * Успешный ответ метода «Создать отчёт».
 *
 * 200: Успешно.
 */
export type PostV2NmReportDownloadsResponse = {
  /**
   * Уведомление, что началась генерация отчёта
   *
   * Пример: `"Началось формирование файла/отчета"`.
   */
  readonly data: string;
};
