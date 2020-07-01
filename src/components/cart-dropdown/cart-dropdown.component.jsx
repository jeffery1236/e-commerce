import React from "react";
import { useSelector } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem, id) => (
          <CartItem id={id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Go to cart</CustomButton>
    </div>
  );
};

export default CartDropdown;
