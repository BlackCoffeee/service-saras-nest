/**
 * Decorator untuk menandai endpoint sebagai public (tidak memerlukan autentikasi)
 * 
 * Decorator ini digunakan untuk menandai endpoint yang dapat diakses tanpa autentikasi.
 * Cara kerjanya dengan menambahkan metadata 'isPublic' dengan nilai true pada endpoint.
 * 
 * Contoh penggunaan:
 * ```
 * @Public()
 * @Get('endpoint')
 * publicEndpoint() {
 *   // Endpoint ini dapat diakses tanpa autentikasi
 * }
 * ```
 * 
 * Metadata ini kemudian akan dibaca oleh BearerAuthGuard untuk menentukan
 * apakah endpoint perlu divalidasi tokennya atau tidak.
 */
import { SetMetadata } from '@nestjs/common';

export const Public = () => SetMetadata('isPublic', true);

// created by : Muhammad Arif https://github.com/BlackCoffeee
// created at : 2024-12-30
// updated by : .... https://github.com/....
// updated at : ....