
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Cofounders from '@/components/Cofounders';
import Products from '@/components/Products';
import History from '@/components/History';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Cofounders />
      <Products />
      <History />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
