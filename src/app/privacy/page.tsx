import { ChevronDown } from 'lucide-react';
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen w-[90%] sm:w-[95%] max-w-7xl rounded-xl mx-auto flex flex-col justify-between bg-[#121212] bg-opacity-80 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-50"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/abstract-dark-twisted-tunnel-constructed-with-star-shape_1217-2603.jpg')",
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8 py-8 flex flex-col justify-center flex-grow">
        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Política de Privacidade
        </h1>

        {/* Privacy Policy Content */}
        <div className="text-gray-300 text-sm sm:text-base space-y-4">
          <p>
            A <span className="text-blue-400">ReparaTech</span> valoriza a sua privacidade e está comprometida em proteger os seus dados pessoais. Esta Política de Privacidade explica como coletamos, usamos e protegemos as suas informações.
          </p>

          <h2 className="text-blue-400 text-lg sm:text-xl font-semibold">
            1. Informações Coletadas
          </h2>
          <p>
            Podemos coletar informações pessoais, como nome, e-mail, endereço e número de telefone, quando você interage conosco, como ao agendar um serviço ou entrar em contato para suporte.
          </p>

          <h2 className="text-blue-400 text-lg sm:text-xl font-semibold">
            2. Uso das Informações
          </h2>
          <p>
            As informações coletadas são utilizadas para fornecer e melhorar nossos serviços, personalizar sua experiência, processar transações e enviar comunicações relevantes.
          </p>

          <h2 className="text-blue-400 text-lg sm:text-xl font-semibold">
            3. Compartilhamento de Dados
          </h2>
          <p>
            Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para fornecer nossos serviços (por exemplo, processamento de pagamentos) ou quando exigido por lei.
          </p>

          <h2 className="text-blue-400 text-lg sm:text-xl font-semibold">
            4. Segurança dos Dados
          </h2>
          <p>
            Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração ou destruição.
          </p>

          <h2 className="text-blue-400 text-lg sm:text-xl font-semibold">
            5. Seus Direitos
          </h2>
          <p>
            Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento. Para exercer esses direitos, entre em contato conosco através do link abaixo.
          </p>

          <h2 className="text-blue-400 text-lg sm:text-xl font-semibold">
            6. Alterações na Política
          </h2>
          <p>
            Reservamos o direito de atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre como estamos protegendo suas informações.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end">
          {/* Policy Links */}
          <div className="bg-black bg-opacity-50 rounded-t-xl sm:rounded-tr-xl p-3 sm:p-4 inline-block border-t-2 border-blue-400/60 w-full sm:w-auto">
            <div className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4">
              <Link
                href="/terms"
                className="text-gray-300 hover:text-white hover:underline text-xs sm:text-sm"
              >
                Termos de Serviço
              </Link>
              <Link
                href="/refund"
                className="text-gray-300 hover:text-white hover:underline text-xs sm:text-sm"
              >
                Política de Reembolso
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white hover:underline text-xs sm:text-sm"
              >
                Contato
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="bg-black bg-opacity-50 rounded-full p-2 mt-4 sm:mt-0 sm:mb-2 sm:mr-4 animate-bounce cursor-pointer">
            <ChevronDown className="text-white" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}