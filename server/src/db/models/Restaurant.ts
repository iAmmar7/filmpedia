import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';

import Cheff from './Cheff';

@Table({
  defaultScope: {
    attributes: { exclude: ['deletedAt'] },
  },
  paranoid: true,
  tableName: 'restaurants',
})
export class Restaurant extends Model {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED,
  })
  id!: string;

  @Column({
    allowNull: false,
    type: DataType.INTEGER.UNSIGNED,
  })
  @ForeignKey(() => Cheff)
  cheffId!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  name!: string;

  @BelongsTo(() => Cheff)
  cheff!: Cheff;
}

export default Restaurant;
