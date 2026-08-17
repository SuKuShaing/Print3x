# Manifiesto de media, fuentes y placeholders

**Fuente Shopify:** `zip_theme_shopify_estable/`  
**Fuente local:** `src/assets/`
**Fecha de inspeccion:** 2026-08-17
**Estado:** 109 recursos locales entregados e integrados desde `src/assets` mediante `<Picture>`: 30 recursos del header, index y colecciones, 44 imagenes de galerias de productos PLA, 16 imagenes editoriales de Axis One, 9 imagenes de su galeria principal y 10 recursos nuevos de Padi. El favicon usa un placeholder SVG local porque el recurso Shopify activo no tiene copia local confirmada. El resto mantiene faltantes y bloqueos de media para etapas posteriores.

## Resumen de conteos

| Categoria | Conteo | Alcance |
|---|---:|---|
| Imagenes locales entregadas e integradas | 109 | 30 recursos del header/index/colecciones, 44 imagenes de galerias PLA, 16 imagenes editoriales de Axis One, 9 imagenes de su galeria principal y 10 recursos nuevos de Padi. |
| Recursos `shopify://shop_images` unicos globales | 85 | Union de templates y `config/settings_data.json`. |
| Ocurrencias globales de referencias Shopify | 93 | Incluye repeticiones entre templates y configuracion. |
| Recursos distintos identificados en templates | 81 | Conteo de nombres unicos dentro de templates; el registro de ejecucion lo denomina referencias de templates. |
| Videos externos unicos | 13 | URLs YouTube encontradas en templates; algunas aparecen mas de una vez. |
| Fuentes Futura locales | 0 | La configuracion activa pide `futura_n4`, pero no hay archivos de fuente locales entregados. |
| Logo local confirmado | 1 | `src/assets/Logo Print3x.png`, integrado en el header. No se declara equivalencia automatica con la referencia Shopify activa. |
| Favicon local confirmado | 0 | El favicon de identidad activo sigue sin copia local; `/favicon.svg` es solo un placeholder técnico para evitar un 404. |
| Imagen social local confirmada | 0 | `/images/social-placeholder.svg` es un placeholder técnico; no reemplaza una imagen social de marca aprobada. |

La suma de 81 recursos distintos de templates y 4 referencias de configuracion da 85 recursos unicos globales. Las 93 ocurrencias no deben reducirse a 85 al migrar: una misma referencia puede usarse en varias paginas o bloques.

## Imagenes locales verificadas

Las dimensiones y el peso se obtuvieron leyendo los archivos locales entregados. El usuario confirmo que los cuatro `Hero_*.jpg` son las imagenes del hero del index y que las imagenes de categorias, iconos y bloques de producto corresponden a los usos descritos en los pedidos. Esta confirmacion define el rol de uso, no una equivalencia con un nombre de imagen Shopify.

| Archivo local | Ruta | Formato | Dimensiones | Peso | Uso confirmado | Alt | Equivalencia Shopify |
|---|---|---|---:|---:|---|---|---|
| `Hero_1.jpg` | `src/assets/index/Hero_1.jpg` | JPEG | `2500 x 2500` | `3513757` bytes | `index`, hero 1; confirmado por el usuario. | Pendiente: no se conserva texto no observado. | No asignada. |
| `Hero_2.jpg` | `src/assets/index/Hero_2.jpg` | JPEG | `2500 x 1146` | `1452158` bytes | `index`, hero 2; confirmado por el usuario. | Pendiente: no se conserva texto no observado. | No asignada. |
| `Hero_3.jpg` | `src/assets/index/Hero_3.jpg` | JPEG | `1799 x 927` | `809984` bytes | `index`, hero 3; confirmado por el usuario. | Pendiente: no se conserva texto no observado. | No asignada. |
| `Hero_4.jpg` | `src/assets/index/Hero_4.jpg` | JPEG | `1799 x 927` | `604403` bytes | `index`, hero 4; confirmado por el usuario. | Pendiente: no se conserva texto no observado. | No asignada. |
| `Categorias_1_filamentos_pla.jpg` | `src/assets/index/Categorias_1_filamentos_pla.jpg` | JPEG | `1000 x 750` | `450549` bytes | `index` y tarjeta/hero de la colección PLA; confirmado por el usuario. | Pendiente: no se conserva texto no observado. | No asignada. |

### Recursos adicionales entregados y verificados

| Archivo local | Ruta | Formato | Dimensiones | Peso | Uso confirmado | Alt | Equivalencia Shopify |
|---|---|---|---:|---:|---|---|---|
| `Logo Print3x.png` | `src/assets/Logo Print3x.png` | PNG | `2362 x 433` | `55421` bytes | `header`, logo de identidad; confirmado por el usuario. | Pendiente; el header usa `alt` vacio y su enlace conserva el nombre de Print3x. | No asignada. |
| `Categorias_2_impresora_3D_Axis_one.jpg` | `src/assets/index/Categorias_2_impresora_3D_Axis_one.jpg` | JPEG | `4928 x 3264` | `2509141` bytes | `index`, categoria de impresoras; tambien tarjeta de `/collections`; confirmado por el nombre y el pedido del usuario. | Pendiente: no se conserva texto no observado. | No asignada. |
| `Foto5.jpg` | `src/assets/index-products-axis-one/fotos producto/Foto5.jpg` | JPEG | Dimensiones del asset local | Pendiente de lectura | `collections/impresoras-3d`, hero junto al texto; confirmado por el usuario. | `Impresora 3D Profesional Axis One` | No se declara equivalencia automatica con `foto4_edited_-_Ligera.jpg`. |
| `Nuestros_compromisos_icono_1_carrete_filamento.avif` | `src/assets/index/Nuestros_compromisos_icono_1_carrete_filamento.avif` | AVIF | `150 x 150` | `5187` bytes | `index`, compromiso 1. | Pendiente: no se conserva texto no observado. | No asignada. |
| `Nuestros_compromisos_icono_2_impresion-3d.avif` | `src/assets/index/Nuestros_compromisos_icono_2_impresion-3d.avif` | AVIF | `150 x 150` | `2609` bytes | `index`, compromiso 2. | Pendiente: no se conserva texto no observado. | No asignada. |
| `Nuestros_compromisos_icono_3_linea-de-meta.avif` | `src/assets/index/Nuestros_compromisos_icono_3_linea-de-meta.avif` | AVIF | `150 x 150` | `6458` bytes | `index`, compromiso 3. | Pendiente: no se conserva texto no observado. | No asignada. |
| `Nuestros_compromisos_icono_4_pulgar_arriba.avif` | `src/assets/index/Nuestros_compromisos_icono_4_pulgar_arriba.avif` | AVIF | `150 x 150` | `6362` bytes | `index`, compromiso 4. | Pendiente: no se conserva texto no observado. | No asignada. |

**Regla:** los 109 recursos integrados tienen estado local `available`; todos se importan desde `src/assets/` y Astro genera sus rutas optimizadas bajo `/_astro/`. Los cuatro heroes tienen uso `index`; `Hero_3.jpg` se usa además como hero visible de `/collections/pla` por confirmación del usuario. Las dos imagenes de categorias tienen uso `index` y `collection` como tarjetas; los cuatro iconos tienen uso `index` en compromisos; los 18 recursos editoriales de PLA tienen uso `collection`; las 16 imagenes editoriales de Axis One tienen uso en sus bloques editoriales; las 9 imagenes de `fotos producto/` tienen uso en su galeria principal. `Foto5.jpg` se usa además como hero visible de `/collections/impresoras-3d` por confirmación del usuario. Ninguno se declara equivalente a `2052425b5f.jpg`, `Cinco_hermosos...`, `Banner_2...`, `Banner_3...` u otra referencia Shopify sin evidencia de origen. Las otras 85 referencias Shopify siguen pendientes; esta confirmacion no las convierte en disponibles.

### Galerias locales de productos PLA

La entrega `src/assets/index-products-pla/` contiene cuatro archivos JPG por carpeta. El registro `src/data/product-media.ts` asocia cada carpeta con el slug historico aprobado y la ruta de producto usa todas las imagenes como galeria. La proporcion esperada es `1:1`, el estado local es `available` y el `alt` permanece pendiente de revision porque no fue entregado.

| Ruta | Carpeta local | Imagenes | Proporcion | Estado |
|---|---|---:|---:|---|
| `/products/filamento_pla_amarillo` | `pla-amarillo` | 4 | `1:1` | `available` |
| `/products/filamento_pla_azul` | `pla-azul` | 4 | `1:1` | `available` |
| `/products/filamento_pla_blanco` | `pla-blanco` | 4 | `1:1` | `available` |
| `/products/filamento_pla_celeste` | `pla-celeste` | 4 | `1:1` | `available` |
| `/products/filamento_pla_gris` | `pla-gris` | 4 | `1:1` | `available` |
| `/products/filamento_pla_negro` | `pla-negro` | 4 | `1:1` | `available` |
| `/products/filamento_pla_oro` | `pla-dorado` | 4 | `1:1` | `available` |
| `/products/filamento_pla_transparente` | `pla-transparente` | 4 | `1:1` | `available` |
| `/products/filamento_pla_verde` | `pla-verde` | 4 | `1:1` | `available` |
| `/products/pla_pantera_rosa` | `pla-rosado` | 4 | `1:1` | `available` |
| `/products/pla_rojo` | `pla-rojo` | 4 | `1:1` | `available` |

El estado `pending` que permanece en el frontmatter de estos productos describe la equivalencia de las referencias del endpoint historico; no representa la disponibilidad de estas galerias locales, que queda registrada como `available` en `product-media.ts`.

### Bloques editoriales locales de Axis One

La entrega `src/assets/index-products-axis-one/` contiene 16 imagenes que corresponden, en el mismo orden de la ruta publicada, a los bloques `Objetivo`, `Volumen de impresión`, `Calibración Automática`, `Filamentos Rígidos y Flexibles`, `Padi`, `Pantalla Táctil`, `MCE`, `Alta Resolución`, `Separación de corrientes`, `Protección Electrica`, `Soporte Técnico Total`, `Software propio`, `S.O.C.`, `Tensores regulables`, `Velocidades de impresión` y `Capacitaciones`. El contenido las integra con `<Picture>` mediante `MediaPlaceholder.astro`.

| Uso | Archivos locales | Estado |
|---|---:|---|
| Bloques editoriales Axis One | 16 | `available`; alt revisado desde el HTML publicado. |
| Galería principal Axis One | 9 imagenes locales en `fotos producto/` | `available`; se renderizan como `<Picture>` y conservan el orden local aprobado: `foto4`, video, `foto2`, `foto1`, `7 Print3x`, `23 print3x`, `11 print3x`, `Foto5`, `Foto9`. `foto4` y `foto2` también se usan como imágenes primaria/secundaria de la tarjeta en `/collections/impresoras-3d`. |
| Video de presentación Axis One | 1 URL YouTube, en 2 bloques | `available`; se integra con `lite-youtube-embed`, carga el iframe solo al activarse y usa `youtube-nocookie`. |

### Bloques y galeria locales de Padi

La entrega `src/assets/index-products-padi/` contiene ocho imagenes para los bloques editoriales de Padi. `logo Axis One.png` ya estaba contabilizado como recurso de Axis One y `Emoji_hot_and_cold2.webp` ya estaba contabilizado en la coleccion PLA. La subcarpeta `fotos producto/` contiene las cuatro imagenes de la galeria principal. Todos los recursos se integran mediante `<Picture>` en `/products/padi-superficie-de-impresion`.

| Uso | Archivos locales | Proporcion | Estado |
|---|---:|---:|---|
| Galeria principal Padi | 4 | Segun dimensiones locales de cada fotografia; marco de galeria `3:2` | `available`; alt revisado como nombre descriptivo del producto. Dos fotografías también se usan como imágenes primaria/secundaria de la tarjeta en `/collections/impresoras-3d`. |
| Bloques editoriales Padi | 8 referencias, 6 nuevas | Se conserva el marco `image-with-text` de la plantilla | `available`; incluye Objetivo, Fácil Adhesión, Despegue flexible, Instalación Magnética, Comportamiento Térmico Inteligente, Único elemento, Impresiones perfectas e Historia. |

Los cuatro nombres de origen Shopify `DSC_0020.JPG-Ligera.jpg`, `DSC_0005.JPG-Ligera.jpg`, `DSC_0009.JPG-Ligera.jpg` y `DSC_0010.JPG-Ligera.jpg` permanecen como referencias historicas `pending` en `src/content/products/padi-superficie-de-impresion.md`; las cuatro fotografias nuevas entregadas son la galeria local aprobada y no se declaran equivalentes automaticas por nombre.

### Bloques editoriales locales de la coleccion PLA

La fuente de uso y orden es la ruta live `/collections/pla` y el template `templates/collection.coleccion-filamentos-pla.json`. Los archivos siguientes estan disponibles, se renderizan mediante `<Picture>` y conservan la proporcion esperada del bloque; el `alt` observado en el HTML live permanece sujeto a revisión editorial.

| Archivo local | Uso | Proporcion esperada | Estado / bloqueo |
|---|---|---:|---|
| `1,75.webp` | Caracteristica: grosor del filamento | `1500:1011` | `available`; sin bloqueo de media |
| `Cinco hermosos Rollos de filamento PLA y huevos Print3x Recortada Grande - Ligera.jpg` | Caracteristica: peso del rollo | `1500:1086` | `available`; sin bloqueo de media |
| `Cuatro Rollos de filamento PLA y huevos Print3x.jpg` | Caracteristica: metros del rollo | `1500:1500` | `available`; sin bloqueo de media |
| `cientifico-mezclando-liquidos_1423-1805_.webp` | Caracteristica: color homogeneo | `1500:999` | `available`; sin bloqueo de media |
| `Extrusor_Tapado_Print3x.avif` | Caracteristica: anti-atascos | `1500:993` | `available`; sin bloqueo de media |
| `Emoji_hot_and_cold2.webp` | Caracteristica: temperatura de extrusion | `1500:1169` | `available`; sin bloqueo de media |
| `Burbujas_en_el_filamento.avif` | Caracteristica: cero burbujas | `1500:1080` | `available`; sin bloqueo de media |
| `Check.webp` | Caracteristica: material no toxico | `1500:901` | `available`; sin bloqueo de media |
| `Emogiis.webp` | Caracteristica: material inocuo | `1500:1099` | `available`; sin bloqueo de media |
| `Filamento_PLA_roto_autoquiebre.webp` | Caracteristica: sin auto-quiebre | `1500:946` | `available`; sin bloqueo de media |
| `Biodegradable.webp` | Caracteristica: biodegradabilidad | `1500:900` | `available`; sin bloqueo de media |
| `makerbot_mp06591_10_pack_bundle_true_col.webp` | Caracteristica: filamento estandarizado | `1500:665` | `available`; sin bloqueo de media |
| `Dimensiones del Rollo.jpg` | Caracteristica: dimensiones del rollo | `1500:1858` | `available`; sin bloqueo de media |
| `18-04-2015-gato-olfatear.webp` | Caracteristica: ausencia de olor | `1500:1125` | `available`; sin bloqueo de media |
| `lente2-20150919-161405.webp` | Caracteristica: proteccion UV | `1500:951` | `available`; sin bloqueo de media |
| `recycling-304974_960_720.webp` | Caracteristica: reciclaje | `1500:876` | `available`; sin bloqueo de media |
| `hidrolisis.webp` | Caracteristica: baja hidrolisis | `1500:735` | `available`; sin bloqueo de media |
| `Badge-garantia-dorado.webp` | Caracteristica: garantia | `1500:1182` | `available`; sin bloqueo de media |

La imagen principal Shopify `2052425b5f.jpg` sigue siendo `pending` en `src/content/collections/pla.md`; el uso de `Hero_3.jpg` es una decision local confirmada y no una equivalencia automatica.

## Referencias Shopify unicas: 85

La lista siguiente asigna cada recurso a una fuente principal para evitar duplicarlo en el inventario de 85. Las apariciones adicionales se detallan despues.

Cada nombre listado corresponde a la referencia `shopify://shop_images/<nombre>`; se omite el prefijo repetido solo para mantener la matriz legible.

### Configuracion activa: 4

- `Banner_3_V2_-_Ligera.jpg`
- `Favicon_73f39bdd-9378-4f51-9ccc-73019a4e9071.png`
- `print3x_37f89bc9-34db-41c5-9279-6da27da882be.png`
- `print3x_logos_de_seguridad_con_norton_8fe9c9fd-df41-4e2d-a6c9-7d0553b6820a.png`

Fuente: `config/settings_data.json`. El favicon activo no tiene copia local confirmada. El logo entregado esta integrado en el header, pero no se declara equivalente automatico a la referencia Shopify activa.

### `templates/article.calibracion_automatica.json`: 4

- `Diagrama_de_Conexion.jpg`
- `Miniatura_autoleveling_1.jpg`
- `Miniatura_Autoleveling_2.jpg`
- `Miniatura_Autoleveling_3.jpg`

### `templates/article.config_repetierhost.json`: 1

- `Minitura_configurar_Repetier.jpg`

### `templates/article.meshmixer.json`: 5

- `Base_y_Tip.jpg`
- `Miniatura_guia.jpg`
- `Miniatura_para_instalar_el_Meshmixer.jpg`
- `Miniatura_soportes_en_arbol_con_meshmixer.jpg`
- `Tip_Post_y_Base_Diameter.jpg`

### `templates/article.openscad.json`: 1

- `Miniatura_OpenSCAD_y_GPT4.jpg`

### `templates/collection.coleccion-filamentos-pla.json`: 18

- `1_75_mm_de_diametro_FF_-_Ligera.png`
- `2_Extrusor_Tapado_Print3x.png`
- `Badge-garantia-dorado.png`
- `baja_hidrolisis.png`
- `Biodegradable.png`
- `Burbujas_en_el_filamento.png`
- `Check.png`
- `cientifico-mezclando-liquidos_1423-1805.png`
- `Cinco_hermosos_Rollos_de_filamento_PLA_y_huevos_Print3x_Recortada_Grande_-_Ligera.jpg`
- `Cuatro_Rollos_de_filamento_PLA_y_huevos_Print3x_98ce26f8-05da-4515-8597-dd08f45b0bdc.jpg`
- `Dimensiones_del_Rollo_PLA.png`
- `Emogiis.png`
- `Emoji_hot_and_cold2.png`
- `Filamento_PLA_roto_autoquiebre.png`
- `Filamentos_Print3x.png`
- `Nariz_de_gato.png`
- `Reciclaje_Print3x.png`
- `Sol_dibujo.png`

### `templates/index.json`: 8

- `Banner_2_v2_-_Ligera.jpg`
- `Cinco_hermosos_Rollos_de_filamento_PLA_y_huevos_Print3x-HD.jpg`
- `Cuatro_Rollos_de_filamento_PLA_y_huevos_Print3x-HD.jpg`
- `icono_impresion-3d_print3x_printex_printec_print3c.png`
- `icono_linea-de-meta_print3x_printex_printec_print3c.png`
- `icono_mejor-vendido_print3x_printex_printec_print3c.png`
- `La_impresion_3d_te_lleva_al_futuro_1.jpg`
- `logo_carrete_filamento_print3x_printex_printec_print3c_2b02e2b7-6a94-4de0-b24b-bfc46183c487.png`

### `templates/page.mejor_filamento.json`: 11

- `Cambio_de_tono_filamento_PLA_Print3x_-_Ligera.jpg`
- `Compracion_de_diametros_de_PLA.jpg`
- `Filamento_PLA_con_diametro_mayor_al_dicho.jpg`
- `Filamento_PLA_con_grumos.jpg`
- `Filamento_roto_autoquiebre_-_Ligera.jpg`
- `Grafico_de_distribucion_de_los_diametros_del_Filamento_PLA_a_lo_largo_con_margenes_con_tolerancia.jpg`
- `Grafico_de_distribucion_de_los_valores_a_lo_largo_con_margenes.jpg`
- `Hilos_o_voladisos_en_la_impresion_3D_-_Ligera.jpg`
- `Huevo_Dorado_PLA_Print3x.jpg`
- `Impresion_3D_con_burbujas_-_Ligera.jpg`
- `Tolerancia_de_los_Filamento_PLA_2.jpg`

### `templates/page.nosotros.json`: 1 recurso nuevo

- `Toa_Diego_Seba_Pini_-_recortado.jpg`

Los iconos y el logo de carrete de esta plantilla ya estan listados bajo `index` porque son referencias repetidas.

### `templates/page.premios_y_historia.json`: 10

- `Aparicion_en_el_diario_el_mercurio_Crea_en_3D_Print3x.jpg`
- `Desafio_pais.jpg`
- `Ganadores_despega_usach_Crea_en_3D_Print3x.jpg`
- `Ganadores_en_Conrad_Waterloo_Crea_en_3D_Print3x.jpg`
- `Ganadores_en_Stanford_Crea_en_3D_Print3x.jpg`
- `maxresdefault_1.webp`
- `maxresdefault.webp`
- `Premios_Despega_Usach_Crea_en_3D_Print3x.jpg`
- `Primera_Impresora_3D_Crea_en_3D_Print3x.jpg`
- `Print3x_gana_la_competencia_de_Pitch.jpg`

### `templates/product.impresora-axis-one.json`: 17

- `Axis_One_300_mm_al_cubo.png`
- `Capacitaciones.png`
- `Chip_electrico.png`
- `electricidad_rayo2.png`
- `escudo.png`
- `Flexibles22.png`
- `impresion_3D_4.png`
- `logo_Axis_One_cuadrado.png`
- `OptoSensor4.png`
- `Padi_-_Ligera.png`
- `Pantalla2.png`
- `Portada_video_Axis_One.jpg`
- `rapidez-2.png`
- `reparacion2.png`
- `Sensor_con_ondas.jpg`
- `Slic3r_3.png`
- `Tensor3.png`

### `templates/product.superficie-padi.json`: 5 recursos nuevos

- `222.png`
- `223_-_Ligera2.png`
- `224_-_Ligera2.png`
- `225_-_Ligera2.png`
- `226_-_Ligera2.png`

`Emoji_hot_and_cold2.png`, `Filamentos_Print3x.png` y `logo_Axis_One_cuadrado.png` ya estan contabilizados en otras fuentes.

### Sin recurso nuevo en el conteo global

`templates/list-collections.json` repite `Cinco_hermosos_Rollos_de_filamento_PLA_y_huevos_Print3x-HD.jpg`. Las referencias repetidas de `page.nosotros.json` y `product.superficie-padi.json` tambien se conservan en el conteo de ocurrencias, aunque no agregan nombres al conjunto de 85.

## Ocurrencias por fuente

Esta tabla mantiene el conteo de apariciones encontrado en cada archivo. Los recursos repetidos entre filas se cuentan una vez por cada aparicion, por eso la suma es 93 y no 85.

| Fuente | Recursos distintos en el archivo | Ocurrencias |
|---|---:|---:|
| `config/settings_data.json` | 4 | 4 |
| `templates/article.calibracion_automatica.json` | 4 | 4 |
| `templates/article.config_repetierhost.json` | 1 | 1 |
| `templates/article.meshmixer.json` | 5 | 5 |
| `templates/article.openscad.json` | 1 | 1 |
| `templates/collection.coleccion-filamentos-pla.json` | 18 | 18 |
| `templates/index.json` | 8 | 8 |
| `templates/list-collections.json` | 1 | 1 |
| `templates/page.mejor_filamento.json` | 11 | 12 |
| `templates/page.nosotros.json` | 4 | 4 |
| `templates/page.premios_y_historia.json` | 10 | 10 |
| `templates/product.impresora-axis-one.json` | 17 | 17 |
| `templates/product.superficie-padi.json` | 8 | 8 |
| **Total global** | **85 en la union** | **93** |

Repeticiones relevantes:

- `Filamento_PLA_con_diametro_mayor_al_dicho.jpg` aparece dos veces en `page.mejor_filamento.json`.
- `Cinco_hermosos_Rollos_de_filamento_PLA_y_huevos_Print3x-HD.jpg` aparece en `index.json` y `list-collections.json`.
- `icono_linea-de-meta...`, `icono_mejor-vendido...` y `logo_carrete...` se repiten entre `index.json` y `page.nosotros.json`.
- `Emoji_hot_and_cold2.png` y `Filamentos_Print3x.png` se repiten entre la coleccion PLA y Padi.
- `logo_Axis_One_cuadrado.png` se repite entre Axis One y Padi.

## Proporciones y regla de placeholder

No todas las referencias Shopify tienen dimensiones locales verificables. El placeholder debe seguir el contrato del bloque, no el nombre del archivo:

| Bloque | Proporcion o comportamiento requerido | Regla |
|---|---|---|
| Slideshow de portada | Mantener la proporcion del recurso del slide y el recorte responsive configurado por el tema | No sustituir automaticamente por un `Hero_*.jpg`; si falta el original, reservar el mismo rectangulo. |
| Tarjeta de coleccion | Mantener el ratio del card y `show_collection_image` | Reservar caja de imagen aunque el recurso falte. |
| Tarjeta de producto | Mantener `image_ratio: portrait` donde lo define la coleccion | Usar placeholder portrait con `width` y `height` estables. |
| Image with text | Mantener `height: adapt` y el lado de imagen definido por el bloque | No colapsar la seccion por ausencia de media. |
| Galeria de producto | Mantener orden, miniaturas, `media_position: left` y area de zoom si procede | Placeholder por cada media faltante; no inventar una foto de producto. |
| Video externo | Reservar area de cover y boton accesible | No descargar ni asignar miniaturas no verificadas. |
| Imagen editorial | Preservar ancho de contenido y ratio de la imagen fuente si se conoce | Si no hay dimensiones, registrar pendiente antes de fijar un ratio arbitrario. |

Las dimensiones conocidas de los archivos locales pueden usarse para sus propios bloques cuando el contenido confirme el destino. No deben utilizarse para inferir equivalencias Shopify.

## Optimizacion con Astro

Los 109 recursos disponibles se importan desde `src/assets/` como metadata de imagen de Astro. `MediaPlaceholder.astro`, las galerias de producto y el logo del header usan `<Picture>` con fuentes `avif` y `webp`, fallback del formato original, `sizes` y variantes `srcset` para `390`, `768`, `1024` y `1440` px. Las variantes no amplian archivos que sean menores que cada breakpoint; los placeholders de media pendiente no se transforman ni se sustituyen.

## Prioridad de obtencion e integracion

| Prioridad | Recursos | Motivo |
|---|---|---|
| P0 | Favicon y Futura | Identidad global, head y similitud visual; el logo local ya fue integrado, pero el favicon y la fuente siguen pendientes. |
| P1 | Media de portada y categorias | Afecta la primera impresion y la geometria del home; los 11 recursos iniciales y las 44 imagenes PLA ya tienen rol confirmado o documentado. |
| P1 | Media de las 31 rutas de contenido del sitemap | Afecta producto, coleccion, paginas y articulos que concentran SEO; las 11 galerias PLA ya fueron integradas. |
| P2 | Media larga de la coleccion PLA y paginas tecnicas | Muchos bloques; requieren placeholders consistentes y orden estable. |
| P2 | Galerias de Axis One, Padi y articulos del curso | Contenido historico con varias imagenes y videos externos. |
| P3 | Media secundaria de premios, iconos repetidos y recursos no visibles en rutas aprobadas | Resolver despues de confirmar que la ruta se conserva. |

## Videos externos: 13 unicos

| Plantilla o fuente | URL externa | Uso |
|---|---|---|
| `article.calibracion_automatica.json` | `https://youtu.be/HSaMxLdqlrI` | Video de conexion de electronica. |
| `article.calibracion_automatica.json` | `https://youtu.be/0v7mVu4zT-c` | Video adicional del articulo. |
| `article.calibracion_automatica.json` | `https://youtu.be/LLit5ohZNTQ` | Video adicional del articulo. |
| `article.config_repetierhost.json` | `https://youtu.be/ENIRcInoUVI` | Configuracion de Repetier Host. |
| `article.meshmixer.json` | `https://youtu.be/bV8uAMO8r9o` | Instalacion de Meshmixer. |
| `article.meshmixer.json` | `https://youtu.be/FUP4YUVHpK4` | Video del articulo. |
| `article.meshmixer.json` | `https://youtu.be/SMMqAksHSOc` | Video del articulo. |
| `article.openscad.json` | `https://youtu.be/TscVG74uTUA` | OpenSCAD y GPT4. |
| `page.premios_y_historia.json` | `https://www.youtube.com/watch?v=xRHSvi9GFfE` | Mini documental; aparece en mas de un bloque. |
| `page.premios_y_historia.json` | `https://youtu.be/6wg21oH6Pas?si=fXC5L7PXuhrYPWOZ` | Contenido historico. |
| `page.premios_y_historia.json` | `https://youtu.be/aMgsiajRdcY` | Contenido historico. |
| `page.premios_y_historia.json` | `https://youtu.be/BgAuIucQkG0?si=TS3oib75ANJ5lxrq` | Contenido historico. |
| `product.impresora-axis-one.json` | `https://youtu.be/J-rV8g_5Te4` | Video de Axis One. |

Se deben revisar disponibilidad, privacidad, miniaturas, carga externa, accesibilidad, consentimiento y comportamiento offline antes de conservarlos. El conteo de 13 es de URLs unicas, no de bloques de video.

## Futura, logo y favicon

- `type_header_font` y `type_body_font` son `futura_n4`.
- No hay archivos Futura en `src/assets/` ni un directorio de fuentes local entregado.
- El logo activo historico es `print3x_37f89bc9-34db-41c5-9279-6da27da882be.png` y el favicon activo es `Favicon_73f39bdd-9378-4f51-9ccc-73019a4e9071.png`, ambos bajo `shopify://shop_images`. El archivo local `Logo Print3x.png` fue entregado por el usuario e integrado en el header sin declararlo equivalente por nombre.
- No se deben fabricar versiones locales ni sustituir Futura por una fuente generica sin decision visual y de licencia.

## Bloqueos de media

1. No existe recurso local equivalente confirmado para 85 referencias Shopify unicas.
2. No se puede mapear ningun `Hero_*.jpg` a una referencia Shopify solo por el nombre o la apariencia.
3. El favicon y las fuentes Futura requieren entrega o decision de uso de CDN con licencia y disponibilidad; el logo local ya esta integrado, pero su equivalencia historica Shopify no esta probada.
4. Las dimensiones esperadas de la mayoria de recursos Shopify no estan disponibles localmente; deben conservarse desde el metadata de origen o dejarse como placeholder pendiente.
5. Videos, Drive, Autodesk, Wayback, redes y formularios son dependencias externas que necesitan una revision especifica.
6. No se puede declarar que todas las referencias tienen destino final hasta que la matriz SEO confirme que la plantilla que las usa sigue publicada.

## Criterio de aceptacion documental

El manifiesto deja cada referencia con un nombre de origen, una fuente de uso, un estado local o un bloqueo, una regla de placeholder y una prioridad. La integracion de media continuara en etapas posteriores mediante nuevos archivos, placeholders o decisiones explicitas por dependencia.
