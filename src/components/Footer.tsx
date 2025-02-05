export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-art-forest text-art-cream py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-display mb-6 tracking-wider">DOBNEY'S</h3>
            <p className="text-art-cream/60 font-light">
              Redefining the future of art collection
            </p>
          </div>
          {["Explore", "Learn", "Support"].map((section) => (
            <div key={section}>
              <h4 className="text-lg font-display mb-6 tracking-wider">{section}</h4>
              <ul className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-art-cream/60 hover:text-art-gold transition-colors duration-300 font-light"
                    >
                      {section} Link {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-art-cream/10 mt-16 pt-8 text-center text-art-cream/40 font-light">
          <p>&copy; 2024 DOBNEY'S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};