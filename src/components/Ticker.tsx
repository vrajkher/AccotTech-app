"use client";

import { Zap } from "lucide-react";

const ITEMS = [
  "🤖 AI-Powered Tax Filing",
  "📊 Cost Management Accounting",
  "🔍 GST Compliance & Audit",
  "💼 Virtual CFO Services",
  "📈 Financial Forecasting",
  "🏢 Company Registration",
  "⚡ Real-Time Analytics",
  "🛡️ Risk Management",
  "💰 Income Tax Returns",
  "📉 Cash Flow Optimization",
  "🔐 Statutory Compliance",
  "🌐 International Taxation",
];

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="relative bg-[#D4AF37]/5 border-y border-[#D4AF37]/15 overflow-hidden py-3">
      <div className="flex items-center gap-4">
        {/* Fixed prefix */}
        <div className="flex-shrink-0 flex items-center gap-2 px-6 py-1 bg-gradient-to-r from-[#D4AF37] to-[#F0C040] z-10 relative">
          <Zap size={14} className="text-[#020817] fill-current" />
          <span className="text-xs font-bold text-[#020817] tracking-wider uppercase whitespace-nowrap">
            Our Services
          </span>
        </div>

        {/* Scrolling content */}
        <div className="overflow-hidden flex-1">
          <div className="ticker-content flex items-center gap-8 whitespace-nowrap">
            {doubled.map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-3 text-sm font-medium text-slate-400"
              >
                <span>{item}</span>
                {i < doubled.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37]/40 flex-shrink-0" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
