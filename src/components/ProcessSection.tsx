import processSteps from '../assets/processStepsVideo.mp4';
import processStepsVertical from '../assets/processStepsVideoVertical.mp4';
import obj2 from '../assets/3d/3d2.svg';
import obj3 from '../assets/3d/3d3.svg';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function ProcessSection() {
  const gradientTextClass = "bg-gradient-to-b from-white to-[#10586C] bg-clip-text text-transparent";
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const steps = [
    { title: "Discover", items: ["Understand your problem, goals & constraints"] },
    { title: "Strategize", items: ["Define the right solution path"] },
    { title: "Architect", items: ["Design scalable systems"] },
    { title: "Validate (Free POC)", items: ["Build working proof of concept"] },
    { title: "Engineer", items: ["Develop production-ready solution"], left: 'left-1/3' },
    { title: "Launch", items: ["Deploy & integrate"], left: 'left-1/3' },
    { title: "Scale & Support", items: ["Optimize, grow & maintain"], left: 'right-0' }
  ];

  return (
    <section className="py-20 relative md:h-[800px]">

      <div className="container-fluid mx-auto px-6 relative h-fit md:h-full">
        <motion.h2
          className={`z-10 relative text-4xl md:text-section-heading font-medium tracking-[-2.24px] text-center mb-16 ${gradientTextClass}`}
          initial={{ y: 600 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "300px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Process
        </motion.h2>

        <div className="relative max-w-[1152px] mx-auto z-10 h-fit md:h-full flex justify-center">
          {/* <div className="absolute top-1/2 left-0 right-8 h-[3px] bg-[#0DACC7]" />
          <div className="absolute inset-0 pointer-events-none">
            <img
              src={processGlow}
              alt="Process Glow Effect"
              className="w-full h-full object-cover"
            />
          </div> */}
          <motion.div
            className="md:absolute inset-0 pointer-events-none flex items-center justify-center h-fit md:h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            onViewportEnter={() => {
              if (videoRef.current) {
                videoRef.current.play();
              }
            }}
          >
            <motion.video
              ref={videoRef}
              src={isMobile ? processStepsVertical : processSteps}
              muted
              playsInline
              className="mt-0 max-w-full max-h-[550px] md:max-h-full scale-100"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              transition={{ duration: 1, ease: "easeOut" }}
            />


            <div className="mt-2 md:mt-0 grid grid-cols-2 md:grid-cols-7 gap-14 gap-y-0 md:gap-4 absolute inset-0 px-4">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={`${index}-${isMobile}`} className="contents">
                    {isMobile && !isEven && <div className="h-0 md:hidden" />}
                    <motion.div
                      className={`relative flex flex-col h-21 md:h-full md:w-auto justify-start ${isEven ? 'items-end md:items-start md:mt-[440px]' : 'items-start md:mt-[160px]'}`}
                      variants={{
                        hidden: {
                          clipPath: isMobile ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
                          opacity: 0,
                        },
                        visible: {
                          clipPath: "inset(0 0 0 0)",
                          opacity: 1,
                        }
                      }}
                      transition={{
                        duration: 0.4,
                        delay: index * 1.3,
                        ease: "easeInOut",
                      }}
                    >
                      {/* Content */}
                      <div className={`flex flex-col ${isEven ? 'items-end md:items-start text-right md:text-left' : 'items-start text-left'} max-w-[140px] md:max-w-none`}>
                        <h3 className={`text-[16px] md:text-[22px] font-bold mb-0.5 md:mb-2 font-['Poppins'] ${gradientTextClass} leading-tight`}>
                          {step.title}
                        </h3>

                        <div className="text-[11px] md:text-[14px] font-['Poppins'] text-[#A8A8A8] hidden md:block leading-snug">
                          {step.items.map((item, i) => (
                            <p key={i}>{item}</p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                    {isMobile && isEven && <div className="h-0 md:hidden" />}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* 3d Object */}
        <motion.img
          src={obj2}
          alt="3d Object 2"
          className="absolute -top-40 -left-10 pointer-events-none h-[150px] w-[150px] md:h-min md:w-min"
          initial={{ y: 600, rotate: 180 }}
          whileInView={{ y: 0, rotate: 0 }}
          viewport={{ once: true, margin: "160px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.img
          src={obj3}
          alt="3d Object 3"
          className="absolute -top-30 md:top-0 right-0 pointer-events-none h-[150px] w-[150px] md:h-min md:w-min"
          initial={{ y: 600, rotate: 180 }}
          whileInView={{ y: 0, rotate: 0 }}
          viewport={{ once: true, margin: "200px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </section>
  );
}
