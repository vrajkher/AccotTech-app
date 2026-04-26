"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Zap, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Tax & Compliance", href: "#services" },
      { label: "Management Accounting", href: "#services" },
      { label: "Audit & Assurance", href: "#services" },
      { label: "Virtual CFO", href: "#services" },
      { label: "AI Analytics", href: "#services" },
    ],
  },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ["home", "services", "about", "process", "blog", "contact"];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#020817]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F0C040] flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-300">
                  <Zap size={20} className="text-[#020817] fill-current" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#10B981] rounded-full border-2 border-[#020817] animate-pulse" />
              </div>
              <div>
                <div className="text-lg font-bold leading-none">
                  <span className="text-white">Acco</span>
                  <span className="gradient-text">Tech</span>
                  <span className="text-[#D4AF37]">AI</span>
                </div>
                <div className="text-[10px] text-slate-400 font-medium tracking-wider">
                  LTD OPC · CMA · CA
                </div>
              </div>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => !link.children && handleNav(link.href)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeSection === link.href.replace("#", "")
                        ? "text-[#D4AF37]"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`}
                      />
                    )}
                    {activeSection === link.href.replace("#", "") && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F0C040] rounded-full"
                      />
                    )}
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-52 glass rounded-xl overflow-hidden shadow-xl border border-white/10"
                      >
                        {link.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => handleNav(child.href)}
                            className="w-full text-left px-4 py-3 text-sm text-slate-300 hover:text-[#D4AF37] hover:bg-white/5 transition-colors duration-150 border-b border-white/5 last:border-0"
                          >
                            {child.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+91-XXXXXXXXXX"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#D4AF37] transition-colors"
              >
                <Phone size={14} />
                <span>+91 98765 43210</span>
              </a>
              <button
                onClick={() => handleNav("#contact")}
                className="btn-primary text-sm py-2.5 px-5"
              >
                Get Free Consultation
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-[#020817]/98 backdrop-blur-xl border-t border-white/5"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      onClick={() => handleNav(link.href)}
                      className="w-full text-left px-4 py-3 text-base font-medium text-slate-300 hover:text-[#D4AF37] hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {link.label}
                    </button>
                    {link.children && (
                      <div className="ml-4 flex flex-col gap-0.5">
                        {link.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => handleNav(child.href)}
                            className="w-full text-left px-4 py-2 text-sm text-slate-400 hover:text-[#D4AF37] hover:bg-white/5 rounded-lg transition-colors"
                          >
                            → {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <button
                    onClick={() => handleNav("#contact")}
                    className="btn-primary w-full justify-center text-sm"
                  >
                    Get Free Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
