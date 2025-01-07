import { Module } from '@nestjs/common';
import { EdificesController } from './edifices.controller';
import { EdificesService } from './edifices.service';
import { EdificesValidation } from './edifices.validation';

@Module({
    controllers: [EdificesController],
    providers: [EdificesService, EdificesValidation],
})
export class EdificesModule {}
