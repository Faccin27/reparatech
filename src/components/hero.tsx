import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-[70vh] max-w-7xl rounded-xl mx-auto flex flex-col justify-between bg-[#121212] bg-opacity-80 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-50"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/abstract-dark-twisted-tunnel-constructed-with-star-shape_1217-2603.jpg')",
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 px-4 py-8 flex flex-col justify-center flex-grow">
        {/* Minimal text above main text */}
        <p className="text-blue-400 mb-2 text-sm md:text-base">
          Your Tech Guardian
        </p>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-2xl">
          Tech Rescuers, Saving Your Devices and Your Day.
        </h1>

        {/* CTA Button */}
        <div>
          <Link
            href="/learn-more"
            className="inline-block bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold py-3 px-6 rounded-xl transition duration-300 ease-in-out"
          >
            Schedule now
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 w-full">
        <div className="flex justify-between items-end">
          {/* Policy Links */}
          <div className="bg-black bg-opacity-50 rounded-tr-xl p-4 inline-block">
            <div className="flex space-x-4">
              <Link
                href="/privacy"
                className="text-gray-300 hover:text-white hover:underline text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/refund"
                className="text-gray-300 hover:text-white hover:underline text-sm"
              >
                Refund Policy
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white hover:underline text-sm"
              >
                Contact Rescuers
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="bg-black bg-opacity-50 rounded-full p-2 mb-2 mr-4 animate-bounce cursor-pointer">
            <ChevronDown className="text-white" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
