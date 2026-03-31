import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const FEATURES = [
  "District-level brand intelligence across Mauritius",
  "Quarterly wave tracking with n=900 samples",
  "Competitive benchmarking",
  "Significance testing on every metric change",
  "Automated PowerPoint report generation",
] as const;

function DashboardMockup() {
  return (
    <div className="relative">
      {/* Browser chrome */}
      <div className="glass-card rounded-xl overflow-hidden border border-gold/10">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-navy-800/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 text-center">
            <div className="inline-flex items-center px-4 py-1 rounded-md bg-navy-900/60 text-xs text-slate-400">
              brandpulse.exotica.mu
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-6 bg-navy-900/80">
          {/* Header row */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-sm font-semibold gradient-text-cyan">Brand Pulse</div>
              <div className="text-xs text-slate-500 mt-0.5">Q4 2025 Wave Report</div>
            </div>
            <div className="flex gap-2">
              <div className="px-3 py-1 rounded-md bg-cyan/10 text-cyan text-xs">Live</div>
              <div className="px-3 py-1 rounded-md bg-white/5 text-slate-400 text-xs">Wave 3</div>
            </div>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: "Brand Awareness", value: "73%", change: "+5.2%", up: true },
              { label: "Purchase Intent", value: "42%", change: "+3.1%", up: true },
              { label: "NPS Score", value: "61", change: "-1.8%", up: false },
            ].map((metric) => (
              <div key={metric.label} className="bg-navy-800/60 rounded-lg p-3">
                <div className="text-[10px] text-slate-500 mb-1">{metric.label}</div>
                <div className="text-lg font-bold text-white">{metric.value}</div>
                <div className={`text-[10px] ${metric.up ? "text-emerald-400" : "text-red-400"}`}>
                  {metric.change}
                </div>
              </div>
            ))}
          </div>

          {/* Chart mockup */}
          <div className="bg-navy-800/40 rounded-lg p-4 mb-4">
            <div className="text-[10px] text-slate-500 mb-3">Awareness Trend by District</div>
            <div className="flex items-end gap-2 h-24">
              {[65, 78, 55, 82, 70, 45, 88, 62, 74, 58, 80, 69].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-cyan/40 to-cyan/80"
                />
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-[8px] text-slate-600">PL</span>
              <span className="text-[8px] text-slate-600">BL</span>
              <span className="text-[8px] text-slate-600">FL</span>
              <span className="text-[8px] text-slate-600">MK</span>
              <span className="text-[8px] text-slate-600">PA</span>
              <span className="text-[8px] text-slate-600">GP</span>
              <span className="text-[8px] text-slate-600">RR</span>
              <span className="text-[8px] text-slate-600">SV</span>
              <span className="text-[8px] text-slate-600">RP</span>
              <span className="text-[8px] text-slate-600">RD</span>
              <span className="text-[8px] text-slate-600">CU</span>
              <span className="text-[8px] text-slate-600">PW</span>
            </div>
          </div>

          {/* Significance row */}
          <div className="flex items-center gap-2 text-[10px]">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-slate-400">Significant increase</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-slate-400">Significant decrease</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-slate-500" />
              <span className="text-slate-400">No change</span>
            </div>
          </div>
        </div>
      </div>

      {/* Glow effect behind mockup */}
      <div className="absolute -inset-4 bg-cyan/5 rounded-3xl blur-2xl -z-10" />
    </div>
  );
}

export default function BrandIntelligenceSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="brand-intelligence" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 section-gradient" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan text-sm tracking-widest uppercase font-medium">
            Powered by Data
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-6">
            Brand Pulse — Your Brand&apos;s{" "}
            <span className="gradient-text-cyan">Command Centre</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            We don&apos;t just hand you a PDF every quarter. We give you a
            living, breathing dashboard that shows your brand&apos;s vital signs
            in real-time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ul className="space-y-5">
              {FEATURES.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan/10 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-4 h-4 text-cyan"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-slate-200 leading-relaxed">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10"
            >
              <a href="#contact" className="btn-gold inline-block">
                Request a Demo
              </a>
            </motion.div>
          </motion.div>

          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
