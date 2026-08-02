# Resultados Etapa 2

**Etapa:** 2 - shell visual y sistema de estilos  
**Tarea de cierre:** 2.5 - verificacion obligatoria y remediacion de rutas controladas  
**Estado final:** **Aprobada con bloqueos documentados**
**Fecha:** 2026-07-30

## Resultado ejecutivo

La auditoria de rutas detecto inicialmente que el header y el footer enlazaban
`/search`, `/cart`, `/customer_authentication/redirect` y cuatro politicas que
todavia devolvian 404 en Astro. Se implementaron salidas estaticas controladas, sin
carrito, login, credenciales ni endpoints Shopify.

Las siete rutas explicitamente enumeradas en la solicitud responden 200 desde
`astro preview`. La solicitud las denomina nueve rutas, pero no enumera dos rutas
controladas adicionales; no se inventaron rutas para completar ese conteo.

La auditoria independiente final comprobo el shell, las rutas controladas, las
interacciones, los contratos SEO y la ausencia de dependencias comerciales. La
Etapa 2 queda **Aprobada con bloqueos documentados**. La prueba de URLs limpias en
Cloudflare, el favicon y las rutas de productos/colecciones corresponden a etapas
posteriores.

## Estado de tareas

| Tarea | Estado | Evidencia |
|---|---|---|
| 2.1 Portar configuracion visual y CSS base | Completada | `src/styles/base.css`, `src/styles/tokens.css`, componentes CSS y `SiteLayout.astro`; check y build previos registrados. |
| 2.2 Migrar header, announcement bar y navegacion | Completada con remediacion documentada | `Header.astro` conserva los enlaces y las paginas controladas ahora existen; la fila 2.2 del registro fue actualizada con esos archivos como evidencia. |
| 2.3 Migrar footer y enlaces globales | Completada | `Footer.astro` enlaza las cuatro rutas de politicas implementadas y no conserva newsletter, pagos ni apps Shopify. |
| 2.4 Migrar interacciones visuales sin comercio | Completada | `src/scripts/print3x-ui.ts` usa atributos `data-p3x-*`; la ruta de busqueda usa `data-p3x-search*` e indice JSON local vacio. |
| 2.5 Verificacion obligatoria y remediacion de rutas controladas | **Aprobada con bloqueos documentados** | Las siete URLs responden 200 en preview; la auditoria final confirmo noindex, canonicals, contenido de policies, ausencia de endpoints y shell funcional. |

## Rutas implementadas

| Ruta | Resultado | Tratamiento SEO y funcional |
|---|---:|---|
| `/search` | 200 | `Buscar – Print3x`, `noindex, nofollow`, formulario local con `data-p3x-search*`, indice vacio sin resultados inventados. |
| `/cart` | 200 | `Tu carrito – Print3x`, `noindex, nofollow`, estado vacio informativo y unico CTA interno a `/`; sin logica comercial ni servicios externos. |
| `/customer_authentication/redirect` | 200 | `Cuenta – Print3x`, `noindex, nofollow`, texto minimo indicando que no hay cuentas ni login; sin credenciales ni redirect externo. |
| `/policies/privacy-policy` | 200 | Titulo y canonical de la ruta, metadata `source` y `source-retrieved`; cuerpo textual disponible en la fuente publica. |
| `/policies/terms-of-service` | 200 | Titulo y canonical de la ruta, metadata `source` y `source-retrieved`; cuerpo textual disponible en la fuente publica. |
| `/policies/refund-policy` | 200 | Titulo y canonical de la ruta, metadata `source` y `source-retrieved`; cuerpo textual disponible en la fuente publica. |
| `/policies/shipping-policy` | 200 | Titulo y canonical de la ruta, metadata `source` y `source-retrieved`; cuerpo textual disponible en la fuente publica. |

No se agregaron rutas auxiliares adicionales. Las politicas no se marcaron como
pendientes porque las cuatro URLs publicas se pudieron consultar el 2026-07-30.
Si una fuente deja de estar disponible en una futura migracion, el contrato de
`src/data/policies.ts` permite marcar `contentStatus: 'pending'`; no se debe sustituir
ese estado por texto legal nuevo.

## Contenido de politicas usado

El contenido se guardo en `src/data/policies.ts` y se obtiene mediante
`getStaticPaths` en `src/pages/policies/[slug].astro`.

- `privacy-policy`: `https://www.print3x.cl/policies/privacy-policy`, titulo fuente `Política de privacidad`.
- `terms-of-service`: `https://www.print3x.cl/policies/terms-of-service`, titulo fuente `Términos del servicio`.
- `refund-policy`: `https://www.print3x.cl/policies/refund-policy`, titulo fuente `Política de reembolso`.
- `shipping-policy`: `https://www.print3x.cl/policies/shipping-policy`, titulo fuente `Política de envío`.

Se conservaron referencias históricas a Shopify, compras, envíos y cuentas porque
forman parte del texto fuente. Esas referencias son contenido estático y no
reactivan ninguna funcionalidad comercial.

## Archivos creados o modificados

### Creados

- `src/styles/components/controlled-routes.css`
- `src/data/policies.ts`
- `src/pages/search.astro`
- `src/pages/cart.astro`
- `src/pages/customer_authentication/redirect.astro`
- `src/pages/policies/[slug].astro`
- `Docs/RESULTADOS_ETAPA_2.md`

### Modificados

- `src/layouts/SiteLayout.astro`
- `Docs/ETAPAS_Y_TAREAS_MIGRACION.md`

`dist/` fue regenerado por el build y contiene las siete páginas controladas como
HTML estático. No se modificaron `zip_theme_shopify_estable/`,
`Imagenes_de_la_web/` ni DNS.

## Comandos y resultados

- `npm run check`: correcto; 0 errores, 0 warnings y 0 hints.
- `npm run build`: correcto; 8 páginas estáticas generadas, incluida la portada y las siete rutas controladas.
- `npm run preview -- --host 127.0.0.1`: servidor local iniciado en `http://127.0.0.1:4321`.
- Fetch desde preview de las siete rutas: todas devolvieron `200`, sin header `Location`.
- Inspección de HTML desde preview: títulos correctos, `noindex, nofollow` en search/cart/auth, canonical sin `.html` visible y metadata de fuente en las cuatro políticas.
- Inspección de autenticación: no hay campos de credenciales, `cart.js`, checkout, Shopify externo ni redirect externo.
- Inspección de búsqueda: existe el formulario y el script `print3x-ui.ts` cargado desde `/_astro/`; el índice JSON está vacío y no produce resultados inventados.

### Auditoria independiente final

- Confirmo que las siete rutas controladas responden `200` en preview.
- Confirmo `noindex, nofollow` en search, cart y autenticacion.
- Confirmo contenido, fuente y fecha en las cuatro policies.
- Confirmo que `src` no contiene endpoints ejecutables, requests Shopify, credenciales ni redirecciones externas.
- Confirmo que `.html` en `dist` es el formato esperado por `build.format: file`; la URL limpia se validara en Cloudflare Pages.
- Confirmo que productos y colecciones permanecen pendientes de Etapa 4, no como bloqueo de esta etapa.
- Decision independiente: **Etapa 2 aprobada con bloqueos documentados**.

## Bloqueos y advertencias

- La verificación HTTP de `/foo` frente a los archivos `dist/foo.html` sigue dependiendo del comportamiento real de Cloudflare Pages; no se agregaron redirects ni DNS.
- El índice local de búsqueda permanece vacío hasta que se migre contenido aprobado del catálogo.
- Las políticas publicadas conservan texto comercial y referencias a Shopify de la fuente histórica; requieren revisión legal antes de una publicación definitiva como documento vigente.
- El logo, favicon y la fuente Futura siguen siendo pendientes heredados de la etapa 2 y no se alteraron en esta corrección.
- No se agregaron dependencias.

## Criterio de aceptacion

**Cumplido con bloqueos documentados.** Las rutas enlazadas tienen experiencias
estáticas controladas, no hay flujos comerciales ni redirect externo de autenticación,
y search/cart/auth están fuera del índice mediante `noindex`. El favicon, las URLs
limpias de Cloudflare y productos/colecciones quedan para etapas posteriores.

## Actualización posterior: visibilidad y atribución del footer

**Etapa:** 2 - Tarea 2.3
**Fecha de actualización:** 2026-08-02
**Estado:** completada.

Los textos de `Nuestra misión` y `Ayúdanos a mejorar` ya estaban presentes en el
markup, pero heredaban el color calculado del `body` y quedaban prácticamente
ocultos sobre el fondo inverso del footer. Se reaplicó el color del esquema
`color-inverse` al componente para que ambos bloques sean legibles.

La atribución final ahora muestra `página creada con ❤️ por Sebastián Sanhueza` y
enlaza a `https://sanhueza.pro/` en una pestaña nueva con `noopener noreferrer`. Se
retiró la atribución de Shopify y no se agregó ninguna funcionalidad externa.

### Verificación independiente de la actualización

- `npm run check`: 0 errores, 0 warnings y 0 hints.
- `npm run build`: correcto; 42 páginas estáticas generadas.
- Preview en `390px` y `1440px`: ambos textos son visibles, el enlace apunta a
  `https://sanhueza.pro/` y no existe overflow horizontal.

## Actualización posterior: tres columnas en desktop

**Etapa:** 2 - Tarea 2.3
**Fecha de actualización:** 2026-08-02
**Estado:** completada.

La grilla del footer usa ahora tres columnas desde `750px`: `Politicas`, `Nuestra
misión` y `Ayúdanos a mejorar` quedan alineados en la misma fila. En mobile se
mantiene el comportamiento apilado de una columna.

### Verificación independiente

- Preview a `1440px`: los tres bloques comparten la misma fila y tienen ancho equivalente.
- Preview a `390px`: los tres bloques se apilan verticalmente y no existe overflow horizontal.
- `npm run check`: 0 errores, 0 warnings y 0 hints.
- `npm run build`: correcto; 42 páginas estáticas generadas.
