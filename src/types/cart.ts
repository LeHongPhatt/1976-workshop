import {IProductItem, IGift} from 'types';
export interface ICartState {
  loading: boolean;
  error: string | null;
  language: string;
  cart: ICart;
}

export interface ICart {
  id: number;
  details: ICartDetails[];
  total_product_price: number;
  image: string;
  total_price: number;
  distance: number;
  delivery_fee: number;
}
export interface ICartDetails {
  id: number;
  quantity: number;
  product: IProductItem;
  gift: IGift;
  product_attribute_name: string;
}
export interface IAddToCartParams {
  product_attribute_name: string;
  product_id: number;
  gift_id: number;
  quantity: number;
}
export interface ICartOrderParams {
  cart_detail_ids: number[];
  user_address_id: number;
  branch_id: number;
}
export interface IUpdateCartParams {
  cart_detail_id: number;
  quantity: number;
}
export interface IDeleteCartParams {
  cart_detail_ids: number[];
}
export interface ICartParams {
  user_address_id?: number;
  branch_id?: number;
}
