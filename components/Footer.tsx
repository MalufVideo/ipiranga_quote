import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="px-12 md:px-16 py-8 border-t border-slate-200 bg-slate-50 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-slate-500">
        <div>
          <p className="font-bold text-slate-700 uppercase mb-2">Condições Gerais</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>Validade da proposta: 15 dias.</li>
            <li>Forma de pagamento: A combinar.</li>
            <li>Cancelamento: Sujeito a multa contratual.</li>
          </ul>
        </div>
        <div className="text-right flex flex-col justify-end">
          <p className="mb-1">ON + AV DESIGN LTDA</p>
          <p>CNPJ: 00.000.000/0001-00</p>
          <p>contato@onavdesign.com.br</p>
        </div>
      </div>
      <div className="text-center mt-8 pt-4 border-t border-slate-200 text-[10px] text-slate-400">
        Gerado digitalmente em {new Date().toLocaleDateString()}
      </div>
    </footer>
  );
};

export default Footer;