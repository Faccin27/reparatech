"use client";

import { useSchedule, horariosDisponiveis } from "@/hooks/useSchedule";
import { format, isSameDay, isSameMonth, isToday } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

export default function Agendamento() {
  const {
    handleConfirm,
    handleDateSelect,
    handleNextMonth,
    handlePrevMonth,
    handleTimeSelect,
    currentMonth,
    monthDays,
    selectedDate,
    selectedTime,
  } = useSchedule();

  return (
    <div className="text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-8">
          Agende seu Atendimento
        </h2>
        <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Calendário - Lado Esquerdo */}
            <div className="md:w-1/2 p-6 border-r border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={handlePrevMonth}
                  className="text-gray-400 hover:text-white"
                >
                  <ChevronLeft size={24} />
                </button>
                <h3 className="text-xl font-semibold">
                  {format(currentMonth, "MMMM yyyy", { locale: ptBR })}
                </h3>
                <button
                  onClick={handleNextMonth}
                  className="text-gray-400 hover:text-white"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {["D", "S", "T", "Q", "Q", "S", "S"].map((day) => (
                  <div key={day} className="text-center font-semibold">
                    {day}
                  </div>
                ))}
                {monthDays.map((day, dayIdx) => (
                  <button
                    key={day.toString()}
                    onClick={() => handleDateSelect(day)}
                    className={`
                      p-2 rounded-full text-sm
                      ${!isSameMonth(day, currentMonth) ? "text-gray-500" : ""}
                      ${
                        isSameDay(day, selectedDate as Date)
                          ? "bg-blue-500 text-white"
                          : ""
                      }
                      ${isToday(day) ? "border border-blue-300" : ""}
                      ${
                        isSameMonth(day, currentMonth) &&
                        !isSameDay(day, selectedDate as Date)
                          ? "hover:bg-gray-700"
                          : ""
                      }
                    `}
                    disabled={!isSameMonth(day, currentMonth)}
                  >
                    {format(day, "d")}
                  </button>
                ))}
              </div>
            </div>

            {/* Seleção de horario */}
            <div className="md:w-1/2 p-6 bg-gray-700">
              <h3 className="text-xl font-semibold mb-4">Horário Disponivel</h3>
              {selectedDate ? (
                <div className="grid grid-cols-2 gap-4">
                  {horariosDisponiveis.map((time) => (
                    <button
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      className={`flex items-center justify-center p-3 rounded-lg transition-colors duration-200
                                ${
                                  selectedTime === time
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-600 text-gray-300 hover:bg-gray-500"
                                }`}
                    >
                      <Clock size={18} className="mr-2" />
                      {time}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">
                  Selecione uma data para ver os horarios disponiveis
                </p>
              )}
              <button
                onClick={handleConfirm}
                disabled={!selectedDate || !selectedTime}
                className={`w-full mt-6 py-3 px-4 rounded-lg font-bold transition duration-200 ${
                  selectedDate && selectedTime
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-gray-500 text-gray-300 cursor-not-allowed"
                }`}
              >
                Confirmar agendamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
