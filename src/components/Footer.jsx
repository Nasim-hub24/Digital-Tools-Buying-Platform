import React, { useState } from 'react';
import { Zap, Mail, ArrowRight, Heart, Globe, Send, Sparkles } from 'lucide-react';
import { toast } from 'react-toastify';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address.');
      return;
    }
    toast.success('Thank you for subscribing to DigiTools weekly drops!', {
      icon: '🎉'
    });
    setEmail('');
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-md shadow-brand-500/20">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Digi<span className="text-brand-500">Tools</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              The premier marketplace for production-grade digital templates, developer boilerplates, UI systems, and AI assets.
            </p>

            {/* Social Icons (SVGs) */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#twitter" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-600 hover:border-brand-600 transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#github" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-600 hover:border-brand-600 transition-colors" aria-label="GitHub">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="#linkedin" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-600 hover:border-brand-600 transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#youtube" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-600 hover:border-brand-600 transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Links Col 1: Products */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Catalog</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#main-section" className="hover:text-white transition-colors">Resume Builders</a></li>
              <li><a href="#main-section" className="hover:text-white transition-colors">Figma Design Kits</a></li>
              <li><a href="#main-section" className="hover:text-white transition-colors">Next.js Boilerplates</a></li>
              <li><a href="#main-section" className="hover:text-white transition-colors">AI Prompt Suites</a></li>
              <li><a href="#main-section" className="hover:text-white transition-colors">Notion Workspaces</a></li>
            </ul>
          </div>

          {/* Links Col 2: Resources */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#steps-section" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#pricing-section" className="hover:text-white transition-colors">Membership Pricing</a></li>
              <li><a href="#licensing" className="hover:text-white transition-colors">Commercial Licensing</a></li>
              <li><a href="#affiliates" className="hover:text-white transition-colors">Affiliate Program</a></li>
              <li><a href="#docs" className="hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Weekly New Drops</h4>
            <p className="text-xs text-slate-400">
              Get notified when new digital tools, boilerplates, and discounted bundles launch.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 text-xs bg-slate-900 border border-slate-800 rounded-xl focus:outline-none focus:border-brand-500 text-white placeholder-slate-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-brand-600 hover:bg-brand-500 text-white rounded-xl text-xs font-bold flex-shrink-0 transition-colors flex items-center gap-1"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <span className="text-[11px] text-slate-500 block">No spam, unsubscribe at any time.</span>
            </form>
          </div>

        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 DigiTools Platform Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-slate-300 transition-colors">Cookie Preferences</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
