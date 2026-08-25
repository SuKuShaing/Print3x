# Instrucciones del repositorio

## Estado actual verificado

- La raiz contiene una aplicacion Astro estatica ejecutable. `package.json` usa Astro `7.1.6`, TypeScript `6.0.3` y requiere Node `>=22.12.0`; `.nvmrc` fija `22.12.0`.
- Usa siempre `pnpm` como gestor de paquetes y ejecutor de scripts. Los scripts disponibles son `pnpm dev`, `pnpm build`, `pnpm preview` y `pnpm check`. No uses `npm` ni inventes scripts de lint, tests, typecheck o codegen que no existan en `package.json`.
- `astro.config.mjs` fija `output: 'static'`, `site: 'https://www.print3x.cl'`, `trailingSlash: 'never'` y `build.format: 'file'`.
- Las Etapas 0 a 6 estan aprobadas con bloqueos documentados. La Etapa 7.1 esta preparada para Cloudflare Pages, pero el proyecto no se ha desplegado, no se ha usado Wrangler y no se ha modificado DNS.
- `dist/`, `audit-lighthouse-desktop/` y `audit-lighthouse-mobile/` son salidas o evidencias generadas. No trates `dist/` como fuente de contenido.

## Fuentes de verdad

- Lee primero `Docs/PLAN_MAESTRO_MIGRACION_SHOPIFY_A_ASTRO.md` y `Docs/ETAPAS_Y_TAREAS_MIGRACION.md` antes de cambiar arquitectura, rutas o contenido.
- El registro de ejecucion al final de `Docs/ETAPAS_Y_TAREAS_MIGRACION.md` y `Docs/RESULTADOS_ETAPA_N.md` reflejan el avance real mas reciente. El plan maestro conserva decisiones iniciales y una lista de pendientes historica; no asumas que sus frases de preparacion significan que el codigo actual no existe.
- `Docs/INVENTARIO_TEMA.md`, `Docs/INVENTARIO_RUTAS_SEO.md` y `Docs/MANIFIESTO_MEDIA.md` son las matrices aprobadas de tema, URLs y media. `Docs/CLOUDFLARE_PAGES_PREVIEW.md` define la configuracion de preview.
- `zip_theme_shopify_estable/` es el tema Shopify Refresh 9.0.0 y la referencia visual, semantica, de clases, CSS, JavaScript y plantillas. No es la aplicacion Astro.
- `Imagenes_de_la_web/` contiene los archivos originales entregados. No asumas que una referencia `shopify://` tiene equivalente local.
- En caso de conflicto, prioriza el codigo y la configuracion ejecutables, despues las matrices aprobadas y finalmente las plantillas Shopify. Documenta toda decision que no pueda verificarse.

## Estructura implementada

- `src/layouts/SiteLayout.astro` contiene el documento comun, metadata, canonical, robots, favicon, skip link, `#MainContent`, header y footer.
- `src/components/` contiene `Header.astro`, `Footer.astro` y `MediaPlaceholder.astro`.
- `src/content/` contiene colecciones Astro para `products`, `collections`, `pages`, `blogs` y `articles`, validadas en `src/content.config.ts`.
- `src/pages/` genera portada, productos, colecciones, paginas, blogs, articulos, policies, 404, busqueda, carrito, autenticacion, sitemap, robots y favicons.
- `src/data/` contiene contratos estaticos, policies y el inventario de los cinco assets locales del index. `src/scripts/print3x-ui.ts` contiene solo interacciones visuales opt-in mediante `data-p3x-*`.
- `src/styles/` adapta el sistema visual de Refresh; `src/assets/` contiene los once archivos locales disponibles y `public/fonts/` no contiene Futura.

## Seguimiento obligatorio

- Cada avance, cambio de etapa o cambio de tarea debe indicar explicitamente `Etapa N - Tarea N.N` y el estado actual.
- Al cerrar una tarea registra archivos creados o modificados, comandos ejecutados, resultado, bloqueos y criterio de aceptacion comprobado.
- La ultima tarea de cada etapa es una verificacion independiente. No cierres una etapa sin ejecutarla ni marques una tarea terminada sin evidencia.
- Al terminar o finalizar cada etapa, crea o actualiza `Docs/RESULTADOS_ETAPA_N.md` con estado final, tareas, archivos, comandos, resultados, bloqueos, pendientes y evidencia de aceptacion.
- La etapa 7 sigue abierta: el siguiente trabajo documentado es preparar y autorizar una preview de Cloudflare Pages, no cambiar produccion.

## Control del README

- La seccion `ToDos` de `Readme.md` solo puede ser modificada por el usuario. No agregues, elimines, marques ni desmarques tareas en esa seccion, aunque el trabajo correspondiente se haya completado.

## Invariantes de la migracion

- El objetivo es un escaparate historico estatico en Astro y Cloudflare Pages, sin carrito real, checkout, cuentas de cliente, compra, inventario, pickup ni APIs comerciales.
- Conserva las URLs publicas y los slugs exactamente. Los guiones bajos y errores historicos como `decuento-por-post-en-rrss` son datos y no se normalizan.
- Genera rutas exclusivamente desde contenido aprobado. La existencia de `templates/*.json` no confirma una URL publica.
- No inventes texto, metadata, datos, imagenes, alt ni precios. Los precios actuales en productos son historicos y deben permanecer etiquetados como tales.
- Si falta media, conserva el bloque, su proporcion y dimensiones esperadas mediante `pending` o `MediaPlaceholder`; registra fuente, uso, proporcion y bloqueo en el contenido o en `Docs/MANIFIESTO_MEDIA.md`.
- Regla obligatoria para toda imagen actual o futura: renderiza las imagenes de contenido mediante `<Picture>` de `astro:assets` para que pasen por la optimizacion, conversion de formato y variantes responsive de Astro. No escribas `<img>` directamente en la aplicacion; el `<img>` interno generado por `<Picture>` es la unica salida permitida.
- No borres ni sobrescribas trabajo del usuario en `zip_theme_shopify_estable/` o `Imagenes_de_la_web/`.
- No modifiques DNS, no canceles Shopify y no publiques en produccion sin autorizacion explicita. Shopify debe permanecer disponible hasta validar el reemplazo y el rollback.

## Portado visual y dependencias

- Usa `zip_theme_shopify_estable/config/settings_data.json` como fuente de valores activos; `settings_schema.json` solo describe opciones. Conserva ancho `1200px`, Futura como familia configurada, colores, radios, sombras, grillas y espaciados de Refresh.
- Conserva la apariencia de la web actual, incluida la estructura de header, menu desktop/mobile, footer, cards, grids, slideshow, galeria, modal, accordion y estados accesibles. La nueva plataforma no debe ser perceptible para una persona externa.
- Conserva `#MainContent`, skip link, landmarks semanticos, `aria-current`, foco, Escape y targets tactiles accesibles.
- No copies ciegamente Liquid, `shop`, `product`, `collection`, `routes`, `settings`, `content_for_*`, `shopify://`, endpoints Shopify, Loox, Banana Stand, checkout, pickup, quick add o scripts del editor. Son dependencias a reemplazar o retirar.
- `src/scripts/print3x-ui.ts` no debe realizar requests. Las interacciones aprobadas son menu, slider, galeria/modal, accordions, media diferida, compartir nativo y busqueda local.
- No cargues automaticamente videos, embeds, Drive, Autodesk, Wayback, formularios, redes o recursos remotos. Conserva enlaces simples solo si estan revisados y documenta las 13 URLs de video externas y demas bloqueos.
- No agregues GTM `GTM-5VNX4MX`, Loox, Banana Stand, fuentes remotas ni CDN Shopify sin una decision explicita, licencia y proposito documentado.

## Rutas y SEO

- La matriz principal conserva 28 URLs de contenido para el sitemap: portada, 13 productos, 2 colecciones, 5 paginas, 3 blogs y 4 articulos. Los productos, colecciones y articulos conservan sus slugs originales; tres articulos historicos fueron retirados por decision posterior.
- `/collections` y `/collections/all` existen como rutas controladas fuera del sitemap de contenido. `/blogs/articulos/tagged/impresion-3d` es una ruta controlada con `noindex`.
- `/search` y `/cart` son experiencias estaticas controladas, sin comercio ni login, y deben permanecer `noindex, nofollow`. La ruta Shopify `/customer_authentication/redirect` no se genera en Astro; cualquier futuro acceso de usuarios requiere una decision e implementacion separadas. Las cuatro policies tambien estan fuera del indice y requieren revision legal antes de tratarlas como vigentes.
- `/pages/contactanos`, `/products/filamento_tpu` y `/collections/accesorios-3d` no deben publicarse automaticamente solo porque existan enlaces o templates; respeta las decisiones de `Docs/INVENTARIO_RUTAS_SEO.md`.
- Canonical, Open Graph, Twitter y sitemap deben usar `https://www.print3x.cl`, nunca el dominio de preview. No inventes descriptions ausentes; el layout puede omitirlas cuando la fuente no las entrega.
- Sin `PUBLIC_SITE_ENV=production`, las paginas generan `noindex, nofollow` y `robots.txt` usa `Disallow: /`. Solo el build de produccion con `PUBLIC_SITE_ENV=production` permite las rutas publicas y publica el sitemap definitivo.
- El build `format: 'file'` genera `dist/<ruta>.html`; la URL canonica es `/foo` sin slash ni extension. La respuesta real de `/foo`, `/foo/` y `/foo.html` debe validarse en Cloudflare Pages, no suponerse por el build local.

## Media e identidad pendientes

- Hay cinco imagenes locales confirmadas para el index: cuatro heroes y `Categorias_1_filamentos_pla.jpg`. No se consideran equivalentes a nombres Shopify por semejanza.
- Persisten 85 referencias Shopify sin copia local confirmada, logo de identidad pendiente, favicon de identidad pendiente, Futura local ausente, imagen social de marca ausente y alt pendiente para los archivos entregados. `public/favicon.svg` y `public/images/social-placeholder.svg` son placeholders tecnicos.
- No elimines un bloque por falta de media. No descargues ni sustituyas automaticamente recursos del tema. Actualiza el manifiesto al recibir archivos o una decision aprobada.

## Verificacion y despliegue

- El orden minimo es `pnpm install --frozen-lockfile`, `pnpm check`, `pnpm build`, inspeccion de `dist` y pruebas desde `pnpm preview --host 127.0.0.1`.
- Para una preview de Cloudflare usa Node `22.12.0`, comando `pnpm build`, salida `dist` y la configuracion de indexacion documentada en `Docs/CLOUDFLARE_PAGES_PREVIEW.md`.
- La evidencia existente de las Etapas 4–6 registra 42 paginas estaticas, 31 URLs de sitemap, 0 errores de check, Lighthouse 100 en accesibilidad, buenas practicas y SEO en desktop/mobile, y crawl local sin enlaces internos rotos. Repite las verificaciones despues de cambios relevantes; no cites resultados viejos como prueba del estado actual sin ejecutarlos de nuevo.
- Valida visualmente al menos 390px, 768px, 1024px y 1440px, y prueba teclado, foco, Escape, menu mobile, slider, galeria, modal, accordions, busqueda local, 404 y rutas auxiliares.
- Antes de desplegar, valida en Pages las URLs limpias, `.html`, slash, assets, sitemap, robots, canonicals, metadata y rutas profundas. No modifiques DNS hasta aprobar preview y rollback.

## guidelines for developing

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.
