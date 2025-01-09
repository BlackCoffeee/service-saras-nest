import { Injectable } from "@nestjs/common";
import { FloorQueryOptions, IFloor, IFloorRepository } from "./interfaces";
import { PrismaService } from "src/common/prisma.service";
import { FloorCreateDto, FloorPatchDto, FloorPutDto } from "./dto";

@Injectable()
export class FloorRepository implements IFloorRepository {

    constructor(
        private readonly prismaService: PrismaService,
    ) {}

    async create(data: FloorCreateDto, options?: FloorQueryOptions): Promise<IFloor> {
        const floor = await this.prismaService.floor.create({
            data: data,
        });

        return floor;
    }

    async patch(id: string, data: FloorPatchDto, options?: FloorQueryOptions): Promise<IFloor> {
        const floor = await this.prismaService.floor.update({
            where: { id },
            data: data,
        });
        return floor;
    }

    async put(id: string, data: FloorPutDto, options?: FloorQueryOptions): Promise<IFloor> {
        const floor = await this.prismaService.floor.update({
            where: { id },
            data: data,
        });
        return floor;
    }

    async delete(id: string, options?: FloorQueryOptions): Promise<void> {
        if (options?.includeDeleted) {
            // Hard delete
            await this.prismaService.floor.delete({
                where: { id },
            });
        } else {
            // Soft delete
            await this.prismaService.floor.update({
                where: { id },
                data: { deletedAt: new Date() },
            });
        }
    }

    async findAll(options?: FloorQueryOptions): Promise<IFloor[]> {
        const where = options?.includeDeleted ? {} : { deletedAt: null };
        const floors = await this.prismaService.floor.findMany({ where });
        return floors;
    }

    async findById(id: string, options?: FloorQueryOptions): Promise<IFloor> {
        const where = {
            id,
            ...(options?.includeDeleted ? {} : { deletedAt: null }),
        };
        
        const floor = await this.prismaService.floor.findFirst({ where });
        return floor;
    }
 
}