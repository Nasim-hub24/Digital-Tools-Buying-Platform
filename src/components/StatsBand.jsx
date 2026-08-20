import React from 'react';
import { Users, Sparkles, Star, ShieldCheck } from 'lucide-react';

export default function StatsBand() {
  const stats = [
    {
      id: 1,
      figure: "50K+",
      label: "Active Global Creators",
      icon: Users,
      subtext: "Freelancers, devs & teams"
    },
    {
      id: 2,
      figure: "1,200+",
      label: "Premium Digital Tools",
      icon: Sparkles,
      subtext: "Templates, UI kits & boilerplates"
    },
    {
      id: 3,
      figure: "4.9 / 5.0",
      label: "Average User Rating",
      icon: Star,
      subtext: "Based on 12,000+ verified ratings"
    },
    {
      id: 4,
      figure: "99.9%",
      label: "Instant Delivery Uptime",
      icon: ShieldCheck,
      subtext: "Immediate download access"
    }
  ];

  return (
    <section className="bg-gradient-to-r from-brand-700 via-brand-600 to-purple-700 text-white py-12 sm:py-16 shadow-inner relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-white/15">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.id} 
                className={`flex flex-col items-center text-center group ${index !== 0 ? 'pt-6 sm:pt-0 lg:pl-6' : ''}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-3 text-brand-200 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-1">
                  {stat.figure}
                </span>
                <span className="text-base font-bold text-brand-100">
                  {stat.label}
                </span>
                <span className="text-xs text-brand-200/80 mt-0.5">
                  {stat.subtext}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
