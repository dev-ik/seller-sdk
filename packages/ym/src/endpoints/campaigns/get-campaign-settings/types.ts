// Generated public types for this Yandex Market endpoint.
type CampaignsCampaignSettingsDTO = {
  readonly countryRegion?: number;
  readonly shopName?: string;
  readonly showInContext?: boolean;
  readonly showInPremium?: boolean;
  readonly useOpenStat?: boolean;
  readonly localRegion?: CampaignsCampaignSettingsLocalRegionDTO;
  readonly taxation: CampaignsTaxationInfoDTO;
};
type CampaignsCampaignSettingsDeliveryDTO = {
  readonly schedule?: CampaignsCampaignSettingsScheduleDTO;
};
type CampaignsCampaignSettingsLocalRegionDTO = {
  readonly id?: number;
  readonly name?: string;
  readonly type?: CampaignsRegionType;
  readonly deliveryOptionsSource?: CampaignsCampaignSettingsScheduleSourceType;
  readonly delivery?: CampaignsCampaignSettingsDeliveryDTO;
};
type CampaignsCampaignSettingsScheduleDTO = {
  readonly availableOnHolidays?: boolean;
  readonly customHolidays: readonly CampaignsDateDdMmYyyy[];
  readonly customWorkingDays: readonly CampaignsDateDdMmYyyy[];
  readonly period?: CampaignsCampaignSettingsTimePeriodDTO;
  readonly totalHolidays: readonly CampaignsDateDdMmYyyy[];
  readonly weeklyHolidays: readonly number[];
};
type CampaignsCampaignSettingsScheduleSourceType = "WEB" | "YML";
type CampaignsCampaignSettingsTimePeriodDTO = {
  readonly fromDate?: CampaignsDateDdMmYyyy;
  readonly toDate?: CampaignsDateDdMmYyyy;
};
type CampaignsDateDdMmYyyy = string;
type CampaignsGetCampaignSettingsResponse = {
  readonly settings?: CampaignsCampaignSettingsDTO;
};
type CampaignsRegionType =
  | "OTHER"
  | "CONTINENT"
  | "REGION"
  | "COUNTRY"
  | "COUNTRY_DISTRICT"
  | "REPUBLIC"
  | "CITY"
  | "VILLAGE"
  | "CITY_DISTRICT"
  | "SUBWAY_STATION"
  | "REPUBLIC_AREA";
type CampaignsTaxationInfoDTO = { readonly vat?: CampaignsVatRateType | null };
type CampaignsVatRateType =
  | "VAT_22"
  | "NO_VAT"
  | "VAT_12"
  | "VAT_10"
  | "VAT_05"
  | "VAT_07";

/**
 * Параметры метода «Настройки магазина».
 *
 * Возвращает информацию о настройках магазина, идентификатор которого указан в запросе.
 *
 * GET /v2/campaigns/{campaignId}/settings
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetCampaignSettingsInput = {
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
 * Успешный ответ метода «Настройки магазина».
 *
 * 200: Настройки магазина.
 */
export type GetCampaignSettingsResponse = CampaignsGetCampaignSettingsResponse;
