# Cloudflare Pages: configuración de preview

**Estado:** preparada; no desplegada
**Dominio objetivo:** `https://www.print3x.cl`
**Salida estática:** `dist`

## Configuración del proyecto

| Campo | Valor |
|---|---|
| Framework preset | Astro / Static HTML |
| Build command | `pnpm build` |
| Build output directory | `dist` |
| Node.js | `22.12.0` |
| Base directory | raíz del repositorio |
| Indexacion | `index, follow` en rutas publicas; `noindex, nofollow` solo en rutas controladas |

`.nvmrc` fija Node `22.12.0` para herramientas locales compatibles con `package.json`.

## Comportamiento de indexacion

- `pnpm build` genera `dist/sitemap-index.xml` y `dist/sitemap-0.xml`, con las 28 rutas aprobadas y sin `lastmod` inventado.
- `robots.txt` permite el rastreo general y referencia `https://www.print3x.cl/sitemap-index.xml`.
- Las rutas publicas usan `index, follow`; search, cart, 404, tag y las cuatro policies conservan `noindex, nofollow` por decision SEO.
- El dominio canonico, Open Graph, Twitter y sitemap usan `https://www.print3x.cl`.
- Una preview publica no debe exponerse sin proteccion de acceso, porque comparte metadata y robots orientados al dominio canonico de produccion.

## Verificación previa

1. Ejecutar `pnpm install --frozen-lockfile`.
2. Ejecutar `pnpm check`.
3. Ejecutar `pnpm build` y revisar `sitemap-index.xml`, `sitemap-0.xml`, robots, rutas, metadata, favicons y 404.
4. Publicar únicamente una preview de Pages.
5. Proteger la preview de Pages con el mecanismo de acceso disponible si se publica antes del cambio DNS.
6. Probar rutas limpias, variantes `.html` y slash en el dominio de Pages.
7. No cambiar DNS hasta completar la validación y aprobar rollback.

## Límites actuales

- No se ha creado el proyecto en Cloudflare Pages.
- No se ha usado Wrangler ni una credencial de despliegue.
- No se ha cambiado DNS ni se ha cancelado Shopify.
- La resolución final de URLs limpias depende del comportamiento real de Cloudflare Pages.
