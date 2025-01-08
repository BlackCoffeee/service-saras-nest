/**
 * Interface dan tipe untuk modul manajemen lantai.
 * File ini mendefinisikan struktur data dan kontrak untuk service dan repository lantai.
 * 
 * @module FloorInterfaces
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createdAt 2025-01-07
 */

import { FloorCreateDto, FloorPatchDto, FloorPutDto } from "../dto";
import { FloorQueryOptions } from "./floor-query-option.interface";

/**
 * Interface dasar untuk entitas lantai.
 * Mendefinisikan properti-properti yang dimiliki oleh setiap data lantai.
 * 
 * @interface IFloor
 */
export interface IFloor {
    id: string;
    floorName: string;
    floorDesc: string;
    floorStatus: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

/**
 * Interface untuk service lantai.
 * Mendefinisikan metode-metode yang tersedia untuk manipulasi data lantai di level service.
 * 
 * @interface IFloorService
 * @extends {IFloor}
 */
export interface IFloorService extends IFloor {
    /**
     * Membuat data lantai baru
     * @param {FloorCreateDto} data - Data lantai yang akan dibuat
     * @param {FloorQueryOptions} [options] - Opsi query tambahan
     * @returns {Promise<IFloor>} Data lantai yang berhasil dibuat
     */
    create(data: FloorCreateDto, options?: FloorQueryOptions): Promise<IFloor>;

    /**
     * Memperbarui sebagian data lantai
     * @param {string} id - ID lantai yang akan diupdate
     * @param {FloorPatchDto} data - Data lantai yang akan diupdate
     * @param {FloorQueryOptions} [options] - Opsi query tambahan
     * @returns {Promise<IFloor>} Data lantai yang berhasil diupdate
     */
    patch(id: string, data: FloorPatchDto, options?: FloorQueryOptions): Promise<IFloor>;

    /**
     * Memperbarui seluruh data lantai
     * @param {string} id - ID lantai yang akan diupdate
     * @param {FloorPutDto} data - Data lantai yang akan diupdate
     * @param {FloorQueryOptions} [options] - Opsi query tambahan
     * @returns {Promise<IFloor>} Data lantai yang berhasil diupdate
     */
    put(id: string, data: FloorPutDto, options?: FloorQueryOptions): Promise<IFloor>;

    /**
     * Menghapus data lantai
     * @param {string} id - ID lantai yang akan dihapus
     * @param {FloorQueryOptions} [options] - Opsi query tambahan
     * @returns {Promise<void>}
     */
    delete(id: string, options?: FloorQueryOptions): Promise<void>;

    /**
     * Mengambil semua data lantai
     * @param {FloorQueryOptions} [options] - Opsi query tambahan
     * @returns {Promise<IFloor[]>} Array data lantai
     */
    findAll(options?: FloorQueryOptions): Promise<IFloor[]>;

    /**
     * Mencari data lantai berdasarkan ID
     * @param {string} id - ID lantai yang dicari
     * @param {FloorQueryOptions} [options] - Opsi query tambahan
     * @returns {Promise<IFloor>} Data lantai yang ditemukan
     */
    findById(id: string, options?: FloorQueryOptions): Promise<IFloor>;
}

/**
 * Interface untuk repository lantai.
 * Mendefinisikan metode-metode yang tersedia untuk manipulasi data lantai di level repository.
 * 
 * @interface IFloorRepository
 * @extends {IFloor}
 */
export interface IFloorRepository {
    /**
     * Membuat data lantai baru di database
     * @param {FloorCreateDto} data - Data lantai yang akan dibuat
     * @param {FloorQueryOptions} [options] - Opsi query tambahan
     * @returns {Promise<IFloor>} Data lantai yang berhasil dibuat
     */
    create(data: FloorCreateDto, options?: FloorQueryOptions): Promise<IFloor>;

    /**
     * Memperbarui sebagian data lantai di database
     * @param {string} id - ID lantai yang akan diupdate
     * @param {FloorPatchDto} data - Data lantai yang akan diupdate
     * @param {FloorQueryOptions} [options] - Opsi query tambahan
     * @returns {Promise<IFloor>} Data lantai yang berhasil diupdate
     */
    patch(id: string, data: FloorPatchDto, options?: FloorQueryOptions): Promise<IFloor>;

    /**
     * Memperbarui seluruh data lantai di database
     * @param {string} id - ID lantai yang akan diupdate
     * @param {FloorPutDto} data - Data lantai yang akan diupdate
     * @param {FloorQueryOptions} [options] - Opsi query tambahan
     * @returns {Promise<IFloor>} Data lantai yang berhasil diupdate
     */
    put(id: string, data: FloorPutDto, options?: FloorQueryOptions): Promise<IFloor>;

    /**
     * Menghapus data lantai dari database
     * @param {string} id - ID lantai yang akan dihapus
     * @param {FloorQueryOptions} [options] - Opsi query tambahan
     * @returns {Promise<void>}
     */
    delete(id: string, options?: FloorQueryOptions): Promise<void>;

    /**
     * Mengambil semua data lantai dari database
     * @param {FloorQueryOptions} [options] - Opsi query tambahan
     * @returns {Promise<IFloor[]>} Array data lantai
     */
    findAll(options?: FloorQueryOptions): Promise<IFloor[]>;

    /**
     * Mencari data lantai berdasarkan ID di database
     * @param {string} id - ID lantai yang dicari
     * @param {FloorQueryOptions} [options] - Opsi query tambahan
     * @returns {Promise<IFloor>} Data lantai yang ditemukan
     */
    findById(id: string, options?: FloorQueryOptions): Promise<IFloor>;
}