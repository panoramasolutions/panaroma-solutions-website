import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import dev1 from '../assets/testimonials/review1.png';
import dev2 from '../assets/testimonials/review2.png';
import dev3 from '../assets/testimonials/review3.png';
import obj1 from '../assets/3d/3d1.svg';
import obj4 from '../assets/3d/3d4.svg';
import testimonialsData from '../assets/testimonials.json';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const avatarMap: { [key: string]: string } = {
    dev1: dev1,
    dev2: dev2,
    dev3: dev3
  };

  const testimonials = testimonialsData.map((item) => ({
    text: item.review,
    company: item.company,
    avatar: avatarMap[item.avatar] || dev1,
    stars: item.stars
  }));

  // Dynamic cards per page based on screen size
  const cardsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  // Check if at start or end
  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex + cardsPerPage >= testimonials.length;

  const handlePrev = () => {
    if (isAtStart) return;
    setCurrentIndex((prev) => {
      const newIndex = prev - cardsPerPage;
      return newIndex < 0 ? 0 : newIndex;
    });
  };

  const handleNext = () => {
    if (isAtEnd) return;
    setCurrentIndex((prev) => {
      const newIndex = prev + cardsPerPage;
      return newIndex >= testimonials.length ? prev : newIndex;
    });
  };

  const currentPageIndex = Math.floor(currentIndex / cardsPerPage);


  return (
    <section className="py-20 relative z-20">
      {/* Heading */}
      <div className="container-fluid max-w-4xl mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl md:text-section-heading font-medium tracking-[-2.24px] gradient-text text-center mb-8 md:mb-16"
          initial={{ y: -300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeIn" }}
        >
          Testimonials
        </motion.h2>
      </div>

      {/* Carousel */}
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="w-full pl-4 md:pl-8 mb-12 relative z-10 overflow-hidden">
        <motion.div
          className="flex gap-6 md:gap-12"
          animate={{ x: -currentIndex * (isMobile ? 316 : 432) }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {testimonials.map((t, idx) => (
            <article
              key={idx}
              className="relative rounded-24 p-[1px] overflow-hidden min-h-[400px] md:min-h-[480px] flex flex-col border border-white/40 flex-shrink-0 w-[300px] md:w-[400px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white via-[#2A2A2A] to-white opacity-40" />
              <div className="relative backdrop-blur-sm rounded-24 p-8 h-full flex flex-col z-10">

                {/* content (quote, text, stars) */}
                <div className="relative z-10">
                  {/* quote mark positioned top-left */}
                  <div className="text-white text-4xl md:text-8xl opacity-95 font-sans">"</div>

                  <h3 className="text-white text-[16px] md:text-[24px] lg:text-[24px] font-semibold tracking-tight mb-6">
                    {t.text}
                  </h3>

                  {/* stars */}
                  <div className="flex items-center gap-3 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => {
                      if (s <= t.stars) {
                        return (
                          <svg key={s} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#FF9A3C" />
                          </svg>
                        )
                      } else {
                        return (
                          <svg key={s} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24z" stroke="#FF9A3C" strokeWidth="1.4" fill="none" />
                          </svg>
                        )
                      }
                    })}
                  </div>
                </div>

                {/* footer / author - placed naturally at bottom */}
                <div className="relative z-10 flex mt-6 items-center gap-2 justify-end">
                  <span className="text-white text-[22px] mr-2">-</span>
                  <img src={t.avatar} alt={`avatar`} className="w-12 h-12 rounded-full object-cover border border-white/10 shadow-sm" />
                  <div className="text-left">
                    {/* <div className="text-white font-semibold text-base">{t.name}</div> */}
                    <div className="text-[#9CA3AF] text-sm whitespace-pre-line wrap">{t.company}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </motion.div>

      {/* Navigation */}
      <div className="container-fluid max-w-4xl mx-auto px-6 relative z-20">
        <div className="flex flex-col items-center gap-8">
          {/* Dots */}
          <div className="flex gap-3">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx * cardsPerPage)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentPageIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
                  } cursor-pointer`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              disabled={isAtStart}
              className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white transition-colors ${isAtStart
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:bg-white/10 cursor-pointer'
                }`}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              disabled={isAtEnd}
              className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white transition-colors ${isAtEnd
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:bg-white/10 cursor-pointer'
                }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* 3d Object */}
      <motion.img
        src={obj1}
        alt="3d Object 1"
        className="absolute bottom-30 md:bottom-0 -left-10 md:-left-30 pointer-events-none z-0 h-[150px] w-[150px] md:h-min md:w-min"
        initial={{ y: -600, rotate: 180 }}
        whileInView={{ y: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeIn" }}
      />
      <motion.img
        src={obj4}
        alt="3d Object 4"
        className="absolute -top-10 md:top-0 -right-10 md:-right-30 pointer-events-none z-0 h-[150px] w-[150px] md:h-min md:w-min"
        initial={{ y: -300, rotate: 180 }}
        whileInView={{ y: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeIn" }}
      />
    </section>
  );
}
