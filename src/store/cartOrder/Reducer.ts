import {createSlice} from '@reduxjs/toolkit';
import {ELanguage, ICartOrderState} from 'types';
const cartOrderSlice = createSlice({
  name: 'cartOrder',
  initialState: {
    loading: false,
    error: null,
    language: ELanguage.VI,
    branchs: [],
  } as ICartOrderState,
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

export const {actionRequest, getDataSuccess} = cartOrderSlice.actions;

export default cartOrderSlice.reducer;
