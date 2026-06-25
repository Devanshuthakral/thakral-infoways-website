import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Select a subject',
    requirement: ''
  });

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.requirement,
      }),
    });

    const data = await response.json();

    if (data.success) {
      toast({
        title: "✅ Enquiry Sent",
        description: "We'll get back to you shortly.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "Select a subject",
        requirement: "",
      });
    } else {
      toast({
        title: "Error",
        description: data.message,
        variant: "destructive",
      });
    }
  } catch (error) {
    console.error(error);

    toast({
      title: "Error",
      description: "Failed to send enquiry.",
      variant: "destructive",
    });
  }
};

  const handleWhatsApp = () => {
    window.open('https://wa.me/918950897636?text=Hi THAKRAL INFOWAYS! I have an inquiry.', '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 102,
        behavior: 'smooth',
      });
    }
  };

  const topCardsInfo = [
    {
      icon: Phone, label: 'Phone', value: '+91 89508 97636', linkText: 'Call us for immediate assistance',
      color: '#2563EB', bg: '#EFF6FF', action: () => window.open('tel:+918950897636')
    },
    {
      icon: Mail, label: 'Email', value: 'sales@thakralinfoways.in', linkText: 'Send us your queries',
      color: '#2563EB', bg: '#EFF6FF', action: () => window.open('mailto:sales@thakralinfoways.in')
    },
    {
      icon: MapPin, label: 'Address', value: 'New Railway Rd, Gurugram, Haryana 122001', linkText: 'Visit our service center',
      color: '#2563EB', bg: '#EFF6FF', action: () => {}
    },
    {
      icon: Clock, label: 'Business Hours', value: 'Monday - Saturday \n11:00 AM - 8:00 PM', linkText: "We're here to help",
      color: '#2563EB', bg: '#EFF6FF', action: () => {}
    },
  ];

  return (
    <section id="contact" className="pt-10 pb-12 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- SECTION 1: TOP HEADER & HORIZONTAL CARDS --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Get In Touch
          </p>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to find the perfect IT solution? Contact us today and let our experts help you
          </p>

          {/* Large Centered WhatsApp Badge Button */}
          <button 
            onClick={handleWhatsApp}
            className="mt-6 inline-flex items-center gap-2.5 bg-[#22C55E] hover:bg-[#1fba57] text-white px-8 py-3.5 rounded-full text-base font-bold shadow-lg shadow-green-500/10 transition-all duration-200"
          >
            <MessageSquare size={19} className="fill-white" />
            Chat on WhatsApp
          </button>
        </motion.div>

        {/* 4 Horizontal Stacked Cards Row */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
  {topCardsInfo.map((card, idx) => (
    <div
      key={idx}
      className="bg-[#F8FAFC] rounded-2xl p-5 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
    >
      <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 bg-blue-50">
        <card.icon size={24} color="#2563EB" />
      </div>

      {/* Heading */}
      <p className="text-xl font-bold text-[#111827] mb-4">
        {card.label}
      </p>

      {/* Value */}
      <p className="text-lg text-gray-600 whitespace-pre-line leading-8">
        {card.value}
      </p>
    </div>
  ))}
</div>
          


        {/* --- SECTION 2: GRID LAYOUT (FORM vs QUICK CONTACT & MAP) --- */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-20">
          
          
         

{/* LEFT COLUMN: WHY CHOOSE + FAQ */}
<motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="lg:col-span-7 bg-white rounded-3xl border border-gray-100 shadow-sm p-8"
>
  <p className="text-3xl font-black text-[#111827] mb-3">
    Why Choose Thakral Infoways?
  </p>

  <p className="text-gray-600 mb-8 leading-7">
    Looking for the best refurbished laptops in Gurugram? At
    <span className="font-semibold text-[#2563EB]">
      {" "}Thakral Infoways
    </span>,
    we provide certified refurbished Dell, HP, Lenovo, Apple and Asus laptops
    with warranty, affordable pricing and nationwide delivery.
  </p>

  {/* Features */}

  <div className="grid md:grid-cols-2 gap-5">

    <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100">
      <p className="font-bold text-lg mb-2">
        🛡 Genuine Refurbished Laptops
      </p>
      <p className="text-gray-600 text-sm">
        Professionally tested, certified and quality checked laptops.
      </p>
    </div>

    <div className="p-5 rounded-2xl bg-green-50 border border-green-100">
      <p className="font-bold text-lg mb-2">
        💻 500+ Laptops Available
      </p>
      <p className="text-gray-600 text-sm">
        Dell, HP, Lenovo, Apple, Asus and many more brands.
      </p>
    </div>

    <div className="p-5 rounded-2xl bg-yellow-50 border border-yellow-100">
      <p className="font-bold text-lg mb-2">
        🚚 PAN India Delivery
      </p>
      <p className="text-gray-600 text-sm">
        Fast, secure and reliable shipping across India.
      </p>
    </div>

    <div className="p-5 rounded-2xl bg-purple-50 border border-purple-100">
      <p className="font-bold text-lg mb-2">
        🔧 Warranty & Support
      </p>
      <p className="text-gray-600 text-sm">
        Warranty included with expert after-sales assistance.
      </p>
    </div>

    <div className="p-5 rounded-2xl bg-red-50 border border-red-100">
      <p className="font-bold text-lg mb-2">
        💰 Best Price Guarantee
      </p>
      <p className="text-gray-600 text-sm">
        Affordable prices without compromising quality.
      </p>
    </div>

    <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-100">
      <p className="font-bold text-lg mb-2">
        ⭐ Trusted by Thousands
      </p>
      <p className="text-gray-600 text-sm">
        Serving students, professionals and businesses since years.
      </p>
    </div>

  </div>

  {/* FAQ */}

  <div className="mt-12">

    <p className="text-2xl font-black mb-6">
      Frequently Asked Questions
    </p>

    <div className="space-y-4">

      <details className="border rounded-xl p-4 cursor-pointer">
        <summary className="font-semibold">
          Do refurbished laptops come with warranty?
        </summary>
        <p className="mt-3 text-gray-600">
          Yes. Every refurbished laptop comes with warranty depending on the model.
        </p>
      </details>

      <details className="border rounded-xl p-4 cursor-pointer">
        <summary className="font-semibold">
          Can I upgrade RAM and SSD?
        </summary>
        <p className="mt-3 text-gray-600">
          Yes. We provide RAM and SSD upgrades before delivery.
        </p>
      </details>

      <details className="border rounded-xl p-4 cursor-pointer">
        <summary className="font-semibold">
          Do you provide GST Invoice?
        </summary>
        <p className="mt-3 text-gray-600">
          Yes. GST invoices are available for businesses and individuals.
        </p>
      </details>

      <details className="border rounded-xl p-4 cursor-pointer">
        <summary className="font-semibold">
          Which laptop brands are available?
        </summary>
        <p className="mt-3 text-gray-600">
          Dell, HP, Lenovo, Apple, Asus, Acer and MSI laptops are available.
        </p>
      </details>

      <details className="border rounded-xl p-4 cursor-pointer">
        <summary className="font-semibold">
          Do you deliver across India?
        </summary>
        <p className="mt-3 text-gray-600">
          Yes. We provide safe and fast delivery across India.
        </p>
      </details>

    </div>

  </div>

</motion.div>

          {/* RIGHT COLUMN: Quick Contact Action Buttons & Real Live Google Maps (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div>
              <p className="text-2xl font-black text-[#111827] mb-4">Quick Contact</p>
              
              <div className="flex flex-col gap-3">
                <button 
                  onClick={handleWhatsApp}
                  className="w-full bg-[#22C55E] hover:bg-[#1fba57] text-white py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <FaWhatsapp size={16} />
                  WhatsApp Support
                </button>
                <button 
                  onClick={() => window.open('tel:+918950897636')}
                  className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Phone size={15} />
                  Call Now
                </button>
                <button 
                  onClick={() => window.open('mailto:sales@thakralinfoways.in')}
                  className="w-full bg-[#475569] hover:bg-[#334155] text-white py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Mail size={15} />
                  Email Us
                </button>
              </div>
            </div>

            <div>
              <p className="text-2xl font-black text-[#111827] mb-4">Find Us</p>
              
              {/* ✅ Real Active Google Map Container Integration */}
              <div className="w-full h-[240px] rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative bg-[#F1F5F9]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28057.946408683572!2d76.98394775390622!3d28.4722186122667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19203228b8df%3A0xc4fe3771723ccd78!2sTHAKRAL%20Infoways%20-THE%20LAPTOP%20STORE!5e0!3m2!1sen!2sin!4v1782034900616!5m2!1sen!2sin" 
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Thakral Infoways Google Maps Location"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </motion.div>

        </div>


        {/* --- SECTION 3: BOTTOM BLUE CTA ACTION STRIP BANNER --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#2563EB] rounded-3xl p-10 md:p-14 text-white text-center shadow-xl relative overflow-hidden"
        >
          <p className="text-3xl md:text-4xl font-black mb-3 tracking-tight">
            Ready to Get Started?
          </p>
          <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto mb-8 font-normal leading-relaxed">
            Contact us today for personalized IT solutions that fit your needs and budget
          </p>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-transparent hover:bg-white/10 text-white font-bold text-sm py-3.5 px-8 rounded-full border-2 border-white transition-all duration-200 tracking-wide"
          >
            Get Free Quote
          </button>
        </motion.div>

      </div>
    </section>
  );
};