// Generated public types for this Yandex Market endpoint.
type CampaignsApiAvailabilityStatusType =
  | "AVAILABLE"
  | "DISABLED_BY_INACTIVITY"
  | "DISABLED_BY_NO_ACTIVE_CONTRACT"
  | "MANUALLY_DISABLED"
  | "DISABLED_BY_NO_PLACEMENT_TYPE";
type CampaignsBusinessDTO = {
  readonly id?: CampaignsBusinessId;
  readonly name?: string;
};
type CampaignsBusinessId = number;
type CampaignsCampaignDTO = {
  readonly domain?: string;
  readonly id?: CampaignsCampaignId;
  readonly clientId?: number;
  readonly business?: CampaignsBusinessDTO;
  readonly placementType?: CampaignsPlacementType;
  readonly apiAvailability?: CampaignsApiAvailabilityStatusType;
};
type CampaignsCampaignId = number;
type CampaignsGetCampaignResponse = {
  readonly campaign?: CampaignsCampaignDTO;
};
type CampaignsPlacementType = "FBS" | "FBY" | "DBS" | "LAAS";

/**
 * Параметры метода «Информация о магазине».
 *
 * Возвращает информацию о магазине.
 *
 * GET /v2/campaigns/{campaignId}
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetCampaignInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.
     *
     * Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:
     *
     * * блок **Идентификатор кампании**;
     * * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.
     *
     * ⚠️ Не путайте его с:
     * - идентификатором магазина, который отображается в личном кабинете продавца;
     * - рекламными кампаниями.
     *
     * Формат: `int64`.
     *
     * Минимальное значение: 1.
     */
    readonly campaignId: number;
  };
};
/**
 * Успешный ответ метода «Информация о магазине».
 *
 * 200: Информация о магазине.
 */
export type GetCampaignResponse = CampaignsGetCampaignResponse;
