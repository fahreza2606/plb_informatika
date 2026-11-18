import React from 'react';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

export default function WhatsAppButton() {
  const location = useLocation();
  // WhatsApp link (ready to plug phone number, e.g., https://wa.me/?text=...)
  const defaultMessage = encodeURIComponent(
    "Halo Admin DEOSIRIH, saya tertarik dan ingin memesan DEOSIRIH Herbal Deodorant Spray (100 mL). Boleh info ketersediaan stoknya?"
  );
  const waUrl = `https://wa.me/?text=${defaultMessage}`;

  return (
    <>
      {/* Mobile Sticky Bottom CTA Bar (Only visible on small devices < 768px) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl md:hidden">
        <div className="flex items-center gap-2">
          {location.pathname !== '/shop' && (
            <Link
              to="/shop"
              className="flex-1 py-3 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-sirih-deep text-xs font-bold text-center border border-slate-300 transition-colors flex items-center justify-center gap-1.5"
            >
              <ShoppingBag className="w-4 h-4 text-sirih-forest" />
              <span>Detail Harga</span>
            </Link>
          )}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[2] py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/30 flex items-center justify-center gap-2 transition-all animate-pulse-wa"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Beli Sekarang via WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Desktop Floating Action Button (Visible on md and larger screens) */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3.5 rounded-full shadow-xl shadow-emerald-600/30 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse-wa"
          title="Chat Admin WhatsApp DEOSIRIH"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6 fill-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping"></span>
          </div>
          <div className="text-left">
            <span className="block text-[10px] uppercase font-bold tracking-wider text-emerald-100 leading-none">
              Respon Cepat
            </span>
            <span className="block text-sm font-extrabold tracking-tight">
              Beli via WhatsApp
            </span>
          </div>
        </a>
      </div>
    </>
  );
}
