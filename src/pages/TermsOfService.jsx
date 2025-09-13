import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  const lastUpdated = new Date().toLocaleDateString('pt-BR');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>Termos de Serviço - Wild Hub</title>
        <meta name="description" content="Termos de Serviço da Wild Hub - Condições de uso dos nossos serviços de desenvolvimento web e tecnologia." />
        <meta name="keywords" content="termos de serviço, condições de uso, Wild Hub, desenvolvimento web" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Termos de Serviço
            </h1>
            <p className="text-xl text-slate-300">
              Condições de uso dos serviços da Wild Hub
            </p>
            <p className="text-sm text-slate-400 mt-4">
              Última atualização: {lastUpdated}
            </p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 space-y-8">
            
            {/* Seção 1: Aceitação dos Termos */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">1. Aceitação dos Termos</h2>
              <div className="text-slate-300 space-y-4">
                <p>
                  Ao acessar e utilizar os serviços da Wild Hub, você concorda em cumprir e estar vinculado a estes Termos de Serviço. Se você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços.
                </p>
                <p>
                  Estes termos se aplicam a todos os visitantes, usuários e outras pessoas que acessam ou usam o serviço.
                </p>
              </div>
            </motion.section>

            {/* Seção 2: Descrição dos Serviços */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">2. Descrição dos Serviços</h2>
              <div className="text-slate-300 space-y-4">
                <p>
                  A Wild Hub oferece serviços de desenvolvimento web, incluindo mas não limitado a:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Desenvolvimento de websites e aplicações web</li>
                  <li>Consultoria em tecnologia</li>
                  <li>Manutenção e suporte técnico</li>
                  <li>Hospedagem e infraestrutura</li>
                  <li>Otimização de performance</li>
                </ul>
              </div>
            </motion.section>

            {/* Seção 3: Responsabilidades do Cliente */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">3. Responsabilidades do Cliente</h2>
              <div className="text-slate-300 space-y-4">
                <p>Ao utilizar nossos serviços, você se compromete a:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fornecer informações precisas e atualizadas</li>
                  <li>Não utilizar os serviços para atividades ilegais ou não autorizadas</li>
                  <li>Respeitar os direitos de propriedade intelectual</li>
                  <li>Manter a confidencialidade de suas credenciais de acesso</li>
                  <li>Efetuar os pagamentos conforme acordado</li>
                </ul>
              </div>
            </motion.section>

            {/* Seção 4: Propriedade Intelectual */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">4. Propriedade Intelectual</h2>
              <div className="text-slate-300 space-y-4">
                <p>
                  O conteúdo, recursos e funcionalidades dos serviços são de propriedade da Wild Hub e são protegidos por direitos autorais, marcas registradas e outras leis de propriedade intelectual.
                </p>
                <p>
                  O cliente mantém os direitos sobre o conteúdo fornecido, enquanto a Wild Hub mantém os direitos sobre o código desenvolvido, salvo acordo específico em contrário.
                </p>
              </div>
            </motion.section>

            {/* Seção 5: Pagamentos e Reembolsos */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">5. Pagamentos e Reembolsos</h2>
              <div className="text-slate-300 space-y-4">
                <p>
                  Os preços dos serviços são estabelecidos em proposta comercial específica. Os pagamentos devem ser efetuados conforme as condições acordadas.
                </p>
                <p>
                  Reembolsos serão analisados caso a caso, considerando o estágio de desenvolvimento do projeto e os termos específicos do contrato.
                </p>
              </div>
            </motion.section>

            {/* Seção 6: Limitação de Responsabilidade */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">6. Limitação de Responsabilidade</h2>
              <div className="text-slate-300 space-y-4">
                <p>
                  A Wild Hub não será responsável por danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo perda de lucros, dados ou uso.
                </p>
                <p>
                  Nossa responsabilidade total não excederá o valor pago pelos serviços nos 12 meses anteriores ao evento que deu origem à reclamação.
                </p>
              </div>
            </motion.section>

            {/* Seção 7: Rescisão */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">7. Rescisão</h2>
              <div className="text-slate-300 space-y-4">
                <p>
                  Qualquer uma das partes pode rescindir o acordo mediante aviso prévio por escrito. A rescisão não afeta os direitos e obrigações acumulados até a data de rescisão.
                </p>
                <p>
                  A Wild Hub reserva-se o direito de suspender ou encerrar o acesso aos serviços em caso de violação destes termos.
                </p>
              </div>
            </motion.section>

            {/* Seção 8: Modificações dos Termos */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">8. Modificações dos Termos</h2>
              <div className="text-slate-300 space-y-4">
                <p>
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site.
                </p>
                <p>
                  É responsabilidade do usuário revisar periodicamente estes termos para estar ciente de quaisquer alterações.
                </p>
              </div>
            </motion.section>

            {/* Seção 9: Lei Aplicável */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">9. Lei Aplicável</h2>
              <div className="text-slate-300 space-y-4">
                <p>
                  Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais competentes do Brasil.
                </p>
              </div>
            </motion.section>

            {/* Seção 10: Contato */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">10. Contato</h2>
              <div className="text-slate-300 space-y-4">
                <p>
                  Se você tiver dúvidas sobre estes Termos de Serviço, entre em contato conosco:
                </p>
                <div className="mt-4 p-4 bg-slate-800 rounded-lg">
                  <p><strong>Wild Hub</strong></p>
                  <p>E-mail: atendimento@wildhub.com</p>
                  <p>WhatsApp: <a href="https://wa.me/5585920002076" className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">(85) 9 2000-2076</a></p>
                </div>
              </div>
            </motion.section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;