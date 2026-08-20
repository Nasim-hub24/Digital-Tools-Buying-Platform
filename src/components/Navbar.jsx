import React, { useState } from 'react';
import { ShoppingBag, Zap, Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { itemCount, setActiveTab } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCartClick = () => {
    setActiveTab('cart');
    const mainSec = document.getElementById('main-section');
    if (mainSec) {
      mainSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (sectionId, tab = 'products') => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-700 via-brand-600 to-purple-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform duration-300">
              <Zap className="w-6 h-6 fill-current text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl tracking-tight text-slate-900 flex items-center gap-1">
                Digi<span className="text-brand-600">Tools</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 -mt-1">
                Digital Marketplace
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleNavClick('main-section', 'products')} 
              className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors"
            >
              Products Catalog
            </button>
            <button 
              onClick={() => handleNavClick('steps-section')} 
              className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => handleNavClick('pricing-section')} 
              className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => handleNavClick('faq-section')} 
              className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors"
            >
              Why Us
            </button>
          </nav>

          {/* Right Action: Cart Button & CTA */}
          <div className="flex items-center gap-3">
            {/* Cart Button */}
            <button
              id="navbar-cart-btn"
              onClick={handleCartClick}
              className="relative p-2.5 rounded-xl text-slate-700 hover:text-brand-600 hover:bg-brand-50 transition-all duration-200 border border-slate-200/80 flex items-center gap-2 group"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span className="hidden sm:inline text-sm font-semibold">Cart</span>
              
              {/* Cart Badge */}
              <span
                id="navbar-cart-badge"
                className={`inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none rounded-full transition-all duration-300 ${
                  itemCount > 0
                    ? 'bg-brand-600 text-white shadow-sm shadow-brand-500/30 animate-pulse-subtle scale-100'
                    : 'bg-slate-200 text-slate-600 scale-90'
                }`}
              >
                {itemCount}
              </span>
            </button>

            {/* Explore Button */}
            <button
              onClick={() => handleNavClick('main-section', 'products')}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-700 hover:to-purple-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-brand-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Tools</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <button
            onClick={() => handleNavClick('main-section', 'products')}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-600"
          >
            Products Catalog
          </button>
          <button
            onClick={() => handleNavClick('steps-section')}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-600"
          >
            How It Works
          </button>
          <button
            onClick={() => handleNavClick('pricing-section')}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-600"
          >
            Pricing
          </button>
          <button
            onClick={() => handleNavClick('faq-section')}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-600"
          >
            Why Choose Us
          </button>
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('main-section', 'products')}
              className="w-full flex items-center justify-center gap-2 bg-brand-600 text-white font-semibold py-3 rounded-xl shadow-md"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
