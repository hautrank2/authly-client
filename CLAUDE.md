# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (see `pnpm-lock.yaml` / pnpm `node_modules/.pnpm` layout).

- `pnpm dev` — start the Vite dev server with HMR
- `pnpm build` — type-check (`tsc -b`) then produce a production build (`vite build`). The build fails on any type error.
- `pnpm lint` — run ESLint over the repo
- `pnpm preview` — serve the production build locally

There is no test runner configured yet.

Type-check without building: `pnpm exec tsc -b`.

## Stack

- **React 19** + **TypeScript ~6.0** + **Vite 8** (ESM, `"type": "module"`)
- **antd v6** for UI components — wrap locale-aware trees in `ConfigProvider` and pass the matching `antd/locale/*` bundle
- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin (configured in `vite.config.ts`, imported in `src/index.css` with `@import "tailwindcss"`). There is no `tailwind.config.js` — v4 is config-less by default.
- **dayjs** for dates (antd's date dependency)

## TypeScript config

Project references split the build: `tsconfig.app.json` (the `src` app, `moduleResolution: bundler`, DOM libs) and `tsconfig.node.json` (Vite config, nodenext). Both use `verbatimModuleSyntax: true`, so **type-only imports must use `import type`**. `noUnusedLocals` / `noUnusedParameters` are on — unused identifiers break the build.

## i18n architecture

Internationalization is **i18next + react-i18next** with browser language detection. All config lives in `src/i18n/`:

- `src/i18n/index.ts` — initializes i18next (fallback `en`, detection order `localStorage` → `navigator`, cached in `localStorage`). Imported once for its side effect in `src/main.tsx` (`import "./i18n"`).
- `src/i18n/resources.ts` — single source of truth for `resources`, `defaultNS` (`"common"`), and `supportedLngs` (`["en", "vi"]`). Import `supportedLngs` / `SupportedLng` from here rather than re-declaring locale lists.
- `src/i18n/locales/<lng>/common.json` — translation strings, one folder per language, one file per namespace.
- `src/i18n/i18next.d.ts` — module augmentation giving `t()` keys full type safety/autocomplete from the `en` resources.

To use translations: `const { t } = useTranslation()` then `t("actions.login")`. Keys are nested and type-checked.

**Adding a language:** create `src/i18n/locales/<lng>/common.json`, add it to `resources` and `supportedLngs` in `resources.ts`. The UI language switcher (`src/App.tsx`) renders options from `supportedLngs` automatically and also syncs antd's `ConfigProvider` locale and `dayjs.locale()` on change — extend the `antdLocales` map there for new languages.

**Adding a namespace:** create the JSON file under each locale, add it to each language entry in `resources`, then call `useTranslation("<ns>")` or key it as `t("ns:key")`.
