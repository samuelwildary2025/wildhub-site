import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950/50 border-t border-blue-500/10 mt-12 z-10">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img src="/logo.png" alt="Wild Hub" className="h-20 w-auto" />
            </Link>
            <p className="text-slate-400 max-w-md">
              Transformando negócios com inteligência artificial, automação e softwares personalizados.
            </p>
          </div>
          <div>
            <p className="font-semibold text-white mb-4 font-space">Navegação</p>
            <ul className="space-y-2">
              <li><Link to="/sobre" className="text-slate-400 hover:text-blue-400 transition-colors">Sobre Nós</Link></li>
              <li><Link to="/servicos" className="text-slate-400 hover:text-blue-400 transition-colors">Serviços</Link></li>
              <li><Link to="/casos-de-sucesso" className="text-slate-400 hover:text-blue-400 transition-colors">Resultados</Link></li>
              <li><Link to="/contato" className="text-slate-400 hover:text-blue-400 transition-colors">Contato</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white mb-4 font-space">Legal</p>
            <ul className="space-y-2">
              <li><Link to="/politica-de-privacidade" className="text-slate-400 hover:text-blue-400 transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/termos-de-servico" className="text-slate-400 hover:text-blue-400 transition-colors">Termos de Serviço</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-slate-500 text-center">&copy; {currentYear} Wild Hub. Todos os direitos reservados.</p>
            <img src="/site_seguro.png" alt="Site Seguro" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;