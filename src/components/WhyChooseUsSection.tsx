import { useState, useEffect } from 'react';
import dev1 from '../assets/devAvatars/dev1.png';
import dev2 from '../assets/devAvatars/dev2.png';
import dev3 from '../assets/devAvatars/dev3.png';
import dev4 from '../assets/devAvatars/dev4.png';
import dev5 from '../assets/devAvatars/dev5.png';
import dev6 from '../assets/devAvatars/dev6.png';
import dev7 from '../assets/devAvatars/dev7.png';
import dev8 from '../assets/devAvatars/dev8.png';
import dev9 from '../assets/devAvatars/dev9.png';
import dev10 from '../assets/devAvatars/dev10.png';
import dev11 from '../assets/devAvatars/dev11.png';

export default function WhyChooseUsSection() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with Future Ready Solutions featured

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };


  const features = [
    {
      icon: (
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
          <path d="M10.125 49.5V38.25M10.125 15.75V4.5M4.5 10.125H15.75M4.5 43.875H15.75M29.25 6.75L25.3481 16.8949C24.7136 18.5447 24.3963 19.3696 23.9029 20.0634C23.4657 20.6784 22.9284 21.2157 22.3134 21.6529C21.6196 22.1463 20.7947 22.4636 19.1449 23.0981L9 27L19.1449 30.9019C20.7947 31.5364 21.6196 31.8537 22.3134 32.3471C22.9284 32.7843 23.4657 33.3216 23.9029 33.9366C24.3963 34.6304 24.7136 35.4553 25.3481 37.1051L29.25 47.25L33.1519 37.1051C33.7864 35.4553 34.1037 34.6304 34.5971 33.9366C35.0343 33.3216 35.5716 32.7843 36.1866 32.3471C36.8804 31.8537 37.7053 31.5364 39.3551 30.9019L49.5 27L39.3551 23.0981C37.7053 22.4636 36.8804 22.1463 36.1866 21.6529C35.5716 21.2157 35.0343 20.6784 34.5971 20.0634C34.1037 19.3696 33.7864 18.5447 33.1519 16.8949L29.25 6.75Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "From Concept to Execution",
      description: "We transfer your raw ideas into fully functional solutions."
    },
    {
      icon: (
        <svg width="62" height="67" viewBox="0 0 62 67" fill="none">
          <path d="M20.125 32.1042L25.7083 37.6875L38.2708 25.125M50.8333 33.5C50.8333 47.2028 35.8868 57.1689 30.4485 60.3416C29.8305 60.7021 29.5214 60.8824 29.0853 60.9759C28.7469 61.0485 28.2531 61.0485 27.9146 60.9759C27.4785 60.8824 27.1695 60.7021 26.5514 60.3416C21.1131 57.1689 6.16663 47.2028 6.16663 33.5V20.1492C6.16663 17.9172 6.16663 16.8012 6.53167 15.8419C6.85414 14.9945 7.37816 14.2383 8.05842 13.6388C8.82847 12.9602 9.8734 12.5683 11.9633 11.7846L26.9316 6.17149C27.512 5.95385 27.8022 5.84503 28.1007 5.80189C28.3655 5.76363 28.6344 5.76363 28.8992 5.80189C29.1977 5.84503 29.4879 5.95385 30.0683 6.17149L45.0367 11.7846C47.1265 12.5683 48.1714 12.9602 48.9415 13.6388C49.6218 14.2383 50.1458 14.9945 50.4682 15.8419C50.8333 16.8012 50.8333 17.9172 50.8333 20.1492V33.5Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Future Ready Solutions",
      description: "We design with scalability and long-term growth in mind.",
      featured: true
    },
    {
      icon: (
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
          <path d="M16.875 10.125C16.875 7.0184 19.3934 4.5 22.5 4.5C25.6066 4.5 28.125 7.0184 28.125 10.125V13.5H30.375C33.5201 13.5 35.0927 13.5 36.3331 14.0138C37.9871 14.6989 39.3011 16.0129 39.9862 17.6669C40.5 18.9073 40.5 20.4799 40.5 23.625H43.875C46.9816 23.625 49.5 26.1434 49.5 29.25C49.5 32.3566 46.9816 34.875 43.875 34.875H40.5V38.7C40.5 42.4804 40.5 44.3705 39.7643 45.8144C39.1172 47.0845 38.0845 48.1172 36.8144 48.7643C35.3705 49.5 33.4804 49.5 29.7 49.5H28.125V45.5625C28.125 42.7666 25.8584 40.5 23.0625 40.5C20.2666 40.5 18 42.7666 18 45.5625V49.5H15.3C11.5196 49.5 9.62947 49.5 8.18556 48.7643C6.91547 48.1172 5.88285 47.0845 5.23571 45.8144C4.5 44.3705 4.5 42.4804 4.5 38.7V34.875H7.875C10.9816 34.875 13.5 32.3566 13.5 29.25C13.5 26.1434 10.9816 23.625 7.875 23.625H4.5C4.5 20.4799 4.5 18.9073 5.01381 17.6669C5.6989 16.0129 7.01295 14.6989 8.66689 14.0138C9.90734 13.5 11.4799 13.5 14.625 13.5H16.875V10.125Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Tailored Technology",
      description: "Every project is built to suit your industry and goals."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="why-choose-us" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00EEFF] opacity-20 blur-[150px] rounded-full" />
      </div>

      <div className="container-fluid mx-auto px-6 relative">
        <div className="text-center mb-20">
          <p className="text-[18px] font-medium text-[#9C9C9C] mb-4 tracking-wide">The value we bring</p>
          <h2 className="text-4xl md:text-section-heading font-medium bg-gradient-to-t from-[#A8A8A8] to-white bg-clip-text text-transparent">
            Why Choose Us?
          </h2>
        </div>

        <div className="relative h-[400px] md:h-[600px] max-w-[400px] md:max-w-[1400px] mx-auto mb-16 block md:gap-20">
          {features.map((feature, idx) => {
            // Calculate position relative to current index
            // 0 = Center, 1 = Right, 2 = Left
            const position = (idx - currentIndex + features.length) % features.length;

            let desktopClass = "";
            let mobileClass = "bg-gradient-to-br from-[rgba(30,41,59,0.5)] to-[rgba(255,255,255,0.05)]";

            if (position === 0) { // Center
              desktopClass = "md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:z-20 md:scale-110 md:opacity-100 md:bg-gradient-to-b md:from-[rgba(97,96,104,0.38)] md:via-[rgba(130,127,140,0.08)] md:to-[rgba(255, 255, 255, 0.6)] md:h-[420px] md:shadow-2xl backdrop-blur-sm";
              mobileClass = "left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 scale-110 opacity-100 bg-gradient-to-b from-[rgba(97,96,104,0.38)] via-[rgba(130,127,140,0.08)] to-[rgba(255, 255, 255, 0.6)] border-opacity-100 backdrop-blur-sm h-[210px]";
            } else if (position === 1) { // Right
              desktopClass = "md:left-[85%] md:-translate-x-1/2 md:-translate-y-1/2 md:z-10 md:scale-90 md:opacity-70 md:bg-gradient-to-br md:from-[rgba(30,41,59,0.5)] md:to-[rgba(255,255,255,0.05)] md:h-[380px] cursor-pointer hover:opacity-100 backdrop-blur-sm";
              mobileClass = "left-[85%] -translate-x-1/2 -translate-y-1/2 z-10 scale-90 opacity-70 bg-gradient-to-b from-[rgba(97,96,104,0.38)] via-[rgba(130,127,140,0.08)] to-[rgba(255, 255, 255, 0.6)] border-opacity-100 backdrop-blur-sm h-[190px]";
            } else { // Left
              desktopClass = "md:left-[15%] md:-translate-x-1/2 md:-translate-y-1/2 md:z-10 md:scale-90 md:opacity-70 md:bg-gradient-to-br md:from-[rgba(30,41,59,0.5)] md:to-[rgba(255,255,255,0.05)] md:h-[380px] cursor-pointer hover:opacity-100 backdrop-blur-sm";
              mobileClass = "left-[15%] -translate-x-1/2 -translate-y-1/2 z-10 scale-90 opacity-70 bg-gradient-to-b from-[rgba(97,96,104,0.38)] via-[rgba(130,127,140,0.08)] to-[rgba(255, 255, 255, 0.6)] border-opacity-100 backdrop-blur-sm h-[190px]";
            }

            return (
              <div
                key={idx}
                onClick={() => {
                  if (position === 1) handleNext();
                  if (position === 2) handlePrev();
                }}
                className={`
                  absolute top-1/2 rounded-20 p-8 border border-[#1E293B] transition-all duration-500 ease-in-out
                  w-[280px] md:w-[380px] h-full md:h-[380px]
                  ${mobileClass}
                  ${desktopClass}
                `}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white via-[#2A2A2A] to-white opacity-30 rounded-20 pointer-events-none" />
                <div className={`content-container pointer-events-none ${position === 0 ? 'opacity-100' : 'opacity-70'}`}>
                  <div className="w-[84px] h-[84px] rounded-32 flex items-center justify-center mb-8 bg-gradient-to-br from-[rgba(255,255,255,0.1)] to-transparent">
                    {feature.icon}
                  </div>

                  <div>
                    <h3 className={`font-semibold tracking-[0.48px] text-white mb-6 transition-all duration-500 ${position === 0 ? 'text-[18px] md:text-[32px]' : 'text-[14px] md:text-[24px]'}`}>
                      {feature.title}
                    </h3>

                    <div className="w-[120px] h-[1px] bg-white mb-6" />

                    <p className={`text-[#94A3B8] tracking-[0.36px] transition-all duration-500 ${position === 0 ? 'text-[14px] md:text-[20px] leading-[28px]' : 'text-[14px] md:text-[18px] leading-[28px]'}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex items-center justify-center gap-6">
          <button
            onClick={handlePrev}
            className="w-[60px] h-[60px] cursor-pointer rounded-full border border-[#334155] bg-[rgba(30,41,59,0.5)] backdrop-blur-sm flex items-center justify-center hover:bg-[#1E293B] transition-colors group"
          >
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M4.68791 15H24.6876" stroke="#64748B" strokeWidth="1.5" strokeLinecap="square" className="group-hover:stroke-white transition-colors" />
              <path d="M11.7625 22.075C11.7625 18.4379 8.5592 15 4.68733 15" stroke="#64748B" strokeWidth="1.5" strokeLinecap="square" className="group-hover:stroke-white transition-colors" />
              <path d="M11.7625 7.9248C11.7625 11.562 8.5592 14.9999 4.68733 14.9999" stroke="#64748B" strokeWidth="1.5" strokeLinecap="square" className="group-hover:stroke-white transition-colors" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="w-[60px] h-[60px] cursor-pointer rounded-full border border-[#334155] bg-[rgba(30,41,59,0.5)] backdrop-blur-sm flex items-center justify-center hover:bg-[#1E293B] transition-colors group"
          >
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M25.3121 15H5.31238" stroke="#64748B" strokeWidth="1.5" strokeLinecap="square" className="group-hover:stroke-white transition-colors" />
              <path d="M18.2375 22.075C18.2375 18.4379 21.4408 15 25.3127 15" stroke="#64748B" strokeWidth="1.5" strokeLinecap="square" className="group-hover:stroke-white transition-colors" />
              <path d="M18.2375 7.9248C18.2375 11.562 21.4408 14.9999 25.3127 14.9999" stroke="#64748B" strokeWidth="1.5" strokeLinecap="square" className="group-hover:stroke-white transition-colors" />
            </svg>
          </button>
        </div>
      </div>

      <div className="text-center mt-24">
        <h2 className="text-[32px] font-medium mb-12 bg-gradient-to-t from-[#FFC5B1] to-white bg-clip-text text-transparent">
          Trusted by clients across sectors
        </h2>

        <div className="relative overflow-hidden max-w-[1200px] mx-auto">
          <div className="flex items-center justify-center gap-8 px-4 flex-wrap">
            {[dev1, dev2, dev3, dev4, dev5, dev6, dev7, dev8, dev9, dev10, dev11].map((src, i) => (
              <div
                key={i}
                className="w-[160px] h-[72px] flex items-center justify-center bg-transparent hover:scale-125 transition-all duration-300"
              >
                <img
                  src={src}
                  alt={`Developer ${i + 1}`}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain opacity-90 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
