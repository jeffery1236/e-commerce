import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ history }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {console.log(cartItems.length)}
        {cartItems.length ? (
          cartItems.map((cartItem, id) => <CartItem key={id} item={cartItem} />)
        ) : (
          <span>No items selected</span>
        )}
      </div>
      <Link to="/checkout">
        <CustomButton onClick={() => dispatch(toggleCartHidden())}>Go to cart</CustomButton>
      </Link>
    </div>
  );
};

export default CartDropdown;
