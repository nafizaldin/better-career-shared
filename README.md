# @better-career/shared

Single source of truth for the DTOs, Zod schemas and utilities used by
`better-career-backend`, `better-career-web` and `better-career-artboard`
(previously three drifting copies under each app's `packages/`).

```ts
import { CreateResumeDto } from "@better-career/shared/dto";   // backend only (needs nestjs-zod)
import { resumeDataSchema, type ResumeData } from "@better-career/shared/schema";
import { kebabCase, sanitize } from "@better-career/shared/utils";
```

## Install (apps pin a release tag)
```json
"@better-career/shared": "github:nafizaldin/better-career-shared#v1.0.0"
```
`dist/` is committed, so installs need no build step (Docker builds just fetch the tag).
Dual build: ESM (`.mjs`) for Vite/Nuxt and CommonJS (`.js`) for NestJS, bundled per entry with tsup.
`zod` is a **peer dependency**: each app declares its own `zod` (^3.23), so schemas and the app share one zod instance.

## Making a change
1. Edit `src/`, then `pnpm build` (tsup: ESM + CJS + .d.ts into `dist/`).
2. Test it inside an app before releasing:
   `pnpm add @better-career/shared@file:../better-career-shared` (use `file:`, not `link:`, so the peer `zod` resolves to the app's; don't commit that change).
3. Bump `version` in package.json, commit **src and dist together**, then tag:
   `git tag v1.1.0 && git push origin main --tags`
4. In each app, point the dependency at the new tag and run `pnpm install`.

Tests: `pnpm test` (node:test on the build; schema back-compat + date helpers).

Schema changes affect stored resume data. Keep new fields optional or defaulted
(`.default(...)`), so existing resumes still validate.

## Design settings (v1.2.0)
`metadata` covers every editor Design control: `presentation` (date format, alignments, skills layout/columns),
`display` (experience/education lead fields), `advanced` (bullets, per-role font weight/scale/transform, spacing px,
border px), `typography.listLineHeight`, `page.marginLeft/marginRight`, `page.format` incl. `legal`.
Dates: store canonical strings via `toResumeDate()`, display with `formatResumeDate(value, metadata.presentation.dateFormat)`
(also reads legacy "Jan 2020 - Mar 2022" strings).
