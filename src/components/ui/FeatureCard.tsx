import type { Feature } from '../../types';

export function FeatureCard({ icon, title, description }: Feature) {
  return (
    <article className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-btc-orange/40 transition-all duration-300 overflow-hidden">
      {/* Subtle glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'radial-gradient(circle at top left, rgba(247,147,26,0.06) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="relative">
        {/* Icon in a small rounded square */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 text-2xl mb-4 group-hover:border-btc-orange/30 transition-colors duration-300">
          {icon}
        </div>

        <h3 className="font-pixel text-xs text-btc-orange mb-3 leading-relaxed">
          {title}
        </h3>
        <p className="font-sans text-sm text-zinc-400 leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}
