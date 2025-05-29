import { Books } from 'src/books/models/book.model';
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Videos_of_teachers } from "src/videos-of-teachers/models/videos-of-teacher.model";

@Table({ tableName: 'Teachers' })
export class Teachers extends Model {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  declare full_name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare password: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare specialist: string;

  @HasMany(() => Books)
  declare books: Books[];
  @HasMany(() => Videos_of_teachers)
  teacher_videos: Videos_of_teachers[]
}
