import { Column, DataType, Model, Table } from "sequelize-typescript";


@Table({tableName: "Teacher"})
export class Teachers extends Model{
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    full_name: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    email: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    specialist: string

}
