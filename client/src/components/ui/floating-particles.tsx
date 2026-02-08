import { motion } from "framer-motion";

interface FloatingParticle {
    id: number;
    x: number;
    y: number;
    delay: number;
    duration: number;
    size: number;
}

const generateParticles = (count: number): FloatingParticle[] => {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 4,
        size: 2 + Math.random() * 3,
    }));
};

export function FloatingParticles({ count = 20 }: { count?: number }) {
    const particles = generateParticles(count);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-teal-400/30 dark:bg-teal-500/20"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}
