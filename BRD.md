# BRD — Reyfuu Professional Portfolio

Versi 1.0 · 27 September 2026 · Pemilik: Reyfuu
Status: baseline implementasi; asumsi audiens dapat direvisi oleh pemilik.

## 1. Kebutuhan bisnis

Portofolio perlu membantu orang menilai karya Reyfuu dengan cepat dan menghubungi
pemilik. Daftar seluruh repositori saja belum menjelaskan fokus pekerjaan. Versi
sebelumnya juga menyamakan proyek fork dengan karya asli dan memakai deskripsi
kemampuan yang tidak seluruhnya dibuktikan oleh GitHub.

Produk ini menyajikan bukti yang tersedia secara terstruktur: proyek pilihan,
arsip repositori, bahasa pemrograman, riwayat proyek dan kontak langsung.

## 2. Tujuan dan ukuran keberhasilan

| ID | Tujuan | Ukuran penerimaan awal |
| --- | --- | --- |
| B-01 | Identitas dan fokus mudah dipahami | Nama, bidang kerja dan tautan proyek terlihat pada bagian pembuka |
| B-02 | Karya dapat diperiksa | Setiap proyek mengarah ke repositori milik akun yang benar; fork diberi label |
| B-03 | Kontak mudah ditemukan | CTA email ada pada hero dan penutup; alamat sesuai instruksi pemilik |
| B-04 | Reputasi didukung fakta | Tidak ada jabatan, durasi kerja, klien atau hasil bisnis yang dikarang |
| B-05 | Portofolio tetap tersedia | Gangguan GitHub tidak mengosongkan daftar; snapshot lokal menjadi fallback |
| B-06 | Pemeliharaan sederhana | Sinkronisasi dapat dijalankan ulang; dokumentasi dan tes tersedia |

Target bisnis pascapublikasi: percakapan relevan tentang pekerjaan/kolaborasi.
Tidak ada baseline trafik atau konversi. Analytics bukan bagian rilis ini; jangan
menulis persentase konversi atau ROI seolah telah diukur.

## 3. Pemangku kepentingan dan pengguna

- Pemilik: Reyfuu, memutuskan isi, identitas dan publikasi.
- Perekrut/engineering lead: memeriksa lingkup teknologi dan kode.
- Calon kolaborator: mencari kecocokan proyek dan kanal komunikasi.
- Developer: menelusuri repositori tertentu.

Prioritas perekrut adalah asumsi kerja yang masuk akal untuk portofolio profesional,
bukan hasil riset pengguna. Semua pengguna tetap dapat mengakses arsip lengkap.

## 4. Ruang lingkup

Termasuk: halaman portofolio Next.js, proyek pilihan berbasis metadata nyata,
arsip dengan pencarian/filter, ringkasan bahasa, riwayat tanggal repositori,
terminal opsional, kontak email, responsivitas, aksesibilitas dan metadata dasar.

Tidak termasuk: CMS, akun pengguna, formulir dengan penyimpanan data, blog,
analytics, pembayaran, download CV fiktif, perubahan sistem operasi atau deployment.
Pengalaman kerja ditambahkan setelah pemilik memberi perusahaan, jabatan dan periode.

## 5. Aturan bisnis

1. Sumber proyek adalah GitHub `reyfuu`; snapshot diperbarui 27 September 2026 berisi
   61 repositori. Jumlah ini baseline dinamis, bukan angka permanen dalam copy.
2. Fork tetap dapat ditelusuri, tetapi tidak dihitung sebagai bukti kepemilikan asli.
3. Bahasa utama repositori menunjukkan penggunaan, bukan tingkat kemahiran.
4. Tanggal pembuatan repo menunjukkan riwayat proyek, bukan masa kerja.
5. Deskripsi kosong tidak diganti klaim fungsi yang belum diverifikasi.
6. Kontak: `audinathanael@gmail.com`; GitHub: `https://github.com/reyfuu`.
7. Tidak ada emoji, testimoni, sertifikasi, logo klien atau statistik rekaan.

## 6. Risiko dan mitigasi

| Risiko | Dampak | Penanganan |
| --- | --- | --- |
| API dibatasi/offline | Bukti kerja tidak tampil | Snapshot atomik, timeout, tes 403/429/offline |
| Banyak repo tanpa deskripsi | Katalog kurang menjelaskan karya | Proyek pilihan dengan metadata jujur; pemilik dapat memperkaya README |
| Halaman terlalu panjang | Pengunjung tidak sampai ke kontak | Kurasi di atas, arsip terbatas per tampilan, history melalui disclosure |
| Komponen referensi menambah beban | Performa dan pemeliharaan turun | Adaptasi pola, pakai komponen/native control yang ada |
| Domain/CV/pengalaman belum diberikan | Klaim dan SEO tidak lengkap | Nyatakan belum tersedia; jangan menciptakan data |

## 7. Dependensi dan penerimaan

Implementasi mengikuti [FRD.md](FRD.md), prioritas produk pada [PRD.md](PRD.md),
dan kontrak visual [DESIGN.md](DESIGN.md). Rilis siap ditinjau setelah build, lint,
tes dan QA responsif lulus serta Graphify diperbarui. Go-live memerlukan domain dan
platform hosting yang benar-benar dipilih pemilik; kesiapan lokal bukan deployment.
