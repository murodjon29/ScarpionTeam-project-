import { Module } from '@nestjs/common';
import { GroupsTeachersService } from './groups-teachers.service';
import { GroupsTeachersController } from './groups-teachers.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Group_teachers } from './models/groups-teacher.model';

@Module({
  imports: [SequelizeModule.forFeature([Group_teachers])],
  controllers: [GroupsTeachersController],
  providers: [GroupsTeachersService],
})
export class GroupsTeachersModule {}
