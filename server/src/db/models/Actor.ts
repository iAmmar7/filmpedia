import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';

import Movie from './Movie';

@Table({
  defaultScope: {
    attributes: { exclude: ['deletedAt'] },
  },
  paranoid: true,
  tableName: 'actors',
})
class Actor extends Model {
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

  @HasMany(() => Movie)
  movies!: Movie[];
}

export default Actor;
