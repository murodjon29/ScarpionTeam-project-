import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminDto } from './create-admin.dto';
import { IsEnum, IsOptional } from 'class-validator';

export class UpdateAdminDto extends PartialType(CreateAdminDto) {}
