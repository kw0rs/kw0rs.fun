import React from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  imageUrl?: string; // Optional image URL
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, imageUrl }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
      {imageUrl && (
        <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
          Додати в кошик
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
