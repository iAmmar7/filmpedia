import { gql } from '@apollo/client';

const query = gql`
  {
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
