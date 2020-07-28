import fastify from 'fastify';

import routes from './services';

const server = fastify({ logger: true });

routes.forEach(([type, route, callback]) => server[type](route, callback));

(async () => {
  try {
    await server.listen(process.env.PORT || 3000, process.env.HOST || '0.0.0.0');
  } catch (e) {
    server.log.error(e);
    process.exit(1);
  }
})();
