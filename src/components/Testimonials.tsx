"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Rohit Agarwal",
    role: "CEO, NexGen Manufacturing Ltd",
    city: "Pune",
    review:
      "AccoTechAI transformed our cost accounting overnight. Their AI-generated variance analysis revealed hidden inefficiencies we'd been missing for years. Saved us ₹1.2 crore in the first year alone. The CMA team is brilliant.",
    rating: 5,
    highlight: "Saved ₹1.2 Cr",
    initials: "RA",
    color: "#D4AF37",
  },
  {
    name: "Prachi Desai",
    role: "Founder, HealthFirst Diagnostics",
    city: "Mumbai",
    review:
      "GST compliance used to be a nightmare for us. With AccoTechAI's automated GSTR-1/3B reconciliation, everything is filed on time and I have zero stress. Their dashboard gives me real-time GST liability visibility. Highly recommended!",
    rating: 5,
    highlight: "Zero Compliance Stress",
    initials: "PD",
    color: "#10B981",
  },
  {
    name: "Sanjay Kumar",
    role: "CFO, TechVenture Pvt Ltd",
    city: "Bengaluru",
    review:
      "We were a Series-A startup burning cash on a full-time CFO when we didn't really need one. AccoTechAI's Virtual CFO program gave us investor-grade MIS at 20% of the cost. Our investors love the reporting quality.",
    rating: 5,
    highlight: "80% Cost Saving on CFO",
    initials: "SK",
    color: "#3B82F6",
  },
  {
    name: "Meera Krishnan",
    role: "MD, Krishnan Export House",
    city: "Chennai",
    review:
      "International taxation for exporters is incredibly complex — FEMA, transfer pricing, DTAA. AccoTechAI's team handled everything seamlessly. Their CA walked us through every ruling. I trust them completely with cross-border work.",
    rating: 5,
    highlight: "Seamless Cross-Border Tax",
    initials: "MK",
    color: "#8B5CF6",
  },
  {
    name: "Vikram Singh",
    role: "Director, Agritech Solutions",
    city: "Jaipur",
    review:
      "I was skeptical about 'AI accounting' at first. Tried AccoTechAI for income tax and was blown away — my ITR was processed in 3 hours with a full deduction analysis I'd never received from any CA before. Zero errors. Brilliant team.",
    rating: 5,
    highlight: "ITR Filed in 3 Hours",
    initials: "VS",
    color: "#F59E0B",
  },
  {
    name: "Dr. Anita Reddy",
    role: "Proprietor, Reddy Dental Clinic",
    city: "Hyderabad",
    review:
      "As a doctor running a small practice, accounting was always painful. AccoTechAI made it effortless. They handle everything — payroll, GST, income tax — and send me a simple WhatsApp summary every month. That's what I needed.",
    rating: 5,
    highlight: "Effortless for Professionals",
    initials: "AR",
    color: "#06B6D4",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const prev = () => {
    setAutoPlay(false);
    setActive((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };
  const next = () => {
    setAutoPlay(false);
    setActive((p) => (p + 1) % TESTIMONIALS.length);
  };

  const t = TESTIMONIALS[active];

  return (
    <section className="section-padding relative overflow-hidden bg-[#0A0F2C]/40">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto">Client Stories</div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Trusted by{" "}
            <span className="gradient-text">500+ Businesses</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Real stories from real clients who transformed their financial operations with AccoTechAI.
          </p>
        </motion.div>

        {/* Featured review */}
        <div className="max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-3xl p-8 lg:p-12 relative overflow-hidden"
            >
              {/* Gradient bg */}
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ background: `radial-gradient(circle at 80% 20%, ${t.color}, transparent 60%)` }}
              />

              {/* Quote icon */}
              <Quote size={40} className="mb-6 opacity-20" style={{ color: t.color }} />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>

              <blockquote
                className="text-xl lg:text-2xl text-slate-200 leading-relaxed mb-8 font-light"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                &ldquo;{t.review}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold flex-shrink-0"
                    style={{ background: `${t.color}20`, color: t.color, border: `2px solid ${t.color}30` }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">{t.name}</div>
                    <div className="text-slate-400 text-sm">{t.role}</div>
                    <div className="text-slate-500 text-xs mt-0.5">📍 {t.city}</div>
                  </div>
                </div>
                <div
                  className="px-4 py-2 rounded-xl text-sm font-bold"
                  style={{ background: `${t.color}15`, color: t.color }}
                >
                  ✓ {t.highlight}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-colors border border-white/10"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAutoPlay(false); setActive(i); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === active ? "w-8 h-2 bg-[#D4AF37]" : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-colors border border-white/10"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Mini cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {TESTIMONIALS.map((test, i) => (
            <motion.button
              key={test.name}
              onClick={() => { setAutoPlay(false); setActive(i); }}
              whileHover={{ scale: 1.04 }}
              className={`glass rounded-xl p-4 text-left transition-all duration-200 ${
                i === active ? "ring-1 ring-[#D4AF37]/50" : "opacity-60 hover:opacity-100"
              }`}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold mb-2"
                style={{ background: `${test.color}20`, color: test.color }}
              >
                {test.initials}
              </div>
              <div className="text-xs font-medium text-white truncate">{test.name.split(" ")[0]}</div>
              <div className="text-[10px] text-slate-500 truncate">{test.city}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
