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
git commit -m "release: v0.2.0"
git push origin main
git tag -a v0.2.0 -m "Release v0.2.0"
git push origin v0.2.0
```

## Первая публикация Wildberries

`@seller-sdk/wb` ещё не может использовать trusted publishing, пока пакет не
создан в npm. Для релиза `0.2.0` войдите в npm локально и опубликуйте три
подготовленных архива:

```bash
npm login
npm whoami
npm publish ./release-artifacts/seller-sdk-wb-0.2.0.tgz --access public
npm publish ./release-artifacts/seller-sdk-ozon-0.2.0.tgz --access public
npm publish ./release-artifacts/seller-sdk-0.2.0.tgz --access public
```

Если один из focused-пакетов уже опубликован, не повторяйте его команду.
Проверить состояние можно через `npm view <package>@0.2.0 version`.

## Проверка публикации

```bash
npm view @seller-sdk/ozon@0.2.0 version
npm view @seller-sdk/wb@0.2.0 version
npm view seller-sdk@0.2.0 version
```

## Следующие релизы через GitHub Actions

После первой публикации настройте для каждого пакета trusted publisher:

```text
GitHub owner/repository: dev-ik/seller-sdk
Workflow filename: publish.yml
Environment: npm
Allowed action: npm publish
```

Workflow `Publish npm packages` запускается вручную на ref с релизным тегом.
Его имя должно совпадать с `v<version>`, иначе проверка остановит публикацию.
