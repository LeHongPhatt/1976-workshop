/** @format */

import {createSlice} from '@reduxjs/toolkit';
import {ELanguage, IAddressState} from 'types';
const addressSlice = createSlice({
  name: 'address',
  initialState: {
    loading: false,
    error: null,
    language: ELanguage.VI,
    city: [],
    district: [],
    ward: [],
    addresses: [],
  } as IAddressState,
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

export const {
  actionRequest,
  getDataSuccess,
  // Requestpassword
} = addressSlice.actions;

export default addressSlice.reducer;
