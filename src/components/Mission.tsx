export const Mission = () => {
  return (
    <section className="py-32 bg-art-white">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="text-5xl font-light mb-12 text-art-black tracking-wide">Our Vision</h2>
        <p className="text-xl leading-relaxed mb-16 text-art-black/80 font-light max-w-3xl mx-auto">
          We're redefining the art market by seamlessly bridging traditional collection practices with blockchain innovation. Our platform ensures unparalleled authenticity, provenance, and transaction security for the discerning collector.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {["Authentication", "Tokenization", "Trading"].map((feature) => (
            <div
              key={feature}
              className="p-8 border border-art-black/10 hover:border-art-gold/50 transition-colors duration-300 animate-slideUp"
            >
              <h3 className="text-2xl font-light mb-4 text-art-black">{feature}</h3>
              <p className="text-art-gray font-light">
                Secure and transparent {feature.toLowerCase()} for your digital art collection
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};