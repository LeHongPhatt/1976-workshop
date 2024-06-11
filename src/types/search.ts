import {IProductItem} from 'types';
import {IPage} from 'types/app';

export interface ISuggestItem {
  id: number;
  name: string;
}

export interface ISearchState {
  loading: boolean;
  error: string | null;
  language: string;
  tags: ITagItem[];
  suggests: ISuggestItem[];
  products: IProductItem[];
}

export interface ITagItem {
  id: number;
  keyword: string;
}
export interface ISearchParams extends IPage {
  keyword: string;
}
