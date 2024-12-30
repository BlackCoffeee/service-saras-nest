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
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Membuat config bisa diakses di semua module
    }),
    AuthModule,
    // ... module lainnya
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard // Guard untuk rate limiting
    }
  ]
})
export class AppModule {}

// created by : Muhammad Arif https://github.com/BlackCoffeee
// created at : 2024-12-30
// updated by : .... https://github.com/....
// updated at : ....