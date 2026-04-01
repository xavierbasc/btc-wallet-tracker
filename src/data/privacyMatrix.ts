import type { PrivacyRow } from '../types';

export const privacyMatrix: PrivacyRow[] = [
  { dataType: 'Bitcoin addresses', stored: true, transmitted: true, purpose: 'Balance lookup via public blockchain API — address is a public identifier by design' },
  { dataType: 'BTC balances', stored: true, transmitted: false, purpose: 'Cached locally in SQLite for offline access' },
  { dataType: 'BTC market price', stored: true, transmitted: false, purpose: 'Cached locally; fetched from public CoinGecko endpoint' },
  { dataType: 'Wallet labels', stored: true, transmitted: false, purpose: 'Stored locally in SQLite only, never transmitted' },
  { dataType: 'User settings', stored: true, transmitted: false, purpose: 'Encrypted via device keychain (expo-secure-store)' },
  { dataType: 'Device identifiers', stored: false, transmitted: false, purpose: 'Not collected or used' },
  { dataType: 'Location data', stored: false, transmitted: false, purpose: 'Not collected or used' },
  { dataType: 'Analytics/telemetry', stored: false, transmitted: false, purpose: 'No analytics framework integrated' },
  { dataType: 'Personal data (PII)', stored: false, transmitted: false, purpose: 'Not required, not processed' },
];
