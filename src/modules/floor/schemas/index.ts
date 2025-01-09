/**
 * File indeks untuk mengekspor semua skema validasi lantai.
 * 
 * File ini berfungsi sebagai titik masuk utama untuk mengakses semua skema validasi
 * yang terkait dengan modul lantai. Mengekspor skema untuk operasi create, patch,
 * dan put yang digunakan dalam validasi data lantai.
 * 
 * @module FloorSchemas
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createdAt 2024-01-01
 */

export * from './floor-create.schema';
export * from './floor-patch.schema';
export * from './floor-put.schema';
