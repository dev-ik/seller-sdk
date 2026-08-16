# Публичный API

## Пакет Ozon

```bash
npm i @seller-sdk/ozon
```

```ts
import { OzonClient } from "@seller-sdk/ozon";

const ozon = new OzonClient({ clientId, apiKey });
```

Пакет самостоятельный: он не устанавливает `seller-sdk`, отдельный core или
будущие marketplace-пакеты.

## Общий пакет

```bash
npm i seller-sdk
```

```ts
import { Marketplace, SellerClient } from "seller-sdk";

const seller = new SellerClient({
  marketplace: Marketplace.Ozon,
  credentials: { clientId, apiKey },
});
```

Поддерживаемые маркетплейсы образуют закрытый типизированный набор:

```ts
export const Marketplace = {
  Ozon: "ozon",
} as const;
```

Литерал `"ozon"` также допустим. Произвольная строка не принимается.

## Реестр маркетплейсов

Marketplace связывает credentials и конкретный client type:

```ts
export interface MarketplaceRegistry {
  ozon: {
    credentials: OzonCredentials;
    client: OzonClient;
  };
}
```

Публичный конструктор не использует `marketplace: string` или универсальный
`Record<string, string>` для credentials.

## Области Ozon

Каждая операция доступна через предметную область:

```ts
await ozon.products.list(input);
await ozon.postings.fbs.list(input);
await ozon.finance.accruals.byDay(input);
await ozon.warehouses.listWarehouses(input);
```

`ozon.domains` предоставляет тот же полный registry, когда области нужно
перечислить или передать одним объектом.

Плоские методы вроде `ozon.listProducts()` не входят в публичный API.

## Версии

По умолчанию используйте метод без версии:

```ts
await ozon.warehouses.listWarehouses(input); // сейчас v2
```

Для намеренной фиксации контракта используйте явную версию:

```ts
await ozon.warehouses.listWarehousesV2(input);
```

Алиас наследует `@deprecated`, если Ozon пометил выбранный endpoint устаревшим.

## Конфигурация клиента

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
```

| Опция        | Значение по умолчанию | Назначение                                       |
| ------------ | --------------------: | ------------------------------------------------ |
| `timeoutMs`  |              `30_000` | Тайм-аут одной попытки                           |
| `deadlineMs` |              `60_000` | Общий дедлайн со всеми повторами                 |
| `maxRetries` |                   `2` | Повторы безопасной операции после первой попытки |
| `onResponse` |                     — | Observer HTTP-метаданных                         |

## Опции отдельного запроса

```ts
await ozon.products.list(input, {
  signal,
  timeoutMs: 10_000,
  deadlineMs: 30_000,
  maxRetries: 1,
});
```

Опции запроса переопределяют client defaults. Мутации всегда выполняются одной
попыткой.

## Пагинация

```ts
for await (const page of ozon.products.listPages(input)) {
  console.log(page.result?.items);
}

for await (const product of ozon.products.listAll(input)) {
  console.log(product.offer_id);
}
```

Generic helpers `paginateOzonPages`, `paginateOzonItems` и
`collectOzonItems` экспортируются из `@seller-sdk/ozon` и `seller-sdk`.

## Прямой запрос к API

```ts
const result = await ozon.rawRequest<{ result: unknown }>(
  "POST",
  "/v1/new-operation",
  body,
  { retrySafety: "safe" },
);
```

Путь ограничен `https://api-seller.ozon.ru`. Ответ содержит `data` и
`lastResponse`, но не получает endpoint-specific runtime validation.

## Ошибки

Пакеты экспортируют стабильные SDK errors:

```ts
SellerSdkError;
ConfigurationError;
ApiError;
AuthenticationError;
RateLimitError;
NetworkError;
TimeoutError;
ResponseValidationError;
```

`ApiError` содержит `status`, `operationId`, `requestId`, `apiCode`,
`apiMessage` и `retryAfterMs`, когда Ozon передал соответствующие значения.
SafeShape-specific error types не являются частью публичного API.

## Динамическая конфигурация

Данные из env, JSON и внешних источников считаются `unknown` и проходят
runtime-валидацию перед созданием клиента. TypeScript сам по себе не защищает
динамическую конфигурацию.
