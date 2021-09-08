import { gql } from '@apollo/client';

const query = gql`
  {
    cheffs {
      id
      name
      restaurants {
        id
        name
      }
    }
  }
`;

export default query;
