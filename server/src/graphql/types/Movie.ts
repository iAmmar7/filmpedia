export default /* GraphQL */ `
  type Movie {
    id: ID!
    name: String!
    actorId: ID!
  }

  extend type Mutation {
    createMovie(actorId: ID!, name: String!): Movie!
  }
`;
