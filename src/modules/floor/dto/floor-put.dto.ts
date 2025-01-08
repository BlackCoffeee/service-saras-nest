/**
 * DTO untuk mengupdate seluruh data lantai.
 * 
 * Class ini mendefinisikan struktur data yang diperlukan saat melakukan update penuh (PUT)
 * pada data lantai. Menggunakan class-validator untuk validasi input.
 * 
 * @class FloorPutDto
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createdAt 2024-01-01
 */

import { IsNotEmpty, IsOptional, IsString, MaxLength, IsBoolean } from "class-validator";

export class FloorPutDto {
    /**
     * Nama lantai
     * @property {string} floorName - Nama lantai, wajib diisi, maksimal 50 karakter
     */
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    floorName: string;

    /**
     * Deskripsi lantai (opsional)
     * @property {string} floorDesc - Deskripsi lantai, maksimal 255 karakter
     */
    @IsOptional()
    @IsString()
    @MaxLength(255)
    floorDesc?: string;

    /**
     * Status lantai (aktif/tidak aktif)
     * @property {boolean} floorStatus - Status lantai, wajib diisi
     */
    @IsNotEmpty()
    @IsBoolean()
    floorStatus: boolean;
}