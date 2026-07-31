# Inventario tecnico del tema Shopify

**Tema de referencia:** Shopify Refresh 9.0.0  
**Fuente principal:** `zip_theme_shopify_estable/`  
**Fecha de inspeccion:** 2026-07-29  
**Estado:** inventario aprobado como entrada de desarrollo; sus dependencias pendientes pertenecen a etapas posteriores.

## Alcance y metodo

Se inspeccionaron `layout/`, `config/`, `assets/`, `sections/`, `snippets/`, `templates/` y los locales del ZIP. Se contrastaron las rutas y el shell con el HTML publico observado en `https://www.print3x.cl/`, `sitemap.xml`, sus sitemaps hijos y `robots.txt`.

El ZIP contiene 47 templates JSON, un template Liquid adicional (`gift_card.liquid`), dos layouts Liquid y los recursos de Refresh. La existencia de un template o una seccion no demuestra que exista una URL publica equivalente.

## Shell global

### Documento y layout

`layout/theme.liquid` define la estructura global que debe conservarse de forma estatica:

- `<!doctype html>`, `lang` basado en la locale, viewport, canonical y titulo.
- Favicon condicionado por la configuracion activa.
- Preconnect a `cdn.shopify.com` y, cuando corresponde, `fonts.shopifycdn.com`.
- Meta description y `snippets/meta-tags.liquid`.
- Carga global de `constants.js`, `pubsub.js`, `global.js` y `base.css`.
- Variables CSS derivadas de `config/settings_data.json`.
- Enlace de salto accesible a `#MainContent`.
- `main#MainContent.content-for-layout` con `role="main"` y `tabindex="-1"`.
- Grupos globales `header-group` y `footer-group`.
- Mensajes ocultos de accesibilidad para recarga, nueva ventana y controles de slideshow.
- Datos globales `window.shopUrl`, `window.routes`, `window.cartStrings`, `window.variantStrings` y `window.accessibilityStrings`, que no deben pasar al escaparate salvo las cadenas y la logica visual que sean necesarias.

### Header

`sections/header-group.json` mantiene el orden `announcement-bar` y `header`.

- Announcement bar con dos bloques deshabilitados en la configuracion activa.
- Texto deshabilitado observado: `CyberDay: Todo Print3x con descuento` y un bloque generico `Welcome to our store`.
- Header con logo centrado, menu `main-menu`, menu desktop tipo dropdown, sticky `on-scroll-up`, logo mobile centrado, `padding_top: 20`, `padding_bottom: 8` y sin separador.
- `sections/header.liquid` contiene menu drawer mobile, busqueda, cuenta, carrito, iconos, selector de locale y carga condicional de scripts Shopify.
- La estructura, las clases `header`, `list-menu`, `menu-drawer` y los estados de foco son reutilizables; los destinos de cuenta, carrito, busqueda predictiva y localization necesitan reemplazo estatico o una decision de auxiliar.

### Footer

`sections/footer-group.json` mantiene un newsletter deshabilitado y un footer activo.

- Menu `footer` con encabezado `Politicas`.
- Bloque de texto `Nuestra mision`.
- Bloque `Ayudanos a mejorar` con enlace a `/pages/contactanos`.
- `newsletter_enable: false`, `payment_enable: false`, selectores de pais e idioma deshabilitados y `show_policy: false`.
- `enable_follow_on_shop: true` y `show_social: true`; `follow_on_shop` es una integracion Shopify que debe retirarse o sustituirse por una presentacion no comercial.
- `sections/footer.liquid` conserva copyright, red social, menu, estilos y estructura responsive, pero contiene forms, `shop.policies`, `powered_by_link` y filtros Shopify que deben adaptarse.

### Integridad semantica y accesible

Debe preservarse en Astro:

- `#MainContent`, skip link, `main`, `header`, `footer`, `nav`, listas de menu y estados `aria-current`.
- Menu drawer con `details`, boton de cierre, foco y Escape.
- Modal de busqueda, galeria y video solo cuando exista contenido local o un enlace externo explicitamente revisado.
- Mensajes para lector de pantalla y orden de foco del tema.

## Familias de templates

### Portada y listados

| Familia | Templates | Uso observado | Estado de migracion documental |
|---|---|---|---|
| Portada | `templates/index.json` | `/` | Reutilizar slideshow, bloques de imagen, coleccion y compromisos; media Shopify pendiente. |
| Lista de colecciones | `templates/list-collections.json` | `/collections` | La ruta responde 200 en el rastreo; no aparece como `<loc>` en el GET actual del sitemap. |
| Busqueda | `templates/search.json` | `/search` | Auxiliar; conservar solo con busqueda estatica local. |
| Error | `templates/404.json` | 404 | Conservar shell visual y no convertirlo en una ruta de contenido. |
| Password | `templates/password.json`, `layout/password.liquid` | Acceso restringido Shopify | Retirar del escaparate publico salvo una necesidad futura documentada. |
| Gift card | `templates/gift_card.liquid` | Gift cards Shopify | Retirar; contiene `content_for_header` y flujo comercial. |

### Colecciones

| Template | Observacion |
|---|---|
| `templates/collection.json` | Plantilla generica con banner, grid y bloques de ejemplo; no prueba una URL publicada por si sola. |
| `templates/collection.coleccion-filamentos-pla.json` | Plantilla larga de PLA, grid de producto y caracteristicas; la ruta publica observada es `/collections/pla`. |
| `templates/collection.accesorios-3d.json` | Existe en el ZIP, pero `/collections/accesorios-3d` fue observado como 404; no publicarlo automaticamente. |

### Productos

| Subfamilia | Templates |
|---|---|
| Genericos y especializados | `product.json`, `product.producto-gran-descripcion.json`, `product.filamento-pla.json`, `product.filamento_flexible.json`, `product.filamento-acrilico.json`, `product.impresora-axis-one.json`, `product.superficie-padi.json` |
| Colores PLA | `product.pla-amarillo.json`, `product.pla-azul.json`, `product.pla-blanco.json`, `product.pla-celeste.json`, `product.pla-dorado.json`, `product.pla-gris.json`, `product.pla-nanocobre.json`, `product.pla-negro.json`, `product.pla-rojo.json`, `product.pla-rosado.json`, `product.pla-transparente.json`, `product.pla-verde.json` |

### Paginas informativas

| Template | Ruta o estado |
|---|---|
| `page.json` | Generica; no prueba una pagina concreta. |
| `page.nosotros.json` | `/pages/nosotros` observado en sitemap. |
| `page.premios_y_historia.json` | `/pages/premios` observado en sitemap. |
| `page.mejor_filamento.json` | `/pages/como-determinar-cual-es-el-mejor-filamento-pla` observado en sitemap. |
| `page.contact.json` | No debe convertirse automaticamente en `/pages/contactanos`; esa URL fue observada como 404. |


### Blogs y articulos

- `article.json` es generico.
- `article.calibracion_automatica.json`, `article.config_repetierhost.json`, `article.meshmixer.json` y `article.openscad.json` contienen los cuatro articulos del curso.
- Los articulos de noticias y articulos generales del sitemap pueden resolver mediante el template generico, pero su contenido no debe deducirse del nombre del template.
- Los bloques de video, Drive, Autodesk, Wayback y enlaces externos necesitan comprobacion independiente antes de publicarse.





## CSS reutilizable, adaptable y retirado

### Reutilizable o adaptable

| Grupo | Archivos o patrones | Decision |
|---|---|---|
| Base | `base.css` | Reutilizar como referencia principal, sustituyendo variables Liquid por valores estaticos. |
| Shell | `component-list-menu.css`, `component-menu-drawer.css`, `component-search.css`, `component-list-social.css`, `section-footer.css` | Reutilizar y adaptar a menus y enlaces locales. |
| Portada | `component-slideshow.css`, `component-slider.css`, `section-image-banner.css`, `section-rich-text.css`, `section-multicolumn.css`, `section-collection-list.css`, `collage.css`, `component-image-with-text.css` | Reutilizar solo los bloques que existan en el contenido aprobado. |
| Catalogo | `component-card.css`, `component-article-card.css`, `component-collection-hero.css`, `template-collection.css`, `component-price.css`, `section-main-product.css`, `section-main-page.css`, `section-main-blog.css`, `section-blog-post.css`, `section-related-products.css` | Adaptar para contenido estatico y estado de escaparate. |
| Contenido | `component-accordion.css`, `collapsible-content.css`, `component-pagination.css`, `component-show-more.css`, `component-modal-video.css`, `component-deferred-media.css`, `video-section.css`, `share` visual | Reutilizar si el bloque sigue publicado y se revisan sus dependencias. |
| Footer opcional | `component-newsletter.css`, `newsletter-section.css`, `component-list-payment.css` | Solo estilos; no conservar submit, pagos ni endpoints Shopify. |

### Retirado o no trasladable sin necesidad confirmada

- `component-cart.css`, `component-cart-items.css`, `component-cart-drawer.css`, `component-cart-notification.css`, `component-totals.css`, `component-discounts.css` y `component-loading-overlay.css` asociados al carrito.
- `component-pickup-availability.css`, `component-complementary-products.css`, `component-rating.css` cuando dependan de pickup, recomendaciones o Loox.
- `quick-add.css`, `customer.css`, `template-giftcard.css` y `section-password.css`.
- `component-product-model.css` y `component-model-viewer-ui.css` salvo que se confirme un modelo 3D local; el inventario actual no demuestra esa necesidad.
- Estilos de localization y payment si los selectores y pagos no se conservan.



## JavaScript reutilizable, adaptable y retirado

### Reutilizable o adaptable

- `details-disclosure.js` para dropdowns y disclosure accesible.
- `details-modal.js` para modal, foco y Escape.
- `media-gallery.js`, `product-modal.js` y `magnify.js` para galeria y zoom, despues de eliminar IDs, rutas y datos Shopify innecesarios.
- `show-more.js` para contenido largo si se confirma su uso.
- `share.js` si el boton de compartir se mantiene.
- `search-form.js`, `main-search.js` y `predictive-search.js` solo como referencia de interaccion; la busqueda final debe consultar datos estaticos locales, no `routes.predictive_search_url`.
- `global.js`, `constants.js` y `pubsub.js` requieren lectura de dependencias antes de reutilizarse; no deben copiarse por ser scripts globales del tema.


### Retirado

- `cart.js`, `cart-drawer.js`, `cart-notification.js`, `quick-add.js`, `product-form.js`, `product-info.js` y `pickup-availability.js` por carrito, compra, inventario, pickup o checkout.
- `customer.js`, `recipient-form.js` y `localization-form.js` por cuenta, gift cards o formularios Shopify no requeridos.
- `facets.js` si solo filtra colecciones mediante endpoints Shopify.
- `password-modal.js` y `theme-editor.js` por password/editor de Shopify.
- `product-model.js` salvo una decision posterior sobre modelos 3D locales.
- `yoast-active-script.js` hasta verificar su proposito y dependencia; no es una base necesaria del escaparate.


## Dependencias externas y de plataforma

| Dependencia | Evidencia en la fuente | Tratamiento documental |
|---|---|---|
| Liquid y objetos Shopify | `shop`, `product`, `collection`, `customer`, `routes`, `settings`, `content_for_header`, `content_for_layout`, `asset_url`, `image_url`, forms y filtros | Reemplazar por datos estaticos; no copiar expresiones Liquid a Astro. |
| CDN de Shopify | Preconnect a `cdn.shopify.com`, fuentes en `fonts.shopifycdn.com`, imagenes `shopify://shop_images` y URLs `cdn.shopify.com` en el HTML publico | Localizar cuando exista recurso y permiso; registrar placeholder si falta; no dejar dependencia silenciosa. |
| Loox | Bloques `shopify://apps/loox-product-reviews-photos/...`, `shop.metafields.loox`, `global_html_head`, `global_html_body` y rating en tarjetas | Retirar del escaparate o reemplazar solo con contenido estatico verificado; no simular resenas. |
| Banana Stand | `snippets/banana-stand-*.liquid` y render en `theme.liquid` | Retirar; no hay funcion confirmada necesaria para el escaparate. |
| Google Tag Manager | `GTM-5VNX4MX` en `<script>` y `<noscript>` de `layout/theme.liquid` | Decision pendiente del proposito y consentimiento; no copiar automaticamente. |
| Google verification | Meta `google-site-verification` observado en HTML publico, pero no localizado en el ZIP con la busqueda realizada | Conservar solo tras identificar el origen y confirmar el valor. |
| Videos externos | 13 URLs unicas de YouTube en articulos, premios y producto Axis One | Revisar disponibilidad, consentimiento, miniatura y dependencia de terceros antes de publicar. |
| Drive, Autodesk y Wayback | Enlaces dentro de articulos `meshmixer`, `openscad` y `config_repetierhost` | Verificar destino y permanencia; no convertirlos en dependencias obligatorias sin decision. |



## Valores visuales activos

Los valores siguientes se tomaron de `config/settings_data.json`, no de `settings_schema.json`:

| Clave | Valor activo |
|---|---|
| `logo` | `shopify://shop_images/print3x_37f89bc9-34db-41c5-9279-6da27da882be.png` |
| `logo_width` | `200` |
| `favicon` | `shopify://shop_images/Favicon_73f39bdd-9378-4f51-9ccc-73019a4e9071.png` |
| `colors_accent_1` | `#CE1870` |
| `colors_accent_2` | `#AB0C6F` |
| `colors_text` | `#941081` |
| `colors_background_1` | `#F7F7F7` |
| `colors_background_2` | `#FFFFFF` |
| `colors_solid_button_labels` | `#F7F7F7` |
| `colors_outline_button_labels` | `#CE1870` |
| `type_header_font` | `futura_n4` |
| `type_body_font` | `futura_n4` |
| `heading_scale` | `130` |
| `body_scale` | `110` |
| `page_width` | `1200` |
| `spacing_sections` | `0` |
| `spacing_grid_horizontal` | `28` |
| `spacing_grid_vertical` | `28` |
| `buttons_border_thickness` / `buttons_border_opacity` | `1` / `100` |
| `buttons_radius` | `14` |
| `buttons_shadow_opacity` | `0` |
| `buttons_shadow_vertical_offset` / `buttons_shadow_blur` | `4` / `5` |
| `inputs_border_thickness` / `inputs_border_opacity` | `1` / `55` |
| `inputs_radius` | `26` |
| `variant_pills_border_thickness` / `variant_pills_border_opacity` | `1` / `20` |
| `variant_pills_radius` | `14` |
| `card_style` / `card_color_scheme` | `card` / `background-2` |
| `card_image_padding` / `card_text_alignment` | `0` / `center` |
| `card_border_thickness` / `card_border_opacity` | `1` / `100` |
| `card_corner_radius` / `card_shadow_opacity` | `14` / `10` |
| `card_shadow_vertical_offset` / `card_shadow_blur` | `4` / `10` |
| `collection_card_style` / `collection_card_color_scheme` | `card` / `background-1` |
| `collection_card_image_padding` / `collection_card_text_alignment` | `16` / `left` |
| `collection_card_corner_radius` / `blog_card_corner_radius` | `18` / `18` |
| `blog_card_style` / `blog_card_color_scheme` | `card` / `background-1` |
| `cart_type` | `drawer` |
| `predictive_search_enabled` | `true` |




## Menus no exportados

El ZIP solo conserva los identificadores `main-menu` y `footer`; no contiene la definicion administrativa de los menus, sus IDs de enlaces ni su historial. El rastreo del HTML publico observo la siguiente estructura, que debe tratarse como baseline y no como exportacion completa:

- `Productos`: `/collections/pla`, `/products/axis-one`, `/products/padi-superficie-de-impresion`.
- `Informacion`: `/blogs/curso_impresion_3d`, `/pages/como-determinar-cual-es-el-mejor-filamento-pla`, tres articulos enlazados y `/pages/tarifas-de-envio`.
- `Nosotros`: `/pages/nosotros`, `/pages/premios` y `/pages/contactanos`.
- `footer`: politicas de privacidad, terminos, reembolso y envio.
- Redes: Twitter, Facebook, Instagram, TikTok y YouTube.



## Riesgos y decisiones pendientes

1. **Plantilla no es URL:** existen templates de productos, colecciones, clientes, password y carrito sin prueba de publicacion actual.
2. **Slugs:** los guiones bajos de productos y blogs son datos publicos; no normalizarlos.
3. **Media:** 85 referencias Shopify unicas no tienen equivalente local confirmado; los cinco archivos `Hero_*.jpg` y `Categorias_1_filamentos_pla.jpg` estan disponibles, pero no se les asigna un nombre Shopify por semejanza visual.
4. **Identidad:** logo, favicon y Futura apuntan a Shopify y no existen como archivos locales entregados.
5. **Comercio:** carrito, checkout, cuentas, pickup, quick add, Loox, Banana Stand y formularios de cliente no son compatibles con el objetivo de escaparate sin comercio.
6. **Rutas:** el GET actual de sitemap devuelve 32 URLs incluyendo `/agents.md`. Las rutas vivas `/collections` y `/collections/all` se observaron fuera de los hijos actuales y requieren una decision explicita de inclusion en el sitemap objetivo.
7. **Externalidad:** videos, Drive, redes, formularios y GTM pueden cambiar, requerir consentimiento o fallar fuera de Shopify.
8. **Contenido visible:** el HTML publico muestra `NaN / de-Infinity` en la portada; no debe reproducirse como contenido valido sin una decision de correccion.
9. **SEO:** no se ha emitido una aprobacion de canonicals, metadata, sitemap objetivo, robots ni redirecciones para Astro.

## Criterio documental para desarrollo

Un recurso se puede portar cuando tiene una decision de uso, fuente, destino local o externo verificado y comportamiento de placeholder. Una clase o script se puede portar cuando no introduce una dependencia de Shopify no autorizada. Esta condicion aun no se cumple para todas las referencias del tema.
