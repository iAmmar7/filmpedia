import { gql } from '@apollo/client';

const addMovie = gql`
  mutation ($actorId: ID!, $name: String!) {
    createMovie(actorId: $actorId, name: $name) {
      id
      name
    }
  }
`;

export default addMovie;
