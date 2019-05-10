import koa from 'koa';
import { ApolloServer } from 'apollo-server-koa';
import { buildSchemaFromDatabase } from './builders/schema';

(async () => {
  try {
    const schema = await buildSchemaFromDatabase(process.env.DB);

    const server = new ApolloServer({ schema });
    const app = new koa();
    const PORT = 3000;

    server.applyMiddleware({ app });
    app.listen(PORT, () => console.log(`localhost:${PORT}`));
  } catch (e) {
    console.log(e);
  }
})();
