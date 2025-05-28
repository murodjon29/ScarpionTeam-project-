import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
// import { Students } from 'src/students/models/student.model';

@Table({ tableName: 'projects' })
export class Project extends Model<Project> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  // @ForeignKey(() => Students)
  // @Column({
  //   type: DataType.INTEGER,
  //   allowNull: false,
  // })

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description: string;
}
