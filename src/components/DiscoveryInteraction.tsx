import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import discoverImage from '../assets/disoverImage.png';
import discussBg from '../assets/discussBg.jpg';

const GOOGLE_FORM_URL = 'https://script.google.com/macros/s/AKfycbwkNRw7YHPRK33_4gq5ZvNnYUEZ8NB2apUXUYTEHfa3NKRCAuNOZG2LL6VYZTltqBM0ow/exec';

export default function DiscoveryInteraction() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"" | "success" | "error">("");

    const roles = [
        "Independent consultant or advisor",
        "Sales & Business development professionals",
        "Agencies or Service provider",
        "Company seeking delivery or partnership"
    ];

    // No need to lock scroll for in-place expansion
    useEffect(() => {
        // Scroll lock removed
    }, [isOpen]);

    const handleOpen = () => setIsOpen(true);
    const handleClose = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setIsOpen(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("");

        try {
            const fullName = name.trim();
            const role = selectedRole ? `Selected role: ${selectedRole}` : "Discovery request";

            const body = new FormData();
            body.append('fullName', fullName);
            body.append('email', email);
            body.append('phone', phone);
            body.append('role', role);

            const response = await fetch(GOOGLE_FORM_URL, {
                method: 'POST',
                body,
                redirect: 'follow'
            });

            const raw = await response.text();
            let result: { status?: string; message?: string } | null = null;
            try {
                result = raw ? JSON.parse(raw) : null;
            } catch {
                // Non-JSON response; treat based on HTTP status below.
            }

            const success = response.ok && (!result || result.status === 'success');

            if (success) {
                setStatus('success');
                setName("");
                setEmail("");
                setPhone("");
                setSelectedRole("");
            } else {
                const msg = result?.message || `Submission failed (${response.status})`;
                throw new Error(msg);
            }
        } catch (err) {
            console.error('Discovery form submit failed', err);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex justify-center mt-8 mb-12 relative w-full">
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
                                        .animated-border-box2 {
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
                                        .group:hover .animated-border-box2 {
                                            opacity: 1;
                                        }
                                        .group .poc-btn-box{
                                            opacity: 1;
                                        }
                                        .animated-border-box2::before {
                                            content: '';
                                            position: absolute;
                                            top: 50%;
                                            left: 50%;
                                            width: 150%;
                                            height: 800%;
                                            background: conic-gradient(from 0deg, #ff07f3 0%, white 25%, white 50%,#ff07f3 100%) !important;
                                            animation: spin2 1s ease-in-out infinite !important;
                                        }
                                        .poc-btn-box{
                                            padding: 3px !important;
                                            border-radius: 60px !important;
                                        }
                                        .poc-btn-box::before {
                                            height: 800% !important;
                                            background: conic-gradient(from 0deg, 
                                                #000 0%, 
                                                #000 5%, 
                                                #93EBFA 35%, 
                                                #000 55%, 
                                                #000 60%, 
                                                #FFA43C 80%, 
                                                #000 100%) !important;
                                            animation: spin2 4s ease-in-out infinite !important;
                                        }
                                    `}</style>
            <AnimatePresence mode="popLayout">
                {/* {!isOpen ? ( */}
                <motion.div
                    layoutId="discovery-container"
                    key="button"
                    className="relative cursor-pointer max-w-3xl w-full mx-auto"
                    onClick={handleOpen}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    {/* Glowing Border Wrapper */}
                    <motion.div
                        layoutId="glow-border"
                        className="absolute md:-inset-[1px] rounded-[60px] md:rounded-full bg-gradient-to-r from-[#93EBFA] via-transparent to-[#FFA43C] opacity-60 blur-xs transition-opacity duration-500"
                    />
                    {/* <motion.div
                        layoutId="border-outline"
                        className="absolute -inset-[2px] rounded-[24px] md:rounded-full"
                    /> */}


                    {/* Main Content */}
                    <motion.div
                        layoutId="content-bg"
                        className="relative group bg-[#0A0A0A]/90 hover:bg-[#0A0A0A]/80 backdrop-blur-xl rounded-[24px] md:rounded-full px-5 md:px-10 py-5 md:py-5 flex flex-col md:flex-row items-center gap-4 md:gap-8"
                    >
                        <div className="animated-border-box2 poc-btn-box"></div>

                        <div className="relative w-10 h-10 md:w-16 md:h-16 flex-shrink-0">
                            <img
                                src={discoverImage}
                                alt="Discover"
                                className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(245,123,82,0.5)]"
                            />
                        </div>

                        <div className="text-center md:text-left">
                            <h3 className="text-lg md:text-[22px] font-bold text-white mb-1 leading-tight">
                                Discuss your challenge. Get a <span className="text-[#FFD700]">FREE</span> Proof of concept
                            </h3>
                            <p className="text-sm md:text-base text-secondary-gray-color font-medium">
                                Zero-cost POC to validate your idea before any commitment.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
                {/* ) : ( */}
                {isOpen && (
                    /* Expanded In-Place State */
                    <motion.div
                        layoutId="discovery-container"
                        key="expanded"
                        className="absolute top-0 left-0 right-0 z-[100] w-full max-w-6xl mx-auto"
                    >
                        {/* Border for expanded state if desired, or just inner content. 
               Let's keep the consistent container structure for smooth transition. */}
                        <motion.div
                            layoutId="glow-border"
                            className="absolute -inset-[1px] rounded-[32px] bg-gradient-to-t from-[#FFA43C] via-[#93EBFA]/20 to-[#93EBFA] opacity-30 blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}

                        />
                        <motion.div
                            layoutId="border-outline"
                            className="absolute -inset-[2px] rounded-[32px] bg-gradient-to-t from-[#FFA43C] via-[#93EBFA]/20 to-[#93EBFA]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}

                        />

                        <motion.div
                            layoutId="content-bg"
                            className="relative w-full bg-[#1A1A1A] rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row"
                        >
                            {/* Left Side - Validate (Gradient Background) */}
                            <motion.div className="relative md:w-1/2 p-8 md:p-12 text-white overflow-hidden flex flex-col justify-center min-h-[500px]"
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 50, opacity: 0 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={discussBg}
                                        alt="Background"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Overlay for readability */}
                                    <div className="absolute inset-0 bg-black/20" />
                                </div>

                                <motion.div className="relative z-10 flex flex-col h-full justify-center space-y-8"
                                >
                                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 leading-tight">
                                        Validate before you invest
                                    </h1>

                                    <div className="space-y-4">
                                        {/* Step 1 */}
                                        <div className="bg-[#2C2C2C]/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl text-center border-none">
                                            <h3 className="text-xl md:text-2xl font-bold mb-2">1. Discover</h3>
                                            <h4 className="text-sm md:text-base text-gray-200">30-60 minutes structured problem discussion</h4>
                                        </div>
                                        {/* Step 2 */}
                                        <div className="bg-[#2C2C2C]/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl text-center border-none">
                                            <h3 className="text-xl md:text-2xl font-bold mb-2">2. Build</h3>
                                            <h4 className="text-sm md:text-base text-gray-200">We build a working Proof of Concept</h4>
                                        </div>
                                        {/* Step 3 */}
                                        <div className="bg-[#2C2C2C]/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl text-center border-none">
                                            <h3 className="text-xl md:text-2xl font-bold mb-2">3. Decide</h3>
                                            <h4 className="text-sm md:text-base text-gray-200">You choose : Continue, Pivot or walk away.</h4>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Right Side - Form */}
                            <motion.div
                                className="relative md:w-1/2 p-8 md:p-12 bg-[#1c1c1c] flex flex-col min-h-[500px]"
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 50, opacity: 0 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                            >
                                {/* Close Icon - visible here, top right */}
                                <button
                                    onClick={handleClose}
                                    className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-2 z-20 cursor-pointer"
                                >
                                    <X size={24} />
                                </button>

                                <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-10 mt-4">Let's start</h2>

                                <motion.div
                                    className="flex-1 flex flex-col justify-center space-y-5"
                                >
                                    <form className="flex-1 flex flex-col justify-center space-y-5" onSubmit={handleSubmit}>
                                    <div className="space-y-2">
                                        <div className="space-y-2 relative">
                                            <div
                                                className="w-full bg-[#2C2C2C] text-gray-300 rounded-lg px-4 py-3 cursor-pointer flex justify-between items-center transition-all border border-[#3C3C3C] hover:border-[#6C3CFF]"
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            >
                                                <span className={selectedRole ? "text-white" : "text-gray-400"}>
                                                    {selectedRole || "Select what best describes you"}
                                                </span>
                                                <ChevronDown
                                                    size={20}
                                                    className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                                                />
                                            </div>

                                            <AnimatePresence>
                                                {isDropdownOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        className="absolute top-full left-0 right-0 mt-2 bg-[#2C2C2C] rounded-lg shadow-xl overflow-hidden z-50 border border-[#3C3C3C]"
                                                    >
                                                        {roles.map((role) => (
                                                            <div
                                                                key={role}
                                                                className="px-4 py-3 text-sm text-gray-200 hover:bg-[#8a38f5] hover:text-white hover:-translate-x-1 rounded-md mx-1 cursor-pointer transition-all text-left"
                                                                onClick={() => {
                                                                    setSelectedRole(role);
                                                                    setIsDropdownOpen(false);
                                                                }}
                                                            >
                                                                {role}
                                                            </div>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full bg-[#2C2C2C] border border-[#3C3C3C] text-gray-100 rounded-lg px-4 py-3 outline-none focus:border-[#6C3CFF] transition-colors placeholder:text-gray-500"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-[#2C2C2C] border border-[#3C3C3C] text-gray-100 rounded-lg px-4 py-3 outline-none focus:border-[#6C3CFF] transition-colors placeholder:text-gray-500"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="w-full bg-[#2C2C2C] border border-[#3C3C3C] text-gray-100 rounded-lg px-4 py-3 outline-none focus:border-[#6C3CFF] transition-colors placeholder:text-gray-500"
                                        />
                                    </div>
                                    <div className="pt-4 flex justify-center">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="bg-[#5d1eb2] cursor-pointer group relative hover:bg-[#6C3CFF] text-white font-bold py-3 px-12 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(93,30,178,0.5)] hover:shadow-[0_0_25px_rgba(108,60,255,0.6)] disabled:opacity-60 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? 'Sending...' : 'Submit'}
                                            <div className="animated-border-box2"></div>
                                        </button>
                                    </div>
                                    {status === 'success' && (
                                        <p className="text-center text-sm text-green-400">Message sent successfully!</p>
                                    )}
                                    {status === 'error' && (
                                        <p className="text-center text-sm text-red-400">Failed to send. Please try again.</p>
                                    )}
                                    </form>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
