import React from 'react';
import { Search, ShoppingCart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          Квартал
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Пошук товарів..."
              className="bg-gray-800 text-white placeholder-gray-500 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
          </div>
          <button aria-label="cart" className="relative text-white hover:text-gray-300">
            <ShoppingCart className="h-7 w-7" />
            {/* Optional: Add a badge for cart item count */}
            {/* <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span> */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
