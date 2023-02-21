import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state: any, action: any) => {
      const existingProduct = state.cart.find(
        (product: any) => product.id === action.payload.id
      );
      if (existingProduct) {
        // immer makes this immutable
        existingProduct.quantity++;
      } else {
        // immer makes this immutable
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct: (state: any, action: any) => {
      const index = state.cart.findIndex(
        (product: any) => product.id === action.payload.id
      );
      // immer makes this immutable
      state.cart.splice(index, 1);
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

const { addProduct, removeProduct } = cartSlice.actions;

const cartCountSelector = (state: any) => {
  return state.cart.reduce(
    (total: any, product: any) => total + product.quantity,
    0
  );
};

const cartValueSelector = (state: any) => {
  return state.cart.reduce(
    (total: any, product: any) => total + product.price * product.quantity,
    0
  );
};

export {
  store,
  addProduct,
  removeProduct,
  cartCountSelector,
  cartValueSelector,
};
