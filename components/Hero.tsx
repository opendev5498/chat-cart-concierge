import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE_PREFILL } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-white overflow-hidden pt-24 pb-24 lg:pt-32 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white pointer-events-none"></div>
      
      {/* Animated blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-lime-100/50 rounded-full blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-semibold mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          Currently delivering to your neighborhood
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight mb-8">
          Farm Freshness, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-lime-500">
            Delivered in Minutes.
          </span>
        </h1>
        
        {/* Description */}
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Skip the supermarket queues and stale produce. Order premium, organic fruits and vegetables directly via WhatsApp.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE_PREFILL)}`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-emerald-600 text-white font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200 hover:-translate-y-1"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Order via WhatsApp
          </a>
          <a 
            href="#process" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-emerald-800 font-bold text-lg border-2 border-slate-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all shadow-sm hover:shadow-md"
          >
            How It Works
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-slate-100 pt-10">
           <div className="flex flex-col items-center">
              <span className="text-3xl lg:text-4xl font-bold text-slate-900">100%</span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-2">Mandi Sourced</span>
           </div>
           <div className="flex flex-col items-center">
              <span className="text-3xl lg:text-4xl font-bold text-slate-900">50+</span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-2">Fresh Produce</span>
           </div>
           <div className="flex flex-col items-center">
              <span className="text-3xl lg:text-4xl font-bold text-slate-900">₹0</span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-2">Minimum Order Value</span>
           </div>
           <div className="flex flex-col items-center">
              <span className="text-3xl lg:text-4xl font-bold text-slate-900">24/7</span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-2">WhatsApp Support</span>
           </div>
        </div>

        {/* Partial straight line separator */}
        <div className="w-7/7 mx-auto border-t border-slate-600 opacity-25 mt-28"></div>
      </div>
    </section>
  );
};