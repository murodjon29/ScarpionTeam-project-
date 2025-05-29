import {
  Column,
  DataType,
  Table,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Teachers } from 'src/teachers/models/teacher.model';


@Table({tableName: "Group-teachers"})
export class Group_teachers extends Model{
    @ForeignKey(() => Teachers)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    teacher_id: number

    @BelongsTo(() => Teachers, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    teacher: Teachers


}