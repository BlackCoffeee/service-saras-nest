import { Module } from "@nestjs/common";
import { FloorService } from "./floor.service";
import { FloorController } from "./floor.controller";
import { FloorRepository } from "./floor.repository";
import { ValidationService } from "../../common/validation.service";
import { WinstonModule } from "nest-winston";
import { PrismaService } from "src/common/prisma.service";

@Module({
    imports: [
        WinstonModule.forRoot({
            // konfigurasi winston sesuai kebutuhan
        })
    ],
    providers: [
        FloorService,
        ValidationService,
        PrismaService,
        {
            provide: 'IFloorRepository',
            useClass: FloorRepository
        }
    ],
    controllers: [FloorController],
    exports: [FloorService],
})
export class FloorModule {}