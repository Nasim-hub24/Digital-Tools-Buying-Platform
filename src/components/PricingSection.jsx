import React, { useState } from 'react';
import { Check, Sparkles, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'
  const { setActiveTab } = useCart();

  const handleBrowse = () => {
    setActiveTab('products');
    const mainSec = document.getElementById('main-section');
    if (mainSec) {
      mainSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: 'Starter Individual',
      description: 'Essential digital assets and templates for solo creators and freelancers.',
      priceMonthly: 0,
      priceYearly: 0,
      periodLabel: 'Free Forever',
      badge: null,
      highlighted: false,
      buttonText: 'Get Started Free',
      features: [
        'Access to 50+ free community templates',
        'Standard personal license',
        'PDF & basic export capabilities',
        'Community Discord support',
        'Basic Notion dashboard components'
      ]
    },
    {
      name: 'Professional Creator',
      description: 'Complete toolkits, boilerplates, and AI systems for ambitious builders.',
      priceMonthly: 29,
      priceYearly: 19,
      periodLabel: '/month, billed annually',
      badge: 'Most Popular',
      highlighted: true,
      buttonText: 'Get Professional Pass',
      features: [
        'Unlimited access to all 1,200+ tools',
        'Commercial & client project licenses',
        'Next.js 15 & Figma source files',
        'Priority 1-on-1 creator support',
        'Weekly new release drops & updates',
        'AI Prompt Engineering Hub access'
      ]
    },
    {
      name: 'Enterprise & Agency',
      description: 'Tailored licensing, dedicated support, and custom asset packs for teams.',
      priceMonthly: 99,
      priceYearly: 79,
      periodLabel: '/month, billed annually',
      badge: 'Teams & Scale',
      highlighted: false,
      buttonText: 'Contact Agency Sales',
      features: [
        'Unlimited team seat licenses (up to 20)',
        'Custom asset curation & onboarding',
        'Dedicated account manager & Slack channel',
        'Enterprise SLA & 99.9% uptime guarantee',
        'White-label distribution rights',
        'Early access to beta templates'
      ]
    }
  ];

  return (
    <section id="pricing-section" className="py-20 sm:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Tiered Access</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Choose the membership that fits your workflow. You can also purchase standalone individual digital tools directly from our catalog.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center gap-2 sm:gap-3 bg-white p-1 sm:p-1.5 rounded-2xl border border-slate-200 shadow-sm max-w-full overflow-x-auto">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                billingCycle === 'monthly'
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                billingCycle === 'yearly'
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Yearly Billing</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full font-extrabold">
                Save 35%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => {
            const price = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;
            return (
              <div
                key={plan.name}
                className={`rounded-3xl p-6 sm:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.highlighted
                    ? 'bg-white border-2 border-brand-500 shadow-2xl shadow-brand-500/20 lg:-translate-y-3 z-10'
                    : 'bg-white border border-slate-200 shadow-sm hover:shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 sm:-top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-600 to-purple-600 text-white text-[11px] sm:text-xs font-extrabold uppercase tracking-wider px-3.5 sm:px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                    {plan.highlighted && <Zap className="w-5 h-5 text-brand-600 fill-current" />}
                  </div>

                  <p className="text-sm text-slate-500 mt-2 min-h-[40px]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 mb-8 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-5xl font-black text-slate-900">
                        ${price}
                      </span>
                      <span className="text-sm text-slate-500 font-medium">
                        {price === 0 ? '' : `/${billingCycle === 'yearly' ? 'mo' : 'month'}`}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 mt-1 block">
                      {price === 0 ? 'No credit card required' : plan.periodLabel}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      What's Included:
                    </p>
                    <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            plan.highlighted ? 'bg-brand-600 text-white' : 'bg-brand-100 text-brand-700'
                          }`}>
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plan Button */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <button
                    onClick={handleBrowse}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                      plan.highlighted
                        ? 'bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white shadow-lg shadow-brand-600/30 hover:scale-[1.02]'
                        : 'bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800'
                    }`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
