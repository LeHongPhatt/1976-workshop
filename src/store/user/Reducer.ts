/** @format */

import {createSlice} from '@reduxjs/toolkit';
import {ELanguage, IAppState} from 'types';
const initialState = {
  loading: false,
  error: null,
  language: ELanguage.VI,
  isAuth: false,
  accessToken: null,
  inforUser: {},
  isShowIntro: false,
} as IAppState;
const userSlice = createSlice({
  name: 'app',
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
    reset: () => ({...initialState, isShowIntro: true}),
    saveIsShowIntro: state => {
      return {
        ...state,
        isShowIntro: true,
      };
    },
  },
});

export const {actionRequest, getDataSuccess, reset, saveIsShowIntro} =
  userSlice.actions;

export default userSlice.reducer;
