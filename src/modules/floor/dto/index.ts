/**
 * File ini berfungsi sebagai barrel file untuk mengekspor semua DTO (Data Transfer Object) 
 * yang terkait dengan modul Floor.
 * 
 * DTO yang diekspor:
 * - FloorCreateDto: DTO untuk membuat data lantai baru
 * - FloorPutDto: DTO untuk mengupdate seluruh data lantai
 * - FloorPatchDto: DTO untuk mengupdate sebagian data lantai
 * - FloorResponseDto: DTO untuk response data lantai
 * 
 * Dengan menggunakan barrel file ini, kita dapat mengimpor semua DTO
 * yang diperlukan dari satu lokasi, sehingga memudahkan pengelolaan impor.
 * 
 * @module FloorDTO
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createdAt 2024-01-01
 */

export * from './floor-create.dto';
export * from './floor-put.dto';
export * from './floor-patch.dto';
export * from './floor-response.dto';

