# Resultados Etapa 6

**Etapa:** 6 - SEO, accesibilidad, performance y regresión visual
**Tarea de cierre:** 6.5 - Verificación obligatoria de la etapa 6
**Estado final:** Aprobada para preview de Cloudflare con bloqueos documentados
**Fecha:** 2026-07-31

## Tareas completadas

- 6.1: SEO técnico estático, sitemap, robots, metadata y protección de preview.
- 6.2: accesibilidad y performance auditadas; se corrigieron contraste y targets táctiles.
- 6.3: regresión visual revisada contra el shell y las proporciones de la fuente Shopify.
- 6.4: enlaces, recursos, rutas del sitemap y status HTTP rastreados.
- 6.5: release candidate auditado y aprobado para preview de Cloudflare.

## Evidencia

- `npm run check`: 0 errores, 0 warnings y 0 hints.
- `npm run build`: correcto; 42 páginas estáticas generadas.
- Build con `PUBLIC_SITE_ENV=production`: correcto.
- Sitemap: 31 URLs únicas, válidas y con respuesta `200`.
- Preview: `robots.txt` usa `Disallow: /` y las páginas usan `noindex, nofollow`.
- Producción: `robots.txt` permite rutas públicas y publica el sitemap definitivo.
- Metadata: canonical, title, robots y descriptions disponibles; no se inventan descriptions ausentes.
- Lighthouse producción desktop/mobile: 100 en accesibilidad, buenas prácticas y SEO.
- Mobile: contraste con fondos opacos, controles y dots de al menos `44px`, sin solapamientos.
- Hero principal: `loading="eager"` y `fetchpriority="high"`.
- Footer y enlaces internos rastreados sin `404`.
- Consola de producción sin errores.

## Archivos creados o modificados

- `src/layouts/SiteLayout.astro`
- `src/pages/index.astro`
- `src/pages/sitemap.xml.ts`
- `src/pages/robots.txt.ts`
- `src/components/MediaPlaceholder.astro`
- `src/components/Header.astro`
- `src/styles/components/homepage.css`
- `src/styles/components/header.css`
- `src/styles/components/footer.css`
- `Docs/RESULTADOS_ETAPA_6.md`
- `Docs/ETAPAS_Y_TAREAS_MIGRACION.md`

No se modificaron `zip_theme_shopify_estable/`, `Imagenes_de_la_web/` ni DNS.

## Bloqueos y pendientes

- Validar el comportamiento real de URLs limpias, `.html` y slash en Cloudflare Pages.
- Futura, favicon de identidad, imagen social de marca y media Shopify faltante siguen pendientes; el logo local se integró en la actualización del 2026-08-01.
- Las policies conservan contenido legal histórico y requieren revisión antes de publicación.
- La medición de `dist` de esta revisión corresponde al estado previo a integrar `astro:assets`; las imágenes JPEG todavía no tenían optimización adicional.
- `alt` de imágenes entregadas sigue pendiente porque no existe texto aprobado en la fuente.

## Criterio de aceptación de Etapa 6 - Tarea 6.5

Cumplido para preview: el candidato tiene SEO técnico, accesibilidad, performance, regresión visual y crawl auditados; no existen bloqueos críticos de uso; y los pendientes restantes están documentados antes de preparar Cloudflare Pages.

## Actualización posterior de media

**Fecha:** 2026-08-01

La nueva entrega de media resolvió el pendiente del logo de identidad y los recursos principales adicionales del home. El favicon, Futura, la imagen social de marca, el alt revisado y la media Shopify restante continúan documentados como pendientes. También se corrigió la geometría del slideshow para que cada slide y su barra de controles ocupen el ancho completo en desktop y mobile.

La actualización volvió a pasar `npm run check` con 0 errores, warnings y hints y `npm run build` con 42 páginas estáticas. La comprobación desde preview confirmó cargas `200` para los 11 recursos del home, cero errores de consola y cero overflow horizontal en viewport mobile.

## Actualización posterior: storefront de productos PLA

**Etapa:** 6 - Tarea 6.3, remediación visual posterior
**Fecha:** 2026-08-06
**Estado:** Completada

Se reprodujo la presentación live de los 11 productos PLA con datos estáticos: galería tipo carrusel, miniaturas desktop, desplazamiento horizontal mobile, contador, controles, zoom modal, precio histórico, cantidad, estado `Agotado`, enlace de envío y acordeones específicos por producto. Los slugs históricos se mantienen sin normalización.

- Archivos principales: `src/components/ProductGallery.astro`, `src/data/pla-product-details.ts`, `src/data/product-media.ts`, `src/pages/products/[slug].astro`, `src/scripts/print3x-ui.ts` y `src/styles/components/product.css`.
- `npm run check`: 0 errores, 0 warnings y 0 hints.
- `npm run build`: correcto; 42 páginas estáticas generadas.
- Preview local: las 11 rutas responden `200`, cada una renderiza cuatro imágenes locales optimizadas y conserva su cantidad de acordeones.
- Comparación live/local en `390px` y `1440px`: galería, miniaturas, títulos, precios, cantidad, botón, envío y encabezado de acordeones quedaron alineados con la geometría observada en Refresh.
- Viewports `768px` y `1024px`: sin overflow horizontal ni recursos críticos faltantes.
- Contenido: títulos y cuerpos de los 11 grupos de acordeones coinciden con el live después de normalizar espacios; se corrigió una diferencia detectada en el texto de compatibilidad del PLA dorado.
- Interacciones: siguiente/anterior, miniaturas, cantidad, apertura de acordeón, modal de imagen y cierre con `Escape` verificados; consola sin errores.

Los bloqueos generales de media, alt aprobado, Futura, favicon de identidad y políticas históricas permanecen documentados. No se modificaron DNS, producción, Shopify ni `zip_theme_shopify_estable/`.

## Actualización posterior: flechas del menú principal

**Etapa:** 6 - Tarea 6.3, remediación visual posterior
**Fecha:** 2026-08-04
**Estado:** Completada

Se corrigió `src/styles/components/header.css` para que los iconos de flecha de `Productos`, `Información` y `Nosotros` usen el flujo flex normal del resumen, en lugar de la posición absoluta común de los `summary`. El menú móvil conserva sus reglas específicas.

- `npm run check`: 0 errores, 0 warnings y 0 hints.
- `npm run build`: correcto; 42 páginas estáticas generadas.
- Preview local a `1440px`: las tres flechas quedaron después de sus textos con `9.9px` de separación computada.

## Actualización posterior: cierre y scroll del menú móvil

**Etapa:** 6 - Tarea 6.3, remediación visual posterior
**Fecha:** 2026-08-04
**Estado:** Completada

Se reemplazó el overlay generado como pseudo-elemento por un botón real que cierra el menú al hacer click fuera del drawer. El drawer ahora permanece fijo bajo el header sticky mientras la página se desplaza por debajo; el foco vuelve al control sin cambiar la posición de scroll.

- `npm run check`: 0 errores, 0 warnings y 0 hints.
- `npm run build`: correcto; 42 páginas estáticas generadas.
- Preview local a `390px` y `768px`: drawer y header permanecen visibles durante el scroll; click en el overlay cierra el menú y conserva `scrollY=600`.
- Preview local a `1024px` y `1440px`: menú desktop activo y drawer móvil oculto.
- Consola del preview: sin errores ni warnings.

## Actualización posterior: controles del slideshow del hero

**Etapa:** 6 - Tarea 6.3, remediación visual posterior
**Fecha:** 2026-08-04
**Estado:** Completada

Se eliminó la exposición visual del contador `1 / 4`, se conservaron sus actualizaciones como estado accesible oculto y se reemplazó el texto de pausa por los iconos SVG de pausa/reproducción del tema Refresh. La barra conserva los cuatro puntos como indicador visual, mantiene el estado accesible del botón y se presenta en una sola fila en desktop y mobile.

- `npm run check`: 0 errores, 0 warnings y 0 hints.
- `npm run build`: correcto; 42 páginas estáticas generadas.
- Preview local a `390px`, `768px`, `1024px` y `1440px`: controles en una sola fila, altura de `55px`, targets de `48.4px` y sin overflow horizontal.
- Interacción: el botón muestra pausa mientras reproduce y reproducción al pausar; `aria-label` y `aria-pressed` cambian correctamente.
- Consola del preview: sin errores ni warnings.

## Actualización posterior: recuadro del hero debajo de la imagen en mobile

**Etapa:** 6 - Tarea 6.3, remediación visual posterior
**Fecha:** 2026-08-04
**Estado:** Completada

Se replicó el comportamiento `banner--mobile-bottom` de la sección `slideshow` de Shopify en el hero de Astro. En pantallas de hasta `749px`, la imagen vuelve al flujo normal, el recuadro pasa después de la imagen y su wrapper deja de imponer la altura mínima de `34rem`. Desktop conserva el recuadro superpuesto sobre la imagen.

- `npm run check`: 0 errores, 0 warnings y 0 hints.
- `npm run build`: correcto; 42 páginas estáticas generadas.
- Preview local: en mobile la imagen termina exactamente donde comienza el recuadro, con `order: 2`, `position: relative` y sin overflow horizontal.
- Preview local: en desktop el contenido conserva la superposición, el centrado y la altura visual del hero.
- Consola del preview: sin errores ni warnings.

## Actualización posterior: optimización de media con Astro

**Etapa:** 7 - Tarea 7.2, trabajo suplementario de media solicitado
**Fecha:** 2026-08-05
**Estado:** Completada con alt y media faltante documentados

Los once assets locales ahora se importan desde `src/assets` y se renderizan con `<Picture>` desde `astro:assets`. El build genera fuentes AVIF, WebP y fallback con variantes responsive; la portada contiene 11 elementos `<picture>`, 22 fuentes y 33 `srcset`. La preview en `390px` y `1440px` confirmó que el hero, las tarjetas, el logo y los compromisos conservan sus cajas, que no hay overflow horizontal y que las imágenes seleccionan rutas `/_astro/`.

- `npm run check`: 0 errores, 0 warnings y 0 hints.
- `npm run build`: correcto; 42 páginas estáticas y 84 transformaciones de imagen generadas.
- Preview local: `/` y `/collections` cargan los recursos optimizados; consola sin errores en las rutas comprobadas.
- Se retiraron las copias duplicadas sin optimizar de `public/images`; los placeholders SVG técnicos permanecen en `public`.
- El `alt` revisado, el favicon de identidad, Futura y las restantes referencias Shopify siguen pendientes según el manifiesto.

## Actualización posterior: réplica de la colección PLA

**Etapa:** 6 - Tarea 6.3, remediación visual posterior
**Fecha:** 2026-08-06
**Estado:** Completada con media local y equivalencias documentadas

Se reprodujo la ruta live `/collections/pla` con su estructura histórica: hero con texto e imagen local aprobada, grid de 11 productos en el orden público, precios históricos y estado `Agotado`, hover de segunda imagen, introducción PLA, 18 bloques de características imagen-texto y dos grupos de acordeones.

- Archivos principales: `src/pages/collections/[slug].astro`, `src/data/pla-collection.ts`, `src/styles/components/collection.css`, `src/content/collections/pla.md` y `src/assets/index-collections-pla/*`.
- El hero usa `src/assets/index/Hero_3.jpg` por confirmación del usuario; la referencia Shopify `2052425b5f.jpg` permanece como media pendiente y no se declara equivalente.
- Las 18 imágenes editoriales se importan desde `src/assets` y se renderizan mediante `MediaPlaceholder`, que entrega `<Picture>` de `astro:assets`; se conservaron sus proporciones históricas en los marcos responsive.
- La verificación independiente en preview con emulación exacta `390x844` y `1440x900` confirmó el layout del hero, el grid de productos, los bloques editoriales y los estados de acordeón; no hay overflow horizontal, imágenes externas ni errores de consola.
- `npm run check`: 0 errores, 0 warnings y 0 hints.
- `npm run build`: correcto; 42 páginas estáticas generadas.
- Verificación local: 11 productos, 18 bloques editoriales, 2 grupos de acordeones, 42 elementos `<picture>` y hover primario/secundario funcionando en desktop.

Los bloqueos generales de Futura, favicon de identidad, alt pendiente de revisión editorial y media Shopify no entregada permanecen documentados. No se modificaron DNS, producción, Shopify ni `zip_theme_shopify_estable/`.

## Corrección posterior: color de la franja de características PLA

**Etapa:** 6 - Tarea 6.3, remediación visual posterior
**Fecha:** 2026-08-06
**Estado:** Completada

La franja `Todas las características del Mejor: PLA` ahora usa la clase `gradient` de Refresh sobre `color-accent-2`, aplicando el token activo `#ab0c6f`. El texto usa el color claro del esquema para igualar la referencia visual.

- Archivos modificados: `src/pages/collections/[slug].astro` y `src/styles/components/collection.css`.
- Preview `390x844`: fondo computado `rgb(171, 12, 111)`, texto `rgb(247, 247, 247)`, sin overflow horizontal.
- Consola del preview: sin errores ni warnings.
- `npm run check`: 0 errores, 0 warnings y 0 hints.
- `npm run build`: correcto; 42 páginas estáticas generadas.

## Actualizacion posterior: metadata social Open Graph

**Etapa:** 6 - Tarea 6.3, metadata social
**Fecha:** 2026-08-26
**Estado:** Completada

Se conecto metadata social especifica a todas las rutas que usan `SiteLayout`. El
layout ahora acepta una imagen optimizada de Astro, titulo y descripcion social,
genera URLs absolutas con el dominio canonico y usa el logo local como fallback.
Tambien emite dimensiones, alt, `og:site_name` y Twitter Card
`summary_large_image`.

La seleccion de imagen conserva el criterio aprobado: el primer hero del home,
la primera imagen disponible de cada producto, el hero de cada coleccion, el
primer poster disponible de cada blog, el poster correspondiente de cada
articulo y la primera imagen local disponible de las paginas editoriales. Las
rutas sin media usan el logo; no se usan referencias `shopify://`, CDN Shopify ni
el placeholder social tecnico.

### Archivos modificados

- `src/layouts/SiteLayout.astro`
- `src/pages/index.astro`
- `src/pages/products/[slug].astro`
- `src/pages/collections/[slug].astro`
- `src/pages/collections/index.astro`
- `src/pages/collections/all.astro`
- `src/pages/blogs/[blog]/index.astro`
- `src/pages/blogs/[blog]/[slug].astro`
- `src/pages/pages/[slug].astro`
- `src/pages/404.astro`
- `src/pages/cart.astro`
- `src/pages/search.astro`
- `src/pages/blogs/articulos/tagged/impresion-3d.astro`

### Verificacion independiente

- `pnpm check`: correcto; 0 errores, 0 warnings y 0 hints.
- `pnpm build`: correcto; 38 paginas estaticas generadas.
- Build de produccion con `PUBLIC_SITE_ENV=production`: correcto; completo en
  16.86 s y genero `sitemap-index.xml` y `sitemap-0.xml`.
- `dist/robots.txt` permite rutas publicas y referencia
  `https://www.print3x.cl/sitemap-index.xml`.
- Las 38 paginas HTML generadas contienen `og:image` y las 38 usan una URL
  absoluta bajo `https://www.print3x.cl/`.
- Se verificaron imagenes especificas para home, producto, colecciones, blog y
  paginas editoriales; las paginas sin media usan el logo local procesado por
  Astro.
- Las 8 rutas controladas esperadas mantienen `noindex, nofollow`: 404, search,
  cart, tag de articulos y las cuatro policies.
- No quedan referencias a `social-placeholder` en la salida HTML.

### Bloqueos y pendientes

- La validacion final de URLs limpias, `.html`, slash, assets y metadata en
  Cloudflare Pages sigue pendiente de una preview publica autorizada.
- El favicon de identidad, Futura local, alt aprobado y media Shopify faltante
  permanecen documentados en el manifiesto.
- No se modificaron DNS, produccion, Shopify, `Readme.md`,
  `zip_theme_shopify_estable/` ni `Imagenes_de_la_web/`.

### Criterio de aceptacion

Cumplido para preview: todas las paginas generadas tienen imagen social, titulo y
descripcion adecuados; las imagenes usan assets locales optimizados o el logo de
fallback; las URLs son absolutas y canonicas; y las rutas controladas conservan
su proteccion de indexacion.

## Actualizacion posterior: auditoria SEO independiente local

**Etapa:** 6 - Tareas 6.2, 6.4 y 6.5
**Fecha:** 2026-08-26
**Estado:** Auditoria local completada; correcciones SEO on-page pendientes.

Esta verificacion se ejecuto sobre el estado actual despues de la integracion de
metadata social. No modifica la preparacion de Cloudflare, no aprueba produccion
y no reemplaza la validacion de una preview publica.

### Alcance y evidencia

- Se leyeron las reglas de `seo-audit`, el plan maestro, la matriz de rutas, el
  manifiesto de media, `Docs/SCHEMA_SEO.md` y los resultados de las etapas 6 y 7.
- `pnpm install --frozen-lockfile`: correcto.
- `pnpm check`: correcto; 0 errores, 0 warnings y 0 hints.
- `pnpm build`: correcto; el estado actual genera 38 paginas estaticas,
  `sitemap-index.xml` y `sitemap-0.xml`.
- El sitemap hijo contiene 28 URLs aprobadas; las 28 responden `200` en preview.
- Se rastrearon 34 enlaces internos unicos: 0 enlaces rotos y 0 errores de
  consola al visitar las 28 URLs del sitemap.
- Los 28 documentos contienen JSON-LD parseable. Se observaron `Organization`,
  `WebSite`, `WebPage`, `BreadcrumbList`, `CollectionPage`, `ItemList`,
  `Article`, `AboutPage` y `Product`.
- Lighthouse de home desktop/mobile: SEO, accesibilidad y buenas practicas en
  100. `/collections/pla` obtuvo SEO 83 y accesibilidad 96; `/products/axis-one`
  obtuvo SEO 83 y accesibilidad 97. Ambos resultados estan afectados por la
  ausencia de meta description; PLA tambien tiene un problema de contraste.
- Las pruebas de rutas locales muestran: rutas limpias `200`, variantes con
  slash `404`, variantes `.html` `200`, y rutas inexistentes `404`. El resultado
  final debe confirmarse en Cloudflare Pages.
- Las imagenes revisadas tienen `width` y `height` y se sirven desde `/_astro/`.
  La navegacion completa no produjo errores de consola.

### Hallazgos priorizados

#### P1 - Meta descriptions ausentes en rutas indexables

Faltan `<meta name="description">` en estas 17 URLs indexables:

- `/blogs/curso_impresion_3d/configurar-repetier-host`
- `/collections/impresoras-3d`
- `/collections/pla`
- `/pages/decuento-por-post-en-rrss`
- `/products/axis-one`
- `/products/pla_amarillo`
- `/products/pla_azul`
- `/products/pla_blanco`
- `/products/pla_celeste`
- `/products/pla_gris`
- `/products/pla_negro`
- `/products/pla_oro`
- `/products/padi-superficie-de-impresion`
- `/products/pla_pantera_rosa`
- `/products/pla_rojo`
- `/products/pla_transparente`
- `/products/pla_verde`

La causa esta documentada en `src/pages/products/[slug].astro` y
`src/pages/collections/[slug].astro`, que pasan `seoDescription` aunque el
contenido de productos y colecciones la mantiene en `null`. La pagina de
Repetier y la pagina promocional tampoco tienen una descripcion SEO aprobada.
No se debe rellenar automaticamente con texto inventado.

#### P1 - Jerarquia de headings incompleta en OpenSCAD

`/blogs/curso_impresion_3d/openscad` no renderiza ningun `<h1>`. El componente
`src/components/OpenScadArticle.astro` comienza con un `<h2>` y su ruta no agrega
un encabezado principal. Se debe incorporar el titulo aprobado como `<h1>`.

#### P1 - Recurso remoto cargado antes de activar el video

La navegacion de `/products/axis-one` solicito
`https://i.ytimg.com/vi/J-rV8g_5Te4/hqdefault.jpg` antes de la interaccion. El
iframe sigue diferido, pero el poster externo contradice la regla del proyecto
de no cargar recursos remotos automaticamente. `LiteYoutube.astro` debe recibir
un poster local tambien en el bloque editorial o diferir toda solicitud remota.

#### P2 - Alt de imagen pendiente

La auditoria encontro numerosos `alt` vacios entre 262 imagenes observadas,
incluidos logo, heroes y galerias de productos. El origen esta en los registros
con `altStatus: pending` de `src/data/index-media.ts`, `src/data/product-media.ts`
y `src/data/site-media.ts`. Se debe completar alt editorial aprobado; solo las
imagenes puramente decorativas deben conservar `alt=""`.

#### P2 - Descripciones duplicadas o demasiado largas

`/blogs/articulos` y `/blogs/noticias` comparten una descripcion de 320
caracteres. Tambien hay descripciones de 176 a 306 caracteres en blogs y paginas
editoriales. Deben revisarse con copy aprobado y diferenciarlas por intencion de
busqueda, sin inventar claims.

#### P2 - Indices y contenido fino

`/blogs/articulos` y `/blogs/noticias` son indexables aunque sus fuentes tienen
`articles: []`. `/pages/decuento-por-post-en-rrss` publica principalmente un
placeholder y carece de metadata SEO. Cada caso requiere contenido aprobado,
`noindex` o retiro segun la matriz de rutas.

#### P2 - URLs historicas retiradas sin destino documentado en hosting

Las tres URLs de articulos retirados responden `404` sin redirect local. Tambien
responden `404` las rutas auxiliares no publicadas de contacto, TPU y accesorios.
La decision de retiro existe en la matriz, pero debe confirmarse si corresponde
un `301` a un equivalente real o un retiro definitivo.

#### P2 - Contraste en precio regular

Lighthouse detecta `#b964ad` sobre blanco con ratio `3.82`, inferior a `4.5`, en
el precio regular de PLA. El color debe oscurecerse o aplicarse una combinacion
aprobada que conserve la identidad visual.

#### P3 - Variantes y sitemap

- `/sitemap.xml` responde `404`; el endpoint actual y anunciado es
  `/sitemap-index.xml`. Debe confirmarse si se requiere redirect desde el
  endpoint historico.
- Las variantes `.html` responden `200` y las variantes con slash `404`; deben
  probarse canonicals y redirects en Cloudflare Pages.
- El loc de la home en sitemap no incluye slash final, mientras el canonical de
  la home si lo incluye. Es una diferencia menor que conviene normalizar.
- El home carga cinco imagenes con `loading="eager"` (cuatro heroes y el logo).
  El trace local no mostro CLS (`0`) ni un bloqueo critico, pero solo el primer
  hero tiene `fetchpriority="high"`.

### Fortalezas confirmadas

- Titles presentes en las rutas auditadas, con longitud observada entre 18 y 57
  caracteres.
- Canonicals, Open Graph, Twitter Card y `og:image` usan el dominio canonico y
  assets procesados por Astro.
- Rutas controladas mantienen `noindex, nofollow`.
- No se encontraron enlaces internos rotos ni errores de consola en el crawl.
- El JSON-LD es valido y no agrega ofertas comerciales falsas; la ausencia de
  `offers` en productos es consistente con el objetivo de escaparate historico.

### Bloqueos y siguiente accion

- No hay acceso a Search Console, Analytics, CrUX, Cloudflare Pages ni al
  dominio productivo; no se puede certificar indexacion, redirects reales o
  rendimiento de campo.
- El informe historico de esta etapa documenta 41 paginas, mientras el build
  actual reporta 38. Esta diferencia debe reconciliarse antes del cierre.
- La siguiente accion es aprobar el copy y los alt faltantes, decidir el destino
  de las rutas retiradas y corregir los hallazgos P1/P2. Despues se deben repetir
  `pnpm check`, `pnpm build`, crawl y Lighthouse.

### Criterio de aceptacion de esta actualizacion

Cumplido el crawl local y la comprobacion tecnica basica: build valido, 28 URLs
del sitemap con `200`, 0 enlaces internos rotos, 0 errores de consola y JSON-LD
parseable. No se considera cerrada la calidad SEO on-page hasta resolver o
aprobar explicitamente los hallazgos P1 y P2.

## Actualizacion posterior: remediacion de metadata y OpenSCAD

**Etapa:** 6 - Tareas 6.2 y 6.5
**Fecha:** 2026-08-26
**Estado:** Remediacion completada; pendientes SEO no relacionados permanecen
documentados.

Se asigno una pagina a cada uno de 17 subagentes independientes. Cada agente
leyo el contenido completo y el contrato de renderizado, redacto una description
veraz en espanol y modifico solo su fuente de contenido. Un agente adicional
comparo la jerarquia de headings de los articulos del curso y agrego `OpenSCAD`
como el unico `<h1>` de `src/components/OpenScadArticle.astro`. Despues se hizo
una revision editorial central para eliminar formulaciones poco naturales sin
agregar hechos nuevos.

### Archivos de contenido modificados

- `src/content/articles/configurar-repetier-host.md`
- `src/content/collections/impresoras-3d.md`
- `src/content/collections/pla.md`
- `src/content/pages/decuento-por-post-en-rrss.md`
- `src/content/products/axis-one.md`
- `src/content/products/filamento_pla_amarillo.md`
- `src/content/products/filamento_pla_azul.md`
- `src/content/products/filamento_pla_blanco.md`
- `src/content/products/filamento_pla_celeste.md`
- `src/content/products/filamento_pla_gris.md`
- `src/content/products/filamento_pla_negro.md`
- `src/content/products/filamento_pla_oro.md`
- `src/content/products/filamento_pla_transparente.md`
- `src/content/products/filamento_pla_verde.md`
- `src/content/products/padi-superficie-de-impresion.md`
- `src/content/products/pla_pantera_rosa.md`
- `src/content/products/pla_rojo.md`

### Reporte de descriptions

Las 17 descriptions nuevas se verificaron en la salida servida. Todas tienen
entre 122 y 151 caracteres, conservan la naturaleza historica del contenido y
no agregan precio actual, stock, compra ni claims no documentados.

| URL | Caracteres |
| --- | ---: |
| `/blogs/curso_impresion_3d/configurar-repetier-host` | 139 |
| `/collections/impresoras-3d` | 151 |
| `/collections/pla` | 138 |
| `/pages/decuento-por-post-en-rrss` | 134 |
| `/products/axis-one` | 142 |
| `/products/filamento_pla_amarillo` | 131 |
| `/products/filamento_pla_azul` | 136 |
| `/products/filamento_pla_blanco` | 136 |
| `/products/filamento_pla_celeste` | 122 |
| `/products/filamento_pla_gris` | 123 |
| `/products/filamento_pla_negro` | 124 |
| `/products/filamento_pla_oro` | 147 |
| `/products/padi-superficie-de-impresion` | 141 |
| `/products/pla_pantera_rosa` | 125 |
| `/products/pla_rojo` | 140 |
| `/products/filamento_pla_transparente` | 123 |
| `/products/filamento_pla_verde` | 122 |

### Verificacion independiente

- `pnpm check`: correcto; 0 errores, 0 warnings y 0 hints.
- `pnpm build`: correcto; 38 paginas estaticas generadas.
- Preview: las 17 URLs responden `200`, todas tienen meta description y cada una
  conserva un solo `<h1>`.
- Crawl del sitemap: 28 URLs responden `200`, las 28 rutas indexables tienen
  meta description y no quedan descriptions ausentes.
- `/blogs/curso_impresion_3d/openscad`: `h1Count=1`, texto exacto `OpenSCAD`.
- `git diff --check`: correcto.
- No se modificaron `Readme.md`, DNS, produccion, Shopify,
  `zip_theme_shopify_estable/` ni `Imagenes_de_la_web/`.

Las descriptions existentes de portada, indices de blog y paginas editoriales
que superan 160 caracteres, el contraste de precio, el poster remoto de Axis
One y las decisiones de rutas retiradas siguen pendientes de sus tareas
especificas; esta actualizacion solo cierra las 17 descriptions ausentes y el
`h1` de OpenSCAD.
