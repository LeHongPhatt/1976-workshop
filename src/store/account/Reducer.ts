/** @format */

import {createSlice} from '@reduxjs/toolkit';
import {ELanguage, IAccountState} from 'types';
const accountSlice = createSlice({
  name: 'account',
  initialState: {
    loading: false,
    error: null,
    language: ELanguage.VI,
  } as IAccountState,
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
} = accountSlice.actions;

export default accountSlice.reducer;
