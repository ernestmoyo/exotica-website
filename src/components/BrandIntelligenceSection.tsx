import { motion } from 'framer-motion';

function MiniBarChart() {
  const bars = [40, 65, 50, 80, 60, 75, 55];
  return (
    <div className="flex items-end gap-1 h-12">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="w-3 rounded-t bg-terra/70"
          initial={{ height: 0 }}
          whileInView={{ height: `${height}%` }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: 'easeOut' }}
        />
      ))}
    </div>
  );
}

interface KpiCardProps {
  label: string;
  value: string;
  change: string;
  positive: boolean;
}

function KpiCard({ label, value, change, positive }: KpiCardProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="text-xs text-ocean/50 uppercase tracking-wider mb-1">{label}</div>
      <div className="text-2xl font-display font-bold text-ocean">{value}</div>
      <div className={`text-xs font-medium mt-1 ${positive ? 'text-forest' : 'text-terra'}`}>
        {positive ? '+' : ''}{change}
      </div>
    </div>
  );
}

const FEATURES = [
  'Real-time brand health monitoring across all districts',
  'Competitive benchmarking with significance testing',
  'Automated wave-over-wave trend analysis',
  'Custom dashboards for every stakeholder level',
  'Export-ready reports with actionable insights',
] as const;

export default function BrandIntelligenceSection() {
  return (
    <section id="intelligence" className="section-padding bg-cream-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-forest mb-4">Brand Pulse Intelligence</span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-ocean mt-4">
              Your Brand, Quantified
            </h2>
            <p className="mt-6 text-lg text-ocean/60 leading-relaxed">
              Our proprietary Brand Pulse platform transforms raw research data into
              actionable intelligence. Track brand health, monitor competitors, and
              uncover consumer insights in real time.
            </p>

            <ul className="mt-8 space-y-3">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-forest shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-ocean/70">{feature}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-primary mt-10 inline-flex">
              Request a Demo
            </a>
          </motion.div>

          {/* Right: dashboard mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 p-6 border border-gray-100">
              {/* Mock header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm font-semibold text-ocean">Brand Health Dashboard</div>
                  <div className="text-xs text-ocean/40">Wave 4 — Q1 2026</div>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-terra/30" />
                  <div className="w-3 h-3 rounded-full bg-gold/30" />
                  <div className="w-3 h-3 rounded-full bg-forest/30" />
                </div>
              </div>

              {/* KPI row */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <KpiCard label="Awareness" value="78%" change="4.2%" positive />
                <KpiCard label="Consideration" value="62%" change="2.1%" positive />
                <KpiCard label="NPS" value="+34" change="1.8%" positive={false} />
              </div>

              {/* Chart area */}
              <div className="bg-cream rounded-xl p-4">
                <div className="text-xs text-ocean/40 uppercase tracking-wider mb-3">
                  Brand Health Trend
                </div>
                <MiniBarChart />
              </div>

              {/* Footer tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-[10px] px-2 py-1 rounded bg-forest/10 text-forest font-medium">12 Districts</span>
                <span className="text-[10px] px-2 py-1 rounded bg-terra/10 text-terra font-medium">n=1,200</span>
                <span className="text-[10px] px-2 py-1 rounded bg-gold/10 text-gold-dark font-medium">95% CI</span>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-terra/5 via-gold/5 to-forest/5 rounded-3xl -z-10 blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
