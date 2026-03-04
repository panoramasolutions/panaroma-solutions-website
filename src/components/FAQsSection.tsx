import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import FAQData from "../assets/FAQ.json";

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = FAQData.faqs;

  return (
    <section id="faqs" className="py-20">
      <div className="container-fluid max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-section-heading font-medium bg-gradient-to-t from-[#A8A8A8] to-white bg-clip-text text-transparent">
            Frequently asked questions
          </h2>
          <p className="text-[18px] mt-5 font-medium text-secondary-gray-color mb-4 tracking-wide">Feel free to contact us if you have any questions after reviewing our FAQs.</p>
        </div>
        <div className="max-w-[626px] mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between cursor-pointer text-left hover:opacity-80 transition-opacity"
              >
                <span className="text-[18px] text-secondary-gray-color tracking-[-0.36px] leading-[24.75px] pr-4">
                  {faq.question}
                </span>
                <motion.svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  className="flex-shrink-0"
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <g clipPath="url(#clip0)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.88889 1.33328C8.88889 1.09752 8.79524 0.871413 8.62854 0.704703C8.46184 0.537993 8.23575 0.444336 8 0.444336C7.76425 0.444336 7.53816 0.537993 7.37146 0.704703C7.20476 0.871413 7.11111 1.09752 7.11111 1.33328V7.55591H0.888889C0.653141 7.55591 0.427049 7.64957 0.26035 7.81628C0.0936505 7.98299 0 8.2091 0 8.44486C0 8.68063 0.0936505 8.90673 0.26035 9.07344C0.427049 9.24015 0.653141 9.33381 0.888889 9.33381H7.11111V15.5564C7.11111 15.7922 7.20476 16.0183 7.37146 16.185C7.53816 16.3517 7.76425 16.4454 8 16.4454C8.23575 16.4454 8.46184 16.3517 8.62854 16.185C8.79524 16.0183 8.88889 15.7922 8.88889 15.5564V9.33381H15.1111C15.3469 9.33381 15.573 9.24015 15.7397 9.07344C15.9064 8.90673 16 8.68063 16 8.44486C16 8.2091 15.9064 7.98299 15.7397 7.81628C15.573 7.64957 15.3469 7.55591 15.1111 7.55591H8.88889V1.33328Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="16" height="16.89" fill="white" />
                    </clipPath>
                  </defs>
                </motion.svg>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pr-8">
                      <p
                        className="text-[16px] text-[#9CA3AF] leading-[24px] tracking-[-0.32px] [&>ul]:list-disc [&>ul]:ml-5 [&>ul]:mt-2 [&>li]:mt-1"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="h-[1px] w-full bg-gradient-to-r from-[rgba(255,255,255,0.5)] to-[rgba(168,168,168,0.5)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
