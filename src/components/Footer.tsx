import ExoticaLogo from './ExoticaLogo';

const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#approach' },
  { label: 'In Action', href: '#in-action' },
  { label: 'Team', href: '#team' },
  { label: 'Packages', href: '#packages' },
  { label: 'Contact', href: '#contact' },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream-light pt-20 pb-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Big tagline */}
        <div className="border-b border-cream-light/15 pb-16 mb-12">
          <p className="font-display text-4xl sm:text-6xl lg:text-7xl font-light leading-[1] text-cream-light max-w-5xl">
            Combining <span className="italic">on-ground excellence</span><br />
            with digital impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <ExoticaLogo variant="mark" tone="cream" tile="cream" size="default" showSubtitle={false} />
            <p className="mt-6 text-sm text-cream-light/50 leading-relaxed max-w-xs">
              Brand activation, hostess services, market research and digital
              marketing. Based in Port Louis, deployed across Mauritius.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-gold mb-5">
              Navigate
            </h4>
            <nav className="grid grid-cols-2 gap-y-2 gap-x-6">
              {FOOTER_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm text-cream-light/55 hover:text-cream-light transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-gold mb-5">
              Contact
            </h4>
            <div className="space-y-2.5 text-sm">
              <p className="text-cream-light/55">Port Louis, Mauritius</p>
              <a
                href="mailto:exoticamauritius@gmail.com"
                className="block text-cream-light hover:text-gold transition-colors"
              >
                exoticamauritius@gmail.com
              </a>
              <a
                href="tel:+23058294167"
                className="block text-cream-light hover:text-gold transition-colors"
              >
                +230 5829 4167
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-cream-light/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] uppercase tracking-[0.25em] text-cream-light/30">
            &copy; {year} Exotica Agency
          </p>
          <p className="text-[11px] uppercase tracking-[0.25em] text-cream-light/30">
            Site by{' '}
            <a
              href="https://7squareinc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-cream-light transition-colors"
            >
              7squareinc.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
