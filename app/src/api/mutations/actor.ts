import { gql } from '@apollo/client';

const addActor = gql`
  mutation ($name: String!) {
    createActor(name: $name) {
      id
      name
    }
  }
`;

export default addActor;
