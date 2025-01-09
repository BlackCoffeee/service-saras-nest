// Import modul yang dibutuhkan dari NestJS dan library lainnya
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston'; // Import untuk logging
import { Logger } from 'winston'; // Import logger
import { PrismaService } from '../../common/prisma.service'; // Import service Prisma untuk akses database
import { CreateEdificeRequest, EdificeResponse } from '../../model/edifices.model'; // Import model/interface
import { ValidationService } from '../../common/validation.service'; // Import service validasi
import { EdificesValidation } from './edifices.validation'; // Import skema validasi

// Dekorator Injectable menandakan bahwa class ini adalah service yang bisa di-inject
@Injectable()
export class EdificesService {
    // Constructor untuk dependency injection
    constructor(
        @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger, // Inject logger untuk logging
        private prismaService: PrismaService, // Inject PrismaService untuk akses database
        private validationService: ValidationService, // Inject ValidationService untuk validasi data
    ) {}

     // Method untuk mendapatkan semua data edifice
    // Return Promise dengan tipe array EdificeResponse[]
    async getAll(): Promise<EdificeResponse[]> {
        try {
            // Mengambil semua data edifice dari database menggunakan PrismaService
            const edifices = await this.prismaService.edifice.findMany();

            // Cek jika data kosong, throw exception dengan status NO_CONTENT
            if (edifices.length === 0) {
                this.logger.warn('edificeService.getAll: Building not found');
                throw new HttpException('Building not found', HttpStatus.NO_CONTENT);
            }

            // Mengembalikan array data edifice
            return edifices;
        } catch (error) {
            // Log error jika terjadi kesalahan
            this.logger.error(`edificeService.getAll: ${error}`);
            throw error;
        }
    }

    // Method untuk mendapatkan data edifice berdasarkan ID 
    // Menerima parameter id bertipe string
    // Return Promise dengan tipe EdificeResponse
    async getById(id: string): Promise<EdificeResponse> {
        const edifice = await this.prismaService.edifice.findUnique({ where: { id } });
        if (!edifice) {
            this.logger.warn(`edificeService.getById: Building not found with id ${id}`);
            throw new HttpException('Building not found', HttpStatus.NOT_FOUND);
        }
        return edifice;
    }

    // Method untuk membuat data edifice baru
    // Menerima parameter request bertipe CreateEdificeRequest
    // Return Promise dengan tipe EdificeResponse
    async create(request: CreateEdificeRequest): Promise<EdificeResponse> {
        this.logger.debug(`edificeService.create: ${JSON.stringify(request)}`);
        // Validasi data request menggunakan skema validasi yang sudah didefinisikan
        const createRequest: CreateEdificeRequest =
            this.validationService.validate(EdificesValidation.CREATE, request);

        // Membuat data baru di database menggunakan PrismaService
        const edifice = await this.prismaService.edifice.create({
            data: {
                ...createRequest, // Spread operator untuk menyalin semua property dari createRequest
            },
        });

        // Mengembalikan data edifice yang berhasil dibuat
        return edifice;
    }

   
}
// created by : Muhammad Arif https://github.com/BlackCoffeee
// created at : 2024-12-27
// updated by : .... https://github.com/....
// updated at : ....