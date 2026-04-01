import { Fragment } from 'react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { StepCard } from '../ui/StepCard';
import { manualSteps } from '../../data/manualSteps';

export function Manual() {
  return (
    <SectionWrapper id="manual" className="bg-zinc-950">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-btc-orange text-sm sm:text-base leading-relaxed mb-4">
            Getting Started
          </h2>
          <p className="font-sans text-zinc-400">
            Up and running in under 2 minutes.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {manualSteps.map((step, i) => (
            <Fragment key={step.number}>
              <StepCard {...step} />
              {i < manualSteps.length - 1 && (
                <div className="ml-5 w-px h-8 bg-zinc-800" aria-hidden="true" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
