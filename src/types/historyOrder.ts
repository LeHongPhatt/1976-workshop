import {IPage} from 'types';
import {IBranch, IPromotion} from './cartOrder';
import {IGift, IProductItem} from './product';
import {IUser} from './user';

export interface IHistoryOrderState {
  loading: boolean;
  error: string | null;
  language: string;
  orders: IHistoryOrder[];
  order: IHistoryOrder;
}
export interface IHistoryOrder {
  id: number;
  description: string;
  total_product_price: number;
  total_price: number;
  distance: number;
  delivery_fee: number;
  order_status: string;
  payment_status: boolean;
  order_code: string;
  discount_id: number;
  created_at: string;
  updated_at: string;
  user_address: UserAddress;
  user: IUser;
  branch_address: IBranch;
  details: Detail[];
  discount: IPromotion;
}
export interface UserAddress {
  id: number;
  address_name: string;
  user_name: string;
  user_phone: string;
  address: string;
  city: string;
  district: string;
  ward: string;
  note: string;
  user_id: number;
  longitude: number;
  latitude: number;
  is_default: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: any;
}
export interface Detail {
  id: number;
  price: number;
  quantity: number;
  product_attribute_name: string;
  created_at: string;
  updated_at: string;
  product: IProductItem;
  gift: IGift;
}
export interface IHistoryOrderParasm extends IPage {
  start_date?: string;
  end_date?: string;
}
