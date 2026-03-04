import { Coffee, Facebook, Instagram, Twitter } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-coffee-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold">CS Coffee Works</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Bringing you the authentic taste of Chikamagaluru coffee to your palate and we're committed to quality and tradition.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>4th Cross, APMC Yard</li>
              <li>Chikamagalur 577101</li>
              <li>Karnataka, India</li>
              <li>+91 824 123 4567</li>
              <li>info@cscoffeeworks.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2026 CS Coffee Works. All rights reserved. Made with ❤️ by Eadda Solutions Pvt. Ltd.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;