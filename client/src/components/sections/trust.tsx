import { motion } from "framer-motion";
import { Lock, FileCheck, Eye, Smartphone } from "lucide-react";

export function TrustSection() {
  return (
    <section id="trust" className="scroll-mt-20 py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Privacy first.<br />No compromises.
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Your health data is the most sensitive information you own. We treat it with the same rigor as a Swiss bank. ProVytal is designed to assist, not diagnose, ensuring you remain in control.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Local-First Processing</h3>
                  <p className="text-slate-400 text-sm">Sensitive biometric analysis happens on your device whenever possible.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">No Ad Tracking</h3>
                  <p className="text-slate-400 text-sm">We don't sell your health profile to advertisers. Ever.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                  <FileCheck className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Ethical AI</h3>
                  <p className="text-slate-400 text-sm">Our models are trained to avoid anxiety-inducing false alarms. We provide context, not just warnings.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Transparency Report</h3>
              <p className="text-slate-400 text-sm">How we handle your data</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 rounded-xl bg-slate-800 border border-slate-700">
                <span className="text-sm font-medium">Encryption Standard</span>
                <span className="text-teal-400 font-mono text-sm">AES-256</span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-xl bg-slate-800 border border-slate-700">
                <span className="text-sm font-medium">Data Ownership</span>
                <span className="text-teal-400 font-mono text-sm">User 100%</span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-xl bg-slate-800 border border-slate-700">
                <span className="text-sm font-medium">Compliance</span>
                <span className="text-teal-400 font-mono text-sm">HIPAA Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
