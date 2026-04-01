import type { Feature } from '../types';

export const features: Feature[] = [
  {
    icon: '🔒',
    title: 'Privacy First',
    description: 'All data lives on your device. No accounts, no cloud sync, no analytics. GDPR-safe by design.',
  },
  {
    icon: '📡',
    title: 'Offline Capable',
    description: 'Works without internet using cached data. Last known prices and balances always available.',
  },
  {
    icon: '₿',
    title: 'All Address Types',
    description: 'Supports Legacy (P2PKH), SegWit (P2SH, P2WPKH, P2WSH), and Taproot (P2TR) addresses.',
  },
  {
    icon: '💱',
    title: 'Multi-Currency',
    description: 'View your portfolio value in EUR, USD, GBP, JPY, CHF, or CAD. Switch instantly.',
  },
  {
    icon: '📊',
    title: 'Price Charts',
    description: '7-day BTC price chart cached locally. Visualize market trends without repeated API calls.',
  },
  {
    icon: '🌙',
    title: 'Dark & Light Mode',
    description: 'Follows your system preference or set manually. Clean, readable interface in any light.',
  },
];
