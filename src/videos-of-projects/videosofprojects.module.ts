import { Module } from '@nestjs/common';
import { VideosOfProjectsService } from './videosofprojects.service';
import { VideosofprojectsController } from './videosofprojects.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { VideosOfProjects } from './models/videosofproject.model';

@Module({
  imports: [SequelizeModule.forFeature([VideosOfProjects])],
  controllers: [VideosofprojectsController],
  providers: [VideosOfProjectsService],
})
export class VideosofprojectsModule {}
