import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Rajesh Kumar",
    company: "Tech Solutions Pvt Ltd",
    text: "Excellent quality refurbished laptops. The entire team is professional and delivers on time. We've been buying from them for 2 years now.",
    initials: "RK",
    color: "#2563EB",
    bg: "#EFF6FF",
  },
  {
    name: "Priya Sharma",
    company: "StartUp Hub",
    text: "Their rental service helped us scale our operations without huge upfront costs. Highly recommended for startups and growing businesses!",
    initials: "PS",
    color: "#22C55E",
    bg: "#F0FDF4",
  },
  {
    name: "Amit Gupta",
    company: "Digital Agency",
    text: "Fast repair service and honest pricing. They saved our important data when others couldn't. True professionals in their field.",
    initials: "AG",
    color: "#F59E0B",
    bg: "#FFFBEB",
  },
  {
    name: "Neha Patel",
    company: "Educational Institute",
    text: "Bulk purchase for our computer lab was seamless. Great quality products with excellent after-sales support.",
    initials: "NP",
    color: "#2563EB",
    bg: "#EFF6FF",
  },
  {
    name: "Vikram Singh",
    company: "Freelance Designer",
    text: "Got a refurbished MacBook that works like new. The warranty gave me confidence and the price was unbeatable.",
    initials: "VS",
    color: "#22C55E",
    bg: "#F0FDF4",
  },
  {
    name: "Sunita Rao",
    company: "Small Business Owner",
    text: "Their corporate solutions helped us set up our entire office IT infrastructure within budget. Excellent service!",
    initials: "SR",
    color: "#F59E0B",
    bg: "#FFFBEB",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export const Reviews = () => {
  return (
    // ✅ id="reviews" rakha hai taaki NavBar ka href="#reviews" perfectly work kare
    <section id="reviews" className="pt-10 pb-12 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-4xl md:text-5xl font-bold text-[#111827] mb-4 tracking-tight">
            What Our Customers Say
          </p>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-normal">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        {/* 3-Column Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-[#F8FAFC] rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
            >
              <div>
                {/* Large Distinct Quote Icon (PCS Style Layout) */}
                <Quote size={44} className="text-blue-500 opacity-90 mb-4 stroke-[1.5]" />
                
                {/* 5 Star Rating */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={19} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-[15px] leading-relaxed mb-6 font-normal">
                  "{review.text}"
                </p>
              </div>

              {/* User Profile Footer */}
              <div className="flex items-center gap-4 mt-2 pt-4 border-t border-gray-100">
                <div
                  className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-sm"
                  style={{ background: review.color }}
                >
                  {review.initials}
                </div>
                <div>
                  <p className="text-[#111827] font-bold text-base">{review.name}</p>
                  <p className="text-sm text-gray-400 font-medium">{review.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Blue Stats Counter Bar (PCS Banner Image Style) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#2563EB] rounded-3xl p-8 md:p-10 text-white shadow-xl text-center relative overflow-hidden"
        >
          <p className="text-xl md:text-2xl font-bold mb-8 tracking-wide">
            Trusted by 5000+ Customers
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-blue-400/30">
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-1.5">98%</span>
              <span className="text-xs md:text-sm font-medium tracking-wider text-blue-100 uppercase">Satisfaction Rate</span>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-1.5">4.9/5</span>
              <span className="text-xs md:text-sm font-medium tracking-wider text-blue-100 uppercase">Average Rating</span>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-1.5">50+</span>
              <span className="text-xs md:text-sm font-medium tracking-wider text-blue-100 uppercase">Corporate Clients</span>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-1.5">6</span>
              <span className="text-xs md:text-sm font-medium tracking-wider text-blue-100 uppercase">Years Experience</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};