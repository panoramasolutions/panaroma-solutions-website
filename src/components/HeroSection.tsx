import { motion } from 'framer-motion';

import DiscoveryInteraction from './DiscoveryInteraction';

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-[100px] md:pt-[125px]">
      <div className="container-fluid mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            layoutId="hero-heading"
            layout
            transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.2 }}
            className="text-4xl md:text-[56px] font-medium tracking-tight md:tracking-[-2.24px] gradient-text mb-6 md:mb-8 leading-tight"
          >
            Turning ideas into Smart Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-base md:text-[18px] leading-relaxed md:leading-[24.75px] tracking-[-0.36px] text-secondary-gray-color mb-8 px-2 md:px-0"
          >
            We empower businesses with innovative technology solutions — from automation to AI — enabling efficiency, scalability, and growth across diverse industries.
          </motion.p>
          <DiscoveryInteraction />

        </div>
      </div>
    </section>
  );
}
