# Resultados Etapa 7

**Etapa:** 7 - Cloudflare Pages, DNS y salida a produccion
**Tarea registrada:** 7.2, ajuste posterior del shell, integración de Axis One y galeria/video local
**Estado:** ajustes e integración completados; la etapa de despliegue sigue abierta.
**Fecha:** 2026-08-17

## Cambio realizado

- Se retiró el icono de cuenta del header desktop y del menú mobile.
- Se eliminó el símbolo SVG y los estilos CSS exclusivos de cuenta.
- Se eliminó `src/pages/customer_authentication/redirect.astro`.
- Se eliminó la regla de autenticación de `robots.txt`.
- Se actualizó la matriz de rutas para registrar la ruta como retirada.

## Integración de Axis One

- Se incorporaron las 16 imágenes de `src/assets/index-products-axis-one/` en el orden de los bloques publicados de Axis One.
- Se trasladó el contenido de la página publicada, incluidos los siete desplegables, el video diferido y la ficha técnica pendiente de revisión.
- Se añadieron las nueve imágenes entregadas en `src/assets/index-products-axis-one/fotos producto/` a la galería principal, con el video en la segunda posición.
- Se creó `LiteYoutube.astro` con `lite-youtube-embed`; el mismo video se muestra en la galería y en el bloque editorial, sin cargar el iframe hasta la activación.
- Se separó el encabezado editorial en una introducción `color-accent-2 gradient` de ancho completo; el video queda fuera de la franja magenta sobre el fondo normal de la página.
- Se añadieron márgenes verticales al contenedor magenta y se fijó el texto centrado para mantener separación visual respecto de los acordeones y del video.
- Se normalizó la galería con marcos `3:2`: las imágenes principales y las miniaturas tienen alturas uniformes, las imágenes conservan todo su contenido con `object-fit: contain` y el video comparte el mismo marco para evitar saltos al cambiar de media.
- Se mostraron las flechas de navegación a ambos lados de las miniaturas en desktop; reutilizan los controles existentes y mantienen el contador oculto solo en ese viewport.
- Se corrigió el overflow horizontal de `.axis-one-content__intro`: `100vw` y `margin-left: calc(50% - 50vw)` se reemplazaron por una estructura de artículo de ancho completo, layout interno `page-width` y franja `width: 100%` sin desplazamiento artificial.
- Se conectó la navegación de flechas con el desplazamiento de la lista de miniaturas y se añadió arrastre horizontal con mouse en desktop; el click directo continúa seleccionando la miniatura y el carrusel táctil móvil conserva su desplazamiento nativo.
- Se corrigió el recorte de las imágenes editoriales de Axis One: el asset de `Objetivo` mide `719 x 295`, mientras su bloque es alto; la regla específica de las features usa `object-fit: contain` para mostrarlo completo.
- Se actualizó el aviso de ficha técnica de Axis One a `Documento no disponible`.
- Se incorporó `miniatura.jpg` como poster local de la media de video de Axis One; la segunda miniatura ahora usa `<Picture>` optimizado en lugar del bloque vacío con solo el símbolo de play.
- Se adaptó `ProductGallery.astro` para conservar galerías con media pendiente y soportar imágenes y video sin generar botones de zoom inválidos.
- Se actualizaron los estilos de producto para conservar la estructura `image-with-text` de Refresh y su comportamiento responsive.
- Se actualizó `Docs/MANIFIESTO_MEDIA.md` con los roles, estados y bloqueos de media de Axis One.

## Verificación

- `npm ci`: correcto tras cerrar procesos antiguos de Astro/TypeScript que bloqueaban un binario nativo de `node_modules`.
- `npm run check`: correcto; 0 errores, 0 warnings y 0 hints.
- `npm run build`: correcto; 41 páginas estáticas generadas y variantes optimizadas para las nueve imágenes de galería.
- La búsqueda de referencias de cuenta/login en `src` no encuentra resultados.
- Preview local: `/`, `/collections/pla`, `/search` y `/cart` responden `200`.
- Preview local: `/customer_authentication/redirect` responde `404` y no existe `dist/customer_authentication/redirect.html`.
- El markup de `/` no contiene `customer_authentication`, `icon-account` ni `Cuenta`.
- Preview local de `/products/axis-one`: ruta `200`, 7 desplegables, 16 imágenes editoriales y 9 imágenes de galería optimizadas bajo `/_astro/`.
- La galería avanza correctamente de `1 / de 9` a `2 / de 9`; al activar el video se crea un iframe `https://www.youtube-nocookie.com/embed/J-rV8g_5Te4` con reproducción diferida.
- El DOM contiene dos componentes `lite-youtube`, uno en la galería y otro en el bloque editorial, ambos con `videoId="J-rV8g_5Te4"`.
- Preview local de `/collections/pla`: ruta `200`, 11 productos, galerías y bloques editoriales visibles.
- Preview local de `/products/axis-one` a `390px` y `1440px`: la introducción magenta contiene solo el encabezado, el video queda fuera y centrado, el primer bloque editorial empieza después y no existe overflow horizontal.
- Preview móvil: margen superior e inferior computado de `2.4rem`, texto centrado y `scrollWidth` igual al viewport.
- Preview desktop: marco principal de `787 x 524px` y miniaturas de `146 x 98px`; una imagen vertical activada conserva el marco `3:2`.
- Preview móvil: marco principal de `343 x 229px`, miniaturas ocultas según el comportamiento existente y `scrollWidth` igual al viewport.
- Navegación desktop: la flecha izquierda inicia deshabilitada, la derecha cambia de `product-media-1` a `product-media-2` y la izquierda devuelve la galería a `product-media-1`; en móvil los controles inferiores permanecen activos.
- Preview desktop: `scrollWidth` igual a `clientWidth` (`1425px`) y la franja ocupa `0` a `1424.8px`, sin scroll horizontal.
- Preview móvil: `scrollWidth` igual a `clientWidth` (`390px`), sin overflow horizontal y sin errores de consola.
- Navegación de miniaturas: cinco avances llevaron la lista a `scrollLeft: 135px` y `product-media-6`; el arrastre con mouse la llevó a `338px`; después el click directo seleccionó `product-media-5`.
- Preview móvil: la lista de miniaturas permanece oculta según el diseño existente, el carrusel principal mantiene `overflow-x: auto`, sin overflow de página ni errores de consola.
- Preview desktop posterior: la imagen de `Objetivo` conserva su marco de `605 x 519px`, mantiene sus dimensiones naturales de `719 x 295px` y usa `object-fit: contain`, sin recortar el logo.
- Se corrigió la selección de miniaturas después de incorporar el arrastre: `setPointerCapture()` retargeteaba el click al `<ul>`; ahora un `pointerup` sin movimiento selecciona la miniatura original y el arrastre continúa suprimiendo solo el click posterior al movimiento.
- Preview local a `390px`: `scrollWidth` menor que el viewport, sin overflow horizontal y sin errores de consola.
- Preview desktop posterior: click real de miniatura cambia la media principal a `product-media-2`; el arrastre incrementa `scrollLeft` de `0` a `180px`; la imagen activa abre el modal y `Escape` lo cierra, retirando `overflow-hidden` del body.
- Preview desktop posterior: la segunda miniatura contiene `<picture>`, carga `/_astro/miniatura...jpg`, queda seleccionable como `product-media-2` y no crea el iframe antes de activar el video.
- Verificación independiente: la salida contiene `dist/products/axis-one.html`, la ruta conserva el título, los siete desplegables y la secuencia de bloques `Objetivo` a `Capacitaciones`.
- El `Readme.md` existente no fue modificado por esta tarea.

## Bloqueos y pendientes

- No se implementa autenticación Astro en esta tarea; cualquier futuro inicio de sesión requiere una decisión y alcance separados.
- El bloque editorial `LiteYoutube` conserva la miniatura externa del componente; la miniatura de la galería usa el asset local `miniatura.jpg` y el iframe solo se solicita cuando la persona activa el video.
- La Tarea 7.2 formal de inventario DNS y rollback sigue abierta/preparada.
- No se modificaron DNS, producción, Shopify ni `zip_theme_shopify_estable/`.

## Actualización Etapa 7 - Tarea 7.2: página Mejor Filamento PLA

**Estado:** implementación completada; la etapa de despliegue sigue abierta.
**Fecha:** 2026-08-25

### Cambio realizado

- Se creó `src/components/MejorFilamentoPage.astro` para reproducir la secuencia publicada de `/pages/como-determinar-cual-es-el-mejor-filamento-pla`: título, introducción, bloques de texto, cuatro imágenes técnicas independientes y ocho bloques con imagen y texto.
- Los ocho bloques mixtos usan `src/components/ImageTextCard.astro`, con la imagen a la derecha en desktop y apilado responsive en mobile.
- Se integraron los 12 recursos de `src/assets/index-pages-mejor_filamento/`; todos se renderizan mediante `<Picture>` con variantes optimizadas `avif` y `webp`.
- Se actualizaron el frontmatter y el manifiesto de media a `available`, con dimensiones locales verificadas y usos documentados.
- Se retiraron del contenido Markdown los nueve avisos de media pendiente que ya no representan el estado de esta página.
- `src/pages/pages/[slug].astro` selecciona el componente específico solo para esta ruta; las demás páginas mantienen su renderizado actual.

### Archivos creados o modificados

- `src/components/MejorFilamentoPage.astro`
- `src/pages/pages/[slug].astro`
- `src/content/pages/como-determinar-cual-es-el-mejor-filamento-pla.md`
- `Docs/MANIFIESTO_MEDIA.md`
- `Docs/INVENTARIO_RUTAS_SEO.md`
- `Docs/RESULTADOS_ETAPA_7.md`

### Verificación independiente

- `pnpm check`: correcto; 0 errores, 0 warnings y 0 hints en 48 archivos.
- `pnpm build`: correcto; 41 páginas estáticas generadas y salida `dist/pages/como-determinar-cual-es-el-mejor-filamento-pla.html` presente.
- Preview local de la ruta: respuesta `200`, 12 `<picture>`, 8 `ImageTextCard`, 0 placeholders pendientes y 0 errores de consola.
- Preview a `390px`: `scrollWidth` igual al viewport, imagen sobre texto y marco de imagen de `357.4px` sin overflow.
- Preview a `768px`: grilla responsive activa, columnas de `195.6px` y `447.2px`, sin overflow.
- Preview a `1024px`: sin overflow horizontal y la imagen permanece en el lado derecho.
- Preview a `1440px`: marco interno de `1210px`, imagen de `384.625px`, texto de `825.375px`, sin overflow horizontal.
- Los recursos usados en la ruta se sirven desde `/_astro/`; no se cargan imágenes CDN ni se generan bloques `pending`.
- `git diff --check`: correcto; solo muestra avisos normales de conversión LF/CRLF de Git.

### Bloqueos y pendientes

- La ausencia de Futura local provoca diferencias menores de salto de línea y altura frente a la referencia publicada; se conserva la familia configurada y el fallback aprobado, sin descargar fuentes remotas.
- No se modificaron DNS, producción, Shopify, `Readme.md` ni `zip_theme_shopify_estable/`.

## Actualización Etapa 7 - Tarea 7.2: artículo Calibración Automática

**Estado:** implementación completada; la etapa de despliegue sigue abierta.

### Cambio realizado

- Se creó `src/components/CalibrationArticle.astro` para reproducir la secuencia publicada del artículo de calibración automática.
- Se integraron los tres videos del archivo `src/assets/index-blogs-calibración_automatica/url_video.txt` mediante `LiteYoutube.astro`, con los tres posters locales correspondientes.
- Se integró `Diagrama_de_Conexion.webp` mediante `<Picture>` y se conservaron el texto, enlaces de recursos, nota de respaldo de Marlin y los bloques G-code.
- `src/pages/blogs/[blog]/[slug].astro` usa el componente específico solo para `impresion_3d_calibracion_automatica`.
- `src/content/articles/impresion_3d_calibracion_automatica.md` registra los cuatro recursos como `available` y conserva la metadata SEO observada.
- `Docs/MANIFIESTO_MEDIA.md` registra dimensiones, usos y videos del artículo.

### Archivos creados o modificados

- `src/components/CalibrationArticle.astro`
- `src/pages/blogs/[blog]/[slug].astro`
- `src/content/articles/impresion_3d_calibracion_automatica.md`
- `Docs/MANIFIESTO_MEDIA.md`
- `Docs/RESULTADOS_ETAPA_7.md`

### Verificación

- `pnpm check`: correcto; 0 errores, 0 warnings y 0 hints.
- `pnpm build`: correcto; 41 páginas estáticas generadas y variantes optimizadas para los cuatro recursos locales.
- La salida contiene `dist/blogs/curso_impresion_3d/impresion_3d_calibracion_automatica.html`.
- Preview local independiente a 390, 768, 1024 y 1440px: la ruta responde `200`, no existe overflow horizontal, no hay errores de consola y se mantienen cuatro `<picture>` y cero placeholders pendientes.
- Preview desktop: los tres videos usan marcos `1210 x 680.625px` y la referencia publicada usa el mismo marco 16:9; el diagrama se sirve desde `/_astro/`.
- Antes de activar cualquier video: existen tres posters locales mediante `<picture>` y 0 iframes.
- Después de activar el primer video: se crea el iframe `https://www.youtube-nocookie.com/embed/HSaMxLdqlrI?rel=0&autoplay=1&playsinline=1` correctamente.
- Los dos bloques G-code mantienen sus cinco y cinco líneas, respectivamente, con desplazamiento horizontal disponible en mobile.
- `git diff --check`: correcto; solo muestra los avisos normales de conversión LF/CRLF de Git.

### Bloqueos y pendientes

- No se modificaron DNS, producción, Shopify ni `zip_theme_shopify_estable/`.

## Actualización Etapa 7 - Tarea 7.2: retiro de artículos y del grupo Blog

**Estado:** completada; la etapa de despliegue sigue abierta.
**Fecha:** 2026-08-25

### Cambio realizado

- Se eliminaron `src/content/articles/encuesta-sistema-operativo-y-software.md`, `src/content/articles/los-mejores-disenos-stl-para-imprimir-esta-navidad.md` y `src/content/articles/regalos-originales-para-el-14-de-febrero-dia-del-amor-y-la-amistad.md`.
- `src/content/blogs/noticias.md` y `src/content/blogs/articulos.md` quedaron con `articles: []`, evitando enlaces a contenido retirado en sus índices.
- Se retiró el grupo `Blog` del menú estático de `src/components/Header.astro`; el cambio aplica a las variantes desktop y mobile porque ambas consumen `menuGroups`.
- `Docs/INVENTARIO_RUTAS_SEO.md` y `AGENTS.md` reflejan las tres URLs como retiradas y el objetivo actual de 28 URLs de contenido en el sitemap.

### Verificación independiente

- No quedan referencias a los tres slugs ni al grupo `Blog` en `src`.
- `pnpm check`: correcto; 0 errores, 0 warnings y 0 hints.
- `pnpm build`: correcto; 38 páginas estáticas generadas.
- `dist/sitemap.xml`: 28 URLs de contenido; solo permanecen los cuatro artículos del curso y los tres índices de blog.
- Preview local: los tres artículos retirados responden `404`; `/blogs/noticias` y `/blogs/articulos` responden `200` sin cards; `/` responde `200` sin `Blog` ni los títulos retirados.
- `git diff --check`: correcto; solo muestra los avisos normales de conversión LF/CRLF de Git.

### Bloqueos y pendientes

- Los índices `/blogs/noticias` y `/blogs/articulos` se mantienen como rutas vacías; no están enlazados desde el menú y su retiro completo requeriría una decisión separada sobre esas URLs.
- No se modificaron DNS, producción, Shopify, `Readme.md` ni `zip_theme_shopify_estable/`.

## Actualización Etapa 7 - Tarea 7.2: índice del curso de Impresión 3D

**Estado:** completada; la etapa de despliegue sigue abierta.
**Fecha:** 2026-08-25

### Cambio realizado

- `src/pages/blogs/[blog]/index.astro` reproduce la estructura publicada de `main-blog`, con un solo `h1`, grilla Refresh de dos columnas en desktop y una columna en mobile.
- Las cards conservan el orden, títulos, extractos y URLs históricas del contenido de `curso_impresion_3d`.
- Se integró la miniatura del primer video de cada artículo: Repetier Host, OpenSCAD, Meshmixer y Calibración Automática.
- Las cuatro imágenes se renderizan mediante `<Picture>` con variantes `avif` y `webp`; no se cargan imágenes externas ni se generan placeholders para estos artículos.
- `src/styles/components/editorial.css` incorpora las reglas de `main-blog`, cards, alturas medias de imagen y breakpoints de Refresh.
- Se restauró el comportamiento de hover de las cards: elevación de `0.3rem`, sombra y transición suave.
- `Docs/MANIFIESTO_MEDIA.md` registra el uso de los cuatro posters en el índice del curso.

### Archivos creados o modificados

- `src/pages/blogs/[blog]/index.astro`
- `src/styles/components/editorial.css`
- `Docs/MANIFIESTO_MEDIA.md`
- `Docs/RESULTADOS_ETAPA_7.md`

### Verificación independiente

- `pnpm check`: correcto; 0 errores, 0 warnings y 0 hints.
- `pnpm build`: correcto; 41 páginas estáticas generadas y variantes optimizadas de los cuatro posters.
- `git diff --check`: correcto; solo muestra avisos normales de conversión LF/CRLF de Git.
- Preview local de `/blogs/curso_impresion_3d` a `390px`, `768px`, `1024px` y `1440px`: 4 cards, 4 `<picture>`, 0 placeholders, 0 imágenes rotas y sin overflow horizontal.
- Preview local: la ruta conserva un único `h1`, las cuatro URLs internas responden `200` y no registra errores de consola.
- Las fuentes renderizadas de las cards apuntan a `/_astro/`; no hay URLs CDN en el bloque del índice.
- Hover verificado en preview: la primera card aplica `translateY(-3.3px)` y sombra `rgba(148, 16, 129, 0.12)`.

### Bloqueos y pendientes

- La diferencia tipográfica respecto de la página publicada depende de la Futura local ausente; se conserva la familia configurada por el tema y el fallback existente del proyecto.
- No se modificaron DNS, producción, Shopify ni `zip_theme_shopify_estable/`.

## Corrección Etapa 7 - Tarea 7.1: contraste de botones Repetier Host

**Estado:** completada; la etapa de despliegue sigue abierta.

- `.rte a` estaba sobrescribiendo el color del texto de `.button`, dejando texto magenta sobre fondo magenta.
- `src/components/RepetierHostArticle.astro` ahora fuerza el color claro del botón y elimina el subrayado heredado.
- Verificación de preview: texto visible, fondo `rgb(206, 24, 112)` y contraste correcto en los cinco botones.
- No se modificaron DNS, producción, Shopify ni `zip_theme_shopify_estable/`.

## Corrección Etapa 7 - Tarea 7.1: archivos no disponibles

**Estado:** completada; la etapa de despliegue sigue abierta.

- Se deshabilitaron `Archivos de configuración` y los tres botones de servidores de Print3x.
- Cada control usa `title="Archivo no disponible"`, por lo que el navegador muestra el aviso al pasar el mouse sobre el botón.
- El enlace `Servidores de Repetier` permanece activo.
- No se modificaron DNS, producción, Shopify ni `zip_theme_shopify_estable/`.

## Actualización Etapa 7 - Tarea 7.2: favicon institucional PNG

**Estado:** completada; la etapa de despliegue sigue abierta.

### Cambio realizado

- `src/layouts/SiteLayout.astro` ahora referencia `public/Favicon.png` como `/Favicon.png` con `type="image/png"`.
- Se conserva el archivo `public/Favicon.png` entregado para la identidad visual; no se reintroduce el placeholder SVG.

### Verificación

- `pnpm install --frozen-lockfile`: correcto.
- `pnpm check`: correcto; 0 errores, 0 warnings y 0 hints.
- `pnpm build`: correcto; 41 páginas estáticas generadas.
- `dist/Favicon.png` existe y conserva el nombre con mayúscula inicial.
- Las 41 páginas generadas incluyen `<link rel="icon" href="/Favicon.png" type="image/png">`.

### Bloqueos y pendientes

- No se modificaron DNS, producción, Shopify ni `zip_theme_shopify_estable/`.

## Actualización Etapa 7 - Tarea 7.2: artículo Meshmixer

**Estado:** completada; la etapa de despliegue sigue abierta.

### Cambio realizado

- Se creó `src/components/MeshmixerArticle.astro` para reproducir la secuencia publicada de `/blogs/curso_impresion_3d/meshmixer`.
- Se integraron los tres videos de `src/assets/index-blogs-meshmixer/urls-videos.txt` con `LiteYoutube.astro` y sus posters locales `Miniatura 1.jpg`, `Miniatura 2.jpg` y `Miniatura 3.jpg`.
- Se integraron `img 1.webp` y `img 2.webp` mediante dos instancias de `src/components/ImageTextCard.astro`, pasando el contenido editorial como `html` para conservar negritas y párrafos.
- `src/pages/blogs/[blog]/[slug].astro` selecciona el componente específico solo para `meshmixer`; los demás artículos mantienen su renderizado existente.
- `src/content/articles/meshmixer.md` registra la descripción SEO observada y los cinco recursos locales como `available`.
- `Docs/MANIFIESTO_MEDIA.md` registra los recursos, dimensiones, usos y videos de Meshmixer.

### Archivos creados o modificados

- `src/components/MeshmixerArticle.astro`
- `src/pages/blogs/[blog]/[slug].astro`
- `src/content/articles/meshmixer.md`
- `Docs/MANIFIESTO_MEDIA.md`
- `Docs/RESULTADOS_ETAPA_7.md`

### Verificación

- `pnpm check`: correcto; 0 errores, 0 warnings y 0 hints.
- `pnpm build`: correcto; 41 páginas estáticas generadas.
- `dist/blogs/curso_impresion_3d/meshmixer.html` existe.
- Preview desktop: tres videos de `1210 x 680.625px`, altura total `6841px`, sin overflow horizontal.
- Preview mobile a `390px`: videos de `342.2 x 192.49px`, sin overflow horizontal y botones de descarga a ancho completo.
- Antes de activar cualquier video: tres posters locales mediante `<picture>`, 0 iframes y 0 bloques `pending`.
- Después de activar el primer video: iframe `https://www.youtube-nocookie.com/embed/bV8uAMO8r9o?rel=0&autoplay=1&playsinline=1` creado correctamente.
- Las dos imágenes técnicas cargan desde `/_astro/` como variantes optimizadas; no existen `<img>` directos en el componente.
- Preview desktop: los dos `ImageTextCard` conservan marcos de `605 x 448.5px` y `605 x 806.66px`, con imagen a la izquierda y texto a la derecha.
- Preview mobile: los dos `ImageTextCard` se apilan en una columna, sin overflow horizontal.
- Consola de preview: 0 errores y 0 warnings en la carga inicial.
- `git diff --check`: correcto; solo muestra avisos normales de conversión LF/CRLF de Git.

### Bloqueos y pendientes

- Las descargas y enlaces a Thingiverse, Google Drive, Autodesk y Wayback permanecen como enlaces externos revisados; no se cargan automáticamente.
- No se modificaron DNS, producción, Shopify ni `zip_theme_shopify_estable/`.

### Corrección de disponibilidad

- Se deshabilitaron los botones `Meshmixer 3.5 para Windows` y `Meshmixer 3.5 para Mac` de la sección de servidores de Print3x.
- Se deshabilitó el control `Ocarina con soportes`.
- Los tres controles usan `title="Archivo no disponible"` en un contenedor nativo para conservar el tooltip al pasar el mouse sobre el control deshabilitado.
- El endpoint heredado `src/pages/favicon.ico.ts` permanece sin cambios; el favicon global utiliza exclusivamente el PNG configurado en el layout.

## Actualización Etapa 7 - Tarea 7.1: artículo OpenSCAD

**Estado:** completada; la etapa de despliegue sigue abierta.

### Cambio realizado

- Se creó `src/components/OpenScadArticle.astro` para reproducir las dos secciones publicadas: video y comparativa.
- Se integró `src/assets/index-blogs-openscad/openscad.jpg` como poster local mediante `<Picture>` dentro de `LiteYoutube.astro`.
- Se usó el video `TscVG74uTUA`, correspondiente a `src/assets/index-blogs-openscad/url-video.txt`; el iframe se crea solo al activar el video.
- La ruta `src/pages/blogs/[blog]/[slug].astro` usa el componente específico solo para `openscad`; los demás artículos mantienen su renderizado existente.
- `src/content/articles/openscad.md` registra la portada como media `available`, sus dimensiones `1280 x 720px`, proporción `16:9` y la descripción SEO observada.
- `Docs/MANIFIESTO_MEDIA.md` registra la portada local de OpenSCAD y el archivo de origen de la URL.

### Archivos creados o modificados

- `src/components/OpenScadArticle.astro`
- `src/pages/blogs/[blog]/[slug].astro`
- `src/content/articles/openscad.md`
- `Docs/MANIFIESTO_MEDIA.md`
- `Docs/RESULTADOS_ETAPA_7.md`

### Verificación

- `pnpm check`: correcto; 0 errores, 0 warnings y 0 hints.
- `pnpm build`: correcto; 41 páginas estáticas generadas y variantes optimizadas de la portada local.
- Preview local móvil a `390px`: video `342.2 x 192.49px`, comparativa centrada, sin overflow horizontal y sin errores de consola; las medidas coinciden con la referencia publicada.
- Preview local desktop a `1440px`: video `1210 x 680.625px`, composición centrada, sin overflow horizontal y sin errores de consola.
- Antes de activar el video: poster servido mediante `<picture>` bajo `/_astro/` y 0 iframes.
- Después de activar el video: iframe `https://www.youtube-nocookie.com/embed/TscVG74uTUA?rel=0&autoplay=1&playsinline=1` creado correctamente.
- La salida contiene `dist/blogs/curso_impresion_3d/openscad.html`.
- `git diff --check`: correcto; solo muestra avisos normales de conversión LF/CRLF de Git.
- Corrección posterior: se fija el color del texto del botón porque la regla global `.rte a` lo sobrescribía con el mismo magenta del fondo.

### Bloqueos y pendientes

- La tabla de comparación permanece como botón desactivado con `title="Archivo no disponible"`; no se incrusta ni navega a Google Drive.
- No se modificaron DNS, producción, Shopify ni `zip_theme_shopify_estable/`.

## Actualizacion Etapa 7 - Tarea 7.2: ImageTextCard en las caracteristicas de PLA

**Estado:** completada; la etapa de despliegue sigue abierta.

### Cambio realizado

- `src/pages/collections/[slug].astro` reemplaza el markup duplicado de las caracteristicas de PLA por `ImageTextCard`.
- `src/components/ImageTextCard.astro` acepta `html` para conservar el contenido editorial aprobado con negritas, saltos de linea y multiples parrafos.
- Se mantienen las 18 imagenes locales, el orden y la alternancia definida en `src/data/pla-collection.ts`.
- `src/styles/components/collection.css` retira reglas especificas del markup anterior que ya no se utilizan.

### Verificacion

- `pnpm check`: correcto; 0 errores, 0 warnings y 0 hints.
- `pnpm build`: correcto; 41 paginas estaticas y 930 variantes de imagen optimizadas.
- Preview de `/collections/pla` a `1280px`: 18 cards, 18 `<picture>`, 9 inversiones responsive, contenido HTML preservado, 0 imagenes rotas y sin overflow.
- Preview de `/collections/pla` a `390px`: 18 cards, 9 inversiones responsive, 0 imagenes rotas y sin overflow horizontal.
- `git diff --check`: correcto; solo muestra los avisos normales de conversion LF/CRLF de Git.

### Bloqueos y pendientes

- No se modificaron DNS, produccion, Shopify ni `zip_theme_shopify_estable/`.

## Corrección visual Etapa 7 - Tarea 7.2: inversión de card Vuelta a Chile

**Estado:** completada; la etapa de despliegue sigue abierta.

### Cambio realizado

- `src/components/PremiosPage.astro` cambia el bloque `2016 - Vuelta a Chile` a `reverse: true`, colocando la imagen a la derecha y el texto a la izquierda mediante la clase responsive existente de Refresh.

### Verificación

- `pnpm check`: correcto; 0 errores, 0 warnings y 0 hints.
- `pnpm build`: correcto; 41 páginas estáticas y 776 variantes de imagen optimizadas.
- `git diff --check`: correcto; solo muestra avisos normales de conversión LF/CRLF de Git.
- El HTML generado de `/pages/premios` conserva el bloque `Vuelta a Chile` y aplica la inversión responsive mediante `image-with-text__grid--reverse`.

### Bloqueos y pendientes

- No se modificaron DNS, producción, Shopify ni `zip_theme_shopify_estable/`.

## Correccion visual Etapa 7 - Tarea 7.2: centrado y separacion de cards PLA

**Estado:** completada; la etapa de despliegue sigue abierta.

### Cambio realizado

- `src/styles/components/collection.css` centra cada `.pla-feature` mediante margenes automaticos.
- Las cards consecutivas de PLA ahora tienen `4rem` de separacion en desktop y `2rem` en mobile, igual que las cards de Padi y Axis One.

### Verificacion

- `pnpm check`: correcto; 0 errores, 0 warnings y 0 hints.
- `pnpm build`: correcto; 41 paginas estaticas y 930 variantes de imagen optimizadas.
- Preview a `1440px`: cards centradas con margen lateral de `60px` y separacion computada de `44px`.
- Preview a `390px`: separacion computada de `22px`, sin overflow horizontal y sin imagenes rotas.
- `git diff --check`: correcto; solo muestra los avisos normales de conversion LF/CRLF de Git.

### Bloqueos y pendientes

- No se modificaron DNS, produccion, Shopify ni `zip_theme_shopify_estable/`.

## Correccion visual Etapa 7 - Tarea 7.2: logo de la primera card de productos

**Estado:** completada; la etapa de despliegue sigue abierta.

### Cambio realizado

- `src/components/ImageTextCard.astro` incorpora la prop `imageFit` para elegir entre `cover` y `contain` sin afectar las cards existentes de Premios.
- La primera card de `src/components/PadiFeatures.astro` y `src/components/AxisOneFeatures.astro` usa `imageFit="contain"`, mostrando completo el logo Axis One.
- Se retiro la regla CSS de producto que perdia contra la especificidad del estilo encapsulado de `ImageTextCard`.

### Verificacion

- `pnpm check`: correcto; 0 errores, 0 warnings y 0 hints.
- `pnpm build`: correcto; 41 paginas estaticas y 887 variantes de imagen optimizadas.
- Preview de Padi y Axis One a `1280px`: la primera imagen computa `object-fit: contain` y no existe overflow.
- Preview de Padi y Axis One a `390px`: la primera imagen mantiene `object-fit: contain`, no hay overflow y no hay imagenes rotas.
- `git diff --check`: correcto; solo muestra los avisos normales de conversion LF/CRLF de Git.

### Bloqueos y pendientes

- No se modificaron DNS, produccion, Shopify ni `zip_theme_shopify_estable/`.

## Actualizacion Etapa 7 - Tarea 7.2: reutilizacion de ImageTextCard en productos

**Estado:** completada; la etapa de despliegue sigue abierta.

### Cambio realizado

- `src/components/ImageTextCard.astro` ahora acepta enlaces opcionales y el atributo de carga de imagen sin cambiar la API usada por Premios.
- `src/components/PadiFeatures.astro` reemplaza el markup duplicado de sus ocho cards por `ImageTextCard`.
- `src/components/AxisOneFeatures.astro` reutiliza el mismo componente para sus dieciseis cards, manteniendo el video y la ficha tecnica fuera de esta migracion.
- `src/styles/components/product.css` conserva `object-fit: contain` para las imagenes editoriales de ambos productos y retira reglas especificas del antiguo `MediaPlaceholder`.

### Verificacion

- `pnpm check`: correcto; 0 errores, 0 warnings y 0 hints.
- `pnpm build`: correcto; 41 paginas estaticas y 887 variantes de imagen optimizadas.
- Preview de `/products/padi-superficie-de-impresion`: 8 cards, 8 `<picture>`, 4 inversiones responsive, 2 enlaces editoriales, 0 imagenes rotas y sin overflow a 390px.
- Preview de `/products/axis-one`: 16 cards, 16 `<picture>`, 8 inversiones responsive, 2 enlaces editoriales, 0 imagenes rotas y sin overflow a 1440px.
- `git diff --check`: correcto; solo muestra los avisos normales de conversion LF/CRLF de Git.

### Bloqueos y pendientes

- No se modificaron DNS, produccion, Shopify ni `zip_theme_shopify_estable/`.
- La Tarea 7.2 formal de inventario DNS y rollback continua abierta/preparada.

## Corrección Etapa 7 - Tarea 7.2: marco visual de posters locales

**Estado:** completada; la etapa de despliegue sigue abierta.

### Corrección realizada

- `src/components/LiteYoutube.astro` envuelve el `<Picture>` en `.lite-youtube__poster`, porque Astro aplica la clase del componente de imagen al `<img>` interno.
- El contenedor y el `<picture>` interno ahora ocupan todo el marco del video; esto elimina el bloque negro generado debajo del poster y conserva la proporción especial 4:3.

### Verificación

- Preview local de `/pages/premios`: los cuatro posters ocupan exactamente el marco de sus videos; los videos 16:9 miden `1170 x 658.125px` y el video 4:3 mide `1170 x 877.5px`.
- Preview local full page: captura `artifacts/premios-posters-fixed.png`, sin bloques negros debajo de los posters y con las cuatro imágenes visibles después de activar su carga diferida por scroll.
- `pnpm check`: correcto; 0 errores, 0 warnings y 0 hints.
- `pnpm build`: correcto; 41 páginas estáticas y 812 variantes de imagen generadas.

### Bloqueos y pendientes

- No se modificaron DNS, producción, Shopify ni `zip_theme_shopify_estable/`.

## Actualización Etapa 7 - Tarea 7.2: posters locales de videos de Premios

**Estado:** completada; la etapa de despliegue sigue abierta.

### Cambio realizado

- `src/components/PremiosPage.astro` asocia `thumbnail 1` a `thumbnail 4` con los cuatro videos en el orden de aparición del timeline.
- `src/components/LiteYoutube.astro` acepta un poster local, lo renderiza mediante `<Picture>` y oculta ese poster cuando el componente activa el iframe.
- Cuando existe poster local, se evita la solicitud del poster remoto de YouTube; la carga del iframe continúa siendo diferida hasta la interacción.
- `Docs/MANIFIESTO_MEDIA.md` registra los cuatro posters como media local disponible.

### Verificación

- `pnpm check`: correcto; 0 errores, 0 warnings y 0 hints.
- `pnpm build`: correcto; 41 páginas estáticas y 812 variantes de imagen generadas, incluyendo variantes optimizadas de los cuatro posters.
- `git diff --check`: correcto; solo muestra avisos normales de conversión LF/CRLF de Git.

### Bloqueos y pendientes

- No se modificaron DNS, producción, Shopify ni `zip_theme_shopify_estable/`.

## Actualización Etapa 7 - Tarea 7.2: fidelidad visual de Premios e historia

**Estado:** completada para la implementación visual de `/pages/premios`; la etapa de despliegue sigue abierta.

### Cambio realizado

- Se creó `src/components/PremiosPage.astro` con la secuencia publicada de título, seis bloques históricos, cuatro videos y apariciones en prensa.
- Las seis imágenes entregadas en `src/assets/index-pages-premios/` se integran mediante `<Picture>` y conservan la alternancia de columnas de la referencia.
- Los cuatro videos del archivo `Links a los videos en youtube.txt` se integran mediante `LiteYoutube.astro`, sin iframes directos ni carga del video antes de activarlo.
- Se añadieron estilos responsive en `src/styles/components/premios.css` para reproducir el espaciado, tarjetas de texto, proporciones de imagen, videos 16:9/4:3 y bloque final de prensa de Refresh.
- Se actualizó `Docs/MANIFIESTO_MEDIA.md` con los seis recursos locales y los cuatro posters locales de video.

### Verificación

- `pnpm check`: correcto; 0 errores, 0 warnings y 0 hints.
- `pnpm build`: correcto; 41 páginas estáticas y 776 variantes de imagen optimizadas.
- Preview local de `/pages/premios` a `390px`: título, seis imágenes, cuatro controles de video y bloque de prensa presentes; no existe overflow horizontal (`documentWidth` 375px por scrollbar vertical frente a viewport de 390px).
- Preview local de `/pages/premios`: antes de activar un video no hay iframes; al activar el primer video se crea el iframe `https://www.youtube-nocookie.com/embed/xRHSvi9GFfE?rel=0&autoplay=1&playsinline=1`, confirmando la carga diferida de `LiteYoutube`.
- El iframe activado muestra que el video externo no está disponible actualmente en YouTube; la integración local y la URL configurada funcionan, pero la disponibilidad del recurso depende del proveedor.
- La snapshot de accesibilidad conserva landmarks, título, textos alternativos, botones de reproducción y enlaces de prensa.
- Corrección posterior: las imágenes se veían estiradas porque el selector base de Refresh se detenía en `<picture>` y no alcanzaba el `<img>` generado por Astro; `premios.css` ahora aplica al `<img>` interno la misma posición absoluta, proporción del contenedor y `object-fit: cover` de la referencia publicada.
- Verificación posterior: la primera imagen pasa de `455.8 x 843px` a `455.8 x 256.025px`, coincidiendo con el contenedor y la referencia de `print3x.cl`.
- Corrección visual posterior: el título `Premios e historia` heredaba `text-align: start` dentro de un contenedor centrado; `premios.css` ahora lo centra explícitamente.
- Verificación posterior: el centro del título difiere `0.1px` del centro del viewport de `1536px`.
- Corrección visual posterior: la tarjeta histórica de 2017 tenía `reverse: true`; ahora usa `reverse: false` para conservar la imagen a la izquierda y el texto a la derecha, como en `print3x.cl`.

### Bloqueos y pendientes

- Los cuatro posters locales de `src/assets/index-pages-premios/thumbnails/` se integran en el orden de aparición de los videos; `LiteYoutube.astro` los renderiza mediante `<Picture>` y solo solicita el iframe al activar el video.
- No se modificaron DNS, producción, Shopify ni `zip_theme_shopify_estable/`.

## Actualización Etapa 7 - Tarea 7.3: separación vertical de Nosotros

**Estado:** completada; la etapa de despliegue sigue abierta.

### Cambio realizado

- `src/styles/components/editorial.css` añade `4rem` de margen superior a los compromisos y al bloque Historia/Futuro en desktop.
- En móvil, ambos márgenes se ajustan a `3rem` para conservar proporción sin hacer crecer excesivamente la página.
- Se mantienen intactos los espacios internos de la introducción, la prensa, el carrusel y los bloques de contenido.

### Verificación

- `pnpm check`: correcto; 0 errores, 0 warnings y 0 hints.
- `pnpm build`: correcto; 41 páginas estáticas y 720 variantes generadas.
- Preview desktop: `44px` entre prensa y compromisos, y `44px` entre compromisos e Historia.
- Preview móvil a `390px`: `33px` entre las mismas secciones, sin overflow horizontal y con 0 imágenes rotas.

### Bloqueos y pendientes

- No se modificaron DNS, producción, Shopify ni `zip_theme_shopify_estable/`.

## Actualización Etapa 7 - Tarea 7.2: fondo y alineación de las diapositivas de compromisos

**Estado:** completada; la etapa de despliegue sigue abierta.

### Cambio realizado

- `src/styles/components/editorial.css` mueve el fondo `#981986` y el radio de `20px` desde `.about-page__commitment-card` a `.about-page__commitment`.
- La tarjeta interna queda transparente para evitar que el margen superior colapsado del icono desplace visualmente el recuadro hacia abajo.
- Se conserva la capa visual sutil sobre el fondo y la separación interna del contenido.

### Verificación

- `pnpm check`: correcto; 0 errores, 0 warnings y 0 hints.
- `pnpm build`: correcto; 41 páginas estáticas y 720 variantes generadas.
- Preview: el `li` tiene fondo `rgb(152, 25, 134)` equivalente a `#981986`, radio `20px`; la tarjeta tiene fondo transparente.
- Preview: 0 imágenes rotas y sin overflow horizontal del documento.

### Bloqueos y pendientes

- No se modificaron DNS, producción, Shopify ni `zip_theme_shopify_estable/`.

## Actualización Etapa 7 - Tarea 7.2: fidelidad visual de Nosotros

**Estado:** completada; la etapa de despliegue sigue abierta.

### Cambio realizado

- El hero de `/pages/nosotros` ahora ocupa todo el ancho, inicia inmediatamente bajo el header y conserva la proporción de la referencia live en desktop y móvil.
- Se ajustaron tamaños, anchos y espaciados de títulos, introducción, prensa, Historia y Futuro a las proporciones observadas en `https://www.print3x.cl/pages/nosotros`.
- La prensa usa filas de texto con fecha inline, sin bordes ni tarjetas añadidas.
- Los tres compromisos ahora se muestran como columnas en desktop y como carrusel horizontal con peek y controles en móvil, igual que la referencia.
- Se ajustó el alto del logo/header para igualar la altura observada del shell sin cambiar rutas ni contenido comercial.
- Se conservaron los assets locales, `<Picture>`, la navegación estática y los textos aprobados.

### Verificación

- `npm run check`: correcto; 0 errores, 0 warnings y 0 hints.
- `npm run build`: genera `dist/pages/nosotros.html`; mantiene el bloqueo preexistente de `Sharp` ausente en `node_modules` durante la optimización de imágenes.
- Preview desktop a `1536px`: header `76.5px`, hero `1521 x 616px`, contenido central `858px`, compromisos `1210 x 375px`, sin overflow horizontal.
- Preview móvil a `390px`: hero `375 x 374px`, contenido `302px`, compromisos con tarjetas `328px`, tres slides y sin overflow horizontal.
- Preview móvil: el botón siguiente cambia el slide activo de `0` a `1`, los controles están dentro del carrusel y el contenido de Historia/Futuro conserva el orden y la lectura vertical.

### Bloqueos y pendientes

- El hero y los iconos usan los archivos locales entregados, por lo que la fotografía no puede ser idéntica a la fotografía histórica remota de Shopify.
- Debe resolverse `Sharp` antes de una validación final de carga real de las variantes optimizadas y antes del despliegue en Cloudflare Pages.
- No se modificaron DNS, producción, Shopify ni `zip_theme_shopify_estable/`.

## Correccion visual Etapa 7 - Tarea 7.2: titulo Nosotros

**Estado:** completada.

- El titulo `Nosotros` del hero aumento levemente de `4.727rem` a `5rem`.
- El titulo usa blanco pleno (`#fff`) en lugar de la opacidad heredada del contenedor.
- `pnpm check`: correcto; 0 errores, 0 warnings y 0 hints.
- `git diff --check`: sin errores de whitespace.
- El bloqueo de `Sharp` permanece independiente y sin cambios.

## Correccion visual Etapa 7 - Tarea 7.2: recorte y filtro del hero Nosotros

**Estado:** completada.

- La fotografía del hero usa `object-position: center top` para conservar la parte superior de la imagen y desplazar el recorte hacia abajo.
- Se añadió una capa negra de `15%` sobre la fotografía, sin oscurecer el título.
- El contenido del hero conserva una capa superior (`z-index: 2`) y el filtro queda debajo (`z-index: 1`).
- `pnpm check`: correcto; 0 errores, 0 warnings y 0 hints.
- Preview local: `object-position: 50% 0%`, filtro `rgba(0, 0, 0, 0.15)`, título `rgb(255, 255, 255)`, `font-size: 55px` y sin overflow horizontal.
- El bloqueo de `Sharp` permanece independiente y sin cambios.

## Correccion de runtime Etapa 7 - Tarea 7.2: variantes de imagen

**Estado:** completada.

- El problema de imágenes ausentes en `pnpm preview` se debía a que `Sharp` estaba solo como dependencia opcional transitiva de Astro y no estaba declarado directamente.
- Se añadió `sharp@0.35.3` a `package.json`; `pnpm-lock.yaml` quedó actualizado.
- `pnpm check`: correcto; 0 errores, 0 warnings y 0 hints.
- `pnpm build`: correcto; 41 páginas generadas y 720 variantes de imagen optimizadas.
- Preview `/pages/nosotros`: 2/2 imágenes cargadas, ambas con HTTP `200`.
- Preview `/`: 11/11 imágenes cargadas, todas con HTTP `200` y sin imágenes rotas.
- El bloqueo de `Sharp` queda resuelto.

## Actualización Etapa 7 - Tarea 7.2: página Nosotros

**Estado:** completada para la implementación visual de `/pages/nosotros`; la etapa de despliegue sigue abierta.

### Cambio realizado

- Se creó `src/components/NosotrosPage.astro` para reproducir la estructura publicada: fotografía del equipo, introducción, prensa por año, compromisos en carrusel y bloques de Historia/Futuro.
- Se integró `src/assets/index-pages-nosotros/foto equipo.jpg` como fotografía principal y tres iconos locales como media de compromisos, todos mediante `<Picture>` o `MediaPlaceholder`.
- Se conectó la variante especial desde `src/pages/pages/[slug].astro` sin alterar las demás páginas editoriales ni la ruta `/pages/nosotros`.
- Se añadieron estilos responsive en `src/styles/components/editorial.css`, conservando el sistema visual Refresh, los colores institucionales y el comportamiento accesible del carrusel existente.
- Se actualizó `Docs/MANIFIESTO_MEDIA.md` con el uso de los cuatro archivos entregados; el cuarto icono no se fuerza en la página porque la referencia live muestra tres compromisos.

### Verificación

- `npm run check`: correcto; 0 errores, 0 warnings y 0 hints.
- `npm run build`: genera `dist/pages/nosotros.html`; advierte el bloqueo preexistente `MissingSharp` durante la generación de variantes de imagen.
- Preview local: `/pages/nosotros` responde 200, conserva title, canonical y `noindex, nofollow` fuera de producción.
- Preview a 390px: 3 slides, 2 ocultos inicialmente, el botón siguiente cambia el compromiso activo y `scrollWidth` queda en 375px frente a 390px de viewport.
- Preview desktop: la página mantiene la composición de hero, introducción, prensa, compromisos e Historia/Futuro sin overflow.

### Bloqueos y pendientes

- `Sharp` continúa ausente en `node_modules`; el build puede dejar variantes AVIF/WebP no servidas en preview local. Es un bloqueo existente del entorno y debe resolverse antes de una validación visual final de imágenes o del despliegue.
- No se modificaron DNS, producción, Shopify ni `zip_theme_shopify_estable/`.

## Actualización Etapa 7 - Tarea 7.2: prioridad de carga de heroes del index

**Estado:** completada con bloqueo preexistente de `Sharp` documentado.

### Cambio realizado

- `src/pages/index.astro` ahora renderiza los cuatro heroes del slideshow con `loading="eager"` para que estén disponibles antes de cambiar de slide.
- Solo el primer hero conserva `fetchpriority="high"`, evitando competir con cuatro descargas de máxima prioridad.
- Las imágenes de categorías y compromisos no fueron modificadas y mantienen `loading="lazy"`.

### Verificación

- `npm run check`: correcto; 0 errores, 0 warnings y 0 hints.
- `npm run build`: generó las rutas estáticas, pero emitió advertencias `MissingSharp` y terminó con un error nativo de cierre de proceso; `Sharp` ya estaba ausente en `node_modules` y no fue introducido por este cambio.
- `dist/index.html`: contiene cuatro heroes con `loading="eager"` y un único `fetchpriority="high"`; las imágenes restantes del index conservan `loading="lazy"`, aparte del logo eager del header.
- Preview local de `/`: detecta 4 slides y las cuatro imágenes hero tienen `loading="eager"`; solo la primera tiene `fetchpriority="high"`.
- La lista de solicitudes del preview muestra las cuatro URLs `Hero_1` a `Hero_4` solicitadas desde la carga inicial, antes de cambiar de slide.

## Actualización Etapa 7 - Tarea 7.2: colección Impresoras 3D

**Estado:** completada para la implementación de `/collections/impresoras-3d`; la etapa de despliegue sigue abierta.

### Cambio realizado

- Se adaptó `src/pages/collections/[slug].astro` para que la colección de impresoras use el hero de dos columnas y las tarjetas de producto del patrón de `/collections/pla`.
- Se creó `src/data/impresoras-3d-collection.ts` con el texto observado, `Foto5.jpg` como hero y las imágenes locales de las tarjetas de Axis One y Padi.
- El hero renderiza `src/assets/index-products-axis-one/fotos producto/Foto5.jpg` mediante `<Picture>` a través de `MediaPlaceholder.astro`.
- Se actualizó `src/content/collections/impresoras-3d.md` y `Docs/MANIFIESTO_MEDIA.md` para registrar el uso confirmado y mantener separada la referencia Shopify histórica pendiente.
- La colección conserva el estado estático histórico: enlaces a fichas, precios observados y botones deshabilitados, sin carrito ni compra.
- Se corrigió el hover de las tarjetas agregando una imagen secundaria local para Axis One y Padi; la imagen principal ahora se reemplaza por otra fotografía del mismo producto en desktop.

### Verificación

- `npm run check`: correcto; 0 errores, 0 warnings y 0 hints.
- `npm run build`: correcto; 41 páginas estáticas generadas.
- Preview local de `/collections/impresoras-3d`: ruta `200`, título, texto introductorio, 2 tarjetas, 3 imágenes optimizadas bajo `/_astro/` y 3 elementos `<picture>`.
- Preview a 390 px: hero apilado, imagen visible, sin overflow horizontal (`scrollWidth` igual a `clientWidth`) y sin errores de consola.
- Preview a 1440 px: hero en dos columnas; el bloque de imagen ocupa `605 x 377.6px`, con texto a la izquierda y `Foto5.jpg` a la derecha.
- Hover desktop: Axis One cambia de `foto4` a `foto2` y Padi cambia a `fotos 2 despegue.JPG`; la imagen secundaria queda con opacidad `1` y la principal con opacidad `0`.
- Regresión de `/collections/pla`: ruta `200`, 11 tarjetas, 18 características, 2 grupos de acordeones y sin overflow horizontal.

### Bloqueos y pendientes

- El alt de `Foto5.jpg` queda como descripción revisada del producto y puede requerir validación editorial final si se exige equivalencia literal con Shopify.
- La referencia Shopify `foto4_edited_-_Ligera.jpg` sigue documentada como no equivalente automáticamente a `Foto5.jpg`.
- No se modificaron DNS, producción, Shopify ni `zip_theme_shopify_estable/`.

## Corrección visual Etapa 7 - Tarea 7.2: opciones de tamaño Padi

**Estado:** completada.

- Se actualizaron las pastillas de tamaño en `src/styles/components/product.css`.
- La opción seleccionada usa fondo `#941081`, texto claro y borde sólido.
- La opción no seleccionada usa fondo transparente, texto magenta y borde magenta tenue.
- Los radios nativos quedan visualmente ocultos, pero mantienen accesibilidad de teclado y foco visible.
- `npm run check`: correcto; 0 errores, 0 warnings y 0 hints.
- `npm run build`: correcto; 41 páginas estáticas generadas.
- Preview local: opciones de `198 x 48.4px`, sin overflow horizontal y sin errores de consola.

## Actualización Etapa 7 - Tarea 7.2: Padi

**Estado:** completada para la implementación del producto; la etapa de despliegue sigue abierta.

### Cambio realizado

- Se conectó `/products/padi-superficie-de-impresion` al storefront estático de productos existente.
- Se creó `src/data/padi-product.ts` con la galería local de cuatro imágenes, los ocho bloques editoriales y los textos observados en la página original.
- Se creó `src/components/PadiFeatures.astro` con el patrón visual `image-with-text` de las páginas de producto existentes.
- Se incorporaron los tamaños `220 x 220 mm` y `305 x 305 mm` como opciones estáticas.
- El producto conserva el precio histórico observado, pero muestra `Agotado` en la etiqueta, el estado y el botón deshabilitado; no se agregó compra ni inventario real.
- Se actualizaron los estilos de producto y `Docs/MANIFIESTO_MEDIA.md` con los 10 recursos PADI nuevos integrados mediante `<Picture>`.

### Verificación

- `npm run check`: correcto; 0 errores, 0 warnings y 0 hints.
- `npm run build`: correcto; 41 páginas estáticas generadas.
- Preview local de `/products/padi-superficie-de-impresion`: ruta `200`, galería de 4 imágenes y 8 bloques editoriales con imágenes optimizadas bajo `/_astro/`.
- Preview local: se muestran los dos tamaños, `Agotado` en precio/estado/botón y el botón de compra permanece deshabilitado.
- Preview local: la galería avanza, el modal abre una imagen y `Escape` lo cierra; no se registran errores de consola.
- Preview desktop: marco principal de galería `786.5 x 524.3px`, sin overflow horizontal (`scrollWidth` igual a `clientWidth`).
- Preview móvil: sin overflow horizontal y con controles de galería móviles conservados.

### Bloqueos y pendientes

- Las cuatro fotografías de la galería PADI son archivos nuevos entregados localmente y no se declaran equivalentes automáticas de las referencias Shopify históricas; esas referencias siguen documentadas como `pending` en el frontmatter.
- Alt de los archivos entregados queda documentado como descriptivo/revisado para esta implementación; requiere validación editorial final si se exige equivalencia literal con el HTML Shopify.
- No se modificaron DNS, producción, Shopify ni `zip_theme_shopify_estable/`.

## Actualización Etapa 7 - Tarea 7.2: fidelidad visual de compromisos de Nosotros

**Estado:** completada; la etapa de despliegue sigue abierta.

### Cambio realizado

- `src/components/NosotrosPage.astro` ahora ordena los iconos como en la referencia: pulgar para Misión, línea de meta para Propuesta de valor y carrete para Visión.
- `src/styles/components/editorial.css` aplica el fondo institucional magenta, texto claro, tarjetas con esquinas redondeadas y gradiente sutil para la sección de compromisos.
- No se modificaron los textos ni el comportamiento del carrusel móvil.

### Verificación

- `pnpm check`: correcto; 0 errores, 0 warnings y 0 hints.
- `pnpm build`: correcto; 41 páginas estáticas y 720 variantes de imagen generadas.
- Preview desktop: fondo `rgb(148, 16, 129)`, tres tarjetas con radio `20px`, orden visual de iconos correcto y 0 imágenes rotas.
- Preview móvil: fondo magenta, carrusel horizontal intencional y sin overflow horizontal del documento.
- `git diff --check`: correcto; solo muestra avisos normales de conversión LF/CRLF de Git.

### Bloqueos y pendientes

- No se modificaron DNS, producción, Shopify ni `zip_theme_shopify_estable/`.

## Actualización Etapa 7 - Tarea 7.3: componente reutilizable de card imagen y texto

**Estado:** completada; la etapa de despliegue sigue abierta.

### Cambio realizado

- Se creó `src/components/ImageTextCard.astro` a partir de la card de `/pages/premios`.
- `year`, `title` y `content` son opcionales; `content` acepta un párrafo o una lista de párrafos.
- La prop `reverse` alterna la posición de imagen y texto en desktop, manteniendo el apilado responsive en mobile.
- Las reglas visuales generales de imagen fueron trasladadas al componente; el espaciado específico de Premios permanece en `src/styles/components/premios.css`.
- `src/components/PremiosPage.astro` utiliza ahora el componente reutilizable sin cambiar su contenido ni composición visual.
- Se marcó la tarea correspondiente como completada en `Readme.md`.

### Verificación

- `pnpm check`: correcto; 0 errores, 0 warnings y 0 hints.
- `pnpm build`: correcto; 41 páginas estáticas y 812 variantes de imagen generadas.
- Preview local de `/pages/premios` en `390px`, `768px`, `1024px` y `1440px`: sin overflow horizontal.
- Preview desktop: imagen y texto mantienen el mismo alto, la inversión de la segunda card funciona y la imagen conserva `object-fit: cover`.
- Preview mobile: imagen sobre texto, espaciado y radios conservados; screenshot revisado en `390px`.

## Actualización Etapa 7 - Tarea 7.1: artículo Configurar Repetier Host

**Estado:** completada; la etapa de despliegue sigue abierta.

### Cambio realizado

- Se creó `src/components/RepetierHostArticle.astro` para reproducir la secuencia publicada de introducción, video, archivos de configuración y descargas.
- Se integró `configurar repetier host.jpg` como portada local del video `ENIRcInoUVI`; `LiteYoutube.astro` la renderiza mediante `<Picture>` y solo crea el iframe al activar el video.
- La ruta `src/pages/blogs/[blog]/[slug].astro` usa el componente específico solo para `configurar-repetier-host`; los demás artículos conservan el renderizado Markdown existente.
- El contrato de contenido acepta media `available` y el frontmatter del artículo registra la portada local con dimensiones `1280 x 720px` y proporción `16:9`.
- `Docs/MANIFIESTO_MEDIA.md` registra el nuevo recurso y su bloqueo/referencia histórica Shopify.

### Archivos creados o modificados

- `src/components/RepetierHostArticle.astro`
- `src/pages/blogs/[blog]/[slug].astro`
- `src/content.config.ts`
- `src/content/articles/configurar-repetier-host.md`
- `Docs/MANIFIESTO_MEDIA.md`
- `Docs/RESULTADOS_ETAPA_7.md`

### Verificación

- `pnpm check`: correcto; 0 errores, 0 warnings y 0 hints.
- `pnpm build`: correcto; 41 páginas estáticas generadas y variantes optimizadas para la portada local.
- Preview local de `/blogs/curso_impresion_3d/configurar-repetier-host`: ruta `200`, título y tres encabezados en el orden publicado.
- Preview desktop: video `1210 x 681px`, equivalente al marco 16:9 de la referencia; sin overflow horizontal.
- Preview mobile: video `454 x 255px`, sin overflow horizontal y sin errores de consola.
- Antes de activar el video: 1 `<picture>`, poster local servido bajo `/_astro/` y 0 iframes.
- Después de activar el video: iframe `https://www.youtube-nocookie.com/embed/ENIRcInoUVI?rel=0&autoplay=1&playsinline=1` creado correctamente.
- `git diff --check`: correcto; solo muestra los avisos normales de conversión LF/CRLF de Git.

### Bloqueos y pendientes

- Los enlaces de Google Drive y Repetier siguen siendo enlaces externos revisados; no se descargan ni se incrustan automáticamente.
- No se modificaron DNS, producción, Shopify ni `zip_theme_shopify_estable/`.

## Actualizacion Etapa 7 - Tarea 7.2: sitemap automatico con `@astrojs/sitemap`

**Estado:** completada; la etapa de despliegue sigue abierta.
**Fecha:** 2026-08-25

### Investigacion y decision

- Context7 consulto la documentacion oficial de Astro: `@astrojs/sitemap` se instala con `pnpm add`, requiere `site` y admite `filter`, `serialize`, `filenameBase` y namespaces.
- Firecrawl y Tavily confirmaron que el plugin descubre todas las paginas estaticas por defecto, por lo que este proyecto necesita una allowlist exacta y no una regla por prefijo.
- El subagente de Expo comprobo que no existe un MCP de Expo disponible en este entorno y que Expo/React Native no documenta una solucion para sitemaps de Astro. No se invento una API de Expo.
- Se adopto el plugin solicitado porque automatiza el build, pero se conserva el control editorial de las 28 URLs aprobadas. La version `3.7.3` genera un indice y un hijo, por lo que la URL anunciada pasa de `/sitemap.xml` a `/sitemap-index.xml`.

### Cambio realizado

- `package.json` y `pnpm-lock.yaml` fijan `@astrojs/sitemap@3.7.3` como dependencia de desarrollo.
- `astro.config.mjs` activa la integracion solo cuando `PUBLIC_SITE_ENV=production`.
- `astro.config.mjs` filtra por una allowlist exacta: portada, 13 productos, 2 colecciones, 5 paginas, 3 blogs y 4 articulos.
- Se desactivan namespaces `news`, `xhtml`, `image` y `video` porque el sitemap actual solo contiene URLs y no declara esos datos.
- Se omite `lastmod`, `priority` y `changefreq` porque no existen fechas ni senales editoriales verificables para inventarlos.
- Se elimina `src/pages/sitemap.xml.ts` para evitar dos fuentes de verdad.
- `src/pages/robots.txt.ts` anuncia `sitemap-index.xml` solo en produccion. En produccion permite el rastreo general para que Google pueda leer los `noindex` de search, cart, policies y tagged; en preview mantiene `Disallow: /` sin anunciar el sitemap productivo.
- `Docs/CLOUDFLARE_PAGES_PREVIEW.md` documenta `pnpm`, los dos archivos generados y la diferencia de preview/produccion.

### Verificacion independiente

- `pnpm install --frozen-lockfile`: correcto.
- `pnpm check`: 0 errores, 0 warnings y 0 hints.
- `pnpm build` sin `PUBLIC_SITE_ENV`: correcto; 38 paginas generadas, no existe `dist/sitemap*.xml` y `dist/robots.txt` solo contiene `Disallow: /`.
- `PUBLIC_SITE_ENV=production pnpm build`: correcto; 38 paginas generadas y `dist/sitemap-index.xml` mas `dist/sitemap-0.xml` presentes.
- `sitemap-0.xml`: 28 `<loc>` unicos, todos absolutos bajo `https://www.print3x.cl`, sin `.html`, slash final, query, search, cart, policies, tagged, `/collections` ni `/collections/all`.
- Cada `<loc>` tiene su HTML generado, canonical coincidente y no contiene `meta robots noindex`.
- `robots.txt` de produccion contiene `Allow: /` y `Sitemap: https://www.print3x.cl/sitemap-index.xml`.

### Bloqueos y pendientes

- La URL antigua `/sitemap.xml` deja de ser el recurso canonico del sitemap; se debe enviar solo `/sitemap-index.xml` a Search Console despues de aprobar la preview.
- El comportamiento HTTP de rutas limpias, `.html` y slash debe validarse en la preview real de Cloudflare Pages.
- No se modificaron DNS, produccion, Shopify ni `zip_theme_shopify_estable/`.
