"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, FileText, TrendingUp, Star, Building2, Clock } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
  color: string;
}

const STATS: StatItem[] = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Happy Clients",
    description: "Businesses trust AccoTechAI",
    color: "#D4AF37",
  },
  {
    icon: FileText,
    value: 10000,
    suffix: "+",
    label: "Returns Filed",
    description: "Tax & GST returns with 100% accuracy",
    color: "#3B82F6",
  },
  {
    icon: TrendingUp,
    value: 50,
    suffix: "Cr+",
    prefix: "₹",
    label: "Tax Saved",
    description: "For our clients through smart planning",
    color: "#10B981",
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "/5",
    label: "Client Rating",
    description: "Average satisfaction score",
    color: "#F59E0B",
  },
  {
    icon: Building2,
    value: 15,
    suffix: "+",
    label: "Years Experience",
    description: "Deep domain expertise",
    color: "#8B5CF6",
  },
  {
    icon: Clock,
    value: 99.8,
    suffix: "%",
    label: "Accuracy Rate",
    description: "AI-verified financial accuracy",
    color: "#06B6D4",
  },
];

function CountUp({
  target,
  suffix,
  prefix = "",
  duration = 2,
  started,
}: {
  target: number;
  suffix: string;
  prefix?: string;
  duration?: number;
  started: boolean;
}) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(target % 1 !== 0 ? 1 : 0)));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [started, target, duration]);

  const display = target % 1 !== 0 ? count.toFixed(1) : Math.round(count).toLocaleString("en-IN");

  return (
    <span>
      {prefix}{display}{suffix}
    </span>
  );
}

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-[#0D1B3E]/30 to-[#020817]" />
      <div className="absolute inset-0 dot-bg opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-label mx-auto">
            Proven Track Record
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Numbers That{" "}
            <span className="gradient-text">Speak</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 text-center card-hover group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${stat.color}18`, border: `1px solid ${stat.color}30` }}
                >
                  <Icon size={22} style={{ color: stat.color }} />
                </div>
                <div
                  className="text-2xl xl:text-3xl font-bold mb-1"
                  style={{ color: stat.color, fontFamily: "var(--font-jakarta)" }}
                >
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    started={inView}
                  />
                </div>
                <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-xs text-slate-500 leading-tight">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
