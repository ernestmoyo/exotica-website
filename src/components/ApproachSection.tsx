import { motion } from 'framer-motion';

interface Phase {
  number: string;
  title: string;
  description: string;
}

const PHASES: readonly Phase[] = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Deep dive into your brand, market position, and business objectives to define the project scope.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Data-informed strategy development with clear KPIs, timelines, and resource allocation.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Creative concepting and campaign design tailored to Mauritian consumer behaviour and culture.',
  },
  {
    number: '04',
    title: 'Execute',
    description: 'Flawless on-ground activation and digital deployment across targeted districts and channels.',
  },
  {
    number: '05',
    title: 'Measure',
    description: 'Rigorous data collection, statistical analysis, and real-time performance monitoring.',
  },
  {
    number: '06',
    title: 'Optimise',
    description: 'Continuous refinement based on insights, delivering compounding returns for your brand.',
  },
] as const;

const phaseVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function ApproachSection() {
  return (
    <section id="approach" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="badge-terra mb-4">How We Work</span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-ocean mt-4">
            Our 6-Phase Approach
          </h2>
          <p className="mt-6 text-lg text-ocean/60 max-w-2xl mx-auto">
            A proven methodology that transforms brand challenges into measurable growth,
            from the first conversation to ongoing optimisation.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-8 left-8 right-8 h-0.5 bg-cream-dark" />

            <div className="grid grid-cols-6 gap-4 relative">
              {PHASES.map((phase, i) => (
                <motion.div
                  key={phase.number}
                  className="flex flex-col items-center text-center"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={phaseVariants}
                >
                  {/* Numbered circle */}
                  <div className="w-16 h-16 rounded-full bg-terra text-white font-display font-bold text-lg flex items-center justify-center relative z-10 shadow-lg shadow-terra/20">
                    {phase.number}
                  </div>

                  {/* Card */}
                  <div className="card mt-6 p-5 w-full">
                    <h3 className="text-base font-semibold text-ocean mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-xs text-ocean/55 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/tablet: vertical timeline */}
        <div className="lg:hidden">
          <div className="relative pl-10">
            {/* Vertical connecting line */}
            <div className="absolute top-0 bottom-0 left-[19px] w-0.5 bg-cream-dark" />

            <div className="space-y-8">
              {PHASES.map((phase, i) => (
                <motion.div
                  key={phase.number}
                  className="relative flex gap-6"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-30px' }}
                  variants={phaseVariants}
                >
                  {/* Numbered circle */}
                  <div className="absolute -left-10 w-10 h-10 rounded-full bg-terra text-white font-display font-bold text-sm flex items-center justify-center z-10 shadow-md shadow-terra/20">
                    {phase.number}
                  </div>

                  {/* Card */}
                  <div className="card p-6 flex-1">
                    <h3 className="text-lg font-semibold text-ocean mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-ocean/55 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
