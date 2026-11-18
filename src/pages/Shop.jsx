import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Leaf, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  Package, 
  Check, 
  MessageCircle, 
  Plus, 
  Minus,
  Award
} from 'lucide-react';

export default function Shop() {
  const [qty, setQty] = useState(1);
  const [selectedImage, setSelectedImage] = useState('front');
  const [customerName, setCustomerName] = useState('');
  const [customerCity, setCustomerCity] = useState('');
  const [customerNote, setCustomerNote] = useState('');

  const unitPrice = 13000;
  const totalPrice = qty * unitPrice;

  const images = {
    front: {
      src: '/images/product-front.jpg',
      label: 'Tampak Depan'
    },
    hand: {
      src: '/images/product-hand.jpg',
      label: 'Dalam Genggaman'
    },
    back: {
      src: '/images/product-back.jpg',
      label: 'Label & Komposisi'
    }
  };

  const ingredientsMini = [
    { name: "Daun Sirih", img: "/images/bahan-daun-sirih.jpg" },
    { name: "Tawas", img: "/images/bahan-tawas.jpg" },
    { name: "Menthol", img: "/images/bahan-menthol.jpg" },
    { name: "Aquadest", img: "/images/bahan-aquadest.jpg" },
    { name: "Alkohol 70%", img: "/images/bahan-alkohol.jpg" }
  ];

  // Format IDR currency
  const formatRupiah = (val) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(val);
  };

  // Generate customized WhatsApp URL
  const buildWhatsAppUrl = () => {
    const lines = [
      "Halo Admin DEOSIRIH, saya ingin memesan produk Herbal Deodorant Spray:",
      "",
      `*Detail Pesanan:*`,
      `• Produk: DEOSIRIH Herbal Deodorant Spray 100 mL`,
      `• Jumlah: ${qty} botol`,
      `• Total Harga: ${formatRupiah(totalPrice)}`,
    ];

    if (customerName.trim()) {
      lines.push(`• Nama Pemesan: ${customerName.trim()}`);
    }
    if (customerCity.trim()) {
      lines.push(`• Alamat / Kota: ${customerCity.trim()}`);
    }
    if (customerNote.trim()) {
      lines.push(`• Catatan: ${customerNote.trim()}`);
    }

    lines.push("");
    lines.push("Mohon info ketersediaan stok & ongkos kirimnya. Terima kasih!");

    const message = encodeURIComponent(lines.join("\n"));
    return `https://wa.me/?text=${message}`;
  };

  return (
    <div className="bg-slate-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb & Title */}
        <div className="mb-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint-100 text-sirih-forest text-xs font-bold uppercase tracking-wider mb-3">
            <ShoppingBag className="w-3.5 h-3.5" />
            Katalog Resmi & Checkout WhatsApp
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Pemesanan Produk DEOSIRIH
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mt-2">
            Pesan langsung prototipe sediaan farmasi alami berkualitas tinggi dengan harga ramah kantong.
          </p>
        </div>

        {/* PROMOTIONAL COPYWRITING BANNER */}
        <div className="mb-12 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-mint-50 via-emerald-100/60 to-teal-50 border border-mint-200 shadow-xs relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white text-sirih-forest shadow-sm flex items-center justify-center shrink-0 mt-0.5">
              <Leaf className="w-6 h-6 text-mint-600" />
            </div>
            <div className="space-y-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-sirih-forest">
                Catatan Khusus Pengguna Aktif
              </span>
              <p className="text-slate-800 text-base sm:text-lg font-semibold leading-relaxed">
                "Buat kalian yang sering merasa kurang nyaman karena bau badan, apalagi setelah beraktivitas seharian, kalian wajib kenalan sama DEOSIRIH! Perpaduan tawas, daun sirih, dan mint yang praktis dan tidak meninggalkan noda kuning di baju."
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                Solusi higienis praktis berbentuk spray micro-mist yang siap menemani aktivitas harian di sekolah, kampus, kantor, maupun saat berolahraga.
              </p>
            </div>
          </div>
        </div>

        {/* MAIN PRODUCT SHOWCASE & CHECKOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* PRODUCT SHOWCASE CARD (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
              
              {/* Image Showcase Container with Real Photo Switcher */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 flex flex-col items-center justify-center p-2">
                
                {/* Real photo showcase */}
                <img 
                  src={images[selectedImage].src} 
                  alt={`DEOSIRIH ${images[selectedImage].label}`} 
                  className="w-full h-80 object-contain rounded-xl transition-all duration-300"
                />

                {/* Floating Tags */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-sirih-deep/90 text-white text-xs font-bold shadow-md backdrop-blur-sm flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-mint-300" />
                    Prototipe Farmasi
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-extrabold shadow-md">
                    Ready Stock
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-2 mt-3">
                {Object.keys(images).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedImage(key)}
                    className={`p-1.5 rounded-xl border text-[11px] font-bold transition-all flex flex-col items-center gap-1 ${
                      selectedImage === key
                        ? 'bg-mint-100 text-sirih-deep border-mint-400 shadow-xs'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="w-full h-12 rounded-lg overflow-hidden bg-white">
                      <img 
                        src={images[key].src} 
                        alt={images[key].label} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <span className="truncate w-full text-center">{images[key].label}</span>
                  </button>
                ))}
              </div>

              {/* 5 Bahan Utama Chips */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">
                  5 Bahan Alami Terkandung:
                </span>
                <div className="flex flex-wrap gap-2">
                  {ingredientsMini.map((ing, i) => (
                    <div key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs">
                      <img src={ing.img} alt={ing.name} className="w-4 h-4 rounded-full object-cover" />
                      <span className="text-slate-800 font-semibold">{ing.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Specifications Badges */}
              <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
                <h3 className="text-base font-bold text-slate-900">
                  Rincian Identitas Produk
                </h3>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Warna & Aroma</span>
                    <strong className="text-slate-800 text-[11px] leading-tight block mt-0.5">
                      Cokelat kehijauan jernih, aroma daun sirih & mentol
                    </strong>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Isi Bersih (Netto)</span>
                    <strong className="text-slate-800 text-[11px] leading-tight block mt-0.5">
                      100 mL (travel-friendly)
                    </strong>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Nomor POM NA</span>
                    <strong className="text-sirih-forest text-[11px] font-mono leading-tight block mt-0.5">
                      NA18230900001
                    </strong>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Nomor Batch & Exp</span>
                    <strong className="text-slate-800 text-[11px] font-mono leading-tight block mt-0.5">
                      AKN011123 (Exp: 01/2027)
                    </strong>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-mint-50 border border-mint-200 text-xs text-sirih-deep flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-sirih-forest shrink-0 mt-0.5" />
                  <span>Formula segar bebas alkohol pekat dan tanpa paraben. Aman untuk penggunaan harian.</span>
                </div>
              </div>

            </div>

          </div>

          {/* CHECKOUT & ORDER FORM CARD (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
              
              {/* Price Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-slate-100 gap-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Harga Jual Apotek (HJA)
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-3xl sm:text-4xl font-black text-sirih-deep font-sans">
                      Rp 13.000,-
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">
                      / botol 100 mL
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mint-100 text-sirih-forest text-xs font-bold border border-mint-200 self-start sm:self-auto">
                  <Award className="w-3.5 h-3.5" />
                  Harga Khusus Inovasi Farmasi
                </div>
              </div>

              {/* Order Customization & WhatsApp Builder Form */}
              <div className="pt-6 space-y-5">
                
                {/* Quantity Counter */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Jumlah Pesanan (Botol)
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center border-2 border-slate-200 rounded-2xl bg-slate-50 p-1">
                      <button
                        type="button"
                        onClick={() => setQty(Math.max(1, qty - 1))}
                        disabled={qty <= 1}
                        className="w-10 h-10 rounded-xl bg-white hover:bg-slate-100 disabled:opacity-40 text-slate-700 font-bold flex items-center justify-center shadow-xs transition-colors"
                        aria-label="Kurangi jumlah"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-14 text-center font-extrabold text-lg text-slate-900">
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQty(qty + 1)}
                        className="w-10 h-10 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold flex items-center justify-center shadow-xs transition-colors"
                        aria-label="Tambah jumlah"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-xs text-slate-500">
                      <span>Total Subtotal:</span>{' '}
                      <strong className="text-sm font-extrabold text-slate-900">
                        {formatRupiah(totalPrice)}
                      </strong>
                    </div>
                  </div>
                </div>

                {/* Optional Customer Information for WhatsApp Quick Order */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nama Pemesan (Opsional)
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Sarah / Budi"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-transparent text-sm bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Kota / Kecamatan Tujuan (Opsional)
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Bandung / Jakarta Selatan"
                      value={customerCity}
                      onChange={(e) => setCustomerCity(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-transparent text-sm bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Catatan Tambahan (Opsional)
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Tolong packing bubble wrap lebih tebal"
                    value={customerNote}
                    onChange={(e) => setCustomerNote(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-transparent text-sm bg-slate-50/50"
                  />
                </div>

                {/* Total Summary Box */}
                <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 space-y-2">
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>Produk ({qty} botol @ Rp 13.000)</span>
                    <span className="font-semibold">{formatRupiah(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>Kemasan & Bubble Wrap Standar</span>
                    <span className="font-semibold text-sirih-forest">GRATIS</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-sm">
                    <span className="font-bold text-slate-800">Total Pembayaran Produk:</span>
                    <span className="text-xl font-black text-sirih-deep font-sans">
                      {formatRupiah(totalPrice)}
                    </span>
                  </div>
                </div>

                {/* WHATSAPP INTEGRATION CTA BUTTON (#25D366) */}
                <div className="pt-2 space-y-3">
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.99] text-white font-extrabold text-base sm:text-lg shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-3 transition-all animate-pulse-wa"
                  >
                    <MessageCircle className="w-6 h-6 fill-white" />
                    <span>Beli Sekarang via WhatsApp</span>
                  </a>

                  <p className="text-center text-[11px] text-slate-500">
                    Tombol akan membuka WhatsApp dengan format pesanan yang terisi otomatis. Anda dapat langsung mengirim pesan ke nomor bisnis resmi.
                  </p>
                </div>

              </div>

              {/* Assurance Trust Badges */}
              <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left text-xs text-slate-600">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-mint-100 flex items-center justify-center text-sirih-forest shrink-0">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-800">Pengiriman Cepat</strong>
                    <span>Kirim ke seluruh Indonesia</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-mint-100 flex items-center justify-center text-sirih-forest shrink-0">
                    <Package className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-800">Kemasan Aman</strong>
                    <span>Bubble wrap & kardus tebal</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-mint-100 flex items-center justify-center text-sirih-forest shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-800">Batch Segar</strong>
                    <span>Formulasi baru laboratorium</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
