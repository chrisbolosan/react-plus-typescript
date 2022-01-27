import React from "react";
import pizzas from "../data/pizzas.json";
import Pizza from "./Pizza";

export default function App() {
  return (
    <ul>
      {pizzas.map((pizza) => (
        <Pizza key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}
