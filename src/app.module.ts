import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { TeachersModule } from './teachers/teachers.module';
import { GroupsTeachersModule } from './groups-teachers/groups-teachers.module';
import { Teachers } from './teachers/models/teacher.model';
import { Group_teachers } from './groups-teachers/models/groups-teacher.model';
import { Books } from './books/models/book.model';
import { BooksModule } from './books/books.module';
import { ProjectsModule } from './projects/projects.module';
import { VideosOfProjects } from './videos-of-projects/models/videosofproject.model';
import { Project } from './projects/models/project.model';

@Module({
  imports: [ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASS,
      database: process.env.PG_DB,
      logging: false,
      synchronize: true,
      autoLoadModels: true,
      models: [Teachers, Group_teachers, Books, VideosOfProjects, Project]
    }),
    TeachersModule,
    GroupsTeachersModule,
    BooksModule,
    ProjectsModule,
    VideosOfProjects
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
