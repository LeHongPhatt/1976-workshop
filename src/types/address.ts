import {SceneRendererProps} from 'react-native-tab-view';
import {IAddresses} from 'types';

export type TAddress = 'city' | 'district' | 'ward';
export enum EAddress {
  CITY = 'city',
  DISTRICT = 'district',
  WARD = 'ward',
}
export interface ITabScreen {
  key: TAddress;
  title: string;
}
export const DataTabScreens: ITabScreen[] = [
  {key: 'city', title: 'Tỉnh, Thành phố'},
  {key: 'district', title: 'Quận, Huyện'},
  {key: 'ward', title: 'Phường, Xã'},
];

export type TPicking = Record<TAddress, IAddressResult>;
export interface IPickAddress {
  jumpTo: SceneRendererProps['jumpTo'];
  setPicking: React.Dispatch<React.SetStateAction<TPicking>>;
  picking: TPicking;
}

export interface IAddressResult {
  Id: string;
  Level?: number;
  Name: string;
}
export interface IAddress {
  id: string;
  level: number;
  name: string;
}

export interface IChangePasswordParams {
  old_password: string;
  new_password: string;
}
export interface IAddressState {
  loading: boolean;
  error: string | null;
  language: string;
  city?: IAddressResult[];
  district?: IAddressResult[];
  ward?: IAddressResult[];
  addresses?: IAddresses[];
}

export interface IAddressParams {
  address_name: string;
  is_default: boolean;
  note: string;
  address: string;
  user_name: string;
  user_phone: string;
  city?: string;
  district?: string;
  ward?: string;
}
export interface IUpdateAddressParams extends IAddressParams {
  addressId: number;
}
