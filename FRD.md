# FRD — Reyfuu Professional Portfolio

Versi 1.0 · 27 September 2026 · Acuan: [BRD.md](BRD.md)
Dokumen ini menjelaskan perilaku yang harus dapat diuji, bukan sekadar tampilan.

## 1. Kebutuhan fungsional

| ID | Fungsi dan perilaku | Penerimaan | Bisnis |
| --- | --- | --- | --- |
| F-01 | Navigasi ke Work, Toolkit, History, Contact; menu mobile | Anchor tidak tertutup header; menu dapat dibuka, ditutup dan dipakai dengan keyboard | B-01, B-03 |
| F-02 | Hero menampilkan Reyfuu, fokus pekerjaan, proyek dan CTA email | Nama satu h1; CTA menuju proyek dan alamat email terkonfirmasi | B-01, B-03 |
| F-03 | Menampilkan pilihan repositori asli sebagai pintu masuk | Nama/tautan sesuai dataset; repo tidak tersedia dilewati; tidak ada screenshot/hasil fiktif | B-02, B-04 |
| F-04 | Katalog seluruh proyek dengan pencarian dan kategori | Pencarian nama/deskripsi/bahasa/tag tidak peka kapital; filter dan pencarian digabung | B-02 |
| F-05 | Menampilkan katalog secara bertahap | Awal maksimal 6 hasil; tombol menambah 6; perubahan filter/search kembali ke 6; jumlah hasil diumumkan | B-01, B-02 |
| F-06 | Empty state dapat dipulihkan | Tanpa hasil, tampil pesan dan reset yang memulihkan kategori serta kueri | B-02 |
| F-07 | Detail proyek dan source link | Dialog berlabel; Escape/backdrop/tombol menutup; fokus kembali ke pemicu; source link aman | B-02 |
| F-08 | Menandai fork/arsip dan metadata yang tidak tersedia | Fork terlihat pada kartu/detail; tidak ada bahasa atau deskripsi hasil tebakan | B-04 |
| F-09 | Ringkasan bahasa dari repositori asli | Fork dan bahasa kosong tidak ikut dihitung; tidak memakai skor proficiency | B-04 |
| F-10 | Riwayat proyek berdasarkan tahun pembuatan | Hanya repo asli; tahun terbaru dibuka; tahun lain dapat diekspansi; label menjelaskan bukan employment | B-04 |
| F-11 | Terminal opsional | Disclosure native; help/bio/skills/projects/ai/backend/devops/stats/contact/matrix/clear tetap berfungsi; input/metadata di-escape | B-02, B-04 |
| F-12 | Kontak langsung | mailto audinathanael@gmail.com dan GitHub; tidak ada form yang menyiratkan pesan sudah terkirim | B-03 |
| F-13 | GitHub live dengan fallback lokal | Pagination 100/page, timeout, 403/429/500/offline/response kosong memakai snapshot | B-05 |
| F-14 | Sinkronisasi snapshot | Perintah sync mengambil seluruh halaman, memvalidasi nama, lalu mengganti file atomik; kegagalan menjaga snapshot lama | B-06 |

## 2. Model dan alur data

`GitHub REST -> getRepositories -> Project[] -> hero/pilihan/katalog/toolkit/history/terminal`.
Bila API gagal: `github-snapshot.json -> toProject -> Project[]` yang sama.

Field: nama, deskripsi, bahasa utama, URL, kategori navigasi, star/fork count, status
fork/archived, createdAt, pushedAt, dan topics. Kategori bersifat pengelompokan
navigasi berbasis nama/bahasa, bukan klaim arsitektur. Skills hanya dari bahasa
GitHub. Deskripsi null menjadi pesan metadata belum tersedia.

Pilihan editorial adalah daftar nama repository yang dicocokkan ke dataset.
Daftar itu tidak boleh menciptakan entri yang tidak ada atau mengubah fakta repository.

## 3. State dan interaksi

- Default: proyek pilihan terlihat, katalog pertama 6 item, kategori All.
- Filter/search: hasil dihitung dari seluruh dataset, batas hasil direset ke 6.
- Show more: menambah 6 item tanpa menghilangkan fokus atau posisi scroll.
- Empty: pesan spesifik dan tombol Reset All Filters.
- Modal: background inert melalui dialog native; fokus awal di dalam dialog;
  close mengembalikan fokus ke tombol Details terkait.
- History dan terminal: gunakan details/summary; keyboard Enter/Space native.
- API error: konten tetap tersedia; tidak menampilkan status live yang tidak terbukti.
- Reduced motion: tidak ada efek yang diperlukan untuk membaca konten.

## 4. Kebutuhan nonfungsional

| ID | Kriteria |
| --- | --- |
| N-01 | Responsif pada 375, 768, 1280, 1920px; tidak overflow; nama panjang membungkus |
| N-02 | Kontras teks normal minimal 4.5:1; fokus terlihat; kontrol utama minimal 44px tinggi |
| N-03 | Heading semantik, satu h1, label input, aria-pressed filter dan aria-live hasil |
| N-04 | Konten inti Server Components; client JS hanya interaksi; tidak menambah dependency dekoratif |
| N-05 | Metadata judul/deskripsi nyata; jangan membuat canonical domain atau structured employment palsu |
| N-06 | Escape teks eksternal pada output HTML terminal; external link memakai noopener noreferrer |
| N-07 | Lint, typecheck, test dan production build harus lulus; pemeriksaan visual dicatat terpisah |
| N-08 | Tanpa emoji, gradient headline, testimoni fiktif, atau grafik yang tidak mewakili data |

## 5. Matriks uji

| Uji | Cakupan | Metode |
| --- | --- | --- |
| TC-01 | F-13/F-14: API error, kosong, pagination, snapshot | Tes Node dan menjalankan sync ketika data perlu diperbarui |
| TC-02 | F-04/F-05/F-06: search, kombinasi filter, reset dan show more | Browser + tes helper bila logic dipisah |
| TC-03 | F-11: semua perintah, clear, unknown command, HTML escaping | Tes Node + input browser |
| TC-04 | N-01: empat viewport, teks panjang, zoom | Browser dan screenshot |
| TC-05 | N-04/N-07: validitas aplikasi | Lint, typecheck, build; Lighthouse adalah target terpisah, bukan klaim otomatis |
| TC-06 | F-01/N-02/N-03/N-08: keyboard, nama aksesibel, kontras, tanpa emoji | Browser, CSS inspection dan audit sumber |
| TC-07 | F-07/F-12: modal, focus return, URL dan email | Browser + pemeriksaan dataset |
| TC-08 | F-03/F-08/F-09/F-10: fakta, fork, bahasa, tanggal | Tes metadata dan review sumber GitHub |

## 6. Batas integrasi

21st.dev MCP belum terhubung; tidak ada API key yang diminta di chat atau disimpan
ke source. Referensi publik boleh dipakai, tetapi jangan mengklaim komponen telah
di-install dari layanan itu. Impeccable dan UI/UX Pro Max memberi panduan desain;
aturan data, aksesibilitas dan instruksi pemilik tetap menjadi batas implementasi.

## 7. Menjalankan pemeriksaan

- `rtk npm run lint`, `rtk npm run typecheck`, `rtk npm test`, `rtk npm run build`.
- Jalankan dev server port 3100, lalu `rtk proxy node tests/browser-smoke.cjs`
  jika Playwright tersedia. Untuk memakai instalasi Playwright yang sudah ada,
  set `PLAYWRIGHT_MODULE` ke modul tersebut; `PORTFOLIO_URL` dapat mengganti URL.
- Smoke test memeriksa batas 6/12 item, reset, search/filter, modal/Escape/focus,
  disclosure history/terminal, email, mobile menu, empat viewport dan tanpa emoji.
  Playwright dipakai dari tool browser lingkungan, bukan dependency produksi baru.
