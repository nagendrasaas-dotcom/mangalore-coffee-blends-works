
const Products = () => {
  const products = [
    {
      id: 1,
      name: "Chikamagaluru Special Blend",
      type: "Coffee Powder",
      description: "Our signature blend combining the finest Arabica and Robusta beans, roasted to perfection with traditional Chikamagaluru spices.",
      price: "₹280",
      weight: "250g",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Kaapi Powder Premium",
      type: "Coffee Powder",
      description: "Traditional South Indian filter coffee powder made from hand-picked beans, perfect for your morning kaapi ritual.",
      price: "₹320",
      weight: "250g",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Plantation AA Beans",
      type: "Coffee Beans",
      description: "Premium grade AA coffee beans from Karnataka plantations, perfect for those who prefer to grind their own coffee.",
      price: "₹450",
      weight: "500g",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      name: "Coastal Roast Beans",
      type: "Coffee Beans",
      description: "Medium roast beans with a unique hill country flavor profile, capturing the essence of Chikamagaluru's coffee tradition.",
      price: "₹380",
      weight: "500g",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&q=80"
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
