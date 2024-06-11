import {IAddress, TGenderValue} from 'types';
/**
 * @description the interface of user entity
 * @export
 * @interface IUser
 */

export interface IUser {
  id: number;
  phone_number: string;
  name: string;
  birthday: string;
  gender: number;
  image: any;
  current_point: number;
  total_point: number;
  wallet_address: string;
  deleted_at: any;
  addresses: IAddresses[];
  rank: string;
  next_rank: string;
  point_to_get_next_rank: number;
}
export interface IAddresses {
  id: number;
  address_name: string;
  user_name: string;
  user_phone: string;
  address: string;
  city: IAddress;
  district: IAddress;
  ward: IAddress;
  note: string | null;
  longitude: number;
  latitude: number;
  is_default: boolean;
  deleted_at: any;
}
export interface IParamsRequest {
  action: string;
  method: string;
  data: any;
  type: string;
  tid: number;
}

export enum EUserType {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  CHANGE_LANGUAGE = 'CHANGE_LANGUAGE',
  CHANGE_PASSWORD = 'CHANGE_PASSWORD',
  UPDATE_AVATAR = 'UPDATE_AVATAR',
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
  FORGOT_PASSWORD_SCODE = 'FORGOT_PASSWORD_SCODE',
  FORGOT_PASSWORD_SPASSWORD = 'FORGOT_PASSWORD_SPASSWORD',
}

export interface INofifyState {
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
  options: {
    position: {
      vertical: 'top' | 'bottom';
      horizontal: 'left' | 'center' | 'right';
    };
    autoHideDuration: number;
    useI18n: boolean;
  };
}
export type IFormInfoUser = {
  image: string;
  birthday: string;
  name: string;
  gender: string;
  address?: string;
  phone_number: string;
  default_address_id?: number;
};
export type IFormRegisterUser = {
  otp_code: string;
  phone_number: string;
  password: string;
  name: string;
  birthday: string;
  gender: number;
  address: string;
  city: string;
  district: string;
  ward: string;
  image: string;
};
