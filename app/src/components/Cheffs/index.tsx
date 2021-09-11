import * as React from 'react';
import { useQuery } from '@apollo/client';

import Loader from '../Loader';
import { Heading } from './styles';
import { cheffs } from '../../api/queries';

interface Cheff {
  id: string;
  name: string;
  restaurants: Restaurant[];
}

interface QueryData {
  cheffs: Cheff[];
}

interface Restaurant {
  id: string;
  name: string;
}

function Cheffs() {
  const { loading, error, data } = useQuery<QueryData>(cheffs);

  if (loading) return <Loader />;

  return (
    <div>
      <Heading>Cheffs</Heading>
      {data?.cheffs?.map((chef) => (
        <div>
          <p>Name: {chef.name} </p>
          <p>
            Restaurants: [
            {chef.restaurants.map((rest, index) =>
              index + 1 === chef.restaurants.length ? rest.name : rest.name + ', '
            )}
            ]
          </p>
        </div>
      ))}
    </div>
  );
}

export default Cheffs;
