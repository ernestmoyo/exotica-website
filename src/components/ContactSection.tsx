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
  { label: 'Phone', value: '+230 5829 4167', href: 'tel:+23058294167' },
  { label: 'Email', value: 'exoticamauritius@gmail.com', href: 'mailto:exoticamauritius@gmail.com' },
  { label: 'Address', value: 'Port Louis, Mauritius', href: 'https://maps.google.com/?q=Port+Louis+Mauritius' },
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
    <section id="contact" className="section-padding bg-cream-light border-t border-ink/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <span className="eyebrow">Let&apos;s Connect</span>
            <h2 className="mt-6 text-5xl sm:text-6xl font-display font-light text-ink leading-[1]">
              Bring your <span className="italic">brand</span><br />
              to life.
            </h2>
            <p className="mt-8 text-lg text-ink/70 leading-relaxed max-w-md">
              We bring brands to life with compelling demonstrations, interactive
              engagement and seamless digital amplification. Tell us about the campaign.
            </p>
          </div>

          <div className="lg:col-span-7 lg:pl-12 lg:border-l lg:border-ink/10">
            {/* Contact info as table-like list */}
            <ul className="border-t border-ink/15">
              {CONTACT_INFO.map((item) => (
                <li key={item.label} className="border-b border-ink/15">
                  <a
                    href={item.href}
                    className="grid grid-cols-12 py-5 group hover:bg-cream transition-colors px-2"
                  >
                    <span className="col-span-3 text-[11px] uppercase tracking-[0.25em] text-ink/50 self-center">
                      {item.label}
                    </span>
                    <span className="col-span-8 font-display text-2xl font-medium text-ink self-center">
                      {item.value}
                    </span>
                    <span className="col-span-1 self-center text-right text-ink/40 group-hover:text-ink transition-colors">
                      &rarr;
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-ink/15 bg-cream"
        >
          {submitted ? (
            <div className="p-12 text-center">
              <div className="text-5xl font-display font-light text-ink mb-4">
                Thank you.
              </div>
              <p className="text-ink/60">
                Your message has reached us. We typically respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-ink/15">
              <div className="p-6 md:p-8">
                <label className="text-[11px] uppercase tracking-[0.25em] text-ink/50">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="mt-2 w-full bg-transparent text-ink text-lg outline-none border-b border-ink/20 focus:border-ink py-2 transition-colors"
                />
              </div>
              <div className="p-6 md:p-8">
                <label className="text-[11px] uppercase tracking-[0.25em] text-ink/50">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="mt-2 w-full bg-transparent text-ink text-lg outline-none border-b border-ink/20 focus:border-ink py-2 transition-colors"
                />
              </div>
              <div className="p-6 md:p-8 md:col-span-2 border-t border-ink/15">
                <label className="text-[11px] uppercase tracking-[0.25em] text-ink/50">
                  Company (optional)
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  className="mt-2 w-full bg-transparent text-ink text-lg outline-none border-b border-ink/20 focus:border-ink py-2 transition-colors"
                />
              </div>
              <div className="p-6 md:p-8 md:col-span-2 border-t border-ink/15">
                <label className="text-[11px] uppercase tracking-[0.25em] text-ink/50">
                  Tell us about your project
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="mt-2 w-full bg-transparent text-ink text-lg outline-none border-b border-ink/20 focus:border-ink py-2 transition-colors resize-none"
                />
              </div>
              <div className="p-6 md:p-8 md:col-span-2 border-t border-ink/15 flex justify-end">
                <button type="submit" className="btn-primary">
                  Send Message <span aria-hidden>&rarr;</span>
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
