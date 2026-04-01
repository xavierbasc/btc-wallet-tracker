import type { ManualStep } from '../../types';

export function StepCard({ number, icon, title, description }: ManualStep) {
  return (
    <article className="flex gap-5 items-start">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-btc-orange/10 border border-btc-orange/30 flex items-center justify-center">
        <span className="font-pixel text-btc-orange text-xs">{number}</span>
      </div>
      <div>
        <h3 className="font-pixel text-xs text-zinc-100 leading-relaxed mb-1">
          {icon} {title}
        </h3>
        <p className="font-sans text-sm text-zinc-400 leading-relaxed">{description}</p>
      </div>
    </article>
  );
}
