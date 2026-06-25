import React from 'react';
import { motion } from 'framer-motion';
import {
  Laptop,
  Monitor,
  Wrench,
  Building2,
  Phone,
  MessageCircle,
  Zap,
  CheckCircle,
} from 'lucide-react';

const services = [
  {
    icon: Laptop,
    color: '#3B82F6',
    bg: '#3B82F6',
    title: 'Refurbished Electronics',
    description:
      'High-quality refurbished laptops and desktops with comprehensive warranty',
    features: [
      '6 Months Warranty',
      'Quality Tested',
      'Affordable Pricing',
      'Latest Models',
    ],
  },
  {
    icon: Monitor,
    color: '#22C55E',
    bg: '#22C55E',
    title: 'Computer Rentals',
    description:
      'Flexible rental solutions for laptops, desktops, and accessories',
    features: [
      'Daily/Monthly Rentals',
      'Setup Included',
      'Technical Support',
      'Bulk Discounts',
    ],
  },
  {
    icon: Wrench,
    color: '#F97316',
    bg: '#F97316',
    title: 'Repair Services',
    description:
      'Expert computer repair and maintenance services',
    features: [
      'Same Day Service',
      'Free Diagnosis',
      'Genuine Parts',
      'Data Recovery',
    ],
  },
  {
    icon: Building2,
    color: '#A855F7',
    bg: '#A855F7',
    title: 'Corporate Solutions',
    description:
      'Bulk purchases and enterprise-level IT solutions',
    features: [
      'Volume Discounts',
      'Custom Configs',
      'Dedicated Support',
      'Asset Management',
    ],
  },
];

export const Services = () => {
  // WhatsApp Redirect Function (Fixed syntax inside template literal)
  const handleGetQuote = (serviceTitle) => {
    const phoneNumber = "918950897636"; 
    const message = `Hi! I'm interested in ${serviceTitle}. Can you provide more details?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="services" className="pt-8 pb-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Our Services
          </p>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to meet your personal and
            business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md min-h-[520px] flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-center mb-6">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: service.bg }}
                  >
                    <service.icon
                      size={30}
                      className="text-white"
                    />
                  </div>
                </div>

                <p className="text-xl font-bold text-center text-[#111827] mb-4">
                  {service.title}
                </p>

                <p className="text-sm text-gray-500 leading-relaxed text-center mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => handleGetQuote(service.title)}
                className="w-full mt-8 bg-gray-100 hover:bg-gray-200 rounded-xl py-2.5 text-lg font-semibold transition"
              >
                Get Quote
              </button>
            </motion.div>
          ))}
        </div>

        {/* HOW WE WORK (DITTO COPY PROCESS) */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <p className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              How We Work
            </p>

            <p className="text-lg text-slate-600">
              Our streamlined process ensures you get the best service experience
            </p>
          </div>

          {/* Added relative layout for connecting lines */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Connecting Horizontal Line for Desktop */}
            <div className="hidden lg:block absolute top-[92px] left-[12%] right-[12%] h-[1px] bg-sky-200 z-0" />

            {/* Step 1 */}
            <div className="text-center relative z-10">
              <Phone
                size={32}
                strokeWidth={2.5}
                className="mx-auto mb-5 text-[#D946EF]" 
              />

              <div className="w-11 h-11 bg-[#2563EB] text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto border-4 border-white shadow-sm">
                1
              </div>

              <p className="font-bold text-xl text-[#111827] mt-5 mb-3">
                Contact Us
              </p>

              <p className="text-gray-500 text-sm max-w-[220px] mx-auto leading-relaxed">
                Reach out via WhatsApp, phone, or email
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative z-10">
              <MessageCircle
                size={32}
                strokeWidth={2.5}
                className="mx-auto mb-5 text-[#C084FC]"
              />

              <div className="w-11 h-11 bg-[#2563EB] text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto border-4 border-white shadow-sm">
                2
              </div>

              <p className="font-bold text-xl text-[#111827] mt-5 mb-3">
                Consultation
              </p>

              <p className="text-gray-500 text-sm max-w-[220px] mx-auto leading-relaxed">
                We understand your requirements and suggest solutions
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative z-10">
              <Zap
                size={32}
                strokeWidth={2.5}
                className="mx-auto mb-5 text-[#FB923C]"
              />

              <div className="w-11 h-11 bg-[#2563EB] text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto border-4 border-white shadow-sm">
                3
              </div>

              <p className="font-bold text-xl text-[#111827] mt-5 mb-3">
                Service Delivery
              </p>

              <p className="text-gray-500 text-sm max-w-[220px] mx-auto leading-relaxed">
                Quick and professional service execution
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative z-10">
              <CheckCircle
                size={32}
                strokeWidth={2.5}
                className="mx-auto mb-5 text-[#4ADE80]"
              />

              <div className="w-11 h-11 bg-[#2563EB] text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto border-4 border-white shadow-sm">
                4
              </div>

              <p className="font-bold text-xl text-[#111827] mt-5 mb-3">
                Follow-up
              </p>

              <p className="text-gray-500 text-sm max-w-[220px] mx-auto leading-relaxed">
                Ongoing support to ensure your satisfaction
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};