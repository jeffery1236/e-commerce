import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceInCents = price * 100;
  const stripePublishableKey = "pk_test_zqzXtpOQ1Ujh6pARadofMABX00AoWAdg0w";

  const onToken = token => {
      console.log(`Stripe token ${token}`)
      alert('Payment Successful')
  }

  return <StripeCheckout
    name='Amuzon Pte Ltd.'
    label='Pay Now'
    description={`Your total is $${price}`}
    ComponentClass='button'
    image='https://sendeyo.com/up/d/f3eb2117da'
    currency='SGD'
    billingAddress
    shippingAddress
    amount={priceInCents}
    token={onToken}
    stripeKey={stripePublishableKey}
  />;
};

export default StripeCheckoutButton;