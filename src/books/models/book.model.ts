import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Teachers } from 'src/teachers/models/teacher.model';

@Table({ tableName: 'Books' })
export class Books extends Model {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: number;

  @Column({ type: DataType.STRING })
  declare name: string;

  @Column({ type: DataType.STRING })
  declare description: string;

  @Column({ type: DataType.STRING })
  declare author: string;

  @ForeignKey(() => Teachers)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  declare teacher_id: number;

  @BelongsTo(() => Teachers)
  declare teacher: Teachers;
}
