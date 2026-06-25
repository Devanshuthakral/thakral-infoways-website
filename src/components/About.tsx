import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Target,
  Shield,
  Users,
  Award,
  Clock,
} from "lucide-react";


export const About = () => {
  const coreValues = [
    {
      icon: Shield,
      title: "Quality Assurance",
      desc: "Every product undergoes rigorous testing to ensure reliability and performance",
    },
    {
      icon: Users,
      title: "Customer First",
      desc: "We prioritize customer satisfaction and provide personalized service",
    },
    {
      icon: Award,
      title: "Excellence",
      desc: "Committed to delivering excellence in every product and service",
    },
    {
      icon: Clock,
      title: "Reliability",
      desc: "Dependable service with timely delivery and consistent quality",
    },
  ];

  const achievements = [
    "5000+ Happy Customers",
    "98% Customer Satisfaction",
    "6 Months Warranty Standard",
    "50+ Corporate Clients",
    "Same Day Service Available",
    "ISO Quality Certified",
  ];

  return (
    <section id="about" className="bg-[#F1F5F9] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-5">
            About Thakral Infoways
          </p>

          <p className="text-lg md:text-xl leading-8 text-slate-600">
            Your trusted partner for quality refurbished electronics,
            reliable computer rentals, and expert repair services in
            Gurugram. We combine years of expertise with a commitment
            to sustainability and affordability.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-3xl font-bold text-[#0F172A] mb-6">
              Our Mission
            </p>

            <p className="text-lg leading-8 text-slate-600 mb-8">
              To make quality technology accessible to everyone by
              providing thoroughly tested refurbished electronics,
              flexible rental solutions, and expert repair services.
              We believe in extending the lifecycle of technology while
              delivering exceptional value to our customers.
            </p>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <CheckCircle
                  size={26}
                  className="text-green-500 shrink-0 mt-1"
                />

                <div>
                  <p className="text-xl font-semibold text-[#0F172A]">
                    Sustainability Focus
                  </p>

                  <p className="text-base text-slate-600 mt-1">
                    Reducing electronic waste through quality refurbishment
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle
                  size={26}
                  className="text-green-500 shrink-0 mt-1"
                />

                <div>
                  <p className="text-xl font-semibold text-[#0F172A]">
                    Affordable Technology
                  </p>

                  <p className="text-base text-slate-600 mt-1">
                    Making premium technology accessible to all budgets
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle
                  size={26}
                  className="text-green-500 shrink-0 mt-1"
                />

                <div>
                  <p className="text-xl font-semibold text-[#0F172A]">
                    Customer Satisfaction
                  </p>

                  <p className="text-base text-slate-600 mt-1">
                    Providing exceptional service and support
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-3xl p-8 md:p-10 text-white shadow-lg min-h-[340px] flex flex-col justify-center">

              <div className="w-20 h-20 rounded-full border-4 border-white/40 flex items-center justify-center mb-6">
                <Target size={38} />
              </div>

              <p className="text-3xl font-bold mb-5">
                Our Vision
              </p>

              <p className="text-lg leading-8 text-blue-100">
                To become the most trusted name in refurbished electronics
                and IT services across India, setting new standards for
                quality, sustainability, and customer satisfaction in the
                technology sector.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-14">
            <p className="text-3xl md:text-4xl font-bold text-[#0F172A]">
              Our Core Values
            </p>

            <p className="text-lg md:text-xl text-slate-600 mt-4">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 mx-auto">
                  <item.icon className="text-blue-600" size={30} />
                </div>

                <p className="text-xl font-semibold text-center text-[#0F172A] mb-4">
                  {item.title}
                </p>

                <p className="text-slate-600 text-center leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

       {/* Achievements */}
               {/* Achievements */}
<section className="pt-6 pb-16">
  <div className="text-center mb-10">
    <p className="text-4xl font-bold text-[#0F172A] mb-4">
      Our Achievements
    </p>

    <p className="text-[18px] text-slate-600">
      Numbers that reflect our commitment to excellence
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    {[
      "5000+ Happy Customers",
      "98% Customer Satisfaction",
      "6 Months Warranty Standard",
      "50+ Corporate Clients",
      "Same Day Service Available",
      "ISO Quality Certified",
    ].map((item, index) => (
      <div
  key={index}
  className="
    h-[145px]
    rounded-2xl
    bg-gradient-to-r
    from-[#4285F4]
    to-[#2554E8]
    shadow-lg
    flex
    flex-col
    items-center
    justify-center
  "
>
   <div className="mb-2">
  <svg
    width="50"
    height="50"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke="#D7E5FF"
      strokeWidth="1.7"
    />
    <path
      d="M9 12.2L11.2 14.4L16 9.6"
      stroke="#D7E5FF"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>

        <p className="text-white text-[18px] font-semibold">
          {item}
        </p>
      </div>
    ))}
  </div>
</section>
      </div>
    </section>
  );
};