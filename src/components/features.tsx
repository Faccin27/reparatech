'use client'

import { Smartphone, Clock, PenToolIcon as Tools, Cpu } from 'lucide-react';
import { EvervaultCard } from "./ui/evervault-card";
import Phone from '@/assets/telefone.png';
import Computador from "@/assets/computador.png";
import Link from "next/link";
import Image from "next/image";
import { Button } from './ui/button';

const features = [
  {
    icon: Smartphone,
    title: "Reparo de Celular",
    description:
      "Serviço especializado para smartphones de todas as marcas. Consertamos telas, baterias, problemas de software e muito mais.",
    gridClass: "col-span-1 row-span-2",
    image: Phone,
    imageAlt: "Reparo de iPhone",
    imagePosition: "bottom",
  },
  {
    icon: Clock,
    title: "Reparo Rápido",
    description:
      "A maioria dos reparos é concluída em 24-48 horas. Não deixe seu dispositivo parado por muito tempo.",
    gridClass: "col-span-1 row-span-1",
  },
  {
    icon: Cpu,
    title: "Reparo de Computador",
    description:
      "Diagnóstico e reparos especializados para todos os problemas de computador, desde hardware até software.",
    gridClass: "col-span-1 row-span-2",
    image: Computador,
    imageAlt: "Reparo de MacBook",
    imagePosition: "top",
  },
  {
    icon: Tools,
    title: "Serviço no Local",
    description:
      "Oferecemos serviço de reparo em domicílio para sua conveniência. Nossos técnicos vão até você.",
    gridClass: "col-span-1 row-span-1",
  },
];

const scrollToSection = (sectionId: string) => {
  if (sectionId === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
};

export default function Features() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:grid-rows-2 lg:h-[600px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-black/40 overflow-hidden shadow rounded-xl hover:shadow-xl transition-shadow duration-300 ease-in-out ${feature.gridClass} hover:cursor-pointer`}
            >
              <EvervaultCard>
                <div className="flex flex-col h-full z-50">
                  {feature.image && feature.imagePosition === 'top' && (
                    <div className="flex justify-center items-center flex-grow lg:mt-20">
                      <div className="relative">
                        <Image
                          src={feature.image}
                          alt={feature.imageAlt}
                          width={300}
                          height={300}
                          className="w-full h-auto max-h-[200px] lg:max-h-none object-contain lg:object-none"
                        />
                      </div>
                    </div>
                  )}
                  <div className={`p-4 flex flex-col ${feature.imagePosition === 'top' ? 'mt-4' : ''}`}>
                    <div className="flex items-center mb-2">
                      <feature.icon
                        className="h-8 w-8 text-blue-500"
                        aria-hidden="true"
                      />
                      <h3 className="ml-3 text-xl font-semibold text-sky-500 truncate lg:normal-case">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-base text-sky-300 line-clamp-3 lg:line-clamp-none">
                      {feature.description}
                    </p>
                    <div className="z-50">
                      <p
                        onClick={() => scrollToSection("chatbot")}
                        className="text-blue-500 hover:text-blue-600 font-medium text-base"
                      >
                        Saiba mais &rarr;
                      </p>
                    </div>
                  </div>
                  {feature.image && feature.imagePosition === 'bottom' && (
                    <div className="flex justify-center items-center flex-grow mt-auto">
                      <div className="relative">
                        <Image
                          src={feature.image}
                          alt={feature.imageAlt}
                          width={350}
                          height={350}
                          className="w-full h-auto max-h-[200px] lg:max-h-none object-contain lg:object-none"
                        />
                      </div>
                    </div>
                  )}
                </div>  
              </EvervaultCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

