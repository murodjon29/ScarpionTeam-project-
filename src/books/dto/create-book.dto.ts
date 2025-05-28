import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsNumber()
  @IsNotEmpty()
  teacher_id: number;

  @IsString()
  @IsNotEmpty()
  description: string;
}
