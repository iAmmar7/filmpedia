import * as React from 'react';
import { useQuery } from '@apollo/client';

import Loader from '../Loader';
import { Heading } from './styles';
import { actors } from '../../api/queries';

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

  if (loading) return <Loader />;

  return (
    <div>
      <Heading>Actors</Heading>
      {data?.actors?.map((actor) => (
        <div>
          <p>Name: {actor.name} </p>
          <p>
            Movies: [
            {actor.movies.map((rest, index) => (index + 1 === actor.movies.length ? rest.name : rest.name + ', '))}]
          </p>
        </div>
      ))}
    </div>
  );
}

export default Actors;
