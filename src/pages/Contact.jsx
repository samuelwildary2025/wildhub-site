import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Send, Phone, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Funcionalidade em desenvolvimento",
      description: "O envio de formulário será implementado em breve. Por enquanto, sinta-se à vontade para nos contatar por outros meios!",
    });
  };

  return (
    <>
      <Helmet>
        <title>Contato - Wild Hub</title>
        <meta name="description" content="Entre em contato conosco para iniciar seu projeto de IA ou automação. Fale com nossa equipe ou diretamente com nossa IA assistente." />
      </Helmet>
      <div className="page-container bg-slate-950">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-hero font-bold mb-6 font-space text-white">
              Vamos <span className="gradient-text">Conversar?</span>
            </h1>
            <p className="text-body-lg text-slate-400 max-w-3xl mx-auto">
              Estamos prontos para ouvir sobre seus desafios e transformar suas ideias em realidade.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 mb-12"
            >
              <h2 className="text-section-title font-bold font-space mb-4 text-white text-center">Envie uma mensagem direta</h2>
              <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input type="text" placeholder="Seu nome" className="bg-slate-900 border-slate-700 h-10" required />
                  <Input type="email" placeholder="Seu e-mail" className="bg-slate-900 border-slate-700 h-10" required />
                </div>
                <Input type="text" placeholder="Assunto" className="bg-slate-900 border-slate-700 h-10" required />
                <Textarea placeholder="Sua mensagem..." className="bg-slate-900 border-slate-700 min-h-[100px]" required />
                <Button type="submit" size="default" className="w-full">
                  Enviar Mensagem <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
            >
              <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-xl p-4 text-center">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-card-title font-semibold text-white mb-2">Telefone e WhatsApp</h3>
                <p className="text-body text-blue-400 hover:text-blue-300 transition-colors cursor-pointer" onClick={() => window.open('https://wa.me/5585920002076', '_blank')}>+55 (85) 9 2000-2076</p>
              </div>
              
              <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-xl p-4 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-600/30">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-card-title font-semibold text-white mb-2">Fale com nossa IA</h3>
                <p className="text-body text-slate-300 mb-3">Assistente virtual para dúvidas iniciais</p>
                <Button variant="secondary" size="sm" onClick={() => toast({ description: 'Assistente virtual em desenvolvimento.' })}>
                  Iniciar Conversa
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;