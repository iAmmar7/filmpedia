import Cheff from '#root/db/models/Cheff';

const getAllCheffs = async () => {
  return await Cheff.findAll();
};

export default getAllCheffs;
