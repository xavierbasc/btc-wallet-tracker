import type { Feature } from '../../types';

export function FeatureCard({ icon, title, description }: Feature) {
  return (
    <article className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-btc-orange/30 hover:glow-btc transition-all duration-300 group">
      <div className="text-3xl mb-4" role="img" aria-label={title}>{icon}</div>
      <h3 className="font-pixel text-xs text-btc-orange mb-3 leading-relaxed">{title}</h3>
      <p className="font-sans text-sm text-zinc-400 leading-relaxed">{description}</p>
    </article>
  );
}
