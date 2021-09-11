import Actor from '#root/db/models/Actor';

const getAllActors = async () => {
  return await Actor.findAll();
};

export default getAllActors;
