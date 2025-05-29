import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupsStudentsService } from './groups-students.service';
import { CreateGroupsStudentDto } from './dto/create-groups-student.dto';
import { UpdateGroupsStudentDto } from './dto/update-groups-student.dto';

@Controller('groups-students')
export class GroupsStudentsController {
  constructor(private readonly groupsStudentsService: GroupsStudentsService) {}

  @Post()
  create(@Body() createGroupsStudentDto: CreateGroupsStudentDto) {
    return this.groupsStudentsService.create(createGroupsStudentDto);
  }

  @Get()
  findAll() {
    return this.groupsStudentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupsStudentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupsStudentDto: UpdateGroupsStudentDto) {
    return this.groupsStudentsService.update(+id, updateGroupsStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupsStudentsService.remove(+id);
  }
}
