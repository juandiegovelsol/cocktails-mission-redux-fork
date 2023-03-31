import { createSlice } from '@reduxjs/toolkit';
import staticData from '../../MockData/staticData';

const initialState = {
  cocktailItems: staticData,
  isLoading: true,
};
const cocktailSlice = createSlice({
  name: 'cart',
  initialState,
  // falta definir los reducer para este slice
});
// se debe exportar los actions asociados al slice
export default cocktailSlice.reducer;
