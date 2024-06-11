/** @format */

import {createSlice} from '@reduxjs/toolkit';
import {ELanguage, ICartState} from 'types';
const initialState = {
  loading: false,
  error: null,
  language: ELanguage.VI,
  cart: {},
} as ICartState;
const cartSlice = createSlice({
  name: 'cart',
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
    resetCart: () => initialState,
  },
});

export const {actionRequest, getDataSuccess, resetCart} = cartSlice.actions;

export default cartSlice.reducer;
