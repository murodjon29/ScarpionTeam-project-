import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { TeachersModule } from './teachers/teachers.module';
import { GroupsTeachersModule } from './groups-teachers/groups-teachers.module';
import { Teachers } from './teachers/models/teacher.model';
import { Group_teachers } from './groups-teachers/models/groups-teacher.model';
import { VideosOfTeachersModule } from './videos-of-teachers/videos-of-teachers.module';
import { Videos_of_teachers } from './videos-of-teachers/models/videos-of-teacher.model';

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
      models: [Teachers, Group_teachers, Videos_of_teachers]
    }),
    TeachersModule,
    GroupsTeachersModule,
    VideosOfTeachersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
