import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Books } from './models/book.model';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Teachers } from 'src/teachers/models/teacher.model';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Books) private model: typeof Books) {}

  async create(createBookDto: CreateBookDto) {
    try {
      console.log(createBookDto);
      
      const book = await this.model.create({...createBookDto});     
      return { statusCode: 201, message: 'Success', data: book };
    } catch (error) {
      throw new Error("Book adding error:", error)
    }
  }

  async findAll() {
    try {
      const books = await this.model.findAll({ include: { model: Teachers } });
      return { statusCode: 200, message: 'Success', data: books };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: number) {
    try {
      const book = await this.model.findByPk(id, { include: { model: Teachers } });
      if (!book) {
        return { statusCode: 404, message: 'Not found', data: {} };
      }
      return { statusCode: 200, message: 'Success', data: book };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    try {
      const book = await this.model.update(updateBookDto, { where: { id }, returning: true });
      return { statusCode: 200, message: 'Success', data: book[1][0] };
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
