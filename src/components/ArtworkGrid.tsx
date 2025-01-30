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
    <section className="py-20 bg-art-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-art-black text-center">
          Featured Artworks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artworks.map((artwork) => (
            <Card
              key={artwork.id}
              className="group relative overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-art-black">
                  {artwork.title}
                </h3>
                <p className="text-art-gray">{artwork.artist}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};