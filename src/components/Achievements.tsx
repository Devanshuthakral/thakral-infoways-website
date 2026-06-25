import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, TrendingUp, Building2, Clock, Shield } from 'lucide-react';

const achievements = [
  { icon: Users, value: 5000, suffix: '+', label: 'Happy Customers', color: '#2563EB', bg: '#EFF6FF' },
  { icon: TrendingUp, value: 98, suffix: '%', label: 'Satisfaction Rate', color: '#22C55E', bg: '#F0FDF4' },
  { icon: Building2, value: 50, suffix: '+', label: 'Corporate Clients', color: '#8B5CF6', bg: '#F5F3FF' },
  { icon: Clock, value: 24, suffix: '/7', label: 'Support Available', color: '#F59E0B', bg: '#FFFBEB' },
  { icon: Shield, value: 6, suffix: 'M', label: 'Warranty Period', color: '#EF4444', bg: '#FEF2F2' },
];

const Counter = ({ from = 0, to, duration = 2, inView }: { from?: number; to: number; duration?: number; inView: boolean }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    let animationFrame: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * (to - from) + from));
      if (progress < 1) animationFrame = window.requestAnimationFrame(step);
    };
    animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [from, to, duration, inView]);

  return <span>{count}</span>;
};

export const Achievements = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-16"
        >
          <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-widest mb-3">By The Numbers</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111827] inline-block relative">
            Our Achievements
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-[#2563EB] to-[#22C55E] rounded-full"></span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6"
        >
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all ${i === achievements.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ background: item.bg }}
              >
                <item.icon size={24} color={item.color} />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: item.color }}>
                <Counter to={item.value} inView={isInView} />
                {item.suffix}
              </div>
              <div className="text-xs md:text-sm text-gray-500 font-medium">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
