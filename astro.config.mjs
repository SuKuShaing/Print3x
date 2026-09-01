import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const approvedSitemapPaths = new Set([
  '/',
  '/products/axis-one',
  '/products/padi-superficie-de-impresion',
  '/products/pla_rojo',
  '/products/filamento_pla_verde',
  '/products/filamento_pla_azul',
  '/products/filamento_pla_blanco',
  '/products/filamento_pla_negro',
  '/products/filamento_pla_gris',
  '/products/filamento_pla_amarillo',
  '/products/filamento_pla_celeste',
  '/products/pla_pantera_rosa',
  '/products/filamento_pla_transparente',
  '/products/filamento_pla_oro',
  '/collections/pla',
  '/collections/impresoras-3d',
  '/pages/nosotros',
  '/pages/premios',
  '/pages/como-determinar-cual-es-el-mejor-filamento-pla',
  '/pages/tarifas-de-envio',
  '/pages/decuento-por-post-en-rrss',
  '/blogs/noticias',
  '/blogs/articulos',
  '/blogs/curso_impresion_3d',
  '/blogs/curso_impresion_3d/impresion_3d_calibracion_automatica',
  '/blogs/curso_impresion_3d/meshmixer',
  '/blogs/curso_impresion_3d/openscad',
  '/blogs/curso_impresion_3d/configurar-repetier-host',
]);

export default defineConfig({
  output: 'static',
  site: 'https://print3x.cl',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    sitemap({
      filenameBase: 'sitemap',
      filter: (page) => {
        const pathname = new URL(page).pathname.replace(/\.html$/, '');
        return approvedSitemapPaths.has(pathname);
      },
      namespaces: {
        news: false,
        xhtml: false,
        image: false,
        video: false,
      },
    }),
  ],
});
