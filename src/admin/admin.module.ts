import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './models/admin.model';
import { TokenService } from 'src/utils/generate-token';
import { JwtModule } from '@nestjs/jwt';

@Module({

  imports: [
    SequelizeModule.forFeature([Admin]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'default_secret', 
      signOptions: { expiresIn: '1h' }, 
    }),
  ],

  imports: [SequelizeModule.forFeature([Admin])],

  controllers: [AdminController],
  providers: [AdminService, TokenService],
})
export class AdminModule {}

