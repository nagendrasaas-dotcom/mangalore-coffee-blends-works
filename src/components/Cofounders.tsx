import { Linkedin, Mail } from 'lucide-react';

const Cofounders = () => {
  const founder = {
    id: 1,
    name: "Rajesh Shetty",
    title: "Founder & CEO",
    bio: "A Malnad man growing in green lush estates of all types of coffee plants and city filled with all the coffee varieties made him to gain knowledge about the coffee universe, with 25+ years of experience in coffee world made to brew a coffee powder suitable for all the coffee lovers also we bring the taste of Chikkamagaluru coffee taste is Chikkamagaluru Special coffee powder.",
    image: "/lovable-uploads/a8ff9419-360e-4d4b-a689-d3e5b0d660da.png",
    linkedin: "#",
    email: "cscoffeeworks@gmail.com",
    mobile: ["9611668951", "9110681397"]
  };

  return (
    <section id="cofounders" className="py-20 bg-gradient-to-br from-cream to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
            Meet Our Founder
          </h2>
          <div className="w-24 h-1 bg-coffee-medium mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The passionate mind behind CS Coffee Works, bringing decades of experience 
            and deep-rooted love for Chikamagaluru's coffee heritage.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={founder.image}
                    alt={`${founder.name} - ${founder.title}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-3xl font-bold text-coffee-dark mb-2">
                  {founder.name}
                </h3>
                <p className="text-coffee-medium font-semibold mb-6">
                  {founder.title}
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {founder.bio}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href={`mailto:${founder.email}`}
                    className="flex items-center space-x-2 text-coffee-medium hover:text-coffee-dark transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>Email</span>
                  </a>
                  <a 
                    href={founder.linkedin}
                    className="flex items-center space-x-2 text-coffee-medium hover:text-coffee-dark transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-coffee-light/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-coffee-dark mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Rajesh has created CS Coffee Works with a mission to preserve 
              and promote the authentic flavors of Chikamagaluru coffee. His expertise 
              in traditional processing methods and modern quality standards ensures that every 
              cup of our coffee tells the story of our region's rich coffee heritage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cofounders;