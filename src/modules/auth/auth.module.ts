/**
 * Module untuk menghandle autentikasi aplikasi
 * 
 * Module ini mengatur konfigurasi autentikasi menggunakan:
 * - Passport untuk autentikasi Bearer token
 * - Config untuk environment variables
 * - Throttler untuk rate limiting
 * 
 * Fitur utama:
 * - Konfigurasi passport dengan default strategy bearer
 * - Rate limiting 10 request per 60 detik
 * - Export PassportModule untuk digunakan module lain
 */
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { BearerStrategy } from './strategies/bearer.strategy';
import { AppConfigModule } from '../../config/config.module';

@Module({
  imports: [
    // Konfigurasi passport menggunakan bearer strategy
    PassportModule.register({ defaultStrategy: 'bearer' }),
    // Import config module untuk env variables
    ConfigModule,
    // Rate limiting - 10 request per 60 detik
    ThrottlerModule.forRoot([{
      ttl: 60,
      limit: 10,
    }]),
    AppConfigModule,
  ],
  providers: [BearerStrategy],
  exports: [PassportModule]
})
export class AuthModule {} 

// created by : Muhammad Arif https://github.com/BlackCoffeee
// created at : 2024-12-30
// updated by : .... https://github.com/....
// updated at : ....