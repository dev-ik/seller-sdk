# `@seller-sdk/ym`

Типобезопасный Node.js SDK для Yandex Market Partner API, сгенерированный из
официального OpenAPI snapshot.

```bash
npm i @seller-sdk/ym
```

```ts
import { YmClient, YmValues } from "@seller-sdk/ym";

const ym = new YmClient({ apiKey: process.env.YM_API_KEY! });

const orders = await ym.orders.getBusinessOrders({
  path: { businessId: 123456 },
  body: {
    statuses: [YmValues.OrdersOrderStatusType.Processing],
  },
});
```

Пакет содержит все 165 операций snapshot, распределённые по официальным
предметным tags. `YmValues` предоставляет закрытые enum-значения с
автодополнением TypeScript.

## Методы и версии

Все operationId в текущем официальном snapshot уже имеют семантические имена
без `V1`/`V2`: например, `getBusinessOrders` и `getCampaignOffers`. Версия
остаётся только в HTTP path. Поэтому дополнительные искусственные алиасы YM не
нужны.

Каждый метод содержит JSDoc из официального OpenAPI: назначение, описание
параметров, HTTP method/path, ссылку на источник и отметку `@deprecated`, когда
она есть в спецификации.

## Закрытые значения

Используйте `YmValues` вместо строковых литералов — так редактор показывает
допустимые значения, а переименование проверяет TypeScript:

```ts
await ym.orders.getBusinessOrders({
  path: { businessId },
  body: {
    statuses: [
      YmValues.OrdersOrderStatusType.Processing,
      YmValues.OrdersOrderStatusType.Delivery,
    ],
  },
});
```

## Запросы и ответы

Параметры пути, query и body не смешиваются:

```ts
await ym.orders.getBusinessOrders({
  path: { businessId },
  query: { limit: 50, pageToken },
  body: { statuses: ["PROCESSING"] },
});
```

JSON-ответы проходят SafeShape runtime-валидацию. Рекурсивные `RegionDTO` и
`CategoryDTO` проверяются через lazy contracts. PDF, Excel и изображения
возвращаются как `ArrayBuffer`; загрузка файла в чат принимает `FormData`.

## Конфигурация

```ts
const ym = new YmClient(
  { apiKey },
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

Автоматические повторы разрешены только для `GET`. `POST`, `PUT` и `DELETE`
остаются unsafe. HTTP 420 преобразуется в `RateLimitError` и автоматически не
повторяется.

## Безопасность

API key передаётся без префикса в заголовке `Api-Key`. Origin фиксирован как
`https://api.partner.market.yandex.ru`; credentials не входят в ошибки,
metadata или сериализованный клиент. `rawRequest()` использует тот же origin.

Полный список методов: [Yandex Market API Reference](https://github.com/dev-ik/seller-sdk/blob/main/docs/ym/API-REFERENCE.md).

## Лицензия и товарные знаки

[MIT](https://github.com/dev-ik/seller-sdk/blob/main/LICENSE) © Seller SDK
contributors.

OpenAPI snapshot Яндекс Маркета распространяется по BSD-3-Clause. Seller SDK —
независимый open-source проект, не связанный с Яндексом и не одобренный им.
