/** @format */

import {createSlice} from '@reduxjs/toolkit';
import {ELanguage, ISearchState} from 'types';
const searchSlice = createSlice({
  name: 'search',
  initialState: {
    loading: false,
    error: null,
    language: ELanguage.VI,
    tags: [],
    suggests: [],
    products: [],
  } as ISearchState,
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

export const {actionRequest, getDataSuccess} = searchSlice.actions;

export default searchSlice.reducer;
