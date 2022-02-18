export const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount = state.totalAmount + action.item.price;

    const alreadyInCartIndex = state.items.findIndex(
      (item) => item._id === action.item._id
    );

    const alreadyInCartItem = state.items[alreadyInCartIndex];

    let updatedItems;

    if (alreadyInCartItem) {
      const updatedItem = {
        ...alreadyInCartItem,
        amount: alreadyInCartItem.amount + 1,
      };
      updatedItems = [...state.items];
      updatedItems[alreadyInCartIndex] = updatedItem;
    } else {
      const recievedItem = { ...action.item, amount: 1 };

      updatedItems = state.items.concat(recievedItem);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const alreadyInCartIndex = state.items.findIndex(
      (item) => item._id === action._id
    );

    const alreadyInCartItem = state.items[alreadyInCartIndex];

    const updatedTotalAmount = state.totalAmount - alreadyInCartItem.price;

    let updatedItems;

    if (alreadyInCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item._id !== action._id);
    } else {
      const updatedItem = {
        ...alreadyInCartItem,
        amount: alreadyInCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[alreadyInCartIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "DELETE_ITEM") {
    const alreadyInCartIndex = state.items.findIndex(
      (item) => item._id === action._id
    );

    const alreadyInCartItem = state.items[alreadyInCartIndex];

    const updatedTotalAmount =
      state.totalAmount - alreadyInCartItem?.price * alreadyInCartItem?.amount;

    let updatedItems;
    updatedItems = state.items.filter((item) => item._id !== action._id);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};
