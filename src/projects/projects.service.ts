import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Project } from './models/project.model';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
// import { Students } from 'src/students/models/student.model';

@Injectable()
export class ProjectsService {
  constructor(@InjectModel(Project) private model: typeof Project) {}

  async create(createProjectDto: CreateProjectDto) {
    try {
      const project = await this.model.create(createProjectDto as any);
      return { statusCode: 201, message: 'Success', data: project };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findAll() {
    try {
      const projects = await this.model.findAll({ include: { all: true } });
      return { statusCode: 200, message: 'Success', data: projects };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: number) {
    try {
      const project = await this.model.findByPk(id, { include: { all: true } });
      if (!project) {
        return { statusCode: 404, message: 'Not found', data: {} };
      }
      return { statusCode: 200, message: 'Success', data: project };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    try {
      const project = await this.model.update(updateProjectDto, {
        where: { id },
        returning: true,
      });
      return { statusCode: 200, message: 'Success', data: project[1][0] };
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
