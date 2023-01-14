const INIT_STATE = {
  carts: [],
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      // return {
      //   ...state,
      //   carts: [...state.carts, action.payload],
      // };

      //match id from payload and carts //if match item present in cart
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }
    case "REMOVE_CART":
      // return Items that not matches id
      const data = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data,
      };
    case "REMOVE_ONE":
      const itemIndex_dec = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[itemIndex_dec].qnty >= 1) {
        const dltItems = (state.carts[itemIndex_dec].qnty -= 1);
        // console.log([...state.carts, dltItems]);
        return {
          ...state,
          carts: [...state.carts],
        };
      }
      // Remove from cart if item quantity is 1
      else if (state.carts[itemIndex_dec].qnty === 1) {
        const data = state.carts.filter((el) => el.id !== action.payload);
        return {
          ...state,
          carts: data,
        };
      }
    default:
      return state;
  }
};
