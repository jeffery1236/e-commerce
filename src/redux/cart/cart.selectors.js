import { createSelector } from "reselect";
/*
    Using createSelector allows for memoization -> state will not
    be replaced unless values change ==> performant
*/

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity,
    0
  )
);