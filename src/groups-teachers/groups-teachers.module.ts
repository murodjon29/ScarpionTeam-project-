import { Module } from '@nestjs/common';
import { GroupsTeachersService } from './groups-teachers.service';
import { GroupsTeachersController } from './groups-teachers.controller';

@Module({
  controllers: [GroupsTeachersController],
  providers: [GroupsTeachersService],
})
export class GroupsTeachersModule {}
