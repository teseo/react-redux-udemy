"use strict"

export function cartReducers(state ={cart:[]}, action) {

  switch (action.type) {
    case "ADD_TO_CART":
      return {cart:[...state, ...action.payload]}
      break;
    case "DELETE_CART_ITEM":
      return {cart:[...state, ...action.payload]}
      break;
    case "UPDATE_CART":
    const currentCartToUpdate = [...state.cart];
    const indexToUpdate = currentCartToUpdate.findIndex(
      function(book) {
        return book._id === action.payload._id
      }
    );
    const newBookToUpdate = {
      ...currentCartToUpdate[indexToUpdate],
      quantity: currentCartToUpdate[indexToUpdate].quantity + action.payload.unit
    }
    let updatedCart = [
      ...currentCartToUpdate.slice(0, indexToUpdate),
      newBookToUpdate,
      ...currentCartToUpdate.slice(indexToUpdate + 1)
    ];

    return {
      ...state,
      cart:updatedCart
    }
      break;
  }
  return state;

}
