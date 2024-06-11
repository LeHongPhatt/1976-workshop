export interface IHomeState {
  loading: boolean;
  error: string | null;
  language: string;
  categories: any[];
  banners: IBanner[];
}
export type TCategoryHome = 'sell_product' | 'news' | 'chat' | 'feedback';
export enum ECategoryHome {
  SELL_PRODUCT = 'sell_product',
  NEWS = 'news',
  CHAT = 'chat',
  FEEDBACK = 'feedback',
}
export interface ICategoryHome {
  icon: string;
  id: number;
  name: string;
  ordinal_numer: number;
  type: TCategoryHome;
}

export interface IBanner {
  id: number;
  image: string;
  link: string;
  ordinal_number: number;
}
