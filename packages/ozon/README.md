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
  clientId: process.env.OZON_CLIENT_ID!,
  apiKey: process.env.OZON_API_KEY!,
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
await ozon.finance.listFinanceTransactions({
  filter: {
    date: {
      from: "2026-08-01T00:00:00Z",
      to: "2026-08-15T00:00:00Z",
    },
    transaction_type: OzonValues.FinanceTransactionType.All,
  },
  page: 1,
  page_size: 100,
}); // сейчас v3
```

Методы вроде `listWarehousesV2` остаются доступны для явной фиксации контракта.
Если исходный endpoint устарел, его алиас также помечается `@deprecated`.

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
