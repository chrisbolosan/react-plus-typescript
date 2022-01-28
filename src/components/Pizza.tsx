import React from "react";
import PizzaCSS from "./Pizza.module.css";
import AppStateProvider from "../components/AppState";

interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
}
interface Props {
  pizza: Pizza;
}

const Pizza: React.FC<Props> = ({ pizza }: Props) => {
  return (
    <AppStateProvider>
      <li className={PizzaCSS.container}>
        <h2>{pizza.name}</h2>
        <p>{pizza.description}</p>
        <p>{pizza.price}</p>
      </li>
    </AppStateProvider>
  );
};

export default Pizza;
// export default function Pizza(props: Pizza) {
//   return (
//     <li>
//       <h2>{props.name}</h2>
//       <p>{props.description}</p>
//       <p>{props.price}</p>
//     </li>
//   );
// }
