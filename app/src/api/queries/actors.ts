import { gql } from '@apollo/client';

const query = gql`
  query GetAllActors {
    actors {
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
