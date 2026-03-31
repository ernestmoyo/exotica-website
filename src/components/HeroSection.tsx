import { motion } from 'framer-motion';

const WORDS = ['Brand Activation', '&', 'Market Research'];

function WordReveal({ word, index }: { word: string; index: number }) {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 + index * 0.15, duration: 0.6, ease: 'easeOut' }}
      >
        {word}
      </motion.span>
    </span>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <span className="text-xs text-ocean/50 uppercase tracking-[0.2em]">Scroll</span>
      <motion.div
        className="w-5 h-8 rounded-full border-2 border-ocean/20 flex justify-center pt-1.5"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <motion.div
          className="w-1 h-2 rounded-full bg-terra"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
      {/* Gradient blobs */}
      <div className="blob w-[500px] h-[500px] bg-terra -top-32 -right-32" style={{ animation: 'pulse-glow 6s ease-in-out infinite' }} />
      <div className="blob w-[400px] h-[400px] bg-gold top-1/3 -left-40" style={{ animation: 'pulse-glow 8s ease-in-out infinite 1s' }} />
      <div className="blob w-[350px] h-[350px] bg-forest bottom-20 right-1/4" style={{ animation: 'pulse-glow 7s ease-in-out infinite 2s' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Overline badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <span className="badge-terra">
            Brand Activation & Market Research
          </span>
        </motion.div>

        {/* Main headline */}
        <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-ocean leading-[1.1]">
          <span className="block">
            <WordReveal word="EXOTICA" index={0} />
          </span>
          <span className="block mt-1 text-terra">
            <WordReveal word="AGENCY" index={1} />
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-lg sm:text-xl text-ocean/70 font-light max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          We bring brands to life across Mauritius through strategic activations,
          data-driven research, and creative campaigns that deliver real results.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <a href="#services" className="btn-primary">
            Our Services
          </a>
          <a href="#contact" className="btn-outline">
            Work With Us
          </a>
        </motion.div>

        {/* Location badge */}
        <motion.div
          className="mt-12 inline-flex items-center gap-2 text-sm text-ocean/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Port Louis, Mauritius
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
