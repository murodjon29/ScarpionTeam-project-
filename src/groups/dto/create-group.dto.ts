import { IsNotEmpty, IsString } from "class-validator";

export class CreateGroupDto {
    @IsString()
    @IsNotEmpty()
    name: string


    @IsString()
    @IsNotEmpty()
    description: string
}
