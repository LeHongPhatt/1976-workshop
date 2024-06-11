import {ICartDetails} from 'types';

export interface InputPasswordParams {
  phone_number: string;
}
export interface ICartOrderParams {
  details: ICartDetails[];
  totalPrice: number;
}
