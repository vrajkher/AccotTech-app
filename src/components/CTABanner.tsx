"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 via-[#3B82F6]/10 to-[#8B5CF6]/10" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#3B82F6]/10 blur-[120px] pointer-events-none" />

      {/* Animated border top/bottom */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#F0C040] items-center justify-center mb-6 shadow-[0_8px_32px_rgba(212,175,55,0.3)]"
          >
            <Zap size={28} className="text-[#020817] fill-current" />
          </motion.div>

          <h2
            className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Stop Leaving Money on the Table.
            <br />
            <span className="gradient-text">Start with AccoTechAI Today.</span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 500+ businesses that cut their compliance costs by 40%, eliminated
            filing errors, and gained real-time financial clarity — starting with a
            free 30-minute consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary text-lg px-10 py-4 rounded-xl shadow-[0_8px_40px_rgba(212,175,55,0.35)]"
            >
              Book Free Consultation <ArrowRight size={20} />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.04 }}
              href="tel:+919876543210"
              className="btn-secondary text-lg px-10 py-4 rounded-xl"
            >
              📞 Call Now: +91 98765 43210
            </motion.a>
          </div>

          <p className="text-sm text-slate-600 mt-6">
            No commitment • No credit card • Get a response within 2 business hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
