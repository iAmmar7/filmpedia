import * as React from 'react';
import { useQuery } from '@apollo/client';

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
  const { loading, error, data } = useQuery(cheffs);

  console.log('Cheffs', loading, error, data);

  return (
    <div>
      <h1>Cheffs list</h1>
    </div>
  );
}

export default Cheffs;
