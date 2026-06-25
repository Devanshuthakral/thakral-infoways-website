import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const TopBar = () => {
  return (
    <div className="hidden md:flex justify-between items-center px-8 py-2.5 bg-[#1E3A5F] text-xs text-blue-100">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Phone size={13} className="text-blue-300" />
          <span>+91 89508 97636</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={13} className="text-blue-300" />
          <span>sales@thakralinfoways.in</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={13} className="text-green-300" />
          <span>New Railway Rd, Gurugram, Haryana</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>Quality Refurbished • Reliable Rentals • Expert Repairs</div>

      </div>
    </div>
  );
};
