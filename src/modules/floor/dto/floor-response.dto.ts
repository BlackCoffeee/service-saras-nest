/**
 * @description
 * DTO untuk response data lantai
 * 
 * @class FloorResponseDto
 * Class ini digunakan untuk:
 * - Transformasi data lantai dari database ke response API
 * - Mengatur property apa saja yang akan di-expose ke client
 * - Memastikan konsistensi format data yang dikirim
 * 
 * Property yang di-expose:
 * - id: ID unik lantai
 * - floorName: Nama lantai
 * - floorDesc: Deskripsi lantai
 * - floorStatus: Status aktif/non-aktif lantai
 * - createdAt: Waktu pembuatan data
 * - updatedAt: Waktu terakhir update
 * - deletedAt: Waktu penghapusan (soft delete)
 * 
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createdAt 2024-01-01
 */

import { Exclude, Expose } from "class-transformer";

@Exclude()
export class FloorResponseDto {
    @Expose()
    id: string;

    @Expose()
    floorName: string;

    @Expose()
    floorDesc: string;

    @Expose()
    floorStatus: boolean;

    @Expose()
    createdAt: Date;

    @Expose()
    updatedAt: Date;

    @Expose()
    deletedAt: Date;

    /**
     * Constructor untuk membuat instance FloorResponseDto
     * @param partial - Partial object dari FloorResponseDto
     */
    constructor(partial: Partial<FloorResponseDto>) {
        Object.assign(this, partial);
    }
}
