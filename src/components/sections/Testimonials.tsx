import { SectionWrapper } from '../ui/SectionWrapper';
import { TestimonialCard } from '../ui/TestimonialCard';
import { testimonials } from '../../data/testimonials';

export function Testimonials() {
  return (
    <SectionWrapper className="bg-black/40">
      <div className="text-center mb-12">
        <h2 className="font-pixel text-btc-orange text-sm sm:text-base leading-relaxed mb-4">
          What Users Say
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map(t => (
          <TestimonialCard key={t.author} {...t} />
        ))}
      </div>
    </SectionWrapper>
  );
}
