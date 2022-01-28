import React, { Component } from "react";
import CartCSS from "./Cart.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { AppStateContext } from "./AppState";

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
    // console.log(e.target);
    // if((e.target. as HTMLElement).nodeName === "SPAN") {
    //     e.target as HTMLSpanElement).;
    // }
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <AppStateContext.Consumer>
        {(state) => {
          <div className={CartCSS.cartContainer}>
            <button
              className={CartCSS.button}
              type="button"
              onClick={this.cartHandle}
            >
              <FiShoppingCart />
              <span> {state.cart.items.length} pizza(s)</span>
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
                {state.cart.items.map((item) => {
                  return <li key={item.id}>{item.name}</li>;
                })}
              </ul>
            </div>
          </div>;
        }}
      </AppStateContext.Consumer>
    );
  }
}
