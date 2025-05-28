import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

import { TeachersModule } from './teachers/teachers.module';
import { GroupsTeachersModule } from './groups-teachers/groups-teachers.module';

import { Teachers } from './teachers/models/teacher.model';
import { Group_teachers } from './groups-teachers/models/groups-teacher.model';

import { AdvertisementsModule } from './advertisements/advertisements.module'; // import qilish
import { VacanciesModule } from './vacancies/vacancies.module'; // import qilish

import { Books } from './books/models/book.model';
import { BooksModule } from './books/books.module';

import { ProjectsModule } from './projects/projects.module';
import { VideosOfProjects } from './videos-of-projects/models/videosofproject.model';
import { Project } from './projects/models/project.model';

import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/models/admin.model';

import { VideosofprojectsModule } from './videos-of-projects/videosofprojects.module';
import { GroupsStudentsModule } from './groups-students/groups-students.module';

import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: config.PG_HOST,
      port: Number(config.PG_PORT),
      username: config.PG_USER,
      password: config.PG_PASS,
      database: config.PG_DB,
      logging: false,
      synchronize: true,
      autoLoadModels: true,
      models: [
        Teachers,
        Group_teachers,
        Books,
        VideosOfProjects,
        Project,
        Admin,
      ],
    }),

    TeachersModule,
    GroupsTeachersModule,
    BooksModule,
    ProjectsModule,
    AdminModule,
    VideosofprojectsModule,
    GroupsStudentsModule,
    AdvertisementsModule,
    VacanciesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}