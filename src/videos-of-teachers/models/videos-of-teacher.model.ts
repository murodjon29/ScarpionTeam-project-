import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Teachers } from "src/teachers/models/teacher.model";


@Table({ tableName: "Videos_of_teachers" })
export class Videos_of_teachers extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description: string

    @Column({
        type: DataType.STRING,
        // allowNull: false
    })
    url: string

    @ForeignKey(() => Teachers)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    teacher_id: string

    @BelongsTo(() => Teachers, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    teacher: Teachers
}