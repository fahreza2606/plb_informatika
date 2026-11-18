import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  AlertTriangle, 
  AlertCircle, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight,
  HelpCircle,
  RotateCw,
  Sun,
  Flame,
  Info
} from 'lucide-react';

export default function Education() {
  const steps = [
    {
      num: "01",
      title: "Kocok Botol",
      instruction: "Kocok botol DEOSIRIH secara perlahan selama 3-5 detik sebelum digunakan.",
      detail: "Tujuannya untuk memastikan partikel infusa daun sirih, mentol, dan larutan tawas terdistribusi homogen secara sempurna sebelum disemprotkan.",
      icon: <RotateCw className="w-6 h-6 text-mint-600" />,
      tag: "Homogenisasi Sediaan"
    },
    {
      num: "02",
      title: "Pastikan Ketiak Bersih & Kering",
      instruction: "Gunakan pada kulit ketiak yang telah dicuci bersih dan dikeringkan secara tuntas.",
      detail: "Waktu terbaik adalah sesaat setelah mandi. Kulit ketiak yang kering dan bersih bebas keringat basi memaksimalkan penyerapan senyawa antibakteri sirih ke permukaan kulit.",
      icon: <Sun className="w-6 h-6 text-cyan-600" />,
      tag: "Kondisi Permukaan Kulit"
    },
    {
      num: "03",
      title: "Semprotkan 2-3 Kali",
      instruction: "Semprotkan sebanyak 2 hingga 3 kali semprotan merata pada masing-masing ketiak.",
      detail: "Pegang botol dengan jarak ideal 10–15 cm dari ketiak. Biarkan mengering secara alami selama 10–20 detik sebelum mengenakan pakaian.",
      icon: <Sparkles className="w-6 h-6 text-emerald-600" />,
      tag: "Aplikasi Micro-Mist"
    }
  ];

  const faqs = [
    {
      q: "Berapa lama aroma dan perlindungan DEOSIRIH bertahan?",
      a: "Dalam aktivitas normal di dalam ruangan, perlindungan antibakteri tawas dan sirih dapat bertahan hingga 12–24 jam. Jika Anda berolahraga berat atau berkeringat ekstra, Anda dapat menyemprotkan ulang setelah mengeringkan ketiak."
    },
    {
      q: "Apakah DEOSIRIH membuat kulit ketiak menghitam?",
      a: "Tidak. Justru sebaliknya, DEOSIRIH bebas dari alkohol pekat dan aluminium klorohidrat yang umumnya menjadi pemicu hiperpigmentasi (ketiak hitam). Daun sirih dan tawas telah lama dikenal sebagai bahan pencerah alami tradisional."
    },
    {
      q: "Apakah aman digunakan setiap hari?",
      a: "Sangat aman untuk pemakaian harian bagi individu yang tidak memiliki riwayat hipersensitivitas terhadap tawas, daun sirih, atau mentol."
    }
  ];

  return (
    <div className="bg-slate-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb & Title */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint-100 text-sirih-forest text-xs font-bold uppercase tracking-wider mb-3">
            <Info className="w-3.5 h-3.5" />
            Panduan & Farmakovigilans
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Panduan Edukasi & Cara Pakai
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mt-2">
            Ikuti tata cara pemakaian yang benar serta perhatikan peringatan dan kontraindikasi demi hasil maksimal dan keamanan kulit Anda.
          </p>
        </div>

        {/* SEKSI 1: CARA PAKAI (Langkah Visual 1, 2, 3) */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-sirih-forest">
              Langkah Sederhana & Efektif
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Cara Pakai DEOSIRIH (3 Langkah)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((st, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 hover:border-mint-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-mint-500 to-sirih-deep text-white font-black text-lg flex items-center justify-center shadow-md shadow-mint-500/20">
                      {st.num}
                    </span>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      {st.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {st.title}
                  </h3>

                  <p className="text-sm font-semibold text-sirih-forest mb-3">
                    {st.instruction}
                  </p>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {st.detail}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>Rekomendasi Pemakaian</span>
                  <CheckCircle2 className="w-4 h-4 text-sirih-forest" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEKSI 2: KOTAK MEDIS & PERINGATAN (Alert UI dengan border warna kontras merah muda / kuning) */}
        <section className="mb-16">
          
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold tracking-wide uppercase mb-2">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
              Informasi Keamanan Medis
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Peringatan, Kontraindikasi & Efek Samping
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Sebagai produk sediaan topikal berbasis fitofarmaka, bacalah petunjuk keselamatan berikut dengan teliti.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Box 1: Peringatan (Kuning/Amber Border Lembut) */}
            <div className="rounded-3xl p-6 sm:p-7 bg-amber-50/70 border-2 border-amber-300 shadow-xs relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-200 text-amber-900 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-5 h-5 text-amber-800" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-800">
                      Petunjuk Waspada
                    </span>
                    <h3 className="text-lg font-black text-amber-950">
                      Peringatan
                    </h3>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-amber-900/90 leading-relaxed">
                  <p className="font-semibold text-amber-950">
                    Hanya untuk pemakaian luar.
                  </p>
                  <p>
                    Jangan disemprotkan pada kulit yang sedang terluka terbuka, lecet, atau kulit yang baru saja dicukur / di-waxing (tunggu minimal 24 jam).
                  </p>
                  <p>
                    Segera hentikan pemakaian jika timbul gejala kemerahan, gatal, atau rasa panas terbakar. Hindari kontak langsung dengan mata dan membran mukosa.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-amber-200/80 text-[11px] font-bold text-amber-900 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                <span>Simpan di tempat sejuk dan terhindar dari sinar matahari langsung.</span>
              </div>
            </div>

            {/* Box 2: Kontraindikasi (Merah Muda / Rose Border Lembut) */}
            <div className="rounded-3xl p-6 sm:p-7 bg-rose-50/70 border-2 border-rose-300 shadow-xs relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-200 text-rose-900 flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-5 h-5 text-rose-800" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-800">
                      Tidak Dianjurkan Untuk
                    </span>
                    <h3 className="text-lg font-black text-rose-950">
                      Kontraindikasi
                    </h3>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-rose-900/90 leading-relaxed">
                  <p className="font-semibold text-rose-950">
                    Riwayat Hipersensitivitas:
                  </p>
                  <p>
                    Individu dengan riwayat hipersensitivitas atau alergi spesifik terhadap:
                  </p>
                  <ul className="list-disc list-inside space-y-1 font-medium pl-1">
                    <li>Senyawa tawas (Potassium Alum)</li>
                    <li>Ekstrak daun sirih (Piper betle L.)</li>
                    <li>Kristal mentol atau derivat daun mint</li>
                  </ul>
                  <p className="text-xs text-rose-800 pt-1">
                    Lakukan <em>patch test</em> kecil pada lengan bawah bagian dalam selama 24 jam jika memiliki riwayat kulit hipersensitif.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-rose-200/80 text-[11px] font-bold text-rose-900 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-rose-700" />
                <span>Konsultasikan ke tenaga medis jika alergi berlanjut.</span>
              </div>
            </div>

            {/* Box 3: Efek Samping (Kuning-Merah Lembut Kombinasi) */}
            <div className="rounded-3xl p-6 sm:p-7 bg-orange-50/70 border-2 border-orange-300 shadow-xs relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-200 text-orange-900 flex items-center justify-center shrink-0">
                    <Flame className="w-5 h-5 text-orange-800" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-orange-800">
                      Kemungkinan Reaksi
                    </span>
                    <h3 className="text-lg font-black text-orange-950">
                      Efek Samping
                    </h3>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-orange-900/90 leading-relaxed">
                  <p>
                    Reaksi efek samping umumnya bersifat sementara dan sangat jarang terjadi bila digunakan sesuai panduan:
                  </p>
                  <ul className="space-y-2 font-medium">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 shrink-0"></span>
                      <span><strong>Iritasi Ringan & Kemerahan:</strong> Terjadi pada kulit yang sangat kering atau hipersensitif.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 shrink-0"></span>
                      <span><strong>Rasa Perih:</strong> Jika disemprotkan secara tidak sengaja pada pori-pori yang luka atau luka gores mikro.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 shrink-0"></span>
                      <span><strong>Kulit Kering:</strong> Jika digunakan melebihi dosis anjuran berulang kali dalam sehari tanpa mencuci sisa tawas.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-orange-200/80 text-[11px] font-bold text-orange-900 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-orange-700" />
                <span>Bilas dengan air mengalir jika terjadi rasa perih yang mengganggu.</span>
              </div>
            </div>

          </div>

        </section>

        {/* SEKSI 3: FAQ KESEHATAN KETIAK */}
        <section className="mb-14">
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-sirih-forest" />
              Pertanyaan yang Sering Diajukan (FAQ)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-2">
                <h4 className="text-base font-bold text-slate-900">
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CALL TO ACTION */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sirih-deep to-sirih-forest text-white shadow-lg gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-mint-300">Siap Mencoba?</span>
            <h3 className="text-xl font-extrabold mt-0.5">Dapatkan DEOSIRIH Sekarang Juga</h3>
            <p className="text-xs sm:text-sm text-mint-100">Harga Jual Apotek hanya Rp 13.000,- per botol 100 mL.</p>
          </div>
          <Link
            to="/shop"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-sirih-deep font-black text-sm shadow-md hover:bg-mint-50 hover:scale-105 transition-all"
          >
            <span>Kunjungi Halaman Beli</span>
            <ArrowRight className="w-4 h-4 text-sirih-forest" />
          </Link>
        </div>

      </div>
    </div>
  );
}
