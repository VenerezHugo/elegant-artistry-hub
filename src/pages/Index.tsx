import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { ArtworkGrid } from "@/components/ArtworkGrid";
import { Mission } from "@/components/Mission";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-art-white">
      <Hero />
      <Intro />
      <Mission />
      <ArtworkGrid />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;