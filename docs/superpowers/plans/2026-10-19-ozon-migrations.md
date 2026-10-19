# Ozon October 2026 migration plan

> Execute in this session as the parent agent. Preserve existing public methods and use the current endpoint layout.

**Goal:** Restore supported replacements for retired Ozon operations and preserve current response fields.

**Source:** User-supplied official `/Users/devik/Downloads/swagger.json`, SHA-256 `4c5756ae6b68177eae367786656f1b4ebdc00f2ca76c0311cf312a011ad1f9e4`.

**Constraints:** Node 20+, strict TypeScript, SafeShape 3, native fetch, no new dependencies. Unsafe operations must not retry. Never flatten native Ozon money/status objects into the sibling application's format.

## File edit order

1. `test/ozon/migrations-2026-10.test.ts`: prove failures for labels, promotion replacements, image import, and total_items through the public client, including malformed responses and HTTP failures.
2. `docs/ozon/swagger.json`, `swagger.meta.json`, `legacy-operations.json`: store the supplied snapshot unchanged; retain only the two removed quant operations from the previous verified snapshot for API compatibility.
3. `scripts/ozon-specification.mjs`, `scripts/build-ozon-{catalog,domains,request-docs}.mjs`: use explicit archived provenance for removed operations without altering the official snapshot.
4. New endpoint `types.ts`, `contract.ts`, `execute.ts` under posting/package-label, promotion, actions/auto-add and product/pictures; update `operations.ts`, `index.ts`, endpoint manifest.
5. Existing product list/prices/stocks response contracts and affected enum/request contracts: add current fields and retain compatible legacy fields with deprecation guidance.
6. Generate catalog, domain API, values and request docs. Update metadata tests to use new verified provenance and official deprecation count.
7. `docs/ozon/migration-audit-2026-10-19.json`, `docs/OZON-SOURCE-OF-TRUTH.md`, Ozon README and changelog: record verified replacements, remaining new features outside this migration and snapshot caveats.

## Tasks and checks

- [x] Run new public-client migration tests and observe failures before implementation.
- [x] Implement 11 replacement operations with explicit types and SafeShape response contracts; verify HTTP method/path/body, parsed objects, invalid nested values, API errors and mutation retry safety.
- [x] Preserve explicit old methods; generated versionless aliases select current versions when no existing method occupies that name. Keep old unversioned promotion/image methods deprecated and provide explicit replacement names.
- [x] Preserve total_items for list, prices and stocks without requiring obsolete total; verify zero and malformed totals.
- [x] Reconcile schema changes that reject current requests/responses and regenerate documentation.
- [x] Run focused tests, then release checks; review final diff and report any unavailable checks.

## Verification results — 2026-10-19

- `pnpm ci:check`: passed, including 632 tests in 106 files, generation checks, lint, typecheck, all package builds, packing and consumer installation.
- For version `0.4.0`, `pnpm prepare:release` passed the unpublished-version, verify and pack checks before the session was interrupted during consumer installation. `pnpm test:consumer` was rerun separately and passed for all four packages.
- Four TypeScript examples from the migration guide typechecked; their four API calls ran against synthetic responses. Local documentation links and `git diff --check` passed.
- Real authenticated Ozon calls were not made. The 13 independent new endpoints and remaining optional response-field additions are outside this migration.

## Review focus

- New labels have root tasks/status objects, without the old result envelope.
- Promotion IDs may be strings and money is an amount/currency object; avoid numeric coercion.
- HTTP 503 on mutations must remain one attempt.
- Optional response fields stay optional; malformed present fields must fail validation.
- Two quant operations absent from the new snapshot keep archival provenance; absence alone does not establish a replacement or live availability.
