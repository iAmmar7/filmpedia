import { ApolloClient, InMemoryCache } from '@apollo/client';

export const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: process.env.SERVER_URL + '/graphql',
});

export default client;
