import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

import slide1 from "@/assets/slide1.jpg";
import slide2 from "@/assets/slide2.jpg";
import slide3 from "@/assets/slide3.jpg";
import slide4 from "@/assets/slide4.jpg";

const slides = [
    {
        id: 1,
        image: slide4,
        label: "",
        headline: "The future belongs to people who understand their health early.",
        subtext: "We're making that future accessible.",
        hasLabel: false,
    },
    {
        id: 2,
        image: slide2,
        label: "",
        headline: "The worst health decisions are the ones made too late.",
        subtext: "We exist to move them earlier.",
        hasLabel: false,
    },
    {
        id: 3,
        image: slide3,
        label: "",
        headline: "No one should meet their health in a crisis first.",
        subtext: "Prevention should feel natural.",
        hasLabel: false,
    },
    {
        id: 4,
        image: slide1,
        label: "Our Mission",
        headline: "We're building intelligence that listens with you.",
        subtext: "",
        hasLabel: true,
    },
];

export function MissionSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    const goToSlide = useCallback((index: number) => {
        setCurrentSlide(index);
    }, []);

    // Auto-advance timer
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    // Drag detection
    const handleDragEnd = (_: any, info: any) => {
        const threshold = 50;
        if (info.offset.x > threshold) {
            prevSlide();
        } else if (info.offset.x < -threshold) {
            nextSlide();
        }
    };

    return (
        <section
            className="relative w-full h-screen overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    className="absolute inset-0 cursor-grab active:cursor-grabbing"
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "-100%", opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center pointer-events-none"
                        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                    />

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/30 pointer-events-none" />

                    {/* Blur Backdrop Effect */}
                    <div className="absolute inset-0 backdrop-blur-[2px] pointer-events-none" />

                    {/* Content */}
                    <div className="relative z-10 h-full flex items-center pointer-events-none">
                        <div className="container mx-auto px-6">
                            <div className="max-w-3xl">
                                {/* Label */}
                                {slides[currentSlide].hasLabel && (
                                    <motion.span
                                        className="inline-block text-teal-400 text-sm font-semibold tracking-widest uppercase mb-6"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                    >
                                        {slides[currentSlide].label}
                                    </motion.span>
                                )}

                                {/* Headline */}
                                <motion.h2
                                    className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 tracking-tight leading-[1.1]"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                >
                                    {slides[currentSlide].headline}
                                </motion.h2>

                                {/* Subtext */}
                                {slides[currentSlide].subtext && (
                                    <motion.p
                                        className="text-xl md:text-2xl text-white/80 font-light mb-10 max-w-2xl"
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                    >
                                        {slides[currentSlide].subtext}
                                    </motion.p>
                                )}

                                {/* Button */}
                                <motion.a
                                    href="#"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-teal-50 text-slate-900 font-semibold rounded-full shadow-lg transition-all duration-300 text-base pointer-events-auto"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                >
                                    Learn more
                                    <ArrowRight className="w-5 h-5" />
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 hover:opacity-100 hover:bg-white/20 transition-all duration-300"
                aria-label="Previous slide"
            >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 hover:opacity-100 hover:bg-white/20 transition-all duration-300"
                aria-label="Next slide"
            >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'bg-white w-8'
                                : 'bg-white/40 hover:bg-white/60'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
