import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const PHASES = [
  {
    number: "01",
    title: "Client Briefing",
    description: "Understand market, audience, goals",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description: "Brand objectives, KPIs, audience targeting",
  },
  {
    number: "03",
    title: "Recruitment & Training",
    description: "Select and train field teams",
  },
  {
    number: "04",
    title: "Pre-Event Coordination",
    description: "Logistics, digital build-up",
  },
  {
    number: "05",
    title: "Execution",
    description: "On-ground engagement + real-time digital amplification",
  },
  {
    number: "06",
    title: "Reporting & Analysis",
    description: "Data compilation, impact analysis, recommendations",
  },
] as const;

export default function ApproachSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="approach" className="relative py-24 lg:py-32">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-widest uppercase font-medium">
            How We Work
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-6">
            Our 6-Phase Approach
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A proven methodology that ensures every activation delivers measurable impact.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
            {PHASES.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className="relative"
              >
                {/* Phase card */}
                <div className="glass-card-hover rounded-xl p-6 h-full">
                  {/* Number badge */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 border border-gold/20 mb-4">
                    <span className="text-gold font-display font-bold text-sm">
                      {phase.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
