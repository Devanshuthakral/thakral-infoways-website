import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, HardDrive, Shield, Monitor } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: 'Dell Latitude E7450',
    brand: 'Dell',
    processor: 'Intel Core i5-5300U',
    ram: '8GB DDR3',
    storage: '256GB SSD',
    display: '14" Full HD',
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600&q=80',
    basePrice: 18999,
    badge: 'Best Seller',
    badgeColor: '#2563EB',
  },
  {
    id: 2,
    name: 'HP EliteBook 840',
    brand: 'HP',
    processor: 'Intel Core i5-6300U',
    ram: '8GB DDR4',
    storage: '256GB SSD',
    display: '14" Full HD',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80',
    basePrice: 22999,
    badge: 'Popular',
    badgeColor: '#22C55E',
  },
  {
    id: 3,
    name: 'Lenovo ThinkPad T470',
    brand: 'Lenovo',
    processor: 'Intel Core i7-7600U',
    ram: '8GB DDR4',
    storage: '512GB SSD',
    display: '14" Full HD IPS',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&q=80',
    basePrice: 25999,
    badge: 'Premium',
    badgeColor: '#8B5CF6',
  },
  {
    id: 4,
    name: 'Apple MacBook Pro',
    brand: 'Apple',
    processor: 'Apple M1 Chip',
    ram: '8GB Unified',
    storage: '256GB SSD',
    display: '13.3" Retina',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&q=80',
    basePrice: 39999,
    badge: 'Top Rated',
    badgeColor: '#F59E0B',
  },
  {
  id: 5,
  name: 'Dell Latitude 7490',
  brand: 'Dell',
  processor: 'Intel Core i7-8650U',
  ram: '16GB DDR4',
  storage: '512GB SSD',
  display: '14" Full HD',
  image: 'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=600&q=80',
  basePrice: 28999,
  badge: 'Business',
  badgeColor: '#2563EB',
},
{
  id: 6,
  name: 'HP EliteBook 850 G5',
  brand: 'HP',
  processor: 'Intel Core i7-8550U',
  ram: '16GB DDR4',
  storage: '512GB SSD',
  display: '15.6" Full HD',
  image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&q=80',
  basePrice: 31999,
  badge: 'Hot Deal',
  badgeColor: '#22C55E',
},
{
  id: 7,
  name: 'Lenovo ThinkPad X1 Carbon',
  brand: 'Lenovo',
  processor: 'Intel Core i7-8665U',
  ram: '16GB DDR4',
  storage: '512GB SSD',
  display: '14" Full HD IPS',
  image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
  basePrice: 35999,
  badge: 'Premium',
  badgeColor: '#8B5CF6',
},
{
  id: 8,
  name: 'Apple MacBook Air M1',
  brand: 'Apple',
  processor: 'Apple M1 Chip',
  ram: '8GB Unified',
  storage: '256GB SSD',
  display: '13.3" Retina',
  image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&q=80',
  basePrice: 44999,
  badge: 'Top Rated',
  badgeColor: '#F59E0B',
},
];


const ramOptions = [
  { val: 8, label: '8GB', addon: 0 },
  { val: 16, label: '16GB', addon: 3000 },
];

const storageOptions = [
  { val: 256, label: '256GB SSD', addon: 0 },
  { val: 512, label: '512GB SSD', addon: 2500 },
];

export const Products = () => {
const filteredProducts = products;
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [ram, setRam] = useState(8);
  const [storage, setStorage] = useState(256);

  

  const openModal = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setRam(8);
    setStorage(256);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  const calculatePrice = () => {
    if (!selectedProduct) return 0;
    const ramAddon = ramOptions.find(r => r.val === ram)?.addon ?? 0;
    const storageAddon = storageOptions.find(s => s.val === storage)?.addon ?? 0;
    return selectedProduct.basePrice + ramAddon + storageAddon;
  };

  const finalPrice = calculatePrice();

  const handleWhatsApp = () => {
    if (!selectedProduct) return;
    const storageLabel = storage >= 1024 ? '1TB SSD' : `${storage}GB SSD`;
    const text = `Hello Thakral Infoways,\n\nI am interested in:\n\nLaptop: ${selectedProduct.name}\n\nConfiguration:\n\nRAM: ${ram}GB\nStorage: ${storageLabel}\n\nPrice: ₹${finalPrice.toLocaleString('en-IN')}\n\nPlease share availability and details.`;
    window.open(`https://wa.me/918950897636?text=${encodeURIComponent(text)}`, '_blank');
  };

  const getQuoteWhatsApp = (product: typeof products[0]) => {
    const text = `Hello Thakral Infoways,\n\nI am interested in:\n\nLaptop: ${product.name}\n\nStarting Price: ₹${product.basePrice.toLocaleString('en-IN')}\n\nPlease share availability and details.`;
    window.open(`https://wa.me/918950897636?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="products" className="py-12 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          
          <p className="text-3xl md:text-5xl font-bold text-[#111827] inline-block relative mb-4">
            Our Products
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-[#2563EB] to-[#22C55E] rounded-full"></span>
          </p>
          <p className="text-gray-500 mt-6 text-base md:text-lg">Premium Refurbished Laptops — Tested, Certified &amp; Warranty Included</p>
        </motion.div>

       
        {/* Product Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredProducts.map(product => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-base font-bold text-[#111827] mb-3">{product.name}</p>

                  <div className="space-y-1.5 mb-4 flex-1">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Cpu size={13} className="text-[#2563EB] shrink-0" />
                      <span>{product.processor}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <HardDrive size={13} className="text-[#22C55E] shrink-0" />
                      <span>{product.ram} RAM • {product.storage}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Monitor size={13} className="text-[#8B5CF6] shrink-0" />
                      <span>{product.display}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#22C55E] font-semibold pt-1">
                      <Shield size={13} />
                      <span>6 Months Warranty Included</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-50">
                    <p className="text-xs text-gray-400 mb-1">Starting from</p>
                    <p className="text-xl font-bold text-[#2563EB] mb-3">₹{product.basePrice.toLocaleString('en-IN')}</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openModal(product)}
                        className="flex-1 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl text-sm font-semibold transition-colors"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => getQuoteWhatsApp(product)}
                        className="px-3 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl transition-colors"
                        title="Get WhatsApp Quote"
                      >
                        <FaWhatsapp size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No products found matching your search.</p>
          </div>
        )}

        {/* View All Products Button */}
<div className="flex justify-center mt-12">
  <button
    onClick={() =>
     window.open(
  `https://wa.me/918950897636?text=${encodeURIComponent(
    "Hello Thakral Infoways,\n\nPlease share your complete laptop inventory and latest price list."
  )}`,
  "_blank"
)
    }
    className="px-8 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold rounded-full shadow-lg transition-all duration-300"
  >
    View All Products
  </button>
</div>
      </div>

      {/* Product Configurator Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 backdrop-blur-md"
              style={{ background: 'rgba(0,0,0,0.6)' }}
              onClick={closeModal}
            />

            {/* Modal container — full height flex column */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.96 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              style={{ maxHeight: '85vh', width: '90%', maxWidth: '1200px' }}
              className="relative bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 z-[10001] w-9 h-9 flex items-center justify-center bg-white/90 hover:bg-gray-100 rounded-full text-gray-600 shadow-md transition-colors"
              >
                <X size={18} />
              </button>

              {/* ── Scrollable body ── */}
              <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col md:flex-row">

                  {/* LEFT — Image + product info */}
                  <div className="w-full md:w-[42%] bg-[#F8FAFC] p-6 md:p-8 flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-gray-100">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-48 md:h-56 object-cover rounded-2xl shadow-md mb-5"
                    />
                    <span
                      className="text-xs font-bold text-white px-3 py-1 rounded-full mb-3"
                      style={{ background: selectedProduct.badgeColor }}
                    >
                      {selectedProduct.badge}
                    </span>
                    <p className="text-lg md:text-xl font-bold text-[#111827] mb-4 text-center md:text-left">{selectedProduct.name}</p>
                    <div className="space-y-2 w-full">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Cpu size={14} className="text-[#2563EB] shrink-0" />
                        <span>{selectedProduct.processor}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Monitor size={14} className="text-[#8B5CF6] shrink-0" />
                        <span>{selectedProduct.display}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#22C55E]">
                        <Shield size={14} className="shrink-0" />
                        <span>6 Months Warranty Included</span>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT — Configurator */}
                  <div className="w-full md:w-[58%] p-6 md:p-8 space-y-6">
                    {/* RAM */}
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Cpu size={14} className="text-[#2563EB]" /> RAM Selection
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {ramOptions.map(opt => (
                          <button
                            key={opt.val}
                            onClick={() => setRam(opt.val)}
                            className={`p-3 rounded-xl border-2 text-center transition-all ${ram === opt.val ? 'border-[#2563EB] bg-[#EFF6FF]' : 'border-gray-200 hover:border-blue-200 bg-white'}`}
                          >
                            <div className={`font-bold text-sm ${ram === opt.val ? 'text-[#2563EB]' : 'text-[#111827]'}`}>{opt.label}</div>
                            {opt.addon > 0 && <div className="text-xs text-gray-400 mt-0.5">+₹{opt.addon.toLocaleString('en-IN')}</div>}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Storage */}
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <HardDrive size={14} className="text-[#22C55E]" /> Storage Selection
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {storageOptions.map(opt => (
                          <button
                            key={opt.val}
                            onClick={() => setStorage(opt.val)}
                            className={`p-3 rounded-xl border-2 text-center transition-all ${storage === opt.val ? 'border-[#22C55E] bg-[#F0FDF4]' : 'border-gray-200 hover:border-green-200 bg-white'}`}
                          >
                            <div className={`font-bold text-sm ${storage === opt.val ? 'text-[#22C55E]' : 'text-[#111827]'}`}>{opt.label}</div>
                            {opt.addon > 0 && <div className="text-xs text-gray-400 mt-0.5">+₹{opt.addon.toLocaleString('en-IN')}</div>}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Config summary */}
                    <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-gray-100">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Selected Configuration</p>
                      <p className="text-sm text-[#111827] font-semibold">
                        {ram}GB RAM &nbsp;•&nbsp; {storage >= 1024 ? '1TB SSD' : `${storage}GB SSD`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Sticky bottom — price + CTA ── */}
              <div
                className="shrink-0 border-t border-gray-100 bg-white px-6 py-4"
                style={{ position: 'sticky', bottom: 0 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Final Price</p>
                    <p className="text-3xl font-bold text-[#2563EB] leading-none">
                      ₹{finalPrice.toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold text-[#22C55E] flex items-center gap-1 justify-end">
                      <Shield size={12} /> 6 Months Warranty
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">Free delivery available</p>
                  </div>
                </div>
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-4 bg-[#25D366] hover:bg-[#1eb858] active:bg-[#1aad50] text-white rounded-2xl font-bold text-base transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-100"
                >
                  <FaWhatsapp size={22} />
                  Get WhatsApp Quote
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
