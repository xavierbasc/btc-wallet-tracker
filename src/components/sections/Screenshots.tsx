import { useState, useRef } from 'react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { ScreenshotFrame } from '../ui/ScreenshotFrame';

const BASE = '/btc-wallet-tracker/screenshots';

const SCREENSHOTS_DARK = [
  { src: `${BASE}/dark/01-dashboard.png`,    alt: 'Dashboard — dark mode showing total portfolio value and wallet list', caption: 'Dashboard' },
  { src: `${BASE}/dark/02-wallet-detail.png`, alt: 'Wallet detail — dark mode showing address and balance', caption: 'Wallet Detail' },
  { src: `${BASE}/dark/03-add-wallet.png`,   alt: 'Add wallet — dark mode with address validation', caption: 'Add Wallet' },
  { src: `${BASE}/dark/04-settings.png`,     alt: 'Settings — dark mode with currency and theme selector', caption: 'Settings' },
  { src: `${BASE}/dark/05-chart.png`,        alt: '7-day BTC/USD price chart — dark mode', caption: 'Price Chart' },
  { src: `${BASE}/dark/06-qr-code.png`,      alt: 'QR code display for wallet address — dark mode', caption: 'QR Code' },
  { src: `${BASE}/dark/07-validation.png`,   alt: 'Address validation error — dark mode', caption: 'Validation' },
  { src: `${BASE}/dark/08-offline.png`,      alt: 'Offline mode showing cached balance — dark mode', caption: 'Offline Mode' },
];

const SCREENSHOTS_LIGHT = [
  { src: `${BASE}/light/01-dashboard.png`,    alt: 'Dashboard — light mode showing total portfolio value and wallet list', caption: 'Dashboard' },
  { src: `${BASE}/light/02-wallet-detail.png`, alt: 'Wallet detail — light mode showing address and balance', caption: 'Wallet Detail' },
  { src: `${BASE}/light/03-add-wallet.png`,   alt: 'Add wallet — light mode with address validation', caption: 'Add Wallet' },
  { src: `${BASE}/light/04-settings.png`,     alt: 'Settings — light mode with currency and theme selector', caption: 'Settings' },
  { src: `${BASE}/light/05-chart.png`,        alt: '7-day BTC/USD price chart — light mode', caption: 'Price Chart' },
  { src: `${BASE}/light/06-qr-code.png`,      alt: 'QR code display for wallet address — light mode', caption: 'QR Code' },
  { src: `${BASE}/light/07-validation.png`,   alt: 'Address validation error — light mode', caption: 'Validation' },
  { src: `${BASE}/light/08-offline.png`,      alt: 'Offline mode showing cached balance — light mode', caption: 'Offline Mode' },
];

function SunIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );
}

export function Screenshots() {
  const [mode, setMode] = useState<'dark' | 'light'>('dark');
  const [visible, setVisible] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const screenshots = mode === 'dark' ? SCREENSHOTS_DARK : SCREENSHOTS_LIGHT;

  function switchMode(next: 'dark' | 'light') {
    if (next === mode) return;
    setVisible(false);
    setTimeout(() => {
      setMode(next);
      if (scrollRef.current) scrollRef.current.scrollLeft = 0;
      setVisible(true);
    }, 180);
  }

  return (
    <SectionWrapper id="screenshots" className="bg-black/40">
      <div className="text-center mb-10">
        <h2 className="font-pixel text-btc-orange text-sm sm:text-base leading-relaxed mb-4">
          Screenshots
        </h2>
        <p className="font-sans text-zinc-400 mb-8">
          The same app, your choice of theme.
        </p>

        {/* Light / Dark toggle */}
        <div
          className="inline-flex items-center bg-zinc-900 border border-zinc-800 rounded-full p-1 gap-0.5"
          role="group"
          aria-label="Switch screenshot theme"
        >
          <button
            onClick={() => switchMode('light')}
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-mono text-xs transition-all duration-200 ${
              mode === 'light'
                ? 'bg-zinc-100 text-zinc-900 shadow-sm'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
            aria-pressed={mode === 'light'}
          >
            <SunIcon />
            Light
          </button>
          <button
            onClick={() => switchMode('dark')}
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-mono text-xs transition-all duration-200 ${
              mode === 'dark'
                ? 'bg-zinc-800 text-zinc-100 shadow-sm ring-1 ring-zinc-700'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
            aria-pressed={mode === 'dark'}
          >
            <MoonIcon />
            Dark
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6"
        role="region"
        aria-label={`App screenshots — ${mode} mode`}
        style={{ scrollbarWidth: 'none', transition: 'opacity 180ms ease', opacity: visible ? 1 : 0 }}
      >
        {screenshots.map(screenshot => (
          <ScreenshotFrame
            key={`${mode}-${screenshot.src}`}
            src={screenshot.src}
            alt={screenshot.alt}
            caption={screenshot.caption}
          />
        ))}
      </div>

      <p className="text-center font-mono text-xs text-zinc-700 mt-6" aria-hidden="true">
        ← swipe →
      </p>
    </SectionWrapper>
  );
}
