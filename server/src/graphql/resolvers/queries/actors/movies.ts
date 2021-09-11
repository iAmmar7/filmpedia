import Actor from '#root/db/models/Actor';
import Movie from '#root/db/models/Movie';

const movies = async (actor: Actor) => {
  const movies = await Movie.findAll({
    include: [
      {
        model: Actor,
        where: { id: actor.id },
      },
    ],
    order: [['name', 'ASC']],
  });
  return movies;
};

export default movies;
