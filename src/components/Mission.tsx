export const Mission = () => {
  return (
    <section className="py-20 bg-art-black text-art-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
        <p className="text-xl leading-relaxed mb-8">
          We're revolutionizing the art market by bringing together traditional art
          collection practices with blockchain technology. Our platform ensures
          authenticity, provenance, and seamless transactions for the next
          generation of art collectors.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {["Authentication", "Tokenization", "Trading"].map((feature) => (
            <div
              key={feature}
              className="p-6 border border-art-gold rounded-lg animate-slideUp"
            >
              <h3 className="text-xl font-semibold mb-4">{feature}</h3>
              <p className="text-art-gray">
                Secure and transparent {feature.toLowerCase()} for your digital art
                collection
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};