import React from "react";
import pizzas from "../data/pizzas.json";
import Pizza from "./Pizza";
import AppCSS from "./App.module.css";

export default function App() {
  return (
    <div className={AppCSS.container}>
      <ul>
        {pizzas.map((pizza) => (
          <Pizza key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>
  );
}
