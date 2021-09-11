export default /* GraphQL */ `
  type Cheff {
    id: ID!
    name: String!
    restaurants: [Restaurant!]!
  }

  extend type Query {
    cheffs: [Cheff!]
  }

  extend type Mutation {
    createCheff(name: String!): Cheff!
  }
`;
