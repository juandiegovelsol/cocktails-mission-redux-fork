import { configureStore } from '@reduxjs/toolkit';
import cocktailReducer from './features/cocktail/cocktailSlice';
import modalReducer from './features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    cocktail: cocktailReducer,
    modal: modalReducer,
  },
});
