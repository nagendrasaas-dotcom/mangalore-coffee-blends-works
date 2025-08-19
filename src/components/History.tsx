const History = () => {
  return (
    <section id="history" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
            Coffee Heritage of Mangalore
          </h2>
          <div className="w-24 h-1 bg-coffee-medium mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-coffee-dark">
                The Coastal Coffee Legacy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Mangalore's tryst with coffee dates back to the 17th century when coffee cultivation was 
                first introduced to the Western Ghats. The unique coastal climate and fertile soil of the 
                region created the perfect conditions for growing premium Arabica and Robusta beans.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The traditional processing methods developed by local farmers involved sun-drying the beans 
                on raised platforms, allowing the coastal breeze to impart a distinctive flavor profile 
                that became synonymous with Mangalorean coffee.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&q=80"
                alt="Coffee plantation in Western Ghats"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-coffee-dark/20 to-transparent"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"
                alt="Traditional coffee grinding"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-coffee-dark/20 to-transparent"></div>
            </div>
            
            <div className="space-y-6 order-1 md:order-2">
              <h3 className="text-2xl font-bold text-coffee-dark">
                Evolution of Coffee Powder Making
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The art of coffee powder making in Mangalore evolved from traditional stone grinding methods 
                used in local households. Families would roast green coffee beans on iron pans over wood fires, 
                creating aromatic blends that filled entire neighborhoods with the rich scent of freshly roasted coffee.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By the 1960s, small-scale coffee processing units began emerging across Mangalore, 
                combining traditional roasting techniques with modern grinding technology. This fusion 
                created the distinctive Mangalorean coffee powder that became famous throughout Karnataka 
                and beyond for its bold flavor and perfect grind consistency.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, CS Coffee Works continues this proud tradition, using time-tested methods alongside 
                modern quality control to deliver the authentic taste that has made Mangalore coffee legendary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;