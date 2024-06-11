/** @format */

import {createSlice} from '@reduxjs/toolkit';
import {ELanguage, IProductState} from 'types';
const initialState = {
  loading: false,
  error: null,
  language: ELanguage.VI,
  category: {},
  products: [],
  product: {},
} as unknown as IProductState;
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    actionRequest: state => {
      return {
        ...state,
        error: null,
        loading: true,
      };
    },
    getDataSuccess: (state, {payload}: {payload: any}) => {
      return {
        ...state,
        error: null,
        loading: false,
        ...payload,
      };
    },
    reset: () => initialState,
  },
});

export const {actionRequest, getDataSuccess, reset} = productSlice.actions;

export default productSlice.reducer;
