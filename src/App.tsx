import { Navbar } from './components/ui/Navbar';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { Screenshots } from './components/sections/Screenshots';
import { Manual } from './components/sections/Manual';
import { Testimonials } from './components/sections/Testimonials';
import { Privacy } from './components/sections/Privacy';
import { Footer } from './components/sections/Footer';

function Divider() {
  return <div className="section-divider mx-auto max-w-4xl" aria-hidden="true" />;
}

export default function App() {
  return (
    <>
      <a
        href="#features"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-btc-orange text-white px-4 py-2 rounded-lg z-50 font-sans text-sm"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Divider />
        <Features />
        <Divider />
        <Screenshots />
        <Divider />
        <Manual />
        <Divider />
        <Testimonials />
        <Divider />
        <Privacy />
      </main>
      <Footer />
    </>
  );
}
