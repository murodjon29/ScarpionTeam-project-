import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { VideosOfProjects } from './models/videosofproject.model';
import { CreateVideosofprojectDto } from './dto/create-videosofproject.dto';
import { UpdateVideosofprojectDto } from './dto/update-videosofproject.dto';
import { Project } from 'src/projects/models/project.model';

@Injectable()
export class VideosOfProjectsService {
  constructor(
    @InjectModel(VideosOfProjects) private model: typeof VideosOfProjects,
  ) {}

  async create(createVideoDto: CreateVideosofprojectDto) {
    try {
      const video = await this.model.create(createVideoDto as any);
      return { statusCode: 201, message: 'Success', data: video };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findAll() {
    try {
      const videos = await this.model.findAll({ include: { model: Project } });
      return { statusCode: 200, message: 'Success', data: videos };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: number) {
    try {
      const video = await this.model.findByPk(id, {
        include: { model: Project },
      });
      if (!video) {
        return { statusCode: 404, message: 'Not found', data: {} };
      }
      return { statusCode: 200, message: 'Success', data: video };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async update(id: number, updateVideoDto: UpdateVideosofprojectDto) {
    try {
      const video = await this.model.update(updateVideoDto, {
        where: { id },
        returning: true,
      });
      return { statusCode: 200, message: 'Success', data: video[1][0] };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async remove(id: number) {
    try {
      await this.model.destroy({ where: { id } });
      return { statusCode: 200, message: 'Success', data: {} };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
