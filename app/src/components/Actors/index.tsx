import * as React from 'react';
import { useQuery, useMutation } from '@apollo/client';

import Loader from '../Loader';
import AddMovie from '../AddMovie';
import AddActor from '../AddActor';
import { Heading, ActorContainer } from './styles';
import { actors } from '../../api/queries';
import { addMovie, addActor } from '../../api/mutations';

interface Actor {
  id: string;
  name: string;
  movies: Movie[];
}

interface QueryData {
  getAllActors: Actor[];
}

interface Movie {
  id: string;
  name: string;
}

function Actors() {
  const { loading, data } = useQuery<QueryData>(actors);
  const [createMovie, { loading: addMovieLoad }] = useMutation<
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
  const [createActor, { loading: addActorLoad, error, data: mutData }] = useMutation<
    {
      createActor: Actor;
    },
    {
      name: string;
    }
  >(addActor, {
    refetchQueries: [actors, 'GetAllActors'],
  });

  const addMovieHandler = async (actorId: string, name: string) => {
    await createMovie({
      variables: { actorId, name },
    });
  };

  const addActorHandler = async (name: string) => {
    await createActor({
      variables: { name },
    });
  };

  return (
    <div>
      {(loading || addMovieLoad || addActorLoad) && <Loader />}
      <Heading>Actors</Heading>
      {data?.getAllActors?.map((actor) => (
        <ActorContainer key={actor.id}>
          <p>Name: {actor.name} </p>
          {actor.movies.length > 0 && (
            <p>
              Movies: [
              {actor.movies.map((rest, index) => (index + 1 === actor.movies.length ? rest.name : rest.name + ', '))}]
            </p>
          )}
          <AddMovie handleSubmit={addMovieHandler} actorId={actor.id} />
        </ActorContainer>
      ))}
      <AddActor handleSubmit={addActorHandler} />
    </div>
  );
}

export default Actors;
