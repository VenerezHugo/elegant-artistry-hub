import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-art-forest to-black">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-20 mix-blend-overlay"></div>
      <div className="container relative z-10 mx-auto px-4 text-center animate-fadeIn">
        <h1 className="text-6xl md:text-8xl font-display mb-8 tracking-wider text-art-cream">
          DOBNEY'S
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light tracking-widest text-art-cream/90 uppercase">
          Unlock the World of Art
        </p>
        <div className="w-48 h-px bg-art-gold/50 mx-auto mt-16" />
      </div>
    </section>
  );
};