import React from "react";
import HomeCarousel from "../components/HomeCarousel.tsx";
import "../index.css";

const Home = () => {
  return (
    <div className="flex flex-col pt-16 w-full h-screen">
      <HomeCarousel />
    </div>
  );
};

export default Home;

