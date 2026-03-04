import panoramaVideo from '../assets/Panorama Website Video.mp4';
import arrow from '../assets/arrow.svg';
import peopleIcon from '../assets/peopleIcon.svg';
import { motion } from 'framer-motion';

export default function MetricsSection() {
  return (
    <section className="relative py-8">
      <div className="container-fluid mx-auto px-6">
        <div className="relative rounded-32 shadow-xl mb-16 p-4 md:p-10 flex flex-col items-center">
          <div className="flex items-center justify-center w-full h-auto mb-6 md:mb-0">
            <video
              src={panoramaVideo}
              className="w-full h-auto object-contain rounded-[32px]"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          {/* Top-right metric card */}
          <motion.div
            className="relative md:absolute md:top-0 md:right-[10%] w-full md:w-auto mb-4 md:mb-0 group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{
              opacity: { duration: 0.8, ease: "easeOut" },
              scale: { duration: 0.5, ease: "easeInOut" }
            }}
          >
            <div className="text-center h-auto md:h-[90px] rounded-20 shadow-lg flex items-center gap-5 px-5 py-5 border border-[#2A2A2A] hover:border-t-white hover:border-l-white hover:border-r-[#00EEFF] hover:border-b-[#00EEFF] hover:shadow-[10px_10px_30px_-10px_rgba(0,238,255,0.4)] transition-all duration-[500ms] bg-black/20 md:bg-transparent" style={{ background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.5))' }}>
              <div className="flex items-center gap-5 w-full justify-center">
                {/* Up arrow icon, fixed size */}
                <img src={arrow} alt="Growth Icon" className="w-12 h-12 origin-bottom-left group-hover:scale-150 transition-transform duration-500" />
                <div className="flex flex-col justify-center text-center">
                  <div className="text-[24px] md:text-[32px] font-bold text-white leading-tight">95%</div>
                  <div className="text-[14px] md:text-[16px] font-medium text-white/80 leading-tight">Success Benchmark</div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Bottom-left metric card */}
          <motion.div
            className="relative md:absolute md:bottom-0 md:left-[10%] w-full md:w-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{
              opacity: { duration: 0.8, ease: "easeOut" },
              scale: { duration: 0.5, ease: "easeInOut" }
            }}
          >
            <div className="text-center h-auto md:h-[90px] rounded-20 shadow-lg flex items-center gap-5 px-5 py-5 border border-[#2A2A2A] hover:border-t-white hover:border-l-white hover:border-r-[#00EEFF] hover:border-b-[#00EEFF] hover:shadow-[10px_10px_30px_-10px_rgba(0,238,255,0.4)] transition-all duration-[500ms] bg-black/20 md:bg-transparent" style={{ background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.5))' }}>
              <div className="flex items-center gap-5 w-full justify-center">
                <div className="text-[32px] md:text-[48px] font-bold text-white leading-tight">25+</div>
                <div className="flex flex-col justify-center text-left">
                  <div className="text-[18px] md:text-[20px] font-semibold text-white leading-tight">Satisfied</div>
                  <div className="text-[14px] md:text-[20px] font-semibold text-white/60 leading-tight">Clients</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        <div className="text-center mb-8">
          <p className="text-[20px] font-extrabold text-secondary-gray-color tracking-[-0.288px] mb-4">
            Crafting Innovative IT & Automation Solutions for the Future
          </p>
          <p className="text-justify text-[15px] text-[#838383] tracking-[-0.288px] leading-[21px] max-w-[931px] mx-auto">
            At Panorama Solutions, we transform ideas into intelligent solutions that help businesses thrive in the digital age. From custom IT development to AI-driven automation, we partner with organizations to streamline operations, enhance productivity, and unlock growth opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
