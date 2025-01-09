/**
 * Module untuk konfigurasi aplikasi
 * 
 * Module ini berisi:
 * - Konfigurasi environment variables menggunakan NestConfigModule
 * - Validasi environment variables menggunakan envSchema
 * - Service untuk mengakses konfigurasi (AppConfigService)
 * 
 * Fitur utama:
 * - Memvalidasi environment variables saat startup
 * - Menyediakan service untuk mengakses konfigurasi secara type-safe
 * - Mengexport AppConfigService agar bisa digunakan di module lain
 */
import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { envSchema } from './env.schema';
import { AppConfigService } from './config.service';

@Module({
    imports: [
        NestConfigModule.forRoot({
            validate: (config) => envSchema.parse(config),
            validationOptions: {
                abortEarly: true, // Berhenti validasi saat menemukan error pertama
            },
        }),
    ],
    providers: [AppConfigService],
    exports: [AppConfigService],
})
export class AppConfigModule {} 

// created by : Muhammad Arif https://github.com/BlackCoffeee
// created at : 2024-12-30
// updated by : .... https://github.com/....
// updated at : ....