# Portfolio Website - Next.js & Bootstrap

Website portfolio pribadi yang dibangun menggunakan Next.js dan Bootstrap dengan fitur responsif dan modern.

## 🚀 Fitur

- **Responsive Design**: Tampilan yang optimal di desktop, tablet, dan mobile
- **Modern UI/UX**: Desain yang clean dan profesional dengan animasi smooth
- **Interactive Components**: Form kontak dengan validasi, filter proyek, dan navigasi smooth
- **Bootstrap Integration**: Menggunakan Bootstrap 5 untuk styling dan komponen
- **JSON Data**: Data proyek disimpan dalam file JSON untuk kemudahan maintenance
- **SEO Optimized**: Meta tags dan struktur HTML yang SEO-friendly

## 📋 Halaman

1. **Home/Hero**: Landing page dengan introduction dan call-to-action
2. **Tentang**: Informasi pribadi, skills, dan pengalaman kerja
3. **Proyek**: Daftar proyek dengan filter berdasarkan kategori
4. **Kontak**: Form kontak dengan validasi dan informasi kontak

## 🛠️ Teknologi yang Digunakan

- **Next.js 15**: React framework untuk SSR dan routing
- **React 19**: Library JavaScript untuk UI
- **Bootstrap 5**: CSS framework untuk styling
- **Font Awesome**: Icon library
- **JavaScript**: Bahasa pemrograman utama

## 📦 Instalasi

1. Clone repository ini:
```bash
git clone https://github.com/username/next-portfolio.git
cd next-portfolio
```

2. Install dependensi:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser

## 🏗️ Struktur Proyek

```
next-portfolio/
├── app/
│   ├── layout.js          # Root layout dengan Bootstrap
│   ├── page.js            # Halaman utama
│   └── globals.css        # Global styles
├── components/
│   ├── Header.js          # Navigation header
│   ├── Hero.js            # Hero section
│   ├── About.js           # About section
│   ├── Projects.js        # Projects section
│   ├── Contact.js         # Contact form
│   └── Footer.js          # Footer
├── data/
│   └── projects.json      # Data proyek
├── public/
│   └── images/            # Gambar proyek
├── package.json
└── README.md
```

## 📝 Kustomisasi

### Mengubah Data Proyek
Edit file `data/projects.json` untuk menambah, mengubah, atau menghapus proyek:

```json
{
  "id": 1,
  "title": "Nama Proyek",
  "description": "Deskripsi proyek",
  "image": "/images/project1.jpg",
  "technologies": ["React", "Node.js"],
  "github": "https://github.com/username/project",
  "demo": "https://demo-link.com",
  "category": "Web Development"
}
```

### Mengubah Informasi Pribadi
Edit komponen-komponen berikut untuk mengubah informasi pribadi:
- `components/Hero.js`: Nama, title, dan deskripsi singkat
- `components/About.js`: Skills, pengalaman, dan informasi detail
- `components/Contact.js`: Informasi kontak dan social media

### Mengubah Styling
- Edit `app/globals.css` untuk custom CSS
- Modifikasi Bootstrap classes di komponen
- Tambahkan custom CSS variables untuk konsistensi warna

## 🚀 Deployment

### Vercel (Recommended)
1. Push code ke GitHub
2. Connect repository ke Vercel
3. Deploy otomatis

### Netlify
1. Build proyek: `npm run build`
2. Upload folder `out` ke Netlify

### Manual
1. Build proyek: `npm run build`
2. Start production server: `npm start`

## 📱 Responsive Design

Website ini fully responsive dengan breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 992px
- **Desktop**: > 992px

## 🔧 Scripts

- `npm run dev`: Development server
- `npm run build`: Build untuk production
- `npm start`: Start production server
- `npm run lint`: Lint code

## 📄 Lisensi

MIT License - lihat file LICENSE untuk detail

## 🤝 Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📞 Kontak

- Email: hello@example.com
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

Dibuat dengan ❤️ menggunakan Next.js & Bootstrap