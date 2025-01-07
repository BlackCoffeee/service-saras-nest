/**
 * DTO untuk mengupdate sebagian data lantai.
 * 
 * Class ini mendefinisikan struktur data yang diperlukan saat melakukan update parsial (PATCH)
 * pada data lantai. Semua field bersifat opsional karena dalam PATCH request, client hanya perlu
 * mengirim field yang ingin diubah. Menggunakan class-validator untuk validasi input.
 * 
 * @class FloorPatchDto
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createdAt 2024-01-01
 */

import { IsOptional, IsString, MaxLength, IsBoolean } from "class-validator";

export class FloorPatchDto {
    /**
     * Nama lantai (opsional)
     * @property {string} floorName - Nama lantai, maksimal 50 karakter
     */
    @IsOptional()
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
     * Status lantai (opsional)
     * @property {boolean} floorStatus - Status aktif/non-aktif lantai
     */
    @IsOptional()
    @IsBoolean()
    floorStatus: boolean;
}