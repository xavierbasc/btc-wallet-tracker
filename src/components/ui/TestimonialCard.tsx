import type { Testimonial } from '../../types';

export function TestimonialCard({ quote, author, initials, platform, rating }: Testimonial) {
  return (
    <article className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <div className="flex items-center gap-1 mb-4" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-btc-orange text-sm" aria-hidden="true">★</span>
        ))}
      </div>
      <blockquote className="font-sans text-sm text-zinc-300 leading-relaxed mb-5">
        "{quote}"
      </blockquote>
      <footer className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full bg-btc-orange/20 border border-btc-orange/40 flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="font-pixel text-btc-orange text-xs">{initials}</span>
        </div>
        <div>
          <p className="font-sans text-sm font-semibold text-zinc-200">{author}</p>
          <p className="font-mono text-xs text-zinc-500">{platform}</p>
        </div>
      </footer>
    </article>
  );
}
