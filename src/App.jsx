import React, { useState } from 'react';
// Mengimpor aset gambar langsung dari folder assets kamu
import logoImg from './assets/logo.png'; 
import karawangImg from './assets/karawang.png'; 
// Mengimpor komponen secara modular
import DataLkp from './DataLkp'; 
import Profile from './Profile';
import About from './About';

function App() {
  // State manajemen halaman aktif ('beranda', 'data-lkp', 'profile', atau 'about')
  const [currentPage, setCurrentPage] = useState('beranda');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col justify-between">
      
      {/* 1. KONDISI TAMPILAN HEADER BERDASARKAN HALAMAN AKTIF */}
      {currentPage === 'beranda' ? (
        /* JIKA DI BERANDA: Gunakan Hero Section dengan Background Image Karawang */
        <header className="relative bg-slate-900 text-white min-h-[480px] flex flex-col justify-between shadow-md overflow-hidden">
          {/* BACKGROUND IMAGE TRANSPARAN */}
          <div 
            className="absolute inset-0 opacity-45 bg-cover bg-center brightness-75" 
            style={{ backgroundImage: `url(${karawangImg})` }}
          ></div>

          {/* NAVBAR TRANSPARAN DI DALAM HERO */}
          <nav className="relative z-20 w-full max-w-6xl mx-auto px-6 py-4 flex items-center justify-between border-b border-white/10 backdrop-blur-sm bg-black/10">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('beranda')}>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md p-1.5 overflow-hidden">
                <img src={logoImg} alt="Logo Skillawang" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-black tracking-wider text-white drop-shadow">SKILLAWANG</span>
            </div>

            <ul className="flex items-center gap-6 md:gap-8 font-semibold text-sm md:text-base">
              <li>
                <button onClick={() => setCurrentPage('beranda')} className="text-blue-400 border-b-2 border-blue-400 pb-1 transition font-bold drop-shadow">
                  Beranda
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('data-lkp')} className="text-white/80 hover:text-white transition font-bold drop-shadow">
                  Data LKP
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('profile')} className="text-white/80 hover:text-white transition font-bold drop-shadow">
                  Profile
                </button>
              </li>
              <li>
                {/* FIX: Mengarahkan menu About di Jumbotron Beranda ke halaman About */}
                <button onClick={() => setCurrentPage('about')} className="text-white/80 hover:text-white transition font-bold drop-shadow">
                  About
                </button>
              </li>
            </ul>
          </nav>

          {/* HERO CONTENT TULISAN UTAMA */}
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-20 flex-grow flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 uppercase drop-shadow-lg leading-tight text-white">
              Selamat Datang di Website Resmi Skillawang
            </h1>
            <p className="text-xl md:text-2xl font-medium text-blue-300 italic drop-shadow-md">
              "Dari Karawang Untuk Skill Masa Depan"
            </p>
          </div>
          <div className="relative z-10 w-full h-8 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </header>
      ) : (
        /* JIKA DI LUAR BERANDA: Gunakan Navbar Putih Bersih Minimalis */
        <nav className="w-full bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('beranda')}>
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200 overflow-hidden p-1">
                <img src={logoImg} alt="Logo Skillawang" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-black tracking-wider text-blue-600">SKILLAWANG</span>
            </div>

            <ul className="flex items-center gap-6 md:gap-8 font-semibold text-sm md:text-base">
              <li>
                <button onClick={() => setCurrentPage('beranda')} className="pb-1 transition font-bold text-slate-500 hover:text-blue-500">
                  Beranda
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('data-lkp')} 
                  className={`pb-1 transition font-bold ${currentPage === 'data-lkp' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-blue-500'}`}
                >
                  Data LKP
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('profile')} 
                  className={`pb-1 transition font-bold ${currentPage === 'profile' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-blue-500'}`}
                >
                  Profile
                </button>
              </li>
              <li>
                {/* FIX: Menambahkan highlighter visual aktif untuk halaman About */}
                <button 
                  onClick={() => setCurrentPage('about')} 
                  className={`pb-1 transition font-bold ${currentPage === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-blue-500'}`}
                >
                  About
                </button>
              </li>
            </ul>
          </div>
        </nav>
      )}

      {/* 2. AREA KONTEN UTAMA (Dinamis Berdasarkan Halaman yang Aktif) */}
      <div className="flex-grow flex flex-col justify-start">
        {currentPage === 'beranda' && (
          /* KONTEN BERANDA */
          <main className="max-w-4xl mx-auto px-6 py-12 flex-grow flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="bg-white p-3 rounded-2xl shadow-xl border border-gray-100">
                <img src={karawangImg} alt="Foto Karawang" className="w-full h-64 object-cover rounded-xl" />
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-950 border-b-4 border-blue-600 pb-2 inline-block">
                Pusat Informasi Pelatihan di Karawang
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                Platform yang menyediakan informasi lengkap seputar lembaga, kursus, dan tempat pelatihan di Kabupaten Karawang. Membantu masyarakat menemukan program pelatihan yang sesuai untuk meningkatkan keterampilan, pendidikan, dan peluang kerja[cite: 1].
              </p>
              <button 
                onClick={() => setCurrentPage('data-lkp')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg shadow transition duration-200"
              >
                Jelajahi Program
              </button>
            </div>
          </main>
        )}

        {/* Pemanggilan komponen dinamis */}
        {currentPage === 'data-lkp' && <DataLkp />}
        {currentPage === 'profile' && <Profile />}
        {currentPage === 'about' && <About />}
      </div>

      {/* 3. FOOTER SECTION */}
      <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1 overflow-hidden">
                <img src={logoImg} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-bold text-white tracking-wide">SKILLAWANG</span>
            </div>
            <p className="text-sm text-gray-400 max-w-sm">
              Meningkatkan kualitas sumber daya manusia Kabupaten Karawang melalui keterbukaan informasi program pelatihan kerja.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white tracking-wider uppercase border-l-4 border-blue-500 pl-3">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm">
              <li>📞 +62 831-7813-9777 / +62 821-2689-0759 [cite: 820]</li>
              <li>📸 <a href="https://instagram.com/skillawang.official" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">@skillawang.official</a> [cite: 821]</li>
              <li>✉️ skillawang@gmail.com [cite: 822]</li>
            </ul>
          </div>
        </div>
        <div className="max-w-5xl mx-auto pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>©2026 skillawang. All Rights Reserved</p>
        </div>
      </footer>

    </div>
  );
}

export default App;