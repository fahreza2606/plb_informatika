import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FlaskConical, 
  Leaf, 
  Flame, 
  Filter, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Check, 
  PackageCheck, 
  Scissors,
  Droplet,
  Beaker,
  Sparkles
} from 'lucide-react';

export default function Ingredients() {
  const ingredients = [
    {
      name: "Tawas (Potassium Alum)",
      amount: "10 gram",
      role: "Antiperspiran & Astringent Alami",
      image: "/images/bahan-tawas.jpg",
      description: "Mineral garam kristal alami yang berfungsi mengecilkan pori-pori secara lembut (astringent) dan menghambat sekresi keringat berlebih tanpa menyumbat total kelenjar apokrin.",
      color: "from-cyan-50 to-teal-50",
      borderColor: "border-cyan-200",
      tag: "Pengontrol Keringat"
    },
    {
      name: "Daun Sirih (Piper betle L.)",
      amount: "3 gram (diekstraksi jadi 30 mL infusa)",
      role: "Antibakteri & Antiseptik Utama",
      image: "/images/bahan-daun-sirih.jpg",
      description: "Bahan aktif hayati utama. Minyak atsiri kavikol dan senyawa fenolik membasmi kuman penyebab bau asam pada ketiak, mencegah iritasi folikel, dan memberikan aroma herba alami.",
      color: "from-mint-50 to-emerald-50",
      borderColor: "border-mint-200",
      tag: "Bahan Aktif Utama"
    },
    {
      name: "Mentol Murni",
      amount: "0,1 gram",
      role: "Sensasi Dingin (Cooling Agent) & Penyegar",
      image: "/images/bahan-menthol.jpg",
      description: "Senyawa organik kristal alami dari daun mint yang menstimulasi reseptor dingin pada kulit, meredakan gerah, dan memberikan kesegaran instan tahan lama.",
      color: "from-sky-50 to-blue-50",
      borderColor: "border-sky-200",
      tag: "Cooling Freshness"
    },
    {
      name: "Alkohol 70%",
      amount: "2 tetes",
      role: "Pelarut Homogenisasi Mentol",
      image: "/images/bahan-alkohol.jpg",
      description: "Pelarut perantara dengan dosis mikro (hanya 2 tetes) khusus untuk melarutkan kristal mentol yang hidrofobik agar larut homogen dalam fase air sediaan.",
      color: "from-indigo-50 to-slate-50",
      borderColor: "border-indigo-200",
      tag: "Mikro Co-Solvent"
    },
    {
      name: "Aquades (Air Murni Terdeionisasi)",
      amount: "ad 100 mL",
      role: "Pelarut Dasar & Pembawa (Vehicle)",
      image: "/images/bahan-aquadest.jpg",
      description: "Air bebas mineral yang menjaga stabilitas kimiawi sediaan, memastikan pH larutan ramah kulit, serta menjadikan sediaan seringan air dan cepat meresap tanpa residu lengket.",
      color: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200",
      tag: "Basis Pembawa"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Persiapan Bahan",
      subtitle: "Persiapan Simplisia & Bahan Kimia Farmasi",
      image: "/images/proses-1-persiapan.jpg",
      description: "Seluruh bahan baku disiapkan dan ditimbang seksama di meja laboratorium: daun sirih segar pilihan, kristal tawas, kristal mentol, aquades bebas mineral, serta alkohol 70%. Daun sirih dicuci bersih di bawah air mengalir dan dirajang halus melintang guna memaksimalkan luas permukaan kontak saat proses infudasi.",
      icon: <Scissors className="w-5 h-5 text-sirih-forest" />,
      tag: "Tahap 1: Preparasi",
      badge: "Bahan Baku Terstandar"
    },
    {
      step: "02",
      title: "Proses Ekstraksi Daun Sirih",
      subtitle: "Metode Infudasi Suhu 90°C Selama 15 Menit",
      image: "/images/proses-2-ekstraksi.jpg",
      description: "Rajangan daun sirih 3g dimasukkan ke dalam panci infusa berisi aquades, kemudian dipanaskan di atas penangas air terkontrol. Suhu ekstraksi dipantau konstan menggunakan termometer laboratorium pada suhu 90°C selama 15 menit terhitung sejak mencapai suhu target, menghasilkan infusa daun sirih pekat sebanyak 30 mL.",
      icon: <Flame className="w-5 h-5 text-amber-600" />,
      tag: "Tahap 2: Ekstraksi",
      badge: "Termometer Lab 90°C"
    },
    {
      step: "03",
      title: "Pelarutan Bahan",
      subtitle: "Solubilisasi Tawas & Mentol dengan Pipet Tetes",
      image: "/images/proses-3-pelarutan.jpg",
      description: "Tawas 10g dilarutkan ke dalam sebagian aquades hangat hingga terlarut sempurna. Secara terpisah di dalam cawan/mortar porselen, kristal mentol 0,1g ditetesi 2 tetes alkohol 70% menggunakan pipet tetes laboratorium secara presisi agar kristal mentol yang hidrofobik terlarut cepat dan homogen.",
      icon: <Droplet className="w-5 h-5 text-cyan-600" />,
      tag: "Tahap 3: Pelarutan",
      badge: "Pipet Tetes 2 Tetes"
    },
    {
      step: "04",
      title: "Pencampuran Formulasi",
      subtitle: "Homogenisasi Campuran Menggunakan Mortar & Alu",
      image: "/images/proses-4-pencampuran.jpg",
      description: "Larutan tawas yang telah jernih dicampurkan perlahan ke dalam infusa daun sirih sambil digerus homogen dalam mortar laboratorium. Selanjutnya, larutan mentol ditambahkan tetes demi tetes ke dalam campuran sediaan sambil terus diaduk rata menggunakan alu (pestle) hingga formula menyatu sempurna.",
      icon: <Beaker className="w-5 h-5 text-mint-600" />,
      tag: "Tahap 4: Pencampuran",
      badge: "Mortar & Alu Homogen"
    },
    {
      step: "05",
      title: "Penyesuaian Volume",
      subtitle: "Kalibrasi Volume ad 100 mL & Penyaringan Sediaan",
      image: "/images/proses-5-penyesuaian-volume.jpg",
      description: "Campuran sediaan dimasukkan ke dalam gelas ukur berskala 100 mL, kemudian ditambahkan aquades hingga batas meniskus tepat mencapai 100 mL (ad 100 mL). Larutan dituangkan ke dalam labu Erlenmeyer melalui kertas saring untuk memisahkan partikel halus dan menghasilkan cairan jernih berwarna cokelat kehijauan.",
      icon: <Filter className="w-5 h-5 text-indigo-600" />,
      tag: "Tahap 5: Kalibrasi Volume",
      badge: "Gelas Ukur & Erlenmeyer"
    },
    {
      step: "06",
      title: "Pengemasan",
      subtitle: "Pengisian ke Botol Spray Higienis 100 mL",
      image: "/images/proses-6-pengemasan.jpg",
      description: "Sediaan DEOSIRIH yang telah jernih dan lolos evaluasi organoleptik dituangkan secara hati-hati dari beaker glass ke dalam botol spray plastik 100 mL yang telah disanitasi. Botol dipasangi aplikator semprot micro-mist kedap udara dan ditempeli etiket informasi batch resmi siap dipasarkan.",
      icon: <PackageCheck className="w-5 h-5 text-emerald-600" />,
      tag: "Tahap 6: Finishing",
      badge: "Botol Spray 100 mL"
    }
  ];

  return (
    <div className="bg-slate-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb & Title */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint-100 text-sirih-forest text-xs font-bold uppercase tracking-wider mb-3">
            <FlaskConical className="w-3.5 h-3.5" />
            Formula & Alur Farmasi
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Komposisi & Proses Pembuatan
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mt-2">
            Dokumentasi lengkap foto asli laboratorium dari setiap bahan baku dan 6 tahapan pembuatan DEOSIRIH berstandar Farmakope Indonesia.
          </p>
        </div>

        {/* SEKSI 1: KOMPOSISI FORMULASI */}
        <section className="mb-20">
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
                <Leaf className="w-7 h-7 text-sirih-forest" />
                Komposisi Formula (Per 100 mL Sediaan)
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Kombinasi 5 elemen terstandar dengan visualisasi bahan baku asli laboratorium.
              </p>
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-mint-200 shadow-xs text-xs font-bold text-sirih-deep self-start sm:self-auto">
              <CheckCircle2 className="w-4 h-4 text-mint-500" />
              <span>Standar Takaran Presisi 100 mL</span>
            </div>
          </div>

          {/* 5 Real Photo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ingredients.map((item, idx) => (
              <div 
                key={idx}
                className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 w-full bg-slate-100 overflow-hidden relative group">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/95 text-slate-800 shadow-xs border border-slate-200">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-lg font-black text-slate-900">
                      {item.name}
                    </div>
                    <div className="inline-block mt-1 px-2.5 py-0.5 rounded-lg bg-mint-50 text-sirih-deep text-xs font-extrabold border border-mint-200">
                      Takaran: {item.amount}
                    </div>

                    <p className="text-xs font-bold text-sirih-forest uppercase tracking-wider mt-3 mb-1">
                      Peran: {item.role}
                    </p>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-sirih-deep">
                    <Check className="w-4 h-4 text-sirih-forest" />
                    <span>Formula Resmi Teruji</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Ikhtisar Formulasi Card */}
            <div className="rounded-3xl p-6 bg-sirih-deep text-white shadow-md flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-white/10 text-mint-300 text-[10px] font-bold uppercase tracking-wider">
                  Ikhtisar Formulasi
                </span>
                <h3 className="text-xl font-bold mt-4 mb-2">
                  100% Bebas Bahan Berbahaya
                </h3>
                <p className="text-mint-100 text-xs sm:text-sm leading-relaxed">
                  DEOSIRIH tidak menggunakan paraben, pewarna buatan, aerosol propelan CFC, maupun pengawet sintetik agresif.
                </p>
              </div>

              <div className="pt-4 border-t border-sirih-700 text-xs text-mint-200 space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-mint-400" />
                  <span>Kandungan alkohol mikro minimalis (&lt; 0.1%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-mint-400" />
                  <span>pH seimbang ramah mikrobioma kulit ketiak</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-mint-400" />
                  <span>Tekstur cair ringan cepat meresap</span>
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* SEKSI 2: PROSES PEMBUATAN (DENGAN FOTO ASLI 6 TAHAP) */}
        <section className="mb-14">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mint-100 text-sirih-forest text-xs font-bold tracking-wide uppercase mb-2">
              <Clock className="w-3.5 h-3.5" />
              Dokumentasi Laboratorium Asli
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Langkah Pembuatan DEOSIRIH (6 Tahap)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Foto dokumentasi nyata proses peracikan di laboratorium farmasi: persiapan bahan, ekstraksi infudasi daun sirih, pelarutan bahan, pencampuran formulasi, penyesuaian volume, hingga pengemasan botol spray.
            </p>
          </div>

          {/* Vertical Timeline with Rich Photo Cards */}
          <div className="relative pl-4 sm:pl-8 md:pl-10 border-l-2 border-mint-300 space-y-12">
            
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                
                {/* Timeline Number Node */}
                <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[53px] top-0 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-sirih-forest to-sirih-deep text-white font-extrabold text-xs sm:text-sm md:text-base flex items-center justify-center shadow-md shadow-sirih-forest/20 group-hover:scale-110 transition-transform">
                  {step.step}
                </div>

                {/* Step Card with Photo & Text */}
                <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-slate-200 hover:border-mint-300 hover:shadow-xl transition-all duration-300">
                  
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    
                    {/* Real Laboratory Photo (5 Cols) */}
                    <div className="lg:col-span-5">
                      <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 relative group/img shadow-inner">
                        <img 
                          src={step.image} 
                          alt={step.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-xl bg-black/60 backdrop-blur-sm text-white text-[11px] font-bold text-center">
                          Dokumentasi Lab: {step.title}
                        </div>
                      </div>
                    </div>

                    {/* Step Description & Badges (7 Cols) */}
                    <div className="lg:col-span-7 space-y-3">
                      
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-sirih-forest uppercase tracking-wider">
                          {step.icon}
                          {step.tag}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-mint-50 text-sirih-deep text-xs font-bold border border-mint-200">
                          {step.badge}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-semibold text-sirih-forest">
                        {step.subtitle}
                      </p>

                      <p className="text-slate-600 text-sm leading-relaxed pt-1">
                        {step.description}
                      </p>

                      <div className="pt-2 flex items-center gap-2 text-xs font-bold text-slate-500">
                        <CheckCircle2 className="w-4 h-4 text-sirih-forest shrink-0" />
                        <span>Standar Prosedur Operasional (SOP) Farmasi</span>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            ))}

          </div>

        </section>

        {/* BOTTOM CALL TO ACTION */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Ingin Mengetahui Cara Penggunaan & Peringatan Medis?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Pelajari 3 langkah cara pakai serta kontraindikasi dan efek samping pada halaman Edukasi.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              to="/education"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sirih-deep text-white font-bold text-sm shadow-md hover:bg-sirih-900 transition-colors"
            >
              <span>Buka Panduan & Edukasi</span>
              <ArrowRight className="w-4 h-4 text-mint-300" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
