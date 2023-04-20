import express from 'express';
import { createServer } from 'vite';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 5000;

const viteServer = await createServer({
  server: { middlewareMode: true },
})

app.use(viteServer.middlewares);

app.use('*', async (req, res, next) => {
  const url = req.originalUrl;
  let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
  template = await viteServer.transformIndexHtml(url, template);
   const { render } = await viteServer.ssrLoadModule('./src/server/server-server.tsx');
  const { pipe } = await render(url, {   
    onShellReady() {
      res.write(template);      
      pipe(res);
    },
    onAllReady() {
      res.write(template);
      res.end();
    },
  });

});

app.listen(PORT, () => {
  console.log(
    `Server running on ${PORT}.`
  )
});