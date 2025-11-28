import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import TechShowcase from './components/TechShowcase';
import Infrastructure from './components/Infrastructure';
import Pricing from './components/Pricing';
import Extras from './components/Extras';
import Footer from './components/Footer';
import { Printer } from 'lucide-react';

const App: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen py-8 px-4 flex justify-center items-start print:p-0 print:block">
      
      {/* Print Button - Hidden in Print Mode */}
      <button 
        onClick={handlePrint}
        className="no-print fixed top-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-full shadow-xl hover:bg-slate-800 transition-colors flex items-center gap-2 font-medium text-sm"
      >
        <Printer size={18} />
        Save as PDF
      </button>

      {/* Document Container */}
      <div className="w-full max-w-[900px] bg-white print-shadow rounded-sm overflow-hidden flex flex-col print:shadow-none print:w-full print:max-w-none">
        <Header />
        <main className="flex-1">
          <Hero />
          <div className="px-12 md:px-16 py-8 space-y-12 print:px-12 print:py-6 print:space-y-8">
            <TechShowcase />
            <Infrastructure />
            <Timeline />
            <Pricing />
            <Extras />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;