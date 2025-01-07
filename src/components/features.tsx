import { Smartphone, Clock, PenToolIcon as Tools, Cpu } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Reparo de Celular",
    description:
      "Serviço especializado para smartphones de todas as marcas. Consertamos telas, baterias, problemas de software e muito mais.",
    gridClass: "col-span-1 row-span-2",
  },
  {
    icon: Clock,
    title: "Reparo Rápido",
    description:
      "A maioria dos reparos é concluída em 24-48 horas. Não deixe seu dispositivo parado por muito tempo.",
    gridClass: "col-span-1 row-span-1",
  },
  {
    icon: Tools,
    title: "Serviço no Local",
    description:
      "Oferecemos serviço de reparo em domicílio para sua conveniência. Nossos técnicos vão até você.",
    gridClass: "col-span-1 row-span-1",
  },
  {
    icon: Cpu,
    title: "Reparo de Computador",
    description:
      "Diagnóstico e reparos especializados para todos os problemas de computador, desde hardware até software.",
    gridClass: "col-span-1 row-span-2",
  },
];

export default function Features() {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-3 grid-rows-2 gap-6 h-[600px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-black/40 overflow-hidden shadow rounded-xl hover:shadow-xl transition-shadow duration-300 ease-in-out ${feature.gridClass}`}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <feature.icon
                    className="h-8 w-8 text-blue-500"
                    aria-hidden="true"
                  />
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-base text-gray-600 flex-grow">
                  {feature.description}
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-600 font-medium"
                  >
                    Saiba mais &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
