/** @format */

import {createSlice} from '@reduxjs/toolkit';
import {ELanguage, IHistoryOrderState} from 'types';
const initialState = {
  loading: false,
  error: null,
  language: ELanguage.VI,
  orders: [],
  order: {},
} as unknown as IHistoryOrderState;
const historyOrderSlice = createSlice({
  name: 'historyOrder',
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

export const {actionRequest, getDataSuccess} = historyOrderSlice.actions;

export default historyOrderSlice.reducer;
