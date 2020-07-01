import CartActionTypes from './cart.types'

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item,
})

// a payload is not required in this case because the reducer doesnt need it