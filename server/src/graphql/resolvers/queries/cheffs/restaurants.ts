import Cheff from '#root/db/models/Cheff';
import Restaurant from '#root/db/models/Restaurant';

const restaurants = async (cheff: Cheff) => {
  const restaurants = await Restaurant.findAll({
    include: [
      {
        model: Cheff,
        where: { id: cheff.id },
      },
    ],
    order: [['name', 'ASC']],
  });
  return restaurants;
};

export default restaurants;
