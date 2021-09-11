import Cheff from '#root/db/models/Cheff';

const createCheff = (context: any, { name }: { name: string }) => {
  try {
    const cheff = Cheff.create({ name });
    return cheff;
  } catch (error) {
    console.log(error);
  }
};

export default createCheff;
