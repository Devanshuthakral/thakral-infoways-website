  import React from 'react';
  import { motion } from 'framer-motion';
  import { Phone, MessageSquare, Truck, Headphones } from 'lucide-react';

  const steps = [
    {
      icon: Phone,
      title: 'Contact Us',
      description: 'Reach out via phone, WhatsApp, or our contact form',
      color: '#2563EB',
      bg: '#EFF6FF',
      num: '01',
    },
    {
      icon: MessageSquare,
      title: 'Consultation',
      description: 'Our experts understand your exact requirements',
      color: '#22C55E',
      bg: '#F0FDF4',
      num: '02',
    },
    {
      icon: Truck,
      title: 'Service Delivery',
      description: 'We deliver or setup at your location',
      color: '#F59E0B',
      bg: '#FFFBEB',
      num: '03',
    },
    {
      icon: Headphones,
      title: 'Ongoing Support',
      description: 'Continuous support and warranty coverage',
      color: '#8B5CF6',
      bg: '#F5F3FF',
      num: '04',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  export const HowItWorks = () => {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-widest mb-3">Simple Process</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#111827] inline-block relative">
              How It Works
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-[#2563EB] to-[#22C55E] rounded-full"></span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="hidden md:block absolute top-[40px] left-[12%] right-[12%] h-px bg-gray-200 border-t border-dashed border-gray-300"></div>

            <div className="grid md:grid-cols-4 gap-10 md:gap-6 relative">
              {steps.map((step, index) => (
                <motion.div key={index} variants={itemVariants} className="relative flex flex-col items-center text-center">
                  {index !== steps.length - 1 && (
                    <div className="md:hidden absolute top-[72px] bottom-[-36px] left-1/2 w-px bg-gray-200 -translate-x-1/2"></div>
                  )}

                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 relative z-10 shadow-sm border-2"
                    style={{ background: step.bg, borderColor: step.color + '30' }}
                  >
                    <step.icon size={32} color={step.color} />
                    <div
                      className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-sm"
                      style={{ background: step.color }}
                    >
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#111827] mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm max-w-[220px]">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  };
