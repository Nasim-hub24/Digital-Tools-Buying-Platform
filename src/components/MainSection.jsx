import React from 'react';
import { LayoutGrid, ShoppingBag, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductCatalog from './ProductCatalog';
import CartView from './CartView';

export default function MainSection() {
  const { activeTab, setActiveTab, itemCount } = useCart();

  return (
    <section id="main-section" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100/70 border border-brand-200/80 text-brand-700 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Productivity Assets</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore & Acquire Premium Digital Tools
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Hand-crafted frameworks, design systems, and productivity workflows built for high-performing teams and individuals.
          </p>
        </div>

        {/* View Toggle Bar (PRD MAIN-1, MAIN-2, MAIN-3, MAIN-4, MAIN-5) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            
            {/* Products Toggle Button */}
            <button
              id="toggle-products-btn"
              onClick={() => setActiveTab('products')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                activeTab === 'products'
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Products</span>
            </button>

            {/* Cart Toggle Button */}
            <button
              id="toggle-cart-btn"
              onClick={() => setActiveTab('cart')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 relative ${
                activeTab === 'cart'
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Cart</span>
              
              {/* Badge */}
              <span
                className={`inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold rounded-full transition-colors ${
                  activeTab === 'cart'
                    ? 'bg-white text-brand-700'
                    : 'bg-brand-100 text-brand-700'
                }`}
              >
                {itemCount}
              </span>
            </button>

          </div>
        </div>

        {/* Conditional Content Rendering */}
        <div className="transition-all duration-300">
          {activeTab === 'products' ? (
            <ProductCatalog />
          ) : (
            <CartView />
          )}
        </div>

      </div>
    </section>
  );
}
