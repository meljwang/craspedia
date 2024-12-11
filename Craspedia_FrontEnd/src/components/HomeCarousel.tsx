import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import mosaic_pillow from "../assets/mosaic_pillow.jpg";
import crochet_bag from "../assets/crochet_bag.png";
import crochet_best_seller from "../assets/crochet_best_seller.jpg";

const slides = [
  {
    id: 1,
    title: "Latest Collection",
    description: "Explore our handpicked collection for the season.",
    image: mosaic_pillow,
    link: "/latest-collection",
    buttonText: "Explore Now",
    buttonGradient: "from-yellow-400 to-yellow-600",
  },
  {
    id: 2,
    title: "New Arrivals",
    description: "Be the first to grab our latest arrivals.",
    image: crochet_bag,
    link: "/new-arrivals",
    buttonText: "Discover More",
    buttonGradient: "from-orange-400 to-orange-600",
  },
  {
    id: 3,
    title: "Best Sellers",
    description: "Shop the most-loved products by our customers.",
    image: crochet_best_seller,
    link: "/best-sellers",
    buttonText: "Shop Now",
    buttonGradient: "from-red-400 to-red-600",
  },
];

const HomeCarousel = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  return (
    <div
      ref={ref}
      className="relative w-screen h-screen overflow-y-auto"
    >
      {slides.map((slide) => (
        <motion.div
          key={slide.id}
          className="relative w-full h-screen flex items-center justify-center snap-center"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
          </div>

          {/* Overlay Content */}
          <div className="relative z-10 text-center text-white px-6">
            <h1 className="text-6xl font-bold tracking-wide drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]">
              {slide.title}
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              {slide.description}
            </p>
            <a
              href={slide.link}
              className={`mt-8 inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-md text-lg font-semibold text-white rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-40 hover:scale-105 transform transition-all duration-300`}
            >
              {slide.buttonText}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HomeCarousel;
