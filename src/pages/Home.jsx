import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Sparkles, 
  Shirt, 
  ArrowRight, 
  Leaf, 
  Droplets, 
  CheckCircle2, 
  Award, 
  FlaskConical,
  Check,
  Eye
} from 'lucide-react';

export default function Home() {
  const [activePhoto, setActivePhoto] = useState('front');

  const productPhotos = {
    front: {
      src: '/images/product-front.jpg',
      label: 'Tampak Depan',
      title: 'DEOSIRIH SIRIH & TAWAS Spray 100 mL'
    },
    hand: {
      src: '/images/product-hand.jpg',
      label: 'Dalam Genggaman',
      title: 'Travel-Friendly & Ergonomis'
    },
    back: {
      src: '/images/product-back.jpg',
      label: 'Label & Komposisi',
      title: 'Informasi Resmi & POM NA'
    }
  };

  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-mint-600" />,
      badge: "Kavicol & Eugenol Alami",
      title: "Antibakteri Alami",
      description: "Infusa daun sirih hijau pilihan kaya senyawa fenolik aktif yang secara fitokimia mampu melumpuhkan bakteri penyebab bau badan tanpa merusak mikrobioma alami kulit.",
      color: "from-mint-50 to-emerald-100/60",
      borderColor: "border-mint-200"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-cyan-600" />,
      badge: "Kristal Mentol Murni",
      title: "Sensasi Segar (Cooling Effect)",
      description: "Formulasi mentol kristalin terstandar memberikan sensasi dingin menyegarkan seketika saat disemprotkan. Menenangkan pori dan memberi rasa percaya diri prima.",
      color: "from-cyan-50 to-teal-100/60",
      borderColor: "border-cyan-200"
    },
    {
      icon: <Shirt className="w-8 h-8 text-amber-600" />,
      badge: "Zero Residue & Water-based",
      title: "Tanpa Noda di Baju",
      description: "Larutan cair jernih berbahan dasar pelarut aquades dan tawas halus, bebas minyak dan tanpa aluminium klorohidrat pekat. Cepat meresap kering tanpa noda kuning di pakaian.",
      color: "from-amber-50 to-emerald-50",
      borderColor: "border-amber-200"
    }
  ];

  const ingredientsData = [
    {
      name: "Daun Sirih",
      latin: "Piper betle L.",
      image: "/images/bahan-daun-sirih.jpg",
      tag: "Antibakteri Utama",
      desc: "Kaya minyak atsiri kavikol & eugenol aktif melumpuhkan kuman penyebab bau badan secara alami."
    },
    {
      name: "Tawas",
      latin: "Potassium Alum",
      image: "/images/bahan-tawas.jpg",
      tag: "Antiperspiran Alami",
      desc: "Mineral kristal alami mengecilkan pori-pori kulit secara lembut tanpa menyumbat total kelenjar keringat."
    },
    {
      name: "Menthol",
      latin: "Mentholum",
      image: "/images/bahan-menthol.jpg",
      tag: "Sensasi Dingin",
      desc: "Kristal mentol murni memberi sensasi cooling segar instan yang meredakan gerah ketiak seketika."
    },
    {
      name: "Aquadest",
      latin: "Aqua Destillata",
      image: "/images/bahan-aquadest.jpg",
      tag: "Pelarut Murni",
      desc: "Air murni bebas ion mineral menjamin kestabilan formula, sediaan seringan air dan cepat meresap."
    },
    {
      name: "Alkohol 70%",
      latin: "Ethyl Alcohol 70%",
      image: "/images/bahan-alkohol.jpg",
      tag: "Mikro Pelarut",
      desc: "Dosis minimalis (2 tetes) hanya untuk melarutkan kristal mentol agar tercampur homogen sempurna."
    }
  ];

  return (
    <div className="bg-slate-50 overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-8 pb-20 md:pt-16 md:pb-28 bg-gradient-to-b from-mint-50/70 via-white to-slate-50 border-b border-mint-100/60">
        
        {/* Glow backdrop */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-mint-200/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Headline Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-mint-300 shadow-sm text-xs font-bold text-sirih-deep">
                <span className="flex h-2 w-2 rounded-full bg-mint-500 animate-pulse"></span>
                <span>Inovasi Siswa Jurusan Farmasi • Herbal Personal Care</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                <span className="text-sirih-deep">DEOSIRIH</span>{' '}
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sirih-forest via-mint-600 to-sirih-deep bg-clip-text text-transparent mt-1">
                  Herbal Deodorant Spray
                </span>
              </h1>

              <p className="text-lg sm:text-xl font-bold text-sirih-forest leading-snug">
                "Perlindungan Alami Bebas Bau Badan, Segar Sepanjang Hari!"
              </p>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Produk perawatan tubuh berbentuk cair dalam kemasan spray dengan ekstrak daun sirih sebagai bahan aktif utama untuk mencegah dan mengurangi bau badan. Formulasi segar, lembut di kulit, dan higienis.
              </p>

              {/* Badges */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-sirih-forest" />
                  <span>Infusa Daun Sirih Asli</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-sirih-forest" />
                  <span>Kombinasi Tawas & Mentol</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-sirih-forest" />
                  <span>Bebas Noda Kuning</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <Link
                  to="/shop"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sirih-forest via-sirih-deep to-sirih-950 hover:from-sirih-deep hover:to-black text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-sirih-deep/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Pesan Sekarang</span>
                  <ArrowRight className="w-5 h-5 text-mint-300" />
                </Link>

                <Link
                  to="/product"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-sirih-deep font-bold text-base px-7 py-4 rounded-xl border border-slate-300 shadow-sm hover:border-mint-400 transition-all duration-200"
                >
                  <FlaskConical className="w-5 h-5 text-sirih-forest" />
                  <span>Pelajari Produk</span>
                </Link>
              </div>

              <div className="pt-1 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-500">
                <span className="font-semibold text-sirih-forest">Hanya Rp 13.000,-</span>
                <span>•</span>
                <span>Netto 100 mL Praktis (Travel-Friendly)</span>
              </div>

            </div>

            {/* Right Column: REAL PRODUCT PHOTO SHOWCASE */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md">
                
                {/* Decorative border wrapper */}
                <div className="relative bg-white/95 rounded-3xl p-6 sm:p-7 shadow-xl border border-mint-200 backdrop-blur-md">
                  
                  {/* Card Header Tag */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-[11px] font-bold text-sirih-forest uppercase tracking-wider flex items-center gap-1.5">
                      <Leaf className="w-4 h-4 text-mint-500" />
                      Foto Asli Produk
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200">
                      Sediaan Spray 100 mL
                    </span>
                  </div>

                  {/* Main Real Product Image */}
                  <div className="py-4 flex flex-col items-center justify-center">
                    <div className="w-full h-80 rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-inner relative group">
                      <img 
                        src={productPhotos[activePhoto].src} 
                        alt={productPhotos[activePhoto].title} 
                        className="w-full h-full object-contain p-2 transition-all duration-300 group-hover:scale-105"
                      />
                      <div className="absolute bottom-2 left-2 right-2 p-2 rounded-xl bg-white/90 backdrop-blur-sm border border-slate-200 text-center">
                        <p className="text-xs font-bold text-sirih-deep">{productPhotos[activePhoto].title}</p>
                      </div>
                    </div>
                  </div>

                  {/* Photo Switcher Thumbnails */}
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    {Object.keys(productPhotos).map((key) => (
                      <button
                        key={key}
                        onClick={() => setActivePhoto(key)}
                        className={`p-1.5 rounded-xl border text-[11px] font-bold transition-all flex flex-col items-center gap-1 ${
                          activePhoto === key
                            ? 'bg-mint-100 text-sirih-deep border-mint-400 shadow-xs'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <div className="w-full h-10 rounded-lg overflow-hidden bg-white">
                          <img 
                            src={productPhotos[key].src} 
                            alt={productPhotos[key].label} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <span className="truncate w-full text-center">{productPhotos[key].label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Meta Specs */}
                  <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-center text-xs">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-500 block text-[10px]">HJA Apotek:</span>
                      <strong className="text-sirih-deep font-bold">Rp 13.000,-</strong>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-500 block text-[10px]">Status:</span>
                      <strong className="text-emerald-700 font-bold">Prototipe Siap Pakai</strong>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* KEUNGGULAN UTAMA (3 Grid Cards) */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mint-100 text-sirih-forest text-xs font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Keunggulan Utama DEOSIRIH
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Kekuatan Tradisi Herbal dengan Formulasi Modern
            </h2>
            <p className="text-slate-600 text-base">
              Kombinasi sains kefarmasian dan bahan alami nusantara untuk memberikan perlindungan terbaik tanpa kompromi bagi kesehatan kulit ketiakmu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <div 
                key={idx}
                className={`rounded-3xl p-8 bg-gradient-to-b ${feat.color} border ${feat.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center">
                      {feat.icon}
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white text-slate-700 border border-slate-200">
                      {feat.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{feat.description}</p>
                </div>
                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-sirih-forest">
                  <span>Khasiat Teruji Farmasi</span>
                  <CheckCircle2 className="w-4 h-4 text-sirih-forest" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* DEDICATED BAHAN-BAHAN SECTION (FOTO ASLI 5 BAHAN) */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-mint-50/50 border-y border-mint-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <FlaskConical className="w-3.5 h-3.5" />
              Bahan Baku Pilihan
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              5 Bahan Utama Formulasi DEOSIRIH
            </h2>
            <p className="text-slate-600 text-base">
              Setiap tetes DEOSIRIH diformulasikan dari bahan alam berkualitas dan bahan penunjang farmasi terstandar: daun sirih segar, tawas murni, menthol kristal, aquadest, dan alkohol mikro-dosis.
            </p>
          </div>

          {/* 5 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {ingredientsData.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Photo Container */}
                  <div className="h-44 w-full overflow-hidden bg-slate-100 relative group">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/90 text-sirih-deep text-[10px] font-extrabold shadow-sm backdrop-blur-xs">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-extrabold text-slate-900">
                      {item.name}
                    </h3>
                    <p className="text-[11px] font-semibold text-sirih-forest italic mb-2">
                      {item.latin}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-sirih-forest">
                    <span>Komponen Resmi</span>
                    <Check className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick link to detailed composition page */}
          <div className="mt-12 text-center">
            <Link
              to="/ingredients"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 hover:border-mint-400 text-sirih-deep font-bold text-sm shadow-xs transition-colors"
            >
              <span>Pelajari Takaran Gramatur & Alur Ekstraksi 6 Langkah</span>
              <ArrowRight className="w-4 h-4 text-mint-600" />
            </Link>
          </div>

        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-sirih-deep via-sirih-forest to-mint-700 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-white/20 text-mint-100 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              Stok Prototipe Terbatas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Beralih ke Perlindungan Alami Sekarang Juga
            </h2>
            <p className="text-mint-100 text-sm sm:text-base leading-relaxed">
              Dukung karya inovasi siswa Farmasi dan rasakan kesegaran daun sirih murni tanpa bau ketiak dan tanpa rasa khawatir.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/shop"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-sirih-deep font-extrabold text-sm shadow-xl hover:bg-mint-50 hover:scale-105 transition-all duration-200"
              >
                <ArrowRight className="w-4 h-4 text-sirih-forest" />
                <span>Pesan Sekarang (Rp 13.000)</span>
              </Link>
              <Link
                to="/education"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sirih-900/60 hover:bg-sirih-900 text-white font-bold text-sm border border-mint-400/30 transition-all duration-200"
              >
                <span>Lihat Panduan Pemakaian</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
