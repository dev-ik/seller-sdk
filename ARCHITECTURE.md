# Архитектура

## Границы продукта

Публикуются три пакета:

```text
@seller-sdk/ozon
@seller-sdk/wb
seller-sdk
```

Структура workspace:

```text
packages/
├── core/        # приватный общий исходный код
├── ozon/        # самостоятельный пакет Ozon
├── wb/          # самостоятельный пакет Wildberries
└── seller-sdk/  # общий пакет
```

`packages/core` не публикуется. Его собранный код включается внутрь tarball
каждого marketplace-пакета. Пользователь `@seller-sdk/ozon` не устанавливает
отдельный core или реализации других маркетплейсов.

## Направление зависимостей

```text
seller-sdk
    ├── @seller-sdk/ozon
    └── @seller-sdk/wb

@seller-sdk/ozon
    └── @safe-shape/core

@seller-sdk/wb
    └── @safe-shape/core

packages/core
    ├── компилируется в @seller-sdk/ozon/dist/internal/core
    └── компилируется в @seller-sdk/wb/dist/internal/core
```

Marketplace-пакеты не должны зависеть друг от друга.

## Жизненный цикл запроса

```text
типизированный input
→ endpoint mapper
→ Ozon authentication headers
→ transport
→ native fetch
→ unknown JSON
→ SafeShape contract
→ типизированный результат
```

Секреты не входят в публичные объекты клиента, сообщения ошибок или
наблюдаемые метаданные.

## Обязанности core и Ozon

Приватный core отвечает только за технические механизмы:

- transport и фиксированный origin;
- timeout, deadline и abort;
- retry policy;
- общие ошибки;
- безопасные метаданные и redaction.

Ozon-пакет владеет предметной семантикой:

- credentials;
- endpoint paths;
- request/response contracts;
- продукты, отправления, финансы и склады;
- Ozon pagination;
- сопоставление Ozon errors.

Общая бизнес-модель для разных маркетплейсов не создаётся.

## Структура endpoint

Каждая операция находится в своей директории:

```text
packages/ozon/src/endpoints/<domain>/<operation>/
├── execute.ts   # HTTP mapping и transport-вызов
├── contract.ts  # внутренний SafeShape response contract
└── types.ts     # публичные типы запроса и ответа
```

Общие для нескольких операций типы располагаются в ближайшей `shared`
директории или `packages/ozon/src/contracts`.

## Граница валидации SafeShape

Сетевой payload всегда считается `unknown`. Публичный тип результата появляется
только после SafeShape-проверки.

Политика совместимости ответов:

- явно nullable-поля сохраняют `null`;
- неизвестный `null` в optional-поле может быть нормализован как отсутствие;
- дополнительные неизвестные свойства отбрасываются;
- неверные required-поля и элементы массивов вызывают
  `ResponseValidationError`.

Эта политика относится только к ответам. Запросы остаются строгими.

## API предметных областей

`OzonOperations` содержит внутренние wrappers всех операций. Генератор строит
публичные области `products`, `postings`, `finance`, `warehouses` и другие из
`docs/ozon/endpoints.json`.

Для каждого версионного семейства создаётся алиас без версии. Выбирается
неустаревший контракт с наибольшей версией; если все версии устарели — наиболее
новая. Явные версионные методы сохраняются для миграций и фиксации контракта.

Операции не публикуются плоскими методами `OzonClient`.

## Управление запросами

Клиент и последняя опция каждого метода поддерживают timeout, deadline,
cancellation и retry. Transport всегда имеет последнее слово: небезопасная
операция не может быть повторена пользовательской настройкой.

`onResponse` сообщает статус, request ID, длительность и номер попытки, не меняя
тип результата endpoint. Ошибка observer не влияет на запрос.

`rawRequest` использует тот же authenticated fixed-origin transport, но не
проходит endpoint-specific SafeShape contract. Это временный escape hatch, а не
замена реализации endpoint.

## Будущие маркетплейсы

Новая площадка получает отдельный пакет, например `@seller-sdk/wb`, и запись в
типизированном registry общего пакета. Добавление площадки не должно менять
зависимости уже опубликованного `@seller-sdk/ozon`.

## Wildberries

`@seller-sdk/wb` генерируется из 13 файлов `docs/wb/swagger/*.yaml`. Публичные
области соответствуют официальным разделам WB. Каждая операция закреплена за
конкретным production origin и, когда он документирован, sandbox origin.
Токен никогда не отправляется на произвольный host.
