// Action for Add to cart
export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

// Remove Items
export const DELETE = (id) => {
  return {
    type: "REMOVE_CART",
    payload: id,
  };
};

// Remove Individual Item
export const REMOVE = (item) => {
  return {
    type: "REMOVE_ONE",
    payload: item,
  };
};
