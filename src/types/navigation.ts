import {IAddresses} from './user';
import {IProductItem} from './../screens/Accessories/Components/ProductItem/ProductItem';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {CompositeScreenProps} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {TPicking, IGift, ICartDetails, IBranch} from 'types';
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
export type RootStackParamList = {
  Login: undefined;
  KYC: {
    phone_number: string;
    otp_code: string;
    password: string;
    otp_type: string;
  };
  InputPassword: {
    phone_number: string;
  };
  Register: {
    phone_number: string;
    otp_code: string;
  };
  OTP: {
    phone_number: string;
  };
  ResetPassword: {
    phone_number: string;
    otp_code: string;
    otp_type: string;
  };
  PickAddress: {
    tabScreen: string;
    setPickAddress: React.Dispatch<React.SetStateAction<TPicking>>;
    pickAddress: TPicking;
  };
  Address: {
    address: TPicking;
    callback: (address: TPicking) => void;
    pickAddress: TPicking & {
      address: string;
    };
  };
  CategoryNews: {
    newsId: string;
    title: string;
  };
  DetailNews: {
    newsId: string;
  };
  Category: {
    categoryId: string;
  };
  ProductDetail: {
    productId: string;
    attributeName: string;
  };
  Product: {
    productId: string;
    attributeName: string;
  };
  OrderPart: {
    details: IOrderPart[];
    totalPrice: number;
  };
  SearchResult: {
    id: string;
    keyword: string;
  };
  BookAddress: {
    callback: (address: TPicking) => void;
    isOrder: boolean;
  };
  DetailAddress: {
    address: IAddresses;
  };
  CartOrder: {
    details: ICartDetails[];
    totalPrice: number;
  };
  Branch: {
    user_latitude: number;
    user_longitude: number;
    callback: (branch: IBranch) => void;
  };
  HistoryOrderDetail: {
    id: number;
  };
};
interface IOrderPart extends IProductItem {
  id: number;
  product_attribute_name: string;
  quantity: number;
  gift: IGift;
}
export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Homepage: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    StackScreenProps<RootStackParamList>
  >;
