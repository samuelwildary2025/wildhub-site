import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CalendlyInline from '@/components/CalendlyInline';

const Booking = () => {
  return (
    <>
      <Helmet>
        <title>Agendar Consultoria - Wild Hub</title>
        <meta name="description" content="Agende uma consultoria gratuita com nossos especialistas em IA e automação. Descubra como transformar seu atendimento com inteligência artificial." />
        <meta name="keywords" content="agendar consultoria, wild hub, inteligência artificial, automação, atendimento" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-20">
        {/* Header */}
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <Button variant="ghost" size="sm" asChild className="mb-4">
              <Link to="/" className="text-slate-300 hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao início
              </Link>
            </Button>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Agende sua <span className="gradient-text">Consultoria Gratuita</span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Converse com nossos especialistas e descubra como a inteligência artificial 
              pode revolucionar o atendimento da sua empresa.
            </p>
          </motion.div>

          {/* Calendly Widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto"
          >
            <CalendlyInline height="800px" />
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Análise Gratuita</h3>
              <p className="text-slate-300 text-sm">
                Avaliamos seu processo atual de atendimento sem custo
              </p>
            </div>

            <div className="text-center p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Proposta Personalizada</h3>
              <p className="text-slate-300 text-sm">
                Criamos uma solução sob medida para suas necessidades
              </p>
            </div>

            <div className="text-center p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Implementação</h3>
              <p className="text-slate-300 text-sm">
                Acompanhamos todo o processo de implementação
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Booking;