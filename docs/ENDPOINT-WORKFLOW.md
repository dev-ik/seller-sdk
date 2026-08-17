# Как добавить или обновить Ozon endpoint

1. Откройте актуальную официальную документацию Ozon Seller API:
   `https://docs.ozon.ru/api/seller/`.
2. Выберите одну операцию и проверьте method, path, request, response,
   pagination, errors и retry safety.
3. Обновите `docs/ozon/endpoints.json` и дату `verifiedAt`.
4. Создайте директорию
   `packages/ozon/src/endpoints/<domain>/<operation>/`.
5. Опишите публичный input и response types в `types.ts`.
6. Опишите SafeShape response contract в `contract.ts`.
7. Используйте `nullable()` только для подтверждённых nullable-полей.
8. Реализуйте HTTP mapping через общий transport в `execute.ts`.
9. Не приводите сетевой payload к response type через cast: сначала SafeShape.
10. Переведите failure в `ResponseValidationError`.
11. Добавьте очищенные success, edge, API-error и malformed fixtures.
12. Проверьте method, path, headers, body, parsing, errors, abort, retry и redaction.
13. Добавьте wrapper в `OzonOperations`.
14. Запустите `pnpm update:domains` для domain API, IntelliSense и справочника.
15. Запустите `pnpm update:request-docs` для синхронизации описаний request fields.
16. Экспортируйте публичные типы через `@seller-sdk/ozon`.
17. Добавьте пользовательский пример.
18. Выполните:

```bash
pnpm release:check
```

## Wildberries

Для WB источником служат `docs/wb/swagger/*.yaml`. После замены официального
snapshot обновите дату в `docs/wb/swagger.meta.json` и выполните:

```bash
pnpm update:wb
pnpm check:wb
pnpm release:check
```

Не редактируйте `packages/wb/src/api.generated.ts`, `docs/wb/endpoints.json` или
`docs/wb/API-REFERENCE.md` вручную.

19. Зафиксируйте источник, дату проверки и известные ограничения.

Комментарии с маркером `seller-sdk:ozon-openapi` генерируются автоматически и
не редактируются вручную.

## Устаревшие методы

- Метод помечается `@deprecated` только по operation-level признаку в OpenAPI:
  `deprecated: true` или явному предупреждению об устаревании самого метода в
  его `description`.
- `deprecated` у поля запроса, поля ответа или вложенной schema не переносится
  на метод.
- Для каждого устаревшего метода официально рекомендованный HTTP endpoint
  должен быть реализован в SDK.
- В `@deprecated` и API reference указываются обе замены: официальный HTTP
  method/path и вызываемый метод SDK.
- Если официальный deprecated-метод не содержит замену или замена ещё не
  реализована, генерация должна завершаться ошибкой, а не публиковать неполное
  предупреждение.
