"use client";
import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import Image from "next/image";
import ConfirmSVG from "@/assets/Confirm.svg";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  appointmentDate: string;
  appointmentTime: string;
}

export function ConfirmationModal({
  isOpen,
  onClose,
  appointmentDate,
  appointmentTime,
}: ConfirmationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        className="bg-zinc-800 text-white rounded-lg p-8 max-w-[600px] w-full max-h-[80vh] overflow-y-auto relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Fechar</span>
        </button>

        <div className="flex flex-col items-center justify-center space-y-6">
          <h2 className="text-3xl font-bold text-center">
            Obrigado por agendar!
          </h2>
          <Image
            src={ConfirmSVG} // O arquivo deve estar dentro da pasta "public"
            alt="Confirmação"
            className="w-[75%] h-[75%]"
          />
          <div className="text-center text-xl">
            <p className="font-semibold mb-2">Detalhes do agendamento:</p>
            <p>Data: {appointmentDate}</p>
            <p>Horário: {appointmentTime}</p>
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={onClose}
            className="w-full bg-white text-zinc-800 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
          >
            Fechar
          </button>
        </div>
      </motion.div>
    </div>
  );
}
