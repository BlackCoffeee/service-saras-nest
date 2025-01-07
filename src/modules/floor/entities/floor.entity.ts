/**
 * Entitas yang merepresentasikan data lantai dalam sistem.
 * Digunakan untuk menyimpan informasi tentang lantai seperti nama, deskripsi, dan status.
 *
 * @class FloorEntity
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createdAt 2024-01-01
 */
export class FloorEntity {
  id: string;
  floorName: string;
  floorDesc: string;
  floorStatus: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}