# Cloudflare Pages: configuración de preview

**Estado:** preparada; no desplegada
**Dominio objetivo:** `https://www.print3x.cl`
**Salida estática:** `dist`

## Configuración del proyecto

| Campo | Valor |
|---|---|
| Framework preset | Astro / Static HTML |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js | `22.12.0` |
| Base directory | raíz del repositorio |
| Producción | `PUBLIC_SITE_ENV=production` |
| Preview/branch | no definir `PUBLIC_SITE_ENV` o usar cualquier valor distinto de `production` |

`.nvmrc` fija Node `22.12.0` para herramientas locales compatibles con `package.json`.

## Comportamiento de indexación

- Preview y staging: sin `PUBLIC_SITE_ENV=production`, el layout genera `noindex, nofollow` y `robots.txt` usa `Disallow: /`.
- Producción: con `PUBLIC_SITE_ENV=production`, `robots.txt` permite las rutas públicas, bloquea auxiliares y policies, y referencia `https://www.print3x.cl/sitemap.xml`.
- El dominio canónico, Open Graph, Twitter y sitemap usan `https://www.print3x.cl`; comprobar que no se publique una preview con esa variable.

## Verificación previa

1. Ejecutar `npm ci`.
2. Ejecutar `npm run check`.
3. Ejecutar `npm run build` sin `PUBLIC_SITE_ENV` y revisar que preview sea `noindex`.
4. Ejecutar el build de producción con `PUBLIC_SITE_ENV=production` y revisar sitemap, robots, rutas, metadata, favicons y 404.
5. Publicar únicamente una preview de Pages.
6. Probar rutas limpias, variantes `.html` y slash en el dominio de Pages.
7. No cambiar DNS hasta completar la validación y aprobar rollback.

## Límites actuales

- No se ha creado el proyecto en Cloudflare Pages.
- No se ha usado Wrangler ni una credencial de despliegue.
- No se ha cambiado DNS ni se ha cancelado Shopify.
- La resolución final de URLs limpias depende del comportamiento real de Cloudflare Pages.
