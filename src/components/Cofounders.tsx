import { Linkedin, Mail } from 'lucide-react';

const Cofounders = () => {
  const cofounders = [
    {
      id: 1,
      name: "Rajesh Shetty",
      title: "Co-founder & CEO",
      bio: "With over 25 years of experience in the coffee industry, Rajesh brings deep knowledge of traditional Chikamagaluru coffee processing techniques. He started his journey as a coffee estate worker and gradually built expertise in roasting, blending, and quality control. His passion for preserving authentic coffee flavors while embracing modern processing methods has been the driving force behind CS Coffee Works.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      linkedin: "#",
      email: "rajesh@cscoffeeworks.com"
    },
    {
      id: 2,
      name: "Priya Chandrashekar",
      title: "Co-founder & Master Roaster",
      bio: "Priya is a certified Q Grader and has spent over 15 years perfecting the art of coffee roasting. Born and raised in Chikamagaluru, she developed her palate working alongside local coffee farmers and understanding the nuances of different bean varieties. Her innovative approach to blending traditional and modern roasting techniques has earned CS Coffee Works recognition across Karnataka.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      linkedin: "#",
      email: "priya@cscoffeeworks.com"
    }
  ];

  return (
    <section id="cofounders" className="py-20 bg-gradient-to-br from-cream to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
            Meet Our Cofounders
          </h2>
          <div className="w-24 h-1 bg-coffee-medium mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The passionate minds behind CS Coffee Works, bringing together decades of experience 
            and deep-rooted love for Chikamagaluru's coffee heritage.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {cofounders.map((cofounder) => (
              <div key={cofounder.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={cofounder.image}
                    alt={`${cofounder.name} - ${cofounder.title}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-coffee-dark mb-2">
                    {cofounder.name}
                  </h3>
                  <p className="text-coffee-medium font-semibold mb-4">
                    {cofounder.title}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {cofounder.bio}
                  </p>
                  <div className="flex items-center space-x-4">
                    <a 
                      href={`mailto:${cofounder.email}`}
                      className="flex items-center space-x-2 text-coffee-medium hover:text-coffee-dark transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      <span>Email</span>
                    </a>
                    <a 
                      href={cofounder.linkedin}
                      className="flex items-center space-x-2 text-coffee-medium hover:text-coffee-dark transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-coffee-light/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-coffee-dark mb-4">
              Our Shared Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Together, Rajesh and Priya have created CS Coffee Works with a mission to preserve 
              and promote the authentic flavors of Chikamagaluru coffee. Their combined expertise 
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