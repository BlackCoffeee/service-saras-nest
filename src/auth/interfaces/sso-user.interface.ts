/**
 * Interface untuk data pengguna SSO (Single Sign-On)
 * Interface ini mendefinisikan struktur data pengguna yang diterima dari sistem SSO
 */
export interface SSOUser {
  /** ID unik pengguna */
  id: string;
  /** Nama pengguna/username */
  username: string;
  /** Alamat email pengguna (opsional) */
  email?: string;
  /** Daftar peran/role yang dimiliki pengguna */
  roles: string[];
  /** Daftar izin/permission yang dimiliki pengguna (opsional) */
  permissions?: string[];
  // sesuaikan dengan response dari SSO Anda
}

/**
 * Interface untuk response dari sistem SSO
 * Interface ini mendefinisikan struktur response yang diterima saat melakukan request ke SSO
 */
export interface SSOResponse {
  /** Status response (true/false) */
  status: boolean;
  /** Pesan response */
  message: string;
  /** Data pengguna SSO */
  data: SSOUser;
}

// created by : Muhammad Arif https://github.com/BlackCoffeee
// created at : 2024-12-30
// updated by : .... https://github.com/....
// updated at : ....