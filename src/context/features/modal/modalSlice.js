/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  currentCocktail: {},
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    sendCocktail: (state, action) => {
      state.currentCocktail = action.payload;
    },
  },
});
export const { openModal, closeModal, sendCocktail } = modalSlice.actions;
export default modalSlice.reducer;
