const site = 'https://www.print3x.cl';

export function GET(): Response {
  const productionBuild = import.meta.env.PUBLIC_SITE_ENV === 'production';
  const rules = productionBuild
    ? 'User-agent: *\nAllow: /\nDisallow: /search\nDisallow: /cart\nDisallow: /customer_authentication/\nDisallow: /policies/\nDisallow: /blogs/articulos/tagged/\n'
    : 'User-agent: *\nDisallow: /\n';
  return new Response(`${rules}Sitemap: ${site}/sitemap.xml\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
