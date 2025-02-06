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
        
        <h2 className="text-3xl md:text-4xl font-display mb-16 text-art-cream tracking-wider">
          Explore, Preserve & Protect the valuable data of our world's art & artifacts
        </h2>
        
        {/* Two columns with connected words */}
        <div className="flex justify-between max-w-4xl mx-auto">
          {/* Left column */}
          <div className="flex flex-col items-center">
            <p className="text-4xl font-display text-art-cream tracking-wider">
              ACCESSIBILITY
            </p>
            <div className="w-px h-24 bg-art-cream my-4" />
            <p className="text-4xl font-display text-art-cream tracking-wider">
              LIQUIDITY
            </p>
          </div>
          
          {/* Right column */}
          <div className="flex flex-col items-center">
            <p className="text-4xl font-display text-art-cream tracking-wider">
              COMMUNITY
            </p>
            <div className="w-px h-24 bg-art-cream my-4" />
            <p className="text-4xl font-display text-art-cream tracking-wider">
              CULTURE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};