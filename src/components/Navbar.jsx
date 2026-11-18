import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Leaf, 
  Menu, 
  X, 
  ShoppingBag, 
  ShieldCheck, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Produk', path: '/product' },
    { name: 'Komposisi', path: '/ingredients' },
    { name: 'Panduan', path: '/education' },
    { name: 'Beli', path: '/shop' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-mint-200/80 py-3' 
          : 'bg-white/85 backdrop-blur-sm border-b border-emerald-100/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sirih-deep to-mint-600 flex items-center justify-center text-white shadow-md shadow-mint-500/20 group-hover:scale-105 transition-transform duration-200">
              <Leaf className="w-5 h-5 text-mint-200 transition-transform group-hover:rotate-12 duration-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-sirih-deep font-sans">
                  DEOSIRIH
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-mint-100 text-sirih-forest border border-mint-200">
                  HERBAL
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 tracking-wide">
                Natural Deodorant Spray
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-mint-100/80 text-sirih-forest shadow-xs'
                      : 'text-slate-600 hover:text-sirih-deep hover:bg-slate-100/80'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sirih-forest to-sirih-deep hover:from-sirih-deep hover:to-sirih-950 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-sirih-forest/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0"
            >
              <ShoppingBag className="w-4 h-4 text-mint-300" />
              <span>Pesan Sekarang</span>
            </Link>
          </div>

          {/* Mobile Hamburger Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/shop"
              className="p-2 rounded-lg bg-mint-100 text-sirih-deep hover:bg-mint-200 transition-colors"
              aria-label="Keranjang Belanja"
            >
              <ShoppingBag className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-700 hover:text-sirih-deep hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-mint-400"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-100 animate-fadeIn">
            <div className="flex flex-col space-y-1.5 pb-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-semibold transition-all ${
                      isActive
                        ? 'bg-mint-100 text-sirih-forest font-bold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-sirih-deep'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </NavLink>
              ))}
              <div className="pt-2 px-1">
                <Link
                  to="/shop"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sirih-forest to-sirih-deep text-white font-bold py-3 rounded-xl shadow-md text-sm"
                >
                  <ShoppingBag className="w-4 h-4 text-mint-300" />
                  <span>Beli Sekarang (Rp 13.000)</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
