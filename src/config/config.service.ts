/**
 * Service untuk mengelola konfigurasi aplikasi
 * 
 * Service ini menyediakan akses ke environment variables dan konfigurasi aplikasi
 * dengan tipe data yang sudah didefinisikan di EnvConfig
 * 
 * Fitur utama:
 * - Mengakses environment variables dengan tipe data yang aman
 * - Menyediakan nilai default untuk beberapa konfigurasi
 * - Mengelompokkan konfigurasi terkait (OAuth, JWT) dalam satu objek
 */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvConfig } from './env.schema';

@Injectable()
export class AppConfigService {
    constructor(private configService: ConfigService<EnvConfig>) {}

    /**
     * Mendapatkan port aplikasi
     * @returns number - Port yang akan digunakan aplikasi (default: 3000)
     */
    get port(): number {
        return parseInt(this.configService.get('PORT', '3000'));
    }

    /**
     * Mendapatkan environment aplikasi
     * @returns string - Environment aplikasi (default: development)
     */
    get nodeEnv(): string {
        return this.configService.get('NODE_ENV', 'development');
    }

    /**
     * Mendapatkan URL database
     * @returns string - URL koneksi database
     */
    get databaseUrl(): string {
        return this.configService.get('DATABASE_URL');
    }

    /**
     * Mendapatkan URL verifikasi token OAuth
     * @returns string - URL verifikasi token OAuth
     */
    get oauthVerifyTokenUrl(): string {
        return this.configService.get('OAUTH_VERIFY_TOKEN_URL');
    }
} 

// created by : Muhammad Arif https://github.com/BlackCoffeee
// created at : 2024-12-30
// updated by : .... https://github.com/....
// updated at : ....