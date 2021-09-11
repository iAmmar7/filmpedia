import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';

import Actor from './Actor';

@Table({
  defaultScope: {
    attributes: { exclude: ['deletedAt'] },
  },
  paranoid: true,
  tableName: 'movies',
})
export class Movie extends Model {
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
  @ForeignKey(() => Actor)
  actorId!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  name!: string;

  @BelongsTo(() => Actor)
  actor!: Actor;
}

export default Movie;
