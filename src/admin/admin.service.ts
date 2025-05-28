import { Injectable,ConflictException,InternalServerErrorException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './models/admin.model';
import { encrypt } from 'src/utils/encrypt-bcrypt';
import { Roles } from 'src/enum';
@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private adminModel:typeof Admin){}

  async createSuperAdmin(createAdminDto:CreateAdminDto): Promise<object>{
    try {
      const {username,password,email}=createAdminDto;
      const existEmail=await this.adminModel.findOne({where:{email}});
      if(existEmail){
        throw new ConflictException('Email address already exists');
      }
      const hashedPassword=await encrypt(password);
      const superadmin=await this.adminModel.create({
        ...createAdminDto,
        hashed_password:hashedPassword,
        role:Roles.SUPERADMIN,
      });
      return {
        statusCode:201,
        message:'success',
        data:superadmin,
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}