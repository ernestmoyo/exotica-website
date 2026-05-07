import { motion } from 'framer-motion';
import ExoticaLogo from './ExoticaLogo';

const MARQUEE_ITEMS = [
  'Brand Activation',
  'Hostess Services',
  'Market Research',
  'Digital Marketing',
  '360° Campaigns',
  'Mystery Shopping',
  'Price Monitoring',
];

function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-cream/40 py-6 relative">
      <div className="flex animate-marquee w-max">
        {items.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="marquee-item">{item}</span>
            <span className="text-ink/30 text-2xl">&#x2756;</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col bg-cream pt-24 noise">
      <div className="flex-1 flex items-center px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow mb-8"
            >
              Mauritius &middot; Est. 2024
            </motion.div>

            <motion.h1
              className="font-display text-ink text-[12vw] sm:text-[10vw] lg:text-[7.5vw] xl:text-[6.5vw] leading-[0.95] font-light tracking-[-0.02em]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="block">Immersive</span>
              <span className="block italic font-normal">brand</span>
              <span className="block">experiences,</span>
              <span className="block text-ink/40">online &amp; offline.</span>
            </motion.h1>

            <motion.div
              className="mt-10 max-w-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-base sm:text-lg text-ink/70 leading-relaxed">
                We create seamless brand experiences that blend on-the-ground engagement
                with digital amplification &mdash; ensuring maximum reach and measurable impact
                across Mauritius.
              </p>
            </motion.div>

            <motion.div
              className="mt-12 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
            >
              <a href="#services" className="btn-primary">
                View Services <span aria-hidden>&rarr;</span>
              </a>
              <a href="#contact" className="btn-outline">
                Start a Project
              </a>
            </motion.div>

            <motion.div
              className="mt-14 flex items-center gap-8 text-[11px] uppercase tracking-[0.25em] text-ink/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <span>FMCG</span>
              <span className="w-1 h-1 rounded-full bg-ink/30" />
              <span>Retail</span>
              <span className="w-1 h-1 rounded-full bg-ink/30" />
              <span>Hospitality</span>
              <span className="w-1 h-1 rounded-full bg-ink/30" />
              <span>Pharma</span>
            </motion.div>
          </div>

          {/* Right: monogram tile */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
          >
            <div className="relative">
              <div className="absolute -inset-6 border border-ink/15" aria-hidden />
              <div className="absolute -inset-12 border border-ink/8" aria-hidden />
              <ExoticaLogo size="hero" tone="cream" tile="ink" variant="mark" showSubtitle={true} />
              <div className="mt-6 text-center text-[10px] uppercase tracking-[0.4em] text-ink/40">
                Combining On-Ground Excellence with Digital Impact
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Marquee />
    </section>
  );
}
