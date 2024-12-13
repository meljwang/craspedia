import React from "react";
import HomeCarousel from "../components/HomeCarousel.tsx";
import "../index.css";
import LatestCollections from "../components/LatestCollections.tsx";
import BestSellers from "../components/BestSellers.tsx";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <div>
        <HomeCarousel />
      </div>
      <div className="flex flex-col">
        <LatestCollections />
        <BestSellers />
      </div>
    </div>
  );
};

export default Home;
