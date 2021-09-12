import * as React from 'react';
import { useQuery, useMutation } from '@apollo/client';

import Loader from '../Loader';
import AddMovie from '../AddMovie';
import { Heading, ActorContainer } from './styles';
import { actors } from '../../api/queries';
import { addMovie } from '../../api/mutations';

interface Actor {
  id: string;
  name: string;
  movies: Movie[];
}

interface QueryData {
  actors: Actor[];
}

interface Movie {
  id: string;
  name: string;
}

function Actors() {
  const { loading, error, data } = useQuery<QueryData>(actors);
  const [createMovie, { data: mutData, loading: mutLoading, error: mutError }] = useMutation<
    {
      createMovie: Movie;
    },
    {
      actorId: string;
      name: string;
    }
  >(addMovie, {
    refetchQueries: [actors, 'GetAllActors'],
  });

  const addMovieHandler = async (actorId: string, name: string) => {
    await createMovie({
      variables: { actorId, name },
    });
  };

  return (
    <div>
      {(loading || mutLoading) && <Loader />}
      <Heading>Actors</Heading>
      {data?.actors?.map((actor) => (
        <ActorContainer key={actor.id}>
          <p>Name: {actor.name} </p>
          <p>
            Movies: [
            {actor.movies.map((rest, index) => (index + 1 === actor.movies.length ? rest.name : rest.name + ', '))}]
          </p>
          <AddMovie handleSubmit={addMovieHandler} actorId={actor.id} />
        </ActorContainer>
      ))}
    </div>
  );
}

export default Actors;
