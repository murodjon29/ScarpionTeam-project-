import { Injectable } from '@nestjs/common';
import { CreateGroupsTeacherDto } from './dto/create-groups-teacher.dto';
import { UpdateGroupsTeacherDto } from './dto/update-groups-teacher.dto';

@Injectable()
export class GroupsTeachersService {
  create(createGroupsTeacherDto: CreateGroupsTeacherDto) {
    return 'This action adds a new groupsTeacher';
  }

  findAll() {
    return `This action returns all groupsTeachers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} groupsTeacher`;
  }

  update(id: number, updateGroupsTeacherDto: UpdateGroupsTeacherDto) {
    return `This action updates a #${id} groupsTeacher`;
  }

  remove(id: number) {
    return `This action removes a #${id} groupsTeacher`;
  }
}
