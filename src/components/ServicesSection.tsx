import { motion } from 'framer-motion';

interface Service {
  title: string;
  description: string;
  features: readonly string[];
  borderColor: string;
  iconColor: string;
  iconBg: string;
  badge?: string;
  icon: React.ReactNode;
}

const SERVICES: readonly Service[] = [
  {
    title: 'Brand Activation',
    description: 'Immersive on-the-ground experiences that create lasting connections between brands and consumers across all 12 districts.',
    features: ['Product Sampling', 'In-Store Promotions', 'Roadshows & Events', 'Experiential Marketing'],
    borderColor: 'border-l-terra',
    iconColor: 'text-terra',
    iconBg: 'bg-terra/10',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic digital campaigns that amplify your brand presence, drive engagement, and convert audiences into loyal customers.',
    features: ['Social Media Management', 'Content Creation', 'Paid Advertising', 'Analytics & Reporting'],
    borderColor: 'border-l-gold',
    iconColor: 'text-gold-dark',
    iconBg: 'bg-gold/10',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: 'Market Research',
    description: 'Rigorous quantitative and qualitative research that uncovers consumer insights, brand health, and competitive dynamics.',
    features: ['Brand Health Tracking', 'Consumer Surveys', 'Focus Groups', 'Competitive Analysis'],
    borderColor: 'border-l-forest',
    iconColor: 'text-forest',
    iconBg: 'bg-forest/10',
    badge: 'NEW',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    title: '360 Campaigns',
    description: 'End-to-end integrated campaigns that combine activation, digital, and research into a unified brand growth strategy.',
    features: ['Strategy & Planning', 'Cross-Channel Execution', 'Real-Time Optimisation', 'Impact Measurement'],
    borderColor: 'border-l-ocean',
    iconColor: 'text-ocean',
    iconBg: 'bg-ocean/10',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="badge-gold mb-4">What We Do</span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-ocean mt-4">
            Services That Drive Growth
          </h2>
          <p className="mt-6 text-lg text-ocean/60 max-w-2xl mx-auto">
            From on-the-ground brand activations to digital campaigns and deep market research,
            we deliver integrated solutions tailored to Mauritius.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              className={`card border-l-4 ${service.borderColor} p-8`}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${service.iconBg} ${service.iconColor} flex items-center justify-center shrink-0`}>
                  {service.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-ocean">{service.title}</h3>
                    {service.badge && (
                      <span className="badge-terra text-[10px] py-0.5 px-2">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-ocean/60 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-3 py-1 rounded-full bg-cream-dark text-ocean/70 font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
