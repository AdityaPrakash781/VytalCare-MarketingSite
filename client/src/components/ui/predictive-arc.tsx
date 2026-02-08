import { motion } from "framer-motion";

export function PredictiveArc() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl"
                viewBox="0 0 800 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    d="M 100 350 Q 400 50 700 350"
                    stroke="url(#arcGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
                    transition={{
                        pathLength: { duration: 3, ease: "easeInOut" },
                        opacity: { duration: 3, ease: "easeInOut" },
                        repeat: Infinity,
                        repeatDelay: 4,
                    }}
                />

                <defs>
                    <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#14b8a6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                    </linearGradient>

                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>
        </div>
    );
}
