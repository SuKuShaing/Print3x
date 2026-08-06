# Plan maestro: migracion de Print3x desde Shopify a Astro

**Proyecto:** Print3x
**Dominio de produccion:** `https://www.print3x.cl/`
**Fecha de creacion:** 2026-07-29
**Estado:** planificacion y preparacion de fuentes

## 1. Objetivo

Migrar la web publica de Print3x desde Shopify a un sitio estatico construido con Astro, conservando:

- La apariencia visual actual en desktop y mobile.
- El contenido textual y las imagenes disponibles.
- El HTML renderizado y las clases CSS siempre que sea razonable.
- Las rutas publicas actuales y sus slugs.
- Los titulos, metadescripciones, canonicals, Open Graph, Twitter Cards y datos estructurados relevantes.
- El posicionamiento organico conseguido por las URLs existentes.

El sitio final sera un escaparate historico y de portafolio. No tendra comercio electronico, carrito, checkout ni cuentas de cliente.

## 2. Decisiones confirmadas

- El framework sera Astro.
- La salida sera estatica, sin servidor de aplicacion y sin base de datos.
- El despliegue final sera en Cloudflare Pages.
- El cambio de produccion se hara cambiando DNS en Cloudflare, una vez terminadas las pruebas.
- Shopify debe permanecer activo hasta validar el nuevo sitio y completar el cambio de DNS.
- No se deben crear URLs nuevas para reemplazar URLs existentes.
- Los productos se conservaran como contenido historico o de muestra, normalmente mostrando su estado agotado o sin accion de compra.
- No se deben inventar imagenes faltantes.
- Cuando falte una imagen se debe conservar el bloque, el espacio y la proporcion visual mediante un placeholder o estado de media pendiente.
- El DNS no debe modificarse hasta que exista una autorizacion explicita para la etapa de despliegue.

## 3. Fuentes disponibles

### 3.1 Tema Shopify

El tema extraido esta en:

```text
zip_theme_shopify_estable/
```

El tema corresponde a **Refresh 9.0.0** y contiene fuentes suficientes para una migracion visual fiel:

- `layout/theme.liquid`: documento HTML base, head, scripts globales, header/footer y `MainContent`.
- `config/settings_data.json`: valores activos del tema.
- `config/settings_schema.json`: definicion de configuraciones.
- `assets/`: CSS, JavaScript, iconos y recursos del tema.
- `sections/`: secciones Liquid reutilizadas por las plantillas.
- `snippets/`: fragmentos Liquid, iconos, tarjetas, galeria y componentes de producto.
- `templates/`: plantillas JSON y Liquid de portada, colecciones, productos, paginas, blogs, articulos, carrito, clientes y error 404.
- `locales/`: textos y traducciones del tema.

El tema incluye logica especifica de Shopify que no debe trasladarse sin revisar:

- `content_for_header` y `content_for_layout`.
- Objetos `shop`, `product`, `collection`, `customer`, `routes` y `settings`.
- Carrito, checkout, disponibilidad de retiro y formularios de cliente.
- App embeds de Loox y snippets `banana-stand`.
- Scripts de administracion o editor visual de Shopify.
- Referencias a `cdn.shopify.com`, `fonts.shopifycdn.com` y filtros Liquid de imagenes.

La apariencia y las clases utiles se pueden conservar; la logica comercial debe reemplazarse por datos estaticos o eliminarse.

### 3.2 Imagenes disponibles

La carpeta local de imagenes es:

```text
src/assets/
```

Por ahora hay estos recursos de la portada:

```text
src/assets/index/Hero_1.jpg
src/assets/index/Hero_2.jpg
src/assets/index/Hero_3.jpg
src/assets/index/Hero_4.jpg
src/assets/index/Categorias_1_filamentos_pla.jpg
```

El resto de fotografias se incorporara progresivamente. La implementacion debe tolerar que una imagen aun no exista y mostrar un espacio de media con la misma proporcion, `width`, `height` y comportamiento responsive previsto.

### 3.3 Configuracion visual detectada

Los valores activos de `settings_data.json` que deben considerarse fuente de verdad visual incluyen:

- Logo Print3x y favicon.
- Color de acento principal: `#CE1870`.
- Segundo color de acento: `#AB0C6F`.
- Color de texto: `#941081`.
- Fondo principal: `#F7F7F7`.
- Segundo fondo: `#FFFFFF`.
- Tipografia configurada: Futura para encabezados y cuerpo.
- Ancho de pagina: `1200px`.
- Escala de cuerpo: `110%`.
- Escala de encabezados: `130%`.
- Radio de botones: `14px`.
- Tarjetas con borde, radio y sombra segun la configuracion activa.
- Grid desktop y mobile segun `spacing_grid_horizontal` y `spacing_grid_vertical`.

Estos valores no deben reemplazarse por valores genericos de Astro o de otro kit visual.

## 4. Inventario de rutas y contenido

La lista de abajo es el inventario inicial observado en el sitemap, los enlaces publicos y el tema. Antes del lanzamiento se debe volver a rastrear Shopify y producir una matriz definitiva de URLs.

### 4.1 Rutas principales

- `/`
- `/collections`
- `/collections/all`
- `/collections/pla`
- `/collections/impresoras-3d`

### 4.2 Productos observados

- `/products/axis-one`
- `/products/padi-superficie-de-impresion`
- `/products/filamento_pla_celeste`
- `/products/filamento_pla_azul`
- `/products/filamento_pla_blanco`
- `/products/filamento_pla_transparente`
- `/products/filamento_pla_negro`
- `/products/filamento_pla_verde`
- `/products/filamento_pla_amarillo`
- `/products/filamento_pla_oro`
- `/products/pla_rojo`
- `/products/pla_pantera_rosa`
- `/products/filamento_pla_gris`

El tema contiene plantillas adicionales como `product.pla-nanocobre.json`, `product.filamento_flexible.json`, `product.filamento-acrilico.json` y `product.filamento-pla.json`. Esas plantillas no prueban que las URLs sigan publicadas. Se deben comparar con sitemap, enlaces y rastreo antes de decidir si se publican.

### 4.3 Paginas informativas

- `/pages/nosotros`
- `/pages/premios`
- `/pages/como-determinar-cual-es-el-mejor-filamento-pla`
- `/pages/tarifas-de-envio`
- `/pages/decuento-por-post-en-rrss`
- `/pages/contactanos`, observado en la navegacion publica aunque debe verificarse en el sitemap final.

### 4.4 Blogs y articulos

Indices de blog:

- `/blogs/noticias`
- `/blogs/articulos`
- `/blogs/curso_impresion_3d`

Articulos observados:

- `/blogs/noticias/encuesta-sistema-operativo-y-software`
- `/blogs/articulos/los-mejores-disenos-stl-para-imprimir-esta-navidad`
- `/blogs/articulos/regalos-originales-para-el-14-de-febrero-dia-del-amor-y-la-amistad`
- `/blogs/curso_impresion_3d/impresion_3d_calibracion_automatica`
- `/blogs/curso_impresion_3d/meshmixer`
- `/blogs/curso_impresion_3d/openscad`
- `/blogs/curso_impresion_3d/configurar-repetier-host`
- `/blogs/articulos/tagged/impresion-3d`, si continua siendo una URL publica util.

### 4.5 Politicas y rutas auxiliares

El footer enlaza las siguientes rutas y deben revisarse antes de cerrar Shopify:

- `/policies/privacy-policy`
- `/policies/terms-of-service`
- `/policies/refund-policy`
- `/policies/shipping-policy`
- `/cart`
- `/customer_authentication/redirect`
- `/search`

Las rutas de carrito, cliente y checkout no necesitan conservar funcionalidad comercial. Se debe decidir para cada una entre pagina informativa, redireccion 301 relevante o 404 controlado. No deben quedar enlaces internos rotos.

## 5. Arquitectura objetivo de Astro

La arquitectura propuesta separa plantilla, contenido y rutas:

```text
src/
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── AnnouncementBar.astro
│   ├── ProductCard.astro
│   ├── CollectionCard.astro
│   ├── ProductGallery.astro
│   ├── ShowcaseButton.astro
│   └── MediaPlaceholder.astro
├── content/
│   ├── products/
│   ├── collections/
│   ├── pages/
│   └── blog/
├── layouts/
│   └── SiteLayout.astro
├── pages/
│   ├── index.astro
│   ├── collections/
│   │   ├── [slug].astro
│   │   ├── all.astro
│   │   └── index.astro
│   ├── products/[slug].astro
│   ├── pages/[slug].astro
│   ├── blogs/[blog]/index.astro
│   ├── blogs/[blog]/[slug].astro
│   ├── policies/[slug].astro
│   ├── search.astro
│   └── 404.astro
└── styles/
    ├── base.css
    ├── components/
    └── print3x.css
public/
├── images/
├── fonts/
└── favicon.png
```

Los nombres pueden ajustarse durante la implementacion, pero la arquitectura debe conservar la separacion entre datos y componentes y debe generar las rutas publicas originales.

## 6. Reglas de implementacion visual

- Portar primero `base.css` y los CSS de componentes del tema que realmente se utilicen.
- Mantener nombres de clases del tema cuando ayuden a conservar el renderizado.
- Mantener `id="MainContent"`, el enlace de salto accesible y la estructura semantica principal.
- Reproducir header, menu desktop, menu mobile, announcement bar, footer, grids, tarjetas, galeria, slideshow y lightbox.
- Reemplazar valores Liquid por configuracion estatica tomada de `settings_data.json`.
- Mantener `lang="es"`, `theme-color`, favicon y tipografias.
- Localizar imagenes y fuentes que hoy dependan de Shopify cuando sea posible y exista permiso/licencia.
- No dejar URLs finales apuntando a `cdn.shopify.com` salvo una decision documentada.
- No copiar scripts de carrito, checkout, clientes o administracion si no tienen utilidad para el escaparate.
- No replicar errores propios de Shopify como contenido `NaN`, widgets bloqueados o llamadas a endpoints que ya no existiran.
- Los placeholders deben conservar el espacio visual y ser faciles de reemplazar por una imagen real sin modificar la plantilla.

## 7. Reglas de rutas y SEO

- El sitio debe usar `site: "https://www.print3x.cl"` en la configuracion de Astro.
- La politica de slash debe coincidir con Shopify. El estado inicial observado usa URLs sin slash final; se debe configurar y probar `trailingSlash: "never"` junto con el comportamiento del hosting.
- La configuracion de build y las reglas de Cloudflare Pages deben producir URLs limpias sin `.html` visible.
- Cada URL publica debe generar HTML estatico y devolver `200`.
- Cada pagina debe tener un solo `h1` razonable y los mismos titulos y descripciones SEO salvo cambios aprobados.
- Canonical, Open Graph y Twitter deben apuntar a `https://www.print3x.cl/...`, nunca al dominio de preview.
- El sitemap debe incluir solo URLs publicas definitivas.
- `robots.txt` debe apuntar al sitemap y no crear bloqueos accidentales.
- Las redirecciones deben ser especificas y permanentes cuando una URL no pueda conservarse.
- No se debe hacer una redireccion masiva de productos o articulos a `/`.
- Se debe mantener la verificacion de Google detectada en el tema y revisar el ID de Google Tag Manager antes de publicarlo.
- Se debe revisar el schema de producto, articulo, organizacion y breadcrumbs, eliminando datos de compra que ya no sean verdaderos.

## 8. Modo escaparate sin comercio

El sitio final debe parecer el mismo sitio en lo visual, pero no debe simular operaciones que ya no existen:

- Los botones de compra se muestran como agotados, informativos o deshabilitados.
- No se ejecutan llamadas a `/cart.js`, `/checkout`, `routes.cart_add_url` ni APIs de Shopify.
- El icono de carrito puede conservarse visualmente solo si no conduce a un flujo roto; alternativamente debe enlazar a una pagina informativa.
- El login de cliente no debe pedir credenciales ni apuntar a Shopify.
- La busqueda, si se conserva, debe buscar sobre el catalogo estatico local.
- Las galerias, menus, slideshow, enlaces y accordions deben seguir siendo funcionales.

## 9. Despliegue y cambio de DNS

1. Mantener Shopify activo y bajar el TTL del DNS solo cuando se acerque el cambio.
2. Crear un proyecto de Cloudflare Pages conectado al repositorio o a la fuente de despliegue elegida.
3. Configurar el comando de build, normalmente `npm run build`, y el directorio de salida `dist`.
4. Publicar primero en una URL de preview.
5. Marcar la preview como no indexable y probarla con el dominio real solo mediante configuracion controlada.
6. Validar rutas, capturas visuales, enlaces, sitemap, robots, imagenes y performance.
7. Registrar todos los DNS actuales antes de tocar el dominio, incluidos `MX`, `SPF`, `DKIM`, `DMARC`, subdominios y verificaciones.
8. Apuntar el dominio web a Cloudflare Pages sin modificar registros de correo.
9. Verificar certificado SSL, redireccion entre apex y `www`, codigos HTTP y sitemap.
10. Mantener un plan de rollback hacia Shopify durante las primeras horas o dias.
11. Cancelar o bajar Shopify solo cuando el dominio nuevo este estable y el respaldo del tema y contenido este guardado.

El dominio, el correo y cualquier servicio independiente del hosting pueden seguir generando costes aunque Shopify sea cancelado.

## 10. Criterio de terminado

La migracion se considera completa cuando:

- Todas las URLs publicas aprobadas tienen equivalente en Astro.
- No existen enlaces internos rotos.
- No existen dependencias obligatorias de Shopify en la red final.
- La apariencia coincide en las vistas desktop y mobile principales.
- Las imagenes disponibles se ven correctamente y las faltantes tienen placeholders correctos.
- Los titulos, metadescripciones, canonicals, sitemap y robots fueron revisados.
- Las paginas generan HTML estatico en `dist`.
- Cloudflare Pages entrega todas las rutas sin 404 inesperados.
- El dominio y `www` funcionan con HTTPS.
- El correo y los DNS no web siguen intactos.
- Se ejecutaron pruebas de accesibilidad, enlaces, performance y regresion visual.
- El cambio fue monitorizado en Search Console y no se cancelo Shopify antes de la validacion.

## 11. Pendientes para las siguientes sesiones

- Completar la carpeta `src/assets/`.
- Definir el repositorio y la estructura inicial del proyecto Astro.
- Confirmar si se conservara Google Tag Manager y con que objetivo.
- Resolver el comportamiento definitivo de `/cart`, `/search` y rutas de cliente.
- Preparar el inventario completo de rutas desde Shopify.
- Preparar el manifiesto de imagenes faltantes y sus proporciones.
- Instalar y configurar el MCP de Cloudflare cuando corresponda.
- Obtener acceso DNS unicamente para la etapa de despliegue.
