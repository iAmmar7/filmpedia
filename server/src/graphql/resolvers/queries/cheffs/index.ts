import getAllCheffs from './getAllCheffs';
import restaurants from './restaurants';

export default {
  Query: {
    cheffs: getAllCheffs,
  },

  Cheff: {
    restaurants,
  },
};
