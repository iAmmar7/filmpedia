import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import 'dotenv/config';

import '#root/db/connection';
import accessEnv from '#root/helpers/accessEnv';
import resolvers from '#root/graphql/resolvers';
import types from '#root/graphql/types';

const PORT = accessEnv('PORT', 3000);

(async function startServer() {
  const apolloServer = new ApolloServer({ resolvers, typeDefs: types });

  // Required logic for integrating with Express
  await apolloServer.start();

  const app = express();

  app.use(cors());

  apolloServer.applyMiddleware({ app, path: '/graphql' });

  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT} and GraphQL is on ${apolloServer.graphqlPath}`);
  });
})();
