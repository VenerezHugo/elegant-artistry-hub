export const Footer = () => {
  return (
    <footer className="bg-art-black text-art-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ArtMarket</h3>
            <p className="text-art-gray">
              Revolutionizing the future of art collection
            </p>
          </div>
          {["Explore", "Learn", "Support"].map((section) => (
            <div key={section}>
              <h4 className="text-lg font-semibold mb-4">{section}</h4>
              <ul className="space-y-2">
                {[1, 2, 3].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-art-gray hover:text-art-gold transition-colors"
                    >
                      {section} Link {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-art-gray/20 mt-8 pt-8 text-center text-art-gray">
          <p>&copy; 2024 ArtMarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};