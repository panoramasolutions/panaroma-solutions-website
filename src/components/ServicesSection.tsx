import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import services1 from '../assets/services/services1.svg';
import services2 from '../assets/services/services2.svg';
import services3 from '../assets/services/services3.svg';
import services4 from '../assets/services/services4.svg';
import services5 from '../assets/services/services5.svg';
import services6 from '../assets/services/services6.svg';
import services7 from '../assets/services/services7.svg';
import services8 from '../assets/services/services8.svg';
import services9 from '../assets/services/services9.svg';

import { motion } from 'framer-motion';

export default function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Process Automation & Optimization",
      description: "Streamline workflows, reduce manual tasks, and improve operational efficiency with intelligent process automation. Our solutions help businesses save time, cut costs, and boost productivity across departments.",
      image: services1
    },
    {
      title: "Custom Application Development",
      description: "Building robust applications tailored to your specific needs using modern frameworks and cutting-edge technologies.",
      image: services4
    },
    {
      title: "AI & Data Driven Solutions",
      description: "Unlock the power of your data with AI, machine learning, and predictive analytics. We help businesses make informed decisions, enhance customer experiences, and gain a competitive edge.",
      image: services6
    },
    {
      title: "Website Design & Development",
      description: "Create modern, responsive, and high-performance websites that reflect your brand identity and engage your audience. From corporate websites to eCommerce platforms, we deliver designs that convert.",
      image: services9
    },
    {
      title: "Digital Branding",
      description: "Build a strong online presence with our end-to-end digital branding services, including logo design, brand strategy, and digital marketing campaigns that resonate with your target audience.",
      image: services7
    },
    {
      title: "Cloud & Infrastructure Consulting",
      description: "Get expert guidance on IT strategy, digital transformation, technology adoption and manage secure cloud environments tailored to your business. We optimize IT infrastructure for scalability, reliability, and cost efficiency.",
      image: services8
    },
    {
      title: "IT Outsourcing",
      description: "Access a dedicated team of IT experts without the overhead. We offer reliable, cost-effective outsourcing services to manage your technology operations and projects end-to-end.",
      image: services2
    },
    {
      title: "Cybersecurity & Compliance Services",
      description: "Safeguard your business from cyber threats with robust security strategies and compliance solutions. We provide threat monitoring, risk assessments, and regulatory compliance support.",
      image: services3
    },
    {
      title: "Training & Enablement",
      description: "Empower your teams with the skills they need to maximize technology adoption. We provide customized training programs that ensure your workforce can fully leverage modern tools and solutions.",
      image: services5
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00EEFF] opacity-20 blur-[150px] rounded-full" />
      </div>
      <div className="container-fluid mx-auto px-6">
        <h2 className="text-center mb-12 md:mb-20 text-4xl md:text-section-heading leading-section-heading font-medium bg-gradient-to-t from-[#A8A8A8] to-white bg-clip-text text-transparent">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-24 md:gap-y-16 max-w-[1300px] mx-auto">
          {services.map((service, index) => {
            const isCenter = index % 3 === 1;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: isCenter ? 150 : 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: isCenter ? 1.8 : 1.5,
                  delay: Math.floor(index / 3) * 0.1,
                  ease: "linear"
                }}
                className={`rounded-xl bg-[#131217] overflow-hidden group border border-[#2A2A2A] hover:border-t-white hover:border-l-white hover:border-r-[#00EEFF] hover:border-b-[#00EEFF] hover:shadow-[10px_10px_30px_-10px_rgba(0,238,255,0.4)] transition-shadow duration-1000 flex flex-col z-1 ${expandedIndex === index ? 'h-auto' : 'h-auto md:h-[350px]'} mx-4 md:mx-0`}
                onClick={() => toggleExpand(index)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4 cursor-pointer md:cursor-default">
                    <h3 className="text-[19px] font-extrabold text-secondary-gray-color leading-tight flex-1 transition-all duration-700 group-hover:tracking-[0.1px] group-hover:scale-x-102 origin-left">
                      {service.title}
                    </h3>
                    {/* Desktop Arrow */}
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="hidden md:block flex-shrink-0 ml-2">
                      <path d="M2.6626 6.38989H10.1175" stroke="white" strokeWidth="1.59747" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.39001 2.66235L10.1174 6.38979L6.39001 10.1172" stroke="white" strokeWidth="1.59747" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {/* Mobile Chevron */}
                    <div className="md:hidden text-white ml-2">
                      {expandedIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>

                  {/* Content Wrapper: Hidden on mobile unless expanded */}
                  <div className={`${expandedIndex === index ? 'block' : 'hidden md:block'}`}>
                    <p className="text-[10px] leading-[20px] text-secondary-gray-color mb-4 transition-all duration-700 group-hover:tracking-[0.01px] group-hover:scale-x-102 origin-left">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Image Wrapper: Hidden on mobile unless expanded */}
                {service.image && (
                  <div className={`w-full h-[140px] mt-auto ${expandedIndex === index ? 'block' : 'hidden md:block'}`}>
                    <img src={service.image} alt={service.title} className="w-full h-full object-contain" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
