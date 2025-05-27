import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupsTeachersService } from './groups-teachers.service';
import { CreateGroupsTeacherDto } from './dto/create-groups-teacher.dto';
import { UpdateGroupsTeacherDto } from './dto/update-groups-teacher.dto';

@Controller('groups-teachers')
export class GroupsTeachersController {
  constructor(private readonly groupsTeachersService: GroupsTeachersService) {}

  @Post()
  create(@Body() createGroupsTeacherDto: CreateGroupsTeacherDto) {
    return this.groupsTeachersService.create(createGroupsTeacherDto);
  }

  @Get()
  findAll() {
    return this.groupsTeachersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupsTeachersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupsTeacherDto: UpdateGroupsTeacherDto) {
    return this.groupsTeachersService.update(+id, updateGroupsTeacherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupsTeachersService.remove(+id);
  }
}
