export function GET() {
  return new Response(
    `User-agent: *\nAllow: /\nSitemap: https://giordanogianluca.com/sitemap.xml\n`,
    { headers: { "Content-Type": "text/plain" } }
  );
}
