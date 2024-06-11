/** @format */

import {createSlice} from '@reduxjs/toolkit';
import {ELanguage, IHomeState} from 'types';
const initialState = {
  loading: false,
  error: null,
  language: ELanguage.VI,
  categories: [],
  banners: [],
} as IHomeState;
const homeSlice = createSlice({
  name: 'home',
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
  },
});

export const {actionRequest, getDataSuccess} = homeSlice.actions;

export default homeSlice.reducer;
