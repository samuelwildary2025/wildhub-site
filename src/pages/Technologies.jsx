import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Code, Bot, BrainCircuit, Database, Cloud, Zap, MessageSquare, Wind, Link as LinkIcon, Cpu, Shield, Rocket, Target } from 'lucide-react';

const Technologies = () => {
  const techStacks = [
    {
      title: 'Inteligência Artificial',
      description: 'Tecnologias de ponta para criar soluções inteligentes',
      color: 'from-purple-500/20 to-blue-500/20',
      borderColor: 'border-purple-500/30',
      technologies: [
        { name: 'OpenAI GPT-4', description: 'IA conversacional avançada', level: 95 },
        { name: 'TensorFlow', description: 'Machine Learning robusto', level: 90 },
        { name: 'LangChain', description: 'Orquestração de LLMs', level: 88 },
        { name: 'Hugging Face', description: 'Modelos pré-treinados', level: 85 }
      ]
    },
    {
      title: 'Desenvolvimento Backend',
      description: 'Arquiteturas escaláveis e performáticas',
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30',
      technologies: [
        { name: 'Python/FastAPI', description: 'APIs rápidas e modernas', level: 95 },
        { name: 'Node.js', description: 'JavaScript no servidor', level: 90 },
        { name: 'PostgreSQL', description: 'Banco de dados robusto', level: 88 },
        { name: 'Redis', description: 'Cache e filas', level: 85 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      description: 'Infraestrutura moderna e automatizada',
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      technologies: [
        { name: 'AWS', description: 'Serviços em nuvem', level: 92 },
        { name: 'Docker', description: 'Containerização', level: 90 },
        { name: 'Kubernetes', description: 'Orquestração', level: 85 },
        { name: 'GitHub Actions', description: 'CI/CD automatizado', level: 88 }
      ]
    },
    {
      title: 'Frontend & Mobile',
      description: 'Interfaces modernas e responsivas',
      color: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-500/30',
      technologies: [
        { name: 'React/Next.js', description: 'Aplicações web modernas', level: 93 },
        { name: 'React Native', description: 'Apps mobile nativos', level: 87 },
        { name: 'TypeScript', description: 'JavaScript tipado', level: 90 },
        { name: 'Tailwind CSS', description: 'Estilização eficiente', level: 95 }
      ]
    }
  ];

  const specialties = [
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      title: 'IA Conversacional',
      description: 'Chatbots e assistentes virtuais que entendem contexto e mantêm conversas naturais',
      features: ['Processamento de linguagem natural', 'Análise de sentimento', 'Respostas contextuais'],
      color: 'purple'
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Automação de Comunicação',
      description: 'Integração com WhatsApp, Telegram, SMS e chamadas de voz automatizadas',
      features: ['WhatsApp Business API', 'Voice bots inteligentes', 'SMS marketing'],
      color: 'green'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Análise Preditiva',
      description: 'Machine Learning para prever tendências, demanda e otimizar processos',
      features: ['Previsão de demanda', 'Análise de padrões', 'Otimização automática'],
      color: 'blue'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Segurança & Compliance',
      description: 'Proteção de dados e conformidade com LGPD e regulamentações internacionais',
      features: ['Criptografia end-to-end', 'Auditoria completa', 'Backup automático'],
      color: 'red'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tecnologias & Especialidades - Wild Hub</title>
        <meta name="description" content="Stack tecnológico completo: IA conversacional, automação, análise preditiva e desenvolvimento full-stack com as melhores tecnologias do mercado." />
      </Helmet>

      <div className="page-container bg-slate-950">
        <div className="container mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-hero font-bold mb-4 font-space text-white">
              Stack <span className="gradient-text">Tecnológico</span>
            </h1>
            <p className="text-body-lg text-slate-400 max-w-2xl mx-auto">
              Tecnologias de ponta para criar soluções que realmente transformam negócios
            </p>
          </motion.div>

          {/* Tech Stacks */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
            {techStacks.map((stack, stackIndex) => (
              <motion.div
                key={stackIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: stackIndex * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${stack.color} backdrop-blur-sm border ${stack.borderColor} rounded-xl p-4`}
              >
                <h3 className="text-lg font-bold text-white mb-1">{stack.title}</h3>
                <p className="text-sm text-slate-300 mb-4">{stack.description}</p>
                <div className="space-y-3">
                  {stack.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-white">{tech.name}</span>
                        <span className="text-xs font-bold text-blue-400">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-slate-800/50 rounded-full h-1.5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          transition={{ duration: 1, delay: techIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Specialties */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-section-title font-bold font-space text-white mb-4">
              Nossas <span className="gradient-text">Especialidades</span>
            </h2>
            <p className="text-body-lg text-slate-400 max-w-2xl mx-auto">
              Áreas onde somos especialistas e entregamos resultados excepcionais
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => {
              const colorClasses = {
                purple: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
                green: 'text-green-400 bg-green-400/10 border-green-400/20',
                blue: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
                red: 'text-red-400 bg-red-400/10 border-red-400/20'
              };
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 text-center hover:border-slate-700/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 ${colorClasses[specialty.color]} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    {specialty.icon}
                  </div>
                  <h3 className="text-card-title font-bold text-white mb-3">{specialty.title}</h3>
                  <p className="text-body text-slate-400 mb-4">{specialty.description}</p>
                  <div className="space-y-2">
                    {specialty.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-slate-300">
                        <div className={`w-1.5 h-1.5 rounded-full mr-2 ${specialty.color === 'purple' ? 'bg-purple-400' : specialty.color === 'green' ? 'bg-green-400' : specialty.color === 'blue' ? 'bg-blue-400' : 'bg-red-400'}`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;