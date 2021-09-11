import Actor from '#root/db/models/Actor';

const createActor = (context: any, { name }: { name: string }) => {
  try {
    const actor = Actor.create({ name });
    return actor;
  } catch (error) {
    console.log(error);
  }
};

export default createActor;
