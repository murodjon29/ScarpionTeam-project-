import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupsTeacherDto } from './create-groups-teacher.dto';

export class UpdateGroupsTeacherDto extends PartialType(
  CreateGroupsTeacherDto,
) {}
