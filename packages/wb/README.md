# `@seller-sdk/wb`

Типобезопасный Node.js SDK для Wildberries API, сгенерированный из 13
официальных OpenAPI-файлов.

```bash
npm i @seller-sdk/wb
```

```ts
import { WbClient, WbValues } from "@seller-sdk/wb";

const wb = new WbClient({ token: process.env.WB_API_TOKEN! });

const connection = await wb.general.getPing();
const categories = await wb.items.getContentObjectParentAll({
  query: { locale: "ru" },
});

const subscriptions = await wb.general.getSubscriptions();
if (
  subscriptions.jam?.state === WbValues.GeneralSubscriptionsJamInfoState.Active
) {
  // Подписка активна; строковый литерал не нужно вводить вручную.
}
```

`WbValues` содержит значения всех закрытых строковых `enum`/union из
официального Swagger. Значения сгруппированы по смысловому имени схемы и
доступны с автодополнением и документацией значений в TypeScript.

Пакет самостоятельный: он не устанавливает другие marketplace-пакеты или
отдельный core-пакет.

## Структура запросов

Параметры сохраняют структуру OpenAPI и не смешиваются между собой:

```ts
await wb.communications.getSellerDownloadId({
  path: { id: "file-id" },
});

await wb.general.getNews({
  query: { from: "2026-08-01", fromID: 42 },
});
```

JSON request body передаётся в поле `body`. Для документированных
`multipart/form-data` операций используется `FormData`.

## Методы без версии

В прикладном коде используйте рекомендуемое имя без версии. Оно вызывает
актуальный поддерживаемый контракт с теми же типами запроса и ответа:

```ts
await wb.general.getNews({
  query: { from: "2026-08-01" },
});
```

Точный метод из Swagger остаётся доступен, когда версию контракта нужно
зафиксировать явно:

```ts
await wb.general.getV2News({
  query: { from: "2026-08-01" },
});
```

## Настройки клиента и запроса

```ts
const wb = new WbClient(
  { token },
  {
    environment: "production",
    timeoutMs: 30_000,
    deadlineMs: 60_000,
    maxRetries: 2,
    onResponse({ operationId, status, requestId, attempt, willRetry }) {
      console.info({ operationId, status, requestId, attempt, willRetry });
    },
  },
);

await wb.general.getNews(
  { query: { from: "2026-08-01", fromID: 42 } },
  {
    timeoutMs: 10_000,
    deadlineMs: 30_000,
    maxRetries: 1,
    signal: abortController.signal,
  },
);
```

`maxRetries` задаёт количество повторов после первой попытки. Повторы
применяются только к безопасным операциям чтения: `GET` и методам, отмеченным
в Swagger как `x-readonly-method`. Мутации всегда выполняются одной попыткой.

В режиме `sandbox` SDK вызывает только операции, для которых sandbox-origin
явно присутствует в официальном Swagger. Остальные завершаются
`ConfigurationError` до сетевого запроса.

## Безопасность и ответы

Токен передаётся без префикса в заголовке `Authorization`, как требует WB API.
SDK разрешает запросы только на origin из официальных спецификаций. Каждый
структурированный ответ проходит SafeShape-валидацию; бинарные ответы
возвращаются как `ArrayBuffer`.

Для ещё не попавшего в snapshot метода доступен `rawRequest`. Origin остаётся
закрытым union из документированных WB host'ов, а ответ не получает
endpoint-specific runtime validation.

Полный список методов: [`docs/wb/API-REFERENCE.md`](../../docs/wb/API-REFERENCE.md).

## Обработка ошибок

```ts
import { toSellerSdkErrorDetails, WbClient } from "@seller-sdk/wb";

const wb = new WbClient({ token });

try {
  await wb.general.getPing();
} catch (error) {
  console.error(toSellerSdkErrorDetails(error));
}
```

Обработчик возвращает безопасный plain object со стабильным `code`,
`operationId`, HTTP status, request ID и сообщением WB. Stack, cause, токен и
authorization headers в результат не попадают.

## Лицензия и товарные знаки

[MIT](LICENSE). Проект не связан с Wildberries и не является официальным SDK
Wildberries.
