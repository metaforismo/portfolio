import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';

// Isolate the provider boundary; HTTP endpoint tests exercise the Next build.
const source = await readFile(new URL('../lib/get-cached-contributions.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source.replace('import { unstable_cache } from "next/cache"', 'const unstable_cache = fn => fn'), {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
}).outputText;
const { getCachedContributions } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);
const activity = [{ date: '2026-09-09', count: 3, level: 2 }];

test('contribution provider returns validated activity with a bounded request', async () => {
  const original = globalThis.fetch;
  globalThis.fetch = async (url, options) => {
    assert.match(url, /\/v4\/test%2Fuser\?y=last$/);
    assert.ok(options.signal instanceof AbortSignal);
    return Response.json({ contributions: activity });
  };
  try { assert.deepEqual(await getCachedContributions('test/user'), activity); }
  finally { globalThis.fetch = original; }
});

test('provider failures stay unavailable and a subsequent success recovers', async () => {
  const original = globalThis.fetch;
  try {
    for (const reply of [
      () => new Response('outage', { status: 503 }),
      () => new Response('not json'),
      () => Response.json({ contributions: [] }),
      () => Response.json({ contributions: [{ ...activity[0], count: -1 }] }),
      () => Response.json({ contributions: [{ ...activity[0], date: 'invalid' }] }),
      () => { throw new DOMException('Timed out', 'TimeoutError'); },
    ]) {
      globalThis.fetch = async () => reply();
      assert.equal(await getCachedContributions('test'), null);
    }
    globalThis.fetch = async () => Response.json({ contributions: activity });
    assert.deepEqual(await getCachedContributions('test'), activity);
  } finally { globalThis.fetch = original; }
});
