# 🎥 de-Anime (Frontend)

**de-Anime** adalah aplikasi streaming anime berbasis web yang dibuat menggunakan **React** dan **JavaScript**. Aplikasi ini menampilkan daftar anime, memungkinkan pengguna untuk menonton episode, dan menjelajahi berbagai anime dengan antarmuka yang modern dan responsif.

## 🚀 Demo

Aplikasi ini telah dideploy dan dapat diakses melalui:

🔗 [de-anime.vercel.app](https://de-anime.vercel.app/)

## 🛠️ Teknologi yang Digunakan

Project ini dibangun menggunakan beberapa teknologi dan library berikut:

- ⚛️ **React** - Library UI utama
- ⚡ **Vite** - Bundler cepat untuk React
- 🎨 **Tailwind CSS** - Styling modern dan responsif
- 🔍 **TanStack React Query** - Fetching dan caching data API
- 🔄 **React Infinite Scroll Component** - Infinite scrolling
- 🛠 **Axios** - HTTP request client
- 🎬 **React Slick & Slick Carousel** - Carousel anime
- 🔄 **Lottie React & React Lottie Player** - Animasi loading
- 🛑 **React Router DOM** - Navigasi antar halaman

## 📦 Instalasi & Menjalankan secara Lokal

1. **Clone repositori ini**:
   ```bash
   git clone https://github.com/Hann-arc/de-anime.git
   ```
2. **Masuk repo**:
   ```bash
   cd de-anime
   ```

3. **Install dependensi**:
   ```bash
   npm install
   ```

4. **Buat file .env**:
   ```bash
   touch .env
   # lalu sesuaikan berdasarkan .env.example
   ```
   
5. **Jalankan server dilokal**:
    ```bash
   npm run dev
   ```
   
4. **Buka di browser**:
   [http://localhost:5173](http://localhost:5173)

## 📁 Struktur Direktori

```bash
src/
├── assets/            # Gambar, animasi, ikon, dll
├── components/        # Komponen UI reusable
├── layout/            # Layout utama (AppLayout)
├── lib/               # Konfigurasi API (api.js)
├── pages/             # Halaman utama aplikasi
├── route/             # Konfigurasi routing
│   └── index.js       # Daftar rute utama   
├── util/   
│    └── navigate/     # Hook navigasi
└── App.js             # Root komponen
```

## 📝 Catatan Tambahan

- **Ini hanya frontend**, sehingga data anime diambil dari API eksternal dari  [wajik-anime-api](https://github.com/wajik45/wajik-anime-api/tree/8c61097).
- Pastikan memiliki koneksi internet yang stabil untuk streaming anime.
