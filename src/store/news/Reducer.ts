/** @format */

import {createSlice} from '@reduxjs/toolkit';
import {ELanguage, INewsState} from 'types';
const newsSlice = createSlice({
  name: 'news',
  initialState: {
    loading: false,
    error: null,
    language: ELanguage.VI,
    listAllNews: [],
    detailNews: {},
    listCategoryNews: [],
  } as INewsState,
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

export const {actionRequest, getDataSuccess} = newsSlice.actions;

export default newsSlice.reducer;
