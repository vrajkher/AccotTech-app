"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Shield,
  Award,
  ExternalLink,
} from "lucide-react";

const FOOTER_LINKS = {
  Services: [
    "Income Tax Returns",
    "GST Compliance",
    "Cost Accounting",
    "Audit & Assurance",
    "Virtual CFO",
    "Company Registration",
    "International Taxation",
    "Payroll Management",
  ],
  Company: [
    "About Us",
    "Our Team",
    "Careers",
    "Press & Media",
    "Client Success Stories",
    "Partner Program",
    "CSR Initiatives",
  ],
  Resources: [
    "Knowledge Blog",
    "Tax Calculator",
    "GST Validator",
    "Compliance Calendar",
    "Industry Reports",
    "Webinars",
    "FAQs",
  ],
  Legal: [
    "Privacy Policy",
    "Terms of Service",
    "Disclaimer",
    "Cookie Policy",
    "Refund Policy",
    "Data Security",
  ],
};

const CERTIFICATIONS = [
  { icon: Shield, label: "ICAI Registered" },
  { icon: Award, label: "ICMAI Certified" },
  { icon: Shield, label: "ISO 27001" },
  { icon: Award, label: "MSME Certified" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020817] border-t border-white/5 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      {/* Newsletter bar */}
      <div className="border-b border-white/5 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3
                className="text-2xl font-bold text-white mb-1"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Tax & Compliance Alerts — Direct to Inbox
              </h3>
              <p className="text-slate-400 text-sm">
                Get due date reminders, new regulation updates, and tax-saving tips. Join 12,000+ subscribers.
              </p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 lg:w-72 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-[#D4AF37]/50 transition-all"
              />
              <button className="btn-primary py-3 px-6 rounded-xl flex-shrink-0">
                Subscribe <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-6 gap-10 mb-16">
            {/* Brand col (2 wide) */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F0C040] flex items-center justify-center shadow-lg">
                  <Zap size={20} className="text-[#020817] fill-current" />
                </div>
                <div>
                  <div className="text-xl font-bold">
                    <span className="text-white">Acco</span>
                    <span className="gradient-text">Tech</span>
                    <span className="text-[#D4AF37]">AI</span>
                  </div>
                  <div className="text-[10px] text-slate-500 tracking-wider">LTD OPC · CMA · CA FIRM</div>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                India&apos;s premier AI-native CMA &amp; CA practice. We combine certified
                financial expertise with proprietary AI to deliver faster, smarter, and more
                accurate accounting services.
              </p>

              {/* Certifications */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {CERTIFICATIONS.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 text-xs text-slate-500 glass px-3 py-2 rounded-lg"
                  >
                    <Icon size={12} className="text-[#D4AF37]" />
                    {label}
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="flex gap-3">
                {[
                  { label: "LinkedIn", href: "#", color: "#0077B5", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
                  { label: "Twitter", href: "#", color: "#1DA1F2", path: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" },
                  { label: "YouTube", href: "#", color: "#FF0000", path: "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.97A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" },
                  { label: "Instagram", href: "#", color: "#E1306C", path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" },
                ].map(({ label, href, color, path }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-500 hover:text-white transition-all duration-200"
                    onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
                  {heading}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-slate-500 hover:text-[#D4AF37] transition-colors duration-150"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact strip */}
          <div className="border-t border-white/5 pt-8 mb-8">
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: MapPin, text: "4th Floor, One Horizon Centre, Sector 43, Gurgaon, HR 122002", color: "#D4AF37" },
                { icon: Phone, text: "+91 98765 43210  |  +91 11 4567 8900", color: "#3B82F6" },
                { icon: Mail, text: "hello@accotechai.in  |  support@accotechai.in", color: "#10B981" },
              ].map(({ icon: Icon, text, color }) => (
                <div key={text} className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${color}15` }}
                  >
                    <Icon size={14} style={{ color }} />
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-600">
              © {year} AccoTechAI Ltd OPC. All rights reserved. | CIN: U74999DL2009OPC000001
            </p>
            <div className="flex items-center gap-6">
              {["Privacy", "Terms", "Sitemap"].map((item) => (
                <a key={item} href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
                  {item}
                </a>
              ))}
            </div>
            <p className="text-xs text-slate-600">
              Reg. Office: Gurgaon, Haryana, India | GSTIN: 06AANCA1234A1Z5
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
