/**
 * Сгенерировано из закрытых строковых enum/union-контрактов Wildberries.
 * После обновления локального Swagger выполните `pnpm update:wb`.
 */
export const WbValues = {
  /**
   * Доступность товара:
   *  - `deficient` — Дефицит
   *  - `actual` — Актуальный
   *  - `balanced` — Баланс
   *  - `nonActual` — Неактуальный
   *  - `nonLiquid` — Неликвид
   *  - `invalidData` — Не рассчитано
   */
  AnalyticsAvailabilityFiltersItem: {
    /**
     * Дефицит
     */
    Deficient: "deficient",
    /**
     * Актуальный
     */
    Actual: "actual",
    /**
     * Баланс
     */
    Balanced: "balanced",
    /**
     * Неактуальный
     */
    NonActual: "nonActual",
    /**
     * Неликвид
     */
    NonLiquid: "nonLiquid",
    /**
     * Не рассчитано
     */
    InvalidData: "invalidData",
  },
  /**
   * Фильтрация по поисковым запросам, по которым больше всего:
   *  - `openCard` — перешли в карточку
   *  - `addToCart` — добавили в корзину
   *  - `openToCart` — конверсия в корзину
   *  - `orders` — заказали товаров
   *  - `cartToOrder` — конверсия в заказ
   */
  AnalyticsItemSearchTextsRequestTopOrderBy: {
    /**
     * перешли в карточку
     */
    OpenCard: "openCard",
    /**
     * добавили в корзину
     */
    AddToCart: "addToCart",
    /**
     * конверсия в корзину
     */
    OpenToCart: "openToCart",
    /**
     * заказали товаров
     */
    Orders: "orders",
    /**
     * конверсия в заказ
     */
    CartToOrder: "cartToOrder",
  },
  /**
   * Тип агрегации. Если не указано, то по умолчанию используется агрегация по дням.
   *  Доступные уровни агрегации `day`, `week`
   */
  AnalyticsLevel: {
    /**
     * ,
     */
    Day: "day",
    Week: "week",
  },
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
   */
  AnalyticsOrderByField: {
    /**
     * Перешли в карточку
     */
    OpenCard: "openCard",
    /**
     * Положили в корзину
     */
    AddToCart: "addToCart",
    /**
     * Заказали товаров, шт
     */
    OrderCount: "orderCount",
    /**
     * Заказали на сумму
     */
    OrderSum: "orderSum",
    /**
     * Выкупили товаров, шт
     */
    BuyoutCount: "buyoutCount",
    /**
     * Выкупили на сумму
     */
    BuyoutSum: "buyoutSum",
    /**
     * Отменили и вернули товаров, шт
     */
    CancelCount: "cancelCount",
    /**
     * Отменили и вернули на сумму
     */
    CancelSum: "cancelSum",
    /**
     * Средняя цена
     */
    AvgPrice: "avgPrice",
    /**
     * Остатки на складах продавца, шт
     */
    StockMpQty: "stockMpQty",
    /**
     * Остатки на складах WB, шт
     */
    StockWbQty: "stockWbQty",
    /**
     * Доля в выручке
     */
    ShareOrderPercent: "shareOrderPercent",
    /**
     * Добавили в **Отложенные**
     */
    AddToWishlist: "addToWishlist",
    /**
     * Среднее время доставки
     */
    TimeToReady: "timeToReady",
    /**
     * Локальные заказы в рамках одного региона
     */
    LocalizationPercent: "localizationPercent",
    /**
     * Заказали товаров с WB Клубом, шт
     */
    WbClubOrderCount: "wbClub.orderCount",
    /**
     * Заказали с WB Клубом на сумму
     */
    WbClubOrderSum: "wbClub.orderSum",
    /**
     * Выкупили товаров с WB Клубом, шт
     */
    WbClubBuyoutSum: "wbClub.buyoutSum",
    /**
     * Отменили и вернули товаров с WB Клубом на сумму
     */
    WbClubCancelSum: "wbClub.cancelSum",
    /**
     * Процент выкупа с WB Клубом
     */
    WbClubBuyoutCount: "wbClub.buyoutCount",
    /**
     * Средняя цена с WB Клубом
     */
    WbClubAvgPrice: "wbClub.avgPrice",
    /**
     * Процент выкупа с WB Клубом
     */
    WbClubBuyoutPercent: "wbClub.buyoutPercent",
    /**
     * Среднее количество заказов в день с WB Клубом, шт
     */
    WbClubAvgOrderCountPerDay: "wbClub.avgOrderCountPerDay",
    /**
     * Отменили и вернули товаров с WB Клубом, шт
     */
    WbClubCancelCount: "wbClub.cancelCount",
  },
  /**
   * Поле для сортировки:
   *  - `avgPosition` — по средней позиции
   *  - `addToCart` — по добавлениям в корзину
   *  - `openCard` — по открытию карточки (переход на страницу товара)
   *  - `orders` — по количеству заказов
   *  - `cartToOrder` — по конверсии в заказ из поиска
   *  - `openToCart` — по конверсии в корзину из поиска
   *  - `visibility` — по видимости товара
   */
  AnalyticsOrderByGrTeField: {
    /**
     * по средней позиции
     */
    AvgPosition: "avgPosition",
    /**
     * по открытию карточки (переход на страницу товара)
     */
    OpenCard: "openCard",
    /**
     * по добавлениям в корзину
     */
    AddToCart: "addToCart",
    /**
     * по конверсии в корзину из поиска
     */
    OpenToCart: "openToCart",
    /**
     * по количеству заказов
     */
    Orders: "orders",
    /**
     * по конверсии в заказ из поиска
     */
    CartToOrder: "cartToOrder",
    /**
     * по видимости товара
     */
    Visibility: "visibility",
  },
  /**
   * Порядок сортировки:
   *  - `asc` — по возрастанию
   *  - `desc` — по убыванию
   */
  AnalyticsOrderByGrTeMode: {
    /**
     * по возрастанию
     */
    Asc: "asc",
    /**
     * по убыванию
     */
    Desc: "desc",
  },
  /**
   * Поле для сортировки:
   *  - `feedbackRating` — Рейтинг товара по отзывам
   *  - `feedbackCount` — Все отзывы за период
   *  - `fiveStar` — Отзывы 5 звёзд
   *  - `fourStar` — Отзывы 4 звезды
   *  - `threeStar` — Отзывы 3 звезды
   *  - `twoStar` — Отзывы 2 звезды
   *  - `oneStar` — Отзывы 1 звезда
   *  - `disqualified` — Отзывы, исключённые из рейтинга
   */
  AnalyticsOrderByItemRatingField: {
    /**
     * Рейтинг товара по отзывам
     */
    FeedbackRating: "feedbackRating",
    /**
     * Все отзывы за период
     */
    FeedbackCount: "feedbackCount",
    /**
     * Отзывы 5 звёзд
     */
    FiveStar: "fiveStar",
    /**
     * Отзывы 4 звезды
     */
    FourStar: "fourStar",
    /**
     * Отзывы 3 звезды
     */
    ThreeStar: "threeStar",
    /**
     * Отзывы 2 звезды
     */
    TwoStar: "twoStar",
    /**
     * Отзывы 1 звезда
     */
    OneStar: "oneStar",
    /**
     * Отзывы, исключённые из рейтинга
     */
    Disqualified: "disqualified",
  },
  /**
   * Порядок сортировки:
   *  - `asc` — по возрастанию
   *  - `desc` — по убыванию
   */
  AnalyticsOrderByItemRatingMode: {
    /**
     * по возрастанию
     */
    Asc: "asc",
    /**
     * по убыванию
     */
    Desc: "desc",
  },
  /**
   * Поле для сортировки:
   *  - `avgPosition` — по средней позиции
   *  - `addToCart` — по добавлениям в корзину
   *  - `openCard` — по открытию карточки (переход на страницу товара)
   *  - `orders` — по количеству заказов
   *  - `cartToOrder` — по конверсии в заказ из поиска
   *  - `openToCart` — по конверсии в корзину из поиска
   *  - `visibility` — по видимости товара
   *  - `minPrice` — по минимальной цене
   *  - `maxPrice` — по максимальной цене
   */
  AnalyticsOrderByMainAndDetailsField: {
    /**
     * по средней позиции
     */
    AvgPosition: "avgPosition",
    /**
     * по открытию карточки (переход на страницу товара)
     */
    OpenCard: "openCard",
    /**
     * по добавлениям в корзину
     */
    AddToCart: "addToCart",
    /**
     * по конверсии в корзину из поиска
     */
    OpenToCart: "openToCart",
    /**
     * по количеству заказов
     */
    Orders: "orders",
    /**
     * по конверсии в заказ из поиска
     */
    CartToOrder: "cartToOrder",
    /**
     * по видимости товара
     */
    Visibility: "visibility",
    /**
     * по минимальной цене
     */
    MinPrice: "minPrice",
    /**
     * по максимальной цене
     */
    MaxPrice: "maxPrice",
  },
  /**
   * Порядок сортировки:
   *  - `asc` — по возрастанию
   *  - `desc` — по убыванию
   */
  AnalyticsOrderByMainAndDetailsMode: {
    /**
     * по возрастанию
     */
    Asc: "asc",
    /**
     * по убыванию
     */
    Desc: "desc",
  },
  /**
   * Порядок сортировки:
   * - asc — по возрастанию
   * - desc — по убыванию
   */
  AnalyticsOrderByMode: {
    Asc: "asc",
    Desc: "desc",
  },
  /**
   * Тип отмены (при `"status":"cancel"`):
   *  - `app` — отказ до получения
   *  - `receipt` — отказ при получении
   *  - `expire` — истёк срок получения
   *  - `other` — техническая отмена
   */
  AnalyticsOrderCancelType: {
    /**
     * отказ до получения
     */
    App: "app",
    /**
     * отказ при получении
     */
    Receipt: "receipt",
    /**
     * истёк срок получения
     */
    Expire: "expire",
    /**
     * техническая отмена
     */
    Other: "other",
  },
  /**
   * Статус заказа:
   *  - `created` — оформлен
   *  - `buyout` — продан
   *  - `cancel` — отменён
   *  - `return` — возвращён
   *  - `returnDefective` — возвращён по причине брака
   */
  AnalyticsOrderStatus: {
    /**
     * оформлен
     */
    Created: "created",
    /**
     * продан
     */
    Buyout: "buyout",
    /**
     * отменён
     */
    Cancel: "cancel",
    /**
     * возвращён
     */
    Return: "return",
    /**
     * возвращён по причине брака
     */
    ReturnDefective: "returnDefective",
  },
  /**
   * Товары с какой средней позицией в поиске показывать в отчёте:
   *  - `all` — все
   *  - `firstHundred` — от 1 до 100
   *  - `secondHundred` — от 101 до 200
   *  - `below` — от 201 и ниже
   */
  AnalyticsPositionCluster: {
    /**
     * все
     */
    All: "all",
    /**
     * от 1 до 100
     */
    FirstHundred: "firstHundred",
    /**
     * от 101 до 200
     */
    SecondHundred: "secondHundred",
    /**
     * от 201 и ниже
     */
    Below: "below",
  },
  /**
   * Как сгруппировать данные (по умолчанию по дням):
   *
   *  * `day` — по дням
   *  * `week` — по неделям
   *  * `month` — по месяцам
   */
  AnalyticsSalesFunnelItemReqParamsAggregationLevel: {
    /**
     * по дням
     */
    Day: "day",
    /**
     * по неделям
     */
    Week: "week",
    /**
     * по месяцам
     */
    Month: "month",
  },
  /**
   * Фильтрация по поисковым запросам, по которым больше всего:
   *  - `openCard` — перешли в карточку
   *  - `addToCart` — добавили в корзину
   *  - `openToCart` — конверсия в корзину
   *  - `orders` — заказали товаров
   *  - `cartToOrder` — конверсия в заказ
   */
  AnalyticsSearchReportTextReqParamsTopOrderBy: {
    /**
     * перешли в карточку
     */
    OpenCard: "openCard",
    /**
     * добавили в корзину
     */
    AddToCart: "addToCart",
    /**
     * конверсия в корзину
     */
    OpenToCart: "openToCart",
    /**
     * заказали товаров
     */
    Orders: "orders",
    /**
     * конверсия в заказ
     */
    CartToOrder: "cartToOrder",
  },
  /**
   * Тип складов хранения товаров:
   *  - `""` — все
   *  - `wb` — склады WB
   *  - `mp` — склады продавца
   */
  AnalyticsStockType: {
    Empty: "",
    /**
     * склады WB
     */
    Wb: "wb",
    /**
     * склады продавца
     */
    Mp: "mp",
  },
  /**
   * Товары с какой средней позицией в поиске показывать в отчёте:
   *  - `all` — все
   *  - `firstHundred` — от 1 до 100
   *  - `secondHundred` — от 101 до 200
   *  - `below` — от 201 и ниже
   */
  AnalyticsTableDetailsRequestPositionCluster: {
    /**
     * все
     */
    All: "all",
    /**
     * от 1 до 100
     */
    FirstHundred: "firstHundred",
    /**
     * от 101 до 200
     */
    SecondHundred: "secondHundred",
    /**
     * от 201 и ниже
     */
    Below: "below",
  },
  /**
   * Сортировка по полю:
   *  - `ordersCount` — Заказы, шт.
   *  - `ordersSum` — Заказы, сумма
   *  - `avgOrders` — Среднее количество заказов в день
   *  - `buyoutCount` — Выкупы, шт.
   *  - `buyoutSum` — Выкупы, сумма
   *  - `buyoutPercent` — Процент выкупа
   *  - `stockCount` — Остатки на текущий день, шт.
   *  - `stockSum` — Стоимость остатков на текущий день
   *  - `saleRate` — Оборачиваемость текущих остатков
   *  - `avgStockTurnover` — Оборачиваемость средних остатков
   *  - `toClientCount` — В пути к клиенту, шт.
   *  - `fromClientCount` — В пути от клиента, шт.
   *  - `minPrice` — Минимальная цена продавца со скидкой продавца (без учёта скидки WB Клуба)
   *  - `maxPrice` — Максимальная цена продавца со скидкой продавца (без учёта скидки WB Клуба)
   *  - `officeMissingTime` — Время отсутствия товара на складе
   *  - `lostOrdersCount` — Упущенные заказы, шт.
   *  - `lostOrdersSum` — Упущенные заказы, сумма
   *  - `lostBuyoutsCount` — Упущенные выкупы, шт.
   *  - `lostBuyoutsSum` — Упущенные выкупы, сумма
   */
  AnalyticsTableGroupField: {
    /**
     * Заказы, шт
     */
    OrdersCount: "ordersCount",
    /**
     * Заказы, сумма
     */
    OrdersSum: "ordersSum",
    /**
     * Среднее количество заказов в день
     */
    AvgOrders: "avgOrders",
    /**
     * Выкупы, шт
     */
    BuyoutCount: "buyoutCount",
    /**
     * Выкупы, сумма
     */
    BuyoutSum: "buyoutSum",
    /**
     * Процент выкупа
     */
    BuyoutPercent: "buyoutPercent",
    /**
     * Остатки на текущий день, шт
     */
    StockCount: "stockCount",
    /**
     * Стоимость остатков на текущий день
     */
    StockSum: "stockSum",
    /**
     * Оборачиваемость текущих остатков
     */
    SaleRate: "saleRate",
    /**
     * Оборачиваемость средних остатков
     */
    AvgStockTurnover: "avgStockTurnover",
    /**
     * В пути к клиенту, шт
     */
    ToClientCount: "toClientCount",
    /**
     * В пути от клиента, шт
     */
    FromClientCount: "fromClientCount",
    /**
     * Минимальная цена продавца со скидкой продавца (без учёта скидки WB Клуба)
     */
    MinPrice: "minPrice",
    /**
     * Максимальная цена продавца со скидкой продавца (без учёта скидки WB Клуба)
     */
    MaxPrice: "maxPrice",
    /**
     * Время отсутствия товара на складе
     */
    OfficeMissingTime: "officeMissingTime",
    /**
     * Упущенные заказы, шт
     */
    LostOrdersCount: "lostOrdersCount",
    /**
     * Упущенные заказы, сумма
     */
    LostOrdersSum: "lostOrdersSum",
    /**
     * Упущенные выкупы, шт
     */
    LostBuyoutsCount: "lostBuyoutsCount",
    /**
     * Упущенные выкупы, сумма
     */
    LostBuyoutsSum: "lostBuyoutsSum",
  },
  /**
   * Доступность товара:
   *  - `deficient` — Дефицит
   *  - `actual` — Актуальный
   *  - `balanced` — Баланс
   *  - `nonActual` — Неактуальный
   *  - `nonLiquid` — Неликвид
   *  - `invalidData` — Не рассчитано
   */
  AnalyticsTableItemItemStMetricsAvailability: {
    /**
     * Дефицит
     */
    Deficient: "deficient",
    /**
     * Актуальный
     */
    Actual: "actual",
    /**
     * Баланс
     */
    Balanced: "balanced",
    /**
     * Неактуальный
     */
    NonActual: "nonActual",
    /**
     * Неликвид
     */
    NonLiquid: "nonLiquid",
    /**
     * Не рассчитано
     */
    InvalidData: "invalidData",
  },
  /**
   * Значения для `CommunicationsDomainReviewPinMethod`.
   */
  CommunicationsDomainReviewPinMethod: {
    Subscription: "subscription",
    Tariff: "tariff",
  },
  /**
   * Значения для `CommunicationsDomainReviewPinOn`.
   */
  CommunicationsDomainReviewPinOn: {
    Imt: "imt",
    Nm: "nm",
  },
  /**
   * Значения для `CommunicationsDomainReviewState`.
   */
  CommunicationsDomainReviewState: {
    Pinned: "pinned",
    Unpinned: "unpinned",
  },
  /**
   * Тип события:
   * - `message` — сообщение
   */
  CommunicationsEventType: {
    /**
     * сообщение
     */
    Message: "message",
  },
  /**
   * Значения для `CommunicationsOpenapiPinnedReviewItemResultPinMethod`.
   */
  CommunicationsOpenapiPinnedReviewItemResultPinMethod: {
    Subscription: "subscription",
    Tariff: "tariff",
  },
  /**
   * Значения для `CommunicationsOpenapiPinnedReviewItemResultPinOn`.
   */
  CommunicationsOpenapiPinnedReviewItemResultPinOn: {
    Imt: "imt",
    Nm: "nm",
  },
  /**
   * Значения для `CommunicationsOpenapiPinnedReviewItemResultState`.
   */
  CommunicationsOpenapiPinnedReviewItemResultState: {
    Pinned: "pinned",
    Unpinned: "unpinned",
  },
  /**
   * Причина открепления отзыва:
   *  - `sysTariffUnpinned` — закончилась подписка или тарифная опция
   *  - `sysLimitReached` — закончился общий лимит по подписке
   *  - `sysNoratingUnpinned` — отзыв исключён из рейтинга. Например, удалён или забанен
   *  - `sysAdditionalSlot` — к карточке или к группе [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек прикреплено максимальное количество отзывов
   */
  CommunicationsOpenapiPinnedReviewItemResultUnpinnedCause: {
    /**
     * закончилась подписка или тарифная опция
     */
    SysTariffUnpinned: "sysTariffUnpinned",
    /**
     * закончился общий лимит по подписке
     */
    SysLimitReached: "sysLimitReached",
    /**
     * отзыв исключён из рейтинга. Например, удалён или забанен
     */
    SysNoratingUnpinned: "sysNoratingUnpinned",
    /**
     * к карточке или к группе [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек прикреплено максимальное количество отзывов
     */
    SysAdditionalSlot: "sysAdditionalSlot",
  },
  /**
   * Метод закрепления:
   *  - `subscription` — подписка Джем
   *  - `tariff` — тарифная опция
   */
  CommunicationsOpenapiPinReviewItemPinMethod: {
    /**
     * тарифная опция
     */
    Tariff: "tariff",
    /**
     * подписка Джем
     */
    Subscription: "subscription",
  },
  /**
   * Место закрепления отзыва:
   *  - `nm` — карточка товара
   *  - `imt` — группа [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров
   */
  CommunicationsOpenapiPinReviewItemPinOn: {
    /**
     * карточка товара
     */
    Nm: "nm",
    /**
     * группа [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров
     */
    Imt: "imt",
  },
  /**
   * Метод закрепления:
   *  - `subscription` — подписка Джем
   *  - `tariff` — тарифная опция
   */
  CommunicationsOpenapiPinReviewItemResultDataItemPinMethod: {
    /**
     * тарифная опция
     */
    Tariff: "tariff",
    /**
     * подписка Джем
     */
    Subscription: "subscription",
  },
  /**
   * Место закрепления отзыва:
   *  - `nm` — карточка товара
   *  - `imt` — группа [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров
   */
  CommunicationsOpenapiPinReviewItemResultDataItemPinOn: {
    /**
     * карточка товара
     */
    Nm: "nm",
    /**
     * группа [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров
     */
    Imt: "imt",
  },
  /**
   * Статус
   */
  CommunicationsOpenapiResultErrStatus: {
    FeedbackNotFound: "feedbackNotFound",
    ItemNotFound: "itemNotFound",
    FeedbackMismatch: "feedbackMismatch",
    ItemNoImages: "itemNoImages",
    FeedbackExcluded: "feedbackExcluded",
    ImtNotDisplayed: "imtNotDisplayed",
    GlobalLimitReached: "globalLimitReached",
    UnitLimitReached: "unitLimitReached",
    TariffRestriction: "tariffRestriction",
    SubscriptionRestriction: "subscriptionRestriction",
    AlreadyPinned: "alreadyPinned",
    BodyNotValid: "bodyNotValid",
  },
  /**
   * Отправитель:
   * - `client` — покупатель
   * - `seller` — продавец
   * - `wb` — Wildberries
   */
  CommunicationsSender: {
    /**
     * покупатель
     */
    Client: "client",
    /**
     * продавец
     */
    Seller: "seller",
    /**
     * Wildberries
     */
    Wb: "wb",
  },
  /**
   * Название идентификатора маркировки для удаления. Передаётся только одно значение
   */
  DbsApiOrdersMetaDeleteRequestKey: {
    Imei: "imei",
    Uin: "uin",
    Gtin: "gtin",
    Sgtin: "sgtin",
    CustomsDeclaration: "customsDeclaration",
  },
  /**
   * Тип доставки:
   *  - `dbs` — доставка силами продавца
   *  - `dbsPickupPoint` — доставка силами продавца в ПВЗ
   *  - `edbs` — экспресс-доставка силами продавца
   */
  DbsOrderNewDBSDeliveryType: {
    /**
     * доставка силами продавца
     */
    Dbs: "dbs",
    /**
     * экспресс-доставка силами продавца
     */
    Edbs: "edbs",
    /**
     * доставка силами продавца в ПВЗ
     */
    DbsPickupPoint: "dbsPickupPoint",
  },
  /**
   * Название идентификаторов маркировки для удаления. Передаётся только одно значение.
   */
  DeleteApiV3OrdersOrderIdMetaKey: {
    Imei: "imei",
    Uin: "uin",
    Gtin: "gtin",
    Sgtin: "sgtin",
    CustomsDeclaration: "customsDeclaration",
  },
  /**
   * Периодичность отчётов:
   *  - `weekly` — еженедельные
   *  - `daily` — ежедневные
   */
  FinancesSalesReportListReqPeriod: {
    /**
     * ежедневные
     */
    Daily: "daily",
    /**
     * еженедельные
     */
    Weekly: "weekly",
  },
  /**
   * Периодичность отчётов:
   *  - `weekly` — еженедельные
   *  - `daily` — ежедневные
   */
  FinancesSalesReportsDetailedReqPeriod: {
    /**
     * ежедневные
     */
    Daily: "daily",
    /**
     * еженедельные
     */
    Weekly: "weekly",
  },
  /**
   * Код раздела профиля продавца, к которому пользователь получит доступ:
   * * `balance` — Просмотр баланса и вывод средств
   * * `brands` — Управление брендами
   * * `changeJam` — Доступ к подключению подписки **Джем**: **А/Б тесты**, отметки на фото, автозапуски видео, сравнение карточек
   * * `discountPrice` — Изменение цен на товары, управление скидками и акциями
   * * `finance` — Финансовая аналитика. Статистика по балансу, финансовые отчёты, история платежей
   * * `showcase` — Управление витриной магазина
   * * `suppliersDocuments` — Просмотр и скачивание документов по работе с площадкой
   * * `supply` — Создание и управление поставками FBW
   * * `questions` — Просмотр и ответы на вопросы покупателей
   * * `pinFeedbacks` — Возможность закреплять и откреплять отзывы
   * * `pointsForReviews` — Баллы за отзывы
   * * `feedbacks` — Просмотр и ответы на отзывы покупателей
   * * `oldAnalyticsReports` — Отчёты
   * * `marketplace` — Свой склад
   * * `brandsFlow` — Мои бренды
   * * `copyrightComplaints` — Обращения правообладателей
   * * `pretrialClaims` — Досудебные претензии
   * * `sellersChat` — Чат с покупателями
   * * `brandzone` — Бренд-зона. Публикация изменений
   * * `brandzoneSubscribe` — Управление подпиской бренд-зоны
   */
  GeneralAccessItemCode: {
    /**
     * Просмотр баланса и вывод средств
     */
    Balance: "balance",
    /**
     * Управление брендами
     */
    Brands: "brands",
    /**
     * Доступ к подключению подписки **Джем**: **А/Б тесты**, отметки на фото, автозапуски видео, сравнение карточек
     */
    ChangeJam: "changeJam",
    /**
     * Изменение цен на товары, управление скидками и акциями
     */
    DiscountPrice: "discountPrice",
    /**
     * Финансовая аналитика. Статистика по балансу, финансовые отчёты, история платежей
     */
    Finance: "finance",
    /**
     * Управление витриной магазина
     */
    Showcase: "showcase",
    /**
     * Просмотр и скачивание документов по работе с площадкой
     */
    SuppliersDocuments: "suppliersDocuments",
    /**
     * Создание и управление поставками FBW
     */
    Supply: "supply",
    /**
     * Просмотр и ответы на вопросы покупателей
     */
    Questions: "questions",
    /**
     * Возможность закреплять и откреплять отзывы
     */
    PinFeedbacks: "pinFeedbacks",
    /**
     * Баллы за отзывы
     */
    PointsForReviews: "pointsForReviews",
    /**
     * Просмотр и ответы на отзывы покупателей
     */
    Feedbacks: "feedbacks",
    /**
     * Отчёты
     */
    OldAnalyticsReports: "oldAnalyticsReports",
    /**
     * Свой склад
     */
    Marketplace: "marketplace",
    /**
     * Мои бренды
     */
    BrandsFlow: "brandsFlow",
    /**
     * Обращения правообладателей
     */
    CopyrightComplaints: "copyrightComplaints",
    /**
     * Досудебные претензии
     */
    PretrialClaims: "pretrialClaims",
    /**
     * Чат с покупателями
     */
    SellersChat: "sellersChat",
    /**
     * Бренд-зона. Публикация изменений
     */
    Brandzone: "brandzone",
    /**
     * Управление подпиской бренд-зоны
     */
    BrandzoneSubscribe: "brandzoneSubscribe",
  },
  /**
   * Роль пользователя:
   *  * `user` — пользователь, который активировал доступ
   *  * ` ` (пустая строка) — пользователь, который не активировал доступ
   */
  GeneralGetUsersResponseUsersItemRole: {
    /**
     * пользователь, который активировал доступ * ` ` (пустая строка) — пользователь, который не активировал доступ
     */
    User: "user",
    Empty: "",
  },
  /**
   * Статус опции:
   *  - `active` — активна
   *  - `pendingActivation` — подключена, начнёт работать с 00:00 следующего дня
   *  - `pendingDeactivation` — отключена, перестанет работать с 00:00 следующего дня
   */
  GeneralPlanBuilderOptionStatus: {
    /**
     * активна
     */
    Active: "active",
    /**
     * подключена, начнёт работать с 00:00 следующего дня
     */
    PendingActivation: "pendingActivation",
    /**
     * отключена, перестанет работать с 00:00 следующего дня
     */
    PendingDeactivation: "pendingDeactivation",
  },
  /**
   * Статус пакета:
   *  - `active` — активен
   *  - `pendingActivation` — подключён, начнёт работать с 00:00 следующего дня
   *  - `pendingDeactivation` — отключён, перестанет работать с 00:00 следующего дня
   */
  GeneralPlanBuilderPackageStatus: {
    /**
     * активен
     */
    Active: "active",
    /**
     * подключён, начнёт работать с 00:00 следующего дня
     */
    PendingActivation: "pendingActivation",
    /**
     * отключён, перестанет работать с 00:00 следующего дня
     */
    PendingDeactivation: "pendingDeactivation",
  },
  /**
   * Источник подключения подписки:
   *  - `constructor` — покупка через раздел **Конструктор тарифов**
   *  - `jam` — покупка через раздел **Подписка «Джем»**
   */
  GeneralSubscriptionsJamInfoActivationSource: {
    /**
     * покупка через раздел **Конструктор тарифов**
     */
    Constructor: "constructor",
    /**
     * покупка через раздел **Подписка «Джем»*
     */
    Jam: "jam",
  },
  /**
   * Уровень подписки:
   *  - `standard`
   *  - `advanced`
   *  - `premium`
   */
  GeneralSubscriptionsJamInfoLevel: {
    Standard: "standard",
    Advanced: "advanced",
    Premium: "premium",
  },
  /**
   * Статус подписки:
   *  - `active` — активна
   *  - `inactive` — истекла или отменена
   */
  GeneralSubscriptionsJamInfoState: {
    /**
     * активна
     */
    Active: "active",
    /**
     * истекла или отменена
     */
    Inactive: "inactive",
  },
  /**
   * Тип стикера
   */
  GetApiV3SuppliesSupplyIdBarcodeType: {
    Svg: "svg",
    Zplv: "zplv",
    Zplh: "zplh",
    Png: "png",
  },
  /**
   * Место закрепления отзыва:
   *  - `nm` — карточка товара
   *  - `imt` — группа [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров
   */
  GetFeedbacksV1PinsCountPinOn: {
    /**
     * карточка товара
     */
    Nm: "nm",
    /**
     * группа [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров
     */
    Imt: "imt",
  },
  /**
   * Закреплён ли отзыв:
   *  - `pinned` — да
   *  - `unpinned` — нет
   */
  GetFeedbacksV1PinsCountState: {
    /**
     * да
     */
    Pinned: "pinned",
    /**
     * нет
     */
    Unpinned: "unpinned",
  },
  /**
   * Место закрепления отзыва:
   *  - `nm` — карточка товара
   *  - `imt` — группа [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров
   */
  GetFeedbacksV1PinsPinOn: {
    /**
     * карточка товара
     */
    Nm: "nm",
    /**
     * группа [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров
     */
    Imt: "imt",
  },
  /**
   * Закреплён ли отзыв:
   *  - `pinned` — да
   *  - `unpinned` — нет
   */
  GetFeedbacksV1PinsState: {
    /**
     * да
     */
    Pinned: "pinned",
    /**
     * нет
     */
    Unpinned: "unpinned",
  },
  /**
   * Тип автовозврата:
   *  - `allToWarehouse` — все товары отправляются на склад WB, кроме товаров тех [предметов](/openapi/orders-fbs#tag/autoreturnSettings/operation/getMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestricted), которые автоматически возвращаются в ПВЗ
   *  - `allToPickupPoint` — все товары отправляются на пункт выдачи заказов
   *  - `manual` — используются ручные настройки
   */
  GetMarketplaceV3FbsSettingsAutoreturnsResponse200Type: {
    /**
     * все товары отправляются на склад WB, кроме товаров тех [предметов](/openapi/orders-fbs#tag/autoreturnSettings/operation/getMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestricted), которые автоматически возвращаются в ПВЗ
     */
    AllToWarehouse: "allToWarehouse",
    /**
     * все товары отправляются на пункт выдачи заказов
     */
    AllToPickupPoint: "allToPickupPoint",
    /**
     * используются ручные настройки
     */
    Manual: "manual",
  },
  /**
   * Статус
   */
  GetPingResponse200Status: {
    OK: "OK",
  },
  /**
   * Порядок выдачи
   * - `desc` — от наибольшего числового значения к наименьшему, от последнего по алфавиту значения к первому
   * - `asc` — от наименьшего числового значения к наибольшему, от первого по алфавиту значения к последнему
   */
  GetV1AnalyticsBannedProducsBlockedOrder: {
    /**
     * от наибольшего числового значения к наименьшему, от последнего по алфавиту значения к первому
     */
    Desc: "desc",
    /**
     * от наименьшего числового значения к наибольшему, от первого по алфавиту значения к последнему
     */
    Asc: "asc",
  },
  /**
   * Сортировка
   * - `brand` — по бренду
   * - `nmId` — по артикулу WB
   * - `title` — по наименованию товара
   * - `vendorCode` — по артикулу продавца
   * - `reason` — по причине блокировки
   */
  GetV1AnalyticsBannedProducsBlockedSort: {
    /**
     * по бренду
     */
    Brand: "brand",
    /**
     * по артикулу WB
     */
    NmId: "nmId",
    /**
     * по наименованию товара
     */
    Title: "title",
    /**
     * по артикулу продавца
     */
    VendorCode: "vendorCode",
    /**
     * по причине блокировки
     */
    Reason: "reason",
  },
  /**
   * Тип акции:
   *  - `regular` — акция
   *  - `auto` — автоакция
   */
  GetV1CalendarPromotionsDetailsResponse200DataPromotionsItemType: {
    /**
     * акция
     */
    Regular: "regular",
    /**
     * автоакция
     */
    Auto: "auto",
  },
  /**
   * Тип акции:
   *  - `regular` — акция
   *  - `auto` — автоакция
   */
  GetV1CalendarPromotionsResponse200DataPromotionsItemType: {
    /**
     * акция
     */
    Regular: "regular",
    /**
     * автоакция
     */
    Auto: "auto",
  },
  /**
   * Порядок выдачи:
   * - `desc` — по убыванию
   * - `asc` — по возрастанию
   */
  GetV1DeductionsOrder: {
    /**
     * по убыванию
     */
    Desc: "desc",
    /**
     * по возрастанию
     */
    Asc: "asc",
  },
  /**
   * Сортировка:
   * - `nmId` — по артикулу WB
   * - `dtBonus` — по дате и времени удержания
   * - `bonusSumm` — по сумме удержания
   */
  GetV1DeductionsSort: {
    /**
     * по артикулу WB
     */
    NmId: "nmId",
    /**
     * по дате и времени удержания
     */
    DtBonus: "dtBonus",
    /**
     * по сумме удержания
     */
    BonusSumm: "bonusSumm",
  },
  /**
   * Сортировка:
   *  - `desc` — по убыванию
   *  - `asc` — по возрастанию
   *
   * Только вместе с `sort`
   */
  GetV1DocumentsListOrder: {
    /**
     * по убыванию
     */
    Desc: "desc",
    /**
     * по возрастанию
     */
    Asc: "asc",
  },
  /**
   * Сортировка:
   *  - `date` — по дате создания документа
   *  - `category` — по категории (только при `locale=ru`)
   *
   * Только вместе с `order`
   */
  GetV1DocumentsListSort: {
    /**
     * по дате создания документа
     */
    Date: "date",
    /**
     * по категории (только при `locale=ru`)
     */
    Category: "category",
  },
  /**
   * Сортировка отзывов по дате (dateAsc/dateDesc)
   */
  GetV1FeedbacksArchiveOrder: {
    DateAsc: "dateAsc",
    DateDesc: "dateDesc",
  },
  /**
   * Сортировка отзывов по дате (dateAsc/dateDesc)
   */
  GetV1FeedbacksOrder: {
    DateAsc: "dateAsc",
    DateDesc: "dateDesc",
  },
  /**
   * Язык полей ответа:
   *  - `ru` — русский
   *  - `en` — английский
   */
  GetV1TariffConstructorOptionsLocale: {
    /**
     * русский
     */
    Ru: "ru",
    /**
     * английский
     */
    En: "en",
  },
  /**
   * Тип оплаты:
   * - `cpm` — за показы
   * - `cpc` — за клик
   */
  GetV2AdvertsPaymentType: {
    /**
     * за показы
     */
    Cpm: "cpm",
    /**
     * за клик
     */
    Cpc: "cpc",
  },
  /**
   * Тип идентификаторов маркировки для удаления. Передаётся только одно значение
   */
  InStorePickupApiOrdersMetaDeleteRequestKey: {
    Imei: "imei",
    Uin: "uin",
    Gtin: "gtin",
    Sgtin: "sgtin",
    CustomsDeclaration: "customsDeclaration",
  },
  /**
   * Название идентификатора маркировки для удаления. Передаётся только одно значение
   */
  OrdersDbwApiOrdersMetaDleteRequestV2Key: {
    Imei: "imei",
    Uin: "uin",
    Gtin: "gtin",
    Sgtin: "sgtin",
  },
  /**
   * Тип доставки:
   * - `fbs` — доставка на склад Wildberries (FBS)
   */
  OrdersFbsOrderDeliveryType: {
    /**
     * доставка на склад Wildberries (FBS)
     */
    Fbs: "fbs",
  },
  /**
   * Тип доставки:
   * - `fbs` — доставка на склад Wildberries (FBS)
   */
  OrdersFbsOrderNewDeliveryType: {
    /**
     * доставка на склад Wildberries (FBS)
     */
    Fbs: "fbs",
  },
  /**
   * Тип дат:
   *  - `factDate` — дата фактической отгрузки поставки
   *  - `createDate` — дата создания поставки
   *  - `supplyDate` — плановая дата отгрузки поставки
   *  - `updatedDate` — дата изменения поставки
   */
  OrdersFbwModelsDateFilterRequestType: {
    /**
     * дата фактической отгрузки поставки
     */
    FactDate: "factDate",
    /**
     * дата создания поставки
     */
    CreateDate: "createDate",
    /**
     * плановая дата отгрузки поставки
     */
    SupplyDate: "supplyDate",
    /**
     * дата изменения поставки
     */
    UpdatedDate: "updatedDate",
  },
  /**
   * Тип автовозврата малогабаритных товаров:
   *  - `allToWarehouse` — все товары отправляются на склад WB
   *  - `allToPickupPoint` — все товары отправляются на пункт выдачи заказов
   *  - `byCourier` — возврат продавцу курьером
   */
  PatchMarketplaceV3FbsSettingsAutoreturnsItemsRequestBodyType: {
    /**
     * все товары отправляются на склад WB
     */
    AllToWarehouse: "allToWarehouse",
    /**
     * все товары отправляются на пункт выдачи заказов
     */
    AllToPickupPoint: "allToPickupPoint",
    /**
     * возврат продавцу курьером
     */
    ByCourier: "byCourier",
  },
  /**
   * Тип автовозврата малогабаритных товаров:
   *  - `allToWarehouse` — отправлять все товары на склад WB, кроме товаров тех [предметов](/openapi/orders-fbs#tag/autoreturnSettings/operation/getMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestricted), которые автоматически возвращаются в ПВЗ
   *  - `allToPickupPoint` — отправлять все товары на пункт выдачи заказов
   *  - `manual` — использовать ручные настройки
   */
  PatchMarketplaceV3FbsSettingsAutoreturnsRequestBodyType: {
    /**
     * отправлять все товары на склад WB, кроме товаров тех [предметов](/openapi/orders-fbs#tag/autoreturnSettings/operation/getMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestricted), которые автоматически возвращаются в ПВЗ
     */
    AllToWarehouse: "allToWarehouse",
    /**
     * отправлять все товары на пункт выдачи заказов
     */
    AllToPickupPoint: "allToPickupPoint",
    /**
     * использовать ручные настройки
     */
    Manual: "manual",
  },
  /**
   * Место размещения:
   *  - `search` — в поиске (для кампаний с ручной ставкой)
   *  - `recommendations`— в рекомендациях (для кампаний с ручной ставкой)
   *  - `combined` — в поиске и рекомендациях (для кампаний с единой ставкой)
   */
  PatchV1BidsRequestBodyBidsItemNmBidsItemPlacement: {
    /**
     * в поиске (для кампаний с ручной ставкой)
     */
    Search: "search",
    /**
     * в рекомендациях (для кампаний с ручной ставкой)
     */
    Recommendations: "recommendations",
    /**
     * в поиске и рекомендациях (для кампаний с единой ставкой)
     */
    Combined: "combined",
  },
  /**
   * Статус сборочного задания, установленный продавцом
   */
  PostApiV3OrdersStatusResponse200OrdersItemSupplierStatus: {
    New: "new",
    Confirm: "confirm",
    Complete: "complete",
    Cancel: "cancel",
  },
  /**
   * Статус сборочного задания в системе Wildberries
   */
  PostApiV3OrdersStatusResponse200OrdersItemWbStatus: {
    Waiting: "waiting",
    Sorted: "sorted",
    Sold: "sold",
    Canceled: "canceled",
    CanceledByClient: "canceled_by_client",
    DeclinedByClient: "declined_by_client",
    Defect: "defect",
    ReadyForPickup: "ready_for_pickup",
    PostponedDelivery: "postponed_delivery",
    AcceptedByCarrier: "accepted_by_carrier",
    SentToCarrier: "sent_to_carrier",
  },
  /**
   * Статус генерации стикера:
   *  - `awaitingTrackNumber` — стикер не готов. Ожидается трек-номер от перевозчика.
   *  - `ready` — стикер готов
   */
  PostApiV3OrdersStickersCrossBorderResponse200StickersItemStatus: {
    /**
     * стикер не готов. Ожидается трек-номер от перевозчика
     */
    AwaitingTrackNumber: "awaitingTrackNumber",
    /**
     * стикер готов
     */
    Ready: "ready",
  },
  /**
   * Тип стикера
   */
  PostApiV3OrdersStickersType: {
    Svg: "svg",
    Zplv: "zplv",
    Zplh: "zplh",
    Png: "png",
  },
  /**
   * Тип стикера
   */
  PostApiV3SuppliesSupplyIdTrbxStickersType: {
    Svg: "svg",
    Zplv: "zplv",
    Zplh: "zplh",
    Png: "png",
  },
  /**
   * Язык полей ответа `name`, `value` и `object`:
   *  - `ru` — русский
   *  - `en` — английский
   *  - `zh` — китайский
   *
   * Не используется в песочнице. Данные песочницы возвращаются только на русском языке
   */
  PostContentV2GetCardsTrashLocale: {
    /**
     * русский
     */
    Ru: "ru",
    /**
     * английский
     */
    En: "en",
    /**
     * китайский
     */
    Zh: "zh",
  },
  /**
   * Метод закрепления:
   *  - `subscription` — подписка Джем
   *  - `tariff` — тарифная опция
   */
  PostFeedbacksV1PinsResponse200DataItemPinMethod: {
    /**
     * тарифная опция
     */
    Tariff: "tariff",
    /**
     * подписка Джем
     */
    Subscription: "subscription",
  },
  /**
   * Место закрепления отзыва:
   *  - `nm` — карточка товара
   *  - `imt` — группа [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров
   */
  PostFeedbacksV1PinsResponse200DataItemPinOn: {
    /**
     * карточка товара
     */
    Nm: "nm",
    /**
     * группа [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров
     */
    Imt: "imt",
  },
  /**
   * Куда будет возвращён товар:
   *  - `auto` — место возврата определяется автоматически
   *  - `byWarehouse` — на склад WB
   *  - `byPickupPoint` — на пункт выдачи заказов
   *  - `byCourier` — продавцу курьером. Всегда для товаров тех [предметов](/openapi/orders-fbs#tag/autoreturnSettings/operation/getMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestricted), которые автоматически возвращаются в ПВЗ
   */
  PostMarketplaceV3FbsSettingsAutoreturnsItemsResponse200ResultsItemType: {
    /**
     * место возврата определяется автоматически
     */
    Auto: "auto",
    /**
     * на склад WB
     */
    ByWarehouse: "byWarehouse",
    /**
     * на пункт выдачи заказов
     */
    ByPickupPoint: "byPickupPoint",
    /**
     * продавцу курьером. Всегда для товаров тех [предметов](/openapi/orders-fbs#tag/autoreturnSettings/operation/getMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestricted), которые автоматически возвращаются в ПВЗ
     */
    ByCourier: "byCourier",
  },
  /**
   * Тип оплаты:
   *  - `cpm` — за показы
   *  - `cpc` — за клик
   */
  PostV1BidsMinRequestBodyPaymentType: {
    /**
     * за показы
     */
    Cpm: "cpm",
    /**
     * за клик
     */
    Cpc: "cpc",
  },
  /**
   * Места размещения:
   *  - `search` — поиск
   *  - `recommendation` — рекомендации
   *  - `combined` — поиск и рекомендации
   */
  PostV1BidsMinRequestBodyPlacementTypesItem: {
    /**
     * поиск и рекомендации
     */
    Combined: "combined",
    /**
     * поиск
     */
    Search: "search",
    /**
     * рекомендации
     */
    Recommendation: "recommendation",
  },
  /**
   * Тип ставки:
   *  - `manual` — ручная
   *  - `unified` — единая
   */
  PostV2SeacatSaveAdRequestBodyBidType: {
    /**
     * ручная
     */
    Manual: "manual",
    /**
     * единая
     */
    Unified: "unified",
  },
  /**
   * Тип оплаты:
   * - `cpm` — за показы
   * - `cpc` — за клик. При создании с этим типом оплаты в кампании автоматически устанавливается минимальная ставка
   */
  PostV2SeacatSaveAdRequestBodyPaymentType: {
    /**
     * за показы
     */
    Cpm: "cpm",
    /**
     * за клик. При создании с этим типом оплаты в кампании автоматически устанавливается минимальная ставка
     */
    Cpc: "cpc",
  },
  /**
   * Места размещения:
   *  - `search` — в поиске
   *  - `recommendations` — в рекомендациях
   *
   * Укажите только для кампании с ручной ставкой
   */
  PostV2SeacatSaveAdRequestBodyPlacementTypesItem: {
    /**
     * в поиске
     */
    Search: "search",
    /**
     * в рекомендациях
     */
    Recommendations: "recommendations",
  },
  /**
   * Формат стикера
   */
  PostV3DbsOrdersStickersType: {
    Pdf: "pdf",
  },
  /**
   * Тип стикера
   */
  PostV3DbwOrdersStickersType: {
    Svg: "svg",
    Zplv: "zplv",
    Zplh: "zplh",
    Png: "png",
  },
  /**
   * Места размещения:
   *  - `search` — поиск
   *  - `recommendation` — рекомендации
   *  - `combined` — поиск и рекомендации
   */
  PromotionPlacementType: {
    /**
     * поиск и рекомендации
     */
    Combined: "combined",
    /**
     * поиск
     */
    Search: "search",
    /**
     * рекомендации
     */
    Recommendation: "recommendation",
  },
  /**
   * Тип оплаты:
   *  - `cpc` — за клики
   */
  PromotionV0BidsRecommendationsCpcResponsePaymentType: {
    /**
     * за клики
     */
    Cpc: "cpc",
  },
  /**
   * Тип оплаты:
   *  - `cpm` — за показы
   */
  PromotionV0BidsRecommendationsCpmResponsePaymentType: {
    /**
     * за показы
     */
    Cpm: "cpm",
  },
  /**
   * Код стран по стандарту ISO 3166-2. Чтобы получить данные по всем странам, оставьте параметр пустым
   */
  ReportsExciseReportRequestCountriesItem: {
    AM: "AM",
    BY: "BY",
    KG: "KG",
    KZ: "KZ",
    RU: "RU",
    UZ: "UZ",
  },
  /**
   * Тип склада хранения товаров
   */
  ReportsOrdersItemWarehouseType: {
    WB: "Склад WB",
    Empty: "Склад продавца",
  },
  /**
   * Тип склада хранения товаров
   */
  ReportsSalesItemWarehouseType: {
    WB: "Склад WB",
    Empty: "Склад продавца",
  },
} as const;
