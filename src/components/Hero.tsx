
import { Coffee } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Coffee className="h-16 w-16 text-golden-gradient" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            CS Coffee Works
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4">
            Authentic Mangalore Coffee Since Generations
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            From the lush hills of Karnataka to your cup, we bring you the finest coffee beans 
            and traditional blends that capture the essence of Mangalore's rich coffee heritage.
          </p>
          <button 
            onClick={scrollToProducts}
            className="bg-coffee-dark hover:bg-coffee-medium text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Coffee
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
