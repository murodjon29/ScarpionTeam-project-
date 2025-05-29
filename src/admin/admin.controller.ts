import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UseGuards
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { SignInAdminDto } from './dto/signin-admin';
import { Response } from 'express';
import { AuthGuard } from 'src/guards/auth.guard';


@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}


  @UseGuards(AuthGuard)
  @Post()
  async createAdmin(@Body() createAdminDto: CreateAdminDto): Promise<object> {
    return this.adminService.createAdmin(createAdminDto);
  }

  @Post('signin')
  async signInAdmin(
    @Body() signInAdminDto: SignInAdminDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<object> {
    return this.adminService.signInAdmin(signInAdminDto, res);

  @Post('super')
  async createSuperAdmin(
    @Body() createAdminDto: CreateAdminDto,
  ): Promise<object> {
    return this.adminService.createSuperAdmin(createAdminDto);

  }
}
