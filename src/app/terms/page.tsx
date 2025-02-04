import { ChevronDown } from 'lucide-react';
import Link from "next/link";

export default function TermsOfService() {
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
          Termos de Serviço
        </h1>

        {/* Terms Content */}
        <div className="text-gray-300 text-sm sm:text-base space-y-4">
          <p>
            Bem-vindo aos Termos de Serviço da <span className="text-blue-400">ReparaTech</span>. Ao utilizar nossos serviços, você concorda com os termos descritos abaixo. Leia atentamente antes de prosseguir.
          </p>

          <h2 className="text-blue-400 text-lg sm:text-xl font-semibold">
            1. Aceitação dos Termos
          </h2>
          <p>
            Ao acessar ou usar nossos serviços, você concorda em cumprir estes Termos de Serviço e nossa <Link href="/privacy" className="text-blue-400 hover:underline">Política de Privacidade</Link>. Se você não concordar com algum dos termos, não utilize nossos serviços.
          </p>

          <h2 className="text-blue-400 text-lg sm:text-xl font-semibold">
            2. Uso dos Serviços
          </h2>
          <p>
            Nossos serviços são destinados ao uso pessoal e não comercial. Você concorda em não utilizar nossos serviços para qualquer atividade ilegal ou não autorizada.
          </p>

          <h2 className="text-blue-400 text-lg sm:text-xl font-semibold">
            3. Modificações
          </h2>
          <p>
            Reservamos o direito de modificar estes Termos de Serviço a qualquer momento. Alterações entrarão em vigor imediatamente após a publicação. O uso contínuo dos serviços após as modificações constitui aceitação dos novos termos.
          </p>

          <h2 className="text-blue-400 text-lg sm:text-xl font-semibold">
            4. Limitação de Responsabilidade
          </h2>
          <p>
            A <span className="text-blue-400">ReparaTech</span> não será responsável por quaisquer danos diretos, indiretos, incidentais ou consequenciais resultantes do uso ou incapacidade de usar nossos serviços.
          </p>

          <h2 className="text-blue-400 text-lg sm:text-xl font-semibold">
            5. Contato
          </h2>
          <p>
            Se você tiver dúvidas sobre estes Termos de Serviço, entre em contato conosco através do link abaixo.
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
                href="/privacy"
                className="text-gray-300 hover:text-white hover:underline text-xs sm:text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-300 hover:text-white hover:underline text-xs sm:text-sm"
              >
                Refund Policy
              </Link>
              <Link
                href="https://wa.me/5549999422388"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white hover:underline text-xs sm:text-sm"
              >
                Contact Rescuers
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