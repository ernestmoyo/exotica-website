import ExoticaLogo from './ExoticaLogo';

const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Intelligence', href: '#intelligence' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ocean-dark py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Logo & tagline */}
          <div>
            <ExoticaLogo variant="full" color="white" size="default" />
            <p className="mt-4 text-sm text-white/40 leading-relaxed max-w-xs">
              Brand activation, digital marketing, and market research across Mauritius.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2.5">
              {FOOTER_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact snippet */}
          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-2.5 text-sm text-white/50">
              <p>Port Louis, Mauritius</p>
              <a href="mailto:hello@exotica.mu" className="block hover:text-white transition-colors">
                hello@exotica.mu
              </a>
              <a href="tel:+2305XXXXXXX" className="block hover:text-white transition-colors">
                +230 5XXX XXXX
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {year} Exotica Agency. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Crafted in Mauritius
          </p>
        </div>
      </div>
    </footer>
  );
}
