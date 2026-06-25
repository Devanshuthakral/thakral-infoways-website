import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export const Hero = () => {
  const scrollTo = (id: string) => {
  setMobileMenuOpen(false);

  setTimeout(() => {
    const element = document.getElementById(id);

    if (!element) return;

    const y =
      element.getBoundingClientRect().top + window.scrollY - 102;

    console.log("Scroll Y:", y);

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }, 300);
};
  return (
    <section
      id="home"
      className="relative h-[calc(100vh-112px)] min-h-[520px] max-h-[640px] flex items-center justify-center overflow-hidden bg-[#2343B5] px-4 sm:px-6 lg:px-8 font-sans"
    >
      <div className="max-w-6xl mx-auto text-center w-full flex flex-col justify-center py-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
  
          
          <p className="max-w-5xl mx-auto font-bold text-white text-[38px] sm:text-[52px] md:text-[64px] lg:text-[70px] leading-[1.08] tracking-tighter">
            Your Trusted IT Solutions Partner <br className="hidden sm:inline" />
            in <span className="text-[#FFD21F] font-extrabold">Gurugram</span>
          </p>

          {/* Subtitle - Kept in one straight clean line */}
          <p className="whitespace-nowrap text-[11px] sm:text-[14px] md:text-[16px] lg:text-[19px] text-blue-100/90 max-w-full mx-auto font-medium tracking-wide leading-relaxed">
            Quality Refurbished Electronics • Reliable Computer Rentals • Expert Repair Services
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 max-w-3xl mx-auto pt-6 w-full">
            <div className="flex flex-col items-center">
              <p className="text-[#FFD21F] font-bold text-[32px] md:text-[42px] tracking-tight leading-none">
                5000+
              </p>
              <p className="text-white/90 text-[12px] md:text-[14px] mt-1.5 font-medium">
                Happy Customers
              </p> 
            </div>

            <div className="flex flex-col items-center">
              <p className="text-[#FFD21F] font-extrabold text-[32px] md:text-[42px] tracking-tight leading-none">
                98%
              </p>
              <p className="text-white/90 text-[12px] md:text-[14px] mt-1.5 font-medium">
                Satisfaction Rate
              </p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-[#FFD21F] font-extrabold text-[32px] md:text-[42px] tracking-tight leading-none">
                6
              </p>
              <p className="text-white/90 text-[12px] md:text-[14px] mt-1.5 font-medium">
                Months Warranty
              </p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-[#FFD21F] font-extrabold text-[32px] md:text-[42px] tracking-tight leading-none">
                24/7
              </p>
              <p className="text-white/90 text-[12px] md:text-[14px] mt-1.5 font-medium">
                Support Available
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4 w-full sm:w-auto">
            <button
              onClick={() => scrollTo("services")}
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#2343B5] px-8 py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all duration-150 shadow-sm"
            >
              View Services
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>

            <a
              href="https://wa.me/918950897636"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#22C55E] hover:bg-[#16A34A] text-white px-8 py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all duration-150 shadow-sm"
            >
              <Phone size={14} />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};