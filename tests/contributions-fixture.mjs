// CI-only public activity fixture; production continues to use the real provider.
import { createServer } from 'node:http';
const contributions = Array.from({ length: 7 }, (_, day) => ({
  date: `2026-09-${String(day + 1).padStart(2, '0')}`,
  count: day,
  level: day % 5,
}));
createServer((_request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify({ contributions }));
}).listen(3101, '127.0.0.1');
