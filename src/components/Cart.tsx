import React, { Component } from "react";
import CartCSS from "./Cart.module.css";
import { FiShoppingCart } from "react-icons/fi";

interface Props {}
interface State {
  isOpen: boolean;
}

export default class Cart extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  cartHandle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <div className={CartCSS.cartContainer}>
        <button
          className={CartCSS.button}
          type="button"
          onClick={this.cartHandle}
        >
          <FiShoppingCart />
          <span> 2 pizza(s)</span>
        </button>
        <div
          className={CartCSS.cartDropDown}
          style={{
            display: this.state.isOpen ? "block" : "none",
          }}
        >
          <ul>
            <li>Napoletana</li>
            <li>Marinara</li>
          </ul>
        </div>
      </div>
    );
  }
}
