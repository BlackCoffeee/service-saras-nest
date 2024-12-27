import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { EdificesModule } from './edifices/edifices.module';

@Module({
    imports: [CommonModule, EdificesModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
