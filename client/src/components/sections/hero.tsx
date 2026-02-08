import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Activity, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HealthRings } from "@/components/ui/health-rings";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { PredictiveArc } from "@/components/ui/predictive-arc";
import heroBg from "@assets/generated_images/abstract_medical_futuristic_gradient_background.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-40 dark:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white dark:from-slate-950/0 dark:to-slate-950" />
        <FloatingParticles count={25} />
        <PredictiveArc />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border border-teal-100 dark:border-teal-800 mb-6 text-sm font-medium"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            VytalCare AI 2.0 is live
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white mb-6"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
          >
            Preventing illness <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">before it starts.</span>
          </motion.h1>

          <motion.p
            className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-lg"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
            }}
          >
            Healthcare should act before damage is done. VytalCare uses agentic AI to monitor your vitals, detect early risk patterns, and guide you to optimal health.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
            <Button size="lg" className="bg-primary hover:bg-teal-700 text-white rounded-full h-14 px-8 text-lg shadow-xl shadow-teal-900/20 group">
              Start Preventing
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">
              See How It Works
            </Button>
          </motion.div>

          <motion.div
            className="mt-12 flex items-center gap-6 text-sm text-slate-500 font-medium"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-600" />
              <span>Medical-grade encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-teal-600" />
              <span>Real-time monitoring</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <HealthRings />
        </motion.div>
      </div>
    </section>
  );
}
