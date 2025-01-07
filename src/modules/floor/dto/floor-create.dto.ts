/**
 * DTO untuk membuat data lantai baru.
 * 
 * Class ini mendefinisikan struktur data yang diperlukan saat membuat lantai baru.
 * Menggunakan class-validator untuk validasi input.
 * 
 * @class FloorCreateDto
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createdAt 2024-01-01
 */

import { IsNotEmpty, IsOptional, IsString, MaxLength, IsBoolean } from "class-validator";

export class FloorCreateDto {
    /**
     * Nama lantai
     * @property {string} floorName - Nama lantai, maksimal 50 karakter
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
    floorDesc: string;

    /**
     * Status lantai (aktif/tidak aktif)
     * @property {boolean} floorStatus - Status lantai
     */
    @IsNotEmpty()
    @IsBoolean()
    floorStatus: boolean;
}