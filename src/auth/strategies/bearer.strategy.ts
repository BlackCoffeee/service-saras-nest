/**
 * File: bearer.strategy.ts
 * Deskripsi: Strategi autentikasi menggunakan Bearer token untuk integrasi dengan SSO
 * 
 * File ini berisi implementasi BearerStrategy yang:
 * - Menggunakan passport-http-bearer untuk validasi token
 * - Melakukan verifikasi token ke endpoint SSO
 * - Menangani berbagai kasus error dan logging
 */

import { Injectable, UnauthorizedException, InternalServerErrorException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-http-bearer';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosError } from 'axios';
import { SSOResponse, SSOUser } from '../interfaces/sso-user.interface';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { Inject } from '@nestjs/common';

/**
 * BearerStrategy
 * Kelas ini menangani autentikasi menggunakan Bearer token
 * Mewarisi PassportStrategy dengan Strategy dari passport-http-bearer
 */
@Injectable()
export class BearerStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
  ) {
    super();
  }

  /**
   * Memvalidasi token yang diterima
   * @param token - Bearer token yang akan divalidasi
   * @returns Promise<SSOUser> - Data user jika token valid
   * @throws UnauthorizedException - Jika token tidak valid atau expired
   * @throws InternalServerErrorException - Jika terjadi kesalahan sistem
   */
  async validate(token: string): Promise<SSOUser> {
    try {
      const verifyTokenURL = this.configService.get<string>('OAUTH_VERIFY_TOKEN_URL');
      
      if (!verifyTokenURL) {
        this.logger.error('OAUTH_VERIFY_TOKEN_URL tidak dikonfigurasi');
        throw new InternalServerErrorException('OAuth configuration error');
      }

      const response = await axios.get<SSOResponse>(verifyTokenURL, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!response.data.status || !response.data.data) {
        this.logger.warn('Token invalid atau response tidak sesuai format', {
          response: response.data
        });
        throw new UnauthorizedException('Token tidak valid');
      }

      this.logger.info('User berhasil diautentikasi', {
        userId: response.data.data.id,
        username: response.data.data.username
      });

      return response.data.data;

    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          this.logger.error('Token expired atau tidak valid', { error: axiosError.message });
          throw new UnauthorizedException('Token expired');
        }
      }
      
      this.logger.error('Gagal memverifikasi token', { error });
      throw new InternalServerErrorException('Gagal memverifikasi token');
    }
  }
} 

// created by : Muhammad Arif https://github.com/BlackCoffeee
// created at : 2024-12-30
// updated by : .... https://github.com/....
// updated at : ....