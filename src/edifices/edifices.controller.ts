import { Controller, Get, Post, HttpCode, HttpStatus, Body } from '@nestjs/common';
import { EdificesService } from './edifices.service';
import { CreateEdificeRequest, EdificeResponse } from '../model/edifices.model';
import { WebResponse } from '../model/web-response.model';

@Controller('api/datamaster/edifices')
export class EdificesController {
    constructor(private edificeService: EdificesService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    async getAll(): Promise<WebResponse<EdificeResponse[]>> {
        const edifices = await this.edificeService.getAll();
        return new WebResponse<EdificeResponse[]>(
            HttpStatus.OK,
            'Edifices fetched successfully',
            edifices,
        );
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(
        @Body() request: CreateEdificeRequest,
    ): Promise<WebResponse<EdificeResponse>> {
        const edifice = await this.edificeService.create(request);
        return new WebResponse<EdificeResponse>(
            HttpStatus.CREATED,
            'Edifice created successfully',
            edifice,
        );
    }
}
