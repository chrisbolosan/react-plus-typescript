import React from "react";
import pizzas from "../data/pizzas.json";
import Pizza from "./Pizza";
import PizzaSVG from "../svg/pizza.svg";
import Cart from "./Cart";
import AppStateProvider from "./AppState";
import SpecialOffer from "./SpecialOffer";

export default function App() {
  const specialOfferPizza = pizzas.find((pizza) => pizza.specialOffer);

  return (
    <AppStateProvider>
      <div className="my-0 mx-auto max-w-[800px] pt-0 pr-15 fle">
        <div className="my-0 mx-0 mb-50 text-center">
          <PizzaSVG className=" ml-94" />
          <div className="text-[32px] my-0 mx-0 mb-10">
            Ninja Turtle Pizzaria
          </div>
          <Cart />
        </div>
        {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}
        <ul className="list-none my-0 mx-0 mb-20 p-0">
          {pizzas.map((pizza) => (
            <Pizza key={pizza.id} pizza={pizza} />
          ))}
        </ul>
      </div>
    </AppStateProvider>
  );
}
