import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const base = process.env.TEST_BASE_URL || 'http://localhost:3000';
const origin = 'https://francescogiannicola.com';
const pages = ['/', '/about', '/contact', '/privacy'];
async function get(path, accept = 'text/html', method = 'GET') {
  return fetch(base + path, { method, headers: { Accept: accept } });
}
const visible = html => html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
for (const path of pages) test(`${path}: HTML, Markdown, HEAD, metadata and discovery`, async () => {
  const htmlResponse = await get(path);
  assert.equal(htmlResponse.status, 200);
  assert.match(htmlResponse.headers.get('content-type'), /text\/html/);
  assert.match(htmlResponse.headers.get('vary'), /\bAccept\b/i);
  const html = await htmlResponse.text();
  assert.match(html, /<html[^>]+lang="en"/);
  assert.match(html, /<h1\b/);
  assert.ok(visible(html).length >= 500);
  assert.ok(html.includes(`rel="canonical" href="${origin}${path === "/" ? "" : path}"`));
  assert.match(html, /property="og:image"/);
  assert.match(html, /property="og:type" content="website"/);
  const headings = [...html.matchAll(/<h([1-6])\b/g)].map(m => +m[1]);
  for (let i = 1; i < headings.length; i++) assert.ok(headings[i] <= headings[i-1] + 1, 'sequential headings');
  const mdResponse = await get(path, 'text/markdown');
  assert.equal(mdResponse.status, 200);
  assert.match(mdResponse.headers.get('content-type'), /text\/markdown; charset=utf-8/);
  assert.match(mdResponse.headers.get('vary'), /\bAccept\b/);
  assert.match(mdResponse.headers.get('cache-control'), /no-store/);
  const md = await mdResponse.text();
  assert.match(md, /^# /); assert.ok(md.length > 500); assert.doesNotMatch(md, /<script|<html/);
  const alias = path === '/' ? '/index.md' : path + '.md';
  assert.equal(await (await get(alias)).text(), md);
  const head = await get(path, 'text/markdown', 'HEAD');
  assert.equal(head.status, 200); assert.equal(await head.text(), '');
  assert.match(head.headers.get('content-type'), /text\/markdown/);
  assert.match(htmlResponse.headers.get('link'), /rel="alternate"/);
});
for (const [accept, type, status] of [
  ['*/*', 'text/html', 200], ['text/*', 'text/html', 200],
  ['text/markdown, text/html;q=0.8', 'text/markdown', 200],
  ['text/markdown;q=0, text/html', 'text/html', 200],
  ['text/markdown;q=0, */*;q=1', 'text/html', 200],
  ['text/html;q=0, text/*;q=0.5', 'text/markdown', 200],
  ['TEXT/MARKDOWN', 'text/markdown', 200],
  ['text/markdown;q=0.2, text/html;q=0.9', 'text/html', 200],
  ['application/json', 'text/plain', 406],
  ['text/html;q=0, text/markdown;q=0', 'text/plain', 406],
]) test(`Accept: ${accept}`, async () => {
  const r = await get('/', accept); assert.equal(r.status, status); assert.ok(r.headers.get('content-type').startsWith(type));
  assert.match(r.headers.get('vary'), /\bAccept\b/);
});
test('unknown paths and unknown Markdown files return recoverable real 404s', async () => {
  for (const path of ['/does-not-exist-agent-test', '/nested/does-not-exist', '/missing.md', '/constructor.md', '/missing.png']) {
    for (const accept of ['*/*', 'text/markdown', 'text/html']) {
      const r = await get(path, accept); assert.equal(r.status, 404, path);
      assert.match(r.headers.get('content-type'), /text\/markdown/);
      const body = await r.text(); assert.match(body, /^# Page not found/);
      for (const link of ['/sitemap.xml', '/llms.txt', '/contact']) assert.ok(body.includes(link));
    }
  }
});
test('homepage identity and raw content', async () => {
  const html = await (await get('/')).text();
  const json = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(json); const person = JSON.parse(json[1]);
  assert.equal(person['@type'], 'Person'); assert.equal(person.name, 'Francesco Giannicola');
  assert.equal(person.url, origin + '/'); assert.ok(person.sameAs.length >= 2);
  assert.ok(person.contactPoint.email.includes('@'));
  assert.match(html, /<noscript>[\s\S]*Project details[\s\S]*IntentForm/);
  const ratio = visible(html).length / html.length;
  console.log(`Raw HTML: ${html.length} chars; text: ${visible(html).length}; ratio: ${(ratio * 100).toFixed(2)}%`);
  assert.ok(ratio >= 0.05, 'raw HTML content ratio >= 5%');

});
test('sitemap XML, robots, llms and every listed local destination', async () => {
  const r = await get('/sitemap.xml'); assert.equal(r.status, 200); assert.match(r.headers.get('content-type'), /xml/);
  const xml = await r.text(); assert.match(xml, /xmlns="http:\/\/www.sitemaps.org\/schemas\/sitemap\/0.9"/);
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  assert.deepEqual(urls, [...pages, '/cv.pdf'].map(p => origin + p));
  assert.equal([...xml.matchAll(/<lastmod>\d{4}-\d{2}-\d{2}(?:T[^<]*)?<\/lastmod>/g)].length, urls.length);
  for (const url of urls) assert.equal((await get(url.slice(origin.length))).status, 200);
  const robots = await get('/robots.txt'); assert.equal(robots.status, 200); assert.match(await robots.text(), /Sitemap: https:\/\/francescogiannicola.com\/sitemap.xml/);
  const llms = await get('/llms.txt'); assert.equal(llms.status, 200); assert.match(llms.headers.get('content-type'), /text\/markdown/);
  const body = await llms.text(); assert.match(body, /^# Francesco Giannicola\n\n> /); assert.match(body, /## When to use this/);
  for (const section of body.split(/^## /m).slice(1)) {
    const lines = section.split('\n').slice(1).filter(Boolean);
    assert.ok(lines.every(line => /^- \[.+\]\(.+\)/.test(line)), 'llms H2 sections contain file lists');
  }
  for (const m of body.matchAll(/\]\((https:\/\/francescogiannicola.com[^)]*)\)/g)) assert.equal((await get(m[1].slice(origin.length))).status, 200);
  const image = await get('/opengraph-image'); assert.equal(image.status, 200); assert.match(image.headers.get('content-type'), /image\/png/);
  assert.ok((await image.arrayBuffer()).byteLength > 1000);
});
test('alternating variants and RSC remain isolated', async () => {
  for (const type of ['text/markdown', 'text/html', 'text/markdown', 'text/html']) assert.ok((await get('/', type)).headers.get('content-type').startsWith(type));
  const r = await fetch(base + '/about', { headers: { RSC: '1', Accept: '*/*' } });
  assert.equal(r.status, 200); assert.match(r.headers.get('content-type'), /text\/x-component/);
});

test('Vercel applies response transforms only to negotiated page paths', () => {
  const config = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url)));
  const route = config.routes[0];
  const pattern = new RegExp(route.src);
  for (const path of pages) assert.ok(pattern.test(path));
  for (const path of ['/robots.txt', '/sitemap.xml', '/_next/static/app.js', '/missing']) assert.ok(!pattern.test(path));
  assert.equal(route.continue, true);
  assert.deepEqual(route.transforms, [{ type: 'response.headers', op: 'append', target: { key: 'Vary' }, args: ['Accept', 'Accept-Encoding'] }]);
});
test('HEAD discovery files preserve metadata without a body', async () => {
  for (const path of ['/llms.txt', '/index.md', '/about.md', '/contact.md', '/privacy.md']) {
    const response = await get(path, 'text/markdown', 'HEAD');
    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type'), /text\/markdown/);
    assert.equal(await response.text(), '');
  }
  const unsupported = await get('/', 'application/json', 'HEAD');
  assert.equal(unsupported.status, 406);
  assert.match(unsupported.headers.get('content-type'), /text\/plain/);
  assert.equal(await unsupported.text(), '');
});
