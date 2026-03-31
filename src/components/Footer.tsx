export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold tracking-wider gradient-text text-sm">
              EXOTICA AGENCY
            </span>
          </div>

          <p className="text-slate-500 text-sm text-center">
            &copy; {currentYear} Exotica Agency Co Ltd. All rights reserved. Port
            Louis, Mauritius.
          </p>
        </div>
      </div>
    </footer>
  );
}
