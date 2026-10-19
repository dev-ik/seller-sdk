# @seller-sdk/ozon

> Типобезопасный серверный SDK для Ozon Seller API.

Пакет устанавливается отдельно и содержит только реализацию Ozon Seller API.

## Установка

```bash
npm i @seller-sdk/ozon
```

Требуется Node.js 20.10 или новее.

## Первый запрос

```ts
import { OzonClient, OzonValues } from "@seller-sdk/ozon";

const ozon = new OzonClient({
  clientId: process.env["OZON_CLIENT_ID"]!,
  apiKey: process.env["OZON_API_KEY"]!,
});

const products = await ozon.products.list({
  filter: {
    visibility: OzonValues.ProductListVisibility.All,
  },
  limit: 100,
});
```

Все операции доступны только через типизированные области: `products`,
`postings`, `finance`, `analytics`, `warehouses` и другие.

## Переход с 0.3.x на 0.4.0

Обновлены методы этикеток, акций и загрузки изображений. Алиасы этикеток,
автодобавления в акции и `products.pictures.import` используют новые версии.
Ответы сохраняют структуру Ozon, включая `status.code`, `tasks` и денежные
объекты `{ amount, currency }`. Для количества товаров используйте `total_items`.

Перед обновлением проверьте [руководство по переходу](https://github.com/dev-ik/seller-sdk/blob/main/docs/ozon/MIGRATION-2026-10.md):
у новых версий изменились формы запросов и ответов. Старые явные методы сохранены
с предупреждениями; это не гарантирует их доступность на стороне Ozon.

SDK содержит 472 метода: 470 из текущего snapshot и 2 архивные операции `quant`.
13 новых операций и часть новых полей ответов остаются вне этой миграции;
подробности приведены в руководстве.

## Подсказки TypeScript

Наведите курсор на метод или поле запроса, чтобы увидеть описание Ozon,
обязательные поля, ограничения, пример и предупреждение об устаревании.

Строковые литералы поддерживаются, но `OzonValues` удобнее для выбора закрытых
значений:

```ts
await ozon.products.list({
  filter: {
    visibility: OzonValues.ProductListVisibility.Visible,
  },
  limit: 100,
});
```

Каждая константа `OzonValues`, для которой Ozon публикует однозначное
пояснение, показывает его в IntelliSense. Например, для `Visible` редактор
покажет «Товары, которые видны покупателям».

Тип отдельно подготовленного запроса можно получить прямо из метода:

```ts
const request = {
  date: "2026-08-15",
  last_id: "",
} satisfies Parameters<typeof ozon.finance.accruals.byDay>[0];

const page = await ozon.finance.accruals.byDay(request);
```

## Версии методов

Используйте рекомендуемый метод без версии:

```ts
await ozon.warehouses.listWarehouses({ limit: 100 }); // сейчас v2
await ozon.postings.createFbsPackageLabelBatch({
  posting_numbers: ["TEST-POSTING-1"],
}); // сейчас v3
```

Методы вроде `listWarehousesV2` остаются доступны для явной фиксации контракта.
Если исходный endpoint устарел, его алиас также помечается `@deprecated`.
Для акций используйте `promotions.listPromotionCandidatesV2` и
`promotions.listPromotionProductsV2`: их старые имена без версии сохранены
с прежним контрактом и предупреждением об устаревании.

## Настройки клиента и запроса

```ts
const ozon = new OzonClient(
  { clientId, apiKey },
  {
    timeoutMs: 30_000,
    deadlineMs: 60_000,
    maxRetries: 2,
    onResponse(metadata) {
      observe(metadata);
    },
  },
);

await ozon.products.list(
  { filter: {}, limit: 100 },
  {
    timeoutMs: 10_000,
    deadlineMs: 30_000,
    maxRetries: 1,
    signal: abortController.signal,
  },
);
```

Повторы применяются только к безопасным операциям чтения. Мутации всегда
выполняются одной попыткой.

## Пагинация

```ts
for await (const product of ozon.products.listAll({
  filter: {},
  limit: 100,
})) {
  console.log(product.offer_id);
}

for await (const page of ozon.postings.fbs.listPages(input)) {
  console.log(page.postings);
}
```

Для нестандартных форматов курсора экспортируются `paginateOzonPages`,
`paginateOzonItems` и ограниченный по памяти `collectOzonItems`.

## Ошибки

```ts
import { toSellerSdkErrorDetails } from "@seller-sdk/ozon";

try {
  await ozon.products.list({ filter: {}, limit: 100 });
} catch (error) {
  console.error(toSellerSdkErrorDetails(error));
}
```

В нормализованный объект не попадают stack, cause, credentials, authorization
headers и необработанные тела ответов.

## Новый метод Ozon до обновления SDK

```ts
const response = await ozon.rawRequest<{ result: unknown }>(
  "POST",
  "/v1/new-operation",
  { limit: 100 },
  { retrySafety: "safe" },
);

console.log(response.data, response.lastResponse.requestId);
```

`rawRequest` всегда использует `https://api-seller.ozon.ru` и аутентификацию
клиента, но не выполняет endpoint-specific SafeShape-проверку. Указывайте
`retrySafety: "safe"` только для проверенной read-only операции.

Полный каталог: [справочник Ozon SDK](https://github.com/dev-ik/seller-sdk/blob/main/docs/ozon/API-REFERENCE.md).

## Лицензия и товарные знаки

[MIT](https://github.com/dev-ik/seller-sdk/blob/main/LICENSE) © Seller SDK
contributors.

`@seller-sdk/ozon` — независимый open-source проект. Он не связан с Ozon, не
одобрен и не спонсируется Ozon. Название Ozon используется только для
обозначения совместимости с Ozon Seller API.
