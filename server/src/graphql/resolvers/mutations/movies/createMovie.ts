import Movie from '#root/db/models/Movie';

const createMovie = (context: any, { actorId, name }: { actorId: string; name: string }) => {
  try {
    const movie = Movie.create({ actorId, name });
    return movie;
  } catch (error) {
    console.log(error);
  }
};

export default createMovie;
