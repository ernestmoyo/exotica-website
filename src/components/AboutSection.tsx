import { motion } from 'framer-motion';

interface Pillar {
  number: string;
  title: string;
  description: string;
}

const PILLARS: readonly Pillar[] = [
  {
    number: '01',
    title: 'Transparency & Live Reporting',
    description:
      'We collaborate as stakeholders, not just an agency. We are fully committed to the success of your brand and share live, ongoing reporting throughout every campaign.',
  },
  {
    number: '02',
    title: 'Expert Brand Engagement',
    description:
      'Our trained hostesses capture attention and create lasting connections. Ongoing product training and coaching interventions ensure they are confident in every brief.',
  },
  {
    number: '03',
    title: 'Sales-Driven Strategy',
    description:
      'We turn engagement into conversions with interactive demonstrations and targeted interactions. Multiple learning styles ensure hostesses are well-trained before going on-field.',
  },
  {
    number: '04',
    title: 'Digital Boost',
    description:
      'Activations extend beyond physical spaces with social media coverage, creator content and digital artwork that captures audience attention long after the event.',
  },
];

interface Stat {
  value: string;
  label: string;
}

const STATS: readonly Stat[] = [
  { value: '12', label: 'Districts Covered' },
  { value: '24+', label: 'Trained Hostesses' },
  { value: '50+', label: 'Activations Delivered' },
  { value: '5+', label: 'Years FMCG Experience' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' as const },
  }),
};

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-cream-light border-t border-ink/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-5">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="mt-6 text-5xl sm:text-6xl font-display font-light text-ink leading-[1]">
              Experience.<br />
              <span className="italic font-normal">Engagement.</span><br />
              Amplified results.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pl-12 lg:border-l lg:border-ink/10">
            <p className="text-lg text-ink/70 leading-relaxed">
              Exotica Agency creates immersive brand experiences offline and online
              that captivate customers and drive sales. Live product demonstrations,
              interactive brand engagements and digital integration &mdash; all delivered
              with on-ground excellence.
            </p>
            <p className="mt-6 text-lg text-ink/70 leading-relaxed">
              Combining a deeply local network with rigorous research methodology and
              data infrastructure, every campaign we run is measured, modelled and
              optimised for transparent, evidence-based outcomes.
            </p>
          </div>
        </div>

        {/* Pillars — bordered grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-ink/15">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              className="p-8 md:p-10 border-r border-b border-ink/15 group hover:bg-cream transition-colors"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
            >
              <div className="flex items-baseline gap-4 mb-5">
                <span className="text-[11px] font-mono text-ink/40">{pillar.number}</span>
                <span className="h-px flex-1 bg-ink/15 group-hover:bg-ink/40 transition-colors" />
              </div>
              <h3 className="text-2xl font-display font-medium text-ink mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-ink/65 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink/15 border border-ink/15"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-cream-light p-8 lg:p-10 text-center">
              <div className="text-5xl sm:text-6xl font-display font-light text-ink">
                {stat.value}
              </div>
              <div className="mt-3 text-[11px] uppercase tracking-[0.25em] text-ink/50">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
