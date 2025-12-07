# 📝 Generator Surat Permohonan Cuti Tahunan

Website aplikasi generator surat permohonan cuti tahunan dengan React + Vite, desain modern dengan nuansa kuning gradasi.

## 🎯 Fitur Utama

- ✅ Input data personal (nama, email, jabatan, alamat)
- ✅ Input detail cuti (tanggal mulai, selesai, alamat selama cuti)
- ✅ Input informasi surat (tempat, tanggal surat)
- ✅ Preview surat real-time di sisi kanan
- ✅ Download surat ke PDF
- ✅ Form accordion yang dapat dibuka/tutup
- ✅ Validasi form lengkap
- ✅ Responsive design (desktop, tablet, mobile)
- ✅ Header dengan logo Nuansa Legal
- ✅ Footer informatif

## 📁 Struktur Folder

```
generator-surat-permohonan/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── DataDiriForm.jsx
│   │   ├── DetailCutiForm.jsx
│   │   ├── InformasiSuratForm.jsx
│   │   ├── PreviewSurat.jsx
│   │   └── ActionButtons.jsx
│   │
│   ├── pages/
│   │   └── GeneratorPage.jsx
│   │
│   ├── styles/
│   │   ├── App.css
│   │   ├── Header.css
│   │   ├── Footer.css
│   │   ├── FormSection.css
│   │   ├── PreviewSurat.css
│   │   ├── ActionButtons.css
│   │   └── GeneratorPage.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Cara Instalasi

### 1. Buat Project dengan Vite

```bash
npm create vite@latest generator-surat-permohonan -- --template react
cd generator-surat-permohonan
npm install
```

### 2. Buat Struktur Folder

```bash
mkdir src/components
mkdir src/pages
mkdir src/styles
```

### 3. Copy Semua File

#### **Components (src/components/)**
- `Header.jsx` - Header dengan logo dan judul
- `Footer.jsx` - Footer dengan informasi kontak
- `DataDiriForm.jsx` - Form input data personal
- `DetailCutiForm.jsx` - Form input detail cuti
- `InformasiSuratForm.jsx` - Form informasi surat
- `PreviewSurat.jsx` - Preview surat dan download PDF
- `ActionButtons.jsx` - Tombol Buat Surat dan Hapus

#### **Pages (src/pages/)**
- `GeneratorPage.jsx` - Halaman utama generator

#### **Styles (src/styles/)**
- `App.css` - Global styles
- `Header.css` - Styling header
- `Footer.css` - Styling footer
- `FormSection.css` - Styling form sections
- `PreviewSurat.css` - Styling preview surat
- `ActionButtons.css` - Styling tombol aksi
- `GeneratorPage.css` - Styling halaman generator

#### **Main Files**
- `App.jsx` - Main component
- Replace `main.jsx` dengan kode standar Vite

### 4. Jalankan Development Server

```bash
npm run dev
```

Website akan berjalan di: `http://localhost:5173`

### 5. Build untuk Production

```bash
npm run build
```

File hasil build ada di folder `dist/`

## 🎨 Design System

### Warna
- **Yellow 1**: `#FFD54A` - Kuning terang
- **Yellow 2**: `#FFB300` - Kuning gelap
- **Yellow Light**: `#FFF9E6` - Kuning sangat terang (background)
- **Gradient**: `linear-gradient(135deg, #FFD54A, #FFB300)`
- **Text Dark**: `#333333` - Teks utama
- **Text Gray**: `#666666` - Teks secondary

### Font
- **Font Family**: Poppins (Google Fonts)
- **Weight**: 300, 400, 500, 600, 700

### Komponen UI
- Border radius: 8px - 12px
- Shadow: `0 4px 12px rgba(0, 0, 0, 0.1)`
- Transition: `0.3s ease`

## 📋 Penjelasan Komponen

### 1. Header (Header.jsx)
- Menampilkan logo Nuansa Legal
- Judul aplikasi dan deskripsi
- Sticky positioning dengan gradient background

### 2. Footer (Footer.jsx)
- Informasi perusahaan
- Kontak (telepon, email)
- Copyright

### 3. DataDiriForm (DataDiriForm.jsx)
Form input data personal:
- Nama (text)
- Email (email)
- Jabatan (select dropdown)
- Alamat (textarea)

### 4. DetailCutiForm (DetailCutiForm.jsx)
Form input detail cuti:
- Pejabat pemberi cuti (text)
- Lama cuti (text)
- Mulai tanggal (date)
- Selesai tanggal (date)
- Alamat selama cuti (textarea)

### 5. InformasiSuratForm (InformasiSuratForm.jsx)
Form informasi surat:
- Tempat surat diterbitkan (text)
- Tanggal surat diterbitkan (date)

### 6. PreviewSurat (PreviewSurat.jsx)
Preview surat dengan fitur:
- Menampilkan surat berdasarkan input form
- Format surat formal Indonesia
- Watermark "PREVIEW"
- Button download PDF
- Auto-format tanggal ke format Indonesia

### 7. ActionButtons (ActionButtons.jsx)
Dua tombol aksi:
- **Buat Surat**: Validasi dan generate surat
- **Hapus**: Clear semua input form

### 8. GeneratorPage (GeneratorPage.jsx)
Halaman utama yang:
- Manage state semua form data
- Handle input changes
- Toggle accordion sections
- Validasi form
- Coordinate antara form dan preview

## 🔧 Fitur Teknis

### State Management
Menggunakan React Hooks:
- `useState` untuk form data
- `useState` untuk expanded sections

### Form Handling
- Controlled components
- Real-time preview update
- Validasi required fields
- Alert untuk field kosong

### Download PDF
Menggunakan `window.print()`:
- CSS print media query
- Hide watermark saat print
- Hide header, footer, dan form saat print

### Responsive Design
- Desktop (> 1200px): 2 kolom (form kiri, preview kanan)
- Tablet (768px - 1200px): 1 kolom stacked
- Mobile (< 768px): 1 kolom stacked, font size lebih kecil

## 🎯 Cara Menggunakan Aplikasi

### Langkah 1: Isi Data Diri
1. Klik section "DATA DIRI"
2. Isi nama lengkap
3. Isi email
4. Pilih jabatan dari dropdown
5. Isi alamat lengkap

### Langkah 2: Isi Detail Cuti
1. Klik section "DETAIL CUTI TAHUNAN"
2. Isi nama pejabat yang berwenang
3. Isi lama cuti (contoh: "5 hari")
4. Pilih tanggal mulai
5. Pilih tanggal selesai
6. Isi alamat selama cuti

### Langkah 3: Isi Informasi Surat
1. Klik section "INFORMASI SURAT"
2. Isi tempat surat (contoh: "Jakarta")
3. Pilih tanggal surat diterbitkan

### Langkah 4: Preview dan Download
1. Lihat preview surat di sisi kanan
2. Pastikan semua data sudah benar
3. Klik "BUAT SURAT" untuk validasi
4. Klik "Download PDF" untuk download

### Tombol Hapus
- Klik tombol "HAPUS" untuk clear semua input
- Akan muncul konfirmasi sebelum menghapus

## 🛠️ Customization

### Mengganti Logo
Edit `Header.jsx`, ganti URL di:
```javascript
src="https://via.placeholder.com/150x50/FFD54A/333333?text=NUANSA+LEGAL"
```

### Mengganti Warna
Edit `App.css`, ubah di:
```css
:root {
  --yellow-1: #FFD54A;  /* Ubah di sini */
  --yellow-2: #FFB300;  /* Ubah di sini */
}
```

### Menambah Field Form
1. Tambahkan di `formData` state di `GeneratorPage.jsx`
2. Tambahkan input di komponen form yang sesuai
3. Update `PreviewSurat.jsx` untuk menampilkan data baru

### Mengubah Format Surat
Edit `PreviewSurat.jsx` di section `surat-body`

## 📱 Browser Support

- ✅ Chrome (terbaru)
- ✅ Firefox (terbaru)
- ✅ Safari (terbaru)
- ✅ Edge (terbaru)

## 🐛 Troubleshooting

### Issue: Print/PDF tidak berfungsi
**Solusi**: Pastikan browser mengizinkan popup dan print dialog

### Issue: Form tidak ter-update
**Solusi**: Cek `name` attribute pada input sesuai dengan key di state

### Issue: Styling tidak muncul
**Solusi**: Pastikan semua file CSS sudah di-import dengan benar

### Issue: Tanggal tidak ter-format
**Solusi**: Cek fungsi `formatDate()` di `PreviewSurat.jsx`

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "vite": "^5.0.0"
}
```

Tidak ada external dependencies lain yang diperlukan!

## 🔮 Future Enhancements

- [ ] Simpan draft surat ke localStorage
- [ ] Export ke format Word (.docx)
- [ ] Template surat multiple (berbagai jenis surat)
- [ ] Dark mode
- [ ] Bahasa Indonesia / English toggle
- [ ] History surat yang pernah dibuat
- [ ] Email surat langsung dari aplikasi

## 👨‍💻 Development

### Scripts Available
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📄 License

Free to use for personal and commercial projects.

## 👥 Support

Untuk pertanyaan atau issue, silakan hubungi tim development.

---

**Happy Coding! 🚀**

Dibuat dengan ❤️ menggunakan React + Vite"# generator-surat-permohonan" 
