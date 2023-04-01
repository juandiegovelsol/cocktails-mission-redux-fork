/* eslint-disable no-param-reassign */

// keep in mind that state mutation is possible,
// only because inside the createSlice function the
// inmutability is handle with the immer librari by default with redux toolkit.
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCocktails } from './cocktailAPI';
// import staticData from '../../MockData/staticData';

const initialState = {
  cocktailItems: [],
  isLoading: true,
};

// get data from API with thunk and a helper function fetchCocktails
export const getCocktailsAsync = createAsyncThunk(
  'cocktails/getCocktails',
  async () => {
    const data = await fetchCocktails();
    return data;
  }
);

const cocktailSlice = createSlice({
  name: 'cart',
  initialState,
  // falta definir los reducer para este slice
  extraReducers: (builder) => {
    builder
      .addCase(getCocktailsAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCocktailsAsync.fulfilled, (state, action) => {
        const cocktailObj = action.payload;
        // console.log('DATA FROM API', cocktailObj);
        state.isLoading = false;
        state.cocktailItems = cocktailObj;
      });
  },
});

export default cocktailSlice.reducer;
