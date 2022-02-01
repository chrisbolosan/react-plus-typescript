import React, { Component } from "react";
// import CartCSS from "./Cart.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { AppStateContext } from "./AppState";

interface Props {}
interface State {
  isOpen: boolean;
}

export default class Cart extends Component<Props, State> {
  #containerRef: React.RefObject<HTMLDivElement>;
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.#containerRef = React.createRef();
  }
  cartHandle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  handleClickOutside = (e: Event) => {
    if (
      this.#containerRef.current &&
      !this.#containerRef.current.contains(e.target as Node)
    ) {
      this.setState({ isOpen: false });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <AppStateContext.Consumer>
        {(state) => {
          const cartCount = state.cart.items.reduce((acc, item) => {
            return acc + item.quantity;
          }, 0);
          return (
            <div
              className="inline-block postion-relative"
              ref={this.#containerRef}
            >
              <button
                className="bg-none border-none p-0 inline-flex items-center text-[16px] cursor-pointer"
                type="button"
                onClick={this.cartHandle}
              >
                <FiShoppingCart className="mt-0 mr-[5px] mb-0 ml-0 " />
                <span> {cartCount} pizza(s)</span>
              </button>
              <div
                className="bg-[#ffffff] postion-absolute shadow-3xl -translate-x-50 p-1 left-[5px] w-[200px] text-left"
                style={{
                  display: this.state.isOpen ? "block" : "none",
                }}
              >
                <ul className="list-none m-0 p-0">
                  {state.cart.items.map((item) => {
                    return (
                      <li
                        className="box-border h-18 w-18 border border-[#ccc] p-2"
                        key={item.id}
                      >
                        {item.name} &times; {item.quantity}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        }}
      </AppStateContext.Consumer>
    );
  }
}
