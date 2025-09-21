
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/cs-coffee-logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="CS Coffee Works Premium Quality" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-coffee-medium hover:text-coffee-dark transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-coffee-medium hover:text-coffee-dark transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('cofounders')}
              className="text-coffee-medium hover:text-coffee-dark transition-colors"
            >
              Founders
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-coffee-medium hover:text-coffee-dark transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('history')}
              className="text-coffee-medium hover:text-coffee-dark transition-colors"
            >
              History
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-coffee-medium hover:text-coffee-dark transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-coffee-medium hover:text-coffee-dark transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-coffee-medium hover:text-coffee-dark transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('cofounders')}
                className="text-coffee-medium hover:text-coffee-dark transition-colors text-left"
              >
                Founders
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-coffee-medium hover:text-coffee-dark transition-colors text-left"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('history')}
                className="text-coffee-medium hover:text-coffee-dark transition-colors text-left"
              >
                History
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-coffee-medium hover:text-coffee-dark transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
