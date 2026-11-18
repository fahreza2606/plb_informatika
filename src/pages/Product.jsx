import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  FlaskConical, 
  Check, 
  X, 
  Leaf, 
  ShieldCheck, 
  ArrowRight,
  BookOpen,
  Info,
  Layers,
  Award
} from 'lucide-react';

export default function Product() {
  const [activePhoto, setActivePhoto] = useState('front');

  const productPhotos = {
    front: { src: '/images/product-front.jpg', label: 'Tampak Depan' },
    hand: { src: '/images/product-hand.jpg', label: 'Di Genggaman' },
    back: { src: '/images/product-back.jpg', label: 'Label Belakang' },
  };

  const specs = [
    { label: "Nama Produk", value: "DEOSIRIH", highlight: true },
    { label: "Jenis Produk", value: "Deodorant spray", highlight: false },
    { label: "Bentuk Sediaan", value: "Cair (Larutan jernih)", highlight: false },
    { label: "Rute Penggunaan", value: "Topikal (Khusus pemakaian luar pada ketiak)", highlight: false },
    { label: "Volume Bersih", value: "100 mL (Travel-friendly bottle)", highlight: true },
    { label: "Bahan Aktif Utama", value: "Infusa Daun Sirih (Piper betle L.)", highlight: true },
    { label: "Kemasan", value: "Botol Spray higienis kedap udara", highlight: false },
    { label: "Konsep Produk", value: "Herbal personal care berstandar farmasi", highlight: false },
    { label: "Warna Sediaan", value: "Cokelat kehijauan jernih transparan", highlight: false },
    { label: "Aroma Sediaan", value: "Herbal aromatik khas sirih berpadu mentol segar", highlight: false },
    { label: "Nomor POM NA", value: "NA18230900001", highlight: true },
    { label: "Kode Batch & Exp", value: "AKN011123 (Exp: 01/2027)", highlight: false },
  ];

  const comparison = [
    {
      aspect: "Bahan Aktif Anti-Bau",
      deosirih: "Infusa Daun Sirih Alami (Kavikol & Eugenol)",
      conventional: "Aluminium Chlorohydrate pekat & Paraben",
    },
    {
      aspect: "Tingkat Higienitas Kemasan",
      deosirih: "Spray tanpa kontak kulit (higienis & tidak tercemar)",
      conventional: "Roll-on bersentuhan langsung ketiak (kontaminasi)",
    },
    {
      aspect: "Efek pada Pakaian",
      deosirih: "100% Bebas residu kerak kuning",
      conventional: "Sering meninggalkan noda kaku kekuningan",
    },
    {
      aspect: "Fisiologi Pori Ketiak",
      deosirih: "Menghambat bakteri tanpa menyumbat pori total",
      conventional: "Menyumbat kelenjar keringat secara artifisial",
    },
    {
      aspect: "Sensasi di Kulit",
      deosirih: "Sejuk menenangkan dengan kristal mentol murni",
      conventional: "Sering lengket, perih karena parfum sintetis",
    },
  ];

  const ingredientsMini = [
    { name: "Daun Sirih", role: "Antibakteri Utama", img: "/images/bahan-daun-sirih.jpg" },
    { name: "Tawas", role: "Antiperspiran Alami", img: "/images/bahan-tawas.jpg" },
    { name: "Menthol", role: "Cooling Freshness", img: "/images/bahan-menthol.jpg" },
    { name: "Aquadest", role: "Basis Pelarut Murni", img: "/images/bahan-aquadest.jpg" },
    { name: "Alkohol 70%", role: "Pelarut Menthol (2 tetes)", img: "/images/bahan-alkohol.jpg" }
  ];

  return (
    <div className="bg-slate-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb & Title */}
        <div className="mb-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint-100 text-sirih-forest text-xs font-bold uppercase tracking-wider mb-3">
            <FlaskConical className="w-3.5 h-3.5" />
            Spesifikasi & Latar Belakang
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Informasi Produk DEOSIRIH
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mt-2">
            Mengenal lebih dekat inovasi deodoran spray herbal berbasis kearifan lokal daun sirih dengan pendekatan riset kefarmasian modern.
          </p>
        </div>

        {/* LATAR BELAKANG PRODUK & GALERI FOTO ASLI */}
        <div className="mb-14 rounded-3xl bg-white p-6 sm:p-10 shadow-sm border border-mint-200/80 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-sirih-deep text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-mint-600" />
                Latar Belakang Inovasi
              </div>

              {/* Exact user mandatory text */}
              <div className="p-5 rounded-2xl bg-mint-50/70 border-l-4 border-sirih-forest">
                <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed italic">
                  "DEOSIRIH merupakan prototipe deodorant spray berbahan dasar infusa daun sirih yang dikembangkan oleh siswa jurusan Farmasi sebagai bentuk pemanfaatan tanaman herbal. Daun sirih dipilih karena sejarah panjangnya dan kaya akan kandungan senyawa."
                </p>
              </div>

              <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  Secara etnobotani nusantara, daun sirih (<em>Piper betle L.</em>) telah dimanfaatkan sejak berabad-abad sebagai antiseptik alami. Kandungan minyak atsiri yang terdiri dari senyawa <strong>kavikol, kavibetol, eugenol, estragol, dan terpenoid</strong> memiliki aktivitas antibakteri kuat berspektrum luas.
                </p>
                <p>
                  Karya inovasi sediaan farmasi ini memformulasikan kembali khasiat daun sirih ke dalam bentuk sediaan kosmetika semprot (<em>spray formulation</em>) yang praktis, higienis, serta ramah untuk kebutuhan remaja maupun dewasa aktif.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold">
                  <Leaf className="w-3.5 h-3.5 text-sirih-forest" />
                  Piper betle L. (Sirih Hijau)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold">
                  <FlaskConical className="w-3.5 h-3.5 text-mint-600" />
                  Prototipe Teknologi Farmasi
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
                  Kombinasi Tawas & Mentol
                </span>
              </div>
            </div>

            {/* Real Bottle Gallery Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full bg-slate-50 rounded-2xl p-4 border border-slate-200">
                <div className="h-72 w-full rounded-xl overflow-hidden bg-white border border-slate-100 flex items-center justify-center p-2 mb-3">
                  <img 
                    src={productPhotos[activePhoto].src} 
                    alt={productPhotos[activePhoto].label} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {Object.keys(productPhotos).map((k) => (
                    <button
                      key={k}
                      type="button"
                      onClick={() => setActivePhoto(k)}
                      className={`p-1 rounded-lg border text-[11px] font-bold transition-all ${
                        activePhoto === k 
                          ? 'bg-mint-100 text-sirih-deep border-mint-400' 
                          : 'bg-white text-slate-600 border-slate-200'
                      }`}
                    >
                      {productPhotos[k].label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 5 BAHAN UTAMA SHOWCASE CHIPS / CARDS */}
        <div className="mb-14">
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <Leaf className="w-6 h-6 text-sirih-forest" />
              5 Bahan Utama dalam DEOSIRIH
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Visualisasi nyata komponen formulasi yang digunakan di laboratorium.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {ingredientsMini.map((b, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
                <div className="h-32 w-full overflow-hidden bg-slate-100">
                  <img src={b.img} alt={b.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-3 text-center">
                  <h4 className="text-sm font-bold text-slate-900">{b.name}</h4>
                  <p className="text-[11px] text-sirih-forest font-semibold">{b.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TABEL SPESIFIKASI (Data Grid Profesional) */}
        <div className="mb-14">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <FileText className="w-6 h-6 text-sirih-forest" />
                Tabel Spesifikasi Sediaan
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Data teknis formulasi resmi prototipe DEOSIRIH Herbal Deodorant Spray.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-mint-100 text-sirih-deep border border-mint-200 self-start sm:self-auto">
              <Info className="w-3.5 h-3.5" />
              Sediaan Resmi Farmasi
            </span>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider">
                    <th scope="col" className="py-4 px-6 w-1/3">Parameter Spesifikasi</th>
                    <th scope="col" className="py-4 px-6 w-2/3">Keterangan & Rincian Sediaan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {specs.map((item, index) => (
                    <tr 
                      key={index} 
                      className={`hover:bg-mint-50/50 transition-colors ${
                        item.highlight ? 'bg-mint-50/30 font-medium' : ''
                      }`}
                    >
                      <td className="py-3.5 px-6 font-semibold text-slate-800 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sirih-forest"></span>
                        {item.label}
                      </td>
                      <td className="py-3.5 px-6 text-slate-600">
                        {item.highlight ? (
                          <span className="inline-block px-2.5 py-0.5 rounded-lg bg-mint-100 text-sirih-deep font-bold text-xs sm:text-sm border border-mint-200">
                            {item.value}
                          </span>
                        ) : (
                          <span>{item.value}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* COMPARISON SECTION: DEOSIRIH vs Conventional */}
        <div className="mb-14">
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <Layers className="w-6 h-6 text-sirih-forest" />
              Keunggulan Dibandingkan Deodoran Konvensional
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Mengapa beralih ke DEOSIRIH adalah keputusan terbaik untuk ketiak sehat dan percaya diri.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-xs uppercase tracking-wider">
                    <th className="py-4 px-6 bg-slate-100 text-slate-700 font-bold w-1/4">Aspek</th>
                    <th className="py-4 px-6 bg-mint-100/70 text-sirih-deep font-extrabold w-3/8">
                      <div className="flex items-center gap-1.5">
                        <Leaf className="w-4 h-4 text-mint-600" />
                        DEOSIRIH Herbal Spray
                      </div>
                    </th>
                    <th className="py-4 px-6 bg-slate-100 text-slate-600 font-bold w-3/8">Deodoran Kimia Pasaran</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-slate-800 text-xs sm:text-sm">
                        {row.aspect}
                      </td>
                      <td className="py-4 px-6 text-sirih-deep bg-mint-50/30 font-medium text-xs sm:text-sm">
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-sirih-forest shrink-0 mt-0.5" />
                          <span>{row.deosirih}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-slate-500 text-xs sm:text-sm">
                        <div className="flex items-start gap-2">
                          <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>{row.conventional}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* BOTTOM NAVIGATION ACTIONS */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-mint-50 to-emerald-100/50 border border-mint-200 gap-4">
          <div>
            <h3 className="text-lg font-bold text-sirih-deep">Langkah Berikutnya:</h3>
            <p className="text-xs sm:text-sm text-slate-600">Pelajari takaran komposisi & 6 alur infudasi di laboratorium.</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              to="/ingredients"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sirih-deep text-white font-bold text-sm shadow-md hover:bg-sirih-900 transition-colors"
            >
              <span>Lihat Komposisi & Alur</span>
              <ArrowRight className="w-4 h-4 text-mint-300" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
