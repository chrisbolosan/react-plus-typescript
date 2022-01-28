import React, { useContext } from "react";
import PizzaCSS from "./Pizza.module.css";
import { AppSetStateContext, useSetState } from "../components/AppState";

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
  const setState = useSetState();
  const handleAddToCart = () => {
    if (setState) {
      setState(state => {
        return {}
      })
    }
   
  }
  return (
    <AppSetStateContext.Consumer>
      <li className={PizzaCSS.container}>
        <h2>{pizza.name}</h2>
        <p>{pizza.description}</p>
        <p>{pizza.price}</p>
        <button type- "button" onClick={} >Add to Cart</button>
      </li>
    </AppSetStateContext.Consumer>
  );
};

export default Pizza;
