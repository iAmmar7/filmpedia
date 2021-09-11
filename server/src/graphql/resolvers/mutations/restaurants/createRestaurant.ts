import Restaurant from '#root/db/models/Restaurant';

const createCheff = (context: any, { cheffId, name }: { cheffId: string; name: string }) => {
  try {
    const cheff = Restaurant.create({ cheffId, name });
    return cheff;
  } catch (error) {
    console.log(error);
  }
};

export default createCheff;
