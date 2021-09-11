import getAllActors from './getAllActors';
import movies from './movies';

export default {
  Query: {
    actors: getAllActors,
  },

  Actor: {
    movies,
  },
};
