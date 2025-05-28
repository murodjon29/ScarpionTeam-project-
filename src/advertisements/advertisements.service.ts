import { Injectable } from '@nestjs/common';
import { CreateAdvertisementDto } from './dto/create-advertisement.dto';
import { UpdateAdvertisementDto } from './dto/update-advertisement.dto';
import { Advertisement } from './models/advertisements.models';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class AdvertisementsService {
  constructor(@InjectModel(Advertisement) private model: typeof Advertisement ) { }

  async create(createAdvertisementDto: CreateAdvertisementDto): Promise<Object>{
    const advertisement = await this.model.create({ ...createAdvertisementDto})
    return {statusCode: 201, message: "Success", data: advertisement };
  }

  async findAll(): Promise<Object> {
    const advertisements = await this.model.findAll()
    return {statusCode: 200, message: "Success", data: advertisements };
  }

  async findOne(id: number): Promise<Object> {
    const advertisement = await this.model.findByPk(id)
    if (!advertisement) return { message:"Not found"}
    return {statusCode: 200, message: "Success", data: advertisement };
  }

  async update(id: number, updateAdvertisementDto: UpdateAdvertisementDto): Promise<Object>{
    const advertisement = await this.model.update(updateAdvertisementDto, { where: {id}, returning: true})
    return {statusCode: 200, message: "Success", data: advertisement[1][0] };
  }

  async remove(id: number): Promise<Object> {
    const advertisement = await this.model.destroy({where: {id}});
    return {statusCode: 200, message: "Success", data: {} };
  }
}
