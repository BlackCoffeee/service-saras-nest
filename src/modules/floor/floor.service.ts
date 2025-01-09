/**
 * Service untuk manajemen data lantai.
 * Mengimplementasikan IFloorService untuk menyediakan operasi CRUD dan validasi data lantai.
 * 
 * @class FloorService
 * @implements {IFloorService}
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createdAt 2024-01-07
 */

import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { FloorQueryOptions, IFloor, IFloorRepository, IFloorService } from "./interfaces";
import { ValidationService } from "src/common/validation.service";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { FloorCreateDto, FloorPatchDto, FloorPutDto } from "./dto";
import { FloorCreateSchema, FloorPatchSchema, FloorPutSchema } from "./schemas";
import { ZodError } from "zod";

@Injectable()
export class FloorService implements IFloorService {
    /**
     * Membuat instance FloorService
     * @param {IFloorRepository} floorRepository - Repository untuk akses data lantai
     * @param {ValidationService} validationService - Service untuk validasi data
     * @param {Logger} logger - Logger untuk pencatatan aktivitas
     */
    constructor(
        @Inject('IFloorRepository')
        private readonly floorRepository: IFloorRepository,
        private readonly validationService: ValidationService,
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    ) {}

    /**
     * Membuat data lantai baru
     * @param {FloorCreateDto} data - Data lantai yang akan dibuat
     * @param {FloorQueryOptions} [options] - Opsi query tambahan
     * @returns {Promise<IFloor>} Data lantai yang berhasil dibuat
     * @throws {HttpException} Jika validasi gagal atau terjadi error
     */
    async create(data: FloorCreateDto, options?: FloorQueryOptions): Promise<IFloor> {
        try {
            const validatedData = this.validationService.validate(FloorCreateSchema, data) as FloorCreateDto;
            const floor = await this.floorRepository.create(validatedData, options);

            this.logger.info(`Floor created: ${floor.id}`);
            return floor;
        } catch (error) {
            this.logger.error('Error creating floor', error);
            if (error instanceof ZodError) {
                throw new HttpException(error.errors, HttpStatus.BAD_REQUEST);
            }
            throw error;
        }
    }

    /**
     * Memperbarui sebagian data lantai
     * @param {string} id - ID lantai yang akan diupdate
     * @param {FloorPatchDto} data - Data lantai yang akan diupdate secara parsial
     * @param {FloorQueryOptions} [options] - Opsi query tambahan
     * @returns {Promise<IFloor>} Data lantai yang berhasil diupdate
     * @throws {HttpException} Jika validasi gagal atau terjadi error
     */
    async patch(id: string, data: FloorPatchDto, options?: FloorQueryOptions): Promise<IFloor> {
        try {
            const validatedData = this.validationService.validate(FloorPatchSchema, data);
            const floor = await this.floorRepository.patch(id, validatedData, options);

            this.logger.info(`Floor updated: ${floor.id}`);
            return floor;
        } catch (error) {
            this.logger.error('Error updating floor', error);
            if (error instanceof ZodError) {
                throw new HttpException(error.errors, HttpStatus.BAD_REQUEST);
            }
            throw error;
        }
    }   

    /**
     * Memperbarui seluruh data lantai
     * @param {string} id - ID lantai yang akan diupdate
     * @param {FloorPutDto} data - Data lantai yang akan diupdate secara lengkap
     * @param {FloorQueryOptions} [options] - Opsi query tambahan
     * @returns {Promise<IFloor>} Data lantai yang berhasil diupdate
     * @throws {HttpException} Jika validasi gagal atau terjadi error
     */
    async put(id: string, data: FloorPutDto, options?: FloorQueryOptions): Promise<IFloor> {
        try {
            const validatedData = this.validationService.validate(FloorPutSchema, data) as FloorPutDto;
            const floor = await this.floorRepository.put(id, validatedData, options);

            this.logger.info(`Floor updated: ${floor.id}`);
            return floor;
        } catch (error) {
            this.logger.error('Error updating floor', error);
            if (error instanceof ZodError) {
                throw new HttpException(error.errors, HttpStatus.BAD_REQUEST);
            }
            throw error;
        }
    }

    /**
     * Menghapus data lantai
     * @param {string} id - ID lantai yang akan dihapus
     * @param {FloorQueryOptions} [options] - Opsi query tambahan
     * @returns {Promise<void>}
     * @throws {Error} Jika terjadi error saat menghapus
     */
    async delete(id: string, options?: FloorQueryOptions): Promise<void> {
        try {
            await this.floorRepository.delete(id, options);
            this.logger.info(`Floor deleted: ${id}`);
        } catch (error) {
            this.logger.error('Error deleting floor', error);
            throw error;
        }
    }

    /**
     * Mengambil semua data lantai
     * @param {FloorQueryOptions} [options] - Opsi query tambahan
     * @returns {Promise<IFloor[]>} Array data lantai
     * @throws {Error} Jika terjadi error saat mengambil data
     */
    async findAll(options?: FloorQueryOptions): Promise<IFloor[]> {
        try {
            return await this.floorRepository.findAll(options);
        } catch (error) {
            this.logger.error('Error finding all floors', error);
            throw error;
        }
    }

    /**
     * Mencari data lantai berdasarkan ID
     * @param {string} id - ID lantai yang dicari
     * @param {FloorQueryOptions} [options] - Opsi query tambahan
     * @returns {Promise<IFloor>} Data lantai yang ditemukan
     * @throws {Error} Jika terjadi error saat mencari data
     */
    async findById(id: string, options?: FloorQueryOptions): Promise<IFloor> {
        try {
            return await this.floorRepository.findById(id, options);
        } catch (error) {
            this.logger.error('Error finding floor by id', error);
            throw error;
        }
    }
}