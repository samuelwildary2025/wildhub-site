import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Technologies from '@/pages/Technologies';
import CaseStudies from '@/pages/CaseStudies';
import Contact from '@/pages/Contact';
import Booking from '@/pages/Booking';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import NeuralNetworkBackground from '@/components/NeuralNetworkBackground';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-200 relative flex flex-col">
        <NeuralNetworkBackground />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/tecnologias" element={<Technologies />} />
            <Route path="/casos-de-sucesso" element={<CaseStudies />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/agendar" element={<Booking />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos-de-servico" element={<TermsOfService />} />
           
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
