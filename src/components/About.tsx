"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Award,
  Users,
  BrainCircuit,
  ArrowRight,
  Mail,
  ExternalLink,
} from "lucide-react";

const ACHIEVEMENTS = [
  "ICAI & ICMAI dual-registered firm",
  "Serving clients in 15+ cities across India",
  "Specialize in manufacturing, healthcare, IT & e-commerce sectors",
  "AI-first approach since inception — not an afterthought",
  "Dedicated client success managers for every account",
  "100% cloud-based — access your financials anywhere, anytime",
];

const TEAM = [
  {
    name: "CA Priya Sharma",
    role: "Founder & Managing Partner",
    qual: "FCA, CFA",
    bio: "15+ years in corporate finance and statutory audit. Former Big4 consultant. Architected the AI compliance engine at AccoTechAI.",
    specialty: "Tax & Audit Strategy",
    color: "#D4AF37",
  },
  {
    name: "CMA Rahul Verma",
    role: "Head — Cost & Management",
    qual: "FCMA, MBA (Finance)",
    bio: "Expert in industrial costing, transfer pricing, and MIS design for manufacturing giants. Certified IFRS professional.",
    specialty: "Cost Optimization",
    color: "#3B82F6",
  },
  {
    name: "CA Arjun Mehta",
    role: "Director — Technology & AI",
    qual: "ACA, B.Tech (CS)",
    bio: "Bridges accounting and technology. Built the ML models that power AccoTechAI's predictive analytics and auto-reconciliation.",
    specialty: "AI & Fintech",
    color: "#10B981",
  },
];

export default function About() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F2C]/40 to-[#020817]" />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto">Our Story</div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Where Expertise Meets{" "}
            <span className="gradient-text">Intelligence</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Founded with a singular vision — to make world-class financial management
            accessible to every Indian business through the power of AI.
          </p>
        </motion.div>

        {/* Main about block */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left — visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Big decorative card */}
            <div className="relative rounded-3xl overflow-hidden glass p-1">
              <div className="rounded-[22px] bg-gradient-to-br from-[#0D1B3E] to-[#020817] p-8 relative overflow-hidden min-h-[420px] flex flex-col justify-between">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#D4AF37]/5 blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#3B82F6]/5 blur-[60px]" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#F0C040] flex items-center justify-center">
                      <BrainCircuit size={24} className="text-[#020817]" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">AccoTechAI</div>
                      <div className="text-slate-400 text-sm">AI Financial Intelligence</div>
                    </div>
                  </div>

                  {/* Fake dashboard widget */}
                  <div className="space-y-3 mb-6">
                    {[
                      { label: "Tax Compliance Score", value: 98, color: "#10B981" },
                      { label: "GST ITC Utilization", value: 94, color: "#3B82F6" },
                      { label: "Cost Variance", value: 3, color: "#D4AF37", suffix: "%" },
                    ].map((item) => (
                      <div key={item.label} className="glass rounded-xl p-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-slate-400">{item.label}</span>
                          <span className="font-bold" style={{ color: item.color }}>
                            {item.value}{item.suffix ?? "%"}
                          </span>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${Math.min(item.value, 100)}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="h-full rounded-full"
                            style={{ background: item.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom stats */}
                <div className="relative z-10 grid grid-cols-3 gap-3">
                  {[
                    { label: "Clients", val: "500+", icon: Users },
                    { label: "Certified", val: "ICAI", icon: Award },
                    { label: "AI-Powered", val: "100%", icon: BrainCircuit },
                  ].map(({ label, val, icon: Icon }) => (
                    <div key={label} className="text-center glass rounded-xl p-3">
                      <Icon size={16} className="text-[#D4AF37] mx-auto mb-1" />
                      <div className="text-white font-bold text-sm">{val}</div>
                      <div className="text-slate-500 text-xs">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-8, 0, -8] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -bottom-6 -right-6 glass-gold rounded-2xl px-5 py-3 shadow-xl"
            >
              <div className="text-[#D4AF37] font-bold text-lg">Since 2009</div>
              <div className="text-slate-400 text-xs">15+ Years of Trust</div>
            </motion.div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3
              className="text-3xl font-bold text-white mb-5"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              India&apos;s First AI-Native
              <br />
              CMA &amp; CA Practice
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              AccoTechAI Ltd OPC was born out of frustration with slow, error-prone
              accounting processes. We built our practice from day one with AI at its
              core — not as a plugin, but as the foundation. Today we serve 500+ clients
              ranging from high-growth startups to listed enterprises.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Our team of{" "}
              <span className="text-white font-medium">
                Chartered Accountants and Cost Management Accountants
              </span>{" "}
              work alongside proprietary AI models to deliver faster turnarounds,
              deeper insights, and zero-tolerance for compliance errors.
            </p>

            {/* Achievements */}
            <ul className="space-y-3 mb-8">
              {ACHIEVEMENTS.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 text-sm text-slate-300"
                >
                  <CheckCircle2 size={16} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <button
              onClick={() => handleNav("#contact")}
              className="btn-primary px-7 py-3.5 rounded-xl"
            >
              Work With Us <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="section-label mx-auto">The Team</div>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Meet Our{" "}
            <span className="gradient-text">Expert Leaders</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-2xl p-7 card-hover group"
            >
              {/* Avatar placeholder */}
              <div className="relative mb-5">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto"
                  style={{
                    background: `linear-gradient(135deg, ${member.color}20, ${member.color}40)`,
                    border: `2px solid ${member.color}40`,
                    color: member.color,
                    fontFamily: "var(--font-jakarta)",
                  }}
                >
                  {member.name.split(" ")[1][0]}
                  {member.name.split(" ").length > 2 ? member.name.split(" ")[2][0] : ""}
                </div>
                <div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap"
                  style={{ background: member.color, color: "#020817" }}
                >
                  {member.qual}
                </div>
              </div>
              <h4 className="text-lg font-bold text-white text-center mb-1">{member.name}</h4>
              <p className="text-sm text-slate-400 text-center mb-4">{member.role}</p>
              <p className="text-sm text-slate-500 text-center mb-5 leading-relaxed">{member.bio}</p>
              <div
                className="text-xs font-semibold text-center px-3 py-1.5 rounded-full mx-auto w-fit"
                style={{ background: `${member.color}15`, color: member.color }}
              >
                {member.specialty}
              </div>
              <div className="flex items-center justify-center gap-3 mt-5">
                <button className="text-slate-500 hover:text-[#0077B5] transition-colors">
                  <ExternalLink size={16} />
                </button>
                <button className="text-slate-500 hover:text-[#D4AF37] transition-colors">
                  <Mail size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
