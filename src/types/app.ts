import {INotificationState} from './notification';
import {IHomeState} from './home';
import {ReactNode} from 'react';
import {
  IAddressState,
  INewsState,
  IUser,
  IAccountState,
  IProductState,
  ISearchState,
  ICartState,
  ICartOrderState,
  IHistoryOrderState,
} from 'types';

/**
 * @description the interface of user authentication entity
 * @export
 * @interface IAppState
 */
export interface IAppState {
  loading: boolean;
  language: string;
  error: string | null;
  isAuth: boolean;
  accessToken?: string | null;
  inforUser?: IUser | null;
  isShowIntro?: boolean;
}

export interface IPayloadHome {
  isObject?: boolean;
  formData?: any; // IParamsRequest;
  redirect?: boolean;
  dataKey?:
    | keyof IAppState
    | keyof IAddressState
    | keyof INewsState
    | keyof IHomeState
    | keyof IAccountState
    | keyof IProductState
    | keyof ISearchState
    | keyof INotificationState
    | keyof ICartState
    | keyof ICartOrderState
    | keyof IHistoryOrderState;
  isPagination?: boolean;
  type?: string | undefined | null;
  endPoint?: string;
  headers?: any;
}

export interface IDataResponse {
  errorCode?: string;
  message?: string;
  result: any[];
}

export interface Metadata {
  page: number;
  limit: number;
  total_items: number;
  total_page: number;
}

export interface IResponse<T = any> {
  status: number;
  data: T;
  code: number;
  success?: boolean;
  errors: {
    field: string;
    message: string;
  }[];
  metadata?: Metadata;
}

export type ICallback = (results: IResponse) => void;

export interface IHomeActionPayload {
  payload: IPayloadHome;
  callback?: ICallback;
}

export enum ELanguage {
  VI = 'vi',
  EN = 'en',
}

/**
 * @description the interface of user login entity
 * @export
 * @interface IFormDataLogin
 */
export interface IFormDataLogin {
  phoneNumber?: string;
  email?: string;
  otpCode?: string;
  typeCheck?: string;
  password?: string;
  rePassword?: string;
  confirmPassword?: string;
}

export interface IFormVerifyOTP {
  phone_number: string;
  otp_type: string;
  otp_code: string;
}

export interface IFormForgotPassword {
  email?: string;
  phone?: string;
  confirmCode?: string;
  captcha: string;
  route?: string;
}

/**
 * @description the interface of request body entity
 * @export
 * @interface IAppState
 */
export interface IPageData<T = any> {
  page: number;
  limit: number;
  query?: T;
}

/**
 * @description the interface of axios response entity
 * @export
 * @interface IAxiosResponse
 */
export interface IAxiosResponse<T = any> {
  status: number;
  message: number;
  payload?: T;
}

export interface IActivityProps {
  animating?: boolean;
  color?: string;
  size?: string | any;
  loading?: boolean;
  backdropColor?: string;
}

export interface IAnimatedProps {
  children?: ReactNode;
  style?: any;
  duration?: number;
  toValue?: number;
  useNativeDriver?: boolean;
  type?: any;
}

export enum EAction {
  SEARCH = 'search',
  PIN = 'pin',
  UNPIN = 'unpin',
  BELLOFF = 'belloff',
  LEAVE = 'leave',
  DONE = 'done',
  PENDING = 'pending',
  RECEVIED = 'recevied',
}

export type TSort = 'DESC' | 'ASC';

export interface IPage {
  limit: number;
  page: number;
  sort?: TSort;
  price?: TSort;
  quantity_sold?: TSort;
  is_sale?: boolean;
  is_new?: boolean;
  is_hot?: boolean;
}
export const EXCHANGE_STATUS = {
  CANCEL: 'canceled',
  RECEIVED: 'received',
  PROCESSING: 'processing',
  SUCCESS: 'success',
  PENDING: 'pending',
  DELIVERING: 'delivering',
};
