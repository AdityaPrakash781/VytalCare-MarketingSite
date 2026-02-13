import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { FeaturesSection } from "@/components/sections/features";
import { TrustSection } from "@/components/sections/trust";
import { CTASection } from "@/components/sections/cta";
import { MissionSlider } from "@/components/sections/mission-slider";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-teal-100 dark:selection:bg-teal-900">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <TrustSection />
        <CTASection />
        <MissionSlider />
      </main>

      <footer className="py-12 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 overflow-hidden flex items-center scale-105 transition-transform duration-300">
              <img
                src="/favicon.png"
                alt="ProVytal logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-heading font-bold text-lg">ProVytal</span>
          </div>
          <div className="text-sm text-slate-500">
            © 2026 ProVytal Health Inc. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#privacy" className="hover:text-slate-900 dark:hover:text-white">Privacy</a>
            <a href="#terms" className="hover:text-slate-900 dark:hover:text-white">Terms</a>
            <a href="https://twitter.com/ProVytal" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
