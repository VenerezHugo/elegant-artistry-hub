import { Card } from "@/components/ui/card";

const artworks = [
  {
    id: 1,
    title: "Digital Renaissance",
    artist: "Elena Moore",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Future Artifacts",
    artist: "James Chen",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Neural Canvas",
    artist: "Sarah Williams",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Quantum Dreams",
    artist: "Michael Zhang",
    image: "/placeholder.svg",
  },
];

export const ArtworkGrid = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-art-forest to-art-purple">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-display mb-16 text-art-cream text-center tracking-wider">
          Featured Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artworks.map((artwork) => (
            <Card
              key={artwork.id}
              className="group relative overflow-hidden transition-transform duration-500 hover:-translate-y-2 bg-transparent border border-art-cream/10 hover:border-art-gold/30"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 bg-gradient-to-t from-art-purple/90 to-transparent absolute bottom-0 w-full text-art-cream">
                <h3 className="text-xl font-display tracking-wider mb-2">
                  {artwork.title}
                </h3>
                <p className="text-art-cream/70 font-light">{artwork.artist}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};