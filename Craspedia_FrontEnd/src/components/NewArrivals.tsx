import React from 'react';
import HomeTitleHeader from './HomeTitleHeader';
import ItemCard from './ItemCard';

const NewArrivals = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="py-10">
        <HomeTitleHeader text1="LATEST" text2="COLLECTIONS" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-4 sm:px-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <ItemCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
