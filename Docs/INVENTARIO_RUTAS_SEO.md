# Inventario persistente de rutas y SEO

**Dominio observado:** `https://www.print3x.cl`  
**Fecha de captura:** 2026-07-29  
**Politica objetivo inicial:** conservar slugs y URLs sin slash final; `trailingSlash: "never"` queda pendiente de prueba en hosting.  
**Estado:** matriz aprobada como entrada de desarrollo; las decisiones de lanzamiento y DNS siguen fuera de este inventario.

## Criterios de lectura

- `sitemap actual` significa que la URL aparece como `<loc>` en el GET realizado sobre el sitemap actual o uno de sus hijos.
- `baseline previo` conserva rutas observadas en el rastreo y en el registro de Tarea 0.2 aunque no aparezcan en el GET actual.
- `template` describe un archivo del ZIP, no una URL publicada.
- `conservar-controlada` significa que la URL no se debe perder, pero su salida, canonical o contenido requiere una implementacion explicitamente revisada.
- `auxiliar-controlada` significa que la ruta puede existir para no romper enlaces, pero no debe entrar al sitemap de contenido ni simular comercio o cuenta.
- Los estados de las URLs de sitemap se basan en el sitemap y el rastreo registrado; las rutas especiales indicadas en la solicitud se anotan con su resultado de prueba.

## Conteo del sitemap

El sitemap raiz actual enlaza:

- `sitemap_agentic_discovery.xml`.
- `sitemap_products_1.xml?from=5501355491485&to=7687592116381`.
- `sitemap_pages_1.xml?from=69447549085&to=93063807133`.
- `sitemap_collections_1.xml?from=211931136157&to=211931693213`.
- `sitemap_blogs_1.xml`.

El GET repetido devuelve 31 URLs de contenido mas `/agents.md`, es decir, 32 `<loc>` verificables. El registro de ejecucion existente de Tarea 0.2 declara el mismo conteo. `/collections` y `/collections/all` responden 200 y fueron observadas durante el rastreo, pero no aparecen como `<loc>` en los hijos actuales; se conservan como rutas adicionales fuera de las 32 filas del sitemap.

## Matriz principal: 32 filas del baseline persistente

### Portada

| URL | Fuente | Estado observado | Canonical observada | Decision | Notas |
|---|---|---:|---|---|---|
| `/` | sitemap actual | 200 | `https://www.print3x.cl/` | `conservar` | Portada publica; contiene slideshow, colecciones, compromisos y footer. |

### Productos: 13 URLs del sitemap

| URL | Fuente | Estado observado | Canonical | Decision | Template relacionado |
|---|---|---:|---|---|---|
| `/products/axis-one` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `conservar` | `product.impresora-axis-one.json` |
| `/products/padi-superficie-de-impresion` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `conservar` | `product.superficie-padi.json` |
| `/products/pla_rojo` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `conservar` | `product.pla-rojo.json` |
| `/products/filamento_pla_verde` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `conservar` | `product.pla-verde.json` |
| `/products/filamento_pla_azul` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `product.pla-azul.json` |
| `/products/filamento_pla_blanco` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `product.pla-blanco.json` |
| `/products/filamento_pla_negro` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `product.pla-negro.json` |
| `/products/filamento_pla_gris` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `product.pla-gris.json` |
| `/products/filamento_pla_amarillo` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `product.pla-amarillo.json` |
| `/products/filamento_pla_celeste` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `product.pla-celeste.json` |
| `/products/pla_pantera_rosa` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `product.pla-rosado.json` |
| `/products/filamento_pla_transparente` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `product.pla-transparente.json` |
| `/products/filamento_pla_oro` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `product.pla-dorado.json` |

Los guiones bajos son parte del slug y no se deben normalizar. El estado 200 de una URL en sitemap no autoriza a conservar compra, inventario, pickup, Loox o checkout.

### Colecciones: 2 URLs del sitemap

| URL | Fuente | Estado observado | Canonical | Decision | Notas |
|---|---|---:|---|---|---|
| `/collections/pla` | sitemap actual | 200 | misma URL | `conservar` | Coleccion principal y pagina larga de caracteristicas PLA. |
| `/collections/impresoras-3d` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `conservar` | Coleccion de impresora y superficies. |

### Paginas: 5 URLs del sitemap

| URL | Fuente | Estado observado | Canonical | Decision | Notas |
|---|---|---:|---|---|---|
| `/pages/nosotros` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `conservar` | Template especializado `page.nosotros.json`. |
| `/pages/premios` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `conservar` | Incluye media historica y videos externos. |
| `/pages/como-determinar-cual-es-el-mejor-filamento-pla` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `conservar` | Pagina editorial larga con media pendiente. |
| `/pages/tarifas-de-envio` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `conservar-controlada` | Es destino de popups de producto; el contenido legal/comercial debe revisarse. |
| `/pages/decuento-por-post-en-rrss` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `conservar-controlada` | Se conserva el typo del slug; revisar vigencia del contenido. |

### Blogs y articulos: 10 URLs del sitemap

| URL | Fuente | Estado observado | Canonical | Decision | Template |
|---|---|---:|---|---|---|
| `/blogs/noticias` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `conservar` | Indice de blog. |
| `/blogs/articulos` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `conservar` | Indice de blog. |
| `/blogs/curso_impresion_3d` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `conservar` | Indice del curso; slug con underscore. |
| `/blogs/noticias/encuesta-sistema-operativo-y-software` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `conservar` | Articulo editorial. |
| `/blogs/articulos/los-mejores-disenos-stl-para-imprimir-esta-navidad` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `conservar` | Articulo editorial con media. |
| `/blogs/articulos/regalos-originales-para-el-14-de-febrero-dia-del-amor-y-la-amistad` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `conservar` | Articulo editorial. |
| `/blogs/curso_impresion_3d/impresion_3d_calibracion_automatica` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `conservar` | Video y media externa; slug con underscore. |
| `/blogs/curso_impresion_3d/meshmixer` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `conservar` | Video, Drive/Autodesk y media externa. |
| `/blogs/curso_impresion_3d/openscad` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `conservar` | Video y hoja de Google Drive. |
| `/blogs/curso_impresion_3d/configurar-repetier-host` | sitemap actual | 200 | misma URL, pendiente de nueva lectura de head | `conservar-controlada` | Video, archivos externos y PDF; revisar enlaces. |

La tabla de blogs contiene 3 indices y 7 articulos. Los articulos tienen slugs que deben conservarse literalmente.

### Discovery: una URL del sitemap agentic

| URL | Fuente | Estado observado | Canonical | Decision | Notas |
|---|---|---:|---|---|---|
| `/agents.md` | `sitemap_agentic_discovery.xml` y `robots.txt` | 200 | URL propia | `discovery-controlada` | Es documentacion para agentes, no una pagina comercial. Requiere decidir si se conserva como recurso publico separado y si se incluye en el sitemap objetivo. |

**Conteo de la matriz:** 1 portada + 13 productos + 2 colecciones + 5 paginas + 10 blogs/articulos + 1 discovery = 32 filas, todas observadas como `<loc>` en el sitemap actual.

## Rutas adicionales probadas o enlazadas

Estas rutas no deben confundirse con los templates del ZIP ni con las 32 filas anteriores.

| URL | Resultado de prueba o evidencia | Canonical/final | Decision | Tratamiento |
|---|---|---|---|---|
| `/collections` | 200 observado en rastreo; no aparece como `<loc>` en los hijos actuales | misma URL | `conservar-controlada` | Mantener la ruta publica sin asumir que deba entrar al sitemap objetivo. |
| `/collections/all` | 200 observado en rastreo; es destino de `Seguir comprando` y no aparece como `<loc>` en los hijos actuales | `https://www.print3x.cl/collections/all` | `conservar-controlada` | Mantener la ruta publica sin crear variantes de catalogo ni flujo de compra. |
| `/products/filamento-pla` | 200 observado; la respuesta termina en la experiencia de `/collections/pla` | `/collections/pla` | `conservar-controlada` | Mantener la observacion y decidir si Astro entrega contenido controlado, canonical a la coleccion o una respuesta especifica. No inventar un producto ni redirigir masivamente. |
| `/pages/contactanos` | 404 observado en rastreo actual | 404; no publicar canonical de contenido | `retirar-404-controlado` | El menu y el footer la enlazan; antes de cerrar se necesita decidir pagina informativa, redireccion especifica o 404 controlado para no dejar enlace interno roto. |
| `/products/filamento_tpu` | 404 en el baseline solicitado; un scrape posterior siguio una redireccion final a `/` y debe repetirse sin seguir redirects | 404 en el baseline | `retirar-404-controlado` | No mapearlo automaticamente a `product.filamento_flexible.json`; el template no prueba equivalencia de slug. |
| `/collections/accesorios-3d` | 404 observado | 404 | `retirar-404-controlado` | Existe `collection.accesorios-3d.json`, pero no hay coleccion publica confirmada. |
| `/blogs/articulos/tagged/impresion-3d` | Ruta mencionada en el inventario inicial; se observo 200 en la auditoria independiente y no aparece en el sitemap actual | Pendiente | `conservar-controlada` | Conservar fuera del sitemap editorial; no inventar contenido. |
| `/policies/privacy-policy` | 200 observado desde footer y rastreo | misma URL | `conservar-condicionada` | Mantener solo tras revisar vigencia legal en el sitio sin comercio. |
| `/policies/terms-of-service` | 200 observado desde footer y rastreo | misma URL | `conservar-condicionada` | Revisar que no describa funciones que Astro ya no ofrece. |
| `/policies/refund-policy` | Enlazada por footer; status completo pendiente de nueva auditoria | Pendiente | `revisar-condicionada` | No incorporarla al sitemap objetivo sin revisar contenido legal. |
| `/policies/shipping-policy` | Enlazada por footer y popups de producto; status completo pendiente de nueva auditoria | Pendiente | `revisar-condicionada` | Revisar si sigue siendo necesaria como pagina informativa. |
| `/cart` | 200 observado; carrito vacio y flujo Shopify visible | misma URL | `auxiliar-controlada` | No implementar carrito real; resolver con pagina informativa o estado controlado y excluir del sitemap de contenido. |
| `/customer_authentication/redirect` | Redirigia a autenticacion Shopify; la ruta fue retirada de Astro | No se genera | `retirar-controlado` | No se conserva la dependencia de cuenta ni se solicitan credenciales. Un futuro acceso de usuarios requiere una decision e implementacion separadas. |
| `/search` | 200 observado | misma URL | `auxiliar-controlada` | Conservar solo con busqueda estatica local; excluir del sitemap de contenido. |

## Templates sin URL publica confirmada

La siguiente lista es un control de no-publicacion automatica:

| Fuente del ZIP | Estado de URL | Decision |
|---|---|---|
| `product.producto-gran-descripcion.json` | No aparece como URL confirmada en los sitemaps observados | No generar hasta vincularlo a un slug verificado. |
| `product.filamento_flexible.json` | No equivale por si solo a `/products/filamento_tpu`, que fue 404 | No mapear; conservar solo como referencia de contenido pendiente. |
| `product.filamento-acrilico.json` | No aparece como URL publica confirmada | No generar sin ruta observada. |
| `product.pla-nanocobre.json` | No aparece como URL publica confirmada | No generar sin ruta observada. |
| `collection.accesorios-3d.json` | La ruta candidata fue 404 | Mantener fuera de rutas publicas; usar solo para investigar contenido historico. |
| `page.contact.json` | La URL enlazada `/pages/contactanos` fue 404 | No tratar el template como prueba de publicacion. |
| `templates/customers/*.json`, `cart.json`, `password.json`, `gift_card.liquid` | Son familias Shopify de cuenta, comercio o acceso restringido | No generar como funcionalidad comercial; resolver auxiliares de forma controlada. |
| `article.json`, `blog.json`, `collection.json`, `page.json`, `product.json` | Templates genericos | No crean rutas por si mismos; requieren datos y slugs aprobados. |

## Canonicals y metadata

- La configuracion objetivo debe usar `https://www.print3x.cl` como origen de canonical, Open Graph, Twitter y sitemap.
- Para las 32 filas principales, la URL canonica esperada es la misma ruta sin slash final, salvo los casos explicitamente anotados.
- El caso confirmado de `/products/filamento-pla` es excepcional: estado 200 observado con canonical `/collections/pla`; conservar esa evidencia y no normalizarla por nombre.
- Las respuestas 404 no deben entrar al sitemap ni recibir metadata de contenido de una ruta que no se publicara.
- `/cart`, `/search`, autenticacion, discovery y cualquier ruta de parametros deben quedar fuera del sitemap de contenido salvo decision posterior documentada.
- Los titulos, descriptions, `h1`, OG image y cantidad de imagenes de cada URL deben volver a medirse en la auditoria independiente. No se inventan valores ausentes en esta correccion.

## Exclusiones de sitemap y parametros

### Exclusiones por tipo de ruta

| Superficie | Regla documental |
|---|---|
| 404 y rutas retiradas | Excluir `/pages/contactanos`, `/products/filamento_tpu` y `/collections/accesorios-3d` hasta que exista una decision distinta. |
| Auxiliares | Excluir `/cart` y `/search` del sitemap de contenido; la ruta de autenticacion no se genera. |
| Discovery | `/agents.md` requiere una decision separada; no mezclarlo con el sitemap editorial por defecto. |
| Politicas | No excluir por defecto si siguen siendo publicas, pero exigir revision legal y metadata antes de incorporarlas al sitemap Astro. |
| Templates no publicados | No generar URLs solo porque exista `templates/*.json`. |
| Endpoints Shopify | Excluir `/cart.js`, `/checkout`, `/checkouts/`, `/orders`, `/account`, `/services`, `/sf_*`, `/recommendations/products` y superficies de admin. |

### Parametros y trampas de rastreo

- Los parametros `from` y `to` de las URLs de los hijos del sitemap son parametros del documento sitemap, no rutas de contenido.
- `?locale=`, `?region_country=` y otros parametros de autenticacion no deben crear variantes estaticas; la autenticacion es auxiliar y no indexable.
- `?q=` se conserva solo como entrada de busqueda local; no se generan paginas SEO por cada query.
- `?sort_by=`, `?filter=`, `?page=`, `?view=`, `?variant=`, `?selling_plan=`, `?oseid=`, `?ls=` y filtros de coleccion no deben crear URLs indexables.
- `utm_*`, `fbclid` y similares son tracking y no cambian canonical.
- `preview_theme_id` y `preview_script_id` son previews Shopify y deben excluirse.
- Se deben mantener fuera del sitemap las variantes con `+`, `%2B`, filtros combinados y cualquier patron que `robots.txt` desautoriza.

## Riesgos de cierre

1. El registro historico declara 44 rutas rastreadas/probadas; la matriz actual conserva las 32 URLs de sitemap y las rutas adicionales con sus decisiones. La metadata detallada se completara durante la auditoria SEO de etapas posteriores.
2. Hay enlaces activos a `/pages/contactanos` aunque esa URL responde 404.
3. Hay templates de producto y coleccion que no corresponden a URLs publicas confirmadas.
4. Las rutas con guiones bajos, la ortografia `decuento` y los slugs de blogs deben preservarse.
5. Politicas, discovery, carrito, busqueda, cuenta, GTM y enlaces externos requieren implementacion controlada en etapas posteriores.

## Criterio de uso

Esta matriz es una entrada aprobada para el desarrollo Astro. Las rutas auxiliares, politicas, discovery y enlaces rotos tienen tratamiento documentado y deberan verificarse nuevamente antes del lanzamiento.
