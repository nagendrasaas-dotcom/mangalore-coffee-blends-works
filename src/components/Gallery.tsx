
const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80",
      alt: "Coffee beans in traditional bowl",
      title: "Premium Coffee Beans"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
      alt: "Coffee plantation",
      title: "Our Coffee Plantations"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80",
      alt: "Traditional coffee making",
      title: "Traditional Brewing"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=600&q=80",
      alt: "Coffee roasting process",
      title: "Roasting Process"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80",
      alt: "Coffee packaging",
      title: "Quality Packaging"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80",
      alt: "Coffee tasting",
      title: "Coffee Tasting"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-coffee-medium mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg">
            Take a glimpse into our coffee-making journey, from bean to cup.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold text-center px-4">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
