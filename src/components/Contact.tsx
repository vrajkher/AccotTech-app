"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

const SERVICES_LIST = [
  "Income Tax / ITR Filing",
  "GST Registration & Compliance",
  "Cost & Management Accounting",
  "Statutory / Internal Audit",
  "Virtual CFO",
  "Company Registration",
  "International Taxation",
  "Payroll Management",
  "AI Analytics & Dashboard",
  "Other",
];

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Office",
    value: "AccoTechAI Ltd OPC, 4th Floor, Tower B, One Horizon Centre, Sector 43, Gurgaon — 122002",
    color: "#D4AF37",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210 | +91 11 4567 8900",
    color: "#3B82F6",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@accotechai.in | support@accotechai.in",
    color: "#10B981",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Sat: 9 AM – 7 PM IST\nEmergency: 24/7 for retainer clients",
    color: "#8B5CF6",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", service: "", budget: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/8 transition-all duration-200";

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F2C]/40 to-[#020817]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto">Get In Touch</div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Let&apos;s Start Your{" "}
            <span className="gradient-text">Financial Journey</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Free consultation with a senior CA or CMA. No sales pitch — just an honest
            assessment of how we can help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {CONTACT_INFO.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="glass rounded-2xl p-5 flex gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                  >
                    <Icon size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                      {item.value}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919876543210?text=Hi%20AccoTechAI%2C%20I%20want%20a%20free%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-5 flex items-center gap-4 border border-[#25D366]/20 hover:border-[#25D366]/40 transition-colors group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#25D366]/15 flex items-center justify-center">
                <MessageCircle size={20} className="text-[#25D366]" />
              </div>
              <div>
                <div className="text-sm font-bold text-white group-hover:text-[#25D366] transition-colors">
                  Chat on WhatsApp
                </div>
                <div className="text-xs text-slate-500">Instant response · Free consultation</div>
              </div>
            </a>

            {/* Quick turnaround promise */}
            <div className="glass-gold rounded-2xl p-5">
              <div className="text-[#D4AF37] font-bold mb-2 flex items-center gap-2">
                <CheckCircle2 size={16} />
                Our Promise to You
              </div>
              <ul className="space-y-1.5 text-sm text-slate-400">
                <li>• Response within 2 business hours</li>
                <li>• Free 30-minute strategy call</li>
                <li>• No obligation, no pushy sales</li>
                <li>• Confidentiality guaranteed</li>
              </ul>
            </div>
          </motion.div>

          {/* Form (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-3xl p-12 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#10B981]/15 flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle2 size={36} className="text-[#10B981]" />
                </div>
                <h3
                  className="text-2xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Message Received!
                </h3>
                <p className="text-slate-400 text-base mb-6 max-w-xs mx-auto">
                  Our team will reach out within 2 business hours. Check your inbox for a
                  confirmation email.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary px-6 py-2.5 rounded-xl text-sm"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                      Your Name *
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Rahul Sharma"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                      Company / Firm
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Industries Pvt Ltd"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="rahul@company.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                      Phone Number *
                    </label>
                    <input
                      required
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                      Service Required *
                    </label>
                    <select
                      required
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="" disabled>Select a service...</option>
                      {SERVICES_LIST.map((s) => (
                        <option key={s} value={s} className="bg-[#0D1B3E]">{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                      Monthly Budget
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="" disabled>Select range...</option>
                      <option className="bg-[#0D1B3E]">Under ₹5,000/mo</option>
                      <option className="bg-[#0D1B3E]">₹5,000 – ₹15,000/mo</option>
                      <option className="bg-[#0D1B3E]">₹15,000 – ₹50,000/mo</option>
                      <option className="bg-[#0D1B3E]">₹50,000+ /mo</option>
                      <option className="bg-[#0D1B3E]">One-time project</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                    Tell Us About Your Requirement
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your accounting/tax challenges, business type, turnover, etc."
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center py-4 rounded-xl text-base disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="40" strokeDashoffset="10" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message & Book Consultation
                    </>
                  )}
                </motion.button>
                <p className="text-center text-xs text-slate-600">
                  By submitting, you agree to our Privacy Policy. We never share your data.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
