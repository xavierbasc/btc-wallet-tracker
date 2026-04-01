import { SectionWrapper } from '../ui/SectionWrapper';
import { ScreenshotFrame } from '../ui/ScreenshotFrame';

const SCREENSHOTS = [
  { src: '/btc-wallet-tracker/screenshots/01-dashboard.png', alt: 'Dashboard showing total BTC balance and portfolio value in EUR', caption: 'Dashboard' },
  { src: '/btc-wallet-tracker/screenshots/02-wallet-detail.png', alt: 'Wallet detail with QR code and on-chain balance', caption: 'Wallet Detail' },
  { src: '/btc-wallet-tracker/screenshots/03-add-wallet.png', alt: 'Add wallet screen with real-time address validation', caption: 'Add Wallet' },
  { src: '/btc-wallet-tracker/screenshots/04-settings.png', alt: 'Settings screen with currency and theme options', caption: 'Settings' },
  { src: '/btc-wallet-tracker/screenshots/05-dark-mode.png', alt: 'Dark mode dashboard', caption: 'Dark Mode' },
  { src: '/btc-wallet-tracker/screenshots/06-chart.png', alt: '7-day BTC price chart', caption: 'Price Chart' },
  { src: '/btc-wallet-tracker/screenshots/07-qr-code.png', alt: 'QR code display for wallet address', caption: 'QR Code' },
  { src: '/btc-wallet-tracker/screenshots/08-validation.png', alt: 'Address validation feedback — invalid address highlighted in red', caption: 'Validation' },
  { src: '/btc-wallet-tracker/screenshots/09-offline.png', alt: 'Offline mode showing cached balance with stale indicator', caption: 'Offline Mode' },
  { src: '/btc-wallet-tracker/screenshots/10-currencies.png', alt: 'Multi-currency settings screen', caption: 'Currencies' },
];

export function Screenshots() {
  return (
    <SectionWrapper id="screenshots" className="bg-black/40">
      <div className="text-center mb-12">
        <h2 className="font-pixel text-btc-orange text-sm sm:text-base leading-relaxed mb-4">
          Screenshots
        </h2>
        <p className="font-sans text-zinc-400">Swipe to explore all screens.</p>
      </div>

      <div
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6"
        role="region"
        aria-label="App screenshots carousel"
        style={{ scrollbarWidth: 'none' }}
      >
        {SCREENSHOTS.map(screenshot => (
          <ScreenshotFrame
            key={screenshot.src}
            src={screenshot.src}
            alt={screenshot.alt}
            caption={screenshot.caption}
          />
        ))}
      </div>

      <p className="text-center font-mono text-xs text-zinc-600 mt-6" aria-hidden="true">
        ← swipe →
      </p>
    </SectionWrapper>
  );
}
