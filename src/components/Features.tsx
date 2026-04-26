"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  ShieldCheck,
  Clock,
  BarChart3,
  HeadphonesIcon,
  Layers,
  Lock,
  Zap,
} from "lucide-react";

const FEATURES = [
  {
    icon: BrainCircuit,
    title: "AI-First Methodology",
    description:
      "Our proprietary AI models auto-classify 10,000+ transaction types, spot anomalies, and generate insights no human auditor could find in time.",
    color: "#D4AF37",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Error Guarantee",
    description:
      "Triple-verification: AI pre-check → Expert review → Automated compliance check. If we miss something, we fix it free — no questions asked.",
    color: "#10B981",
  },
  {
    icon: Clock,
    title: "10x Faster Turnaround",
    description:
      "Automated data extraction, reconciliation, and report generation means returns filed in hours, not days. No more last-minute deadline stress.",
    color: "#3B82F6",
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboards",
    description:
      "Live financial dashboards updated daily. Track P&L, cash flow, GST liability, TDS payable — all from one intelligent command centre.",
    color: "#8B5CF6",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Client Success",
    description:
      "Every client gets a named CMA/CA + a tech success manager. Reach us via WhatsApp, email, or phone — response within 2 business hours.",
    color: "#F59E0B",
  },
  {
    icon: Layers,
    title: "Seamless Integrations",
    description:
      "Plug into Tally, Zoho Books, QuickBooks, SAP, Oracle, and 30+ ERP systems. Automated data sync — no manual exports ever again.",
    color: "#06B6D4",
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description:
      "256-bit AES encryption, ISO 27001 certified infrastructure, role-based access controls, and full audit trail for every action.",
    color: "#EC4899",
  },
  {
    icon: Zap,
    title: "Scalable as You Grow",
    description:
      "From a solopreneur to a 500-Cr enterprise — our pricing and delivery scales with you. No lock-ins, no bloated retainers.",
    color: "#F97316",
  },
];

export default function Features() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#0A0F2C]/30">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-[#3B82F6]/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto">Why AccoTechAI</div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            The AccoTechAI{" "}
            <span className="gradient-text">Advantage</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We&apos;ve rethought accounting from first principles — not incremental
            improvement, but a fundamentally better experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="glass rounded-2xl p-6 card-hover group relative overflow-hidden"
              >
                {/* Hover glow bg */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 0% 0%, ${feat.color}08, transparent 60%)`,
                  }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${feat.color}12`,
                    border: `1px solid ${feat.color}30`,
                  }}
                >
                  <Icon size={22} style={{ color: feat.color }} />
                </div>

                <h3 className="text-sm font-bold text-white mb-2 leading-tight">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">{feat.description}</p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${feat.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Center comparison callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 glass rounded-3xl p-8 lg:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#3B82F6]/5 pointer-events-none" />
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3
                className="text-2xl lg:text-3xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Traditional Firm vs{" "}
                <span className="gradient-text">AccoTechAI</span>
              </h3>
              <p className="text-slate-400">
                The difference is not just speed — it&apos;s a completely different quality of insight.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Filing Time", traditional: "7-14 days", ours: "2-4 hours" },
                { label: "Error Rate", traditional: "3-8%", ours: "< 0.2%" },
                { label: "Insights", traditional: "Quarterly", ours: "Real-time" },
                { label: "Response", traditional: "24-48 hrs", ours: "< 2 hrs" },
              ].map((row) => (
                <div key={row.label} className="glass rounded-xl p-4">
                  <div className="text-xs text-slate-500 mb-2 font-medium">{row.label}</div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-red-400 line-through">{row.traditional}</div>
                    <div className="text-xs font-bold text-[#10B981]">→ {row.ours}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
