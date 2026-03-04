import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface ProjectDetails {
    title: string,
    description: string,
    fullDescription?: string,
    solution: string,
    fullSolution?: string,
    clientType: string,
    results: {
        deliveries: string,
        testimonials: string
    },
    img: string,
    sources?: {
        webp?: string,
        avif?: string
    },
    alignment: string,
    tagline?: string
    priority?: boolean
}

const Counter = ({ value }: { value: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    // Extract number and suffix (e.g., "5+" -> number: 5, suffix: "+")
    const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
    const suffix = value.replace(/[0-9]/g, '');

    useEffect(() => {
        if (isInView && ref.current) {
            const controls = animate(0, numericValue, {
                duration: 1.5,
                ease: "easeOut",
                onUpdate(value) {
                    if (ref.current) {
                        ref.current.textContent = Math.round(value) + suffix;
                    }
                }
            });
            return () => controls.stop();
        }
    }, [isInView, numericValue, suffix]);

    return <span ref={ref} className="tabular-nums">0{suffix}</span>;
};

export default function Project({ details, setModalData }: { details: ProjectDetails, setModalData: Function }) {

    const openModal = (heading: string, subheading: string, content: string) => {
        setModalData({ isOpen: true, heading, subheading, content });
    };

    // Helper function to check if content exceeds word limit
    const shouldTruncate = (text: string, wordLimit: number = 30): boolean => {
        const wordCount = text.trim().split(/\s+/).length;
        return wordCount > wordLimit;
    };

    // Helper function to truncate text to word limit
    const truncateText = (text: string, wordLimit: number = 30): string => {
        const words = text.trim().split(/\s+/);
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(' ');
    };

    // Animation Variants
    const getBoxVariants = (isLeftPositioned: boolean) => ({
        hidden: {
            clipPath: isLeftPositioned ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
        },
        visible: {
            clipPath: "inset(0 0 0 0)",
            transition: {
                duration: 1.0,
                ease: "easeOut",
                when: "beforeChildren"
            }
        }
    } as const);

    const contentVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } }
    };

    // Determine position for animation direction
    // We want elements to grow from the outer edges inwards.
    // Image on Left -> Grow Left to Right (true)
    // Image on Right -> Grow Right to Left (false)
    const imageGrowDirection = details.alignment === 'left';

    // Content on Left (when Image is Right) -> Grow Left to Right (true)
    // Content on Right (when Image is Left) -> Grow Right to Left (false)
    const contentGrowDirection = details.alignment === 'right';

    return (
        <div className="h-auto lg:h-[calc(100vh-90px)] flex items-center mb-16 lg:mb-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 lg:h-full w-full max-h-[900px] mx-auto overflow-visible lg:overflow-hidden">
                {/* Main Image Card */}
                <motion.div
                    className={`lg:col-span-7 relative overflow-hidden rounded-2xl h-[300px] md:h-[400px] lg:h-full
                ${details.alignment === 'right'
                            ? 'lg:order-2 lg:rounded-r-2xl lg:rounded-l-none'
                            : 'lg:order-1 lg:rounded-l-2xl lg:rounded-r-none'
                        }`}
                    variants={getBoxVariants(imageGrowDirection)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <picture>
                        {details.sources?.avif && (
                            <source srcSet={details.sources.avif} type="image/avif" />
                        )}
                        {details.sources?.webp && (
                            <source srcSet={details.sources.webp} type="image/webp" />
                        )}
                        <img
                            src={details.img}
                            alt={details.title}
                            loading={details.priority ? "eager" : "lazy"}
                            decoding="async"
                            fetchPriority={details.priority ? "high" : "low"}
                            className="w-full h-full object-cover"
                        />
                    </picture>
                    <div
                        className="absolute inset-0 h-1/2"
                        style={{
                            background: 'linear-gradient(180deg, #A0A0A0 0%, rgba(115, 115, 115, 0.00) 100%)'
                        }}
                    />
                    <motion.div
                        className="absolute top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 right-4 md:right-6"
                        variants={contentVariants}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-white leading-tight tracking-[0.05em]">
                            {details.title}
                        </h2>
                    </motion.div>
                </motion.div>

                {/* Info Cards */}
                <motion.div
                    className={`lg:col-span-5 flex flex-col gap-2 lg:gap-3 lg:h-full overflow-visible lg:overflow-auto
                ${details.alignment === 'right' ? 'lg:order-1' : 'lg:order-2'}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Tagline Card */}
                    {details.tagline && (
                        <motion.div
                            className={`bg-para-heading-color rounded-2xl p-4 md:px-4 md:py-3 lg:px-6 lg:py-4
                        ${details.alignment === 'right'
                                    ? 'lg:rounded-l-2xl lg:rounded-r-none'
                                    : 'lg:rounded-l-none lg:rounded-r-2xl'
                                }`}
                            variants={getBoxVariants(contentGrowDirection)}
                        >
                            <motion.div variants={contentVariants}>
                                <h3 className="text-sm md:text-base lg:text-lg font-bold text-white tracking-[0.05em] mb-1">
                                    Tagline
                                </h3>
                                <p className="text-xs md:text-sm font-medium text-secondary-gray-color italic tracking-[0.05em]">
                                    "{details.tagline}"
                                </p>
                            </motion.div>
                        </motion.div>
                    )}
                    {/* Project Info Card */}
                    <motion.div
                        className={`bg-para-heading-color rounded-2xl p-4 md:px-4 md:py-3 lg:px-6 lg:py-4 flex-1
                    ${details.alignment === 'right'
                                ? 'lg:rounded-l-2xl lg:rounded-r-none'
                                : 'lg:rounded-l-none lg:rounded-r-2xl'
                            }`}
                        variants={getBoxVariants(contentGrowDirection)}
                    >
                        <motion.div variants={contentVariants} className="h-full flex flex-col">
                            <h3 className="text-sm md:text-base lg:text-lg font-bold text-white tracking-[0.05em] mb-2">
                                Project info
                            </h3>
                            <p className="text-[11px] md:text-xs font-light text-white leading-relaxed tracking-[0.05em]">
                                {details.fullDescription
                                    ? details.description
                                    : (shouldTruncate(details.description)
                                        ? truncateText(details.description)
                                        : details.description)}
                            </p>
                            {(details.fullDescription || shouldTruncate(details.description)) && (
                                <button
                                    onClick={() => openModal(details.title, details.tagline || 'Project info', details.fullDescription || details.description)}
                                    className="text-xs text-blue-400 hover:text-blue-300 transition-colors tracking-[0.07em] cursor-pointer self-end"
                                >
                                    ...see more
                                </button>
                            )}
                        </motion.div>
                    </motion.div>

                    {/* Solution and Client Type Grid */}
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 lg:gap-4 flex-1"
                    >
                        {/* Solution Card */}
                        <motion.div
                            className="sm:col-span-1 lg:col-span-7 bg-para-heading-color rounded-2xl p-4 md:px-4 md:py-3 lg:px-6 lg:py-4 flex flex-col h-full"
                            variants={getBoxVariants(contentGrowDirection)}
                        >
                            <motion.div variants={contentVariants} className="h-full flex flex-col">
                                <h3 className="text-sm md:text-base lg:text-lg font-bold text-white tracking-[0.05em] mb-2">
                                    Solution
                                </h3>
                                <p className="text-[11px] md:text-xs font-light text-white leading-relaxed tracking-[0.05em] flex-1">
                                    {details.fullSolution
                                        ? details.solution
                                        : (shouldTruncate(details.solution)
                                            ? truncateText(details.solution)
                                            : details.solution)}
                                </p>
                                {(details.fullSolution || shouldTruncate(details.solution)) && (
                                    <button
                                        onClick={() => openModal(details.title, details.tagline || 'Solution', details.fullSolution || details.solution)}
                                        className="text-xs text-blue-400 hover:text-blue-300 transition-colors tracking-[0.07em] cursor-pointer self-end"
                                    >
                                        ...see more
                                    </button>
                                )}
                            </motion.div>
                        </motion.div>

                        {/* Client Type Card */}
                        <motion.div
                            className="sm:col-span-1 lg:col-span-5 bg-para-heading-color rounded-2xl p-4 md:px-4 md:py-3 lg:px-6 lg:py-4 flex flex-col h-full"
                            variants={getBoxVariants(contentGrowDirection)}
                        >
                            <motion.div variants={contentVariants} className="h-full flex flex-col">
                                <h3 className="text-sm md:text-base lg:text-lg font-bold text-white tracking-[0.05em] mb-2">
                                    Client type
                                </h3>
                                <p className="text-base md:text-lg lg:text-xl font-bold text-secondary-gray-color leading-tight ">
                                    {details.clientType}
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Results Card */}
                    <motion.div
                        className={`bg-para-heading-color rounded-2xl p-4 md:px-4 md:py-3 lg:px-6 lg:py-3
                    ${details.alignment === 'right'
                                ? 'lg:rounded-l-2xl lg:rounded-r-none'
                                : 'lg:rounded-l-none lg:rounded-r-2xl'
                            }`}
                        variants={getBoxVariants(contentGrowDirection)}
                    >
                        <motion.div variants={contentVariants}>
                            <h3 className="text-sm md:text-base lg:text-lg font-bold text-white tracking-[0.05em]">
                                Results
                            </h3>
                            <div className="grid grid-cols-2 gap-4 md:gap-6">
                                <div>
                                    <p className="text-2xl md:text-3xl font-bold text-white tracking-[0.05em] leading-tight">
                                        <Counter value={details.results.deliveries} />
                                    </p>
                                    <p className="text-xs md:text-sm font-bold text-secondary-gray-color tracking-[0.05em]">
                                        Deliveries
                                    </p>
                                </div>
                                <div>
                                    <p className="text-2xl md:text-3xl font-bold text-white tracking-[0.05em] leading-tight">
                                        <Counter value={details.results.testimonials} />
                                    </p>
                                    <p className="text-xs md:text-sm font-bold text-secondary-gray-color tracking-[0.05em]">
                                        Testimonials
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}