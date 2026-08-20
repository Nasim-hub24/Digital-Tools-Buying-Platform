import React from 'react';
import { Search, ShoppingBag, DownloadCloud, ArrowRight, Zap, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function StepsSection() {
  const { setActiveTab } = useCart();

  const steps = [
    {
      step: '01',
      title: 'Discover & Evaluate',
      description: 'Explore our curated catalog of digital boilerplates, design systems, and Notion workspaces tailored for rapid deployment.',
      icon: Search,
      badge: 'Step 1'
    },
    {
      step: '02',
      title: 'Instant 1-Click Checkout',
      description: 'Add your selected productivity tools to your cart and complete checkout with zero friction and guaranteed asset safety.',
      icon: ShoppingBag,
      badge: 'Step 2'
    },
    {
      step: '03',
      title: 'Download & Ship Faster',
      description: 'Receive instant direct download links, Figma project invites, and full commercial licenses to start building immediately.',
      icon: DownloadCloud,
      badge: 'Step 3'
    }
  ];

  const handleStart = () => {
    setActiveTab('products');
    const mainSec = document.getElementById('main-section');
    if (mainSec) {
      mainSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="steps-section" className="py-20 sm:py-28 bg-white border-y border-slate-200/80 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-brand-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold mb-4">
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>Effortless 3-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            How DigiTools Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From discovering high-caliber digital tools to deploying them in your workflow in under 60 seconds.
          </p>
        </div>

        {/* 3 Steps Row on Desktop / Stack on Mobile (PRD STEP-2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative">
          
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-[18%] right-[18%] h-0.5 bg-gradient-to-r from-brand-300 via-purple-300 to-indigo-300 -translate-y-12 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="bg-slate-50/80 hover:bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-brand-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative z-10 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-lg shadow-brand-600/25 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-4xl font-black text-slate-300 font-mono group-hover:text-brand-500 transition-colors">
                      {step.step}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-brand-600">
                  <CheckCircle className="w-4 h-4 text-brand-600" />
                  <span>{step.badge} Complete Flow</span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom CTA trigger */}
        <div className="text-center mt-14">
          <button
            onClick={handleStart}
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-800 bg-brand-50 hover:bg-brand-100 px-6 py-3 rounded-xl border border-brand-200 transition-all"
          >
            <span>Ready to accelerate? Start exploring now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
