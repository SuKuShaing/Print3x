const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#ce1870"/><path d="M8 9h16v4H8zm0 6h16v4H8zm0 6h10v4H8z" fill="#f7f7f7"/></svg>`;

export function GET(): Response {
  return new Response(favicon, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
