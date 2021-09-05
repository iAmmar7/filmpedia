module.exports.up = (queryInterface, DataTypes) => {
  // Create a table
  return queryInterface.createTable(
    'restaurants',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      cheffId: {
        allowNull: false,
        references: {
          key: 'id',
          model: 'cheffs',
        },
        type: DataTypes.INTEGER.UNSIGNED,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      charset: 'utf8',
    }
  );
};

module.exports.down = (queryInterface) => {
  // Drop a table
  return queryInterface.dropTable('restaurants');
};
