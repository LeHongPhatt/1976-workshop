export interface ICartOrderState {
  loading: boolean;
  error: string | null;
  language: string;
  branchs: IBranch[];
}
export interface IBranch {
  id: number;
  image: string;
  name: string;
  address: string;
  city: string;
  district: string;
  ward: string;
  longitude: number;
  latitude: number;
  distance: number;
}
export interface IPromotion {
  code: string;
  condition_bill: string;
  current_quantity: number;
  end_date: string;
  id: number;
  is_percent: boolean;
  limit_a_day: number;
  limit_customer: number;
  name: string;
  quantity: number;
  start_date: string;
  target_customer_rank: string;
  target_customer_type: string;
  value: number;
}
export interface IOrderCartParams {
  user_address_id: number;
  branch_address_id: number;
  description?: string;
  discount_code?: string;
  details: IDetailOrderCart[];
}
export interface IDetailOrderCart {
  product_attribute_name: string;
  product_id: number;
  gift_id: number;
  quantity: number;
}
