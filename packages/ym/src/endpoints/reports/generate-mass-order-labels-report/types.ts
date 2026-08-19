// Generated public types for this Yandex Market endpoint.
type ReportsApiResponseStatusType = "OK" | "ERROR";
type ReportsBusinessId = number;
type ReportsGenerateMassOrderLabelsRequest = {
  readonly businessId: ReportsBusinessId;
  readonly orderIds: readonly number[];
  readonly sortingType?: ReportsLabelsSortingType;
};
type ReportsGenerateReportDTO = {
  readonly reportId: string;
  readonly estimatedGenerationTime: number;
};
type ReportsGenerateReportResponse = {
  readonly status: ReportsApiResponseStatusType;
  readonly result?: ReportsGenerateReportDTO;
};
type ReportsLabelsSortingType =
  | "SORT_BY_GIVEN_ORDER"
  | "SORT_BY_ORDER_CREATED_AT";

/**
 * Параметры метода «Готовые ярлыки‑наклейки на все коробки в нескольких заказах».
 *
 * Запускает генерацию PDF-файла с ярлыками для переданных заказов. Подробно о том, зачем они нужны и как выглядят, рассказано [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/orders/fbs/packaging/marking.html).
 *
 * Чтобы на ярлыке отображался внешний идентификатор заказа, передайте его в методе [POST v2/campaigns/{campaignId}/orders/{orderId}/external-id](../../reference/orders/updateExternalOrderId.md).
 *
 * Узнать статус генерации и получить ссылку на готовый файл можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
 *
 * POST /v2/reports/documents/labels/generate
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GenerateMassOrderLabelsReportInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query?: {
    /**
     * Настройка размещения ярлыков на странице. Если параметра нет, возвращается PDF с ярлыками формата :no-translate[A7].
     *
     * Размещение ярлыков на странице PDF-файла:
     *
     * * `A9_HORIZONTALLY` — ярлык размером 58 × 40 мм без полей, близок к формату :no-translate[A9].
     *
     * Пример ярлыка для продавцов Маркета
     *
     * ![Изображение горизонтального ярлыка формата :no-translate[A9] для продавцов Маркета](../../_images/labels/label-A9-horizontally.png)
     *
     * Пример ярлыка для продавцов Market Yandex Go
     *
     * ![Изображение горизонтального ярлыка формата A9 для продавцов Market Yandex Go](../../_images/labels/label-A9-horizontally-uz.png)
     *
     * * `A9` — ярлык размером 40 × 58 мм без полей, близок к формату A9.
     *
     * Пример ярлыка для продавцов Маркета
     *
     * ![Изображение вертикального ярлыка формата :no-translate[A9] для продавцов Маркета](../../_images/labels/label-A9.png)
     *
     * Пример ярлыка для продавцов Market Yandex Go
     *
     * ![Изображение вертикального ярлыка формата :no-translate[A9] для продавцов Market Yandex Go](../../_images/labels/label-A9-uz.png)
     *
     * * `A7` — ярлык размером 75 × 120 мм (80,4 × 125,6 мм с учетом полей), близок к формату :no-translate[A7].
     *
     * Пример ярлыка для продавцов Маркета
     *
     * ![Изображение ярлыка формата A7 для продавцов Маркета](../../_images/labels/label-A7.jpg)
     *
     * Пример ярлыка для продавцов Market Yandex Go
     *
     * ![Изображение ярлыка формата :no-translate[A7] для продавцов Market Yandex Go](../../_images/labels/label-A7-uz.png)
     *
     * * `A4` — на листе A4 располагается ярлык того формата, который выбран в кабинете продавца на Маркете — перейдите на страницу **Заказы** → **Заказы и отгрузки** → на вкладке нужной модели работы нажмите кнопку **Формат ярлыков**.
     */
    readonly format?: "A9_HORIZONTALLY" | "A9" | "A7" | "A4";
  } /**
   * Тело запроса.
   */;
  readonly body: ReportsGenerateMassOrderLabelsRequest;
};
/**
 * Успешный ответ метода «Готовые ярлыки‑наклейки на все коробки в нескольких заказах».
 *
 * 200: В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый файл.
 *
 * Если при генерации не удалось найти часть заказов, в ответе на запрос получения готового файла вернется подстатус `RESOURCE_NOT_FOUND`.
 */
export type GenerateMassOrderLabelsReportResponse =
  ReportsGenerateReportResponse;
