/**
 * File: env.schema.ts
 * Deskripsi: Schema validasi untuk environment variables menggunakan Zod
 * 
 * File ini berisi:
 * - Schema validasi untuk semua environment variables yang digunakan aplikasi
 * - Type definition yang di-generate dari schema
 * 
 * Fitur utama:
 * - Validasi tipe data dan format environment variables
 * - Default values untuk beberapa config
 * - Type safety dengan TypeScript
 */

import { z } from 'zod';

export const envSchema = z.object({
    // Server Config
    PORT: z.string().default('3000'),
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),

    // Database Config
    DATABASE_URL: z.string().min(1, 'Database URL is required'),

    // OAuth Config
    OAUTH_VERIFY_TOKEN_URL: z.string().url('Invalid OAuth verify token URL'),
});

/**
 * Type yang di-generate dari schema environment variables
 * Digunakan untuk type safety saat mengakses env variables
 */
export type EnvConfig = z.infer<typeof envSchema>; 

// created by : Muhammad Arif https://github.com/BlackCoffeee
// created at : 2024-12-30
// updated by : .... https://github.com/....
// updated at : ....