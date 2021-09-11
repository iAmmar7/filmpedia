export default /* GraphQL */ `
  type Restaurant {
    id: ID!
    name: String!
    cheffId: ID!
  }

  extend type Mutation {
    createRestaurant(cheffId: ID!, name: String!): Restaurant!
  }
`;
