import { SectionWrapper } from '../ui/SectionWrapper';
import { FeatureCard } from '../ui/FeatureCard';
import { features } from '../../data/features';

export function Features() {
  return (
    <SectionWrapper id="features" className="bg-zinc-950">
      <div className="text-center mb-12">
        <h2 className="font-pixel text-btc-orange text-sm sm:text-base leading-relaxed mb-4">
          Why BTC Tracker?
        </h2>
        <p className="font-sans text-zinc-400 max-w-xl mx-auto">
          Built with a single principle: your financial data stays on your device.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map(feature => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </SectionWrapper>
  );
}
