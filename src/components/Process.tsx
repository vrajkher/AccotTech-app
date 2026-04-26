"use client";

import { motion } from "framer-motion";
import { MessageSquare, Upload, BrainCircuit, CheckCircle2, ArrowRight } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    description:
      "Tell us about your business, pain points, and goals. Our experts listen — not sell. We'll map the exact services you need and nothing more.",
    duration: "30 minutes",
    color: "#D4AF37",
    detail: "Free consultation, no commitment required",
  },
  {
    step: "02",
    icon: Upload,
    title: "Data Onboarding",
    description:
      "Securely share your books, bank statements, and documents. Our AI ingestion engine handles Tally exports, Excel sheets, PDFs, and raw bank data.",
    duration: "1-2 days",
    color: "#3B82F6",
    detail: "Bank-grade 256-bit encrypted upload portal",
  },
  {
    step: "03",
    icon: BrainCircuit,
    title: "AI Processing & Review",
    description:
      "Our AI classifies every transaction, reconciles balances, flags anomalies, and drafts all required filings. Senior CAs and CMAs then review and validate.",
    duration: "2-4 hours",
    color: "#8B5CF6",
    detail: "Dual validation: AI + certified expert",
  },
  {
    step: "04",
    icon: CheckCircle2,
    title: "Delivery & Insights",
    description:
      "Receive your filed documents, management reports, and a plain-English insights summary. Your live dashboard is updated in real-time going forward.",
    duration: "Same day",
    color: "#10B981",
    detail: "Dashboard access, WhatsApp alerts included",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020817] to-[#0A0F2C]/40" />
      <div className="absolute inset-0 dot-bg opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto">How It Works</div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            From Chaos to Clarity in{" "}
            <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We&apos;ve engineered a frictionless onboarding and delivery process
            that gets you accurate results faster than any traditional firm.
          </p>
        </motion.div>

        {/* Timeline desktop */}
        <div className="hidden lg:block relative">
          {/* Horizontal connector */}
          <div className="absolute top-[72px] left-[calc(12.5%)] right-[calc(12.5%)] h-0.5 bg-white/5" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
            className="absolute top-[72px] left-[calc(12.5%)] right-[calc(12.5%)] h-0.5 bg-gradient-to-r from-[#D4AF37] via-[#3B82F6] via-[#8B5CF6] to-[#10B981] origin-left"
          />

          <div className="grid grid-cols-4 gap-6">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step circle */}
                  <div className="relative mb-8">
                    <div
                      className="w-[60px] h-[60px] rounded-full flex items-center justify-center z-10 relative border-4"
                      style={{
                        background: `${step.color}15`,
                        borderColor: `${step.color}40`,
                      }}
                    >
                      <Icon size={22} style={{ color: step.color }} />
                    </div>
                    <div
                      className="absolute -inset-2 rounded-full blur-md opacity-30"
                      style={{ background: step.color }}
                    />
                    <div
                      className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: step.color, color: "#020817" }}
                    >
                      {step.step}
                    </div>
                  </div>

                  {/* Duration badge */}
                  <div
                    className="px-3 py-1 rounded-full text-xs font-semibold mb-4"
                    style={{ background: `${step.color}15`, color: step.color }}
                  >
                    ⏱ {step.duration}
                  </div>

                  <h3
                    className="text-lg font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <p className="text-xs text-slate-600 italic">{step.detail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="lg:hidden space-y-6">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 flex gap-5"
              >
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: `${step.color}15`, border: `2px solid ${step.color}40` }}
                  >
                    <Icon size={20} style={{ color: step.color }} />
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="w-0.5 flex-1 mt-2 bg-white/5" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded"
                      style={{ background: step.color, color: "#020817" }}
                    >
                      STEP {step.step}
                    </span>
                    <span className="text-xs text-slate-500">{step.duration}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="text-slate-400 mb-6 text-lg">
            Ready to experience the AccoTechAI difference?
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary px-8 py-4 rounded-xl text-base"
          >
            Start My Free Onboarding <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
