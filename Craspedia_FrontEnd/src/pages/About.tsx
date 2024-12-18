import React from 'react';
import HomeTitleHeader from '../components/HomeTitleHeader.tsx';
import craspediaflowers from '../assets/craspediaflowers.jpg';

const About = () => {
  return (
    <div className="flex flex-col pt-10 px-6 sm:px-12 lg:px-20 w-full gap-8 mt-16">
      {/* Header Section */}
      <header className="flex items-center justify-center">
        <HomeTitleHeader text1="ABOUT" text2="US" />
      </header>

      {/* Content Section */}
      <section className="flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="lg:w-2/5">
          <img
            src={craspediaflowers}
            alt="Craspedia flowers"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <p className="text-lg leading-relaxed text-gray-700">
            The Craspedia flower, with its unique round blooms, resembles delicate balls of yarn. This resemblance inspired our name and reflects the heart of what we do.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            Just like each Craspedia flower is distinct and beautiful, our crochet creations are crafted with care to bring a touch of charm and creativity to your life, one thoughtful stitch at a time.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="flex flex-col gap-12">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Quality Assurance Card */}
          <div className="flex-1 border rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-800">Quality Assurance</h3>
            <p className="mt-4 text-gray-600">
              Every product we create is crafted with care and attention to detail, ensuring that it is not only beautiful but also functional and durable.
            </p>
          </div>

          {/* Sustainability Card */}
          <div className="flex-1 border rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-800">Sustainability</h3>
            <p className="mt-4 text-gray-600">
              We prioritize eco-friendly materials and processes to minimize our impact on the environment while crafting our unique creations.
            </p>
          </div>

          {/* Customer Satisfaction Card */}
          <div className="flex-1 border rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-800">Customer Satisfaction</h3>
            <p className="mt-4 text-gray-600">
              Your satisfaction is our top priority. We ensure that each product meets the highest standards of quality and craftsmanship.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
