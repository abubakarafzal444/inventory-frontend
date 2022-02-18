import React, { useReducer } from "react";
import CartContext from "../context-list";
import { cartReducer } from "../Reducers/CartReducer";

const defaultCartState = {
  totalAmount: 0,
  items: [],
};

// export const CartContextProvider = (props) => {
export const GeneralContextProvider = (props) => {
  //using reducer mentioned in other file for state management of cart
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  //additional functions that can be used inside app
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
    console.log("adding item to cart");
  };

  const removeItemFromCartHandler = (_id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", _id: _id });
  };
  const deleteItemFromCartHandler = (_id) => {
    dispatchCartAction({ type: "DELETE_ITEM", _id: _id });
  };
  const emptyCart = () => {
    dispatchCartAction({ type: "DELETE_CART" });
  };
  //giving object form to send to value of context
  const contextObj = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    deleteItem: deleteItemFromCartHandler,
    emptyCart: emptyCart,
  };
  return (
    <CartContext.Provider value={contextObj}>
      {props.children}
    </CartContext.Provider>
  );
};
