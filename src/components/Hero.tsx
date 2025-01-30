import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-art-black text-art-white">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-50" />
      <div className="container relative z-10 mx-auto px-4 text-center animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          The Future of Art Collection
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Discover, collect, and trade authenticated digital art pieces
        </p>
        <Button className="bg-art-gold text-art-black hover:bg-art-white transition-colors">
          Explore Collection
        </Button>
      </div>
    </section>
  );
};