import React from "react";
//creating context and adding properties for ide completion
//create all contexts here
const CartContext = React.createContext({
  totalAmount: 0,
  items: [],
  addItem: (item) => {},
  removeItem: (_id) => {},
  deleteItem: (_id) => {},
  emptyCart: () => {},
});

export default CartContext;

//
//to use context
// import { useContext } from "react";
// import CartContext from "../context/general-context";
// import React from 'react'
//
// const temp = () => {
//   const ctx=useContext(CartContext);
//   return (
//     <div>temp</div>
//   )
// }
// export default temp
