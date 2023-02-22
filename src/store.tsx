import { configureStore, createSlice } from "@reduxjs/toolkit";

interface Iproduct {
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
  price_id: string;
  quantity: number;
}

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state: any, action: any) => {
      const existingProduct = state.cart.find(
        (product: Iproduct) => product.id === action.payload.id
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
        (product: Iproduct) => product.id === action.payload.id
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
    (total: any, product: Iproduct) => total + product.quantity,
    0
  );
};

const cartValueSelector = (state: any) => {
  return state.cart.reduce(
    (total: any, product: Iproduct) => total + product.price * product.quantity,
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
