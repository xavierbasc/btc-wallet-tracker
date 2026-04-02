import { useState } from 'react';

interface ScreenshotFrameProps {
  src: string;
  alt: string;
  caption?: string;
}

export function ScreenshotFrame({ src, alt, caption }: ScreenshotFrameProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className="flex-shrink-0 snap-center group">
      <div className="relative">
        {/* Glow behind phone on hover */}
        <div
          className="absolute inset-0 rounded-[44px] blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none scale-90"
          style={{ background: 'radial-gradient(ellipse, rgba(247,147,26,0.25) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="phone-frame w-[201px] h-[410px] bg-zinc-950 relative overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
          {!loaded && (
            <div className="absolute inset-0 bg-zinc-800 animate-pulse rounded-[37px]" aria-hidden="true" />
          )}
          <img
            src={src}
            alt={alt}
            width={201}
            height={410}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </div>
      {caption && (
        <figcaption className="text-center font-mono text-xs text-zinc-500 mt-3 group-hover:text-zinc-400 transition-colors duration-200">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
