import React from 'react';
import { Leaf, Instagram, Facebook, Twitter, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-600 pt-16 pb-8 relative overflow-hidden border-t border-slate-50">
      {/* Decorative Circles matching HowItWorks section */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-lime-100/60 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12 justify-items-start md:justify-items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-slate-900">
              <Leaf className="h-6 w-6 text-emerald-600" />
              <span className="text-xl font-bold">Doorwise</span>
            </div>
            <p className="text-sm text-slate-500">
              Bringing fresh fruits and vegetables, carefully sourced and delivered straight to your doorstep.
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-emerald-600 transition-colors">Home</a></li>
              <li><a href="#process" className="hover:text-emerald-600 transition-colors">How it Works</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>groceries@doorwise.com</li>
              <li>+918368937757</li>
            </ul>
          </div>
        </div>
        
        {/* Partial straight line separator */}
        <div className="w-12/12 mx-auto border-t border-slate-600 opacity-25 mb-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Blitzshift Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};