import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Target, Eye, Cpu } from 'lucide-react';

const About = () => {

  return (
    <>
      <Helmet>
        <title>Sobre Nós - Wild Hub</title>
        <meta name="description" content="Nossa missão é transformar negócios através da inteligência artificial e automação, com uma cultura de inovação e uma equipe de especialistas." />
      </Helmet>

      <div className="page-container bg-slate-950">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="w-16 h-16 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-hero font-bold mb-6 font-space text-white">
              Humanos e IA, <span className="gradient-text">unidos pela inovação</span>
            </h1>
            <p className="text-body-lg text-slate-400 max-w-3xl mx-auto">
              Nosso propósito é claro: fundir a criatividade humana com a precisão da inteligência artificial para criar soluções que redefinem o futuro dos negócios.
            </p>
          </motion.div>



          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-20"
          >
            <h2 className="text-section-title font-bold mb-16 font-space text-white">
              Conheça o <span className="gradient-text">Fundador</span>
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700/50">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-56 h-56 md:w-64 md:h-64 mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
                    <img  
                      className="relative rounded-full w-full h-full object-cover border-4 border-blue-500/50 shadow-2xl"
                      alt="Samuel - Fundador da WildHub" 
                      src="/samuel-photo.png" 
                      style={{objectPosition: 'center 20%'}}
                    />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-space">Samuel Wildary</h3>
                  <div className="text-xl text-blue-400 font-semibold mb-8">Fundador & CEO</div>
                  <div className="text-lg text-slate-300 space-y-6 max-w-4xl">
                    <p>
                        Sou <span className="text-blue-400 font-semibold">desenvolvedor</span> e <span className="text-blue-400 font-semibold">empreendedor</span> apaixonado por tecnologia e inovação. 
                        <span className="text-blue-400 font-semibold">Fundei minha primeira empresa aos 19 anos</span> e hoje, 
                        <span className="text-blue-400 font-semibold">aos 30 anos</span>, tenho uma trajetória sólida no empreendedorismo. 
                        Ao longo da minha jornada empresarial, <span className="text-blue-400 font-semibold">criei e dirigi empresas</span> em diversos segmentos: 
                        <span className="text-blue-400 font-semibold">tecnologia/TI</span>, <span className="text-blue-400 font-semibold">saúde / clínica odontológica</span>, 
                        <span className="text-blue-400 font-semibold">e-commerce</span> e <span className="text-blue-400 font-semibold">engenharia</span>, 
                        acumulando <span className="text-blue-400 font-semibold">mais de uma década de experiência</span> como empresário e desenvolvedor de software.
                      </p>
                    <p>
                      Minha missão é <span className="text-blue-400 font-semibold">democratizar o acesso à Inteligência Artificial</span> para empresas 
                      de todos os tamanhos, criando soluções que realmente fazem a diferença no dia a dia dos negócios.
                    </p>
                    <p>
                      Com a WildHub, combino toda minha experiência técnica e empresarial para entregar 
                      <span className="text-blue-400 font-semibold"> soluções de IA que geram resultados reais</span> e transformam 
                      a forma como as empresas se comunicam com seus clientes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Missão, Visão e Valores Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-20"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="card-feature text-center"
              >
                <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-card-title font-bold mb-4 font-space text-white">Nossa Missão</h3>
                <p className="text-body text-slate-400">
                  Capacitar empresas com automações inteligentes e softwares personalizados que geram crescimento e eficiência exponenciais.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="card-feature text-center"
              >
                <Eye className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-card-title font-bold mb-4 font-space text-white">Nossa Visão</h3>
                <p className="text-body text-slate-400">
                  Ser a força pioneira na integração de IA no ambiente corporativo, tornando a tecnologia de ponta acessível e transformadora.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
                className="card-feature text-center"
              >
                <Cpu className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-card-title font-bold mb-4 font-space text-white">Nossos Valores</h3>
                <p className="text-body text-slate-400">
                  Inovação constante, parceria com clientes, ética em dados e excelência na execução de cada projeto que assumimos.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;