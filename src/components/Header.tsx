"use client";

import Link from "next/link";
import { useHeader } from "@/hooks/useHeader";

export default function Header() {
  const {isMobileMenuOpen, setIsMobileMenuOpen} = useHeader()
  return (
    <div className="w-full fixed top-0 left-0 px-4 pt-4 z-50">
      <header className="bg-[#121212] text-white px-4 py-3 rounded-2xl shadow-lg max-w-7xl mx-auto backdrop-blur-sm bg-opacity-90">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <span className="text-black font-bold">R</span>
            </div>
            ReparaTech
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Início
            </Link>
            <Link
              href="/chat"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Chat de Dúvidas
            </Link>
            <Link
              href="/agendamento"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Agendamento
            </Link>
            <Link
              href="/contato"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contato
            </Link>
          </nav>

          {/* Contact Button */}
          <Link
            href="/contato"
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
            <Link
              href="/"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Início
            </Link>
            <Link
              href="/chat"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Chat de Dúvidas
            </Link>
            <Link
              href="/contato"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Contato
            </Link>
            <Link
              href="/agendamento"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Agendamento
            </Link>
            <Link
              href="/contato"
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
