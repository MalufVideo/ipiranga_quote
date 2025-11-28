import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="px-12 md:px-16 py-10 border-b-2 border-slate-100 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Logo Area */}
        <div>
          <div className="text-3xl font-display font-bold tracking-tighter text-slate-900">
            ON <span className="text-slate-400">+</span> AV <span className="text-xs align-top opacity-70 text-slate-500 font-sans">DESIGN</span>
          </div>
          <div className="text-xs text-slate-400 mt-1 uppercase tracking-widest">Tecnologia Criativa</div>
        </div>
        
        {/* Document Meta */}
        <div className="text-right">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Proposta Comercial</h2>
          <p className="text-slate-500 font-mono text-xs mt-1">REF: #2026-VIP-IPIRANGA</p>
          <p className="text-slate-500 font-mono text-xs">DATA: 25/05/2025</p>
        </div>
      </div>
    </header>
  );
};

export default Header;