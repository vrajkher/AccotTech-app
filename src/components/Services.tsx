"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  BarChart3,
  FileSearch,
  BrainCircuit,
  Building,
  Landmark,
  Receipt,
  Globe,
  ArrowRight,
} from "lucide-react";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  tags: string[];
  accent: string;
  featured?: boolean;
}

const SERVICES: Service[] = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Tax Intelligence",
    description:
      "Leverage machine learning to auto-classify transactions, detect deductions, and file income tax returns with near-zero error rates. Real-time TDS reconciliation and Form 26AS matching.",
    tags: ["ITR Filing", "TDS", "Advance Tax", "AI Auto-fill"],
    accent: "#D4AF37",
    featured: true,
  },
  {
    icon: Calculator,
    title: "Cost & Management Accounting",
    description:
      "Certified CMA professionals deliver product costing, standard costing, variance analysis, and management information systems (MIS) tailored to your industry.",
    tags: ["CMA Reports", "MIS", "Variance Analysis", "Budgeting"],
    accent: "#3B82F6",
    featured: true,
  },
  {
    icon: FileSearch,
    title: "Audit & Assurance",
    description:
      "Comprehensive statutory audit, internal audit, and forensic accounting powered by AI-driven anomaly detection to ensure compliance and catch irregularities early.",
    tags: ["Statutory Audit", "Internal Audit", "Forensic", "Compliance"],
    accent: "#10B981",
  },
  {
    icon: BarChart3,
    title: "GST Compliance Suite",
    description:
      "End-to-end GST management including registration, return filing (GSTR-1/3B/9), reconciliation, and automated ITC optimization.",
    tags: ["GSTR Filing", "ITC Claim", "Reconciliation", "GST Audit"],
    accent: "#F59E0B",
  },
  {
    icon: Landmark,
    title: "Virtual CFO Services",
    description:
      "On-demand CFO support for startups and SMEs — strategic financial planning, investor-ready MIS, fund raise support, and board-level reporting.",
    tags: ["Financial Strategy", "Investor MIS", "Fund Raise", "Board Reports"],
    accent: "#8B5CF6",
  },
  {
    icon: BrainCircuit,
    title: "AI Business Analytics",
    description:
      "Predictive financial modelling, cash flow forecasting, and real-time dashboards powered by AI — turning your numbers into growth decisions.",
    tags: ["Forecasting", "Dashboards", "Scenario Planning", "KPI Tracking"],
    accent: "#06B6D4",
  },
  {
    icon: Building,
    title: "Company Registration & ROC",
    description:
      "Seamless incorporation of Private Ltd, LLP, OPC, Section 8, and compliance filings — DIR-3 KYC, Annual Returns, Director changes, and XBRL tagging.",
    tags: ["Pvt Ltd", "LLP", "OPC", "ROC Compliance"],
    accent: "#EC4899",
  },
  {
    icon: Globe,
    title: "International Taxation",
    description:
      "Transfer pricing, FEMA/RBI compliance, DTAA benefit planning, and cross-border transaction advisory for exporters, importers, and NRIs.",
    tags: ["Transfer Pricing", "FEMA", "DTAA", "NRI Tax"],
    accent: "#F97316",
  },
  {
    icon: Receipt,
    title: "Payroll & Labour Compliance",
    description:
      "Automated payroll processing, PF/ESI filing, professional tax, gratuity calculation, and labour law compliance for businesses of all sizes.",
    tags: ["PF/ESI", "Professional Tax", "Payroll", "Labour Law"],
    accent: "#14B8A6",
  },
];

export default function Services() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020817] to-[#0A0F2C]/50" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto">What We Do</div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Comprehensive Financial{" "}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From tax compliance to AI analytics — every financial need, solved by
            certified experts and intelligent automation working in tandem.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className={`relative glass rounded-2xl p-7 card-hover group cursor-pointer ${
                  service.featured ? "ring-1" : ""
                }`}
                style={service.featured ? { boxShadow: `0 0 0 1px ${service.accent}30` } : {}}
              >
                {service.featured && (
                  <div
                    className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: service.accent, color: "#020817" }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${service.accent}12`,
                    border: `1px solid ${service.accent}30`,
                  }}
                >
                  <Icon size={26} style={{ color: service.accent }} />
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${service.accent}06, transparent 70%)` }}
                />

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{
                        background: `${service.accent}12`,
                        color: service.accent,
                        border: `1px solid ${service.accent}25`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className="flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-2 group-hover:translate-x-0"
                  style={{ color: service.accent }}
                >
                  Learn more <ArrowRight size={12} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-slate-400 mb-6">
            Not sure what you need?{" "}
            <span className="text-[#D4AF37] font-medium">
              Our experts will guide you.
            </span>
          </p>
          <button
            onClick={() => handleNav("#contact")}
            className="btn-primary px-8 py-4 rounded-xl"
          >
            Book Free Discovery Call <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
