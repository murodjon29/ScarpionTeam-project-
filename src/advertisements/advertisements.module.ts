import { Module } from '@nestjs/common';
import { AdvertisementsService } from './advertisements.service';
import { AdvertisementsController } from './advertisements.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Advertisement } from './models/advertisements.models';

@Module({
  imports: [SequelizeModule.forFeature([Advertisement])],
  controllers: [AdvertisementsController],
  providers: [AdvertisementsService],
})
export class AdvertisementsModule {}
