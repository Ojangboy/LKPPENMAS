import React from 'react';
// Mengimpor aset logo untuk bagian filosofi logo
import logoImg from './assets/logo.png'; 

export default function About() {
  return (
    <section id="about-page" className="w-full bg-slate-50 py-12 px-6 flex-grow">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* SECTION 1: HEADER & PROFIL */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs">
          <div className="text-center md:text-left mb-6">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Tentang SKILLAWANG
            </h2>
            <div className="w-20 h-1 bg-blue-600 mt-2 rounded-full mx-auto md:mx-0"></div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed text-justify">
            Skillawang merupakan sebuah platform berbasis website yang dirancang sebagai pusat informasi pelatihan dan pengembangan keterampilan yang tersedia di wilayah Karawang. Nama Skillawang berasal dari gabungan kata "Skill" yang berarti keterampilan dan "Karawang" sebagai wilayah fokus, sehingga mencerminkan tujuan utama platform ini sebagai wadah informasi pengembangan kemampuan masyarakat lokal[cite: 40]. Website ini dikembangkan sebagai solusi atas permasalahan keterbatasan akses informasi terkait pelatihan yang masih tersebar dan belum terintegrasi dalam satu media[cite: 40]. Melalui Skillawang, seluruh informasi pelatihan dihimpun dan disajikan secara terstruktur dalam satu platform yang mudah diakses oleh masyarakat[cite: 40].
          </p>
        </div>

        {/* SECTION 2: TUJUAN */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-4">
          <h3 className="text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
            Tujuan Platform
          </h3>
          <p className="text-slate-600 text-base leading-relaxed text-justify">
            Skillawang dibuat sebagai platform digital yang bertujuan untuk mempermudah masyarakat Karawang dalam mengakses informasi pelatihan dan pengembangan keterampilan secara cepat, mudah, dan terpusat[cite: 40]. Kehadiran Skillawang diharapkan dapat menjadi jembatan antara lembaga penyelenggara pelatihan dengan masyarakat yang membutuhkan peningkatan kemampuan diri, baik pelajar, mahasiswa, maupun pencari kerja[cite: 40]. Selain itu, Skillawang juga bertujuan mendukung digitalisasi informasi pelatihan agar lebih modern, terintegrasi, dan mampu mendorong peningkatan kualitas sumber daya manusia di tengah pesatnya perkembangan dunia industri di Kabupaten Karawang[cite: 40].
          </p>
        </div>

        {/* SECTION 3: VISI & MISI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Visi */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
            <h3 className="text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
              Visi
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed text-justify font-medium italic">
              "Menjadi platform informasi pelatihan terpercaya di Karawang yang mendukung pengembangan keterampilan, pemberdayaan masyarakat, dan peningkatan kualitas sumber daya manusia melalui akses informasi yang mudah, terpusat, dan berbasis digital."[cite: 40]
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
            <h3 className="text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
              Misi
            </h3>
            <ul className="space-y-2 text-slate-600 text-sm list-disc pl-4">
              <li>Menyediakan informasi pelatihan, kursus, dan pengembangan keterampilan secara lengkap, akurat, dan mudah diakses[cite: 40].</li>
              <li>Menjadi media penghubung antara lembaga pelatihan dengan masyarakat yang membutuhkan peningkatan keterampilan[cite: 40].</li>
              <li>Mendukung digitalisasi informasi pelatihan di wilayah Karawang agar lebih modern, efektif, dan terintegrasi[cite: 40].</li>
              <li>Membantu masyarakat, pelajar, mahasiswa, dan pencari kerja dalam menemukan pelatihan yang sesuai dengan kebutuhan mereka[cite: 40].</li>
              <li>Mendorong peningkatan kualitas sumber daya manusia melalui akses informasi pelatihan yang cepat, praktis, dan terpercaya[cite: 40].</li>
            </ul>
          </div>
        </div>

        {/* SECTION 4: FILOSOFI LOGO */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs">
          <h3 className="text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3 mb-6">
            Filosofi Logo
          </h3>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Box Tampilan Logo */}
            <div className="w-40 h-40 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center p-4 shrink-0 shadow-inner">
              <img src={logoImg} alt="Logo Skillawang" className="w-full h-full object-contain" />
            </div>

            {/* Keterangan Ikonografi */}
            <div className="space-y-4 flex-grow">
              <h4 className="font-bold text-slate-800 text-base">Elemen Visual (Ikonografi):</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li><strong className="text-slate-900">🏢 Siluet Pabrik & Gedung:</strong> Merepresentasikan identitas Kabupaten Karawang sebagai Kota Industri terbesar di Asia Tenggara[cite: 40].</li>
                <li><strong className="text-slate-900">⬆️ Panah ke Atas (Arrow Up):</strong> Melambangkan progres, kenaikan jenjang karier, dan peningkatan kualitas SDM melalui pelatihan[cite: 40].</li>
                <li><strong className="text-slate-900">⭕ Lingkaran Terbuka (Open Circle):</strong> Melambangkan komunitas dan ekosistem yang inklusif namun tetap dinamis[cite: 40].</li>
                <li><strong className="text-slate-900">✏️ Garis Outline Modern:</strong> Penggunaan gaya monoline memberikan kesan modern, bersih, dan adaptif terhadap teknologi digital[cite: 40].</li>
              </ul>
            </div>
          </div>

          <hr className="my-6 border-slate-100" />

          {/* Keterangan Warna */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
              <span className="font-bold text-amber-700 block mb-1">🟡 Kuning (FFD700)</span>
              <p className="text-slate-600 text-xs">Melambangkan optimisme, energi, kecemerlangan, kemakmuran, dan harapan masa depan cerah[cite: 40].</p>
            </div>
            <div className="bg-slate-100 p-4 rounded-xl border border-slate-200">
              <span className="font-bold text-slate-800 block mb-1">⚫ Hitam (000000)</span>
              <p className="text-slate-600 text-xs">Memberikan kesan kekuatan, ketegasan, profesionalisme, serta pondasi yang kuat dan diandalkan[cite: 40].</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="font-bold text-slate-500 block mb-1">⚪ Putih (FFFFFF)</span>
              <p className="text-slate-600 text-xs">Melambangkan transparansi, kejujuran, dan fokus pada efisiensi sistem[cite: 40].</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}