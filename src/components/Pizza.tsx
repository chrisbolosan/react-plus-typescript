import React from "react";
// import PizzaCSS from "./Pizza.module.css";
import { Pizza } from "../types";
import { useAddToCart } from "./AddToCart";

interface Props {
  pizza: Pizza;
}

const PizzaItem: React.FC<Props> = ({ pizza }) => {
  const addToCart = useAddToCart();
  const handleAddToCart = () => {
    addToCart({
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
    });
  };
  return (
    <li className="mx-0 my-0 mb-10 border border-[#deb887] p-5 list-none ">
      <h2 className="mx-0 my-0 mb-[10px]">{pizza.name}</h2>
      <p className="mb-0">{pizza.description}</p>
      <p className="mb-0">{pizza.price}</p>
      <button
        type="button"
        className="bg-gray-300 rounded p-1"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </li>
  );
};

export default PizzaItem;
