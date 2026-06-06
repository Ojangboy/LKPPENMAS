import React, { useState } from 'react';

// Data LKP Resmi yang dikelompokkan berdasarkan Kecamatan di Karawang diimpor dari berkas JSON
import lkpData from './data/lkpData.json';

const kecamatanList = [
  { name: "Karawang Barat", icon: "🏢", desc: "Pusat pemerintahan dan bisnis komersial Karawang." },
  { name: "Karawang Timur", icon: "🏭", desc: "Akses gerbang industri dan pemukiman padat berkembang." },
  { name: "Telukjambe Timur", icon: "🎓", desc: "Kawasan pusat pendidikan tinggi dan residensial modern." }
];

export default function DataLkp({ onViewDetail, selectedKecamatan, setSelectedKecamatan, searchTerm, setSearchTerm }) {
  const [activeMapLkp, setActiveMapLkp] = useState(null);

  const filteredLkp = lkpData.filter(lkp => {
    const matchesKecamatan = lkp.kecamatan === selectedKecamatan;
    const matchesSearch = lkp.nama.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesKecamatan && matchesSearch;
  });

  return (
    <section id="data-lkp" className="w-full bg-slate-50 py-16 px-6 flex-grow">
      <div className="max-w-6xl mx-auto">
        
        {/* TAMPILAN 1: MENU UTAMA 3 CARD KECAMATAN */}
        {selectedKecamatan === null ? (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Pilih Wilayah Kecamatan
              </h2>
              <p className="text-slate-600 mt-2 text-lg max-w-2xl mx-auto">
                Silakan pilih salah satu wilayah di bawah ini untuk melihat daftar Lembaga Pelatihan Kerja (LKP) yang tersedia.
              </p>
              <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Grid 3 Card Kecamatan */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {kecamatanList.map((kec, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedKecamatan(kec.name)}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-3xl font-bold group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                      {kec.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                      Kec. {kec.name}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {kec.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-blue-600 font-bold text-sm">
                    <span>Lihat Lembaga</span>
                    <span className="transform group-hover:translate-x-1.5 transition duration-200">➔</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          
          /* TAMPILAN 2: LIST DATA LKP SETELAH KECAMATAN DI-KLIK */
          <div>
            {/* Tombol Kembali */}
            <button 
              onClick={() => { setSelectedKecamatan(null); setSearchTerm(""); }}
              className="mb-6 flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition"
            >
              ⬅ Kembali ke Pilihan Kecamatan
            </button>

            {/* Banner Informasi Kecamatan Aktif */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Wilayah Terpilih</span>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900">Kecamatan {selectedKecamatan}</h2>
              </div>
              <div className="w-full md:w-72">
                <input 
                  type="text" 
                  placeholder="🔍 Cari nama LKP di sini..."
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* List Tampilan Grid Card Hasil Filter */}
            {filteredLkp.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredLkp.map((lkp) => (
                  <div key={lkp.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                    <div>
                      {/* Badge Kategori Bidang */}
                      <div className="flex justify-between items-start gap-2 mb-3">
                        <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full border border-blue-100">
                          {lkp.bidang}
                        </span>
                      </div>

                      {/* Nama Lembaga & Akreditasi */}
                      <h3 className="text-xl font-bold text-slate-900">
                        {lkp.nama} <span className="text-sm font-medium text-amber-500 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 ml-1">Akreditasi {lkp.akreditasi}</span>
                      </h3>

                      {/* Kecamatan */}
                      <div className="mt-3 text-sm text-slate-500 font-semibold flex items-center gap-1.5">
                        <span>📍 Kecamatan {lkp.kecamatan}</span>
                      </div>
                    </div>

                    {/* Tombol Aksi */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex gap-3">
                      <button 
                        onClick={() => onViewDetail(lkp.id)}
                        className="flex-grow bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold py-2.5 rounded-lg text-sm border border-slate-200 transition text-center"
                      >
                        Detail Lembaga
                      </button>
                      <button 
                        onClick={() => setActiveMapLkp(lkp)}
                        className="flex-grow bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg text-sm transition text-center flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        📍 Lihat Peta
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-500 font-medium">Tidak ada lembaga pelatihan yang terdaftar atau cocok dengan pencarian.</p>
              </div>
            )}
          </div>
        )}

      </div>

      {/* MODAL POPUP PETA INTERAKTIF */}
      {activeMapLkp && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-xs p-4"
          style={{
            animation: 'modalFade 0.2s ease-out forwards'
          }}
          onClick={() => setActiveMapLkp(null)}
        >
          {/* Tag Style untuk Animasi Kustom Premium */}
          <style>{`
            @keyframes modalFade {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes modalZoom {
              from { transform: scale(0.95); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
            }
          `}</style>
          
          <div 
            className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            style={{
              animation: 'modalZoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg leading-tight">
                  {activeMapLkp.nama}
                </h3>
                <p className="text-xs text-blue-600 font-semibold mt-0.5">
                  Kecamatan {activeMapLkp.kecamatan}
                </p>
              </div>
              <button 
                onClick={() => setActiveMapLkp(null)}
                className="text-slate-400 hover:text-slate-600 transition p-1.5 hover:bg-slate-100 rounded-full text-lg leading-none"
                aria-label="Close Map"
              >
                ✕
              </button>
            </div>

            {/* Area Peta Iframe */}
            <div className="relative flex-grow bg-slate-100 min-h-[320px] sm:min-h-[400px] h-[50vh]">
              <iframe
                title={`Peta Lokasi ${activeMapLkp.nama}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(activeMapLkp.nama + ' ' + activeMapLkp.alamat)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Footer Modal */}
            <div className="p-6 border-t border-slate-100 bg-slate-50 space-y-4">
              <div className="text-sm text-slate-600 space-y-1">
                <p className="font-bold text-slate-800">Alamat:</p>
                <p className="text-justify leading-relaxed">{activeMapLkp.alamat}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button 
                  onClick={() => setActiveMapLkp(null)}
                  className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-2.5 rounded-lg text-sm transition"
                >
                  Tutup Peta
                </button>
                <a 
                  href={activeMapLkp.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeMapLkp.nama + ' ' + activeMapLkp.alamat)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg text-sm transition text-center flex items-center justify-center gap-1.5 shadow-sm"
                >
                  🌐 Buka di Google Maps App
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}