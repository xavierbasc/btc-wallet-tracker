import { SectionWrapper } from '../ui/SectionWrapper';
import { FeatureCard } from '../ui/FeatureCard';
import { features } from '../../data/features';

export function Features() {
  return (
    <SectionWrapper id="features" className="bg-zinc-950">
      <div className="text-center mb-14">
        <h2 className="font-pixel text-btc-orange text-sm sm:text-base leading-relaxed mb-4">
          Why BTC Tracker?
        </h2>
        <p className="font-sans text-zinc-400 max-w-xl mx-auto">
          Built with a single principle: your financial data stays on your device.
          No servers. No accounts. No compromises.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map(feature => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>

      {/* Stats row */}
      <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-800">
        {[
          { value: '6', label: 'Currencies' },
          { value: '3', label: 'Wallet Types' },
          { value: '0', label: 'Accounts needed' },
          { value: '100%', label: 'Offline capable' },
        ].map(stat => (
          <div key={stat.label} className="bg-zinc-900 px-6 py-6 text-center">
            <p className="font-pixel text-btc-orange text-lg sm:text-xl mb-2">{stat.value}</p>
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
