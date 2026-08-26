# Schema SEO de Print3x

**Etapa:** 7 - Tarea 7.2
**Fecha de revision:** 2026-08-26
**Origen canonico:** `https://www.print3x.cl`

## Respuesta corta

No es un unico schema para todas las paginas. Hay una base comun del sitio y
datos estructurados especificos segun el tipo de pagina. La base se genera una
sola vez desde `src/layouts/SiteLayout.astro`; las rutas solo entregan los
nodos propios de su contenido.

## Revision de print3x.cl

La web publicada fue inspeccionada en el navegador y actualmente contiene:

- En la portada: `Organization` y `WebSite`.
- En `/products/axis-one`: ademas un `Product` con precio, SKU, variante de
  Shopify, `OutOfStock` e imagen CDN.
- En una coleccion, un articulo y `/pages/nosotros`: solo el `Organization`
  global; no hay `CollectionPage`, `ItemList`, `Article` ni breadcrumbs.
- El `Organization` publicado contiene entradas vacias en `sameAs` y su logo
  depende del CDN de Shopify.

## Implementacion objetivo

| Superficie | Schema generado |
|---|---|
| Todas las paginas | `Organization`, `WebSite`, `WebPage` y `inLanguage: es-CL` |
| Paginas con jerarquia | `BreadcrumbList` |
| `/products/*` | `Product` con marca, categoria e imagenes locales disponibles |
| `/collections/*` | `CollectionPage` + `ItemList` |
| `/blogs/*` indice | `CollectionPage` + `ItemList` de articulos |
| `/blogs/*/*` | `Article` con poster local, keywords y publisher |
| `/pages/nosotros` | `AboutPage` |
| `/search`, `/cart`, policies, tag y 404 | Solo base comun; siguen con `noindex` cuando corresponde |

Todos los nodos se emiten en un solo JSON-LD con `@graph` y se relacionan con
identificadores estables como `#organization`, `#website`, `#webpage`,
`#product` y `#article`.

## Datos excluidos intencionalmente

- No se publican `offers`, precios actuales ni URL de variante: el sitio final
  es un escaparate historico sin carrito, checkout ni venta en linea.
- No se inventan SKU, GTIN, ratings, reviews, fechas de publicacion,
  disponibilidad vigente, direccion, telefono ni `LocalBusiness`.
- El precio historico continua visible como contenido de la pagina, pero no se
  transforma en una oferta estructurada que pueda parecer vigente.
- No se incluyen imagenes pendientes ni referencias `shopify://` o CDN Shopify.
- `SearchAction` se conserva porque existe una busqueda local real en
  `/search`; la ruta permanece `noindex`.

## Archivos

- `src/components/StructuredData.astro` serializa el grafo JSON-LD.
- `src/data/structured-data.ts` contiene los helpers de producto, articulo,
  imagenes e item lists.
- `src/layouts/SiteLayout.astro` genera la base comun y breadcrumbs.
- Las rutas de productos, colecciones, paginas y blogs entregan sus nodos
  especificos.

## Validacion y pendientes

- `pnpm check`: 0 errores, 0 warnings y 0 hints.
- `pnpm build`: correcto; 38 paginas estaticas y sitemap generado con 28 URLs.
- Preview local: 28 URLs del sitemap con status 200, canonical coincidente,
  un JSON-LD parseable por pagina y URLs absolutas.
- El marcado debe volver a probarse en la preview real de Cloudflare y luego
  con Rich Results Test/Schema Markup Validator usando el dominio publico.
- Si se aprueban precios, disponibilidad, identificadores o datos de negocio
  actuales, se pueden agregar posteriormente al nodo correspondiente; no se
  deben inferir desde el contenido historico.
