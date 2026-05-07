import { motion } from 'framer-motion';

interface Service {
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: readonly string[];
}

const SERVICES: readonly Service[] = [
  {
    number: '01',
    title: 'Hostess Services',
    tagline: 'On-Ground Excellence',
    description:
      'Beyond welcoming guests, our hostesses are experts in interactive engagement. They turn passive audiences into loyal customers by making your product more relatable and desirable.',
    features: ['Versatility', 'Sales-Driven Approach', 'On-site Engagement', 'Multi-industry Experience'],
  },
  {
    number: '02',
    title: 'Market Research & Intelligence',
    tagline: 'Real Insights. Real Decisions.',
    description:
      'Field research conducted across key retail and consumer touchpoints. We capture what is actually happening at the shelf, in-store, and in the minds of your consumers.',
    features: ['Brand Health Tracking', 'Price Monitoring', 'Mystery Shopping', 'Competitor Watch'],
  },
  {
    number: '03',
    title: 'Digital Marketing',
    tagline: 'Digital Impact',
    description:
      'Extended reach and engagement beyond the event. Data-driven strategies for continuous improvement and sustainable brand growth across every digital channel.',
    features: ['Social Media Management', 'Paid Campaigns', 'Content & Creator Production', 'Analytics & Reporting'],
  },
  {
    number: '04',
    title: '360° Campaigns',
    tagline: 'On-Ground + Digital',
    description:
      'A holistic brand experience. End-to-end campaigns that combine activation, digital amplification and research into a unified brand growth strategy.',
    features: ['Strategy & Planning', 'Cross-Channel Execution', 'Real-Time Optimisation', 'Impact Measurement'],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-ink text-cream-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow text-cream-light/60" style={{ color: 'rgba(242,237,227,0.6)' }}>
              <span className="text-cream-light/60">Our Services</span>
            </span>
            <h2 className="mt-6 text-5xl sm:text-6xl font-display font-light leading-[1] text-cream-light">
              Synergy of <span className="italic">on-ground intelligence</span>
              <br />and digital impact.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-cream-light/70 text-lg leading-relaxed">
              Four complementary capabilities, designed to flex into a single
              integrated brief or stand alone &mdash; whatever your campaign demands.
            </p>
          </div>
        </div>

        <div className="border-t border-cream-light/15">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.number}
              className="border-b border-cream-light/15 group"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <div className="grid grid-cols-12 gap-6 py-10 md:py-14 hover:bg-cream-light/[0.03] transition-colors px-2 md:px-4">
                <div className="col-span-12 md:col-span-1">
                  <span className="font-mono text-xs text-cream-light/40">{service.number}</span>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <div className="text-[11px] uppercase tracking-[0.25em] text-gold mb-3">
                    {service.tagline}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-light text-cream-light leading-tight">
                    {service.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <p className="text-cream-light/70 leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-2">
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="text-[12px] text-cream-light/60 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
