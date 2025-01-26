"use client";

import { useSchedule, horariosDisponiveis } from "@/hooks/useSchedule";
import { format, isSameDay, isSameMonth, isToday } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { ScheduleModal } from "./schedulemodal";
import { useState } from "react";

export default function Agendamento() {
  const [modal, setModal] = useState<boolean>(false);

  const {
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
  } = useSchedule();

  const handleOpenModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <div className="text-white py-16">
     
     <div className="flex justify-center items-center">
              <button
                onClick={handleOpenModal}
                className={`w-[32rem] mt-6 py-3 px-4 rounded-lg font-bold transition bg-green-500 hover:bg-green-600 text-white`}
              >
                Confirmar agendamento
              </button>

     </div>
  
        <div>

      <ScheduleModal
        isOpen={modal}
        onClose={handleCloseModal}
      />
        </div>
    </div>
  );
}
