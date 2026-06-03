import React, { useState } from 'react';

// Data LKP Resmi yang dikelompokkan berdasarkan Kecamatan di Karawang
const lkpData = [
  {
    id: 1,
    nama: "LPK PT. MJI Education Service",
    bidang: "Bahasa Asing & Program Magang",
    akreditasi: "B",
    kecamatan: "Karawang Barat",
    alamat: "Jl. Proklamasi No.63, Tanjungmekar, Kec. Karawang Barat, Karawang, Jawa Barat 41311",
    kontak: "0811-9216-980",
    program: ["Bahasa Jepang Intensif", "Budaya & Etika Kerja Jepang", "Persiapan Magang Jepang"]
  },
  {
    id: 2,
    nama: "LKP Fujiyama",
    bidang: "Kursus Keterampilan & Mental Kerja",
    akreditasi: "B",
    kecamatan: "Karawang Barat",
    alamat: "Jl. Otto Iskandar Dinata No.36, Nagasari, Kec. Karawang Barat, Karawang, Jawa Barat 41312",
    kontak: "0813-1440-0677",
    program: ["Pelatihan Praktik Kerja", "Komunikasi Dunia Kerja", "Pembinaan Kedisiplinan"]
  },
  {
    id: 3,
    nama: "LKP Prisma Computer",
    bidang: "Teknologi Informasi & Komputer",
    akreditasi: "A",
    kecamatan: "Karawang Barat",
    alamat: "Jl. Arif Rahman Hakim (Niaga) No 9, Kec. Karawang Barat, Karawang",
    kontak: "0813-9433-4777",
    program: ["Aplikasi Perkantoran", "Teknisi Komputer", "Desain Grafis"]
  },
  {
    id: 4,
    nama: "LKP Aditya",
    bidang: "Kursus & Pendidikan Keterampilan",
    akreditasi: "B",
    kecamatan: "Karawang Barat",
    alamat: "Jl. A. Yani Gg. Betet No. 33 Rt.03/Rw.07, Karangpawitan, Kec. Karawang Barat, Karawang",
    kontak: "0812-8574-7837",
    program: ["Pendidikan Kecakapan Kerja", "Kursus Dasar"]
  },
  {
    id: 5,
    nama: "LKP BBC English Training Specialist",
    bidang: "Kursus & Pendidikan Keterampilan",
    akreditasi: "B",
    kecamatan: "Karawang Barat",
    alamat: "Jl. Kertabumi No. 1 & 2, Karawang Kulon, Kec. Karawang Barat, Kabupaten Karawang, Jawa Barat.",
    kontak: "0815-1177-7995",
    program: ["Pendidikan Bahasa"]
  },
  {
    id: 6,
    nama: "LPK Japan Link Indonesia",
    bidang: "Pelatihan Bahasa & Budaya Jepang",
    akreditasi: "B",
    kecamatan: "Karawang Barat",
    alamat: "Jl. Jenderal Ahmad Yani No.1, Kel. Karangpawitan, Kec. Karawang Barat, Kab. Karawang, Prov. Jawa Barat 41315",
    kontak: "085777775301 / 085777775302",
    program: ["Pelatihan Standar Jepang", "Pembentukan Mental & Kedisiplinan", "Persiapan Karier Jepang"]
  },
  {
    id: 7,
    nama: "LKP Dewi Welas Asih",
    bidang: "Tata Busana & Menjahit",
    akreditasi: "A",
    kecamatan: "Karawang Barat",
    alamat: "Jln. Bayang Kara No. 371. F Rt. 09 / Rw. 06, Kel. Tanjung Mekar, Kec. Karawang Barat, Kab. Karawang 41316",
    kontak: "0813 8168 2865",
    program: ["Menjahit Pakaian Wanita dan Anak (MPWA)", "Pembuatan Kebaya Inovasi"]
  },
  {
    id: 8,
    nama: "LKP Ely Stir",
    bidang: "Kursus Mengemudi",
    akreditasi: "B",
    kecamatan: "Karawang Barat",
    alamat: "Jl. Arif Rahman Hakim No.47, Nagasari, Kec. Karawang Barat, Karawang, Jawa Barat 41312",
    kontak: "085776660888",
    program: ["Mengemudi Mobil Manual", "Mengemudi Mobil Matic", "Teori Keselamatan Berlalu Lintas"]
  },
  {
    id: 9,
    nama: "LPK Gatto Libero Muezza",
    bidang: "Bahasa Asing & Penempatan Jepang",
    akreditasi: "B",
    kecamatan: "Karawang Barat",
    alamat: "Jln Panatayuda II No.9, Kec. Karawang Barat, Karawang",
    kontak: "0267-4870-222 / 0811-5860-0047",
    program: ["Magang Teknis (TITP)", "Pekerja Terampil Khusus (SSW)", "Pelatihan Etika Kerja Jepang"]
  },
  {
    id: 10,
    nama: "LKP Ulfah Karawang",
    bidang: "Tata Riad & Kecantikan",
    akreditasi: "B",
    kecamatan: "Karawang Barat",
    alamat: "Jl. Syech Quro, Kp. Sukahati No.20, Rt.01 Rw.18, Johar Utara, Kelurahan Karawang Wetan, Kecamatan Karawang Timur, Kabupaten Karawang, Jawa Barat",
    kontak: "0895367289486",
    program: ["Meningkatkan Keterampilan", "Tata Rias Kecantikan"]
  },

  // --- KARAWANG TIMUR ---

  {
    id: 11,
    nama: "LKP Mitsutomo Gakuin Indonesia",
    bidang: "Bahasa Asing & Program Magang",
    akreditasi: "B",
    kecamatan: "Karawang Timur",
    alamat: "Jl. Manunggal VII Kp. Citeureup, RT 001/RW 014, Kelurahan Palumbonsari, Kecamatan Karawang Timur, Kabupaten Karawang, Jawa Barat 41314",
    kontak: "0851-5637-6236",
    program: ["Pendidikan Bahasa Jepang", "Persiapan Seleksi Magang", "Pelatihan Karakter IM Japan & SSW"]
  },
  {
    id: 12,
    nama: "LPK JEA Service Indonesia",
    bidang: "Pendidikan Bahasa & Penempatan Industri",
    akreditasi: "B",
    kecamatan: "Karawang Timur",
    alamat: "Gang Wallet, Jl. Sukamulya, Dusun Sukamulya RT.003/RW.019, Karawang Wetan, Kecamatan Karawang Timur, Karawang",
    kontak: "0811-1316-734 / 0813-8481-1369",
    program: ["Technical Internship", "Specified Skilled Worker (SSW)", "Persiapan Kerja Engineering"]
  },
  {
    id: 13,
    nama: "LPK Akira Gakuin",
    bidang: "Pendidikan Bahasa & Pembinaan Karakter",
    akreditasi: "B",
    kecamatan: "Karawang Timur",
    alamat: "Jl. Kamboja, Karawang Wetan, Kecamatan Karawang Timur, Kabupaten Karawang, Jawa Barat 41313",
    kontak: "0895-4015-03162",
    program: ["Kursus Komunikasi Jepang", "Kesiapan Fisik & Karakter Kerja", "Penyaluran Program Magang"]
  },
  {
    id: 14,
    nama: "LPK Kessaku Indonesia",
    bidang: "Pendidikan Bahasa & Budaya Jepang",
    akreditasi: "B",
    kecamatan: "Karawang Timur",
    alamat: "Gedung Karawang Asri Center B21-23, Jl. Surotokunto Rawagabus Post RT. 003 RW. 007, Adiarsa Timur, Kec. Karawang Timur, Karawang",
    kontak: "+62 267 8604099 / +62 877-3550-1641",
    program: ["Kurikulum Berbasis Standar Kemenaker", "Pelatihan Bahasa dengan Media Digital", "Etika Kerja & Komunikasi Jepang"]
  },
  {
    id: 15,
    nama: "LPK Hikari Indonesia",
    bidang: "Pelatihan Kerja Swasta & Pengiriman Tenaga Kerja",
    akreditasi: "B",
    kecamatan: "Karawang Timur",
    alamat: "Krajan RT.008/RW.002, Desa Palawad, Kecamatan Karawang Timur, Kabupaten Karawang, Jawa Barat 41314",
    kontak: "0812-9708-2625 / 0822-9968-2864",
    program: ["Pembelajaran Bahasa Level N5 - N4", "Latihan Fisik & Wawancara Kerja", "Sektor Caregiver, Manufaktur, & Pengolahan Makanan"]
  },
  {
    id: 16,
    nama: "LPK Akarui Mirai Indonesia",
    bidang: "Pendidikan Bahasa Asing & Karakter Kerja",
    akreditasi: "B",
    kecamatan: "Karawang Timur",
    alamat: "Perumahan Bumi Karawang Permai, Adiarsa Timur, Kecamatan Karawang Timur, Kabupaten Karawang, Jawa Barat 41313",
    kontak: "0896-3407-5472 / 0852-9000-0879",
    program: ["Pelatihan Bahasa Jepang & Korea", "Praktik Kerja Langsung Bidang Industri", "Simulasi Wawancara Perusahaan Luar Negeri"]
  },
  {
    id: 17,
    nama: "LPK Kashiwado Hasanati Wijaya",
    bidang: "Pendidikan Bahasa & Pembentukan Karakter Kerja",
    akreditasi: "B",
    kecamatan: "Karawang Timur",
    alamat: "Jl. Griya Kondang Asri Blok R.1 No.12B, RT.19/RW.07, Desa Kondangjaya, Kecamatan Karawang Timur, Karawang",
    kontak: "0852-8745-6530 / 0813-1073-5613",
    program: ["Modul Pembelajaran Minna no Nihongo", "Pelatihan Sistem 5S & Karakter Kerja", "Keselamatan Kerja Standar Industri Jepang"]
  },
  {
    id: 18,
    nama: "LPK Berkah Multiguna Abadi",
    bidang: "Pengembangan Keterampilan Kerja & Bahasa",
    akreditasi: "B",
    kecamatan: "Karawang Timur",
    alamat: "Perum Puri Asih Permai Blok A, Lingkungan Jl. Sumadiraja Cibungur Indah No.2, RT.01/RW.027, Karawang Wetan, Kec. Karawang Timur, Karawang",
    kontak: "0811-1619-718 / 0812-2845-3176",
    program: ["Pelatihan Keterampilan Dunia Industri", "Layanan Informasi Lowongan Kerja", "Peningkatan Kemampuan Komunikasi"]
  },
  {
    id: 19,
    nama: "LKP Johar Jaya",
    bidang: "Kursus Stir Mobil & Menjahit",
    akreditasi: "B",
    kecamatan: "Karawang Timur",
    alamat: "Jl. Otto Iskandar Dinata / Jl. Otista Gg. Rafa No.13 Johar, Karawang Wetan, Kecamatan Karawang Timur, Karawang",
    kontak: "0813-1466-9001 / 0812-8539-0331",
    program: ["Kursus Mengemudi Praktik Langsung", "Kursus Menjahit Pakaian", "Modul Pelatihan & Pendampingan Pembuatan SIM"]
  },

  // --- TELUKJAMBE TIMUR ---
  {
    id: 20,
    nama: "LPK Yutaka Education Centre",
    bidang: "Pendidikan Bahasa & Program Pemagangan",
    akreditasi: "B",
    kecamatan: "Telukjambe Timur",
    alamat: "Perumahan Grand Taruma Ruko Dharmawangsa 3, Blok E23 Jl Tarumanegara Kav 8 Arteri tol Karawang Barat, Desa Sukamakmur, Telukjambe Timur, Karawang",
    kontak: "0811-9216-980 / 0811-1249-966",
    program: ["Pelatihan Bahasa Jepang", "Program Caregiver & Study ke Jepang", "Pelatihan Wawancara Seleksi Kerja"]
  },
  {
    id: 21,
    nama: "LPK Masayuki Mitra Utama",
    bidang: "Persiapan Kerja Luar Negeri & Bahasa",
    akreditasi: "B",
    kecamatan: "Telukjambe Timur",
    alamat: "Perumnas Bumi Telukjambe, Jl. Baladewa III No.16 Blok PF, Sukaluyu, Telukjambe Timur, Karawang",
    kontak: "0813-8272-2750",
    program: ["Bahasa Jepang Tingkat Dasar", "Pelatihan Fisik & Karakter Kerja", "Simulasi Adaptasi Hidup di Jepang"]
  },
  {
    id: 22,
    nama: "LPK Dwi Karya Prima",
    bidang: "Pelatihan Keterampilan Industri & Teknik",
    akreditasi: "B",
    kecamatan: "Telukjambe Timur",
    alamat: "Ruko Arcadia, Jl. Galuh Mas Raya No.Blok C22, Sukaharja, Telukjambe Timur, Karawang",
    kontak: "0852-8207-0868",
    program: ["Tokutei Ginou (SSW) & Pemapanan Kerja", "Workshop Produktivitas Mesin Industri", "Pelatihan Teknik Las Kualifikasi Global"]
  },
  {
    id: 23,
    nama: "LPK Nikkou Gakkou",
    bidang: "Persiapan Kerja & Magang Vokasi",
    akreditasi: "B",
    kecamatan: "Telukjambe Timur",
    alamat: "Ruko Sentraland Business Park, Blok KA 7, Sukaluyu, Telukjambe Timur, Karawang",
    kontak: "0811-8972-73 / 0812-8216-1382",
    program: ["Pelatihan Intensif Bahasa Jepang", "Pembinaan Etika & Budaya Kerja", "Bimbingan Adaptasi Lingkungan Industri"]
  },
  {
    id: 24,
    nama: "LPK Japindo Karawang",
    bidang: "Pendidikan Bahasa & Keterampilan Teknis",
    akreditasi: "B",
    kecamatan: "Telukjambe Timur",
    alamat: "Perumnas Bumi Telukjambe Blok F No. 25, Sukaluyu, Telukjambe Timur, Karawang",
    kontak: "0811-9350-995",
    program: ["Materi Bahasa & Kebudayaan Jepang", "Sistem Pembinaan Kedisiplinan Kerja", "Pelatihan Wawancara Industri Global"]
  },
  {
    id: 25,
    nama: "LKP Farina",
    bidang: "Kursus Kecantikan & Tata Rias",
    akreditasi: "B",
    kecamatan: "Telukjambe Timur",
    alamat: "Sukaharja, Telukjambe Timur, Karawang",
    kontak: "0813-9970-1118",
    program: ["Make Up & Tata Rambut", "Perawatan Wajah (Facial/Manicure/Pedicure)", "Uji Kompetensi Keterampilan Beauty Care"]
  },
  {
    id: 26,
    nama: "Sekai Elite Education & Training Centre",
    bidang: "Pendidikan Vokasi & Pelatihan Bahasa Asing",
    akreditasi: "B",
    kecamatan: "Telukjambe Timur",
    alamat: "Jl. Arteri Ruko Citywalk Galuh Mas, Blok IX A2 No.03, Puseurjaya, Karawang",
    kontak: "0811-9790-876",
    program: ["Bahasa Jepang, Inggris, Mandarin, Korea, Jerman", "Management Kaizen & Soft Skill Vokasi", "Program Translator & Translation"]
  },
  {
    id: 27,
    nama: "LPK Mitra Jinzai Indonesia",
    bidang: "Pengembangan Bahasa & Sending Organization",
    akreditasi: "B",
    kecamatan: "Telukjambe Timur",
    alamat: "Perum Prima Blok C1 No 1 Sukaharja, Telukjambe Timur, Kab. Karawang",
    kontak: "0821-2799-5151",
    program: ["Bahasa Komunikasi Kerja Harian", "Sektor Pelatihan Kerja Khusus (Kaigo/Pertanian)", "Pengurusan Legalitas Dokumen Penempatan"]
  },
  {
    id: 28,
    nama: "LPK Galuh Berkarya",
    bidang: "Persiapan Tenaga Kerja & Pembentukan Karakter",
    akreditasi: "B",
    kecamatan: "Telukjambe Timur",
    alamat: "Ruko Emporium VII VC-15 Galuh Mas Raya, Sukaharja, Telukjambe Timur, Karawang",
    kontak: "0812-1362-1200",
    program: ["Bahasa Jepang Umum & Ujian Sertifikasi", "Pembinaan Fisik & Mental Industri", "Sektor Pelatihan Kaigo, Pertanian, & Perhotelan"]
  },
  {
    id: 29,
    nama: "ABC Baking Center",
    bidang: "Pelatihan Keterampilan Kuliner & Tata Boga",
    akreditasi: "B",
    kecamatan: "Telukjambe Timur",
    alamat: "Ruko Bharata Blok U No.10 Lantai 3, Galuhmas, Karawang",
    kontak: "0877-8812-6622",
    program: ["Teknik Pembuatan Roti & Roti Manis", "Seni Dekorasi Kue, Pastry, & Dessert", "Pelatihan Pengemasan & Peluang Usaha Kuliner"]
  }
];

const kecamatanList = [
  { name: "Karawang Barat", icon: "🏢", desc: "Pusat pemerintahan dan bisnis komersial Karawang." },
  { name: "Karawang Timur", icon: "🏭", desc: "Akses gerbang industri dan pemukiman padat berkembang." },
  { name: "Telukjambe Timur", icon: "🎓", desc: "Kawasan pusat pendidikan tinggi dan residensial modern." }
];

export default function DataLkp() {
  const [selectedKecamatan, setSelectedKecamatan] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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

                      {/* Info Alamat & Kontak */}
                      <div className="space-y-1.5 mt-3 text-sm text-slate-600">
                        <p>📍 {lkp.alamat}</p>
                        <p>📞 {lkp.kontak}</p>
                      </div>

                      {/* List Program Pelatihan */}
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Program Tersedia:</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {lkp.program.map((prog, idx) => (
                            <span key={idx} className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded font-medium border border-slate-200">
                              {prog}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Tombol Aksi */}
                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 rounded-lg text-sm border border-slate-300 transition text-center">
                        Detail Lembaga
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
    </section>
  );
}