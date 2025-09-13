import React from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>Política de Privacidade - Wild Hub</title>
        <meta name="description" content="Política de Privacidade da Wild Hub - Como coletamos, usamos e protegemos seus dados pessoais." />
      </Helmet>
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Política de Privacidade
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 mb-6 text-lg">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">1. Informações Gerais</h2>
                <p className="text-slate-300 leading-relaxed">
                  A Wild Hub ("nós", "nosso" ou "empresa") está comprometida em proteger e respeitar sua privacidade. 
                  Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações 
                  pessoais quando você utiliza nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">2. Informações que Coletamos</h2>
                <div className="text-slate-300 leading-relaxed space-y-4">
                  <p><strong>Informações fornecidas por você:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Nome, e-mail e telefone quando você entra em contato conosco</li>
                    <li>Informações sobre sua empresa e necessidades de negócio</li>
                    <li>Mensagens e comunicações que você nos envia</li>
                  </ul>
                  
                  <p><strong>Informações coletadas automaticamente:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Endereço IP e informações do dispositivo</li>
                    <li>Dados de navegação e cookies</li>
                    <li>Páginas visitadas e tempo de permanência no site</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">3. Como Usamos suas Informações</h2>
                <div className="text-slate-300 leading-relaxed">
                  <p>Utilizamos suas informações para:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 mt-4">
                    <li>Responder às suas solicitações e fornecer suporte</li>
                    <li>Desenvolver e melhorar nossos serviços</li>
                    <li>Enviar informações relevantes sobre nossos produtos</li>
                    <li>Cumprir obrigações legais e regulamentares</li>
                    <li>Proteger nossos direitos e prevenir fraudes</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">4. Compartilhamento de Informações</h2>
                <p className="text-slate-300 leading-relaxed">
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-4 text-slate-300">
                  <li>Com seu consentimento explícito</li>
                  <li>Para cumprir obrigações legais</li>
                  <li>Com prestadores de serviços que nos auxiliam (sob acordos de confidencialidade)</li>
                  <li>Em caso de fusão, aquisição ou venda de ativos da empresa</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">5. Segurança dos Dados</h2>
                <p className="text-slate-300 leading-relaxed">
                  Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger suas 
                  informações contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui 
                  criptografia, controles de acesso e monitoramento regular de nossos sistemas.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">6. Seus Direitos</h2>
                <div className="text-slate-300 leading-relaxed">
                  <p>De acordo com a LGPD, você tem os seguintes direitos:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 mt-4">
                    <li>Confirmação da existência de tratamento de dados</li>
                    <li>Acesso aos seus dados pessoais</li>
                    <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                    <li>Anonimização, bloqueio ou eliminação de dados</li>
                    <li>Portabilidade dos dados</li>
                    <li>Eliminação dos dados tratados com consentimento</li>
                    <li>Revogação do consentimento</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">7. Cookies</h2>
                <p className="text-slate-300 leading-relaxed">
                  Utilizamos cookies para melhorar sua experiência em nosso site, analisar o tráfego e 
                  personalizar conteúdo. Você pode configurar seu navegador para recusar cookies, mas 
                  isso pode afetar algumas funcionalidades do site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">8. Retenção de Dados</h2>
                <p className="text-slate-300 leading-relaxed">
                  Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades 
                  descritas nesta política, salvo quando a retenção for exigida por lei ou para proteção de 
                  nossos direitos legítimos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">9. Alterações nesta Política</h2>
                <p className="text-slate-300 leading-relaxed">
                  Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre 
                  mudanças significativas através de nosso site ou por e-mail. Recomendamos que você 
                  revise esta política regularmente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">10. Contato</h2>
                <div className="text-slate-300 leading-relaxed">
                  <p>Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:</p>
                  <div className="mt-4 p-4 bg-slate-800 rounded-lg">
                    <p><strong>Wild Hub</strong></p>
                    <p>E-mail: atendimento@wildhub.com</p>
                    <p>WhatsApp: <a href="https://wa.me/5585920002076" className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">(85) 9 2000-2076</a></p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;