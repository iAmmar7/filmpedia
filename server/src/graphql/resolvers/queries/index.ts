import actors from './actors';
import movies from './movies';

const queries = {
  ...actors,
  ...movies,
  Query: { ...actors.Query, ...movies.Query },
};

export default queries;
