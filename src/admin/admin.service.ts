import {
  BadRequestException,
  ConflictException,
  Injectable,
  OnModuleInit,
} from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './models/admin.model';
import { decrypt, encrypt } from 'src/utils/encrypt-bcrypt';
import { Roles } from 'src/enum';
import config from 'src/config';
import { handleError } from 'src/utils/catch-error';
import { SignInAdminDto } from './dto/signin-admin';
import { TokenService } from 'src/utils/generate-token';
import { writeToCookie } from 'src/utils/write-cookie';
import { Response } from 'express';

@Injectable()
export class AdminService implements OnModuleInit {
  constructor(
    @InjectModel(Admin) private adminModel: typeof Admin,
    private readonly tokenService: TokenService,
  ) {}

  async onModuleInit(): Promise<void> {
    try {
      const isSuperAdmin = await this.adminModel.findOne({
        where: { role: Roles.SUPERADMIN },
      });
      if (!isSuperAdmin) {
        const hashedPassword = await encrypt(config.ADMIN_PASSWORD);
        await this.adminModel.create({
          username: config.ADMIN_USERNAME,
          email: config.ADMIN_EMAIL,
          hashed_password: hashedPassword,
          role: Roles.SUPERADMIN,
        });
      }
    } catch (error) {
      return handleError(error);
    }
  }

  async createAdmin(createAdminDto: CreateAdminDto): Promise<object> {
    try {
      const { username, password } = createAdminDto;
      const existsuser = await this.adminModel.findOne({ where: { username } });
      if (existsuser) {
        throw new ConflictException(`Email address already exists: ${username}`);
      }
      const hashedPassword = await encrypt(password);
      const admin = await this.adminModel.create({
        ...createAdminDto,
        hashed_password: hashedPassword,
      });
      return {
        statusCode: 201,
        message: 'success',
        data: admin,
      };
    } catch (error) {
      return handleError(error);
    }
  }

  async signInAdmin(
    signInAdminDto: SignInAdminDto,
    res: Response,
  ): Promise<object> {
    try {
      const { username, password } = signInAdminDto;
      const admin = await this.adminModel.findOne({ where: { username } });
      if (!admin) {
        throw new BadRequestException('username or password incorrect');
      }
      const { hashed_password, id, role } = admin?.dataValues;
      const isMatchPassword = await decrypt(password, hashed_password);
      if (!isMatchPassword) {
        throw new BadRequestException('username or password incorrect');
      }
       const payload = {
        id,
        role,
      };
      const accessToken = await this.tokenService.generateAccessToken(payload);
      const refreshToken =
        await this.tokenService.generateRefreshToken(payload);
      writeToCookie(res, 'refreshTokenAdmin', refreshToken);
      return {
        statusCode: 200,
        message: 'success',
        data: accessToken,
      };
    } catch (error) {
      return handleError(error);
    }
  }
}

