import React, { useState, useEffect } from 'react';
import lkpData from './data/lkpData.json';

export default function DetailLkp({ lkpId, onBack }) {
  const [lkp, setLkp] = useState(null);
  const [activePhoto, setActivePhoto] = useState(null);

  useEffect(() => {
    // Find the LKP matching the id
    const foundLkp = lkpData.find(item => item.id === Number(lkpId));
    setLkp(foundLkp);
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [lkpId]);

  if (!lkp) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-slate-500 font-semibold">Memuat data lembaga...</p>
      </div>
    );
  }

  // Use the first image as banner background if available, otherwise fallback to premium gradient
  const bannerImage = lkp.images && lkp.images.length > 0 ? lkp.images[0] : null;

  return (
    <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 flex-grow w-full animate-fade-in" style={{ animation: 'pageFade 0.3s ease-out' }}>
      <style>{`
        @keyframes pageFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes lightboxFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes lightboxZoom {
          from { transform: scale(0.9); }
          to { transform: scale(1); }
        }
      `}</style>

      {/* Navigasi Kembali */}
      <button 
        onClick={onBack}
        className="group mb-6 inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition"
      >
        <span className="transform group-hover:-translate-x-1 transition duration-200 text-base">⬅</span> 
        Kembali ke Daftar LKP
      </button>

      {/* HERO BANNER SECTION */}
      <section className="relative rounded-3xl overflow-hidden bg-slate-900 text-white shadow-xl min-h-[300px] md:min-h-[380px] flex flex-col justify-end p-6 md:p-10 mb-8">
        {/* Banner Background Image with Backdrop Blur and Dark Overlay */}
        {bannerImage ? (
          <div 
            className="absolute inset-0 bg-cover bg-center brightness-[0.45] transition-all duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url("${bannerImage}")` }}
          ></div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-blue-950 to-slate-900"></div>
        )}
        {/* Ambient top lighting */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/20 to-transparent"></div>

        {/* Content Info */}
        <div className="relative z-10 space-y-4 max-w-4xl">
          <div className="flex flex-wrap gap-2.5 items-center">
            <span className="bg-blue-600 text-white text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
              {lkp.bidang}
            </span>
            <span className="bg-amber-500 text-slate-950 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm border border-amber-400">
              Akreditasi {lkp.akreditasi}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight drop-shadow-md">
            {lkp.nama}
          </h1>

          <p className="text-slate-200 text-sm md:text-base font-semibold flex items-center gap-1.5 drop-shadow">
            <span>📍</span> Kecamatan {lkp.kecamatan}, Kabupaten Karawang
          </p>
        </div>
      </section>

      {/* MAIN TWO-COLUMN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* LEFT/MAIN COLUMN (2/3 width on desktop) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* TENTANG LEMBAGA (DESKRIPSI) */}
          {lkp.description && (
            <article className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 border-l-4 border-blue-600 pl-3">
                Tentang Lembaga
              </h2>
              <div className="text-slate-600 text-base leading-relaxed whitespace-pre-wrap text-justify">
                {lkp.description}
              </div>
            </article>
          )}

          {/* VISI & MISI */}
          {(lkp.visi || lkp.misi) && (
            <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-5">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 border-l-4 border-blue-600 pl-3">
                Visi & Misi
              </h2>
              
              <div className={`grid grid-cols-1 ${lkp.visi && lkp.misi ? 'md:grid-cols-2' : ''} gap-6`}>
                {lkp.visi && (
                  <div className="bg-blue-50/45 rounded-2xl p-5 md:p-6 border border-blue-100/50 flex flex-col">
                    <h3 className="font-bold text-blue-900 text-base mb-3 flex items-center gap-2">
                      <span className="text-lg">🎯</span> Visi
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed italic text-justify">
                      "{lkp.visi}"
                    </p>
                  </div>
                )}
                
                {lkp.misi && (
                  <div className="bg-slate-50 rounded-2xl p-5 md:p-6 border border-slate-100 flex flex-col">
                    <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                      <span className="text-lg">📋</span> Misi
                    </h3>
                    <div className="text-slate-600 text-sm md:text-base leading-relaxed text-justify whitespace-pre-wrap">
                      {lkp.misi}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* FASILITAS & KEUNGGULAN */}
          {lkp.facilities && lkp.facilities.length > 0 && (
            <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 border-l-4 border-blue-600 pl-3">
                Fasilitas & Keunggulan
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {lkp.facilities.map((fac, idx) => (
                  <div 
                    key={idx}
                    className="bg-slate-50/60 border border-slate-100 p-4 rounded-xl flex items-start gap-3 hover:bg-slate-50 hover:border-slate-200 transition"
                  >
                    <span className="text-blue-500 font-bold text-base shrink-0 mt-0.5">✨</span>
                    <span className="text-slate-600 text-sm leading-relaxed text-justify">{fac}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* DOKUMENTASI KEGIATAN (GALERI FOTO) */}
          {lkp.images && lkp.images.length > 0 && (
            <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 border-l-4 border-blue-600 pl-3">
                Dokumentasi Kegiatan
              </h2>
              <p className="text-sm text-slate-500 mb-2">Klik foto untuk melihat dalam ukuran penuh.</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {lkp.images.map((img, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setActivePhoto(img)}
                    className="relative aspect-video sm:aspect-square bg-slate-100 rounded-xl overflow-hidden cursor-pointer group border border-slate-200 shadow-2xs hover:shadow-md transition duration-300"
                  >
                    <img 
                      src={img} 
                      alt={`Dokumentasi LKP ${idx + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                      <span className="bg-white/90 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow">
                        🔍 Perbesar
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* RIGHT COLUMN/SIDEBAR (1/3 width on desktop) */}
        <aside className="space-y-8">
          
          {/* INFORMASI KONTAK */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
            <h3 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-3">
              Informasi Kontak & Lokasi
            </h3>
            
            <div className="space-y-4 text-sm text-slate-700">
              <div className="flex gap-3 items-start">
                <span className="text-xl shrink-0">📍</span>
                <div>
                  <p className="font-bold text-slate-950">Alamat Lengkap</p>
                  <p className="text-slate-500 leading-relaxed mt-0.5">{lkp.alamat}</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <span className="text-xl shrink-0">📞</span>
                <div>
                  <p className="font-bold text-slate-950">Telepon / WhatsApp</p>
                  <p className="text-slate-500 mt-0.5 font-semibold">{lkp.kontak}</p>
                </div>
              </div>
            </div>
          </section>

          {/* PROGRAM PELATIHAN */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h3 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-3">
              Program Kursus
            </h3>
            <div className="flex flex-col gap-2">
              {lkp.program.map((prog, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex items-start gap-2.5 hover:bg-blue-50/50 hover:border-blue-200 transition"
                >
                  <span className="text-blue-600 font-bold shrink-0 mt-0.5">✔</span>
                  <span className="text-slate-700 text-sm font-semibold leading-relaxed">{prog}</span>
                </div>
              ))}
            </div>
          </section>

          {/* MAPS EMBED INTERAKTIF */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h3 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-3">
              Peta Lokasi
            </h3>
            
            <div className="relative w-full h-[220px] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner">
              <iframe
                title={`Peta Lokasi ${lkp.nama}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(lkp.nama + ' ' + lkp.alamat)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <a 
              href={lkp.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition text-center flex items-center justify-center gap-1.5 shadow-sm"
            >
              🌐 Buka di Google Maps App
            </a>
          </section>
        </aside>

      </div>

      {/* LIGHTBOX MODAL FOTO FULL SCREEN */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          style={{ animation: 'lightboxFade 0.2s ease-out' }}
          onClick={() => setActivePhoto(null)}
        >
          <button 
            onClick={() => setActivePhoto(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition bg-white/10 hover:bg-white/20 p-2.5 rounded-full text-lg leading-none"
            aria-label="Close Full Screen Photo"
          >
            ✕
          </button>
          
          <div 
            className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-xl bg-slate-950 flex items-center justify-center shadow-2xl"
            style={{ animation: 'lightboxZoom 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activePhoto} 
              alt="Dokumentasi Full Size" 
              className="w-auto max-w-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
