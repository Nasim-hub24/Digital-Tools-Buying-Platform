import React from 'react';
import { ArrowRight, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ClosingCTA() {
  const { setActiveTab } = useCart();

  const handleCTA = () => {
    setActiveTab('products');
    const mainSec = document.getElementById('main-section');
    if (mainSec) {
      mainSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-indigo-950 text-white py-20 sm:py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-200 text-xs font-semibold backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-brand-300" />
          <span>Join 50,000+ High-Performing Creators</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Ready to Supercharge Your Productivity & Build Faster?
        </h2>

        <p className="text-base sm:text-lg text-brand-100 max-w-2xl mx-auto font-normal">
          Get immediate access to industry-standard templates, battle-tested boilerplates, and AI systems today.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleCTA}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-brand-50 text-brand-900 font-extrabold text-base px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <span>Explore All Digital Tools</span>
            <ArrowRight className="w-5 h-5 text-brand-600" />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-medium text-brand-200">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Secure Checkout
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-300" /> Instant Cloud Download
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-purple-300" /> Free Lifetime Updates
          </span>
        </div>

      </div>
    </section>
  );
}
