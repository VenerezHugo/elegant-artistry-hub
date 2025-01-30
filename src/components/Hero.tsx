import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-art-black to-black text-art-white">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="container relative z-10 mx-auto px-4 text-center animate-fadeIn">
        <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-tight">
          <span className="font-extralight block mb-2">The Art of</span>
          Collection
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light tracking-wide text-art-white/80">
          Discover and acquire authenticated masterpieces in the digital realm
        </p>
        <Button 
          className="bg-transparent hover:bg-art-white border-2 border-art-white text-art-white hover:text-art-black text-lg px-8 py-6 rounded-none transition-all duration-300"
        >
          Explore Collection
        </Button>
      </div>
    </section>
  );
};