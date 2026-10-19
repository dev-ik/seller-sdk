# Переход с Seller SDK 0.3.x на 0.4.0: Ozon

SDK проверен по официальному `swagger.json`, предоставленному 19 октября 2026.
Добавлены 11 замен устаревших операций. Новые самостоятельные возможности Ozon
вне этой миграции перечислены в [реестре](migration-audit-2026-10-19.json).

Руководство относится к `@seller-sdk/ozon` и `seller-sdk`. Во втором случае
используйте `seller.ozon` вместо `ozon` в примерах.

## Порядок обновления

После публикации `0.4.0` обновите выбранный пакет:

```bash
npm install @seller-sdk/ozon@0.4.0
# Если используете общий клиент:
npm install seller-sdk@0.4.0
```

Устанавливать оба пакета не требуется. Затем:

1. Обновите обращения к алиасам этикеток, автодобавления в акции и импорта
   изображений по примерам ниже. Их сигнатуры и ответы изменились.
2. Замените deprecated-методы `promotions` явными новыми методами из таблицы.
   Старые имена без версии продолжают вызывать прежние endpoints.
3. Передавайте `delivery_schema` в фильтре отчёта отправлений, замените
   удалённые значения enum сертификатов и обновите моки списка уведомлений.
4. Запустите проверку TypeScript и интеграционные тесты вашего приложения.
   Отдельно проверьте обработку частично сформированных этикеток и ошибок акций.

В примерах используется клиент:

```ts
import { OzonClient } from "@seller-sdk/ozon";

const ozon = new OzonClient({
  clientId: process.env["OZON_CLIENT_ID"]!,
  apiKey: process.env["OZON_API_KEY"]!,
});
```

## Этикетки

| Старый метод                               | Новый метод                             |
| ------------------------------------------ | --------------------------------------- |
| `postings.createFbsPackageLabelBatchV1/V2` | `postings.createFbsPackageLabelBatchV3` |
| `postings.getFbsPackageLabelBatchV1`       | `postings.getFbsPackageLabelBatchV2`    |
| `postings.printFbsPackageLabelsV2`         | Асинхронные create v3 и get v2          |

Алиасы `createFbsPackageLabelBatch` и `getFbsPackageLabelBatch` уже используют
новые версии. Старые endpoints по snapshot отключают **2 ноября 2026**.
Запрос создания содержит `posting_numbers`, ответ — `tasks` в корне.
Получение файла возвращает объект `status`, а не строку внутри `result`.

```ts
const batch = await ozon.postings.createFbsPackageLabelBatch({
  posting_numbers: ["TEST-POSTING-1"],
});
const taskId = batch.tasks?.[0]?.task_id;
if (taskId !== undefined) {
  const label = await ozon.postings.getFbsPackageLabelBatch({
    task_id: taskId,
  });
  if (label.status?.code === "completed") {
    // Перед использованием file_url проверьте unprinted_postings и error.
    // Если часть отправлений не напечатана, сформируйте этикетки для них отдельно.
  }
}
```

При `pending` или `in_progress` опросите get позже. SDK не скрывает ошибку задачи
и не выдаёт частичный результат за полностью сформированный файл.

## Акции Ozon

| Старый метод в `ozon.promotions` | Замена                          |
| -------------------------------- | ------------------------------- |
| `listPromotionCandidates`        | `listPromotionCandidatesV2`     |
| `listPromotionProducts`          | `listPromotionProductsV2`       |
| `activatePromotionProducts`      | `updatePromotionProductsV1`     |
| `deactivatePromotionProducts`    | `deactivatePromotionProductsV2` |

В `ozon.actions` алиасы `listAutoAddProducts`, `listAutoAddProductCandidates`,
`deleteAutoAddProducts` и `updateAutoAddProducts` теперь выбирают v2.
Явные методы V1 сохранены. Старые unversioned-методы `ozon.promotions`
сохранены с `@deprecated`, поскольку новые операции имеют другие контракты.

Цены новых методов — объекты `{ amount: string, currency: string }`.
`product_ids` в запросах deactivate/delete и соответствующих ответах — строки.
Не преобразуйте строковые идентификаторы в числа.

```ts
await ozon.promotions.updatePromotionProductsV1({
  action_id: 123,
  products: [
    {
      product_id: 456,
      action_price: { amount: "999.00", currency: "RUB" },
    },
  ],
});
```

Это изменение предельной цены товара и участия в акции. Удаление из
«Эластичного бустинга» и «Максимального бустинга» выполняется через update
с ценой не ниже лимита акции; deactivate v2 предназначен для «Промокодов».
Повторы этих операций записи автоматически не выполняются.

Swagger ещё содержит дату отключения 13 октября. В более позднем
[официальном объявлении](https://t.me/OzonSellerAPI/709) Ozon перенёс её
на **19 октября 2026**. Исходный Swagger сохранён без правки этой даты.

## Изображения

`ozon.products.pictures.import` вызывает `/v2/product/pictures/import`:

```ts
const task = await ozon.products.pictures.import({
  items: [
    { offer_id: "TEST-OFFER-1", images: ["https://example.com/photo.jpg"] },
  ],
});
```

Ответ содержит `task_id`. Для каждого товара передавайте полный желаемый набор
изображений: предыдущий набор заменяется. Явный новый метод —
`importProductPicturesV2`; старый `importProductPictures` оставлен deprecated.

## Остальные изменения

- Список товаров, цены и остатки сохраняют `total_items`. `total` ещё принимается
  для совместимости, но помечен deprecated; отключение по snapshot —
  **23 ноября 2026**. Пагинация `products.listPages/listAll` использует cursor,
  а не количество `total`.
- В списке товаров доступен `filter.visibility: "SHOWCASE_SELECT_ACTIVE"`.
  В фильтрах цен и остатков этого значения в их schemas нет.
- `declared_price` в запросе обновления цен — строка, а в ответах информации
  о товарах и ценах — объект `{ amount, currency }`.
- У списка push-уведомлений появились фильтры и offset-пагинация:
  `ozon.notifications.listNotificationsV1({ availability_statuses: ["GREEN"], limit: 100 }, options)`.
  Старый вызов `listNotificationsV1(options)` также поддерживается. Ответ
  содержит обязательные `total_count` и `availability_status_thresholds`,
  а элементы `urls` — `availability_status`, `availability_status_date`,
  `disable_reason`, `problematic_type` и `reason_details`. Обновите свои моки
  и fixtures, если создаёте ответы этого метода вручную.
- В фильтре `createPostingsReportV1` обязателен `delivery_schema`.
- Из enum сертификатов удалены `TECHNICAL_REGULATIONS_RF`,
  `TECHNICAL_REGULATIONS_CU` и `GOST` в соответствии с новым snapshot.
- Для товаров сертификата используйте `limit/last_id`; следующий `last_id` —
  последний `result.items.product_id`. Поля `page/page_size` ещё присутствуют
  в snapshot как deprecated, но Ozon объявил их отключение 28 сентября.
- FBS list v4 и FBO list v3 уже поддерживались. Их алиасы не менялись.
- `quant/info` и `quant/list` отсутствуют в новом Swagger. Публичные методы
  сохранены по архивному snapshot; доступность в production не подтверждена.

## Покрытие и проверка

SDK содержит 472 метода Ozon: 470 операций из snapshot с 483 операциями
и 2 архивные операции `quant`. В этом выпуске добавлены 11 замен устаревших
методов. Ещё 13 новых самостоятельных операций и часть новых полей ответов
остаются вне миграции; точный список и ограничения есть в
[реестре](migration-audit-2026-10-19.json).

Контракты проверены по предоставленному официальному Swagger и тестами
с искусственными ответами. Реальные credentials и production-операции Ozon
для проверки не использовались. Наличие метода в SDK или snapshot само по себе
не подтверждает доступность deprecated endpoint на стороне Ozon.
