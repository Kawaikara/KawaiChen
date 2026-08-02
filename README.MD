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
