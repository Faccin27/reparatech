import { ChevronDown } from "lucide-react";
import Link from "next/link";

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

export default function Hero() {
  return (
    <div className="relative h-[70vh] sm:h-[80vh] md:h-[70vh] w-[90%] sm:w-[95%] max-w-7xl rounded-xl mx-auto flex flex-col justify-between bg-[#121212] bg-opacity-80 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-50"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/abstract-dark-twisted-tunnel-constructed-with-star-shape_1217-2603.jpg')",
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8 py-8 flex flex-col justify-center flex-grow">
        {/* Minimal text above main text */}
        <p className="text-blue-400 mb-2 text-sm md:text-base font-semibold">
          Seu aliado na tecnologia
        </p>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl">
          Salvamos seus dispositivos e o seu dia com a ReparaTech.
        </h1>

        {/* CTA Button */}
        <div>
          <button
          onClick={() => scrollToSection("schedule")}
            className="inline-block bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-xl transition duration-300 ease-in-out text-sm sm:text-base"
          >
            Agende agora
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end">
          {/* Policy Links */}
          <div className="bg-black bg-opacity-50 rounded-t-xl sm:rounded-tr-xl p-3 sm:p-4 inline-block border-t-2 border-blue-400/60 w-full sm:w-auto">
            <div className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4">
              <a
              
                href="/privacy"
                className="text-gray-300 hover:text-white hover:underline text-xs sm:text-sm"
                
              >
                Privacy Policy
              </a>
              <Link
                href="/terms"
                className="text-gray-300 hover:text-white hover:underline text-xs sm:text-sm"
              >
                Refund Policy
              </Link>
              <Link
                href="https://wa.me/5549999422388"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white hover:underline text-xs sm:text-sm"
              >
                Contact Rescuers
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="bg-black bg-opacity-50 rounded-full p-2 mt-4 sm:mt-0 sm:mb-2 sm:mr-4 animate-bounce cursor-pointer">
            <ChevronDown className="text-white" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
