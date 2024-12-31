/**
 * Module utama aplikasi yang mengatur konfigurasi global
 * 
 * Module ini berisi:
 * - Konfigurasi environment variables menggunakan ConfigModule
 * - Import AuthModule untuk fitur autentikasi
 * - Konfigurasi rate limiting menggunakan ThrottlerGuard
 * 
 * Fitur utama:
 * - Mengatur environment variables agar bisa diakses secara global
 * - Mengimport module-module yang dibutuhkan aplikasi
 * - Mengatur rate limiting untuk mencegah request berlebihan
 */
import { Module } from '@nestjs/common';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { EdificesModule } from './edifices/edifices.module';
import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';
import { AppConfigModule } from './config/config.module';

@Module({
    imports: [
        AppConfigModule,
        CommonModule,
        AuthModule,
        EdificesModule,
        ThrottlerModule.forRoot([{
            ttl: 60,
            limit: 10,
        }])
    ],
    providers: [
        {
            provide: APP_GUARD,
            useClass: ThrottlerGuard
        }
    ]
})
export class AppModule {}

// created by : Muhammad Arif https://github.com/BlackCoffeee
// created at : 2024-12-30
// updated by : .... https://github.com/....
// updated at : ....