import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-art-forest to-black">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-20 mix-blend-overlay"></div>
      <div className="container relative z-10 mx-auto px-4 text-center animate-fadeIn">
        <h1 className="text-6xl md:text-8xl font-display mb-8 tracking-wider text-art-cream">
          DOBNEY'S
        </h1>
        <div className="flex flex-col items-center space-y-2">
          <p className="text-xl md:text-2xl tracking-widest text-art-cream/90 uppercase">
            Unlock the World of Art
          </p>
          <p className="text-xl md:text-2xl tracking-widest text-art-cream/90 uppercase">
            & Artifacts
          </p>
        </div>
        <div className="w-48 h-px bg-art-cream mx-auto mt-8 mb-12" />
      </div>
    </section>
  );
};