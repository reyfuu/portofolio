# PRD — Reyfuu Professional Portfolio

Versi 3.0 · 27 September 2026 · Status: implementasi iterasi profesional
Menggantikan spesifikasi lama yang mengacu ke vanilla HTML, 54 repositori,
glassmorphism, proficiency rekaan dan deskripsi arsitektur yang belum diverifikasi.

## 1. Masalah produk

Pengunjung membutuhkan jawaban cepat: siapa Reyfuu, karya apa yang relevan,
bagaimana memeriksa kodenya, dan bagaimana menghubungi pemilik. Menampilkan 61
repositori penuh sebelum toolkit/kontak membuat alur panjang dan kurang terarah.

## 2. Keputusan produk

Bangun portofolio dengan urutan: identitas dan karya terpilih -> katalog yang bisa
ditelusuri -> bukti penggunaan bahasa -> riwayat proyek -> terminal opsional -> kontak.
Pertahankan data nyata, dark editorial, aksen teal dan larangan emoji.

Alternatif yang dipertimbangkan:
- Katalog penuh: lengkap tetapi terlalu panjang sebagai tampilan awal.
- Landing page jasa dengan testimoni: kurang bukti bisnis dan tidak sesuai konten tersedia.
- Portofolio editorial dengan progressive disclosure: dipilih karena karya tetap utama
  dan semua repositori tetap dapat diakses.

## 3. Pengguna dan perjalanan utama

| Pengguna | Tujuan | Jalur |
| --- | --- | --- |
| Perekrut/lead | Memeriksa kecocokan teknis | Hero -> proyek pilihan -> source -> email |
| Developer | Mencari repo tertentu | Katalog -> filter/search -> details/source |
| Kolaborator | Memahami lingkup karya | Pilihan -> toolkit/history -> email |
| Pengguna keyboard/mobile | Jalur sama tanpa hambatan | Skip link -> navigasi/controls native -> kontak |

## 4. Prioritas rilis

| Prioritas | Deliverable | Referensi |
| --- | --- | --- |
| P0 | Identitas spesifik, CTA proyek/email, hierarki visual profesional | F-01..F-03 |
| P0 | Katalog 6 item awal, show more, search/filter/reset | F-04..F-06 |
| P0 | Kebenaran data, fork, bahasa, history, fallback | F-08..F-10, F-13..F-14 |
| P0 | Aksesibilitas, responsivitas, tanpa emoji, security terminal | N-01..N-08 |
| P1 | Terminal di disclosure dan detail proyek yang rapi | F-07, F-11 |
| P1 | BRD/FRD/PRD/DESIGN konsisten dan graf kode terbaru | B-06 |
| Ditunda | Employment/CV, screenshot kasus nyata, domain production | Menunggu fakta/aset pemilik |
| Di luar rilis | CMS, analytics, form backend, authentication, deployment | BRD §4 |

## 5. Kontrak konten

Nama publik Reyfuu; GitHub `reyfuu`; email `audinathanael@gmail.com`.
Snapshot 27 September 2026 berisi 61 repositori; angka UI berasal dari dataset,
bukan string tetap. Project history memakai tanggal GitHub; tidak ditampilkan
sebagai pengalaman kerja. Tidak ada status available, senior title, hasil klien,
testimonial atau benchmark tanpa bukti pemilik.

## 6. Desain dan referensi

[DESIGN.md](DESIGN.md) memuat sistem visual. Gunakan panduan resmi
[Impeccable](https://github.com/pbakaus/impeccable) untuk hierarki, restraint,
craft dan audit; [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
untuk pencarian guidance aksesibilitas dan Next.js. Hasil pencarian yang tidak cocok
bukan arahan produk. Gunakan [21st.dev](https://docs.21st.dev/mcp) sebagai referensi
pola komponen; layanan MCP belum terhubung. Tidak ada dependency UI baru yang
wajib dipasang hanya karena referensinya digunakan.

## 7. Ukuran kualitas dan rilis

- Identitas, proyek dan kontak ditemukan tanpa menelusuri seluruh katalog.
- Semua proyek tetap dapat diakses melalui pencarian atau show more.
- Data dan link diturunkan dari GitHub; fallback diuji.
- QA TC-01 sampai TC-08 dari [FRD.md](FRD.md) menjadi acuan.
- Lint, typecheck, tes dan build lulus, empat viewport diperiksa.
- Lighthouse >=90 merupakan target sesudah pengukuran pada deployment, bukan hasil
  yang diklaim oleh build. Tidak ada angka konversi tanpa analytics.
- Graphify diperbarui setelah perubahan final; keterbatasan dilaporkan apa adanya.

## 8. Urutan pelaksanaan

1. Bekukan fakta produk dan tulis BRD/FRD/PRD.
2. Perbaiki pembuka, tampilkan proyek pilihan, rapikan navigasi dan CTA.
3. Terapkan katalog bertahap, history ringkas dan terminal opsional.
4. Uji perilaku dan tampilan; perbaiki temuan yang nyata.
5. Sinkronkan DESIGN/Graphify; serahkan preview lokal untuk review pemilik.
