import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../types/products';
import { hasAlredy } from '../../../utils/basket';

export interface IProductBasket extends IProduct {
  count: number;
}

const initialState: IProductBasket[] = [];

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      const isAlredyHas = hasAlredy(state, action.payload.id);

      if (isAlredyHas) {
        state = state.map((product) => {
          if (action.payload.id === product.id) {
            return { ...product, count: ++product.count };
          }
          return product;
        });
      } else {
        state.push({ ...action.payload, count: 1 });
      }
    },
    removeProduct: (state, action: PayloadAction<IProduct>) => {
      state.splice(
        state.findIndex(({ id }) => id === action.payload.id),
        1,
      );
    },
    decreaseProduct: (state, action: PayloadAction<IProduct>) => {
      state = state.map((product) => {
        if (action.payload.id === product.id && product.count > 1) {
          return { ...product, count: --product.count };
        }
        return product;
      });
    },
    removeAll: (state) => {
      state.splice(0);
    },
  },
});

export const { addProduct, removeProduct, decreaseProduct, removeAll } = basketSlice.actions;
export default basketSlice.reducer;
