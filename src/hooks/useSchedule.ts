import { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
} from "date-fns";

export const horariosDisponiveis = [
  "09:00",
  "10:00",
  "11:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",  
  "18:00",
];

export function useSchedule() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      setIsModalOpen(true);
    } else {
      alert("Por favor, selecione uma data e um horário.");
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleAppointmentConfirm = (name: string, phone: string, description: string) => {
    console.log(
      "Agendamento confirmado para:",
      format(selectedDate!, "dd/MM/yyyy"),
      "às",
      selectedTime,
      "Nome:",
      name,
      "Telefone:",
      phone,
      "Descrição:",
      description
    );
    // Implement Google Calendar integration here
  };

  return {
    handleConfirm,
    handleDateSelect,
    handleNextMonth,
    handlePrevMonth,
    handleTimeSelect,
    handleModalClose,
    handleAppointmentConfirm,
    currentMonth,
    monthDays,
    selectedDate,
    selectedTime,
    isModalOpen,
  };
}

