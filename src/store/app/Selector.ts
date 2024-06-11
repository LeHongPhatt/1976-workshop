/**
 * @description get data from redux store when perform the user authentication
 */
import {createSelector} from 'reselect';
import {IAppState} from 'types';

const selector = (state: {app: IAppState}) => state.app;

export const getAttrByKey = (k: keyof IAppState) =>
  createSelector(selector, app => app[k]);

export const getError = createSelector(selector, ({error}: IAppState) => error);

export const getCaptcha = createSelector(
  selector,
  ({captcha}: IAppState) => captcha,
);

export const getShowCaptcha = createSelector(
  selector,
  ({showCaptcha}: IAppState) => showCaptcha,
);

export const getLoading = createSelector(
  selector,
  ({loading}: IAppState) => loading,
);

export const getLanguage = createSelector(
  selector,
  ({language}: IAppState) => language,
);

export const getIsAuth = createSelector(
  selector,
  ({isAuth}: IAppState) => isAuth,
);

export const getAuthLoading = createSelector(selector, user => user.loading);

export const getAuthError = createSelector(selector, user => user.error);

export const getAuthUser = createSelector(selector, user => user.user);

export const getToken = createSelector(selector, user => user.token);

export const toggleModaleImageViewer = createSelector(
  selector,
  ({visible}: IAppState) => visible || false,
);

export const toggleModalFile = createSelector(
  selector,
  ({visibleFile}: IAppState) => visibleFile || false,
);
