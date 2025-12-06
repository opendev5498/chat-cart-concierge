import React, { useState } from 'react';
import { Leaf, MessageCircle, Menu, X } from 'lucide-react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-emerald-600" />
              </div>
              <span className="text-xl font-bold text-slate-800 tracking-tight">Doorwise</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Home</a>
              <a href="#process" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">How it Works</a>
              <a 
                href="https://wa.me/+918368937757" 
                target="_blank" 
                rel="noreferrer"
                className="bg-emerald-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <MessageCircle size={18} />
                Order Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu}
                className="text-slate-600 hover:text-emerald-600 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg font-medium">Home</a>
              <a href="#process" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg font-medium">How it Works</a>
              <a 
                href="https://wa.me/+918368937757" 
                target="_blank" 
                rel="noreferrer"
                className="block mt-4 text-center bg-emerald-600 text-white px-3 py-3 rounded-lg font-medium"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
      </main>

      <Footer />
    </div>
  );
};

export default App;