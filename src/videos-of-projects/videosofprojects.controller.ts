import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VideosOfProjectsService } from './videosofprojects.service';
import { CreateVideosofprojectDto } from './dto/create-videosofproject.dto';
import { UpdateVideosofprojectDto } from './dto/update-videosofproject.dto';

@Controller('videosofprojects')
export class VideosofprojectsController {
  constructor(
    private readonly videosofprojectsService: VideosOfProjectsService,
  ) {}

  @Post()
  create(@Body() createVideosofprojectDto: CreateVideosofprojectDto) {
    return this.videosofprojectsService.create(createVideosofprojectDto);
  }

  @Get()
  findAll() {
    return this.videosofprojectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videosofprojectsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVideosofprojectDto: UpdateVideosofprojectDto,
  ) {
    return this.videosofprojectsService.update(+id, updateVideosofprojectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videosofprojectsService.remove(+id);
  }
}
