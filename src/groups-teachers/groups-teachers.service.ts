import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateGroupsTeacherDto } from './dto/create-groups-teacher.dto';
import { UpdateGroupsTeacherDto } from './dto/update-groups-teacher.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Group_teachers } from './models/groups-teacher.model';

@Injectable()
export class GroupsTeachersService {
  constructor(@InjectModel(Group_teachers) private model: typeof Group_teachers) { }

  async create(createGroupsTeacherDto: CreateGroupsTeacherDto): Promise<Object> {
    try {
      const group_teacher = await this.model.create({ ...createGroupsTeacherDto })
      return { statusCode: 201, message: "Success", data: group_teacher }
    } catch (error) {
      throw new InternalServerErrorException()
    }
  }

  async findAll(): Promise<Object> {
    try {
      const group_teachers = await this.model.findAll({ include: { all: true } })
      return {statusCode: 200, message: "Succces", data: group_teachers}
    } catch (error) {
      throw new InternalServerErrorException()
    }
  }

  async findOne(id: number): Promise<Object> {
    const group_teacher = await this.model.findByPk(id)
    if(!group_teacher) return {statusCode: 404, message: "Not found", data: {}}
    return {statusCode: 200, message: "Succces", data: group_teacher}
  }

  async update(id: number, updateGroupsTeacherDto: UpdateGroupsTeacherDto): Promise<Object> {
    if(!await this.model.findByPk(id)) return {statusCode: 404, message: "Not found", data: {}}
    const group_teacher = await this.model.update(updateGroupsTeacherDto, {where: {id}, returning: true})
    return {statusCode: 200, message: "Succces", data: group_teacher}
  }

  async remove(id: number): Promise<Object> {
    if(!await this.model.findByPk(id)) return {statusCode: 404, message: "Not found", data: {}}
    await this.model.destroy({where: {id}})
    return {statusCode: 200, message: "Succces", data: {}};
  }
}
