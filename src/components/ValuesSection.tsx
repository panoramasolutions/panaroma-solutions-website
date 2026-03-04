import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ValuesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const values = [
    {
      title: "Innovation & Growth",
      description: "We embrace emerging technologies to design solutions that keep our clients ahead of the curve."
    },
    {
      title: "Excellence",
      description: "We deliver reliable, scalable, and future-ready solutions with uncompromising quality."
    },
    {
      title: "Partnership",
      description: "We work closely with clients as a trusted technology partner, not just a service provider."
    }
  ];

  const toggleExpand = (index: number) => {
    if (window.innerWidth >= 768) return;
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="about" className="py-16 pt-8 md:pt-16">
      <div className="container-fluid mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-14 max-w-[1200px] mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative p-[1px] rounded-24 overflow-hidden group border border-[#2A2A2A] hover:border-t-white hover:border-l-white hover:border-r-[#00EEFF] hover:border-b-[#00EEFF] hover:shadow-[8px_8px_20px_-10px_#00EEFF] transition-all duration-1200 hover:scale-105"
              onClick={() => toggleExpand(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white via-[#2A2A2A] to-white" />

              <div className="relative bg-[#151517] rounded-24 p-8 flex flex-col justify-center transition-all duration-300 h-auto md:h-[250px]">

                {/* Mobile Header: Title + Arrow */}
                <div className="flex items-center justify-between md:block cursor-pointer md:cursor-default">
                  <h3 className="text-[24px] md:text-[28px] font-semibold tracking-[-1px] leading-[1.2] text-white mb-0 md:mb-4 group-hover:text-[30px] transition-all duration-300">
                    {value.title}
                  </h3>
                  <div className="md:hidden text-white">
                    {expandedIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </div>

                {/* Description: Hidden on mobile unless expanded, always visible on desktop */}
                <div className={`mt-4 md:mt-0 ${expandedIndex === index ? 'block' : 'hidden md:block'}`}>
                  <p className="text-[16px] md:text-[18px] leading-[24.75px] tracking-[-0.36px] text-secondary-gray-color transition-all duration-300">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
