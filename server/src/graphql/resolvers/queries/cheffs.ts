import Cheff from '#root/db/models/Cheff';

const cheffsResolver = () => {
  return Cheff.findAll();
};

export default cheffsResolver;
