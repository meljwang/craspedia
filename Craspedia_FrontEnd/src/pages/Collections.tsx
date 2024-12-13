import React from 'react';
import HomeTitleHeader from '../components/HomeTitleHeader.tsx';
import ItemCard from '../components/ItemCard.tsx';
const Collections = () => {
  return (
    <div className="flex flex-row pt-10 px-4 sm:px-10 lg:px-16 w-full gap-8">
      {/* Filter Section */}
      <div className="w-full md:w-1/4 p-6">
        <p className="text-xl font-bold flex items-center gap-2">FILTERS</p>
        <div className="border border-gray-300 p-4 mt-6 rounded-md">
          <p className="mb-3 text-sm font-medium text-gray-800">CATEGORIES</p>
          <div className="flex flex-col gap-4 text-sm font-light text-gray-700">
            {['Bags', 'Clothings', 'Home Decoration', 'Toys', 'Accessories'].map((category) => (
              <label key={category} className="flex gap-2 items-center cursor-pointer hover:text-gray-900 transition">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded-sm focus:ring-2 focus:ring-yellow-500"
                />
                {category}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Collections Section */}
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-6">
          {/* Title Header */}
          <HomeTitleHeader text1="ALL" text2="COLLECTIONS" />
          
          {/* Sorting Options */}
          <div className="flex items-center gap-4">
            <select className="border border-gray-300 rounded-md px-2 py-2 text-sm font-medium bg-white shadow-sm focus:ring-2 focus:ring-yellow-500 focus:outline-none">
              <option value="lowToHigh">Sort by Price: Low to High</option>
              <option value="highToLow">Sort by Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 py-2 w-full max-w-screen-xl">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
      
    </div>
  );
};

export default Collections;
