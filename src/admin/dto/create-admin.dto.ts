import {
    IsEmail,
    IsNotEmpty,
    IsString,
    IsStrongPassword,
} from 'class-validator';

export class CreateAdminDto {
    @IsString()
    @IsNotEmpty()
    username:string;

    @IsStrongPassword()
    @IsNotEmpty()
    password:string

    @IsEmail()
    @IsNotEmpty()
    email:string;
}
