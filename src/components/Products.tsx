
const Products = () => {
  const products = [
    {
      id: 1,
      name: "C S Coffee Powder",
      type: "Coffee Powder",
      description: "Chikamagalur Special Coffee Powder - 80% coffee and 20% chicory. Available in 250g and 500g quantities.",
      price: "₹190",
      weight: "200g",
      image: "/lovable-uploads/cs-coffee-200g.jpg"
    },
    {
      id: 2,
      name: "C S Coffee Powder",
      type: "Coffee Powder",
      description: "Chikamagalur Special Coffee Powder - 80% coffee and 20% chicory. Perfect for your daily filter coffee.",
      price: "₹450",
      weight: "400g",
      image: "/lovable-uploads/cs-coffee-400g.jpg"
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
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
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
                
                <button className="w-full bg-coffee-dark hover:bg-coffee-medium text-white py-2 px-4 rounded transition-colors duration-300">
                  Contact for Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
