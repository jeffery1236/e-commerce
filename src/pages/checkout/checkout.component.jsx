import React from "react";
import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotalCost,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-checkout-button/stripe-checkout-button.component'

import "./checkout.styles.scss";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const totalCost = useSelector(selectCartTotalCost);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>
          Total: ${totalCost}
      </div>
      <StripeCheckoutButton className='checkout-button' price={totalCost} />
    </div>
  );
};

export default CheckoutPage;
