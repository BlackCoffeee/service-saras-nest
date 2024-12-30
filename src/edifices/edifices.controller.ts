import { Controller, Get, Post, HttpCode, HttpStatus, Body, UseGuards, Logger } from '@nestjs/common';
import { EdificesService } from './edifices.service';
import { CreateEdificeRequest, EdificeResponse } from '../model/edifices.model';
import { WebResponse } from '../model/web-response.model';
import { BearerAuthGuard } from '../auth/guards/bearer-auth.guard';
import { User } from 'src/auth/decorators/user.decorator';
import { SSOUser } from 'src/auth/interfaces/sso-user.interface';

@Controller('api/datamaster/edifices')
@UseGuards(BearerAuthGuard)
export class EdificesController {
    constructor(private edificeService: EdificesService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    async getAll(@User() userInfo: SSOUser): Promise<WebResponse<EdificeResponse[]>> {
        const edifices = await this.edificeService.getAll();
        Logger.log('user info accessing edifices get all api', userInfo);
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
