import {createSlice} from '@reduxjs/toolkit';
import {ELanguage, INotificationState} from 'types';
const initialState = {
  loading: false,
  error: null,
  language: ELanguage.VI,
  noties: [],
} as INotificationState;
const notificationSlice = createSlice({
  name: 'notification',
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

export const {actionRequest, getDataSuccess} = notificationSlice.actions;

export default notificationSlice.reducer;
