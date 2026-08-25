# Etapas y tareas de la migracion Print3x

Este documento convierte el plan maestro en trabajo ejecutable por subagentes. Cada tarea tiene un responsable sugerido, entradas, acciones, entregables y criterios de aceptacion. La ultima tarea de cada etapa es obligatoriamente una comprobacion independiente de todo lo realizado en esa etapa.

## Reglas para todos los subagentes

- Leer `Docs/PLAN_MAESTRO_MIGRACION_SHOPIFY_A_ASTRO.md` antes de comenzar.
- Revisar los cambios existentes y no borrar trabajo del usuario.
- No modificar DNS, cancelar Shopify ni publicar en produccion sin autorizacion explicita.
- No inventar contenido ni imagenes.
- Registrar archivos creados o modificados, comandos ejecutados, resultados y bloqueos.
- Si una imagen falta, registrar su ruta, uso, dimensiones esperadas y placeholder necesario.
- Si una URL no puede conservarse, documentar la razon y proponer una redireccion especifica.
- No marcar una tarea como terminada si el criterio de aceptacion no se puede demostrar.
- Al terminar o finalizar cada etapa, crear en `Docs/` el archivo `RESULTADOS_ETAPA_N.md` con el informe de resultados de esa etapa.
- Cada informe debe incluir estado final, tareas completadas, archivos creados o modificados, comandos ejecutados, resultados, bloqueos o pendientes y evidencia del criterio de aceptacion, incluida la verificacion independiente de cierre.
- La etapa no puede marcarse como terminada mientras falte su informe `Docs/RESULTADOS_ETAPA_N.md`.

## Etapa 0: inventario y control de fuentes

### Tarea 0.1 - Auditar el tema Shopify

**Subagente asignado:** auditor de tema Shopify

**Objetivo:** convertir el ZIP extraido en un inventario tecnico util para la migracion.

**Pasos:**

1. Revisar `zip_theme_shopify_estable/layout`, `config`, `assets`, `sections`, `snippets`, `templates` y `locales`.
2. Identificar que archivos forman el shell global: `theme.liquid`, `header`, `footer`, estilos base y scripts globales.
3. Clasificar las secciones por tipo: portada, coleccion, producto, pagina, blog, articulo, carrito, cliente, error y aplicaciones.
4. Identificar todas las expresiones Liquid y objetos Shopify que requieren reemplazo por datos estaticos.
5. Identificar CSS y JavaScript imprescindibles para header, menu mobile, slideshow, galeria, modal, accordion, busqueda y footer.
6. Separar archivos que solo sirven para carrito, checkout, clientes, editor de tema o aplicaciones.
7. Registrar las plantillas antiguas que no aparecen en las URLs publicas actuales.

**Entregables:** inventario tecnico del tema y matriz de dependencias Liquid/CSS/JS.

**Criterio de aceptacion:** cada archivo relevante queda clasificado como reutilizable, adaptable, prescindible o pendiente de decision.

### Tarea 0.2 - Construir el inventario SEO y de rutas

**Subagente asignado:** rastreador SEO

**Objetivo:** establecer la lista de URLs que la nueva web debe conservar.

**Pasos:**

1. Descargar el sitemap raiz y todos sus sitemaps hijos.
2. Extraer URLs de productos, colecciones, paginas, blogs y articulos.
3. Rastrear enlaces del header, footer, menus, contenido y enlaces relacionados.
4. Incluir rutas publicas que no aparezcan en sitemap pero sigan enlazadas.
5. Para cada URL registrar status HTTP, title, meta description, canonical, `h1`, tipo de contenido, imagen Open Graph y cantidad de imagenes.
6. Marcar rutas de carrito, cuenta, checkout, filtros y parametros como auxiliares o no indexables.
7. Guardar una matriz con URL antigua, URL objetivo, decision `conservar`, `redireccionar` o `retirar`, y motivo.

**Entregables:** matriz de rutas y baseline SEO de Shopify.

**Criterio de aceptacion:** no quedan tipos de pagina o rutas enlazadas sin decision.

### Tarea 0.3 - Auditar imagenes y fuentes locales

**Subagente asignado:** gestor de media

**Objetivo:** relacionar los recursos disponibles con las referencias de Shopify y preparar faltantes.

**Pasos:**

1. Enumerar las imagenes existentes en `src/assets/`.
2. Leer dimensiones, formato y peso de cada imagen.
3. Extraer de templates, secciones y contenido todas las referencias a imagenes.
4. Crear una tabla con nombre original, ruta local, pagina donde se usa, `alt`, dimensiones esperadas y estado.
5. Marcar como disponibles las cinco imagenes actuales del index.
6. Marcar como pendientes todas las imagenes aun no entregadas, sin fabricar sustitutos.
7. Definir el componente o regla de placeholder que conserve la proporcion del bloque.
8. Identificar logos, favicon, fuentes y posibles recursos que sigan apuntando a CDN de Shopify.

**Entregables:** manifiesto de media y lista priorizada de imagenes faltantes.

**Criterio de aceptacion:** todas las referencias de imagen tienen recurso local, placeholder definido o bloqueo documentado.

### Tarea 0.4 - VERIFICACION OBLIGATORIA DE LA ETAPA 0

**Subagente asignado:** auditor independiente de fuentes

**Objetivo:** comprobar que las tareas de inventario son completas y coherentes entre si.

**Pasos:**

1. Comparar la matriz SEO con el inventario de plantillas Shopify.
2. Comparar la matriz SEO con enlaces encontrados en header y footer.
3. Comparar el manifiesto de imagenes con las referencias del tema y del contenido.
4. Revisar que los cinco archivos locales del index esten identificados correctamente.
5. Detectar rutas sin responsable, recursos sin destino o decisiones contradictorias.
6. Emitir un informe de aprobacion, correcciones necesarias o bloqueo.

**Criterio de aceptacion:** la etapa solo se cierra cuando no quedan discrepancias criticas y las matrices pueden usarse como entrada de desarrollo.

## Etapa 1: fundacion del proyecto Astro

### Tarea 1.1 - Inicializar Astro estatico

**Subagente asignado:** arquitecto Astro

**Objetivo:** crear la base ejecutable del proyecto sin implementar todavia todo el contenido.

**Pasos:**

1. Inicializar el proyecto en la raiz acordada, sin alterar `zip_theme_shopify_estable` ni `src/assets`.
2. Configurar Astro, TypeScript si se decide usarlo y los scripts `dev`, `build`, `preview` y `check`.
3. Fijar una version de Node compatible y documentarla.
4. Crear un `index.astro` minimo y un layout base compilable.
5. Confirmar que `npm run build` produce `dist` sin errores.

**Entregables:** `package.json`, configuracion inicial, estructura `src` y primer build exitoso.

**Criterio de aceptacion:** el proyecto arranca en local y genera una salida estatica limpia.

### Tarea 1.2 - Configurar dominio y politicas de URL

**Subagente asignado:** arquitecto de rutas

**Objetivo:** dejar preparada la configuracion para conservar URLs Shopify sin slash final visible.

**Pasos:**

1. Configurar `site` como `https://www.print3x.cl`.
2. Configurar `trailingSlash` de acuerdo con el baseline, inicialmente `never`.
3. Elegir el formato de build y las reglas de hosting necesarias para URLs limpias.
4. Documentar la politica para `/foo`, `/foo/`, `/foo.html` y mayusculas.
5. Preparar un helper para construir enlaces internos sin cambiar slugs.
6. Registrar las reglas que luego deberan trasladarse a Cloudflare Pages.

**Entregables:** configuracion de Astro y politica de URL documentada.

**Criterio de aceptacion:** una ruta de prueba mantiene el pathname esperado en desarrollo, build y preview.

**Nota tecnica de implementacion (Etapa 1 - Tarea 1.2):**

- `astro.config.mjs` fija `site: 'https://www.print3x.cl'`, `output: 'static'` y `trailingSlash: 'never'`.
- Se fija `build.format: 'file'` para que una pagina futura como `src/pages/products/[slug].astro` genere `dist/products/<slug>.html`. Cloudflare Pages sirve ese archivo mediante `/products/<slug>` y redirige la variante visible `.html` a la URL sin extension. Esto evita la salida `dist/<ruta>/index.html` del formato `directory`, cuya URL automatica en Pages usa slash final.
- La politica canonica es `/foo` sin slash ni extension. `/foo.html` queda como variante no canonica que Pages debe redirigir a `/foo`; `/foo/` no se genera como ruta canonica. Las mayusculas no se normalizan ni se redirigen: cada slug conserva exactamente su escritura de origen, incluidos los guiones bajos.
- No se agrega `redirects` ni `_redirects`: no hay destinos concretos justificados en esta tarea y no se inventan mapas de redireccion. La comprobacion final de los codigos HTTP de `/foo`, `/foo/` y `/foo.html` queda para la preview real de Cloudflare Pages, porque el build local solo demuestra la estructura de archivos y no el enrutamiento del hosting.

### Tarea 1.3 - Crear estructura de carpetas y contratos de datos

**Subagente asignado:** arquitecto de contenido

**Objetivo:** crear los espacios para componentes, layouts, contenido, paginas, estilos, public y media.

**Pasos:**

1. Crear `src/components`, `src/layouts`, `src/content`, `src/pages`, `src/styles` y `public`.
2. Crear carpetas de contenido para productos, colecciones, paginas y blogs.
3. Definir los campos minimos de producto, coleccion, pagina y articulo.
4. Incluir campos para `slug`, `title`, `description`, `seo`, `images`, `alt`, `status`, `links` y `sourceUrl`.
5. Permitir `image: null` o una marca de pendiente sin romper el renderizado.
6. Evitar modelar carrito, variantes o checkout como funcionalidad real.

**Entregables:** contratos de datos, carpetas y un ejemplo minimo por tipo de contenido.

**Criterio de aceptacion:** las futuras rutas dinamicas pueden consumir datos sin depender de objetos Shopify.

### Tarea 1.4 - VERIFICACION OBLIGATORIA DE LA ETAPA 1

**Subagente asignado:** verificador de fundacion

**Objetivo:** comprobar que el proyecto base compila y que no se introdujeron dependencias prematuras.

**Pasos:**

1. Ejecutar instalacion limpia de dependencias.
2. Ejecutar `npm run check` o el equivalente configurado.
3. Ejecutar `npm run build`.
4. Inspeccionar `dist` y confirmar que no contiene rutas o recursos de prueba no deseados.
5. Revisar que la configuracion no incluya DNS, secretos ni credenciales.
6. Informar cualquier ajuste antes de iniciar la etapa visual.

**Criterio de aceptacion:** build, chequeos y estructura inicial pasan sin errores bloqueantes.

## Etapa 2: shell visual y sistema de estilos

### Tarea 2.1 - Portar configuracion visual y CSS base

**Subagente asignado:** ingeniero CSS

**Objetivo:** reproducir el sistema visual de Refresh usando los valores activos del tema.

**Pasos:**

1. Convertir las variables Liquid de `theme.liquid` en variables CSS estaticas.
2. Trasladar `base.css` y los CSS de componentes usados por la portada y paginas publicas.
3. Incorporar los colores, tipografias, ancho de pagina, radios, bordes, sombras y separaciones de `settings_data.json`.
4. Sustituir referencias `asset_url` por rutas Astro locales.
5. Mantener los breakpoints de Shopify y probar al menos 390px, 768px, 1024px y 1440px.
6. Evitar introducir un framework CSS que reescriba las clases existentes.

**Entregables:** estilos base y variables visuales portadas.

**Criterio de aceptacion:** una pagina de prueba conserva tipografia, colores, ancho, espaciado y comportamiento responsive del tema.

### Tarea 2.2 - Migrar header, announcement bar y navegacion

**Subagente asignado:** ingeniero de layout

**Objetivo:** reproducir el encabezado visible y sus clases sin depender de objetos Shopify.

**Pasos:**

1. Leer la configuracion de `header-group.json` y `sections/header.liquid`.
2. Crear componentes Astro para announcement bar, logo, menu desktop, menu mobile, busqueda e iconos.
3. Reemplazar `section.settings.menu.links` por un menu estatico validado contra las rutas de la matriz.
4. Mantener el enlace de salto a `#MainContent`, roles, labels y estados accesibles.
5. Mantener comportamiento de menu desplegable y menu drawer en mobile.
6. Eliminar login y carrito como acciones Shopify; dejar las decisiones de escaparate documentadas.

**Entregables:** `Header.astro` y componentes auxiliares funcionando.

**Criterio de aceptacion:** el header se ve igual en desktop y mobile y todos sus enlaces apuntan a rutas validas.

### Tarea 2.3 - Migrar footer y enlaces globales

**Subagente asignado:** ingeniero de layout

**Objetivo:** reproducir el footer y sus menus con enlaces estaticos.

**Pasos:**

1. Leer `footer.liquid`, `footer-group.json`, menus y configuracion social.
2. Crear `Footer.astro` conservando clases, columnas, iconos y responsive.
3. Migrar enlaces a productos, colecciones, blogs, paginas, politicas y redes sociales.
4. Decidir si newsletter se conserva como formulario externo o se muestra solo como contenido no interactivo.
5. Eliminar `follow_on_shop`, metacampos Loox y referencias a apps Shopify.
6. Revisar textos legales y enlaces externos antes de publicarlos.

**Entregables:** footer completo y lista de enlaces verificados.

**Criterio de aceptacion:** el footer no incluye endpoints Shopify y no genera enlaces 404 internos.

### Tarea 2.4 - Migrar interacciones visuales sin comercio

**Subagente asignado:** ingeniero de JavaScript de interfaz

**Objetivo:** conservar interacciones visibles que no requieren Shopify.

**Pasos:**

1. Revisar `details-disclosure.js`, `details-modal.js`, `media-gallery.js`, `product-modal.js`, `search-form.js` y scripts de slideshow.
2. Seleccionar solo codigo necesario para menu, accordion, slideshow, galeria, modal y busqueda local.
3. Eliminar llamadas a `window.routes`, `/cart.js`, checkout, disponibilidad de retiro y APIs Shopify.
4. Adaptar eventos a HTML generado por Astro sin depender de `Shopify.designMode`.
5. Asegurar que una pagina sin imagenes adicionales no genere errores de consola.
6. Comprobar teclado, Escape, foco y cierre de modales.

**Entregables:** scripts de interfaz aislados y sin dependencias Shopify.

**Criterio de aceptacion:** las interacciones visuales funcionan con contenido estatico y la consola no registra errores.

### Tarea 2.5 - VERIFICACION OBLIGATORIA DE LA ETAPA 2

**Subagente asignado:** auditor visual independiente

**Objetivo:** validar el shell completo antes de cargar todo el contenido.

**Pasos:**

1. Ejecutar la web en desktop y mobile.
2. Comparar header, menu, logo, anuncio, contenido de prueba y footer con Shopify.
3. Revisar colores, tipografias, anchos, margenes, bordes, sombras y breakpoints.
4. Probar menu mobile, enlaces, foco, slideshow y modal.
5. Revisar consola y red para localizar llamadas Shopify o recursos inexistentes.
6. Registrar diferencias visuales con capturas y prioridad de correccion.

**Criterio de aceptacion:** no quedan diferencias estructurales criticas ni dependencias Shopify obligatorias en el shell.

## Etapa 3: migracion de assets y contenido

### Tarea 3.1 - Integrar imagenes disponibles y placeholders

**Subagente asignado:** gestor de media de Astro

**Objetivo:** integrar correctamente las imagenes ya disponibles y dejar preparado el resto.

**Pasos:**

1. Copiar o referenciar `Hero_1.jpg`, `Hero_2.jpg`, `Hero_3.jpg`, `Hero_4.jpg` y `Categorias_1_filamentos_pla.jpg` desde una ubicacion estable.
2. Definir nombres y rutas finales sin perder el mapa con los nombres Shopify originales.
3. Registrar ancho, alto, formato, `alt` y pagina de uso.
4. Crear el componente `MediaPlaceholder` con la proporcion requerida por cada bloque.
5. Renderizar placeholder cuando el dato de imagen sea nulo o el archivo aun no exista.
6. No ocultar el bloque completo por falta de imagen salvo que el diseño original lo hiciera.
7. Preparar una lista de prioridad para las fotografias restantes.

**Entregables:** media integrada, manifiesto actualizado y placeholders visibles donde corresponda.

**Criterio de aceptacion:** la portada mantiene su geometria aunque solo esten disponibles las cinco imagenes actuales.

### Tarea 3.2 - Migrar modelo y contenido de productos

**Subagente asignado:** editor de catalogo historico

**Objetivo:** transformar la informacion de productos en datos estaticos completos.

**Pasos:**

1. Reunir titulo, slug, descripcion, precio historico, estado, imagenes, alt, SEO y coleccion de cada producto aprobado.
2. Conservar literalmente los slugs con guiones bajos cuando existan.
3. Separar contenido de presentacion y contenido de compra.
4. Marcar productos agotados o archivados sin habilitar compra.
5. Mantener las descripciones extensas y sus encabezados.
6. Registrar productos presentes en plantillas pero ausentes del inventario publico.
7. Validar que cada imagen referenciada tenga media local o placeholder.

**Entregables:** contenido de productos y matriz producto-URL.

**Criterio de aceptacion:** cada producto publico tiene datos suficientes para generar su pagina sin Liquid ni Admin API.

### Tarea 3.3 - Migrar colecciones y portada

**Subagente asignado:** editor de catalogo y portada

**Objetivo:** transformar la portada y colecciones en contenido estatico con enlaces originales.

**Pasos:**

1. Leer `templates/index.json` y las plantillas de coleccion relevantes.
2. Migrar los cuatro slides, textos, posiciones, colores, botones y destinos de la portada.
3. Usar los cinco assets disponibles y placeholders para los que falten.
4. Migrar `/collections/pla`, `/collections/impresoras-3d`, `/collections`, y `/collections/all` segun el inventario aprobado.
5. Mantener orden de productos, imagen secundaria, precio historico y estado visual.
6. Preservar la seccion larga de caracteristicas del PLA y sus imagenes pendientes.
7. Revisar enlaces de cada tarjeta y CTA.

**Entregables:** contenido de portada y colecciones.

**Criterio de aceptacion:** la portada y las colecciones tienen el mismo orden, textos, estructura y destinos que la referencia aprobada.

### Tarea 3.4 - Migrar paginas, blogs, articulos y politicas

**Subagente asignado:** editor de contenido editorial

**Objetivo:** conservar el contenido no comercial que concentra el valor SEO.

**Pasos:**

1. Migrar el HTML o Markdown de paginas institucionales y sus imagenes.
2. Migrar indices de los tres blogs.
3. Migrar cada articulo conservando headings, enlaces externos, codigo, videos o miniaturas.
4. Migrar `/pages/tarifas-de-envio` con su tabla y formato responsive.
5. Migrar politicas solo si se confirma que deben seguir publicas y legalmente vigentes.
6. Conservar acentos, signos, nombres propios y slugs originales.
7. Guardar metadatos SEO por pagina y articulo.
8. Identificar contenido que dependa de videos, embeds o enlaces externos que puedan haber cambiado.

**Entregables:** contenido editorial completo y lista de dependencias externas.

**Criterio de aceptacion:** no se pierde ningun bloque textual aprobado y los articulos conservan su jerarquia de encabezados.

### Tarea 3.5 - VERIFICACION OBLIGATORIA DE LA ETAPA 3

**Subagente asignado:** corrector de contenido independiente

**Objetivo:** comprobar contenido, assets y placeholders antes de generar todas las rutas.

**Pasos:**

1. Comparar la cantidad de productos, colecciones, paginas, blogs y articulos con la matriz inicial.
2. Comparar titulos, slugs, encabezados y textos principales contra la fuente Shopify.
3. Buscar referencias restantes a `shopify://`, `cdn.shopify.com` y `fonts.shopifycdn.com`.
4. Buscar imagenes que no existan y confirmar que tengan placeholder definido.
5. Revisar alt text, enlaces externos y tablas.
6. Emitir una lista de diferencias aceptadas y errores bloqueantes.

**Criterio de aceptacion:** toda perdida de contenido o imagen esta explicada, aprobada o corregida.

## Etapa 4: rutas, plantillas y generacion estatica

### Tarea 4.1 - Implementar layout y metadata comun

**Subagente asignado:** desarrollador Astro de layouts

**Objetivo:** crear el documento HTML base equivalente a `theme.liquid`.

**Pasos:**

1. Crear `SiteLayout.astro` con `doctype`, `html lang="es"`, viewport, favicon y theme-color.
2. Implementar `head` configurable por pagina.
3. Generar title, description, canonical, Open Graph y Twitter a partir de datos estaticos.
4. Mantener `#MainContent`, skip link, `main`, header y footer.
5. Eliminar `content_for_header`, `content_for_layout`, metacampos Loox y objetos Shopify.
6. Permitir que cada pagina declare tipo de contenido, imagen social y datos estructurados.

**Entregables:** layout comun y componente de metadata.

**Criterio de aceptacion:** una pagina estatica produce head valido y estructura semantica equivalente.

### Tarea 4.2 - Implementar rutas de productos y colecciones

**Subagente asignado:** desarrollador Astro de catalogo

**Objetivo:** generar todas las rutas de catalogo aprobadas con `getStaticPaths` o equivalente.

**Pasos:**

1. Crear `src/pages/products/[slug].astro`.
2. Crear `src/pages/collections/[slug].astro` y las paginas especiales de colecciones.
3. Generar paths exclusivamente desde los datos aprobados.
4. Reproducir card grid, banner, galeria, descripcion extensa, relacionados y estados visuales.
5. Mantener enlaces a slugs con underscore y a colecciones originales.
6. Sustituir compra, variantes, inventario y pickup por estado de escaparate.
7. Probar producto con cuatro imagenes, producto con una imagen y producto sin imagen.

**Entregables:** paginas estaticas de productos y colecciones.

**Criterio de aceptacion:** cada ruta aprobada genera HTML y conserva el contenido sin depender de una consulta dinamica.

### Tarea 4.3 - Implementar paginas, blogs, articulos y politicas

**Subagente asignado:** desarrollador Astro editorial

**Objetivo:** generar las rutas editoriales conservando sus niveles y formatos.

**Pasos:**

1. Crear `src/pages/pages/[slug].astro`.
2. Crear indices `src/pages/blogs/[blog]/index.astro`.
3. Crear articulos `src/pages/blogs/[blog]/[slug].astro`.
4. Crear `src/pages/policies/[slug].astro` si se aprueba su publicacion.
5. Implementar tablas, codigo, links, imagenes, videos y contenido HTML necesario.
6. Conservar slugs y relaciones entre articulo, blog, pagina y footer.
7. Implementar el `404.astro` con el mismo shell visual.

**Entregables:** rutas editoriales, politicas y 404.

**Criterio de aceptacion:** todas las URLs editoriales aprobadas generan HTML sin cambiar su pathname.

### Tarea 4.4 - Resolver rutas auxiliares sin comercio

**Subagente asignado:** desarrollador de experiencia estatica

**Objetivo:** impedir que enlaces heredados del tema lleven a endpoints Shopify rotos.

**Pasos:**

1. Implementar `/search` con busqueda local si la busqueda se conserva.
2. Implementar `/cart` como pagina informativa o redireccion aprobada, sin carrito real.
3. Retirar `/customer_authentication/redirect` si no existe una decisión aprobada para ofrecer cuentas en Astro.
4. Revisar enlaces a checkout, account, orders, recommendations y cart AJAX.
5. Crear redirecciones especificas solo cuando la matriz lo indique.
6. Mantener fuera del sitemap las rutas auxiliares no indexables.

**Entregables:** rutas auxiliares seguras y mapa de redirecciones.

**Criterio de aceptacion:** todos los enlaces publicos del header/footer tienen una experiencia controlada.

### Tarea 4.5 - VERIFICACION OBLIGATORIA DE LA ETAPA 4

**Subagente asignado:** crawler de rutas

**Objetivo:** comprobar que la salida estatica cubre la matriz y no crea regresiones de URLs.

**Pasos:**

1. Ejecutar build completo.
2. Enumerar las rutas generadas en `dist` y compararlas con la matriz.
3. Solicitar cada URL desde el servidor de preview.
4. Registrar status, title, canonical y errores de renderizado.
5. Probar las variantes con y sin slash y documentar el comportamiento final.
6. Revisar enlaces internos desde cada tipo de plantilla.

**Criterio de aceptacion:** no quedan rutas aprobadas sin generar ni enlaces internos importantes con 404.

## Etapa 5: eliminacion de comercio y dependencias Shopify

### Tarea 5.1 - Retirar logica Shopify no necesaria

**Subagente asignado:** ingeniero de limpieza de dependencias

**Objetivo:** garantizar que el sitio sea autonomo y estatico.

**Pasos:**

1. Buscar en `src`, `public` y configuracion referencias a Shopify, Liquid, `cdn.shopify.com`, `shopifycdn`, `content_for_`, `routes.cart`, `cart.js` y checkout.
2. Eliminar scripts de carrito, customer, pickup, quick add, cart drawer y Shop Pay que no tengan uso visual.
3. Sustituir URLs de assets por rutas locales.
4. Revisar scripts de Loox, Banana Stand y otras apps.
5. Conservar GTM solo si se aprueba expresamente y documentar su proposito.
6. Revisar que el build no intente realizar requests en tiempo de ejecucion.

**Entregables:** sitio sin dependencias comerciales de Shopify.

**Criterio de aceptacion:** una inspeccion de dependencias y una carga offline de la salida no rompen las paginas visuales.

### Tarea 5.2 - Implementar comportamiento de escaparate

**Subagente asignado:** ingeniero de UX de catalogo historico

**Objetivo:** conservar la lectura de productos sin prometer compra.

**Pasos:**

1. Mostrar `Agotado`, `No disponible` o el texto aprobado en tarjetas y fichas.
2. Deshabilitar botones de compra con semantica accesible.
3. Eliminar cantidad, checkout, shipping calculator dinamico y pickup.
4. Mantener precio historico solo si se etiqueta como historico o si se aprueba conservarlo.
5. Mantener galeria, zoom, descripcion, caracteristicas y enlaces relacionados.
6. Revisar que ningun click de producto cree un estado de carrito falso.

**Entregables:** modo escaparate coherente.

**Criterio de aceptacion:** el usuario puede recorrer el catalogo, pero no puede iniciar una compra inexistente.

### Tarea 5.3 - Validar navegacion, busqueda y formularios

**Subagente asignado:** ingeniero de interaccion publica

**Objetivo:** mantener las acciones utiles del visitante sin endpoints Shopify.

**Pasos:**

1. Probar todos los enlaces de header, footer, cards, breadcrumbs y CTAs.
2. Probar busqueda local con coincidencias, sin coincidencias y query vacia.
3. Probar menu mobile, accordions, slideshow, galerias y modales.
4. Revisar formularios de contacto o newsletter y decidir si se eliminan, se enlazan a servicio externo o se dejan informativos.
5. Confirmar que no se envian datos a destinos no autorizados.
6. Revisar consola, red y errores de JavaScript en cada tipo de pagina.

**Entregables:** matriz de interacciones y correcciones.

**Criterio de aceptacion:** las interacciones aprobadas funcionan y las no disponibles tienen una respuesta clara.

### Tarea 5.4 - VERIFICACION OBLIGATORIA DE LA ETAPA 5

**Subagente asignado:** auditor de independencia estatica

**Objetivo:** demostrar que la web puede funcionar sin Shopify.

**Pasos:**

1. Servir `dist` en un entorno sin acceso a Shopify.
2. Navegar por portada, coleccion, producto, pagina y articulo.
3. Inspeccionar requests para detectar dominios o endpoints Shopify.
4. Ejecutar una busqueda de texto sobre el codigo generado y las fuentes.
5. Intentar usar carrito, compra, login y checkout para comprobar que no quedan flujos rotos.
6. Emitir aprobacion o lista de dependencias pendientes.

**Criterio de aceptacion:** el sitio funciona como escaparate estatico y no depende de APIs de Shopify.

## Etapa 6: SEO, accesibilidad, performance y regresion visual

### Tarea 6.1 - Implementar SEO tecnico estatico

**Subagente asignado:** especialista SEO tecnico

**Objetivo:** conservar las senales SEO importantes y generar las nuevas superficies estaticas.

**Pasos:**

1. Comparar metadata Astro contra el baseline de Shopify.
2. Corregir title, description, canonical, Open Graph, Twitter y favicon por pagina.
3. Generar sitemap con las URLs aprobadas.
4. Crear `robots.txt` con sitemap y reglas de rutas auxiliares.
5. Mantener la verificacion de Google.
6. Implementar JSON-LD de organizacion, articulo, breadcrumbs y producto solo cuando sea veraz.
7. Confirmar que preview y staging no sean indexables.

**Entregables:** SEO tecnico implementado y reporte de diferencias.

**Criterio de aceptacion:** no se pierden metadatos importantes ni se publican datos de comercio que ya no son ciertos.

### Tarea 6.2 - Ejecutar accesibilidad y performance

**Subagente asignado:** auditor de calidad web

**Objetivo:** evitar que la migracion visual reproduzca problemas innecesarios.

**Pasos:**

1. Revisar landmarks, headings, labels, alt, foco y navegacion por teclado.
2. Revisar contraste usando los colores reales del tema.
3. Revisar imagenes con `width`, `height`, lazy loading y formatos apropiados.
4. Revisar fuentes, preload y CSS critico sin romper el aspecto.
5. Ejecutar Lighthouse o equivalente en desktop y mobile.
6. Registrar problemas por severidad y corregir los que afecten SEO o uso basico.

**Entregables:** reporte de accesibilidad y performance.

**Criterio de aceptacion:** no existen errores criticos de accesibilidad, layout shift evitable o recursos faltantes.

### Tarea 6.3 - Ejecutar regresion visual

**Subagente asignado:** especialista de comparacion visual

**Objetivo:** confirmar que la migracion no cambio la apariencia que el visitante reconoce.

**Pasos:**

1. Capturar Shopify y Astro en viewport desktop definido.
2. Capturar Shopify y Astro en viewport mobile definido.
3. Comparar portada, coleccion PLA, coleccion de impresoras, producto, pagina, blog y articulo.
4. Revisar header, footer, grids, imagenes, textos largos, botones, galerias y placeholders.
5. Registrar diferencias de posicion, tamano, fuente, color y responsive.
6. Corregir diferencias criticas y repetir capturas.

**Entregables:** paquete de capturas comparativas y lista de diferencias aceptadas.

**Criterio de aceptacion:** la apariencia es indistinguible en los elementos principales o cada diferencia esta aprobada.

### Tarea 6.4 - Ejecutar auditoria de enlaces y status HTTP

**Subagente asignado:** crawler de calidad final

**Objetivo:** comprobar que la navegacion completa funciona antes del despliegue.

**Pasos:**

1. Rastrear todas las rutas del sitemap generado.
2. Rastrear enlaces internos de HTML, menu, footer y contenido.
3. Revisar 200, 301, 404 y 500 inesperados.
4. Revisar imagenes, CSS, JS, favicon, sitemap y robots.
5. Comparar canonicals y rutas con la matriz de Shopify.
6. Crear una lista de correcciones bloqueantes y no bloqueantes.

**Entregables:** reporte de crawl previo a produccion.

**Criterio de aceptacion:** no quedan 404 internos, recursos criticos faltantes ni redirecciones accidentales.

### Tarea 6.5 - VERIFICACION OBLIGATORIA DE LA ETAPA 6

**Subagente asignado:** responsable de release candidate

**Objetivo:** aprobar el candidato completo desde las perspectivas tecnica, visual y SEO.

**Pasos:**

1. Revisar los reportes de SEO, accesibilidad, performance, visual y crawl.
2. Confirmar que todos los bloqueantes fueron corregidos o aprobados.
3. Ejecutar un build limpio desde cero.
4. Revisar el contenido de `dist` y el peso de los recursos.
5. Confirmar que no haya secretos, credenciales o configuracion DNS en el repositorio.
6. Emitir decision `aprobado para preview de Cloudflare` o devolver tareas.

**Criterio de aceptacion:** solo un candidato aprobado puede pasar a despliegue.

## Etapa 7: Cloudflare Pages, DNS y salida a produccion

### Tarea 7.1 - Preparar Cloudflare Pages sin tocar produccion

**Subagente asignado:** ingeniero de despliegue Cloudflare

**Objetivo:** publicar una preview reproducible.

**Pasos:**

1. Confirmar repositorio, rama y directorio base.
2. Configurar comando de instalacion y `npm run build`.
3. Configurar directorio de salida `dist`.
4. Configurar variables no secretas necesarias y excluir secretos del repositorio.
5. Publicar en preview.
6. Verificar rutas dinamicas, assets, 404, sitemap y robots en preview.
7. Asegurar que preview tenga `noindex` o proteccion adecuada.

**Entregables:** proyecto Cloudflare Pages en preview.

**Criterio de aceptacion:** Cloudflare Pages reproduce localmente el build sin errores ni rutas faltantes.

### Tarea 7.2 - Preparar inventario DNS y rollback

**Subagente asignado:** administrador DNS

**Objetivo:** documentar el cambio sin ejecutarlo aun.

**Pasos:**

1. Exportar o registrar todos los DNS actuales de `print3x.cl`.
2. Identificar registros web, correo, verificaciones, subdominios y servicios externos.
3. Confirmar si el dominio esta registrado en Shopify o en otro proveedor.
4. Definir el destino Cloudflare Pages para apex y `www`.
5. Definir redireccion canonica entre apex y `www`.
6. Preparar instrucciones de rollback hacia Shopify.
7. No modificar registros hasta recibir autorizacion explicita.

**Entregables:** inventario DNS, plan de cambio y rollback.

**Criterio de aceptacion:** se puede cambiar solo el trafico web sin afectar correo ni verificaciones.

### Tarea 7.3 - Ejecutar cambio de DNS autorizado

**Subagente asignado:** operador de lanzamiento

**Objetivo:** hacer la transicion de Shopify a Cloudflare Pages.

**Pasos:**

1. Confirmar aprobacion del release candidate y ventana de cambio.
2. Confirmar backup del tema, contenido, media, matriz SEO y DNS.
3. Reducir TTL si corresponde.
4. Aplicar solo los cambios web previamente documentados.
5. Esperar propagacion y verificar apex, `www` y HTTPS.
6. Verificar una muestra de todas las familias de rutas.
7. No cancelar Shopify durante la primera verificacion.

**Entregables:** dominio sirviendo Astro y registro de hora de cambio.

**Criterio de aceptacion:** el dominio de produccion entrega Astro con HTTPS y sin afectar servicios no web.

### Tarea 7.4 - Monitorizar despues del lanzamiento

**Subagente asignado:** operador de estabilidad y SEO

**Objetivo:** detectar errores de produccion inmediatamente despues del cambio.

**Pasos:**

1. Revisar status de rutas principales y rutas profundas.
2. Revisar logs y errores de Cloudflare Pages.
3. Revisar sitemap, robots, canonicals y Search Console.
4. Revisar enlaces rotos y recursos faltantes desde el dominio real.
5. Revisar correo y DNS no web.
6. Registrar incidencias, prioridad y decision de rollback.
7. Mantener Shopify disponible hasta cerrar la ventana de estabilidad.

**Entregables:** reporte post-lanzamiento y lista de incidencias.

**Criterio de aceptacion:** no hay errores criticos de disponibilidad, SEO, recursos ni correo.

### Tarea 7.5 - VERIFICACION OBLIGATORIA DE LA ETAPA 7

**Subagente asignado:** auditor final de lanzamiento

**Objetivo:** certificar que la migracion termino y que Shopify puede darse de baja sin perder activos.

**Pasos:**

1. Confirmar que las rutas publicas aprobadas responden desde `https://www.print3x.cl`.
2. Confirmar HTTPS, canonical, sitemap, robots, favicon y metadata.
3. Confirmar que imagenes, CSS y JavaScript cargan desde recursos estables.
4. Confirmar que no se alteraron registros de correo.
5. Confirmar que el respaldo de Shopify y el rollback siguen disponibles.
6. Confirmar que no existen tareas bloqueantes abiertas.
7. Emitir una aprobacion explicita para cancelar o bajar Shopify.

**Criterio de aceptacion:** la etapa se cierra solo con aprobacion del auditor final; hasta entonces Shopify no se cancela.

## Registro de ejecucion

| Etapa | Tarea | Estado | Archivos creados o modificados | Comandos o verificaciones | Resultado y bloqueos |
|---|---|---|---|---|---|
| 0 | 0.1 Auditar el tema Shopify extraido | Completada | `Docs/INVENTARIO_TEMA.md` | Inspeccion de `zip_theme_shopify_estable/`; conteo de referencias `shopify://shop_images` | Se identificaron shell, 47 plantillas JSON, 81 referencias unicas en templates, 89 ocurrencias en templates, 85 recursos unicos globales y 93 ocurrencias globales. Se documentaron dependencias Shopify; la matriz de URLs y el manifiesto de media quedaron registrados en las tareas 0.2 y 0.3. |
| 0 | 0.2 Construir inventario SEO y de rutas | Completada con pendientes documentados | `Docs/INVENTARIO_RUTAS_SEO.md` | Rastreo de sitemaps, HTML publico, `robots.txt` y templates Shopify | La matriz queda aprobada como entrada de desarrollo; metadata detallada y decisiones de implementacion auxiliar se completaran en etapas posteriores. Se identificaron 32 URLs en sitemaps y 44 rutas rastreadas/probadas. |
| 0 | 0.3 Auditar imagenes y recursos locales | Completada con bloqueo documentado | Ninguno | Inventario de `src/assets/` y referencias del tema | Inventario preparado para implementar placeholders. Hay 11 imagenes locales, 85 recursos Shopify unicos y 93 ocurrencias globales, 13 videos externos y no hay fuente Futura local. La sustitucion completa de media queda bloqueada hasta recibir nuevos archivos. |
| 0 | 0.4 Verificacion independiente | Aprobada con bloqueos documentados | `Docs/RESULTADOS_ETAPA_0.md` | Tercera auditoria independiente de fuentes, matrices, conteos, dimensiones y registro | Aprobada. Se comprobaron 81 referencias unicas y 89 ocurrencias en templates, 85 recursos unicos y 93 ocurrencias globales, 5 imagenes locales, 32 URLs del sitemap y las excepciones publicas. Media faltante, metadata, rutas auxiliares, logo, favicon, Futura y dependencias externas quedan como bloqueos de etapas posteriores que no impiden fundar Astro. |
| 1 | 1.1 Inicializar Astro estatico | Completada | `package.json`, `package-lock.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`, `src/env.d.ts`, `src/layouts/SiteLayout.astro`, `src/pages/index.astro` | `npm run check` y `npm run build` ejecutados desde la raiz | Astro 7.1.6 estatico inicializado; check con 0 errores, warnings y hints; build exitoso con `dist/index.html`. Fuentes Shopify, imagenes y Docs intactas. |
| 1 | 1.2 Configurar dominio y politicas de URL | Completada con cierre de hosting pendiente | `astro.config.mjs` | `npm run check`, `npm run build` e inspeccion de `dist` | Configurados `site`, `output: static`, `trailingSlash: never` y `build.format: file`. No se agregaron redirects ni DNS. La validacion HTTP de rutas reales queda para la preview de Cloudflare cuando existan esas paginas. |
| 1 | 1.3 Crear estructura de carpetas y contratos de datos | Completada | `src/data/types.ts`, `src/data/README.md`, `src/data/examples.ts`, carpetas `src/components`, `src/content`, `src/styles/components`, `public/images`, `public/fonts` | `npm run check` y `npm run build` ejecutados desde la raiz | Contratos estrictos para media, SEO, productos, colecciones, paginas, blogs, articulos y disponibilidad de escaparate. Los fixtures son neutrales, no renderizados y no contienen datos reales. |
| 1 | 1.4 Verificacion obligatoria de la etapa 1 | Aprobada con bloqueos documentados | `src/data/types.ts`, `src/data/README.md`, `src/data/examples.ts`, `Docs/RESULTADOS_ETAPA_1.md` | `npm ci`, `npm run check` (0 errores, 0 warnings, 0 hints), `npm run build` (1 pagina estatica), inspeccion de `dist` y auditoria independiente final | Aprobada. Se corrigio el contrato para SEO ausente/parcial y media pendiente, se agregaron fixtures neutrales no renderizados y se verifico que no aparecen en `dist`. La validacion HTTP de rutas profundas queda para Cloudflare cuando existan esas paginas. |
| 2 | 2.1 Portar configuracion visual y CSS base | Completada | `src/styles/base.css`, `src/styles/tokens.css`, `src/styles/components/*.css`, `src/styles/README.md`, `src/layouts/SiteLayout.astro` | `npm run check`, `npm run build` e inspeccion del CSS generado | Se portaron 4.040 lineas de estilos Refresh adaptados, tokens activos, reset, grids, media, botones, foco y componentes sin comercio. Futura queda como fallback sin fuente inventada. |
| 2 | 2.2 Migrar header, announcement bar y navegacion | Completada con remediacion de rutas documentada | `src/components/Header.astro`, `src/styles/components/header.css`, `src/layouts/SiteLayout.astro`, `src/pages/search.astro`, `src/pages/cart.astro`, `src/pages/customer_authentication/redirect.astro`, `src/pages/policies/[slug].astro` | `npm run check`, `npm run build`, preview visual en 390px y 1440px, inspeccion de HTML y prueba de las siete rutas controladas | Header Refresh con logo pendiente de 200px, menu desktop/mobile, sticky, foco, Escape y enlaces a rutas controladas. Las siete rutas tienen salida estatica y no existe redirect externo Shopify. |
| 2 | 2.3 Migrar footer y enlaces globales | Completada | `src/components/Footer.astro`, `src/styles/components/footer.css`, `src/layouts/SiteLayout.astro` | `npm run check`, `npm run build` e inspeccion de HTML generado | Footer Refresh responsive con cuatro politicas, mision y cinco redes sociales. Se retiraron newsletter, pagos, follow-on-shop, Loox, Banana Stand, formularios y atribucion Shopify; CTA de contacto 404 omitida. |
| 2 | 2.4 Migrar interacciones visuales sin comercio | Completada | `src/scripts/print3x-ui.ts`, `src/components/Header.astro` | `npm run check`, `npm run build`, inspeccion de requests en preview | Interacciones estaticas aisladas por atributos `data-p3x-*`; la busqueda usa indice local JSON y no llama endpoints Shopify. Carrito, checkout y login no se implementan. |
| 2 | 2.5 Verificacion obligatoria y remediacion de rutas controladas | Aprobada con bloqueos documentados | `src/layouts/SiteLayout.astro`, `src/styles/components/controlled-routes.css`, `src/data/policies.ts`, `src/pages/search.astro`, `src/pages/cart.astro`, `src/pages/customer_authentication/redirect.astro`, `src/pages/policies/[slug].astro`, `Docs/RESULTADOS_ETAPA_2.md` | `npm run check`, `npm run build`, `astro preview` en `http://127.0.0.1:4321`, fetch de siete rutas, comprobacion de title/robots/canonical, grep de dependencias comerciales y auditoria independiente final | Aprobada. Las siete rutas responden 200, search/cart/auth tienen noindex, las policies conservan fuente y fecha, y no hay endpoints comerciales ejecutables. Favicon, URLs limpias de Cloudflare y rutas de productos/colecciones quedan para etapas posteriores. |
| 3 | 3.1 Integrar imagenes disponibles y placeholders | Completada con alt pendiente y media faltante documentada | `public/images/index/*`, `src/components/MediaPlaceholder.astro`, `src/data/index-media.ts`, `src/data/types.ts`, `src/data/README.md`, `src/styles/components/media-placeholder.css`, `src/layouts/SiteLayout.astro`, `Docs/MANIFIESTO_MEDIA.md` | Copia binaria local, `node` + `sharp` para dimensiones/formato, `npm run check`, `npm run build`, inspeccion de `dist/images/index/` | Las cinco imagenes se copian con nombre, formato, peso y dimensiones conservados; el rol `index` fue confirmado por el usuario; no se inventan `alt` ni equivalencias Shopify. Los demas recursos siguen pendientes y el placeholder queda listo para media `pending` o `null`. |
| 3 | 3.2 Migrar modelo y contenido de productos | Completada con media, SEO y descripciones pendientes documentadas | `src/content.config.ts`, `src/content/products/*.md`, `Docs/ETAPAS_Y_TAREAS_MIGRACION.md` | Recuperacion de los 13 endpoints publicos `.js`, lectura de plantillas de producto, `npm run check`, `npm run build`, conteo de 13 Markdown y busqueda de referencias CDN en `src` | Los 13 slugs del sitemap tienen contenido estatico; los precios estan marcados como historicos, no hay compra ni variantes interactivas, y cada media faltante conserva uso, dimensiones esperadas, proporcion y bloqueo. `npm run check` termina con 0 errores, warnings y hints; la salida actual genera 42 paginas incluyendo 404 y assets auxiliares. |
| 3 | 3.3 Migrar colecciones y portada | Completada con media pendiente documentada | `src/pages/index.astro`, `src/pages/collections/[slug].astro`, `src/pages/collections/index.astro`, `src/pages/collections/all.astro`, `src/styles/components/homepage.css`, `src/styles/components/collection.css`, `Docs/RESULTADOS_ETAPA_3.md` | `npm run check`, `npm run build`, preview desktop/mobile e inspeccion de slider y colecciones | Portada con cuatro heroes, textos/destinos originales, slider accesible, categorias y compromisos. PLA usa la imagen disponible; impresoras, productos e iconos conservan placeholders. |
| 3 | 3.4 Migrar paginas, blogs, articulos y politicas | Completada con contenido y media pendientes documentados | `src/content.config.ts`, `src/content/pages/*.md`, `src/content/blogs/*.md`, `src/content/articles/*.md`, `src/pages/pages/[slug].astro`, `src/pages/blogs/[blog]/index.astro`, `src/pages/blogs/[blog]/[slug].astro`, `src/pages/blogs/articulos/tagged/impresion-3d.astro`, `src/styles/components/editorial.css`, `Docs/RESULTADOS_ETAPA_3.md` | `npm run check`, `npm run build`, preview local y fetch independiente de las 16 URLs editoriales | 5 paginas, 3 indices, 7 articulos y 1 ruta tagged controlada responden 200; 82 registros de media y 62 bloques pending documentan faltantes; la busqueda es un formulario local con índice estático generado desde contenido aprobado y sin endpoint. La Tarea 3.5 cerró la etapa. |
| 3 | 3.5 Verificacion obligatoria de la etapa 3 | Aprobada con bloqueos documentados | `Docs/RESULTADOS_ETAPA_3.md`, `Docs/MANIFIESTO_MEDIA.md`, `src/pages/search.astro`, `src/scripts/print3x-ui.ts`, `src/scripts/README.md`, `src/data/index-media.ts`, `src/layouts/SiteLayout.astro`, `src/pages/favicon.ico.ts`, `public/favicon.svg`, cinco Markdown editoriales | `npm run check`, `npm run build`, preview, fetch de 41 rutas, comprobacion de metadata, favicons, requests, media y headings; auditoria independiente final | Aprobada. 41 rutas responden 200, `/favicon.svg` y `/favicon.ico` responden 200, la metadata común está presente, la búsqueda no solicita recursos externos, hay 82 registros de media pending y 62 bloques visibles, y no existen duplicaciones iniciales de headings. Persisten bloqueos documentados de media, logo de identidad, Futura, videos, Drive y formularios. |
| 4 | 4.1 Implementar layout y metadata comun | Completada con placeholders y bloqueos documentados | `src/layouts/SiteLayout.astro`, `src/styles/base.css`, `src/styles/tokens.css`, `public/favicon.svg`, `public/images/social-placeholder.svg` | `npm run check`, `npm run build`, inspeccion de HTML generado | Shell, skip link, main, header, footer, title, description placeholder cuando falta, canonical, Open Graph, Twitter, theme-color, favicon e imagen social placeholder funcionan en la salida estática. Logo, favicon de identidad e imagen social de marca quedan documentados como pendientes. Validada en Tarea 4.5. |
| 4 | 4.2 Implementar rutas de productos y colecciones | Completada con media pendiente documentada | `src/pages/products/[slug].astro`, `src/pages/collections/[slug].astro`, `src/pages/collections/index.astro`, `src/pages/collections/all.astro`, `src/content/products/*.md` | `npm run check`, `npm run build`, conteo de rutas y preview local | Las 13 rutas de producto, colecciones PLA/impresoras, índice y all generan HTML estático con slugs aprobados y placeholders de media faltante. Validada en Tarea 4.5. |
| 4 | 4.3 Implementar paginas, blogs, articulos y politicas | Completada con contenido histórico y media pendiente documentados | `src/pages/404.astro`, `src/pages/pages/[slug].astro`, `src/pages/blogs/[blog]/index.astro`, `src/pages/blogs/[blog]/[slug].astro`, `src/pages/blogs/articulos/tagged/impresion-3d.astro`, `src/pages/policies/[slug].astro`, `src/content.config.ts` | `npm run check`, `npm run build`, preview, status 200/404, titles, canonicals y robots | La arquitectura estática conserva slugs, genera 5 páginas, 3 blogs, 7 artículos, 4 policies y 404 controlada. Policies son noindex y muestran aviso histórico. Validada en Tarea 4.5. |
| 4 | 4.4 Resolver rutas auxiliares sin comercio | Completada | `src/pages/search.astro`, `src/pages/cart.astro`, `src/pages/customer_authentication/redirect.astro`, `src/pages/policies/[slug].astro`, `src/scripts/print3x-ui.ts` | `npm run check`, `npm run build`, preview, requests y grep de endpoints comerciales | Search, cart y autenticación tienen experiencias estáticas controladas y noindex; la búsqueda usa un índice local generado desde contenido aprobado y no realiza requests. Validada en Tarea 4.5. |
| 4 | 4.5 Verificacion obligatoria de la etapa 4 | Aprobada con bloqueos documentados | `Docs/RESULTADOS_ETAPA_4.md`, `Docs/ETAPAS_Y_TAREAS_MIGRACION.md` | `npm run check`, `npm run build`, preview, 41 rutas, 37 enlaces internos, metadata, favicons y variantes URL | Aprobada. 42 páginas estáticas generadas, 41 rutas funcionales 200, 404 controlada, 0 enlaces internos rotos, metadata completa y sin comercio/Shopify ejecutable. Redirects definitivos de Cloudflare y placeholders de contenido siguen pendientes. |
| 5 | 5.1 Retirar logica Shopify no necesaria | Completada | `src/layouts/SiteLayout.astro`, `src/scripts/print3x-ui.ts`, `src/pages/search.astro`, `src/pages/cart.astro`, `src/pages/customer_authentication/redirect.astro` | `npm run check`, `npm run build`, grep de dependencias y requests de preview | No hay endpoints ejecutables Shopify, CDN Shopify, checkout, cart AJAX, Loox, Banana Stand, pickup, quick add ni APIs comerciales. |
| 5 | 5.2 Implementar comportamiento de escaparate | Completada | `src/pages/index.astro`, `src/pages/products/[slug].astro`, `src/pages/collections/[slug].astro`, `src/pages/cart.astro` | `npm run check`, `npm run build`, inspeccion de productos, colecciones y portada | Productos muestran estados y precios históricos, conservan placeholders y no tienen controles de compra; portada usa acciones de navegación. |
| 5 | 5.3 Validar navegacion, busqueda y formularios | Completada con pendientes documentados | `src/pages/search.astro`, `src/scripts/print3x-ui.ts`, `src/pages/cart.astro`, `src/pages/customer_authentication/redirect.astro` | Preview, búsqueda con coincidencia/sin coincidencia, consola y red | Búsqueda local: `PLA` 16 resultados, `axis` 1 resultado y consulta inexistente 0; cart/auth son informativos y no se envían datos. Enlaces externos permanecen sin carga automática. |
| 5 | 5.4 Verificacion obligatoria de la etapa 5 | Aprobada con bloqueos documentados | `Docs/RESULTADOS_ETAPA_5.md`, `Docs/ETAPAS_Y_TAREAS_MIGRACION.md` | `npm run check`, `npm run build`, preview sin acceso externo, rutas principales, requests, consola y auditoría independiente final | Aprobada. La salida funciona como escaparate estático sin APIs Shopify ni compra, con 42 páginas, búsqueda local funcional, cart/auth controlados y media pendiente preservada. Policies históricas y enlaces externos requieren revisión posterior. |
| 6 | 6.1 Implementar SEO tecnico estatico | Completada con metadata y contenido pendiente documentado | `src/layouts/SiteLayout.astro`, `src/pages/sitemap.xml.ts`, `src/pages/robots.txt.ts`, `src/pages/404.astro`, `public/favicon.svg`, `public/images/social-placeholder.svg` | `npm run check`, `npm run build`, builds local/producción, inspección de sitemap/robots/metadata | Preview queda `noindex`/`Disallow: /`; producción permite rutas públicas, usa canonical definitivo y sitemap de 31 URLs. Descriptions ausentes se omiten sin inventar texto; policies y auxiliares siguen noindex. |
| 6 | 6.2 Ejecutar accesibilidad y performance | Completada con media, fuente y peso de imágenes pendientes documentados | `src/pages/index.astro`, `src/components/MediaPlaceholder.astro`, `src/styles/components/homepage.css`, `src/styles/components/header.css`, `src/styles/components/footer.css` | `npm run check`, `npm run build`, Lighthouse/Chrome desktop y mobile, traza de performance | Lighthouse producción: 100 accesibilidad, 100 buenas prácticas y 100 SEO en desktop/mobile. Contraste y targets táctiles corregidos; logo, Futura, alt y optimización de imágenes siguen pendientes. |
| 6 | 6.3 Ejecutar regresion visual | Completada con diferencias documentadas | `src/pages/index.astro`, rutas de colecciones/productos/editoriales, `Docs/RESULTADOS_ETAPA_6.md` | Comparación estructural y visual de portada, colecciones, producto, página, blog y artículo contra fuente Shopify | Shell, grids, responsive, placeholders y proporciones conservan el patrón de Refresh. Diferencias aceptadas: logo, media, video, Drive y Futura faltantes. |
| 6 | 6.4 Ejecutar auditoria de enlaces y status HTTP | Completada para preview | `Docs/RESULTADOS_ETAPA_6.md`, `src/pages/sitemap.xml.ts`, `src/pages/robots.txt.ts` | Crawl de sitemap, enlaces internos, assets, favicons, robots, status y canonicals | Sitemap válido, recursos críticos 200, enlaces internos sin 404 y canonicals definitivos. URLs limpias `.html`/slash requieren validación en Cloudflare Pages. |
| 6 | 6.5 Verificacion obligatoria de la etapa 6 | Aprobada para preview de Cloudflare con bloqueos documentados | `Docs/RESULTADOS_ETAPA_6.md`, `Docs/ETAPAS_Y_TAREAS_MIGRACION.md` | `npm run check`, `npm run build`, build producción, Lighthouse, crawl, contraste, targets, consola y auditoría independiente final | Aprobada para preview. 42 páginas generadas, 31 URLs en sitemap, Lighthouse 100/100/100, preview protegido y sin bloqueos críticos de uso. Debe validarse Cloudflare antes de DNS. |
| 7 | 7.1 Preparar Cloudflare Pages sin tocar producción | Preparada; despliegue pendiente de autorización | `.nvmrc`, `Docs/CLOUDFLARE_PAGES_PREVIEW.md`, `astro.config.mjs`, `package.json` | Revisión de configuración local, `npm run check`, `npm run build`, documentación oficial de Cloudflare Pages | Configurados por documentación el comando `npm run build`, salida `dist`, Node `22.12.0` y `PUBLIC_SITE_ENV=production` solo para producción. No se creó proyecto Cloudflare, no se usó Wrangler, no se publicaron previews y no se modificó DNS. |
| 3 | 3.1/3.3 Actualización por nueva entrega de media del home | Completada con alt pendiente y media Shopify faltante documentada | `public/images/brand/logo-print3x.png`, `public/images/index/*` adicionales, `src/data/site-media.ts`, `src/data/index-media.ts`, `src/components/Header.astro`, `src/pages/index.astro`, `src/pages/collections/index.astro`, `src/styles/components/header.css`, `src/styles/components/homepage.css`, `Docs/MANIFIESTO_MEDIA.md`, `Docs/RESULTADOS_ETAPA_3.md` | `node` + `sharp`, `npm run check`, `npm run build`, preview en `127.0.0.1:4321`, comprobación visual desktop/mobile, requests y consola | Se integraron logo, segunda categoría y cuatro iconos; 11 imágenes del home cargan `200`, el slideshow ocupa el ancho completo y no hay overflow. Se conserva el placeholder del hero interno de `/collections/impresoras-3d` porque su fuente es otro recurso no entregado. |
| 2 | 2.3 Actualización de visibilidad y atribución del footer | Completada | `src/components/Footer.astro`, `src/styles/components/footer.css`, `Docs/RESULTADOS_ETAPA_2.md` | `npm run check`, `npm run build`, preview en `390px` y `1440px`, inspección de color, texto, enlace y overflow | Los textos de misión y mejora son legibles sobre el fondo inverso; la atribución enlaza a `https://sanhueza.pro/` con `noopener noreferrer`; se retiró la atribución Shopify. |
| 2 | 2.3 Ajuste de grilla del footer a tres columnas | Completada | `src/components/Footer.astro`, `Docs/RESULTADOS_ETAPA_2.md` | `npm run check`, `npm run build`, preview en `390px` y `1440px`, inspección de posiciones y overflow | `Politicas`, `Nuestra misión` y `Ayúdanos a mejorar` quedan en tres columnas en desktop y se mantienen apilados en mobile. |
| 6 | 6.3 Remediación visual posterior: flechas del menú principal | Completada | `src/styles/components/header.css`, `Docs/RESULTADOS_ETAPA_6.md` | `npm run check`, `npm run build`, preview local en `1440px`, inspección de posiciones computadas | Las flechas de `Productos`, `Información` y `Nosotros` participan en el flujo flex del texto mediante `position: static`; quedan a un costado con separación de `0.9rem` y no se modifica el comportamiento del menú móvil. |
| 6 | 6.3 Remediación visual posterior: cierre y scroll del menú móvil | Completada | `src/components/Header.astro`, `src/styles/components/header.css`, `Docs/RESULTADOS_ETAPA_6.md` | `npm run check`, `npm run build`, preview en `390px`, `768px`, `1024px` y `1440px`, click exterior, scroll y consola | El overlay real cierra el menú fuera del drawer; el header y el drawer permanecen bajo control durante el scroll; la posición de scroll se conserva y desktop no cambia. |
| 6 | 6.3 Remediación visual posterior: controles del slideshow del hero | Completada | `src/pages/index.astro`, `src/scripts/print3x-ui.ts`, `src/styles/components/homepage.css`, `Docs/RESULTADOS_ETAPA_6.md` | `npm run check`, `npm run build`, preview local en `390px`, `768px`, `1024px` y `1440px`, click de pausa, inspección de iconos/ARIA, overflow y consola | El contador deja de ser visible, los puntos quedan como indicador visual único y el texto de pausa se reemplaza por iconos SVG de pausa/reproducción. El cambio funciona en todos los viewports comprobados y no registra errores. |
| 6 | 6.3 Remediación visual posterior: recuadro del hero en mobile | Completada | `src/pages/index.astro`, `src/styles/components/homepage.css`, `Docs/RESULTADOS_ETAPA_6.md` | `npm run check`, `npm run build`, preview local en mobile y desktop, inspección de posiciones computadas, overflow y consola | Se replicó `banner--mobile-bottom` de Shopify: en mobile la imagen termina antes del recuadro, que queda debajo y sin altura mínima sobrante; desktop conserva la superposición. No hay overflow ni errores de consola. |
| 7 | 7.2 (trabajo suplementario de media) Optimizar assets locales con Astro Picture | Completada con alt y media faltante documentados | `src/assets/*`, `src/data/index-media.ts`, `src/data/site-media.ts`, `src/data/types.ts`, `src/components/MediaPlaceholder.astro`, `src/components/Header.astro`, `src/styles/components/media-placeholder.css`, `src/styles/components/header.css`, `src/pages/index.astro`, `src/pages/collections/index.astro`, `public/images/*` duplicados, `Docs/MANIFIESTO_MEDIA.md` | Investigación Context7 mediante subagentes, `npm run check`, `npm run build`, preview local en `127.0.0.1:4321`, comprobación de `<picture>`, `srcset`, `sizes`, cargas de assets, viewport `390px` y `1440px`, overflow y consola | Los 11 assets se procesan desde `src/assets`; se generan AVIF/WebP y fallback, las rutas runtime pasan a `/_astro/`, la geometría del home y colecciones se conserva, y las copias sin optimizar de `public/images` se retiraron. La Tarea 7.2 formal de DNS y rollback sigue abierta/preparada sin modificar DNS. |
| 7 | 7.2 (trabajo suplementario de media) Integrar galerías locales de productos PLA | Completada con alt pendiente documentado | `src/assets/index-products-pla/*`, `src/data/product-media.ts`, `src/pages/products/[slug].astro`, `Docs/MANIFIESTO_MEDIA.md` | `npm run check`, `npm run build`, preview local en `127.0.0.1:4321`, comprobación independiente de las 11 rutas, conteo de `<picture>`, estados de media y rutas `/_astro/` | Las 44 imágenes locales se distribuyen en las 11 rutas PLA aprobadas, cuatro por ruta; todas renderizan como `<Picture>` optimizado con estado `available`, sin placeholders. Se mantienen los slugs históricos y la Tarea 7.2 formal de DNS y rollback sigue abierta/preparada sin modificar DNS. |
| 7 | 7.2 (ajuste posterior del shell) Retirar acceso de cuenta y rutas de login | Completada | `src/components/Header.astro`, `src/styles/components/header.css`, `src/pages/customer_authentication/redirect.astro`, `src/pages/robots.txt.ts`, `AGENTS.md`, `Docs/INVENTARIO_RUTAS_SEO.md`, `Docs/RESULTADOS_ETAPA_2.md`, `Docs/RESULTADOS_ETAPA_7.md` | `npm run check`, `npm run build`, inspeccion de `src` y `dist`, preview de rutas principales y verificacion independiente de ausencia de referencias | El icono de cuenta ya no aparece en desktop ni mobile, la ruta de autenticacion no se genera, robots no contiene su regla y busqueda/carrito/navegacion permanecen intactos. La Tarea 7.2 formal de DNS y rollback sigue abierta/preparada sin modificar DNS. |
| 6 | 6.3 Remediación visual posterior: storefront de productos PLA | Completada | `src/components/ProductGallery.astro`, `src/data/pla-product-details.ts`, `src/data/product-media.ts`, `src/pages/products/[slug].astro`, `src/scripts/print3x-ui.ts`, `src/styles/components/product.css`, `Docs/RESULTADOS_ETAPA_6.md` | Comparación live/local en `390px`, `768px`, `1024px` y `1440px`; pruebas de carrusel, miniaturas, cantidad, acordeones, modal y `Escape`; `npm run check`; `npm run build`; auditoría de las 11 rutas | Las 11 rutas responden `200`, cada una conserva cuatro imágenes y sus textos/acordeones coinciden con el live; el layout iguala la geometría observada en desktop/mobile y no hay overflow horizontal. Se corrigió una diferencia textual del PLA dorado. Persisten únicamente los bloqueos generales documentados de media, alt, Futura, favicon e identidad. |
| 6 | 6.3 Remediación visual posterior: colección PLA | Completada con media local y equivalencias documentadas | `src/pages/collections/[slug].astro`, `src/data/pla-collection.ts`, `src/styles/components/collection.css`, `src/content/collections/pla.md`, `src/assets/index-collections-pla/*`, `Docs/MANIFIESTO_MEDIA.md`, `Docs/RESULTADOS_ETAPA_6.md` | Comparación live/local en `390px` y `1440px`; conteo independiente de 11 productos, 18 bloques, 2 acordeones, estados de hover y recursos `/_astro/`; `npm run check`; `npm run build` | La ruta conserva hero, grid de productos, precios históricos, segunda imagen en hover, bloques editoriales y acordeones del live sin overflow ni imágenes externas. `Hero_3.jpg` queda registrado como decisión local confirmada, sin declararlo equivalente a la referencia Shopify pendiente `2052425b5f.jpg`. |
| 6 | 6.3 Remediación visual posterior: color de la franja PLA | Completada | `src/pages/collections/[slug].astro`, `src/styles/components/collection.css`, `Docs/RESULTADOS_ETAPA_6.md` | `npm run check`, `npm run build`, preview emulado en `390x844`, inspección de color computado, overflow y consola | La franja `Todas las características del Mejor: PLA` usa `#ab0c6f` mediante el esquema `color-accent-2` y la clase `gradient`; el texto conserva contraste claro y no hay errores de consola. |
| 7 | 7.2 (trabajo suplementario de media) Integrar contenido y bloques editoriales de Axis One | Completada | `src/assets/index-products-axis-one/*`, `src/data/axis-one-product.ts`, `src/components/AxisOneFeatures.astro`, `src/components/ProductGallery.astro`, `src/pages/products/[slug].astro`, `src/styles/components/product.css`, `Docs/MANIFIESTO_MEDIA.md`, `Docs/RESULTADOS_ETAPA_7.md` | Comparación live/local de `/products/axis-one`, `npm run check`, `npm run build`, preview a `390px`, prueba de los 7 desplegables, consola y overflow | Se integraron 16 imágenes editoriales con `<Picture>` en el orden publicado, el contenido visible y los 7 desplegables. La galería principal y el video se registran en la tarea suplementaria posterior. DNS y producción no fueron modificados. |
| 7 | 7.2 (trabajo suplementario de media) Integrar galería y video local de Axis One | Completada con video externo diferido documentado | `src/assets/index-products-axis-one/fotos producto/*`, `src/data/axis-one-product.ts`, `src/components/LiteYoutube.astro`, `src/components/ProductGallery.astro`, `src/components/AxisOneFeatures.astro`, `src/pages/products/[slug].astro`, `src/styles/components/product.css`, `package.json`, `Docs/MANIFIESTO_MEDIA.md`, `Docs/RESULTADOS_ETAPA_7.md` | Preview de `/products/axis-one`, avance de galería, activación del video, comprobación de dos componentes `lite-youtube`, validación visual del encabezado magenta con márgenes y texto centrado, video fuera del fondo a `390px` y `1440px`, preview de `/collections/pla`, `npm run check`, `npm run build` | Se integraron 9 imágenes locales con `<Picture>` y el video `J-rV8g_5Te4` en la galería y el bloque editorial. El iframe `youtube-nocookie` solo se carga al activar el componente. El encabezado editorial conserva la sección magenta de ancho completo, con separación vertical y texto centrado; el video queda fuera, sobre el fondo normal, separado de las características posteriores. DNS y producción no fueron modificados. |
| 7 | 7.2 (trabajo suplementario de media) Normalizar alturas de galería Axis One | Completada | `src/styles/components/product.css`, `Docs/RESULTADOS_ETAPA_7.md`, `Docs/ETAPAS_Y_TAREAS_MIGRACION.md` | `npm run check`, `npm run build`, preview de `/products/axis-one` a `390px` y `1440px`, activación de una imagen vertical, inspección de medidas computadas, overflow y consola | Los marcos principales y las miniaturas usan proporción `3:2` y alturas uniformes; las imágenes no se recortan porque usan `object-fit: contain`; el video comparte el marco; no hay overflow ni errores de consola. DNS y producción no fueron modificados. |
| 7 | 7.2 (trabajo suplementario de media) Mostrar navegación desktop de galería Axis One | Completada | `src/components/ProductGallery.astro`, `src/styles/components/product.css`, `Docs/RESULTADOS_ETAPA_7.md`, `Docs/ETAPAS_Y_TAREAS_MIGRACION.md` | `npm run check`, `npm run build`, preview de `/products/axis-one` a `390px` y `1440px`, click de siguiente/anterior, estado disabled, contador, overflow y consola | Las flechas aparecen a ambos lados de las miniaturas en desktop, avanzan y retroceden usando la lógica existente; en móvil se conservan los controles inferiores, sin overflow ni errores de consola. DNS y producción no fueron modificados. |
| 7 | 7.2 (trabajo suplementario de media) Corregir overflow de franja Axis One | Completada | `src/pages/products/[slug].astro`, `src/styles/components/product.css`, `Docs/RESULTADOS_ETAPA_7.md`, `Docs/ETAPAS_Y_TAREAS_MIGRACION.md` | `npm run check`, `npm run build`, preview de `/products/axis-one` a `390px` y `1440px`, inspección de `clientWidth`, `scrollWidth`, geometría de la franja y consola | El artículo storefront usa ancho completo, el layout principal conserva `page-width` y la franja magenta usa `width: 100%` sin `100vw` ni desplazamiento negativo; desktop y móvil quedan sin scroll horizontal. DNS y producción no fueron modificados. |
| 7 | 7.2 (trabajo suplementario de media) Desplazar miniaturas con flechas y arrastre Axis One | Completada | `src/scripts/print3x-ui.ts`, `src/styles/components/product.css`, `Docs/RESULTADOS_ETAPA_7.md`, `Docs/ETAPAS_Y_TAREAS_MIGRACION.md` | `npm run check`, `npm run build`, preview de `/products/axis-one` a `390px` y `1440px`, varios clicks de flecha, arrastre con mouse, click directo de miniatura, overflow y consola | Las flechas cambian la media principal y desplazan la miniatura activa; la lista desktop se puede arrastrar horizontalmente con mouse sin activar clicks accidentales; la selección directa y el carrusel táctil móvil permanecen funcionales. DNS y producción no fueron modificados. |
| 7 | 7.2 (trabajo suplementario de media) Evitar recorte en imágenes editoriales Axis One | Completada | `src/styles/components/product.css`, `Docs/RESULTADOS_ETAPA_7.md`, `Docs/ETAPAS_Y_TAREAS_MIGRACION.md` | Reproducción en preview de `/products/axis-one` a `1440px`, inspección de dimensiones naturales y computadas, `npm run check`, `npm run build` | Las imágenes de las features usan `object-fit: contain` dentro de sus marcos altos; el logo de `Objetivo` se muestra completo y las dimensiones uniformes del bloque se mantienen. DNS y producción no fueron modificados. |
| 7 | 7.2 (trabajo suplementario de media) Actualizar aviso de ficha técnica Axis One | Completada | `src/components/AxisOneFeatures.astro`, `Docs/RESULTADOS_ETAPA_7.md`, `Docs/ETAPAS_Y_TAREAS_MIGRACION.md` | `npm run check`, `npm run build`, búsqueda del texto anterior en `src` | El aviso ahora muestra exactamente `Documento no disponible`; no quedan apariciones del texto anterior en `src`. DNS y producción no fueron modificados. |
| 7 | 7.2 (trabajo suplementario de media) Recuperar click de miniaturas tras agregar arrastre Axis One | Completada | `src/scripts/print3x-ui.ts`, `Docs/RESULTADOS_ETAPA_7.md`, `Docs/ETAPAS_Y_TAREAS_MIGRACION.md` | Reproducción en preview de `/products/axis-one` a `1440px`, click real de miniatura, arrastre, apertura de modal, `Escape`, `npm run check`, `npm run build` | La captura de puntero ya no impide seleccionar una miniatura sin movimiento; el click cambia la imagen principal, el arrastre sigue funcionando y el modal conserva apertura/cierre y restauración del scroll. DNS y producción no fueron modificados. |
| 7 | 7.2 (trabajo suplementario de media) Usar miniatura local para video Axis One | Completada | `src/assets/index-products-axis-one/miniatura.jpg`, `src/data/types.ts`, `src/data/axis-one-product.ts`, `src/components/ProductGallery.astro`, `src/styles/components/product.css`, `Docs/RESULTADOS_ETAPA_7.md` | `npm run check`, `npm run build`, preview de `/products/axis-one` a `1440px`, inspección de `<picture>`, carga local del poster, selección de `product-media-2` y ausencia de iframe antes de activación | La segunda miniatura muestra `miniatura.jpg` procesada por Astro, conserva el indicador de play, se selecciona como video y mantiene la carga diferida del iframe. DNS y producción no fueron modificados. |
| 7 | 7.2 (trabajo suplementario de media) Priorizar carga de heroes del index | Completada con bloqueo preexistente de Sharp documentado | `src/pages/index.astro`, `Docs/RESULTADOS_ETAPA_7.md`, `Docs/ETAPAS_Y_TAREAS_MIGRACION.md` | `npm run check`, `npm run build`, inspección independiente de `dist/index.html` y preview local del slideshow | Los cuatro heroes usan `loading="eager"`; únicamente el primer hero usa `fetchpriority="high"`. Las imágenes de categorías y compromisos conservan `loading="lazy"`. El preview confirma las cuatro solicitudes tempranas; el build advierte que falta `Sharp` en `node_modules`, bloqueo previo no relacionado con este cambio. |
| 7 | 7.2 (trabajo suplementario de media) Integrar página Nosotros | Completada con bloqueo preexistente de Sharp documentado | `src/components/NosotrosPage.astro`, `src/pages/pages/[slug].astro`, `src/styles/components/editorial.css`, `src/assets/index-pages-nosotros/*`, `Docs/MANIFIESTO_MEDIA.md`, `Docs/RESULTADOS_ETAPA_7.md` | `npm run check`, `npm run build`, preview de `/pages/nosotros` a 390px y desktop, carrusel y comprobación de overflow | La página conserva la estructura live, usa media local con `<Picture>`, el carrusel cambia de compromiso y no hay overflow horizontal. El build continúa bloqueado por la ausencia preexistente de `Sharp` en `node_modules`; DNS y producción no fueron modificados. |
| 7 | 7.2 (trabajo suplementario de media) Ajustar fidelidad visual de Nosotros | Completada con bloqueo preexistente de Sharp documentado | `src/components/NosotrosPage.astro`, `src/styles/components/editorial.css`, `src/styles/components/header.css`, `Docs/RESULTADOS_ETAPA_7.md`, `Docs/ETAPAS_Y_TAREAS_MIGRACION.md` | `npm run check`, `npm run build`, preview a 390px y 1536px, comparación de proporciones, carrusel y overflow | El hero, la prensa, los compromisos y el contenido largo coinciden con las proporciones observadas en la referencia live; desktop muestra tres columnas y móvil carrusel horizontal. DNS y producción no fueron modificados. |
| 7 | 7.2 (trabajo suplementario de media) Ajustar tamaño y color del titulo Nosotros | Completada | `src/styles/components/editorial.css`, `Docs/RESULTADOS_ETAPA_7.md`, `Docs/ETAPAS_Y_TAREAS_MIGRACION.md` | `pnpm check`, `git diff --check`, inspeccion de la regla `.about-page__hero-copy h1` | El titulo del hero usa `5rem` y `#fff`; el resto de la pagina no fue alterado. El bloqueo de `Sharp` permanece independiente. |
| 7 | 7.2 (trabajo suplementario de media) Ajustar recorte y filtro del hero Nosotros | Completada con bloqueo preexistente de Sharp documentado | `src/styles/components/editorial.css`, `Docs/RESULTADOS_ETAPA_7.md`, `Docs/ETAPAS_Y_TAREAS_MIGRACION.md` | `pnpm check`, `git diff --check`, preview local a 1428px, inspeccion de `object-position`, filtro, capas, titulo y overflow | La foto se posiciona arriba (`50% 0%`), el filtro negro queda en `15%`, el titulo permanece blanco sobre el filtro y no hay overflow horizontal. El bloqueo de `Sharp` permanece independiente. |
| 7 | 7.2 (trabajo suplementario de media) Resolver variantes de imagen en build y preview | Completada | `package.json`, `pnpm-lock.yaml`, `Docs/RESULTADOS_ETAPA_7.md`, `Docs/ETAPAS_Y_TAREAS_MIGRACION.md` | `pnpm add sharp@0.35.3`, `pnpm check`, `pnpm build`, preview de `/pages/nosotros` y `/`, requests de imagen y conteo de imágenes cargadas | `Sharp` queda declarado directamente; el build genera 41 páginas y 720 variantes optimizadas. Preview entrega `200` para 2/2 imágenes de Nosotros y 11/11 imágenes del index, sin imágenes rotas. |
| 7 | 7.2 (trabajo suplementario de media) Corregir fondo y alineación de las tarjetas de compromisos | Completada | `src/styles/components/editorial.css`, `Docs/RESULTADOS_ETAPA_7.md`, `Docs/ETAPAS_Y_TAREAS_MIGRACION.md` | `pnpm check`, `pnpm build`, preview local, inspección computada de `li` y `.about-page__commitment-card`, overflow e imágenes | El fondo `#981986` y el radio de `20px` quedan en el `li`; la tarjeta interna es transparente, eliminando el desplazamiento visual provocado por el margen colapsado del icono. |
| 7 | 7.3 Separar verticalmente las secciones de Nosotros | Completada | `src/styles/components/editorial.css`, `Docs/RESULTADOS_ETAPA_7.md`, `Docs/ETAPAS_Y_TAREAS_MIGRACION.md` | `pnpm check`, `pnpm build`, preview local a desktop y `390px`, inspección de geometría, overflow e imágenes | Se añaden `4rem` en desktop y `3rem` en móvil entre prensa, compromisos e Historia/Futuro, conservando los espacios internos existentes. |
| 7 | 7.2 (trabajo suplementario de componentes) Reutilizar `ImageTextCard` en Padi y Axis One | Completada | `src/components/ImageTextCard.astro`, `src/components/PadiFeatures.astro`, `src/components/AxisOneFeatures.astro`, `src/styles/components/product.css`, `Docs/RESULTADOS_ETAPA_7.md` | `pnpm check`, `pnpm build`, preview de ambas rutas a `390px` y `1440px`, conteo de cards/picture/inversiones, enlaces, overflow e imágenes rotas, `git diff --check` | Padi usa 8 cards y Axis One 16 mediante el componente compartido; se conservan enlaces, carga optimizada, alternancia responsive y encuadre sin recorte. Se generaron 41 páginas y 887 variantes. DNS y producción no fueron modificados. |
| 7 | 7.2 (corrección visual) Ajustar el logo de la primera card de Padi y Axis One | Completada | `src/components/ImageTextCard.astro`, `src/components/PadiFeatures.astro`, `src/components/AxisOneFeatures.astro`, `Docs/RESULTADOS_ETAPA_7.md` | `pnpm check`, `pnpm build`, preview a `1280px` y `390px`, inspección de `object-fit`, overflow e imágenes rotas, `git diff --check` | La primera card usa `contain` y muestra completo el logo Axis One en ambas rutas y tamaños; las demás cards mantienen `cover`. DNS y producción no fueron modificados. |
| 7 | 7.2 (trabajo suplementario de componentes) Reutilizar `ImageTextCard` en las características de la colección PLA | Completada | `src/components/ImageTextCard.astro`, `src/pages/collections/[slug].astro`, `src/styles/components/collection.css`, `Docs/RESULTADOS_ETAPA_7.md` | `pnpm check`, `pnpm build`, preview de `/collections/pla` a `1280px` y `390px`, conteo de cards/picture/inversiones, comprobación de HTML, overflow e imágenes rotas, `git diff --check` | Las 18 cards de características usan el componente compartido, conservan el contenido HTML aprobado, las imágenes optimizadas y la alternancia responsive. Se generaron 41 páginas y 930 variantes. DNS y producción no fueron modificados. |
| 7 | 7.2 (corrección visual) Centrar y separar las cards de características PLA | Completada | `src/styles/components/collection.css`, `Docs/RESULTADOS_ETAPA_7.md` | `pnpm check`, `pnpm build`, preview a `1440px` y `390px`, inspección de márgenes, gap, overflow e imágenes rotas, `git diff --check` | Las cards quedan centradas, con `4rem` de separación desktop y `2rem` mobile, igual que Padi y Axis One. DNS y producción no fueron modificados. |
| 7 | 7.2 (ajuste de contenido) Retirar tres artículos y el grupo Blog del menú | Completada | `src/content/articles/encuesta-sistema-operativo-y-software.md`, `src/content/articles/los-mejores-disenos-stl-para-imprimir-esta-navidad.md`, `src/content/articles/regalos-originales-para-el-14-de-febrero-dia-del-amor-y-la-amistad.md`, `src/content/blogs/noticias.md`, `src/content/blogs/articulos.md`, `src/components/Header.astro`, `AGENTS.md`, `Docs/INVENTARIO_RUTAS_SEO.md`, `Docs/RESULTADOS_ETAPA_7.md` | Búsqueda de referencias en `src`, `pnpm check`, `pnpm build`, inspección de `dist/sitemap.xml`, preview local de portada, índices y rutas retiradas, `git diff --check` | Los tres artículos ya no se generan, sus índices quedan sin enlaces, el grupo `Blog` desaparece de desktop/mobile, el sitemap queda en 28 URLs de contenido y las rutas retiradas responden `404`. DNS y producción no fueron modificados. |
