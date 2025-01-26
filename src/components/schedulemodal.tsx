'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

interface ScheduleModalProps {
  isOpen: boolean
  onClose: () => void
}

interface InputFieldProps {
  label: string
  id: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  type?: 'text' | 'tel' | 'textarea' | 'date'
  required?: boolean
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  value,
  onChange,
  type = 'text',
  required = false,
}) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={3}
        required={required}
      ></textarea>
    ) : (
      <input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required={required}
      />
    )}
  </div>
)

export function ScheduleModal({ isOpen, onClose }: ScheduleModalProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [description, setDescription] = useState('')
  const [datetime, setDatetime] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleDateTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatetime(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
  
    try {
      const tokenParam = new URLSearchParams(window.location.search).get("token");
      const token = tokenParam ? JSON.parse(tokenParam.replace(/n"/g, "")) : null;
  
      if (!datetime) {
        throw new Error("Data ou horário não selecionado.");
      }
  
      const startDateTime = new Date(datetime);
      if (isNaN(startDateTime.getTime())) {
        throw new Error("Valor de data ou hora inválido.");
      }
  
      const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000);
  
      const response = await fetch("http://localhost:7865/auth/create-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          summary: `Cliente (${name})`,
          description: `Telefone para contato: ${phone}, resto: ${description}`,
          startDateTime: startDateTime.toISOString(),
          endDateTime: endDateTime.toISOString(),
          token: token.accessToken,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log("Evento criado com sucesso:", data);
  
      setTimeout(() => {
        setIsSubmitting(false);
        onClose();
      }, 1000);
    } catch (error: any) {
      console.error("Erro ao criar evento:", error.message);
      setErrorMessage(
        error.message === "Data ou horário não selecionado."
          ? "Por favor, selecione uma data e horário válidos."
          : "Erro ao criar evento. Verifique as informações e tente novamente."
      );
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        className="bg-gray-800 p-8 rounded-lg w-full max-w-md relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          aria-label="Fechar modal"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-white">Confirmar Agendamento</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="datetime-input" className="block text-sm font-medium text-gray-300 mb-1">
              Data e Hora
            </label>
            <input
              type="datetime-local"
              id="datetime-input"
              value={datetime}
              onChange={handleDateTimeChange}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {datetime && (
              <p className="text-sm text-gray-600 mt-1">
                Selecionado: {new Date(datetime).toLocaleString()}
              </p>
            )}
          </div>
          <InputField
            label="Nome"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <InputField
            label="Telefone para contato"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            required
          />
          <InputField
            label="Descrição do serviço"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="textarea"
            required
          />
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}
          <button
            type="submit"
            className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-200 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Agendar'}
          </button>
        </form>
      </motion.div>
    </div>
  )
}