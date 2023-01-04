// Action for Add to cart
export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};
