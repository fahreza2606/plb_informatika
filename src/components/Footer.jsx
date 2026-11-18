import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ExternalLink, 
  Heart,
  FileCheck
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sirih-950 text-slate-200 pt-16 pb-28 md:pb-12 border-t border-sirih-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-sirih-800/80">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-mint-500 to-sirih-600 flex items-center justify-center text-white shadow-lg shadow-mint-900/40">
                <Leaf className="w-5 h-5 text-mint-100" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white font-sans">
                  DEOSIRIH
                </span>
                <span className="block text-[11px] font-semibold tracking-wider text-mint-300 uppercase">
                  Herbal Personal Care
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Prototipe deodorant spray herbal berbahan dasar infusa daun sirih hijau pilihan dan tawas alami. Diformulasikan khusus untuk memberikan kesegaran sepanjang hari tanpa noda dan tanpa risiko iritasi kimia agresif.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-sirih-900/90 text-mint-300 border border-sirih-700">
                <ShieldCheck className="w-3.5 h-3.5 text-mint-400" />
                100% Ekstrak Sirih Alami
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-sirih-900/90 text-mint-300 border border-sirih-700">
                <FileCheck className="w-3.5 h-3.5 text-mint-400" />
                POM NA: NA1823090000
              </span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-mint-400"></span>
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-300 hover:text-mint-300 transition-colors flex items-center gap-1.5">
                  <span>Beranda</span>
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-slate-300 hover:text-mint-300 transition-colors flex items-center gap-1.5">
                  <span>Informasi Produk</span>
                </Link>
              </li>
              <li>
                <Link to="/ingredients" className="text-slate-300 hover:text-mint-300 transition-colors flex items-center gap-1.5">
                  <span>Komposisi & Proses</span>
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-slate-300 hover:text-mint-300 transition-colors flex items-center gap-1.5">
                  <span>Panduan & Edukasi</span>
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-slate-300 hover:text-mint-300 transition-colors flex items-center gap-1.5">
                  <span className="text-mint-300 font-semibold">Beli Sekarang (Katalog)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Specifications (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-mint-400"></span>
              Informasi Pemesanan & Riset
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dikembangkan oleh Siswa Jurusan Farmasi sebagai bentuk inovasi pemanfaatan tanaman obat herbal tradisional untuk personal hygiene modern.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-mint-400 shrink-0 mt-0.5" />
                <span>Laboratorium Teknologi Farmasi & Fitokimia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-mint-400 shrink-0" />
                <span>CS & Pemesanan: <strong>Kirana (0895-6064-93314)</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-mint-400 shrink-0" />
                <span>Email: contact@deosirih.id</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-sirih-900/60 border border-sirih-800 text-[11px] text-slate-400">
              <span className="text-mint-300 font-semibold">Batch Produksi:</span> AKNO1123 | <span className="text-mint-300 font-semibold">Netto:</span> 100 mL (Travel Spray)
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} <strong className="text-slate-200">DEOSIRIH</strong>. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <span>Inovasi Siswa Jurusan Farmasi</span>
            <span>•</span>
            <span>Herbal Deodorant Spray</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
