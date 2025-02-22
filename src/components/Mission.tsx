export const Mission = () => {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <div className="space-y-32 mb-32">
          {["ACCESSIBILITY", "LIQUIDITY", "COMMUNITY", "CULTURE"].map((word, index) => (
            <div
              key={word}
              className="opacity-0 translate-y-10 transition-all duration-700"
              style={{
                animationName: "slideUp",
                animationDuration: "0.7s",
                animationDelay: `${index * 0.2}s`,
                animationFillMode: "forwards",
              }}
            >
              <p className="text-4xl font-display text-art-cream tracking-wider">
                {word}
              </p>
            </div>
          ))}
        </div>
        
        <h2 className="text-5xl font-display mb-12 text-art-cream tracking-wider">Our Vision</h2>
        <p className="text-xl leading-relaxed mb-16 text-art-cream/80 font-light max-w-3xl mx-auto">
          We're redefining the art market by seamlessly bridging traditional collection practices with blockchain innovation. Our platform ensures unparalleled authenticity, provenance, and transaction security for the discerning collector.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {["Authentication", "Tokenization", "Trading"].map((feature) => (
            <div
              key={feature}
              className="p-8 border border-art-cream/10 hover:border-art-gold/30 transition-colors duration-300 animate-slideUp backdrop-blur-sm bg-white/5"
            >
              <h3 className="text-2xl font-display mb-4 text-art-cream tracking-wider">{feature}</h3>
              <p className="text-art-cream/60 font-light">
                Secure and transparent {feature.toLowerCase()} for your digital art collection
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};