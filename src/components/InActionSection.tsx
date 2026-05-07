import { motion } from 'framer-motion';

interface Venue {
  number: string;
  title: string;
  caption: string;
  description: string;
}

const VENUES: readonly Venue[] = [
  {
    number: '01',
    title: 'Hypermarkets & Supermarkets',
    caption: 'Across the island',
    description:
      'In-aisle product demonstrations, sampling stations and consumer engagement at the highest-traffic retail touchpoints.',
  },
  {
    number: '02',
    title: 'Malls & Events',
    caption: 'High-footfall destinations',
    description:
      'Activation booths, brand experiences and experiential moments at flagship malls and ticketed events.',
  },
  {
    number: '03',
    title: 'Pharmacies',
    caption: 'Health & wellness retail',
    description:
      'Specialised activations for FMCG-pharma, OTC and wellness brands, calibrated to the pharmacy environment and shopper.',
  },
];

export default function InActionSection() {
  return (
    <section id="in-action" className="section-padding bg-cream-light border-t border-ink/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-5">
            <span className="eyebrow">Our Team in Action</span>
            <h2 className="mt-6 text-5xl sm:text-6xl font-display font-light text-ink leading-[1]">
              Wherever<br />
              <span className="italic">brands meet</span><br />
              their audience.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pl-12 lg:border-l lg:border-ink/10">
            <p className="text-lg text-ink/70 leading-relaxed">
              From hypermarkets and supermarkets across the island to malls, events
              and pharmacies &mdash; we deploy trained, sales-driven teams into the
              environments where buying decisions actually happen.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-ink/15">
          {VENUES.map((venue, i) => (
            <motion.div
              key={venue.number}
              className="border-r border-b border-ink/15 p-8 md:p-10 group hover:bg-cream transition-colors relative"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-[11px] uppercase tracking-[0.25em] text-ink/40 font-mono">
                  {venue.number}
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold-dark">
                  {venue.caption}
                </span>
              </div>

              {/* Visual placeholder block */}
              <div className="aspect-[4/3] bg-ink/5 mb-8 relative overflow-hidden border border-ink/10 group-hover:bg-ink/10 transition-colors">
                <div className="absolute inset-0 grain opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl md:text-8xl font-display font-light text-ink/15">
                    {venue.number}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-display font-medium text-ink leading-tight">
                {venue.title}
              </h3>
              <p className="mt-3 text-sm text-ink/65 leading-relaxed">
                {venue.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
