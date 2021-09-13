import Movie from '#root/db/models/Movie';

const getAllMovies = async () => {
  return await Movie.findAll();
};

export default getAllMovies;
