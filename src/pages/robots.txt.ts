const site = 'https://www.print3x.cl';

export function GET(): Response {
  const productionBuild = import.meta.env.PUBLIC_SITE_ENV === 'production';
  const body = productionBuild
    ? `User-agent: *\nAllow: /\nSitemap: ${site}/sitemap-index.xml\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
