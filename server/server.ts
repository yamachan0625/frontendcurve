import express from 'express';
import next from 'next';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { IncomingMessage, ServerResponse } from 'http';
import expressPlayground from 'graphql-playground-middleware-express';

const dev = process.env.NODE_ENV !== 'production';
const API_URL = dev
  ? 'http://localhost:4000/graphql'
  : 'http://awseb-awseb-t7h2otj93b0q-2085495435.ap-northeast-1.elb.amazonaws.com/graphql';
const PORT = process.env.PORT || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

const main = async () => {
  await app.prepare();

  const server = express();
  server.use('/graphql', createProxyMiddleware({ target: API_URL }));
  server.get('/playground', expressPlayground({ endpoint: '/graphql' }));
  server.get('*', (req: IncomingMessage, res: ServerResponse) =>
    handle(req, res)
  );

  server.listen(PORT, (err?: Error) => {
    if (err) throw err;
  });
};
main();
