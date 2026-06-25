import React, { useState, useEffect } from 'react';
import { Laptop, MessageCircle, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Products', id: 'products' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'contact' },
  ];

  // Scroll depth monitor for glassmorphism background effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Fixed Intersection Observer Configuration for Perfect Highlights
  // useEffect(() => {
  //   const sectionIds = navLinks.map(l => l.id);
  //   const observers: IntersectionObserver[] = [];

  //   sectionIds.forEach(id => {
  //     const el = document.getElementById(id);
  //     if (!el) return;
      
  //     const observer = new IntersectionObserver(
  //       ([entry]) => {
  //         // thoda sa bhi enter karte hi section detect ho jayega
  //         if (entry.isIntersecting) {
  //           setActiveSection(id);
  //         }
  //       },
  //       { 
  //         // Re-mapped standard bounding area taaki bottom elements skip na ho
  //         rootMargin: '-20% 0px -40% 0px', 
  //         threshold: 0.1 
  //       }
  //     );
  //     observer.observe(el);
  //     observers.push(observer);
  //   });

  //   return () => observers.forEach(o => o.disconnect());
  // }, []);

const scrollTo = (id: string) => {
  const element = document.getElementById(id);

  if (!element) return;

  // Mobile menu close karo
  setMobileMenuOpen(false);

  // Menu animation complete hone do
  setTimeout(() => {
    window.scrollTo({
      top: element.offsetTop - 102,
      behavior: "smooth",
    });

    setActiveSection(id);
  }, 350);
};

  return (
    <nav
      className={`transition-all duration-300 w-full ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100' 
          : 'bg-white border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 py-3">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
            <div className="w-10 h-10 rounded-xl bg-[#2563EB] flex items-center justify-center shadow-md shadow-blue-500/10">
              <Laptop className="text-white" size={20} />
            </div>
            <div className="flex flex-col leading-none">
              <p className="font-black text-xl text-[#2563EB] tracking-wider">THAKRAL</p>
              <p className="font-bold text-[10px] text-[#22C55E] tracking-[0.2em] mt-0.5">INFOWAYS</p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.id)}
                  className="relative px-4 py-2 text-sm font-semibold transition-colors group"
                  style={{ color: isActive ? '#2563EB' : '#4B5563' }}
                >
                  {link.name}
                  
                  {/* Active Indicator Bar */}
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-[#2563EB] transition-all duration-300"
                    style={{ width: isActive ? '75%' : '0%' }}
                  />
                  
                  {/* Hover Indicator Bar */}
                  {!isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 rounded-full bg-[#2563EB]/40 transition-all duration-300 group-hover:w-[75%]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* WhatsApp Action Button */}
          <div className="hidden md:flex">
            <a
              href="https://wa.me/918950897636"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#22C55E] hover:bg-[#1fba57] text-white px-5 py-2.5 rounded-full font-bold text-sm transition-colors shadow-md shadow-green-500/10"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 p-1 focus:outline-none">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu Panel Layer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.id)}
                    className={`text-left text-base font-bold py-3 border-b border-gray-50 flex items-center gap-2 transition-colors ${
                      isActive ? 'text-[#2563EB]' : 'text-gray-700 hover:text-[#2563EB]'
                    }`}
                  >
                    {isActive && <span className="w-1.5 h-4 rounded-full bg-[#2563EB] shrink-0" />}
                    {link.name}
                  </button>
                );
              })}
              <a
                href="https://wa.me/918950897636"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#22C55E] text-white px-5 py-3 rounded-full font-bold mt-4 shadow-md shadow-green-500/10"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};