export default /* GraphQL */ `
  type Actor {
    id: ID!
    name: String!
    movies: [Movie!]!
  }

  extend type Query {
    actors: [Actor!]
  }

  extend type Mutation {
    createActor(name: String!): Actor!
  }
`;
