# Источник контрактов Ozon Seller API

## Основной источник

```text
https://docs.ozon.ru/api/seller/
```

Официальная документация Ozon является основным источником для endpoint path,
request/response schemas, pagination, deprecation и ограничений.

Проверенный локальный snapshot хранится в `docs/ozon/swagger.json`.

## Проверка миграций от 19 октября 2026

`swagger.json` заменён без изменения содержимого официальным файлом,
предоставленным пользователем. Происхождение, размер и SHA-256 записаны в
`swagger.meta.json`; прямой download в этой сессии был недоступен из-за redirects.

[Реестр миграции](ozon/migration-audit-2026-10-19.json) фиксирует 11 реализованных
замен, проверенные изменения контрактов и 13 новых операций вне этой миграции.
[Руководство по переходу](ozon/MIGRATION-2026-10.md) описывает изменения вызовов.

Две операции `quant`, отсутствующие в новом файле, сохранены для совместимости
в `legacy-operations.json` с происхождением из snapshot от 14 августа 2026.
Генераторы используют этот архив отдельно; официальный файл и его hash остаются
неизменными. Архив не подтверждает доступность этих методов в production.
Дата `verifiedAt` у операции означает проверку её реализации, а дата snapshot
сама по себе не означает полную синхронизацию всех response-полей.

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
- operation-level deprecation не выводится из deprecated-полей вложенных
  schemas;
- предупреждение об устаревании содержит официальный replacement path и
  соответствующий публичный метод SDK;
- новая версия Ozon API не всегда требует major-версии SDK;
- breaking changes публичного SDK следуют SemVer.

## Правило блокировки

Если официальный контракт нельзя надёжно проверить, endpoint не реализуется по
памяти или предположению. Создайте manifest/issue со статусом `blocked` и
укажите, что именно требует проверки.
