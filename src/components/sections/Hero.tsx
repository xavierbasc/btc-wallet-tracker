import { Badge } from '../ui/Badge';

const TICKER_ITEMS = [
  '₿ OFFLINE FIRST',
  '🔒 ZERO TELEMETRY',
  '📲 iOS + ANDROID',
  '💱 6 CURRENCIES',
  '🌙 DARK MODE',
  '✅ GDPR SAFE',
  '🔓 OPEN SOURCE',
  '⚡ NO ACCOUNT',
];

export function Hero() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(247,147,26,0.08) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#F7931A 1px, transparent 1px), linear-gradient(90deg, #F7931A 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Pill badge */}
        <div className="flex justify-center mb-6">
          <Badge label="v1.0 · Free · Open Source" variant="orange" />
        </div>

        {/* Main heading */}
        <h1 className="font-pixel text-btc-orange text-2xl sm:text-3xl lg:text-4xl leading-relaxed mb-4">
          BTC Tracker
        </h1>
        <p className="font-pixel text-zinc-500 text-xs sm:text-sm leading-relaxed mb-8">
          by Bastronic
        </p>

        {/* Tagline */}
        <p className="font-sans text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-2xl mx-auto mb-10">
          Track your Bitcoin wallet balances and fiat valuation — <strong className="text-zinc-100">privately</strong>,{' '}
          <strong className="text-zinc-100">offline-first</strong>, and <strong className="text-zinc-100">without an account</strong>.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-btc-orange text-white font-sans font-semibold text-base px-8 py-4 rounded-xl hover:bg-btc-dark transition-colors"
            aria-label="Download on the App Store"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-zinc-100 font-sans font-semibold text-base px-8 py-4 rounded-xl border border-zinc-700 hover:bg-zinc-700 transition-colors"
            aria-label="Get it on Google Play"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 20.5v-17c0-.83 1-.97 1.41-.5L17 12 4.41 21c-.41.47-1.41.33-1.41-.5zM16.49 13.5l-2.46 2.46 2.46 2.46L21 17l-4.51-3.5zM3 3l11.5 6.5-2.46 2.46L3 3zm11.04 9L3 21l9.04-5.54L14.04 12z"/>
            </svg>
            Google Play
          </a>
        </div>

        {/* Feature badges */}
        <div className="flex flex-wrap gap-2 justify-center">
          {['No Account', 'No Analytics', 'No Cloud', 'GDPR Safe', 'MIT License'].map(label => (
            <Badge key={label} label={label} variant="zinc" />
          ))}
        </div>
      </div>

      {/* Ticker */}
      <div className="absolute bottom-8 left-0 right-0 overflow-hidden" aria-hidden="true">
        <div className="flex animate-ticker whitespace-nowrap">
          {doubled.map((item, i) => (
            <span key={i} className="font-mono text-xs text-zinc-600 mx-6">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
