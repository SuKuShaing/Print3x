# Datos de contenido

Los registros futuros deben construirse a partir de `Docs/INVENTARIO_RUTAS_SEO.md`,
el tema de referencia y los assets locales aprobados. Esta carpeta contiene solo
contratos propios del escaparate estatico; no representa objetos de Shopify ni
flujos de carrito, compras o servicios externos.

Los slugs son datos inmutables: deben conservar exactamente su escritura de
origen, incluidos guiones bajos y errores historicos documentados. El contenido
puede declararse como `html` o `markdown`, y la media faltante debe usar un
recurso pendiente o `null` para que la plantilla conserve su espacio visual.

La metadata SEO tambien puede estar ausente: `title` y `description` aceptan
`null` u omision, y `seo` puede omitirse, ser `null` o ser un objeto parcial.
Esto refleja una ausencia en la fuente Shopify y no autoriza a inventar texto.

Una media `pending` puede no tener `alt` local mientras se espera la fuente o la
revision correspondiente. Una media local `available` puede conservar
`altStatus: 'pending'` cuando el archivo existe pero no se ha observado un texto
alternativo fiable; no se debe inventar ese texto. Una media lista para
publicacion usa `altStatus: 'reviewed'` y un `alt` revisado.
