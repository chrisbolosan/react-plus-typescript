import React from "react";
import pizzas from "../data/pizzas.json";
import Pizza from "./Pizza";
import AppCSS from "./App.module.css";
import PizzaSVG from "../svg/pizza.svg";
import Cart from "./Cart";

export default function App() {
  return (
    <div className={AppCSS.container}>
      <div className={AppCSS.header}>
        <PizzaSVG width={100} height={100} />
        <div className={AppCSS.siteTitle}>Ninja Turtle Pizzaria</div>
        <Cart />
      </div>
      <ul>
        {pizzas.map((pizza) => (
          <Pizza key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>
  );
}
