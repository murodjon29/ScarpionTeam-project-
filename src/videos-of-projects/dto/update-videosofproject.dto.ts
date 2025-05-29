import { PartialType } from '@nestjs/mapped-types';
import { CreateVideosofprojectDto } from './create-videosofproject.dto';

export class UpdateVideosofprojectDto extends PartialType(
  CreateVideosofprojectDto,
) {}
