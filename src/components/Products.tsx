import { useState } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "C S Coffee Powder",
      type: "Coffee Powder",
      description: "Chikamagalur Special Coffee Powder - 80% coffee and 20% chicory. Available in 250g and 500g quantities.",
      price: "₹190",
      weight: "200g",
      image: "/lovable-uploads/cs-coffee-200g.jpg",
      flipImage: false
    },
    {
      id: 2,
      name: "C S Coffee Powder",
      type: "Coffee Powder",
      description: "Chikamagalur Special Coffee Powder - 80% coffee and 20% chicory. Perfect for your daily filter coffee.",
      price: "₹450",
      weight: "400g",
      image: "/lovable-uploads/cs-coffee-400g.jpg",
      flipImage: true,
      flipVertical: true
    },
    {
      id: 3,
      name: "Coffee Seeds",
      type: "Coffee Seeds",
      description: "All types of premium coffee seeds from Chikamagalur. Perfect for those who prefer to roast and grind their own coffee.",
      price: "From ₹500/kg",
      weight: "Various",
      image: "/lovable-uploads/coffee-seeds.jpg"
    },
    {
      id: 4,
      name: "Roasted Coffee Seeds",
      type: "Roasted Seeds",
      description: "All types of freshly roasted coffee seeds from Chikamagalur. Contact us for price details.",
      price: "Contact Us",
      weight: "Various",
      image: "/lovable-uploads/roasted-coffee-seeds.jpg"
    }
  ];

  const handleWhatsAppOrder = (productName: string, weight: string) => {
    const message = `Hi, I would like to order ${productName} (${weight}). Please share the details.`;
    window.open(`https://wa.me/919110681397?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
            Our Products
          </h2>
          <div className="w-24 h-1 bg-coffee-medium mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg">
            Discover our premium range of coffee powders and beans, 
            crafted with love and tradition in the heart of Chikamagaluru.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div 
                className="relative overflow-hidden cursor-pointer bg-gray-50"
                onClick={() => setSelectedProduct(product.id)}
              >
                <img 
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-56 object-contain group-hover:scale-105 transition-transform duration-300 p-2 ${
                    (product as any).flipImage && (product as any).flipVertical ? 'scale-x-[-1] scale-y-[-1]' :
                    (product as any).flipImage ? 'scale-x-[-1]' : ''
                  }`}
                />
                <div className="absolute top-4 right-4 bg-coffee-dark text-white px-2 py-1 rounded text-sm">
                  {product.type}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-coffee-dark mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-coffee-medium font-semibold">
                    {product.weight}
                  </span>
                  <span className="text-2xl font-bold text-coffee-dark">
                    {product.price}
                  </span>
                </div>
                
                <button 
                  onClick={() => handleWhatsAppOrder(product.name, product.weight)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Order on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={selectedProduct !== null} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="max-w-2xl w-full p-0 overflow-hidden bg-white">
            <Carousel className="w-full" opts={{ startIndex: selectedProduct ? selectedProduct - 1 : 0 }}>
              <CarouselContent>
                {products.map((product) => (
                  <CarouselItem key={product.id}>
                    <div className="flex flex-col items-center p-6">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className={`w-full max-h-[60vh] object-contain rounded-lg ${
                          (product as any).flipImage && (product as any).flipVertical ? 'scale-x-[-1] scale-y-[-1]' :
                          (product as any).flipImage ? 'scale-x-[-1]' : ''
                        }`}
                      />
                      <p className="text-coffee-dark mt-4 text-lg font-semibold">
                        {product.name} - {product.weight}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">{product.description}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Products;
