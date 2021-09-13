export default /* GraphQL */ `
  type Movie {
    id: ID!
    name: String!
    actorId: ID!
  }

  extend type Query {
    getAllMovies: [Movie!]
  }

  extend type Mutation {
    createMovie(actorId: ID!, name: String!): Movie!
  }
`;
