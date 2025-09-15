import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Zap, Link as LinkIcon, Briefcase, Clock, DollarSign, TrendingUp, Users, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const serviceList = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'Automação para WhatsApp',
      subtitle: 'Atendimento 24/7 Inteligente',
      description: 'Bots conversacionais que qualificam leads, agendam reuniões e respondem dúvidas automaticamente.',

      benefits: ['Reduz 80% do tempo de atendimento', 'Aumenta conversão em 45%', 'Disponível 24/7'],
      features: ['Qualificação automática de leads', 'Agendamento inteligente', 'Respostas contextuais', 'Integração com CRM'],
      color: 'from-blue-600 to-purple-600',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'IA com Voz para Vendas',
      subtitle: 'Assistente Virtual de Vendas',
      description: 'IA que realiza chamadas, agenda reuniões e registra informações de forma natural e eficiente.',

      benefits: ['Aumenta produtividade em 60%', 'Reduz custo por lead em 35%', 'Melhora follow-up em 70%'],
      features: ['Discador automático inteligente', 'Transcrição em tempo real', 'Análise de sentimento', 'Relatórios detalhados'],
      color: 'from-green-600 to-teal-600',
      borderColor: 'border-green-500/30'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Sistemas Inteligentes',
      subtitle: 'Soluções Sob Medida',
      description: 'Desenvolvimento de software personalizado com IA para otimizar processos específicos do seu negócio.',

      benefits: ['Otimiza processos únicos', 'ROI médio de 300%', 'Escalabilidade garantida'],
      features: ['Machine Learning personalizado', 'Análise preditiva', 'Automação de processos', 'Dashboard executivo'],
      color: 'from-purple-600 to-pink-600',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: <LinkIcon className="w-8 h-8" />,
      title: 'Integrações Avançadas',
      subtitle: 'Conecte Todos os Sistemas',
      description: 'Integrações robustas entre CRMs, ERPs e APIs para unificar dados e automatizar fluxos de trabalho.',

      benefits: ['Elimina trabalho manual', 'Dados sempre sincronizados', 'Visão unificada do negócio'],
      features: ['APIs customizadas', 'Sincronização em tempo real', 'Dashboards centralizados', 'Backup automático'],
      color: 'from-orange-600 to-red-600',
      borderColor: 'border-orange-500/30'
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: '50+', label: 'Clientes Atendidos' },
    { icon: <TrendingUp className="w-6 h-6" />, value: '300%', label: 'ROI Médio' },
    { icon: <Clock className="w-6 h-6" />, value: '24/7', label: 'Suporte Disponível' },
    { icon: <DollarSign className="w-6 h-6" />, value: '40%', label: 'Redução de Custos' }
  ];

  return (
    <>
      <Helmet>
        <title>Serviços & Soluções - Wild Hub</title>
        <meta name="description" content="Automação WhatsApp, IA para vendas, sistemas inteligentes e integrações. Aumente sua produtividade em até 60% e reduza custos em 40%." />
      </Helmet>

      <div className="page-container bg-slate-950">
        <div className="container mx-auto flex flex-col items-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-hero font-bold mb-6 font-space text-white">
              Soluções que <span className="gradient-text">Transformam</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
              Tecnologia de ponta para automatizar processos e acelerar resultados
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl">
                <div className="text-blue-400 mb-2 flex justify-center">{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
            {serviceList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${service.color} p-[1px] rounded-lg`}
              >
                <div className="bg-slate-900/90 backdrop-blur-sm rounded-lg p-4 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`p-2 bg-gradient-to-br ${service.color} rounded-lg text-white`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>
                      <p className="text-xs text-slate-400 mb-1">{service.subtitle}</p>
                      <p className="text-slate-300 text-xs leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-white mb-2">Benefícios:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, i) => (
                        <div key={i} className="flex items-center text-xs">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-slate-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-white mb-2">Funcionalidades:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center text-xs">
                          <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                          <span className="text-slate-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pt-3 border-t border-slate-800">
                    <button className="w-full flex items-center justify-center gap-1 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors py-1">
                      Saiba mais <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Pronto para Transformar seu Negócio?</h3>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Agende uma consultoria gratuita e descubra como nossas soluções podem acelerar seus resultados
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Agendar Consultoria Gratuita
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Services;
