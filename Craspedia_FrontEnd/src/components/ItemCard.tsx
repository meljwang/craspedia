import React from 'react';
import { Card } from "flowbite-react";
import labubu from "../assets/labubu_christmas.jpeg";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
  stockQuantity: number;
}

const product: Product = {
  id: 1,
  name: "Labubu (Christmas Edition)",
  price: 10,
  description: "Labubu in christmas outfit.",
  category: "Toys",
  imageUrl: labubu,
  stockQuantity: 10,
};

const ItemCard = () => {
  return (
    <div className="w-full cursor-pointer">
      <img src={product.imageUrl} alt="Product Image" className="w-full h-auto hover:scale-105 transition ease-in-out" />
      <h5 className="text-left text-sm text-gray-900 py-2">
        {product.name}
      </h5>
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-gray-900 dark:text-white">$ {product.price}</span>
      </div>
    </div>
  );
};

export default ItemCard;
