import { Injectable } from '@nestjs/common';
import { CreateGroupsStudentDto } from './dto/create-groups-student.dto';
import { UpdateGroupsStudentDto } from './dto/update-groups-student.dto';

@Injectable()
export class GroupsStudentsService {
  create(createGroupsStudentDto: CreateGroupsStudentDto) {
    return 'This action adds a new groupsStudent';
  }

  findAll() {
    return `This action returns all groupsStudents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} groupsStudent`;
  }

  update(id: number, updateGroupsStudentDto: UpdateGroupsStudentDto) {
    return `This action updates a #${id} groupsStudent`;
  }

  remove(id: number) {
    return `This action removes a #${id} groupsStudent`;
  }
}
