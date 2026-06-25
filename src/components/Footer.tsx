import React from 'react';
import { Laptop } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1E3A5F] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#2563EB] flex items-center justify-center">
                <Laptop className="text-white" size={20} />
              </div>
              <div className="flex flex-col leading-none">
                <p className="font-bold text-xl text-white tracking-wider">THAKRAL</p>
                <p className="font-medium text-xs text-[#22C55E] tracking-widest">INFOWAYS</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
             Your trusted partner for refurbished laptops, laptop rentals, laptop repairs, accessories, and complete IT solutions across Gurgaon & Delhi NCR.
            </p>
            <div className="flex items-center gap-3 mb-6">
              {[
                { icon: FaFacebook, hover: '#1877F2' },
                { icon: FaInstagram, hover: '#E1306C' },
                { icon: FaLinkedin, hover: '#0A66C2' },
                { icon: FaYoutube, hover: '#FF0000' },
              ].map(({ icon: Icon, hover }, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-blue-200 hover:text-white hover:bg-white/20 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <a
              href="https://wa.me/918950897636"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-full font-medium transition-colors text-sm shadow-md"
            >
              <FaWhatsapp size={16} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Services */}
          <div>
            <p className="text-white font-bold text-base mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#22C55E] rounded-full"></span>
            </p>
            <ul className="space-y-3">
              {['Refurbished Laptops', 'Computer Rentals', 'Repair Services', 'Corporate Solutions', 'Laptop Upgrades', 'AMC Services'].map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo('services')}
                    className="text-blue-200 hover:text-white transition-colors text-sm text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white font-bold text-base mb-6 relative inline-block">
              Company
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#2563EB] rounded-full"></span>
            </p>
            <ul className="space-y-3">
              {[
                { label: 'About Us', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Products', id: 'products' },
                { label: 'Reviews', id: 'reviews' },
                { label: 'Contact', id: 'contact' },
              ].map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-blue-200 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-bold text-base mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#F59E0B] rounded-full"></span>
            </p>
            <ul className="space-y-4">
              <li className="text-blue-200 text-sm leading-relaxed">
                <strong className="block text-white mb-0.5">Address</strong>
                Sector 7 Extension, Krishna Colony,<br />Gurugram, Haryana 122001
              </li>
              <li className="text-blue-200 text-sm">
                <strong className="block text-white mb-0.5">Phone</strong>
                +91 89508897636
              </li>
              <li className="text-blue-200 text-sm">
                <strong className="block text-white mb-0.5">Email</strong>
                info@thakralinfoways.com
              </li>
              <li className="text-blue-200 text-sm">
                <strong className="block text-white mb-0.5">Hours</strong>
                Mon–Sat: 9 AM – 7 PM<br />Sunday: 10 AM – 5 PM
              </li>
            </ul>
            <a
              href="https://wa.me/918950897636"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:text-white px-4 py-2 rounded-full font-medium transition-all text-sm"
            >
              <FaWhatsapp size={16} />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-blue-300 text-sm">© 2025 THAKRAL INFOWAYS. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
