
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:cscoffeeworks@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
      toast({
        title: "Email client opened",
        description: "Please send the email from your email client to complete your inquiry.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to open email client. Please contact us directly at cscoffeeworks@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-coffee-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-golden-gradient mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg">
            Visit us in Chikamagaluru or reach out to order our premium coffee products.
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
                  123 Coffee Street, MG Road<br />
                  Chikamagaluru, Karnataka 577101<br />
                  India
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Mobile</h4>
                <p className="text-gray-300">+91 9611668951</p>
                <p className="text-gray-300">+91 9110681397</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-gray-300">cscoffeeworks@gmail.com</p>
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
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
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
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
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-300"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-800 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
