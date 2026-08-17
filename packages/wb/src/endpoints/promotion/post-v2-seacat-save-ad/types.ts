// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Создать кампанию».
 *
 * Метод создаёт кампанию:
 *  - с ручной ставкой для продвижения товаров в поиске и/или рекомендациях
 *  - с единой ставкой для продвижения товаров одновременно в поиске и рекомендациях
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 5 запросов | 12 сек | 5 запросов |
 * | Сервисный | 1 мин | 5 запросов | 12 сек | 5 запросов |
 * | Базовый с секретом | 1 мин | 5 запросов | 12 сек | 5 запросов |
 * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
 *
 * POST /adv/v2/seacat/save-ad
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type PostV2SeacatSaveAdInput = {
  /**
   * Тело запроса.
   */
  readonly body?: {
    /**
     * Название кампании
     */
    readonly name: string;

    /**
     * Карточки товаров для кампании. Доступные карточки товаров можно получить с помощью метода [Карточки товаров для кампаний](./promotion#tag/creatingCampaigns/operation/postV2SupplierNms). Максимум 50 товаров (`nm`)
     */
    readonly nms?: readonly number[];

    /**
     * Тип ставки:
     *  - `manual` — ручная
     *  - `unified` — единая
     *
     * Значение по умолчанию: `"manual"`.
     */
    readonly bid_type?: "manual" | "unified";

    /**
     * Тип оплаты:
     * - `cpm` — за показы
     * - `cpc` — за клик. При создании с этим типом оплаты в кампании автоматически устанавливается минимальная ставка
     *
     * Значение по умолчанию: `"cpm"`.
     */
    readonly payment_type?: "cpm" | "cpc";

    /**
     * Места размещения:
     *  - `search` — в поиске
     *  - `recommendations` — в рекомендациях
     *
     * Укажите только для кампании с ручной ставкой
     *
     * Значение по умолчанию: `["search"]`.
     */
    readonly placement_types?: readonly ("search" | "recommendations")[];
  };
};
/**
 * Успешный ответ метода «Создать кампанию».
 *
 * 200: Успешно.
 */
export type PostV2SeacatSaveAdResponse = number;
