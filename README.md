# Novelia CV – Personal Portfolio Application

## 1. Deskripsi Aplikasi

Novelia CV merupakan aplikasi personal portfolio yang dikembangkan menggunakan React Native, Expo, dan TypeScript.

Aplikasi ini dibuat untuk menampilkan informasi pribadi, keterampilan, pengalaman proyek, informasi akademik, serta menyediakan formulir kontak.

## 2. Teknologi yang Digunakan

- React Native
- Expo
- TypeScript
- Expo Router
- JSON
- Jest

## 3. Fitur Aplikasi

1. Home: Menampilkan profil singkat dan navigasi.
2. About: Menampilkan informasi pribadi.
3. Skills: Menampilkan daftar keterampilan.
4. Portfolio: Menampilkan proyek yang pernah dibuat.
5. My Score: Menampilkan informasi nilai dan progres akademik.
6. Contact: Menyediakan formulir kontak dengan validasi.

## 4. Struktur Folder

```text
novelia-cv/
├── __tests__/
│   └── validation.test.ts
├── src/
│   ├── app/
│   ├── components/
│   ├── data/
│   ├── services/
│   └── utils/
├── assets/
├── package.json
└── README.md
```

## 5. Cara Menjalankan Aplikasi

1. Buka folder proyek melalui Visual Studio Code.
2. Buka terminal.
3. Jalankan perintah:

```bash
npm install
```

4. Jalankan aplikasi:

```bash
npx expo start
```

5. Buka aplikasi menggunakan Expo Go atau browser.

## 6. Pengelolaan Data

Data profil dan akademik disimpan menggunakan file JSON. Pengambilan data dikelola melalui folder services dengan simulasi asynchronous.

## 7. Validasi Form

Validasi Contact Form meliputi:

- Memeriksa kolom kosong.
- Memeriksa format email.
- Memastikan pesan sudah diisi.

## 8. Pengujian

Pengujian dilakukan menggunakan Jest dengan menjalankan:

```bash
npm test -- --runInBand
```

Hasil pengujian:

- Test Suites: 1 passed
- Tests: 5 passed
- Snapshots: 0 total

## 9. Kesimpulan

Aplikasi Novelia CV menerapkan konsep pengembangan aplikasi mobile menggunakan React Native dan Expo. Aplikasi ini memiliki navigasi beberapa halaman, pengelolaan data JSON, pemisahan komponen dan service, validasi formulir, serta pengujian fungsi menggunakan Jest.
