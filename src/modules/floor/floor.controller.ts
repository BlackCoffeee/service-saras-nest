import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put, UseGuards } from "@nestjs/common";
import { FloorService } from "./floor.service";
import { BearerAuthGuard } from "../auth/guards/bearer-auth.guard";
import { FloorCreateDto, FloorPatchDto, FloorPutDto, FloorResponseDto } from "./dto";
import { WebResponse } from "../../model/web-response.model";

@Controller('floor')
@UseGuards(BearerAuthGuard)
export class FloorController {
    constructor(private readonly floorService: FloorService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() body: FloorCreateDto): Promise<WebResponse<FloorResponseDto>> {
        const floor = await this.floorService.create(body);
        const response = new FloorResponseDto(floor);
        return {
            statusCode: HttpStatus.CREATED,
            message: 'Floor created successfully',
            data: response,
        };
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(): Promise<WebResponse<FloorResponseDto[]>> {
        const floors = await this.floorService.findAll();
        const response = floors.map((floor) => new FloorResponseDto(floor));
        return {
            statusCode: HttpStatus.OK,
            message: 'Floors fetched successfully',
            data: response,
        };
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findById(@Param('id') id: string): Promise<WebResponse<FloorResponseDto>> {
        const floor = await this.floorService.findById(id);
        const response = new FloorResponseDto(floor);
        return {
            statusCode: HttpStatus.OK,
            message: 'Floor fetched successfully',
            data: response,
        };
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async update(@Param('id') id: string, @Body() body: FloorPutDto): Promise<WebResponse<FloorResponseDto>> {
        const floor = await this.floorService.put(id, body);
        const response = new FloorResponseDto(floor);
        return {
            statusCode: HttpStatus.OK,
            message: 'Floor updated successfully',
            data: response,
        };
    }

    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    async patch(@Param('id') id: string, @Body() body: FloorPatchDto): Promise<WebResponse<FloorResponseDto>> {
        const floor = await this.floorService.patch(id, body);
        const response = new FloorResponseDto(floor);
        return {
            statusCode: HttpStatus.OK,
            message: 'Floor updated successfully',
            data: response,
        };
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id') id: string): Promise<WebResponse<null>> {
        await this.floorService.delete(id);

        return {
            statusCode: HttpStatus.OK,
            message: 'Floor deleted successfully',
            data: null,
        };
    }

}