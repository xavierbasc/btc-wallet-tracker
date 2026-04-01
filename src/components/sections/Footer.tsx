
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="font-pixel text-btc-orange text-xs mb-3">₿TC Tracker</p>
            <p className="font-sans text-sm text-zinc-500">
              By Javier Báscones. Privacy-first Bitcoin portfolio monitoring for iOS and Android.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <p className="font-mono text-xs text-zinc-500 mb-3 uppercase tracking-widest">Links</p>
            <ul className="flex flex-col gap-2" role="list">
              {[
                { href: '#features', label: 'Features' },
                { href: '#manual', label: 'User Manual' },
                { href: '#privacy', label: 'Privacy Policy' },
              ].map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-zinc-400 hover:text-btc-orange transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <div>
            <p className="font-mono text-xs text-zinc-500 mb-3 uppercase tracking-widest">Legal</p>
            <p className="font-sans text-sm text-zinc-500 leading-relaxed">
              All rights reserved. BTC balances are fetched from public blockchain APIs.
              Always verify with your own node.
            </p>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-zinc-600">
            © {year} Javier Báscones · BTC Tracker v1.0.0
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-emerald-500">● No cookies</span>
            <span className="font-mono text-xs text-emerald-500">● No tracking</span>
            <span className="font-mono text-xs text-emerald-500">● GDPR safe</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
