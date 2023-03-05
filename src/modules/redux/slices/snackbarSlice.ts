import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISnackbarSlice {
  isOpen: boolean;
}

const initialState: ISnackbarSlice = {
  isOpen: false,
};

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    openSnackbar: (state) => {
      state.isOpen = true;
    },
    closeSnackbar: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openSnackbar, closeSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
