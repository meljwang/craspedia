import React from 'react';
import HomeTitleHeader from './HomeTitleHeader.tsx';
import ItemCard from './ItemCard.tsx';

const LatestCollections = () => {
  return (
    <div className="flex flex-col items-center py-10 px-4">
      {/* Section Header */}
      <div className="text-center">
        <HomeTitleHeader text1="LATEST" text2="COLLECTIONS" />
        <p className="text-gray-600 text-sm mt-2">
          Discover our newest arrivals for the season!
        </p>
      </div>

      {/* Grid of Items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 py-2 w-full max-w-screen-xl">
        {Array.from({ length: 8 }).map((_, index) => (
          <ItemCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default LatestCollections;