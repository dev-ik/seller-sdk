// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Детализации к отчётам реализации за период».
 *
 * Метод возвращает детализации к [отчётам реализации](https://seller.wildberries.ru/suppliers-mutual-settlements) за указанный период.
 *
 * Данные доступны с 29 января 2024 года.
 *
 *  Вы можете выгрузить данные в Google Таблицы (/knowledge-base/articles/019d49a4-650c-7b04-9596-ba441936f9d3)
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 1 запрос | 1 мин | 1 запрос |
 * | Сервисный | 1 мин | 1 запрос | 1 мин | 1 запрос |
 * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 1 запрос |
 * | Базовый | 24 ч | 2 запроса | 12 ч | 1 запрос |
 *
 * POST /api/finance/v1/sales-reports/detailed
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/finances
 */
export type PostV1SalesReportsDetailedInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Начальная дата отчёта.
     * Можно передать дату или дату со временем. Время можно указывать с точностью до секунд или миллисекунд.
     * Дата передаётся в формате [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339), время — в часовом поясе Москва `UTC+3`.
     * Примеры:
     *  - `2025-06-20`
     *  - `2025-06-20T23:59:59`
     *  - `2025-06-20T00:00:00.12345`
     *  - `2025-06-20T00:00:00`
     *
     * Пример: `"2026-03-17"`.
     */
    readonly dateFrom: string;

    /**
     * Конечная дата отчёта.
     * Дата в формате [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339). Можно передать дату или дату со временем. Время можно указывать с точностью до секунд или миллисекунд.
     * Время передаётся в часовом поясе Москва `UTC+3`.
     * Примеры:
     *  - `2025-06-20`
     *  - `2025-06-20T23:59:59`
     *  - `2025-06-20T00:00:00.12345`
     *  - `2025-06-20T00:00:00`
     *
     * Пример: `"2026-03-20"`.
     */
    readonly dateTo: string;

    /**
     * Количество строк в ответе
     *
     * Пример: `21100`.
     *
     * Значение по умолчанию: `100000`.
     *
     * Максимальное значение: 100000.
     */
    readonly limit?: number;

    /**
     * ID строки ответа. Необходим для получения отчёта частями.
     * Начинайте загрузку отчёта с `"rrdid":0`. В последующих запросах передавайте значение `rrdId` из последней строки предыдущего ответа.
     * Повторяйте запрос, пока не получите ответ `204`
     *
     * Значение по умолчанию: `0`.
     */
    readonly rrdId?: number;

    /**
     * Периодичность отчётов:
     *  - `weekly` — еженедельные
     *  - `daily` — ежедневные
     *
     * Пример: `"daily"`.
     *
     * Значение по умолчанию: `"weekly"`.
     */
    readonly period?: "daily" | "weekly";

    /**
     * Список полей, которые вернутся в ответе. Если параметр не указан, возвращаются все поля
     *
     * Пример: `["rrdId","nmId","docTypeName","retailAmount","acquiringFee","srid"]`.
     */
    readonly fields?: readonly string[];
  };
};
/**
 * Успешный ответ метода «Детализации к отчётам реализации за период».
 *
 * 200: Успешно.
 *
 * 204: Нет данных.
 */
export type PostV1SalesReportsDetailedResponse =
  | readonly {
      /**
       * ID отчёта
       *
       * Формат: `int64`.
       *
       * Пример: `1234567`.
       */
      readonly reportId: number;

      /**
       * Дата начала отчётного периода
       *
       * Формат: `date`.
       *
       * Пример: `"2026-03-16"`.
       */
      readonly dateFrom: string;

      /**
       * Дата конца отчётного периода
       *
       * Формат: `date`.
       *
       * Пример: `"2026-03-22"`.
       */
      readonly dateTo: string;

      /**
       * Дата формирования отчёта
       *
       * Формат: `date`.
       *
       * Пример: `"2026-03-23"`.
       */
      readonly createDate: string;

      /**
       * Валюта отчёта
       *
       * Пример: `"RUB"`.
       */
      readonly currency: string;

      /**
       * Тип отчёта:
       *  - `1` — основной
       *  - `2` — по выкупам
       *  - `3` — по выкупам для Грузии
       *
       * Пример: `1`.
       */
      readonly reportType: 1 | 2 | 3;

      /**
       * ID строки
       *
       * Пример: `1232610467`.
       */
      readonly rrdId: number;

      /**
       * ID поставки
       *
       * Пример: `123456`.
       */
      readonly giId: number;

      /**
       * Фиксированный коэффициент склада по поставке
       *
       * Пример: `1.8`.
       */
      readonly dlvPrc: number;

      /**
       * Дата начала действия фиксации
       *
       * Формат: `date`.
       *
       * Пример: `"2026-03-18"`.
       */
      readonly fixTariffDateFrom: string;

      /**
       * Дата конца действия фиксации
       *
       * Формат: `date`.
       *
       * Пример: `"2026-03-19"`.
       */
      readonly fixTariffDateTo: string;

      /**
       * Предмет
       *
       * Пример: `"Мини-печи"`.
       */
      readonly subjectName: string;

      /**
       * Артикул WB
       *
       * Пример: `1234567`.
       */
      readonly nmId: number;

      /**
       * Бренд
       *
       * Пример: `"BlahBlah"`.
       */
      readonly brandName: string;

      /**
       * Артикул продавца
       *
       * Пример: `"MAB123"`.
       */
      readonly vendorCode: string;

      /**
       * Название товара
       *
       * Пример: `"ДС тарелка"`.
       */
      readonly title: string;

      /**
       * Размер
       *
       * Пример: `"0"`.
       */
      readonly techSize: string;

      /**
       * Баркод
       *
       * Пример: `"1231312352310"`.
       */
      readonly sku: string;

      /**
       * Тип документа
       *
       * Пример: `"Продажа"`.
       */
      readonly docTypeName: string;

      /**
       * Количество
       *
       * Пример: `1`.
       */
      readonly quantity: number;

      /**
       * Цена розничная
       *
       * Пример: `"1249"`.
       */
      readonly retailPrice: string;

      /**
       * Вайлдберриз реализовал Товар (Пр)
       *
       * Пример: `"367"`.
       */
      readonly retailAmount: string;

      /**
       * Согласованный продуктовый дисконт, %
       *
       * Пример: `0`.
       */
      readonly salePercent: number;

      /**
       * Размер кВВ, %
       *
       * Пример: `24`.
       */
      readonly commissionPercent: number;

      /**
       * Склад
       *
       * Пример: `"Коледино"`.
       */
      readonly officeName: string;

      /**
       * Обоснование для оплаты
       *
       * Пример: `"Продажа"`.
       */
      readonly sellerOperName: string;

      /**
       * Дата и время заказа
       *
       * Формат: `date-time`.
       *
       * Пример: `"2026-03-14T00:00:00Z"`.
       */
      readonly orderDt: string;

      /**
       * Дата и время продажи
       *
       * Формат: `date-time`.
       *
       * Пример: `"2026-03-21T00:00:00Z"`.
       */
      readonly saleDt: string;

      /**
       * Дата операции
       *
       * Формат: `date`.
       *
       * Пример: `"2025-10-20"`.
       */
      readonly rrDate: string;

      /**
       * Штрихкод
       *
       * Пример: `1239159661`.
       */
      readonly shkId: number;

      /**
       * Цена розничная с учётом согласованной скидки
       *
       * Пример: `"399.68"`.
       */
      readonly retailPriceWithDisc: string;

      /**
       * Количество доставок
       *
       * Пример: `0`.
       */
      readonly deliveryAmount: number;

      /**
       * Количество возврата
       *
       * Пример: `0`.
       */
      readonly returnAmount: number;

      /**
       * Услуги по доставке товара покупателю
       *
       * Пример: `"0"`.
       */
      readonly deliveryService: string;

      /**
       * Тип коробов
       *
       * Пример: `"Монопаллета"`.
       */
      readonly giBoxTypeName: string;

      /**
       * Итоговая согласованная скидка, %
       *
       * Пример: `0`.
       */
      readonly productDiscountForReport: number;

      /**
       * Промокод, %
       *
       * Пример: `"0"`.
       */
      readonly sellerPromo: string;

      /**
       * Платформенные скидки, %
       *
       * Пример: `25.31`.
       */
      readonly spp: number;

      /**
       * Размер кВВ без НДС, % базовый
       *
       * Пример: `24.15`.
       */
      readonly kvwBase: number;

      /**
       * Итоговый кВВ без НДС, %
       *
       * Пример: `1.81`.
       */
      readonly kvw: number;

      /**
       * Размер снижения кВВ из-за рейтинга, %
       */
      readonly supRatingUp: number;

      /**
       * Размер снижения кВВ из-за акции, %
       */
      readonly isKgvpV2: number;

      /**
       * Вознаграждение с продаж до вычета услуг поверенного, без НДС
       *
       * Пример: `"23.74"`.
       */
      readonly ppvzSalesCommission: string;

      /**
       * К перечислению продавцу за реализованный товар
       *
       * Пример: `"376.99"`.
       */
      readonly forPay: string;

      /**
       * Возмещение за выдачу и возврат товаров на ПВЗ
       *
       * Пример: `"0"`.
       */
      readonly ppvzReward: string;

      /**
       * Компенсация платёжных услуг/Комиссия за интеграцию платёжных сервисов
       *
       * Пример: `"14.89"`.
       */
      readonly acquiringFee: string;

      /**
       * Размер компенсации платёжных услуг/Комиссии за интеграцию платёжных сервисов, %
       *
       * Пример: `4.06`.
       */
      readonly acquiringPercent: number;

      /**
       * Тип платежа: компенсация платёжных услуг/Комиссия за интеграцию платёжных сервисов
       *
       * Пример: `"Комиссия за организацию платежа с НДС"`.
       */
      readonly paymentProcessing: string;

      /**
       * Наименование банка-эквайера
       *
       * Пример: `"Тинькофф"`.
       */
      readonly acquiringBank: string;

      /**
       * Вознаграждение Вайлдберриз (ВВ), без НДС
       *
       * Пример: `"22.25"`.
       */
      readonly vw: string;

      /**
       * НДС с вознаграждения Вайлдберриз
       *
       * Пример: `"4.45"`.
       */
      readonly vwNds: string;

      /**
       * Наименование офиса доставки
       *
       * Пример: `"Москва Москва Очаковское шоссе 6к2"`.
       */
      readonly ppvzOfficeName: string;

      /**
       * ID офиса доставки
       *
       * Пример: `105383`.
       */
      readonly ppvzOfficeId: number;

      /**
       * Партнёр
       *
       * Пример: `"ИП Жасмин"`.
       */
      readonly ppvzSupplierName: string;

      /**
       * ИНН партнёра
       *
       * Пример: `"010101010101"`.
       */
      readonly ppvzSupplierInn: string;

      /**
       * Номер таможенной декларации
       *
       * Пример: `""`.
       */
      readonly declarationNumber: string;

      /**
       * Виды логистики, штрафов и корректировок ВВ
       *
       * Пример: `"Штраф МП. Невыполненный заказ (отмена клиентом после недовоза)"`.
       */
      readonly bonusTypeName?: string;

      /**
       * Стикер МП
       *
       * Пример: `"1964038895"`.
       */
      readonly stickerId: string;

      /**
       * Страна продажи
       *
       * Пример: `"Россия"`.
       */
      readonly country: string;

      /**
       * Признак услуги платной доставки
       *
       * Пример: `true`.
       */
      readonly srvDbs: boolean;

      /**
       * Общая сумма штрафов
       *
       * Пример: `"231.35"`.
       */
      readonly penalty: string;

      /**
       * Корректировка Вознаграждения Вайлдберриз (ВВ)
       *
       * Пример: `"0"`.
       */
      readonly additionalPayment: string;

      /**
       * Возмещение издержек по перевозке/по складским операциям с товаром
       *
       * Пример: `"1.349"`.
       */
      readonly rebillLogisticCost: string;

      /**
       * Организатор перевозки
       *
       * Пример: `"ИП Иванов Иван Иванович(123456789012)"`.
       */
      readonly rebillLogisticOrg?: string;

      /**
       * Хранение
       *
       * Пример: `"12647.29"`.
       */
      readonly paidStorage: string;

      /**
       * Удержания
       *
       * Пример: `"6354"`.
       */
      readonly deduction: string;

      /**
       * Операции на приёмке
       *
       * Пример: `"865"`.
       */
      readonly paidAcceptance: string;

      /**
       * ID сборочного задания
       *
       * Пример: `2816993144`.
       */
      readonly orderId: number;

      /**
       * Код маркировки [Честного знака](https://честныйзнак.рф/)
       *
       * Пример: `"0102900000376311210G2CIS?ehge)S\u001d91002A\u001d92F9Qof4FDo/31Icm14kmtuVYQzLypxm3HWkC1vQ/+pVVjm1dNAth1laFMoAGn7yEMWlTjxIe7lQnJqZ7TRZhlHQ=="`.
       */
      readonly kiz?: string;

      /**
       * Признак B2B-продажи
       *
       * Пример: `false`.
       */
      readonly isB2b: boolean;

      /**
       * ID короба для обработки товара
       *
       * Пример: `"WB-TRBX-1234567"`.
       */
      readonly trbxId: string;

      /**
       * Скидка по программе софинансирования
       *
       * Пример: `"0"`.
       */
      readonly installmentCofinancingAmount: string;

      /**
       * Скидка Wibes, %
       *
       * Пример: `1`.
       */
      readonly wibesDiscountPercent: number;

      /**
       * Сумма, удержанная за начисленные баллы программы лояльности
       *
       * Пример: `"2"`.
       */
      readonly cashbackAmount: string;

      /**
       * Компенсация скидки по программе лояльности
       *
       * Пример: `"19"`.
       */
      readonly cashbackDiscount: string;

      /**
       * Стоимость участия в программе лояльности
       *
       * Пример: `"0.2"`.
       */
      readonly cashbackCommissionChange: string;

      /**
       * Разовое изменение срока перечисления денежных средств
       *
       * Пример: `"-1"`.
       */
      readonly paymentSchedule: string;

      /**
       * Способ продажи и тип товара
       *
       * Пример: `"FBS, (МГТ)"`.
       */
      readonly deliveryMethod: string;

      /**
       * ID собственной акции продавца с дополнительной скидкой
       *
       * Пример: `14350`.
       */
      readonly sellerPromoId: number;

      /**
       * Размер дополнительной скидки по собственной акции продавца, %
       *
       * Пример: `3`.
       */
      readonly sellerPromoDiscount: number;

      /**
       * ID скидки лояльности от продавца
       *
       * Пример: `0`.
       */
      readonly loyaltyId: number;

      /**
       * Размер скидки лояльности от продавца, %
       *
       * Пример: `0`.
       */
      readonly loyaltyDiscount: number;

      /**
       * ID промокода
       *
       * Пример: `""`.
       */
      readonly uuidPromocode: string;

      /**
       * Скидка за промокод, %
       *
       * Пример: `0`.
       */
      readonly salePricePromocodeDiscountPrc: number;

      /**
       * ID подменного артикула
       *
       * Пример: `""`.
       */
      readonly articleSubstitution: string;

      /**
       * Скидка по подменному артикулу, %
       *
       * Пример: `0`.
       */
      readonly salePriceAffiliatedDiscountPrc: number;

      /**
       * Удержание Агентского НДС, %.
       * Только для продавцов из Кыргызстана
       *
       * Пример: `0`.
       */
      readonly agencyVat?: number;

      /**
       * Оптовая скидка для бизнеса, %
       *
       * Пример: `0`.
       */
      readonly salePriceWholesaleDiscountPrc: number;

      /**
       * ИНН B2B-покупателя
       *
       * Пример: `"010101010101"`.
       */
      readonly b2bCustomerTin: string;

      /**
       * Оплата социальным сертификатом
       *
       * Пример: `false`.
       */
      readonly paidWithSocialCertificate: boolean;

      /**
       * ID корзины заказа — транзакции.
       * Заказы в одной корзине покупателя будут иметь одинаковый `orderUid`
       *
       * Пример: `"id375f16c4bec295d9995393af803ff7b"`.
       */
      readonly orderUid: string;

      /**
       * ID заказа.
       * В ответах методов сборочных заданий [FBS](./orders-fbs#tag/Sborochnye-zadaniya-FBS), [DBW](./orders-dbw#tag/dbwAssemblyOrders), [DBS](./orders-dbs#tag/dbsAssemblyOrders) и [Самовывоз](./in-store-pickup#tag/inStorePickupAssemblyOrders) `srid` равен `rid`
       *
       * Пример: `"0f1c3999172603062979867564654dac5b702849"`.
       */
      readonly srid: string;
    }[]
  | undefined;
