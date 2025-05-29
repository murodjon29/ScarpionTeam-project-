import { Column, DataType, Table, Model } from "sequelize-typescript";


@Table({tableName: 'advertisements'})
export class Advertisement extends Model{
    @Column({
        type: DataType.STRING,
        allowNull: false
    }) 
    author: string;

    @Column({
        type: DataType.STRING
    })
    description: string

}