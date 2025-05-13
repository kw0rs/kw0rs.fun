import React from 'react';
import ProductCard from './ProductCard';

const sampleProducts = [
  {
    name: "Хліб Житній",
    description: "Свіжий житній хліб, випечений за традиційним рецептом. Ідеально підходить для бутербродів та до перших страв.",
    // imageUrl: "/placeholder-images/hlib_zhytniy.jpg" // Example placeholder
  },
  {
    name: "Молоко Пастеризоване 2.5%",
    description: "Натуральне коров'яче молоко, пастеризоване, жирністю 2.5%. Багате на кальцій та вітаміни.",
    // imageUrl: "/placeholder-images/moloko.jpg"
  },
  {
    name: "Яйця Курячі Десяток",
    description: "Відбірні курячі яйця, категорія С1. Десять штук в упаковці. Джерело білка та корисних мікроелементів.",
    // imageUrl: "/placeholder-images/yaytsya.jpg"
  }
];

const ProductGrid: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sampleProducts.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            description={product.description}
            // imageUrl={product.imageUrl} // Uncomment if you have images
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
