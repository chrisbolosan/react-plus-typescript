import React from "react";
import { Pizza } from "../types";
// import SpecialOfferCSS from "./SpecialOffer.module.css";
import { WithAddToCartProps } from "./AddToCart";

interface Props {
  pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza }) => {
  return (
    <div className="mx-0 my-0 mb-10 border border-[#ff0000] p-5">
      <h2 className="mx-0 my-0 mb-[10px]">{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <WithAddToCartProps>
        {({ addToCart }) => {
          return (
            <button
              type="button"
              className="bg-gray-300 rounded p-1"
              onClick={() =>
                addToCart({
                  id: pizza.id,
                  name: pizza.name,
                  price: pizza.price,
                })
              }
            >
              Add to Cart
            </button>
          );
        }}
      </WithAddToCartProps>
    </div>
  );
};

export default SpecialOffer;
