import { gql } from '@apollo/client';

const query = gql`
  query GetAllActors {
    getAllActors {
      id
      name
      movies {
        id
        name
      }
    }
  }
`;

export default query;
