import { Module } from '@nestjs/common';
import { GroupsStudentsService } from './groups-students.service';
import { GroupsStudentsController } from './groups-students.controller';

@Module({
  controllers: [GroupsStudentsController],
  providers: [GroupsStudentsService],
})
export class GroupsStudentsModule {}
