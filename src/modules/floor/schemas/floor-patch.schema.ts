/**
 * Schema validasi untuk memperbarui data lantai secara parsial menggunakan Zod.
 * 
 * Schema ini mendefinisikan struktur dan aturan validasi untuk data yang diperlukan
 * saat melakukan update parsial (PATCH) pada data lantai. Semua field bersifat opsional
 * karena dalam PATCH request, client hanya perlu mengirim field yang ingin diubah.
 * 
 * @module FloorPatchSchema
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createdAt 2024-01-01
 */

import { z } from 'zod';

export const FloorPatchSchema = z.object({
    floorName: z.string().min(1).max(50).optional(),
    floorDesc: z.string().max(255).optional(),
    floorStatus: z.boolean().optional()
});

/**
 * Type yang dihasilkan dari FloorPatchSchema
 * Digunakan untuk type checking saat runtime
 */
export type FloorPatchSchemaType = z.infer<typeof FloorPatchSchema>;