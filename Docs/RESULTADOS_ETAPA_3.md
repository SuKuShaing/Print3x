# Resultados Etapa 3

**Etapa:** 3 - contenido y media
**Tarea ejecutada:** 3.5 - Verificacion obligatoria de la etapa 3
**Estado de la etapa:** Aprobada con bloqueos documentados; Tareas 3.3, 3.4 y 3.5 completadas
**Fecha:** 2026-07-30

## Resultado

La portada dejó de ser un placeholder y ahora reproduce el slideshow, las dos
categorías y la sección de compromisos observadas en `templates/index.json`,
`sections/slideshow.liquid`, `sections/collection-list.liquid` y el HTML público
actual. Las colecciones PLA, impresoras y el índice de colecciones conservan los
slugs, el orden aprobado y los enlaces originales.

El slider usa los atributos `data-p3x-slider` ya soportados por
`src/scripts/print3x-ui.ts`. Conserva autoplay de 5 segundos, loop, puntos,
contador, controles anterior/siguiente, teclado y pausa/reanudación. El script
omite autoplay cuando `prefers-reduced-motion: reduce` está activo.

## Textos y destinos usados

| Slide | Título | Subtítulo | Destino | Acción |
|---|---|---|---|---|
| 1 | Filamentos para Impresión 3D | Vacío en la fuente | `/collections/pla` | Ver colección |
| 2 | Aprender Impresión 3D | Vacío en la fuente | `/blogs/curso_impresion_3d` | Ir 😎 |
| 3 | Filamentos Impresión 3D | Vacío en la fuente | `/collections/pla` | Ver colección |
| 4 | Impresora 3D | Impresora 3D profesional Axis One | `/products/axis-one` | Ver impresora |

Los compromisos usados son `Filamentos Estandarizados`, `Color Homogéneo en los
filamentos`, `Te ayudamos con tips para mejorar` y `Cualquier problema nos
avisas y respondemos`.

## Media y placeholders

- Los cuatro slides usan `MediaPlaceholder` con `indexMedia.hero1` a `hero4` y los archivos locales `/images/index/Hero_1.jpg` a `/images/index/Hero_4.jpg`.
- La tarjeta PLA de portada, `/collections` y el hero de `/collections/pla` usan `/images/index/Categorias_1_filamentos_pla.jpg`.
- En la entrega original, la tarjeta `Impresoras 3D y superficies` de portada y `/collections` conservaba un placeholder cuadrado; la actualización posterior la reemplaza con la categoría Axis One entregada.
- En la entrega original, los cuatro iconos de `Nuestros Compromisos` quedaban como placeholders pendientes; la actualización posterior los reemplaza con los cuatro archivos locales entregados.
- El hero de `/collections/impresoras-3d`, todas las imágenes de producto y la galería de `/collections/all` quedan como placeholders portrait pendientes.
- No se inventaron subtítulos, imágenes, precios, filtros, quick add, API ni acciones de compra.

## Archivos creados o modificados

### Creados

- `src/styles/components/homepage.css`
- `Docs/RESULTADOS_ETAPA_3.md`

### Modificados

- `src/pages/index.astro`
- `src/pages/collections/[slug].astro`
- `src/pages/collections/index.astro`
- `src/pages/collections/all.astro`
- `src/styles/components/collection.css`
- `src/layouts/SiteLayout.astro`

No se modificaron `zip_theme_shopify_estable/` ni `Imagenes_de_la_web/`.
La Tarea 3.4 crea las collections y rutas editoriales descritas en la actualización inferior.

## Comandos y resultados

- `npm run check`: correcto; 0 errores, 0 warnings y 0 hints.
- `npm run build`: correcto para la entrega 3.3; 25 páginas HTML estáticas generadas.
- Conteo independiente de `dist`: 25 archivos `.html` en la entrega 3.3; la entrega 3.4 eleva el total a 41.
- `npm run preview -- --host 127.0.0.1`: preview local disponible en `http://127.0.0.1:4321`.
- Inspección de portada en preview: slideshow accesible, cuatro slides, contador, puntos, autoplay, pausa y ausencia de mensajes de consola.
- Inspección de `/collections/pla`: un asset disponible para el hero y 11 tarjetas de producto pendientes, en el orden aprobado.
- Inspección de `/collections/impresoras-3d`: cero assets disponibles, 2 productos enlazados y placeholders pendientes.
- Inspección de `/collections`: dos tarjetas en orden PLA → impresoras; solo PLA usa el asset local.
- Búsqueda de dependencias en `src`: sin referencias a `shopify://`, `cdn.shopify.com`, `cart.js` o checkout.

## Criterio de aceptación

**Cumplido para Tarea 3.3.** La portada y las colecciones implementadas tienen
los cuatro slides en el orden, textos y destinos observados; usan únicamente
los assets aprobados; conservan placeholders para media faltante; mantienen
interacción accesible sin comercio; y pasan `check`, `build` y la inspección
independiente desde preview.

## Bloqueos y pendientes

- Las imágenes de colección de impresoras, productos, galerías e iconos de compromisos requieren recursos locales antes de sustituir placeholders.
- Logo de identidad y fuente Futura siguen siendo pendientes heredados de la Etapa 2; el favicon usa un placeholder técnico documentado porque no existe copia local confirmada.
- La Etapa 3 queda cerrada tras la auditoría independiente final de Tarea 3.5.

## Actualización: Tarea 3.4

Se migraron cinco páginas, tres índices de blog y siete artículos a Markdown con frontmatter validado por content collections. Se conservaron los slugs originales, incluidos `curso_impresion_3d`, `impresion_3d_calibracion_automatica`, `decuento-por-post-en-rrss` y los guiones bajos existentes.

### Rutas generadas

- 5 páginas: `/pages/nosotros`, `/pages/premios`, `/pages/como-determinar-cual-es-el-mejor-filamento-pla`, `/pages/tarifas-de-envio`, `/pages/decuento-por-post-en-rrss`.
- 3 índices: `/blogs/noticias`, `/blogs/articulos`, `/blogs/curso_impresion_3d`.
- 7 artículos: uno de noticias, dos de artículos y cuatro del curso.
- 1 ruta controlada fuera del sitemap: `/blogs/articulos/tagged/impresion-3d`, con `noindex`.

### Contenido pendiente

- 82 registros `media` con estado `pending` en frontmatter y datos de producto/editoriales auditados.
- 62 bloques visibles `editorial-media-pending` para imágenes, portadas, videos, Drive y el formulario no migrado.
- El artículo de encuesta conserva su título y un bloque pendiente porque la fuente pública solo entregó un estado de carga; no se inventó formulario ni copy.
- No se cargan imágenes remotas, videos, Drive, formularios, Loox ni recursos `cdn.shopify.com`.
- Los enlaces externos revisados permanecen como enlaces simples; los recursos no disponibles tienen fuente, uso, proporción esperada y placeholder.

### Archivos de la Tarea 3.4

- Creados: 5 Markdown de páginas, 3 Markdown de blogs, 7 Markdown de artículos, 4 rutas Astro y `src/styles/components/editorial.css`.
- Modificados: `src/content.config.ts`, `src/layouts/SiteLayout.astro`, `Docs/RESULTADOS_ETAPA_3.md` y `Docs/ETAPAS_Y_TAREAS_MIGRACION.md`.
- No se modificaron `zip_theme_shopify_estable/`, `Imagenes_de_la_web/` ni DNS.

### Verificación independiente de la entrega

- `npm run check`: 0 errores, 0 warnings, 0 hints.
- `npm run build`: correcto; 41 páginas HTML estáticas generadas.
- Preview local: las 16 URLs editoriales solicitadas responden `200` y tienen canonical `https://www.print3x.cl/...` sin `.html`.
- Búsqueda en `src` y `dist`: no hay `shopify://`, `cdn.shopify.com`, `fonts.shopifycdn.com`, `cart.js` ni checkout ejecutable. La única mención de `Loox` está en el README que documenta que fue omitido.

### Correcciones previas a la reauditoria de 3.5

- La búsqueda local conserva su formulario, pero ahora se identifica explícitamente con `data-p3x-local-form` y se documenta como excepción estática sin endpoint.
- `Categorias_1_filamentos_pla.jpg` declara los usos confirmados `index` y `collection` en el manifiesto y el contrato de datos.
- Se eliminaron headings Markdown duplicados en cinco documentos cuyo template ya genera el `h1`.
- La verificación independiente final confirmó las correcciones y aprobó el cierre de Tarea 3.5.

### Hallazgos de la auditoría independiente y remediación

- Se agregaron metas Open Graph y Twitter, `theme-color` y un favicon SVG placeholder local al layout común. El favicon de identidad Shopify sigue pendiente y el placeholder está registrado en `Docs/MANIFIESTO_MEDIA.md`.
- Se corrigieron los estados históricos de este informe y del registro de tareas para que Tarea 3.5 quede explícitamente en reauditoria.

### Verificación independiente final de Tarea 3.5

- Dictamen: **APROBADA**.
- `npm run check`: 0 errores, 0 warnings y 0 hints.
- `npm run build`: correcto; 41 páginas estáticas generadas.
- Preview: 41 rutas públicas, `/favicon.svg` y `/favicon.ico` responden `200`.
- Metadata común, búsqueda local, conteos de media y headings iniciales fueron comprobados sin regresiones.

### Criterio de aceptación de 3.4

Cumplido para la entrega de Tarea 3.4: las collections y rutas estáticas generan las URLs aprobadas, la tabla de envíos se conserva, headings/listas/código/enlaces se migran, las ausencias quedan documentadas como pendientes, y las policies existentes no se alteran. La verificación formal de cierre de la Etapa 3 corresponde a Tarea 3.5.

### Criterio de aceptación de 3.5

Cumplido: el build estático cubre las rutas implementadas, los recursos faltantes conservan placeholders y bloqueos explícitos, no hay dependencias Shopify ejecutables, la búsqueda local no realiza requests externos y la auditoría independiente final aprobó la etapa.

## Actualización posterior: nueva entrega de media del home

**Etapa:** 3 - Tareas 3.1 y 3.3
**Fecha de actualización:** 2026-08-01
**Estado:** completada con alt pendiente y media Shopify todavía faltante documentada.

El usuario entregó seis recursos adicionales en `Imagenes_de_la_web/`: el logo, una segunda imagen de categoría y cuatro iconos de compromisos. Se copiaron a rutas estables de `public/` sin modificar los originales. El logo reemplaza el placeholder del header; la categoría Axis One reemplaza la segunda tarjeta del home y la tarjeta equivalente de `/collections`; los cuatro iconos reemplazan los placeholders de `Nuestros Compromisos`.

La imagen del hero interno de `/collections/impresoras-3d` conserva su estado pendiente porque la fuente histórica registrada (`foto4_edited_-_Ligera.jpg`) es distinta del asset de categoría entregado. No se inventó una equivalencia entre ambos recursos.

### Archivos de la actualización

- Creados: `public/images/brand/logo-print3x.png`, `public/images/index/Categorias_2_impresora_3D_Axis_one.jpg`, cuatro archivos `public/images/index/Nuestros_compromisos_*.avif` y `src/data/site-media.ts`.
- Modificados: `src/data/index-media.ts`, `src/components/Header.astro`, `src/pages/index.astro`, `src/pages/collections/index.astro`, `src/styles/components/header.css`, `src/styles/components/homepage.css` y `Docs/MANIFIESTO_MEDIA.md`.
- No se modificaron `Imagenes_de_la_web/`, `zip_theme_shopify_estable/` ni DNS.

### Verificación independiente de la actualización

- Metadatos locales verificados con `node` y `sharp`: logo `2362 x 433`, categoría `4928 x 3264` e iconos `150 x 150`.
- `npm run check`: 0 errores, 0 warnings y 0 hints.
- `npm run build`: correcto; 42 páginas estáticas generadas.
- Preview con `npm run preview -- --host 127.0.0.1`: las 11 imágenes del home cargan con sus dimensiones naturales y responden `200`.
- La portada se comprobó en desktop y mobile; el slideshow ocupa el ancho completo, los controles quedan debajo y no existe overflow horizontal.
- La consola del home no registra errores. `/collections` carga las dos imágenes de sus tarjetas.

### Criterio de aceptación de la actualización

Cumplido: logo, heroes, dos categorías e iconos de compromisos se sirven desde rutas locales estables; la geometría del home se conserva en desktop y mobile; los faltantes restantes mantienen placeholders y quedan documentados.
