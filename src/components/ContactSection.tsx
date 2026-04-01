import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

const INITIAL_FORM: Readonly<FormState> = {
  name: '',
  email: '',
  company: '',
  message: '',
};

const CONTACT_INFO = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Phone',
    value: '+230 5829 4167',
    href: 'tel:+23058294167',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'hello@exotica.mu',
    href: 'mailto:hello@exotica.mu',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'Port Louis, Mauritius',
    href: 'https://maps.google.com/?q=Port+Louis+Mauritius',
  },
] as const;

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section-padding bg-ocean">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] bg-gold/20 text-gold-light mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mt-4">
            Let's Build Something<br />Extraordinary
          </h2>
          <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto">
            Ready to activate your brand in Mauritius? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            {CONTACT_INFO.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 text-gold flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm text-white/40 uppercase tracking-wider font-medium">
                    {item.label}
                  </div>
                  <div className="text-white font-medium mt-0.5">
                    {item.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Availability note */}
            <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-sm text-white/50 leading-relaxed">
                We typically respond within 24 hours. For urgent enquiries,
                reach out by phone during business hours (Mon-Fri, 9am-6pm MUT).
              </p>
            </div>
          </div>

          {/* Contact form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-white/10 rounded-2xl p-12 text-center border border-white/10">
                <div className="w-16 h-16 rounded-full bg-forest/20 text-forest flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Message Sent</h3>
                <p className="text-white/60">
                  Thank you for reaching out. We'll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="w-full px-5 py-3.5 rounded-xl bg-white text-ocean placeholder:text-ocean/40 text-sm outline-none focus:ring-2 focus:ring-gold transition-shadow"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="w-full px-5 py-3.5 rounded-xl bg-white text-ocean placeholder:text-ocean/40 text-sm outline-none focus:ring-2 focus:ring-gold transition-shadow"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company (optional)"
                  value={form.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  className="w-full px-5 py-3.5 rounded-xl bg-white text-ocean placeholder:text-ocean/40 text-sm outline-none focus:ring-2 focus:ring-gold transition-shadow"
                />
                <textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="w-full px-5 py-3.5 rounded-xl bg-white text-ocean placeholder:text-ocean/40 text-sm outline-none focus:ring-2 focus:ring-gold transition-shadow resize-none"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-3.5 rounded-full bg-gold text-ocean-dark font-semibold text-sm tracking-wide hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/25"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
