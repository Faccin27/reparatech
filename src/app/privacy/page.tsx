'use client'
import { ChevronDown } from 'lucide-react';
import Link from "next/link";
import { useState } from 'react';
import { Globe } from 'lucide-react';

interface Section {
  title: string;
  content: string;
}

interface Sections {
  informationCollected: Section;
  informationUse: Section;
  dataSharing: Section;
  dataSecurity: Section;
  yourRights: Section;
  policyChanges: Section;
}

interface Footer {
  privacy: string;
  refund: string;
  contact: string;
}

interface LanguageContent {
  title: string;
  company: string;
  intro: string;
  sections: Sections;
  footer: Footer;
}

interface Content {
  en: LanguageContent;
  pt: LanguageContent;
}

const content: Content = {
  en: {
    title: "Privacy Policy",
    company: "ReparaTech",
    intro: "ReparaTech values your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your information.",
    sections: {
      informationCollected: {
        title: "1. Information Collected",
        content: "We may collect personal information such as name, email, address, and phone number when you interact with us, such as when scheduling a service or contacting us for support."
      },
      informationUse: {
        title: "2. Use of Information",
        content: "The collected information is used to provide and improve our services, personalize your experience, process transactions, and send relevant communications."
      },
      dataSharing: {
        title: "3. Data Sharing",
        content: "We do not share your personal information with third parties except when necessary to provide our services (e.g., payment processing) or when required by law."
      },
      dataSecurity: {
        title: "4. Data Security",
        content: "We implement technical and organizational security measures to protect your information against unauthorized access, alteration, or destruction."
      },
      yourRights: {
        title: "5. Your Rights",
        content: "You have the right to access, correct, or delete your personal information at any time. To exercise these rights, please contact us through the link below."
      },
      policyChanges: {
        title: "6. Policy Changes",
        content: "We reserve the right to update this Privacy Policy periodically. We recommend that you review this page regularly to stay informed about how we are protecting your information."
      }
    },
    footer: {
      privacy: "Privacy Policy",
      refund: "Refund Policy",
      contact: "Contact Rescuers"
    }
  },
  pt: {
    title: "Política de Privacidade",
    company: "ReparaTech",
    intro: "A ReparaTech valoriza a sua privacidade e está comprometida em proteger os seus dados pessoais. Esta Política de Privacidade explica como coletamos, usamos e protegemos as suas informações.",
    sections: {
      informationCollected: {
        title: "1. Informações Coletadas",
        content: "Podemos coletar informações pessoais, como nome, e-mail, endereço e número de telefone, quando você interage conosco, como ao agendar um serviço ou entrar em contato para suporte."
      },
      informationUse: {
        title: "2. Uso das Informações",
        content: "As informações coletadas são utilizadas para fornecer e melhorar nossos serviços, personalizar sua experiência, processar transações e enviar comunicações relevantes."
      },
      dataSharing: {
        title: "3. Compartilhamento de Dados",
        content: "Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para fornecer nossos serviços (por exemplo, processamento de pagamentos) ou quando exigido por lei."
      },
      dataSecurity: {
        title: "4. Segurança dos Dados",
        content: "Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração ou destruição."
      },
      yourRights: {
        title: "5. Seus Direitos",
        content: "Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento. Para exercer esses direitos, entre em contato conosco através do link abaixo."
      },
      policyChanges: {
        title: "6. Alterações na Política",
        content: "Reservamos o direito de atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre como estamos protegemos suas informações."
      }
    },
    footer: {
      privacy: "Política de Privacidade",
      refund: "Política de Reembolso",
      contact: "Contatar Resgatadores"
    }
  }
};

export default function PrivacyPolicy() {
  const [language, setLanguage] = useState<'en' | 'pt'>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  const t = content[language];

  return (
    <div className="relative min-h-screen w-[90%] sm:w-[95%] max-w-7xl rounded-xl mx-auto flex flex-col justify-between bg-[#121212] bg-opacity-80 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-50"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/abstract-dark-twisted-tunnel-constructed-with-star-shape_1217-2603.jpg')",
        }}
      ></div>

      {/* Language Selector */}
      <div className="relative z-10 flex justify-end ">
        <button
          onClick={toggleLanguage}
          className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Globe size={20} />
          <span>{language === 'en' ? 'PT' : 'EN'}</span>
        </button>
      </div>

      {/* Content Container */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8 py-8 flex flex-col justify-center flex-grow">
        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          {t.title}
        </h1>

        {/* Privacy Policy Content */}
        <div className="text-gray-300 text-sm sm:text-base space-y-4">
          <p>
            {t.intro}
          </p>

          {Object.values(t.sections).map((section, index) => (
            <div key={index}>
              <h2 className="text-blue-400 text-lg sm:text-xl font-semibold">
                {section.title}
              </h2>
              <p>{section.content}</p>
            </div>
          ))}
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
                {t.footer.privacy}
              </Link>
              <Link
                href="/terms"
                className="text-gray-300 hover:text-white hover:underline text-xs sm:text-sm"
              >
                {t.footer.refund}
              </Link>
              <Link
                href="https://wa.me/5549999422388"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white hover:underline text-xs sm:text-sm"
              >
                {t.footer.contact}
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