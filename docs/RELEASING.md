# Выпуск npm-пакетов

Все публикуемые пакеты используют одну версию. Порядок публикации важен:
сначала focused-пакеты, затем зависящий от них umbrella-пакет.

## Подготовка

Рабочее дерево должно содержать нужную версию во всех `package.json` и раздел
этой версии в `CHANGELOG.md`.

```bash
pnpm install --frozen-lockfile
pnpm prepare:release
```

Команда проверяет генерацию, форматирование, lint, типы, тесты, сборку,
содержимое tarball, установку пакетами-потребителями и отсутствие выбранной
версии в npm. Готовые архивы появляются в `release-artifacts/`.

Зафиксируйте проверенное состояние и создайте релизный тег до публикации:

```bash
git add -A
git commit -m "release: v0.3.2"
git push origin main
git tag -a v0.3.2 -m "Release v0.3.2"
git push origin v0.3.2
```

## Проверка публикации

```bash
npm view @seller-sdk/ozon@0.3.2 version
npm view @seller-sdk/wb@0.3.2 version
npm view @seller-sdk/ym@0.3.2 version
npm view seller-sdk@0.3.2 version
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
gh workflow run publish.yml --ref v0.3.2
```

Workflow публикует все четыре пакета и создаёт GitHub Release с tarball.
Обычный `pnpm ci:check` не проверяет занятость версии в npm, поэтому CI
продолжает работать после публикации. `pnpm release:check` и
`pnpm prepare:release` сохраняют эту проверку.
