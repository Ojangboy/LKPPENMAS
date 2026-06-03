import React from 'react';
// Mengimpor foto bersama kelompok dari folder assets
import kelompokImg from './assets/kelompok.jpg';

// Data Profil Anggota Kelompok Pembuat SKILLAWANG
const teamMembers = [
  {
    id: 1,
    nama: "Rayhan Majid Alwi",
    npm: "2310631040027",
    ig: "@rayhankun_10",
    linkIg: "https://instagram.com/rayhankun_10"
  },
  {
    id: 2,
    nama: "Nayla Alifya Fatihatussalma",
    npm: "2310631040058",
    ig: "@naylaalifyaf",
    linkIg: "https://instagram.com/naylaalifyaf"
  },
  {
    id: 3,
    nama: "Dina Khairunisya Haq",
    npm: "2310631040073",
    ig: "@d_khairunisya",
    linkIg: "https://instagram.com/d_khairunisya"
  },
  {
    id: 4,
    nama: "Melly Dwi Widyawati",
    npm: "2310631040055",
    ig: "@mellydwytt",
    linkIg: "https://instagram.com/mellydwytt"
  },
  {
    id: 5,
    nama: "Amanda Putri Zhayatanie",
    npm: "2310631040002",
    ig: "@amandazh._",
    linkIg: "https://instagram.com/amandazh._"
  },
  {
    id: 6,
    nama: "Muhammad Sa’aduddin",
    npm: "2310631040081",
    ig: "@add_uyy",
    linkIg: "https://instagram.com/add_uyy"
  }
];

export default function Profile() {
  return (
    <section id="profile-pembuat" className="w-full bg-slate-50 py-12 px-6 flex-grow">
      <div className="max-w-5xl mx-auto">
        
        {/* Judul Halaman */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Profile Anggota Kelompok
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* FOTO BERSAMA KELOMPOK DI ATAS */}
        <div className="max-w-3xl mx-auto mb-12 bg-white p-3 rounded-2xl shadow-md border border-slate-200">
          <img 
            src={kelompokImg} 
            alt="Foto Bersama Kelompok" 
            className="w-full h-auto rounded-xl object-cover max-h-[450px]"
          />
        </div>

        {/* GRID CARD DATA ANGGOTA DI BAWAH FOTO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition duration-200 flex flex-col items-center text-center"
            >
              {/* Avatar Icon Kecil */}
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-lg font-bold mb-3">
                🎓
              </div>

              {/* Data Anggota */}
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-base leading-tight">
                  {member.nama}
                </h3>
                <p className="text-xs font-semibold text-slate-500">
                  NPM: {member.npm}
                </p>
                <p className="text-sm pt-2">
                  <a 
                    href={member.linkIg} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-blue-500 hover:text-blue-700 hover:underline font-medium"
                  >
                    {member.ig}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}