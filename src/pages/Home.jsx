import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CalendlyButton from '@/components/CalendlyButton';
import CalendlyInline from '@/components/CalendlyInline';
import { ArrowRight, Bot, Zap, BrainCircuit, MessageSquare, Code, Database, Cloud, ChevronLeft, ChevronRight, TrendingUp, Clock, Users, Shield, Check } from 'lucide-react';
import NeuralNetworkBackground from '@/components/NeuralNetworkBackground';

const BenefitsCarousel = () => {
  const benefits = [
    { 
      name: "Atendimento 24/7", 
      icon: <Bot className="w-10 h-10" />, 
      color: "text-blue-400",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      description: "Agentes que nunca dormem"
    },
    { 
      name: "Resposta em Segundos", 
      icon: <Zap className="w-10 h-10" />, 
      color: "text-yellow-400",
      bgGradient: "from-yellow-500/20 to-orange-500/20",
      description: "Suporte eficiente sem espera"
    },
    { 
      name: "Experiências Excepcionais", 
      icon: <Users className="w-10 h-10" />, 
      color: "text-purple-400",
      bgGradient: "from-purple-500/20 to-indigo-500/20",
      description: "95% de satisfação"
    },
    { 
      name: "Sem Contratações", 
      icon: <MessageSquare className="w-10 h-10" />, 
      color: "text-emerald-400",
      bgGradient: "from-emerald-500/20 to-green-500/20",
      description: "Zero burocracia"
    },
    { 
      name: "Suporte Inteligente", 
      icon: <BrainCircuit className="w-10 h-10" />, 
      color: "text-indigo-400",
      bgGradient: "from-indigo-500/20 to-purple-500/20",
      description: "IA que aprende e evolui"
    },
    { 
      name: "Escalabilidade Total", 
      icon: <TrendingUp className="w-10 h-10" />, 
      color: "text-cyan-400",
      bgGradient: "from-cyan-500/20 to-teal-500/20",
      description: "Crescimento ilimitado"
    },
    { 
      name: "Redução de Custos", 
      icon: <Shield className="w-10 h-10" />, 
      color: "text-red-400",
      bgGradient: "from-red-500/20 to-pink-500/20",
      description: "Até 60% de economia"
    },
    { 
      name: "Integração Simples", 
      icon: <Clock className="w-10 h-10" />, 
      color: "text-orange-400",
      bgGradient: "from-orange-500/20 to-red-500/20",
      description: "Plug & Play"
    },
  ];

  // Triple the benefits for seamless infinite scroll
  const extendedBenefits = [...benefits, ...benefits, ...benefits];

  return (
    <div className="w-full overflow-hidden relative py-12">
      {/* Enhanced gradient overlays */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-slate-950/80 md:from-slate-950 via-slate-950/40 md:via-slate-950/95 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-slate-950/80 md:from-slate-950 via-slate-950/40 md:via-slate-950/95 to-transparent z-10 pointer-events-none"></div>
      
      {/* Multiple rows for better visual impact */}
      <div className="space-y-8">
        {/* First row - normal speed */}
        <div className="tech-carousel-container">
          <div className="tech-carousel-track">
            {extendedBenefits.map((benefit, index) => (
              <div 
                key={`row1-${benefit.name}-${index}`} 
                className="tech-card group cursor-pointer"
              >
                <div className={`tech-card-inner bg-gradient-to-br ${benefit.bgGradient}`}>
                  <div className="tech-card-glow"></div>
                  <div className={`tech-icon ${benefit.color}`}>
                    {benefit.icon}
                  </div>
                  <div className="tech-content">
                    <span className="tech-name">
                      {benefit.name}
                    </span>
                    <span className="tech-description">
                      {benefit.description}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second row - reverse direction, slower speed */}
        <div className="tech-carousel-container">
          <div className="tech-carousel-track-reverse">
            {extendedBenefits.slice().reverse().map((benefit, index) => (
              <div 
                key={`row2-${benefit.name}-${index}`} 
                className="tech-card group cursor-pointer"
              >
                <div className={`tech-card-inner bg-gradient-to-br ${benefit.bgGradient}`}>
                  <div className="tech-card-glow"></div>
                  <div className={`tech-icon ${benefit.color}`}>
                    {benefit.icon}
                  </div>
                  <div className="tech-content">
                    <span className="tech-name">
                      {benefit.name}
                    </span>
                    <span className="tech-description">
                      {benefit.description}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  const [isPaused, setIsPaused] = React.useState(false);

  const services = [
    {
      title: "Aumente seu Faturamento",
      subtitle: "Vendas 24/7 sem parar",
      description: "Nossa IA qualifica leads automaticamente e converte mais prospects em clientes pagantes, aumentando sua receita em até 300%.",
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      benefits: ["Qualificação automática de leads", "Vendas durante madrugada", "Conversão 3x maior"],
      gradient: "from-green-500/20 to-emerald-600/20",
      accentColor: "green-400"
    },
    {
      title: "Máxima Agilidade",
      subtitle: "Respostas em segundos",
      description: "Atendimento instantâneo que resolve 80% das dúvidas na primeira interação, eliminando filas e tempos de espera.",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      benefits: ["Resposta em menos de 3 segundos", "Resolução em primeira interação", "Zero tempo de espera"],
      gradient: "from-yellow-500/20 to-orange-600/20",
      accentColor: "yellow-400"
    },
    {
      title: "Satisfação Garantida",
      subtitle: "Clientes sempre felizes",
      description: "Atendimento consistente e personalizado que aumenta a satisfação do cliente em 95% e reduz reclamações.",
      icon: <Users className="w-8 h-8 text-blue-400" />,
      benefits: ["95% de satisfação", "Atendimento personalizado", "Redução de reclamações"],
      gradient: "from-blue-500/20 to-cyan-600/20",
      accentColor: "blue-400"
    },
    {
      title: "Disponibilidade Total",
      subtitle: "Nunca mais perca um cliente",
      description: "Atendimento 24/7 que captura oportunidades mesmo quando você dorme, garantindo que nenhum cliente seja perdido.",
      icon: <Clock className="w-8 h-8 text-purple-400" />,
      benefits: ["Atendimento 24/7", "Captura todas oportunidades", "Zero clientes perdidos"],
      gradient: "from-purple-500/20 to-pink-600/20",
      accentColor: "purple-400"
    }
  ];

  // Auto-play functionality
  React.useEffect(() => {
    if (!isAutoPlaying || isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused, services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700/50">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {services.map((service, index) => (
            <div key={index} className="w-full flex-shrink-0 p-8 md:p-12">
              <div className={`bg-gradient-to-br ${service.gradient} rounded-xl p-8 h-full border border-slate-600/30`}>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Icon and Title Section */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start mb-4">
                      <div className={`p-4 bg-slate-800/50 rounded-full border border-${service.accentColor}/30`}>
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 font-space">
                      {service.title}
                    </h3>
                    <p className={`text-lg text-${service.accentColor} font-semibold mb-4`}>
                      {service.subtitle}
                    </p>
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    {/* Benefits List */}
                    <div className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center justify-center md:justify-start">
                          <div className={`w-2 h-2 bg-${service.accentColor} rounded-full mr-3`}></div>
                          <span className="text-slate-200 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Section */}
                  <div className="flex-shrink-0 text-center">
                    <Button size="lg" className={`bg-${service.accentColor} hover:bg-${service.accentColor}/80 text-slate-900 font-bold`} asChild>
                      <Link to="/contato">
                        Começar Agora
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-full border border-slate-600/50 transition-all duration-300 group z-10"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6 text-slate-300 group-hover:text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-full border border-slate-600/50 transition-all duration-300 group z-10"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-6 space-x-3">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-blue-400 scale-125' 
                : 'bg-slate-600 hover:bg-slate-500'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Control */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-sm text-slate-400 hover:text-slate-300 transition-colors duration-300"
        >
          {isAutoPlaying ? '⏸️ Pausar rotação' : '▶️ Iniciar rotação'}
        </button>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Wild Hub - Automatizamos o futuro do seu negócio com IA</title>
        <meta name="description" content="Especialistas em Inteligência Artificial, desenvolvimento de softwares personalizados e automações para empresas. Transforme seu negócio com IA." />
      </Helmet>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center section-padding-lg relative overflow-hidden">
        <NeuralNetworkBackground className="neural-network-hero" opacity={0.4} />
        <div className="background-grid"></div>
        <div className="hero-glow"></div>
        
        <div className="container mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-hero font-bold mb-6 leading-tight font-space text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Sua empresa atendendo com <span className="text-blue-400">IA em tempo real</span>, 24h/dia
            </motion.h1>

            <motion.p
              className="text-body-lg text-slate-400 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Agentes inteligentes que atendem em segundos, oferecem suporte eficiente e criam experiências excepcionais — tudo sem complicação e sem precisar contratar.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <CalendlyButton size="lg" icon={ArrowRight}>
                Falar com especialista
              </CalendlyButton>
              
              <Button variant="ghost" size="lg" asChild>
                <Link to="/servicos">
                  Ver Soluções
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Benefits Section */}
      <section className="section-padding bg-slate-900/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-section-title font-bold mb-4 font-space text-white">
              Por que escolher nossa <span className="gradient-text">solução de IA</span>
            </h2>
            <p className="text-body-lg text-slate-400 max-w-3xl mx-auto">
              Automatizar sua comunicação com clientes não precisa ser um desafio técnico. 
              Com a WildHub, você tem uma solução completa, sem perder o toque humano.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Bot className="w-6 h-6 text-blue-400" />,
                title: "Redução de até 40% nos custos",
                description: "Redução comprovada de até 40% nos custos operacionais com automação inteligente."
              },
              {
                icon: <Zap className="w-6 h-6 text-blue-400" />,
                title: "Escalabilidade sem contratações",
                description: "Escalabilidade sem precisar contratar mais pessoas para o atendimento."
              },
              {
                icon: <BrainCircuit className="w-6 h-6 text-blue-400" />,
                title: "Respostas 100% consistentes",
                description: "Respostas 100% consistentes, sem erro humano, mantendo a qualidade do atendimento."
              },
              {
                icon: <MessageSquare className="w-6 h-6 text-blue-400" />,
                title: "IA treinada no seu negócio",
                description: "IA treinada com linguagem do seu negócio para respostas personalizadas."
              },
              {
                icon: <Database className="w-6 h-6 text-blue-400" />,
                title: "Integração total",
                description: "Integração total com CRM, ERP e canais atuais sem complicações."
              },
              {
                icon: <Cloud className="w-6 h-6 text-blue-400" />,
                title: "Segurança 100% LGPD",
                description: "Dados tratados com total responsabilidade e conformidade legal."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="card-modern card-hover"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-card-title font-semibold mb-3 text-white font-space">{benefit.title}</h3>
                <p className="text-body text-slate-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Technology Stack Section */}
      <section className="section-padding bg-slate-900/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-section-title font-bold mb-4 font-space text-white">
               Benefícios de um <span className="gradient-text">Agente IA</span> na sua empresa
             </h2>
             <p className="text-body-lg text-slate-400 max-w-3xl mx-auto">
               Transforme seu atendimento com tecnologia que reduz custos, aumenta eficiência e melhora a satisfação dos clientes. Veja como um agente IA pode revolucionar seu negócio.
             </p>
          </motion.div>
          <BenefitsCarousel />
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Market Segments Section */}
      <section className="section-padding bg-slate-900/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-section-title font-bold mb-4 font-space text-white">
              Para todos os <span className="gradient-text">negócios</span>
            </h2>
            <p className="text-body-lg text-slate-400 max-w-3xl mx-auto">
              Nossa solução se adapta perfeitamente a qualquer nicho de mercado. 
              Independente do seu segmento, nossa IA aprende as particularidades do seu negócio e melhora a experiência do seu cliente.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Saúde",
                description: "Agendamentos, consultas e acompanhamento de pacientes automatizados.",
                icon: "🏥"
              },
              {
                title: "Alimentos",
                description: "Pedidos, delivery e atendimento ao cliente otimizados.",
                icon: "🍕"
              },
              {
                title: "Farmacêutica",
                description: "Informações sobre medicamentos e atendimento especializado.",
                icon: "💊"
              },
              {
                title: "Mercado Imobiliário",
                description: "Qualificação de leads e agendamento de visitas automatizados.",
                icon: "🏠"
              },
              {
                title: "Atendimento ao Cliente",
                description: "Suporte 24/7 com respostas inteligentes e escalação automática.",
                icon: "📞"
              },
              {
                title: "E muitos outros!",
                description: "Adaptamos nossa IA para qualquer segmento de mercado.",
                icon: "🚀"
              }
            ].map((segment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="card-modern card-hover text-center"
              >
                <div className="text-4xl mb-4">{segment.icon}</div>
                <h3 className="text-card-title font-semibold mb-3 text-white font-space">{segment.title}</h3>
                <p className="text-body text-slate-400">{segment.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mt-8"
          >
            <CalendlyButton size="lg" icon={Check}>
              Falar com especialista
            </CalendlyButton>
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Features Section */}
      <section className="section-padding-lg bg-slate-950/70">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-section-title font-bold mb-4 font-space text-white">
              Soluções que <span className="gradient-text">Revolucionam</span>
            </h2>
            <p className="text-body-lg text-slate-400 max-w-3xl mx-auto">
              Desenvolvemos tecnologias de ponta que automatizam processos, 
              otimizam operações e criam experiências excepcionais para seus clientes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Bot className="w-6 h-6 text-blue-400" />,
                title: "Automação WhatsApp",
                description: "Bots inteligentes que atendem seus clientes 24/7 com respostas personalizadas e naturais."
              },
              {
                icon: <MessageSquare className="w-6 h-6 text-blue-400" />,
                title: "IA com Voz",
                description: "Assistentes virtuais com processamento de voz para vendas e atendimento humanizado."
              },
              {
                icon: <BrainCircuit className="w-6 h-6 text-blue-400" />,
                title: "Machine Learning",
                description: "Algoritmos que aprendem com seus dados para otimizar processos e prever tendências."
              },
              {
                icon: <Zap className="w-6 h-6 text-blue-400" />,
                title: "Sistemas Inteligentes",
                description: "Softwares sob demanda que integram IA para automatizar operações complexas."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="card-modern card-hover"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-card-title font-semibold mb-3 text-white font-space">{feature.title}</h3>
                <p className="text-body text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="section-padding bg-slate-900/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-section-title font-bold mb-4 font-space text-white">
              Passo a passo de <span className="gradient-text">implantação</span>
            </h2>
            <p className="text-body-lg text-slate-400 max-w-3xl mx-auto">
              Começar o seu projeto é simples e estruturado. Seguimos um processo comprovado para garantir o sucesso da implementação.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Análise Estratégica",
                description: "Mapeamos seu negócio e processos atuais. Identificamos oportunidades de automação e definimos a estratégia ideal para implementar agentes IA alinhados com sua operação."
              },
              {
                step: "02",
                title: "Implementação Personalizada",
                description: "Desenvolvemos sua solução de IA com base no diagnóstico. Integramos com seus canais existentes e treinamos o sistema com o conhecimento específico da sua empresa."
              },
              {
                step: "03",
                title: "Otimização Contínua",
                description: "Acompanhamos performance e evoluímos o sistema constantemente. Garantimos que sua IA melhore continuamente e gere resultados crescentes para o negócio."
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="card-modern card-hover relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {process.step}
                </div>
                <div className="pt-4">
                  <h3 className="text-card-title font-semibold mb-4 text-white font-space">{process.title}</h3>
                  <p className="text-body text-slate-400">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* AI vs Chatbots Comparison Section */}
      <section className="section-padding bg-slate-950/70">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-section-title font-bold mb-4 font-space text-white">
              Não é apenas mais uma tecnologia, é <span className="gradient-text">evolução</span>. É WildHub IA!
            </h2>
            <p className="text-body-lg text-slate-400 max-w-3xl mx-auto">
              Descubra por que Agentes IA superam chatbots tradicionais em todos os aspectos. 
              Comece a revolucionar o seu negócio conosco.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="card-modern border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent"
            >
              <div className="flex items-center mb-4">
                <BrainCircuit className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-white font-space">Agentes IA</h3>
              </div>
              <p className="text-sm text-blue-300 mb-4 font-semibold">Ideal para escalar vendas e atendimento com máxima eficiência</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Treinamento baseado no DNA da sua empresa e metodologia de trabalho</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Diálogos naturais que se adaptam às necessidades específicas de cada cliente</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Casos de uso: Consultores virtuais especializados, qualificação avançada de leads e vendas complexas</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="card-modern border-2 border-slate-600/30"
            >
              <div className="flex items-center mb-4">
                <Bot className="w-8 h-8 text-slate-400 mr-3" />
                <h3 className="text-xl font-bold text-white font-space">Chatbots</h3>
              </div>
              <p className="text-sm text-red-400 mb-4 font-semibold">Limitado a respostas básicas e fluxos rígidos - tecnologia do passado</p>
              <ul className="space-y-3 text-slate-500">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Respostas robóticas e limitadas que frustram clientes</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Não entende contexto nem nuances da conversa</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Casos de uso: Apenas FAQs básicos e respostas automáticas simples</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Testimonials Section */}
      <section className="section-padding bg-slate-900/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-section-title font-bold mb-4 font-space text-white">
              O que nossos <span className="gradient-text">clientes</span> dizem
            </h2>
            <p className="text-body-lg text-slate-400 max-w-3xl mx-auto">
              Empresas que já transformaram seus resultados com nossos Agentes IA
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Mendes",
                role: "CEO, TechSolutions",
                company: "Consultoria em TI",
                testimonial: "Nosso agente IA qualifica leads 24/7 e aumentou nossas vendas em 340%. O que antes levava horas, agora é resolvido em minutos.",
                result: "+340% em vendas"
              },
              {
                name: "Marina Silva",
                role: "Diretora Comercial",
                company: "EduCorp",
                testimonial: "Implementamos o agente IA em 2 semanas. Agora atendemos 10x mais leads sem aumentar a equipe. ROI foi imediato.",
                result: "10x mais leads"
              },
              {
                name: "Roberto Santos",
                role: "Fundador",
                company: "HealthTech",
                testimonial: "O agente IA entende perfeitamente nossos processos. Nossos clientes nem percebem que estão falando com IA - é impressionante!",
                result: "98% satisfação"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="card-modern card-hover relative"
              >
                <div className="absolute -top-3 -right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {testimonial.result}
                </div>
                <div className="mb-4">
                  <div className="flex text-blue-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-300 mb-4 italic">"{testimonial.testimonial}"</p>
                </div>
                <div className="border-t border-slate-700 pt-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-slate-400 text-xs">{testimonial.role}</p>
                      <p className="text-blue-400 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* CTA Section */}
      <section className="section-padding-lg">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-gradient-to-br from-blue-600/20 to-slate-950 border border-blue-500/20 rounded-2xl p-6 text-center"
          >
            <h2 className="text-section-title font-bold mb-4 font-space text-white">
              Pronto para <span className="gradient-text">revolucionar</span> seu atendimento?
            </h2>
            <p className="text-body-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Não perca mais clientes por comunicação travada. Agende uma consultoria gratuita 
              e descubra como nossa IA pode transformar seu atendimento em vantagem competitiva.
            </p>
            
            {/* Calendly Widget Inline */}
            <div className="rounded-2xl overflow-hidden max-w-3xl mx-auto">
              <CalendlyInline height="450px" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;