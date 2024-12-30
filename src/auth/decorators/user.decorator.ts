/**
 * Decorator untuk mengambil data user dari request
 * 
 * Decorator ini digunakan untuk mengambil data user yang sudah diautentikasi
 * dari request object. Data user tersebut disimpan setelah proses login berhasil.
 * 
 * @param data - Property spesifik dari user yang ingin diambil (opsional)
 * @param ctx - Execution context dari NestJS
 * 
 * Contoh penggunaan:
 * ```
 * // Mengambil seluruh data user
 * @User() user: SSOUser
 * 
 * // Mengambil property spesifik, misal email
 * @User('email') userEmail: string
 * ```
 */
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { SSOUser } from '../interfaces/sso-user.interface';

export const User = createParamDecorator(
  (data: keyof SSOUser, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user as SSOUser;

    return data ? user?.[data] : user;
  },
); 

// created by : Muhammad Arif https://github.com/BlackCoffeee
// created at : 2024-12-30
// updated by : .... https://github.com/....
// updated at : ....