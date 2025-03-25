"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import { ConfirmationModal } from "@/components/ScheduleConfirmModal"
import emailjs from "emailjs-com"

interface ScheduleModalProps {
  isOpen: boolean
  onClose: () => void
  selectedDate: Date
  selectedTime: string
}

interface InputFieldProps {
  label: string
  id: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  type?: "text" | "tel" | "textarea"
  required?: boolean
}

const InputField: React.FC<InputFieldProps> = ({ label, id, value, onChange, type = "text", required = false }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
      {label}
    </label>
    {type === "textarea" ? (
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

export function ScheduleModal({ isOpen, onClose, selectedDate, selectedTime }: ScheduleModalProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [description, setDescription] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID

    if (!serviceId || !templateId || !userId) {
      console.error("EmailJS configuration is missing!")
      setIsSubmitting(false)
      return
    }

    emailjs.init(userId)

    const templateParams = {
      name: name,
      email: phone, 
      subject: "Agendamento de Serviço",
      message: `
        Nome: ${name}
        Telefone: ${phone}
        Data: ${selectedDate.toLocaleDateString()}
        Horário: ${selectedTime}
        Descrição: ${description}
      `
    }

    try {
      const response = await emailjs.send(
        serviceId, 
        templateId, 
        templateParams
      )

      console.log("Email enviado com sucesso!", response)

      setIsSubmitting(false)
      setIsConfirmationModalOpen(true)

      setName("")
      setPhone("")
      setDescription("")
    } catch (error) {
      console.error("Falha no envio do email:", error)
      setIsSubmitting(false)
    }
  }

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
        <div className="mb-4 text-gray-300">
          <p>Data: {selectedDate.toLocaleDateString()}</p>
          <p>Horário: {selectedTime}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <InputField label="Nome" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
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
          <button
            type="submit"
            className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-200 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Agendar"}
          </button>
        </form>
        <ConfirmationModal
          isOpen={isConfirmationModalOpen}
          onClose={() => {
            setIsConfirmationModalOpen(false)
            onClose()
          }}
          appointmentDate={selectedDate.toLocaleDateString()}
          appointmentTime={selectedTime}
        />
      </motion.div>
    </div>
  )
}