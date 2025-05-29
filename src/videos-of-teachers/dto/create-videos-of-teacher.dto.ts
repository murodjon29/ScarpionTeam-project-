import { IsNotEmpty, IsString } from "class-validator"

export class CreateVideosOfTeacherDto {
   @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    description: string

    @IsNotEmpty()
    @IsString()
    url: string

    @IsNotEmpty()
    teacher_id: number
}
