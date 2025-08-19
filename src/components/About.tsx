
const About = () => {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-coffee-medium mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-coffee-dark">
              Rooted in Chikamagaluru Tradition
            </h3>
            <p className="text-gray-700 leading-relaxed">
              CS Coffee Works has been a cherished part of Chikamagaluru's coffee culture for over three decades. 
              Our journey began in the heart of this coffee region, where the aroma of freshly roasted coffee
              beans has been a morning ritual for generations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We source our premium coffee beans directly from the plantations in the Western Ghats, 
              ensuring that every cup carries the authentic taste of Karnataka's coffee heritage. 
              Our traditional roasting methods, passed down through generations, create the perfect 
              balance of flavor and aroma that Chikamagaluru residents have loved for years.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From our small family business to becoming Chikamagaluru's trusted coffee brand, 
              we remain committed to quality, tradition, and the rich coffee culture that defines our beautiful region.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80"
              alt="Coffee plantation"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-coffee-dark/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
