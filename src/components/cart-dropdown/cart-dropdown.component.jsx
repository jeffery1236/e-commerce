import React from "react";
import { useSelector } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from '../../redux/cart/cart.selectors'

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem, id) => (
          <CartItem key={id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Go to cart</CustomButton>
    </div>
  );
};

export default CartDropdown;
