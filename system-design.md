# 🏗️ System Design: Website Portofolio Developer

## Stack Pilihan
- **Frontend**: React + Vite
- **Styling**: Tailwind CSS
- **Backend**: Supabase (untuk form handling dan potensi blog)
- **Deployment**: Vercel

## Struktur Folder
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ThemeProvider.jsx
│   ├── ui/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ContactForm.jsx
│   │   └── SocialIcons.jsx
│   └── utils/
│       └── SmoothScroll.jsx
├── assets/
│   ├── images/
│   └── icons/
├── pages/
│   ├── Home.jsx
│   └── ProjectDetail.jsx
├── styles/
│   └── globals.css
├── hooks/
│   └── useScrollProgress.jsx
├── lib/
│   └── supabase.js
└── utils/
    └── theme.js
```

## API Schema (Supabase)

### 1. contacts (untuk formulir kontak)
```sql
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);
```

### 2. projects (opsional, untuk manajemen proyek)
```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  live_url TEXT,
  github_url TEXT,
  tags TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);
```

## Arsitektur Komponen

```
App
├── ThemeProvider
│   └── Layout
│       ├── Header (dengan smooth scroll)
│       ├── Main Content
│       │   ├── Hero
│       │   ├── About
│       │   ├── Skills
│       │   ├── Projects (ProjectCard[])
│       │   └── ContactForm
│       └── Footer
└── ProjectDetail (halaman terpisah)
```

## Alur Data
1. Data statis (profil, skill, project) disimpan di komponen React
2. Formulir kontak dikirim ke Supabase
3. Data proyek bisa diambil dari Supabase jika diinginkan untuk CMS sederhana
4. Mode gelap/terang dikelola oleh ThemeProvider menggunakan React Context

## Integrasi Pihak Ketiga
- **Supabase**: Autentikasi, database, dan storage
- **Font Google**: Inter, Poppins, atau DM Sans
- **Icon Libraries**: React Icons untuk ikon sosial dan teknologi

Dokumen <mcfile name="PRD.md" path="c:\Users\MIP\Documents\Spontan\portofolio\PRD.md"></mcfile> dan <mcfile name="design.md" path="c:\Users\MIP\Documents\Spontan\portofolio\design.md"></mcfile> telah menjadi landasan utama dalam merancang sistem ini, memastikan keselarasan antara kebutuhan fungsional, desain visual, dan implementasi teknis.