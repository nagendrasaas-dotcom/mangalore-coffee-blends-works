
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-coffee-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-golden-gradient mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg">
            Visit us in Mangalore or reach out to order our premium coffee products.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p className="text-gray-300">
                  123 Coffee Street, Bejai<br />
                  Mangalore, Karnataka 575004<br />
                  India
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <p className="text-gray-300">+91 824 123 4567</p>
                <p className="text-gray-300">+91 987 654 3210</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-gray-300">info@cscoffeeworks.com</p>
                <p className="text-gray-300">orders@cscoffeeworks.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Business Hours</h4>
                <p className="text-gray-300">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                <p className="text-gray-300">Sunday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-300"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-300"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-300"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
