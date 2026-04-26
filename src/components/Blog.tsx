"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const POSTS = [
  {
    category: "AI & Tax",
    tag_color: "#D4AF37",
    title: "How AI is Transforming ITR Filing in India: A 2026 Deep Dive",
    excerpt:
      "Machine learning models now auto-classify 10,000+ transaction types, predict tax liability with 99.8% accuracy, and generate ITR-3 in minutes. We break down the technology behind the transformation.",
    date: "Apr 18, 2026",
    readTime: "7 min read",
    author: "CA Priya Sharma",
  },
  {
    category: "GST Intelligence",
    tag_color: "#10B981",
    title: "GSTR-2B Reconciliation Made Effortless: The AI Auto-Match Solution",
    excerpt:
      "Missing ITC due to mismatches between GSTR-2B and purchase records costs Indian businesses billions annually. Our AI reconciliation engine cuts mismatch rates to under 0.3%. Here's how.",
    date: "Apr 10, 2026",
    readTime: "5 min read",
    author: "CMA Rahul Verma",
  },
  {
    category: "Virtual CFO",
    tag_color: "#3B82F6",
    title: "Why Startups Need a Virtual CFO Before Their Series A — Not After",
    excerpt:
      "Most founders hire a CFO only after receiving investor term sheets. By then, messy books and poor MIS can kill the deal. We explain the 6 financial levers to clean up before raising.",
    date: "Apr 2, 2026",
    readTime: "9 min read",
    author: "CA Arjun Mehta",
  },
  {
    category: "Cost Accounting",
    tag_color: "#8B5CF6",
    title: "Standard Costing in 2026: Why AI-Driven Variance Analysis is Now Non-Negotiable",
    excerpt:
      "Traditional monthly variance reports are too late. Real-time AI cost monitoring catches deviations within hours, enabling corrective action before the damage compounds.",
    date: "Mar 25, 2026",
    readTime: "6 min read",
    author: "CMA Rahul Verma",
  },
  {
    category: "Compliance",
    tag_color: "#F59E0B",
    title: "The Complete FY 2025-26 Tax Calendar for Indian Businesses",
    excerpt:
      "A comprehensive month-by-month compliance calendar covering ITR, GST, TDS, ROC, and advance tax deadlines — with penalty clauses and pro tips to never miss a date again.",
    date: "Mar 15, 2026",
    readTime: "12 min read",
    author: "CA Priya Sharma",
  },
  {
    category: "International Tax",
    tag_color: "#06B6D4",
    title: "DTAA Benefits for Indian Exporters: A Practical Guide to Claiming Tax Relief",
    excerpt:
      "India has DTAA with 90+ countries. Yet 70% of exporters over-pay withholding tax due to incorrect treaty claims. Our treaty mapping tool and step-by-step guide fix this permanently.",
    date: "Mar 5, 2026",
    readTime: "8 min read",
    author: "CA Arjun Mehta",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020817] to-[#0A0F2C]/30" />
      <div className="absolute inset-0 dot-bg opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#3B82F6]/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto">Knowledge Hub</div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Insights &amp;{" "}
            <span className="gradient-text">Intelligence</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Expert perspectives on AI in accounting, GST, tax planning, and business finance —
            written by certified professionals, not content farms.
          </p>
        </motion.div>

        {/* Featured post (first) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 lg:p-10 mb-8 card-hover group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent pointer-events-none" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{ background: `${POSTS[0].tag_color}15`, color: POSTS[0].tag_color }}
                >
                  <Tag size={10} />
                  {POSTS[0].category}
                </span>
                <span className="text-xs text-slate-500 font-medium bg-white/5 px-2 py-1 rounded-full">
                  Featured Post
                </span>
              </div>
              <h3
                className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {POSTS[0].title}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">{POSTS[0].excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} />
                  {POSTS[0].date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} />
                  {POSTS[0].readTime}
                </span>
                <span className="text-[#D4AF37]">{POSTS[0].author}</span>
              </div>
              <button className="flex items-center gap-2 text-sm font-semibold text-[#D4AF37] hover:gap-3 transition-all">
                Read Full Article <ArrowRight size={14} />
              </button>
            </div>
            {/* Decorative right panel */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full max-w-xs glass rounded-2xl p-6 text-center">
                <div className="text-5xl font-bold gradient-text mb-2" style={{ fontFamily: "var(--font-jakarta)" }}>
                  99.8%
                </div>
                <div className="text-sm text-slate-400">AI Filing Accuracy</div>
                <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "99.8%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F0C040] rounded-full"
                  />
                </div>
                <div className="mt-4 text-xs text-slate-500">vs. 3-8% error rate industry avg</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid of remaining posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {POSTS.slice(1).map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 card-hover group cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ background: `${post.tag_color}15`, color: post.tag_color }}
                >
                  <Tag size={9} />
                  {post.category}
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-slate-600 pt-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={10} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={10} />
                    {post.readTime}
                  </span>
                </div>
                <ArrowRight
                  size={14}
                  className="text-slate-600 group-hover:text-[#D4AF37] transition-colors"
                />
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="btn-secondary px-8 py-3.5 rounded-xl">
            View All Articles <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
