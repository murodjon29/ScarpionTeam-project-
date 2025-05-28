import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('super')
  async createSuperAdmin(
    @Body() createAdminDto: CreateAdminDto,
  ): Promise<object> {
    return this.adminService.createSuperAdmin(createAdminDto);
  }
}
