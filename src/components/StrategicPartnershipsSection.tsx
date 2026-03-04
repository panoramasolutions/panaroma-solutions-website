import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import partnershipsBg from '../assets/partnerships.jpg';
import userStarIcon from '../assets/lucide/user-star.svg';
import userLockIcon from '../assets/lucide/user-lock.svg';
import handshakeIcon from '../assets/lucide/handshake.svg';
import buildingIcon from '../assets/lucide/building-2.svg';

export default function StrategicPartnershipsSection() {
    const [isHovered, setIsHovered] = useState(false);

    const designedForCards = [
        {
            title: "Independent consultants & Advisors",
            icon: userStarIcon,
        },
        {
            title: "Sales & Business development professionals",
            icon: userLockIcon,
        },
        {
            title: "Companies seeking deliveries & white label partnerships",
            icon: handshakeIcon,
        },
        {
            title: "Agencies & service providers",
            icon: buildingIcon,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const,
            },
        },
    };

    return (
        <section className="py-20 mx-4 relative overflow-hidden flex justify-center">
            {/* Gradient Border Wrapper for Outer Container */}
            <div
                className="p-[2px] rounded-[44px]"
                style={{
                    background: 'linear-gradient(60deg, rgba(96, 96, 96, 0.8) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(96, 96, 96, 0.8) 100%)'
                }}
            >
                <div className="p-5 relative rounded-[40px] z-10 bg-gradient-to-b from-[#171717] via-[#828181] to-[#FFFFFF]">
                    {/* Hero Banner Card with Gradient Border */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative max-w-4xl mx-auto"
                    >
                        {/* Gradient Border Wrapper */}
                        <div
                            className="p-[2px] rounded-[36px]"
                            style={{
                                background: 'linear-gradient(160deg, rgba(96, 96, 96, 0.8) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(96, 96, 96, 0.8) 100%)'
                            }}
                        >
                            {/* Inner Content */}
                            <div className="relative rounded-[32px] overflow-hidden">
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={partnershipsBg}
                                        alt="Strategic Partnerships Background"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Overlay for better text readability */}
                                    <div className="absolute inset-0 bg-black/40" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
                                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
                                        Strategic Partnerships &
                                    </h2>
                                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                        <span className="bg-gradient-to-r from-[#F97316] via-[#EF4444] to-[#EC4899] bg-clip-text text-transparent">
                                            Growth
                                        </span>
                                        <span className="text-white"> Collaborations</span>
                                    </h2>

                                    <p className="md:text-lg mb-16 mt-8 mx-auto text-white/80">
                                        Share your idea, if it shines, get a chance to earn with Panorama.
                                    </p>

                                    <button
                                        onMouseEnter={() => setIsHovered(true)}
                                        onClick={() => {
                                            const el = document.getElementById('contact');
                                            if (el) {
                                                el.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                        className="bg-[#5d1eb2] cursor-pointer group relative hover:bg-[#6C3CFF] text-white font-bold py-3 px-12 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(93,30,178,0.5)] hover:shadow-[0_0_25px_rgba(108,60,255,0.6)]">
                                        Contact now
                                        <div className="animated-border-box3"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <style>{`
                                        @keyframes spin2 {
                                            0% {
                                                transform: translate(-50%, -50%) rotate(0deg);
                                            }
                                            100% {
                                                transform: translate(-50%, -50%) rotate(360deg);
                                            }
                                        }
                                        
                                        .group:hover {
                                            border-color: transparent;
                                        }
                                        .animated-border-box3 {
                                            position: absolute;
                                            inset: 0;
                                            border-radius: 32px;
                                            padding: 2px;
                                            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                                            -webkit-mask-composite: xor;
                                            mask-composite: exclude;
                                            pointer-events: none;
                                            opacity: 0;
                                            transition: opacity 0.3s ease-in-out;
                                        }
                                        .group:hover .animated-border-box3 {
                                            opacity: 1;
                                        }
                                        .group .poc-btn-box{
                                            opacity: 1;
                                        }
                                        .animated-border-box3::before {
                                            content: '';
                                            position: absolute;
                                            top: 50%;
                                            left: 50%;
                                            width: 150%;
                                            height: 800%;
                                            background: conic-gradient(from 0deg, #ff07f3 0%, white 25%, white 50%,#ff07f3 100%) !important;
                                            animation: spin2 1s ease-in-out infinite alternate !important;
                                        }
                                    `}</style>

                    {/* Designed For Section - Revealed on Hover */}
                    <motion.div
                        initial={false}
                        animate={{
                            height: isHovered ? 'auto' : 0,
                            opacity: isHovered ? 1 : 0,
                            marginTop: isHovered ? 40 : 0
                        }}
                        onViewportEnter={() => {
                            if (window.innerWidth < 768) {
                                setIsHovered(true);
                            }
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="overflow-hidden mt-10"
                    >
                        <div className="max-w-4xl mx-auto text-white">
                            <h3 className="text-3xl md:text-4xl font-semibold text-center mb-10">
                                Designed for
                            </h3>

                            {/* Cards Grid */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate={isHovered ? "visible" : "hidden"}
                                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            >
                                {designedForCards.map((card, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={itemVariants}
                                        className="relative group"
                                    >
                                        <div className="bg-[#1F1F24] hover:bg-[#28282E] rounded-[20px] p-6 transition-all duration-300 border border-[#333338] hover:border-[#444448]">
                                            <h4 className="text-white text-center text-[15px] md:text-base font-medium mb-4 leading-snug min-h-[48px] flex items-center justify-center">
                                                {card.title}
                                            </h4>
                                            <div className="flex justify-center">
                                                <img
                                                    src={card.icon}
                                                    alt={card.title}
                                                    className="w-8 h-8"
                                                    style={{
                                                        filter: 'brightness(0) invert(1)',
                                                        opacity: 0.8
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
