import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How do I receive access to my purchased tools?",
      a: "Upon completing checkout, an automated email with direct cloud download links, Notion template duplicate links, and GitHub/Figma invitations is dispatched immediately within seconds."
    },
    {
      q: "Can I use these tools in commercial and client projects?",
      a: "Yes! All DigiTools products come with a commercial license allowing you to build unlimited client projects, SaaS products, and personal applications."
    },
    {
      q: "Are product updates included with my purchase?",
      a: "Yes. All one-time purchases include lifetime access to bug fixes and version updates for that specific tool with zero recurring fees."
    },
    {
      q: "What is your refund policy?",
      a: "We provide a 14-day 100% money-back satisfaction guarantee if any template or tool fails to function as described."
    }
  ];

  return (
    <section id="faq-section" className="py-20 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Everything you need to know about purchasing and utilizing DigiTools.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-brand-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-brand-600' : ''}`} />
                </button>
                {isOpen && (
                  <div className="p-5 sm:p-6 pt-0 bg-slate-50/50 border-t border-slate-100 text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
