const site = 'https://www.print3x.cl';

export function GET(): Response {
  const body = `User-agent: *\nAllow: /\nSitemap: ${site}/sitemap-index.xml\n`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
