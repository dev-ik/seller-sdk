# Источник контрактов Ozon Seller API

## Основной источник

```text
https://docs.ozon.ru/api/seller/
```

Официальная документация Ozon является основным источником для endpoint path,
request/response schemas, pagination, deprecation и ограничений.

Проверенный локальный snapshot хранится в `docs/ozon/swagger.json`.

## Метаданные операции

Для реализованного endpoint фиксируются:

```text
operationId
documentation
verifiedAt
HTTP method
path
request contract
response contract
pagination
retry safety
status
```

## Расхождение контрактов

Ozon может менять версии и schemas независимо от релизов Seller SDK. Поэтому:

- fixtures служат contract regression tests;
- `verifiedAt` обязателен;
- deprecated endpoint помечается до удаления;
- новая версия Ozon API не всегда требует major-версии SDK;
- breaking changes публичного SDK следуют SemVer.

## Правило блокировки

Если официальный контракт нельзя надёжно проверить, endpoint не реализуется по
памяти или предположению. Создайте manifest/issue со статусом `blocked` и
укажите, что именно требует проверки.
