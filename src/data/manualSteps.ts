import type { ManualStep } from '../types';

export const manualSteps: ManualStep[] = [
  {
    number: 1,
    icon: '📲',
    title: 'Install the App',
    description: 'Download BTC Tracker from the App Store or Google Play. No account required — open it and you\'re ready.',
  },
  {
    number: 2,
    icon: '➕',
    title: 'Add Your Wallets',
    description: 'Tap the + button and enter or scan your Bitcoin address. Add an optional label like "Cold Storage" or "Hardware Wallet". All validation happens locally.',
  },
  {
    number: 3,
    icon: '📈',
    title: 'View Your Portfolio',
    description: 'The dashboard shows your total BTC balance, current fiat value, and a 7-day price chart. All computed on-device from public blockchain data.',
  },
  {
    number: 4,
    icon: '⚙️',
    title: 'Configure Preferences',
    description: 'Choose your preferred fiat currency, set a refresh interval (5m to 1h), and pick light or dark mode. Settings are encrypted on your device.',
  },
  {
    number: 5,
    icon: '🔄',
    title: 'Stay Updated',
    description: 'Pull down to refresh. Data is cached between sessions — if you\'re offline, the app shows your last known balance with a clear stale indicator.',
  },
];
