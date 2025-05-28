import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupsStudentDto } from './create-groups-student.dto';

export class UpdateGroupsStudentDto extends PartialType(CreateGroupsStudentDto) {}
