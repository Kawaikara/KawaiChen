# KawaiChen

An Astro-native foundation for documentation and expressive project sites.

## Workspace

- `src/` — reusable layouts, components, types, and style foundations
- `examples/minimal-docs/` — the smallest documentation site
- `examples/experience-landing/` — a full-screen landing page beside regular docs
- `Docs/` — architecture and product decisions

## Start an example

```sh
pnpm install
pnpm dev
```

`pnpm dev` starts the expressive landing example. Use `pnpm dev:docs` for the minimal documentation example.

To serve a production build locally:

```sh
pnpm build
pnpm preview
```

## Reusable components

KawaiChen owns the reusable Astro structure; consuming sites supply product data, labels, routes, and theme tokens.

- `PersistentDocsShell` provides the navigation/content/index layout, client-transition persistence, active-link synchronization, and panel scroll restoration.
- `ThemedSelect` provides an accessible theme-aware listbox for locale, release channel, version, and similar settings.
- `BlankLayout`, `DocsLayout`, `SiteHeader`, and `BaseHead` provide the page foundation.

Import components from the package root:

```astro
---
import { BlankLayout, PersistentDocsShell, ThemedSelect } from 'kawaichen';
---
```

During local development a consuming repository can use `"kawaichen": "link:../KawaiChen"`. A published site should replace that local link with a KawaiChen tag or immutable commit reference.
