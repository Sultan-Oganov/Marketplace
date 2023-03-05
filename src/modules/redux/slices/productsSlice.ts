import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../types/products';
import { productsAPI } from '../api/productsAPI';

export type SortedItems = 'high-price' | 'low-price' | 'rated';

interface IState {
  products: IProduct[];
}

const initialState: IState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    sortByPrice: (state, action: PayloadAction<SortedItems>) => {
      if (action.payload === 'high-price') {
        state.products.sort((a, b) => b.price - a.price);
      } else if (action.payload === 'low-price') {
        state.products.sort((a, b) => a.price - b.price);
      } else {
        state.products.sort((a, b) => b.rated - a.rated);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(productsAPI.endpoints.getProducts.matchFulfilled, (state, { payload }) => {
      state.products = payload;
    });
  },
});

export const { sortByPrice } = productsSlice.actions;
export default productsSlice.reducer;
