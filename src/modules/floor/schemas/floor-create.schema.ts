/**
 * Schema validasi untuk pembuatan data lantai baru menggunakan Zod.
 * 
 * Schema ini mendefinisikan struktur dan aturan validasi untuk data yang diperlukan
 * saat membuat lantai baru. Menggunakan library Zod untuk type-safe validation.
 * 
 * @module FloorCreateSchema
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createdAt 2024-01-01
 */

import { z } from 'zod';

export const FloorCreateSchema = z.object({
    floorName: z.string().min(1).max(50),
    floorDesc: z.string().max(255).optional(),
    floorStatus: z.boolean(),
});

/**
 * Type yang dihasilkan dari FloorCreateSchema
 * Digunakan untuk type checking saat runtime
 */
export type FloorCreateSchemaType = z.infer<typeof FloorCreateSchema>;