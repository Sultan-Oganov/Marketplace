import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistor } from '..';
import { IUserSlice } from '../types/user';

const initialState: IUserSlice = {
  email: null,
  token: null,
  id: null,
  isAuth: false,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Omit<IUserSlice, 'isAuth' | 'isLoading'>>) => {
      state.isAuth = true;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser: (state) => {
      state.isAuth = false;
      state.email = null;
      state.token = null;
      state.id = null;
    },
    toggleIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, removeUser, toggleIsLoading } = userSlice.actions;
export default userSlice.reducer;
