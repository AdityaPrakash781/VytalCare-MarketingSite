import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  CalendarHeart,
  ShieldAlert,
  ScanLine,
  HeartHandshake
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Holistic Health Score",
    description: "Not just steps. We synthesize sleep, hydration, HRV, and BMI into a single, actionable daily score that evolves with you.",
    color: "bg-blue-500"
  },
  {
    icon: Brain,
    title: "Agentic AI Analysis",
    description: "Our AI doesn't just store data; it thinks. It spots patterns—like rising resting heart rate—days before you feel symptoms.",
    color: "bg-purple-500"
  },
  {
    icon: CalendarHeart,
    title: "Smart Meds & Calendar",
    description: "Visual schedules synced with your life. Snap a photo of your prescription, and AI handles the rest, reminders included.",
    color: "bg-teal-500"
  },
  {
    icon: ShieldAlert,
    title: "Caregiver Emergency Link",
    description: "Peace of mind for families. If vitals go out of safe range, your trusted circle is notified instantly with context.",
    color: "bg-red-500"
  },
  {
    icon: ScanLine,
    title: "Lab & Rx Scanning",
    description: "Turn paper chaos into structured data. Scan your lab results to let our AI cross-reference them with your daily vitals.",
    color: "bg-indigo-500"
  },
  {
    icon: HeartHandshake,
    title: "Accessible Design",
    description: "Built for everyone. High contrast modes, color-blind friendly visualizations, and large typography options included.",
    color: "bg-emerald-500"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mt-2 mb-6">
            A thinking system for your body.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            VytalCare moves beyond simple tracking to provide intelligent, contextual health awareness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="group p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:shadow-teal-900/5 hover:brightness-105 transition-all duration-500 hover:-translate-y-1"
              initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: idx * 0.12,
                duration: 0.7,
                ease: "easeOut"
              }}
            >
              <div className={`w-12 h-12 rounded-2xl ${feature.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 text-slate-900 dark:text-white`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
