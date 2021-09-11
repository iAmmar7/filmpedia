import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';

import Restaurant from './Restaurant';

@Table({
  defaultScope: {
    attributes: { exclude: ['deletedAt'] },
  },
  paranoid: true,
  tableName: 'cheffs',
})
class Cheff extends Model {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED,
  })
  id!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  name!: string;

  @HasMany(() => Restaurant)
  restaurants!: Restaurant[];
}

export default Cheff;
