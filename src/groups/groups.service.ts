import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Group } from './models/group.model';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class GroupsService {
  constructor(@InjectModel(Group) private model: typeof Group ) { }

  async create(createGroupDto: CreateGroupDto): Promise<Object>{
    const group = await this.model.create({ ...createGroupDto})
    return {statusCode: 201, message: "Success", data: group };
  }

  async findAll(): Promise<Object> {
    const groups = await this.model.findAll()
    return {statusCode: 200, message: "Success", data: groups };
  }

  async findOne(id: number): Promise<Object> {
    const group = await this.model.findByPk(id)
    if (!group) return { message:"Not found"}
    return {statusCode: 200, message: "Success", data: group };
  }

  async update(id: number, updateGroupDto: UpdateGroupDto): Promise<Object>{
    const group = await this.model.update(updateGroupDto, { where: {id}, returning: true})
    return {statusCode: 200, message: "Success", data: group[1][0] };
  }

  async remove(id: number): Promise<Object> {
    const group = await this.model.destroy({where: {id}});
    return {statusCode: 200, message: "Success", data: {} };
  }

}
