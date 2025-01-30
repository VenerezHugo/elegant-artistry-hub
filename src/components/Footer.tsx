export const Footer = () => {
  return (
    <footer className="bg-black text-art-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-light mb-6 tracking-wide">ArtMarket</h3>
            <p className="text-art-white/60 font-light">
              Redefining the future of art collection
            </p>
          </div>
          {["Explore", "Learn", "Support"].map((section) => (
            <div key={section}>
              <h4 className="text-lg font-light mb-6">{section}</h4>
              <ul className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-art-white/60 hover:text-art-gold transition-colors duration-300 font-light"
                    >
                      {section} Link {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-art-white/10 mt-16 pt-8 text-center text-art-white/40 font-light">
          <p>&copy; 2024 ArtMarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};