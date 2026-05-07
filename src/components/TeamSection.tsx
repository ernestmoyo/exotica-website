import { motion } from 'framer-motion';

interface Member {
  initials: string;
  name: string;
  role: string;
  description: string;
  tags: readonly string[];
}

const MEMBERS: readonly Member[] = [
  {
    initials: 'IM',
    name: 'Irfaan Mooradun',
    role: 'Director, Conceptor & Client Relations',
    description:
      "Mauritius-based with over 5 years in FMCG brand strategy and activation. Irfaan leads campaign conceptualisation from brief to execution, translating brand objectives into on-ground experiences that resonate. Clients benefit from sharp strategic thinking and a network built through years of field-level delivery.",
    tags: ['Strategy', 'Client Relations', 'FMCG', 'Activation'],
  },
  {
    initials: 'EM',
    name: 'Ernest Moyo',
    role: 'Research, Technology & Data Science',
    description:
      "Ernest brings rigorous research methodology and cutting-edge technology to the team's intelligence capabilities. With a background in platform development, data science and AI-driven analytics, he builds the infrastructure that turns raw field data into actionable brand insights &mdash; transparent, evidence-based and decision-ready.",
    tags: ['Research', 'Data Science', 'AI', 'Engineering'],
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-5">
            <span className="eyebrow">The Drivers</span>
            <h2 className="mt-6 text-5xl sm:text-6xl font-display font-light text-ink leading-[1]">
              Two disciplines.<br />
              <span className="italic">One studio.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pl-12 lg:border-l lg:border-ink/10">
            <p className="text-lg text-ink/70 leading-relaxed">
              Brand strategy meets data science. Field delivery meets engineering.
              Every campaign benefits from creative intuition that&apos;s been pressure-tested
              against measurement infrastructure.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/15 border border-ink/15">
          {MEMBERS.map((member, i) => (
            <motion.div
              key={member.name}
              className="bg-cream-light p-8 md:p-12 group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Initials block */}
              <div className="flex items-start gap-6 mb-8">
                <div
                  className="flex items-center justify-center w-20 h-20 bg-ink text-cream-light font-display font-light text-3xl group-hover:scale-105 transition-transform"
                  style={{ letterSpacing: '0.06em' }}
                >
                  {member.initials}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-2xl font-display font-medium text-ink">
                    {member.name}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-gold-dark mt-2">
                    {member.role}
                  </p>
                </div>
              </div>

              <p
                className="text-base text-ink/70 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: member.description }}
              />

              <div className="mt-8 pt-6 border-t border-ink/10 flex flex-wrap gap-x-6 gap-y-2">
                {member.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] uppercase tracking-[0.25em] text-ink/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
