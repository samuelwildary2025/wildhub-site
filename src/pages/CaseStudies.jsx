import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BarChart, ArrowRight, DollarSign, Zap, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const results = [
    {
      title: 'Redução de Custos Operacionais',
      description: 'Automatizamos processos manuais e otimizamos fluxos de trabalho na sua empresa.',
      stats: [
        { value: 'Até 40%', label: 'redução de custos' },
        { value: '24/7', label: 'operação contínua' },
        { value: '90%', label: 'menos erros manuais' },
      ],
      icon: DollarSign,
      color: 'green'
    },
    {
      title: 'Aumento da Produtividade',
      description: 'Implementamos soluções de IA que aceleram decisões e melhoram a eficiência da equipe.',
      stats: [
        { value: '+60%', label: 'velocidade de processos' },
        { value: '+35%', label: 'produtividade da equipe' },
        { value: '3x', label: 'mais dados analisados' },
      ],
      icon: Zap,
      color: 'blue'
    },
    {
      title: 'Crescimento do Faturamento',
      description: 'Criamos sistemas inteligentes que identificam oportunidades e otimizam vendas.',
      stats: [
        { value: '+25%', label: 'aumento nas vendas' },
        { value: '+50%', label: 'conversão de leads' },
        { value: '85%', label: 'satisfação do cliente' },
      ],
      icon: BarChart,
      color: 'purple'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Resultados que Entregamos - Wild Hub</title>
        <meta name="description" content="Descubra os benefícios práticos que podemos gerar para sua empresa: redução de custos, aumento da produtividade e crescimento do faturamento." />
      </Helmet>

      <div className="page-container bg-slate-950">
        <div className="container mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-hero font-bold mb-4 font-space text-white">
              Resultados que <span className="gradient-text">Entregamos</span>
            </h1>
            <p className="text-body-lg text-slate-400 max-w-2xl mx-auto">
              Veja os benefícios práticos que podemos gerar para sua empresa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {results.map((result, index) => {
              const IconComponent = result.icon;
              const colorClasses = {
                green: 'text-green-400 bg-green-400/10 border-green-400/20',
                blue: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
                purple: 'text-purple-400 bg-purple-400/10 border-purple-400/20'
              };
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 text-center"
                >
                  <div className={`w-16 h-16 ${colorClasses[result.color]} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-card-title font-bold text-white mb-3">{result.title}</h3>
                  <p className="text-body text-slate-400 mb-6">{result.description}</p>
                  <div className="space-y-3">
                    {result.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex justify-between items-center">
                        <span className="text-body text-slate-300">{stat.label}</span>
                        <span className={`font-bold ${result.color === 'green' ? 'text-green-400' : result.color === 'blue' ? 'text-blue-400' : 'text-purple-400'}`}>
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg">
              <Link to="/contato">
                Quero esses resultados na minha empresa <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
