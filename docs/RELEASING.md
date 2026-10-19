# Выпуск npm-пакетов

Все публикуемые пакеты используют одну версию. Порядок публикации важен:
сначала focused-пакеты, затем зависящий от них umbrella-пакет.

## Выпуск 0.4.0

Версия `0.3.2` уже опубликована. Для этой миграции выбрана `0.4.0`: она
меняет формы некоторых публичных вызовов. Перед публикацией проверьте
[changelog](../CHANGELOG.md) и [руководство по миграции](ozon/MIGRATION-2026-10.md).
Номер версии общий для Ozon, Wildberries, Yandex Market и umbrella-пакета;
контракты WB и YM в этом выпуске не менялись.

## Подготовка

Укажите нужную версию в корневом `package.json` и `package.json` четырёх
публикуемых пакетов; добавьте раздел этой версии в `CHANGELOG.md`.
Приватный `packages/core` не публикуется и сохраняет свою версию.

```bash
pnpm install --frozen-lockfile
pnpm prepare:release
```

Команда проверяет генерацию, форматирование, lint, типы, тесты, сборку,
содержимое tarball, установку пакетами-потребителями и отсутствие выбранной
версии в npm. Готовые архивы появляются в `release-artifacts/`.
`prepare:release` только проверяет и собирает архивы. Публикация начинается
при отдельном запуске workflow, описанном ниже.

Зафиксируйте проверенное состояние и создайте релизный тег до публикации:

```bash
git add -A
git commit -m "release: v0.4.0"
git push origin main
git tag -a v0.4.0 -m "Release v0.4.0"
git push origin v0.4.0
```

## Проверка публикации

```bash
npm view @seller-sdk/ozon@0.4.0 version
npm view @seller-sdk/wb@0.4.0 version
npm view @seller-sdk/ym@0.4.0 version
npm view seller-sdk@0.4.0 version
```

## Публикация через GitHub Actions

После первой публикации настройте для каждого пакета trusted publisher:

```text
GitHub owner/repository: dev-ik/seller-sdk
Workflow filename: publish.yml
Environment: npm
Allowed action: npm publish
```

Workflow `Publish npm packages` запускается вручную на ref с релизным тегом.
Его имя должно совпадать с `v<version>`, иначе проверка остановит публикацию.

Дождитесь успешного CI для релизного коммита, затем запустите workflow:

```bash
gh workflow run publish.yml --ref v0.4.0
```

Workflow публикует все четыре пакета и создаёт GitHub Release с tarball.
Обычный `pnpm ci:check` не проверяет занятость версии в npm, поэтому CI
продолжает работать после публикации. `pnpm release:check` и
`pnpm prepare:release` сохраняют эту проверку.
