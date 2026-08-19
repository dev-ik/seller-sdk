# `@seller-sdk/ym`

Типобезопасный Node.js SDK для Yandex Market Partner API. Пакет содержит все
165 операций официального OpenAPI snapshot, распределённые по 36 предметным
областям, и проверяет структурированные ответы во время выполнения через
SafeShape.

Пакет самостоятельный: он не устанавливает Ozon, Wildberries, umbrella-пакет
`seller-sdk` или отдельный core-пакет.

## Возможности

- строгие TypeScript-типы запросов и ответов для всех 165 операций;
- `YmValues` с автодополнением закрытых значений из OpenAPI;
- SafeShape runtime-валидация JSON-ответов;
- раздельные `path`, `query` и `body` без неявного смешивания параметров;
- поддержка JSON, `FormData` и бинарных ответов в виде `ArrayBuffer`;
- тайм-ауты, общий deadline, отмена через `AbortSignal` и безопасные повторы;
- нормализованные ошибки без утечки API-ключа;
- fixed-origin transport только для `https://api.partner.market.yandex.ru`;
- `rawRequest()` для документированного метода, ещё не попавшего в snapshot.

## Требования

- Node.js 20.10 или новее;
- ESM;
- TypeScript рекомендуется, но собранный JavaScript также поддерживается.

Используйте SDK только на сервере. API-ключ продавца нельзя передавать в
браузерное приложение.

## Установка

```bash
npm i @seller-sdk/ym
```

## Аутентификация

Создайте Api-Key в кабинете Яндекс Маркета и передайте его клиенту. SDK отправит
значение без префикса в заголовке `Api-Key`:

```ts
import { YmClient } from "@seller-sdk/ym";

const ym = new YmClient({ apiKey: process.env.YM_API_KEY! });
```

Проверить доступные токену области можно отдельным методом:

```ts
const tokenInfo = await ym.auth.getAuthTokenInfo();
console.log(tokenInfo.result?.apiKey.authScopes);
```

Реальные API-ключи, идентификаторы кабинетов и данные заказов не должны попадать
в репозиторий, логи или клиентский JavaScript.

## Первый запрос

Получите магазины, доступные API-ключу. Из ответа можно взять `campaignId` и
`businessId`, необходимые другим методам:

```ts
const { campaigns } = await ym.campaigns.getCampaigns({
  query: { limit: 100 },
});

for (const campaign of campaigns) {
  console.log({
    campaignId: campaign.id,
    businessId: campaign.business?.id,
    name: campaign.business?.name,
  });
}
```

Затем, например, запросите заказы кабинета:

```ts
import { YmValues } from "@seller-sdk/ym";

const orders = await ym.orders.getBusinessOrders({
  path: { businessId: 123456 },
  query: { limit: 50 },
  body: {
    statuses: [YmValues.OrdersOrderStatusType.Processing],
  },
});

console.log(orders.orders);
```

`businessId: 123456` — пример. Используйте идентификатор из
`campaign.business.id` или из своего кабинета.

## Структура запросов

Параметры сохраняют структуру OpenAPI:

```ts
await ym.orders.getBusinessOrders(
  {
    path: { businessId },
    query: { limit: 50, pageToken },
    body: {
      statuses: [YmValues.OrdersOrderStatusType.Processing],
    },
  },
  {
    timeoutMs: 10_000,
    deadlineMs: 30_000,
    maxRetries: 0,
    signal: abortController.signal,
  },
);
```

- `path` содержит параметры URL;
- `query` содержит параметры строки запроса;
- `body` содержит JSON или `FormData`;
- второй аргумент содержит настройки конкретного вызова.

Обязательность каждого раздела и поля выводится из официального контракта.

## Закрытые значения с `YmValues`

Используйте `YmValues` вместо строковых литералов. Редактор покажет допустимые
значения, а TypeScript проверит их при сборке:

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

Типы запросов и ответов также экспортируются из корня пакета:

```ts
import type {
  GetBusinessOrdersInput,
  GetBusinessOrdersResponse,
  YmClientConfig,
} from "@seller-sdk/ym";
```

## Предметные области

| Свойство клиента           | Назначение                                |
| -------------------------- | ----------------------------------------- |
| `auth`                     | информация об API-ключе и его правах      |
| `bids`                     | ставки и буст продаж                      |
| `businesses`               | настройки кабинета                        |
| `businessOfferMappings`    | карточки, маппинги и архив товаров        |
| `campaigns`                | магазины и их настройки                   |
| `categories`               | дерево категорий Маркета                  |
| `chats`                    | чаты с покупателями и загрузка файлов     |
| `content`                  | контент и статусы карточек товаров        |
| `deliveryOptions`          | доступные варианты доставки               |
| `deliveryServices`         | службы доставки                           |
| `goodsFeedback`            | отзывы на товары                          |
| `goodsQuestions`           | вопросы покупателей и ответы продавца     |
| `goodsStats`               | статистика по товарам                     |
| `hiddenOffers`             | скрытые товары                            |
| `logisticPoints`           | логистические точки Маркета               |
| `offers`                   | ассортимент и предложения магазина        |
| `operations`               | статусы асинхронных операций              |
| `orderBusinessInformation` | покупатели-юрлица и документы B2B-заказов |
| `orderDelivery`            | доставка, покупатель и коды подтверждения |
| `orderLabels`              | ярлыки и данные для их печати             |
| `orders`                   | получение и обработка заказов             |
| `ordersStats`              | статистика по заказам                     |
| `outletLicenses`           | лицензии пунктов выдачи                   |
| `outlets`                  | пункты выдачи и их настройки              |
| `priceQuarantine`          | цены в карантине                          |
| `prices`                   | получение и обновление цен                |
| `promos`                   | акции и участие товаров                   |
| `ratings`                  | индекс качества магазина                  |
| `regions`                  | регионы и их идентификаторы               |
| `reports`                  | генерация и получение отчётов             |
| `returns`                  | возвраты и решения по ним                 |
| `shipments`                | отгрузки и сопроводительные документы     |
| `stocks`                   | остатки на складах                        |
| `supplyRequests`           | заявки на поставку                        |
| `tariffs`                  | расчёт тарифов                            |
| `warehouses`               | склады и статусы моделей работы           |

Полный список методов, HTTP path и файлов реализации находится в
[Yandex Market API Reference](https://github.com/dev-ik/seller-sdk/blob/main/docs/ym/API-REFERENCE.md).

## Методы и версии

Официальные operationId текущего snapshot уже имеют семантические имена без
`V1`/`V2`: например, `getBusinessOrders` и `getCampaignOffers`. Версия остаётся
в HTTP path, поэтому искусственные versionless-алиасы YM не нужны:

```ts
// POST /v1/businesses/{businessId}/orders
await ym.orders.getBusinessOrders({
  path: { businessId },
  body: {},
});
```

Каждый метод содержит JSDoc из официального OpenAPI: назначение, параметры,
HTTP method/path, ссылку на источник и `@deprecated`, когда отметка присутствует
в спецификации.

## Пагинация

Методы с forward pagination возвращают `paging.nextPageToken`. Передавайте его
в следующий запрос:

```ts
let pageToken: string | undefined;

do {
  const page = await ym.orders.getBusinessOrders({
    path: { businessId },
    query: {
      limit: 50,
      ...(pageToken === undefined ? {} : { pageToken }),
    },
    body: {},
  });

  for (const order of page.orders) {
    console.log(order.orderId);
  }

  pageToken = page.paging?.nextPageToken;
} while (pageToken !== undefined);
```

## Тестовые заказы

Отдельного тестового API-ключа SDK не создаёт. Если метод заказов поддерживает
официальный параметр `fake`, передайте его явно, чтобы запросить тестовые
заказы:

```ts
const testOrders = await ym.orders.getBusinessOrders({
  path: { businessId },
  body: { fake: true },
});
```

Наличие `fake` зависит от конкретного метода и отражено в его TypeScript-типе.

## Настройки клиента и запроса

```ts
const ym = new YmClient(
  { apiKey },
  {
    timeoutMs: 30_000,
    deadlineMs: 60_000,
    maxRetries: 2,
    onResponse({ operationId, status, requestId, attempt, willRetry }) {
      console.info({ operationId, status, requestId, attempt, willRetry });
    },
  },
);
```

| Настройка    | Допустимое значение | Назначение                                     |
| ------------ | ------------------- | ---------------------------------------------- |
| `timeoutMs`  | целое `1..300000`   | тайм-аут одной попытки                         |
| `deadlineMs` | целое `1..600000`   | общий лимит времени запроса со всеми попытками |
| `maxRetries` | целое `0..9`        | число повторов после первой попытки            |
| `onResponse` | функция             | метаданные каждой попытки ответа               |

Автоматические повторы разрешены только для `GET`. `POST`, `PUT` и `DELETE` не
повторяются независимо от `maxRetries`. HTTP 420 преобразуется в
`RateLimitError` и автоматически не повторяется.

## Валидация ответов

Каждый структурированный ответ проходит путь `JSON → unknown → SafeShape →
typed result`. Если Маркет вернул данные, не соответствующие snapshot, SDK
выбрасывает `ResponseValidationError`, а не приводит payload к ожидаемому типу.

Рекурсивные структуры категорий и регионов также проверяются. Бинарные ответы —
PDF, Excel и изображения — возвращаются как `ArrayBuffer`:

```ts
import { writeFile } from "node:fs/promises";

const labels = await ym.orderLabels.generateOrderLabels({
  path: { campaignId, orderId },
});

await writeFile("labels.pdf", Buffer.from(labels));
```

Для документированных `multipart/form-data` операций передавайте `FormData`:

```ts
const form = new FormData();
form.append("file", new Blob(["message"]), "message.txt");

await ym.chats.sendFileToChat({
  path: { businessId },
  query: { chatId },
  body: form,
});
```

## Обработка ошибок

```ts
import {
  RateLimitError,
  ResponseValidationError,
  toSellerSdkErrorDetails,
} from "@seller-sdk/ym";

try {
  await ym.orders.getBusinessOrders({
    path: { businessId },
    body: {},
  });
} catch (error) {
  if (error instanceof RateLimitError) {
    console.error("Лимит запросов", error.status);
  } else if (error instanceof ResponseValidationError) {
    console.error("Ответ не соответствует контракту", error.issues);
  }

  console.error(toSellerSdkErrorDetails(error));
}
```

Публичные классы ошибок:

- `ConfigurationError` — неверные credentials или настройки;
- `AuthenticationError` — ошибка аутентификации;
- `RateLimitError` — HTTP 420/429;
- `ApiError` — другой неуспешный HTTP-ответ;
- `ResponseValidationError` — ответ не соответствует runtime-контракту;
- `NetworkError` — сетевая ошибка;
- `TimeoutError` — истёк timeout или deadline.

`toSellerSdkErrorDetails()` возвращает безопасный plain object с кодом,
`operationId`, HTTP status, request ID, кодом/сообщением API и validation issues.
API-ключ, authorization headers, stack и cause в него не включаются.

## `rawRequest`

Если официальный метод уже существует, но ещё не попал в snapshot SDK, можно
временно вызвать его через fixed-origin transport:

```ts
type CampaignList = {
  readonly campaigns: readonly {
    readonly id?: number;
  }[];
};

const response = await ym.rawRequest<CampaignList>(
  "GET",
  "/v2/campaigns",
  undefined,
  { responseType: "json" },
);

console.log(response.data, response.lastResponse.requestId);
```

`rawRequest()` сохраняет аутентификацию, timeout, deadline, retry policy и
фиксированный origin, но намеренно не применяет endpoint-specific SafeShape
контракт. Для уже сгенерированных операций используйте типизированные методы.

## Использование через `seller-sdk`

Если приложению нужны несколько маркетплейсов, YM доступен из umbrella-пакета:

```ts
import { Marketplace, SellerClient } from "seller-sdk";

const seller = new SellerClient({
  marketplace: Marketplace.Ym,
  credentials: { apiKey: process.env.YM_API_KEY! },
});

const campaigns = await seller.ym.campaigns.getCampaigns();
```

Устанавливать одновременно `seller-sdk` и `@seller-sdk/ym` не требуется.

## Источники и справочники

- [полный API Reference](https://github.com/dev-ik/seller-sdk/blob/main/docs/ym/API-REFERENCE.md);
- [источник OpenAPI snapshot](https://github.com/dev-ik/seller-sdk/blob/main/docs/YM-SOURCE-OF-TRUTH.md);
- [публичный API Seller SDK](https://github.com/dev-ik/seller-sdk/blob/main/PUBLIC_API.md);
- [история изменений](https://github.com/dev-ik/seller-sdk/blob/main/CHANGELOG.md).

## Лицензия и товарные знаки

[MIT](https://github.com/dev-ik/seller-sdk/blob/main/LICENSE) © Seller SDK
contributors.

OpenAPI snapshot Яндекс Маркета распространяется по BSD-3-Clause. Seller SDK —
независимый open-source проект, не связанный с Яндексом и не одобренный им.
