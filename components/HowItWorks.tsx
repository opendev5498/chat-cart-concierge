import React from 'react';
import { STEPS } from '../constants';
import { ArrowDown } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm">Simple Process</span>
          <h2 className="text-3xl font-bold mt-2 sm:text-4xl">Groceries in 3 Steps</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-900"></div>

          {STEPS.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-900 shadow-xl flex items-center justify-center mb-8 relative z-10 group transition-transform hover:scale-110 duration-300">
                <span className="text-3xl font-bold text-emerald-400 font-mono">{step.number}</span>
                {index < STEPS.length - 1 && (
                  <ArrowDown className="md:hidden absolute -bottom-12 text-slate-700 w-6 h-6 animate-bounce" />
                )}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-400 max-w-xs leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};