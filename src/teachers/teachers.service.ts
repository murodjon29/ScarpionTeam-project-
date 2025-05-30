import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Teachers } from './models/teacher.model';
import { encrypt } from 'src/utils/encrypt-bcrypt';

@Injectable()
export class TeachersService {
  constructor(@InjectModel(Teachers) private model: typeof Teachers) { }
  async create(createTeacherDto: CreateTeacherDto): Promise<Object> {
    try {
      const { full_name, email, password, specialist } = createTeacherDto;
      if (await this.model.findOne({ where: { email } })) {
        throw new ConflictException();
      }
      const hashedPassword = await encrypt(password);
      const teacher = await this.model.create({
        full_name,
        email,
        password: hashedPassword,
        specialist,
      });
      return { statusCode: 201, message: 'Success', data: teacher };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findAll(): Promise<Object> {
    try {
      const teachers = await this.model.findAll({include: {all: true}})
      return { statusCode: 200, message: "Success", data: teachers }
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: number): Promise<Object> {
    try {
      const teacher = await this.model.findByPk(id, {include: {all: true}})
      if (!teacher) {
        return { statusCode: 404, message: 'Not found', data: {} };
      }
      return { statusCode: 200, message: 'Success', data: teacher };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto): Promise<Object> {
    try {
      if (!(await this.model.findByPk(id))) {
        return { statusCode: 404, message: 'Not found', data: {} };
      }
      const teacher = await this.model.update(updateTeacherDto, {
        where: { id },
        returning: true,
      });
      return { statusCode: 200, message: 'Success', data: teacher[1][0] };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async remove(id: number): Promise<Object> {
    try {
      if (!(await this.model.findByPk(id))) {
        return { statusCode: 404, message: 'Not found', data: {} };
      }
      const teacher = this.model.destroy({ where: { id } });
      return { statusCode: 200, messae: 'Success', data: {} };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
