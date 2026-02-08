import { motion } from "framer-motion";

export function ProblemSection() {
  return (
    <section className="pt-32 pb-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-7 tracking-tighter leading-[1.15]">
            By the time symptoms show, it's already late.
          </h2>
          <p className="text-xl text-slate-600/90 dark:text-slate-400/90 mb-5 leading-relaxed font-medium">
            Most apps show yesterday's data. VytalCare shows tomorrow's risks — so you can stay ahead today.
          </p>
          <p className="text-xs text-slate-500/70 dark:text-slate-400/70 tracking-widest uppercase">
            Most chronic conditions grow silently long before symptoms appear.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent dark:from-transparent dark:via-slate-700/50 dark:to-transparent -translate-y-1/2 hidden md:block" />

          <div className="grid md:grid-cols-2 gap-12 md:gap-28 relative">
            {/* Old Way */}
            <motion.div
              className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-12 rounded-[2rem] shadow-lg shadow-slate-300/40 dark:shadow-slate-950/70 border border-slate-300/50 dark:border-slate-800/50 relative z-10 hover:shadow-xl hover:shadow-slate-300/50 transition-all duration-500"
              initial={{ opacity: 0, x: -40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="absolute -top-3.5 left-8 bg-gradient-to-br from-slate-200 to-slate-300 text-slate-700 text-[0.7rem] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">Reactive Health</div>
              <p className="text-[0.65rem] uppercase tracking-[0.15em] text-slate-500/60 mb-4 font-semibold">After symptoms appear</p>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 tracking-tight">Wait for Symptoms</h3>
              <ul className="space-y-5 text-slate-700/90 dark:text-slate-400/90">
                <li className="flex items-start gap-3.5">
                  <span className="text-red-500 text-lg mt-0.5 font-bold">✕</span>
                  <span className="leading-relaxed">Miss early warning signs your body sends</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="text-red-500 text-lg mt-0.5 font-bold">✕</span>
                  <span className="leading-relaxed">Small problems escalate into emergencies</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="text-red-500 text-lg mt-0.5 font-bold">✕</span>
                  <span className="leading-relaxed">Health decisions happen under panic</span>
                </li>
              </ul>
            </motion.div>

            {/* Vytal Way */}
            <motion.div
              className="bg-gradient-to-br from-white via-white to-teal-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-teal-950/20 backdrop-blur-sm p-12 rounded-[2rem] shadow-2xl shadow-teal-500/[0.12] border-2 border-teal-400/30 dark:border-teal-500/30 relative z-10 hover:shadow-[0_25px_50px_-12px_rgba(20,184,166,0.25)] hover:border-teal-400/45 dark:hover:border-teal-500/45 transition-all duration-500 group"
              initial={{ opacity: 0, x: 40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-3.5 left-8 bg-gradient-to-br from-teal-100 via-teal-50 to-emerald-50 text-teal-800 dark:from-teal-900/50 dark:via-teal-900/40 dark:to-emerald-900/40 dark:text-teal-300 text-[0.7rem] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md shadow-teal-500/20">Predictive Health</div>
              <p className="text-[0.65rem] uppercase tracking-[0.15em] text-slate-500/60 mb-4 font-semibold relative">Before symptoms appear</p>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 tracking-tight relative">Act on Signals</h3>
              <ul className="space-y-5 text-slate-700/90 dark:text-slate-400/90 relative">
                <li className="flex items-start gap-3.5">
                  <span className="text-teal-600 dark:text-teal-500 text-lg mt-0.5 font-bold">✓</span>
                  <span className="leading-relaxed">Catch problems weeks earlier</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="text-teal-600 dark:text-teal-500 text-lg mt-0.5 font-bold">✓</span>
                  <span className="leading-relaxed">Act calmly with guided insights</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="text-teal-600 dark:text-teal-500 text-lg mt-0.5 font-bold">✓</span>
                  <span className="leading-relaxed">Stay ahead instead of reacting</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center">
          <p className="text-center text-2xl md:text-3xl font-heading font-bold text-slate-900/95 dark:text-slate-200/95 tracking-tight mb-1">
            This isn't health tracking. It's <span className="text-teal-600 dark:text-teal-500 font-extrabold">health foresight</span>.
          </p>
          <p className="text-center text-sm text-slate-500/70 dark:text-slate-400/70 mb-8">
            Every day without insight is a missed opportunity to prevent.
          </p>
          <a
            href="#"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-semibold rounded-full shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/40 transition-all duration-300 text-sm tracking-wide"
          >
            See how predictive health works
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
