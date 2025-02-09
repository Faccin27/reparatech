"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import Cookies from "js-cookie"
import { ConfirmationModal } from "@/components/ScheduleConfirmModal"

interface ScheduleModalProps {
  isOpen: boolean
  onClose: () => void
  selectedDate: Date
  selectedTime: string
  onScheduleComplete?: (response: ScheduleResponse) => void
}
interface InputFieldProps {
  label: string
  id: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  type?: "text" | "tel" | "textarea"
  required?: boolean
}

export interface ScheduleResponse {
  success: boolean
  data?: any
  error?: any
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

export function ScheduleModal({ isOpen, onClose, selectedDate, selectedTime, onScheduleComplete }: ScheduleModalProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [description, setDescription] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [scheduleResponse, setScheduleResponse] = useState<ScheduleResponse | null>(null)
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false)

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === "https://reparatech.shop" && event.data?.type === "AUTH_SUCCESS") {
        // Salva o token nos cookies com expiração de 1 hora
        Cookies.set("auth_token", event.data.token, { expires: 1 / 24 })

        // Se já estava tentando enviar, tenta novamente com o novo token
        if (isSubmitting) {
          handleSubmit(new Event("submit") as any)
        }
      }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [isSubmitting])

  const redirectToAuth = () => {
    window.open(
      "https://reparatech.shop/auth/google",
      "auth",
      "width=500,height=600,left=200,top=200",
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")
    setScheduleResponse(null)

    try {
      // Tenta pegar o token dos cookies
      const token = Cookies.get("auth_token")

      if (!token) {
        redirectToAuth()
        return
      }

      const [hours, minutes] = selectedTime.split(":")
      const startDateTime = new Date(selectedDate)
      startDateTime.toDateString()
      startDateTime.setHours(Number.parseInt(hours), Number.parseInt(minutes), 0)

      if (isNaN(startDateTime.getTime())) {
        throw new Error("Valor de data ou hora inválido.")
      }

      const endDateTime = new Date(startDateTime.getTime() + 2 * 60 * 60 * 1000)

      const response = await fetch("https://reparatech.shop/auth/create-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          summary: `Cliente (${name})`,
          description: `Telefone para contato: ${phone}, resto: ${description}`,
          startDateTime: startDateTime.toISOString(),
          endDateTime: endDateTime.toISOString(),
          token: token,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        const scheduleResult: ScheduleResponse = {
          success: true,
          data: data,
        }

        setScheduleResponse(scheduleResult)
        onScheduleComplete?.(scheduleResult)

        setIsConfirmationModalOpen(true) // Open the confirmation modal
        setIsSubmitting(false)
      } else {
        const data = await response.json()
        if (response.status === 401) {
          // Se o token expirou, remove dos cookies e redireciona para auth
          Cookies.remove("auth_token")
          redirectToAuth()
          return
        }
        const errorResult: ScheduleResponse = {
          success: false,
          error: data?.message || `Erro ${response.status}: ${response.statusText}`,
        }

        setScheduleResponse(errorResult)
        onScheduleComplete?.(errorResult)

        setErrorMessage(errorResult.error)
        setIsSubmitting(false)
      }
    } catch (error: any) {
      console.error("Erro ao criar evento:", error.message)

      const errorResult: ScheduleResponse = {
        success: false,
        error: error.message,
      }

      setScheduleResponse(errorResult)
      onScheduleComplete?.(errorResult)

      setErrorMessage(errorResult.error)
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
          {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
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

