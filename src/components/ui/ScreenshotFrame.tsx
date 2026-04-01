import { useState } from 'react';

interface ScreenshotFrameProps {
  src: string;
  alt: string;
  caption?: string;
}

export function ScreenshotFrame({ src, alt, caption }: ScreenshotFrameProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className="flex-shrink-0 snap-center">
      <div className="phone-frame w-[201px] h-[410px] bg-zinc-950 relative overflow-hidden">
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
      {caption && (
        <figcaption className="text-center font-mono text-xs text-zinc-500 mt-3">{caption}</figcaption>
      )}
    </figure>
  );
}
