import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function TeamSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="team" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 section-gradient" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-widest uppercase font-medium">
            Our People
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-6">
            Meet the Team
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Director card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 sm:p-10 text-center mb-10"
          >
            {/* Avatar placeholder */}
            <div className="w-24 h-24 rounded-full mx-auto mb-6 bg-gradient-to-br from-gold/30 to-gold/10 border-2 border-gold/20 flex items-center justify-center">
              <span className="text-3xl font-display font-bold gradient-text">IM</span>
            </div>

            <h3 className="text-2xl font-display font-bold mb-1">
              Irfan Mooradun
            </h3>
            <p className="text-gold text-sm font-medium tracking-wide mb-6">
              Director, Client Relations
            </p>

            <div className="space-y-3 text-slate-300 max-w-lg mx-auto">
              <p className="leading-relaxed">
                5+ years of FMCG experience in the Mauritius market, with deep
                relationships across major distributors and retailers.
              </p>
              <p className="leading-relaxed">
                Irfan leads all client engagements, ensuring every campaign aligns
                with your brand strategy and delivers measurable results.
              </p>
            </div>
          </motion.div>

          {/* Team size */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card rounded-xl p-6 flex items-center gap-5"
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-gold">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-lg">
                Supported by 24+ trained field researchers
              </p>
              <p className="text-slate-400 text-sm">
                Deployed across all districts of Mauritius for nationwide coverage
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
