import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

interface SplashScreenProps {
    onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
    const [showHeading, setShowHeading] = useState(false);

    useEffect(() => {
        // Sequence:
        // 1. Initial state (Logo centered)
        // 2. Slide up (after 1s)
        // 3. Fade in heading (immediately after slide)
        // 4. Complete (after total ~3-4s)

        const slideTimer = setTimeout(() => {
            setShowHeading(true);
        }, 1000); // Wait 1s before sliding up

        const completeTimer = setTimeout(() => {
            onComplete();
        }, 3500); // Total duration

        return () => {
            clearTimeout(slideTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
            exit={{ backgroundColor: "rgba(0,0,0,0)" }}
            transition={{ duration: 0.1 }}
        >
            <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: showHeading ? -100 : 0 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                transition={{ duration: 0.8 }}
            >
                <motion.img
                    src={logo}
                    alt="Panorama Solutions Logo"
                    className="w-24 h-24 md:w-32 md:h-32 mb-6"
                    layoutId="logo"
                />
                <motion.h1
                    className="text-white text-2xl md:text-3xl font-medium tracking-wide"
                    layoutId="company-name"
                >
                    Panorama Solutions
                </motion.h1>
            </motion.div>

            <AnimatePresence>
                {showHeading && (
                    <motion.div
                        className="absolute top-1/2 flex flex-col items-center text-center px-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, transition: { duration: 0.1 } }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <motion.h1 layoutId="hero-heading" layout transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.2 }} className="text-4xl md:text-[56px] font-medium tracking-[-2.24px] gradient-text mb-8 relative z-50">
                            Turning ideas into Smart Solutions
                        </motion.h1>
                        <motion.p
                            className="text-sm md:text-base text-gray-400 font-light tracking-wide"
                            exit={{ opacity: 0, transition: { duration: 0.1 } }}
                            transition={{ duration: 0.2 }}
                        >
                            From Managed IT Services to Cybersecurity, We Deliver Excellence
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
