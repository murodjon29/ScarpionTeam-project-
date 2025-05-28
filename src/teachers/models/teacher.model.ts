import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Videos_of_teachers } from "src/videos-of-teachers/models/videos-of-teacher.model";


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

    @HasMany(() => Videos_of_teachers)
    teacher_videos: Videos_of_teachers[]
}
