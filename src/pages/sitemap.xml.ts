import { getCollection } from 'astro:content';

const site = 'https://www.print3x.cl';

export async function GET(): Promise<Response> {
  const [products, collections, pages, blogs, articles] = await Promise.all([
    getCollection('products'),
    getCollection('collections'),
    getCollection('pages'),
    getCollection('blogs'),
    getCollection('articles'),
  ]);
  const paths = [
    '/',
    ...products.map(({ data }) => `/products/${data.slug}`),
    ...collections.map(({ data }) => `/collections/${data.slug}`),
    ...pages.filter(({ data }) => !data.seo?.noIndex).map(({ data }) => `/pages/${data.slug}`),
    ...blogs.filter(({ data }) => !data.seo?.noIndex).map(({ data }) => `/blogs/${data.slug}`),
    ...articles.filter(({ data }) => !data.seo?.noIndex).map(({ data }) => `/blogs/${data.blog}/${data.slug}`),
  ];
  const urls = paths.map((path) => `  <url><loc>${site}${path}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
