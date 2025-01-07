/**
 * Guard untuk menghandle autentikasi menggunakan Bearer token
 * 
 * Guard ini mengextend AuthGuard dari passport-bearer untuk menghandle 
 * autentikasi berbasis token Bearer.
 * 
 * Fitur utama:
 * - Mengecek apakah endpoint memiliki decorator @Public()
 * - Jika endpoint public, bypass autentikasi
 * - Jika tidak public, lakukan validasi token Bearer
 */
import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';

@Injectable()
export class BearerAuthGuard extends AuthGuard('bearer') {
  /**
   * Constructor untuk inject Reflector service
   * @param reflector - Service untuk mengakses metadata decorator
   */
  constructor(private reflector: Reflector) {
    super();
  }

  /**
   * Method untuk mengecek apakah request boleh mengakses endpoint
   * @param context - Execution context dari request
   * @returns boolean - true jika boleh akses, false jika tidak
   */
  canActivate(context: ExecutionContext) {
    // Cek apakah endpoint memiliki decorator @Public()
    // Menggunakan reflector untuk mendapatkan metadata isPublic
    const isPublic = this.reflector.getAllAndOverride<boolean>('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);

    // Jika endpoint public, bypass autentikasi
    if (isPublic) {
      return true;
    }

    // Jika tidak public, lakukan validasi token Bearer
    return super.canActivate(context);
  }
}

// created by : Muhammad Arif https://github.com/BlackCoffeee
// created at : 2024-12-30
// updated by : .... https://github.com/....
// updated at : ....