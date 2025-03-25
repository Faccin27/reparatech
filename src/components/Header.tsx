"use client";

import Link from "next/link";
import { useHeader } from "@/hooks/useHeader";
import Image from "next/image";
import Logo from '@/assets/LogoW.png'

export default function Header() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useHeader();

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="w-full fixed top-0 left-0 px-4 pt-4 z-50">
      <header className="bg-[#121212] text-white px-4 py-3 rounded-2xl shadow-lg max-w-7xl mx-auto backdrop-blur-sm bg-opacity-90">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold flex items-center gap-2">
            <Image
              src={Logo}
              alt="Logo da ReparaTech"
              width={45}
              height={45}
              className="rounded-full"
            />
            ReparaTech
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("top")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("chatbot")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Chat de Dúvidas
            </button>
            <button
              onClick={() => scrollToSection("schedule")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Agendamento
            </button>
          </nav>

          {/* Contact Button */}
          <Link
            href="https://wa.me/5549999422388"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            Fale Conosco
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 px-4 space-y-3 mt-4 border-t border-gray-800">
            <button
              onClick={() => scrollToSection("top")}
              className="block text-gray-300 hover:text-white transition-colors w-full text-left"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block text-gray-300 hover:text-white transition-colors w-full text-left"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("chatbot")}
              className="block text-gray-300 hover:text-white transition-colors w-full text-left"
            >
              Chat de Dúvidas
            </button>
            <button
              onClick={() => scrollToSection("schedule")}
              className="block text-gray-300 hover:text-white transition-colors w-full text-left"
            >
              Agendamento
            </button>
            <Link
              href="https://wa.me/5549999422388"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100 transition-colors text-center mt-4"
            >
              Fale Conosco
            </Link>
          </div>
        )}
      </header>
    </div>
  );
}
