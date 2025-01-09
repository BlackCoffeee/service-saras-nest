/**
 * Schema validasi untuk memperbarui data lantai secara lengkap menggunakan Zod.
 * 
 * Schema ini mendefinisikan struktur dan aturan validasi untuk data yang diperlukan
 * saat melakukan update lengkap (PUT) pada data lantai. Semua field wajib diisi
 * kecuali floorDesc yang bersifat opsional.
 * 
 * @module FloorPutSchema
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createdAt 2024-01-01
 */

import { z } from 'zod';

export const FloorPutSchema = z.object({
    floorName: z.string().min(1).max(50),
    floorDesc: z.string().max(255).optional(),
    floorStatus: z.boolean()
});

/**
 * Type yang dihasilkan dari FloorPutSchema
 * Digunakan untuk type checking saat runtime
 */
export type FloorPutSchemaType = z.infer<typeof FloorPutSchema>;