import React from 'react';

const HomeTitleHeader = ({ text1, text2 }) => {
  return (
    <div className="inline-flex flex-col items-center">
      <p className="text-gray-600 font-bold text-lg md:text-xl tracking-wide">
        {text1} <span className="text-yellow-500">{text2}</span>
      </p>
    </div>
  );
};

export default HomeTitleHeader;
