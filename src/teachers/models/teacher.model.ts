import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Books } from 'src/books/models/book.model';

@Table({ tableName: 'Teachers' }) // << tableName should match plural naming
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
}
