import { motion } from 'framer-motion';

interface Package {
  number: string;
  title: string;
  ideal: string;
  description: string;
  highlights: readonly string[];
  featured?: boolean;
}

const PACKAGES: readonly Package[] = [
  {
    number: 'A',
    title: 'Hostess-Only',
    ideal: 'Clients who want to focus on on-ground engagement and product demonstrations.',
    description:
      'Bring your products to life with our engaging hostesses, ensuring maximum on-ground impact and customer connection.',
    highlights: ['Trained hostess team', 'Live demonstrations', 'Sampling & engagement', 'Post-event reporting'],
  },
  {
    number: 'B',
    title: 'Digital Marketing',
    ideal: 'Clients who already have an on-ground team or want to focus solely on digital amplification.',
    description:
      "Maximise your campaign's reach and engagement with expert digital marketing services that turn on-ground moments into online trends.",
    highlights: ['Social media management', 'Paid advertising', 'Content production', 'Analytics dashboards'],
  },
  {
    number: 'C',
    title: '360° Campaign Boost',
    ideal: 'Clients looking for a comprehensive campaign that combines on-ground engagement with online amplification.',
    description:
      'Combine the power of on-ground engagement with digital reach to create a seamless, impactful campaign that drives results both offline and online.',
    highlights: ['Hostess + Digital', 'Integrated strategy', 'Cross-channel execution', 'Unified reporting'],
    featured: true,
  },
  {
    number: 'D',
    title: 'Market Research & Intelligence',
    ideal: 'Clients who need data-backed insights to understand market position, track competitor activity and make informed brand decisions.',
    description:
      'Walk away with actionable reports that drive smarter product launches, sharper pricing strategies and a clearer competitive edge.',
    highlights: ['Brand health tracking', 'Mystery shopping', 'Price monitoring', 'Competitive intelligence'],
  },
];

export default function PackagesSection() {
  return (
    <section id="packages" className="section-padding bg-ink text-cream-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-5">
            <span
              className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-editorial text-cream-light/60"
            >
              <span className="inline-block w-8 h-px bg-cream-light/30" />
              Packages
            </span>
            <h2 className="mt-6 text-5xl sm:text-6xl font-display font-light leading-[1] text-cream-light">
              Built to <span className="italic">flex</span><br />
              with your brief.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pl-12 lg:border-l lg:border-cream-light/10">
            <p className="text-lg text-cream-light/70 leading-relaxed">
              Four ways to engage &mdash; each one a starting point, none of them a
              ceiling. Pick what fits today; we&apos;ll scale it as you grow.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream-light/15 border border-cream-light/15">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.number}
              className={`p-8 md:p-12 transition-colors ${
                pkg.featured
                  ? 'bg-cream-light text-ink hover:bg-cream'
                  : 'bg-ink hover:bg-ink-soft'
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="flex items-baseline justify-between mb-6">
                <span
                  className={`font-display text-5xl font-light ${
                    pkg.featured ? 'text-ink/30' : 'text-cream-light/30'
                  }`}
                >
                  {pkg.number}
                </span>
                {pkg.featured && (
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold-dark border border-gold-dark px-3 py-1">
                    Most Popular
                  </span>
                )}
              </div>

              <h3
                className={`text-3xl font-display font-medium leading-tight ${
                  pkg.featured ? 'text-ink' : 'text-cream-light'
                }`}
              >
                {pkg.title}
              </h3>

              <div
                className={`mt-4 text-[11px] uppercase tracking-[0.2em] ${
                  pkg.featured ? 'text-gold-dark' : 'text-gold'
                }`}
              >
                Ideal For
              </div>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  pkg.featured ? 'text-ink/65' : 'text-cream-light/60'
                }`}
              >
                {pkg.ideal}
              </p>

              <p
                className={`mt-6 text-base leading-relaxed ${
                  pkg.featured ? 'text-ink/75' : 'text-cream-light/75'
                }`}
              >
                {pkg.description}
              </p>

              <ul
                className={`mt-8 pt-6 border-t space-y-2 ${
                  pkg.featured ? 'border-ink/15' : 'border-cream-light/15'
                }`}
              >
                {pkg.highlights.map((h) => (
                  <li
                    key={h}
                    className={`flex items-center gap-3 text-sm ${
                      pkg.featured ? 'text-ink/70' : 'text-cream-light/70'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        pkg.featured ? 'bg-ink' : 'bg-gold'
                      }`}
                    />
                    {h}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.2em] border-b pb-1 transition-colors ${
                  pkg.featured
                    ? 'text-ink border-ink/30 hover:border-ink'
                    : 'text-cream-light border-cream-light/30 hover:border-cream-light'
                }`}
              >
                Discuss this package <span aria-hidden>&rarr;</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
