/**
 * Interface untuk opsi query pada operasi lantai.
 * 
 * Interface ini mendefinisikan opsi-opsi yang dapat digunakan saat melakukan query data lantai.
 * Menyediakan fleksibilitas dalam mengambil data dengan parameter tertentu.
 * 
 * @interface FloorQueryOptions
 * @property {boolean} [includeDeleted] - Opsi untuk menyertakan data yang sudah dihapus (soft delete)
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createdAt 2025-01-07
 */
export interface FloorQueryOptions {
    includeDeleted?: boolean;
    
}