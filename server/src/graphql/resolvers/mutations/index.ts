import actors from './actors';
import movies from './movies';

const mutations = {
  ...actors,
  ...movies,
  Mutation: { ...actors.Mutation, ...movies.Mutation },
};

export default mutations;
