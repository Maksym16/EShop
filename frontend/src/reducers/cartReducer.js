import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
} from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload
      const existItem = state.cartItems.find((x) => x.product === item)
      if (existItem) {
        return {...state, cartItems: state.cartItems.map((x) => x.product === existItem.product ? item : x)} //
      } else {
        return { ...state, cartItems: [...state.cartItems, item]}; //if item is not in a card already we will add it
      }
    // case CART_REMOVE_ITEM:
    //   return { loading: false, products: action.payload };
    default:
      return state;
  }
};
