import {IPage} from 'types';

export enum EProductKey {
  PRODUCTS = 'products',
  CATEGORY = 'category',
  PRODUCT = 'product',
}

export interface IProductItem {
  id: number;
  name: string;
  price: number;
  price_after_discount: number;
  discount: number;
  quantity: number;
  tag: string;
  description: string;
  quantity_sold: number;
  rating_point: number;
  user_manual: string;
  guarantee_type: string;
  guarantee_period: number;
  brand_name: string;
  status: boolean;
  images: IImage[];
  attributes: IAttribute[];
  product_price: ProductPrice[];
  keywords: IKeyword[];
  specifications: ISpecification[];
  gifts: IGift[];
  category_detail: CategoryDetail;
}
export interface IGift {
  id: number;
  name: string;
  price: number;
  price_after_discount: number;
  discount: number;
  quantity: number;
  tag: string;
  description: string;
  quantity_sold: number;
  rating_point: number;
  user_manual: any;
  guarantee_type: string;
  guarantee_period: number;
  brand_name: string;
  status: boolean;
  images: IImage[];
}
export interface IAttribute {
  id: number;
  name: string;
  values: IValue[];
}
export interface IValue {
  name: string;
  image?: string;
  active: boolean;
}
export interface ProductPrice {
  id: number;
  attribute_name: string;
  price: number;
  discount: number;
  price_after_discount: number;
  quantity: number;
  active: boolean;
}
export interface IKeyword {
  id: number;
  keyword: string;
}
export interface ISpecification {
  id: number;
  name: string;
  value: string;
}
export interface IImage {
  id: number;
  url: string;
}

export interface CategoryDetail {
  id: number;
  name: string;
  category: ICategory;
}
export interface IProduct {}
export interface ICategory {
  id: number;
  name: string;
  icon: string;
  banner: IImage[];
  ordinal_number: number;
  type: string;
  details?: Detail[];
}
export interface Detail {
  id: number;
  name: string;
  asc?: boolean;
  key?: string;
  type?: string | boolean;
}

export interface IProductState {
  loading: boolean;
  error: string | null;
  language: string;
  category: ICategory;
  products: IProductItem[];
  product: IProductItem;
}
export interface ICategoryParams {
  categoryId: string;
}
export interface IProductParams extends IPage {
  categoryId: number;
}
// export interface IListSort {}
export const listSorts = [
  {id: 1, name: 'Giá bán', key: 'price', type: ''},
  {id: 2, name: 'Bán chạy', key: 'quantity_sold', type: ''},
  {id: 3, name: 'Hàng mới về', key: 'is_new', type: false},
  {id: 4, name: 'Nổi bật', key: 'is_hot', type: false},
];

export interface IVariantProduct {
  productId: number;
  productAttribute: string;
}

export interface IProductPrice {
  price: number;
  price_after_discount: number;
  discount: number;
  quantity: number;
}
