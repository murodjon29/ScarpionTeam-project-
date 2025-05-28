import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { Col } from 'sequelize/types/utils';
import { Roles } from 'src/enum';

@Table({ tableName: 'admin' })
export class Admin extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  hashed_password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.ENUM(Roles.SUPERADMIN, Roles.ADMIN),
    allowNull: false,
    defaultValue: Roles.ADMIN,
  })
  role: string;
}
