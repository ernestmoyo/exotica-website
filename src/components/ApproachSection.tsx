import { motion } from 'framer-motion';

interface Phase {
  number: string;
  title: string;
  description: string;
  bullets: readonly string[];
}

const PHASES: readonly Phase[] = [
  {
    number: '01',
    title: 'Client Briefing',
    description: 'Understand the market, audience, and goals to create a clear roadmap.',
    bullets: ['Discovery sessions', 'Audience definition', 'Roadmap alignment'],
  },
  {
    number: '02',
    title: 'Strategy & Planning',
    description: 'Define brand objectives, key messages and engagement KPIs.',
    bullets: ['Identify digital touchpoints', 'Hostess requirements', 'Activation logistics'],
  },
  {
    number: '03',
    title: 'Recruitment, Training & Digital Prep',
    description: 'Select hostesses based on experience, audience fit and digital savviness.',
    bullets: ['Product training', 'Engagement coaching', 'Teaser campaigns launch'],
  },
  {
    number: '04',
    title: 'Pre-Event Coordination & Build-Up',
    description: 'Finalise event logistics, hostess schedules and digital integration.',
    bullets: ['Final briefing', 'Countdown content', 'Lead capture set-up'],
  },
  {
    number: '05',
    title: 'Event Execution & Live Engagement',
    description: 'Hostesses actively engage customers through warm interactions and product education.',
    bullets: ['Live demonstrations', 'Real-time social ads', 'Event-based retargeting'],
  },
  {
    number: '06',
    title: 'Reporting, Analysis & Ongoing Engagement',
    description: 'Compile engagement data &mdash; offline and online &mdash; analyse impact and plan the next wave.',
    bullets: ['Conversion analysis', 'Customer feedback', 'Future recommendations'],
  },
];

export default function ApproachSection() {
  return (
    <section id="approach" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-5">
            <span className="eyebrow">Process</span>
            <h2 className="mt-6 text-5xl sm:text-6xl font-display font-light text-ink leading-[1]">
              From brief to<br />
              <span className="italic">brand impact</span><br />
              in six phases.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pl-12 lg:border-l lg:border-ink/10">
            <p className="text-lg text-ink/70 leading-relaxed">
              A proven methodology that translates brand objectives into on-ground
              experiences and digital amplification &mdash; with transparent reporting at
              every stage.
            </p>
          </div>
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          {PHASES.map((phase, i) => (
            <motion.div
              key={phase.number}
              className="grid grid-cols-12 gap-6 border-t border-ink/15 py-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <div className="col-span-12 md:col-span-2 flex md:flex-col gap-2 items-baseline">
                <span className="font-mono text-xs text-ink/40">PHASE</span>
                <span className="font-display text-5xl font-light text-ink">
                  {phase.number}
                </span>
              </div>
              <div className="col-span-12 md:col-span-5">
                <h3 className="text-2xl md:text-3xl font-display font-medium text-ink leading-tight">
                  {phase.title}
                </h3>
                <p
                  className="mt-3 text-base text-ink/65 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: phase.description }}
                />
              </div>
              <div className="col-span-12 md:col-span-5">
                <ul className="space-y-2">
                  {phase.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-ink/70">
                      <span className="w-6 h-px bg-ink/30" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-ink/15" />
        </div>
      </div>
    </section>
  );
}
