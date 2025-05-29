import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateVideosOfTeacherDto } from './dto/create-videos-of-teacher.dto';
import { UpdateVideosOfTeacherDto } from './dto/update-videos-of-teacher.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Videos_of_teachers } from './models/videos-of-teacher.model';

@Injectable()
export class VideosOfTeachersService {

  constructor(@InjectModel(Videos_of_teachers) private model: typeof Videos_of_teachers) { }

  async create(createVideosOfTeacherDto: CreateVideosOfTeacherDto): Promise<Object> {
    try {
      const videos_of_teacher = await this.model.create({ ...createVideosOfTeacherDto })
      return { statusCode: 201, message: "Success", data: videos_of_teacher }
    } catch (error) {
      throw new InternalServerErrorException()
    }
  }

  async findAll() {
    try {
      const videos_of_teacher = await this.model.findAll({ include: { all: true } })
      return { statusCode: 200, message: "Success", data: videos_of_teacher }
    } catch (error) {
      throw new InternalServerErrorException()
    }
  }

  async findOne(id: number) {
    try {
      const videos_of_teacher = await this.model.findByPk(id, { include: { all: true } })
      if (!videos_of_teacher) return { statusCode: 404, message: "Not found", data: {} }
      return { statusCode: 200, message: "Success", data: videos_of_teacher }
    } catch (error) {
      throw new InternalServerErrorException()
    }
  }

  async update(id: number, updateVideosOfTeacherDto: UpdateVideosOfTeacherDto) {
    try {
      if (!await this.model.findByPk(id)) return { statusCode: 404, message: "Not found", data: {} }
      const videos_of_teacher = await this.model.update(updateVideosOfTeacherDto, { where: { id }, returning: true })
      return { statusCode: 200, message: "Success", data: videos_of_teacher };
    } catch (error) {
      throw new InternalServerErrorException()
    }
  }

  async remove(id: number) {
    try {
      if (!await this.model.findByPk()) return { statusCode: 404, message: "Not found", data: {} }
      await this.model.destroy({ where: { id } })
      return { statusCode: 200, message: "Success", data: {} }
    } catch (error) {
      throw new InternalServerErrorException()
    }
  }
}
