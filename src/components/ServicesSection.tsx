import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface ServiceCard {
  readonly title: string;
  readonly icon: React.ReactNode;
  readonly bullets: readonly string[];
  readonly isNew?: boolean;
  readonly link?: { label: string; href: string };
  readonly accentColor: "gold" | "cyan";
}

const SERVICES: readonly ServiceCard[] = [
  {
    title: "Brand Activation & Hostess Services",
    accentColor: "gold",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    bullets: [
      "Live product demonstrations in supermarkets & high-traffic areas",
      "Trained hostesses for interactive brand engagement",
      "Indoor, outdoor, and event-based activations",
    ],
  },
  {
    title: "Digital Marketing",
    accentColor: "gold",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    bullets: [
      "Social media campaigns & content creation",
      "Digital artwork & brand amplification",
      "Targeted online advertising & retargeting",
    ],
  },
  {
    title: "Market Research & Brand Intelligence",
    accentColor: "cyan",
    isNew: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    bullets: [
      "Quarterly brand health tracking (Brand Pulse platform)",
      "Consumer surveys across all 12 Mauritius districts",
      "Competitive intelligence & price monitoring",
      "Interactive dashboards replacing static PowerPoint reports",
    ],
    link: { label: "See it in action", href: "#brand-intelligence" },
  },
  {
    title: "360\u00B0 Campaign Packages",
    accentColor: "gold",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M21.015 4.355v4.992" />
      </svg>
    ),
    bullets: [
      "Hostess + Digital + Research combined",
      "End-to-end campaign management",
      "From strategy to execution to reporting",
    ],
  },
] as const;

export default function ServicesSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-widest uppercase font-medium">
            What We Do
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-6">
            Our Services
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Full-spectrum brand solutions from the streets of Port Louis to the
            screens of your audience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * (index + 1) }}
              className={`glass-card-hover rounded-2xl p-8 relative overflow-hidden ${
                service.isNew ? "border-cyan/20" : ""
              }`}
            >
              {service.isNew && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-cyan/10 text-cyan border border-cyan/20">
                    NEW
                  </span>
                </div>
              )}

              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 ${
                  service.accentColor === "cyan"
                    ? "bg-cyan/10 text-cyan"
                    : "bg-gold/10 text-gold"
                }`}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>

              <ul className="space-y-3">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
                  >
                    <span
                      className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        service.accentColor === "cyan" ? "bg-cyan" : "bg-gold"
                      }`}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>

              {service.link && (
                <a
                  href={service.link.href}
                  className="inline-flex items-center gap-2 mt-6 text-cyan text-sm font-medium hover:text-cyan-dark transition-colors group"
                >
                  {service.link.label}
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
