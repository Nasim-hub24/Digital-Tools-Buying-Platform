import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Star, ShieldCheck, Zap, Download } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function HeroBanner() {
  const { setActiveTab } = useCart();

  const handleExplore = () => {
    setActiveTab('products');
    const mainSec = document.getElementById('main-section');
    if (mainSec) {
      mainSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    const stepsSec = document.getElementById('steps-section');
    if (stepsSec) {
      stepsSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-brand-50/60 via-slate-50 to-white">
      {/* Background Decorative Gradients & Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-20 w-96 h-96 bg-brand-400/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-[450px] h-[450px] bg-purple-300/25 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtitle, CTAs & Social Proof */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Micro-Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/80 border border-brand-200 text-brand-800 text-xs sm:text-sm font-semibold shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-600 animate-pulse" />
              <span>The #1 Marketplace for Digital Productivity Assets</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Supercharge Your Workflow With <span className="text-gradient-brand">Curated Digital Tools</span> & Templates.
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Accelerate your projects with developer boilerplates, UI kits, AI prompt libraries, and Notion systems. Tested by 50,000+ creators worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-explore-btn"
                onClick={handleExplore}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-brand-600/30 hover:shadow-brand-600/45 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Browse All Tools</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                id="hero-learn-more-btn"
                onClick={handleLearnMore}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 font-semibold text-base px-7 py-4 rounded-xl border border-slate-300/90 shadow-sm hover:border-slate-400 transition-all duration-200"
              >
                <span>How It Works</span>
              </button>
            </div>

            {/* Bullet Proof Points */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Instant digital delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Lifetime product updates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Commercial license included</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Graphic / Interactive Mockup with Floating Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center px-1 sm:px-0">
            
            {/* Outer Glow */}
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Main Visual Showcase Card */}
              <div className="rounded-3xl p-5 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white shadow-2xl shadow-brand-900/30 border border-slate-700/50 relative overflow-hidden">
                
                {/* Background Grid Pattern inside card */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                
                {/* Header mock bar */}
                <div className="flex items-center justify-between border-b border-slate-700/60 pb-4 mb-6 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] sm:text-xs text-slate-400 font-mono ml-1 sm:ml-2 truncate max-w-[140px] sm:max-w-none">digitools-suite.bundle</span>
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30">
                    Live Catalog
                  </span>
                </div>

                {/* Hero Showcase Content */}
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-white">Full-Stack Creator Kit</h4>
                      <p className="text-[11px] sm:text-xs text-slate-400">Complete UI + Backend + AI Stack</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-xl sm:text-2xl font-extrabold text-brand-400">$79</span>
                      <span className="text-[10px] sm:text-xs text-slate-400 block">one-time</span>
                    </div>
                  </div>

                  {/* Feature preview checklist */}
                  <div className="bg-slate-800/80 rounded-xl p-3.5 sm:p-4 border border-slate-700/50 space-y-2 text-[11px] sm:text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                      <span>Next.js 15 App Router & React Boilerplate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                      <span>800+ Production Figma Design Tokens</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                      <span>2,500+ High Performance AI Prompts</span>
                    </div>
                  </div>

                  {/* Mock Action */}
                  <div className="pt-2">
                    <button 
                      onClick={handleExplore}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                    >
                      <Download className="w-4 h-4" />
                      <span>Instant Access Package</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Floating Badges (Responsive layout on mobile) */}
              <div className="mt-4 sm:mt-0 flex flex-col sm:block gap-3">
                {/* Floating Badge 1: Top Right Rating */}
                <div className="sm:absolute sm:-top-5 sm:-right-4 lg:sm:-right-6 bg-white rounded-2xl p-3 sm:p-3.5 shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce-short">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 flex-shrink-0">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-slate-900 text-xs sm:text-sm">4.9 / 5.0</span>
                      <span className="text-[10px] sm:text-xs text-amber-500 font-bold">★★★★★</span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium">From 2,800+ reviews</span>
                  </div>
                </div>

                {/* Floating Badge 2: Bottom Left Verified Assets */}
                <div className="sm:absolute sm:-bottom-6 sm:-left-4 lg:sm:-left-6 bg-white rounded-2xl p-3 sm:p-3.5 shadow-xl border border-slate-100 flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 flex-shrink-0">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 text-xs sm:text-sm block">100% Verified</span>
                    <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Safe & Tested Code</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
